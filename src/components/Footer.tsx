import { useState } from "react";
import { ExternalLink } from "lucide-react";
import cpmsLogo from "@/assets/cpms-logo.png";
import wechatQrcode from "@/assets/wechat-qrcode.png";

const friendLinks = [
  { label: "中国电子技术标准化研究院", url: "http://www.cesi.cn" },
  { label: "国家标准全文公开", url: "https://openstd.samr.gov.cn" },
  { label: "样本通", url: "https://www.yangbentong.com" },
  { label: "中国搜泵网", url: "http://www.pumpw.com" },
];

export default function Footer() {
  const [showQr, setShowQr] = useState(false);

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
            <h4 className="font-semibold mb-4 text-sm">友情链接</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {friendLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
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
            <div className="mt-4 relative inline-block">
              <button
                onMouseEnter={() => setShowQr(true)}
                onMouseLeave={() => setShowQr(false)}
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.007-.27-.026-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z" />
                </svg>
                关注公众号
              </button>
              {showQr && (
                <div className="absolute bottom-full left-0 mb-2 p-2 bg-background rounded-lg shadow-lg z-50">
                  <img src={wechatQrcode} alt="CPMS公众号二维码" className="w-32 h-32" />
                  <p className="text-xs text-foreground text-center mt-1">扫码关注CPMS公众号</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-sidebar-border mt-8 pt-6 text-center text-xs text-primary-foreground/50">
          © 2026 产品主数据标准服务平台（CPMS）版权所有
        </div>
      </div>
    </footer>
  );
}
