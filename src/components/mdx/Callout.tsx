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
      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
        <Icon
          size={20}
          style={{ color: "var(--fg-1)", flexShrink: 0, marginTop: "2px" }}
        />
        <div>
          {title && (
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--fs-body)",
                color: "var(--fg-1)",
                marginBottom: "var(--space-2)",
              }}
            >
              {title}
            </p>
          )}
          <div style={{ fontSize: "var(--fs-small)", color: "var(--fg-2)", lineHeight: "var(--lh-relaxed)" }}>
            {children}
          </div>
        </div>
      </div>
    </aside>
  );
}
