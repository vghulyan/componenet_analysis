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

// 1) Helper: verify Prisma can actually talk to the database
async function ensurePrisma() {
  try {
    // a minimal no-op query
    await prisma.$queryRaw`SELECT 1`;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new Error(
      "Database unreachable. Have you run `npx prisma migrate dev` and `npx prisma generate`? " +
        msg
    );
  }
}

export async function GET(req: NextRequest) {
  // ——————————— list saved projects ———————————
  if (req.nextUrl.searchParams.get("list") === "true") {
    try {
      await ensurePrisma();
      const projects = await prisma.project.findMany({
        select: { id: true, name: true, repoUrl: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json({ projects });
    } catch (e: unknown) {
      return NextResponse.json(
        { error: (e as Error).message },
        { status: 500 }
      );
    }
  }

  // ——————————— load by projectName (from TMP_ROOT) ———————————
  const projectName = req.nextUrl.searchParams.get("projectName") ?? "";
  let targetDir = SRC_DIR;

  if (projectName) {
    // first ensure the clone exists
    const cloneDir = path.join(TMP_ROOT, projectName);
    if (!fs.existsSync(cloneDir)) {
      return NextResponse.json(
        { error: `No cloned project found: ${projectName}` },
        { status: 404 }
      );
    }
    targetDir = cloneDir;
  }

  // ——————————— scan filesystem ———————————
  let rpt: Report;
  try {
    rpt = generateReport(targetDir);
  } catch (e: unknown) {
    console.error("GET /api/report scan failed:", e);
    return NextResponse.json(
      { error: "Report generation failed on disk scan." },
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
  // ——————————— JSON parse & validate ———————————
  let payload: RepoPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  if (
    typeof payload.repoUrl !== "string" ||
    typeof payload.projectName !== "string"
  ) {
    return NextResponse.json(
      { error: "repoUrl and projectName must both be strings." },
      { status: 400 }
    );
  }

  const repoUrl = payload.repoUrl.trim();
  const projectName = payload.projectName.trim();

  if (!repoUrl.toLowerCase().endsWith(".git") || projectName === "") {
    return NextResponse.json(
      { error: "repoUrl must end in .git and projectName cannot be empty." },
      { status: 400 }
    );
  }

  // ——————————— ensure Prisma up ———————————
  try {
    await ensurePrisma();
  } catch (e: unknown) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }

  // ——————————— clone into tmp_repos ———————————
  const cloneDir = path.join(TMP_ROOT, projectName);
  fs.mkdirSync(TMP_ROOT, { recursive: true });
  if (fs.existsSync(cloneDir)) {
    fs.rmSync(cloneDir, { recursive: true, force: true });
  }

  try {
    execSync(`git clone ${repoUrl} ${cloneDir}`, { stdio: "ignore" });
  } catch (e: unknown) {
    console.error("POST /api/report git clone failed:", e);
    return NextResponse.json(
      { error: "Git clone failed. Is the URL correct?" },
      { status: 500 }
    );
  }

  // ——————————— parse cloned code ———————————
  let rpt: Report;
  try {
    rpt = generateReport(cloneDir);
  } catch (e: unknown) {
    console.error("POST /api/report parse failed:", e);
    return NextResponse.json(
      { error: "Failed to parse cloned project." },
      { status: 500 }
    );
  }

  // ——————————— persist via Prisma ———————————
  try {
    const project = await prisma.project.upsert({
      where: { name: projectName },
      create: { name: projectName, repoUrl },
      update: { repoUrl },
    });

    await prisma.$transaction([
      prisma.componentUsage.deleteMany({ where: { projectId: project.id } }),
      prisma.propUsage.deleteMany({ where: { projectId: project.id } }),
      prisma.unusedComponent.deleteMany({ where: { projectId: project.id } }),

      // insert component usages
      ...Object.entries(rpt.usageMap).flatMap(([component, files]) => {
        const total = Object.values(files).reduce((sum, c) => sum + c, 0);
        return Object.entries(files).map(([file, count]) =>
          prisma.componentUsage.create({
            data: { component, file, count, total, projectId: project.id },
          })
        );
      }),

      // insert prop usages
      ...Object.entries(rpt.propsMap).flatMap(([component, files]) =>
        Object.entries(files).flatMap(([file, propsSet]) =>
          Array.from(propsSet).map((prop) =>
            prisma.propUsage.create({
              data: { component, file, prop, projectId: project.id },
            })
          )
        )
      ),

      // insert unused components
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
    console.error("POST /api/report DB persist failed:", e);
    return NextResponse.json(
      { error: "Failed to persist report to database." },
      { status: 500 }
    );
  }
}
