# Diagram brief — Multi-Agent, Handoffs & A2A

## Single idea

The five multi-agent topologies as structural shapes, showing where control lives and how state flows in each.

## Layout

Five small topology diagrams arranged in a single horizontal row (or 3+2 grid on narrow viewports). Each topology is drawn with the same visual vocabulary — circles for agents, directed edges for control flow, a highlighted node for whoever holds control.

1. **Supervisor** — one central node (highlighted) with spokes radiating to three or four specialist nodes. Arrows point outward (delegation) and inward (results). Star shape.
2. **Pipeline** — four nodes in a horizontal chain, single directed arrows left to right. Linear shape.
3. **Parallelisation** — one coordinator node at the top, fan-out arrows to three nodes below (running concurrently), fan-in arrows converging to a merge node at the bottom. Diamond shape.
4. **Swarm** — four peer nodes with bidirectional arrows between several pairs, no single highlighted node. Mesh shape, deliberately less tidy than the others.
5. **Hierarchy** — a tree: root node at top, two mid-level nodes, each with two leaf nodes below. Arrows flow downward. Tree shape.

Below the row, a single horizontal annotation bar labels the left end "More control" and the right end "More autonomy", aligning Supervisor at the left and Swarm at the right.

## Style

- Midnight (#0F172A) for edges and node outlines.
- Gray-400 for secondary labels and the annotation bar.
- Off-white (#FAFAFA) background; no fills on nodes except the control-holder in each topology, which gets a subtle gray-200 fill.
- No violet — reserve for CTA elsewhere on the page.
- No gradients, glows, or decorative elements. Line weight consistent across all five diagrams.
- Monospace labels inside or below each node (agent name abbreviations: S, A1, A2, A3, M for merge, R for root).
- Typography: diagram title in the page's heading font; labels in the body's monospace.

## Caption

"Five topologies, one question: where does control live. From a single supervisor that owns every decision to a swarm where agents route themselves — the shape of the connections determines the shape of the failures."
