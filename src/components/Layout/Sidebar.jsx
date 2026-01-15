
import {
  BarChart3,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";

const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", badge: "New" },
  { id: "analytics", icon: BarChart3, label: "Analytics" },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
  },
  { id: "transactions", icon: CreditCard, label: "Transactions" },
  { id: "users", icon: Users, label: "Users", count: "2.4k" },
  { id: "ecommerce", icon: ShoppingBag, label: "E-commerce" },
  { id: "messages", icon: MessageSquare, label: "Messages", badge: "12" },
  { id: "calendar", icon: Calendar, label: "Calendar" },
  { id: "reports", icon: FileText, label: "Reports" },
  { id: "settings", icon: Settings, label: "Settings" },
];

function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-60"
      } transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
      border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col`}
    >
      {/* LOGO */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500">Admin Panel</p>
            </div>
          )}
        </div>
      </div>

      {/* MENU */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon
                  className={`w-5 h-5 ${
                    isActive ? "text-white" : ""
                  }`}
                />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </div>

              {!collapsed && item.badge && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-white/20 text-white">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* USER */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />
          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">
                Anshika Tomar
              </p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

