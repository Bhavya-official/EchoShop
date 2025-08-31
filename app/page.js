'use client'

import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { products as allProducts } from '../data/products'
import ProductFilters from '../components/ProductFilters'

export default function HomePage() {
  const [filters, setFilters] = useState({ query: '', category: 'All' })

  const categories = useMemo(() => {
    const set = new Set(allProducts.map(p => p.category))
    return Array.from(set)
  }, [])

  const products = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    return allProducts.filter(p => {
      const matchQuery = q ? (p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : true
      const matchCat = filters.category === 'All' ? true : p.category === filters.category
      return matchQuery && matchCat
    })
  }, [filters])

  return (
    <div className="space-y-10">
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Products</h2>
        <ProductFilters categories={categories} value={filters} onChange={setFilters} />
        <ProductGrid products={products} />
      </motion.section>
    </div>
  )
}
