'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Store } from 'lucide-react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { count } = useCart()
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/70"
    >
      <div className="container-padding h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Store className="h-5 w-5 text-brand-600" />
          <span className="tracking-tight">EchoShop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200">
          <Link className="hover:text-brand-700 dark:hover:text-brand-300" href="#featured">Products</Link>
          <Link className="hover:text-brand-700 dark:hover:text-brand-300" href="/">Pricing</Link>
          <Link className="hover:text-brand-700 dark:hover:text-brand-300" href="/">Resources</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link className="btn btn-outline hidden sm:inline-flex" href="/">Start free trial</Link>
          <Link className="hover:text-brand-700" href="/cart" aria-label="Cart">
            <div className="relative inline-flex items-center">
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 h-5 min-w-[1.25rem] px-1 rounded-full bg-brand-600 text-white text-xs flex items-center justify-center">{count}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
