import Image from "next/image";
import { Card } from "./card";
import { LiveStrip, type SlotState } from "./live-strip";
import { LISTING_IMAGE_PATHS } from "@/lib/listing-images";

type ListingCardProps = {
  slug: string;
  title: string;
  city: string;
  neighborhood?: string;
  pricePerDay: number;
  rating: number;
  capacity?: number;
  imageUrl?: string | null;
  tags?: string[];
  slots?: SlotState[];
};

export function ListingCard({
  slug,
  title,
  city,
  neighborhood,
  pricePerDay,
  rating,
  capacity,
  imageUrl,
  tags = [],
  slots,
}: ListingCardProps) {
  const location = neighborhood ? `${neighborhood}, ${city}` : city;
  const src = imageUrl || LISTING_IMAGE_PATHS[0];

  return (
    <Card hoverable slug={slug} className="overflow-hidden">
      <div className="relative aspect-4/3 bg-surface-container-low">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute right-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-lg bg-rating-badge-bg px-2.5 py-1 text-xs font-semibold text-rating-badge-text shadow-sm">
            ★ {rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 space-y-1">
            <h3 className="truncate font-display text-base font-semibold text-on-surface">
              {title}
            </h3>
            <p className="text-sm text-on-surface-variant">{location}</p>
            {capacity ? (
              <p className="text-xs text-outline">Up to {capacity} people</p>
            ) : null}
          </div>
          <p className="shrink-0 font-display text-base font-semibold text-secondary">
            ${pricePerDay}/day
          </p>
        </div>

        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-surface-tag px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-on-surface-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {slots ? <LiveStrip slots={slots} size="sm" /> : null}
      </div>
    </Card>
  );
}
