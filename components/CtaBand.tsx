import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { contact } from "@/lib/data";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
}

export default function CtaBand({
  eyebrow = "Get started",
  title,
  description,
  image = "/images/fleet.jpg",
}: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-deep">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-deep via-deep/92 to-deep/70"
        aria-hidden="true"
      />
      <div className="bg-grid-deep absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-x relative z-10 py-20 md:py-24">
        <div className="reveal max-w-2xl">
          <span className="eyebrow text-accent">{eyebrow}</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,1.3rem+2.4vw,3rem)] font-extrabold leading-tight text-white">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-on-deep-muted">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="accent" size="lg" icon="arrow">
              Request a Quote
            </Button>
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center gap-2 rounded-full border border-deep-line px-6 text-sm font-semibold text-on-deep transition-colors hover:bg-deep-2"
            >
              <Icon name="whatsapp" size={18} />
              {contact.whatsapp.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
