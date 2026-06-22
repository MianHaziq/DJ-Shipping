import Image from "next/image";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { contact } from "@/lib/data";
import type { Service } from "@/lib/data";

interface ServicePillarProps {
  service: Service;
  reversed?: boolean;
}

export default function ServicePillar({ service, reversed }: ServicePillarProps) {
  return (
    <div
      id={service.slug}
      className="reveal scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Visual */}
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="duotone relative aspect-[4/3] overflow-hidden rounded-2xl border border-line shadow-e2">
          <Image
            src={service.image}
            alt={`${service.title} operations`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-5 top-5 z-10 font-display text-6xl font-extrabold text-white/25">
            {service.number}
          </span>
          <span className="absolute bottom-5 left-5 z-10 mono text-xs tracking-widest text-white/80">
            // {service.slug.replace(/-/g, " ").toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-brand">
            <Icon name={service.icon} size={24} />
          </span>
          <span className="eyebrow text-accent-600">{service.tagline}</span>
        </div>

        <h2 className="mt-5 font-display text-[clamp(1.7rem,1.2rem+1.6vw,2.5rem)] font-extrabold text-ink">
          {service.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          {service.description}
        </p>

        <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {service.capabilities.map((cap) => (
            <li key={cap} className="flex items-start gap-2.5 text-sm text-ink-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon name="check" size={13} />
              </span>
              {cap}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href={contact.whatsapp.href} external variant="outline" icon="whatsapp">
            Enquire about this service
          </Button>
        </div>
      </div>
    </div>
  );
}
