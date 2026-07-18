import "dotenv/config";

import { faker } from "@faker-js/faker";
import { PrismaPg } from "@prisma/adapter-pg";
import {
  BookingStatus,
  PrismaClient,
  Role,
} from "@prisma/client";
import { LISTING_IMAGE_PATHS } from "../lib/listing-images";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

const listingImages = LISTING_IMAGE_PATHS;

const listingsSeed = [
  {
    title: "Skyline Collective",
    neighborhood: "Shoreditch",
    city: "London",
    pricePerDay: 45,
    capacity: 12,
    rating: 4.9,
    amenities: ["Wi-Fi", "Kitchen", "Private Suites"],
  },
  {
    title: "The Atrium Hub",
    neighborhood: "Chelsea",
    city: "New York",
    pricePerDay: 62,
    capacity: 8,
    rating: 4.8,
    amenities: ["24/7 Access", "Meeting Rooms"],
  },
  {
    title: "North Lane Studio",
    neighborhood: "Mitte",
    city: "Berlin",
    pricePerDay: 38,
    capacity: 6,
    rating: 4.7,
    amenities: ["Hot Desk", "Coffee"],
  },
  {
    title: "River Dock Creative Studio",
    neighborhood: "Pechersk",
    city: "Kyiv",
    pricePerDay: 42,
    capacity: 10,
    rating: 4.85,
    amenities: ["Wi-Fi", "Projector"],
  },
  {
    title: "Signal Yard Team Hub",
    neighborhood: "Old Town",
    city: "Lviv",
    pricePerDay: 35,
    capacity: 8,
    rating: 4.75,
    amenities: ["Wi-Fi", "Whiteboard"],
  },
  {
    title: "Canvas Room East",
    neighborhood: "Downtown",
    city: "Odesa",
    pricePerDay: 40,
    capacity: 14,
    rating: 4.82,
    amenities: ["Kitchen", "Parking"],
  },
  {
    title: "Paper Hall Suite",
    neighborhood: "Soho",
    city: "London",
    pricePerDay: 55,
    capacity: 16,
    rating: 4.91,
    amenities: ["Wi-Fi", "Private Suites", "Coffee"],
  },
  {
    title: "Open Ledger Meeting Hall",
    neighborhood: "Brooklyn",
    city: "New York",
    pricePerDay: 48,
    capacity: 20,
    rating: 4.88,
    amenities: ["Meeting Rooms", "Wi-Fi"],
  },
  {
    title: "Quiet Harbor Team Room",
    neighborhood: "Kreuzberg",
    city: "Berlin",
    pricePerDay: 36,
    capacity: 6,
    rating: 4.7,
    amenities: ["Hot Desk", "Wi-Fi"],
  },
  {
    title: "Skylight Focus Studio",
    neighborhood: "Dnipro Center",
    city: "Dnipro",
    pricePerDay: 33,
    capacity: 5,
    rating: 4.65,
    amenities: ["Coffee", "Wi-Fi"],
  },
  {
    title: "Teal House Sprint Room",
    neighborhood: "Kharkiv North",
    city: "Kharkiv",
    pricePerDay: 30,
    capacity: 4,
    rating: 4.6,
    amenities: ["Whiteboard"],
  },
  {
    title: "Atrium Loft Seminar Room",
    neighborhood: "West End",
    city: "London",
    pricePerDay: 58,
    capacity: 18,
    rating: 4.93,
    amenities: ["Wi-Fi", "Kitchen", "Projector"],
  },
] as const;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

