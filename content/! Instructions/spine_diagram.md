# Diagram Brief — The Spine: 18 Concept Map

## Title
The Spine — 18 Concepts, Three Altitudes

## Single idea
The 18 canonical concepts arranged by pillar altitude, with visible dependency edges between them — showing that the taxonomy is a connected graph, not a list.

## Layout
Three horizontal bands stacked vertically, each representing one pillar altitude. The bands are labelled at their left edge: **Groundwork** (top), **Operating Model** (middle), **Craft** (bottom). The vertical arrangement reinforces the altitude metaphor — Groundwork is the highest vantage, Craft is ground level.

**Groundwork band** (top): two concept nodes — **Guardrails & Safety** (15) and **Standards & Interop** (18). These sit at the policy altitude. Spaced generously; the band is intentionally sparse to convey that fewer concepts live here but they constrain everything below.

**Operating Model band** (middle): one concept node — **Skills** (08). Centred in the band. This is the thinnest layer — the deliberate sparseness is the point. A thin dashed annotation line beneath reads: "The layer most organisations skip."

**Craft band** (bottom, widest): the remaining 15 concept nodes arranged in a logical left-to-right flow that mirrors the build sequence without implying a strict reading order:
- **Row 1 (Foundation):** Model (01) -- Harness (02) -- Tools (03)
- **Row 2 (Context):** Context Engineering (04) -- Context Management (05) -- Memory (06) -- Retrieval/RAG (07)
- **Row 3 (Composition):** Workflows (09) -- Agents (10) -- Handoffs (11) -- Multi-Agent Orchestration (12)
- **Row 4 (Governance & Autonomy):** Steering (13) -- Evals & Observability (14) -- AFK & Autonomous Agents (16) -- Code & Doc Indexing (17)

**Dependency edges** (the graph structure): thin directed lines connecting concepts that depend on or constrain each other. Not every possible edge — only the primary structural ones, to keep the diagram readable:
- Model (01) --> Harness (02) — the model lives inside the harness
- Harness (02) --> Tools (03) — tools are part of the harness
- Harness (02) --> Context Engineering (04) — context design is harness work
- Context Engineering (04) --> Context Management (05) — design precedes runtime
- Context Engineering (04) --> Memory (06) — memory feeds the window
- Context Engineering (04) --> Retrieval/RAG (07) — retrieval feeds the window
- Workflows (09) <--> Agents (10) — the foundational distinction (bidirectional, dotted)
- Agents (10) --> Handoffs (11) — handoffs require agents
- Handoffs (11) --> Multi-Agent Orchestration (12) — orchestration requires handoffs
- Steering (13) --> Agents (10) — steering controls agents at runtime
- Evals & Observability (14) --> Harness (02) — evals are the sensor side of the harness
- AFK & Autonomous Agents (16) --> Agents (10) — AFK is the high-autonomy end of agents
- AFK & Autonomous Agents (16) --> Evals & Observability (14) — autonomous agents require stronger evals
- Code & Doc Indexing (17) --> Retrieval/RAG (07) — specialised retrieval
- Skills (08) --> Tools (03) — skills package tools (cross-band edge)
- Skills (08) --> Agents (10) — skills package agents (cross-band edge)

**Cross-pillar edges** (dashed, in a distinct grey): three to four dashed lines crossing between bands to show that concepts reach beyond their primary pillar:
- Evals & Observability (14, Craft) ---dashed---> Groundwork band — labelled "as policy"
- Guardrails & Safety (15, Groundwork) ---dashed---> Craft band — labelled "as practice"
- Standards & Interop (18, Craft-linked) ---dashed---> Operating Model band — labelled "as registry"

These dashed cross-band edges are the visual encoding of the "concepts do not stay in their lanes" argument from the prose.

## Style
- Background: off-white (#FAFAFA)
- Band backgrounds: very faint tints to distinguish altitudes — Groundwork gets a 3% opacity warm grey, Operating Model gets a 3% opacity violet (#6D28D9), Craft gets no tint (pure #FAFAFA)
- Concept nodes: rounded rectangles with 1.5px midnight (#0F172A) stroke, white fill. Number in the top-left corner of the node in italic, muted grey (#94A3B8). Name centred in the node, set in the display font at 13px, #0F172A
- Primary dependency edges: midnight (#0F172A), 1px stroke, small arrowheads. Slightly curved to avoid overlapping
- Cross-pillar dashed edges: grey-400 (#94A3B8), 1px dashed stroke, with a small inline label in 10px monospace
- The bidirectional Workflows <--> Agents edge: dotted, not solid, to signal "these are a pair, not a dependency"
- Pillar labels at the left edge of each band: display font, 14px, uppercase tracking, grey-500
- No gradients, no shadows, no icons, no illustrations. Pure structural diagram
- Generous whitespace within each band; the Craft band may be taller to accommodate four rows

## Responsive note
On viewports below 768px, the four Craft rows should reflow to two columns or a single column, and the cross-pillar dashed edges should be hidden (they require the spatial relationship of the full layout to read correctly). The band labels should remain visible as section headers.

## Caption
"Eighteen concepts across three altitudes. The solid edges are structural dependencies — what each concept requires to exist. The dashed edges are governance relationships — where a concept crosses its pillar boundary and appears at a different altitude. The taxonomy is a graph, not a list."
