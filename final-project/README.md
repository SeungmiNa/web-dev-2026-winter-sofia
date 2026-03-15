# FlexFlow Studio — Final Project

A fitness studio website with **Home**, **Classes** (video library), **Booking**, **About**, and **Contact** pages. Built with React, Vite, Tailwind CSS, and React Router.

This folder contains two versions of the same app:

| Folder       | Stack                    | How it runs        |
|-------------|--------------------------|--------------------|
| **react-app** | React, Vite, Tailwind, React Router | Client-side (CSR)  |
| **next-app**  | Next.js, Tailwind         | Server-side + client (SSR) |

**Live demos (Vercel):**
- **Main app (React/Vite):** [flexflow-studio.vercel.app](https://flexflow-studio.vercel.app)
- **Next.js (SSR):** [flexflow-next.vercel.app](https://flexflow-next.vercel.app)

The sections below refer mainly to **react-app** (the primary deliverable).

**Submission note:** The frontend (source code, build scripts, and package manifest) is in **final-project/react-app/**.

---

## Setup instructions

1. **Install Node.js** (v18 or newer recommended).

2. **Open a terminal** and go into the React app folder:
   ```bash
   cd react-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in your browser:**  
   Go to **http://localhost:5173**

**Build for production:**
```bash
npm run build
npm run preview
```
Then open the URL shown in the terminal (e.g. http://localhost:4173) to preview the built site.

---

## Deploying both apps

You can deploy **react-app** (main site) and **next-app** (SSR version) as two separate live sites.

### Option A: Vercel (recommended)

1. **Push this repo to GitHub** (if you haven’t already).

2. **Deploy react-app (main deliverable)**  
   - Go to [vercel.com](https://vercel.com) → New Project → Import your repo.  
   - Set **Root Directory** to `final-project/react-app`.  
   - Vercel will detect Vite; leave Build Command `npm run build` and Output Directory `dist`.  
   - Deploy. You’ll get a URL like `your-project.vercel.app`.

3. **Deploy next-app (SSR / extra credit)**  
   - Create another **New Project** and import the **same repo**.  
   - Set **Root Directory** to `final-project/next-app`.  
   - Vercel will detect Next.js automatically.  
   - Deploy. You’ll get a different URL, e.g. `your-next-app.vercel.app`.

4. **Optional:** In README or your submission, add the two URLs, e.g.  
   - **Main app (React/Vite):** https://….vercel.app  
   - **Next.js (SSR):** https://….vercel.app  

### Option B: Netlify

- **react-app:** New site from repo → Root directory: `final-project/react-app` → Build command: `npm run build` → Publish directory: `dist`.  
- **next-app:** Netlify can build Next.js (Node runtime). New site → Root: `final-project/next-app` → Build: `npm run build`. Or use **Vercel for next-app** (simpler for Next.js) and Netlify only for react-app.

### Summary

| App        | Root directory           | Build        | Output   |
|-----------|---------------------------|--------------|----------|
| react-app | `final-project/react-app` | `npm run build` | `dist`   |
| next-app  | `final-project/next-app`  | `npm run build` | (Vercel/Next handles it) |

Two deployments = two projects/sites, each pointing at one of the roots above.

---

## Project description

**FlexFlow Studio** is a fictional fitness studio in Palo Alto serving busy professionals and students. The site lets users:

- Learn about the studio and its mission
- Browse and search workout videos (Classes)
- Book a session (choose date, trainer, and time)
- Send a message via the contact form

The design uses a calm, consistent color scheme (sage green and neutrals) and works on mobile, tablet, and desktop.

---

## Features implemented

- **Pages:** Home, Classes (video library), Booking, About, Contact (5 pages total).
- **Responsive layout:** CSS Grid and Flexbox; breakpoints at 640px, 768px, 1024px; mobile hamburger menu.
- **Navigation:** Semantic `<nav>`, “Skip to main content” link, breadcrumbs on inner pages, sticky header.
- **Design system:** Shared colors (primary green, surface, card), typography (Inter), spacing, and reusable button/card/form styles.
- **Classes page:** Search and filter by category (Yoga, HIIT, Strength); **debounced search** (300ms); **modal** with video details when you click “Watch Now.”
- **Contact form:** Client-side validation (required fields, email and phone types); labels and focus styles for accessibility.
- **Booking flow:** Pick a date, choose a trainer, pick a time slot, then confirm (summary step).
- **Advanced CSS:** Link hover/focus styles, print stylesheet (simplified layout when printing), sticky header.
- **Performance:** Responsive hero image with `srcset`; lazy loading on below-the-fold images (Classes cards, About trainers); minified CSS/JS in production build.

---

## Accessibility considerations

- **Skip link:** “Skip to main content” appears when focused so keyboard users can jump past the navigation.
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` and landmarks so screen readers can navigate.
- **Focus styles:** Buttons, links, and form fields have a visible focus ring (green outline) so keyboard users can see where they are.
- **Labels:** Form inputs have visible labels and correct `id`/`htmlFor` (or `aria-label` where needed).
- **Color contrast:** Text and buttons are chosen to meet WCAG AA where possible (e.g. dark gray on light background, green for CTAs).
- **Reduced motion:** `prefers-reduced-motion` in CSS shortens or disables animations for users who prefer less motion.
- **Modal:** The video detail dialog uses `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` for screen readers.

For a full checklist and space to add WAVE / aXe / Lighthouse results, see **react-app/ACCESSIBILITY-AUDIT.md**.

---

## Known limitations

- **No backend:** All data is in the frontend (e.g. video list, trainers, time slots). Booking and contact form submissions are not saved to a server; they only log to the console or update local state.
- **Classes search/filter and modal need JavaScript:** Without JS, the Classes page shows all videos and the “Watch Now” modal does not open. The contact form still validates with HTML5 when JS is off.
- **Images from external URLs:** Class and trainer images use Unsplash and Picsum. If those services are slow or blocked, some images may not load.
- **Accessibility audit results:** WAVE, aXe, and Lighthouse have not been run and pasted into the repo yet. Run them on the built site and fill in **react-app/ACCESSIBILITY-AUDIT.md**.
- **Next.js app:** The **next-app** folder is a separate implementation (SSR). It may lag behind react-app in small details; use react-app as the main reference.

---

## Quick reference

| Task              | Command (inside `react-app`) |
|-------------------|------------------------------|
| Install           | `npm install`                |
| Run dev server    | `npm run dev`                |
| Build for production | `npm run build`           |
| Preview build     | `npm run preview`            |

For layout and responsive implementation notes, see **react-app/WEEK2-LAYOUT.md**.  
For requirement-by-requirement compliance, see **react-app/PROJECT-SCOPE-CHECKLIST.md**.
