"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon } from "../icons/CalendarIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { SearchIcon } from "../icons/SearchIcon";

export function HeroSearchForm() {
  return (
    <form
      className="flex w-full max-w-[768px] flex-col gap-3 rounded-2xl bg-surface-container-lowest p-3 shadow-[var(--shadow-overlay)] 768:h-[92px] 768:flex-row 768:items-center 768:gap-0 768:p-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3 py-2 768:h-full 768:py-0">
        <LocationIcon />
        <span className="sr-only">Location</span>
        <input
          type="text"
          name="location"
          placeholder="Where do you want to work?"
          className="w-full min-w-0 bg-transparent text-base text-on-surface outline-none placeholder:text-outline"
          autoComplete="off"
        />
      </label>

      <div
        aria-hidden
        className="hidden h-10 w-px shrink-0 bg-outline-variant 768:block"
      />

      <label className="flex min-w-0 items-center gap-3 rounded-xl px-3 py-2 768:h-full 768:w-[180px] 768:shrink-0 768:py-0">
        <CalendarIcon />
        <span className="sr-only">Date</span>
        <input
          type="text"
          name="date"
          placeholder="When?"
          className="w-full min-w-0 bg-transparent text-base text-on-surface outline-none placeholder:text-outline"
          autoComplete="off"
        />
      </label>

      <div
        aria-hidden
        className="hidden h-10 w-px shrink-0 bg-outline-variant 768:block"
      />

      <div className="flex shrink-0 items-center 768:pl-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="h-12 w-full rounded-xl px-6 768:w-auto"
          leadingIcon={<SearchIcon />}
        >
          Search
        </Button>
      </div>
    </form>
  );
}
