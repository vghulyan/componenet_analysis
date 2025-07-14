/* src/app/api/report/class-rule/route.ts */
import { NextRequest, NextResponse } from "next/server";
import { getDb, saveSqljsDb } from "@/lib/db";
import type { Database } from "sql.js";
import type { PrismaClient } from "@prisma/client";

const bad = (m: string, code = 400) =>
  NextResponse.json({ error: m }, { status: code });

/* ---------- GET list ---------- */
export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("projectName");
  if (!name) return bad("projectName required");

  const { type, db } = await getDb();
  const rows =
    type === "sqljs"
      ? (db as Database).exec(
          `SELECT r.id,r.pattern,r.package
             FROM ClassRule r
             JOIN Project p ON p.id=r.projectId
            WHERE p.name=?`,
          [name]
        )[0]?.values ?? []
      : await (db as PrismaClient).classRule.findMany({
          where: { project: { name } },
          select: { id: true, pattern: true, package: true },
        });

  return NextResponse.json({ rules: rows });
}

/* ---------- PUT create ---------- */
export async function PUT(req: NextRequest) {
  const { pattern, pkg, projectName } = await req.json();
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
      "INSERT INTO ClassRule(pattern,package,projectId)VALUES(?,?,?)",
      [pattern, pkg, projectId]
    );
    await saveSqljsDb();
  } else {
    await (db as PrismaClient).classRule.create({
      data: { pattern, package: pkg, projectId: projectId as number },
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
