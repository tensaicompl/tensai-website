import * as React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Enable hover lift effect (shadow-md + darker border). Default: true */
  hover?: boolean;
  /** Inner padding. Default: "28px" */
  padding?: string | number;
}

export function Card({
  children,
  className = "",
  hover = true,
  padding = "28px",
}: CardProps) {
  const paddingValue =
    typeof padding === "number" ? `${padding}px` : padding;

  const base = [
    "bg-bg-card",
    "border border-border",
    "rounded-lg", // 16px — radius-lg
    "shadow-sm",
    "transition-all duration-base ease-standard",
  ].join(" ");

  const hoverClasses = hover
    ? "hover:shadow-md hover:border-midnight-muted/30 cursor-default"
    : "";

  return (
    <div
      className={[base, hoverClasses, className].filter(Boolean).join(" ")}
      style={{ padding: paddingValue }}
    >
      {children}
    </div>
  );
}
