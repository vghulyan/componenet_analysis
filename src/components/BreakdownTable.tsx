/* src/components/BreakdownTable.tsx */
"use client";
import clsx from "clsx";

interface Row {
  file: string;
  folder: string;
  packages: Record<string, { pct: number; lines: number[] }>;
}

export default function BreakdownTable({ rows }: { rows: Row[] }) {
  const base = (p: string) => p.split("/").pop() ?? p;

  return (
    <div className="pkg-table-wrapper">
      <table className="pkg-table">
        {/* control column widths */}
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "55%" }} />
        </colgroup>

        <thead>
          <tr>
            <th>File</th>
            <th>Folder</th>
            <th>Packages (%, lines)</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => {
            const topPkg = Object.entries(r.packages).sort(
              (a, b) => b[1].pct - a[1].pct
            )[0][0];

            return (
              <tr key={r.file}>
                <td>{base(r.file)}</td>
                <td title={r.folder}>{truncateMid(r.folder, 40)}</td>
                <td>
                  <ul className="pkg-list">
                    {Object.entries(r.packages).map(([pkg, info]) => (
                      <li
                        key={`${r.file}-${pkg}`}
                        className={clsx({
                          top: pkg === topPkg,
                          unresolved: pkg === "—",
                        })}
                      >
                        <span className="pkg-name">{pkg}</span>
                        <span className="pkg-pct">{info.pct}%</span>
                        <span className="pkg-lines">
                          @ {info.lines.join(", ")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* helpers */
function truncateMid(str: string, max = 40) {
  if (str.length <= max) return str;
  const slice = Math.floor(max / 2) - 1;
  return str.slice(0, slice) + "…" + str.slice(-slice);
}
