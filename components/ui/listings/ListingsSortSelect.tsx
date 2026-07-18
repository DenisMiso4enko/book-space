"use client";

import { Select } from "@/components/ui/select";
import { SORT_OPTIONS } from "./config";

export function ListingsSortSelect() {
  return (
    <Select name="sort" defaultValue="popularity">
      <Select.Label>Sort by:</Select.Label>
      <Select.Trigger aria-label="Sort listings" />
      <Select.Content>
        {SORT_OPTIONS.map((option) => (
          <Select.Item key={option.value} value={option.value}>
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  );
}
