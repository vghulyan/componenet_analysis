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

  // 1) load projects list
  async function fetchProjects() {
    const res = await fetch("/api/report?list=true");
    const json = (await res.json()) as { projects: Project[] };
    setProjects(json.projects);
  }

  // 2) load a report (local or persisted)
  async function fetchReport(name?: string) {
    setLoading(true);
    setMessage(null);
    try {
      const q = name ? `?projectName=${encodeURIComponent(name)}` : "";
      const res = await fetch(`/api/report${q}`);
      const json = (await res.json()) as RawReport;
      setRpt(json);
    } catch (e) {
      console.error(e);
      setMessage("❌ Failed to fetch report");
    } finally {
      setLoading(false);
    }
  }

  // 3) generate & persist
  async function handleGenerate() {
    setMessage(null);
    if (!repoUrl.endsWith(".git") || !projectName) {
      setMessage("❌ Provide a valid .git URL and name");
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
        setMessage(`✅ Saved "${projectName}"`);
        await fetchProjects();
        setSelected(projectName);
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

  // top‐10 global
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
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <nav className="navbar">
        <Image
          className="navbar-logo"
          src="/logo.png"
          alt="Component Usage Reporter Logo"
          width={200} // you can tune this
          height={60} // make it a bit taller if you’d like
          priority
        />
        <Link href="/" className="back-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M15 18l-6-6 6-6"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>
        <div className="navbar-title">Component Usage Reporter</div>
      </nav>

      {/* ───── Projects List ───── */}
      <section style={{ margin: "24px 0" }}>
        <section>
          <h2>Saved Projects</h2>
          <table
            className="report-table"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead style={{ background: "#eee" }}>
              <tr>
                <th>Name</th>
                <th>↪ Repo URL</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.repoUrl}</td>
                  <td>{new Date(p.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn-load"
                      onClick={() => {
                        setSelected(p.name);
                        fetchReport(p.name);
                      }}
                      disabled={loading}
                    >
                      Load
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>

      {/* ───── Clone & Persist Form ───── */}
      <section className="report-form">
        <h2>Clone & Persist from GitHub</h2>

        <div className="form-field">
          <label>GitHub URL:</label>
          <input
            className="form-input"
            type="text"
            value={repoUrl}
            placeholder="https://github.com/you/your-repo.git"
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

      {/* ───── Top-10 Pie ───── */}
      <section className="top10-section">
        <h2 style={{ fontSize: "1.75rem", fontWeight: 600 }}>
          Top 10 Components
        </h2>
        <div className="top10-chart">
          <UsagePieChart data={top10} />
        </div>
      </section>

      {/* ───── Per-Component Breakdown ───── */}
      {rpt && (
        <section style={{ margin: "24px 0" }}>
          <h2>Per-Component Breakdown {selected && `("${selected}")`}</h2>
          <table
            className="report-table"
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Component</th>
                <th
                  title="Average number of props passed to each instance of this component"
                  style={{ cursor: "help" }}
                >
                  Avg. Props ℹ️
                </th>
                <th>Import-Sources (%)</th>
                <th>Usage by File</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(rpt.usageMap).map((comp) => {
                const pkgCounts = rpt.importMap[comp] || {};
                const tot =
                  Object.values(pkgCounts).reduce((a, b) => a + b, 0) || 1;
                const pieData = Object.entries(pkgCounts).map(
                  ([name, cnt]) => ({
                    name,
                    value: Math.round((cnt / tot) * 100),
                  })
                );
                return (
                  <tr key={comp}>
                    <td>{comp}</td>
                    <td style={{ textAlign: "center" }}>
                      {rpt.avgProps[comp] ?? 0}
                    </td>

                    <td style={{ width: "50%", height: 300 }}>
                      <UsagePieChart data={pieData} />
                    </td>
                    <td
                      style={{
                        borderLeft: "1px solid #ddd",
                        paddingLeft: 12,
                        verticalAlign: "top",
                      }}
                    >
                      {Object.entries(rpt.usageMap[comp]).map(([file, cnt]) => (
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
                  fontWeight: "bold",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                Unused Components ({rpt.unused.length})
              </summary>
              <ul style={{ padding: "8px 16px", margin: 0, listStyle: "disc" }}>
                {rpt.unused.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </details>
          )}
        </section>
      )}
    </div>
  );
}
