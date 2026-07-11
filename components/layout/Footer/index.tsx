import { FOOTER_LINKS } from "@/components/layout/Footer/config/footerLinks";
import CopyRights from "./components/CopyRights";
import FooterLink from "./components/FooterLink";

export default function Footer() {
  return (
    <footer className="bg-surface-container-high flex justify-between items-center gap-4 p-10">
      <CopyRights />

      <div className="flex gap-6">
        {FOOTER_LINKS.map((link) => (
          <FooterLink key={link.id} link={link.link} title={link.title} />
        ))}
      </div>
    </footer>
  );
}
