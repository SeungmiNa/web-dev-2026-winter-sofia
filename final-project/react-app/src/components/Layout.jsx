import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

/* Active = light tint + dark text for clear contrast (WCAG) */
const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out block ${
    isActive
      ? 'bg-primary-400 text-gray-900 font-semibold'
      : 'text-gray-600 hover:bg-card hover:text-gray-900'
  }`

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans">
      <a href="#main-content" className="absolute -top-14 left-4 z-[100] px-4 py-2.5 bg-primary-600 text-white rounded-lg font-medium transition-all duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600">
        Skip to main content
      </a>
      <header className="border-b border-gray-200/80 bg-surface sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <NavLink to="/" className="group flex items-center gap-3 shrink-0 transition-opacity duration-200 hover:opacity-90">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-lg transition-transform duration-200 ease-out group-hover:scale-105">
              FF
            </div>
            <span className="font-semibold text-gray-800 text-lg">FlexFlow Studio</span>
          </NavLink>

          {/* Desktop nav: visible from md breakpoint (768px) */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/classes" className={navLinkClass}>Classes</NavLink>
            <NavLink to="/booking" className={navLinkClass}>Booking</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile menu button: visible below md (768px) */}
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
        </div>

        {/* Mobile nav: visible when menuOpen, below md; uses Flexbox for layout */}
        <nav
          aria-label="Main navigation"
          className={`md:hidden overflow-hidden transition-all duration-200 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 pb-4 border-t border-gray-200/60 flex flex-col gap-1">
            <NavLink to="/" className={navLinkClass} end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/classes" className={navLinkClass} onClick={() => setMenuOpen(false)}>Classes</NavLink>
            <NavLink to="/booking" className={navLinkClass} onClick={() => setMenuOpen(false)}>Booking</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-1" id="main-content">
        <Outlet />
      </main>

      <footer className="bg-card border-t border-gray-200/80 no-print">
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
                <li><NavLink to="/" className="transition-colors duration-200 hover:text-primary-700">Home</NavLink></li>
                <li><NavLink to="/classes" className="transition-colors duration-200 hover:text-primary-700">Classes</NavLink></li>
                <li><NavLink to="/booking" className="transition-colors duration-200 hover:text-primary-700">Booking</NavLink></li>
                <li><NavLink to="/about" className="transition-colors duration-200 hover:text-primary-700">About Us</NavLink></li>
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
