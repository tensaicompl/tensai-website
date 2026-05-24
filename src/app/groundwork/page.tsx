import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import DiagramSlot from "@/components/diagrams/DiagramSlot";
import { getConceptsByPillar } from "@/lib/content";
import { PILLARS } from "@/lib/spine-data";
import CrossAltitudeStrip from "@/components/content/CrossAltitudeStrip";

export const metadata = {
  title: "The Groundwork — TensAI",
  description:
    "The enterprise framework for AI. CTO/CIO altitude — operating model, security, governance, FinOps.",
};

export default function GroundworkPage() {
  const concepts = getConceptsByPillar("groundwork");
  const pillar = PILLARS.find((p) => p.slug === "groundwork")!;

  return (
    <>
      <SiteNav />

      <main>
        {/* ── Pillar header ─────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "96px",
            paddingBottom: "48px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            {/* Large numeral */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(80px, 11vw, 150px)",
                lineHeight: 0.82,
                color: "var(--color-surface)",
                WebkitTextStroke: "1.4px var(--color-midnight)",
              }}
              aria-hidden="true"
            >
              {pillar.numeral}
            </div>

            {/* Tag */}
            <div
              style={{
                display: "inline-block",
                marginTop: "24px",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--fg-3)",
                border: "1px solid var(--fg-3)",
                padding: "6px 13px",
              }}
            >
              For those who decide
            </div>

            {/* Name */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(30px, 3.7vw, 40px)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--fg-1)",
                marginTop: "20px",
              }}
            >
              The Groundwork
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: "14.5px",
                color: "var(--fg-2)",
                lineHeight: 1.55,
                marginTop: "10px",
                maxWidth: "640px",
              }}
            >
              The enterprise framework for AI. CTO / CIO altitude — written for
              sharp people, not for a board deck.
            </p>

            {/* Throughline */}
            <p
              style={{
                fontStyle: "italic",
                fontSize: "19px",
                lineHeight: 1.46,
                color: "var(--fg-1)",
                borderLeft: "2px solid var(--color-midnight)",
                paddingLeft: "18px",
                marginTop: "24px",
                maxWidth: "560px",
              }}
            >
              AI is an operating decision before it is a technology one.
            </p>
          </div>
        </section>

        {/* ── Diagram ───────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "64px",
          }}
        >
          <DiagramSlot title="Pillar I — The Groundwork" height={360} />
        </div>

        {/* ── Concept index ─────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 24px 96px",
          }}
        >
          <div className="pillar-concept-grid">
            {concepts.map((concept, idx) => {
              const num = String(idx + 1).padStart(2, "0");
              return (
                <Link
                  key={concept.slug}
                  href={`/groundwork/${concept.slug}`}
                  className="pillar-concept-card"
                >
                  <span className="pillar-concept-num">{num}</span>
                  <div>
                    <div className="pillar-concept-title">
                      {concept.frontmatter.title}
                    </div>
                    <div className="pillar-concept-def">
                      {concept.frontmatter.definition}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Worked example ────────────────────────────────────── */}
        <CrossAltitudeStrip
          workedExample={{
            name: "Prompt Injection",
            craft: {
              headline: "Understand the attack",
              text: "The practitioner learns how injection works, why instruction/data separation matters, and how to wire layered defences into the harness.",
            },
            operatingModel: {
              headline: "Decide who can wire it",
              text: "The org decides which tier of builder may connect agents to sensitive tools, and how the Agent Catalog risk-tiers those agents.",
            },
            groundwork: {
              headline: "Set the policy and the gateway",
              text: "The enterprise mandates the AI gateway, the classifier on every input path, and the governance answer to a live incident.",
            },
          }}
        />
      </main>

      <SiteFooter />

      <style>{`
        .pillar-concept-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .pillar-concept-card {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 18px;
          padding: 28px 24px;
          background: var(--bg-page);
          text-decoration: none;
          color: inherit;
          transition: background 200ms var(--ease-standard);
        }

        .pillar-concept-card:hover {
          background: var(--bg-surface);
        }

        .pillar-concept-num {
          font-family: var(--font-display);
          font-weight: 500;
          font-style: italic;
          font-size: 22px;
          line-height: 1.2;
          color: var(--fg-3);
          flex-shrink: 0;
          transition: color 200ms var(--ease-standard);
          min-width: 32px;
        }

        .pillar-concept-card:hover .pillar-concept-num {
          color: var(--fg-1);
        }

        .pillar-concept-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 16px;
          letter-spacing: -0.01em;
          line-height: 1.3;
          color: var(--fg-1);
        }

        .pillar-concept-def {
          font-size: 14px;
          color: var(--fg-2);
          line-height: 1.5;
          margin-top: 4px;
        }

        @media (max-width: 639px) {
          .pillar-concept-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
