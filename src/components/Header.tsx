import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import cpmsLogo from "@/assets/cpms-logo.png";

const navItems = [
  { label: "首页", path: "/" },
  { label: "产品主数据标准", path: "/data" },
  { label: "产品数据认证", path: "/certification" },
  { label: "证书查询", path: "/certificate-query" },
  { label: "资讯动态", path: "/news" },
  { label: "CPMS应用", path: "/applications" },
  { label: "常见问题", path: "/faq" },
  { label: "关于CPMS", path: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={cpmsLogo} alt="CPMS Logo" className="h-9 w-auto brightness-0 invert" />
          <span className="hidden sm:inline text-primary-foreground font-semibold text-base">产品主数据标准服务平台</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-primary-foreground/90 hover:text-secondary text-sm xl:text-base ${
                location.pathname === item.path ? "active text-secondary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="#" className="flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
            <LogIn className="h-3.5 w-3.5" />
            登录
          </a>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm h-8 px-4">
            免费注册
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-primary border-t border-sidebar-border pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-3 text-base text-primary-foreground/90 hover:text-secondary hover:bg-sidebar-accent transition-colors ${
                location.pathname === item.path ? "text-secondary bg-sidebar-accent" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 pt-3 flex gap-3">
            <a href="#" className="text-base text-primary-foreground/70 hover:text-secondary">登录</a>
            <a href="#" className="text-base text-secondary font-semibold">免费注册</a>
          </div>
        </nav>
      )}
    </header>
  );
}