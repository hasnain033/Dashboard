import React from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 30 },
  { name: "Group C", value: 30 },
  { name: "Group D", value: 20 },
];

export default function Piewidget({ userData }) {
  return (
    <div
      className="col-12"
      style={{
        width: `${20 * userData.width}rem`,
        height: `${20 * userData.height}rem`,
      }}
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
