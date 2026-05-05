"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarRow } from "@/components/lab/bar-row";

const GENRES = [
  "House",
  "Techno",
  "Drum & Bass",
  "Trance",
  "Dubstep",
  "Future Bass",
  "Hardstyle",
  "Electro",
] as const;

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function classifySong(input: string): { genre: string; confidence: number }[] {
  const hash = hashString(input.toLowerCase().trim());
  const raw = GENRES.map((genre, i) => ({
    genre,
    value: ((hash * (i + 7) * 13) % 100) + 1,
  }));
  const total = raw.reduce((sum, r) => sum + r.value, 0);
  return raw
    .map((r) => ({ genre: r.genre, confidence: Math.round((r.value / total) * 100) }))
    .sort((a, b) => b.confidence - a.confidence);
}

export function GenreClassifier() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<
    { genre: string; confidence: number }[] | null
  >(null);

  function handleClassify() {
    if (!input.trim()) return;
    setResults(classifySong(input));
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleClassify()}
          placeholder="Enter a song name or artist..."
          className="flex-1 rounded-lg border bg-background px-3 py-1.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button onClick={handleClassify} disabled={!input.trim()} size="sm">
          Classify
        </Button>
      </div>
      {results && (
        <div className="space-y-1.5">
          {results.slice(0, 5).map((r) => (
            <BarRow
              key={r.genre}
              label={r.genre}
              value={`${r.confidence}%`}
              percent={r.confidence}
            />
          ))}
          <p className="text-xs text-muted-foreground pt-1">
            Simulated classification — real version uses Spotify audio features
          </p>
        </div>
      )}
    </div>
  );
}
