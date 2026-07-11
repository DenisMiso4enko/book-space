import type { HTMLAttributes } from "react";
import { cx } from "./utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hoverable?: boolean;
};

export function Card({ className, hoverable = false, ...props }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-xl border border-outline-card bg-surface-container-lowest shadow-none",
        hoverable &&
          "transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]",
        className,
      )}
      {...props}
    />
  );
}
