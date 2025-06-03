"use client";

import { Dispatch, SetStateAction } from "react";

type CloneFormProps = {
  repoUrl: string;
  setRepoUrl: Dispatch<SetStateAction<string>>;
  projectName: string;
  setProjectName: Dispatch<SetStateAction<string>>;
  loading: boolean;
  onGenerate: () => void;
  message: string | null;
};

export default function CloneForm({
  repoUrl,
  setRepoUrl,
  projectName,
  setProjectName,
  loading,
  onGenerate,
  message,
}: CloneFormProps) {
  const handleUrlChange = (url: string) => {
    setRepoUrl(url);
    try {
      const lastSegment = new URL(url).pathname.split("/").pop() || "";
      setProjectName(lastSegment.replace(/\.git$/, ""));
    } catch {
      // ignore invalid URL until fully typed
    }
  };

  return (
    <section className="report-form">
      <h2>Clone & Persist from GitHub</h2>

      <input
        className="form-input"
        type="text"
        placeholder="https://github.com/you/repo.git"
        value={repoUrl}
        onChange={(e) => handleUrlChange(e.target.value)}
      />

      <input
        className="form-input"
        type="text"
        placeholder="project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />

      <button className="btn-primary" disabled={loading} onClick={onGenerate}>
        {loading ? "Cloning…" : "Generate & Persist"}
      </button>

      {message && <p className="form-message">{message}</p>}
    </section>
  );
}
