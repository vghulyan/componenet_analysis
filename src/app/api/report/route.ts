import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { NextResponse, NextRequest } from "next/server";
import { generateReport, Report } from "@/lib/parser";
import { getPrisma } from "@/lib/prisma";

const SRC_DIR = path.join(process.cwd(), "src");
const TMP_ROOT = path.join(process.cwd(), "tmp_repos");

type SerializedReport = Omit<Report, "propsMap"> & {
  propsMap: Record<string, Record<string, string[]>>;
};

interface RepoPayload {
  repoUrl?: unknown;
  projectName?: unknown;
}

// Helper to verify DB is reachable
async function ensurePrisma() {
  const prisma = getPrisma();
  // no-op query to test connection
  await prisma.$queryRaw`SELECT 1`;
}

export async function GET(req: NextRequest) {
  // LIST MODE?  /api/report?list=true
  if (req.nextUrl.searchParams.get("list") === "true") {
    try {
      await ensurePrisma();
      const prisma = getPrisma();
      const projects = await prisma.project.findMany({
        select: { id: true, name: true, repoUrl: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json({ projects });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      return NextResponse.json({ error: msg }, { status: 500 });
    }
  }

  // NORMAL REPORT MODE
  const projectName = req.nextUrl.searchParams.get("projectName") || "";
  let targetDir = SRC_DIR;

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

  let rpt: Report;
  try {
    rpt = generateReport(targetDir);
  } catch {
    return NextResponse.json(
      { error: "Failed to generate report from disk." },
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
  // parse + validate JSON
  let payload: RepoPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  if (
    typeof payload.repoUrl !== "string" ||
    typeof payload.projectName !== "string"
  ) {
    return NextResponse.json(
      { error: "Both repoUrl and projectName must be strings." },
      { status: 400 }
    );
  }
  const repoUrl = payload.repoUrl.trim();
  const projectName = payload.projectName.trim();

  if (!repoUrl.endsWith(".git") || projectName === "") {
    return NextResponse.json(
      { error: "repoUrl must end in .git and projectName cannot be blank." },
      { status: 400 }
    );
  }

  // ensure DB is up
  try {
    await ensurePrisma();
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  // clone into tmp_repos
  const cloneDir = path.join(TMP_ROOT, projectName);
  fs.mkdirSync(TMP_ROOT, { recursive: true });
  if (fs.existsSync(cloneDir)) {
    fs.rmSync(cloneDir, { recursive: true, force: true });
  }

  try {
    execSync(`git clone ${repoUrl} ${cloneDir}`, { stdio: "ignore" });
  } catch {
    return NextResponse.json(
      { error: "Git clone failed. Check the URL?" },
      { status: 500 }
    );
  }

  // parse cloned code
  let rpt: Report;
  try {
    rpt = generateReport(cloneDir);
  } catch {
    return NextResponse.json(
      { error: "Failed to parse cloned project." },
      { status: 500 }
    );
  }

  // upsert + clear old, then bulk insert
  try {
    const prisma = getPrisma();
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
  } catch (e: unknown) {
    console.error("DB persist failed:", e);
    return NextResponse.json(
      { error: "Failed to persist report to database." },
      { status: 500 }
    );
  }
}
