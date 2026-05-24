# Diagram brief — Steering

## Single idea

The two planes of steering — mechanistic and operational — acting on the same model forward pass at different depths. Mechanistic interventions (steering vectors, SAE feature clamping, activation patching) operate inside the activation flow between layers. Operational interventions (system prompt, constraint documents, structured output schemas, tool forcing, temperature) operate at the surface — shaping input tokens or constraining output tokens — without touching the internal computation.

## Layout

Vertical cross-section of a model forward pass, left to right:

1. **Left column — Operational Guides (surface, before).** Three stacked elements: system prompt, AGENTS.md / constraint document, temperature setting. These feed into the input token stream at the left edge.

2. **Centre — The Forward Pass (internal).** A simplified transformer stack shown as four or five horizontal layers (labelled "Layer N", "Layer N+1", etc.), with activation vectors flowing upward through them. Between two middle layers, three mechanistic interventions are shown as arrows or injections into the activation flow:
   - Steering vector (additive arrow altering the activation direction)
   - SAE feature clamp (a feature dimension highlighted and pinned)
   - Activation patch (a swap arrow from a reference run)
   Each is labelled concisely. A subtle dashed boundary separates the "research frontier" zone (mechanistic, inside the stack) from the "practitioner surface" (operational, outside it).

3. **Right column — Operational Constraints (surface, after).** Two stacked elements: structured output schema (constraining the logit space), tool forcing (constraining the action space). These act on the output token stream at the right edge.

4. **Bottom strip — a single-row annotation.** Left side reads "Practitioner surface"; centre reads "Research frontier"; right side reads "Practitioner surface." Reinforcing the two-plane structure.

## Style

- Tokens: use TensAI design system only. Midnight (#0F172A) for layer outlines and labels. Gray-500 (#6B7280) for secondary annotation text. Off-white (#FAFAFA) background.
- The dashed boundary between research-frontier and practitioner-surface zones uses Gray-300 (#D1D5DB), subtle but visible.
- Reserved violet (#6D28D9) on exactly one element: the "Steering vector" arrow or label — this is the single violet accent for the surface.
- No gradients, no glows, no blobs. Clean SVG lines and fills only.
- Enso is the only ornament if any ornament is needed; likely none required here.
- Typography: system font stack matching the site. Labels in 12–14px, section headings in 14–16px semibold.

## Caption

"Steering operates at two depths. Operational techniques shape the tokens the model reads and constrain the tokens it can produce. Mechanistic techniques intervene on the activations between layers — the computation itself."
