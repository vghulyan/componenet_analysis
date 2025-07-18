/* src/app/report/page.tsx */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

import { Project, BreakdownRow, PackageSummary } from "@/app/types";

import CloneForm from "@/components/CloneForm";
import SavedProjectsTable from "@/components/SavedProjectsTable";
import ClassRuleForm from "@/components/ClassRuleForm";
import BreakdownTable from "@/components/BreakdownTable";
import PackageSummaryTable from "@/components/PackageSummaryTable";

/* ---------- helpers ---------- */
type Rule = { id: number; pattern: string; package: string };

interface ApiReportPayload {
  breakdown?: BreakdownRow[];
  packageSummary?: PackageSummary;
  packageTotal?: number;
  error?: string;
}

/* ---------- component ---------- */
export default function ReportPage() {
  /* ── state ─────────────────────────── */
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<string>("");

  const [breakdown, setBreakdown] = useState<BreakdownRow[]>([]);
  const [rules, setRules] = useState<Rule[]>([]);

  const [pkgSummary, setPkgSummary] = useState<PackageSummary>({});
  const [pkgTotal, setPkgTotal] = useState<number>(0);

  const [repoUrl, setRepoUrl] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  /* ── API fetchers ──────────────────── */
  const fetchRules = useCallback(async (proj: string) => {
    if (!proj) {
      setRules([]);
      return;
    }
    const res = await fetch(
      `/api/report/class-rule?projectName=${encodeURIComponent(proj)}`
    );
    const json = await res.json();
    setRules(json.rules as Rule[]);
  }, []);

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch("/api/report?list=true");
      const { projects } = (await res.json()) as { projects: Project[] };
      setProjects(projects);
    } catch {
      setMessage("❌ Failed to load saved projects");
    }
  }, []);

  const fetchReport = useCallback(
    async (projName = "") => {
      setLoading(true);
      try {
        const q = projName
          ? `?projectName=${encodeURIComponent(projName)}`
          : "";
        const res = await fetch(`/api/report${q}`);
        const body = (await res.json()) as ApiReportPayload;

        if (!res.ok) {
          setMessage(`❌ ${body.error ?? "Unknown error"}`);
          return;
        }

        setBreakdown(body.breakdown ?? []);
        setPkgSummary(body.packageSummary ?? {});
        setPkgTotal(body.packageTotal ?? 0);
        setSelected(projName);
        fetchRules(projName);
      } catch {
        setMessage("❌ Network error");
      } finally {
        setLoading(false);
      }
    },
    [fetchRules]
  );

  /* ── actions ───────────────────────── */
  async function handleGenerate() {
    if (!repoUrl.endsWith(".git") || !projectName) {
      setMessage("❌ Enter a valid .git URL and project name");
      return;
    }
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl, projectName }),
      });
      const body = await res.json();

      if (!res.ok) setMessage(`❌ ${body.error}`);
      else {
        setMessage(`✅ “${projectName}” saved`);
        await fetchProjects();
        await fetchReport(projectName);
      }
    } catch {
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(name: string) {
    if (!confirm(`Delete “${name}” and its data?`)) return;
    setLoading(true);

    try {
      const res = await fetch(
        `/api/report?projectName=${encodeURIComponent(name)}`,
        { method: "DELETE" }
      );
      if (!res.ok) {
        const { error } = await res.json();
        setMessage(`❌ ${error || "Delete failed"}`);
      } else {
        setMessage(`🗑 “${name}” removed`);
        await fetchProjects();
        if (selected === name) {
          setBreakdown([]);
          setRules([]);
          setSelected("");
          setPkgSummary({});
          setPkgTotal(0);
        }
      }
    } catch {
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

  /* ── mount ─────────────────────────── */
  useEffect(() => {
    fetchProjects().then(() => fetchReport());
  }, [fetchProjects, fetchReport]);

  /* ── render ────────────────────────── */
  return (
    <div>
      {/* ────────── NAV BAR ────────── */}
      <nav className="navbar">
        <Image
          src="/logo.png"
          alt="Reporter"
          width={200}
          height={48}
          className="navbar-logo"
        />
        <Link href="/" className="back-btn">
          ← Back
        </Link>
        <div className="navbar-title">Component Usage Reporter</div>
      </nav>

      <main style={{ padding: "2rem" }}>
        {/* clone / save */}
        <CloneForm
          repoUrl={repoUrl}
          setRepoUrl={setRepoUrl}
          projectName={projectName}
          setProjectName={setProjectName}
          loading={loading}
          onGenerate={handleGenerate}
          message={message}
        />

        {/* saved projects */}
        <SavedProjectsTable
          projects={projects}
          selected={selected}
          loading={loading}
          onLoad={fetchReport}
          onDelete={handleDelete}
        />

        {/* class-rule input */}
        <ClassRuleForm
          projectName={selected}
          onRefresh={() => {
            fetchRules(selected);
            fetchReport(selected);
          }}
        />

        {/* package summary */}
        {pkgTotal > 0 && (
          <PackageSummaryTable summary={pkgSummary} total={pkgTotal} />
        )}

        {/* rule list */}
        {selected && rules.length > 0 && (
          <ul className="rule-list" style={{ marginTop: 16 }}>
            {rules.map((r) => (
              <li key={r.id}>
                <code>{r.pattern}</code> → <strong>{r.package}</strong>
                <button
                  title="Delete rule"
                  disabled={!r.id}
                  style={{
                    marginLeft: 8,
                    border: "none",
                    background: "none",
                    cursor: r.id ? "pointer" : "not-allowed",
                    opacity: r.id ? 1 : 0.4,
                    fontSize: "1.1rem",
                  }}
                  onClick={async () => {
                    if (!r.id) return;
                    await fetch(`/api/report/class-rule?id=${r.id}`, {
                      method: "DELETE",
                    });
                    await fetchRules(selected);
                    await fetchReport(selected);
                  }}
                >
                  ⓧ
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* per-file breakdown */}
        {breakdown.length > 0 && <BreakdownTable rows={breakdown} />}
      </main>
    </div>
  );
}
