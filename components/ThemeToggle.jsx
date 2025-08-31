'use client'

import { useEffect, useState, useCallback } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // Sync state with current document class (set by layout head script)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
  }, [])

  const applyTheme = useCallback((dark) => {
    const c = document.documentElement.classList
    if (dark) {
      c.add('dark')
      try { localStorage.setItem('theme', 'dark') } catch {}
    } else {
      c.remove('dark')
      try { localStorage.setItem('theme', 'light') } catch {}
    }
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    applyTheme(next)
  }

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      className="btn btn-outline h-9 px-3"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
