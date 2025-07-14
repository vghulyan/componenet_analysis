/* lib/ruleLoader.ts */
import { getDb } from "./db";
import type { Database } from "sql.js";
import type { PrismaClient } from "@prisma/client";

/** A compiled rule the parser can consume */
export interface CssRule {
  regex: RegExp;
  package: string;
  component?: string;
}

/** Row shape returned from the database (Prisma & SQL.js) */
interface DbRule {
  pattern: string;
  package: string; // yes, “package” is allowed as a property name
  component: string | null;
}

/** Load rules that belong to a specific project */
export async function loadCssRules(projectId: number): Promise<CssRule[]> {
  const { type, db } = await getDb();

  /* ---------- sql.js path ---------- */
  if (type === "sqljs") {
    const res = (db as Database).exec(
      "SELECT pattern, package, component FROM ClassRule WHERE projectId = ?",
      [projectId]
    );

    const rows: DbRule[] = res.length
      ? res[0].values.map(
          ([pattern, pkg, component]) =>
            ({
              pattern: String(pattern),
              package: String(pkg),
              component: component ? String(component) : null,
            } as DbRule)
        )
      : [];

    return rows.map(toCssRule);
  }

  /* ---------- Prisma path ---------- */
  const rows: DbRule[] = await (db as PrismaClient).classRule.findMany({
    where: { projectId },
    select: { pattern: true, package: true, component: true },
  });

  return rows.map(toCssRule);
}

/* helper: convert a DB row to the shape the parser expects */
function toCssRule({ pattern, package: pkg, component }: DbRule): CssRule {
  return {
    regex: new RegExp(pattern),
    package: pkg,
    component: component ?? undefined,
  };
}
