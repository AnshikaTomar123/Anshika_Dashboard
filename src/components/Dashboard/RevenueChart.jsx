import React from "react";
// Sahi library se imports (Corrected from image_1997a1.png)
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Data from image_1990fd.png
const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 52000, expenses: 38000 },
  { month: "Mar", revenue: 48000, expenses: 35000 },
  { month: "Apr", revenue: 61000, expenses: 42000 },
  { month: "May", revenue: 55000, expenses: 40000 },
  { month: "Jun", revenue: 67000, expenses: 45000 },
  { month: "Jul", revenue: 72000, expenses: 48000 },
  { month: "Aug", revenue: 69000, expenses: 46000 },
  { month: "Sep", revenue: 78000, expenses: 52000 },
  { month: "Oct", revenue: 74000, expenses: 50000 },
  { month: "Nov", revenue: 82000, expenses: 55000 },
  { month: "Dec", revenue: 89000, expenses: 58000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-4 shadow-sm">
      {/* Header & Legend (Combined from image_1985b6.png & image_192ae3.png) */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">Revenue Chart</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Monthly revenue and expenses</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Revenue</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"></div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Expenses</span>
          </div>
        </div>
      </div>

      {/* Chart Container (image_199ba6.png) */}
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            {/* Gradients from image_199b86.png */}
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            
            <Tooltip 
              cursor={{ fill: '#f1f5f9', opacity: 0.4 }}
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                padding: '12px' 
              }}
            />

            {/* Bars with exact gradients and rounded corners */}
            <Bar 
              dataKey="revenue" 
              fill="url(#revenueGradient)" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
            <Bar 
              dataKey="expenses" 
              fill="url(#expensesGradient)" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;