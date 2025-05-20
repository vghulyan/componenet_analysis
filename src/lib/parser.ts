// src/lib/parser.ts
import fs from "fs";
import path from "path";

export type UsageMap = Record<string, Record<string, number>>;
export type PropsMap = Record<string, Record<string, Set<string>>>;
export type ImportMap = Record<string, Record<string, number>>;

export interface Report {
  usageMap: UsageMap;
  propsMap: PropsMap;
  importMap: ImportMap;
  avgProps: Record<string, number>;
  unused: string[];
}

export function generateReport(projectRoot: string): Report {
  const componentRegex = /<([A-Z][\w.-]*)\b([^>]*)>/g;
  const importRegex =
    /import\s+(?:\*\s+as\s+(\w+)|\{([^}]+)\}|(\w+))\s+from\s+['"]([^'"]+)['"]/g;

  const usageMap: UsageMap = {};
  const propsMap: PropsMap = {};
  const importMap: ImportMap = {};
  const propsTotal: Record<string, number> = {};
  const instances: Record<string, number> = {};
  const declared = new Set<string>();

  function walk(dir: string) {
    for (const name of fs.readdirSync(dir)) {
      if (name === "node_modules") continue;
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else if (/\.(js|jsx|ts|tsx)$/.test(name) && !name.endsWith(".min.js")) {
        parseFile(full);
      }
    }
  }

  function parseFile(filePath: string) {
    const rel = path.relative(projectRoot, filePath);
    const text = fs.readFileSync(filePath, "utf8");
    declared.add(path.basename(filePath, path.extname(filePath)));

    // build local import → package map
    const localImports: Record<string, string> = {};
    for (const m of text.matchAll(importRegex)) {
      const [, starAlias, namedList, defaultAlias, pkg] = m;
      if (defaultAlias) localImports[defaultAlias] = pkg;
      if (starAlias) localImports[starAlias] = pkg;
      if (namedList) {
        for (const part of namedList.split(",")) {
          const [orig, alias] = part.split(" as ").map((s) => s.trim());
          localImports[alias || orig] = pkg;
        }
      }
    }

    // scan JSX tags
    for (const m of text.matchAll(componentRegex)) {
      const [, comp, rawAttrs] = m;
      // usage count
      usageMap[comp] = usageMap[comp] || {};
      usageMap[comp][rel] = (usageMap[comp][rel] || 0) + 1;
      // instance + props tally
      instances[comp] = (instances[comp] || 0) + 1;
      const countAttrs = (rawAttrs.match(/(\w+)=/g) || []).length;
      propsTotal[comp] = (propsTotal[comp] || 0) + countAttrs;
      // collect prop names
      propsMap[comp] = propsMap[comp] || {};
      propsMap[comp][rel] = propsMap[comp][rel] || new Set();
      for (const p of rawAttrs.matchAll(/(\w+)=/g)) {
        propsMap[comp][rel].add(p[1]);
      }
      // import‐source breakdown
      const pkg = localImports[comp] || "—";
      importMap[comp] = importMap[comp] || {};
      importMap[comp][pkg] = (importMap[comp][pkg] || 0) + 1;
    }
  }

  walk(projectRoot);

  // compute averages
  const avgProps: Record<string, number> = {};
  for (const comp of Object.keys(instances)) {
    avgProps[comp] = +(propsTotal[comp] / instances[comp] || 0).toFixed(2);
  }

  // unused
  const used = new Set(Object.keys(usageMap));
  const unused = Array.from(declared).filter((x) => !used.has(x));

  return { usageMap, propsMap, importMap, avgProps, unused };
}
