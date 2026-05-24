"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TheIndex.module.css";

const PILLAR_DATA = [
  {
    id: "III",
    name: "The Craft",
    stratum: "Stratum 03",
    concepts: [
      { ref: "3.01", label: "Agents vs Workflows", href: "/craft/agents-vs-workflows" },
      { ref: "3.02", label: "The Five Patterns", href: "/craft/five-patterns" },
      { ref: "3.03", label: "Harness Engineering", href: "/craft/harness-engineering" },
      { ref: "3.04", label: "Memory & Context", href: "/craft/memory-context" },
      { ref: "3.05", label: "Tools & MCP", href: "/craft/tools-mcp" },
      { ref: "3.06", label: "RAG & Its Evolutions", href: "/craft/rag-evolutions" },
      { ref: "3.07", label: "Multi-Agent, Handoffs, A2A", href: "/craft/multi-agent" },
      { ref: "3.08", label: "Steering", href: "/craft/steering" },
      { ref: "3.09", label: "Code & Doc Indexing", href: "/craft/code-doc-indexing" },
      { ref: "3.10", label: "Evals & Observability", href: "/craft/evals-observability" },
      { ref: "3.11", label: "AFK & Autonomous Agents", href: "/craft/afk-autonomous" },
      { ref: "3.12", label: "The Failure Taxonomy", href: "/craft/failure-taxonomy" },
    ],
  },
  {
    id: "II",
    name: "The Operating Model",
    stratum: "Stratum 02",
    concepts: [
      { ref: "2.1", label: "Skills as the Reusable Unit", href: "/operating-model/skills" },
      { ref: "2.2", label: "Power Users vs Consumers", href: "/operating-model/power-users" },
      { ref: "2.3", label: "The Agent Catalog", href: "/operating-model/agent-catalog" },
      { ref: "2.4", label: "CoE & Enablement", href: "/operating-model/coe-enablement" },
      { ref: "2.5", label: "Adoption & Failure Patterns", href: "/operating-model/adoption-patterns" },
    ],
  },
  {
    id: "I",
    name: "The Groundwork",
    stratum: "Stratum 01",
    concepts: [
      { ref: "1.1", label: "Operating Model & Maturity", href: "/groundwork/operating-model" },
      { ref: "1.2", label: "Build · Buy · Boost", href: "/groundwork/build-buy-boost" },
      { ref: "1.3", label: "Token Sourcing", href: "/groundwork/token-sourcing" },
      { ref: "1.4", label: "Security Architecture", href: "/groundwork/security-architecture" },
      { ref: "1.5", label: "Governance & Risk", href: "/groundwork/governance-risk" },
      { ref: "1.6", label: "FinOps for AI", href: "/groundwork/finops" },
    ],
  },
] as const;

const SPINE = [
  { ref: "S.01", label: "Model" },
  { ref: "S.02", label: "Harness" },
  { ref: "S.03", label: "Tools" },
  { ref: "S.04", label: "Context Engineering" },
  { ref: "S.05", label: "Context Management" },
  { ref: "S.06", label: "Memory" },
  { ref: "S.07", label: "Retrieval / RAG" },
  { ref: "S.08", label: "Skills" },
  { ref: "S.09", label: "Workflows" },
  { ref: "S.10", label: "Agents" },
  { ref: "S.11", label: "Handoffs" },
  { ref: "S.12", label: "Multi-Agent Orchestration" },
  { ref: "S.13", label: "Steering" },
  { ref: "S.14", label: "Evals & Observability" },
  { ref: "S.15", label: "Guardrails & Safety" },
  { ref: "S.16", label: "AFK & Autonomous Agents" },
  { ref: "S.17", label: "Code & Doc Indexing" },
  { ref: "S.18", label: "Standards & Interop" },
] as const;

const PORTS = [
  { label: "Tokens", sub: "sourcing & budgets" },
  { label: "Models", sub: "tiers & routing" },
  { label: "Compute", sub: "capacity & cost" },
  { label: "Data", sub: "corpora & retrieval" },
] as const;

export function TheIndex() {
  const [expanded, setExpanded] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  return (
    <div className={styles.stage}>
      {/* Value indicator */}
      <div className={styles.value}>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
          <path d="M7 18V2M7 2L1 8M7 2L13 8" stroke="var(--fg-1)" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <span className={styles.valueLbl}>Value</span>
      </div>

      {/* Governance band */}
      <div className={styles.gov}>
        <div className={styles.govItems}>
          <span>Governance</span>
          <span className={styles.govSep}>·</span>
          <span>Security</span>
          <span className={styles.govSep}>·</span>
          <span>Observability</span>
        </div>
      </div>

      {/* Main body: pillars + spine */}
      <div className={styles.body}>
        {/* Pillars */}
        <div className={styles.pillars}>
          {PILLAR_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className={`${styles.pillar} ${styles.pillarHover}`}
              onMouseEnter={() => setHoveredPillar(pillar.id)}
              onMouseLeave={() => setHoveredPillar(null)}
              style={{
                backgroundColor:
                  hoveredPillar === pillar.id ? "var(--bg-surface)" : undefined,
              }}
            >
              <div className={styles.pillarHeader}>
                <span className={styles.roman}>{pillar.id}</span>
                <span className={styles.pillarName}>{pillar.name}</span>
                <span className={styles.pillarTag}>
                  {pillar.stratum} · {pillar.concepts.length} concepts
                </span>
              </div>

              <div
                className={`${styles.cells} ${expanded ? styles.cellsExpanded : ""}`}
              >
                {pillar.concepts.map((c) => (
                  <Link key={c.ref} href={c.href} className={styles.cell}>
                    <span className={styles.cellRef}>{c.ref}</span>
                    <span className={styles.cellLbl}>{c.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spine rail */}
        <div className={styles.spine}>
          <div className={styles.spineHeader}>
            <span className={styles.spineTitle}>The Spine</span>
            <span className={styles.spineTag}>18 concepts</span>
          </div>
          <div className={styles.spineList}>
            {SPINE.map((s) => (
              <div key={s.ref} className={styles.spineItem}>
                <span className={styles.spineRef}>{s.ref}</span>
                <span className={styles.spineLbl}>{s.label}</span>
                <span className={styles.spineDot} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inputs floor */}
      <div className={styles.floor}>
        <div className={styles.floorLabel}>Inputs · commodity</div>
        <div className={styles.ports}>
          {PORTS.map((p) => (
            <div key={p.label} className={styles.port}>
              <span className={styles.portLbl}>{p.label}</span>
              <span className={styles.portSub}>{p.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expand/collapse button */}
      <button
        className={styles.expandBtn}
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? "Collapse map" : "Show entire map"}
        <span
          className={`${styles.expandChevron} ${expanded ? styles.expandChevronOpen : ""}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Colophon */}
      <div className={styles.colophon}>
        <span>FIG. 01 · ALT-A</span>
        <span>Schematic · v2.0</span>
      </div>
    </div>
  );
}
