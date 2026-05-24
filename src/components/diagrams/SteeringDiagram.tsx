/**
 * SteeringDiagram — Two Planes of Steering
 *
 * Vertical cross-section of a model forward pass, left to right:
 * operational guides (surface, before) → transformer stack with
 * mechanistic interventions (research frontier) → operational
 * constraints (surface, after).
 *
 * Single accent: var(--accent) on the steering vector arrow only.
 * Everything else on the midnight/gray scale.
 */

export function SteeringDiagram() {
  /* ── Layout constants ──────────────────────────────── */
  const layerX = 270;
  const layerW = 240;
  const layerH = 36;
  const layerGap = 14;
  const layerStartY = 60;

  const layers = [
    { label: "Layer N+3", y: layerStartY },
    { label: "Layer N+2", y: layerStartY + layerH + layerGap },
    { label: "Layer N+1", y: layerStartY + (layerH + layerGap) * 2 },
    { label: "Layer N", y: layerStartY + (layerH + layerGap) * 3 },
  ];

  return (
    <figure
      role="img"
      aria-label="Two planes of steering: operational guides feed into a transformer forward pass with mechanistic interventions, then operational constraints shape output"
      style={{ margin: 0, width: "100%", maxWidth: "780px", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 780 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Dashed research-frontier boundary ──────────── */}
        <rect
          x="248" y="30" width="284" height="330" rx="4"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="6 4"
          fill="none"
        />

        {/* ── Centre: The Forward Pass ────────────────────── */}

        {/* Layer boxes (top = N+3, bottom = N) */}
        {layers.map((layer) => (
          <g key={layer.label}>
            <rect
              x={layerX} y={layer.y}
              width={layerW} height={layerH} rx="3"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="var(--bg-surface)"
            />
            <text
              x={layerX + layerW / 2}
              y={layer.y + layerH / 2}
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
              letterSpacing="0.04em"
            >
              {layer.label}
            </text>
          </g>
        ))}

        {/* Activation flow arrows between layers (upward: N → N+3) */}
        {[1, 2, 3].map((i) => {
          const fromY = layers[layers.length - i].y;
          const toY = layers[layers.length - i - 1].y + layerH;
          const cx = layerX + layerW / 2;
          return (
            <line
              key={`flow-${i}`}
              x1={cx} y1={fromY}
              x2={cx} y2={toY}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              markerEnd="url(#stArrow)"
            />
          );
        })}

        {/* ── Mechanistic interventions (between middle layers) ── */}

        {/* 1. Steering vector (ACCENT) — between N+1 and N+2 */}
        {(() => {
          const midY = (layers[1].y + layers[1].y + layerH) / 2; // mid of N+2
          const arrowStartX = layerX + layerW + 8;
          const arrowEndX = layerX + layerW - 20;
          return (
            <g>
              <line
                x1={arrowStartX + 60} y1={midY}
                x2={arrowEndX + 4} y2={midY}
                stroke="var(--accent)"
                strokeWidth="2"
                markerEnd="url(#stArrowAccent)"
              />
              <text
                x={arrowStartX + 64} y={midY - 6}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--accent)"
                letterSpacing="0.04em"
              >
                steering vector
              </text>
              {/* Additive "+" symbol */}
              <text
                x={arrowStartX + 64} y={midY + 10}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--accent)"
                letterSpacing="0.02em"
              >
                + additive
              </text>
            </g>
          );
        })()}

        {/* 2. SAE feature clamp — between N and N+1 */}
        {(() => {
          const midY = (layers[2].y + layerH + layers[3].y) / 2;
          const arrowStartX = layerX + layerW + 8;
          const arrowEndX = layerX + layerW - 20;
          return (
            <g>
              <line
                x1={arrowStartX + 60} y1={midY}
                x2={arrowEndX + 4} y2={midY}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#stArrow)"
              />
              <text
                x={arrowStartX + 64} y={midY - 5}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-2)"
                letterSpacing="0.04em"
              >
                SAE feature clamp
              </text>
            </g>
          );
        })()}

        {/* 3. Activation patch — between N+2 and N+3 */}
        {(() => {
          const midY = (layers[0].y + layerH + layers[1].y) / 2;
          const arrowStartX = layerX + layerW + 8;
          const arrowEndX = layerX + layerW - 20;
          return (
            <g>
              <line
                x1={arrowStartX + 60} y1={midY}
                x2={arrowEndX + 4} y2={midY}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                markerEnd="url(#stArrow)"
              />
              <text
                x={arrowStartX + 64} y={midY - 5}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-2)"
                letterSpacing="0.04em"
              >
                activation patch
              </text>
            </g>
          );
        })()}

        {/* ── Left column: Operational Guides ─────────────── */}
        {(() => {
          const boxX = 30;
          const boxW = 150;
          const boxH = 44;
          const gap = 10;
          const startY = 82;
          const items = [
            { label: "System prompt", y: startY },
            { label: "Constraint docs", y: startY + boxH + gap },
            { label: "Temperature", y: startY + (boxH + gap) * 2 },
          ];

          return (
            <g>
              {/* Column header */}
              <text
                x={boxX + boxW / 2} y={52}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Operational Guides
              </text>
              <text
                x={boxX + boxW / 2} y={66}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.06em"
              >
                surface, before
              </text>

              {/* Guide boxes */}
              {items.map((item) => (
                <g key={item.label}>
                  <rect
                    x={boxX} y={item.y}
                    width={boxW} height={boxH} rx="3"
                    stroke="var(--border)"
                    strokeWidth="1"
                    fill="var(--bg-surface)"
                  />
                  <text
                    x={boxX + boxW / 2}
                    y={item.y + boxH / 2}
                    fontFamily="var(--font-mono)"
                    fontSize="10"
                    fill="var(--color-midnight)"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    letterSpacing="0.02em"
                  >
                    {item.label}
                  </text>
                </g>
              ))}

              {/* Arrows from each guide box into the layer stack */}
              {items.map((item) => {
                const arrowY = item.y + boxH / 2;
                return (
                  <line
                    key={`arrow-${item.label}`}
                    x1={boxX + boxW} y1={arrowY}
                    x2={layerX - 4} y2={arrowY}
                    stroke="var(--color-midnight)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    markerEnd="url(#stArrowSmall)"
                  />
                );
              })}

              {/* Input token stream label */}
              <text
                x={boxX + boxW + 20} y={280}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                letterSpacing="0.04em"
                transform={`rotate(-90, ${boxX + boxW + 20}, 280)`}
              >
                input token stream
              </text>
            </g>
          );
        })()}

        {/* ── Right column: Operational Constraints ───────── */}
        {(() => {
          const boxX = 600;
          const boxW = 150;
          const boxH = 44;
          const gap = 10;
          const startY = 100;
          const items = [
            { label: "Structured output", y: startY },
            { label: "Tool forcing", y: startY + boxH + gap },
          ];

          return (
            <g>
              {/* Column header */}
              <text
                x={boxX + boxW / 2} y={52}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                Operational Constraints
              </text>
              <text
                x={boxX + boxW / 2} y={66}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.06em"
              >
                surface, after
              </text>

              {/* Constraint boxes */}
              {items.map((item) => (
                <g key={item.label}>
                  <rect
                    x={boxX} y={item.y}
                    width={boxW} height={boxH} rx="3"
                    stroke="var(--border)"
                    strokeWidth="1"
                    fill="var(--bg-surface)"
                  />
                  <text
                    x={boxX + boxW / 2}
                    y={item.y + boxH / 2}
                    fontFamily="var(--font-mono)"
                    fontSize="10"
                    fill="var(--color-midnight)"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    letterSpacing="0.02em"
                  >
                    {item.label}
                  </text>
                </g>
              ))}

              {/* Arrows from layer stack out to constraint boxes */}
              {items.map((item) => {
                const arrowY = item.y + boxH / 2;
                return (
                  <line
                    key={`arrow-${item.label}`}
                    x1={layerX + layerW + 4} y1={arrowY}
                    x2={boxX} y2={arrowY}
                    stroke="var(--color-midnight)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    markerEnd="url(#stArrowSmall)"
                  />
                );
              })}

              {/* Output token stream label */}
              <text
                x={boxX - 20} y={280}
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="var(--fg-3)"
                letterSpacing="0.04em"
                transform={`rotate(-90, ${boxX - 20}, 280)`}
              >
                output token stream
              </text>
            </g>
          );
        })()}

        {/* ── Forward pass label (inside boundary) ────────── */}
        <text
          x={layerX + layerW / 2} y={layers[0].y - 16}
          fontFamily="var(--font-display)"
          fontSize="13"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
        >
          The Forward Pass
        </text>

        {/* Input arrow entering bottom of stack */}
        <line
          x1={layerX + layerW / 2} y1={layers[3].y + layerH + 30}
          x2={layerX + layerW / 2} y2={layers[3].y + layerH}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#stArrow)"
        />
        <text
          x={layerX + layerW / 2} y={layers[3].y + layerH + 44}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          tokens in
        </text>

        {/* Output arrow exiting top of stack */}
        <line
          x1={layerX + layerW / 2} y1={layers[0].y}
          x2={layerX + layerW / 2} y2={layers[0].y - 24}
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#stArrow)"
        />

        {/* ── Bottom strip annotation ─────────────────────── */}
        <line
          x1="30" y1="390"
          x2="750" y2="390"
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* Practitioner surface (left) */}
        <text
          x="105" y="412"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.08em"
          fontWeight="600"
        >
          PRACTITIONER SURFACE
        </text>

        {/* Research frontier (centre) */}
        <text
          x="390" y="412"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.08em"
          fontWeight="600"
        >
          RESEARCH FRONTIER
        </text>

        {/* Practitioner surface (right) */}
        <text
          x="675" y="412"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.08em"
          fontWeight="600"
        >
          PRACTITIONER SURFACE
        </text>

        {/* Separator dots */}
        <text
          x="240" y="412"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--border)"
          textAnchor="middle"
        >
          |
        </text>
        <text
          x="540" y="412"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--border)"
          textAnchor="middle"
        >
          |
        </text>

        {/* Bottom annotation line */}
        <line
          x1="30" y1="425"
          x2="750" y2="425"
          stroke="var(--border)"
          strokeWidth="1"
        />

        {/* ── Marker definitions ──────────────────────────── */}
        <defs>
          <marker
            id="stArrow"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="7" markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1.5 L 10 5 L 0 8.5"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
          <marker
            id="stArrowSmall"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="5" markerHeight="5"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
          <marker
            id="stArrowAccent"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="7" markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1.5 L 10 5 L 0 8.5"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}
