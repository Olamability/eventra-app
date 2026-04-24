# Eventtra

A modern, curated event browsing platform inspired by event products across Africa. Discover tech summits, music festivals, and business forums shaping the continent.

## ✨ Features

- **Browse events** — Responsive card grid of curated events
- **Search & filter** — Filter by title and category (Tech, Music, Business)
- **Event details** — Rich detail page with sticky registration card
- **Register flow** — UI-only "Register" with success toast
- **Skeleton loaders** — Smooth loading states
- **Premium design system** — Warm African-inspired palette, semantic tokens, dark mode ready
- **Fully responsive** — Mobile-first layout with refined typography

## 🛠 Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** with HSL semantic design tokens
- **shadcn/ui** primitives (Radix-based)
- **React Router** for navigation
- **TanStack Query** ready for data fetching
- **Sonner** for toast notifications
- **Lucide** icons

## 🚀 Getting Started

```bash
npm install
npm run dev          # start dev server
npm run build        # production build
npm run preview      # preview production build
npm run test         # run tests (vitest)
```

The app runs at `http://localhost:8080` by default.

## 📁 Project Structure

```
src/
├── assets/                  # Event images (imported via ES6)
├── components/
│   ├── ui/                  # shadcn/ui primitives
│   ├── Navbar.tsx           # Top navigation
│   ├── Hero.tsx             # Landing hero with search
│   ├── CategoryFilters.tsx  # Pill-style category filter
│   ├── EventCard.tsx        # Reusable event card
│   ├── EventCardSkeleton.tsx
│   ├── EventGrid.tsx        # Grid + loading + empty states
│   ├── HostCta.tsx          # "List an event" CTA band
│   └── Footer.tsx
├── data/
│   └── events.ts            # Mock event data + types
├── lib/
│   ├── format.ts            # Date/time formatters
│   └── utils.ts             # cn() helper
├── pages/
│   ├── Index.tsx            # Home page
│   ├── EventDetails.tsx     # Event detail page
│   └── NotFound.tsx
├── App.tsx                  # Routes
├── main.tsx                 # App entry
└── index.css                # Design tokens & global styles
```

## 🎨 Design System

All design tokens live in `src/index.css` and are mirrored as Tailwind utilities in `tailwind.config.ts`. Components use **semantic tokens** only — never raw colors.

Key tokens:
- `--primary` — warm orange (`16 90% 52%`)
- `--accent` — emerald teal
- `--gradient-hero`, `--gradient-mesh` — branded gradients
- `--shadow-soft` → `--shadow-elegant` — layered shadow scale
- `font-display` — Plus Jakarta Sans (headings)
- `font-sans` — Inter (body)

## 🗺 Routes

| Path             | Page            |
| ---------------- | --------------- |
| `/`              | Home / browse   |
| `/events/:id`    | Event details   |
| `*`              | 404 Not Found   |

## 📦 Deployment

The project is a standard Vite SPA and deploys to any static host (Vercel, Netlify, Cloudflare Pages, etc.):

```bash
npm run build
# Output is in ./dist
```

For SPA routing, configure your host to fall back to `index.html` for unknown routes.

## 📄 License

MIT
