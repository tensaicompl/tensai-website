/**
 * HarnessDiagram — Agent = Model + Harness
 *
 * Control loop: model at the centre, harness as the enclosing frame,
 * guides feeding in from the left, sensors reading out on the right,
 * and a feedback-loop arrow from sensors back to guides (the focal element).
 *
 * Monochrome on the midnight/gray scale. The single permitted accent
 * is the feedback-loop arrow.
 *
 * Animated: flowing dots along connector paths (SMIL), staggered
 * fade+slide entrance via IntersectionObserver + CSS transitions.
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function HarnessDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", motionHandler);
    return () => mql.removeEventListener("change", motionHandler);
  }, []);

  useEffect(() => {
    const el = figRef.current;
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

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Agent architecture: Model at the centre, Harness frame around it with Guides feeding in and Sensors reading out, connected by a feedback loop"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      {/* Entrance transition styles */}
      <style>{`
        .harness-enter {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .harness-enter.harness-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .harness-d1 { transition-delay: 0s; }
        .harness-d2 { transition-delay: 0.12s; }
        .harness-d3 { transition-delay: 0.24s; }
        .harness-d4 { transition-delay: 0.36s; }
        .harness-d5 { transition-delay: 0.48s; }
        .harness-d6 { transition-delay: 0.60s; }
        .harness-d7 { transition-delay: 0.72s; }
      `}</style>

      <svg
        viewBox="0 0 1200 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Definitions ─────────────────────────────────── */}
        <defs>
          {/* Arrowhead marker */}
          <marker
            id="arrowMid"
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 10 5 L 0 9"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Invisible motion paths for flowing dots */}
          {/* Path: Guides box right edge → Model box left edge */}
          <path id="flowGuidesToModel" d="M 354 185 L 455 185" />

          {/* Path: Model box right edge → Sensors box left edge */}
          <path id="flowModelToSensors" d="M 740 185 L 840 185" />

          {/* Path: Feedback loop arc — Sensors bottom → around bottom → up into Guides */}
          <path
            id="flowFeedback"
            d="M 960 270 L 960 380 Q 960 400 940 400 L 260 400 Q 240 400 240 380 L 240 270"
          />
        </defs>

        {/* ── Harness frame ───────────────────────────────── */}
        <g
          className={`harness-enter harness-d1 ${visible ? "harness-visible" : ""}`}
        >
          <rect
            x="60"
            y="40"
            width="1080"
            height="310"
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="80"
            y="30"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="0.18em"
            fill="var(--fg-3)"
          >
            HARNESS
          </text>
        </g>

        {/* ── Axis labels ─────────────────────────────────── */}
        <g
          className={`harness-enter harness-d2 ${visible ? "harness-visible" : ""}`}
        >
          <text
            x="240"
            y="80"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            before the model acts
          </text>
          <text
            x="960"
            y="80"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            after the model acts
          </text>
        </g>

        {/* ── Guides (left side) ──────────────────────────── */}
        <g
          className={`harness-enter harness-d3 ${visible ? "harness-visible" : ""}`}
        >
          <rect
            x="110"
            y="100"
            width="244"
            height="170"
            rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 3"
            fill="none"
          />
          <text
            x="232"
            y="133"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Guides
          </text>
          <text
            x="232"
            y="151"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            feedforward
          </text>

          {/* Guide items */}
          {[
            { label: "System prompts", y: 175 },
            { label: "Tool definitions", y: 193 },
            { label: "Context retrieval", y: 211 },
            { label: "AGENTS.md", y: 229 },
          ].map((item) => (
            <text
              key={item.label}
              x="140"
              y={item.y}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="var(--fg-2)"
              letterSpacing="0.02em"
            >
              · {item.label}
            </text>
          ))}
        </g>

        {/* ── Model box (centre) ──────────────────────────── */}
        <g
          className={`harness-enter harness-d4 ${visible ? "harness-visible" : ""}`}
        >
          <rect
            x="460"
            y="130"
            width="280"
            height="110"
            rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="var(--bg-surface)"
          />
          <text
            x="600"
            y="178"
            fontFamily="var(--font-display)"
            fontSize="18"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Model
          </text>
          <text
            x="600"
            y="205"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--fg-3)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.06em"
          >
            reasoning core
          </text>
        </g>

        {/* ── Sensors (right side) ────────────────────────── */}
        <g
          className={`harness-enter harness-d5 ${visible ? "harness-visible" : ""}`}
        >
          <rect
            x="846"
            y="100"
            width="244"
            height="170"
            rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 3"
            fill="none"
          />
          <text
            x="968"
            y="133"
            fontFamily="var(--font-display)"
            fontSize="14"
            fontWeight="600"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Sensors
          </text>
          <text
            x="968"
            y="151"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            feedback
          </text>

          {/* Sensor items */}
          {[
            { label: "Type checkers", y: 175 },
            { label: "Schema validators", y: 193 },
            { label: "Linters", y: 211 },
            { label: "Evaluator models", y: 229 },
          ].map((item) => (
            <text
              key={item.label}
              x="876"
              y={item.y}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="var(--fg-2)"
              letterSpacing="0.02em"
            >
              · {item.label}
            </text>
          ))}
        </g>

        {/* ── Static connector rails (~25% opacity) ───────── */}
        <g
          className={`harness-enter harness-d6 ${visible ? "harness-visible" : ""}`}
        >
          {/* Rail: Guides → Model */}
          <line
            x1="354"
            y1="185"
            x2="455"
            y2="185"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            opacity="0.25"
            markerEnd="url(#arrowMid)"
          />

          {/* Rail: Model → Sensors */}
          <line
            x1="740"
            y1="185"
            x2="841"
            y2="185"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            opacity="0.25"
            markerEnd="url(#arrowMid)"
          />

          {/* Rail: Feedback loop arc */}
          <path
            d="M 960 270 L 960 380 Q 960 400 940 400 L 260 400 Q 240 400 240 380 L 240 270"
            stroke="var(--color-midnight)"
            strokeWidth="2"
            fill="none"
            opacity="0.25"
          />
          {/* Upward arrowhead at end of feedback loop */}
          <polyline
            points="233,280 240,264 247,280"
            stroke="var(--color-midnight)"
            strokeWidth="2"
            fill="none"
            strokeLinejoin="miter"
            opacity="0.25"
          />
        </g>

        {/* ── Feedback loop label ──────────────────────────── */}
        <g
          className={`harness-enter harness-d7 ${visible ? "harness-visible" : ""}`}
        >
          <text
            x="600"
            y="420"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.14em"
            fontWeight="600"
          >
            FEEDBACK LOOP
          </text>
        </g>

        {/* ── Flowing dots (rendered only when visible) ────── */}
        {visible && !reducedMotion && (
          <g>
            {/* Dot: Guides → Model */}
            <circle r="4" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href="#flowGuidesToModel" />
              </animateMotion>
            </circle>

            {/* Dot: Model → Sensors */}
            <circle r="4" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin="0.6s"
              >
                <mpath href="#flowModelToSensors" />
              </animateMotion>
            </circle>

            {/* Dot: Feedback loop arc (Sensors → Guides) */}
            <circle r="4" fill="var(--color-midnight)" opacity="0.8">
              <animateMotion
                dur="3.5s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
                begin="1.2s"
              >
                <mpath href="#flowFeedback" />
              </animateMotion>
            </circle>
          </g>
        )}
      </svg>
    </figure>
  );
}
