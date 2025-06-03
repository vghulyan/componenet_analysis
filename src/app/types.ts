/* Shared types so every component can import from one place */

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
