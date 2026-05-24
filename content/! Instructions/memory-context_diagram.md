# Diagram Brief — Memory & Context

## Title
The Memory-Context Loop

## Single idea
Four persistent memory types (episodic, semantic, procedural, working) connected to four context-engineering operations (write, select, compress, isolate) as a continuous cycle — memory accumulates over time, context engineering decides what reaches the model's working memory on each step.

## Layout
Centre: a rounded rectangle labelled "Working Memory (Context Window)" — this is the focal point. Around it, three persistent memory stores arranged vertically on the left: Episodic (top), Semantic (middle), Procedural (bottom), each as smaller rounded rectangles. Four directional arrows form the cycle:

- **Select** — arrows from the three memory stores rightward into Working Memory (labelled "select").
- **Write** — arrows from Working Memory leftward back to the three stores (labelled "write").
- **Compress** — a circular arrow within Working Memory, curving inward on itself (labelled "compress").
- **Isolate** — on the right side, Working Memory splits into two or three smaller scoped rectangles representing sub-agent contexts, connected by dashed lines (labelled "isolate").

The four operations sit on or beside their arrows as labels, not as separate boxes. The three memory stores stack neatly; Working Memory is visibly larger to convey that it is the active reasoning surface.

## Style
- **Background:** off-white (#FAFAFA)
- **Primary structure:** midnight / near-black lines and text (#0F172A)
- **One accent:** TensAI violet (#6D28D9) — used only on the "Working Memory" rectangle border and the four operation labels
- **Typography:** clean sans-serif (Inter or system equivalent), labels in regular weight, "Working Memory" title in medium weight
- **No gradients, no shadows, no fills except the lightest tint inside the Working Memory box (violet at 5% opacity)**
- **Line weight:** 1.5px for arrows, 1px for box borders
- **Arrows:** simple open arrowheads, not filled

## Caption
The memory-context loop. Persistent memory accumulates across sessions; context engineering governs what the model sees on each turn. The four operations — write, select, compress, isolate — are the complete vocabulary of that governance.
