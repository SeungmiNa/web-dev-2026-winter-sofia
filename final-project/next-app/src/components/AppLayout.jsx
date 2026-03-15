'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinkClass = (pathname, path) =>
  pathname === path
    ? 'px-4 py-2 rounded-lg text-sm font-medium bg-primary-400 text-gray-900 font-semibold block'
    : 'px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-card hover:text-gray-900 block transition-all duration-200'

export default function AppLayout({ children }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans">
      <a
        href="#main-content"
        className="absolute -top-14 left-4 z-[100] px-4 py-2.5 bg-primary-600 text-white rounded-lg font-medium transition-all duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
      >
        Skip to main content
      </a>
      <header className="border-b border-gray-200/80 bg-surface sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3 shrink-0 transition-opacity duration-200 hover:opacity-90">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-lg transition-transform duration-200 ease-out group-hover:scale-105">
              FF
            </div>
            <span className="font-semibold text-gray-800 text-lg">FlexFlow Studio</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            <Link href="/" className={navLinkClass(pathname, '/')}>Home</Link>
            <Link href="/classes" className={navLinkClass(pathname, '/classes')}>Classes</Link>
            <Link href="/booking" className={navLinkClass(pathname, '/booking')}>Booking</Link>
            <Link href="/about" className={navLinkClass(pathname, '/about')}>About</Link>
            <Link href="/contact" className={navLinkClass(pathname, '/contact')}>Contact</Link>
          </nav>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-card transition-colors duration-200"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <nav
          aria-label="Main navigation"
          className={`md:hidden overflow-hidden transition-all duration-200 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 pb-4 border-t border-gray-200/60 flex flex-col gap-1">
            <Link href="/" className={navLinkClass(pathname, '/')} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/classes" className={navLinkClass(pathname, '/classes')} onClick={() => setMenuOpen(false)}>Classes</Link>
            <Link href="/booking" className={navLinkClass(pathname, '/booking')} onClick={() => setMenuOpen(false)}>Booking</Link>
            <Link href="/about" className={navLinkClass(pathname, '/about')} onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className={navLinkClass(pathname, '/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1" id="main-content">
        {children}
      </main>

      <footer className="bg-card border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <section aria-labelledby="footer-brand">
              <div id="footer-brand" className="sr-only">FlexFlow Studio</div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold">FF</div>
                <span className="font-semibold text-gray-800">FlexFlow Studio</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your fitness journey starts here. Located in Palo Alto, serving the Stanford community.
              </p>
            </section>
            <section aria-labelledby="footer-quick-links">
              <h3 id="footer-quick-links" className="font-semibold text-gray-800 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/" className="transition-colors duration-200 hover:text-primary-700">Home</Link></li>
                <li><Link href="/classes" className="transition-colors duration-200 hover:text-primary-700">Classes</Link></li>
                <li><Link href="/booking" className="transition-colors duration-200 hover:text-primary-700">Booking</Link></li>
                <li><Link href="/about" className="transition-colors duration-200 hover:text-primary-700">About Us</Link></li>
              </ul>
            </section>
            <section aria-labelledby="footer-contact">
              <h3 id="footer-contact" className="font-semibold text-gray-800 mb-3">Contact</h3>
              <address className="text-sm text-gray-600 not-italic space-y-1">
                <p>123 University Ave</p>
                <p>Palo Alto, CA 94301</p>
                <p>Phone: (650) 555-0100</p>
                <p>Email: info@flexflowstudio.com</p>
              </address>
            </section>
            <section aria-labelledby="footer-follow">
              <h3 id="footer-follow" className="font-semibold text-gray-800 mb-3">Follow Us</h3>
              <div className="flex gap-3 text-gray-500">
                <a href="#" className="transition-colors duration-200 hover:text-primary-700" aria-label="Facebook">📘</a>
                <a href="#" className="transition-colors duration-200 hover:text-primary-700" aria-label="Instagram">📷</a>
                <a href="#" className="transition-colors duration-200 hover:text-primary-700" aria-label="Twitter">🐦</a>
              </div>
            </section>
          </div>
          <p className="text-center text-gray-400 text-sm mt-10">
            © 2026 FlexFlow Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
