import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/layout";
import { DiagramSlot } from "@/components/diagrams";
import { Eyebrow } from "@/components/ui";
import { SPINE_CONCEPTS } from "@/lib/spine-data";

export const metadata = {
  title: "The Spine — TensAI",
  description:
    "Eighteen canonical concepts that run under all three pillars of the TensAI enterprise AI blueprint.",
};

export default function SpinePage() {
  return (
    <>
      <SiteNav />

      <main>
        {/* ── Header ─────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "96px",
            paddingBottom: "64px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
            }}
          >
            <Eyebrow as="span">THE SPINE</Eyebrow>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "var(--fg-1)",
                marginTop: "12px",
              }}
            >
              Eighteen concepts
            </h1>

            <p
              style={{
                maxWidth: "680px",
                color: "var(--fg-2)",
                fontSize: "20px",
                lineHeight: 1.55,
                marginTop: "16px",
              }}
            >
              One canonical vocabulary runs under all three pillars. Every page
              on the site maps to exactly one of these concepts. Get the spine
              right and every layer above it inherits the rigour.
            </p>
          </div>
        </section>

        {/* ── Diagram ────────────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "64px",
          }}
        >
          <DiagramSlot title="The Spine — 18 Concept Map" height={480} />
        </div>

        {/* ── Concept grid ───────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 24px 96px",
          }}
        >
          {/*
            Border-between-cells technique:
            wrapper gets background = border colour + gap 1px;
            each cell gets background = page colour.
            Visually the gap becomes a 1px rule in all directions.
          */}
          <div className="spine-grid">
            {SPINE_CONCEPTS.map((concept) => {
              const num = String(concept.number).padStart(2, "0");
              return (
                <Link
                  key={concept.number}
                  href={`/${concept.pillarSlug}/${concept.conceptSlug}`}
                  className="spine-cell"
                >
                  <div className="spine-cell-inner">
                    {/* Number */}
                    <span className="spine-number">{num}</span>

                    {/* Name + gloss */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="spine-name">{concept.name}</div>
                      <div className="spine-gloss">{concept.gloss}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* ── Scoped styles ──────────────────────────────────────── */}
      <style>{`
        /* Grid with 1px borders via gap + background trick */
        .spine-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .spine-cell {
          display: block;
          background: var(--bg-page);
          text-decoration: none;
          transition: background 350ms ease;
          color: inherit;
        }

        .spine-cell:hover {
          background: var(--bg-surface);
        }

        .spine-cell-inner {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 22px;
        }

        .spine-number {
          font-family: var(--font-display);
          font-weight: 500;
          font-style: italic;
          font-size: 26px;
          line-height: 1.1;
          color: var(--fg-3);
          flex-shrink: 0;
          transition: color 350ms ease;
        }

        .spine-cell:hover .spine-number {
          color: var(--fg-1);
        }

        .spine-name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15.5px;
          letter-spacing: -0.01em;
          line-height: 1.3;
          color: var(--fg-1);
        }

        .spine-gloss {
          font-size: 13px;
          color: var(--fg-3);
          line-height: 1.45;
          margin-top: 3px;
        }

        /* Tablet: 2 columns */
        @media (max-width: 1023px) and (min-width: 640px) {
          .spine-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 639px) {
          .spine-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
