# Claude Code task — write the TensAI Blueprint content

Write the remaining content of the TensAI Blueprint: the Spine page, three pillar overviews, and the remaining concept pages — 25 pages in all — plus one diagram brief per page. The full inventory is the companion file, `content-plan-tensai-blueprint.md`. Work through it.

Two concept pages — `harness-engineering` and `agents-vs-workflows` — are already drafted. **They are the precedent.** Read both, and their diagram briefs, before writing anything. They encode every convention in this document; when in doubt, match them.

Work on a branch: `content/blueprint-pages`. Do not push, do not open PRs — leave everything for review.

---

## Before you start — read

1. `CLAUDE.md` and `DESIGN-BINDING.md` at the repo root.
2. The design-system skill at `.claude/skills/tensai-design/` — diagram conventions, colour tokens, typography tokens. If the directory is empty, the submodule is not initialised: `git submodule update --init --recursive` first.
3. The concept-page template, the content loader, and the frontmatter types (`src/types/index.ts`).
4. The two drafted pages and their diagram briefs — `harness-engineering` and `agents-vs-workflows`.
5. `content-plan-tensai-blueprint.md` — the page inventory.

Do not invent structure. Match what the repo already does.

---

## How to run it — parallel agents

**Phase 0 — confirm infrastructure.** The concept-page template, the content loader, the frontmatter type contract, the per-slug diagram registry, and the MDX components (`Callout`, `CodeBlock`, GFM Markdown tables) should already exist from the two drafted pages. Confirm they do. If something is missing, **report it — do not invent it.**

**Phase 1 — draft every page, in parallel.** One writing agent per page. Batch them — a handful at a time, sized to your limits. Order:

1. Pillar III's 10 remaining concept pages — depth first; this is a locked decision.
2. Pillar I's 6 concept pages.
3. Pillar II's 5 concept pages.
4. The Spine page and the 3 pillar overviews — **last.** They synthesise the concept pages, so they are written once the concept pages exist.

**Each writing agent, per page, does three things in order:**
1. Dispatches a research subagent (see below).
2. Drafts the `.mdx` body from verified material.
3. Writes the diagram brief.

**Parallel-safety.** A writing agent touches only its own two files — the page `.mdx` and its `<slug>_diagram.md` brief. It must not touch shared files: the diagram registry, the template, the type contract. This keeps parallel agents conflict-free. After each batch, run a consistency pass against the two precedent pages — voice, structure, frontmatter.

**Phase 2 — diagram components (separate, later).** Building the SVG diagram components and wiring them into the registry is shared-file work; it must be sequential and coordinated, and it is a follow-on task, not part of this parallel content phase. The diagram briefs produced in Phase 1 are its complete spec.

---

## Research agents

Every page gets a research pass before it is drafted. The field moves fast and its vocabulary is young — harness, Skills, A2A, MCP, the agent patterns. A research subagent gathers current, verified material; the writing agent drafts only from what is verified.

- Research exists for the writer's **accuracy**. It does **not** appear in the prose as citations. Verify the claim, then state it in TensAI's own voice — see voice rule 9.
- Verify anything that could have shifted: who originated a framing, what a standard currently specifies, what current models and tools can do, any number or statistic.
- Never propagate an unverified attribution or a stale figure into a page that is meant to read as definitive.
- If research surfaces a genuine dispute, the page acknowledges it plainly. TensAI is precise — not falsely certain.

---

## Voice & tone

TensAI writes as the field's authority — not a commentator, not a summary of other people's work. The reference itself. Every page teaches as settled knowledge.

**The two drafted pages embody every rule below. Match them.**

1. **Authoritative, first-person-institutional.** "Here is what is true; here is how to think about it." Never a literature review, never "researchers say."
2. **Educational register, not manifesto.** Open with the clean whole — the concept stated plainly in the first two or three sentences, before it decomposes. Do not open with a provocation.
3. **One earned provocation per page.** Exactly one sharp, reframing claim — placed at the first real turning point, never the opening line, never buried.
4. **Teach, don't just assert.** Thread one concrete running example through the whole page. Define any borrowed term in the sentence it first appears. Render 2×2s and contrasts as Markdown tables.
5. **Em dash is the signature punctuation.** No exclamation marks, ever. No corporate or consulting jargon — no "leverage", "best practices", "actionable", "synergy", "move the needle".
6. **Section closes.** Every `##` section ends on a single reframing sentence. The page ends on a forward-bridge to the next concept — resonance, not a summary.
7. **Rhythm.** Vary sentence length — short for assertions, longer for nuance. At most one sentence fragment per page, at a pivot.
8. **Spelling and numbers.** British spelling. Numerals for percentages and statistics (`90%`, never "ninety per cent"); words for plain counts one to nine ("two kinds", "three dimensions").
9. **Attribution.** State concepts directly, as TensAI's teaching. Provenance appears at most once per page, as a light, name-only credit, and only where a framework is genuinely one identifiable person's recent work. **Never** "X wrote this in their article dated Y." No dated-article references. No literature-review voice.
10. **No hype.** Authority comes from precision and restraint. Calm, exact, confident.

