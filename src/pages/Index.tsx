import { Link } from "react-router-dom";
import { Search, Database, ShieldCheck, FileText, ArrowRight, BarChart3, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";

const services = [
  {
    icon: Database,
    title: "产品主数据标准",
    desc: "提供完整的产品分类体系与标准化数据模型，覆盖五大类产品领域",
    link: "/data",
  },
  {
    icon: ShieldCheck,
    title: "产品数据认证",
    desc: "权威的产品数据质量认证服务，确保数据规范性与一致性",
    link: "/certification",
  },
  {
    icon: FileText,
    title: "标准文档下载",
    desc: "提供标准规范文档、技术指南和应用案例的下载服务",
    link: "/news",
  },
  {
    icon: Search,
    title: "标准查询检索",
    desc: "快速检索产品分类编码、属性定义和标准数据元",
    link: "/data",
  },
];

const stats = [
  { icon: Database, value: "50,000+", label: "标准产品数据" },
  { icon: BookOpen, value: "5", label: "产品大类" },
  { icon: Users, value: "200+", label: "参与专家" },
  { icon: BarChart3, value: "6", label: "分类层级" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <img
          src={heroBanner}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container flex flex-col items-center justify-center text-center py-20 md:py-28 lg:py-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            产品主数据标准服务平台
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            构建统一产品分类与编码体系，推动产业数据标准化与互联互通
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
              <Link to="/data">浏览产品标准 <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/certification">数据认证</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-0 -mt-12 relative z-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-8 md:border-r last:border-r-0 border-sidebar-border animate-count-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <s.icon className="h-6 w-6 text-secondary mb-2" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</span>
                <span className="text-sm text-primary-foreground/70 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">核心服务</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              围绕产品主数据标准，提供全链路标准化服务
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="card-elevated bg-card rounded-lg p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <svc.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Classification Overview */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">产品分类体系</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              覆盖五大领域的六级产品分类标准
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { code: "0", name: "农林渔业产品", sub: "种植、畜牧、渔业、中药" },
              { code: "1", name: "矿和矿物", sub: "煤、油、气、矿砂、电力" },
              { code: "2", name: "加工食品与纺织", sub: "食品、饮料、服装、皮革" },
              { code: "3", name: "其他可运输物品", sub: "木材、纸、化工、医药" },
              { code: "4", name: "金属与机械设备", sub: "金属、机械、电气、运输" },
            ].map((cat, i) => (
              <Link
                key={i}
                to="/data"
                className="card-elevated bg-card rounded-lg p-5 text-center group border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-3">
                  {cat.code}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{cat.name}</h3>
                <p className="text-xs text-muted-foreground">{cat.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
