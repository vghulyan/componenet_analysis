"use client";
export default function PackageSummaryTable({
  summary,
}: {
  summary: Record<string, number>;
}) {
  const rows = Object.entries(summary).sort((a, b) => b[1] - a[1]); // biggest first

  return (
    <table className="pkg-summary">
      <thead>
        <tr>
          <th>Package</th>
          <th># components</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([pkg, cnt]) => (
          <tr key={pkg}>
            <td>{pkg}</td>
            <td style={{ textAlign: "right" }}>{cnt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
