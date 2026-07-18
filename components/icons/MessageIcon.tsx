import type { SVGPropsIcon } from "@/types";
import { cn } from "@/components/ui/utils";

export function MessageIcon({ className }: SVGPropsIcon) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden
    >
      <path
        d="M6.667 15.833H6.25A5.417 5.417 0 0 1 .833 10.417v-.834A5.417 5.417 0 0 1 6.25 4.167h7.5a5.417 5.417 0 0 1 5.417 5.416v.834a5.417 5.417 0 0 1-5.417 5.416H10L6.667 18.333v-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
