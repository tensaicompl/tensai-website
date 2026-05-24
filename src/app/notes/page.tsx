import { getAllNotes } from "@/lib/content";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NotesClient } from "./NotesClient";

export const metadata = {
  title: "Notes — TensAI",
  description:
    "Essays on building AI properly — from enterprise governance to practitioner playbook.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <SiteNav />

      <main>
        {/* ── Page header ─────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "96px",
            paddingBottom: "48px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <Eyebrow>NOTES</Eyebrow>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 56px)",
                letterSpacing: "-0.022em",
                lineHeight: 1.1,
                color: "var(--fg-1)",
                marginTop: "12px",
              }}
            >
              Insights
            </h1>
            <p
              style={{
                fontSize: "var(--fs-lead)",
                color: "var(--fg-2)",
                lineHeight: 1.55,
                maxWidth: "640px",
                marginTop: "16px",
              }}
            >
              Essays on building AI properly — from enterprise governance to
              practitioner playbook.
            </p>
          </div>
        </section>

        {/* ── Client-side filter + grid ─────────────────────── */}
        <NotesClient notes={notes} />
      </main>

      <SiteFooter />
    </>
  );
}
