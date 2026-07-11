import { getListingBySlug } from "@/lib/listings";
import { notFound } from "next/navigation";

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing) {
    return notFound();
  }
  return (
    <div>
      <div>
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
        <p>{listing.pricePerDay}</p>
        <p>{listing.rating}</p>
        <p>{listing.capacity}</p>
        <p>{listing.amenities}</p>
      </div>
    </div>
  );
}
