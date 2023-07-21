import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Category 1', value: -200 },
  { name: 'Category 2', value: 350 },
  { name: 'Category 3', value: -450 },
  { name: 'Category 4', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BarChartComponent = () => {
  return (
    <div className="bar">
    <BarChart width={200} height={200} data={data} className='barChart'>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#eb3f0f" />
    </BarChart>
    </div>
  );
};

export default BarChartComponent;
