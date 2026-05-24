/**
 * CodeDocIndexingDiagram — Three retrieval paths
 *
 * Three horizontal lanes, left to right:
 * 1. Indexed retrieval: Codebase → Parse → Extract → Embed → Store → Context Window
 * 2. Runtime exploration: Codebase → grep → read file → follow imports → Context Window
 * 3. No retrieval (failure): Training knowledge → Context Window → phantom API error
 *
 * No violet accent — uses #DC2626 (--status-danger) only for the phantom API error.
 * Bottom lane visually dimmer with var(--fg-3).
 */

export function CodeDocIndexingDiagram() {
  /* ── Layout constants ────────────────────────────────── */
  const laneH = 80;
  const laneGap = 30;
  const lane1Y = 40;
  const lane2Y = lane1Y + laneH + laneGap;
  const lane3Y = lane2Y + laneH + laneGap;

  const codebaseX = 30;
  const pipeStartX = 120;
  const pipeStepW = 90;
  const ctxX = 600;
  const ctxW = 150;
  const ctxY = 30;
  const ctxH = 320;

  const stageW = 72;
  const stageH = 32;
  const stageRx = 4;

  return (
    <figure
      role="img"
      aria-label="Three retrieval paths: indexed retrieval pipeline, runtime exploration tools, and no-retrieval failure mode feeding into a shared context window"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="cdiArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
          <marker
            id="cdiArrowDim"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="var(--fg-3)"
              strokeWidth="1.5"
            />
          </marker>
          <marker
            id="cdiArrowDanger"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="#DC2626"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ── Lane labels (far left) ─────────────────────── */}
        <text
          x="14"
          y={lane1Y + 8}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-2)"
          letterSpacing="0.08em"
          textAnchor="middle"
          transform={`rotate(-90, 14, ${lane1Y + 8})`}
        >
          INDEXED
        </text>
        <text
          x="14"
          y={lane2Y + 8}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-2)"
          letterSpacing="0.08em"
          textAnchor="middle"
          transform={`rotate(-90, 14, ${lane2Y + 8})`}
        >
          RUNTIME
        </text>
        <text
          x="14"
          y={lane3Y + 8}
          fontFamily="var(--font-mono)"
          fontSize="8"
          fill="var(--fg-3)"
          letterSpacing="0.08em"
          textAnchor="middle"
          transform={`rotate(-90, 14, ${lane3Y + 8})`}
        >
          NONE
        </text>

        {/* ════════════════════════════════════════════════════
            LANE 1 — Indexed retrieval
            ════════════════════════════════════════════════════ */}

        {/* Codebase icon (simple file-tree glyph) */}
        <g transform={`translate(${codebaseX}, ${lane1Y + laneH / 2 - 18})`}>
          <rect
            x="0"
            y="0"
            width="28"
            height="36"
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          {/* Three file lines */}
          <line x1="7" y1="10" x2="21" y2="10" stroke="var(--color-midnight)" strokeWidth="1" />
          <line x1="7" y1="16" x2="21" y2="16" stroke="var(--color-midnight)" strokeWidth="1" />
          <line x1="7" y1="22" x2="17" y2="22" stroke="var(--color-midnight)" strokeWidth="1" />
          {/* Folder tab */}
          <path d="M 0 6 L 0 2 Q 0 0 2 0 L 10 0 L 12 4 L 28 4" stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
        </g>

        {/* Arrow: codebase → first stage */}
        <line
          x1={codebaseX + 32}
          y1={lane1Y + laneH / 2}
          x2={pipeStartX - 4}
          y2={lane1Y + laneH / 2}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#cdiArrow)"
        />

        {/* Pipeline stages */}
        {["Parse", "Extract", "Embed", "Store"].map((label, i) => {
          const x = pipeStartX + i * pipeStepW;
          const y = lane1Y + laneH / 2 - stageH / 2;
          return (
            <g key={label}>
              <rect
                x={x}
                y={y}
                width={stageW}
                height={stageH}
                rx={stageRx}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={x + stageW / 2}
                y={y + stageH / 2}
                fontFamily="var(--font-display)"
                fontSize="12"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {label}
              </text>
              {/* Arrow to next stage */}
              {i < 3 && (
                <line
                  x1={x + stageW}
                  y1={lane1Y + laneH / 2}
                  x2={x + pipeStepW - 4}
                  y2={lane1Y + laneH / 2}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#cdiArrow)"
                />
              )}
            </g>
          );
        })}

        {/* Arrow: Store → Context Window */}
        <line
          x1={pipeStartX + 3 * pipeStepW + stageW}
          y1={lane1Y + laneH / 2}
          x2={ctxX - 4}
          y2={lane1Y + laneH / 2}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#cdiArrow)"
        />

        {/* Symbol labels below pipeline */}
        <text
          x={pipeStartX + 2 * pipeStepW}
          y={lane1Y + laneH / 2 + stageH / 2 + 16}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          getUserById, createUser
        </text>

        {/* ════════════════════════════════════════════════════
            LANE 2 — Runtime exploration
            ════════════════════════════════════════════════════ */}

        {/* Codebase icon (same glyph) */}
        <g transform={`translate(${codebaseX}, ${lane2Y + laneH / 2 - 18})`}>
          <rect
            x="0"
            y="0"
            width="28"
            height="36"
            rx="3"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <line x1="7" y1="10" x2="21" y2="10" stroke="var(--color-midnight)" strokeWidth="1" />
          <line x1="7" y1="16" x2="21" y2="16" stroke="var(--color-midnight)" strokeWidth="1" />
          <line x1="7" y1="22" x2="17" y2="22" stroke="var(--color-midnight)" strokeWidth="1" />
          <path d="M 0 6 L 0 2 Q 0 0 2 0 L 10 0 L 12 4 L 28 4" stroke="var(--color-midnight)" strokeWidth="1.5" fill="none" />
        </g>

        {/* Arrow: codebase → first tool */}
        <line
          x1={codebaseX + 32}
          y1={lane2Y + laneH / 2}
          x2={pipeStartX - 4}
          y2={lane2Y + laneH / 2}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#cdiArrow)"
        />

        {/* Tool stages */}
        {["grep", "read file", "follow imports"].map((label, i) => {
          const x = pipeStartX + i * (pipeStepW + 10);
          const y = lane2Y + laneH / 2 - stageH / 2;
          const w = label === "follow imports" ? 92 : stageW;
          return (
            <g key={label}>
              <rect
                x={x}
                y={y}
                width={w}
                height={stageH}
                rx={stageRx}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={x + w / 2}
                y={y + stageH / 2}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--color-midnight)"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {label}
              </text>
              {/* Arrow to next tool */}
              {i < 2 && (
                <line
                  x1={x + w}
                  y1={lane2Y + laneH / 2}
                  x2={x + (pipeStepW + 10) - 4}
                  y2={lane2Y + laneH / 2}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#cdiArrow)"
                />
              )}
            </g>
          );
        })}

        {/* Thicker arrow: follow imports → Context Window */}
        <line
          x1={pipeStartX + 2 * (pipeStepW + 10) + 92}
          y1={lane2Y + laneH / 2}
          x2={ctxX - 4}
          y2={lane2Y + laneH / 2}
          stroke="var(--color-midnight)"
          strokeWidth="2.5"
          markerEnd="url(#cdiArrow)"
        />

        {/* "variable cost" label */}
        <text
          x={(pipeStartX + 2 * (pipeStepW + 10) + 92 + ctxX) / 2}
          y={lane2Y + laneH / 2 - 10}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.02em"
        >
          variable cost
        </text>

        {/* ════════════════════════════════════════════════════
            LANE 3 — No retrieval (failure, dimmer)
            ════════════════════════════════════════════════════ */}

        {/* "Training knowledge" box */}
        <rect
          x={codebaseX}
          y={lane3Y + laneH / 2 - stageH / 2}
          width="120"
          height={stageH}
          rx={stageRx}
          stroke="var(--fg-3)"
          strokeWidth="1.5"
          fill="var(--bg-surface)"
          strokeDasharray="4 3"
        />
        <text
          x={codebaseX + 60}
          y={lane3Y + laneH / 2}
          fontFamily="var(--font-display)"
          fontSize="11"
          fontWeight="600"
          fill="var(--fg-3)"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Training knowledge
        </text>

        {/* Arrow: Training knowledge → Context Window */}
        <line
          x1={codebaseX + 120}
          y1={lane3Y + laneH / 2}
          x2={ctxX - 4}
          y2={lane3Y + laneH / 2}
          stroke="var(--fg-3)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          markerEnd="url(#cdiArrowDim)"
        />

        {/* Branching arrow from midpoint down to phantom API */}
        {(() => {
          const branchX = 380;
          const phantomY = lane3Y + laneH / 2 + 40;
          return (
            <g>
              {/* Vertical drop */}
              <line
                x1={branchX}
                y1={lane3Y + laneH / 2}
                x2={branchX}
                y2={phantomY - 4}
                stroke="var(--fg-3)"
                strokeWidth="1.5"
              />
              {/* Horizontal to phantom box */}
              <line
                x1={branchX}
                y1={phantomY}
                x2={branchX + 60}
                y2={phantomY}
                stroke="#DC2626"
                strokeWidth="1.5"
                markerEnd="url(#cdiArrowDanger)"
              />
              {/* Phantom API callout */}
              <rect
                x={branchX + 68}
                y={phantomY - 14}
                width="180"
                height="28"
                rx="3"
                stroke="#DC2626"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={branchX + 68 + 90}
                y={phantomY}
                fontFamily="var(--font-mono)"
                fontSize="10"
                fill="#DC2626"
                textAnchor="middle"
                dominantBaseline="middle"
                textDecoration="line-through"
              >
                userService.findByEmail
              </text>
            </g>
          );
        })()}

        {/* ════════════════════════════════════════════════════
            CONTEXT WINDOW (shared, right side)
            ════════════════════════════════════════════════════ */}
        <rect
          x={ctxX}
          y={ctxY}
          width={ctxW}
          height={ctxH}
          rx="6"
          stroke="var(--color-midnight)"
          strokeWidth="2"
          fill="var(--bg-surface)"
        />
        <text
          x={ctxX + ctxW / 2}
          y={ctxY + 24}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Context
        </text>
        <text
          x={ctxX + ctxW / 2}
          y={ctxY + 40}
          fontFamily="var(--font-display)"
          fontSize="14"
          fontWeight="700"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          Window
        </text>

        {/* Lane entry indicators on Context Window */}
        {[lane1Y + laneH / 2, lane2Y + laneH / 2, lane3Y + laneH / 2].map(
          (y, i) => (
            <line
              key={i}
              x1={ctxX}
              y1={y}
              x2={ctxX + 6}
              y2={y}
              stroke={i === 2 ? "var(--fg-3)" : "var(--color-midnight)"}
              strokeWidth={i === 2 ? 1 : 1.5}
            />
          )
        )}

        {/* ── Diagram caption ────────────────────────────── */}
        <text
          x="390"
          y="370"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.14em"
        >
          THREE RETRIEVAL PATHS
        </text>
      </svg>
    </figure>
  );
}
