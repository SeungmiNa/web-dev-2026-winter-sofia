# Accessibility Audit — FlexFlow Studio

This document describes how the project addresses the **accessibility audit** requirement: results from at least two tools (e.g. WAVE, aXe, Lighthouse) plus a manual checklist covering **WCAG POUR** principles.

---

## 1. Automated Tool Results

Run the following on the built site (e.g. `npm run build` then `npm run preview`, or deploy and test the production URL).

### WAVE (WebAIM)

- **How to run:** [WAVE browser extension](https://wave.webaim.org/extension/) or [wave.webaim.org](https://wave.webaim.org/) (enter URL).
- **Where to record:** Paste or attach a screenshot/report here after running on the **Home** and **Contact** (form) pages.
- **Expected focus:** Errors (e.g. missing alt, contrast), structure (headings, landmarks).

**Results:** _[Run WAVE and paste summary or screenshot here.]_

---

### aXe (Deque)

- **How to run:** [axe DevTools](https://www.deque.com/axe/devtools/) browser extension, or `npm install -D @axe-core/cli` and run against the built HTML.
- **Where to record:** Note number of violations (critical, serious, moderate) and any repeated issues.

**Results:** _[Run axe and paste summary or list of issues here.]_

---

### Lighthouse (Chrome DevTools)

- **How to run:** Chrome DevTools → Lighthouse tab → select **Accessibility** → Analyze.
- **Where to record:** Note the Accessibility score and any suggested fixes (e.g. contrast, labels, focus order).

**Results:** _[Paste Accessibility score and top suggestions here.]_

---

## 2. Manual WCAG POUR Checklist

| Principle | Check | Status / Notes |
|----------|--------|----------------|
| **Perceivable** | Text has sufficient contrast (e.g. gray-800 on surface, primary-600 on white) | ✅ Designed for WCAG AA |
| | Images have appropriate `alt` (or `alt=""` for decorative) | ✅ Decorative imgs use `alt=""`; hero has descriptive alt |
| | Content is available to screen readers (semantic HTML, landmarks) | ✅ `header`, `nav`, `main`, `section`, `article`, `footer`; `aria-label` on nav |
| | No information conveyed by color alone | ✅ Links/buttons use text + color |
| **Operable** | Skip link to main content | ✅ “Skip to main content” in Layout (visible on focus) |
| | All functionality available via keyboard | ✅ Buttons, links, form fields focusable; modal closable via button |
| | Focus order is logical | ✅ DOM order matches visual order |
| | Focus visible (focus ring on interactive elements) | ✅ `focus:ring-2 focus:ring-primary-500` on buttons/inputs/links |
| | No keyboard traps | ✅ Modal can be closed with button; no trap in nav |
| **Understandable** | Page title and headings describe content | ✅ Unique `<title>`, `<h1>` per page |
| | Forms have visible labels and error handling | ✅ `label` + `htmlFor`; required fields; HTML5 validation |
| | Navigation is consistent (same nav across pages) | ✅ Single Layout with same nav |
| **Robust** | Valid HTML (no critical parsing errors) | ✅ JSX outputs valid structure |
| | ARIA used correctly where needed | ✅ `aria-label`, `aria-expanded` (menu), `aria-modal`, `aria-labelledby` (dialog) |

---

## 3. Files Relevant to Accessibility

- **Layout.jsx** — Skip link, semantic `<nav>`, `<main id="main-content">`, sticky header, footer regions with `aria-labelledby`.
- **index.css** — `box-sizing`, focus-ring utility, `prefers-reduced-motion` for animations.
- **tailwind.config.js** — Color palette (primary, surface, card) used for contrast.
- **Contact.jsx** — Form labels, `required`, focus styles.
- **Classes.jsx** — Search (debounced), modal with `role="dialog"` and `aria-labelledby`.
- **Booking.jsx** — Buttons with `aria-label` where needed (e.g. calendar prev/next).

---

## 4. Next Steps

1. Run **WAVE**, **aXe**, and **Lighthouse** on the production build and fill in the **Results** sections above.
2. Fix any critical or serious issues reported.
3. Re-run the tools and update the document with final scores and notes.
