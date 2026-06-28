import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-e3"
    >
      <div className="duotone duotone-soft relative h-44 w-full overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 z-10 mono text-sm font-semibold tracking-widest text-white/90">
          {service.number}
        </span>
        <span className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-card/95 text-brand-700 shadow-e2">
          <Icon name={service.icon} size={22} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-bold text-ink">
          {service.title}
        </h3>
        <p className="eyebrow mt-1.5 text-accent-700">{service.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {service.description.split(". ").slice(0, 2).join(". ")}.
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand dark:text-brand-300 transition-colors group-hover:text-brand-700">
          Explore service
          <Icon
            name="arrow"
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
