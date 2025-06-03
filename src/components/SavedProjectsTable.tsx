"use client";
import { Project } from "@/app/types";

type Props = {
  projects: Project[];
  selected: string;
  loading: boolean;
  onLoad: (name: string) => void;
};

export default function SavedProjectsTable({
  projects,
  selected,
  loading,
  onLoad,
}: Props) {
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td className="small-text">{p.repoUrl}</td>
              <td>{new Date(p.createdAt).toLocaleString()}</td>
              <td>
                <button
                  className="btn-load"
                  disabled={loading && selected === p.name}
                  onClick={() => onLoad(p.name)}
                >
                  {loading && selected === p.name ? "Loading…" : "Load"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
