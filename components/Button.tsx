import Link from "next/link";
import Icon from "@/components/Icon";
import type { IconName } from "@/lib/data";

type Variant = "primary" | "accent" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-all duration-200 ease-out-quint focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-brand hover:bg-brand-800 hover:-translate-y-0.5",
  accent:
    "bg-accent text-white shadow-accent hover:bg-accent-600 hover:-translate-y-0.5",
  outline:
    "border border-brand/30 text-brand dark:text-brand-300 bg-transparent hover:bg-brand-50 hover:border-brand/50",
  ghost: "text-ink hover:bg-surface-2",
  light:
    "bg-white text-brand-900 hover:bg-brand-50 hover:-translate-y-0.5 shadow-e2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8rem]",
  md: "h-11 px-6 text-[0.875rem]",
  lg: "h-13 px-7 text-[0.95rem]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  external,
  className = "",
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          size={size === "lg" ? 18 : 16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          aria-label={ariaLabel}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
