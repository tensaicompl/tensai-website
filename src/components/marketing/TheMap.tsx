/* TheMap — server component (no "use client") */

import Link from "next/link";
import styles from "./TheMap.module.css";

/* -----------------------------------------------------------------------
   Pillar data
   ----------------------------------------------------------------------- */

const PILLARS = [
  {
    id: "III",
    name: "The Craft",
    desc: "The practitioner's complete, concept-level playbook of AI today — agents, harnesses, and everything hard that lives around the model.",
    notesHeader: "In This Stratum",
    rows: [
      [
        { label: "· Agents vs Workflows", href: "/craft/agents-vs-workflows" },
      ],
      [{ label: "· The Five Patterns", href: "/craft/five-patterns" }],
      [{ label: "· Harness Engineering", href: "/craft/harness-engineering" }],
      [{ label: "· Memory & Context", href: "/craft/memory-context" }],
      [
        { label: "· Tools & MCP", href: "/craft/tools-mcp" },
        { label: " · RAG", href: "/craft/rag-evolutions" },
      ],
      [
        { label: "· Multi-Agent", href: "/craft/multi-agent" },
        { label: " · Steering", href: "/craft/steering" },
      ],
      [
        { label: "· Indexing", href: "/craft/code-doc-indexing" },
        { label: " · Evals", href: "/craft/evals-observability" },
      ],
      [{ label: "· Observability", href: "/craft/evals-observability" }],
      [{ label: "· AFK Agents", href: "/craft/afk-autonomous" }],
      [{ label: "· Failure Taxonomy", href: "/craft/failure-taxonomy" }],
    ],
  },
  {
    id: "II",
    name: "The Operating Model",
    desc: "How an organisation actually runs agents — the layer between strategy and code.",
    notesHeader: "In This Stratum",
    rows: [
      [
        {
          label: "· Skills as the Reusable Unit",
          href: "/operating-model/skills",
        },
      ],
      [
        {
          label: "· Power Users vs Consumers",
          href: "/operating-model/power-users",
        },
      ],
      [
        { label: "· The Agent Catalog", href: "/operating-model/agent-catalog" },
      ],
      [
        {
          label: "· CoE & Enablement",
          href: "/operating-model/coe-enablement",
        },
      ],
      [
        {
          label: "· Adoption & Failure Patterns",
          href: "/operating-model/adoption-patterns",
        },
      ],
    ],
  },
  {
    id: "I",
    name: "The Groundwork",
    desc: "The enterprise framework for AI — operating model, security, governance. Decisions before technology.",
    notesHeader: "In This Stratum",
    rows: [
      [
        {
          label: "· Operating Model & Maturity",
          href: "/groundwork/operating-model",
        },
      ],
      [
        {
          label: "· Build · Buy · Boost",
          href: "/groundwork/build-buy-boost",
        },
      ],
      [{ label: "· Token Sourcing", href: "/groundwork/token-sourcing" }],
      [
        {
          label: "· Security Architecture",
          href: "/groundwork/security-architecture",
        },
      ],
      [
        {
          label: "· Governance & Risk",
          href: "/groundwork/governance-risk",
        },
      ],
      [{ label: "· FinOps", href: "/groundwork/finops" }],
    ],
  },
] as const;

/* -----------------------------------------------------------------------
   TheMap
   ----------------------------------------------------------------------- */

export function TheMap() {
  return (
    <section
      style={{
        padding: "96px 24px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={styles.mapWrap}>

        {/* ── Value indicator ─────────────────────────────────── */}
        <div className={styles.valueOut}>
          <svg
            className={styles.valueArrow}
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 20V2M8 2L2 8M8 2L14 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
          <span className={styles.valueLabel}>Value</span>
        </div>

        {/* ── Map frame ───────────────────────────────────────── */}
        <div className={styles.mapFrame}>

          {/* Governance band */}
          <div className={styles.govBand}>
            <span className={styles.govBandLeft}>
              Governed · Secured · Observed
            </span>
            <span className={styles.govBandRight}>Frame · 01</span>
          </div>

          {/* Spine + pillars wrapper */}
          <div className={styles.spineWrap}>
            {/* Spine vertical line */}
            <div className={styles.spineLine} aria-hidden="true" />
            {/* Spine label */}
            <span className={styles.spineLabel} aria-hidden="true">
              Spine
            </span>

            {/* ── Pillar strata ──────────────────────────────── */}
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className={styles.pillar}>
                {/* Junction square at top of each pillar, on spine */}
                <div className={styles.junction} aria-hidden="true" />

                {/* Numeral column */}
                <div className={styles.pillarNum}>
                  <span className={styles.pillarNumeral}>{pillar.id}</span>
                  <span className={styles.pillarNumSub}>Pillar</span>
                </div>

                {/* Body column */}
                <div className={styles.pillarBody}>
                  <h3 className={styles.pillarName}>{pillar.name}</h3>
                  <p className={styles.pillarDesc}>{pillar.desc}</p>
                </div>

                {/* Notes column */}
                <div className={styles.pillarNotes}>
                  <span className={styles.notesHeader}>
                    {pillar.notesHeader}
                  </span>
                  <div className={styles.notesList}>
                    {pillar.rows.map((row, rowIdx) => (
                      <div
                        key={rowIdx}
                        className={styles.noteRow}
                      >
                        {row.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={styles.strataLink}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* ── Inputs floor ───────────────────────────────── */}
            <div className={styles.floor}>
              {["Inputs", "Token sourcing", "Models", "Compute", "Data"].map(
                (item) => (
                  <span key={item} className={styles.floorItem}>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* ── Measurement strip ───────────────────────────────── */}
        <div className={styles.measure}>
          <span className={styles.measureNum}>00</span>
          <div className={styles.measureTicks} aria-hidden="true" />
          <span className={styles.measureLabel}>
            elevation · ground → value
          </span>
        </div>
      </div>
    </section>
  );
}
