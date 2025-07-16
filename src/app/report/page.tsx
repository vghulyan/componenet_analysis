/* src/app/report/page.tsx */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

import { Project, BreakdownRow } from "@/app/types";
import CloneForm from "@/components/CloneForm";
import SavedProjectsTable from "@/components/SavedProjectsTable";
import ClassRuleForm from "@/components/ClassRuleForm";
import BreakdownTable from "@/components/BreakdownTable";

interface Rule {
  id: number;
  pattern: string;
  package: string;
}

export default function ReportPage() {
  /* ── state ───────────────────────── */
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState("");
  const [breakdown, setBreakdown] = useState<BreakdownRow[]>([]);
  const [rules, setRules] = useState<Rule[]>([]);

  const [repoUrl, setRepoUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  /* ── helpers ─────────────────────── */
  const fetchRules = useCallback(async (proj: string) => {
    if (!proj) return setRules([]);
    const res = await fetch(
      `/api/report/class-rule?projectName=${encodeURIComponent(proj)}`
    );
    const { rules } = await res.json();
    setRules(rules);
  }, []);

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch("/api/report?list=true");
      const { projects } = await res.json();
      setProjects(projects);
    } catch {
      setMessage("❌ Failed to load saved projects");
    }
  }, []);

  const fetchReport = useCallback(
    async (name = "") => {
      setLoading(true);
      setMessage(null);
      try {
        const q = name ? `?projectName=${encodeURIComponent(name)}` : "";
        const res = await fetch(`/api/report${q}`);
        const body = await res.json();
        if (!res.ok) {
          setMessage(`❌ ${body.error || "Unknown error"}`);
          return;
        }
        setBreakdown(body.breakdown ?? []);
        setSelected(name);
        fetchRules(name);
      } catch {
        setMessage("❌ Network error");
      } finally {
        setLoading(false);
      }
    },
    [fetchRules]
  );

  /* ── actions (clone / delete) ─────── */
  async function handleGenerate() {
    if (!repoUrl.endsWith(".git") || !projectName)
      return setMessage("❌ Enter a valid .git URL and project name");

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
        }
      }
    } catch {
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

  /* ── mount ────────────────────────── */
  useEffect(() => {
    fetchProjects().then(() => fetchReport());
  }, [fetchProjects, fetchReport]);

  /* ── render ───────────────────────── */
  return (
    <div>
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
        <CloneForm
          repoUrl={repoUrl}
          setRepoUrl={setRepoUrl}
          projectName={projectName}
          setProjectName={setProjectName}
          loading={loading}
          onGenerate={handleGenerate}
          message={message}
        />

        <SavedProjectsTable
          projects={projects}
          selected={selected}
          loading={loading}
          onLoad={fetchReport}
          onDelete={handleDelete}
        />

        <ClassRuleForm
          projectName={selected}
          onRefresh={() => {
            fetchRules(selected);
            fetchReport(selected);
          }}
        />

        {selected && rules.length > 0 && (
          <ul className="rule-list">
            {rules.map((r, idx) => (
              <li key={`${r.id ?? "tmp"}-${idx}`}>
                <code>{r.pattern}</code> → <strong>{r.package}</strong>{" "}
                <button
                  onClick={async () => {
                    await fetch(`/api/report/class-rule?id=${r.id}`, {
                      method: "DELETE",
                    });
                    fetchRules(selected);
                    fetchReport(selected);
                  }}
                >
                  ⓧ
                </button>
              </li>
            ))}
          </ul>
        )}

        {breakdown.length > 0 && <BreakdownTable rows={breakdown} />}
      </main>
    </div>
  );
}
