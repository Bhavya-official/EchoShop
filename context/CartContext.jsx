'use client'

import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [] // {id, title, price, image, qty}
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      return { ...state, items: action.payload }
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => i.id === existing.id ? { ...i, qty: i.qty + 1 } : i)
        }
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) }
    case 'UPDATE_QTY':
      return {
        ...state,
        items: state.items.map(i => i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i)
      }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart:v1')
      if (raw) dispatch({ type: 'LOAD', payload: JSON.parse(raw) })
    } catch (e) {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem('cart:v1', JSON.stringify(state.items)) } catch (e) {}
  }, [state.items])

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0)
    const total = state.items.reduce((sum, i) => sum + i.qty * i.price, 0)
    return {
      items: state.items,
      count,
      total,
      addToCart: (item) => dispatch({ type: 'ADD', payload: { id: item.id, title: item.title, price: item.price, image: item.image } }),
      removeFromCart: (id) => dispatch({ type: 'REMOVE', payload: id }),
      updateQty: (id, qty) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty } }),
      clearCart: () => dispatch({ type: 'CLEAR' })
    }
  }, [state.items])

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
