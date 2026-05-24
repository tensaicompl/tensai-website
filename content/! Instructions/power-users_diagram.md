# Diagram Brief — Power Users vs Consumers

## Title
The Three-Tier Distribution Model

## Single idea the diagram conveys
AI capability flows through three tiers — builders, power users, consumers — and the governance gap sits squarely at the middle tier, where autonomy exists but engineering controls do not.

## Layout description
A vertical flow diagram with three horizontal bands, stacked top to bottom, representing the three tiers. Between the bands, arrows show the flow of capability downward and feedback upward.

**Top band — Builders:**
A cluster of three nodes (labelled "Skill", "Agent", "Tool") connected by edges to a single registry node on the right (labelled "Catalog"). A thin dashed border encloses the entire band, labelled "Engineering governance" in small text along the top edge. This border represents the controls that exist.

**Middle band — Power Users:**
Two nodes on the left (labelled "Skill A" and "Skill B") arrive via downward arrows from the catalog node above. A third node (labelled "Workflow") sits to their right, connected to both by horizontal arrows — the composition step. A fourth node (labelled "Data Source") connects to the workflow node from below-left with a diagonal arrow. This band has NO dashed border — the absence is the point. A short annotation in reserved violet sits to the right of the band: "No governance layer".

**Bottom band — Consumers:**
A single wide node (labelled "Interface") receives a downward arrow from the workflow node above. Two small user icons sit below the interface node, representing end users. A thin dashed border encloses the band, labelled "Interface constraints" in small text along the bottom edge. This border represents the controls that exist.

**Arrows between bands:**
- Downward arrows (solid, midnight) from top to middle: capability flowing down.
- Downward arrow (solid, midnight) from middle to bottom: finished workflow delivered.
- One upward arrow (dashed, midnight, 60% opacity) from bottom to middle: feedback flowing up.

**Right-side annotation:**
A vertical bracket spanning the full height of the middle band, with the text "Governance gap" — this is the only element that uses reserved violet for its bracket line.

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Nodes:** midnight (`#0F172A`) outlines, 2px stroke, no fill. Rounded rectangles for all nodes.
- **Edges/arrows:** midnight, 1.5px stroke, solid for capability flow, dashed for feedback.
- **Governance borders:** midnight at 40% opacity, dashed, enclosing top and bottom bands only. Middle band explicitly unenclosed.
- **Violet accent (`#6D28D9`):** used in exactly two places — the "No governance layer" annotation text and the vertical bracket line for "Governance gap". Nothing else.
- **Labels:** inside nodes in midnight, 13px, medium weight. Band labels ("Engineering governance", "Interface constraints") in 11px, regular weight, midnight at 50% opacity. "Governance gap" bracket label in 13px, medium weight, violet.
- **Tier labels:** "Builders", "Power Users", "Consumers" in 15px, semibold, midnight, left-aligned at the start of each band.
- **No gradients, no shadows, no fills, no decoration.** Line art only.

## Optional caption
"Capability flows down through three tiers. Governance covers the top and bottom — and misses the middle."
