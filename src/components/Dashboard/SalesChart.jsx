import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Data based on image_240988.png
const data = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Books', value: 200 },
  { name: 'Other', value: 100 },
];

// Colors matching the donut segments in image_24012d.png
const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

const SalesChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 h-full shadow-sm">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Sales by Category</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Production Distribution</p>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={85}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Custom Legend Section matching image_240988.png */}
        <div className="w-full mt-2 space-y-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;