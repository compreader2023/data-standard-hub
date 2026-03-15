import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Database, ShieldCheck, Search, ArrowRight, FileCheck, PlayCircle, ChevronLeft, ChevronRight, Volume2, Users, Award, Cpu, UserPlus, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";
import videoCover from "@/assets/video-cover.jpg";
import newsPolicy from "@/assets/news-policy.jpg";
import newsIndustry from "@/assets/news-industry.jpg";

const banners = [
  {
    image: banner1,
    title: "产品主数据标准",
    subtitle: "推动工程建设领域产品主数据标准化与数字化转型",
    buttons: [
      { label: "查看产品主数据标准", link: "/data", variant: "primary" as const },
      { label: "了解产品主数据标准", link: "/about", variant: "outline" as const },
    ],
  },
  {
    image: banner2,
    title: "行业专家共建标准",
    subtitle: "汇聚行业专家智慧，共同贡献力量，补充和完善产品主数据标准体系",
    buttons: [
      { label: "查看产品主数据标准", link: "/data", variant: "primary" as const },
      { label: "了解产品主数据标准", link: "/about", variant: "outline" as const },
    ],
  },
  {
    image: banner3,
    title: "产品数据合规认证",
    subtitle: "基于CPMS产品主数据标准的产品数据合规性认证服务",
    buttons: [
      { label: "产品数据认证", link: "/certification", variant: "primary" as const },
      { label: "了解产品主数据标准", link: "/about", variant: "outline" as const },
    ],
  },
];

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
  { date: "2025-12-20", title: "工信部发布工业数据管理新规", desc: "新规要求工业企业建立标准化产品数据管理体系。", image: newsPolicy },
  { date: "2025-11-15", title: "国务院推进数字化转型指导意见", desc: "明确提出加快工业产品数据标准化建设步伐。", image: newsPolicy },
  { date: "2025-10-28", title: "行业标准化工作会议召开", desc: "会议强调产品数据标准在工程建设中的核心地位。", image: newsPolicy },
];

const industryNews = [
  { date: "2025-12-15", title: "CPMS 2025年度标准更新发布", desc: "新版标准新增了200余项产品数据属性定义。", image: newsIndustry },
  { date: "2025-11-20", title: "CPMS与国际标准组织CFIHOS达成合作", desc: "双方将在产品数据标准互认领域开展合作。", image: newsIndustry },
  { date: "2025-10-08", title: "首批CPMS产品数据认证企业名单公布", desc: "共有15家企业通过首批产品数据合规认证。", image: newsIndustry },
];

const announcements = [
  { date: "2026-02-28", title: "关于开展2026年度CPMS产品数据认证工作的通知" },
  { date: "2026-02-15", title: "CPMS标准数据库系统升级维护公告" },
  { date: "2026-01-20", title: "CPMS专家委员会2026年第一次会议通知" },
  { date: "2026-01-10", title: "关于征集CPMS标准修订意见的公告" },
];

const experts = [
  { name: "陈晓峰", org: "国家管网集团工程技术有限公司" },
  { name: "赵敏", org: "华能集团技术研究院" },
  { name: "李明辉", org: "中国石化工程建设有限公司" },
  { name: "王建国", org: "中国石油工程建设有限公司" },
  { name: "张伟", org: "中国海洋石油集团有限公司" },
  { name: "刘强", org: "中国化学工程集团有限公司" },
  { name: "周涛", org: "中国中冶集团有限公司" },
  { name: "吴芳", org: "中国石油天然气集团有限公司" },
  { name: "孙磊", org: "中国能源建设集团有限公司" },
  { name: "杨静", org: "中国电力建设集团有限公司" },
];



const partnerCategories = [
  {
    icon: Users,
    title: "区域推广合作伙伴",
    desc: "凭借地域资源与渠道优势，为 CPMS 体系开展地域性市场推广，推动标准体系在各地的落地与普及。",
    partners: [
      { name: "浙江数据中心", url: "#" },
      { name: "1688", url: "https://www.1688.com" },
    ],
  },
  {
    icon: Award,
    title: "认证服务合作伙伴",
    desc: "依托专业资质与行业能力，助力企业完成 CPMS 产品数据标准符合性认证，为认证工作提供专业支撑。",
    partners: [
      { name: "四川大数据联合会", url: "#" },
    ],
  },
  {
    icon: Cpu,
    title: "技术服务合作伙伴",
    desc: "聚焦软件技术服务领域，为 CPMS 平台提供核心技术支撑与技术服务，保障平台高效稳定运行。",
    partners: [
      { name: "北京品冠天成科技有限公司", url: "#" },
      { name: "杭州炽橙数字科技有限公司", url: "#" },
      { name: "美林数据技术股份有限公司", url: "#" },
    ],
  },
];

