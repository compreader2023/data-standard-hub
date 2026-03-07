import { Link } from "react-router-dom";
import cpmsLogo from "@/assets/cpms-logo.png";

const footerLinks = [
  { label: "产品主数据标准", path: "/data" },
  { label: "产品数据认证", path: "/certification" },
  { label: "证书查询", path: "/certificate-query" },
  { label: "资讯动态", path: "/news" },
  { label: "CPMS应用", path: "/applications" },
  { label: "常见问题", path: "/faq" },
  { label: "关于CPMS", path: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={cpmsLogo} alt="CPMS" className="h-8 w-auto brightness-0 invert" />
              <span className="font-semibold text-sm">产品主数据标准服务平台</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              CPMS致力于建立统一的工业产品数据管理标准体系，推进产品主数据标准化建设，促进产业数据互联互通。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">快速链接</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-secondary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">联系我们</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>邮箱：service@cpms.org.cn</li>
              <li>电话：010-12345678</li>
              <li>地址：北京市</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sidebar-border mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          © 2026 产品主数据标准服务平台（CPMS）版权所有
        </div>
      </div>
    </footer>
  );
}
