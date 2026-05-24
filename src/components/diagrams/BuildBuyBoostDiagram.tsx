/**
 * BuildBuyBoostDiagram — Build vs Buy vs Boost
 *
 * Three stacked horizontal bars showing the split between Model and
 * Harness investment across three strategies. Build is model-heavy,
 * Buy is vendor-owned (hatched), Boost is harness-heavy — the only
 * row with accent colour, because that is where practitioners work.
 *
 * Left-edge vertical arrow shows model commoditisation direction.
 * Single accent: var(--accent) on the Boost harness segment only.
 */

export function BuildBuyBoostDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const barLeft = 130;
  const barWidth = 520;
  const barHeight = 56;
  const rowGap = 28;
  const startY = 40;

  const rows = [
    {
      label: "Build",
      modelPct: 0.75,
      y: startY,
      annotation: "weights, training pipeline, retraining",
    },
    {
      label: "Buy",
      modelPct: 0.08,
      y: startY + barHeight + rowGap,
      annotation: "vendor owns the system",
      hatched: true,
    },
    {
      label: "Boost",
      modelPct: 0.25,
      y: startY + (barHeight + rowGap) * 2,
      annotation: "data, evals, orchestration, steering",
      accent: true,
    },
  ];

  const annotationX = barLeft + barWidth + 16;

  return (
    <figure
      role="img"
      aria-label="Build vs Buy vs Boost: three strategies showing the split between model and harness investment, with Boost emphasising the harness"
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
          {/* Hatched / stipple pattern for Buy row */}
          <pattern
            id="bbbStipple"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="var(--color-midnight)" opacity="0.15" />
            <circle cx="4" cy="4" r="0.7" fill="var(--color-midnight)" opacity="0.15" />
          </pattern>

          {/* Arrow marker for the vertical commoditisation arrow */}
          <marker
            id="bbbArrowDown"
            viewBox="0 0 10 10"
            refX="5"
            refY="10"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path
              d="M 1 0 L 5 10 L 9 0"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ── Column headers ──────────────────────────────── */}
        <text
          x={barLeft + 40}
          y={startY - 12}
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="0.14em"
          fill="var(--fg-3)"
        >
          MODEL
        </text>
        <text
          x={barLeft + barWidth - 40}
          y={startY - 12}
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="0.14em"
          fill="var(--fg-3)"
          textAnchor="end"
        >
          HARNESS
        </text>

        {/* ── Rows ────────────────────────────────────────── */}
        {rows.map((row) => {
          const modelW = barWidth * row.modelPct;
          const harnessW = barWidth - modelW;

          return (
            <g key={row.label}>
              {/* Row label */}
              <text
                x={barLeft - 16}
                y={row.y + barHeight / 2}
                fontFamily="var(--font-display)"
                fontSize="15"
                fontWeight="700"
                fill="var(--color-midnight)"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {row.label}
              </text>

              {/* Full bar outline */}
              <rect
                x={barLeft}
                y={row.y}
                width={barWidth}
                height={barHeight}
                rx="3"
                stroke="var(--border)"
                strokeWidth="1"
                fill="none"
              />

              {/* Model segment */}
              <rect
                x={barLeft}
                y={row.y}
                width={modelW}
                height={barHeight}
                rx={modelW === barWidth ? 3 : 0}
                fill={
                  row.hatched
                    ? "url(#bbbStipple)"
                    : "var(--color-midnight)"
                }
                opacity={row.hatched ? 1 : 0.1}
              />
              {/* Clean left corners on model segment */}
              <rect
                x={barLeft}
                y={row.y}
                width={Math.min(modelW, 6)}
                height={barHeight}
                fill={
                  row.hatched
                    ? "url(#bbbStipple)"
                    : "var(--color-midnight)"
                }
                opacity={row.hatched ? 1 : 0.1}
                rx="3"
              />

              {/* Harness segment — hatched for Buy, accent for Boost */}
              {row.hatched ? (
                <rect
                  x={barLeft + modelW}
                  y={row.y}
                  width={harnessW}
                  height={barHeight}
                  fill="url(#bbbStipple)"
                />
              ) : row.accent ? (
                <g>
                  {/* Violet fill */}
                  <rect
                    x={barLeft + modelW}
                    y={row.y}
                    width={harnessW}
                    height={barHeight}
                    fill="var(--accent)"
                    opacity="0.15"
                  />
                  {/* Violet left border on harness */}
                  <line
                    x1={barLeft + modelW}
                    y1={row.y}
                    x2={barLeft + modelW}
                    y2={row.y + barHeight}
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                  />
                </g>
              ) : null}

              {/* Clean right corners */}
              <rect
                x={barLeft + barWidth - 6}
                y={row.y}
                width={6}
                height={barHeight}
                fill="none"
                rx="3"
              />

              {/* Divider line between model and harness (skip if hatched) */}
              {!row.hatched && (
                <line
                  x1={barLeft + modelW}
                  y1={row.y}
                  x2={barLeft + modelW}
                  y2={row.y + barHeight}
                  stroke="var(--border)"
                  strokeWidth="1"
                />
              )}

              {/* Annotation text */}
              <text
                x={annotationX}
                y={row.y + barHeight / 2}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill={row.accent ? "var(--accent)" : "var(--fg-3)"}
                dominantBaseline="middle"
                letterSpacing="0.02em"
              >
                {row.annotation}
              </text>
            </g>
          );
        })}

        {/* ── Left vertical arrow: "model commoditises" ───── */}
        {(() => {
          const arrowX = 30;
          const arrowTop = rows[0].y + 6;
          const arrowBottom = rows[rows.length - 1].y + barHeight - 6;
          return (
            <g>
              <line
                x1={arrowX}
                y1={arrowTop}
                x2={arrowX}
                y2={arrowBottom}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#bbbArrowDown)"
              />
              <text
                x={arrowX - 8}
                y={(arrowTop + arrowBottom) / 2}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-2)"
                textAnchor="middle"
                letterSpacing="0.06em"
                transform={`rotate(-90, ${arrowX - 8}, ${(arrowTop + arrowBottom) / 2})`}
              >
                model commoditises
              </text>
            </g>
          );
        })()}

        {/* ── Bottom annotation ────────────────────────────── */}
        <text
          x={barLeft + barWidth / 2}
          y={rows[rows.length - 1].y + barHeight + 36}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          value accrues to the harness, not the model
        </text>
      </svg>
    </figure>
  );
}
