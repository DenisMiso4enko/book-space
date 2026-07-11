import { prisma } from "@/lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

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
