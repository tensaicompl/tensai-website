# Pillar II — The Operating Model: Diagram Specification

> Visual specification for the DiagramSlot on the Operating Model pillar landing page.
> Replaces the placeholder `<DiagramSlot title="Pillar II — The Operating Model" height={360} />`.

---

## Diagram concept: The Operating-Model Stack

A vertical stack diagram showing the five operating-model concepts as layers that build upward — each layer structurally dependent on the one beneath it. The stack sits between two labelled zones (Groundwork above, Craft below) to show the pillar's position as connective tissue.

## Layout

```
┌─────────────────────────────────────────────────────────────┐
│  PILLAR I — THE GROUNDWORK                                  │
│  "What to build, and under what conditions"                 │
│                                                             │
│         ╶╶╶╶╶╶╶╶╶╶ strategic intent flows down ╶╶╶╶╶╶╶╶╶╶  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  05  ADOPTION & FAILURE PATTERNS                      │  │
│  │      "What breaks without the model"                  │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │  04  CoE & ENABLEMENT                                 │  │
│  │      "Who maintains and evolves the system"           │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │  03  THE AGENT CATALOG                                │  │
│  │      "The data structure beneath governance"          │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │  02  POWER USERS vs CONSUMERS                         │  │
│  │      "The three-tier distribution"                    │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │  01  SKILLS AS THE REUSABLE UNIT                      │  │
│  │      "The foundation — what gets packaged"            │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  PILLAR II — THE OPERATING MODEL                            │
│  "Capability becomes an asset only when it is               │
│   reusable, governed, and findable."                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  PILLAR III — THE CRAFT                                     │
│  "How to build it well"                                     │
│                                                             │
│         ╶╶╶╶╶╶╶╶╶╶ engineering output flows up ╶╶╶╶╶╶╶╶╶╶  │
└─────────────────────────────────────────────────────────────┘
```

## Visual specification

### Outer context zones (Groundwork and Craft)

- Two thin horizontal bands, one above and one below the main stack.
- Background: `var(--bg-surface)` with `1px solid var(--border)`.
- Pillar label in `var(--font-display)`, 11px uppercase, `letter-spacing: 0.14em`, colour `var(--fg-3)`.
- Subtitle in 12px regular, colour `var(--fg-3)`.
- Dashed connector lines between zones and the main stack — use `stroke-dasharray="6 4"` in SVG, colour `var(--fg-3)` at 40% opacity.
- Arrow direction: downward from Groundwork ("strategic intent flows down"), upward from Craft ("engineering output flows up").

### Main stack (five layers)

- Five horizontal bands stacked vertically, no gap between them (touching edges, separated by a `1px` line in `var(--border)`).
- Each band: full width of the container, height approximately 48–56px.
- Background for all five: `var(--bg-page)`.
- On hover, the hovered band shifts to `var(--bg-surface)` — use CSS transition, 200ms.
- Each band is a clickable link to its concept page (`/operating-model/skills`, etc.).

### Layer content (per band)

- Left side: two-digit number (`01`–`05`) in `var(--font-display)`, italic, 18px, colour `var(--fg-3)`.
- Centre: concept title in `var(--font-display)`, 14px, weight 600, colour `var(--fg-1)`.
- Right side: one-line subtitle in 12.5px regular, colour `var(--fg-2)`.
- Vertical alignment: centred within the band.

### Stack order (bottom to top)

The stack builds upward. Layer 01 (Skills) is at the bottom — the structural foundation. Layer 05 (Adoption Patterns) is at the top — the diagnostic lens that looks down at the whole.

| Position | Number | Title | Subtitle |
|---|---|---|---|
| Top | 05 | Adoption & Failure Patterns | What breaks without the model |
| 4th | 04 | CoE & Enablement | Who maintains and evolves the system |
| 3rd | 03 | The Agent Catalog | The data structure beneath governance |
| 2nd | 02 | Power Users vs Consumers | The three-tier distribution |
| Bottom | 01 | Skills as the Reusable Unit | The foundation — what gets packaged |

### Throughline annotation

- A vertical line on the left margin of the stack, running the full height of all five layers.
- Solid, 2px, colour `var(--color-midnight)`.
- At the midpoint of this line, a small rotated text label reading: "reusable --- governed --- findable" in 10px uppercase, `letter-spacing: 0.12em`, colour `var(--fg-3)`.
- This echoes the pillar throughline visually without repeating it in prose.

### Dependency arrows (within the stack)

- Between each adjacent pair of layers, a small upward-pointing chevron (`^`) centred horizontally, sitting on the border line.
- Colour: `var(--fg-3)` at 50% opacity.
- Purpose: to reinforce that each layer depends on the one below it.

## Responsive behaviour

- Below 768px: collapse the left number and right subtitle. Show only the concept title, left-aligned, per band.
- Below 640px: hide the outer context zones (Groundwork and Craft). Show only the five-layer stack.
- The stack itself remains full-width at all breakpoints.

## Colours and tokens

| Element | Token |
|---|---|
| Stack band background | `var(--bg-page)` |
| Stack band hover | `var(--bg-surface)` |
| Band border | `var(--border)`, 1px |
| Layer number | `var(--fg-3)` |
| Layer title | `var(--fg-1)` |
| Layer subtitle | `var(--fg-2)` |
| Throughline bar | `var(--color-midnight)`, 2px solid |
| Context zone background | `var(--bg-surface)` |
| Context zone text | `var(--fg-3)` |
| Dashed connectors | `var(--fg-3)` at 40% opacity |
| Chevrons | `var(--fg-3)` at 50% opacity |

## Implementation notes

- Build as a React server component (no `"use client"` needed — hover is CSS-only).
- Use an `<svg>` for the dashed connectors and chevrons; use `<div>` or `<a>` tags for the bands.
- Each band wraps in a Next.js `<Link>` to its concept page.
- No JavaScript interactivity required — all hover states are CSS transitions.
- Height: approximately 360px total (matching the current DiagramSlot placeholder). Adjust layer band heights proportionally if the outer context zones push the total beyond 400px.
- No gradients, no blobs, no illustrations. The Enso is the only ornament on the site and does not appear in this diagram. The visual language is structural — lines, bands, and type.
