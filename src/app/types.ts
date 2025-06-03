// app/types.ts

export type RawReport = {
  usageMap: Record<string, Record<string, number>>;
  importMap: Record<string, Record<string, number>>;
  avgProps: Record<string, number>;
  propsMap: Record<string, Record<string, string[]>>;
  unused: string[];
};

export type Project = {
  id: number;
  name: string;
  repoUrl: string;
  createdAt: string;
};
