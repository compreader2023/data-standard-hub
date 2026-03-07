import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import cpmsLogo from "@/assets/cpms-logo.png";

const navItems = [
  { label: "首页", path: "/" },
  { label: "产品数据认证", path: "/certification" },
  { label: "产品主数据标准", path: "/data" },
  { label: "标准动态", path: "/news" },
  { label: "关于我们", path: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Top bar */}
      <div className="border-b border-sidebar-border">
        <div className="container flex h-10 items-center justify-end gap-4 text-xs text-primary-foreground/70">
          <a href="#" className="hover:text-secondary transition-colors">登录</a>
          <a href="#" className="hover:text-secondary transition-colors">注册</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={cpmsLogo} alt="CPMS Logo" className="h-9 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-primary-foreground/90 hover:text-secondary ${
                location.pathname === item.path ? "active text-secondary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-sidebar-border pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-3 text-sm text-primary-foreground/90 hover:text-secondary hover:bg-sidebar-accent transition-colors ${
                location.pathname === item.path ? "text-secondary bg-sidebar-accent" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
