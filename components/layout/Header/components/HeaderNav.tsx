"use client";

import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "../config/headerLinks";
import HeaderLink from "./HeaderLink";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-end gap-8">
      {HEADER_LINKS.map((link) => {
        const isActive =
          link.link === "/"
            ? pathname === "/"
            : pathname.startsWith(link.link);

        return (
          <HeaderLink
            key={link.id}
            link={link.link}
            title={link.title}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
}
