import { HeroBanner } from "./components/HeroBanner";
import { HeroBenefits } from "./components/HeroBenefits";
import { HeroSearchForm } from "./components/HeroSearchForm";

export const HeroSection = () => {
  return (
    <section className="flex min-h-[calc(100dvh-77px)] w-full flex-col items-center justify-center gap-8">
      <HeroBanner />
      <HeroSearchForm />
      <HeroBenefits />
    </section>
  );
};
