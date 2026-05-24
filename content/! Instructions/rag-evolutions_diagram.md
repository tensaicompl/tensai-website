# Diagram brief — RAG & Its Evolutions

## Single idea

The five-rung retrieval ladder — a vertical progression from naive top-k at the bottom to self-correcting retrieval at the top, where each rung adds one architectural capability and fixes one specific failure mode.

## Layout

A vertical ladder rendered left-to-centre, five rungs stacked bottom to top. Each rung is a horizontal bar, slightly wider than the one below, labelled with the strategy name and a one-line description of what it fixes:

1. **Naive** — "Dense top-k" — baseline, fixes nothing (starting point)
2. **Hybrid** — "Dense + sparse + reranker" — fixes vocabulary mismatch
3. **Graph / Structured** — "Entity graph or RAPTOR tree" — fixes relational gaps
4. **Agentic** — "Query decomposition + tool routing" — fixes complex multi-part questions
5. **Self-correcting** — "Retrieve-grade-requery loop" — fixes undetected retrieval failures

To the right of the ladder, a single vertical arrow labelled "Cost & complexity" runs upward. A second vertical arrow on the far right, labelled "Retrieval reliability", also runs upward — making visible that both increase together.

Between rung 1 and rung 2, a subtle horizontal dashed line labelled "Most production systems" — indicating that the majority of deployments should live at or just above rung 2.

## Style

- Midnight (#0F172A) for rung bars, labels, and arrows.
- Gray-400 (#9CA3AF) for secondary labels ("Cost & complexity", "Retrieval reliability") and the dashed production-systems line.
- Off-white (#FAFAFA) background.
- Reserved violet (#6D28D9) on one element only: the "Self-correcting" rung at the top — the earned destination, the only rung that closes the feedback loop.
- No gradients, glows, or decorative elements. Clean geometric bars. Monospace or the brand sans-serif for labels.
- The diagram is a teaching tool: a reader should be able to look at it once and carry the ladder metaphor away. Simplicity over decoration.

## Optional caption

"Start at the bottom. Climb only when measurement shows a failure the current rung cannot fix."
