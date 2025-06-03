"use client";

import { useMemo, useState } from "react";
import UsagePieChart from "@/components/UsagePieChart";
import { RawReport } from "@/app/types";

type DetailTableProps = {
  /** The full report object from the API */
  rpt: RawReport;

  /**
   * If true, show all components.
   * If false, show only the top-10 by total usage.
   */
  showAll: boolean;
};

export default function DetailTable({ rpt, showAll }: DetailTableProps) {
  // local sorting state
  const [sortBy, setSortBy] = useState<"name" | "avgProps">("name");
  const [sortAsc, setSortAsc] = useState(true);

  // toggle sort column/order
  const toggleSort = (field: "name" | "avgProps") => {
    if (sortBy === field) {
      setSortAsc((prev) => !prev);
    } else {
      setSortBy(field);
      setSortAsc(true);
    }
  };

  /**
   * 1) Compute an array of all component names (keys of usageMap).
   * 2) If showAll is false, first sort by total usage descending, take top-10 names.
   * 3) Then sort those names again by the current sort key (name or avgProps).
   */
  const rowKeys = useMemo(() => {
    const allComps = Object.keys(rpt.usageMap);

    // Build array [componentName, totalUsage]
    const usageTotals: [string, number][] = allComps.map((comp) => {
      const fileCounts = Object.values(rpt.usageMap[comp]);
      const total = fileCounts.reduce((a, b) => a + b, 0);
      return [comp, total];
    });

    // If not showing all, take top-10 by total usage
    const keysToFilter = showAll
      ? usageTotals.map(([comp]) => comp)
      : usageTotals
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([comp]) => comp);

    // Now sort by the chosen field (either component name or average props)
    const keysToSort = [...keysToFilter].sort((a, b) => {
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

    return keysToSort;
  }, [rpt, sortBy, sortAsc, showAll]);

  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>Component Usage by Import Path</h2>

      <table className="report-table">
        <thead>
          <tr>
            <th
              onClick={() => toggleSort("name")}
              style={{ cursor: "pointer" }}
            >
              Component
              {sortBy === "name" && (sortAsc ? " ▲" : " ▼")}
            </th>
            <th
              onClick={() => toggleSort("avgProps")}
              style={{ cursor: "pointer" }}
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
            // 1) Gather import sources for this component
            const imports = rpt.importMap[comp] || {};
            // 2) Gather usage by file for this component
            const usageByFile = rpt.usageMap[comp] || {};
            // 3) Average props for this component
            const avg = rpt.avgProps[comp] ?? 0;
            // 4) Total import count (for constructing pie slices)
            const totalImports = Object.values(imports).reduce(
              (a, b) => a + b,
              0
            );

            // Build pie chart data: [ { name: pkgName, value: percentage } ]
            const pieData = Object.entries(imports).map(([pkgName, cnt]) => ({
              name: pkgName,
              value:
                totalImports > 0 ? Math.round((cnt / totalImports) * 100) : 0,
            }));

            return (
              <tr key={comp}>
                {/* Component Name */}
                <td>{comp}</td>

                {/* Avg. Props */}
                <td style={{ textAlign: "center" }}>{avg.toFixed(1)}</td>

                {/* Import Source: list each package and raw count */}
                <td>
                  {Object.entries(imports).map(([pkgName, cnt]) => (
                    <div key={pkgName}>
                      {pkgName} ({cnt})
                    </div>
                  ))}
                </td>

                {/* Usage Pie */}
                <td style={{ width: "120px", textAlign: "center" }}>
                  {/* <UsagePieChart data={pieData} width={100} height={100} /> */}
                  <UsagePieChart data={pieData} width={350} height={350} />
                </td>

                {/* Files Used In: list each file path + count */}
                <td>
                  {Object.entries(usageByFile).map(([filePath, cnt]) => (
                    <div key={filePath}>
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
          <ul>
            {rpt.unused.map((comp) => (
              <li key={comp}>{comp}</li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
