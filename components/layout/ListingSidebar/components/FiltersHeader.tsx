import { Button } from "@/components/ui/button";

export const FiltersHeader = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <h2 className="text-2xl font-semibold text-on-surface">Filters</h2>
      <Button variant="ghost">Clear all</Button>
    </div>
  );
};
