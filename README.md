# Astro Mining & Industrial V2

Fresh V2 concept for Astro Mining & Industrial built as a separate Next.js project so the approved V1 website remains untouched.

## Concept

- Cinematic homepage with full-screen scroll panels
- Media-first storytelling using Astro video, quarry imagery, product visuals, and map assets
- Motion-driven transitions that change the visible scene as the user scrolls
- Same Astro brand content and data, but a distinct visual direction from V1

## Stack

- Next.js App Router
- React
- CSS Modules
- Framer Motion

## Current Scope

- Home page only
- Reusable header, footer, shared buttons, and icon system
- Story-driven full-screen sections for hero, company overview, services, products, reach, and contact
- Shared data source for Astro content, products, partners, and contact details
- SEO-ready metadata and semantic structure

## Structure

- `app/` App Router entrypoints and global styling
- `components/layout/` header and footer
- `components/sections/` homepage story panels
- `components/shared/` reusable UI primitives
- `data/` Astro content model for the homepage
- `public/assets/` copied local brand, image, video, and PDF assets

## Notes

- V2 is intentionally isolated in its own repo and workspace.
- The page is designed to feel more cinematic and immersive than V1.
- Scroll behavior uses full-screen panel changes instead of a traditional long marketing page.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
