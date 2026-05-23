"use client";

import { useState } from "react";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ children, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const lang = language || className?.replace("language-", "") || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: "relative",
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        margin: "var(--space-6) 0",
        overflow: "hidden",
      }}
    >
      {lang && (
        <div
          style={{
            position: "absolute",
            top: "var(--space-2)",
            right: "var(--space-12)",
            fontSize: "var(--fs-caption)",
            fontFamily: "var(--font-mono)",
            color: "var(--fg-3)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {lang}
        </div>
      )}
      <button
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy code"}
        style={{
          position: "absolute",
          top: "var(--space-2)",
          right: "var(--space-2)",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xs)",
          padding: "4px 8px",
          fontSize: "var(--fs-caption)",
          fontFamily: "var(--font-mono)",
          color: "var(--fg-3)",
          cursor: "pointer",
          transition: "color var(--dur-fast) var(--ease-out)",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre
        style={{
          padding: "var(--space-4)",
          margin: 0,
          overflow: "auto",
          fontFamily: "var(--font-mono)",
          fontSize: "0.875em",
          lineHeight: "var(--lh-relaxed)",
          color: "var(--fg-1)",
        }}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
