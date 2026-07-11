import type { HTMLAttributes } from "react";
import { cx } from "./utils";

type BadgeTone = "neutral" | "accent" | "confirmed" | "pending" | "error";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-outline-card bg-surface-tag text-on-surface-tag",
  accent: "border-secondary-fixed-dim bg-secondary-fixed text-on-secondary-fixed-variant",
  confirmed: "border-status-confirmed-bg bg-status-confirmed-bg text-status-confirmed-text",
  pending: "border-status-pending-bg bg-status-pending-bg text-status-pending-text",
  error: "border-error-container bg-error-container text-on-error-container",
};

const dotClasses: Record<BadgeTone, string> = {
  neutral: "bg-outline",
  accent: "bg-secondary",
  confirmed: "bg-status-confirmed-dot",
  pending: "bg-status-pending-dot",
  error: "bg-error",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  dot?: boolean;
};

export function Badge({
  className,
  tone = "neutral",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-semibold",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {dot ? (
        <span className={cx("size-1.5 rounded-full", dotClasses[tone])} aria-hidden />
      ) : null}
      {children}
    </span>
  );
}
