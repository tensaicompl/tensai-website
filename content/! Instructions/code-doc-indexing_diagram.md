# Diagram brief — Code & Doc Indexing

## Single idea

The two retrieval architectures — indexed and runtime — shown as parallel paths from the same codebase to the same agent, with the phantom API failure mode branching off the "no retrieval" path.

## Layout

Three horizontal lanes, left to right.

**Top lane — Indexed retrieval.** A codebase icon (file tree) flows right through four pipeline stages: Parse (tree-sitter) → Extract (symbols) → Embed (vectors) → Store (SQLite). From the store, a query arrow feeds into the agent's context window. The symbols arriving are labelled with real names: `getUserById`, `createUser`.

**Middle lane — Runtime exploration.** The same codebase icon flows right through on-demand tools: grep → read file → follow imports. The arrow into the agent's context window is thicker (more tokens consumed) and labelled "variable cost."

**Bottom lane — No retrieval (the failure case).** The codebase is absent. The agent's context window contains only training knowledge. A branching arrow leads to a phantom API callout: `userService.findByEmail` — crossed out in error red, with a label "does not exist." This lane is visually dimmer than the other two — it is the anti-pattern.

The agent's context window appears once on the right side, shared across all three lanes, making the point that all three paths lead to the same moment — the agent writing code — but with different grounding.

## Style

- Midnight (#0F172A) for structure lines, labels, and the pipeline stage boxes.
- Gray-400 (#94A3B8) for the bottom (failure) lane — visually receded.
- Error treatment (a muted red, not brand violet) for the phantom API callout only.
- No gradients, no glows, no decorative elements.
- Pipeline stages as simple rounded rectangles with one-word labels.
- The codebase icon is a minimal file-tree glyph, not an illustration.
- Typography: body font at small size for labels, slightly larger for the lane titles.

## Caption

"Three paths to the same moment — indexed retrieval grounds the agent in real symbols, runtime exploration gets there at higher token cost, and no retrieval produces phantom APIs."
