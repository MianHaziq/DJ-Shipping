import { company } from "@/lib/data";

interface LogoProps {
  tone?: "default" | "light";
}

export default function Logo({ tone = "default" }: LogoProps) {
  const word = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className="flex items-center gap-3">
      <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-[11px] bg-gradient-to-br from-brand-500 to-brand-800 shadow-brand">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* abstract cargo + forward motion mark */}
          <path d="M4 15.5 6 9h12l2 6.5" stroke="white" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 9V5.5h4l2.2 3.5" stroke="white" strokeWidth="1.7" strokeLinejoin="round" />
          <path
            d="M3.5 18.4c1.1.8 2 .8 3.1 0 1.1-.8 2.1-.8 3.2 0 1.1.8 2.1.8 3.2 0 1.1-.8 2-.8 3.1 0 1 .7 1.9.8 2.9.2"
            stroke="#ffd9a8"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.2rem] font-bold tracking-tight ${word}`}
        >
          DJ Shipping
        </span>
        <span className="eyebrow mt-1 text-[0.56rem] text-accent">
          Est. {company.established} · Licensed
        </span>
      </span>
    </span>
  );
}
