"use client";

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
 *
 * Animations:
 * - IntersectionObserver entrance (20% threshold, respects prefers-reduced-motion)
 * - CSS transition stagger: left column → transformer layers (bottom-to-top) → right column → annotation
 * - SMIL dot flows left-to-right through the transformer layers
 * - Steering vector arrow pulses (CSS opacity oscillation)
 */

import { useEffect, useRef, useState } from "react";

export function SteeringDiagram() {
  const figureRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = figureRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Layout constants (scaled to 1200×460 viewBox) ──── */
  const layerX = 420;
  const layerW = 360;
  const layerH = 42;
  const layerGap = 16;
  const layerStartY = 70;

  const layers = [
    { label: "Layer N+3", y: layerStartY },
    { label: "Layer N+2", y: layerStartY + layerH + layerGap },
    { label: "Layer N+1", y: layerStartY + (layerH + layerGap) * 2 },
    { label: "Layer N", y: layerStartY + (layerH + layerGap) * 3 },
  ];

  const layerCx = layerX + layerW / 2;
  const bottomLayerBottom = layers[3].y + layerH;
  const topLayerTop = layers[0].y;

  /* ── Throughflow path definition (left-to-right through layers) ── */
  // Path: enters bottom of stack, flows up through each layer, exits top
  const throughflowPath = [
    `M ${layerCx} ${bottomLayerBottom + 30}`,
    `L ${layerCx} ${layers[3].y + layerH / 2}`,
    `L ${layerCx} ${layers[2].y + layerH / 2}`,
    `L ${layerCx} ${layers[1].y + layerH / 2}`,
    `L ${layerCx} ${layers[0].y + layerH / 2}`,
    `L ${layerCx} ${topLayerTop - 28}`,
  ].join(" ");

  /* ── Entrance delay tiers (ms) ── */
  const skipAnim = reducedMotion;
  const d = skipAnim ? 0 : 1; // multiplier: 0 = instant, 1 = normal

  const tierLeft = `${0.15 * d}s`;
  const tierLayer = (i: number) => `${(0.45 + i * 0.12) * d}s`;
  const tierInterventions = `${0.95 * d}s`;
  const tierRight = `${1.1 * d}s`;
  const tierAnnotation = `${1.4 * d}s`;
  const tierFlow = `${0.6 * d}s`; // forward-pass arrows + labels

  const entranceStyle = (delay: string): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
  });

  return (
    <>
      <style>{`
        @keyframes steeringPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        .steering-pulse {
          animation: steeringPulse 2.4s ease-in-out infinite;
        }
      `}</style>

      <figure
        ref={figureRef}
        role="img"
        aria-label="Two planes of steering: operational guides feed into a transformer forward pass with mechanistic interventions, then operational constraints shape output"
        style={{ margin: 0, width: "100%", marginInline: "auto" }}
      >
        <svg
          viewBox="0 0 1200 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          {/* ── Dashed research-frontier boundary ──────────── */}
          <g style={entranceStyle(tierLayer(0))}>
            <rect
              x="394" y="34" width="412" height="350" rx="4"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="6 4"
              fill="none"
            />
          </g>

          {/* ── Centre: The Forward Pass ────────────────────── */}

          {/* Forward pass label */}
          <g style={entranceStyle(tierLayer(0))}>
            <text
              x={layerCx} y={layers[0].y - 18}
              fontFamily="var(--font-display)"
              fontSize="14"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
            >
              The Forward Pass
            </text>
          </g>

          {/* Layer boxes — bottom-to-top entrance */}
          {[...layers].reverse().map((layer, stackIdx) => (
            <g key={layer.label} style={entranceStyle(tierLayer(stackIdx))}>
              <rect
                x={layerX} y={layer.y}
                width={layerW} height={layerH} rx="3"
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={layerCx}
                y={layer.y + layerH / 2}
                fontFamily="var(--font-mono)"
                fontSize="12"
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
          <g style={entranceStyle(tierFlow)}>
            {[1, 2, 3].map((i) => {
              const fromY = layers[layers.length - i].y;
              const toY = layers[layers.length - i - 1].y + layerH;
              return (
                <line
                  key={`flow-${i}`}
                  x1={layerCx} y1={fromY}
                  x2={layerCx} y2={toY}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#stArrow)"
                />
              );
            })}
          </g>

          {/* Input arrow entering bottom of stack */}
          <g style={entranceStyle(tierFlow)}>
            <line
              x1={layerCx} y1={bottomLayerBottom + 30}
              x2={layerCx} y2={bottomLayerBottom}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              markerEnd="url(#stArrow)"
            />
            <text
              x={layerCx} y={bottomLayerBottom + 46}
              fontFamily="var(--font-mono)"
              fontSize="10"
              fill="var(--fg-3)"
              textAnchor="middle"
              letterSpacing="0.04em"
            >
              tokens in
            </text>
          </g>

          {/* Output arrow exiting top of stack */}
          <g style={entranceStyle(tierFlow)}>
            <line
              x1={layerCx} y1={topLayerTop}
              x2={layerCx} y2={topLayerTop - 28}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              markerEnd="url(#stArrow)"
            />
          </g>

          {/* ── Throughflow dot (SMIL) ──────────────────────── */}
          {visible && !reducedMotion && (
            <g>
              <path
                id="stThroughflow"
                d={throughflowPath}
                fill="none"
                stroke="none"
              />
              <circle r="4" fill="var(--color-midnight)" opacity="0.7">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  begin="0s"
                >
                  <mpath href="#stThroughflow" />
                </animateMotion>
              </circle>
            </g>
          )}

          {/* ── Mechanistic interventions ────────────────────── */}

          {/* 1. Steering vector (ACCENT) — between N+1 and N+2 */}
          {(() => {
            const midY = layers[1].y + layerH / 2;
            const arrowStartX = layerX + layerW + 12;
            const arrowEndX = layerX + layerW - 16;
            return (
              <g
                style={entranceStyle(tierInterventions)}
                className={visible && !reducedMotion ? "steering-pulse" : undefined}
              >
                <line
                  x1={arrowStartX + 80} y1={midY}
                  x2={arrowEndX + 4} y2={midY}
                  stroke="var(--accent)"
                  strokeWidth="2"
                  markerEnd="url(#stArrowAccent)"
                />
                <text
                  x={arrowStartX + 84} y={midY - 7}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--accent)"
                  letterSpacing="0.04em"
                >
                  steering vector
                </text>
                <text
                  x={arrowStartX + 84} y={midY + 11}
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
            const arrowStartX = layerX + layerW + 12;
            const arrowEndX = layerX + layerW - 16;
            return (
              <g style={entranceStyle(tierInterventions)}>
                <line
                  x1={arrowStartX + 80} y1={midY}
                  x2={arrowEndX + 4} y2={midY}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#stArrow)"
                />
                <text
                  x={arrowStartX + 84} y={midY - 6}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
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
            const arrowStartX = layerX + layerW + 12;
            const arrowEndX = layerX + layerW - 16;
            return (
              <g style={entranceStyle(tierInterventions)}>
                <line
                  x1={arrowStartX + 80} y1={midY}
                  x2={arrowEndX + 4} y2={midY}
                  stroke="var(--color-midnight)"
                  strokeWidth="1.5"
                  markerEnd="url(#stArrow)"
                />
                <text
                  x={arrowStartX + 84} y={midY - 6}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
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
            const boxX = 40;
            const boxW = 220;
            const boxH = 48;
            const gap = 12;
            const startY = 92;
            const items = [
              { label: "System prompt", y: startY },
              { label: "Constraint docs", y: startY + boxH + gap },
              { label: "Temperature", y: startY + (boxH + gap) * 2 },
            ];

            return (
              <g style={entranceStyle(tierLeft)}>
                {/* Column header */}
                <text
                  x={boxX + boxW / 2} y={56}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  Operational Guides
                </text>
                <text
                  x={boxX + boxW / 2} y={72}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
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
                      fontSize="11"
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
                  x={boxX + boxW + 30} y={300}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--fg-3)"
                  letterSpacing="0.04em"
                  transform={`rotate(-90, ${boxX + boxW + 30}, 300)`}
                >
                  input token stream
                </text>
              </g>
            );
          })()}

          {/* ── Right column: Operational Constraints ───────── */}
          {(() => {
            const boxX = 920;
            const boxW = 220;
            const boxH = 48;
            const gap = 12;
            const startY = 110;
            const items = [
              { label: "Structured output", y: startY },
              { label: "Tool forcing", y: startY + boxH + gap },
            ];

            return (
              <g style={entranceStyle(tierRight)}>
                {/* Column header */}
                <text
                  x={boxX + boxW / 2} y={56}
                  fontFamily="var(--font-display)"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-midnight)"
                  textAnchor="middle"
                >
                  Operational Constraints
                </text>
                <text
                  x={boxX + boxW / 2} y={72}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
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
                      fontSize="11"
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
                  x={boxX - 28} y={300}
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--fg-3)"
                  letterSpacing="0.04em"
                  transform={`rotate(-90, ${boxX - 28}, 300)`}
                >
                  output token stream
                </text>
              </g>
            );
          })()}

          {/* ── Bottom strip annotation ─────────────────────── */}
          <g style={entranceStyle(tierAnnotation)}>
            <line
              x1="40" y1="404"
              x2="1160" y2="404"
              stroke="var(--border)"
              strokeWidth="1"
            />

            {/* Practitioner surface (left) */}
            <text
              x="150" y="426"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--color-midnight)"
              textAnchor="middle"
              letterSpacing="0.08em"
              fontWeight="600"
            >
              PRACTITIONER SURFACE
            </text>

            {/* Research frontier (centre) */}
            <text
              x="600" y="426"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--fg-2)"
              textAnchor="middle"
              letterSpacing="0.08em"
              fontWeight="600"
            >
              RESEARCH FRONTIER
            </text>

            {/* Practitioner surface (right) */}
            <text
              x="1030" y="426"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--color-midnight)"
              textAnchor="middle"
              letterSpacing="0.08em"
              fontWeight="600"
            >
              PRACTITIONER SURFACE
            </text>

            {/* Separator pipes */}
            <text
              x="370" y="426"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--border)"
              textAnchor="middle"
            >
              |
            </text>
            <text
              x="830" y="426"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--border)"
              textAnchor="middle"
            >
              |
            </text>

            {/* Bottom annotation line */}
            <line
              x1="40" y1="440"
              x2="1160" y2="440"
              stroke="var(--border)"
              strokeWidth="1"
            />
          </g>

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
    </>
  );
}
