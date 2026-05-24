/**
 * SpineDiagram — The 18-Concept Spine Map
 *
 * Three horizontal rows of concept cards (01-06, 07-12, 13-18),
 * connected by a vertical accent "spine" line through the centre.
 * Cards within each row are linked by subtle horizontal lines.
 * Each row is labelled by its pillar affinity.
 *
 * Single accent: var(--accent) on the spine line only.
 */

export function SpineDiagram() {
  /* ── Data ──────────────────────────────────────────── */
  const concepts = [
    { n: "01", label: "Model" },
    { n: "02", label: "Harness" },
    { n: "03", label: "Tools" },
    { n: "04", label: "Ctx Eng" },
    { n: "05", label: "Ctx Mgmt" },
    { n: "06", label: "Memory" },
    { n: "07", label: "RAG" },
    { n: "08", label: "Skills" },
    { n: "09", label: "Workflows" },
    { n: "10", label: "Agents" },
    { n: "11", label: "Handoffs" },
    { n: "12", label: "Multi-Agent" },
    { n: "13", label: "Steering" },
    { n: "14", label: "Evals" },
    { n: "15", label: "Guardrails" },
    { n: "16", label: "AFK" },
    { n: "17", label: "Code Index" },
    { n: "18", label: "Standards" },
  ];

  const rows = [
    {
      pillar: "I",
      name: "The Groundwork",
      concepts: concepts.slice(0, 6),
    },
    {
      pillar: "II",
      name: "The Operating Model",
      concepts: concepts.slice(6, 12),
    },
    {
      pillar: "III",
      name: "The Craft",
      concepts: concepts.slice(12, 18),
    },
  ];

  /* ── Layout constants ──────────────────────────────── */
  const svgW = 780;
  const cardW = 84;
  const cardH = 42;
  const cardRx = 4;
  const cols = 6;
  const cardGap = 14;
  const rowGap = 80;
  const topPad = 50;
  const pillarLabelW = 20;

  const totalCardsW = cols * cardW + (cols - 1) * cardGap;
  const offsetX = (svgW - totalCardsW - pillarLabelW) / 2 + pillarLabelW;

  const cardX = (col: number) => offsetX + col * (cardW + cardGap);
  const rowY = (row: number) => topPad + row * (cardH + rowGap);

  const spineX = svgW / 2;
  const svgH = topPad + 3 * cardH + 2 * rowGap + 60;

  return (
    <figure
      role="img"
      aria-label="The 18-Concept Spine Map — 18 AI concepts arranged in three rows by pillar, connected by a central spine"
      style={{
        margin: 0,
        width: "100%",
        maxWidth: "780px",
        marginInline: "auto",
      }}
    >
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Spine dot marker */}
          <marker
            id="spDot"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="6"
            markerHeight="6"
          >
            <circle
              cx="5"
              cy="5"
              r="3"
              fill="var(--accent)"
            />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            TITLE
            ═══════════════════════════════════════════════════ */}
        <text
          x={spineX}
          y={22}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          The 18-Concept Spine
        </text>

        {/* ═══════════════════════════════════════════════════
            VERTICAL SPINE LINE (accent)
            ═══════════════════════════════════════════════════ */}
        <line
          x1={spineX}
          y1={topPad - 10}
          x2={spineX}
          y2={rowY(2) + cardH + 10}
          stroke="var(--accent)"
          strokeWidth="2"
          markerStart="url(#spDot)"
          markerEnd="url(#spDot)"
        />

        {/* Spine junction dots at each row centre */}
        {[0, 1, 2].map((r) => (
          <circle
            key={`sp-junction-${r}`}
            cx={spineX}
            cy={rowY(r) + cardH / 2}
            r={4}
            fill="var(--accent)"
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            ROWS
            ═══════════════════════════════════════════════════ */}
        {rows.map((row, ri) => {
          const y = rowY(ri);
          const labelX = offsetX - 28;

          return (
            <g key={row.pillar}>
              {/* ── Pillar numeral (rotated, left side) ──── */}
              <text
                x={labelX}
                y={y + cardH / 2}
                fontFamily="var(--font-display)"
                fontSize="12"
                fontWeight="700"
                fill="var(--color-midnight)"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {row.pillar}
              </text>

              {/* ── Pillar name (small, below numeral) ──── */}
              <text
                x={labelX}
                y={y + cardH / 2 + 14}
                fontFamily="var(--font-mono)"
                fontSize="7"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {row.name}
              </text>

              {/* ── Horizontal connector line (row) ──────── */}
              <line
                x1={cardX(0) + cardW / 2}
                y1={y + cardH / 2}
                x2={cardX(5) + cardW / 2}
                y2={y + cardH / 2}
                stroke="var(--border)"
                strokeWidth="1"
              />

              {/* ── Concept cards ─────────────────────────── */}
              {row.concepts.map((concept, ci) => {
                const cx = cardX(ci);
                const cy = y;

                return (
                  <g key={concept.n}>
                    {/* Card background */}
                    <rect
                      x={cx}
                      y={cy}
                      width={cardW}
                      height={cardH}
                      rx={cardRx}
                      stroke="var(--border)"
                      strokeWidth="1"
                      fill="var(--bg-surface)"
                    />

                    {/* Concept number */}
                    <text
                      x={cx + 10}
                      y={cy + 15}
                      fontFamily="var(--font-mono)"
                      fontSize="9"
                      fill="var(--fg-3)"
                      letterSpacing="0.06em"
                    >
                      {concept.n}
                    </text>

                    {/* Concept name */}
                    <text
                      x={cx + 10}
                      y={cy + 30}
                      fontFamily="var(--font-mono)"
                      fontSize="9"
                      fill="var(--color-midnight)"
                      letterSpacing="0.02em"
                      fontWeight="500"
                    >
                      {concept.label}
                    </text>

                    {/* Small connector tick from card centre down to horizontal line */}
                    {/* (only visible if card centre is not exactly on the line) */}
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            SPINE LABEL
            ═══════════════════════════════════════════════════ */}
        <text
          x={spineX + 8}
          y={rowY(2) + cardH + 36}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          SPINE
        </text>

        {/* ═══════════════════════════════════════════════════
            BOTTOM CAPTION
            ═══════════════════════════════════════════════════ */}
        <text
          x={spineX}
          y={svgH - 10}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          18 concepts. 3 pillars. One spine.
        </text>
      </svg>
    </figure>
  );
}
