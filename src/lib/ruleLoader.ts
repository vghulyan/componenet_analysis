/* lib/ruleLoader.ts — full */
import { getDb } from "./db";
import type { Database } from "sql.js";
import type { PrismaClient } from "@prisma/client";

export interface CssRule {
  regex: RegExp;
  package: string;
  component?: string;
}

/** Load rules only for the given projectId */
export async function loadCssRules(projectId: number): Promise<CssRule[]> {
  const { type, db } = await getDb();

  if (type === "sqljs") {
    const res = (db as Database).exec(
      "SELECT pattern, package, component FROM ClassRule WHERE projectId = ?",
      [projectId]
    );
    if (!res.length) return [];
    return res[0].values.map(([p, pkg, comp]) => ({
      regex: new RegExp(String(p)),
      package: String(pkg),
      component: comp ? String(comp) : undefined,
    }));
  }

  /* prisma */
  const rows = await (db as PrismaClient).classRule.findMany({
    where: { projectId },
  });
  return rows.map((r) => ({
    regex: new RegExp(r.pattern),
    package: r.package,
    component: r.component ?? undefined,
  }));
}
