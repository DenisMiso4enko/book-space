import { LISTING_IMAGE_PATHS } from "@/lib/listing-images";

export const SPACE_TYPE_OPTIONS = [
  { value: "hot-desk", label: "Hot Desk" },
  { value: "dedicated-desk", label: "Dedicated Desk" },
  { value: "private-office", label: "Private Office" },
  { value: "meeting-room", label: "Meeting Room" },
] as const;

export const MOCK_REVIEWS = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Marketing Director",
    rating: 5,
    text: "An absolutely stunning space with incredible natural light. The community vibe is unmatched in London.",
    avatarUrl: LISTING_IMAGE_PATHS[0],
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Product Lead",
    rating: 5,
    text: "Booked for a week-long workshop — seamless check-in, great amenities, and a quiet focus zone when we needed it.",
    avatarUrl: LISTING_IMAGE_PATHS[2],
  },
] as const;

export function monthlyPriceFromDaily(pricePerDay: number) {
  return Math.round(pricePerDay * 30 * 0.85);
}
