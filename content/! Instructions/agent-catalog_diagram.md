# Diagram Brief — The Agent Catalog

## Title
Three Registries, One Dependency Graph

## Single idea the diagram conveys
The agent catalog is three linked registries — agents, skills, and tools — and the dependency edges between them are what make impact analysis, deprecation planning, and governance possible.

## Layout description
A three-column composition, read left to right. Each column is a registry. Entries within each column are stacked vertically as cards. Dependency arrows flow left to right, connecting entries across registries. One dependency chain is highlighted to show a complete trace from tool to skill to agent to downstream consumer.

### Column 1 — Tool Registry (left)

Three stacked cards, each representing a tool entry:

1. **tool-payment-processor-api** — a small card with the tool name, a one-line label "Payment Processor API", and a data-sensitivity badge reading "confidential" in a small rounded rectangle.
2. **tool-fraud-rules-db** — same card format, label "Fraud Rules DB", badge "internal".
3. **tool-crm-api** — same card format, label "CRM API", badge "confidential".

Column header above: "Tool Registry". Subtext beneath: "schemas, providers, access policies".

### Column 2 — Skill Registry (centre)

Two stacked cards, each representing a skill entry:

1. **skill-transaction-scoring@3.1.0** — card with skill name, version badge "v3.1.0", and a small usage-count label "4 agents".
2. **skill-pii-redactor@1.2.0** — card with skill name, version badge "v1.2.0", usage-count label "7 agents".

Column header above: "Skill Registry". Subtext beneath: "versions, usage metrics, governance".

### Column 3 — Agent Registry (right)

Two stacked cards, each representing an agent entry:

1. **agent-fraud-monitor** — card with agent name "Transaction Fraud Monitor", a risk-tier badge "HIGH" in amber, a status dot (green, filled) labelled "active", and an owner line "Priya Mehta".
2. **agent-case-manager** — card with agent name "Case Manager", risk-tier badge "MEDIUM" in a neutral tone, status dot (green, filled) labelled "active", owner line "James Okafor".

Column header above: "Agent Registry". Subtext beneath: "owners, risk tiers, eval scores".

### Dependency arrows

Thin directional arrows connect entries across columns, showing consumption:

- **tool-payment-processor-api** ---> **skill-transaction-scoring** (tool consumed by skill)
- **tool-fraud-rules-db** ---> **skill-transaction-scoring** (tool consumed by skill)
- **skill-transaction-scoring** ---> **agent-fraud-monitor** (skill consumed by agent)
- **skill-pii-redactor** ---> **agent-fraud-monitor** (skill consumed by agent)
- **skill-pii-redactor** ---> **agent-case-manager** (skill consumed by agent)
- **tool-crm-api** ---> **agent-case-manager** (dashed, lighter — secondary path)

### Highlighted trace

One complete dependency chain is highlighted using the accent colour — the path from **tool-payment-processor-api** through **skill-transaction-scoring** to **agent-fraud-monitor**. The arrows in this chain use the violet stroke. The three cards in this chain have a subtle violet left border. All other arrows and cards use the default midnight palette. A small annotation along the highlighted chain reads: "deprecation trace".

### Downstream extension (right edge)

A single dashed arrow extends rightward from **agent-fraud-monitor** to a small label outside the three columns: "dashboard-fraud-ops". This shows that the dependency graph extends beyond the catalog into downstream consumers.

### Impact callout (bottom)

A single-line annotation spanning the full width beneath the three columns:

"When tool-payment-processor-api changes its schema, the catalog traces the impact in seconds — not meetings."

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Column headers:** midnight (`#0F172A`), 16px, semibold
- **Column subtexts:** midnight at 50% opacity, 12px, regular
- **Card outlines:** midnight at 20% opacity, 1px stroke, 4px rounded corners, no fill
- **Card names:** midnight, 14px, medium weight
- **Card labels and badges:** midnight at 60% opacity, 12px, regular
- **Risk-tier badge (HIGH):** amber (`#F59E0B`) background at 15% opacity, amber text, small rounded rectangle
- **Risk-tier badge (MEDIUM):** slate 300 background at 15% opacity, midnight text
- **Data-sensitivity badges:** midnight at 10% opacity background, midnight text at 60% opacity
- **Status dots:** green (`#16A34A`), 6px filled circle
- **Version badges:** midnight at 10% opacity background, 11px, monospace
- **Dependency arrows (default):** midnight at 30% opacity, 1px stroke, small arrowhead
- **Dependency arrows (highlighted trace):** violet (`#6D28D9`), 2px stroke — the only colour accent in the diagram
- **Highlighted card left borders:** violet, 3px solid
- **Downstream dashed arrow:** midnight at 20% opacity, 1px dashed stroke
- **"Deprecation trace" annotation:** violet at 70% opacity, 11px, italic
- **Impact callout:** midnight at 50% opacity, 13px, regular, centred
- **No gradients, no shadows, no illustration, no fills on cards.** Line art with structured data only.

## Responsive behaviour
- Desktop (>= 768px): three columns side by side, arrows horizontal
- Mobile (< 768px): three columns stacked vertically, arrows become short vertical connectors between sections
- Cards remain full-width within their column on both breakpoints

## Accessibility
- All text rendered as real text, not rasterised
- ARIA labels on each column ("Tool Registry", "Skill Registry", "Agent Registry")
- Arrows described in an `aria-describedby` block for screen readers: "Dependency: tool-payment-processor-api is consumed by skill-transaction-scoring"
- Colour is never the sole indicator — the highlighted trace also uses a thicker stroke weight and the "deprecation trace" text label

## Optional caption
"Three registries, linked by dependency edges — the data structure beneath governance, deprecation planning, and reuse."
