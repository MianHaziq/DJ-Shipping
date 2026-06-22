"use client"; // needs useState for the selected-office interaction

import { useState } from "react";
import Icon from "@/components/Icon";
import { offices } from "@/lib/data";

// Stylized Pakistan landmass (viewBox 0 0 100 100) — office pins positioned by data coords.
const COUNTRY =
  "M60 14 L74 16 L80 26 L78 40 L70 55 L60 68 L52 80 L42 86 L30 88 L20 82 L14 66 L20 50 L30 40 L42 30 L52 22 Z";

export default function PakistanMap() {
  const [active, setActive] = useState(0); // default HQ (Lahore is index 0)
  const office = offices[active];

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
      {/* Map */}
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-4">
        <div className="bg-dots absolute inset-0 opacity-50" aria-hidden="true" />
        <svg
          viewBox="0 0 100 100"
          className="relative h-full w-full"
          role="img"
          aria-label="Map of DJ Shipping offices across Pakistan"
        >
          <path
            d={COUNTRY}
            fill="var(--color-brand-50)"
            stroke="var(--color-brand-200)"
            strokeWidth="0.6"
          />
          <path
            d={COUNTRY}
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            opacity="0.4"
          />
          {offices.map((o, i) => {
            const isActive = i === active;
            return (
              <g
                key={o.code}
                transform={`translate(${o.map.x} ${o.map.y})`}
                className="cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                role="button"
                aria-label={`${o.city} office`}
                onFocus={() => setActive(i)}
              >
                {isActive && (
                  <circle r="3.4" fill="var(--color-accent)" opacity="0.25">
                    <animate
                      attributeName="r"
                      values="2.6;4.4;2.6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  r={o.hq ? 2.1 : 1.6}
                  fill={isActive ? "var(--color-accent)" : "var(--color-brand)"}
                  stroke="#fff"
                  strokeWidth="0.5"
                />
                <text
                  x={o.map.x > 50 ? 3.2 : -3.2}
                  y="0.9"
                  textAnchor={o.map.x > 50 ? "start" : "end"}
                  className="mono"
                  fontSize="2.6"
                  fill={isActive ? "var(--color-accent-700)" : "var(--color-ink-700)"}
                  fontWeight="600"
                >
                  {o.code}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Details panel */}
      <div className="tick-corners relative flex flex-col rounded-2xl border border-line bg-white p-7 shadow-e1">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-2xl font-bold text-ink">
                {office.city}
              </h3>
              {office.hq && (
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-accent-700">
                  HQ
                </span>
              )}
            </div>
            <p className="eyebrow mt-1 text-brand">{office.role}</p>
          </div>
          <span className="mono rounded-lg border border-line px-2.5 py-1 text-sm font-semibold text-brand-700">
            {office.code}
          </span>
        </div>

        {office.address && (
          <p className="mt-5 flex gap-2.5 text-sm text-muted">
            <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand" />
            {office.address}
          </p>
        )}

        <div className="mt-6">
          <p className="eyebrow text-muted">Services</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {office.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* City selector */}
        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2">
            {offices.map((o, i) => (
              <button
                key={o.code}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  i === active
                    ? "bg-brand text-white"
                    : "bg-surface text-ink-700 hover:bg-surface-2"
                }`}
              >
                {o.city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
