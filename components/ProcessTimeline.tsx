import Icon from "@/components/Icon";
import { processSteps } from "@/lib/data";

// Horizontal connected timeline on desktop, vertical on mobile.
export default function ProcessTimeline() {
  return (
    <div className="reveal-stagger relative grid gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-6 lg:gap-x-3">
      {processSteps.map((step, i) => (
        <div key={step.number} className="relative flex flex-col">
          {/* connector — horizontal line only on the lg single-row layout.
              (On md the steps wrap to a 3-across grid, where a connector
              line can't track reading order, so it's hidden there.) */}
          {i < processSteps.length - 1 && (
            <span
              className="absolute left-12 top-6 hidden h-px w-[calc(100%+0.75rem)] bg-line lg:block"
              aria-hidden="true"
            />
          )}
          <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-card text-brand-700 shadow-e1">
              <Icon name={step.icon} size={22} />
            </span>
            <span className="mono text-xs font-semibold tracking-widest text-accent-700 lg:mt-4">
              STEP {step.number}
            </span>
          </div>
          <div className="mt-3 lg:pr-3">
            <h3 className="font-display text-base font-bold text-ink">
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
