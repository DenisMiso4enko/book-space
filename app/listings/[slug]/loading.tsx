export default function ListingLoading() {
  return (
    <main className="w-full animate-pulse">
      <div className="h-[320px] w-full bg-surface-container 640:h-[400px] 1024:h-[440px]" />

      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-8 640:px-6 640:py-10 1024:grid-cols-[minmax(0,1fr)_340px] 1024:gap-12 1024:px-10">
        <div className="space-y-10">
          <div className="grid grid-cols-1 gap-3 768:grid-cols-2">
            <div className="min-h-[280px] rounded-xl bg-surface-container 768:min-h-[420px]" />
            <div className="grid grid-cols-3 gap-3 768:grid-cols-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-surface-container-low 768:aspect-[16/9]" />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-7 w-48 rounded bg-surface-container" />
            <div className="h-4 w-full rounded bg-surface-container-low" />
            <div className="h-4 w-5/6 rounded bg-surface-container-low" />
          </div>

          <div className="grid grid-cols-2 gap-3 1024:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-14 rounded-lg bg-surface-container-low" />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-80 rounded-xl border border-outline-card bg-surface-container-lowest p-6">
            <div className="mb-6 h-8 w-32 rounded bg-surface-container" />
            <div className="space-y-4">
              <div className="h-11 rounded-lg bg-surface-container-low" />
              <div className="h-11 rounded-lg bg-surface-container-low" />
              <div className="h-12 rounded-lg bg-surface-container" />
              <div className="h-12 rounded-lg bg-surface-container-low" />
            </div>
          </div>
          <div className="h-20 rounded-xl bg-primary/80" />
        </div>
      </div>
    </main>
  );
}
