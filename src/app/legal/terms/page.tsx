import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata = {
  title: "Terms of Service — TensAI",
  description: "TensAI terms of service.",
  robots: { index: false },
};

export default function TermsPage() {
  const filePath = path.join(process.cwd(), "content", "terms.mdx");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);

  return (
    <>
      <SiteNav />

      <main>
        <article
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "96px 24px 96px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 40px)",
              letterSpacing: "-0.022em",
              lineHeight: 1.1,
              color: "var(--fg-1)",
              marginTop: 0,
              marginBottom: "40px",
            }}
          >
            Terms of Service
          </h1>

          <div className="legal-body">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>

      <SiteFooter />

      <style>{`
        .legal-body {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.7;
          color: var(--fg-2);
        }
        .legal-body h2 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: var(--fg-1);
          letter-spacing: -0.015em;
          margin-top: 36px;
          margin-bottom: 8px;
        }
        .legal-body p {
          margin-top: 0;
          margin-bottom: 16px;
        }
        .legal-body p:last-child {
          margin-bottom: 0;
        }
        .legal-body em {
          font-style: italic;
          color: var(--fg-3);
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
