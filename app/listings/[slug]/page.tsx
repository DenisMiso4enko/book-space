import { notFound } from "next/navigation";
import { getListingBySlug, getTopListingSlugs } from "@/lib/listings";
import { getListingGalleryImages } from "@/lib/listing-images";
import { ListingHero } from "@/components/ui/listingDetail/ListingHero";
import { ListingGallery } from "@/components/ui/listingDetail/ListingGallery";
import { ListingAbout } from "@/components/ui/listingDetail/ListingAbout";
import { ListingAmenities } from "@/components/ui/listingDetail/ListingAmenities";
import { ListingLocation } from "@/components/ui/listingDetail/ListingLocation";
import { ListingReviews } from "@/components/ui/listingDetail/ListingReviews";
import { ListingBookingSidebar } from "@/components/ui/listingDetail/ListingBookingSidebar";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const listings = await getTopListingSlugs();
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing) {
    return {
      title: "Listing not found",
      description: "Listing not found",
      openGraph: {
        // TODO: add a default image for the listing not found
        // images: ["/images/listing-not-found.png"],
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: listing.title,
    openGraph: {
      images: [listing.imageUrl, ...previousImages],
    },
  };
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const gallery = getListingGalleryImages(listing.imageUrl);

  return (
    <main className="w-full">
      <ListingHero
        title={listing.title}
        city={listing.city}
        neighborhood={listing.neighborhood}
        rating={listing.rating}
        imageUrl={listing.imageUrl}
      />

      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-8 640:px-6 640:py-10 1024:grid-cols-[minmax(0,1fr)_340px] 1024:items-start 1024:gap-12 1024:px-10">
        <div className="min-w-0 space-y-10 640:space-y-12">
          <ListingGallery title={listing.title} images={gallery} />
          <ListingAbout description={listing.description} />
          <ListingAmenities amenities={listing.amenities} />
          <ListingLocation
            city={listing.city}
            neighborhood={listing.neighborhood}
            mapImageUrl={gallery[1] ?? listing.imageUrl}
          />
          <ListingReviews />
        </div>

        <ListingBookingSidebar pricePerDay={listing.pricePerDay} />
      </div>
    </main>
  );
}
