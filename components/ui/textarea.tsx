import type { TextareaHTMLAttributes } from "react";
import { cx } from "./utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function Textarea({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <label className="flex flex-col gap-2">
      {label ? (
        <span className="text-sm font-medium text-on-surface">{label}</span>
      ) : null}
      <textarea
        id={textareaId}
        className={cx(
          "min-h-32 rounded-lg border bg-surface-container-lowest px-4 py-3 text-base text-on-surface outline-none transition-colors",
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
