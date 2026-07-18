import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@/components/icons/StarIcon";
import { MOCK_REVIEWS } from "./config";

type ListingReviewsProps = {
  reviewCount?: number;
};

export function ListingReviews({ reviewCount = 124 }: ListingReviewsProps) {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-on-surface 640:text-2xl">
          Member Reviews
        </h2>
        <Link
          href="#reviews"
          className="shrink-0 text-sm font-medium text-secondary hover:text-secondary-container"
        >
          View all {reviewCount} reviews
        </Link>
      </div>

      <ul id="reviews" className="grid grid-cols-1 gap-4 768:grid-cols-2">
        {MOCK_REVIEWS.map((review) => (
          <li
            key={review.id}
            className="rounded-xl border border-outline-card bg-surface-container-lowest p-5"
          >
            <div className="mb-4 flex items-start gap-3">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-surface-container">
                <Image
                  src={review.avatarUrl}
                  alt={review.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-on-surface">{review.name}</p>
                <p className="text-sm text-on-surface-variant">{review.role}</p>
              </div>
              <div className="flex items-center gap-0.5 text-secondary" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5" />
                ))}
              </div>
            </div>
            <p className="text-sm leading-6 text-on-surface-variant">
              &ldquo;{review.text}&rdquo;
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
