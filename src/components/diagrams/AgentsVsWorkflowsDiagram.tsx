"use client";

/**
 * AgentsVsWorkflowsDiagram — The Autonomy Gradient
 *
 * Three tiers on a horizontal gradient: single model call (left),
 * workflow (centre), agent (right). The axis label is "who decides
 * the next step" — moving from "you, in code" to "the model, at runtime".
 * The workflow box shows a fixed path; the agent box shows a dynamic one.
 *
 * Animated: dots flow along defined SMIL paths when visible.
 * Static flow lines rendered at 25% opacity as rails.
 * Entrance: tier boxes stagger in left-to-right via CSS transitions.
 */

import { useEffect, useRef, useState } from "react";

export function AgentsVsWorkflowsDiagram() {
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

  const dotR = 4;
  const dotFill = "var(--color-midnight)";

  return (
    <figure
      ref={figureRef}
      role="img"
      aria-label="The autonomy gradient: single model call, workflow, and agent — from fixed control flow to model-directed"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* ── Markers ──────────────────────────────────────── */}
          <marker
            id="avwArrow"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="8" markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>
          <marker
            id="avwArrowSm"
            viewBox="0 0 10 10"
            refX="10" refY="5"
            markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 2 L 10 5 L 0 8" fill="none" stroke="var(--color-midnight)" strokeWidth="1.5" />
          </marker>

          {/* ── Animation paths (connector gaps only) ─────────── */}

          {/* Single Call: input bottom edge → model top edge */}
          <path id="avwPathSingle1" d="M 175 172 L 175 200" />
          {/* Single Call: model bottom edge → output top edge */}
          <path id="avwPathSingle2" d="M 175 232 L 175 260" />

          {/* Workflow: classify right edge → route left edge */}
          <path id="avwPathWf1" d="M 490 154 L 542 154" />
          {/* Workflow: route bottom edge → branch → refund top edge */}
          <path id="avwPathWf2" d="M 582 168 L 582 190 L 480 190 L 480 210" />
          {/* Workflow: route bottom edge → branch → escalate top edge */}
          <path id="avwPathWf3" d="M 582 168 L 582 190 L 640 190 L 640 210" />
          {/* Workflow: refund bottom edge → converge → send top edge */}
          <path id="avwPathWf4" d="M 480 238 L 480 260 L 560 260 L 560 280" />
          {/* Workflow: escalate bottom edge → converge → send top edge */}
          <path id="avwPathWf5" d="M 640 238 L 640 260 L 560 260 L 560 280" />

          {/* Agent: think bottom edge → act top edge */}
          <path id="avwPathAg1" d="M 890 170 L 890 212" />
          {/* Agent: act bottom edge → observe top edge */}
          <path id="avwPathAg2" d="M 890 242 L 890 282" />
          {/* Agent: loop-back — observe left edge → up → think left edge */}
          <path
            id="avwPathAgLoop"
            d="M 845 297 L 798 297 L 798 155 L 845 155"
          />
        </defs>

        {/* ── Gradient axis ─────────────────────────────────── */}
        <line
          x1="80" y1="360" x2="1120" y2="360"
          stroke="var(--color-midnight)"
          strokeWidth="1.5"
          markerEnd="url(#avwArrow)"
        />
        <text
          x="80" y="386"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          letterSpacing="0.08em"
        >
          you decide, in code
        </text>
        <text
          x="1120" y="386"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--fg-3)"
          textAnchor="end"
          letterSpacing="0.08em"
        >
          the model decides, at runtime
        </text>
        <text
          x="600" y="386"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="var(--color-midnight)"
          textAnchor="middle"
          fontWeight="600"
          letterSpacing="0.14em"
        >
          AUTONOMY
        </text>

        {/* ═══════════════════════════════════════════════════ */}
        {/* ── Tier 1: Single Call ─────────────────────────── */}
        {/* ═══════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "0s",
          }}
        >
          <rect
            x="60" y="60" width="230" height="275" rx="4"
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
          />
          <text
            x="175" y="92"
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Single Call
          </text>
          <text
            x="175" y="112"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            one step, one model
          </text>

          {/* input */}
          <rect x="125" y="140" width="100" height="32" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
          <text x="175" y="161" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg-2)" textAnchor="middle">input</text>

          {/* Static rail: input → model */}
          <line x1="175" y1="172" x2="175" y2="198" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />

          {/* model */}
          <rect x="125" y="200" width="100" height="32" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1.5" />
          <text x="175" y="221" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600">model</text>

          {/* Static rail: model → output */}
          <line x1="175" y1="232" x2="175" y2="258" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />

          {/* output */}
          <rect x="125" y="260" width="100" height="32" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
          <text x="175" y="281" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg-2)" textAnchor="middle">output</text>

          {/* Animated dots — connector gaps only */}
          {visible && !reducedMotion && (
            <>
              {/* Dot: input → model */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="1.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#avwPathSingle1" />
                </animateMotion>
              </circle>
              {/* Dot: model → output */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="1.2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin="0.6s"
                >
                  <mpath href="#avwPathSingle2" />
                </animateMotion>
              </circle>
            </>
          )}
        </g>

        {/* ═══════════════════════════════════════════════════ */}
        {/* ── Tier 2: Workflow ────────────────────────────── */}
        {/* ═══════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "0.15s",
          }}
        >
          <rect
            x="350" y="60" width="340" height="275" rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
          />
          <text
            x="520" y="92"
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Workflow
          </text>
          <text
            x="520" y="112"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            fixed path, predefined in code
          </text>

          {/* classify → route row */}
          <rect x="410" y="140" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1" />
          <text x="450" y="159" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle">classify</text>

          {/* Static rail: classify → route */}
          <line x1="490" y1="154" x2="540" y2="154" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />

          <rect x="542" y="140" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1" />
          <text x="582" y="159" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle">route</text>

          {/* Route branching down */}
          <line x1="582" y1="168" x2="582" y2="190" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" />
          <line x1="480" y1="190" x2="640" y2="190" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" />

          {/* Branch A: refund */}
          <line x1="480" y1="190" x2="480" y2="208" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />
          <rect x="440" y="210" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
          <text x="480" y="229" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-2)" textAnchor="middle">refund</text>

          {/* Branch B: escalate */}
          <line x1="640" y1="190" x2="640" y2="208" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />
          <rect x="600" y="210" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
          <text x="640" y="229" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-2)" textAnchor="middle">escalate</text>

          {/* Converge to send */}
          <line x1="480" y1="238" x2="480" y2="260" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" />
          <line x1="640" y1="238" x2="640" y2="260" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" />
          <line x1="480" y1="260" x2="640" y2="260" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" />
          <line x1="560" y1="260" x2="560" y2="278" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />
          <rect x="520" y="280" width="80" height="28" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1" />
          <text x="560" y="299" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600">send</text>

          {/* Animated dots — connector gaps only */}
          {visible && !reducedMotion && (
            <>
              {/* Dot: classify → route */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="1.4s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#avwPathWf1" />
                </animateMotion>
              </circle>
              {/* Dot: route → refund (left branch) */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin="0.4s"
                >
                  <mpath href="#avwPathWf2" />
                </animateMotion>
              </circle>
              {/* Dot: route → escalate (right branch) */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin="1.2s"
                >
                  <mpath href="#avwPathWf3" />
                </animateMotion>
              </circle>
              {/* Dot: refund → send */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin="0.8s"
                >
                  <mpath href="#avwPathWf4" />
                </animateMotion>
              </circle>
              {/* Dot: escalate → send */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin="1.6s"
                >
                  <mpath href="#avwPathWf5" />
                </animateMotion>
              </circle>
            </>
          )}
        </g>

        {/* ═══════════════════════════════════════════════════ */}
        {/* ── Tier 3: Agent ──────────────────────────────── */}
        {/* ═══════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: "0.3s",
          }}
        >
          <rect
            x="750" y="60" width="280" height="275" rx="4"
            stroke="var(--color-midnight)"
            strokeWidth="2"
            fill="none"
          />
          <text
            x="890" y="92"
            fontFamily="var(--font-display)"
            fontSize="16"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            Agent
          </text>
          <text
            x="890" y="112"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            dynamic path, model-directed
          </text>

          {/* think */}
          <rect x="845" y="140" width="90" height="30" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1.5" />
          <text x="890" y="160" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-midnight)" textAnchor="middle" fontWeight="600">think</text>

          {/* Static rail: think → act (straight down) */}
          <line x1="890" y1="170" x2="890" y2="212" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />

          {/* act */}
          <rect x="845" y="212" width="90" height="30" rx="3" fill="var(--bg-surface)" stroke="var(--color-midnight)" strokeWidth="1" />
          <text x="890" y="232" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-midnight)" textAnchor="middle">act</text>

          {/* Static rail: act → observe (straight down) */}
          <line x1="890" y1="242" x2="890" y2="282" stroke="var(--color-midnight)" strokeWidth="1" opacity="0.25" markerEnd="url(#avwArrowSm)" />

          {/* observe */}
          <rect x="845" y="282" width="90" height="30" rx="3" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
          <text x="890" y="302" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg-2)" textAnchor="middle">observe</text>

          {/* Static dashed loop-back rail: observe left → up → think left */}
          <path
            d="M 845 297 L 798 297 L 798 155 L 845 155"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 3"
            opacity="0.25"
                     />
          <text
            x="790" y="228"
            fontFamily="var(--font-mono)"
            fontSize="8"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
            transform="rotate(-90 790 228)"
          >
            loop
          </text>

          {/* Animated dots — connector gaps only */}
          {visible && !reducedMotion && (
            <>
              {/* Dot: think → act */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="1.4s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#avwPathAg1" />
                </animateMotion>
              </circle>
              {/* Dot: act → observe */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="1.4s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin="0.5s"
                >
                  <mpath href="#avwPathAg2" />
                </animateMotion>
              </circle>
              {/* Dot: loop-back (observe → think) */}
              <circle r={dotR} fill={dotFill} opacity="0.8">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin="1s"
                >
                  <mpath href="#avwPathAgLoop" />
                </animateMotion>
              </circle>
            </>
          )}
        </g>
      </svg>
    </figure>
  );
}
