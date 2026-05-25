"use client";

import { useEffect, useRef, useState } from "react";

export function SpineDiagram() {
  const figureRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mql.matches);
    const motionHandler = (e: MediaQueryListEvent) =>
      setReduceMotion(e.matches);
    mql.addEventListener("change", motionHandler);

    if (mql.matches) {
      setVisible(true);
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (figureRef.current) {
        observer.observe(figureRef.current);
      }

      return () => {
        mql.removeEventListener("change", motionHandler);
        observer.disconnect();
      };
    }

    return () => {
      mql.removeEventListener("change", motionHandler);
    };
  }, []);

  const concepts = [
    { n: "01", label: "Model" },
    { n: "02", label: "Harness" },
    { n: "03", label: "Tools" },
    { n: "04", label: "Ctx Eng" },
    { n: "05", label: "Ctx Mgmt" },
    { n: "06", label: "Memory" },
    { n: "07", label: "RAG" },
    { n: "08", label: "Skills" },
    { n: "09", label: "Workflows" },
    { n: "10", label: "Agents" },
    { n: "11", label: "Handoffs" },
    { n: "12", label: "Multi-Agent" },
    { n: "13", label: "Steering" },
    { n: "14", label: "Evals" },
    { n: "15", label: "Guardrails" },
    { n: "16", label: "AFK" },
    { n: "17", label: "Code Index" },
    { n: "18", label: "Standards" },
  ];

  const rows = [
    {
      pillar: "I",
      name: "The Groundwork",
      concepts: concepts.slice(0, 6),
    },
    {
      pillar: "II",
      name: "The Operating Model",
      concepts: concepts.slice(6, 12),
    },
    {
      pillar: "III",
      name: "The Craft",
      concepts: concepts.slice(12, 18),
    },
  ];

  const svgW = 1200;
  const cardW = 130;
  const cardH = 52;
  const cardRx = 6;
  const cols = 6;
  const cardGap = 22;
  const rowGap = 100;
  const topPad = 60;
  const pillarLabelW = 100;

  const totalCardsW = cols * cardW + (cols - 1) * cardGap;
  const offsetX = (svgW - totalCardsW - pillarLabelW) / 2 + pillarLabelW;

  const cardXPos = (col: number) => offsetX + col * (cardW + cardGap);
  const rowY = (row: number) => topPad + row * (cardH + rowGap);

  const centerX = svgW / 2;
  const svgH = topPad + 3 * cardH + 2 * rowGap + 80;

  const labelX = offsetX - 56;
  const rowDelay = (ri: number) => 0.15 + ri * 0.25;

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="The 18-Concept Spine Map — 18 AI concepts arranged in three rows by pillar"
      style={{
        margin: 0,
        width: "100%",
        marginInline: "auto",
      }}
    >
      <style>{`
        .spine-row {
          opacity: ${visible ? 1 : 0};
          transform: translateY(${visible ? "0" : "12px"});
        }
        ${reduceMotion ? `
        .spine-row,
        .spine-label-top,
        .spine-caption { transition: none; }
        ` : [0, 1, 2]
          .map(
            (ri) => `
        .spine-row--${ri} {
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${rowDelay(ri)}s,
                      transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${rowDelay(ri)}s;
        }`
          )
          .join("")}
        .spine-row--hidden {
          opacity: 0;
          transform: translateY(12px);
        }
        .spine-label-top,
        .spine-caption {
          opacity: ${visible ? 1 : 0};
          ${reduceMotion ? "" : "transition: opacity 0.5s ease 0s;"}
        }
        .spine-label-top--hidden,
        .spine-caption--hidden {
          opacity: 0;
        }
      `}</style>

      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Title */}
        <text
          x={centerX}
          y={28}
          fontFamily="var(--font-display)"
          fontSize="18"
          fontWeight="600"
          fill="var(--color-midnight)"
          textAnchor="middle"
          letterSpacing="0.04em"
          className={`spine-label-top${visible ? "" : " spine-label-top--hidden"}`}
        >
          The 18-Concept Spine
        </text>

        {/* Rows */}
        {rows.map((row, ri) => {
          const y = rowY(ri);

          return (
            <g
              key={row.pillar}
              className={`spine-row spine-row--${ri}${visible ? "" : " spine-row--hidden"}`}
            >
              {/* Pillar numeral */}
              <text
                x={labelX}
                y={y + cardH / 2}
                fontFamily="var(--font-display)"
                fontSize="15"
                fontWeight="700"
                fill="var(--color-midnight)"
                textAnchor="end"
                dominantBaseline="middle"
              >
                {row.pillar}
              </text>

              {/* Pillar name */}
              <text
                x={labelX}
                y={y + cardH / 2 + 17}
                fontFamily="var(--font-mono)"
                fontSize="9"
                fill="var(--fg-3)"
                textAnchor="end"
                letterSpacing="0.04em"
              >
                {row.name}
              </text>

              {/* Horizontal connector line */}
              <line
                x1={cardXPos(0) + cardW / 2}
                y1={y + cardH / 2}
                x2={cardXPos(5) + cardW / 2}
                y2={y + cardH / 2}
                stroke="var(--border)"
                strokeWidth="1"
              />

              {/* Concept cards */}
              {row.concepts.map((concept, ci) => {
                const cx = cardXPos(ci);
                const cy = y;

                return (
                  <g key={concept.n}>
                    <rect
                      x={cx}
                      y={cy}
                      width={cardW}
                      height={cardH}
                      rx={cardRx}
                      stroke="var(--border)"
                      strokeWidth="1"
                      fill="var(--bg-surface)"
                    />
                    <text
                      x={cx + 12}
                      y={cy + 19}
                      fontFamily="var(--font-mono)"
                      fontSize="10"
                      fill="var(--fg-3)"
                      letterSpacing="0.06em"
                    >
                      {concept.n}
                    </text>
                    <text
                      x={cx + 12}
                      y={cy + 37}
                      fontFamily="var(--font-mono)"
                      fontSize="11"
                      fill="var(--color-midnight)"
                      letterSpacing="0.02em"
                      fontWeight="500"
                    >
                      {concept.label}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* Bottom caption */}
        <text
          x={centerX}
          y={svgH - 14}
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.04em"
          className={`spine-caption${visible ? "" : " spine-caption--hidden"}`}
        >
          18 concepts. 3 pillars. One spine.
        </text>
      </svg>
    </figure>
  );
}
