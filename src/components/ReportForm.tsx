"use client";

import { useState, FormEvent } from "react";

export type ReportFormProps = {
  onGenerate: (repoUrl: string, projectName: string) => Promise<void>;
  loading: boolean;
  message: string | null;
};

export default function ReportForm({
  onGenerate,
  loading,
  message,
}: ReportFormProps) {
  const [repoUrl, setRepoUrl] = useState("");
  const [projectName, setProjectName] = useState("");

  function handleRepoChange(url: string) {
    setRepoUrl(url);
    try {
      const parts = new URL(url).pathname.split("/");
      const last = parts.pop() || parts.pop() || "";
      setProjectName(last.replace(/\.git$/, ""));
    } catch {
      // ignore invalid urls
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onGenerate(repoUrl, projectName);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: 16,
        border: "1px solid #ccc",
        borderRadius: 8,
        marginBottom: 24,
        background: "#fafafa",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: 12 }}>Clone &amp; Persist</h2>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", marginBottom: 4, fontWeight: 500 }}>
          GitHub URL
        </label>
        <input
          type="url"
          value={repoUrl}
          onChange={(e) => handleRepoChange(e.target.value)}
          placeholder="https://github.com/you/your-repo.git"
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: 4,
            border: "1px solid #bbb",
          }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: "block", marginBottom: 4, fontWeight: 500 }}>
          Project Name
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: 4,
            border: "1px solid #bbb",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "10px 16px",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Working…" : "Generate & Persist Report"}
      </button>

      {message && (
        <p
          style={{
            marginTop: 12,
            color: message.startsWith("✅") ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
}
