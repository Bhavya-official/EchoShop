"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../lib/format'
import { useToast } from './ToastProvider'
import { shimmer, toBase64 } from '../lib/blur'

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  if (!product) return null

  return (
    <div className="grid lg:grid-cols-2 gap-10 py-8">
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden card">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1200, 1200))}`}
          />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
        <h1 className="text-3xl md:text-4xl font-semibold">{product.title}</h1>
        <p className="text-slate-600 mt-3 max-w-prose">{product.description}</p>
        <p className="text-2xl font-bold text-brand-700 mt-6">{formatCurrency(product.price)}</p>
        <div className="flex gap-3 mt-6">
          <button
            className="btn btn-primary"
            onClick={() => { addToCart(product); toast({ title: 'Added to cart', description: product.title }) }}
          >
            Add to cart
          </button>
        </div>
      </motion.div>
    </div>
  )
}
