"use client"; // cursor-tracking spotlight needs mousemove + DOM measurement

import { useRef } from "react";
import Icon from "@/components/Icon";
import { memberships, type Membership } from "@/lib/data";

// Spotlight / "magic" card (à la Aceternity / Magic UI), rebuilt dependency-free
// on our tokens: a brand glow and a glowing border both track the cursor, and a
// subtle lift gives it tactility. Works in light + dark.
function SpotlightCard({ m }: { m: Membership }) {
  const ref = useRef<HTMLDivElement>(null);
  const isGlobal = m.scope === "Global";

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative h-full rounded-2xl transition-transform duration-300 ease-out-quint hover:-translate-y-1"
    >
      {/* cursor-following glowing border (shows through the 1px gap to the card) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), var(--color-brand), transparent 60%)",
        }}
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card p-7 shadow-e1 transition-colors duration-300 group-hover:border-brand/30 lg:p-8">
        {/* soft spotlight fill that follows the cursor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--color-brand) 13%, transparent), transparent 70%)",
          }}
        />

        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
              {m.abbr}
            </h3>
            <span className="mono inline-flex shrink-0 items-center gap-1 rounded-full border border-line bg-paper/60 px-2.5 py-1 text-[0.58rem] uppercase tracking-widest text-muted backdrop-blur-sm">
              <Icon name={isGlobal ? "globe" : "pin"} size={11} />
              {m.scope}
            </span>
          </div>

          <p className="mt-3 text-sm font-semibold italic text-accent-700 dark:text-accent-300">
            {m.name}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {m.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MembershipGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {memberships.map((m) => (
        <SpotlightCard key={m.abbr} m={m} />
      ))}
    </div>
  );
}
