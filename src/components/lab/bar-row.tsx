interface BarRowProps {
  label: string;
  value: string;
  percent: number;
  labelWidth?: string;
}

export function BarRow({
  label,
  value,
  percent,
  labelWidth = "w-24",
}: BarRowProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span
        className={`${labelWidth} text-muted-foreground shrink-0 text-xs`}
      >
        {label}
      </span>
      <div className="flex-1 h-5 rounded bg-muted overflow-hidden">
        <div
          className="h-full rounded bg-primary/80 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-10 text-right text-xs tabular-nums text-muted-foreground">
        {value}
      </span>
    </div>
  );
}
