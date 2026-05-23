"use client";

import { useState } from "react";
import { NoteCard } from "@/components/notes/NoteCard";
import { CategoryFilter } from "@/components/notes/CategoryFilter";
import type { NotePage } from "@/types";

const CATEGORIES = ["All", "Engineering", "Product", "Industry"];

interface NotesClientProps {
  notes: NotePage[];
}

export function NotesClient({ notes }: NotesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotes =
    selectedCategory === "All"
      ? notes
      : notes.filter(
          (note) => note.frontmatter.category === selectedCategory
        );

  return (
    <>
      {/* ── Category filter ──────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 40px",
        }}
      >
        <CategoryFilter
          categories={CATEGORIES}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </section>

      {/* ── Notes grid ──────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 96px",
        }}
      >
        {filteredNotes.length === 0 ? (
          <p
            style={{
              fontSize: "16px",
              color: "var(--fg-3)",
              fontFamily: "var(--font-body)",
            }}
          >
            No notes in this category yet.
          </p>
        ) : (
          <div className="notes-grid">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.slug}
                slug={note.slug}
                title={note.frontmatter.title}
                excerpt={note.frontmatter.excerpt}
                date={note.frontmatter.date}
                category={note.frontmatter.category}
                readingTime={note.readingTime}
                author={note.frontmatter.author}
              />
            ))}
          </div>
        )}
      </section>

      <style>{`
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1023px) {
          .notes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 639px) {
          .notes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
