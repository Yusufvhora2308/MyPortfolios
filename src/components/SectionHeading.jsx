export default function SectionHeading({ index, label, title, description, align = "left" }) {
  return (
    <div className={`reveal mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}>
      <p className="font-mono text-[12px] text-[var(--color-coral)] mb-3 tracking-wide">
        {index} <span style={{ color: "var(--text-muted)" }}>// {label}</span>
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed max-w-xl" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
