export default function ListingLoading() {
  return (
    <div className="mx-auto max-w-3xl animate-pulse space-y-6 p-10">
      <div className="h-8 w-2/3 rounded-lg bg-surface-container" />
      <div className="h-4 w-full rounded bg-surface-container-low" />
      <div className="h-4 w-5/6 rounded bg-surface-container-low" />
      <div className="flex gap-4">
        <div className="h-4 w-20 rounded bg-surface-container-low" />
        <div className="h-4 w-20 rounded bg-surface-container-low" />
      </div>
    </div>
  );
}
