import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "./utils";

type ButtonVariant = "primary" | "outline" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  pill?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

/**
 * Design mapping (DESIGN.md):
 * - primary  → solid Indigo CTA (`secondary` token)
 * - outline  → Deep Navy outline button
 * - ghost    → text / low-emphasis action
 * - dark     → navy filled (Export CSV, sidebar CTA contexts)
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-secondary bg-secondary text-on-secondary hover:bg-secondary-container hover:shadow-[var(--shadow-card-hover)]",
  outline:
    "border-primary bg-surface-container-lowest text-primary hover:bg-surface-row-hover hover:shadow-[var(--shadow-card-hover)]",
  ghost:
    "border-transparent bg-transparent text-secondary hover:bg-secondary-fixed",
  dark:
    "border-primary bg-primary text-on-primary hover:bg-primary-container hover:shadow-[var(--shadow-card-hover)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  pill = false,
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        "inline-flex items-center justify-center gap-2 border font-sans font-medium transition-all duration-150",
        pill ? "rounded-full" : "rounded-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:border-outline-variant disabled:bg-tertiary-fixed disabled:text-outline disabled:shadow-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {leadingIcon ? <span aria-hidden>{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span aria-hidden>{trailingIcon}</span> : null}
    </button>
  );
}
