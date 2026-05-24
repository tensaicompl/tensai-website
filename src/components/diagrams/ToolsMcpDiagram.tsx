"use client";

/**
 * ToolsMcpDiagram — The MCP Interface
 *
 * Left-to-right flow: three client boxes -> JSON-RPC 2.0 wire -> one MCP server
 * exposing three primitives (Tools, Resources, Prompts).
 *
 * IntersectionObserver entrance with staggered CSS transitions.
 * SMIL dots flow along three independent client->server paths when visible.
 *
 * Single accent: var(--accent) on the protocol label, gateway, wire, and primitive names.
 * Everything else on the midnight/gray scale.
 */

import { useEffect, useRef, useState } from "react";

export function ToolsMcpDiagram() {
  const figRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Layout constants ──────────────────────────────────── */
  const W = 1200;
  const H = 400;

  // Clients
  const clientW = 180;
  const clientH = 80;
  const clientX = 60;
  const clients = [
    { label: "Client A", y: 30 },
    { label: "Client B", y: 155 },
    { label: "Client C", y: 280 },
  ];
  const clientCenters = clients.map(c => ({
    x: clientX + clientW / 2,
    y: c.y + clientH / 2,
  }));

  // Gateway zone (convergence point)
  const gwX = 420;
  const gwY = H / 2; // 200
  const gwR = 28;

  // Central wire
  const wireStartX = gwX + gwR + 10;
  const wireEndX = 680;

  // Server
  const serverX = 700;
  const serverY = 30;
  const serverW = 440;
  const serverH = 340;
  const primX = serverX + 20;
  const primW = serverW - 40;

  // Primitives inside server
  const primitives = [
    {
      label: "Tools",
      y: 85,
      h: 90,
      items: ["create_invoice", "get_invoice", "search_invoices"],
    },
    {
      label: "Resources",
      y: 190,
      h: 60,
      items: ["file://docs/*", "db://invoices"],
    },
    {
      label: "Prompts",
      y: 265,
      h: 60,
      items: ["summarize_invoice"],
    },
  ];

  /* ── Flow paths: each client -> gateway -> server ──────── */
  const flowPaths = clients.map((c, i) => {
    const cy = c.y + clientH / 2;
    const cx = clientX + clientW; // right edge of client box
    // Curve from client right edge to gateway, then straight through wire to server
    const d = [
      `M ${cx},${cy}`,
      `C ${cx + 80},${cy} ${gwX - 80},${gwY} ${gwX},${gwY}`,
      `L ${wireEndX},${gwY}`,
    ].join(" ");
    return { id: `mcp-flow-${i}`, d, delay: `${i * 0.6}s` };
  });

  /* ── CSS transition delays for entrance stagger ────────── */
  const clientDelay = (i: number) => `${0.1 + i * 0.12}s`;
  const gatewayDelay = "0.55s";
  const wireDelay = "0.7s";
  const serverDelay = "0.85s";

  const baseTransition = "opacity 0.6s ease, transform 0.6s ease";

  return (
    <figure
      ref={figRef}
      role="img"
      aria-label="MCP interface: three clients connect over JSON-RPC 2.0 to one server exposing Tools, Resources, and Prompts primitives"
      style={{ margin: 0, width: "100%", marginInline: "auto" }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* ── Defs: flow paths + arrow marker + dot gradient ── */}
        <defs>
          <marker
            id="mcpArrow"
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

          <radialGradient id="mcpDotGlow">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>

          {/* Flow path definitions */}
          {flowPaths.map(fp => (
            <path key={fp.id} id={fp.id} d={fp.d} />
          ))}
        </defs>

        {/* ── Client boxes (left) ──────────────────────────── */}
        {clients.map((client, i) => (
          <g
            key={client.label}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: baseTransition,
              transitionDelay: clientDelay(i),
            }}
          >
            <rect
              x={clientX}
              y={client.y}
              width={clientW}
              height={clientH}
              rx="6"
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="var(--bg-surface)"
            />
            <text
              x={clientX + clientW / 2}
              y={client.y + clientH / 2}
              fontFamily="var(--font-display)"
              fontSize="15"
              fontWeight="600"
              fill="var(--color-midnight)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {client.label}
            </text>
            {/* Small MCP icon hint */}
            <text
              x={clientX + clientW / 2}
              y={client.y + clientH / 2 + 20}
              fontFamily="var(--font-mono)"
              fontSize="9"
              fill="var(--fg-3)"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              MCP client
            </text>
          </g>
        ))}

        {/* ── Connection curves: clients -> gateway ─────────── */}
        {clients.map((c, i) => {
          const cy = c.y + clientH / 2;
          const cx = clientX + clientW;
          return (
            <path
              key={`conn-${i}`}
              d={`M ${cx},${cy} C ${cx + 80},${cy} ${gwX - 80},${gwY} ${gwX - gwR},${gwY}`}
              stroke="var(--color-midnight)"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity={0.5}
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease",
                transitionDelay: gatewayDelay,
              }}
            />
          );
        })}

        {/* ── Gateway circle ────────────────────────────────── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.5)",
            transformOrigin: `${gwX}px ${gwY}px`,
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: gatewayDelay,
          }}
        >
          <circle
            cx={gwX}
            cy={gwY}
            r={gwR}
            fill="var(--accent-tint)"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <text
            x={gwX}
            y={gwY - 2}
            fontFamily="var(--font-mono)"
            fontSize="8"
            fontWeight="700"
            fill="var(--accent)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.06em"
          >
            JSON-RPC
          </text>
          <text
            x={gwX}
            y={gwY + 10}
            fontFamily="var(--font-mono)"
            fontSize="8"
            fontWeight="700"
            fill="var(--accent)"
            textAnchor="middle"
            dominantBaseline="middle"
            letterSpacing="0.06em"
          >
            2.0
          </text>
        </g>

        {/* ── Central wire: gateway -> server ───────────────── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease",
            transitionDelay: wireDelay,
          }}
        >
          <line
            x1={wireStartX}
            y1={gwY}
            x2={wireEndX}
            y2={gwY}
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd="url(#mcpArrow)"
          />
          {/* Wire annotation */}
          <text
            x={(wireStartX + wireEndX) / 2}
            y={gwY - 14}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.03em"
          >
            capability negotiation
          </text>
        </g>

        {/* ── MCP Server box (right) ──────────────────────── */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: baseTransition,
            transitionDelay: serverDelay,
          }}
        >
          <rect
            x={serverX}
            y={serverY}
            width={serverW}
            height={serverH}
            rx="6"
            stroke="var(--color-midnight)"
            strokeWidth="1.5"
            fill="rgba(109, 40, 217, 0.04)"
          />

          {/* Server title */}
          <text
            x={serverX + serverW / 2}
            y={serverY + 32}
            fontFamily="var(--font-display)"
            fontSize="17"
            fontWeight="700"
            fill="var(--color-midnight)"
            textAnchor="middle"
          >
            MCP Server
          </text>

          {/* Subtitle */}
          <text
            x={serverX + serverW / 2}
            y={serverY + 52}
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--fg-3)"
            textAnchor="middle"
            letterSpacing="0.03em"
          >
            stdio (local) / streamable HTTP (remote)
          </text>

          {/* ── Primitives ──────────────────────────────────── */}
          {primitives.map((prim) => (
            <g key={prim.label}>
              <rect
                x={primX}
                y={prim.y}
                width={primW}
                height={prim.h}
                rx="4"
                stroke="var(--border)"
                strokeWidth="1"
                fill="var(--bg-surface)"
              />
              <text
                x={primX + 16}
                y={prim.y + 22}
                fontFamily="var(--font-display)"
                fontSize="14"
                fontWeight="600"
                fill="var(--accent)"
              >
                {prim.label}
              </text>
              {prim.items.map((item, j) => (
                <text
                  key={item}
                  x={primX + 16}
                  y={prim.y + 40 + j * 17}
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  fill="var(--fg-2)"
                  letterSpacing="0.02em"
                >
                  {item}
                </text>
              ))}
            </g>
          ))}
        </g>

        {/* ── Transport annotation (below diagram) ──────────── */}
        <text
          x={W / 2}
          y={H - 10}
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="var(--fg-3)"
          textAnchor="middle"
          letterSpacing="0.02em"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease",
            transitionDelay: "1.1s",
          }}
        >
          {"Model Context Protocol -- open standard for AI tool integration"}
        </text>

        {/* ── SMIL animated dots flowing along each path ────── */}
        {visible && flowPaths.map((fp, i) => (
          <g key={`dots-${i}`}>
            {/* Primary dot */}
            <circle r="4" fill="var(--accent)" opacity="0.9">
              <animateMotion
                dur="2.8s"
                begin={fp.delay}
                repeatCount="indefinite"
              >
                <mpath href={`#${fp.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.9;0.9;0"
                dur="2.8s"
                begin={fp.delay}
                repeatCount="indefinite"
              />
            </circle>
            {/* Glow trail */}
            <circle r="8" fill="url(#mcpDotGlow)" opacity="0.3">
              <animateMotion
                dur="2.8s"
                begin={fp.delay}
                repeatCount="indefinite"
              >
                <mpath href={`#${fp.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.3;0.3;0"
                dur="2.8s"
                begin={fp.delay}
                repeatCount="indefinite"
              />
            </circle>
            {/* Second dot, offset by half the cycle */}
            <circle r="3.5" fill="var(--accent)" opacity="0.7">
              <animateMotion
                dur="2.8s"
                begin={`${parseFloat(fp.delay) + 1.4}s`}
                repeatCount="indefinite"
              >
                <mpath href={`#${fp.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.7;0.7;0"
                dur="2.8s"
                begin={`${parseFloat(fp.delay) + 1.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </figure>
  );
}
