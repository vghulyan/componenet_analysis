/* src/lib/parser.ts */
import fs from "fs";
import path from "path";
import strip from "strip-comments";

import { loadCssRules, CssRule } from "./ruleLoader";
import { zbClassToSdkComponent } from "./zbClassToSdk";

/* ---------- types ---------- */
export type UsageMap = Record<string, Record<string, number>>;
export type PropsMap = Record<string, Record<string, Set<string>>>;
export type ImportMap = Record<string, Record<string, number>>;

export interface Breakdown {
  file: string;
  folder: string;
  packages: Record<string, { lines: number[]; pct: number }>;
}

export interface Report {
  usageMap: UsageMap;
  propsMap: PropsMap;
  importMap: ImportMap;
  avgProps: Record<string, number>;
  unused: string[];
  breakdown: Breakdown[];
}

/* ---------- main ---------- */
export async function generateReport(
  projectRoot: string,
  projectId: number
): Promise<Report> {
  const jsxRe = /<([A-Z][\w.-]*)(\s[^>]*)?>/g;
  const importRe =
    /import\s+(?:\*\s+as\s+(\w+)|\{([^}]+)\}|(\w+))\s+from\s+['"]([^'"]+)['"]/g;
  const classAttr = /class(Name)?=["'{]([^"'}]+)["'}]/;

  const cssRules: CssRule[] = await loadCssRules(projectId);

  const usageMap: UsageMap = {};
  const propsMap: PropsMap = {};
  const importMap: ImportMap = {};
  const propsTotal: Record<string, number> = {};
  const instCount: Record<string, number> = {};
  const declared = new Set<string>();

  /* per-file package line-hits */
  const filePkgLines: Record<string, Record<string, Set<number>>> = {};

  const addPkgLine = (file: string, pkg: string, line: number) => {
    filePkgLines[file] ??= {};
    filePkgLines[file][pkg] ??= new Set();
    filePkgLines[file][pkg].add(line);
  };

  const isTestFile = (name: string) =>
    /\.(spec|test|stories|mock)\.[jt]sx?$/.test(name);

  function walk(dir: string) {
    for (const name of fs.readdirSync(dir)) {
      if (name === "node_modules") continue;
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else if (/\.(js|jsx|ts|tsx)$/.test(name) && !isTestFile(name))
        parseFile(full);
    }
  }

  function parseFile(filePath: string) {
    const rel = path.relative(projectRoot, filePath).replace(/\\/g, "/");
    const text = strip(fs.readFileSync(filePath, "utf8"));
    const lines = text.split(/\r?\n/);

    declared.add(path.basename(filePath, path.extname(filePath)));

    /* build map: local identifier → package */
    const localImports: Record<string, string> = {};
    for (const m of text.matchAll(importRe)) {
      const [, starAlias, namedList, defaultAlias, pkg] = m;
      if (defaultAlias) localImports[defaultAlias] = pkg;
      if (starAlias) localImports[starAlias] = pkg;
      if (namedList)
        for (const part of namedList.split(","))
          localImports[(part.split(" as ")[1] || part).trim()] = pkg;
    }

    /* line-by-line scan for speed and line numbers */
    lines.forEach((line, idx) => {
      const ln = idx + 1;

      /* jsx tag hits */
      jsxRe.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = jsxRe.exec(line))) {
        const [, comp, rawAttrs = ""] = m!;
        const pkg = localImports[comp] || "local";

        if (/^[a-z]/.test(comp) && pkg === "local") continue;

        addPkgLine(rel, pkg, ln);

        /* counts */
        usageMap[comp] ??= {};
        usageMap[comp][rel] = (usageMap[comp][rel] || 0) + 1;
        instCount[comp] = (instCount[comp] || 0) + 1;

        const propCnt = (rawAttrs.match(/(\w+)=/g) || []).length;
        propsTotal[comp] = (propsTotal[comp] || 0) + propCnt;
        propsMap[comp] ??= {};
        propsMap[comp][rel] ??= new Set();
        for (const p of rawAttrs.matchAll(/(\w+)=/g))
          propsMap[comp][rel].add(p[1]);

        importMap[comp] ??= {};
        importMap[comp][pkg] = (importMap[comp][pkg] || 0) + 1;
      }

      /* css class hits */
      const cls = line.match(classAttr);
      if (cls) {
        for (const token of cls[2].split(/\s+/)) {
          const rule = cssRules.find((r) => r.regex.test(token));
          if (rule) {
            addPkgLine(rel, rule.package, ln);
            continue; // rule-based hit – we're done
          }

          /* --- NEW: auto “zb-” -> SDKClass* component --- */
          const sdkComp = zbClassToSdkComponent(token);
          if (sdkComp) {
            // treat as a local “component” that belongs to package "sdk"
            usageMap[sdkComp] ??= {};
            usageMap[sdkComp][rel] = (usageMap[sdkComp][rel] || 0) + 1;

            importMap[sdkComp] ??= {};
            importMap[sdkComp]["sdk"] = (importMap[sdkComp]["sdk"] || 0) + 1;

            addPkgLine(rel, "sdk", ln);
          }
        }
      }
    });
  }

  walk(projectRoot);

  /* averages */
  const avgProps: Record<string, number> = {};
  for (const c of Object.keys(instCount))
    avgProps[c] = +(propsTotal[c] / instCount[c]).toFixed(2);

  const unused = Array.from(declared).filter((x) => !(x in usageMap));

  /* breakdown */
  const breakdown: Breakdown[] = Object.entries(filePkgLines).map(
    ([file, pkgs]) => {
      const total = Object.values(pkgs).reduce((s, set) => s + set.size, 0);
      const packages: Breakdown["packages"] = {};
      for (const [pkg, set] of Object.entries(pkgs))
        packages[pkg] = {
          lines: Array.from(set).sort((a, b) => a - b),
          pct: Math.round((set.size * 100) / total),
        };
      return { file, folder: path.dirname(file), packages };
    }
  );

  return { usageMap, propsMap, importMap, avgProps, unused, breakdown };
}
