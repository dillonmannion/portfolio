"use client";

import { useState } from "react";
import { ChevronRight, File, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface TreeNode {
  name: string;
  description?: string;
  children?: TreeNode[];
}

const TREE: TreeNode = {
  name: "Middle-earth",
  description: "NixOS config root",
  children: [
    {
      name: "flake.nix",
      description: "Flake entrypoint — inputs and outputs",
    },
    {
      name: "hosts/",
      description: "Per-machine configurations",
      children: [
        {
          name: "rivendell/",
          description: "Primary workstation",
          children: [
            { name: "configuration.nix", description: "System config" },
            { name: "hardware.nix", description: "Hardware-specific" },
          ],
        },
        {
          name: "the-shire/",
          description: "Home server",
          children: [
            { name: "configuration.nix", description: "System config" },
            { name: "services.nix", description: "Self-hosted services" },
          ],
        },
        {
          name: "minas-tirith/",
          description: "Cloud VPS",
          children: [
            { name: "configuration.nix", description: "System config" },
          ],
        },
      ],
    },
    {
      name: "modules/",
      description: "Shared NixOS modules",
      children: [
        { name: "desktop.nix", description: "Desktop environment" },
        { name: "networking.nix", description: "Network configuration" },
        { name: "security.nix", description: "Hardening rules" },
      ],
    },
    {
      name: "home/",
      description: "Home Manager configs",
      children: [
        { name: "shell.nix", description: "Zsh + starship prompt" },
        { name: "git.nix", description: "Git identity and aliases" },
        { name: "editor.nix", description: "Neovim setup" },
      ],
    },
    {
      name: "overlays/",
      description: "Package overlays and patches",
      children: [
        { name: "default.nix", description: "Overlay entrypoint" },
      ],
    },
  ],
};

function TreeNodeComponent({
  node,
  depth,
}: {
  node: TreeNode;
  depth: number;
}) {
  const [isOpen, setIsOpen] = useState(depth < 2);
  const isFolder = !!node.children;

  const sharedClasses =
    "flex items-center gap-1.5 w-full text-left py-0.5 text-sm hover:bg-muted/50 rounded px-1 transition-colors";

  return (
    <div>
      {isFolder ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className={cn(sharedClasses, "cursor-pointer")}
          style={{ paddingLeft: `${depth * 16 + 4}px` }}
        >
          <ChevronRight
            className={cn(
              "size-3.5 text-muted-foreground shrink-0 transition-transform duration-150",
              isOpen && "rotate-90"
            )}
          />
          <Folder className="size-3.5 text-amber-500 shrink-0" />
          <span className="text-foreground">{node.name}</span>
          {node.description && (
            <span className="text-muted-foreground text-xs ml-1 truncate">
              — {node.description}
            </span>
          )}
        </button>
      ) : (
        <div
          className={sharedClasses}
          style={{ paddingLeft: `${depth * 16 + 4}px` }}
        >
          <span className="w-3.5" />
          <File className="size-3.5 text-muted-foreground shrink-0" />
          <span className="text-foreground">{node.name}</span>
          {node.description && (
            <span className="text-muted-foreground text-xs ml-1 truncate">
              — {node.description}
            </span>
          )}
        </div>
      )}
      {node.children && isOpen && (
        <div>
          {node.children.map((child) => (
            <TreeNodeComponent
              key={child.name}
              node={child}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function NixTree() {
  return (
    <div className="rounded-lg border bg-background p-2 font-mono text-xs max-h-64 overflow-y-auto">
      <TreeNodeComponent node={TREE} depth={0} />
    </div>
  );
}
