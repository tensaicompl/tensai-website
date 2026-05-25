@AGENTS.md

# CLAUDE.md — TensAI Website

## Project Overview
TensAI public website — a content architecture site with 18 canonical AI concepts across three pillars (Groundwork, Operating Model, Craft). Built with Next.js 16 App Router, TypeScript, Tailwind CSS 4.

## Key Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npx tsc --noEmit` — Type check
- `npx vercel deploy --prod` — Deploy to production

## Architecture
- All content is MDX in `content/` — concept pages, notes, static pages
- Design tokens from `.claude/skills/tensai-design/tokens/` mapped in `src/app/globals.css`
- No `tailwind.config.ts` — Tailwind CSS 4 uses `@theme inline` in globals.css
- Server components by default; "use client" only where interactivity needed
- `src/lib/content.ts` loads MDX at build time with frontmatter validation
- `src/lib/spine-data.ts` defines the 18 canonical concepts and 3 pillars

## Content Pipeline
- Concept frontmatter: title, pillar, slug, definition, spineConcepts, relatedNotes, status, order
- Note frontmatter: title, excerpt, date, author, category, tags, published
- Build fails on missing required frontmatter fields
- MDX components available: ContentPlaceholder, Callout (info/warning/note), CodeBlock

## Brand Rules (MUST follow)
1. Violet (#6D28D9) only on ONE primary CTA per surface + brand mark
2. Enso is the only ornament — no gradients, blobs, illustrations
3. No emoji, no exclamation marks, no hype ("Unleash", "Supercharge")
4. Backgrounds #FAFAFA (never #FFF for pages), headlines #0F172A (never pure black)
5. Brand name always "TensAI" — capital T, lowercase ens, capital AI

## Design System
- Tokens: `.claude/skills/tensai-design/tokens/tokens.json`
- CSS variables: `src/app/globals.css` `:root {}` block
- Tailwind mapping: `@theme inline {}` block in globals.css
- References: `.claude/skills/tensai-design/references/website/` for component patterns
- See `DESIGN-BINDING.md` for integration details

## Route Structure

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Homepage |
| `/spine` | `src/app/spine/page.tsx` | 18 canonical concepts map |
| `/groundwork` | `src/app/groundwork/page.tsx` | Pillar I index |
| `/groundwork/[slug]` | `src/app/groundwork/[slug]/page.tsx` | Concept pages |
| `/operating-model` | `src/app/operating-model/page.tsx` | Pillar II index |
| `/operating-model/[slug]` | `src/app/operating-model/[slug]/page.tsx` | Concept pages |
| `/craft` | `src/app/craft/page.tsx` | Pillar III index |
| `/craft/[slug]` | `src/app/craft/[slug]/page.tsx` | Concept pages |
| `/notes` | `src/app/notes/page.tsx` | Notes listing |
| `/notes/[slug]` | `src/app/notes/[slug]/page.tsx` | Individual note |
| `/about` | `src/app/about/page.tsx` | About page |
| `/contact` | `src/app/contact/page.tsx` | Contact form |
| `/legal/privacy` | `src/app/legal/privacy/page.tsx` | Privacy policy |
| `/legal/terms` | `src/app/legal/terms/page.tsx` | Terms of service |
| `/api/contact` | `src/app/api/contact/route.ts` | Contact form API handler |

## Component Map

| Directory | Purpose |
|---|---|
| `src/components/ui/` | Base primitives: Badge, Button, Card, Chip, Eyebrow, Input, Select, Textarea |
| `src/components/layout/` | SiteNav, SiteFooter, RevealOnScroll |
| `src/components/mdx/` | MDX shortcodes: Callout, CodeBlock, ContentPlaceholder |
| `src/components/content/` | Concept page blocks: ConceptConnections, CrossAltitudeStrip, LinkedNotes |
| `src/components/diagrams/` | SVG diagram components: SteeringDiagram, FinopsDiagram, HarnessDiagram, etc. All use IntersectionObserver entrance animations, CSS transition staggers, and SMIL flowing dots (gated on `visible && !reducedMotion`). Dashed research-frontier box in SteeringDiagram extends to x=904 to contain intervention labels. |
| `src/components/notes/` | NoteCard, CategoryFilter |
| `src/components/marketing/` | TheIndex (expandable map diagram) |

## Important Patterns
- Next.js 15: `params` is a Promise — always `await params` in dynamic routes
- Hover effects use CSS `<style>` tags, not JS event handlers (server components)
- No UI component library — all components custom, built from design system
- Links use `next/link` Link component
- Notes listing uses a client component (`NotesClient.tsx`) for category filtering; the parent `notes/page.tsx` is a server component that passes data down
