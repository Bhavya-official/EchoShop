'use client'

import { useCart } from '../../context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { formatCurrency } from '../../lib/format'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const { items, updateQty, removeFromCart, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <ShoppingBag className="h-14 w-14 text-slate-400" />
        <h1 className="mt-4 text-2xl font-semibold">Your cart is empty</h1>
        <p className="text-slate-600 mt-2">Discover products you’ll love.</p>
        <Link href="/" className="btn btn-primary mt-6">Browse Products</Link>
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 py-8">
      <div className="lg:col-span-2 space-y-4">
        {items.map(item => (
          <div key={item.id} className="card p-4 flex gap-4">
            <div className="relative h-24 w-24 rounded-md overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium line-clamp-2">{item.title}</h3>
              <p className="text-brand-700 font-semibold mt-1">{formatCurrency(item.price)}</p>
              <div className="flex items-center gap-2 mt-3">
                <button className="btn btn-outline h-9 px-2" onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center">{item.qty}</span>
                <button className="btn btn-outline h-9 px-2" onClick={() => updateQty(item.id, item.qty + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
                <button className="btn h-9 px-3 bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 ml-2" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="h-4 w-4 mr-1" /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card p-6 h-fit">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="flex justify-between mt-4">
          <span>Subtotal</span>
          <span className="font-semibold">{formatCurrency(total)}</span>
        </div>
        <p className="text-slate-500 text-sm mt-2">Shipping and taxes are calculated at checkout.</p>
        <button className="btn btn-primary w-full mt-6">Checkout</button>
        <button className="btn btn-outline w-full mt-3" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  )
}
