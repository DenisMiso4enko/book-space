import { getAmenityIcon } from "./amenityIcons";

type ListingAmenitiesProps = {
  amenities: string[];
};

export function ListingAmenities({ amenities }: ListingAmenitiesProps) {
  if (amenities.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-on-surface 640:text-2xl">
        Amenities
      </h2>
      <ul className="grid grid-cols-1 gap-3 568:grid-cols-2 1024:grid-cols-3">
        {amenities.map((amenity) => {
          const Icon = getAmenityIcon(amenity);
          return (
            <li
              key={amenity}
              className="flex items-center gap-3 rounded-lg border border-outline-card bg-surface-container-lowest px-4 py-3"
            >
              <span className="text-secondary">
                <Icon />
              </span>
              <span className="text-sm font-medium text-on-surface">{amenity}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
