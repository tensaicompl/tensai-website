import * as React from "react";
import Link from "next/link";

interface NoteCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  author: string;
}

export function NoteCard({
  slug,
  title,
  excerpt,
  date,
  category,
  readingTime,
  author,
}: NoteCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Link href={`/notes/${slug}`} className="note-card-link">
        <article className="note-card">
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--fg-3)",
              background: "var(--bg-surface)",
              padding: "4px 10px",
              borderRadius: "4px",
            }}
          >
            {category}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "18px",
              color: "var(--fg-1)",
              margin: "12px 0 0",
              lineHeight: 1.35,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as React.CSSProperties}
          >
            {title}
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: "var(--fg-2)",
              lineHeight: 1.5,
              margin: "8px 0 0",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            } as React.CSSProperties}
          >
            {excerpt}
          </p>

          <div className="note-card-meta">
            <span>{formattedDate}</span>
            <span className="note-card-dot" aria-hidden="true" />
            <span>{readingTime}</span>
            <span className="note-card-dot" aria-hidden="true" />
            <span>{author}</span>
          </div>
        </article>
      </Link>

      <style>{`
        .note-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: 16px;
          height: 100%;
        }

        .note-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          transition:
            box-shadow 120ms ease-out,
            border-color 120ms ease-out;
          height: 100%;
          box-sizing: border-box;
        }

        .note-card-link:hover .note-card {
          box-shadow: var(--shadow-md);
          border-color: var(--color-midnight-muted);
        }

        .note-card-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          font-size: 13px;
          font-family: var(--font-body);
          color: var(--fg-3);
          flex-wrap: wrap;
        }

        .note-card-dot {
          display: inline-block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--fg-4);
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}
