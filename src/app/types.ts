// app/types.ts

export type RawReport = {
  usageMap: Record<string, Record<string, number>>;
  importMap: Record<string, Record<string, number>>;
  avgProps: Record<string, number>;
  propsMap: Record<string, Record<string, string[]>>;
  unused: string[];
  packageSummary: PackageSummary;
};

export type Project = {
  id: number;
  name: string;
  repoUrl: string;
  createdAt: string;
};

export interface BreakdownRow {
  file: string;
  folder: string;
  packages: Record<string, { pct: number; lines: number[] }>;
}

export interface PackageSummary {
  [pkg: string]: number; // “react” ⇒ 12 components
}
