import { cn } from "@/components/ui/utils";
import Link from "next/link";

export default function HeaderLink({
  link,
  title,
  isActive,
}: {
  link: string;
  title: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={link}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex flex-col items-stretch transition-colors",
        isActive && "gap-1",
      )}
    >
      <span
        className={cn(
          "text-sm leading-none",
          isActive
            ? "font-bold text-secondary"
            : "font-medium text-on-surface-variant hover:text-secondary",
        )}
      >
        {title}
      </span>
      {isActive ? (
        <span aria-hidden className="h-1 bg-secondary" />
      ) : null}
    </Link>
  );
}
