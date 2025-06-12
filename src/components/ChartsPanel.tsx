// components/ChartsPanel.tsx
"use client";

import { useMemo } from "react";
import UsagePieChart, { PieDatum } from "@/components/UsagePieChart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
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
  const top10: PieDatum[] = useMemo(() => {
    return Object.entries(rpt.usageMap)
      .map(([component, files]) => ({
        name: component,
        // Sum up all file counts to produce the raw usage for that component
        value: Object.values(files).reduce((sum, c) => sum + c, 0),
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
  }, [rpt.usageMap]);

  //
  // ─── BAR CHART DATA: How many distinct component‐names per package ──────────────────
  //
  const barData = useMemo(() => {
    // We build a map: { [packageName]: Set<componentName> }
    const counts: Record<string, Set<string>> = {};

    // rpt.importMap is: { [componentName]: { [packagePath]: numberOfTimesImported } }
    Object.entries(rpt.importMap).forEach(([componentName, pkgRecord]) => {
      Object.keys(pkgRecord).forEach((pkgName) => {
        if (!counts[pkgName]) counts[pkgName] = new Set();
        counts[pkgName].add(componentName);
      });
    });

    // Turn that into an array of { name: pkgName, cnt: distinctComponentCount }
    return Object.entries(counts).map(([name, compSet]) => ({
      name,
      cnt: compSet.size,
    }));
  }, [rpt.importMap]);

  //
  // ─── ALL COMPONENT NAMES (for “Show all components” mode) ───────────────────────────
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
            gap: "12rem",
            flexWrap: "wrap",
            height: "100%",
          }}
        >
          {/* ── Top-10 Pie ── */}
          <div
            style={{
              height: "400px",
              marginBottom: "20px",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>
              Top-10 Components
            </h3>
            <UsagePieChart data={top10} width={350} height={350} />
          </div>

          {/* ── Bar Chart ── */}
          <div style={{ width: 450, height: 350, textAlign: "center" }}>
            <h3 style={{ margin: 0, marginBottom: 8, fontSize: "1rem" }}>
              Components per Package
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  angle={-40}
                  textAnchor="end"
                  height={80}
                  interval={0}
                />
                <YAxis allowDecimals={false} />
                <RechartsTooltip
                  formatter={(value: number) => [`${value}`, "components"]}
                />
                <Bar dataKey="cnt" fill="#8884d8" barSize={24} />
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
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLLIElement).style.background =
                    "#f0f0f0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLLIElement).style.background =
                    "transparent";
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ─── Collapsible Explanation Section ────────────────────────────────────────────── */}
      <details
        style={{ marginTop: "2rem", border: "1px solid #ddd", borderRadius: 4 }}
      >
        <summary
          style={{
            padding: "0.5rem 1rem",
            background: "#f0f0f0",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          How to Read These Charts
        </summary>
        <div style={{ padding: "1rem", fontSize: "0.95rem", lineHeight: 1.5 }}>
          <p>
            <strong>Pie Chart (“Top-10 Components”)</strong>
            <br />
            • Each slice is one React component name (e.g. “NavMenuItem”,
            “Example”, “Icon”, etc.).
            <br />• The <code>value</code> of each slice is the{" "}
            <em>raw total count</em> of times that component was used across all
            files.
            <br />• When you hover over a slice, you will see, for example:
          </p>
          <blockquote
            style={{
              background: "#fafafa",
              borderLeft: "4px solid #ccc",
              padding: "0.5rem 1rem",
              margin: "0.5rem 0",
            }}
          >
            NavMenuItem: 7
          </blockquote>
          <p>
            That means “the <em>NavMenuItem</em> component appears exactly 7
            times somewhere in your codebase.”
          </p>

          <p style={{ marginTop: "1rem" }}>
            <strong>Bar Chart (“Components per Package”)</strong>
            <br />• Each bar represents a single “package path” or module (e.g.
            “<code>recharts</code>”, “<code>@zambezi/src/button-group</code>”, “
            <code>react-hot-toast</code>”, etc.).
            <br />• The height of each bar is how many{" "}
            <em>distinct component names</em> come from that package.
            <br />• For example, if your code contains:
          </p>
          <blockquote
            style={{
              background: "#fafafa",
              borderLeft: "4px solid #ccc",
              padding: "0.5rem 1rem",
              margin: "0.5rem 0",
            }}
          >
            &#123; Accordion, AccordionTrigger &#125; from `../src/accordion`;
            <br />
            &#123; AccordionItem &#125; from `../src/accordion`;
          </blockquote>
          <p>
            Then the bar for “<code>../src/accordion</code>” will show
            <strong> cnt: 3</strong>, because there are three distinct component
            names (Accordion, AccordionTrigger, AccordionItem) coming from that
            package path.
          </p>

          <p style={{ marginTop: "1rem" }}>
            • On hover, you will see, for example:
          </p>
          <blockquote
            style={{
              background: "#fafafa",
              borderLeft: "4px solid #ccc",
              padding: "0.5rem 1rem",
              margin: "0.5rem 0",
            }}
          >
            ../src/accordion
            <br />
            cnt: 3
          </blockquote>
          <p>
            That means “this package path (<code>../src/accordion</code>)
            provided 3 distinct components to your code.”
          </p>
        </div>
      </details>
    </section>
  );
}
