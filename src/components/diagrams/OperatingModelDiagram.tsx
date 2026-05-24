/**
 * OperatingModelDiagram — Four-stage AI maturity progression
 *
 * Left to right: Experimentation, Standardisation, Scaling, AI Factory.
 * A thick "wall" between Stage 2 and Stage 3 blocks the progression arrow.
 * The wall is the only accent-coloured element; everything else is
 * midnight/gray monochrome.
 */

export function OperatingModelDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const stageW = 150;
  const stageGap = 40;
  const totalStagesW = stageW * 4 + stageGap * 3;
  const offsetX = (780 - totalStagesW) / 2;
  const stageX = (i: number) => offsetX + i * (stageW + stageGap) + stageW / 2;

  const stageTop = 60;
  const stageH = 200;
  const labelY = 44;
  const numberY = 24;
  const dotZoneY = stageTop + 60;

  /* ── Wall position (between stage 2 and 3) ─────────── */
  const wallX = stageX(1) + stageW / 2 + stageGap / 2;
  const wallTop = stageTop - 10;
  const wallBottom = stageTop + stageH + 10;
  const wallW = 8;

  return (
    <figure
      role="img"
      aria-label="AI operating model maturity — four stages from Experimentation through AI Factory, separated by 'The Wall' between Standardisation and Scaling"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Arrow marker — midnight */}
          <marker
            id="omArrow"
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

          {/* Arrow marker — muted */}
          <marker
            id="omArrowMuted"
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
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Hatching pattern for the wall */}
          <pattern
            id="omHatch"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0" y1="0" x2="0" y2="6"
              stroke="var(--accent)"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </pattern>

          {/* Feedback loop arrow marker */}
          <marker
            id="omLoopArrow"
            viewBox="0 0 10 10"
            refX="9"
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

        {/* ═══════════════════════════════════════════════════
            STAGE NUMBERS & LABELS
            ═══════════════════════════════════════════════════ */}

        {[
          { n: "01", label: "Experimentation" },
          { n: "02", label: "Standardisation" },
          { n: "03", label: "Scaling" },
          { n: "04", label: "AI Factory" },
        ].map(({ n, label }, i) => (
          <g key={n}>
            {/* Stage number */}
            <text
              x={stageX(i)}
              y={numberY}
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--fg-3)"
              textAnchor="middle"
              letterSpacing="0.08em"
            >
              {n}
            </text>
            {/* Stage name */}
            <text
              x={stageX(i)}
              y={labelY}
              fontFamily="var(--font-display)"
              fontSize="13"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        ))}

        {/* ═══════════════════════════════════════════════════
            STAGE BOXES (subtle border)
            ═══════════════════════════════════════════════════ */}

        {[0, 1, 2, 3].map((i) => (
          <rect
            key={`box-${i}`}
            x={stageX(i) - stageW / 2}
            y={stageTop}
            width={stageW}
            height={stageH}
            rx={6}
            stroke="var(--border)"
            strokeWidth="1"
            fill="var(--bg-surface)"
            opacity={0.6}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            STAGE 1 — Scattered dots (isolated pilots)
            ═══════════════════════════════════════════════════ */}
        {(() => {
          const cx = stageX(0);
          const dots = [
            { dx: -30, dy: 20 },
            { dx: 25, dy: 50 },
            { dx: -10, dy: 85 },
          ];
          return (
            <g>
              {dots.map((d, i) => (
                <circle
                  key={`s1d-${i}`}
                  cx={cx + d.dx}
                  cy={dotZoneY + d.dy}
                  r={7}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />
              ))}
              {/* Small label */}
              <text
                x={cx}
                y={dotZoneY + 120}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                isolated pilots
              </text>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════
            STAGE 2 — Hub-and-spoke (CoE)
            ═══════════════════════════════════════════════════ */}
        {(() => {
          const cx = stageX(1);
          const hubY = dotZoneY + 50;
          const hubR = 10;
          const spokes = [
            { dx: -38, dy: -30 },
            { dx: 38, dy: -25 },
            { dx: -35, dy: 35 },
            { dx: 40, dy: 30 },
            { dx: 0, dy: -45 },
          ];
          return (
            <g>
              {/* Hub */}
              <circle
                cx={cx}
                cy={hubY}
                r={hubR}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                fill="none"
              />
              {/* Spoke dots and lines */}
              {spokes.map((s, i) => (
                <g key={`s2s-${i}`}>
                  <line
                    x1={cx}
                    y1={hubY}
                    x2={cx + s.dx}
                    y2={hubY + s.dy}
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <circle
                    cx={cx + s.dx}
                    cy={hubY + s.dy}
                    r={5}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
              ))}
              {/* Hub label */}
              <text
                x={cx}
                y={hubY + 3.5}
                fontFamily="var(--font-mono)"
                fontSize="7"
                fill="var(--color-midnight)"
                textAnchor="middle"
                fontWeight="600"
              >
                CoE
              </text>
              <text
                x={cx}
                y={dotZoneY + 120}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                central hub
              </text>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════
            STAGE 3 — Platform bar with dots hanging below
            ═══════════════════════════════════════════════════ */}
        {(() => {
          const cx = stageX(2);
          const barY = dotZoneY + 10;
          const barW = 100;
          const barH = 8;
          const dots = [
            { dx: -35, dy: 40 },
            { dx: -10, dy: 55 },
            { dx: 15, dy: 40 },
            { dx: 38, dy: 50 },
          ];
          return (
            <g>
              {/* Platform bar */}
              <rect
                x={cx - barW / 2}
                y={barY}
                width={barW}
                height={barH}
                rx={2}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x={cx}
                y={barY + 6.5}
                fontFamily="var(--font-mono)"
                fontSize="7"
                fill="var(--color-midnight)"
                textAnchor="middle"
                fontWeight="600"
              >
                PLATFORM
              </text>
              {/* Hanging dots */}
              {dots.map((d, i) => (
                <g key={`s3d-${i}`}>
                  <line
                    x1={cx + d.dx}
                    y1={barY + barH}
                    x2={cx + d.dx}
                    y2={barY + d.dy - 5}
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <circle
                    cx={cx + d.dx}
                    cy={barY + d.dy}
                    r={5}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
              ))}
              <text
                x={cx}
                y={dotZoneY + 120}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                self-serve
              </text>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════
            STAGE 4 — Platform + feedback loop
            ═══════════════════════════════════════════════════ */}
        {(() => {
          const cx = stageX(3);
          const barY = dotZoneY + 10;
          const barW = 100;
          const barH = 8;
          const dots = [
            { dx: -35, dy: 40 },
            { dx: -10, dy: 55 },
            { dx: 15, dy: 40 },
            { dx: 38, dy: 50 },
          ];
          /* Feedback loop arc dimensions */
          const loopRight = cx + barW / 2 + 14;
          const loopTop = barY - 12;
          const loopBottom = barY + 68;
          return (
            <g>
              {/* Platform bar */}
              <rect
                x={cx - barW / 2}
                y={barY}
                width={barW}
                height={barH}
                rx={2}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />
              <text
                x={cx}
                y={barY + 6.5}
                fontFamily="var(--font-mono)"
                fontSize="7"
                fill="var(--color-midnight)"
                textAnchor="middle"
                fontWeight="600"
              >
                PLATFORM
              </text>
              {/* Hanging dots */}
              {dots.map((d, i) => (
                <g key={`s4d-${i}`}>
                  <line
                    x1={cx + d.dx}
                    y1={barY + barH}
                    x2={cx + d.dx}
                    y2={barY + d.dy - 5}
                    stroke="var(--border)"
                    strokeWidth="1"
                  />
                  <circle
                    cx={cx + d.dx}
                    cy={barY + d.dy}
                    r={5}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
              ))}
              {/* Feedback loop arrow — right side arc */}
              <path
                d={`M ${cx + barW / 2 - 8} ${barY - 4}
                    C ${loopRight} ${loopTop}, ${loopRight} ${loopBottom}, ${cx + barW / 2 - 8} ${barY + 66}`}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
                markerEnd="url(#omLoopArrow)"
              />
              {/* Loop label */}
              <text
                x={loopRight + 2}
                y={barY + 32}
                fontFamily="var(--font-mono)"
                fontSize="7"
                fill="var(--fg-3)"
                textAnchor="start"
                transform={`rotate(90, ${loopRight + 2}, ${barY + 32})`}
              >
                feedback
              </text>
              <text
                x={cx}
                y={dotZoneY + 120}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                continuous
              </text>
            </g>
          );
        })()}

        {/* ═══════════════════════════════════════════════════
            CONNECTING ARROWS between stages
            ═══════════════════════════════════════════════════ */}

        {/* Stage 1 -> Stage 2 */}
        <line
          x1={stageX(0) + stageW / 2 + 4}
          y1={stageTop + stageH / 2}
          x2={stageX(1) - stageW / 2 - 4}
          y2={stageTop + stageH / 2}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          markerEnd="url(#omArrowMuted)"
        />

        {/* Stage 2 -> Wall (broken — stops at wall) */}
        <line
          x1={stageX(1) + stageW / 2 + 4}
          y1={stageTop + stageH / 2}
          x2={wallX - wallW / 2 - 4}
          y2={stageTop + stageH / 2}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />

        {/* Wall -> Stage 3 (broken — starts from wall) */}
        <line
          x1={wallX + wallW / 2 + 4}
          y1={stageTop + stageH / 2}
          x2={stageX(2) - stageW / 2 - 4}
          y2={stageTop + stageH / 2}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#omArrowMuted)"
        />

        {/* Stage 3 -> Stage 4 */}
        <line
          x1={stageX(2) + stageW / 2 + 4}
          y1={stageTop + stageH / 2}
          x2={stageX(3) - stageW / 2 - 4}
          y2={stageTop + stageH / 2}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          markerEnd="url(#omArrowMuted)"
        />

        {/* ═══════════════════════════════════════════════════
            THE WALL — thick hatched bar between S2 and S3
            ═══════════════════════════════════════════════════ */}

        {/* Hatched fill */}
        <rect
          x={wallX - wallW / 2}
          y={wallTop}
          width={wallW}
          height={wallBottom - wallTop}
          rx={2}
          fill="url(#omHatch)"
        />
        {/* Solid border */}
        <rect
          x={wallX - wallW / 2}
          y={wallTop}
          width={wallW}
          height={wallBottom - wallTop}
          rx={2}
          stroke="var(--accent)"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Wall label */}
        <text
          x={wallX}
          y={wallBottom + 18}
          fontFamily="var(--font-display)"
          fontSize="12"
          fontWeight="700"
          fill="var(--accent)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          The Wall
        </text>

        {/* ═══════════════════════════════════════════════════
            BOTTOM CAPTION
            ═══════════════════════════════════════════════════ */}

        <text
          x={390}
          y={330}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          Most organisations stall at the wall. The platform is the bridge.
        </text>
      </svg>
    </figure>
  );
}
