import { useState } from "react";
import { Edit, Plus, Download, FileEdit, Share2, Image, Box, ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { CategoryNode } from "@/data/categories";
import { getFullCode, getPathToNode, categoryTree } from "@/data/categories";
import productSample from "@/assets/product-sample.jpg";

interface Props {
  node: CategoryNode;
  onNavigate: (node: CategoryNode) => void;
}

// Mock multiple product images
const productImages = [productSample, productSample, productSample];

/* Shared panel for product images */
function ProductImagesPanel({ node }: { node: CategoryNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % productImages.length);

  return (
    <div className="detail-section">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Image className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">产品图片</h2>
        </div>
        <Button variant="outline" size="sm">
          <Edit className="h-3.5 w-3.5 mr-1" /> 申请添加/修改
        </Button>
      </div>
      <div className="relative group max-w-md">
        <div
          className="rounded-lg overflow-hidden bg-white aspect-[16/9] flex items-center justify-center cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <img src={productImages[currentIndex]} alt={node.name} className="w-full h-full object-contain" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
            <ZoomIn className="h-6 w-6 text-foreground/70" />
          </div>
        </div>
        {productImages.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
      {/* Thumbnails */}
      {productImages.length > 1 && (
        <div className="flex gap-2 mt-3 max-w-md">
          {productImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-16 h-12 rounded overflow-hidden border-2 transition-colors ${i === currentIndex ? "border-primary" : "border-border hover:border-muted-foreground"}`}
            >
              <img src={img} alt={`缩略图 ${i + 1}`} className="w-full h-full object-cover bg-white" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-3xl p-2 bg-white">
          <DialogTitle className="sr-only">产品图片预览</DialogTitle>
          <div className="relative flex items-center justify-center">
            <img src={productImages[currentIndex]} alt={node.name} className="max-h-[80vh] object-contain" />
            {productImages.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          <div className="flex gap-2 justify-center mt-2">
            {productImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-14 h-10 rounded overflow-hidden border-2 transition-colors ${i === currentIndex ? "border-primary" : "border-border hover:border-muted-foreground"}`}
              >
                <img src={img} alt={`缩略图 ${i + 1}`} className="w-full h-full object-cover bg-white" />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Mock 3D models
const modelItems = [
  { id: 1, label: "模型 A" },
  { id: 2, label: "模型 B" },
  { id: 3, label: "模型 C" },
];

/* Shared panel for 3D model */
function ModelPanel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevModel = () => setCurrentIndex((prev) => (prev - 1 + modelItems.length) % modelItems.length);
  const nextModel = () => setCurrentIndex((prev) => (prev + 1) % modelItems.length);

  const handleDownload = () => {
    alert("下载3D模型需要登录，请先登录后再试。");
  };

  return (
    <div className="detail-section">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Box className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">3D模型</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-3.5 w-3.5 mr-1" /> 下载模型
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="h-3.5 w-3.5 mr-1" /> 申请添加/修改
          </Button>
        </div>
      </div>
      <div className="relative group max-w-md">
        <div
          className="rounded-lg bg-white aspect-[16/9] flex items-center justify-center cursor-pointer relative"
          onClick={() => setLightboxOpen(true)}
        >
          <div className="text-center text-muted-foreground">
            <Box className="h-10 w-10 mx-auto mb-2 opacity-30" />
            <p className="text-xs">{modelItems[currentIndex].label} - 加载区域</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
            <ZoomIn className="h-6 w-6 text-foreground/70" />
          </div>
        </div>
        {modelItems.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); prevModel(); }} className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextModel(); }} className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/70 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
      {/* Thumbnails */}
      {modelItems.length > 1 && (
        <div className="flex gap-2 mt-3 max-w-md">
          {modelItems.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setCurrentIndex(i)}
              className={`w-16 h-12 rounded overflow-hidden border-2 transition-colors flex items-center justify-center bg-white ${i === currentIndex ? "border-primary" : "border-border hover:border-muted-foreground"}`}
            >
              <Box className="h-5 w-5 text-muted-foreground/40" />
            </button>
          ))}
        </div>
      )}

      {/* 3D Model Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-4 bg-white">
          <DialogTitle className="sr-only">3D模型预览</DialogTitle>
          <div className="relative aspect-[16/9] flex items-center justify-center bg-muted/20 rounded-lg">
            <div className="text-center text-muted-foreground">
              <Box className="h-16 w-16 mx-auto mb-3 opacity-30" />
              <p className="text-sm">{modelItems[currentIndex].label} - 全屏预览区域</p>
            </div>
            {modelItems.length > 1 && (
              <>
                <button onClick={prevModel} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={nextModel} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
          <div className="flex gap-2 justify-center mt-2">
            {modelItems.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setCurrentIndex(i)}
                className={`w-14 h-10 rounded overflow-hidden border-2 transition-colors flex items-center justify-center bg-white ${i === currentIndex ? "border-primary" : "border-border hover:border-muted-foreground"}`}
              >
                <Box className="h-4 w-4 text-muted-foreground/40" />
              </button>
            ))}
          </div>
          <div className="flex justify-end mt-2">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-3.5 w-3.5 mr-1" /> 下载模型
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* Shared panel for basic info */
function BasicInfoPanel({ node }: { node: CategoryNode }) {
  return (
    <div className="detail-section">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">基本信息</h2>
        <Button variant="outline" size="sm">
          <Edit className="h-3.5 w-3.5 mr-1" /> 申请修改
        </Button>
      </div>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base">
        <div className="md:col-span-2">
          <dt className="text-muted-foreground mb-0.5">描述</dt>
          <dd className="text-foreground">{node.description || "暂无描述"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground mb-0.5">版本号</dt>
          <dd className="text-foreground">{node.version || "-"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground mb-0.5">专家组名称</dt>
          <dd className="text-foreground">{node.expertGroup || "-"}</dd>
        </div>
        <div className="md:col-span-2">
          <dt className="text-muted-foreground mb-0.5">应用示例</dt>
          <dd>
            {node.applicationExample ? (
              <a href={node.applicationExample} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                {node.applicationExample}
              </a>
            ) : (
              <span className="text-muted-foreground">-</span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default function CategoryDetail({ node, onNavigate }: Props) {
  const isProduct = node.level === 6;
  const path = getPathToNode(categoryTree, node.code) || [];
  const [activeTab, setActiveTab] = useState("basic");

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1 text-base text-muted-foreground mb-2">
        {path.map((p, i) => (
          <span key={p.code} className="flex items-center gap-1">
            {i > 0 && <span className="mx-1">/</span>}
            <button
              className="hover:text-primary transition-colors underline-offset-2 hover:underline"
              onClick={() => onNavigate(p)}
            >
              {p.name}
            </button>
          </span>
        ))}
      </nav>

      {/* Prominent name & code */}
      <div className="detail-section">
        <h3 className="text-xl md:text-2xl font-bold text-primary">{node.name}</h3>
        <p className="text-sm font-mono text-muted-foreground mt-1">{getFullCode(node.code)}</p>
      </div>

      {/* Level 6: Product detail */}
      {isProduct ? (
        <>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start">
              <TabsTrigger value="basic">基本信息</TabsTrigger>
              <TabsTrigger value="images">产品图片</TabsTrigger>
              <TabsTrigger value="model">3D模型</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="mt-4">
              <BasicInfoPanel node={node} />
            </TabsContent>
            <TabsContent value="images" className="mt-4">
              <ProductImagesPanel node={node} />
            </TabsContent>
            <TabsContent value="model" className="mt-4">
              <ModelPanel />
            </TabsContent>
          </Tabs>

          {node.attributes && node.attributes.length > 0 && (
            <div className="mt-4">
              <AttributeTable node={node} />
            </div>
          )}
        </>
      ) : (
        /* Level 1-5 */
        <div className="detail-section">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">基本信息</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-3.5 w-3.5 mr-1" /> 申请修改
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Plus className="h-3.5 w-3.5 mr-1" /> 添加子级
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div className="md:col-span-2">
              <dt className="text-muted-foreground mb-0.5">描述</dt>
              <dd className="text-foreground">{node.description || "暂无描述"}</dd>
            </div>
          </dl>
        </div>
      )}

      {/* Child categories (levels 1-5) */}
      {!isProduct && node.children && node.children.length > 0 && (
        <div className="detail-section">
          <h2 className="text-lg font-semibold text-foreground mb-4">子分类</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {node.children.map((child) => (
              <button
                key={child.code}
                className="text-left p-3 rounded-md border border-border hover:border-primary hover:bg-accent transition-colors group"
                onClick={() => onNavigate(child)}
              >
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                  {child.name}
                </div>
                <div className="text-xs font-mono text-muted-foreground">{getFullCode(child.code)}</div>
                {child.children && child.children.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {child.children.length} 个子项
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* Extracted attribute table component */
function AttributeTable({ node }: { node: CategoryNode }) {
  return (
    <div className="detail-section">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">属性列表</h2>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm">
            <FileEdit className="h-3.5 w-3.5 mr-1" /> 申请修改
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-3.5 w-3.5 mr-1" /> 下载
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-3.5 w-3.5 mr-1" /> API同步
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="px-3 py-2.5 text-left font-medium whitespace-nowrap rounded-tl-md">序号</th>
              <th className="px-3 py-2.5 text-left font-medium whitespace-nowrap">编码</th>
              <th className="px-3 py-2.5 text-left font-medium whitespace-nowrap">属性名称</th>
              <th className="px-3 py-2.5 text-left font-medium whitespace-nowrap">类型</th>
              <th className="px-3 py-2.5 text-left font-medium whitespace-nowrap">单位编码-名称</th>
              <th className="px-3 py-2.5 text-left font-medium whitespace-nowrap rounded-tr-md">值序号-编码-名称</th>
            </tr>
          </thead>
          <tbody>
            {node.attributes!.map((attr, i) => (
              <tr key={attr.code} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                <td className="px-3 py-2.5 border-b border-border">{attr.seq}</td>
                <td className="px-3 py-2.5 border-b border-border font-mono text-xs">{attr.code}</td>
                <td className="px-3 py-2.5 border-b border-border">{attr.name}</td>
                <td className="px-3 py-2.5 border-b border-border">{attr.type}</td>
                <td className="px-3 py-2.5 border-b border-border">{attr.unitCodeName}</td>
                <td className="px-3 py-2.5 border-b border-border whitespace-pre-line text-xs leading-relaxed">{attr.values}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
