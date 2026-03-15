import { useState, useMemo } from "react";
import { ChevronRight, ChevronDown, Folder, FolderOpen, FileText } from "lucide-react";
import type { CategoryNode } from "@/data/categories";
import { getFullCode } from "@/data/categories";

interface Props {
  nodes: CategoryNode[];
  selectedCode: string | null;
  onSelect: (node: CategoryNode) => void;
}

interface TreeItemProps {
  node: CategoryNode;
  depth: number;
  selectedCode: string | null;
  expandedCodes: Set<string>;
  onToggle: (code: string) => void;
  onSelect: (node: CategoryNode) => void;
}

function TreeItem({ node, depth, selectedCode, expandedCodes, onToggle, onSelect }: TreeItemProps) {
  const isExpanded = expandedCodes.has(node.code);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedCode === node.code;
  const isProduct = node.level === 6;

  return (
    <div>
      <div
        className={`tree-item flex items-center gap-2 ${isSelected ? "active" : ""}`}
        style={{ paddingLeft: `${depth * 16 + 12}px` }}
        onClick={() => {
          onSelect(node);
          if (hasChildren) onToggle(node.code);
        }}
      >
        {hasChildren ? (
          <span className="shrink-0 w-4 h-4 flex items-center justify-center">
            {isExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          </span>
        ) : (
          <span className="shrink-0 w-4" />
        )}

        {isProduct ? (
          <FileText className="h-4 w-4 shrink-0 text-secondary" />
        ) : isExpanded ? (
          <FolderOpen className="h-4 w-4 shrink-0 text-secondary" />
        ) : (
          <Folder className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}

        <span className="truncate text-base" title={`${getFullCode(node.code)} ${node.name}`}>
          {node.name}
        </span>
      </div>

      {isExpanded && hasChildren && (
        <div>
          {node.children!.map((child) => (
            <TreeItem
              key={child.code}
              node={child}
              depth={depth + 1}
              selectedCode={selectedCode}
              expandedCodes={expandedCodes}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CategoryTree({ nodes, selectedCode, onSelect }: Props) {
  const [expandedCodes, setExpandedCodes] = useState<Set<string>>(new Set());

  const toggleNode = (code: string) => {
    setExpandedCodes((prev) => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  };

  return (
    <div className="py-2">
      {nodes.map((node) => (
        <TreeItem
          key={node.code}
          node={node}
          depth={0}
          selectedCode={selectedCode}
          expandedCodes={expandedCodes}
          onToggle={toggleNode}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}