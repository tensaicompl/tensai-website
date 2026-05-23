import Link from "next/link";
import { getNoteBySlug } from "@/lib/content";
import { NoteCard } from "@/components/notes/NoteCard";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface LinkedNotesProps {
  noteSlugs: string[];
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function LinkedNotes({ noteSlugs }: LinkedNotesProps) {
  if (!noteSlugs || noteSlugs.length === 0) return null;

  const items = noteSlugs.slice(0, 3).map((slug) => {
    const note = getNoteBySlug(slug);
    if (note && note.frontmatter.published) {
      return { type: "note" as const, slug, note };
    }
    return { type: "coming-soon" as const, slug, title: slugToTitle(slug) };
  });

  return (
    <>
      <section style={{ marginTop: "64px" }}>
        {/* ── Section header ──────────────────────────────── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <Eyebrow>FROM THE NOTES</Eyebrow>
          <Link href="/notes" className="linked-notes-see-all">
            See all notes
          </Link>
        </div>

        {/* ── Cards ────────────────────────────────────────── */}
        <div className="linked-notes-grid">
          {items.map((item) => {
            if (item.type === "note") {
              return (
                <NoteCard
                  key={item.slug}
                  slug={item.slug}
                  title={item.note.frontmatter.title}
                  excerpt={item.note.frontmatter.excerpt}
                  date={item.note.frontmatter.date}
                  category={item.note.frontmatter.category}
                  readingTime={item.note.readingTime}
                  author={item.note.frontmatter.author}
                />
              );
            }

            // Coming soon card
            return (
              <div key={item.slug} className="linked-notes-coming-soon">
                <span className="linked-notes-soon-label">Coming soon</span>
                <h3 className="linked-notes-soon-title">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .linked-notes-see-all {
          font-size: 13px;
          font-family: var(--font-body);
          font-weight: 500;
          color: var(--fg-3);
          text-decoration: none;
          transition: color 120ms ease-out;
        }

        .linked-notes-see-all:hover {
          color: var(--fg-1);
        }

        .linked-notes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 1023px) {
          .linked-notes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 639px) {
          .linked-notes-grid {
            grid-template-columns: 1fr;
          }
        }

        .linked-notes-coming-soon {
          border: 1px dashed var(--border);
          border-radius: 16px;
          padding: 24px;
          background: var(--bg-surface);
        }

        .linked-notes-soon-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--fg-4);
          background: var(--bg-card);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        .linked-notes-soon-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 16px;
          color: var(--fg-3);
          margin: 12px 0 0;
          line-height: 1.35;
        }
      `}</style>
    </>
  );
}
