import { HeroSection } from "@/components/ui/heroSection";
import { SITE_SETTINGS } from "@/config/siteSettings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_SETTINGS.name,
  description: SITE_SETTINGS.description,
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 640:px-6 1024:px-10">
      <HeroSection />
    </main>
  );
}
