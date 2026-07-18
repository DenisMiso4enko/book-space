import { ListingsSortSelect } from "./ListingsSortSelect";

export const ListingsHeader = () => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div className="flex flex-col items-start">
        <h1 className="font-display text-2xl font-semibold text-on-surface">
          Coworking Spaces in London
        </h1>
        <p className="text-on-surface-variant">Showing 1-12 of 156 results</p>
      </div>
      <ListingsSortSelect />
    </div>
  );
};
