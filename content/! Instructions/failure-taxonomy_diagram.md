# Diagram Brief — The Failure Taxonomy

## Title
Five Failure Classes and the Cascade

## Single idea the diagram conveys
Agent failures fall into five distinct classes — memory, reflection, planning, action, system — and they cascade: a failure in one class triggers failures in others, producing symptoms that point away from the root cause.

## Layout description
A vertical composition with two zones: the taxonomy strip (upper) and the cascade zone (lower).

### Upper zone — the five classes

Five square cells arranged in a single horizontal row, evenly spaced. Each cell contains a small iconic glyph (abstract, no text inside the glyph) and a label beneath:

1. **Memory** — Glyph: a short horizontal bar with a dashed gap in its centre (broken continuity). Label: "Memory".
2. **Reflection** — Glyph: a circular arrow that loops back on itself but does not close — the returning arrow misses the start point by a visible gap (a self-assessment that does not connect). Label: "Reflection".
3. **Planning** — Glyph: three short horizontal bars stacked vertically (a list), with the middle bar crossed out by a thin diagonal stroke (a bad step in a plan). Label: "Planning".
4. **Action** — Glyph: a single arrow pointing right, with its head detached and offset slightly downward from the shaft (an action that misses its target). Label: "Action".
5. **System** — Glyph: a small square outline with a jagged crack running diagonally across it (broken infrastructure). Label: "System".

All five sit on the same baseline. A subtle downward arrow from each cell leads to the cascade zone.

### Lower zone — the cascade

Below the five cells, a single horizontal band — visually distinct, slightly indented on both sides — contains one representative cascade rendered as a left-to-right chain:

**System** → **Memory** → **Planning** → **Reflection**

Each class in the chain is represented by its glyph (smaller than in the upper row), connected by thin horizontal arrows. The chain reads as: "a system failure triggers a memory failure, which triggers a planning failure, which produces a reflection failure." A label beneath the chain reads: "Symptom at the end. Root cause at the start."

A single thin vertical dashed line descends from the "System" cell in the upper row to the "System" glyph in the cascade chain, showing where the cascade originates. No other vertical connectors in the cascade zone — the point is that only the first class connects upward; the rest are consequences.

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Cells, glyphs, and edges:** midnight (`#0F172A`) — solid, 2px stroke, no fill
- **One accent element:** the crack glyph in the System cell uses reserved violet (`#6D28D9`) — this is the only colour, drawing the eye to the class that originates entirely outside the model
- **Cascade band:** bordered by a 1px midnight rule at 30% opacity, no background fill — a subtle container, not a box
- **Dashed connector** from upper System cell to lower cascade: midnight at 40% opacity, 4px dash
- **Typography:** class names beneath glyphs in midnight, 14px, medium weight. Cascade label in 12px, regular weight, midnight at 60% opacity
- **Spacing:** equal gaps between the five cells. The cascade band is visually narrower than the taxonomy strip, centred beneath it
- **No gradients, no shadows, no fills, no decoration.** Line art only.

## Optional caption
"Five classes of agent failure — and the cascade that connects them."
