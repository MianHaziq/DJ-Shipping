import Icon from "@/components/Icon";
import type { IconName } from "@/lib/data";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconName;
  index?: number;
}

// Used for value props ("Why partners choose us") and industries.
export default function FeatureCard({
  title,
  description,
  icon,
  index,
}: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-line bg-white p-7 shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-e2">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <Icon name={icon} size={24} />
        </span>
        {index !== undefined && (
          <span className="mono text-xs tracking-widest text-line-strong">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
