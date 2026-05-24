# Diagram Brief — Token Sourcing as a Commodity

## Title
The Gateway Layer

## Single idea the diagram conveys
The AI gateway sits between all application code and all model providers — a single routing layer that decouples the organisation's agent estate from any one vendor, enabling fallback, cost tracking, and model-tier selection in one place.

## Layout description
A three-column architecture diagram, read left to right:

1. **Left column — Applications.** Three stacked boxes representing internal consumers, labelled concisely: "Support Agent", "Knowledge Base", "Code Assistant". Each box has a single arrow pointing rightward to the centre column. The arrows converge on the gateway.

2. **Centre column — The Gateway.** A single tall rectangle spanning the full height of the diagram, labelled "AI Gateway" at the top. Inside the rectangle, five short horizontal rows — one per gateway function — are listed vertically as small text labels:
   - Unified Routing
   - Fallback Chains
   - Rate-Limit Pool
   - Cost Ledger
   - Tier Selection

   A subtle dashed vertical line divides the gateway rectangle at roughly the 60% mark, separating the function labels (left portion) from a narrow "policy config" strip (right portion), reinforcing that behaviour is configuration-driven.

3. **Right column — Providers.** Three stacked boxes representing model providers, labelled: "Provider A", "Provider B", "Provider C". Each box has a pair of arrows — one solid (primary route) and one dashed (fallback route) — connecting back to the gateway. The dashed arrows are thinner, indicating fallback paths.

4. **Below the three columns — a single annotation strip.** Left side reads "One stable API contract"; centre reads "Routing decisions live here"; right side reads "Swappable without code changes."

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Nodes and edges:** midnight (`#0F172A`) — solid, 2px stroke, no fill for application and provider boxes
- **The gateway rectangle:** midnight stroke, very light gray fill (`#F3F4F6`) to distinguish it as the architectural centre — this is the only filled element
- **One accent element:** the "Cost Ledger" label inside the gateway uses reserved violet (`#6D28D9`) — this is the only colour in the diagram, drawing the eye to the function that makes the gateway financially legible
- **Dashed fallback arrows:** midnight at 40% opacity, 1.5px stroke, short dash pattern
- **Typography:** box labels in midnight, 14px, medium weight. Gateway function labels in 12px, regular weight. Annotation strip in 12px, regular weight, midnight at 60% opacity.
- **Spacing:** equal vertical gaps between application boxes and between provider boxes. The gateway rectangle is vertically centred and horizontally equidistant from both columns.
- **No gradients, no shadows, no rounded corners, no decoration.** Clean line art only.

## Optional caption
"Every request flows through one routing layer. The provider behind it is a configuration decision, not an architectural one."
