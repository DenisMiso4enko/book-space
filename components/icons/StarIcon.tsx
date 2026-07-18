import type { SVGPropsIcon } from "@/types";
import { cn } from "@/components/ui/utils";

export function StarIcon({ className }: SVGPropsIcon) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden
    >
      <path d="M8 1.333 9.96 5.3l4.373.637-3.166 3.084.747 4.353L8 11.32l-3.914 2.054.747-4.353L1.667 5.937 6.04 5.3 8 1.333Z" />
    </svg>
  );
}
