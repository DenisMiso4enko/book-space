import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-10">
      <SectionHeader
        eyebrow="BookSpace"
        title="Find your perfect workspace"
        description="Marketplace for booking coworking spaces, meeting rooms, and creative studios."
      />
      <div className="flex flex-wrap gap-3">
        <Button>Explore spaces</Button>
        <Link
          href="/design-system"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-primary bg-surface-container-lowest px-5 text-sm font-medium text-primary transition-all hover:bg-surface-row-hover"
        >
          Design system
        </Link>
      </div>
    </main>
  );
}
