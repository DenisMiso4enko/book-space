"use client";

import { signOutAction } from "@/auth/actions";
import { cn } from "@/components/ui/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type UserMenuProps = {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

function getInitials(name?: string | null, email?: string | null) {
  const source = name?.trim() || email?.trim() || "?";
  const parts = source.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]![0]}${parts[1]![0]}`.toUpperCase();
  }
  return source.slice(0, 2).toUpperCase();
}

export default function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const initials = getInitials(user.name, user.email);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex size-10 items-center justify-center overflow-hidden rounded-full border border-outline-card bg-surface-container-high text-sm font-semibold text-primary transition-all duration-150",
          "hover:border-secondary hover:shadow-shadow-card-hover",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          open && "border-secondary ring-2 ring-secondary/20",
        )}
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name ? `${user.name} avatar` : "User avatar"}
            width={40}
            height={40}
            className="size-full object-cover"
          />
        ) : (
          <span aria-hidden>{initials}</span>
        )}
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute top-[calc(100%+10px)] right-0 z-50 w-72 origin-top-right rounded-xl border border-outline-card bg-surface-container-lowest p-2 shadow-[var(--shadow-overlay)] animate-[login-enter_0.2s_ease-out]"
        >
          <div className="rounded-lg bg-surface-container-low px-3 py-3">
            <p className="truncate text-sm font-semibold text-on-surface">
              {user.name || "BookSpace user"}
            </p>
            {user.email ? (
              <p className="mt-0.5 truncate text-xs text-on-surface-variant">
                {user.email}
              </p>
            ) : null}
          </div>

          <div className="mt-1 flex flex-col p-1">
            <Link
              href="/settings"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-on-surface transition-colors hover:bg-surface-row-hover"
            >
              Settings
            </Link>

            <form action={signOutAction}>
              <button
                type="submit"
                role="menuitem"
                className="w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-error transition-colors hover:bg-error-container"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
