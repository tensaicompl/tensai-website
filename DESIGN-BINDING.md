# DESIGN-BINDING.md — TensAI Website

**Date:** 2026-05-24
**Status:** Confirmed

## Token Integration

- **Source:** `.claude/skills/tensai-design/tokens/tokens.json` and `tokens/colors_and_type.css`
- **Method:** All CSS custom properties from the design system are declared in `src/app/globals.css` `:root {}`. A `@theme inline {}` block maps every token to Tailwind CSS 4 utilities.
- **Mapping:** Colors, typography, spacing, radii, shadows, and motion are all available as Tailwind classes (e.g., `bg-violet-base`, `text-midnight-base`, `rounded-pill`, `shadow-accent`, `font-display`).

## Fonts

| Font | Role | Weights | Method |
|------|------|---------|--------|
| Montserrat | Display (`--font-display`) | 400, 500, 600, 700, 800 | `next/font/google` with `display: swap` |
| Inter | Body (`--font-body`) | 400, 500, 600, 700 | `next/font/google` with `display: swap` |
| JetBrains Mono | Code (`--font-mono`) | 400, 500 | `next/font/google` with `display: swap` |

CSS variables `--font-montserrat`, `--font-inter`, `--font-jetbrains-mono` are set on `<html>` via Next.js font classes and consumed by the `--font-display`, `--font-body`, `--font-mono` definitions in globals.css.

## Five Brand Rules — Enforcement

1. **Reserved violet.** `Button` component's `primary` variant is the only violet element. All other variants (outline, ghost, midnight, link) use midnight or gray. Enforced by component API — no raw violet classes used outside `Button primary`.
2. **Enso as only ornament.** Logo assets in `public/logos/` are the sole ornamental elements. No gradients, abstract blobs, or illustrated metaphors in any component.
3. **No emoji, no exclamation marks, no hype.** Copy in all components and pages follows design system voice guidelines. No emoji characters anywhere in the codebase.
4. **Off-white #FAFAFA backgrounds, midnight #0F172A headlines.** `--bg-page` (#FAFAFA) set on body. All heading elements use `--fg-1` (midnight). Pure white (#FFF) used only for card surfaces (`--bg-card`).
5. **Brand name is TensAI.** Hardcoded in `SiteNav` and `SiteFooter` as "TensAI" — capital T, lowercase ens, capital AI.

## Stack Choice

**Next.js 15 (App Router)** chosen over the design system's Vite + React 18 template because:
- The site is content-heavy with 23+ concept pages, all MDX-authored. Next.js provides native SSG/SSR for SEO-critical content pages.
- App Router supports per-route layouts (marketing vs. future app shell), streaming, and built-in metadata API.
- Native Vercel deployment with preview environments per PR.
- MDX pipeline support via `@next/mdx` or `next-mdx-remote`.

The design system's token file remains the single source of visual truth — no Tailwind defaults override it.

## Gaps and Notes

- Fonts are currently loaded via `next/font/google` (CDN at build time, self-hosted in output). For production, font files could be vendored into `public/fonts/` for full offline control — not blocked for launch.
- The design system ships no dark mode tokens. This project does not implement dark mode.
