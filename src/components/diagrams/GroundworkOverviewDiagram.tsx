/**
 * GroundworkOverviewDiagram — Pillar I at a Glance
 *
 * Six concept cards in a 3×2 grid showing the Groundwork concepts
 * as a connected system. Dependency arrows link cards; Governance & Risk
 * sits centre-bottom as the hub node with the ONE accent border.
 *
 * Top row:  Operating Model & Maturity → Build · Buy · Boost → Token Sourcing
 * Bottom row: Security Architecture ← Governance & Risk → FinOps
 *
 * Bottom throughline in display italic:
 * "AI is an operating decision before it is a technology one."
 */

export function GroundworkOverviewDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const cardW = 200;
  const cardH = 64;
  const colGap = 44;
  const rowGap = 60;

  const gridW = cardW * 3 + colGap * 2;
  const offsetX = (780 - gridW) / 2;

  const topY = 30;
  const botY = topY + cardH + rowGap;

  const col = (c: number) => offsetX + c * (cardW + colGap);
  const midX = (c: number) => col(c) + cardW / 2;
  const midY = (row: number) => (row === 0 ? topY : botY) + cardH / 2;

  /* ── Card data ──────────────────────────────────────── */
  const cards: {
    label: string;
    sub: string;
    col: number;
    row: number;
    accent?: boolean;
  }[] = [
    { label: "Operating Model", sub: "& Maturity", col: 0, row: 0 },
    { label: "Build · Buy · Boost", sub: "strategy mix", col: 1, row: 0 },
    { label: "Token Sourcing", sub: "supply chain", col: 2, row: 0 },
    { label: "Security Architecture", sub: "threat model", col: 0, row: 1 },
    {
      label: "Governance & Risk",
      sub: "central hub",
      col: 1,
      row: 1,
      accent: true,
    },
    { label: "FinOps", sub: "cost control", col: 2, row: 1 },
  ];

  /* ── Arrow connections ─────────────────────────────── */
  /* Each arrow: from card index → to card index */
  const arrows: { from: number; to: number }[] = [
    { from: 0, to: 1 }, // Operating Model → Build/Buy/Boost
    { from: 2, to: 3 }, // Token Sourcing → Security Architecture
    { from: 2, to: 5 }, // Token Sourcing → FinOps
    { from: 4, to: 0 }, // Governance → Operating Model
    { from: 4, to: 1 }, // Governance → Build/Buy/Boost
    { from: 4, to: 2 }, // Governance → Token Sourcing
    { from: 4, to: 3 }, // Governance → Security Architecture
    { from: 4, to: 5 }, // Governance → FinOps
  ];

  /**
   * Compute connection points on card edges.
   * Pick the edge closest to the target centre.
   */
  function edgePoint(
    cardIdx: number,
    towardIdx: number,
    inset: number
  ): { x: number; y: number } {
    const c = cards[cardIdx];
    const t = cards[towardIdx];
    const cx = midX(c.col);
    const cy = midY(c.row);
    const tx = midX(t.col);
    const ty = midY(t.row);
    const dx = tx - cx;
    const dy = ty - cy;

    // Determine dominant direction
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (absX / (cardW / 2) > absY / (cardH / 2)) {
      // Exit left or right
      return {
        x: cx + (dx > 0 ? cardW / 2 + inset : -cardW / 2 - inset),
        y: cy,
      };
    }
    // Exit top or bottom
    return {
      x: cx,
      y: cy + (dy > 0 ? cardH / 2 + inset : -cardH / 2 - inset),
    };
  }

  return (
    <figure
      role="img"
      aria-label="Pillar I — The Groundwork at a Glance: six interconnected concepts with Governance and Risk as the central hub"
      style={{
        margin: 0,
        width: "100%",
        maxWidth: "780px",
        marginInline: "auto",
      }}
    >
      <svg
        viewBox="0 0 780 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Standard arrow — midnight */}
          <marker
            id="goArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Accent arrow — governance spokes */}
          <marker
            id="goArrowAccent"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </marker>

          {/* Muted arrow — cross-row deps */}
          <marker
            id="goArrowMuted"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--fg-3)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ── Section title ──────────────────────────────── */}
        <text
          x={390}
          y={18}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.14em"
        >
          PILLAR I — THE GROUNDWORK
        </text>

        {/* ── Arrows (rendered first, behind cards) ──────── */}
        {arrows.map(({ from, to }, i) => {
          const isGovernance = from === 4;
          const isCrossRow = cards[from].row !== cards[to].row;

          const start = edgePoint(from, to, 2);
          const end = edgePoint(to, from, 2);

          // Determine marker and style
          let marker = "url(#goArrow)";
          let strokeColor = "var(--color-midnight)";
          let strokeW = 1.5;
          let opacity = 1;
          let dashArray: string | undefined;

          if (isGovernance) {
            marker = "url(#goArrowAccent)";
            strokeColor = "var(--accent)";
            strokeW = 1;
            opacity = 0.35;
            dashArray = "4 3";
          } else if (isCrossRow) {
            marker = "url(#goArrowMuted)";
            strokeColor = "var(--fg-3)";
            strokeW = 1;
            opacity = 0.6;
          }

          return (
            <line
              key={`arrow-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={strokeColor}
              strokeWidth={strokeW}
              opacity={opacity}
              strokeDasharray={dashArray}
              markerEnd={marker}
            />
          );
        })}

        {/* ── Cards ───────────────────────────────────────── */}
        {cards.map((card, i) => {
          const x = col(card.col);
          const y = card.row === 0 ? topY : botY;
          const cx = x + cardW / 2;
          const cy = y + cardH / 2;

          return (
            <g key={`card-${i}`}>
              {/* Card rectangle */}
              <rect
                x={x}
                y={y}
                width={cardW}
                height={cardH}
                rx={4}
                stroke={card.accent ? "var(--accent)" : "var(--border)"}
                strokeWidth={card.accent ? 2 : 1}
                fill="var(--bg-surface)"
              />

              {/* Primary label */}
              <text
                x={cx}
                y={cy - 6}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill={
                  card.accent ? "var(--accent)" : "var(--color-midnight)"
                }
                textAnchor="middle"
              >
                {card.label}
              </text>

              {/* Subtitle */}
              <text
                x={cx}
                y={cy + 12}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {card.sub}
              </text>
            </g>
          );
        })}

        {/* ── Throughline ─────────────────────────────────── */}
        <text
          x={390}
          y={botY + cardH + 48}
          fontFamily="var(--font-display)"
          fontSize="12"
          fontStyle="italic"
          fill="var(--fg-2)"
          textAnchor="middle"
        >
          AI is an operating decision before it is a technology one.
        </text>
      </svg>
    </figure>
  );
}
