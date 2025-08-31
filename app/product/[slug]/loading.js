'use client'

import { TextSkeleton } from '../../../components/Skeleton'

export default function Loading() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 py-8">
      <div>
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden card">
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
        </div>
      </div>
      <div>
        <TextSkeleton className="h-8 w-2/3" />
        <div className="mt-4 space-y-2">
          <TextSkeleton className="h-4 w-11/12" />
          <TextSkeleton className="h-4 w-10/12" />
          <TextSkeleton className="h-4 w-9/12" />
        </div>
        <TextSkeleton className="h-6 w-40 mt-6" />
        <TextSkeleton className="h-10 w-40 mt-6" />
      </div>
    </div>
  )
}
