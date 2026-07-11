import type { ReactNode } from "react";
import { Card } from "./card";
import { cx } from "./utils";

type MetricCardProps = {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "neutral";
  subtitle?: string;
  icon?: ReactNode;
};

const trendClasses = {
  up: "text-status-confirmed-text",
  down: "text-on-error-container",
  neutral: "text-outline",
};

export function MetricCard({
  label,
  value,
  delta,
  trend = "neutral",
  subtitle,
  icon,
}: MetricCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-medium text-on-surface-variant">{label}</p>
          {icon ? (
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary-fixed text-secondary">
              {icon}
            </span>
          ) : null}
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-semibold tracking-tight text-on-surface">{value}</p>
          {subtitle ? <p className="text-sm text-outline">{subtitle}</p> : null}
        </div>
        {delta ? (
          <p className={cx("text-sm font-medium", trendClasses[trend])}>{delta}</p>
        ) : null}
      </div>
    </Card>
  );
}
