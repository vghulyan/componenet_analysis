/* components/ClassRuleForm.tsx */
"use client";
import { useState } from "react";

interface Props {
  projectName: string;
  onRefresh: () => void; // fetchRules + fetchReport
}

export default function ClassRuleForm({ projectName, onRefresh }: Props) {
  /** controlled inputs */
  const [pattern, setPattern] = useState("");
  const [pkg, setPkg] = useState("");
  const [component, setComponent] = useState(""); // ⬅️ NEW optional
  const [dirty, setDirty] = useState(false);

  /* save rule then refresh the tables */
  async function save() {
    if (!pattern || !pkg) {
      alert("Pattern and package are required");
      return;
    }

    const payload: Record<string, unknown> = { pattern, pkg, projectName };
    if (component.trim()) payload.component = component.trim();

    await fetch("/api/report/class-rule", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setPattern("");
    setPkg("");
    setComponent("");
    setDirty(true); // show refresh button
    onRefresh(); // auto-refresh after add
  }

  return (
    <div className="rule-form">
      <input
        className="rule-input"
        placeholder="regex e.g. ^zb-"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
      <input
        className="rule-input"
        placeholder="package e.g. zanzibar"
        value={pkg}
        onChange={(e) => setPkg(e.target.value)}
      />
      <input /* optional component alias */
        className="rule-input"
        style={{ width: 180 }}
        placeholder="component (opt.)"
        value={component}
        onChange={(e) => setComponent(e.target.value)}
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
