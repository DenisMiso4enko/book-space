import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100dvh-4.75rem)] w-full flex-col items-center justify-center overflow-hidden px-4 640:px-6 1024:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--secondary-fixed)_0%,transparent_55%),radial-gradient(ellipse_at_80%_100%,var(--surface-container)_0%,transparent_45%)]"
      />

      <div className="relative flex max-w-lg flex-col items-center gap-6 text-center">
        <p className="text-8xl font-bold tracking-[-0.04em] text-secondary 568:text-9xl">
          404
        </p>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-[-0.02em] text-on-surface 568:text-4xl">
            Page not found
          </h1>
          <p className="text-lg leading-7 text-on-surface-variant">
            This workspace doesn&apos;t exist — or the link took a wrong turn.
            Let&apos;s get you back to booking.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-secondary bg-secondary px-6 text-base font-medium !text-on-secondary transition-all duration-150 hover:bg-secondary-container hover:shadow-(--shadow-card-hover) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Back to home
          </Link>
          <Link
            href="/listings"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-primary bg-surface-container-lowest px-6 text-base font-medium text-primary transition-all duration-150 hover:bg-surface-row-hover hover:shadow-(--shadow-card-hover) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Browse spaces
          </Link>
        </div>
      </div>
    </main>
  );
}
