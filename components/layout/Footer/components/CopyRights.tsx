import Logo from "@/components/ui/logo";
import { SITE_SETTINGS } from "@/config/siteSettings";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default async function CopyRights() {
  const year = await getCurrentYear();

  return (
    <div className="flex flex-col items-start gap-2">
      <Logo />
      <p className="text-xs font-semibold text-on-surface-variant">
        &copy; {year}
        {SITE_SETTINGS.name}. All rights reserved.
      </p>
    </div>
  );
}
