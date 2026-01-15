
import { UserPlus, ShoppingCart, CreditCard, RefreshCw, AlertTriangle, Clock } from 'lucide-react';

const Activity = () => {
  const activities = [
    { id: 1, title: 'New User', desc: 'John Smith joined', time: '2m ago', icon: <UserPlus size={16} className="text-blue-500"/>, color: 'bg-blue-50' },
    { id: 2, title: 'New Order', desc: 'Order #3847 rec.', time: '5m ago', icon: <ShoppingCart size={16} className="text-emerald-500"/>, color: 'bg-emerald-50' },
    { id: 3, title: 'Payment', desc: 'Verified $1,199', time: '12m ago', icon: <CreditCard size={16} className="text-purple-500"/>, color: 'bg-purple-50' },
    { id: 4, title: 'Update', desc: 'Backup done', time: '1h ago', icon: <RefreshCw size={16} className="text-slate-500"/>, color: 'bg-slate-50' },
  ];

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-6 shadow-sm w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Activity Feed</h3>
        <button className="text-blue-600 text-xs font-bold uppercase">View All</button>
      </div>

      {/* Grid Container: Items side-by-side */}
      <div className="grid grid-cols-2 gap-4">
        {activities.map((item) => (
          <div key={item.id} className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:shadow-md transition-all">
            <div className={`w-10 h-10 rounded-xl ${item.color} dark:bg-slate-800 flex items-center justify-center mb-3`}>
              {item.icon}
            </div>
            <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{item.title}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mb-2">{item.desc}</p>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
              <Clock size={10} /> {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;