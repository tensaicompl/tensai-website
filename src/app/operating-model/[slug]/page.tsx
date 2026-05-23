import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import DiagramSlot from "@/components/diagrams/DiagramSlot";
import ContentPlaceholder from "@/components/mdx/ContentPlaceholder";
import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { getConceptsByPillar, getConceptBySlug } from "@/lib/content";
import { getSpineConceptsForConcept } from "@/lib/spine-data";

const mdxComponents = {
  ContentPlaceholder,
  Callout,
  CodeBlock,
};

export async function generateStaticParams() {
  return getConceptsByPillar("operating-model").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getConceptBySlug("operating-model", slug);
  if (!concept) return {};
  return {
    title: `${concept.frontmatter.title} — The Operating Model — TensAI`,
    description: concept.frontmatter.definition,
  };
}

export default async function OperatingModelConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = getConceptBySlug("operating-model", slug);
  if (!concept) notFound();

  const allConcepts = getConceptsByPillar("operating-model");
  const currentIndex = allConcepts.findIndex((c) => c.slug === slug);
  const prevConcept = currentIndex > 0 ? allConcepts[currentIndex - 1] : null;
  const nextConcept =
    currentIndex < allConcepts.length - 1
      ? allConcepts[currentIndex + 1]
      : null;

  const spineConcepts = getSpineConceptsForConcept(slug);

  return (
    <>
      <SiteNav />

      <main>
        <article
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "48px 24px 96px",
          }}
        >
          {/* ── Breadcrumb ──────────────────────────────────────── */}
          <nav aria-label="Breadcrumb">
            <div className="breadcrumb">
              <Link href="/" className="breadcrumb-link">
                TensAI
              </Link>
              <span className="breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <Link href="/operating-model" className="breadcrumb-link">
                The Operating Model
              </Link>
              <span className="breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span className="breadcrumb-current">
                {concept.frontmatter.title}
              </span>
            </div>
          </nav>

          {/* ── Concept title ────────────────────────────────────── */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 48px)",
              letterSpacing: "-0.022em",
              lineHeight: 1.1,
              color: "var(--fg-1)",
              marginTop: "16px",
            }}
          >
            {concept.frontmatter.title}
          </h1>

          {/* ── Definition ──────────────────────────────────────── */}
          <p
            style={{
              fontSize: "20px",
              color: "var(--fg-2)",
              lineHeight: 1.55,
              maxWidth: "720px",
              marginTop: "12px",
            }}
          >
            {concept.frontmatter.definition}
          </p>

          {/* ── Spine concept badges ─────────────────────────────── */}
          {spineConcepts.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "20px",
              }}
            >
              {spineConcepts.map((sc) => (
                <Link
                  key={sc.number}
                  href="/spine"
                  className="spine-badge"
                  title={sc.gloss}
                >
                  <span className="spine-badge-num">
                    {String(sc.number).padStart(2, "0")}
                  </span>
                  <span className="spine-badge-name">{sc.name}</span>
                </Link>
              ))}
            </div>
          )}

          {/* ── Diagram ─────────────────────────────────────────── */}
          <div style={{ marginTop: "48px" }}>
            <DiagramSlot
              title={concept.frontmatter.title}
              height={400}
            />
          </div>

          {/* ── MDX body ─────────────────────────────────────────── */}
          <div className="concept-body" style={{ marginTop: "48px" }}>
            <MDXRemote
              source={concept.content}
              components={mdxComponents}
            />
          </div>

          {/* ── Prev / Next navigation ───────────────────────────── */}
          {(prevConcept || nextConcept) && (
            <nav
              aria-label="Concept navigation"
              style={{
                marginTop: "64px",
                paddingTop: "32px",
                borderTop: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div>
                {prevConcept && (
                  <Link
                    href={`/operating-model/${prevConcept.slug}`}
                    className="concept-nav-link"
                  >
                    <span className="concept-nav-direction">
                      &#8592; Previous
                    </span>
                    <span className="concept-nav-title">
                      {prevConcept.frontmatter.title}
                    </span>
                  </Link>
                )}
              </div>
              <div style={{ textAlign: "right" }}>
                {nextConcept && (
                  <Link
                    href={`/operating-model/${nextConcept.slug}`}
                    className="concept-nav-link"
                  >
                    <span className="concept-nav-direction">Next &#8594;</span>
                    <span className="concept-nav-title">
                      {nextConcept.frontmatter.title}
                    </span>
                  </Link>
                )}
              </div>
            </nav>
          )}
        </article>
      </main>

      <SiteFooter />

      <style>{`
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--fg-3);
          flex-wrap: wrap;
        }

        .breadcrumb-link {
          color: var(--fg-3);
          text-decoration: none;
          transition: color 120ms var(--ease-out);
        }

        .breadcrumb-link:hover {
          color: var(--fg-1);
        }

        .breadcrumb-sep {
          color: var(--fg-4);
          font-size: 12px;
        }

        .breadcrumb-current {
          color: var(--fg-2);
          font-weight: 500;
        }

        .spine-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          text-decoration: none;
          font-size: 12px;
          color: var(--fg-2);
          background: var(--bg-surface);
          transition: border-color 120ms var(--ease-out), color 120ms var(--ease-out);
        }

        .spine-badge:hover {
          border-color: var(--color-midnight);
          color: var(--fg-1);
        }

        .spine-badge-num {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 11px;
          color: var(--fg-3);
        }

        .spine-badge-name {
          font-weight: 500;
        }

        .concept-body {
          max-width: 720px;
          font-size: 16px;
          line-height: 1.7;
          color: var(--fg-2);
        }

        .concept-body h2 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--fg-1);
          margin-top: 40px;
          margin-bottom: 12px;
          letter-spacing: -0.015em;
        }

        .concept-body h3 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          color: var(--fg-1);
          margin-top: 28px;
          margin-bottom: 8px;
        }

        .concept-body p {
          margin-top: 16px;
          margin-bottom: 0;
        }

        .concept-body ul,
        .concept-body ol {
          margin-top: 12px;
          padding-left: 24px;
        }

        .concept-body li {
          margin-top: 6px;
        }

        .concept-nav-link {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-decoration: none;
        }

        .concept-nav-direction {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--fg-3);
          transition: color 120ms var(--ease-out);
        }

        .concept-nav-link:hover .concept-nav-direction {
          color: var(--fg-1);
        }

        .concept-nav-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          color: var(--fg-1);
          transition: color 120ms var(--ease-out);
        }

        .concept-nav-link:hover .concept-nav-title {
          color: var(--accent);
        }
      `}</style>
    </>
  );
}
