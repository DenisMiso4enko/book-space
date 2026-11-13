export default function HeaderAuthFallback() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-11 w-20 animate-pulse rounded-lg bg-surface-container" />
      <div className="h-11 w-28 animate-pulse rounded-lg bg-surface-container-high" />
    </div>
  );
}
