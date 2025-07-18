/* components/PackageSummaryTable.tsx */
"use client";
import clsx from "clsx";

export default function PackageSummaryTable({
  summary,
  total,
}: {
  summary: Record<string, number>;
  total: number;
}) {
  // turn the map into a sorted array
  const rows = Object.entries(summary).sort((a, b) => b[1] - a[1]);

  return (
    <div style={{ maxWidth: 650, marginTop: 24 }}>
      <h3>Package summary</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "6px 8px" }}>Package</th>
            <th style={{ textAlign: "right", padding: "6px 8px" }}>
              # components
            </th>
            <th style={{ textAlign: "right", padding: "6px 8px" }}>% total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([pkg, cnt], i) => (
            <tr
              key={pkg}
              className={clsx({ zebra: i % 2 === 1 })}
              style={{
                background: i % 2 ? "#f5f7fa" : "white",
              }}
            >
              <td style={{ padding: "6px 8px" }}>{pkg}</td>
              <td style={{ textAlign: "right", padding: "6px 8px" }}>{cnt}</td>
              <td style={{ textAlign: "right", padding: "6px 8px" }}>
                {((cnt / total) * 100).toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
