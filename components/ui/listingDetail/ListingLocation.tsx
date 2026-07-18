import Image from "next/image";
import { LocationIcon } from "@/components/ui/heroSection/icons/LocationIcon";

type ListingLocationProps = {
  city: string;
  neighborhood?: string | null;
  mapImageUrl: string;
};

export function ListingLocation({
  city,
  neighborhood,
  mapImageUrl,
}: ListingLocationProps) {
  const address = neighborhood
    ? `${neighborhood}, ${city}`
    : city;

  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-on-surface 640:text-2xl">
        Location
      </h2>
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-outline-card bg-surface-container-low 640:aspect-[21/9]">
        <Image
          src={mapImageUrl}
          alt={`Map area near ${address}`}
          fill
          className="object-cover opacity-80"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgb(11_28_48_/_0.35)_100%)]" />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary p-3 text-on-secondary shadow-(--shadow-overlay)">
          <span className="[&_svg_path]:stroke-on-secondary">
            <LocationIcon />
          </span>
        </div>
      </div>
      <p className="inline-flex items-center gap-2 text-sm text-on-surface-variant">
        <LocationIcon />
        {address}
      </p>
    </section>
  );
}