---

## Length — there is no word count

Earlier drafts targeted a word band. **Drop it.** A page is exactly as long as complete, authoritative coverage of its concept requires.

- A large concept — Harness Engineering, Evals & Observability, the Failure Taxonomy, Multi-Agent — runs long. A tighter concept runs shorter. The topic sets the length.
- The bar is total coverage: a reader should not need a second source to understand the concept.
- This is not licence to pad. Every paragraph earns its place — no filler, no setup without a payoff. A page is long because its topic is large, never long for its own sake.

---

## Authoritative styling

Authority is carried two ways — in the prose and in the form.

**Prose** — the voice rules above. Calm, exact, unhedged, no hype.

**Page anatomy:**
- Fractal opening — the whole of the concept stated first.
- `##` teaching sections, `###` where genuinely needed.
- Markdown tables and `CodeBlock`s where they make a concept concrete — a contrast or a grid belongs in a table; a literal artifact belongs in code.
- One teaching `Callout` for the page's key reframe.
- A second "Reference implementation" `Callout` where a repo applies (see below).
- A forward-bridge close.
- One custom diagram per page — a structural rule. Delivered as a diagram brief in Phase 1.

**Design system** — every diagram and any visual styling binds strictly to the TensAI design system (`.claude/skills/tensai-design`). Tokens only, no hardcoded values. Brand rules: reserved violet (one violet element per surface, never decorative), the enso as the only ornament, off-white background, no gradients, glows, or blobs, midnight and gray for diagram structure, no hype copy.

---

## GitHub reference repos — placeholders

A definitive source ships working code, not only description. Where a page has a genuine clonable reference artifact, add a "Reference implementation" `Callout` near the end of the body, linking a placeholder repo at `github.com/tensaicompl/<repo-slug>`.

- The repos **do not exist yet.** Leave every URL exactly as written. A dead link is expected — not a bug, not something to remove or substitute.
- The content plan marks a candidate repo for each page where one is likely. Add the callout only where a real clonable artifact genuinely exists — something a practitioner would actually pull. Do not force one onto a purely conceptual page; the writer judges.
- Flagship example: the Skills page links a skills repo that itself contains a skill-creating skill.

---

## Output expectations — per page

- One `.mdx` body in the correct `content/<pillar>/` path. Most pages exist as stubs — **keep the stub's frontmatter** (`spineConcepts`, `relatedNotes`, `order`, `pillar`, `slug`), replace the body, set `status: "draft"`. If a page has no stub, create it against the type contract. Never invent a frontmatter field; if the contract needs one the page lacks, stop and report.
- One diagram brief, `<slug>_diagram.md`, in the format of the two drafted briefs — single idea, layout, style, optional caption.
- MDX components in scope: `Callout` (info / warning / note) and `CodeBlock`. Markdown tables require GFM (`remark-gfm`) — confirm it is enabled; report if not.
- Match the two drafted pages exactly for structure, frontmatter shape, and conventions.

---

## Constraints

- Branch only. Do not push, do not open PRs.
- Phase 1 touches content files and diagram briefs only. No refactors. Do not fold in the separate lint/doc punch-list.
- If a contract blocks you, or anything is genuinely ambiguous, stop and report — do not guess.

## Definition of done

1. Every page in `content-plan-tensai-blueprint.md` has a draft `.mdx` and a diagram brief.
2. `npx tsc --noEmit` passes; `npm run build` succeeds; all pages prerender; pages that were already live still render.
3. Consistency with the two precedent pages confirmed — voice, structure, frontmatter.
4. Report back: pages drafted, repos placeholdered, GFM-table support status, and anything in any page you had to stop on.
