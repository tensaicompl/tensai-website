"use client";

/**
 * SkillsDiagram — The Skill Contract
 *
 * Centre: large rounded rect "SKILL" with five stacked compartments:
 *   1. Manifest (name, version, description)
 *   2. Entry point (step-by-step instructions)
 *   3. Resource bundle (references, scripts)
 *   4. Governance (owner, risk tier, audit date) — accent border
 *   5. Interface (inputs, outputs, triggers)
 *
 * Left: "Registry" box with "discover" arrow pointing into the skill.
 * Right: "Agent" box with "invoke" arrow pointing into the skill.
 * Bottom: dashed "progressive disclosure" arrow showing on-demand loading.
 *
 * ONE accent: Governance compartment border uses var(--accent).
 * No gradients, no shadows. Clean structural diagram.
 *
 * IntersectionObserver triggers entrance + SMIL animations at 20% visibility.
 * CSS transitions: compartments reveal top-to-bottom staggered, then
 * Registry fades in from left, Agent fades in from right.
 * SMIL dots flow along discover, invoke, and progressive-disclosure paths.
 * Respects prefers-reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

export function SkillsDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

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

  /* ── Layout constants ──────────────────────────────── */
  const svgW = 1200;
  const svgH = 580;

  /* Central skill block */
  const skillW = 460;
  const skillH = 440;
  const skillX = (svgW - skillW) / 2;
  const skillY = 30;

  /* Compartment layout */
  const compPadX = 18;
  const compW = skillW - compPadX * 2;
  const compH = 64;
  const compGap = 9;
  const headerH = 50;
  const compStartY = skillY + headerH + 12;

  /* Side boxes */
  const sideW = 180;
  const sideH = 80;
  const sideLeftX = 50;
  const sideRightX = svgW - sideW - 50;
  const sideCenterY = skillY + skillH / 2;

  /* Compartment data */
  const compartments = [
    { title: "Manifest", sub: "name, version, description", accent: false },
    { title: "Entry point", sub: "step-by-step instructions", accent: false },
    { title: "Resource bundle", sub: "references, scripts", accent: false },
    { title: "Governance", sub: "owner, risk tier, audit date", accent: true },
    { title: "Interface", sub: "inputs, outputs, triggers", accent: false },
  ];

  function compY(i: number) {
    return compStartY + i * (compH + compGap);
  }

  /* Bottom arrow */
  const bottomArrowY = skillY + skillH + 44;

  /* Arrow connection points */
  const discoverStartX = sideLeftX + sideW + 8;
  const discoverEndX = skillX - 10;
  const invokeStartX = sideRightX - 8;
  const invokeEndX = skillX + skillW + 10;
  const bottomArrowStartX = skillX + 60;
  const bottomArrowEndX = skillX + skillW - 60;

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="The Skill Contract: a central skill block with five compartments — Manifest, Entry point, Resource bundle, Governance, and Interface — flanked by Registry and Agent boxes connected by discover and invoke arrows, with a progressive disclosure annotation below"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* ── Entrance transition styles ─────────────────── */}
      <style>{`
        .skill-enter {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .skill-enter.skill-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .skill-enter-left {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .skill-enter-left.skill-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .skill-enter-right {
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .skill-enter-right.skill-visible {
          opacity: 1;
          transform: translateX(0);
        }
        .skill-d1  { transition-delay: 0s; }
        .skill-d2  { transition-delay: 0.10s; }
        .skill-d3  { transition-delay: 0.20s; }
        .skill-d4  { transition-delay: 0.30s; }
        .skill-d5  { transition-delay: 0.40s; }
        .skill-d6  { transition-delay: 0.50s; }
        .skill-d7  { transition-delay: 0.60s; }
        .skill-d8  { transition-delay: 0.70s; }
        .skill-d9  { transition-delay: 0.80s; }
        .skill-d10 { transition-delay: 0.90s; }
        .skill-d11 { transition-delay: 1.00s; }
      `}</style>

      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Solid arrow marker */}
          <marker
            id="skArrow"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1.5 L 10 5 L 0 8.5"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Dashed arrow marker (muted) */}
          <marker
            id="skArrowMuted"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1.5 L 10 5 L 0 8.5"
              fill="none"
              stroke="var(--fg-2)"
              strokeWidth="1.5"
            />
          </marker>

          {/* ── Motion paths for SMIL flowing dots ──────── */}

          {/* Path: Registry → Skill ("discover") */}
          <path
            id="flowDiscover"
            d={`M ${discoverStartX} ${sideCenterY} L ${discoverEndX} ${sideCenterY}`}
          />

          {/* Path: Agent → Skill ("invoke") — right to left */}
          <path
            id="flowInvoke"
            d={`M ${invokeStartX} ${sideCenterY} L ${invokeEndX} ${sideCenterY}`}
          />

          {/* Path: Progressive disclosure — left to right along bottom */}
          <path
            id="flowDisclosure"
            d={`M ${bottomArrowStartX} ${bottomArrowY} L ${bottomArrowEndX} ${bottomArrowY}`}
          />
        </defs>

        {/* ═══════════════════════════════════════════════════
            CENTRAL SKILL BLOCK — outer container
            ═══════════════════════════════════════════════════ */}
        <g
          className={`skill-enter skill-d1 ${visible ? "skill-visible" : ""}`}
        >
          <rect
            x={skillX}
            y={skillY}
            width={skillW}
            height={skillH}
            rx={6}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />

          {/* SKILL title */}
          <text
            x={skillX + skillW / 2}
            y={skillY + headerH / 2 + 7}
            fontFamily="var(--font-display)"
            fontSize="20"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.06em"
          >
            SKILL
          </text>

          {/* Header divider */}
          <line
            x1={skillX + compPadX}
            y1={skillY + headerH}
            x2={skillX + skillW - compPadX}
            y2={skillY + headerH}
            stroke="var(--border)"
            strokeWidth="1"
          />
        </g>

        {/* ═══════════════════════════════════════════════════
            FIVE COMPARTMENTS — staggered top-to-bottom
            ═══════════════════════════════════════════════════ */}
        {compartments.map((comp, i) => {
          const x = skillX + compPadX;
          const y = compY(i);
          const isAccent = comp.accent;
          // d2 through d6: one delay step per compartment
          const delayClass = `skill-d${i + 2}`;

          return (
            <g
              key={`comp-${i}`}
              className={`skill-enter ${delayClass} ${visible ? "skill-visible" : ""}`}
            >
              <rect
                x={x}
                y={y}
                width={compW}
                height={compH}
                rx={3}
                stroke={isAccent ? "var(--accent)" : "var(--color-midnight)"}
                strokeWidth={isAccent ? 1.5 : 1}
                fill="none"
              />
              <text
                x={x + 16}
                y={y + 25}
                fontFamily="var(--font-display)"
                fontSize="14"
                fontWeight="600"
                fill={isAccent ? "var(--accent)" : "var(--color-midnight)"}
              >
                {comp.title}
              </text>
              <text
                x={x + 16}
                y={y + 48}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-3)"
                letterSpacing="0.02em"
              >
                {comp.sub}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            LEFT — Registry box (slides in from left)
            ═══════════════════════════════════════════════════ */}
        <g
          className={`skill-enter-left skill-d8 ${visible ? "skill-visible" : ""}`}
        >
          <rect
            x={sideLeftX}
            y={sideCenterY - sideH / 2}
            width={sideW}
            height={sideH}
            rx={4}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x={sideLeftX + sideW / 2}
            y={sideCenterY + 6}
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Registry
          </text>
        </g>

        {/* Arrow rail: Registry -> SKILL ("discover") */}
        <g
          className={`skill-enter-left skill-d9 ${visible ? "skill-visible" : ""}`}
        >
          <line
            x1={discoverStartX}
            y1={sideCenterY}
            x2={discoverEndX}
            y2={sideCenterY}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            opacity="0.25"
            markerEnd="url(#skArrow)"
          />

          {/* "discover" label */}
          <text
            x={(discoverStartX + discoverEndX) / 2}
            y={sideCenterY - 14}
            fontFamily="var(--font-mono)"
            fontSize="12"
            fontWeight="500"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            discover
          </text>
        </g>

        {/* ═══════════════════════════════════════════════════
            RIGHT — Agent box (slides in from right)
            ═══════════════════════════════════════════════════ */}
        <g
          className={`skill-enter-right skill-d8 ${visible ? "skill-visible" : ""}`}
        >
          <rect
            x={sideRightX}
            y={sideCenterY - sideH / 2}
            width={sideW}
            height={sideH}
            rx={4}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x={sideRightX + sideW / 2}
            y={sideCenterY + 6}
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Agent
          </text>
        </g>

        {/* Arrow rail: Agent -> SKILL ("invoke") — drawn right to left */}
        <g
          className={`skill-enter-right skill-d9 ${visible ? "skill-visible" : ""}`}
        >
          <line
            x1={invokeStartX}
            y1={sideCenterY}
            x2={invokeEndX}
            y2={sideCenterY}
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            opacity="0.25"
            markerStart="url(#skArrow)"
          />

          {/* "invoke" label */}
          <text
            x={(invokeStartX + invokeEndX) / 2}
            y={sideCenterY - 14}
            fontFamily="var(--font-mono)"
            fontSize="12"
            fontWeight="500"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            invoke
          </text>
        </g>

        {/* ═══════════════════════════════════════════════════
            BOTTOM — Progressive disclosure (dashed arrow)
            ═══════════════════════════════════════════════════ */}
        <g
          className={`skill-enter skill-d10 ${visible ? "skill-visible" : ""}`}
        >
          {/* Dashed horizontal line spanning below the skill block */}
          <line
            x1={bottomArrowStartX}
            y1={bottomArrowY}
            x2={bottomArrowEndX}
            y2={bottomArrowY}
            stroke="var(--fg-2)"
            strokeWidth="1"
            strokeDasharray="6 4"
            opacity="0.25"
            markerEnd="url(#skArrowMuted)"
          />

          {/* "progressive disclosure" label */}
          <text
            x={skillX + skillW / 2}
            y={bottomArrowY - 14}
            fontFamily="var(--font-mono)"
            fontSize="12"
            fontWeight="500"
            fill="var(--fg-2)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            progressive disclosure
          </text>
        </g>

        {/* Sub-annotation */}
        <g
          className={`skill-enter skill-d11 ${visible ? "skill-visible" : ""}`}
        >
          <text
            x={skillX + skillW / 2}
            y={bottomArrowY + 26}
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.02em"
          >
            resources load on demand
          </text>
        </g>

        {/* ═══════════════════════════════════════════════════
            FLOWING DOTS (SMIL) — rendered only when visible
            ═══════════════════════════════════════════════════ */}
        {visible && (
          <g>
            {/* Dot: Registry -> Skill ("discover") */}
            <circle r="4" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#flowDiscover" />
              </animateMotion>
            </circle>

            {/* Dot: Agent -> Skill ("invoke") */}
            <circle r="4" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin="0.7s"
              >
                <mpath href="#flowInvoke" />
              </animateMotion>
            </circle>

            {/* Dot: Progressive disclosure — intermittent (long pause between runs) */}
            <circle r="3" fill="var(--fg-2)" opacity="0.6">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                keyPoints="0;0.4;0.4;1"
                keyTimes="0;0.3;0.6;1"
                calcMode="linear"
                begin="1.2s"
              >
                <mpath href="#flowDisclosure" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>
    </figure>
  );
}
