# Diagram Brief — The Five Patterns

## Title
Five Workflow Compositions

## Single idea the diagram conveys
The five patterns are five distinct topologies for connecting model calls — and they differ only in the shape of the path between input and output, not in what the model does.

## Layout description
A single horizontal strip showing all five patterns side by side, left to right, in order of increasing structural complexity: chaining, routing, parallelisation, orchestrator-workers, evaluator-optimiser.

Each pattern is a small, abstract node-and-edge diagram — no labels inside the nodes, only the pattern name beneath each one:

1. **Chaining** — Three nodes in a vertical line, connected by single downward arrows. One gate marker (a short horizontal bar) between nodes one and two.
2. **Routing** — One node at top, three arrows fanning out to three nodes below (one per route). No connections between the bottom nodes.
3. **Parallelisation** — One node at top fans out to three nodes in a horizontal row (simultaneous), which all converge back into one node at bottom.
4. **Orchestrator-workers** — One node at top (orchestrator) connects down to a variable cluster of nodes (workers, shown as two to four with an ellipsis node), which converge back into the orchestrator at bottom.
5. **Evaluator-optimiser** — Two nodes side by side (generator and evaluator) connected by a circular arrow forming a loop, with an exit arrow leaving the evaluator downward.

All five sit on the same baseline. A subtle horizontal arrow beneath the strip runs left to right, labelled "increasing structural complexity".

## Style notes
- **Background:** off-white (`#FAFAFA`)
- **Nodes and edges:** midnight (`#0F172A`) — solid, 2px stroke, no fill
- **One accent element:** the loop arrow in the evaluator-optimiser diagram uses reserved violet (`#6D28D9`) — this is the only colour in the entire diagram, drawing the eye to the only pattern that contains a feedback loop
- **Gate marker** in chaining: a dashed horizontal bar in midnight, not violet
- **Typography:** pattern names beneath each diagram in midnight, 14px, medium weight. Complexity label in 12px, regular weight, midnight at 60% opacity.
- **Spacing:** equal gaps between the five diagrams. The strip should read as one unified composition, not five separate illustrations.
- **No gradients, no shadows, no fills, no decoration.** Line art only.

## Optional caption
"Five topologies for composing model calls — from a linear chain to a refinement loop."