const partnerTypeLabels = ["区域推广合作伙伴", "认证服务合作伙伴", "技术服务合作伙伴"];
const cpmsKnowledgeLevels = ["非常了解", "比较了解", "不了解"];

function JoinPartnerDialog({ open, onOpenChange, defaultType }: { open: boolean; onOpenChange: (v: boolean) => void; defaultType?: string }) {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    company: "",
    partnerType: defaultType || partnerTypeLabels[0],
    cpmsKnowledge: "比较了解",
    info: "",
  });
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (defaultType) setForm(f => ({ ...f, partnerType: defaultType }));
  }, [defaultType]);

  const validatePhone = (phone: string) => /^1[3-9]\d{9}$/.test(phone);

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.company || !form.email) {
      toast({ title: "请填写必填项", description: "姓名、手机号、Email和单位名称为必填项", variant: "destructive" });
      return;
    }
    if (!validatePhone(form.phone)) {
      setPhoneError("请输入正确的11位手机号");
      return;
    }
    setPhoneError("");
    toast({ title: "提交成功", description: "感谢您的申请，我们将尽快与您联系！" });
    onOpenChange(false);
    setForm({ name: "", title: "", email: "", phone: "", company: "", partnerType: partnerTypeLabels[0], cpmsKnowledge: "比较了解", info: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>加入 CPMS 生态合作伙伴</DialogTitle>
          <DialogDescription>请填写以下信息，我们将尽快与您取得联系。</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>姓名 <span className="text-destructive">*</span></Label>
              <Input className="mt-1" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="请输入姓名" />
            </div>
            <div>
              <Label>职务</Label>
              <Input className="mt-1" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="请输入职务" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Email <span className="text-destructive">*</span></Label>
              <Input className="mt-1" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="请输入Email" />
            </div>
            <div>
              <Label>手机号 <span className="text-destructive">*</span></Label>
              <Input className="mt-1" value={form.phone} onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setPhoneError(""); }} placeholder="请输入手机号" />
              {phoneError && <p className="text-xs text-destructive mt-1">{phoneError}</p>}
            </div>
          </div>
          <div>
            <Label>单位名称 <span className="text-destructive">*</span></Label>
            <Input className="mt-1" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="请输入单位名称" />
          </div>
          <div>
            <Label>伙伴类型</Label>
            <RadioGroup className="mt-2" value={form.partnerType} onValueChange={v => setForm(f => ({ ...f, partnerType: v }))}>
              {partnerTypeLabels.map(t => (
                <div key={t} className="flex items-center space-x-2">
                  <RadioGroupItem value={t} id={`pt-${t}`} />
                  <Label htmlFor={`pt-${t}`} className="font-normal cursor-pointer">{t}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label>您是否了解CPMS</Label>
            <RadioGroup className="mt-2" value={form.cpmsKnowledge} onValueChange={v => setForm(f => ({ ...f, cpmsKnowledge: v }))}>
              {cpmsKnowledgeLevels.map(l => (
                <div key={l} className="flex items-center space-x-2">
                  <RadioGroupItem value={l} id={`ck-${l}`} />
                  <Label htmlFor={`ck-${l}`} className="font-normal cursor-pointer">{l}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label>您希望进一步了解的信息</Label>
            <Textarea className="mt-1" value={form.info} onChange={e => setForm(f => ({ ...f, info: e.target.value }))} placeholder="请输入您想了解的内容" rows={3} />
          </div>
          <Button className="w-full" onClick={handleSubmit}>确认提交</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ExpertsCarousel({ experts }: { experts: { name: string; org: string }[] }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [displayedExperts, setDisplayedExperts] = useState<{ name: string; org: string }[]>([]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(2);
      else if (width < 768) setVisibleCount(3);
      else if (width < 1024) setVisibleCount(4);
      else setVisibleCount(5);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Pick random experts
  const pickRandom = useCallback((count: number) => {
    const shuffled = [...experts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }, [experts]);

  useEffect(() => {
    setDisplayedExperts(pickRandom(visibleCount));
  }, [visibleCount, pickRandom]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setDisplayedExperts(pickRandom(visibleCount));
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, [visibleCount, pickRandom]);

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-base mb-2 block">CPMS专家库</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">行业权威专家</h2>
          <p className="text-base text-muted-foreground mt-2">从上千位行业专家中随机展示</p>
        </div>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-opacity duration-400 ${fading ? "opacity-0" : "opacity-100"}`}
          style={{ transitionDuration: "400ms" }}
        >
          {displayedExperts.map((expert, i) => (
            <div key={`${expert.name}-${i}`} className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-3">
                {expert.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-foreground">{expert.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{expert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [joinDefaultType, setJoinDefaultType] = useState("");
  const nextBanner = useCallback(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, []);

  const prevBanner = useCallback(() => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextBanner, 5000);
    return () => clearInterval(timer);
  }, [nextBanner]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Carousel */}
      <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
        {banners.map((banner, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === currentBanner ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img src={banner.image} alt={banner.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="hero-overlay absolute inset-0" />
            <div className="relative container flex flex-col items-start justify-center py-24 md:py-32 lg:py-40 h-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {banner.title}
              </h1>
               <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mb-8">
                {banner.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {banner.buttons.map((btn, bi) => (
                  <Button
                    key={bi}
                    asChild
                    size="lg"
                    className={
                      btn.variant === "primary"
                        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
                        : "border-2 border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
                    }
                  >
                    <Link to={btn.link}>
                      {btn.label}
                      {btn.variant === "primary" && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* Carousel controls */}
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center text-primary-foreground transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/20 hover:bg-background/40 flex items-center justify-center text-primary-foreground transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentBanner(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentBanner ? "bg-secondary" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </section>

      {/* Announcements - compact, right after banner */}
      <section className="py-4 border-b border-border bg-accent/50">
        <div className="container flex items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <Volume2 className="h-4 w-4 text-secondary" />
            <span className="text-base font-semibold text-foreground">公告</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-6 text-base">
              {announcements.slice(0, 3).map((item, i) => (
                <Link key={i} to="/news" className="whitespace-nowrap text-muted-foreground hover:text-primary transition-colors truncate">
                  <span className="text-sm text-muted-foreground/60 mr-2">[{item.date}]</span>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/news" className="text-sm text-secondary hover:underline shrink-0">更多</Link>
        </div>
      </section>

      {/* About CPMS + Video */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-base mb-2 block">关于CPMS</span>
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
            <div className="relative rounded-xl overflow-hidden cursor-pointer group aspect-video">
              <img src={videoCover} alt="CPMS宣传视频" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-primary-foreground drop-shadow-lg group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-base mb-2 block">核心功能</span>
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

      {/* CPMS 生态合作伙伴体系 */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm mb-2 block">生态共建</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">CPMS 生态合作伙伴体系</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerCategories.map((cat, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <cat.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cat.desc}</p>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.partners.map((p, pi) => (
                      <a
                        key={pi}
                        href={p.url}
                        target={p.url !== "#" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-secondary transition-colors bg-accent/50 rounded px-3 py-1.5"
                      >
                        {p.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                  onClick={() => { setJoinDefaultType(cat.title); setJoinDialogOpen(true); }}
                >
                  <UserPlus className="h-4 w-4 mr-1" />
                  加入我们
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Partner Dialog */}
      <JoinPartnerDialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen} defaultType={joinDefaultType} />

      {/* News Section - Policy + Industry side by side */}
      <section className="py-16 md:py-20 section-alt">
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
                  <Link key={i} to="/news" className="flex gap-4 card-elevated bg-card rounded-lg border border-border overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-28 h-24 object-cover shrink-0" />
                    <div className="py-3 pr-4">
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                      <h3 className="font-semibold text-foreground mt-1 mb-1 text-sm line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
                    </div>
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
                  <Link key={i} to="/news" className="flex gap-4 card-elevated bg-card rounded-lg border border-border overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-28 h-24 object-cover shrink-0" />
                    <div className="py-3 pr-4">
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                      <h3 className="font-semibold text-foreground mt-1 mb-1 text-sm line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts */}
      <ExpertsCarousel experts={experts} />


      <Footer />
    </div>
  );
}
