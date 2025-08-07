import { Home, FileText, Heart, Droplets, Package, BarChart3, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/dashboard", label: "DASHBOARD", icon: Home },
    { path: "/admin/health-screening", label: "Health Screening Reports", icon: FileText },
    { path: "/admin/donor-reports", label: "Donor Reports", icon: Heart },
    { path: "/admin/breastmilk-requests", label: "BreastMilk Requestee", icon: Droplets },
    { path: "/admin/milk-inventory", label: "Milk Inventory", icon: Package },
    { path: "/admin/reports", label: "Reports", icon: BarChart3 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-secondary min-h-screen p-4 flex flex-col">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8 pt-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold">M</span>
          </div>
        </div>
        <span className="text-foreground font-medium">ADMIN</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-card text-primary font-medium shadow-sm"
                  : "text-foreground hover:bg-card/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;