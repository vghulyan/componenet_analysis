/* api/report/class-rule/route.ts */
import { NextRequest, NextResponse } from "next/server";
import { getDb, saveSqljsDb } from "@/lib/db";
import type { Database } from "sql.js";
import type { PrismaClient } from "@prisma/client";

const bad = (msg: string, code = 400) =>
  NextResponse.json({ error: msg }, { status: code });

/* ---------- GET list ---------- */
export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("projectName");
  if (!name) return bad("projectName required");

  const { type, db } = await getDb();
  let rows;

  if (type === "sqljs") {
    const res = (db as Database).exec(
      `SELECT r.id, r.pattern, r.package, r.component
         FROM ClassRule r
         JOIN Project p ON p.id = r.projectId
        WHERE p.name = ?`,
      [name]
    );
    rows =
      res[0]?.values.map(([id, pattern, pkg, comp]) => ({
        id: Number(id),
        pattern: String(pattern),
        package: String(pkg),
        component: comp ? String(comp) : undefined,
      })) ?? [];
  } else {
    rows = await (db as PrismaClient).classRule.findMany({
      where: { project: { name } },
      select: { id: true, pattern: true, package: true, component: true },
    });
  }

  return NextResponse.json({ rules: rows });
}

/* ---------- PUT create ---------- */
export async function PUT(req: NextRequest) {
  const { pattern, pkg, projectName, component } = await req.json();
  if (!pattern || !pkg || !projectName) return bad("pattern, pkg, projectName");

  const { type, db } = await getDb();

  const projectId =
    type === "sqljs"
      ? (db as Database).exec("SELECT id FROM Project WHERE name=?", [
          projectName,
        ])[0]?.values?.[0]?.[0]
      : (
          await (db as PrismaClient).project.findUnique({
            where: { name: projectName },
            select: { id: true },
          })
        )?.id;
  if (!projectId) return bad("project not found", 404);

  if (type === "sqljs") {
    (db as Database).run(
      "INSERT INTO ClassRule(pattern,package,component,projectId) VALUES(?,?,?,?)",
      [pattern, pkg, component ?? null, projectId]
    );
    await saveSqljsDb();
  } else {
    await (db as PrismaClient).classRule.create({
      data: {
        pattern,
        package: pkg,
        component: component ?? null,
        projectId: projectId as number,
      },
    });
  }
  return NextResponse.json({ ok: true });
}

/* ---------- DELETE one ---------- */
export async function DELETE(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("id"));
  if (!id) return bad("id required");

  const { type, db } = await getDb();
  if (type === "sqljs") {
    (db as Database).run("DELETE FROM ClassRule WHERE id=?", [id]);
    await saveSqljsDb();
  } else {
    await (db as PrismaClient).classRule.delete({ where: { id } });
  }
  return NextResponse.json({ ok: true });
}
