# Diagram Brief — Adoption & Failure Patterns

## Title
Three Failure Patterns and the Operating Model Layer

## Single idea the diagram conveys
Enterprise AI adoption fails in three predictable ways — the adoption cliff (usage drops), the scaling cliff (pilots cannot replicate), and the governance gap (incidents trigger freezes) — and each maps to a missing layer of the operating model that would have prevented it.

## Layout description
A two-zone vertical composition: the upper zone shows the three failure patterns as a left-to-right sequence with decay visuals; the lower zone shows the three operating-model layers that prevent them, connected by vertical arrows.

### Upper zone — three failure patterns

Three rectangular cells arranged in a single horizontal row, evenly spaced. Each cell contains a small abstract glyph and a label beneath. A thin horizontal timeline arrow runs behind all three cells from left to right, labelled "Time" at its right end.

1. **The Adoption Cliff** — Glyph: a line that rises steeply from left to right for a short distance, then drops off sharply — a cliff edge. The rising portion is solid; the falling portion is dashed (usage that was there, then wasn't). Label beneath: "Adoption Cliff".

2. **The Scaling Cliff** — Glyph: a single small square on the left (one pilot), a thin arrow pointing right toward three small squares stacked on the right, but the arrow hits a vertical wall before reaching them — the wall is a thick short vertical bar. Label beneath: "Scaling Cliff".

3. **The Governance Gap** — Glyph: two horizontal parallel lines representing a bridge, with a widening gap in the centre — the lines diverge apart, leaving an empty space between them. A small diamond shape (an incident) sits in the gap. Label beneath: "Governance Gap".

Below the three cells, a single line of text spanning the row: "Three patterns. One root cause: capability deployed without operations."

### Lower zone — the prevention layer

Three rectangular cells arranged in a horizontal row, directly below the corresponding failure-pattern cells. Each cell is slightly taller than the upper cells and contains a label only (no glyph):

1. **Adoption layer** — "Workflow integration, champion network, user feedback loop" — positioned directly below the Adoption Cliff cell.

2. **Scaling layer** — "Skill registry, eval pipeline, shared platform" — positioned directly below the Scaling Cliff cell.

3. **Governance layer** — "Risk classification, policy framework, named ownership" — positioned directly below the Governance Gap cell.

### Connecting elements

- A thin vertical arrow descends from each upper cell to the corresponding lower cell. Each arrow is labelled with a single word at its midpoint:
  - Adoption Cliff → Adoption layer: "Embeds"
  - Scaling Cliff → Scaling layer: "Reuses"
  - Governance Gap → Governance layer: "Governs"

- A subtle horizontal bracket beneath the three lower cells groups them, with a centred label below the bracket: "The Operating Model".

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Upper cells, glyphs, and edges:** midnight (`#0F172A`) — solid, 2px stroke, no fill
- **Dashed portion of the adoption cliff glyph:** midnight at 40% opacity, 4px dash
- **One accent element:** the vertical wall bar in the Scaling Cliff glyph uses reserved violet (`#6D28D9`) — the only colour, drawing the eye to the structural barrier. The wall mirrors the Stage 2→3 wall from the operating-model diagram.
- **Lower cells:** midnight 1px stroke, light slate background at 5% opacity — subtly distinct from the upper cells to mark them as the solution layer
- **Vertical arrows:** midnight at 60% opacity, 1.5px stroke, with small arrowheads
- **Arrow labels ("Embeds", "Reuses", "Governs"):** midnight, 11px, medium weight
- **Horizontal bracket:** midnight at 30% opacity, 1px stroke, simple square bracket
- **"The Operating Model" label:** midnight, 14px, semibold — the structural anchor of the diagram
- **Timeline arrow:** midnight at 20% opacity, 1px stroke, small arrowhead
- **Typography:** pattern names beneath glyphs in midnight, 14px, medium weight. Subtext line in midnight at 50% opacity, 12px, regular weight. Lower cell descriptions in midnight at 70% opacity, 12px, regular weight.
- **Spacing:** equal gaps between the three columns. Upper and lower zones separated by enough vertical space for the connecting arrows and labels to breathe.
- **No gradients, no shadows, no decorative fills.** Line art only.

## Optional caption
"Three predictable failure patterns — and the operating-model layers that prevent each one."
