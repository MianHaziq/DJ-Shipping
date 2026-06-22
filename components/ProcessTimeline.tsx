import Icon from "@/components/Icon";
import { processSteps } from "@/lib/data";

// Horizontal connected timeline on desktop, vertical on mobile.
export default function ProcessTimeline() {
  return (
    <div className="reveal-stagger relative grid gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-6 lg:gap-x-3">
      {processSteps.map((step, i) => (
        <div key={step.number} className="relative flex flex-col">
          {/* connector */}
          {i < processSteps.length - 1 && (
            <span
              className="absolute left-6 top-12 hidden h-[calc(100%+2rem)] w-px bg-line md:block lg:left-12 lg:top-6 lg:h-px lg:w-full"
              aria-hidden="true"
            />
          )}
          <div className="relative z-10 flex items-center gap-4 lg:flex-col lg:items-start">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white text-brand-700 shadow-e1">
              <Icon name={step.icon} size={22} />
            </span>
            <span className="mono text-xs font-semibold tracking-widest text-accent-600 lg:mt-4">
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
