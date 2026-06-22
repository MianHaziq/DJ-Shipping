import StatCounter from "@/components/StatCounter";
import { stats } from "@/lib/data";

interface MetricsStripProps {
  overlap?: boolean;
}

export default function MetricsStrip({ overlap = false }: MetricsStripProps) {
  return (
    <div className={`container-x relative z-20 ${overlap ? "-mt-14 md:-mt-20" : ""}`}>
      <div className="reveal-stagger grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-e3 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`relative p-7 md:p-9 ${
              i !== 0 ? "border-line" : ""
            } ${i % 2 !== 0 ? "border-l" : ""} ${i >= 2 ? "border-t lg:border-t-0" : ""} ${
              i !== 0 ? "lg:border-l" : ""
            }`}
          >
            <div className="flex items-baseline gap-1">
              <StatCounter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                className="font-display text-4xl font-extrabold tracking-tight text-brand-700 md:text-5xl"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
            <span
              className="absolute right-5 top-6 mono text-[0.6rem] tracking-widest text-line-strong"
              aria-hidden="true"
            >
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
