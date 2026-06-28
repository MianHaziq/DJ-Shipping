interface SectionLabelProps {
  children: React.ReactNode;
  number?: string;
  tone?: "brand" | "light";
  className?: string;
}

// Mono "operations terminal" eyebrow — the signature detail.
export default function SectionLabel({
  children,
  number,
  tone = "brand",
  className = "",
}: SectionLabelProps) {
  const color =
    tone === "light" ? "text-brand-300" : "text-brand dark:text-brand-300";
  const line = tone === "light" ? "bg-brand-300/40" : "bg-brand/30";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`h-px w-8 ${line}`} aria-hidden="true" />
      {number && (
        <span className={`eyebrow ${color} opacity-70`}>{number}</span>
      )}
      <span className={`eyebrow ${color}`}>{children}</span>
    </div>
  );
}
