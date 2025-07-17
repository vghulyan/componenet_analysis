/* src/app/api/report/route.ts */
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

import { generateReport, Report } from "@/lib/parser";
import { getDb, saveSqljsDb } from "@/lib/db";
import { safeClone } from "@/lib/safeClone";

import type { Database } from "sql.js";
import type { PrismaClient } from "@prisma/client";

const SRC_DIR = path.join(process.cwd(), "src");
const TMP_ROOT = path.join(process.cwd(), "tmp_repos");

/* ── db ping ── */
async function ensureDb() {
  const { type, db } = await getDb();
  if (type === "sqljs") (db as Database).exec("SELECT 1");
  else await (db as PrismaClient).$queryRaw`SELECT 1`;
}

/* ─────────────────── GET ─────────────────── */
export async function GET(req: NextRequest) {
  const isList = req.nextUrl.searchParams.get("list") === "true";
  const projectName = req.nextUrl.searchParams.get("projectName") || "";
  let projectId = 0;
  let targetDir = SRC_DIR;

  if (isList) {
    await ensureDb();
    const { type, db } = await getDb();

    if (type === "sqljs") {
      const rows = (db as Database).exec(
        "SELECT id,name,repoUrl,createdAt FROM Project ORDER BY createdAt DESC"
      );
      const projects = rows.length
        ? rows[0].values.map(([i, n, u, c]) => ({
            id: i as number,
            name: String(n),
            repoUrl: String(u),
            createdAt: String(c),
          }))
        : [];
      return NextResponse.json({ projects });
    }

    const projects = await (db as PrismaClient).project.findMany({
      select: { id: true, name: true, repoUrl: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ projects });
  }

  /* ------ derive projectId & folder ------ */
  if (projectName) {
    const { type, db } = await getDb();
    if (type === "sqljs") {
      const r = (db as Database).exec("SELECT id FROM Project WHERE name=?", [
        projectName,
      ]);
      projectId = r.length ? (r[0].values[0][0] as number) : 0;
    } else {
      const p = await (db as PrismaClient).project.findUnique({
        where: { name: projectName },
        select: { id: true },
      });
      projectId = p?.id ?? 0;
    }
    const dir = path.join(TMP_ROOT, projectName);
    if (!fs.existsSync(dir))
      return NextResponse.json(
        { error: `No cloned copy found: ${projectName}` },
        { status: 404 }
      );
    targetDir = dir;
  }

  try {
    const rpt = await generateReport(targetDir, projectId);

    const pkgSummary: Record<string, number> = {};
    for (const pkgMap of Object.values(rpt.importMap)) {
      for (const pkg of Object.keys(pkgMap)) {
        pkgSummary[pkg] = (pkgSummary[pkg] ?? 0) + 1;
      }
    }

    const propsSer: Record<string, Record<string, string[]>> = {};
    for (const c of Object.keys(rpt.propsMap))
      for (const f of Object.keys(rpt.propsMap[c])) {
        propsSer[c] ??= {};
        propsSer[c][f] = [...rpt.propsMap[c][f]];
      }

    return NextResponse.json({
      usageMap: rpt.usageMap,
      importMap: rpt.importMap,
      avgProps: rpt.avgProps,
      propsMap: propsSer,
      unused: rpt.unused,
      breakdown: rpt.breakdown,
      packageSummary: pkgSummary,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate report." },
      { status: 500 }
    );
  }
}

/* ─────────────────── POST ─────────────────── */
interface RepoPayload {
  repoUrl?: string;
  projectName?: string;
}

export async function POST(req: NextRequest) {
  const { repoUrl = "", projectName = "" } = (await req.json()) as RepoPayload;
  if (!repoUrl.endsWith(".git") || !projectName)
    return NextResponse.json(
      { error: "Bad repoUrl / projectName" },
      { status: 400 }
    );

  await ensureDb();
  const cloneDir = path.join(TMP_ROOT, projectName);
  fs.mkdirSync(TMP_ROOT, { recursive: true });
  if (fs.existsSync(cloneDir))
    fs.rmSync(cloneDir, { recursive: true, force: true });

  try {
    safeClone(repoUrl, cloneDir);
  } catch {
    return NextResponse.json({ error: "Git clone failed." }, { status: 500 });
  }

  let rpt: Report;
  try {
    rpt = await generateReport(cloneDir, 0);
  } catch {
    return NextResponse.json({ error: "Parse failed." }, { status: 500 });
  }

  /* ---- persist (SQL.js then Prisma) ---- */
  try {
    const { type, db } = await getDb();

    if (type === "sqljs") {
      const sdb = db as Database;
      sdb.run("INSERT OR IGNORE INTO Project(name,repoUrl)VALUES(?,?)", [
        projectName,
        repoUrl,
      ]);
      const pid = sdb.exec("SELECT id FROM Project WHERE name=?", [
        projectName,
      ])[0].values[0][0] as number;

      ["ComponentUsage", "PropUsage", "UnusedComponent"].forEach((tbl) =>
        sdb.run(`DELETE FROM ${tbl} WHERE projectId=?`, [pid])
      );

      for (const [c, files] of Object.entries(rpt.usageMap))
        for (const [f, count] of Object.entries(files))
          sdb.run(
            "INSERT INTO ComponentUsage(component,file,count,total,projectId)VALUES(?,?,?,?,?)",
            [c, f, count, Object.values(files).reduce((s, n) => s + n, 0), pid]
          );

      for (const [c, files] of Object.entries(rpt.propsMap))
        for (const [f, props] of Object.entries(files))
          for (const p of props)
            sdb.run(
              "INSERT INTO PropUsage(component,file,prop,projectId)VALUES(?,?,?,?)",
              [c, f, p, pid]
            );

      for (const u of rpt.unused)
        sdb.run("INSERT INTO UnusedComponent(name,projectId)VALUES(?,?)", [
          u,
          pid,
        ]);

      await saveSqljsDb();
      return NextResponse.json(
        { success: true, projectId: pid },
        { status: 201 }
      );
    }

    /* prisma */
    const prisma = db as PrismaClient;
    const project = await prisma.project.upsert({
      where: { name: projectName },
      create: { name: projectName, repoUrl },
      update: { repoUrl },
    });

    await prisma.$transaction([
      prisma.componentUsage.deleteMany({ where: { projectId: project.id } }),
      prisma.propUsage.deleteMany({ where: { projectId: project.id } }),
      prisma.unusedComponent.deleteMany({ where: { projectId: project.id } }),

      ...Object.entries(rpt.usageMap).flatMap(([c, files]) => {
        const total = Object.values(files).reduce((s, n) => s + n, 0);
        return Object.entries(files).map(([f, count]) =>
          prisma.componentUsage.create({
            data: {
              component: c,
              file: f,
              count,
              total,
              projectId: project.id,
            },
          })
        );
      }),

      ...Object.entries(rpt.propsMap).flatMap(([c, files]) =>
        Object.entries(files).flatMap(([f, props]) =>
          Array.from(props).map((p) =>
            prisma.propUsage.create({
              data: { component: c, file: f, prop: p, projectId: project.id },
            })
          )
        )
      ),

      ...rpt.unused.map((u) =>
        prisma.unusedComponent.create({
          data: { name: u, projectId: project.id },
        })
      ),
    ]);

    return NextResponse.json(
      { success: true, projectId: project.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "DB persist failed." }, { status: 500 });
  }
}

/* ─────────────────── DELETE (unchanged) ─────────────────── */
export async function DELETE(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("projectName") || "";
  if (!name)
    return NextResponse.json(
      { error: "projectName required" },
      { status: 400 }
    );

  await ensureDb();
  const { type, db } = await getDb();

  if (type === "sqljs") {
    const sdb = db as Database;
    ["ComponentUsage", "PropUsage", "UnusedComponent"].forEach((tbl) =>
      sdb.run(
        `DELETE FROM ${tbl} WHERE projectId IN (SELECT id FROM Project WHERE name=?)`,
        [name]
      )
    );
    sdb.run("DELETE FROM Project WHERE name=?", [name]);
    await saveSqljsDb();
  } else {
    const prisma = db as PrismaClient;
    await prisma.$transaction([
      prisma.componentUsage.deleteMany({ where: { project: { name } } }),
      prisma.propUsage.deleteMany({ where: { project: { name } } }),
      prisma.unusedComponent.deleteMany({ where: { project: { name } } }),
      prisma.project.deleteMany({ where: { name } }),
    ]);
  }

  fs.rmSync(path.join(TMP_ROOT, name), { recursive: true, force: true });
  return NextResponse.json({ success: true });
}
