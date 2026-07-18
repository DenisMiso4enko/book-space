import { FiltersHeader } from "./components/FiltersHeader";

export const ListingSidebar = () => {
  return (
    <aside className="sticky top-0 flex w-[256px] shrink-0 flex-col gap-6 border">
      <FiltersHeader />
      other filters here
    </aside>
  );
};
