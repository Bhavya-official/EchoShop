'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatCurrency } from '../lib/format'
import { useToast } from './ToastProvider'
import { shimmer, toBase64 } from '../lib/blur'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card overflow-hidden flex flex-col"
    >
      <Link href={`/product/${product.slug}`} className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
        />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/product/${product.slug}`} className="font-medium line-clamp-2 hover:underline">{product.title}</Link>
        <p className="text-brand-700 font-semibold mt-1">{formatCurrency(product.price)}</p>
        <div className="mt-auto pt-4">
          <button
            className="btn btn-primary w-full"
            onClick={() => { addToCart(product); toast({ title: 'Added to cart', description: product.title }) }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}
