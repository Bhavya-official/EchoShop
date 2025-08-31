'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const api = useMemo(() => ({
    toast: ({ title, description }) => {
      const id = Math.random().toString(36).slice(2)
      setToasts((t) => [...t, { id, title, description }])
      // auto dismiss
      setTimeout(() => setToasts((t) => t.filter(x => x.id !== id)), 2600)
    },
    dismiss: (id) => setToasts((t) => t.filter(x => x.id !== id))
  }), [])

  return (
    <ToastContext.Provider value={api}>
      {children}
      {/* Toast viewport */}
      <div className="fixed bottom-4 right-4 z-[60] space-y-2">
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="card p-4 min-w-[260px] bg-white/95 dark:bg-slate-900/95 backdrop-blur"
            >
              <div className="font-medium">{t.title}</div>
              {t.description && (
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.description}</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}
