"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const SCRIPT = [
  { text: "$ agent-link spawn claude --prompt 'Summarize this PR'", delay: 0, type: "input" as const },
  { text: "[agent-link] Spawning claude agent...", delay: 800, type: "info" as const },
  { text: "[agent-link] Session abc-1234 started (pid: 47291)", delay: 1400, type: "info" as const },
  { text: "[claude] Reading PR diff... (3 files changed, +127 -42)", delay: 2200, type: "output" as const },
  { text: "[claude] Analyzing changes in src/auth/middleware.ts", delay: 3000, type: "output" as const },
  { text: "[claude] Summary: Refactors auth middleware to use JWT", delay: 3800, type: "output" as const },
  { text: "[claude]          validation instead of session cookies.", delay: 4200, type: "output" as const },
  { text: "[claude]          Adds token refresh logic and expiry", delay: 4600, type: "output" as const },
  { text: "[claude]          handling. No breaking API changes.", delay: 5000, type: "output" as const },
  { text: "[agent-link] Session abc-1234 completed (8.2s)", delay: 5800, type: "info" as const },
  { text: "$ _", delay: 6400, type: "input" as const },
];

export function AgentTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function play() {
    setVisibleLines(0);
    setIsPlaying(true);
  }

  useEffect(() => {
    if (!isPlaying) return;
    if (visibleLines >= SCRIPT.length) {
      setIsPlaying(false);
      return;
    }
    const nextDelay =
      visibleLines === 0
        ? 300
        : SCRIPT[visibleLines].delay - SCRIPT[visibleLines - 1].delay;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, nextDelay);
    return () => clearTimeout(timer);
  }, [isPlaying, visibleLines]);

  return (
    <div className="space-y-2">
      <div
        ref={containerRef}
        className="rounded-lg bg-zinc-950 p-3 font-mono text-xs leading-relaxed h-48 overflow-y-auto"
      >
        {SCRIPT.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input"
                ? "text-emerald-400"
                : line.type === "info"
                  ? "text-blue-400"
                  : "text-zinc-300"
            }
          >
            {line.text}
          </div>
        ))}
        {visibleLines === 0 && !isPlaying && (
          <span className="text-zinc-500">Click play to see a demo session</span>
        )}
      </div>
      <Button onClick={play} disabled={isPlaying} size="sm">
        {isPlaying ? "Playing..." : visibleLines > 0 ? "Replay" : "Play"}
      </Button>
    </div>
  );
}
