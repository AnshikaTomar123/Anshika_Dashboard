const Tablesection = () => {

  const ordersData = [
  { id: "#ORD-7742", customer: "Anshika Tomar", product: "MacBook Pro", amount: "$2,400", status: "Completed", date: "Jan 12, 2026" },
  { id: "#ORD-8821", customer: "Rahul Sharma", product: "iPhone 15", amount: "$999", status: "Processing", date: "Jan 14, 2026" },
  { id: "#ORD-9932", customer: "Sneha Kapoor", product: "iPad Air", amount: "$599", status: "Shipped", date: "Jan 15, 2026" },
  { id: "#ORD-4412", customer: "Vikram Singh", product: "AirPods Max", amount: "$549", status: "Pending", date: "Jan 15, 2026" },
];

const topProducts = [
    { name: "MacBook Pro 16\"", sales: "1247", amount: "$2,987,530", trend: "+12%" },
    { name: "iPhone 15 Pro", sales: "2156", amount: "$2,587,044", trend: "+8%" },
    { name: "AirPods Pro", sales: "3421", amount: "$852,229", trend: "-3%" },
    { name: "iPad Air", sales: "987", amount: "$591,213", trend: "+15%" },
  ]; //
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden mt-6">
      
      {/* Header Section from your code snippet */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Orders</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Latest customer orders</p>
        </div>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
          View All
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
            {ordersData.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors">
                <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">{order.id}</td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{order.customer}</td>
                <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{order.product}</td>
                <td className="p-4 text-sm font-semibold text-slate-800 dark:text-white">{order.amount}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    order.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                    order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-500 dark:text-slate-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    
  );
};

export default Tablesection