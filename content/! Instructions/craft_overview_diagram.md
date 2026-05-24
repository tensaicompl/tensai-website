# Diagram Brief — The Craft

## Title
The Harness Gradient

## Single idea the diagram conveys
The twelve concepts of The Craft form a single gradient from fixed-path workflows to fully autonomous agents, with the harness as the constant wrapping every point along the way.

## Layout description
A horizontal composition with three visual zones arranged left to right, enclosed within a single continuous harness border that spans the full width.

### The harness frame

A large rounded rectangle — the full width of the diagram — with a 2px midnight stroke and no fill. This is the harness. A label at the top-left corner of the rectangle, outside the stroke, reads: "The Harness". Everything else sits inside this frame. The frame is the visual throughline: no matter where you are on the gradient, you are inside the harness.

### Three zones inside the frame

The interior is divided into three zones, separated by thin vertical dashed lines (midnight at 30% opacity). Each zone has a small label above its group of concept blocks.

**Zone 1 — Structure (left third)**
Label above: "Fixed path"

Three concept blocks stacked vertically, each a small rounded rectangle (1px midnight stroke, no fill) containing the concept name in 12px text:

1. "Agents vs Workflows"
2. "The Five Patterns"
3. "Harness Engineering"

A thin arrow descends from block 1 to block 2, and from block 2 to block 3, indicating sequence.

**Zone 2 — Infrastructure (middle third)**
Label above: "The harness, layer by layer"

Six concept blocks arranged in two columns of three, each a small rounded rectangle:

Left column:
4. "Memory & Context"
5. "Tools & MCP"
6. "RAG & Its Evolutions"

Right column:
7. "Multi-Agent & A2A"
8. "Steering"
9. "Code & Doc Indexing"

No arrows between these blocks — they sit as a field, indicating parallel layers rather than sequence. Thin horizontal connector lines link each left-column block to its corresponding right-column block (4 to 7, 5 to 8, 6 to 9), indicating pairs at the same depth.

**Zone 3 — Trust (right third)**
Label above: "Earned autonomy"

Three concept blocks stacked vertically:

10. "Evals & Observability"
11. "AFK & Autonomous Agents"
12. "The Failure Taxonomy"

A thin arrow descends from block 10 to block 11, and from block 11 to block 12.

### The gradient arrow

Below the three zones but still inside the harness frame, a single horizontal arrow spans the full interior width, pointing right. The arrow is midnight at 50% opacity, 1.5px stroke. Centred beneath the arrow, a label reads: "Autonomy gradient — you decide ... the model decides"

The left end of the arrow text reads "you decide" and the right end reads "the model decides", with an ellipsis bridging them. This is the single narrative line of the entire diagram.

### The loop-back line

A thin curved line (midnight at 30% opacity, 1px stroke, dashed) arcs from block 12 ("The Failure Taxonomy") at the bottom-right back up and to the left, connecting to block 3 ("Harness Engineering") at the bottom-left. A small label along this arc reads: "Every failure improves the harness". This closing loop is the visual encoding of the capstone argument: the taxonomy resolves backward into the harness.

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Harness frame:** midnight (`#0F172A`) — 2px stroke, no fill, 8px border radius
- **"The Harness" label:** midnight, 13px, semibold, positioned outside the frame at top-left
- **Zone labels ("Fixed path", "The harness, layer by layer", "Earned autonomy"):** midnight at 60% opacity, 11px, uppercase, letter-spacing 0.14em
- **Zone dividers:** midnight at 30% opacity, 1px dashed vertical lines
- **Concept blocks:** midnight — 1px stroke, no fill, 4px border radius. Text inside: midnight, 12px, medium weight
- **Sequence arrows (Zone 1 and Zone 3):** midnight at 50% opacity, 1px stroke, small arrowhead
- **Horizontal connector lines (Zone 2):** midnight at 25% opacity, 1px solid
- **Gradient arrow:** midnight at 50% opacity, 1.5px stroke, standard arrowhead pointing right
- **Gradient arrow label:** midnight at 40% opacity, 11px, regular weight
- **Loop-back arc:** midnight at 30% opacity, 1px dashed, small label in 10px regular weight
- **Accent colour usage:** none. The harness frame's 2px weight is the only visual emphasis — heavier than the concept blocks' 1px, drawing the eye to the enclosure. No violet in this diagram — the harness itself is the emphasis, not any single concept.
- **No gradients, no shadows, no fills, no decoration.** Line art only.

## Optional caption
"Twelve concepts, one gradient, one constant — the harness wraps every point from fixed workflow to fully autonomous agent."
