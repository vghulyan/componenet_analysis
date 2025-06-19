// components/SavedProjectsTable.tsx
"use client";

import { Project } from "@/app/types";

type SavedProjectsTableProps = {
  projects: Project[];
  selected: string;
  loading: boolean;
  onLoad: (projectName: string) => void;
  onDelete: (name: string) => void;
};

export default function SavedProjectsTable({
  projects,
  selected,
  loading,
  onLoad,
  onDelete,
}: SavedProjectsTableProps) {
  if (projects.length === 0) return null;

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Saved Projects</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Repo URL</th>
            <th>Created</th>
            <th style={{ width: 120 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className={p.name === selected ? "highlight" : ""}>
              <td>{p.name}</td>
              <td className="small-text">{p.repoUrl}</td>
              <td>{new Date(p.createdAt).toLocaleString()}</td>
              <td style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  className="btn-load"
                  disabled={loading && selected === p.name}
                  onClick={() => onLoad(p.name)}
                >
                  {loading && selected === p.name ? "Loading…" : "Load"}
                </button>
                <button
                  onClick={() => onDelete(p.name)}
                  className="danger"
                  disabled={loading}
                  title="Delete project"
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
