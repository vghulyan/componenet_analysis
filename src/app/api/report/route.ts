import fs from "fs";
import path from "path";
import { NextResponse, NextRequest } from "next/server";
import { generateReport, Report } from "@/lib/parser";
import { getDb, saveSqljsDb } from "@/lib/db";
import type { PrismaClient } from "@prisma/client";
import type { Database } from "sql.js";
import { safeClone } from "@/lib/safeClone";

const SRC_DIR = path.join(process.cwd(), "src");
const TMP_ROOT = path.join(process.cwd(), "tmp_repos");

interface RepoPayload {
  repoUrl?: unknown;
  projectName?: unknown;
}

interface ProjectRow {
  id: number;
  name: string;
  repoUrl: string;
  createdAt: string;
}

async function ensureDbConnection() {
  const { type, db } = await getDb();
  if (type === "sqljs") {
    (db as Database).exec("SELECT 1");
  } else {
    await (db as PrismaClient).$queryRaw`SELECT 1`;
  }
}

export async function GET(req: NextRequest) {
  const isList = req.nextUrl.searchParams.get("list") === "true";
  const projectName = req.nextUrl.searchParams.get("projectName") || "";
  let targetDir = SRC_DIR;

  if (isList) {
    try {
      await ensureDbConnection();
      const { type, db } = await getDb();

      if (type === "sqljs") {
        const result = (db as Database).exec(
          "SELECT id, name, repoUrl, createdAt FROM Project ORDER BY createdAt DESC"
        );

        const projects: ProjectRow[] = result.length
          ? result[0].values.map((row) => {
              const [id, name, repoUrl, createdAt] = row as [
                number,
                string,
                string,
                string
              ];
              return { id, name, repoUrl, createdAt };
            })
          : [];

        return NextResponse.json({ projects });
      } else {
        const projects = await (db as PrismaClient).project.findMany({
          select: { id: true, name: true, repoUrl: true, createdAt: true },
          orderBy: { createdAt: "desc" },
        });
        return NextResponse.json({ projects });
      }
    } catch (e) {
      return NextResponse.json(
        { error: e instanceof Error ? e.message : String(e) },
        { status: 500 }
      );
    }
  }

  if (projectName) {
    const cloneDir = path.join(TMP_ROOT, projectName);
    if (!fs.existsSync(cloneDir)) {
      return NextResponse.json(
        { error: `No cloned copy found: ${projectName}` },
        { status: 404 }
      );
    }
    targetDir = cloneDir;
  }

  try {
    const rpt = generateReport(targetDir);
    const serProps: Record<string, Record<string, string[]>> = {};
    for (const comp of Object.keys(rpt.propsMap)) {
      serProps[comp] = {};
      for (const file of Object.keys(rpt.propsMap[comp])) {
        serProps[comp][file] = Array.from(rpt.propsMap[comp][file]);
      }
    }

    return NextResponse.json({
      usageMap: rpt.usageMap,
      importMap: rpt.importMap,
      avgProps: rpt.avgProps,
      propsMap: serProps,
      unused: rpt.unused,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to generate report from disk." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  let payload: RepoPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const repoUrl = (payload.repoUrl as string)?.trim();
  const projectName = (payload.projectName as string)?.trim();

  if (!repoUrl?.endsWith(".git") || !projectName) {
    return NextResponse.json(
      { error: "repoUrl must end in .git and projectName cannot be blank." },
      { status: 400 }
    );
  }

  try {
    await ensureDbConnection();
  } catch {
    return NextResponse.json(
      { error: "Failed to connect to DB." },
      { status: 500 }
    );
  }

  const cloneDir = path.join(TMP_ROOT, projectName);
  fs.mkdirSync(TMP_ROOT, { recursive: true });
  if (fs.existsSync(cloneDir)) {
    fs.rmSync(cloneDir, { recursive: true, force: true });
  }

  try {
    safeClone(repoUrl, cloneDir); // ← NEW
  } catch (e) {
    console.error("Git clone failed:", (e as Error).message);
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }

  let rpt: Report;
  try {
    rpt = generateReport(cloneDir);
  } catch {
    return NextResponse.json(
      { error: "Failed to parse cloned project." },
      { status: 500 }
    );
  }

  try {
    const { type, db } = await getDb();

    if (type === "sqljs") {
      const sqlDb = db as Database;

      sqlDb.run("INSERT OR IGNORE INTO Project (name, repoUrl) VALUES (?, ?)", [
        projectName,
        repoUrl,
      ]);
      const result = sqlDb.exec("SELECT id FROM Project WHERE name = ?", [
        projectName,
      ]);
      const projectId = result[0].values[0][0] as number;

      sqlDb.run("DELETE FROM ComponentUsage WHERE projectId = ?", [projectId]);
      sqlDb.run("DELETE FROM PropUsage WHERE projectId = ?", [projectId]);
      sqlDb.run("DELETE FROM UnusedComponent WHERE projectId = ?", [projectId]);

      for (const [component, files] of Object.entries(rpt.usageMap)) {
        const total = Object.values(files).reduce(
          (sum, count) => sum + count,
          0
        );
        for (const [file, count] of Object.entries(files)) {
          sqlDb.run(
            "INSERT INTO ComponentUsage (component, file, count, total, projectId) VALUES (?, ?, ?, ?, ?)",
            [component, file, count, total, projectId]
          );
        }
      }

      for (const [component, files] of Object.entries(rpt.propsMap)) {
        for (const [file, propsSet] of Object.entries(files)) {
          for (const prop of propsSet) {
            sqlDb.run(
              "INSERT INTO PropUsage (component, file, prop, projectId) VALUES (?, ?, ?, ?)",
              [component, file, prop, projectId]
            );
          }
        }
      }

      for (const name of rpt.unused) {
        sqlDb.run(
          "INSERT INTO UnusedComponent (name, projectId) VALUES (?, ?)",
          [name, projectId]
        );
      }

      await saveSqljsDb();
      return NextResponse.json({ success: true, projectId }, { status: 201 });
    } else {
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
        ...Object.entries(rpt.usageMap).flatMap(([component, files]) => {
          const total = Object.values(files).reduce((s, c) => s + c, 0);
          return Object.entries(files).map(([file, count]) =>
            prisma.componentUsage.create({
              data: { component, file, count, total, projectId: project.id },
            })
          );
        }),
        ...Object.entries(rpt.propsMap).flatMap(([component, files]) =>
          Object.entries(files).flatMap(([file, propsSet]) =>
            Array.from(propsSet).map((prop) =>
              prisma.propUsage.create({
                data: { component, file, prop, projectId: project.id },
              })
            )
          )
        ),
        ...rpt.unused.map((name) =>
          prisma.unusedComponent.create({
            data: { name, projectId: project.id },
          })
        ),
      ]);

      return NextResponse.json(
        { success: true, projectId: project.id },
        { status: 201 }
      );
    }
  } catch (e) {
    console.error("DB persist failed:", e);
    return NextResponse.json(
      { error: "Failed to persist report to database." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("projectName") || "";
  if (!name) {
    return NextResponse.json(
      { error: "projectName required" },
      { status: 400 }
    );
  }

  try {
    await ensureDbConnection();
    const { type, db } = await getDb();

    if (type === "sqljs") {
      const sqlDb = db as Database;
      // cascade deletes
      sqlDb.run(
        "DELETE FROM ComponentUsage WHERE projectId IN (SELECT id FROM Project WHERE name = ?)",
        [name]
      );
      sqlDb.run(
        "DELETE FROM PropUsage      WHERE projectId IN (SELECT id FROM Project WHERE name = ?)",
        [name]
      );
      sqlDb.run(
        "DELETE FROM UnusedComponent WHERE projectId IN (SELECT id FROM Project WHERE name = ?)",
        [name]
      );
      sqlDb.run("DELETE FROM Project WHERE name = ?", [name]);
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

    // wipe cloned repo if it exists
    const dir = path.join(TMP_ROOT, name);
    fs.rmSync(dir, { recursive: true, force: true });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}
