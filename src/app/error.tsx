"use client";

import Link from "next/link";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <SiteNav />

      <main>
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            padding: "128px 24px 96px",
            textAlign: "center",
          }}
        >
          <img
            src="/logos/icon-black.svg"
            alt=""
            aria-hidden="true"
            style={{
              width: 120,
              height: 120,
              opacity: 0.15,
              margin: "0 auto 32px",
              display: "block",
            }}
          />

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "36px",
              letterSpacing: "-0.022em",
              lineHeight: 1.1,
              color: "var(--fg-1)",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            Something went wrong
          </h1>

          <p
            style={{
              color: "var(--fg-2)",
              fontSize: "16px",
              lineHeight: 1.65,
              marginTop: "12px",
              marginBottom: 0,
            }}
          >
            {error.message || "An unexpected error occurred. Please try again."}
          </p>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Button variant="outline" onClick={reset}>
              Try again
            </Button>

            <Link href="/" style={{ textDecoration: "none" }}>
              <Button variant="primary">Return to The Map</Button>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
