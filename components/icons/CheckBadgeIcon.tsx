import type { SVGPropsIcon } from "@/types";
import { cn } from "@/components/ui/utils";

export function CheckBadgeIcon({ className }: SVGPropsIcon) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden
    >
      <path
        d="M9 12.75 10.5 14.25 15 9.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.5 14.02 4.35 16.25 3.95 17.35 5.95 19.4 6.75 19.25 9.05 20.5 10.85 18.95 12.5 19.25 14.8 17.35 15.85 16.25 17.9 14.02 17.5 12 18.5 9.98 17.5 7.75 17.9 6.65 15.85 4.75 14.8 5.05 12.5 3.5 10.85 4.75 9.05 4.6 6.75 6.65 5.95 7.75 3.95 9.98 4.35 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}