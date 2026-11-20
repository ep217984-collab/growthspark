# GrowthSpark Impact

Website for **GrowthSpark Impact**, a boutique author growth and book marketing consultancy led by Emmanuel (Founder & Growth Strategist).

Live site: https://growthsparkimpact.lovable.app

## Stack

- [TanStack Start](https://tanstack.com/start) + TanStack Router (file-based routes in `src/routes`)
- React 19, TypeScript, Vite 7
- Tailwind CSS 4 + shadcn/ui (`src/components/ui`)
- Supabase client (`src/integrations/supabase`)
- Originally built with [Lovable](https://lovable.dev)

## Project structure

```
src/
  routes/          Pages (home, about, services, portfolio, editorial, book-ascendancy, legal, ...)
  components/      Shared site components (header, footer, PDF viewer, share bar, ...)
  components/ui/   shadcn/ui primitives
  lib/             Content data and helpers (services, team, projects, contact form logic)
  integrations/    Supabase client and auth helpers
  assets/          Images, plus *.asset.json pointers for hosted media
  styles.css       Global styles and design tokens
public/
  downloads/       Free resource PDFs
  features/        Featured-author article PDFs
  proof-of-work/   Client deliverable PDFs
supabase/          Config and migrations
roadmap.md         Running to-do list for site refinements
```

## Getting started

```sh
bun install      # or: npm install
bun run dev      # or: npm run dev
```

Other scripts: `build`, `preview`, `lint`, `format`.

## Missing binary files

Some image and PDF files could not be exported with the source code, and three placeholder images stand in for real ones. See [docs/MISSING_ASSETS.md](docs/MISSING_ASSETS.md) for what to replace and add.
