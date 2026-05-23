import * as React from "react";

export type BadgeVariant = "default" | "violet" | "success" | "warning" | "danger";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface text-midnight-muted border border-border",
  violet:  "bg-violet-wash text-violet-base border border-violet-wash",
  success: "bg-[color-mix(in_srgb,var(--status-success)_12%,transparent)] text-[var(--status-success)] border border-[color-mix(in_srgb,var(--status-success)_25%,transparent)]",
  warning: "bg-[color-mix(in_srgb,var(--status-warning)_12%,transparent)] text-[var(--status-warning)] border border-[color-mix(in_srgb,var(--status-warning)_25%,transparent)]",
  danger:  "bg-[color-mix(in_srgb,var(--status-danger)_12%,transparent)]  text-[var(--status-danger)]  border border-[color-mix(in_srgb,var(--status-danger)_25%,transparent)]",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1",
        "rounded-xs",           // 4px
        "px-2 py-0.5",
        "text-caption font-medium font-body",
        "leading-none",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
