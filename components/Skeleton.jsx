export function TextSkeleton({ className = '' }) {
  return <div className={`animate-pulse rounded-md bg-slate-200 dark:bg-slate-800 ${className}`} />
}

export function CardSkeleton() {
  return (
    <div className="card overflow-hidden">
      <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 animate-pulse" />
      <div className="p-4 space-y-3">
        <TextSkeleton className="h-4 w-3/4" />
        <TextSkeleton className="h-4 w-1/3" />
        <TextSkeleton className="h-9 w-full mt-3" />
      </div>
    </div>
  )
}

export function GridSkeleton({ count = 8 }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  )
}
