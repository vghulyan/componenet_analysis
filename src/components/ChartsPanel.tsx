"use client";

import { RawReport } from "@/app/types";
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
import { useMemo } from "react";

type Props = {
  rpt: RawReport;
  showAll: boolean;
  toggleShowAll: () => void;
};

export default function ChartsPanel({ rpt, showAll, toggleShowAll }: Props) {
  /* ── Prepare pieData ───────────────────────────────────────── */
  const pieData = useMemo(() => {
    // Build [component, totalUsage] array
    const totals: [string, number][] = Object.entries(rpt.usageMap).map(
      ([comp, files]) => [comp, Object.values(files).reduce((a, b) => a + b, 0)]
    );

    // Sort descending, then take top 10 (unless showAll is true)
    const sliceCount = showAll ? totals.length : 10;
    const topList = totals.sort((a, b) => b[1] - a[1]).slice(0, sliceCount);

    return topList.map(([name, value]) => ({ name, value }));
  }, [rpt, showAll]);

  /* ── Prepare barData ───────────────────────────────────────── */
  const barData = useMemo(() => {
    // Only count components in pieData set
    const wanted = new Set(pieData.map((p) => p.name));
    const counts: Record<string, number> = {};

    Object.entries(rpt.importMap).forEach(([comp, pkgs]) => {
      if (!wanted.has(comp)) return;
      Object.keys(pkgs).forEach((pkgName) => {
        counts[pkgName] = (counts[pkgName] || 0) + 1;
      });
    });

    return Object.entries(counts).map(([name, cnt]) => ({ name, cnt }));
  }, [rpt, pieData]);

  return (
    <>
      {/* Toggle Top-10 / All */}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <label style={{ fontWeight: 600 }}>
          <input
            type="checkbox"
            checked={showAll}
            onChange={toggleShowAll}
            style={{ marginRight: 6 }}
          />
          Show all components
        </label>
      </div>

      {/* Pie & Bar charts */}
      <section style={{ margin: "2rem 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: 12 }}>
          {showAll ? "All Components" : "Top 10 Components"}
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* Pie Chart */}
          <UsagePieChart data={pieData} width={350} height={350} />

          {/* Bar Chart */}
          <div style={{ width: 380, height: 380, textAlign: "center" }}>
            <h3 style={{ margin: 0, marginBottom: 8, fontSize: "1rem" }}>
              Components per&nbsp;Package
            </h3>
            <ResponsiveContainer>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  angle={-40}
                  textAnchor="end"
                  height={70}
                />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="cnt" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </>
  );
}
