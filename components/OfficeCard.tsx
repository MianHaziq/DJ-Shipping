import Icon from "@/components/Icon";
import { contact } from "@/lib/data";
import type { Office } from "@/lib/data";

interface OfficeCardProps {
  office: Office;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-card p-7 shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:shadow-e2 ${
        office.hq ? "border-accent/40" : "border-line hover:border-brand/30"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display text-xl font-bold text-ink">
              {office.city}
            </h3>
            {office.hq && (
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-accent-700">
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
        <p className="mt-4 flex gap-2.5 text-sm text-muted">
          <Icon name="pin" size={17} className="mt-0.5 shrink-0 text-brand dark:text-brand-300" />
          {office.address}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {office.services.map((s) => (
          <span
            key={s}
            className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-700"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-6">
        <a
          href={contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand dark:text-brand-300 transition-colors hover:text-brand-700"
        >
          <Icon name="whatsapp" size={16} />
          Enquire
        </a>
        <a
          href={contact.phone.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors hover:text-brand dark:hover:text-brand-300"
        >
          <Icon name="phone" size={16} />
          Call
        </a>
      </div>
    </div>
  );
}
