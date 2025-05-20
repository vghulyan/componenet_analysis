// src/app/api/report/route.ts
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { NextResponse, NextRequest } from "next/server";
import { generateReport, Report } from "@/lib/parser";
import { prisma } from "@/lib/prisma";

const SRC_DIR = path.join(process.cwd(), "src");
const TMP_ROOT = path.join(process.cwd(), "tmp_repos");

type SerializedReport = Omit<Report, "propsMap"> & {
  propsMap: Record<string, Record<string, string[]>>;
};

interface RepoPayload {
  repoUrl?: unknown;
  projectName?: unknown;
}

export async function GET(req: NextRequest) {
  // If ?list=true, return just the list of projects
  if (req.nextUrl.searchParams.get("list") === "true") {
    const projects = await prisma.project.findMany({
      select: { id: true, name: true, repoUrl: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ projects });
  }

  // Otherwise behave as before: report from disk
  const projectName = req.nextUrl.searchParams.get("projectName") ?? "";
  let targetDir = SRC_DIR;
  if (projectName) {
    const cloneDir = path.join(TMP_ROOT, projectName);
    if (!fs.existsSync(cloneDir)) {
      return NextResponse.json({ error: "Clone not found" }, { status: 404 });
    }
    targetDir = cloneDir;
  }

  let rpt: Report;
  try {
    rpt = generateReport(targetDir);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Report generation failed" },
      { status: 500 }
    );
  }

  // serialize propsMap
  const serProps: SerializedReport["propsMap"] = {};
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
}

export async function POST(req: NextRequest) {
  let body: RepoPayload;
  try {
    body = (await req.json()) as RepoPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  if (
    typeof body.repoUrl !== "string" ||
    typeof body.projectName !== "string"
  ) {
    return NextResponse.json(
      { error: "repoUrl and projectName must be strings." },
      { status: 400 }
    );
  }
  const repoUrl = body.repoUrl.trim();
  const projectName = body.projectName.trim();
  if (!repoUrl.toLowerCase().endsWith(".git") || !projectName) {
    return NextResponse.json(
      { error: "repoUrl must end .git and projectName is required." },
      { status: 400 }
    );
  }

  const cloneDir = path.join(TMP_ROOT, projectName);
  fs.mkdirSync(TMP_ROOT, { recursive: true });
  if (fs.existsSync(cloneDir))
    fs.rmSync(cloneDir, { recursive: true, force: true });

  try {
    execSync(`git clone ${repoUrl} ${cloneDir}`, { stdio: "ignore" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Git clone failed." }, { status: 500 });
  }

  let rpt: Report;
  try {
    rpt = generateReport(cloneDir);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Parsing clone failed." },
      { status: 500 }
    );
  }

  const project = await prisma.project.upsert({
    where: { name: projectName },
    create: { name: projectName, repoUrl },
    update: { repoUrl },
  });

  await prisma.$transaction([
    prisma.componentUsage.deleteMany({ where: { projectId: project.id } }),
    prisma.propUsage.deleteMany({ where: { projectId: project.id } }),
    prisma.unusedComponent.deleteMany({ where: { projectId: project.id } }),
  ]);

  const compCreates = Object.entries(rpt.usageMap).flatMap(([comp, files]) => {
    const total = Object.values(files).reduce((sum, c) => sum + c, 0);
    return Object.entries(files).map(([file, count]) =>
      prisma.componentUsage.create({
        data: { component: comp, file, count, total, projectId: project.id },
      })
    );
  });
  const propCreates = Object.entries(rpt.propsMap).flatMap(([comp, files]) =>
    Object.entries(files).flatMap(([file, setP]) =>
      Array.from(setP).map((prop) =>
        prisma.propUsage.create({
          data: { component: comp, file, prop, projectId: project.id },
        })
      )
    )
  );
  const unusedCreates = rpt.unused.map((name) =>
    prisma.unusedComponent.create({
      data: { name, projectId: project.id },
    })
  );

  await prisma.$transaction([...compCreates, ...propCreates, ...unusedCreates]);

  return NextResponse.json(
    { success: true, projectId: project.id },
    { status: 201 }
  );
}
