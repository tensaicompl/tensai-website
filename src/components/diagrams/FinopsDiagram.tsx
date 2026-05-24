/**
 * FinopsDiagram — FinOps Four Levers & Metric Ladder
 *
 * Two sections side by side:
 *
 * LEFT — Four Levers (funnel): Vertical funnel narrowing top to bottom
 * with four horizontal bars, each progressively narrower:
 *   1. Model routing — Route to cheapest capable tier
 *   2. Context management — Remove tokens that don't earn their place
 *   3. Prompt caching — Reuse processed prefixes at 10% cost
 *   4. Semantic caching — Eliminate redundant calls entirely
 * Below funnel: "Cost per task: EUR 0.12"
 *
 * RIGHT — Metric Ladder: Four rungs stacked bottom to top:
 *   1. Provider billing (bottom)
 *   2. Cost per token
 *   3. Cost per task
 *   4. Cost per outcome (top) — accent element
 * Vertical arrow alongside with "climb to measure what matters".
 *
 * Single accent: var(--accent) on the "Cost per outcome" rung only.
 */

export function FinopsDiagram() {
  /* ── Left section: Funnel layout ────────────────────── */
  const funnelX = 30;
  const funnelCx = 195; // centre of funnel area
  const funnelTopY = 40;
  const barH = 36;
  const barGap = 18;
  const barWidths = [310, 250, 190, 130]; // progressively narrower

  const levers = [
    { title: "Model routing", desc: "Route to cheapest capable tier" },
    { title: "Context management", desc: "Remove tokens that don’t earn their place" },
    { title: "Prompt caching", desc: "Reuse processed prefixes at 10% cost" },
    { title: "Semantic caching", desc: "Eliminate redundant calls entirely" },
  ];

  /* ── Right section: Metric ladder layout ────────────── */
  const ladderX = 460;
  const ladderW = 240;
  const ladderRungH = 32;
  const ladderGap = 24;
  const ladderBottomY = 310; // bottom rung baseline

  const rungs = [
    { label: "Provider billing", accent: false },
    { label: "Cost per token", accent: false },
    { label: "Cost per task", accent: false },
    { label: "Cost per outcome", accent: true },
  ];

  /* Arrow alongside ladder */
  const arrowX = ladderX + ladderW + 36;

  return (
    <figure
      role="img"
      aria-label="FinOps diagram: four cost-reduction levers forming a narrowing funnel on the left, and a metric ladder climbing from provider billing to cost per outcome on the right"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────────── */}
        <defs>
          <marker
            id="foArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
          <marker
            id="foArrowUp"
            viewBox="0 0 10 10"
            refX="5"
            refY="0"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M 0 9 L 5 0 L 10 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* ════════════════════════════════════════════════════════
            LEFT SECTION — Four Levers (Funnel)
            ════════════════════════════════════════════════════════ */}

        {/* Section title */}
        <text
          x={funnelCx}
          y={22}
          fontFamily="var(--font-display)"
          fontSize="13"
          fill="var(--color-midnight)"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.02em"
        >
          Four Levers
        </text>

        {/* Funnel bars */}
        {levers.map((lever, i) => {
          const w = barWidths[i];
          const x = funnelCx - w / 2;
          const y = funnelTopY + i * (barH + barGap);

          return (
            <g key={`fo-lever-${i}`}>
              {/* Bar rectangle */}
              <rect
                x={x}
                y={y}
                width={w}
                height={barH}
                rx="4"
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />

              {/* Title */}
              <text
                x={funnelCx}
                y={y + 14}
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill="var(--color-midnight)"
                textAnchor="middle"
                fontWeight="600"
                letterSpacing="0.02em"
              >
                {lever.title}
              </text>

              {/* Description */}
              <text
                x={funnelCx}
                y={y + 28}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {lever.desc}
              </text>
            </g>
          );
        })}

        {/* Funnel taper lines — left edge */}
        {[0, 1, 2].map((i) => {
          const w1 = barWidths[i];
          const w2 = barWidths[i + 1];
          const y1 = funnelTopY + i * (barH + barGap) + barH;
          const y2 = funnelTopY + (i + 1) * (barH + barGap);
          const x1 = funnelCx - w1 / 2;
          const x2 = funnelCx - w2 / 2;

          return (
            <g key={`fo-taper-${i}`}>
              {/* Left taper */}
              <line
                x1={x1} y1={y1}
                x2={x2} y2={y2}
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              {/* Right taper */}
              <line
                x1={funnelCx + w1 / 2} y1={y1}
                x2={funnelCx + w2 / 2} y2={y2}
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            </g>
          );
        })}

        {/* Downward arrow below funnel */}
        {(() => {
          const lastBarY = funnelTopY + 3 * (barH + barGap) + barH;
          const arrowStartY = lastBarY + 8;
          const arrowEndY = arrowStartY + 28;

          return (
            <line
              x1={funnelCx} y1={arrowStartY}
              x2={funnelCx} y2={arrowEndY}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              markerEnd="url(#foArrow)"
            />
          );
        })()}

        {/* Cost label below funnel */}
        {(() => {
          const labelY = funnelTopY + 3 * (barH + barGap) + barH + 54;

          return (
            <>
              <rect
                x={funnelCx - 80}
                y={labelY - 12}
                width={160}
                height={26}
                rx="4"
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={funnelCx}
                y={labelY + 4}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--color-midnight)"
                textAnchor="middle"
                fontWeight="600"
                letterSpacing="0.02em"
              >
                Cost per task: EUR 0.12
              </text>
            </>
          );
        })()}

        {/* ── Divider between sections ───────────────────────── */}
        <line
          x1="415" y1="30"
          x2="415" y2="390"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* ════════════════════════════════════════════════════════
            RIGHT SECTION — Metric Ladder
            ════════════════════════════════════════════════════════ */}

        {/* Section title */}
        <text
          x={ladderX + ladderW / 2}
          y={22}
          fontFamily="var(--font-display)"
          fontSize="13"
          fill="var(--color-midnight)"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.02em"
        >
          Metric Ladder
        </text>

        {/* Ladder rungs — bottom to top */}
        {rungs.map((rung, i) => {
          const y = ladderBottomY - i * (ladderRungH + ladderGap);
          const isAccent = rung.accent;

          return (
            <g key={`fo-rung-${i}`}>
              <rect
                x={ladderX}
                y={y}
                width={ladderW}
                height={ladderRungH}
                rx="4"
                stroke={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                strokeWidth={isAccent ? 2 : 1.5}
                fill={isAccent ? "var(--accent)" : "var(--bg-surface)"}
                fillOpacity={isAccent ? 0.10 : 1}
              />
              <text
                x={ladderX + ladderW / 2}
                y={y + ladderRungH / 2 + 1}
                fontFamily="var(--font-mono)"
                fontSize={isAccent ? "11" : "10"}
                fill={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                fontWeight={isAccent ? "700" : "500"}
                textAnchor="middle"
                dominantBaseline="middle"
                letterSpacing="0.02em"
              >
                {rung.label}
              </text>
            </g>
          );
        })}

        {/* Vertical connectors between rungs */}
        {[0, 1, 2].map((i) => {
          const y1 = ladderBottomY - i * (ladderRungH + ladderGap);
          const y2 = ladderBottomY - (i + 1) * (ladderRungH + ladderGap) + ladderRungH;

          return (
            <line
              key={`fo-rung-conn-${i}`}
              x1={ladderX + ladderW / 2}
              y1={y1}
              x2={ladderX + ladderW / 2}
              y2={y2}
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          );
        })}

        {/* Vertical arrow alongside ladder */}
        {(() => {
          const topRungY = ladderBottomY - 3 * (ladderRungH + ladderGap);
          const bottomRungY = ladderBottomY + ladderRungH;

          return (
            <>
              <line
                x1={arrowX}
                y1={bottomRungY - 6}
                x2={arrowX}
                y2={topRungY + 6}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#foArrowUp)"
              />

              {/* Rotated label alongside arrow */}
              <text
                x={arrowX + 14}
                y={(bottomRungY + topRungY) / 2}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-2)"
                textAnchor="middle"
                letterSpacing="0.04em"
                transform={`rotate(-90, ${arrowX + 14}, ${(bottomRungY + topRungY) / 2})`}
              >
                climb to measure what matters
              </text>
            </>
          );
        })()}

        {/* Number labels for ladder rungs (bottom to top) */}
        {rungs.map((_, i) => {
          const y = ladderBottomY - i * (ladderRungH + ladderGap) + ladderRungH / 2;

          return (
            <text
              key={`fo-rung-num-${i}`}
              x={ladderX - 14}
              y={y + 1}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="var(--fg-3)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {i + 1}
            </text>
          );
        })}
      </svg>
    </figure>
  );
}
