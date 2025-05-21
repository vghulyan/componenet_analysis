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

  // ─── Fetch saved projects ─────────────────────────
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

  // ─── Fetch a single report ─────────────────────────
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
        // show exactly what the API sent in its `{ error: "…" }`
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

  // ─── Clone & persist ───────────────────────────────
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

  // ─── On mount: load list + default report ──────────
  useEffect(() => {
    fetchProjects().then(() => fetchReport());
  }, []);

  // ─── Prepare Top-10 pie data ───────────────────────
  const top10 = rpt
    ? Object.entries(rpt.usageMap)
        .map(([comp, files]) => ({
          name: comp,
          value: Object.values(files).reduce((a, b) => a + b, 0),
        }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 10)
    : [];

  return (
    <div>
      {/* ───────────────────────────────────────── NavBar ───────────────────────────────────────── */}
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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M15 18l-6-6 6-6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>
        <div className="navbar-title">Component Usage Reporter</div>
      </nav>

      <main style={{ padding: "2rem" }}>
        {/* ───────────────────────────────────────── Saved Projects ───────────────────────────────────────── */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Saved Projects</h2>
          {projects.length === 0 ? (
            <p>No saved projects yet.</p>
          ) : (
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
          )}
        </section>

        {/* ───────────────────────────────────────── Clone & Persist Form ───────────────────────────────────────── */}
        <section className="report-form">
          <h2>Clone & Persist from GitHub</h2>

          <div className="form-field">
            <label>GitHub URL:</label>
            <input
              className="form-input"
              type="text"
              placeholder="https://github.com/you/your-repo.git"
              value={repoUrl}
              onChange={(e) => {
                const url = e.target.value;
                setRepoUrl(url);
                try {
                  const parts = new URL(url).pathname.split("/");
                  const last = parts.pop() || parts.pop() || "";
                  setProjectName(last.replace(/\.git$/, ""));
                } catch {
                  setProjectName("");
                }
              }}
            />
          </div>

          <div className="form-field">
            <label>Project Name:</label>
            <input
              className="form-input"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <button
            className="btn-primary"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Cloning…" : "Generate & Persist"}
          </button>
          {message && <p className="form-message">{message}</p>}
        </section>

        {/* ───────────────────────────────────────── Top-10 Global Pie ───────────────────────────────────────── */}
        {top10.length > 0 && (
          <section className="top10-section">
            <h2 style={{ fontSize: "1.75rem", fontWeight: 600 }}>
              Top 10 Components
            </h2>
            <div className="top10-chart">
              <UsagePieChart data={top10} />
            </div>
          </section>
        )}

        {/* ───────────────────────────────────────── Per-Component Breakdown ───────────────────────────────────────── */}
        {rpt && (
          <section style={{ marginTop: "2rem" }}>
            <h2>
              Per-Component Breakdown{" "}
              {selected && <span style={{ fontWeight: 400 }}>{selected}</span>}
            </h2>

            <table className="report-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th
                    title="Average # of props per instance"
                    style={{ cursor: "help" }}
                  >
                    Avg. Props ℹ️
                  </th>
                  <th>Import-Sources (%)</th>
                  <th>Usage by File</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(rpt.usageMap).map(([comp, files]) => {
                  const pkgCounts = rpt.importMap[comp] || {};
                  const total =
                    Object.values(pkgCounts).reduce((a, b) => a + b, 0) || 1;
                  const pieData = Object.entries(pkgCounts).map(
                    ([name, cnt]) => ({
                      name,
                      value: Math.round((cnt / total) * 100),
                    })
                  );

                  return (
                    <tr key={comp}>
                      <td>{comp}</td>
                      <td style={{ textAlign: "center" }}>
                        {(rpt.avgProps[comp] ?? 0).toFixed(1)}
                      </td>

                      <td style={{ width: 180, textAlign: "center" }}>
                        <UsagePieChart
                          data={pieData}
                          width={160}
                          height={160}
                        />
                      </td>

                      <td style={{ paddingLeft: 12, verticalAlign: "top" }}>
                        {Object.entries(files).map(([file, cnt]) => (
                          <div
                            key={file}
                            style={{
                              padding: "4px 0",
                              borderBottom: "1px solid #f0f0f0",
                            }}
                          >
                            <strong>{file}</strong>: {cnt}
                          </div>
                        ))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {rpt.unused.length > 0 && (
              <details
                style={{
                  marginTop: 24,
                  border: "1px solid #ccc",
                  borderRadius: 4,
                }}
              >
                <summary
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    padding: 8,
                    cursor: "pointer",
                  }}
                >
                  Unused Components ({rpt.unused.length})
                </summary>
                <ul
                  style={{ padding: "8px 16px", margin: 0, listStyle: "disc" }}
                >
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
