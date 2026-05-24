/**
 * CraftOverviewDiagram — Pillar III: The Craft at a Glance
 *
 * The 12 Craft concepts arranged as a layered architecture, bottom to top:
 *   Foundation → Core → Orchestration → Quality → Frontier
 *
 * Vertical arrows connect layers upward. "Harness Engineering" gets the ONE
 * accent border (it is the frame everything hangs on). A throughline quote
 * sits below the Foundation layer in display italic.
 *
 * No gradients, no shadows. Clean structural diagram.
 */

export function CraftOverviewDiagram() {
  /* ── Layout constants ───────────────────────────── */
  const cardH = 34;
  const cardR = 4;
  const bandGap = 32; // vertical space between layer bands (includes arrow room)
  const cardGap = 8; // horizontal gap between cards in a layer
  const padX = 24;
  const bandW = 780 - padX * 2; // usable width

  /* Layer Y positions — Foundation at bottom, Frontier at top.
     SVG Y increases downward, so Foundation has the largest Y. */
  const foundationY = 305;
  const coreY = foundationY - bandGap - cardH; // 239
  const orchestrationY = coreY - bandGap - cardH; // 173
  const qualityY = orchestrationY - bandGap - cardH; // 107
  const frontierY = qualityY - bandGap - cardH; // 41

  const quoteY = foundationY + cardH + 28; // 367

  /* ── Card layout helper ─────────────────────────── */
  function cards(count: number, y: number) {
    const w = (bandW - cardGap * (count - 1)) / count;
    return Array.from({ length: count }, (_, i) => ({
      x: padX + i * (w + cardGap),
      y,
      w,
    }));
  }

  /* ── Layer data ─────────────────────────────────── */
  const layers: {
    key: string;
    label: string;
    y: number;
    items: { text: string; accent?: boolean }[];
  }[] = [
    {
      key: "frontier",
      label: "FRONTIER",
      y: frontierY,
      items: [{ text: "AFK & Autonomous" }],
    },
    {
      key: "quality",
      label: "QUALITY",
      y: qualityY,
      items: [
        { text: "Evals & Observability" },
        { text: "Failure Taxonomy" },
        { text: "Code & Doc Indexing" },
      ],
    },
    {
      key: "orchestration",
      label: "ORCHESTRATION",
      y: orchestrationY,
      items: [{ text: "Multi-Agent" }, { text: "Steering" }],
    },
    {
      key: "core",
      label: "CORE",
      y: coreY,
      items: [
        { text: "Harness Engineering", accent: true },
        { text: "Memory & Context" },
        { text: "Tools & MCP" },
        { text: "RAG Evolutions" },
      ],
    },
    {
      key: "foundation",
      label: "FOUNDATION",
      y: foundationY,
      items: [{ text: "Agents vs Workflows" }, { text: "Five Patterns" }],
    },
  ];

  /* ── Arrow segments (bottom-of-lower → top-of-upper, pointing up) ── */
  const arrows = [
    { from: foundationY, to: coreY },
    { from: coreY, to: orchestrationY },
    { from: orchestrationY, to: qualityY },
    { from: qualityY, to: frontierY },
  ];

  const cx = 390; // diagram centre x

  return (
    <figure
      role="img"
      aria-label="Pillar III — The Craft at a Glance: 12 concepts arranged in five layers from Foundation through Frontier"
      style={{
        margin: 0,
        width: "100%",
        maxWidth: "780px",
        marginInline: "auto",
      }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          <marker
            id="coArrowUp"
            viewBox="0 0 10 10"
            refX="5"
            refY="1"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 1 9 L 5 1 L 9 9"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            VERTICAL ARROWS between layers
            ═══════════════════════════════════════════════════ */}
        {arrows.map(({ from, to }, i) => (
          <line
            key={`arrow-${i}`}
            x1={cx}
            y1={from - 3}
            x2={cx}
            y2={to + cardH + 3}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            markerEnd="url(#coArrowUp)"
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            LAYER CARDS + LABELS
            ═══════════════════════════════════════════════════ */}
        {layers.map((layer) => {
          const rects = cards(layer.items.length, layer.y);
          return (
            <g key={layer.key}>
              {/* Layer label — left-aligned above band */}
              <text
                x={padX}
                y={layer.y - 6}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                letterSpacing="0.1em"
              >
                {layer.label}
              </text>

              {/* Concept cards */}
              {layer.items.map((item, i) => {
                const r = rects[i];
                const isAccent = item.accent === true;
                return (
                  <g key={`${layer.key}-${i}`}>
                    <rect
                      x={r.x}
                      y={r.y}
                      width={r.w}
                      height={cardH}
                      rx={cardR}
                      stroke={isAccent ? "var(--accent)" : "var(--border)"}
                      strokeWidth={isAccent ? 2 : 1}
                      fill="var(--bg-surface)"
                    />
                    <text
                      x={r.x + r.w / 2}
                      y={r.y + cardH / 2 + 4}
                      fontFamily="var(--font-mono)"
                      fontSize="11"
                      fill={
                        isAccent ? "var(--accent)" : "var(--color-midnight)"
                      }
                      fontWeight={isAccent ? 600 : 400}
                      textAnchor="middle"
                    >
                      {item.text}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            THROUGHLINE QUOTE
            ═══════════════════════════════════════════════════ */}
        <text
          x={cx}
          y={quoteY}
          fontFamily="var(--font-display)"
          fontSize="12"
          fontStyle="italic"
          fill="var(--fg-2)"
          textAnchor="middle"
        >
          An agent is a model plus a harness — everything hard lives in the
          harness.
        </text>
      </svg>
    </figure>
  );
}
