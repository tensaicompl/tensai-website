# Diagram brief — Evals & Observability

## Single idea

The three evaluation surfaces as concentric layers around the agent — unit evals (innermost, tightest), task evals (middle), system evals (outermost, statistical) — connected by a vertical feedback loop to an observability trace tree, with the issue lifecycle running as a clockwise ratchet at the bottom.

## Layout

Vertical composition, three zones.

**Top zone — Three eval surfaces.** Three concentric rounded rectangles, centred horizontally. Innermost ring labelled "Unit evals — single turn — ms". Middle ring labelled "Task evals — full trajectory — seconds". Outermost ring labelled "System evals — N runs — minutes". The agent icon (a small circle with a tool glyph) sits at the centre. A downward arrow from the outermost ring labelled "failure signal" connects to the middle zone.

**Middle zone — Trace tree.** A horizontal tree structure representing one agent run. Root span "agent.task" branches into three child spans: "agent.step.1", "agent.step.2", "agent.step.3". Each step branches into "gen_ai.chat" and "agent.tool_call" leaf spans. One leaf span is highlighted (filled, not just outlined) to indicate "the span that carries the body — the divergence point." A small annotation next to the highlighted span reads "trace with bodies — prompt, completion, tool I/O."

**Bottom zone — Issue lifecycle ratchet.** Five nodes arranged in a clockwise circle: Detection → Triage → Root-cause analysis → Harness improvement → Verification. An arrow from Verification loops back to Detection, closing the circle. A secondary arrow from "Harness improvement" points upward to the innermost eval ring, labelled "new eval case," completing the feedback loop from lifecycle back into the eval surface.

## Style

- Line weight: 1.5px for structure, 1px for span branches.
- Colours: `--color-midnight` (#0F172A) for all text and structural lines. `--color-gray-400` (#9CA3AF) for secondary annotations and span branch lines. `--color-violet` (#6D28D9) for the single highlighted span (the one carrying the body) — this is the one violet element on the surface. `--color-bg` (#FAFAFA) background.
- Typography: `--font-sans` (Inter) for all labels. 14px for ring labels, 12px for span labels and annotations, 11px for the lifecycle node labels.
- No gradients, no shadows, no rounded-corner radii beyond 4px on the lifecycle nodes. No decorative elements. The enso is not used here — the ratchet circle in the lifecycle zone provides the visual anchor.

## Caption

"Three evaluation surfaces grade the agent at increasing scope. The trace tree records every decision with its body. The issue lifecycle turns each failure into a harness improvement — and a new eval case that prevents it from recurring."
