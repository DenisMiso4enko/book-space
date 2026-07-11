import { HEADER_LINKS } from "../config/headerLinks";

export default function HeaderNavFallback() {
  return (
    <div className="flex items-end gap-8">
      {HEADER_LINKS.map((link) => (
        <span
          key={link.id}
          className="text-sm font-medium leading-none text-on-surface-variant"
        >
          {link.title}
        </span>
      ))}
    </div>
  );
}
