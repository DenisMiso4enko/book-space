export function HeroBanner() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-4xl font-bold tracking-[-0.02em] leading-10 text-on-surface 568:text-[56px] 568:leading-16">
        Find your perfect <span className="text-secondary">workspace</span>
      </h2>
      <p className="max-w-[572px] text-lg leading-7 text-on-surface-variant">
        Flexible coworking hubs, private offices, and creative studios. Book by
        the hour or the month, anywhere in the world.
      </p>
    </div>
  );
}
