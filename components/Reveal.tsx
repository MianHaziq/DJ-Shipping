interface RevealProps {
  children: React.ReactNode;
  stagger?: boolean;
  as?: "div" | "ul" | "section";
  className?: string;
}

// Adds the reveal hook class; ScrollAnimations toggles .is-visible on scroll.
export default function Reveal({
  children,
  stagger = false,
  as = "div",
  className = "",
}: RevealProps) {
  const Tag = as;
  const cls = `${stagger ? "reveal-stagger" : "reveal"} ${className}`;
  return <Tag className={cls}>{children}</Tag>;
}
