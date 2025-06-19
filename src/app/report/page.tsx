"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { RawReport, Project } from "@/app/types";
import CloneForm from "@/components/CloneForm";
import SavedProjectsTable from "@/components/SavedProjectsTable";
import ChartsPanel from "@/components/ChartsPanel";
import DetailTable from "@/components/DetailTable";

export default function ReportPage() {
  /* ── State ─────────────────────────── */
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [rpt, setRpt] = useState<RawReport | null>(null);

  const [repoUrl, setRepoUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  /* NEW ─ toggle between Top-10 and All */
  const [showAll, setShowAll] = useState(false);

  /* ── Fetchers ──────────────────────── */
  async function fetchProjects() {
    try {
      const res = await fetch("/api/report?list=true");
      const { projects } = (await res.json()) as { projects: Project[] };
      setProjects(projects);
    } catch {
      setMessage("❌ Failed to load saved projects");
    }
  }

  async function fetchReport(name = "") {
    setLoading(true);
    setMessage(null);
    try {
      const q = name ? `?projectName=${encodeURIComponent(name)}` : "";
      const res = await fetch(`/api/report${q}`);
      const body = (await res.json()) as Partial<RawReport> & {
        error?: string;
      };

      if (!res.ok) {
        setMessage(`❌ ${body.error || "Unknown error"}`);
      } else {
        setRpt(body as RawReport);
        setSelected(name);
      }
    } catch {
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

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
      if (!res.ok) {
        setMessage(`❌ ${body.error}`);
      } else {
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
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        const { error } = await res.json();
        setMessage(`❌ ${error || "Delete failed"}`);
      } else {
        setMessage(`🗑 “${name}” removed`);
        await fetchProjects();
        if (selected === name) setRpt(null);
      }
    } catch {
      setMessage("❌ Network error");
    } finally {
      setLoading(false);
    }
  }

  /* ── Lifecycle: load list + default report ───────────────── */
  useEffect(() => {
    fetchProjects().then(() => fetchReport());
  }, []);

  /* ── Render ───────────────────────── */
  return (
    <div>
      {/* ───────── NavBar ───────── */}
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
        {/* ───────── CloneForm ───────── */}
        <CloneForm
          repoUrl={repoUrl}
          setRepoUrl={setRepoUrl}
          projectName={projectName}
          setProjectName={setProjectName}
          loading={loading}
          onGenerate={handleGenerate}
          message={message}
        />
        {/* ───────── SavedProjectsTable ───────── */}
        <SavedProjectsTable
          projects={projects}
          selected={selected}
          loading={loading}
          onLoad={(name: string) => fetchReport(name)}
          onDelete={handleDelete}
        />
        {/* ───────── ChartsPanel ───────── */}
        {rpt && (
          <ChartsPanel
            rpt={rpt}
            showAll={showAll}
            toggleShowAll={() => setShowAll((prev) => !prev)}
          />
        )}
        {/* ───────── DetailTable ───────── */}
        {rpt && <DetailTable rpt={rpt} showAll={showAll} />}
      </main>
    </div>
  );
}
