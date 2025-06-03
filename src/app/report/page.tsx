"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import UsagePieChart from "@/components/UsagePieChart";

type RawReport = {
  usageMap: Record<string, Record<string, number>>;
  importMap: Record<string, Record<string, number>>;
  avgProps: Record<string, number>;
  propsMap: Record<string, Record<string, string[]>>;
  unused: string[];
};
type Project = {
  id: number;
  name: string;
  repoUrl: string;
  createdAt: string;
};

export default function ReportPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [rpt, setRpt] = useState<RawReport | null>(null);
  const [repoUrl, setRepoUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "avgProps">("name");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  async function fetchProjects() {
    try {
      const res = await fetch("/api/report?list=true");
      const { projects: list } = (await res.json()) as { projects: Project[] };
      setProjects(list);
    } catch (e) {
      console.error(e);
      setMessage("❌ Failed to load saved projects");
    }
  }

  async function fetchReport(name?: string) {
    setLoading(true);
    setMessage(null);
    try {
      const q = name ? `?projectName=${encodeURIComponent(name)}` : "";
      const res = await fetch(`/api/report${q}`);
      const body = (await res.json()) as Partial<RawReport> & {
        error?: string;
      };

      if (!res.ok) {
        setMessage(`❌ ${body.error || "Unknown server error"}`);
        setRpt(null);
      } else {
        setRpt(body as RawReport);
        setSelected(name ?? "");
      }
    } catch (err) {
      console.error(err);
      setMessage(
        `❌ Network error: ${err instanceof Error ? err.message : err}`
      );
      setRpt(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleGenerate() {
    setMessage(null);
    if (!repoUrl.toLowerCase().endsWith(".git") || !projectName) {
      setMessage("❌ Enter a valid .git URL and project name");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl, projectName }),
      });
      const body = await res.json();
      if (!res.ok) {
        setMessage(`❌ ${body.error}`);
      } else {
        setMessage(`✅ "${projectName}" saved`);
        await fetchProjects();
        await fetchReport(projectName);
      }
    } catch (e) {
      console.error(e);
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects().then(() => fetchReport());
  }, []);

  const sortedComponents = rpt
    ? Object.keys(rpt.usageMap).sort((a, b) => {
        const aVal = sortBy === "avgProps" ? rpt.avgProps[a] || 0 : a;
        const bVal = sortBy === "avgProps" ? rpt.avgProps[b] || 0 : b;
        return sortAsc ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
      })
    : [];

  return (
    <div>
      <nav className="navbar">
        <Image
          className="navbar-logo"
          src="/logo.png"
          alt="Reporter Logo"
          width={200}
          height={48}
          priority
        />

        <Link href="/" className="back-btn">
          ← Back
        </Link>
        <div className="navbar-title">Component Usage Reporter</div>
      </nav>

      <main style={{ padding: "2rem" }}>
        <section className="report-form">
          <h2>Clone & Persist from GitHub</h2>
          <input
            className="form-input"
            type="text"
            placeholder="https://github.com/you/your-repo.git"
            value={repoUrl}
            onChange={(e) => {
              setRepoUrl(e.target.value);
              try {
                const parts = new URL(e.target.value).pathname.split("/");
                const last = parts.pop() || parts.pop() || "";
                setProjectName(last.replace(/\.git$/, ""));
              } catch {
                setProjectName("");
              }
            }}
          />
          <input
            className="form-input"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button
            className="btn-primary"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Cloning…" : "Generate & Persist"}
          </button>
          {message && <p className="form-message">{message}</p>}
        </section>

        {projects.length > 0 && (
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
                        onClick={() => fetchReport(p.name)}
                        disabled={loading && selected === p.name}
                      >
                        {loading && selected === p.name ? "Loading…" : "Load"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {rpt && (
          <section style={{ marginTop: "2rem" }}>
            <h2>Component Usage by Import Path</h2>

            <table className="report-table">
              <thead>
                <tr>
                  <th
                    onClick={() => {
                      setSortBy("name");
                      setSortAsc((prev) => sortBy !== "name" || !prev);
                    }}
                  >
                    Component
                  </th>
                  <th
                    onClick={() => {
                      setSortBy("avgProps");
                      setSortAsc((prev) => sortBy !== "avgProps" || !prev);
                    }}
                  >
                    Avg. Props
                  </th>
                  <th>Import Source</th>
                  <th>Usage Pie</th>
                  <th>Files Used In</th>
                </tr>
              </thead>
              <tbody>
                {sortedComponents.map((comp) => {
                  const imports = rpt.importMap[comp] || {};
                  const usage = rpt.usageMap[comp] || {};
                  const avg = rpt.avgProps[comp] || 0;
                  const total = Object.values(imports).reduce(
                    (a, b) => a + b,
                    0
                  );
                  const pie = Object.entries(imports).map(([name, value]) => ({
                    name,
                    value: Math.round((value / total) * 100),
                  }));

                  return (
                    <tr key={comp}>
                      <td>{comp}</td>
                      <td style={{ textAlign: "center" }}>{avg.toFixed(1)}</td>
                      <td>
                        {Object.entries(imports).map(([lib, cnt]) => (
                          <div key={lib}>
                            {lib} ({cnt})
                          </div>
                        ))}
                      </td>
                      <td style={{ width: "240px", textAlign: "center" }}>
                        <UsagePieChart data={pie} width={240} height={200} />
                      </td>

                      <td style={{ paddingLeft: 8 }}>
                        {Object.entries(usage).map(([f, c]) => (
                          <div key={f}>
                            {f}: {c}
                          </div>
                        ))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {rpt.unused?.length > 0 && (
              <details style={{ marginTop: 24 }}>
                <summary>Unused Components ({rpt.unused.length})</summary>
                <ul>
                  {rpt.unused.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </details>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
