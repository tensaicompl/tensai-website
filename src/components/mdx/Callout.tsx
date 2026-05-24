import { Info, AlertTriangle, FileText } from "lucide-react";

interface CalloutProps {
  type?: "info" | "warning" | "note";
  title?: string;
  children: React.ReactNode;
}

const ICONS = {
  info: Info,
  warning: AlertTriangle,
  note: FileText,
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const Icon = ICONS[type];

  return (
    <aside
      role="note"
      aria-label={title || `${type} callout`}
      style={{
        background: "var(--accent-wash)",
        borderLeft: "3px solid var(--color-midnight)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-6)",
        margin: "var(--space-6) 0",
      }}
    >
      {title && (
        <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", marginBottom: "var(--space-2)" }}>
          <Icon
            size={18}
            style={{ color: "var(--fg-1)", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--fs-body)",
              color: "var(--fg-1)",
              lineHeight: 1,
            }}
          >
            {title}
          </span>
        </div>
      )}
      <div style={{ fontSize: "var(--fs-small)", color: "var(--fg-2)", lineHeight: "var(--lh-relaxed)", paddingLeft: title ? "30px" : "0" }}>
        {children}
      </div>
    </aside>
  );
}
