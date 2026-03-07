import { Edit, Plus, Download, FileEdit } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CategoryNode } from "@/data/categories";
import { getFullCode, getPathToNode, categoryTree } from "@/data/categories";

interface Props {
  node: CategoryNode;
  onNavigate: (node: CategoryNode) => void;
}

export default function CategoryDetail({ node, onNavigate }: Props) {
  const isProduct = node.level === 6;
  const path = getPathToNode(categoryTree, node.code) || [];

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground mb-2">
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

      {/* Basic Info */}
      <div className="detail-section">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">基本信息</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-3.5 w-3.5 mr-1" /> 修改
            </Button>
            {!isProduct && (
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Plus className="h-3.5 w-3.5 mr-1" /> 添加子级
              </Button>
            )}
          </div>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground mb-0.5">编码</dt>
            <dd className="font-mono text-foreground">{getFullCode(node.code)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground mb-0.5">名称</dt>
            <dd className="text-foreground font-medium">{node.name}</dd>
          </div>
          <div className="md:col-span-2">
            <dt className="text-muted-foreground mb-0.5">描述</dt>
            <dd className="text-foreground">{node.description || "暂无描述"}</dd>
          </div>
          {isProduct && (
            <>
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
            </>
          )}
        </dl>
      </div>

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
                <div className="text-xs font-mono text-muted-foreground mb-1">{getFullCode(child.code)}</div>
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {child.name}
                </div>
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

      {/* Attribute table (level 6) */}
      {isProduct && node.attributes && node.attributes.length > 0 && (
        <div className="detail-section">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">属性列表</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <FileEdit className="h-3.5 w-3.5 mr-1" /> 申请修改
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-3.5 w-3.5 mr-1" /> 下载
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
                {node.attributes.map((attr, i) => (
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
      )}
    </div>
  );
}
