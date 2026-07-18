"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CalendarIcon } from "@/components/ui/heroSection/icons/CalendarIcon";
import { MessageIcon } from "@/components/icons/MessageIcon";
import { CheckBadgeIcon } from "@/components/icons/CheckBadgeIcon";
import { SPACE_TYPE_OPTIONS, monthlyPriceFromDaily } from "./config";

type ListingBookingSidebarProps = {
  pricePerDay: number;
};

export function ListingBookingSidebar({ pricePerDay }: ListingBookingSidebarProps) {
  const monthly = monthlyPriceFromDaily(pricePerDay);

  return (
    <aside className="space-y-4 1024:sticky 1024:top-6">
      <div className="rounded-xl border border-outline-card bg-surface-container-lowest p-5 shadow-(--shadow-card-hover) 640:p-6">
        <div className="mb-6 space-y-1">
          <p className="font-display text-2xl font-bold tracking-[-0.02em] text-on-surface">
            ${pricePerDay}{" "}
            <span className="text-base font-medium text-on-surface-variant">/ day</span>
          </p>
          <p className="text-sm font-medium text-secondary">
            Or ${monthly}/month (Save 15%)
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Input
              type="date"
              name="startDate"
              label="Start date"
              className="pr-11 uppercase tracking-wide"
            />
            <span className="pointer-events-none absolute right-3 top-[2.35rem] text-outline">
              <CalendarIcon />
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-on-surface">Space type</span>
            <Select
              name="spaceType"
              defaultValue="hot-desk"
              className="flex w-full"
            >
              <Select.Trigger
                aria-label="Space type"
                className="h-11 w-full min-w-0"
              />
              <Select.Content className="left-0 right-auto w-full min-w-full">
                {SPACE_TYPE_OPTIONS.map((option) => (
                  <Select.Item key={option.value} value={option.value}>
                    {option.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Book Now
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full"
            leadingIcon={<MessageIcon />}
          >
            Contact Host
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-on-surface-variant">
          You won&apos;t be charged yet
        </p>
      </div>

      <div className="flex items-start gap-3 rounded-xl bg-primary px-5 py-4 text-on-primary">
        <CheckBadgeIcon className="mt-0.5 shrink-0 text-secondary-fixed-dim" />
        <div className="space-y-0.5">
          <p className="text-sm font-semibold">Host Identity Verified</p>
          <p className="text-xs text-on-primary/75">Top-rated space 2023</p>
        </div>
      </div>
    </aside>
  );
}
