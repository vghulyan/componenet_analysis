// components/DetailTable.tsx
"use client";

import { useMemo, useState } from "react";
import UsagePieChart from "@/components/UsagePieChart";
import { RawReport } from "@/app/types";

type DetailTableProps = {
  /** The full report object from the API */
  rpt: RawReport;

  /**
   * If true: include *all* components (alphabetical order).
   * If false: limit to top‐10 (by total usage), then sort by the chosen column.
   */
  showAll: boolean;
};

export default function DetailTable({ rpt, showAll }: DetailTableProps) {
  // ─── Local sorting state ───────────────────────────────────────────────────────────
  const [sortBy, setSortBy] = useState<"name" | "avgProps">("name");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  // ─── Helper: toggle sort column / direction ────────────────────────────────────────
  const toggleSort = (field: "name" | "avgProps") => {
    if (sortBy === field) {
      setSortAsc((prev) => !prev);
    } else {
      setSortBy(field);
      setSortAsc(true);
    }
  };

  /**
   * 1) Build an array of all component names (keys of usageMap).
   * 2) If showAll===false, pick the top-10 by total usage; otherwise keep them all.
   * 3) Sort the chosen list by either “name” or “avgProps”, ascending/descending.
   */
  const rowKeys = useMemo(() => {
    const allComponentNames = Object.keys(rpt.usageMap);

    // Compute [componentName, totalUsage] for each
    const usageTotals: [string, number][] = allComponentNames.map((comp) => {
      const total = Object.values(rpt.usageMap[comp]).reduce(
        (a, b) => a + b,
        0
      );
      return [comp, total];
    });

    // If not showing all, take top-10 by total usage
    const filteredKeys = showAll
      ? usageTotals.map(([comp]) => comp)
      : usageTotals
          .sort((a, b) => b[1] - a[1]) // descending by total usage
          .slice(0, 10)
          .map(([comp]) => comp);

    // Now sort the filtered list by the selected column (name or avgProps)
    const sortedKeys = [...filteredKeys].sort((a, b) => {
      if (sortBy === "avgProps") {
        const aVal = rpt.avgProps[a] ?? 0;
        const bVal = rpt.avgProps[b] ?? 0;
        return sortAsc ? aVal - bVal : bVal - aVal;
      } else {
        // sortBy === "name"
        const aName = a.toLowerCase();
        const bName = b.toLowerCase();
        if (aName < bName) return sortAsc ? -1 : 1;
        if (aName > bName) return sortAsc ? 1 : -1;
        return 0;
      }
    });

    return sortedKeys;
  }, [rpt, sortBy, sortAsc, showAll]);

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Component Usage by Import Path</h2>

      <table className="report-table">
        <thead>
          <tr>
            <th
              onClick={() => toggleSort("name")}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              Component
              {sortBy === "name" && (sortAsc ? " ▲" : " ▼")}
            </th>
            <th
              onClick={() => toggleSort("avgProps")}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              Avg. Props
              {sortBy === "avgProps" && (sortAsc ? " ▲" : " ▼")}
            </th>
            <th>Import Source</th>
            <th>Usage Pie</th>
            <th>Files Used In</th>
          </tr>
        </thead>

        <tbody>
          {rowKeys.map((comp) => {
            // Gather import‐counts for this component
            const imports = rpt.importMap[comp] || {};
            // Gather usage‐by‐file for this component
            const usageByFile = rpt.usageMap[comp] || {};
            // Average props for this component
            const avg = rpt.avgProps[comp] ?? 0;
            // Total import count, used for pie‐chart percentages
            const totalImports = Object.values(imports).reduce(
              (a, b) => a + b,
              0
            );

            // Build pie data = [ {name: pkgName, value: percentage}, … ]
            const pieData = Object.entries(imports).map(([pkgName, cnt]) => ({
              name: pkgName,
              value:
                totalImports > 0 ? Math.round((cnt / totalImports) * 100) : 0,
            }));

            return (
              <tr key={comp}>
                {/* ─── Component Name ──────────────────────────────────────────────── */}
                <td>{comp}</td>

                {/* ─── Avg. Props ───────────────────────────────────────────────────── */}
                <td style={{ textAlign: "center" }}>{avg.toFixed(1)}</td>

                {/* ─── Import Source (list each package + count) ─────────────────── */}
                <td>
                  {Object.entries(imports).map(([pkgName, cnt]) => (
                    <div key={pkgName} style={{ padding: "0.1rem 0" }}>
                      {pkgName} ({cnt})
                    </div>
                  ))}
                </td>

                {/* ─── Usage Pie (enlarged) ───────────────────────────────────────── */}
                <td style={{ width: "350px", textAlign: "center" }}>
                  <UsagePieChart data={pieData} width={350} height={350} />
                </td>

                {/* ─── Files Used In (list each file path + count) ──────────────── */}
                <td>
                  {Object.entries(usageByFile).map(([filePath, cnt]) => (
                    <div key={filePath} style={{ padding: "0.1rem 0" }}>
                      {filePath}: {cnt}
                    </div>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {rpt.unused.length > 0 && (
        <details style={{ marginTop: 24 }}>
          <summary style={{ fontWeight: 600 }}>
            Unused Components ({rpt.unused.length})
          </summary>
          <ul style={{ padding: "0.5rem 1rem", margin: 0 }}>
            {rpt.unused.map((comp) => (
              <li key={comp} style={{ padding: "0.25rem 0" }}>
                {comp}
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
