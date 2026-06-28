import Icon from "@/components/Icon";
import type { IconName } from "@/lib/data";

interface Mode {
  name: string;
  icon: IconName;
  transit: string;
  bestFor: string;
  load: string;
  tracking: string;
}

const modes: Mode[] = [
  {
    name: "Air Freight",
    icon: "plane",
    transit: "1–7 days",
    bestFor: "Urgent, high-value & perishable cargo",
    load: "Express & general air cargo",
    tracking: "Flight-level status",
  },
  {
    name: "Ocean Freight",
    icon: "ship",
    transit: "15–40 days",
    bestFor: "Bulk, heavy & cost-sensitive cargo",
    load: "FCL & LCL containers",
    tracking: "Vessel & B/L tracking",
  },
  {
    name: "Land Transport",
    icon: "truck",
    transit: "1–10 days",
    bestFor: "Inland & cross-border delivery",
    load: "20ft / 40ft / 40HC & flatbed",
    tracking: "Traffic-desk visibility",
  },
];

const rows: { label: string; key: keyof Omit<Mode, "name" | "icon"> }[] = [
  { label: "Typical transit", key: "transit" },
  { label: "Best for", key: "bestFor" },
  { label: "Load types", key: "load" },
  { label: "Tracking", key: "tracking" },
];

export default function ComparisonGrid() {
  return (
    <div className="reveal overflow-hidden rounded-2xl border border-line bg-card shadow-e1">
      {/* Mobile: stacked cards */}
      <div className="grid gap-px bg-line md:hidden">
        {modes.map((m) => (
          <div key={m.name} className="bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon name={m.icon} size={20} />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{m.name}</h3>
            </div>
            <dl className="mt-4 space-y-2">
              {rows.map((r) => (
                <div key={r.key} className="flex justify-between gap-4 text-sm">
                  <dt className="text-muted">{r.label}</dt>
                  <dd className="text-right font-medium text-ink-700">{m[r.key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Desktop: comparison table */}
      <table className="hidden w-full border-collapse text-left md:table">
        <thead>
          <tr className="border-b border-line">
            <th className="w-44 p-6 align-bottom">
              <span className="eyebrow text-muted">Compare modes</span>
            </th>
            {modes.map((m) => (
              <th key={m.name} className="p-6 align-bottom">
                <span className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon name={m.icon} size={20} />
                  </span>
                  <span className="font-display text-lg font-bold text-ink">
                    {m.name}
                  </span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key} className="border-b border-line last:border-0">
              <th className="p-6 text-sm font-semibold text-muted">{r.label}</th>
              {modes.map((m) => (
                <td key={m.name} className="p-6 text-sm font-medium text-ink-700">
                  {m[r.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
