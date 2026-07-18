import Image from "next/image";
import Link from "next/link";
import { LocationIcon } from "@/components/ui/heroSection/icons/LocationIcon";
import { StarIcon } from "@/components/icons/StarIcon";

type ListingHeroProps = {
  title: string;
  city: string;
  neighborhood?: string | null;
  rating: number;
  reviewCount?: number;
  imageUrl: string;
};

export function ListingHero({
  title,
  city,
  neighborhood,
  rating,
  reviewCount = 124,
  imageUrl,
}: ListingHeroProps) {
  const location = neighborhood ? `${neighborhood}, ${city}` : city;

  return (
    <section className="relative h-[320px] w-full overflow-hidden 640:h-[400px] 1024:h-[440px]">
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/35 to-primary/15" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col justify-end gap-4 px-4 pb-8 640:px-6 1024:px-10">
        <nav aria-label="Breadcrumb" className="text-sm text-on-primary/80">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-on-primary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/listings" className="hover:text-on-primary">
                {city}
              </Link>
            </li>
            {neighborhood ? (
              <>
                <li aria-hidden>/</li>
                <li className="text-on-primary/70">{neighborhood}</li>
              </>
            ) : null}
            <li aria-hidden>/</li>
            <li className="text-on-primary">{title}</li>
          </ol>
        </nav>

        <div className="space-y-3">
          <h1 className="font-display text-3xl font-bold tracking-[-0.02em] text-on-primary 640:text-4xl 1024:text-5xl">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-on-primary/90 640:text-base">
            <span className="inline-flex items-center gap-1.5 [&_svg_path]:stroke-on-primary">
              <LocationIcon />
              {location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <StarIcon className="text-rating-badge-bg" />
              {rating.toFixed(1)} ({reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
