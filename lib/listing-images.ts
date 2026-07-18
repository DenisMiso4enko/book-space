/** Curated Unsplash coworking / office photos for seed + gallery. */
export const LISTING_IMAGE_PATHS = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
] as const;

/** Primary + up to 3 alternate images for the detail gallery. */
export function getListingGalleryImages(primaryImageUrl: string, count = 4) {
  const rest = LISTING_IMAGE_PATHS.filter((path) => path !== primaryImageUrl);
  return [primaryImageUrl, ...rest].slice(0, count);
}
