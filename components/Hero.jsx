'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '../data/products'
import { shimmer, toBase64 } from '../lib/blur'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-padding py-12 md:py-16 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 w-max dark:border-slate-800 dark:text-slate-300"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
            Start your business today
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            The commerce platform for your next big thing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 max-w-xl text-slate-600 dark:text-slate-300"
          >
            Everything you need to start, sell, and grow. Beautiful storefronts, secure checkout, and tools that scale with you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-8 flex items-center gap-3"
          >
            <Link href="/" className="btn btn-primary">Start free trial</Link>
            <Link href="#featured" className="btn btn-outline">Explore products</Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-6 flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300"
          >
            <div className="flex -space-x-2">
              {products.slice(0, 4).map((p) => (
                <div key={p.id} className="h-8 w-8 rounded-full ring-2 ring-white overflow-hidden dark:ring-slate-950">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-cover"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(32, 32))}`}
                  />
                </div>
              ))}
            </div>
            <span>Trusted by 10k+ creators • No credit card required</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-200 blur-3xl opacity-60 dark:opacity-30" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300 blur-3xl opacity-60 dark:opacity-30" />
          <div className="grid grid-cols-2 gap-4 relative">
            {products.slice(0, 4).map((p, i) => (
              <div key={p.id} className={`card overflow-hidden ${i % 2 ? 'mt-8' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 450))}`}
                  />
                </div>
                <div className="p-3 text-sm">
                  <p className="font-medium line-clamp-1">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
