import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Category 1', value: 200 },
  { name: 'Category 2', value: 550 },
  
];

const COLORS = ['#1F2747', '#eb3f0f' ];

const DonutChartComponent = () => {
  return (
    <div className="dountChart">
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={70} // Set innerRadius to create the donut chart effect
        outerRadius={90}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  );
};

export default DonutChartComponent;
