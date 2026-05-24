# Diagram Brief — FinOps for AI

## Title
The Four Levers and the Metric Ladder

## Single idea the diagram conveys
Four optimisation levers (prompt caching, semantic caching, context management, model routing) compound multiplicatively to reduce token cost — but the metric that matters is not cost-per-token. It is cost-per-outcome, and reaching it requires climbing a four-rung measurement ladder from provider billing to business value.

## Layout description
Two connected sections, read left to right.

### Left section — The Four Levers (a funnel)
A vertical funnel narrowing from top to bottom, representing total AI spend being compressed by each lever in sequence. Four horizontal bars cross the funnel at even intervals, each labelled with one lever and its mechanism:

1. **Model routing** (top bar) — "Route to cheapest capable tier". The funnel narrows significantly here (widest reduction). A small annotation: "62% of traffic to budget tier".
2. **Context management** (second bar) — "Remove tokens that don't earn their place". The funnel narrows moderately. Annotation: "14,000 → 5,200 tokens".
3. **Prompt caching** (third bar) — "Reuse processed prefixes at 10% cost". The funnel narrows further. Annotation: "90% cache-read discount".
4. **Semantic caching** (bottom bar) — "Eliminate redundant calls entirely". The funnel reaches its narrowest point. Annotation: "34% hit rate on FAQ traffic".

Below the funnel, a single line: the output, labelled "Cost per task: EUR 0.12".

### Right section — The Metric Ladder
Four horizontal rungs stacked vertically, connected by upward arrows, forming a ladder. Each rung is a metric level, read from bottom to top:

1. **Cost per token** (bottom rung) — "Provider rate x tokens consumed". Tag: "Platform team".
2. **Cost per task** (second rung) — "All token costs for one execution". Tag: "Engineering".
3. **Cost per outcome** (third rung) — "Task cost / success rate". Tag: "Product". This rung is visually emphasised — thicker stroke, the only rung drawn in violet.
4. **Cost to serve** (top rung) — "Outcome cost x volume per user". Tag: "Finance".

A dashed connector line runs from the funnel output ("Cost per task: EUR 0.12") to the second rung of the ladder, showing where the levers feed into the measurement stack. A second dashed line from the third rung (cost per outcome) loops back with a label: "EUR 1.92 — including 13% human fallback".

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Funnel and lever bars:** midnight (`#0F172A`) — solid, 2px stroke. Funnel fill: none (outline only). Lever bars as dashed horizontal lines crossing the funnel.
- **One accent element:** the "Cost per outcome" rung on the metric ladder uses reserved violet (`#6D28D9`) — thicker stroke (3px), drawing the eye to the metric the page argues matters most.
- **Annotations:** 12px, regular weight, midnight at 60% opacity, placed to the right of each lever bar.
- **Rung labels:** 14px, medium weight, midnight. Team tags in 12px, regular weight, midnight at 40% opacity.
- **Connector lines:** dashed, 1px, midnight at 40% opacity.
- **Typography:** all labels in the site's body font. No bold except rung names and lever names.
- **No gradients, no shadows, no decorative fills.** Line art only.

## Optional caption
"Four levers compress token spend — but the metric that connects cost to value is cost-per-outcome, not cost-per-token."
