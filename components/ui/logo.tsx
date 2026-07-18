import { SITE_SETTINGS } from "@/config/siteSettings";

export default function Logo() {
  return (
    <h1 className="text-primary font-bold text-2xl">{SITE_SETTINGS.name}</h1>
  );
}
