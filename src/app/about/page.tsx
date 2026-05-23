import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata = {
  title: "About — TensAI",
  description:
    "TensAI maps the territory of enterprise AI — 18 concepts, three pillars, one governing principle.",
};

export default function AboutPage() {
  const filePath = path.join(process.cwd(), "content", "about.mdx");
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
          <div className="prose-body">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>

      <SiteFooter />

      <style>{`
        .prose-body {
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.75;
          color: var(--fg-2);
        }
        .prose-body h1,
        .prose-body h2,
        .prose-body h3 {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--fg-1);
          letter-spacing: -0.02em;
        }
        .prose-body h1 {
          font-size: clamp(28px, 4vw, 40px);
          margin-top: 0;
          margin-bottom: 28px;
        }
        .prose-body h2 {
          font-size: 22px;
          margin-top: 40px;
          margin-bottom: 12px;
        }
        .prose-body h3 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 28px;
          margin-bottom: 8px;
        }
        .prose-body p {
          margin-top: 0;
          margin-bottom: 20px;
        }
        .prose-body p:last-child {
          margin-bottom: 0;
        }
        .prose-body ul,
        .prose-body ol {
          margin-top: 0;
          margin-bottom: 20px;
          padding-left: 24px;
        }
        .prose-body li {
          margin-bottom: 6px;
        }
        .prose-body a {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-body a:hover {
          color: var(--accent-hover);
        }
        .prose-body em {
          font-style: italic;
          color: var(--fg-3);
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
