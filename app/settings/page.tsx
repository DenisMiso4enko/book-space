import { auth } from "@/auth/auth";
import { prisma } from "@/lib/prisma";
import { SITE_SETTINGS } from "@/config/siteSettings";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Settings · ${SITE_SETTINGS.name}`,
  description: "Manage your BookSpace account settings.",
};

const LOGIN_PATH = "/login?callbackUrl=/settings";

async function SettingsAccount() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    redirect(LOGIN_PATH);
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    redirect(`/logout?callbackUrl=${encodeURIComponent("/settings")}`);
  }

  const displayName = user.name || user.email;

  return (
    <>
      <p className="mt-3 max-w-lg text-base text-on-surface-variant">
        Signed in as {displayName}. Profile and preference settings will live
        here in a later sprint.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-secondary transition-colors hover:text-secondary-container"
      >
        ← Back to home
      </Link>
    </>
  );
}

export default function SettingsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-16 640:px-6 1024:px-10">
      <p className="font-display text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
        Account
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-on-surface">
        Settings
      </h1>
      <Suspense
        fallback={
          <div className="mt-3 h-6 w-80 animate-pulse rounded-md bg-surface-container" />
        }
      >
        <SettingsAccount />
      </Suspense>
    </main>
  );
}
