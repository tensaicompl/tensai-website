/**
 * AdoptionPatternsDiagram — Three Cliffs
 *
 * A horizontal line graph showing adoption progress (x) vs organisational
 * maturity (y). The line rises in three steps with three steep drop-offs:
 *
 * 1. Adoption cliff — demo to production gap (no platform).
 * 2. Scaling cliff — one team to many teams (no catalog). Accent marker.
 * 3. Governance gap — fast to compliant (no risk tiers).
 *
 * Monochrome line art. One accent: var(--accent) on the scaling cliff marker.
 */

export function AdoptionPatternsDiagram() {
  /* ── Layout ───────────────────────────────────────── */
  const padL = 60; // left padding for y-axis
  const padR = 30;
  const padT = 24;
  const padB = 54;
  const plotW = 780 - padL - padR; // 690
  const plotH = 340 - padT - padB; // 262

  /* ── Line path waypoints (x%, y%) within the plot area ── */
  const waypoints: [number, number][] = [
    [0, 0.02], // start near bottom
    [0.14, 0.32], // rise before cliff 1
    [0.16, 0.30], // cliff 1 top
    [0.20, 0.12], // cliff 1 drop
    [0.22, 0.14], // cliff 1 bottom/recovery start
    [0.36, 0.58], // rise before cliff 2
    [0.38, 0.56], // cliff 2 top
    [0.44, 0.28], // cliff 2 drop
    [0.46, 0.30], // cliff 2 bottom/recovery start
    [0.64, 0.78], // rise before cliff 3
    [0.66, 0.76], // cliff 3 top
    [0.71, 0.52], // cliff 3 drop
    [0.73, 0.54], // cliff 3 bottom/recovery start
    [1.0, 0.95], // final rise
  ];

  /* Convert to SVG coordinates (y inverted) */
  const pts = waypoints.map(([px, py]) => ({
    x: padL + px * plotW,
    y: padT + plotH - py * plotH,
  }));

  const pathD = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");

  /* ── Cliff definitions ──────────────────────────────── */
  const cliffs = [
    {
      /* Cliff 1: Adoption cliff */
      topIdx: 2,
      bottomIdx: 3,
      label: "Adoption cliff",
      sublabel: "demo → production gap",
      missing: "no platform",
      accent: false,
    },
    {
      /* Cliff 2: Scaling cliff — accent */
      topIdx: 6,
      bottomIdx: 7,
      label: "Scaling cliff",
      sublabel: "one team → many teams",
      missing: "no catalog",
      accent: true,
    },
    {
      /* Cliff 3: Governance gap */
      topIdx: 10,
      bottomIdx: 11,
      label: "Governance gap",
      sublabel: "fast → compliant",
      missing: "no risk tiers",
      accent: false,
    },
  ];

  return (
    <figure
      role="img"
      aria-label="Adoption patterns diagram showing three cliffs — adoption cliff, scaling cliff, and governance gap — that organisations encounter on the path from AI pilots to governed operation"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          <marker
            id="apArrow"
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
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══ Axes ═══════════════════════════════════════ */}

        {/* Y-axis */}
        <line
          x1={padL}
          y1={padT}
          x2={padL}
          y2={padT + plotH}
          stroke="var(--border)"
          strokeWidth="1"
        />
        {/* X-axis */}
        <line
          x1={padL}
          y1={padT + plotH}
          x2={padL + plotW}
          y2={padT + plotH}
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Axis arrowheads */}
        <line
          x1={padL}
          y1={padT}
          x2={padL}
          y2={padT - 6}
          stroke="var(--border)"
          strokeWidth="1"
          markerEnd="url(#apArrow)"
        />
        <line
          x1={padL + plotW}
          y1={padT + plotH}
          x2={padL + plotW + 6}
          y2={padT + plotH}
          stroke="var(--border)"
          strokeWidth="1"
          markerEnd="url(#apArrow)"
        />

        {/* Y-axis label */}
        <text
          x={padL - 12}
          y={padT + plotH / 2}
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="0.1em"
          fill="var(--fg-3)"
          textAnchor="middle"
          transform={`rotate(-90 ${padL - 12} ${padT + plotH / 2})`}
        >
          MATURITY
        </text>

        {/* X-axis label */}
        <text
          x={padL + plotW / 2}
          y={padT + plotH + 36}
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="0.1em"
          fill="var(--fg-3)"
          textAnchor="middle"
        >
          TIME
        </text>

        {/* ═══ Horizontal grid lines (subtle) ═════════════ */}
        {[0.25, 0.5, 0.75].map((frac) => (
          <line
            key={`grid-${frac}`}
            x1={padL + 1}
            y1={padT + plotH - frac * plotH}
            x2={padL + plotW}
            y2={padT + plotH - frac * plotH}
            stroke="var(--border)"
            strokeWidth="0.5"
            strokeDasharray="4 6"
            opacity={0.35}
          />
        ))}

        {/* ═══ Main line path ═════════════════════════════ */}
        <path
          d={pathD}
          stroke="var(--color-midnight)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />

        {/* ═══ Cliff annotations ══════════════════════════ */}
        {cliffs.map((cliff, ci) => {
          const top = pts[cliff.topIdx];
          const bottom = pts[cliff.bottomIdx];
          const cliffColor = cliff.accent
            ? "var(--accent)"
            : "var(--color-midnight)";
          const midX = (top.x + bottom.x) / 2;

          /* Vertical drop line alongside the cliff */
          const dropX = bottom.x + 8;

          return (
            <g key={ci}>
              {/* Cliff drop indicator — vertical dashed line */}
              <line
                x1={dropX}
                y1={top.y}
                x2={dropX}
                y2={bottom.y}
                stroke={cliffColor}
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Top tick */}
              <line
                x1={dropX - 4}
                y1={top.y}
                x2={dropX + 4}
                y2={top.y}
                stroke={cliffColor}
                strokeWidth="1.5"
              />
              {/* Bottom tick */}
              <line
                x1={dropX - 4}
                y1={bottom.y}
                x2={dropX + 4}
                y2={bottom.y}
                stroke={cliffColor}
                strokeWidth="1.5"
              />

              {/* Cliff dot at the top of the fall */}
              <circle
                cx={top.x}
                cy={top.y}
                r={cliff.accent ? 4 : 3}
                fill={cliff.accent ? "var(--accent)" : "var(--bg-surface)"}
                stroke={cliffColor}
                strokeWidth="1.5"
              />

              {/* Cliff label (above) */}
              <text
                x={midX}
                y={top.y - 22}
                fontFamily="var(--font-display)"
                fontSize="12"
                fontWeight="600"
                fill={cliffColor}
                textAnchor="middle"
              >
                {cliff.label}
              </text>

              {/* Sublabel (below label) */}
              <text
                x={midX}
                y={top.y - 9}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-2)"
                textAnchor="middle"
                letterSpacing="0.02em"
              >
                {cliff.sublabel}
              </text>

              {/* Missing annotation (below the cliff drop) */}
              <text
                x={midX}
                y={bottom.y + 16}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.02em"
              >
                {cliff.missing}
              </text>
            </g>
          );
        })}

        {/* ═══ Phase labels along the bottom ══════════════ */}
        {[
          { x: 0.07, label: "Pilots" },
          { x: 0.28, label: "First prod" },
          { x: 0.54, label: "Org-wide" },
          { x: 0.82, label: "Governed" },
        ].map((phase) => (
          <text
            key={phase.label}
            x={padL + phase.x * plotW}
            y={padT + plotH + 22}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            {phase.label}
          </text>
        ))}
      </svg>
    </figure>
  );
}
