'use client'

import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

export default function ProductGrid({ products = [] }) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  }

  return (
    <motion.div
      id="featured"
      className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {products.map(p => (
        <motion.div key={p.id} variants={item}>
          <ProductCard product={p} />
        </motion.div>
      ))}
    </motion.div>
  )
}
