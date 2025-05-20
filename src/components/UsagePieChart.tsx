"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";

const COLORS = [
  "#4e79a7",
  "#f28e2c",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];

interface Entry {
  name: string;
  value: number;
}

interface Props {
  data: Entry[];
  width?: number | string;
  height?: number | string;
}

export default function UsagePieChart({
  data,
  width = "100%",
  height = 250,
}: Props) {
  // Only declare the “value” parameter here – we don’t need name
  const tooltipFormatter: TooltipProps<number, string>["formatter"] = (value) =>
    `${value}%`;

  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        {/* remove generic args here */}
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="70%"
          label={({ percent }) =>
            percent != null ? `${Math.round(percent * 100)}%` : ""
          }
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={tooltipFormatter} />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          wrapperStyle={{ fontSize: 12, marginTop: 8 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
