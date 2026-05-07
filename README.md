# Annex

**Extraordinary workspaces for ambitious teams.**

Validation landing page for Annex — a curated network of industrial and commercial workspaces for startups and growing companies. Built to test interest and collect waitlist signups.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy

Configured for [Vercel](https://vercel.com). Connect the GitHub repo in the Vercel dashboard or run:

```bash
npx vercel --prod
```

## Structure

```
app/
  layout.tsx       # Root layout + metadata
  page.tsx         # Single-page entry
  globals.css      # Base styles
components/
  Navbar.tsx       # Scroll-aware fixed nav
  Hero.tsx         # Hero with mock listing card
  Problem.tsx      # Problem statement + stats
  Spaces.tsx       # Featured space cards
  WhyAnnex.tsx     # Value proposition
  Hosts.tsx        # Host CTA
  Waitlist.tsx     # Tenant/host signup form
  Footer.tsx       # Footer
```
