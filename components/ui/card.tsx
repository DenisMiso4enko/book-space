import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "./utils";

type CardProps = {
  hoverable?: boolean;
  className?: string;
  children?: ReactNode;
  slug: string;
};

export function Card({
  className,
  hoverable = false,
  slug,
  children,
}: CardProps) {
  const classes = cn(
    "rounded-xl border border-outline-card bg-surface-container-lowest shadow-none",
    hoverable &&
      "transition-shadow duration-200 hover:shadow-shadow-card-hover",
    className,
  );

  return (
    <Link href={`/listings/${slug}`} className={classes}>
      {children}
    </Link>
  );
}
