import * as React from "react";

type AsProp = "span" | "p" | "div" | "label" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  as?: AsProp;
}

export function Eyebrow({
  children,
  className = "",
  as: Tag = "span",
}: EyebrowProps) {
  return (
    <Tag
      className={[
        "font-body font-semibold",
        "text-eyebrow",          // 11px
        "uppercase",
        "tracking-[0.14em]",    // --tracking-eyebrow
        "text-gray-base",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
