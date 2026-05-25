"use client";

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

  /* ── Layout ──────────────────────────────────────── */
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

  /* ── Gap connector paths (dots travel ONLY here) ── */
  const gaps = [
    { id: "stGap0", d: `M ${layerCx} ${bottomLayerBottom + 30} L ${layerCx} ${bottomLayerBottom}` },
    { id: "stGap1", d: `M ${layerCx} ${layers[3].y} L ${layerCx} ${layers[2].y + layerH}` },
    { id: "stGap2", d: `M ${layerCx} ${layers[2].y} L ${layerCx} ${layers[1].y + layerH}` },
    { id: "stGap3", d: `M ${layerCx} ${layers[1].y} L ${layerCx} ${layers[0].y + layerH}` },
  ];

  /* ── Entrance timing ──────────────────────────────── */
  const d = reducedMotion ? 0 : 1;
  const tierLayer = (i: number) => `${(0.1 + i * 0.12) * d}s`;
  const tierFlow = `${0.55 * d}s`;
  const tierLeft = `${0.7 * d}s`;
  const tierRight = `${0.95 * d}s`;
  const tierIntervention = `${1.2 * d}s`;
  const tierAnnotation = `${1.5 * d}s`;

  const entrance = (delay: string): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
  });

  /* ── Left column ─────────────────────────────────── */
  const guideX = 40;
  const guideW = 220;
  const guideH = 48;
  const guideGap = 12;
  const guideStartY = 92;
  const guides = [
    { label: "System prompt", y: guideStartY },
    { label: "Constraint docs", y: guideStartY + guideH + guideGap },
    { label: "Temperature", y: guideStartY + (guideH + guideGap) * 2 },
  ];

  /* ── Right column ────────────────────────────────── */
  const constraintX = 940;
  const constraintW = 210;
  const constraintH = 48;
  const constraintGap = 12;
  const constraintStartY = 110;
  const constraints = [
    { label: "Structured output", y: constraintStartY },
    { label: "Tool forcing", y: constraintStartY + constraintH + constraintGap },
  ];

  /* ── Dashed research frontier box (tight around layers) ── */
  const frontierX = layerX - 30;
  const frontierW = layerW + 60;
  const frontierTop = 34;
  const frontierH = 350;
  const frontierRight = frontierX + frontierW;

  /* ── Interventions (between frontier and constraints) ── */
  const interventions = [
    {
      label: "activation patch",
      y: (layers[0].y + layerH + layers[1].y) / 2,
      accent: false,
    },
    {
      label: "steering vector",
      sublabel: "+ additive",
      y: (layers[1].y + layerH + layers[2].y) / 2,
      accent: true,
    },
    {
      label: "SAE feature clamp",
      y: (layers[2].y + layerH + layers[3].y) / 2,
      accent: false,
    },
  ];

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
          <defs>
            <marker id="stArrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
            </marker>
            <marker id="stArrowSmall" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
            </marker>
            <marker id="stArrowAccent" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            </marker>
            {gaps.map((g) => (
              <path key={g.id} id={g.id} d={g.d} fill="none" stroke="none" />
            ))}
          </defs>

          {/* ── Dashed frontier boundary ────────────────────── */}
          <g style={entrance(tierLayer(0))}>
            <rect
              x={frontierX} y={frontierTop}
              width={frontierW} height={frontierH} rx="4"
              stroke="var(--border)" strokeWidth="1" strokeDasharray="6 4" fill="none"
            />
          </g>

          {/* ── Forward Pass title ──────────────────────────── */}
          <g style={entrance(tierLayer(0))}>
            <text
              x={layerCx} y={layers[0].y - 18}
              fontFamily="var(--font-display)" fontSize="14" fontWeight="600"
              fill="var(--color-midnight)" textAnchor="middle"
            >
              The Forward Pass
            </text>
          </g>

          {/* ── Layer boxes (bottom-to-top entrance) ─────────── */}
          {[...layers].reverse().map((layer, stackIdx) => (
            <g key={layer.label} style={entrance(tierLayer(stackIdx))}>
              <rect
                x={layerX} y={layer.y}
                width={layerW} height={layerH} rx="3"
                stroke="var(--color-midnight)" strokeWidth="1.5" fill="var(--bg-surface)"
              />
              <text
                x={layerCx} y={layer.y + layerH / 2}
                fontFamily="var(--font-mono)" fontSize="12"
                fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle"
                letterSpacing="0.04em"
              >
                {layer.label}
              </text>
            </g>
          ))}

          {/* ── Flow arrows between layers ──────────────────── */}
          <g style={entrance(tierFlow)}>
            {[1, 2, 3].map((i) => (
              <line
                key={`flow-${i}`}
                x1={layerCx} y1={layers[layers.length - i].y}
                x2={layerCx} y2={layers[layers.length - i - 1].y + layerH}
                stroke="var(--color-midnight)" strokeWidth="1.5"
                opacity="0.25"
              />
            ))}
            {/* Entry line */}
            <line
              x1={layerCx} y1={bottomLayerBottom + 30}
              x2={layerCx} y2={bottomLayerBottom}
              stroke="var(--color-midnight)" strokeWidth="1.5"
              opacity="0.25"
            />
            {/* Labels */}
            <text
              x={layerCx} y={bottomLayerBottom + 46}
              fontFamily="var(--font-mono)" fontSize="10"
              fill="var(--fg-3)" textAnchor="middle" letterSpacing="0.04em"
            >
              tokens in
            </text>
          </g>

          {/* ── Gap dots (flow BETWEEN layers only) ─────────── */}
          {visible && !reducedMotion && (
            <g>
              {gaps.map((g) => (
                <circle key={g.id} r="3.5" fill="var(--color-midnight)" opacity="0.7">
                  <animateMotion dur="2s" repeatCount="indefinite">
                    <mpath href={`#${g.id}`} />
                  </animateMotion>
                </circle>
              ))}
            </g>
          )}

          {/* ── Left column: Operational Guides ─────────────── */}
          <g style={entrance(tierLeft)}>
            <text
              x={guideX + guideW / 2} y={56}
              fontFamily="var(--font-display)" fontSize="14" fontWeight="600"
              fill="var(--color-midnight)" textAnchor="middle"
            >
              Operational Guides
            </text>
            <text
              x={guideX + guideW / 2} y={72}
              fontFamily="var(--font-mono)" fontSize="9"
              fill="var(--fg-3)" textAnchor="middle" letterSpacing="0.06em"
            >
              surface, before
            </text>

            {guides.map((item) => (
              <g key={item.label}>
                <rect
                  x={guideX} y={item.y}
                  width={guideW} height={guideH} rx="3"
                  stroke="var(--border)" strokeWidth="1" fill="var(--bg-surface)"
                />
                <text
                  x={guideX + guideW / 2} y={item.y + guideH / 2}
                  fontFamily="var(--font-mono)" fontSize="11"
                  fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle"
                >
                  {item.label}
                </text>
                <line
                  x1={guideX + guideW} y1={item.y + guideH / 2}
                  x2={layerX - 4} y2={item.y + guideH / 2}
                  stroke="var(--color-midnight)" strokeWidth="1" strokeDasharray="4 3"
                  markerEnd="url(#stArrowSmall)"
                />
              </g>
            ))}
          </g>

          {/* ── Right column: Operational Constraints ───────── */}
          <g style={entrance(tierRight)}>
            <text
              x={constraintX + constraintW / 2} y={56}
              fontFamily="var(--font-display)" fontSize="14" fontWeight="600"
              fill="var(--color-midnight)" textAnchor="middle"
            >
              Operational Constraints
            </text>
            <text
              x={constraintX + constraintW / 2} y={72}
              fontFamily="var(--font-mono)" fontSize="9"
              fill="var(--fg-3)" textAnchor="middle" letterSpacing="0.06em"
            >
              surface, after
            </text>

            {constraints.map((item) => (
              <g key={item.label}>
                <rect
                  x={constraintX} y={item.y}
                  width={constraintW} height={constraintH} rx="3"
                  stroke="var(--border)" strokeWidth="1" fill="var(--bg-surface)"
                />
                <text
                  x={constraintX + constraintW / 2} y={item.y + constraintH / 2}
                  fontFamily="var(--font-mono)" fontSize="11"
                  fill="var(--color-midnight)" textAnchor="middle" dominantBaseline="middle"
                >
                  {item.label}
                </text>
                <line
                  x1={frontierRight + 4} y1={item.y + constraintH / 2}
                  x2={constraintX} y2={item.y + constraintH / 2}
                  stroke="var(--color-midnight)" strokeWidth="1" strokeDasharray="4 3"
                  markerEnd="url(#stArrowSmall)"
                />
              </g>
            ))}
          </g>

          {/* ── Mechanistic interventions ────────────────────── */}
          <g style={entrance(tierIntervention)}>
            {interventions.map((item) => {
              const arrowStartX = frontierRight + 10;
              const arrowEndX = layerX + layerW + 4;
              const labelX = frontierRight + 14;
              const color = item.accent ? "var(--accent)" : "var(--fg-2)";
              const marker = item.accent ? "url(#stArrowAccent)" : "url(#stArrow)";
              const strokeW = item.accent ? 2 : 1.5;

              return (
                <g
                  key={item.label}
                  className={item.accent && visible && !reducedMotion ? "steering-pulse" : undefined}
                >
                  <line
                    x1={arrowStartX} y1={item.y}
                    x2={arrowEndX} y2={item.y}
                    stroke={item.accent ? "var(--accent)" : "var(--color-midnight)"}
                    strokeWidth={strokeW}
                    markerEnd={marker}
                  />
                  <text
                    x={labelX} y={item.sublabel ? item.y - 3 : item.y + 4}
                    fontFamily="var(--font-mono)" fontSize="9"
                    fill={color} letterSpacing="0.04em"
                  >
                    {item.label}
                  </text>
                  {item.sublabel && (
                    <text
                      x={labelX} y={item.y + 10}
                      fontFamily="var(--font-mono)" fontSize="9"
                      fill={color} letterSpacing="0.02em"
                    >
                      {item.sublabel}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* ── Bottom annotation ────────────────────────────── */}
          <g style={entrance(tierAnnotation)}>
            <line x1="40" y1="404" x2="1160" y2="404" stroke="var(--border)" strokeWidth="1" />
            <text x="150" y="426" fontFamily="var(--font-mono)" fontSize="11" fill="var(--color-midnight)" textAnchor="middle" letterSpacing="0.08em" fontWeight="600">
              PRACTITIONER SURFACE
            </text>
            <text x={layerCx} y="426" fontFamily="var(--font-mono)" fontSize="11" fill="var(--fg-2)" textAnchor="middle" letterSpacing="0.08em" fontWeight="600">
              RESEARCH FRONTIER
            </text>
            <text x={constraintX + constraintW / 2} y="426" fontFamily="var(--font-mono)" fontSize="11" fill="var(--color-midnight)" textAnchor="middle" letterSpacing="0.08em" fontWeight="600">
              PRACTITIONER SURFACE
            </text>
            <text x={(40 + frontierX) / 2} y="426" fontFamily="var(--font-mono)" fontSize="11" fill="var(--border)" textAnchor="middle">|</text>
            <text x={(frontierRight + constraintX + constraintW) / 2} y="426" fontFamily="var(--font-mono)" fontSize="11" fill="var(--border)" textAnchor="middle">|</text>
            <line x1="40" y1="440" x2="1160" y2="440" stroke="var(--border)" strokeWidth="1" />
          </g>
        </svg>
      </figure>
    </>
  );
}
