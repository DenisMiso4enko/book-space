import { safeCallbackPath } from "@/auth/callback-path";
import LoginForm from "@/components/ui/login";
import { LiveStrip } from "@/components/ui/live-strip";
import { SITE_SETTINGS } from "@/config/siteSettings";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Sign in · ${SITE_SETTINGS.name}`,
  description: "Sign in or create your BookSpace account with GitHub.",
};

const DEMO_SLOTS = [
  "past",
  "past",
  "booked",
  "available",
  "available",
  "selected",
  "available",
  "booked",
] as const;

type LoginSearchParams = Promise<{
  callbackUrl?: string | string[];
  error?: string | string[];
}>;

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function loginErrorMessage(error: string | undefined) {
  if (error === "AccessDenied") {
    return "GitHub did not share an email address, so a profile could not be created.";
  }

  if (error === "OAuthAccountNotLinked") {
    return "This email is already used by another sign-in method.";
  }

  if (!error) return null;

  return "GitHub sign-in did not finish. Try again.";
}

async function LoginFormWithRedirect({
  searchParams,
}: {
  searchParams: LoginSearchParams;
}) {
  const params = await searchParams;
  const error = loginErrorMessage(firstParam(params.error));

  return (
    <>
      {error ? (
        <p className="mb-4 text-sm leading-5 text-error" role="alert">
          {error}
        </p>
      ) : null}
      <LoginForm redirectTo={safeCallbackPath(firstParam(params.callbackUrl))} />
    </>
  );
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: LoginSearchParams;
}) {
  return (
    <main className="relative flex min-h-[calc(100dvh-77px)] w-full flex-1 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--surface-dim)_0%,transparent_55%),radial-gradient(ellipse_50%_40%_at_100%_100%,var(--secondary-fixed)_0%,transparent_50%),linear-gradient(180deg,var(--surface-container-low)_0%,var(--background)_45%,var(--surface)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(var(--outline-variant)_1px,transparent_1px),linear-gradient(90deg,var(--outline-variant)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16 640:px-6 1024:px-10">
        <div className="login-enter flex w-full max-w-md flex-col items-center text-center">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
            {SITE_SETTINGS.name}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-on-surface 568:text-5xl 568:leading-14">
            Sign in to book <span className="text-secondary">your space</span>
          </h1>

          <p className="mt-4 max-w-sm text-base leading-6 text-on-surface-variant 568:text-lg 568:leading-7">
            One account for hosts and tenants. Continue with GitHub — first
            visit creates your profile automatically.
          </p>

          <div className="login-enter-delay-1 mt-10 w-full rounded-xl border border-outline-card bg-surface-container-lowest/90 p-6 shadow-shadow-overlay backdrop-blur-sm 568:p-8">
            <Suspense
              fallback={
                <div className="h-12 w-full animate-pulse rounded-lg bg-surface-container-high" />
              }
            >
              <LoginFormWithRedirect searchParams={searchParams} />
            </Suspense>
            <p className="mt-4 text-xs leading-5 text-outline">
              By continuing you agree to use BookSpace for workspace booking. No
              separate registration step.
            </p>
          </div>

          <div className="login-enter-delay-2 mt-10 w-full max-w-sm opacity-90">
            <LiveStrip slots={[...DEMO_SLOTS]} size="md" />
          </div>

          <Link
            href="/"
            className="login-enter-delay-2 mt-8 text-sm font-medium text-on-surface-variant transition-colors hover:text-secondary"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
