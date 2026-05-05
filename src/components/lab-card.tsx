"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface LabCardProps {
  title: string;
  description: string;
  technologies: readonly string[];
  links: readonly { title: string; icon: ReactNode; href: string }[];
  children: ReactNode;
}

export function LabCard({
  title,
  description,
  technologies,
  links,
  children,
}: LabCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className="border rounded-xl overflow-hidden bg-card">
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="font-semibold leading-none">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs px-2 py-0"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls={contentId}
            className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {isExpanded ? "Hide" : "Try it"}
            <ChevronDown
              className={cn(
                "size-3.5 transition-transform duration-200",
                isExpanded && "rotate-180"
              )}
            />
          </button>
        </div>
      </div>
      <div
        id={contentId}
        role="region"
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t p-4">
            {isExpanded ? children : null}
          </div>
        </div>
      </div>
    </div>
  );
}
