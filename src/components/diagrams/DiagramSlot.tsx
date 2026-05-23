interface DiagramSlotProps {
  title: string;
  height?: number;
  className?: string;
}

export default function DiagramSlot({ title, height = 400, className }: DiagramSlotProps) {
  return (
    <div
      aria-label={`Placeholder diagram for ${title}`}
      className={className}
      style={{
        border: "1px dashed var(--border)",
        borderRadius: 16,
        background: "var(--bg-surface)",
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          fontWeight: 500,
          color: "var(--fg-midnight, #0F172A)",
        }}
      >
        {`Diagram — ${title} · to be designed`}
      </span>
    </div>
  );
}
