import {
  Home,
  Users,
  Settings,
  CreditCard,
  BookOpen,
  MessageSquare,
  Link,
} from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "My Agents", icon: Users, path: "/agents" },
  { name: "Transactions", icon: CreditCard, path: "/transactions" },
  { name: "Knowledge Base", icon: BookOpen, path: "/knowledge" },
  { name: "Support", icon: MessageSquare, path: "/support" },
  { name: "Integrations", icon: Link, path: "/integrations" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-border bg-card px-4 py-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 px-4">
        <div className="w-8 h-8 rounded-full bg-primary" />
        <span className="font-semibold text-lg">AI Marketplace</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navigation.map((item) => (
          <RouterLink
            key={item.name}
            to={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </RouterLink>
        ))}
      </nav>

      <div className="border-t border-border pt-6 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <span className="font-semibold">JD</span>
          </div>
          <div className="flex-1">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
