import { Link } from "react-router-dom";
import { Database, ShieldCheck, Search, ArrowRight, FileCheck, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const coreServices = [
  {
    icon: Database,
    title: "标准数据库",
    desc: "涵盖五大类产品的标准化数据，支持6级分类体系",
    link: "/data",
  },
  {
    icon: ShieldCheck,
    title: "产品数据认证",
    desc: "基于CPMS标准的产品数据合规性认证服务",
    link: "/certification",
  },
  {
    icon: FileCheck,
    title: "证书查询",
    desc: "在线查询已认证产品的数据合规证书",
    link: "/certificate-query",
  },
];

const policyNews = [
  { date: "2025-12-20", title: "工信部发布工业数据管理新规", desc: "新规要求工业企业建立标准化产品数据管理体系。" },
  { date: "2025-11-15", title: "国务院推进数字化转型指导意见", desc: "明确提出加快工业产品数据标准化建设步伐。" },
  { date: "2025-10-28", title: "行业标准化工作会议召开", desc: "会议强调产品数据标准在工程建设中的核心地位。" },
];

const industryNews = [
  { date: "2025-12-15", title: "CPMS 2025年度标准更新发布", desc: "新版标准新增了200余项产品数据属性定义。" },
  { date: "2025-11-20", title: "CPMS与国际标准组织CFIHOS达成合作", desc: "双方将在产品数据标准互认领域开展合作。" },
  { date: "2025-10-08", title: "首批CPMS产品数据认证企业名单公布", desc: "共有15家企业通过首批产品数据合规认证。" },
];

const announcements = [
  { date: "2026-02-28", title: "关于开展2026年度CPMS产品数据认证工作的通知" },
  { date: "2026-02-15", title: "CPMS标准数据库系统升级维护公告" },
  { date: "2026-01-20", title: "CPMS专家委员会2026年第一次会议通知" },
  { date: "2026-01-10", title: "关于征集CPMS标准修订意见的公告" },
  { date: "2025-12-30", title: "2025年度CPMS标准应用优秀案例评选结果公示" },
];

const experts = [
  { name: "陈晓峰", org: "国家管网集团工程技术有限公司" },
  { name: "赵敏", org: "华能集团技术研究院" },
  { name: "李明辉", org: "中国石化工程建设有限公司" },
  { name: "王建国", org: "中国石油工程建设有限公司" },
];

const partners = ["中国石油", "中国石化", "中国海油", "国家管网", "中国化学", "中国中冶", "华能集团"];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
        <img
          src={heroBanner}
          alt="产品主数据标准"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container flex flex-col items-start justify-center py-24 md:py-32 lg:py-40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            产品主数据标准
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            推动工程建设领域产品数据标准化与数字化转型
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
              <Link to="/data">进入标准数据库 <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/about">了解CPMS标准</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About CPMS */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm mb-2 block">关于CPMS</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">构建工业产品数据标准生态</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CPMS（China Product Master Standard）致力于建立统一的工业产品数据管理标准体系，覆盖工程建设全生命周期的产品数据需求。通过标准化的产品分类、属性定义和数据格式，实现产业链上下游的高效数据交换与共享。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                我们的标准体系已涵盖五大核心类别，支持6级深度分类结构，为工程设计、采购、施工、运维提供全面的数据支撑。
              </p>
              <Button asChild variant="outline">
                <Link to="/about">了解更多</Link>
              </Button>
            </div>
            <div className="bg-muted rounded-xl flex items-center justify-center aspect-video">
              <div className="text-center">
                <PlayCircle className="h-16 w-16 text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">点击播放CPMS宣传视频</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm mb-2 block">核心功能</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">一站式产品数据服务</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="card-elevated bg-card rounded-lg p-8 group border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <svc.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section - Policy + Industry side by side */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Policy News */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">政策指引</h2>
                <Link to="/news" className="text-sm text-secondary hover:underline">更多 &gt;&gt;</Link>
              </div>
              <div className="space-y-4">
                {policyNews.map((item, i) => (
                  <Link key={i} to="/news" className="block card-elevated bg-card rounded-lg p-5 border border-border">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <h3 className="font-semibold text-foreground mt-1 mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
            {/* Industry News */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">行业动态</h2>
                <Link to="/news" className="text-sm text-secondary hover:underline">更多 &gt;&gt;</Link>
              </div>
              <div className="space-y-4">
                {industryNews.map((item, i) => (
                  <Link key={i} to="/news" className="block card-elevated bg-card rounded-lg p-5 border border-border">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <h3 className="font-semibold text-foreground mt-1 mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">公告通知</h2>
            <Link to="/news" className="text-sm text-secondary hover:underline">更多 &gt;&gt;</Link>
          </div>
          <div className="bg-card rounded-lg border border-border divide-y divide-border">
            {announcements.map((item, i) => (
              <Link key={i} to="/news" className="flex items-center justify-between px-6 py-4 hover:bg-accent/50 transition-colors">
                <span className="text-sm text-foreground">{item.title}</span>
                <span className="text-xs text-muted-foreground shrink-0 ml-4">{item.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm mb-2 block">CPMS专家库</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">行业权威专家</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {experts.map((expert, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-3">
                  {expert.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-foreground">{expert.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{expert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm mb-2 block">合作伙伴</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">行业领军企业信赖之选</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((name, i) => (
              <div key={i} className="bg-card border border-border rounded-lg px-8 py-5 text-sm font-medium text-foreground card-elevated">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