async function main() {
  faker.seed(42);

  const hosts = await Promise.all(
    [
      { name: "Eleanor Vance", email: "host1@bookspace.dev" },
      { name: "James Miller", email: "host2@bookspace.dev" },
      { name: "Iryna Kovalenko", email: "host3@bookspace.dev" },
    ].map((host) =>
      prisma.user.upsert({
        where: { email: host.email },
        update: { name: host.name, role: Role.HOST },
        create: {
          email: host.email,
          name: host.name,
          role: Role.HOST,
        },
      }),
    ),
  );

  const tenant = await prisma.user.upsert({
    where: { email: "tenant@bookspace.dev" },
    update: { name: "Demo Tenant", role: Role.TENANT },
    create: {
      email: "tenant@bookspace.dev",
      name: "Demo Tenant",
      role: Role.TENANT,
    },
  });

  const extraTenants = await Promise.all(
    [
      { name: "Elena Rostova", email: "elena@bookspace.dev" },
      { name: "Marcus Chen", email: "marcus@bookspace.dev" },
    ].map((user) =>
      prisma.user.upsert({
        where: { email: user.email },
        update: { name: user.name, role: Role.TENANT },
        create: {
          email: user.email,
          name: user.name,
          role: Role.TENANT,
        },
      }),
    ),
  );

  const allTenants = [tenant, ...extraTenants];
  const createdListings = [];

  await prisma.booking.deleteMany();

  for (const [index, listing] of listingsSeed.entries()) {
    const host = hosts[index % hosts.length];
    const slug = slugify(listing.title);

    const record = await prisma.listing.upsert({
      where: { slug },
      update: {
        title: listing.title,
        description: faker.lorem.sentences(3),
        city: listing.city,
        neighborhood: listing.neighborhood,
        imageUrl: listingImages[index % listingImages.length],
        pricePerDay: listing.pricePerDay,
        capacity: listing.capacity,
        rating: listing.rating,
        amenities: [...listing.amenities],
        hostId: host.id,
      },
      create: {
        slug,
        title: listing.title,
        description: faker.lorem.sentences(3),
        city: listing.city,
        neighborhood: listing.neighborhood,
        imageUrl: listingImages[index % listingImages.length],
        pricePerDay: listing.pricePerDay,
        capacity: listing.capacity,
        rating: listing.rating,
        amenities: [...listing.amenities],
        hostId: host.id,
      },
    });

    createdListings.push(record);
  }

  const bookingSeeds = [
    {
      listingSlug: slugify("Skyline Collective"),
      tenantEmail: "tenant@bookspace.dev",
      status: BookingStatus.CONFIRMED,
      startDate: new Date("2024-11-22T09:00:00.000Z"),
      endDate: new Date("2024-11-24T18:00:00.000Z"),
    },
    {
      listingSlug: slugify("The Atrium Hub"),
      tenantEmail: "elena@bookspace.dev",
      status: BookingStatus.PENDING,
      startDate: new Date("2024-11-24T10:00:00.000Z"),
      endDate: new Date("2024-11-25T18:00:00.000Z"),
    },
    {
      listingSlug: slugify("North Lane Studio"),
      tenantEmail: "marcus@bookspace.dev",
      status: BookingStatus.CANCELLED,
      startDate: new Date("2024-10-12T09:00:00.000Z"),
      endDate: new Date("2024-10-13T18:00:00.000Z"),
    },
    {
      listingSlug: slugify("Paper Hall Suite"),
      tenantEmail: "tenant@bookspace.dev",
      status: BookingStatus.CONFIRMED,
      startDate: new Date("2024-12-02T09:00:00.000Z"),
      endDate: new Date("2024-12-03T18:00:00.000Z"),
    },
    {
      listingSlug: slugify("River Dock Creative Studio"),
      tenantEmail: "elena@bookspace.dev",
      status: BookingStatus.PENDING,
      startDate: new Date("2024-12-10T09:00:00.000Z"),
      endDate: new Date("2024-12-11T18:00:00.000Z"),
    },
  ] as const;

  for (const booking of bookingSeeds) {
    const listing = createdListings.find((item) => item.slug === booking.listingSlug);
    const bookingTenant = allTenants.find((user) => user.email === booking.tenantEmail);

    if (!listing || !bookingTenant) {
      continue;
    }

    await prisma.booking.create({
      data: {
        listingId: listing.id,
        tenantId: bookingTenant.id,
        status: booking.status,
        startDate: booking.startDate,
        endDate: booking.endDate,
      },
    });
  }

  console.log("Seed completed:");
  console.log(`- ${hosts.length} hosts`);
  console.log(`- ${allTenants.length} tenants`);
  console.log(`- ${createdListings.length} listings`);
  console.log(`- ${bookingSeeds.length} bookings`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
