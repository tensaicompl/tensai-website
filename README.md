# TensAI Website

The public-facing content website for TensAI — an authoritative body of work on building AI properly across the enterprise. 18 canonical concepts, three pillars, one governing principle: whole before parts.

**Live:** https://tensai-website.vercel.app

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + TensAI Design System tokens
- **Content:** MDX files in-repo with frontmatter validation
- **Deployment:** Vercel

## Getting Started

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/tensaicompl/tensai-website.git
cd tensai-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Project Structure

```
tensai-website/
├── content/                        # All MDX content
│   ├── groundwork/                 # Pillar I concept pages (6 concepts)
│   │   ├── build-buy-boost.mdx
│   │   ├── finops.mdx
│   │   ├── governance-risk.mdx
│   │   ├── operating-model.mdx
│   │   ├── security-architecture.mdx
│   │   └── token-sourcing.mdx
│   ├── operating-model/            # Pillar II concept pages (5 concepts)
│   │   ├── adoption-patterns.mdx
│   │   ├── agent-catalog.mdx
│   │   ├── coe-enablement.mdx
│   │   ├── power-users.mdx
│   │   └── skills.mdx
│   ├── craft/                      # Pillar III concept pages (13 concepts)
│   │   ├── afk-autonomous.mdx
│   │   ├── agents-vs-workflows.mdx
│   │   ├── code-doc-indexing.mdx
│   │   ├── evals-observability.mdx
│   │   ├── failure-taxonomy.mdx
│   │   ├── five-patterns.mdx
│   │   ├── harness-engineering.mdx
│   │   ├── memory-context.mdx
│   │   ├── multi-agent.mdx
│   │   ├── rag-evolutions.mdx
│   │   ├── steering.mdx
│   │   └── tools-mcp.mdx
│   ├── notes/                      # Blog posts / Notes
│   │   ├── build-buy-boost.mdx
│   │   ├── context-engineering-replaces-prompts.mdx
│   │   └── harness-engineering-discipline.mdx
│   ├── about.mdx                   # About page content
│   ├── privacy.mdx                 # Privacy policy
│   └── terms.mdx                   # Terms of service
├── src/
│   ├── app/                        # Next.js App Router routes
│   │   ├── about/page.tsx
│   │   ├── api/contact/route.ts
│   │   ├── contact/page.tsx
│   │   ├── craft/page.tsx + [slug]/page.tsx
│   │   ├── groundwork/page.tsx + [slug]/page.tsx
│   │   ├── legal/privacy/page.tsx + terms/page.tsx
│   │   ├── notes/page.tsx + [slug]/page.tsx + NotesClient.tsx
│   │   ├── operating-model/page.tsx + [slug]/page.tsx
│   │   ├── spine/page.tsx
│   │   ├── globals.css             # Design tokens + Tailwind @theme
│   │   ├── layout.tsx              # Root layout (fonts, nav, footer)
│   │   ├── page.tsx                # Homepage
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── content/                # Concept page components
│   │   │   ├── ConceptConnections.tsx
│   │   │   ├── CrossAltitudeStrip.tsx
│   │   │   └── LinkedNotes.tsx
│   │   ├── diagrams/               # Diagram placeholders + future SVG components
│   │   │   └── DiagramSlot.tsx
│   │   ├── layout/                 # Site-wide layout components
│   │   │   ├── RevealOnScroll.tsx
│   │   │   ├── SiteFooter.tsx
│   │   │   └── SiteNav.tsx
│   │   ├── marketing/              # Homepage / marketing components
│   │   │   ├── FractalRule.tsx
│   │   │   └── MapScrollSequence.tsx
│   │   ├── mdx/                    # MDX shortcode components
│   │   │   ├── Callout.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   └── ContentPlaceholder.tsx
│   │   ├── notes/                  # Notes listing components
│   │   │   ├── CategoryFilter.tsx
│   │   │   └── NoteCard.tsx
│   │   └── ui/                     # Base UI primitives
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Chip.tsx
│   │       ├── Eyebrow.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       └── Textarea.tsx
│   ├── lib/
│   │   ├── content.ts              # MDX loader with frontmatter validation
│   │   └── spine-data.ts           # 18 canonical concepts + 3 pillars
│   └── types/
│       └── index.ts                # Shared TypeScript types
└── .claude/skills/tensai-design/   # Design system (git submodule)
    └── tokens/                     # tokens.json, colors_and_type.css
```

## How to Add a Concept Page

1. Create a new `.mdx` file in `content/<pillar>/` (`groundwork`, `operating-model`, or `craft`)
2. Add required frontmatter:
   ```yaml
   ---
   title: "Your Concept Title"
   pillar: "craft"
   slug: "your-concept-slug"
   definition: "One-line definition of this concept."
   spineConcepts: [1, 2]  # Which of the 18 spine concepts this maps to
   relatedNotes: []
   status: "draft"  # stub | draft | published
   order: 13  # Position within the pillar
   ---
   ```
3. Write your content using MDX. Available components: `<Callout>`, `<CodeBlock>`, `<ContentPlaceholder>`
4. The route `/[pillar]/[slug]` is generated automatically

## How to Add a Note (Blog Post)

1. Create a new `.mdx` file in `content/notes/`
2. Add required frontmatter:
   ```yaml
   ---
   title: "Your Note Title"
   excerpt: "1-2 sentence summary for cards."
   date: "2026-05-24"
   author: "TensAI"
   category: "Engineering"  # Engineering | Product | Industry
   tags: ["tag1", "tag2"]
   published: true
   ---
   ```
3. Write content. The note appears at `/notes/[slug]`
4. To link from a concept page, add the note's slug to that concept's `relatedNotes` array

## How to Replace a DiagramSlot

1. Create a new React component in `src/components/diagrams/`
2. Use SVG with CSS custom properties for theming (reference `SpineDiagram` pattern when built)
3. Import and use in place of `<DiagramSlot>` in the relevant page
4. Follow the reserved-violet rule: midnight for structure, violet only sparingly

## Design System

The TensAI Design System is installed as a git submodule at `.claude/skills/tensai-design/`. To update:

```bash
git submodule update --remote .claude/skills/tensai-design
```

See `DESIGN-BINDING.md` for token integration details and the five brand rules.

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `RESEND_API_KEY` | Resend API key for contact form emails | For contact form |
| `EMAIL_FROM` | Sender email address | For contact form |
| `CONTACT_EMAIL` | Recipient email for contact form | For contact form |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | For SEO |

## Deployment

Auto-deploys from `main` via Vercel. Preview deployments created for pull requests.

```bash
# Manual deploy
npx vercel deploy --prod
```

## Brand Rules (Quick Reference)

1. Violet (#6D28D9) — ONE primary CTA per surface + brand mark only
2. Enso is the only ornament — once per surface, large
3. No emoji, no exclamation marks, no hype phrasing
4. Backgrounds #FAFAFA, headlines #0F172A
5. Brand name is always TensAI

See `DESIGN-BINDING.md` for full details.
