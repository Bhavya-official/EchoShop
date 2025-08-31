'use client'

import { useMemo } from 'react'
import { Search } from 'lucide-react'

export default function ProductFilters({ categories = [], value, onChange }) {
  const allCats = useMemo(() => ['All', ...categories], [categories])

  return (
    <div className="flex flex-col gap-4">
      <div className="relative max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={value.query}
          onChange={(e) => onChange({ ...value, query: e.target.value })}
          className="w-full pl-10 pr-3 h-10 rounded-md border border-slate-300 bg-white text-sm placeholder:text-slate-400 focus:ring-2 focus:ring-brand-400 focus:outline-none dark:border-slate-700 dark:bg-slate-900"
        />
      </div>
      <div className="flex items-center gap-2 overflow-x-auto">
        {allCats.map(cat => {
          const active = value.category === cat
          return (
            <button
              key={cat}
              onClick={() => onChange({ ...value, category: cat })}
              className={`h-9 px-3 rounded-full border text-sm whitespace-nowrap transition-colors ${active ? 'bg-brand-600 text-white border-brand-600' : 'border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'}`}
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}
