import Link from "next/link";
import { getAllConcepts } from "@/lib/content";
import type { PillarSlug } from "@/types";

interface ConceptConnectionsProps {
  currentSlug: string;
  currentPillar: PillarSlug;
  spineConcepts: number[];
}

const PILLAR_LABELS: Record<PillarSlug, string> = {
  groundwork: "The Groundwork",
  "operating-model": "The Operating Model",
  craft: "The Craft",
};

export default function ConceptConnections({
  currentSlug,
  currentPillar,
  spineConcepts,
}: ConceptConnectionsProps) {
  const allConcepts = getAllConcepts();

  // Same-pillar siblings sorted by order
  const pillarConcepts = allConcepts
    .filter((c) => c.frontmatter.pillar === currentPillar)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  const currentIndex = pillarConcepts.findIndex((c) => c.slug === currentSlug);
  const prevSibling = currentIndex > 0 ? pillarConcepts[currentIndex - 1] : null;
  const nextSibling =
    currentIndex < pillarConcepts.length - 1
      ? pillarConcepts[currentIndex + 1]
      : null;

  const siblings = [prevSibling, nextSibling].filter(Boolean) as typeof pillarConcepts;

  // Cross-pillar: concepts in OTHER pillars that share at least one spineConcept number
  const crossPillarConcepts = allConcepts.filter((c) => {
    if (c.frontmatter.pillar === currentPillar) return false;
    if (c.slug === currentSlug) return false;
    return c.frontmatter.spineConcepts.some((n) => spineConcepts.includes(n));
  });

  const hasSiblings = siblings.length > 0;
  const hasCrossPillar = crossPillarConcepts.length > 0;

  if (!hasSiblings && !hasCrossPillar) return null;

  return (
    <section style={{ marginTop: "64px" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "22px",
          color: "var(--fg-1)",
          marginBottom: "32px",
          letterSpacing: "-0.01em",
        }}
      >
        Related Concepts
      </h2>

      {/* In this pillar */}
      {hasSiblings && (
        <div style={{ marginBottom: hasCrossPillar ? "40px" : "0" }}>
          <p className="cc-group-label">In this pillar</p>
          <div className="cc-grid">
            {siblings.map((concept) => (
              <Link
                key={concept.slug}
                href={`/${concept.frontmatter.pillar}/${concept.slug}`}
                className="cc-card"
              >
                <span className="cc-pillar-badge">
                  {PILLAR_LABELS[concept.frontmatter.pillar]}
                </span>
                <div className="cc-card-title">{concept.frontmatter.title}</div>
                <div className="cc-card-def">{concept.frontmatter.definition}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Across pillars */}
      {hasCrossPillar && (
        <div>
          <p className="cc-group-label">Across pillars</p>
          <div className="cc-grid">
            {crossPillarConcepts.map((concept) => (
              <Link
                key={`${concept.frontmatter.pillar}-${concept.slug}`}
                href={`/${concept.frontmatter.pillar}/${concept.slug}`}
                className="cc-card"
              >
                <span className="cc-pillar-badge">
                  {PILLAR_LABELS[concept.frontmatter.pillar]}
                </span>
                <div className="cc-card-title">{concept.frontmatter.title}</div>
                <div className="cc-card-def">{concept.frontmatter.definition}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .cc-group-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--fg-3);
          margin: 0 0 12px 0;
        }

        .cc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .cc-card {
          display: block;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 20px;
          text-decoration: none;
          color: inherit;
          transition: box-shadow 160ms var(--ease-out), border-color 160ms var(--ease-out);
        }

        .cc-card:hover {
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.08);
          border-color: var(--fg-4);
        }

        .cc-pillar-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--fg-3);
          margin-bottom: 6px;
        }

        .cc-card-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 15px;
          color: var(--fg-1);
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .cc-card-def {
          font-size: 13px;
          color: var(--fg-3);
          line-height: 1.45;
          margin-top: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 639px) {
          .cc-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
