import cpmsLogo from "@/assets/cpms-logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={cpmsLogo} alt="CPMS" className="h-8 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              产品主数据标准服务平台致力于推进产品主数据标准化建设，促进产业数据互联互通。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">快速链接</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/certification" className="hover:text-secondary transition-colors">产品数据认证</a></li>
              <li><a href="/data" className="hover:text-secondary transition-colors">产品主数据标准</a></li>
              <li><a href="/news" className="hover:text-secondary transition-colors">标准动态</a></li>
              <li><a href="/about" className="hover:text-secondary transition-colors">关于我们</a></li>
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
          © 2026 产品主数据标准服务平台 版权所有
        </div>
      </div>
    </footer>
  );
}
