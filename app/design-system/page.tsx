import { Badge } from "@/components/ui/badge";
import { BookingCard } from "@/components/ui/booking-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ListingCard } from "@/components/ui/listing-card";
import { MetricCard } from "@/components/ui/metric-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Textarea } from "@/components/ui/textarea";

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-10">
      <SectionHeader
        eyebrow="BookSpace"
        title="Design system"
        description="Tokens and components mapped exactly to design/DESIGN.md — navy structure, indigo actions, slate neutrals."
      />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-on-surface">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Search</Button>
          <Button variant="outline">How it works</Button>
          <Button variant="ghost">Sign In</Button>
          <Button variant="dark">Export CSV</Button>
          <Button pill>Join Now</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-on-surface">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge tone="confirmed" dot>
            Confirmed
          </Badge>
          <Badge tone="pending" dot>
            Pending
          </Badge>
          <Badge tone="error" dot>
            Cancelled
          </Badge>
          <Badge tone="accent">Premium</Badge>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-outline-card bg-surface-container-lowest p-6">
          <h2 className="text-lg font-semibold text-on-surface">Form fields</h2>
          <Input label="Listing title" placeholder="Skyline Collective" />
          <Textarea label="Description" placeholder="Describe your workspace..." />
        </div>
        <div className="grid gap-4">
          <MetricCard
            label="Total Earnings"
            value="$12,450"
            delta="+12.5% from last month"
            trend="up"
            subtitle="From 48 bookings this month"
          />
          <MetricCard label="Active Bookings" value="14" subtitle="Currently in progress" />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          title="Listing cards"
          description="Catalog cards — grey tags, indigo price, yellow rating badge."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ListingCard
            slug="skyline-collective"
            title="Skyline Collective"
            neighborhood="Shoreditch"
            city="London"
            pricePerDay={45}
            rating={4.9}
            capacity={12}
            tags={["Wi-Fi", "Kitchen", "Private Suites"]}
          />
          <ListingCard
            slug="the-atrium-hub"
            title="The Atrium Hub"
            neighborhood="Chelsea"
            city="New York"
            pricePerDay={62}
            rating={4.8}
            capacity={8}
            tags={["24/7 Access", "Meeting Rooms"]}
          />
          <ListingCard
            slug="north-lane-studio"
            title="North Lane Studio"
            neighborhood="Mitte"
            city="Berlin"
            pricePerDay={38}
            rating={4.7}
            capacity={6}
            tags={["Hot Desk", "Coffee"]}
          />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader title="Booking cards" description="Host dashboard booking rows." />
        <div className="grid gap-6 md:grid-cols-3">
          <BookingCard
            title="Skyline Collective"
            location="Shoreditch, London"
            guestName="Elena Rostova"
            dateRange="Nov 22, 2024 · Check-in"
            priceLabel="$450.00"
            status="CONFIRMED"
          />
          <BookingCard
            title="The Atrium Hub"
            location="Chelsea, New York"
            guestName="James Miller"
            dateRange="Nov 24, 2024 · Awaiting approval"
            priceLabel="$320.00"
            status="PENDING"
          />
          <BookingCard
            title="North Lane Studio"
            location="Mitte, Berlin"
            dateRange="Oct 12, 2024 · Cancelled"
            priceLabel="$190.00"
            status="CANCELLED"
          />
        </div>
      </section>
    </main>
  );
}
