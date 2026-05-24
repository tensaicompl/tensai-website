"use client";

/**
 * CoeEnablementDiagram — Hub-and-Spoke CoE Model
 *
 * Centre: rounded rect labelled "CoE" with accent border,
 * containing three stacked labels: Standards, Reviews, Enablement.
 *
 * Five spoke lines radiate outward to team boxes:
 * Product Team A, Product Team B, Data Science, Platform, Compliance.
 * Bidirectional arrows on each spoke.
 *
 * Left annotation: "Governance out" (CoE -> teams).
 * Right annotation: "Capability in" (teams -> CoE).
 *
 * Bottom contrast strip: "Federated" model as a flat row of
 * peer boxes with no hub, labelled "no centre, slower convergence".
 *
 * ONE accent: the CoE centre box border uses var(--accent).
 * No gradients, no shadows. Clean structural diagram.
 *
 * Animations:
 * - IntersectionObserver entrance (20% threshold, respects prefers-reduced-motion)
 * - Hub appears first, then spokes draw outward staggered, then team boxes fade in
 * - Dots flow bidirectionally on spoke lines via SMIL animateMotion
 * - Static spoke rails at 25% opacity underneath
 */

import { useEffect, useRef, useState } from "react";

export function CoeEnablementDiagram() {
  /* ── Visibility / intersection ────────────────────── */
  const figRef = useRef<HTMLElement>(null);
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

  /* ── Layout constants (1200-wide viewBox) ─────────── */
  const svgW = 1200;
  const svgH = 554;

  /* Centre hub */
  const hubCx = svgW / 2;
  const hubCy = 200;
  const hubW = 184;
  const hubH = 123;

  /* Spoke team boxes */
  const teamW = 169;
  const teamH = 49;

  /* Teams positioned around the hub */
  const teams: Array<{ label: string; x: number; y: number }> = [
    { label: "Product Team A", x: hubCx - 385, y: hubCy - 77 },
    { label: "Product Team B", x: hubCx - 354, y: hubCy + 92 },
    { label: "Data Science", x: hubCx, y: hubCy - 139 - teamH / 2 },
    { label: "Platform", x: hubCx + 354, y: hubCy - 77 },
    { label: "Compliance", x: hubCx + 385, y: hubCy + 92 },
  ];

  /* Hub inner labels */
  const hubLabels = ["Standards", "Reviews", "Enablement"];

  /* Federated model (bottom strip) */
  const fedY = 446;
  const fedBoxW = 138;
  const fedBoxH = 43;
  const fedGap = 25;
  const fedCount = 5;
  const fedTotalW = fedCount * fedBoxW + (fedCount - 1) * fedGap;
  const fedStartX = (svgW - fedTotalW) / 2;

  /* ── Arrow endpoint helpers ────────────────────────── */
  function hubEdgePoint(tx: number, ty: number): { x: number; y: number } {
    const dx = tx - hubCx;
    const dy = ty - hubCy;
    const halfW = hubW / 2;
    const halfH = hubH / 2;

    const scaleX = Math.abs(dx) > 0 ? halfW / Math.abs(dx) : Infinity;
    const scaleY = Math.abs(dy) > 0 ? halfH / Math.abs(dy) : Infinity;
    const scale = Math.min(scaleX, scaleY);

    return { x: hubCx + dx * scale, y: hubCy + dy * scale };
  }

  function teamEdgePoint(
    teamCx: number,
    teamCy: number,
    targetX: number,
    targetY: number
  ): { x: number; y: number } {
    const dx = targetX - teamCx;
    const dy = targetY - teamCy;
    const halfW = teamW / 2;
    const halfH = teamH / 2;

    const scaleX = Math.abs(dx) > 0 ? halfW / Math.abs(dx) : Infinity;
    const scaleY = Math.abs(dy) > 0 ? halfH / Math.abs(dy) : Infinity;
    const scale = Math.min(scaleX, scaleY);

    return { x: teamCx + dx * scale, y: teamCy + dy * scale };
  }

  /* ── Animation timing ─────────────────────────────── */
  const hubDelay = 0; // hub appears immediately
  const spokeBaseDelay = 0.35; // spokes start drawing after hub
  const spokeStagger = 0.12; // each spoke staggered
  const teamBaseDelay = 0.7; // teams fade in after spokes begin
  const teamStagger = 0.1;
  const entranceDuration = 0.5;
  const spokeDrawDuration = 0.4;

  /* Dot animation timing */
  const dotDuration = 2.5; // seconds for one trip

  /* Instant if reduced motion */
  const rm = reducedMotion;

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="Hub-and-spoke CoE enablement model with five teams radiating from a Centre of Excellence, contrasted with a flat federated alternative below"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        <defs>
          {/* Bidirectional arrow markers -- outward (hub to team) */}
          <marker
            id="ceArrowOut"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 0 2 L 10 5 L 0 8"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>

          {/* Bidirectional arrow markers -- inward (team to hub) */}
          <marker
            id="ceArrowIn"
            viewBox="0 0 10 10"
            refX="1"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M 10 2 L 0 5 L 10 8"
              fill="none"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
            />
          </marker>
        </defs>

        {/* ===============================================
            SPOKE RAILS -- static at 25% opacity
            =============================================== */}
        {teams.map((team, i) => {
          const hub = hubEdgePoint(team.x, team.y);
          const te = teamEdgePoint(team.x, team.y, hubCx, hubCy);
          return (
            <line
              key={`rail-${i}`}
              x1={hub.x}
              y1={hub.y}
              x2={te.x}
              y2={te.y}
              stroke="var(--color-midnight)"
              strokeWidth="1"
              opacity={0.25}
            />
          );
        })}

        {/* ===============================================
            SPOKE LINES -- animated draw + arrows
            =============================================== */}
        {teams.map((team, i) => {
          const hub = hubEdgePoint(team.x, team.y);
          const te = teamEdgePoint(team.x, team.y, hubCx, hubCy);
          const dx = te.x - hub.x;
          const dy = te.y - hub.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const delay = rm ? 0 : spokeBaseDelay + i * spokeStagger;

          return (
            <line
              key={`spoke-${i}`}
              x1={hub.x}
              y1={hub.y}
              x2={te.x}
              y2={te.y}
              stroke="var(--color-midnight)"
              strokeWidth="1"
              markerStart="url(#ceArrowIn)"
              markerEnd="url(#ceArrowOut)"
              opacity={0.55}
              strokeDasharray={length}
              strokeDashoffset={visible || rm ? 0 : length}
              style={{
                transition: rm
                  ? "none"
                  : `stroke-dashoffset ${spokeDrawDuration}s ease-out ${delay}s`,
              }}
            />
          );
        })}

        {/* ===============================================
            ANIMATED DOTS -- bidirectional flow on spokes
            =============================================== */}
        {!rm &&
          visible &&
          teams.map((team, i) => {
            const hub = hubEdgePoint(team.x, team.y);
            const te = teamEdgePoint(team.x, team.y, hubCx, hubCy);
            const pathOutId = `spokePath-out-${i}`;
            const pathInId = `spokePath-in-${i}`;
            const beginOut = `${(spokeBaseDelay + i * spokeStagger + spokeDrawDuration + 0.2).toFixed(2)}s`;
            const beginIn = `${(spokeBaseDelay + i * spokeStagger + spokeDrawDuration + 0.2 + dotDuration * 0.4).toFixed(2)}s`;

            return (
              <g key={`dots-${i}`}>
                {/* Path from hub to team */}
                <path
                  id={pathOutId}
                  d={`M ${hub.x} ${hub.y} L ${te.x} ${te.y}`}
                  fill="none"
                  stroke="none"
                />
                {/* Path from team to hub */}
                <path
                  id={pathInId}
                  d={`M ${te.x} ${te.y} L ${hub.x} ${hub.y}`}
                  fill="none"
                  stroke="none"
                />

                {/* Dot: hub -> team */}
                <circle r="3" fill="var(--accent)" opacity="0.7">
                  <animateMotion
                    dur={`${dotDuration}s`}
                    repeatCount="indefinite"
                    begin={beginOut}
                  >
                    <mpath href={`#${pathOutId}`} />
                  </animateMotion>
                </circle>

                {/* Dot: team -> hub */}
                <circle r="3" fill="var(--color-midnight)" opacity="0.45">
                  <animateMotion
                    dur={`${dotDuration}s`}
                    repeatCount="indefinite"
                    begin={beginIn}
                  >
                    <mpath href={`#${pathInId}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}

        {/* ===============================================
            TEAM BOXES -- spoke endpoints (staggered fade-in)
            =============================================== */}
        {teams.map((team, i) => {
          const delay = rm ? 0 : teamBaseDelay + i * teamStagger;
          return (
            <g
              key={`team-${i}`}
              opacity={visible || rm ? 1 : 0}
              style={{
                transition: rm
                  ? "none"
                  : `opacity ${entranceDuration}s ease-out ${delay}s`,
              }}
            >
              <rect
                x={team.x - teamW / 2}
                y={team.y - teamH / 2}
                width={teamW}
                height={teamH}
                rx={6}
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
              />
              <text
                x={team.x}
                y={team.y + 5}
                fontFamily="var(--font-display)"
                fontSize="14"
                fontWeight="500"
                fill="var(--color-midnight)"
                textAnchor="middle"
              >
                {team.label}
              </text>
            </g>
          );
        })}

        {/* ===============================================
            CENTRE HUB -- CoE box (accent border, appears first)
            =============================================== */}
        <g
          opacity={visible || rm ? 1 : 0}
          style={{
            transition: rm
              ? "none"
              : `opacity ${entranceDuration}s ease-out ${hubDelay}s`,
          }}
        >
          <rect
            x={hubCx - hubW / 2}
            y={hubCy - hubH / 2}
            width={hubW}
            height={hubH}
            rx={8}
            stroke="var(--accent)"
            strokeWidth="2"
            fill="var(--bg-surface)"
          />

          {/* Hub title */}
          <text
            x={hubCx}
            y={hubCy - hubH / 2 + 30}
            fontFamily="var(--font-display)"
            fontSize="20"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            CoE
          </text>

          {/* Hub inner labels -- stacked */}
          {hubLabels.map((label, i) => (
            <text
              key={`hub-lbl-${i}`}
              x={hubCx}
              y={hubCy - hubH / 2 + 52 + i * 20}
              fontFamily="var(--font-mono)"
              fontSize="12"
              fill="var(--fg-2)"
              textAnchor="middle"
              letterSpacing="0.04em"
            >
              {label}
            </text>
          ))}
        </g>

        {/* ===============================================
            ANNOTATIONS -- left and right
            =============================================== */}
        <g
          opacity={visible || rm ? 1 : 0}
          style={{
            transition: rm
              ? "none"
              : `opacity ${entranceDuration}s ease-out ${teamBaseDelay + teams.length * teamStagger}s`,
          }}
        >
          {/* Left annotation: "Governance out" */}
          <text
            x={105}
            y={hubCy + 6}
            fontFamily="var(--font-mono)"
            fontSize="12"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            Governance out
          </text>
          <line
            x1={151}
            y1={hubCy + 15}
            x2={185}
            y2={hubCy + 28}
            stroke="var(--fg-3)"
            strokeWidth="1"
            markerEnd="url(#ceArrowOut)"
            opacity={0.5}
          />

          {/* Right annotation: "Capability in" */}
          <text
            x={svgW - 105}
            y={hubCy + 6}
            fontFamily="var(--font-mono)"
            fontSize="12"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.04em"
          >
            Capability in
          </text>
          <line
            x1={svgW - 185}
            y1={hubCy + 28}
            x2={svgW - 151}
            y2={hubCy + 15}
            stroke="var(--fg-3)"
            strokeWidth="1"
            markerEnd="url(#ceArrowOut)"
            opacity={0.5}
          />
        </g>

        {/* ===============================================
            SEPARATOR LINE
            =============================================== */}
        <line
          x1={154}
          y1={370}
          x2={svgW - 154}
          y2={370}
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity={0.5}
        />

        {/* ===============================================
            BOTTOM STRIP -- Federated model contrast
            =============================================== */}

        {/* Section label */}
        <text
          x={svgW / 2}
          y={408}
          fontFamily="var(--font-mono)"
          fontSize="12"
          fontWeight="600"
          fill="var(--fg-2)"
          textAnchor="middle"
          letterSpacing="0.08em"
        >
          FEDERATED
        </text>

        {/* Flat row of peer boxes */}
        {Array.from({ length: fedCount }).map((_, i) => {
          const bx = fedStartX + i * (fedBoxW + fedGap);
          return (
            <g key={`fed-${i}`}>
              <rect
                x={bx}
                y={fedY}
                width={fedBoxW}
                height={fedBoxH}
                rx={6}
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
                opacity={0.5}
              />
              <text
                x={bx + fedBoxW / 2}
                y={fedY + fedBoxH / 2 + 4}
                fontFamily="var(--font-mono)"
                fontSize="12"
                fill="var(--fg-3)"
                textAnchor="middle"
              >
                {`Team ${i + 1}`}
              </text>
            </g>
          );
        })}

        {/* Connecting dashes between federated boxes */}
        {Array.from({ length: fedCount - 1 }).map((_, i) => {
          const x1 = fedStartX + i * (fedBoxW + fedGap) + fedBoxW;
          const x2 = fedStartX + (i + 1) * (fedBoxW + fedGap);
          const cy = fedY + fedBoxH / 2;
          return (
            <line
              key={`fed-link-${i}`}
              x1={x1 + 2}
              y1={cy}
              x2={x2 - 2}
              y2={cy}
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={0.4}
            />
          );
        })}

        {/* Bottom caption */}
        <text
          x={svgW / 2}
          y={530}
          fontFamily="var(--font-mono)"
          fontSize="13"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.04em"
        >
          no centre, slower convergence
        </text>
      </svg>
    </figure>
  );
}
