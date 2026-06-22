import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { contact, memberships } from "@/lib/data";

export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-deep pt-20">
      {/* Background photo + brand scrim */}
      <Image
        src="/images/hero.jpg"
        alt="Container vessel underway at sea, fully loaded with shipping containers"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-deep/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/30"
        aria-hidden="true"
      />
      <div className="bg-grid-deep absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Content */}
      <div className="container-x relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="eyebrow text-accent">
              Licensed Freight Forwarder · Est. {1999}
            </span>
          </div>

          <h1 className="reveal mt-7 font-display text-[clamp(2.6rem,1.4rem+4.6vw,5rem)] font-extrabold leading-[0.98] tracking-tight text-white text-balance">
            25 Years of{" "}
            <span className="text-gradient-brand whitespace-nowrap">
              End-to-End
            </span>{" "}
            Supply Chain Reliability
          </h1>

          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-on-deep-muted">
            Global reach combined with deep local regulatory expertise. From
            customs clearance to air, ocean and land freight — DJ Shipping moves
            cargo across Pakistan and worldwide with the precision multinationals
            depend on.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="accent" size="lg" icon="arrow">
              Request a Quote
            </Button>
            <Button href="/services" variant="light" size="lg">
              Explore Services
            </Button>
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center gap-2 rounded-full border border-deep-line px-6 text-sm font-semibold text-on-deep transition-colors hover:bg-deep-2"
            >
              <Icon name="whatsapp" size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Credential chips */}
          <div className="reveal mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="eyebrow text-on-deep-muted">Accredited by</span>
            {memberships.map((m) => (
              <span
                key={m.abbr}
                className="mono text-sm font-medium tracking-wide text-white/80"
              >
                {m.abbr}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative manifest tag */}
      <div className="absolute bottom-10 right-8 z-10 hidden lg:block">
        <div className="mono rounded-lg border border-deep-line bg-deep/60 px-4 py-3 text-xs text-on-deep-muted backdrop-blur-sm">
          <div className="text-brand-300">// LIVE CORRIDOR</div>
          <div className="mt-1 text-white">KHI → RTM · ETA 21D</div>
        </div>
      </div>
    </section>
  );
}
