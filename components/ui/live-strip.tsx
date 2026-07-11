import { cx } from "./utils";

export type SlotState = "available" | "booked" | "past" | "selected";

type LiveStripProps = {
  slots: SlotState[];
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
};

const sizeClasses = {
  sm: "h-2",
  md: "h-2.5",
  lg: "h-3",
};

const stateClasses: Record<SlotState, string> = {
  available: "border-secondary-fixed-dim bg-secondary-fixed",
  booked: "border-outline-card bg-surface-container-high",
  past: "border-outline-card bg-surface-container-low opacity-50",
  selected: "border-secondary bg-secondary-fixed shadow-sm",
};

export function LiveStrip({
  slots,
  size = "md",
  interactive = false,
}: LiveStripProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs font-medium text-outline">
        <span>Availability</span>
        <span>Updated now</span>
      </div>
      <div className="grid grid-cols-8 gap-1">
        {slots.map((slot, index) => (
          <span
            key={`${slot}-${index}`}
            className={cx(
              "block rounded-sm border transition-all",
              sizeClasses[size],
              stateClasses[slot],
              interactive && "cursor-pointer hover:-translate-y-px",
            )}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-xs font-medium text-outline">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-secondary" />
          Available
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-surface-container-high" />
          Booked
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-primary" />
          Selected
        </span>
      </div>
    </div>
  );
}
