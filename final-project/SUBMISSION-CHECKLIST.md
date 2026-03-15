# Final Deliverable — Submission Checklist

Use this checklist to make sure your submission meets the requirements.  
**Primary app:** `react-app` (Vite + React + Tailwind + React Router).

---

## Option 2 — Single Page Application (Engineering Focus)

| Requirement | Status | Where |
|-------------|--------|--------|
| React with **functional components** | ✅ | All components in `src/` are function components |
| **Tailwind** (or CSS Modules / Sass) | ✅ | Tailwind in `tailwind.config.js`, used across pages |
| State via **Context or local state** | ✅ | `AppContext` in `src/context/`; local `useState` in Classes, Booking, Contact, Layout |
| **Client-side routing** | ✅ | React Router in `App.jsx` (Home, Classes, Booking, About, Contact) |
| Extra credit: SSR (Next.js) / hydration | ✅ | `next-app/` is a Next.js version (optional) |

---

## Deliverables & Submission Package

### 1. Source code, build scripts, package manifest

| Item | Status | Notes |
|------|--------|--------|
| Frontend source | ✅ | `final-project/react-app/src/` |
| Build scripts | ✅ | `npm run dev`, `npm run build`, `npm run preview` in `react-app/package.json` |
| Package manifest | ✅ | `react-app/package.json` |

**Submission:** Submit repo (or .zip) with `final-project/` so that `final-project/react-app` is the frontend. If required to have a `frontend/` folder, you can rename `react-app` to `frontend` or put the repo root at `react-app`.

---

### 2. README.md — setup, build, deployment

| Item | Status | Notes |
|------|--------|--------|
| Setup instructions | ✅ | `final-project/README.md` — install Node, `cd react-app`, `npm install`, `npm run dev` |
| Build instructions | ✅ | `npm run build`, `npm run preview` |
| Deployment instructions | ✅ | Brief note; can add 1–2 sentences for Vercel/Netlify (set root to `final-project/react-app`) |

---

### 3. Design dossier (PDF, 4–8 pages)

You need to **create a separate PDF** (not in the repo). Suggested contents:

| Section | What to include | Source material in repo |
|---------|------------------|-------------------------|
| Target audience & persona | Who uses the site (e.g. busy professionals, students in Palo Alto / Stanford) | README “Project description” |
| Information architecture (site map) | Diagram: Home, Classes, Booking, About, Contact and how they link | `App.jsx` routes |
| Wireframes (desktop + mobile) | Sketches or mockups of key pages | — |
| Color palette & typography | Primary green, surface, card; Inter font; contrast rationale | `tailwind.config.js`, `index.css` comment |
| Accessibility checklist & remediation | WCAG POUR, skip link, focus, labels, etc. | `react-app/ACCESSIBILITY-AUDIT.md` |

**Action:** Export or write this as a 4–8 page PDF and submit it with the repo/zip.

---

### 4. Technical documentation

| Item | Status | Notes |
|------|--------|--------|
| File/folder structure | ⚠️ | Add a short tree or list (see below) |
| Third-party libraries and licenses | ⚠️ | List deps from `package.json` + note licenses (MIT, etc.) |
| Key implementation notes | ✅ | Search: `react-app/PROJECT-SCOPE-CHECKLIST.md`, `Classes.jsx` (debounce, filter). Layout: `react-app/WEEK2-LAYOUT.md` |

**Action:** Add a **Technical documentation** section to the README or create `react-app/TECHNICAL-DOCUMENTATION.md` with:
- Folder structure (e.g. `src/pages/`, `src/components/`, `src/context/`)
- Table of dependencies (react, react-dom, react-router-dom, vite, tailwind, etc.) and licenses
- Short notes: how search/filter works (debounced input + category), how layout adapts (breakpoints, grid/flex)

---

### 5. Automated tests

| Item | Status | Notes |
|------|--------|--------|
| At least 5 front-end tests (unit or integration) | ❌ | Not yet in repo |
| Accessibility smoke tests (Lighthouse script or axe) | ❌ | Not yet in repo |

**Action:** Add a test setup (e.g. Vitest + React Testing Library in `react-app`) and:
- **5+ tests:** e.g. Layout renders nav links; Classes filter by category; Contact form validation; Booking step flow; Home renders hero.
- **A11y:** Run Lighthouse (e.g. via `npm run build && npx serve dist` then Chrome DevTools) or add `@axe-core/cli` / Playwright + axe and document the command in README.

---

### 6. Deployed demo (URL) — optional extra credit

| Item | Status | Notes |
|------|--------|--------|
| Live URL | ❌ | Deploy to Netlify, Vercel, or Render (root: `final-project/react-app`) and add URL to README |

---

### 7. Recorded presentation (8–12 minutes)

| Item | Status | Notes |
|------|--------|--------|
| Video or screencast | — | You create; show features, design decisions, accessibility (e.g. skip link, focus, form labels) |

---

### 8. PowerPoint (.pptx)

| Item | Status | Notes |
|------|--------|--------|
| Slides used in presentation | — | You create and submit with the package |

---

## Summary

| Category | Done | To do |
|----------|------|--------|
| Option 2 technical (React, Tailwind, state, routing) | ✅ | — |
| Source + build + manifest | ✅ | — |
| README (setup, build, deploy) | ✅ | Optional: 1–2 line deploy note |
| Design dossier PDF | — | **Create 4–8 page PDF** (audience, IA, wireframes, colors/type, a11y) |
| Technical doc (structure, libs, notes) | Partial | **Add file structure + deps/licenses + short implementation notes** |
| Automated tests (5+ + a11y) | ❌ | **Add test suite + Lighthouse or axe run** |
| Deployed demo | — | Optional |
| Presentation video + .pptx | — | You create |

---

## Suggested file structure for technical doc

```
react-app/
├── src/
│   ├── components/    # Layout (header, nav, footer)
│   ├── context/       # AppContext (e.g. visitor count)
│   ├── pages/         # Home, Classes, Booking, About, Contact
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── ...
```

You can paste this into README or TECHNICAL-DOCUMENTATION.md and adjust as needed.
