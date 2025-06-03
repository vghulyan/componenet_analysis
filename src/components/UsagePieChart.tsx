// components/UsagePieChart.tsx
"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export type PieDatum = {
  name: string;
  value: number; // raw usage count
};

type UsagePieChartProps = {
  data: PieDatum[];
  width?: number | string;
  height?: number | string;
};

const COLORS = [
  "#2f78d3",
  "#ff8c42",
  "#e84545",
  "#38a3a5",
  "#f9c74f",
  "#90be6d",
  "#f3722c",
  "#577590",
  "#f94144",
  "#43aa8b",
  // add more if you have >10 slices
];

// Below, we only destructure { active, payload } because `label` was never used.
// We give `payload` a proper type: an array of objects that contain `.payload: PieDatum`
type TooltipPayloadItem = { payload: PieDatum };

const RawCountTooltip: React.FC<{
  active?: boolean;
  payload?: TooltipPayloadItem[];
}> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    const { name, value } = payload[0].payload;
    return (
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #ccc",
          padding: "0.5rem",
          borderRadius: 4,
        }}
      >
        <strong>{name}</strong>: {value}
      </div>
    );
  }
  return null;
};

export default function UsagePieChart({
  data,
  width = 300,
  height = 300,
}: UsagePieChartProps) {
  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="40%" // render as donut
            labelLine={false}
            label={({ name, value }) => `${name} (${value})`}
          >
            {data.map((_, idx) => (
              <Cell key={`slice-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip content={<RawCountTooltip />} />

          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ fontSize: "0.9rem" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
