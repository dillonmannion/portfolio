"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarRow } from "@/components/lab/bar-row";

const METRICS = {
  weight: {
    label: "Body Weight (kg)",
    data: [
      { name: "Subject A", value: 8.2 },
      { name: "Subject B", value: 6.7 },
      { name: "Subject C", value: 9.1 },
      { name: "Subject D", value: 7.4 },
      { name: "Subject E", value: 10.3 },
      { name: "Subject F", value: 5.9 },
    ],
    max: 12,
  },
  health: {
    label: "Health Score (0-100)",
    data: [
      { name: "Subject A", value: 87 },
      { name: "Subject B", value: 72 },
      { name: "Subject C", value: 94 },
      { name: "Subject D", value: 68 },
      { name: "Subject E", value: 91 },
      { name: "Subject F", value: 83 },
    ],
    max: 100,
  },
} as const;

type MetricKey = keyof typeof METRICS;

export function PrimateChart() {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("weight");
  const metric = METRICS[activeMetric];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {(Object.keys(METRICS) as MetricKey[]).map((key) => (
          <Button
            key={key}
            onClick={() => setActiveMetric(key)}
            variant={activeMetric === key ? "default" : "secondary"}
            size="sm"
            className="text-xs"
          >
            {METRICS[key].label}
          </Button>
        ))}
      </div>
      <div className="space-y-1.5">
        {metric.data.map((d) => (
          <BarRow
            key={d.name}
            label={d.name}
            value={String(d.value)}
            percent={(d.value / metric.max) * 100}
            labelWidth="w-20"
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Synthetic sample data for demonstration — actual research data is proprietary
      </p>
    </div>
  );
}
