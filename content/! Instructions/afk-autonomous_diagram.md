# Diagram Brief — AFK & Autonomous Agents

## Title
The Autonomy Gradient

## Single idea the diagram conveys
HITL, on-rails, and AFK are three levels of the same architecture — they differ only in who holds the decide step of the Ralph loop, and trust accumulates in one direction along the gradient.

## Layout description
A single horizontal composition divided into two vertically stacked zones: the Ralph loop at top, and the autonomy gradient beneath it.

### Zone 1 — The Ralph loop (upper half)

Five nodes arranged in a clockwise pentagon (not a circle — a pentagon with clear vertices), connected by directional arrows forming a continuous loop:

1. **Plan** — top centre
2. **Act** — upper right
3. **Observe** — lower right
4. **Reflect** — lower left
5. **Decide** — upper left

Arrows run clockwise: Plan → Act → Observe → Reflect → Decide → Plan. The arrow from Decide back to Plan closes the loop. A single exit arrow leaves the Decide node downward, labelled "terminate" — the only way out of the loop.

The Decide node is drawn with a heavier stroke (3px instead of 2px) and is the only node that uses reserved violet (`#6D28D9`) for its border. All other nodes are midnight stroke, no fill.

### Zone 2 — The autonomy gradient (lower half)

A horizontal bar divided into three segments, left to right, representing the three autonomy levels. The bar sits beneath the Ralph loop and is visually connected to the Decide node above by three vertical dashed lines — one per segment — showing that the gradient is about who controls that single node.

| Segment | Label | Decide-step owner | Visual treatment |
|---|---|---|---|
| Left | **HITL** | Human (every action) | Lightest fill — midnight at 5% opacity |
| Centre | **On-rails** | Agent within boundary, human on exception | Medium fill — midnight at 15% opacity |
| Right | **AFK** | Agent fully, kill switch only | Darkest fill — midnight at 30% opacity |

Beneath each segment, a single-line annotation:

- HITL: "Human approves every action"
- On-rails: "Agent acts within pre-approved bounds"
- AFK: "Agent acts alone — kill switch is live"

A subtle horizontal arrow runs below the bar, left to right, labelled "increasing autonomy — earned, not configured".

### Zone 3 — Trust ladder (right margin, optional)

A vertical stack of four small markers along the right edge, aligned with the gradient bar, labelled top to bottom:

1. Evals pass
2. Daily review
3. Weekly review
4. AFK

A vertical arrow runs upward alongside, labelled "trust accumulates". This communicates that movement along the gradient requires demonstrated reliability, not a configuration change.

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Nodes and edges:** midnight (`#0F172A`) — solid, 2px stroke, no fill (except Decide node)
- **One accent element:** the Decide node border uses reserved violet (`#6D28D9`) at 3px stroke — this is the only colour in the diagram, drawing the eye to the node where the autonomy gradient acts
- **Gradient bar fills:** midnight at 5%, 15%, and 30% opacity — no colour, only density
- **Dashed lines:** connecting the gradient segments to the Decide node, midnight at 40% opacity, 1px
- **Typography:** node labels inside or beside each node in midnight, 14px, medium weight. Segment labels beneath the gradient bar in 13px, regular weight. Arrow labels in 12px, regular weight, midnight at 60% opacity.
- **Spacing:** the Ralph loop occupies roughly 55% of the vertical space, the gradient bar 30%, and the trust ladder 15%. The composition reads as one unified diagram, not separate illustrations.
- **No gradients, no shadows, no decorative fills, no rounded corners on the gradient bar.** Line art with opacity fills only.

## Optional caption
"The Ralph loop is the architecture. The autonomy gradient is a policy applied to its decide step. Trust moves in one direction."
