import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllNotes, getNoteBySlug } from "@/lib/content";
import { mdxOptions } from "@/lib/mdx-options";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import ContentPlaceholder from "@/components/mdx/ContentPlaceholder";
import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { NoteCard } from "@/components/notes/NoteCard";

const mdxComponents = {
  ContentPlaceholder,
  Callout,
  CodeBlock,
};

export async function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};
  return {
    title: `${note.frontmatter.title} — Notes — TensAI`,
    description: note.frontmatter.excerpt,
  };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  const formattedDate = new Date(note.frontmatter.date).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  // Related notes: other published notes, up to 3
  const allNotes = getAllNotes();
  const relatedNotes = allNotes.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <SiteNav />

      <main>
        <article
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "96px 24px 80px",
          }}
        >
          {/* ── Meta row ────────────────────────────────────── */}
          <div className="note-meta-row">
            <span className="note-category-badge">
              {note.frontmatter.category}
            </span>
            <span className="note-meta-sep" aria-hidden="true" />
            <span>{formattedDate}</span>
            <span className="note-meta-sep" aria-hidden="true" />
            <span>{note.readingTime}</span>
          </div>

          {/* ── Title ─────────────────────────────────────── */}
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
            {note.frontmatter.title}
          </h1>

          {/* ── Author ──────────────────────────────────────── */}
          <p
            style={{
              fontSize: "15px",
              color: "var(--fg-2)",
              marginTop: "8px",
              fontFamily: "var(--font-body)",
            }}
          >
            By {note.frontmatter.author}
          </p>

          {/* ── MDX body ────────────────────────────────────── */}
          <div className="note-body" style={{ marginTop: "48px" }}>
            <MDXRemote source={note.content} components={mdxComponents} options={mdxOptions} />
          </div>
        </article>

        {/* ── Related notes ───────────────────────────────── */}
        {relatedNotes.length > 0 && (
          <section
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 24px 96px",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "22px",
                color: "var(--fg-1)",
                marginTop: "48px",
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}
            >
              More from Notes
            </h2>
            <div className="related-notes-grid">
              {relatedNotes.map((related) => (
                <NoteCard
                  key={related.slug}
                  slug={related.slug}
                  title={related.frontmatter.title}
                  excerpt={related.frontmatter.excerpt}
                  date={related.frontmatter.date}
                  category={related.frontmatter.category}
                  readingTime={related.readingTime}
                  author={related.frontmatter.author}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />

      <style>{`
        .note-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: var(--fg-3);
          font-family: var(--font-body);
          flex-wrap: wrap;
        }

        .note-category-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--fg-3);
          background: var(--bg-surface);
          padding: 4px 10px;
          border-radius: 4px;
        }

        .note-meta-sep {
          display: inline-block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--fg-4);
          flex-shrink: 0;
        }

        .note-body {
          font-size: 16px;
          line-height: 1.75;
          color: var(--fg-2);
        }

        .note-body p {
          margin: 24px 0 0;
        }

        .note-body p:first-child {
          margin-top: 0;
        }

        .note-body h2 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--fg-1);
          margin-top: 48px;
          margin-bottom: 12px;
          letter-spacing: -0.015em;
          line-height: 1.2;
        }

        .note-body h3 {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
          color: var(--fg-1);
          margin-top: 36px;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .note-body ul,
        .note-body ol {
          margin-top: 16px;
          padding-left: 24px;
          color: var(--fg-2);
        }

        .note-body li {
          margin-top: 8px;
          line-height: 1.65;
        }

        .note-body a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .note-body a:hover {
          color: var(--accent-hover);
        }

        .note-body blockquote {
          border-left: 3px solid var(--color-midnight);
          margin: 28px 0;
          padding: 4px 20px;
          color: var(--fg-1);
          font-style: italic;
          font-size: 18px;
          line-height: 1.6;
        }

        .related-notes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1023px) {
          .related-notes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 639px) {
          .related-notes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
