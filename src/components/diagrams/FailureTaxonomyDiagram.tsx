/**
 * FailureTaxonomyDiagram — Failure Taxonomy & Cascade
 *
 * Upper zone: five failure classes in a horizontal row, each with an
 * abstract glyph and label (Memory, Reflection, Planning, Action, System).
 *
 * Lower zone: a cascade chain showing how failures propagate left-to-right
 * (System -> Memory -> Planning -> Reflection), connected by arrows.
 *
 * Monochrome line art throughout; the single accent element is the
 * jagged crack on the System glyph (var(--accent), violet).
 */

export function FailureTaxonomyDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const cellW = 120;
  const cellH = 100;
  const gutter = (780 - cellW * 5) / 6; // ~30px
  const upperY = 30; // top of upper zone cells

  /* Cell centres */
  const cx = Array.from({ length: 5 }, (_, i) => gutter + cellW / 2 + i * (cellW + gutter));
  const cellCy = upperY + cellH / 2; // vertical centre of cells
  const glyphCy = cellCy - 8; // glyphs sit slightly above centre

  /* Lower zone */
  const cascadeY = 275;
  const cascadeBandTop = 248;
  const cascadeBandBottom = 338;
  const cascadeGlyphY = cascadeY;

  /* Cascade chain order: System, Memory, Planning, Reflection */
  const cascadeStartX = 140;
  const cascadeSpacing = 160;
  const cascadeCx = Array.from({ length: 4 }, (_, i) => cascadeStartX + i * cascadeSpacing);

  return (
    <figure
      role="img"
      aria-label="Failure taxonomy showing five failure classes — Memory, Reflection, Planning, Action, System — and their cascade chain from root cause to symptom"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Primary arrow marker */}
          <marker
            id="ftArrow"
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

          {/* Muted arrow for cascade connectors */}
          <marker
            id="ftArrowMuted"
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

          {/* Downward drop arrow (upper cells to cascade) */}
          <marker
            id="ftArrowDown"
            viewBox="0 0 10 10"
            refX="5"
            refY="10"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path
              d="M 1 3 L 5 9 L 9 3"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ═══════════════════════════════════════════════════
            UPPER ZONE — Five failure classes
            ═══════════════════════════════════════════════════ */}

        {/* Cell borders (subtle) */}
        {cx.map((x, i) => (
          <rect
            key={`cell-${i}`}
            x={x - cellW / 2}
            y={upperY}
            width={cellW}
            height={cellH}
            rx={6}
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            opacity={0.5}
          />
        ))}

        {/* ── 1. Memory — broken horizontal bar ────────── */}
        {(() => {
          const x = cx[0];
          const y = glyphCy;
          const halfW = 26;
          const gap = 7;
          return (
            <g>
              <line
                x1={x - halfW} y1={y}
                x2={x - gap} y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
              <line
                x1={x + gap} y1={y}
                x2={x + halfW} y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
              {/* Dashed gap to show broken continuity */}
              <line
                x1={x - gap} y1={y}
                x2={x + gap} y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </g>
          );
        })()}

        {/* ── 2. Reflection — open circular arrow ──────── */}
        {(() => {
          const x = cx[1];
          const y = glyphCy;
          const r = 16;
          // Arc from ~30deg to ~320deg (leaving a gap at top-right)
          const startAngle = 40 * (Math.PI / 180);
          const endAngle = 350 * (Math.PI / 180);
          const sx = x + r * Math.cos(startAngle);
          const sy = y - r * Math.sin(startAngle);
          const ex = x + r * Math.cos(endAngle);
          const ey = y - r * Math.sin(endAngle);
          return (
            <g>
              <path
                d={`M ${sx} ${sy} A ${r} ${r} 0 1 0 ${ex} ${ey}`}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                fill="none"
              />
              {/* Small arrowhead at the end */}
              {(() => {
                // Tangent direction at end point (perpendicular to radius, clockwise)
                const tangentAngle = endAngle - Math.PI / 2;
                const aLen = 6;
                const aSpread = 2.5;
                const tipX = ex;
                const tipY = ey;
                const backX = tipX - aLen * Math.cos(tangentAngle);
                const backY = tipY + aLen * Math.sin(tangentAngle);
                const perpX = aSpread * Math.sin(tangentAngle);
                const perpY = aSpread * Math.cos(tangentAngle);
                return (
                  <path
                    d={`M ${backX + perpX} ${backY + perpY} L ${tipX} ${tipY} L ${backX - perpX} ${backY - perpY}`}
                    stroke="var(--color-midnight)"
                    strokeWidth="2"
                    fill="none"
                  />
                );
              })()}
            </g>
          );
        })()}

        {/* ── 3. Planning — three bars, middle crossed ──── */}
        {(() => {
          const x = cx[2];
          const y = glyphCy;
          const barW = 30;
          const barH = 4;
          const spacing = 12;
          const bars = [y - spacing, y, y + spacing];
          return (
            <g>
              {bars.map((by, i) => (
                <rect
                  key={i}
                  x={x - barW / 2}
                  y={by - barH / 2}
                  width={barW}
                  height={barH}
                  rx={1}
                  stroke="var(--color-midnight)"
                  strokeWidth="2"
                  fill="none"
                />
              ))}
              {/* Diagonal strike through middle bar */}
              <line
                x1={x - barW / 2 - 4} y1={y + spacing / 2 + 2}
                x2={x + barW / 2 + 4} y2={y - spacing / 2 - 2}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
            </g>
          );
        })()}

        {/* ── 4. Action — detached arrowhead ───────────── */}
        {(() => {
          const x = cx[3];
          const y = glyphCy;
          const shaftLen = 26;
          const shaftX1 = x - shaftLen / 2 - 6;
          const shaftX2 = x + shaftLen / 2 - 10;
          // Head detached and offset downward
          const headBaseX = x + shaftLen / 2 - 4;
          const headTipX = headBaseX + 12;
          const headY = y + 6; // offset down
          return (
            <g>
              {/* Arrow shaft */}
              <line
                x1={shaftX1} y1={y}
                x2={shaftX2} y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="2"
              />
              {/* Detached arrowhead (offset down) */}
              <path
                d={`M ${headBaseX} ${headY - 7} L ${headTipX} ${headY} L ${headBaseX} ${headY + 7}`}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                fill="none"
              />
            </g>
          );
        })()}

        {/* ── 5. System — cracked square ───────────────── */}
        {(() => {
          const x = cx[4];
          const y = glyphCy;
          const size = 28;
          const half = size / 2;
          return (
            <g>
              {/* Square outline */}
              <rect
                x={x - half}
                y={y - half}
                width={size}
                height={size}
                stroke="var(--color-midnight)"
                strokeWidth="2"
                fill="none"
              />
              {/* Jagged crack diagonal — accent violet */}
              <path
                d={`M ${x - half + 4} ${y - half + 4}
                    L ${x - 3} ${y - 4}
                    L ${x + 2} ${y + 1}
                    L ${x - 1} ${y + 5}
                    L ${x + 4} ${y + 8}
                    L ${x + half - 4} ${y + half - 4}`}
                stroke="var(--accent)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })()}

        {/* ── Class labels ─────────────────────────────── */}
        {["Memory", "Reflection", "Planning", "Action", "System"].map(
          (label, i) => (
            <text
              key={label}
              x={cx[i]}
              y={upperY + cellH + 20}
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="500"
              fill="var(--color-midnight)"
              textAnchor="middle"
            >
              {label}
            </text>
          )
        )}

        {/* ── Downward arrows from upper cells to cascade zone ── */}
        {cx.map((x, i) => (
          <line
            key={`drop-${i}`}
            x1={x}
            y1={upperY + cellH + 28}
            x2={x}
            y2={cascadeBandTop - 8}
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity={0.5}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            LOWER ZONE — Cascade chain
            ═══════════════════════════════════════════════════ */}

        {/* Cascade band border */}
        <line
          x1={60} y1={cascadeBandTop}
          x2={720} y2={cascadeBandTop}
          stroke="var(--border)"
          strokeWidth="1"
          opacity={0.3}
        />
        <line
          x1={60} y1={cascadeBandBottom}
          x2={720} y2={cascadeBandBottom}
          stroke="var(--border)"
          strokeWidth="1"
          opacity={0.3}
        />

        {/* Dashed vertical line from upper System cell to cascade System glyph */}
        <line
          x1={cx[4]}
          y1={upperY + cellH + 28}
          x2={cascadeCx[0]}
          y2={cascadeGlyphY - 18}
          stroke="var(--color-midnight)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity={0.6}
        />

        {/* ── Cascade glyphs (smaller versions) ────────── */}

        {/* System — small cracked square */}
        {(() => {
          const x = cascadeCx[0];
          const y = cascadeGlyphY;
          const size = 18;
          const half = size / 2;
          return (
            <g>
              <rect
                x={x - half} y={y - half}
                width={size} height={size}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d={`M ${x - half + 2} ${y - half + 2}
                    L ${x - 1} ${y - 2}
                    L ${x + 1} ${y + 1}
                    L ${x + half - 2} ${y + half - 2}`}
                stroke="var(--accent)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x={x} y={y + half + 14}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.03em"
              >
                System
              </text>
            </g>
          );
        })()}

        {/* Arrow: System -> Memory */}
        <line
          x1={cascadeCx[0] + 14}
          y1={cascadeGlyphY}
          x2={cascadeCx[1] - 18}
          y2={cascadeGlyphY}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          markerEnd="url(#ftArrowMuted)"
        />

        {/* Memory — small broken bar */}
        {(() => {
          const x = cascadeCx[1];
          const y = cascadeGlyphY;
          const halfW = 14;
          const gap = 4;
          return (
            <g>
              <line
                x1={x - halfW} y1={y}
                x2={x - gap} y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
              />
              <line
                x1={x + gap} y1={y}
                x2={x + halfW} y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
              />
              <line
                x1={x - gap} y1={y}
                x2={x + gap} y2={y}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
              <text
                x={x} y={y + 22}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.03em"
              >
                Memory
              </text>
            </g>
          );
        })()}

        {/* Arrow: Memory -> Planning */}
        <line
          x1={cascadeCx[1] + 18}
          y1={cascadeGlyphY}
          x2={cascadeCx[2] - 22}
          y2={cascadeGlyphY}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          markerEnd="url(#ftArrowMuted)"
        />

        {/* Planning — small bars with strike */}
        {(() => {
          const x = cascadeCx[2];
          const y = cascadeGlyphY;
          const barW = 18;
          const barH = 2.5;
          const spacing = 7;
          const bars = [y - spacing, y, y + spacing];
          return (
            <g>
              {bars.map((by, i) => (
                <rect
                  key={i}
                  x={x - barW / 2}
                  y={by - barH / 2}
                  width={barW}
                  height={barH}
                  rx={0.5}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  fill="none"
                />
              ))}
              <line
                x1={x - barW / 2 - 2} y1={y + spacing / 2 + 1}
                x2={x + barW / 2 + 2} y2={y - spacing / 2 - 1}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
              />
              <text
                x={x} y={y + spacing + 17}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.03em"
              >
                Planning
              </text>
            </g>
          );
        })()}

        {/* Arrow: Planning -> Reflection */}
        <line
          x1={cascadeCx[2] + 18}
          y1={cascadeGlyphY}
          x2={cascadeCx[3] - 22}
          y2={cascadeGlyphY}
          stroke="var(--fg-2)"
          strokeWidth="1.5"
          markerEnd="url(#ftArrowMuted)"
        />

        {/* Reflection — small open circular arrow */}
        {(() => {
          const x = cascadeCx[3];
          const y = cascadeGlyphY;
          const r = 10;
          const startAngle = 40 * (Math.PI / 180);
          const endAngle = 350 * (Math.PI / 180);
          const sx = x + r * Math.cos(startAngle);
          const sy = y - r * Math.sin(startAngle);
          const ex = x + r * Math.cos(endAngle);
          const ey = y - r * Math.sin(endAngle);
          return (
            <g>
              <path
                d={`M ${sx} ${sy} A ${r} ${r} 0 1 0 ${ex} ${ey}`}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Small arrowhead */}
              {(() => {
                const tangentAngle = endAngle - Math.PI / 2;
                const aLen = 4;
                const aSpread = 2;
                const tipX = ex;
                const tipY = ey;
                const backX = tipX - aLen * Math.cos(tangentAngle);
                const backY = tipY + aLen * Math.sin(tangentAngle);
                const perpX = aSpread * Math.sin(tangentAngle);
                const perpY = aSpread * Math.cos(tangentAngle);
                return (
                  <path
                    d={`M ${backX + perpX} ${backY + perpY} L ${tipX} ${tipY} L ${backX - perpX} ${backY - perpY}`}
                    stroke="var(--color-midnight)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                );
              })()}
              <text
                x={x} y={y + r + 14}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.03em"
              >
                Reflection
              </text>
            </g>
          );
        })()}

        {/* ── Cascade caption ──────────────────────────── */}
        <text
          x={390}
          y={cascadeBandBottom + 22}
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.06em"
        >
          Symptom at the end. Root cause at the start.
        </text>
      </svg>
    </figure>
  );
}
