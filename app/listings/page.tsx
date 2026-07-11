import { ListingCard } from "@/components/ui/listing-card";
import { getListings } from "@/lib/listings";

export default async function ListingsPage() {
  const listings = await getListings();

  return (
    <div>
      <h1>Listings</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            slug={listing.slug}
            title={listing.title}
            city={listing.city}
            neighborhood={listing.neighborhood ?? undefined}
            pricePerDay={listing.pricePerDay}
            rating={listing.rating}
            capacity={listing.capacity}
            tags={listing.amenities}
          />
        ))}
      </div>
    </div>
  );
}
