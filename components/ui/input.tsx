import type { InputHTMLAttributes } from "react";
import { cn } from "./utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function Input({ label, hint, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="flex flex-col gap-2">
      {label ? (
        <span className="text-sm font-medium text-on-surface">{label}</span>
      ) : null}
      <input
        id={inputId}
        className={cn(
          "h-11 rounded-lg border bg-surface-container-lowest px-4 text-base text-on-surface outline-none transition-colors",
          "placeholder:text-outline",
          error
            ? "border-error focus:border-error focus:ring-2 focus:ring-error-container"
            : "border-outline-card focus:border-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-2",
          className,
        )}
        {...props}
      />
      {error ? (
        <span className="text-xs text-on-error-container">{error}</span>
      ) : hint ? (
        <span className="text-sm text-on-surface-variant">{hint}</span>
      ) : null}
    </label>
  );
}
