import { Badge } from "./badge";
import { Button } from "./button";
import { Card } from "./card";

type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

type BookingCardProps = {
  title: string;
  location: string;
  dateRange: string;
  priceLabel: string;
  status: BookingStatus;
  guestName?: string;
};

const statusToneMap = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CANCELLED: "error",
} as const;

const statusLabelMap = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  CANCELLED: "Cancelled",
} as const;

export function BookingCard({
  title,
  location,
  dateRange,
  priceLabel,
  status,
  guestName,
}: BookingCardProps) {
  return (
    <Card slug="1" hoverable className="overflow-hidden">
      <div className="aspect-video bg-surface-container-low" />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <h3 className="truncate text-base font-semibold text-on-surface">
              {title}
            </h3>
            <p className="text-sm text-on-surface-variant">{location}</p>
            {guestName ? (
              <p className="text-xs text-outline">{guestName}</p>
            ) : null}
          </div>
          <Badge tone={statusToneMap[status]} dot>
            {statusLabelMap[status]}
          </Badge>
        </div>
        <div className="grid gap-1 text-sm text-on-surface-variant">
          <p>{dateRange}</p>
          <p className="font-medium text-on-surface">{priceLabel}</p>
        </div>
        <Button
          variant={status === "CONFIRMED" ? "primary" : "outline"}
          className="w-full"
        >
          {status === "CONFIRMED" ? "View details" : "Manage booking"}
        </Button>
      </div>
    </Card>
  );
}
