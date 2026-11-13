import { ListingSidebar } from "@/components/layout/ListingSidebar";
import { ListingCard } from "@/components/ui/listing-card";
import { ListingsHeader } from "@/components/ui/listings/ListingsHeader";
import { getListings } from "@/lib/listings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings",
  description: "Find spaces to work in",
  openGraph: {
    title: "Listings",
    description: "Find spaces to work in",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/listings`,
    // TODO: add a default image for the listings
    // images: [{ url: "https://bookspace.com/listings/og-image.png" }],
  },
};

export default async function ListingsPage() {
  const listings = await getListings();

  return (
    <main className="mx-auto flex w-full max-w-7xl items-start justify-between gap-6 640:p-6 1024:p-10">
      <ListingSidebar />
      <div className="min-w-0 flex-1">
        <ListingsHeader />
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
              imageUrl={listing.imageUrl}
              tags={listing.amenities}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
