'use client'

import { GridSkeleton } from '../components/Skeleton'

export default function Loading() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-slate-200/60 dark:bg-slate-800/60 h-52 animate-pulse" />
      <section className="space-y-6">
        <div className="h-7 w-64 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
        <GridSkeleton count={8} />
      </section>
    </div>
  )
}
