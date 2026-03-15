'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useApp } from '@/context/AppContext'

export default function AppLayout({ children }) {
  const pathname = usePathname()
  const { theme, toggleTheme } = useApp()

  const linkClass = (path) =>
    pathname === path
      ? 'px-4 py-2 rounded bg-stone-700 text-white dark:bg-stone-400 dark:text-stone-900'
      : 'px-4 py-2 rounded text-stone-600 hover:bg-stone-200 dark:text-stone-300 dark:hover:bg-stone-600 transition'

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-stone-50 text-stone-800 dark:bg-stone-900 dark:text-stone-100 font-sans">
        <header className="border-b border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 backdrop-blur">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight">
              Simplicity is the Ultimate Sophistication.
            </h1>
          </div>
        </header>

        <nav className="sticky top-0 z-10 border-b border-stone-200 dark:border-stone-700 bg-white/95 dark:bg-stone-800/95 backdrop-blur">
          <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <Link href="/" className={linkClass('/')}>
                Home
              </Link>
              <Link href="/about" className={linkClass('/about')}>
                About
              </Link>
              <Link href="/contact" className={linkClass('/contact')}>
                Contact
              </Link>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="px-3 py-1.5 text-sm rounded border border-stone-300 dark:border-stone-600 hover:bg-stone-200 dark:hover:bg-stone-600 transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>

        <footer className="border-t border-stone-200 dark:border-stone-700 mt-auto py-6">
          <div className="max-w-4xl mx-auto px-6 text-center text-stone-500 dark:text-stone-400 text-sm">
            © 2026 Module 7 Assignment. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}
