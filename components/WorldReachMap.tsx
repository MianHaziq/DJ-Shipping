import { corridors, worldOrigin } from "@/lib/data";

// Builds a lifted quadratic "flight path" arc between two points.
function arc(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const lift = Math.min(dist * 0.4, 26);
  return `M ${from.x} ${from.y} Q ${mx} ${my - lift} ${to.x} ${to.y}`;
}

export default function WorldReachMap() {
  return (
    <div className="reveal relative overflow-hidden rounded-2xl border border-deep-line bg-deep p-6 md:p-9">
      <div className="bg-grid-deep absolute inset-0 opacity-50" aria-hidden="true" />
      <svg
        viewBox="0 0 100 64"
        className="relative w-full"
        role="img"
        aria-label="World map of DJ Shipping trade corridors from Pakistan"
      >
        {/* arcs */}
        {corridors.map((c) => (
          <path
            key={`arc-${c.code}`}
            d={arc(worldOrigin, c.to)}
            fill="none"
            stroke="var(--color-brand-400)"
            strokeWidth="0.5"
            strokeLinecap="round"
            opacity="0.85"
            pathLength={1}
            className="arc-draw"
          />
        ))}

        {/* corridor endpoints */}
        {corridors.map((c) => (
          <g key={`pt-${c.code}`} transform={`translate(${c.to.x} ${c.to.y})`}>
            <circle r="1" fill="var(--color-brand-300)" />
            <text
              x={c.to.x > worldOrigin.x ? 2 : -2}
              y="0.8"
              textAnchor={c.to.x > worldOrigin.x ? "start" : "end"}
              className="mono"
              fontSize="2.3"
              fill="var(--color-on-deep-muted)"
            >
              {c.code}
            </text>
          </g>
        ))}

        {/* origin node */}
        <g transform={`translate(${worldOrigin.x} ${worldOrigin.y})`}>
          <circle r="3" fill="var(--color-accent)" opacity="0.2">
            <animate attributeName="r" values="2.4;4;2.4" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle r="1.8" fill="var(--color-accent)" stroke="#fff" strokeWidth="0.4" />
          <text
            x="0"
            y="-3.4"
            textAnchor="middle"
            className="mono"
            fontSize="2.6"
            fontWeight="600"
            fill="#fff"
          >
            PAKISTAN
          </text>
        </g>
      </svg>

      {/* Corridor chips */}
      <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {corridors.map((c) => (
          <div
            key={c.region}
            className="rounded-xl border border-deep-line bg-deep-2/40 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{c.region}</span>
              <span className="mono text-[0.65rem] tracking-widest text-brand-300">
                {c.code}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-on-deep-muted">{c.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
