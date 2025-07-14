/* components/ClassRuleForm.tsx — full */
"use client";
import { useState } from "react";

export default function ClassRuleForm({
  projectName,
  onRefresh,
}: {
  projectName: string;
  onRefresh: () => void;
}) {
  const [pattern, setPattern] = useState("");
  const [pkg, setPkg] = useState("");
  const [dirty, setDirty] = useState(false);

  async function save() {
    if (!pattern || !pkg) return alert("Pattern + package required");
    await fetch("/api/report/class-rule", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pattern, pkg, projectName }),
    });
    setPattern("");
    setPkg("");
    setDirty(true);
  }

  return (
    <div className="rule-form">
      <input
        className="rule-input"
        placeholder="regex e.g. ^burbon-"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
      <input
        className="rule-input"
        placeholder="package e.g. burbon"
        value={pkg}
        onChange={(e) => setPkg(e.target.value)}
      />
      <button className="rule-btn" onClick={save}>
        Add rule
      </button>
      {dirty && (
        <button
          className="refresh-btn"
          title="Re-scan project"
          onClick={() => {
            setDirty(false);
            onRefresh();
          }}
        >
          🔄
        </button>
      )}
    </div>
  );
}
