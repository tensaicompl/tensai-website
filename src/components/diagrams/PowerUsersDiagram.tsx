/**
 * PowerUsersDiagram — The Three-Tier Distribution
 *
 * A horizontal pyramid divided into three tiers, widening top to bottom:
 * Builders (narrowest, accent), Power Users (middle), Consumers (widest).
 * Left arrow: "capability flows down". Right arrow: "governance flows up".
 */

export function PowerUsersDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const cx = 390; // horizontal center
  const pyramidTop = 40;
  const tierH = 80;
  const totalH = tierH * 3; // 240
  const pyramidBottom = pyramidTop + totalH;

  /* Tier widths (narrowest at top, widest at bottom) */
  const topW = 200;
  const midW = 400;
  const botW = 600;

  /* Vertical positions for each tier */
  const t0 = pyramidTop;
  const t1 = pyramidTop + tierH;
  const t2 = pyramidTop + tierH * 2;

  /* Arrow column positions */
  const arrowLeftX = cx - botW / 2 - 50;
  const arrowRightX = cx + botW / 2 + 50;
  const arrowTop = t0 + 10;
  const arrowBottom = pyramidBottom - 10;

  /* Helper: trapezoid path for a tier */
  function tierPath(
    topWidth: number,
    bottomWidth: number,
    y: number,
    h: number,
  ) {
    const tl = cx - topWidth / 2;
    const tr = cx + topWidth / 2;
    const bl = cx - bottomWidth / 2;
    const br = cx + bottomWidth / 2;
    return `M ${tl} ${y} L ${tr} ${y} L ${br} ${y + h} L ${bl} ${y + h} Z`;
  }

  return (
    <figure
      role="img"
      aria-label="The Three-Tier Distribution — Builders at the top create skills, Power Users compose them, Consumers use agents through natural interfaces"
      style={{
        margin: 0,
        width: "100%",
        maxWidth: "780px",
        marginInline: "auto",
      }}
    >
      <svg
        viewBox="0 0 780 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Down arrow marker */}
          <marker
            id="puArrowDown"
            viewBox="0 0 10 10"
            refX="5"
            refY="10"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 2 0 L 5 10 L 8 0"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Up arrow marker */}
          <marker
            id="puArrowUp"
            viewBox="0 0 10 10"
            refX="5"
            refY="0"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 2 10 L 5 0 L 8 10"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            TIER 1 — BUILDERS (top, narrowest)
            ═══════════════════════════════════════════════════ */}
        <path
          d={tierPath(topW, midW, t0, tierH)}
          fill="var(--color-midnight)"
          fillOpacity="0.20"
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Tier label — accent (the ONE accent element) */}
        <text
          x={cx}
          y={t0 + 30}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="700"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.1em"
        >
          BUILDERS
        </text>

        {/* Tier description */}
        <text
          x={cx}
          y={t0 + 48}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
        >
          Create skills, build agents
        </text>

        {/* Population annotation */}
        <text
          x={cx}
          y={t0 + 66}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
        >
          ~5%
        </text>

        {/* ═══════════════════════════════════════════════════
            TIER 2 — POWER USERS (middle)
            ═══════════════════════════════════════════════════ */}
        <path
          d={tierPath(midW, botW, t1, tierH)}
          fill="var(--color-midnight)"
          fillOpacity="0.10"
          stroke="var(--border)"
          strokeWidth="1"
        />

        <text
          x={cx}
          y={t1 + 30}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.1em"
        >
          POWER USERS
        </text>

        <text
          x={cx}
          y={t1 + 48}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
        >
          Compose skills, configure agents
        </text>

        <text
          x={cx}
          y={t1 + 66}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
        >
          ~15%
        </text>

        {/* ═══════════════════════════════════════════════════
            TIER 3 — CONSUMERS (bottom, widest)
            ═══════════════════════════════════════════════════ */}
        <path
          d={tierPath(botW, botW, t2, tierH)}
          fill="var(--color-midnight)"
          fillOpacity="0.05"
          stroke="var(--border)"
          strokeWidth="1"
        />

        <text
          x={cx}
          y={t2 + 30}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.1em"
        >
          CONSUMERS
        </text>

        <text
          x={cx}
          y={t2 + 48}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
        >
          Use agents through natural interfaces
        </text>

        <text
          x={cx}
          y={t2 + 66}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
        >
          ~80%
        </text>

        {/* ═══════════════════════════════════════════════════
            LEFT ARROW — capability flows down
            ═══════════════════════════════════════════════════ */}
        <line
          x1={arrowLeftX}
          y1={arrowTop}
          x2={arrowLeftX}
          y2={arrowBottom}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          markerEnd="url(#puArrowDown)"
        />

        {/* Arrow label — rotated */}
        <text
          x={arrowLeftX - 14}
          y={(arrowTop + arrowBottom) / 2}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
          transform={`rotate(-90, ${arrowLeftX - 14}, ${(arrowTop + arrowBottom) / 2})`}
        >
          capability flows down
        </text>

        {/* ═══════════════════════════════════════════════════
            RIGHT ARROW — governance flows up
            ═══════════════════════════════════════════════════ */}
        <line
          x1={arrowRightX}
          y1={arrowBottom}
          x2={arrowRightX}
          y2={arrowTop}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          markerEnd="url(#puArrowUp)"
        />

        {/* Arrow label — rotated */}
        <text
          x={arrowRightX + 14}
          y={(arrowTop + arrowBottom) / 2}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
          transform={`rotate(90, ${arrowRightX + 14}, ${(arrowTop + arrowBottom) / 2})`}
        >
          governance flows up
        </text>
      </svg>
    </figure>
  );
}
