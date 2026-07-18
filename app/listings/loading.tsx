export default function ListingsLoading() {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] items-start justify-between gap-6 640:p-6 1024:p-10">
      <aside className="sticky top-0 hidden w-[256px] shrink-0 animate-pulse flex-col gap-6 1024:flex">
        <div className="h-6 w-24 rounded bg-surface-container" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 w-full rounded-lg bg-surface-container-low" />
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1 animate-pulse">
        <div className="mb-10 flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-8 w-72 rounded-lg bg-surface-container" />
            <div className="h-4 w-48 rounded bg-surface-container-low" />
          </div>
          <div className="h-10 w-40 rounded-lg bg-surface-container-low" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-outline-card bg-surface-container-lowest"
            >
              <div className="aspect-4/3 bg-surface-container" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 rounded bg-surface-container" />
                <div className="h-4 w-1/2 rounded bg-surface-container-low" />
                <div className="flex gap-2">
                  <div className="h-5 w-14 rounded bg-surface-container-low" />
                  <div className="h-5 w-14 rounded bg-surface-container-low" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
