
import React from 'react';
// Error Fix: Ensure lucide-react is installed (npm install lucide-react)
import { TrendingUp, TrendingDown } from 'lucide-react';

const TopProducts = () => {
  // Data array definition (Error fix: Ensure this is inside the component or imported)
  const topProducts = [
    { name: "MacBook Pro 16\"", sales: "1247", amount: "$2,987,530", trend: "+12%" },
    { name: "iPhone 15 Pro", sales: "2156", amount: "$2,587,044", trend: "+8%" },
    { name: "AirPods Pro", sales: "3421", amount: "$852,229", trend: "-3%" },
    { name: "iPad Air", sales: "987", amount: "$591,213", trend: "+15%" },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden shadow-sm h-full">
      {/* Header Section */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Top Products</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
            View All
          </button>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Best performing products</p>
      </div>

      {/* Product List */}
      <div className="p-6 space-y-6">
        {topProducts.map((product, index) => (
          <div key={index} className="flex items-center justify-between group">
            <div className="space-y-1">
              <p className="font-bold text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">
                {product.name}
              </p>
              <p className="text-xs text-slate-500 font-medium">{product.sales} sales</p>
            </div>
            
            <div className="text-right space-y-1">
              <p className="font-bold text-slate-800 dark:text-white">{product.amount}</p>
              <div className={`flex items-center justify-end text-xs font-bold ${
                product.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'
              }`}>
                {/* Logic to show correct icon based on trend */}
                {product.trend.startsWith('+') ? (
                  <TrendingUp size={14} className="mr-1" />
                ) : (
                  <TrendingDown size={14} className="mr-1" />
                )}
                {product.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;