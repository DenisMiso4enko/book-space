import { prisma } from "@/lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

const TOP_LISTINGS_FOR_STATIC = 10;

export async function getListings() {
  "use cache";
  cacheTag("listings");
  cacheLife("hours");
  return await prisma.listing.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getListingBySlug(slug: string) {
  "use cache";
  cacheTag("listings", `listing:${slug}`);
  cacheLife("hours");
  return prisma.listing.findUnique({
    where: { slug },
  });
}

/** Top-N slugs for build-time prerender; remaining routes resolve on demand. */
export async function getTopListingSlugs(
  limit = TOP_LISTINGS_FOR_STATIC,
): Promise<{ slug: string }[]> {
  "use cache";
  cacheTag("listings");
  cacheLife("hours");
  return prisma.listing.findMany({
    select: { slug: true },
    orderBy: [{ rating: "desc" }, { createdAt: "desc" }],
    take: limit,
  });
}
