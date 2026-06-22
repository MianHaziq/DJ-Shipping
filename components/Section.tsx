type Tone = "paper" | "surface" | "deep";

interface SectionProps {
  children: React.ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  containerClassName?: string;
}

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  deep: "bg-deep text-on-deep",
};

export default function Section({
  children,
  tone = "paper",
  id,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${tones[tone]} ${className}`}
    >
      <div className={`container-x relative ${containerClassName}`}>{children}</div>
    </section>
  );
}
