interface ContentPlaceholderProps {
  title: string;
}

export default function ContentPlaceholder({ title }: ContentPlaceholderProps) {
  return (
    <div
      aria-label={`Placeholder content for ${title}`}
      style={{
        background: "var(--accent-wash, #EDE9FE)",
        border: "1px dashed var(--border)",
        borderRadius: 12,
        padding: "48px 32px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "var(--fg-3)",
          fontSize: 16,
          margin: 0,
        }}
      >
        {`Content for ${title} is being drafted`}
      </p>
    </div>
  );
}
