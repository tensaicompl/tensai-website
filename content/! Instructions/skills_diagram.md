# Diagram Brief — Skills as the Reusable Unit

## Title
From Capability to Governed Asset

## Single idea the diagram conveys
A skill is a layered contract — manifest, entry point, resource bundle, governance metadata — and skills flow from authors through a registry to consuming agents, governed at every stage.

## Layout description
A two-part composition arranged vertically. The top half shows the anatomy of a single skill (the contract layers). The bottom half shows the flow from author to registry to consumer.

### Part 1 — The skill contract (top half)

A single rounded rectangle representing one skill, divided into four horizontal stacked layers — like a cross-section. Each layer is labelled on its left edge:

1. **Manifest** (top layer, thinnest) — contains three small text labels inside: `name`, `version`, `description`. This is the discovery surface.
2. **Entry point** (second layer) — contains a small document icon and the label `SKILL.md`. This is the instruction surface.
3. **Resource bundle** (third layer, slightly taller) — contains three small folder icons labelled `references/`, `scripts/`, `assets/`. These are drawn with dashed outlines to indicate they load on demand, not upfront.
4. **Governance metadata** (bottom layer, thinnest) — contains three small text labels: `owner`, `risk_tier`, `last_audit`. This is the accountability surface.

A small bracket on the right side of the rectangle spans all four layers, labelled "the contract".

### Part 2 — The flow (bottom half)

Three elements arranged in a horizontal row, connected by arrows:

1. **Author** (left) — a small circle with a tiny pencil icon inside. Label beneath: "Author". A thin arrow points right from the author to the registry.
2. **Registry** (centre) — a larger rounded rectangle, taller than the author and consumer circles. Inside it, three small skill rectangles (simplified — just tiny stacked bars echoing the four-layer shape from Part 1) are arranged vertically, suggesting a catalogue of published skills. Label beneath: "Registry". Three small annotation labels sit along the right edge of the registry box: "discover", "govern", "version".
3. **Consumer** (right) — two small circles, stacked vertically with a slight offset, each with a tiny gear icon inside (representing agents). Label beneath: "Agents". A thin arrow points left from the agents back to the registry.

A subtle horizontal bar spans the full width beneath the flow, with a single label centred: "publish — discover — consume".

### Connection between parts

A thin dashed vertical line connects the single skill rectangle in Part 1 down to one of the small skill entries inside the registry in Part 2, indicating that the anatomy above is a zoom-in of what lives inside the registry below.

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Skill rectangle and layers:** midnight (`#0F172A`) — 1.5px stroke, no fill, rounded corners (4px radius)
- **Layer dividers inside the skill rectangle:** midnight at 30% opacity, 1px dashed stroke
- **Dashed outlines on resource folder icons:** midnight at 50% opacity, 1px dashed — visually lighter than the solid layers, conveying "loads on demand"
- **Registry rectangle:** midnight, 1.5px stroke, no fill
- **Author and consumer circles:** midnight, 1.5px stroke, no fill
- **Arrows (author → registry, registry → agents):** midnight at 60% opacity, 1.5px stroke, small arrowhead
- **Dashed zoom-in connector:** midnight at 30% opacity, 1px dashed
- **One accent element:** the `risk_tier` label in the governance metadata layer uses reserved violet (`#6D28D9`) — this is the only colour in the entire diagram, drawing the eye to the governance layer as the distinguishing element that separates a skill from a raw prompt
- **Typography:** layer labels in midnight, 13px, medium weight. Flow labels ("Author", "Registry", "Agents") in midnight, 14px, medium weight. Annotation labels ("discover", "govern", "version") in midnight at 60% opacity, 11px, regular weight. Bottom strip label in midnight at 50% opacity, 12px, regular weight.
- **Spacing:** Part 1 and Part 2 separated by comfortable vertical whitespace. The dashed connector bridges the gap. The three flow elements are evenly spaced horizontally.
- **No gradients, no shadows, no fills, no decoration.** Line art only.

## Optional caption
"A skill is four layers and one flow — from the author who builds it, through the registry that governs it, to the agents that consume it."
