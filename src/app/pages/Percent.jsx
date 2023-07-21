import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Category 1", value: 200 },
  { name: "Category 2", value: 350 },
  { name: "Category 3", value: 450 },
  { name: "Category 4", value: 100 },
];

// Calculate the total value
const totalValue = data.reduce((total, item) => total + item.value, 0);

// Calculate the percentage for each category
data.forEach((item) => {
  item.percent = ((item.value / totalValue) * 100).toFixed(2); // Formatting percentage to 2 decimal places
});

const COLORS = ["#eb3f0f", "#1F2747", "#eb3f0f", "#1F2747"];

const PercentageChart = () => {
  return (
    <div className="percent">
      <BarChart width={200} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Bar dataKey="percent" fill="#eb3f0f" />
      </BarChart>
    </div>
  );
};

export default PercentageChart;
