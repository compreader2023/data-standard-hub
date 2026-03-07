import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, List } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryTree from "@/components/CategoryTree";
import CategoryDetail from "@/components/CategoryDetail";
import { categoryTree, type CategoryNode } from "@/data/categories";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function DataStandards() {
  const [selectedNode, setSelectedNode] = useState<CategoryNode | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileTreeOpen, setMobileTreeOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSelect = (node: CategoryNode) => {
    setSelectedNode(node);
    if (isMobile) setMobileTreeOpen(false);
  };

  const TreeSidebar = (
    <>
      <div className="p-4 border-b border-border shrink-0">
        <h3 className="text-sm font-semibold text-foreground mb-3">产品主数据分类目录</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索分类与产品..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <CategoryTree
          nodes={categoryTree}
          selectedCode={selectedNode?.code ?? null}
          onSelect={handleSelect}
        />
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden" style={{ height: "calc(100vh - 64px)" }}>
        {/* Mobile: Sheet drawer for tree */}
        {isMobile && (
          <div className="p-3 border-b border-border bg-card flex items-center gap-2 shrink-0">
            <Sheet open={mobileTreeOpen} onOpenChange={setMobileTreeOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <List className="h-4 w-4" />
                  产品主数据分类目录
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85vw] max-w-sm p-0 flex flex-col">
                {TreeSidebar}
              </SheetContent>
            </Sheet>
            {selectedNode && (
              <span className="text-sm text-muted-foreground truncate">
                当前: {selectedNode.name}
              </span>
            )}
          </div>
        )}

        {/* Desktop: Sidebar */}
        {!isMobile && (
          <>
            <aside
              className={`${
                sidebarOpen ? "w-80 lg:w-96" : "w-0"
              } transition-all duration-300 border-r border-border bg-card shrink-0 overflow-hidden flex flex-col`}
            >
              {TreeSidebar}
            </aside>

            <button
              className="flex items-center justify-center w-5 bg-muted hover:bg-accent border-r border-border transition-colors shrink-0"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              title={sidebarOpen ? "收起目录" : "展开目录"}
            >
              {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
          </>
        )}

        {/* Main content - independent scroll */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 lg:p-8">
            {selectedNode ? (
              <CategoryDetail node={selectedNode} onNavigate={handleSelect} />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Search className="h-7 w-7 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">产品主数据标准</h2>
                <p className="text-muted-foreground max-w-md">
                  {isMobile
                    ? "请点击上方「产品主数据分类目录」按钮选择分类查看详情。"
                    : "请从左侧目录树中选择一个分类查看详情。目录包含五大产品分类体系，涵盖六级层次结构。"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 w-full max-w-2xl">
                  {categoryTree.map((cat) => (
                    <button
                      key={cat.code}
                      className="text-left p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-colors group"
                      onClick={() => handleSelect(cat)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs mb-2">
                        {cat.code}
                      </div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {cat.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
