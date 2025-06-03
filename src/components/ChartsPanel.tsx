// components/ChartsPanel.tsx
"use client";

import { useMemo } from "react";
import UsagePieChart from "@/components/UsagePieChart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { RawReport } from "@/app/types";

type ChartsPanelProps = {
  rpt: RawReport;
  showAll: boolean;
  toggleShowAll: () => void;
};

export default function ChartsPanel({
  rpt,
  showAll,
  toggleShowAll,
}: ChartsPanelProps) {
  //
  // ─── Top-10 PIE DATA ──────────────────────────────────────────────────────────────
  //
  const top10 = useMemo(() => {
    return Object.entries(rpt.usageMap)
      .map(([component, files]) => ({
        name: component,
        value: Object.values(files).reduce((sum, c) => sum + c, 0),
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
  }, [rpt.usageMap]);

  //
  // ─── BAR CHART DATA: DISTINCT COMPONENT COUNT PER PACKAGE ─────────────────────────
  //
  const barData = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.values(rpt.importMap).forEach((importRecord) => {
      Object.keys(importRecord).forEach((pkgName) => {
        counts[pkgName] = (counts[pkgName] || 0) + 1;
      });
    });
    return Object.entries(counts).map(([name, cnt]) => ({ name, cnt }));
  }, [rpt.importMap]);

  //
  // ─── ALL COMPONENT NAMES (to render when showAll === true) ─────────────────────────
  //
  const allComponentNames = useMemo(() => {
    return Object.keys(rpt.usageMap).sort((a, b) => a.localeCompare(b));
  }, [rpt.usageMap]);

  return (
    <section style={{ margin: "2rem 0" }}>
      {/* ─── Toggle Button ────────────────────────────────────────────────────────── */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <button
          onClick={toggleShowAll}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {showAll ? "Show only Top-10" : "Show all components"}
        </button>
      </div>

      {/* ─── If showAll === false: render Top-10 pie & bar charts ───────────────────── */}
      {!showAll && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* ── Top-10 Pie ── */}
          <div>
            <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              Top-10 Components
            </h3>
            <UsagePieChart data={top10} width={300} height={300} />
          </div>

          {/* ── Bar Chart ── */}
          <div style={{ width: 380, height: 300, textAlign: "center" }}>
            <h3 style={{ margin: 0, marginBottom: 8, fontSize: "1rem" }}>
              Components per Package
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                  angle={-40}
                  textAnchor="end"
                  height={60}
                />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="cnt" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* ─── If showAll === true: render a scrollable list of all component names ───── */}
      {showAll && (
        <div
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: 4,
            padding: "1rem",
            background: "#fafafa",
          }}
        >
          <h3 style={{ margin: "0 0 0.5rem" }}>
            All Components ({allComponentNames.length})
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {allComponentNames.map((name) => (
              <li
                key={name}
                style={{
                  padding: "0.25rem 0",
                  borderBottom: "1px solid #eee",
                  fontSize: "0.95rem",
                  color: "#333",
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
