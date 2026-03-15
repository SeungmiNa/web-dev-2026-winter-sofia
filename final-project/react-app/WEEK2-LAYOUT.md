# Week 2 – Layout & Responsive Implementation

This document describes how the FlexFlow Studio React app meets the Week 2 deliverable requirements.

---

## Objectives

| Requirement | Implementation |
|-------------|----------------|
| **Semantic HTML structure** | `header`, `nav`, `main`, `section`, `article`, `footer` used throughout. Layout: header (with nav), main (#main-content), footer with `section` and `aria-labelledby` for regions. Pages: `section` for content blocks, `article` for feature cards and membership plans (Home), trainer cards (About), video cards (Classes). |
| **CSS Box Model** | `box-sizing: border-box` applied globally in `src/index.css` (`*`, `*::before`, `*::after`). Consistent spacing via Tailwind margin/padding utilities. |
| **Flexbox or Grid for main layout** | **Flexbox**: Layout root (min-h-screen flex flex-col), header (flex items-center justify-between), nav (flex gap), footer columns (grid). **Grid**: Footer (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4), Home/Classes/About/Contact card grids (grid md:grid-cols-2 or lg:grid-cols-3). |
| **Header, navigation, footer** | Implemented in `src/components/Layout.jsx`: sticky header with logo and nav, main content area, footer with 4 regions (brand, Quick Links, Contact, Follow Us). |
| **Mobile-first design** | Base styles target small screens; breakpoints add layout at `sm` (640px), `md` (768px), `lg` (1024px). E.g. footer: 1 column → 2 columns (sm) → 4 columns (lg). Hero: stacked → side-by-side (lg). |
| **At least 3 breakpoints** | **sm: 640px**, **md: 768px**, **lg: 1024px** defined in `tailwind.config.js` and used across pages (e.g. `px-4 sm:px-6`, `hidden md:flex`, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`). |

---

## Required Features

| Feature | Location / Notes |
|---------|------------------|
| **Semantic tags** | `header`, `nav`, `main`, `section`, `article`, `footer` – see Layout.jsx and all page components (Home, Classes, Booking, About, Contact). |
| **Responsive layout** | All pages use responsive grids and flex with sm/md/lg. Mobile menu for nav below `md`. |
| **Navigation styled with CSS** | Nav links styled with Tailwind (padding, border-radius, active state `bg-primary-600 text-white`, hover). Mobile nav: collapsible panel with same link styles. |
| **Proper spacing (margin/padding)** | Consistent use of Tailwind spacing (e.g. `px-4 sm:px-6`, `py-8`, `gap-4`, `space-y-6`, `mb-8`). |
| **box-sizing: border-box** | Set in `src/index.css` for all elements. |
| **Accessible color contrast** | Primary blue (#1d4ed8) and gray-800 (#1f2937) on white meet WCAG AA. Comment in index.css. |
| **Print stylesheet (basic)** | `@media print` block in `src/index.css`: hides nav and Get Started, simplifies header/footer, shows link URLs, avoids breaking sections. |

---

## Demonstrated Concepts

| Concept | Implementation |
|---------|----------------|
| **CSS positioning** | **Sticky**: header uses `sticky top-0 z-20`. **Relative/absolute**: e.g. hero image container `relative`, calendar in Booking; card badges `absolute top-3 right-3`. |
| **Clear navigation hierarchy** | Single main nav with `aria-label="Main navigation"`. Mobile menu button has `aria-label="Menu"` and `aria-expanded`. Footer sections have headings and `aria-labelledby`. |
| **Organized folder structure** | `src/components/` (Layout), `src/pages/` (Home, Classes, Booking, About, Contact), `src/context/`, `src/index.css`, `tailwind.config.js`. |

---

## Grading Focus

- **Layout stability**: Single Layout wraps all routes; flex/grid used for alignment and wrapping; no overflow issues.
- **Clean CSS structure**: Tailwind utility classes; base/print in index.css; no duplicated layout code.
- **Mobile responsiveness**: 3 breakpoints; mobile menu; responsive grids and padding.
- **Grid/Flexbox**: Grid for multi-column content (footer, cards); Flexbox for header, nav, and inline groupings.

---

## Files to Review

- `src/index.css` – box-sizing, print stylesheet
- `src/components/Layout.jsx` – header, nav (desktop + mobile), main, footer; semantic sections
- `tailwind.config.js` – screens (breakpoints)
- `src/pages/Home.jsx` – section, article, responsive grid/flex
