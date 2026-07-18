import type { ReactNode } from "react";
import type { SVGPropsIcon } from "@/types";
import { cn } from "@/components/ui/utils";

function WifiIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <path d="M11 16.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="currentColor" />
      <path d="M7.5 12.5a5 5 0 0 1 7 0M4.5 9.5a9 9 0 0 1 13 0M2 6.5a12.5 12.5 0 0 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CoffeeIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <path d="M4.5 8.5h10.5v5.5a3.5 3.5 0 0 1-3.5 3.5H8a3.5 3.5 0 0 1-3.5-3.5V8.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 9.5h1.25A2.75 2.75 0 0 1 19 12.25v0A2.75 2.75 0 0 1 16.25 15H15M6 4.5v2M9 3.5v3M12 4.5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AccessIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 7v4.5l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MeetingIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <rect x="3.5" y="5" width="15" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 18h6M11 15v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PrintIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <path d="M6.5 8.5V4.5h9v4M6.5 14.5h9v3.5h-9V14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="4" y="8.5" width="14" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BikeIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <circle cx="6.5" cy="14.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="14.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 14.5 10 8h3.5l2 6.5M10 8l-1.5 3.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KitchenIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <path d="M5 18V8.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2V18M3.5 18h15M8 10.5v4M14 10.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DeskIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <path d="M3.5 10.5h15M5 10.5V17M17 10.5V17M4 7.5h14v3H4v-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function GenericAmenityIcon({ className }: SVGPropsIcon) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={cn(className)} aria-hidden>
      <path d="M11 4.5v13M4.5 11h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const AMENITY_ICONS: Record<string, (props: SVGPropsIcon) => ReactNode> = {
  "wi-fi": WifiIcon,
  wifi: WifiIcon,
  "high-speed wi-fi": WifiIcon,
  coffee: CoffeeIcon,
  "free coffee": CoffeeIcon,
  kitchen: KitchenIcon,
  "24/7 access": AccessIcon,
  "meeting rooms": MeetingIcon,
  "printing services": PrintIcon,
  "bike storage": BikeIcon,
  "hot desk": DeskIcon,
  "private suites": DeskIcon,
  parking: GenericAmenityIcon,
  projector: MeetingIcon,
  whiteboard: MeetingIcon,
};

export function getAmenityIcon(label: string) {
  const key = label.trim().toLowerCase();
  return AMENITY_ICONS[key] ?? GenericAmenityIcon;
}
