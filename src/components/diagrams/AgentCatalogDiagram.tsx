"use client";

/**
 * AgentCatalogDiagram — Three Registries, One Catalog
 *
 * Three columns showing the three registries as stacked card groups,
 * connected by dependency arrows:
 *
 *   Left   — AGENT REGISTRY: Two agent cards with owner/risk-tier labels.
 *   Centre — SKILL REGISTRY: Three skill cards with version labels.
 *   Right  — TOOL REGISTRY: Two tool cards with data-classification labels.
 *
 * Dependency arrows flow left-to-right: agents -> skills -> tools.
 * Cross-reference lines show which agent uses which skill, which skill
 * calls which tool.
 *
 * Above all three: a header bar "THE CATALOG" spanning full width
 * in var(--accent) — the ONE accent element.
 *
 * IntersectionObserver entrance with staggered CSS transitions.
 * SMIL dots flow along dependency arrow paths when visible.
 * Static arrows at 25% opacity as rails.
 *
 * No gradients, no shadows. Clean structural diagram.
 */

import { useEffect, useRef, useState } from "react";

export function AgentCatalogDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onMotionChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mq.addEventListener("change", onMotionChange);

    const el = figRef.current;
    if (!el) {
      return () => mq.removeEventListener("change", onMotionChange);
    }

    if (mq.matches) {
      setVisible(true);
      return () => mq.removeEventListener("change", onMotionChange);
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      mq.removeEventListener("change", onMotionChange);
    };
  }, []);

  /* ── Layout constants (scaled to 1200-wide viewBox) ──── */
  const svgW = 1200;
  const svgH = 500;
  const colW = 292;
  const colGap = 85;
  const totalColsW = colW * 3 + colGap * 2;
  const startX = (svgW - totalColsW) / 2;

  const colX = [
    startX,
    startX + colW + colGap,
    startX + 2 * (colW + colGap),
  ];

  /* Catalog header bar */
  const headerBarY = 24;
  const headerBarH = 46;

  /* Registry headers */
  const registryHeaderY = headerBarY + headerBarH + 30;

  /* Cards */
  const cardStartY = registryHeaderY + 34;
  const cardH = 86;
  const cardGap = 16;

  function cardY(index: number) {
    return cardStartY + index * (cardH + cardGap);
  }

  function cardCenterY(index: number) {
    return cardY(index) + cardH / 2;
  }

  /* ── Registry data ─────────────────────────────────── */
  const agents = [
    { label: "Fraud Monitor", owner: "risk-team", tier: "high-risk" },
    { label: "Support Drafter", owner: "cx-team", tier: "medium-risk" },
  ];

  const skills = [
    { label: "Transaction Scoring", version: "v2.4.1" },
    { label: "PII Redactor", version: "v1.1.0" },
    { label: "Reply Drafting", version: "v3.0.2" },
  ];

  const tools = [
    { label: "Payment API", classification: "confidential" },
    { label: "Knowledge Base", classification: "internal" },
  ];

  /* ── Cross-reference arrows ────────────────────────── */
  const agentToSkill: Array<{ from: number; to: number }> = [
    { from: 0, to: 0 },
    { from: 0, to: 1 },
    { from: 1, to: 1 },
    { from: 1, to: 2 },
  ];

  const skillToTool: Array<{ from: number; to: number }> = [
    { from: 0, to: 0 },
    { from: 2, to: 1 },
    { from: 1, to: 1 },
  ];

  /* ── Column outline bounds ─────────────────────────── */
  const maxCards = Math.max(agents.length, skills.length, tools.length);
  const colTop = registryHeaderY - 14;
  const colBottom = cardY(maxCards - 1) + cardH + 22;

  /* ── Arrow path helpers ────────────────────────────── */
  function agentToSkillPath(link: { from: number; to: number }) {
    const fromX = colX[0] + colW;
    const toX = colX[1];
    const fromCY = cardCenterY(link.from);
    const toCY = cardCenterY(link.to);
    if (fromCY === toCY) {
      return `M ${fromX + 6} ${fromCY} L ${toX - 8} ${toCY}`;
    }
    const midX = (fromX + toX) / 2;
    return `M ${fromX + 6} ${fromCY} L ${midX} ${fromCY} L ${midX} ${toCY} L ${toX - 8} ${toCY}`;
  }

  function skillToToolPath(link: { from: number; to: number }) {
    const fromX = colX[1] + colW;
    const toX = colX[2];
    const fromCY = cardCenterY(link.from);
    const toCY = cardCenterY(link.to);
    if (fromCY === toCY) {
      return `M ${fromX + 6} ${fromCY} L ${toX - 8} ${toCY}`;
    }
    const midX = (fromX + toX) / 2;
    return `M ${fromX + 6} ${fromCY} L ${midX} ${fromCY} L ${midX} ${toCY} L ${toX - 8} ${toCY}`;
  }

  /* ── Stagger delays for 3 columns ──────────────────── */
  const colDelay = [0, 180, 360]; // ms: agents, skills, tools

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Agent catalog diagram showing three registries — Agent, Skill, and Tool — with cross-reference dependency arrows flowing left to right"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Arrow markers */}
          <marker
            id="acArrow"
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

          <marker
            id="acArrowMuted"
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

          {/* ── Motion paths for SMIL dots ─────────────── */}
          {agentToSkill.map((link, i) => (
            <path
              key={`mp-a2s-${i}`}
              id={`mp-a2s-${i}`}
              d={agentToSkillPath(link)}
            />
          ))}
          {skillToTool.map((link, i) => (
            <path
              key={`mp-s2t-${i}`}
              id={`mp-s2t-${i}`}
              d={skillToToolPath(link)}
            />
          ))}
        </defs>

        {/* ═══════════════════════════════════════════════════
            THE CATALOG — accent header bar
            ═══════════════════════════════════════════════════ */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 600ms ease",
          }}
        >
          <rect
            x={startX - 12}
            y={headerBarY}
            width={totalColsW + 24}
            height={headerBarH}
            rx={6}
            fill="var(--accent)"
          />
          <text
            x={svgW / 2}
            y={headerBarY + headerBarH / 2 + 1}
            fontFamily="var(--font-mono)"
            fontSize="16"
            fontWeight="700"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.12em"
          >
            THE CATALOG
          </text>
        </g>

        {/* ═══════════════════════════════════════════════════
            COLUMN OUTLINES — staggered entrance
            ═══════════════════════════════════════════════════ */}
        {colX.map((x, i) => (
          <rect
            key={`col-outline-${i}`}
            x={x - 12}
            y={colTop}
            width={colW + 24}
            height={colBottom - colTop}
            rx={6}
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            style={{
              opacity: visible ? 0.35 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 500ms ease ${colDelay[i]}ms, transform 500ms ease ${colDelay[i]}ms`,
            }}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            REGISTRY HEADERS — staggered entrance
            ═══════════════════════════════════════════════════ */}
        {["AGENT REGISTRY", "SKILL REGISTRY", "TOOL REGISTRY"].map(
          (title, i) => (
            <g
              key={`reg-header-${i}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 500ms ease ${colDelay[i] + 80}ms, transform 500ms ease ${colDelay[i] + 80}ms`,
              }}
            >
              <text
                x={colX[i] + colW / 2}
                y={registryHeaderY + 6}
                fontFamily="var(--font-mono)"
                fontSize="13"
                fontWeight="600"
                fill="var(--fg-2)"
                textAnchor="middle"
                letterSpacing="0.08em"
              >
                {title}
              </text>
              <line
                x1={colX[i]}
                y1={registryHeaderY + 16}
                x2={colX[i] + colW}
                y2={registryHeaderY + 16}
                stroke="var(--border)"
                strokeWidth="1"
                opacity={0.5}
              />
            </g>
          ),
        )}

        {/* ═══════════════════════════════════════════════════
            AGENT REGISTRY — left column (delay 0)
            ═══════════════════════════════════════════════════ */}
        {agents.map((agent, i) => {
          const x = colX[0];
          const y = cardY(i);
          const delay = colDelay[0] + 150 + i * 80;
          return (
            <g
              key={`agent-${i}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
              }}
            >
              <rect
                x={x}
                y={y}
                width={colW}
                height={cardH}
                rx={6}
                stroke="var(--color-midnight)"
                strokeWidth="1.5"
                fill="var(--bg-surface)"
              />
              <text
                x={x + colW / 2}
                y={y + 32}
                fontFamily="var(--font-display)"
                fontSize="18"
                fontWeight="600"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {agent.label}
              </text>
              <text
                x={x + 14}
                y={y + 62}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-3)"
                letterSpacing="0.04em"
              >
                {agent.owner}
              </text>
              <text
                x={x + colW - 14}
                y={y + 62}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-3)"
                textAnchor="end"
                letterSpacing="0.04em"
              >
                {agent.tier}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            SKILL REGISTRY — centre column (delay 180ms)
            ═══════════════════════════════════════════════════ */}
        {skills.map((skill, i) => {
          const x = colX[1];
          const y = cardY(i);
          const delay = colDelay[1] + 150 + i * 80;
          return (
            <g
              key={`skill-${i}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
              }}
            >
              <rect
                x={x}
                y={y}
                width={colW}
                height={cardH}
                rx={6}
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
              />
              <text
                x={x + colW / 2}
                y={y + 34}
                fontFamily="var(--font-display)"
                fontSize="16"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {skill.label}
              </text>
              <text
                x={x + colW / 2}
                y={y + 62}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {skill.version}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            TOOL REGISTRY — right column (delay 360ms)
            ═══════════════════════════════════════════════════ */}
        {tools.map((tool, i) => {
          const x = colX[2];
          const y = cardY(i);
          const delay = colDelay[2] + 150 + i * 80;
          return (
            <g
              key={`tool-${i}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
              }}
            >
              <rect
                x={x}
                y={y}
                width={colW}
                height={cardH}
                rx={6}
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
              />
              <text
                x={x + colW / 2}
                y={y + 34}
                fontFamily="var(--font-display)"
                fontSize="16"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {tool.label}
              </text>
              <text
                x={x + colW / 2}
                y={y + 62}
                fontFamily="var(--font-mono)"
                fontSize="11"
                fill="var(--fg-3)"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                {tool.classification}
              </text>
            </g>
          );
        })}

        {/* ═══════════════════════════════════════════════════
            STATIC ARROW RAILS: agents -> skills (25% opacity)
            ═══════════════════════════════════════════════════ */}
        {agentToSkill.map((link, i) => (
          <path
            key={`rail-a2s-${i}`}
            d={agentToSkillPath(link)}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="none"
            markerEnd="url(#acArrowMuted)"
            opacity={0.25}
            style={{
              opacity: visible ? 0.25 : 0,
              transition: `opacity 500ms ease ${colDelay[0] + 300}ms`,
            }}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            STATIC ARROW RAILS: skills -> tools (25% opacity)
            ═══════════════════════════════════════════════════ */}
        {skillToTool.map((link, i) => (
          <path
            key={`rail-s2t-${i}`}
            d={skillToToolPath(link)}
            stroke="var(--color-midnight)"
            strokeWidth="1"
            fill="none"
            markerEnd="url(#acArrowMuted)"
            opacity={0.25}
            style={{
              opacity: visible ? 0.25 : 0,
              transition: `opacity 500ms ease ${colDelay[1] + 300}ms`,
            }}
          />
        ))}

        {/* ═══════════════════════════════════════════════════
            ANIMATED DOTS: agents -> skills
            ═══════════════════════════════════════════════════ */}
        {visible &&
          !reducedMotion &&
          agentToSkill.map((_, i) => (
            <circle
              key={`dot-a2s-${i}`}
              r="3.5"
              fill="var(--color-midnight)"
              opacity="0.6"
            >
              <animateMotion
                dur={`${2.2 + i * 0.4}s`}
                repeatCount="indefinite"
                begin={`${i * 0.5}s`}
              >
                <mpath xlinkHref={`#mp-a2s-${i}`} />
              </animateMotion>
            </circle>
          ))}

        {/* ═══════════════════════════════════════════════════
            ANIMATED DOTS: skills -> tools
            ═══════════════════════════════════════════════════ */}
        {visible &&
          !reducedMotion &&
          skillToTool.map((_, i) => (
            <circle
              key={`dot-s2t-${i}`}
              r="3.5"
              fill="var(--color-midnight)"
              opacity="0.6"
            >
              <animateMotion
                dur={`${2.4 + i * 0.3}s`}
                repeatCount="indefinite"
                begin={`${i * 0.6}s`}
              >
                <mpath xlinkHref={`#mp-s2t-${i}`} />
              </animateMotion>
            </circle>
          ))}

        {/* ═══════════════════════════════════════════════════
            BOTTOM ANNOTATION
            ═══════════════════════════════════════════════════ */}
        <text
          x={svgW / 2}
          y={svgH - 20}
          fontFamily="var(--font-mono)"
          fontSize="13"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 600ms ease 500ms",
          }}
        >
          {"agents depend on skills · skills call tools · catalog enforces contracts"}
        </text>
      </svg>
    </figure>
  );
}
