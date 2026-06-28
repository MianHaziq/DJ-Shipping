"use client"; // needs useState for the selected-office interaction

import { useState } from "react";
import Icon from "@/components/Icon";
import { offices } from "@/lib/data";

// Pakistan landmass + Jammu & Kashmir (viewBox 0 0 100 100). Both derived from
// real Natural Earth data (GeoJSON: country border + the "Jammu and Kashmir"
// disputed-area polygon), projected through ONE shared transform (equirect-
// angular, longitude scaled by cos(centerLat)) so they align with each other
// and with the office pins in lib/data.ts.
const COUNTRY =
  "M74.5 12.6 L78.1 15.2 L79.5 19.5 L87.4 21.7 L82.8 26.4 L77.4 27.2 L70.1 25.9 L67.8 28.3 L69.5 33.1 L71.1 36.9 L75 39.7 L70.9 42.9 L71 46.8 L66.3 52.4 L63.3 58.1 L58.3 63.9 L52.7 63.5 L47.5 69.3 L50.6 71.8 L51.1 76.1 L53.8 78.9 L54.8 83.7 L44.2 83.7 L41 87.4 L37.5 86 L36.1 82 L32.4 77.7 L23.5 78.8 L15.7 78.9 L9 79.7 L10.8 73.2 L17.7 70.3 L17.3 67.8 L15 66.9 L14.9 62 L10.3 59.5 L8.4 56.2 L6 53.2 L14 56.1 L18.8 55.3 L21.7 56 L22.7 54.7 L26 55.2 L32.3 52.9 L32.4 48.2 L35.1 45 L38.7 45 L39.2 43.5 L42.9 42.8 L44.6 43.3 L46.5 41.7 L46.2 38.4 L48.3 35 L51.3 33.6 L49.5 29.9 L54 30.1 L55.3 28.1 L55.1 26 L57.5 23.6 L57 20.9 L55.8 18.5 L58.6 16.1 L63.8 14.9 L69.3 14.3 L71.7 13.2 L74.5 12.6 Z";

// Jammu & Kashmir — administered by India, claimed by Pakistan. Shown with a
// dashed outline per the cartographic convention for disputed territory.
const KASHMIR =
  "M87.2 21.7 L87.6 22.1 L88.4 21.7 L88.2 23 L89.6 26.6 L91.4 27.1 L92.9 28.3 L91.6 30.1 L92 32.9 L93.6 34 L93.4 35.3 L94 36 L94 38.3 L93.3 39.1 L92.4 39.1 L91.6 37.6 L89.6 38.5 L89.9 36.9 L88.2 37.8 L86.8 35.5 L85 36.3 L81.2 34.3 L78.4 36.2 L77.7 36 L78.2 37.6 L77.8 38.3 L76.2 39.5 L75.2 39.3 L73.9 38.6 L72.3 38.5 L72.3 36.5 L70.6 36.9 L70.5 35.6 L69 34.6 L69.7 32.9 L68.8 31.5 L70.3 30.3 L68.5 29.7 L68.9 28.8 L67.9 28 L68.7 26.4 L70.7 25.7 L77.5 27.2 L78.7 26.3 L81.7 25.9 L82.2 24.9 L83.4 24.6 L83.6 23.9 L87.2 21.7 Z";

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
          {/* Disputed Jammu & Kashmir — drawn first (beneath the country) so the
              solid border sits on top along the shared Line of Control; only the
              outer, disputed boundary reads as dashed. */}
          <path
            d={KASHMIR}
            fill="var(--color-brand-50)"
            fillOpacity="0.5"
            stroke="var(--color-brand-400)"
            strokeWidth="0.5"
            strokeDasharray="1 0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            // Default the label to the side away from the map's centre; allow
            // a per-office override so tightly-clustered pins don't collide.
            const labelRight = o.map.labelDir
              ? o.map.labelDir === "right"
              : o.map.x > 50;
            return (
              <g
                key={o.code}
                transform={`translate(${o.map.x} ${o.map.y})`}
                className="cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-hidden="true"
              >
                {/* enlarged transparent hit area — the visible dot is tiny,
                    so this gives a comfortable pointer/touch target */}
                <circle r="4.5" fill="transparent" />
                {isActive && (
                  <circle r="3" fill="var(--color-accent)" className="pulse-ring" />
                )}
                <circle
                  r={o.hq ? 2.1 : 1.6}
                  fill={isActive ? "var(--color-accent)" : "var(--color-brand)"}
                  stroke="#fff"
                  strokeWidth="0.5"
                />
                <text
                  x={labelRight ? 3.2 : -3.2}
                  y="0.9"
                  textAnchor={labelRight ? "start" : "end"}
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
      <div className="tick-corners relative flex flex-col rounded-2xl border border-line bg-card p-7 shadow-e1">
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
            <p className="eyebrow mt-1 text-brand dark:text-brand-300">{office.role}</p>
          </div>
          <span className="mono rounded-lg border border-line px-2.5 py-1 text-sm font-semibold text-brand-700">
            {office.code}
          </span>
        </div>

        {office.address && (
          <p className="mt-5 flex gap-2.5 text-sm text-muted">
            <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand dark:text-brand-300" />
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

        {/* City selector — the keyboard/assistive-tech path for choosing an
            office (the map pins are pointer affordances, hidden from AT). */}
        <div className="mt-auto pt-7">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Select an office">
            {offices.map((o, i) => (
              <button
                key={o.code}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
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
