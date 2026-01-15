import React from 'react';
import { 
  ShoppingBag, 
  Package, 
  Eye, 
  Users, 
  ArrowRight 
} from 'lucide-react';

const statsData = [
  {
    title: "Total Sales",
    value: "$84,254",
    change: "+12.5%",
    trend: "up",
    icon: ShoppingBag,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Orders",
    value: "1,254",
    change: "+8.2%",
    trend: "up",
    icon: Package,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "-2.1%",
    trend: "down",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Active Users",
    value: "2,420",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
];

const StatesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((item, index) => (
        <div 
          key={index} 
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                {item.title}
              </p>
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {item.value}
              </p>
              
              {/* FIXED: Added flex-nowrap and whitespace-nowrap for single line */}
              <div className="flex items-center space-x-1.5 mt-3 whitespace-nowrap">
                <div className={`flex items-center ${item.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  <ArrowRight className={`w-3.5 h-3.5 ${item.trend === 'up' ? '-rotate-45' : 'rotate-45'}`} />
                  <span className="text-sm font-semibold ml-0.5">{item.change}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  vs Last Month
                </span>
              </div>
            </div>

            <div className={`p-2.5 rounded-xl group-hover:scale-110 transition-all duration-200 ${item.bgColor} ${item.textColor}`}>
              <item.icon className="w-5 h-5" />
            </div>
          </div>

          <div className="mt-4 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${item.color} rounded-full`} 
              style={{ width: '70%' }} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatesGrid;