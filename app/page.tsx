import HomeHero from "@/components/HomeHero";
import MetricsStrip from "@/components/MetricsStrip";
import CredentialStrip from "@/components/CredentialStrip";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import FeatureCard from "@/components/FeatureCard";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import PakistanMap from "@/components/PakistanMap";
import CtaBand from "@/components/CtaBand";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { valueProps, services, industries } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Metrics + why choose */}
      <section className="relative bg-paper py-20 md:py-28">
        <MetricsStrip />
        <div className="container-x mt-16 md:mt-24">
          <Reveal className="max-w-2xl">
            <SectionLabel>Why DJ Shipping</SectionLabel>
            <h2 className="mt-5 font-display text-section font-extrabold text-ink">
              The reliability multinationals build supply chains on
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              A quarter century of licensed operations, nationwide reach, and
              elite global network access — engineered for cargo owners who
              cannot afford uncertainty.
            </p>
          </Reveal>
          <Reveal
            stagger
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {valueProps.map((v, i) => (
              <FeatureCard
                key={v.title}
                title={v.title}
                description={v.description}
                icon={v.icon}
                index={i}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <CredentialStrip />

      {/* Services */}
      <Section tone="paper">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-5 font-display text-section font-extrabold text-ink">
              Three pillars of logistics mastery
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              From port entry to final destination, an integrated service model
              covers every stage of your cargo&rsquo;s journey.
            </p>
          </div>
          <Button href="/services" variant="outline" icon="arrow">
            All services
          </Button>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </Reveal>
      </Section>

      {/* Process */}
      <Section tone="surface">
        <Reveal className="max-w-2xl">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            One partner, from enquiry to proof of delivery
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            A single accountable team manages documentation, clearance, freight
            and final-mile delivery — with visibility at every step.
          </p>
        </Reveal>
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* Industries */}
      <Section tone="paper">
        <Reveal className="max-w-2xl">
          <SectionLabel>Industries served</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            Specialised cargo expertise
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Sector-specific handling tied to the manufacturing hubs we operate
            beside — from Faisalabad textiles to Sialkot surgical exports.
          </p>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <FeatureCard
              key={ind.title}
              title={ind.title}
              description={ind.description}
              icon={ind.icon}
              index={i}
            />
          ))}
        </Reveal>
      </Section>

      {/* Network preview */}
      <Section tone="surface">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Network &amp; coverage</SectionLabel>
            <h2 className="mt-5 font-display text-section font-extrabold text-ink">
              Present where trade flows
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Five offices across Pakistan&rsquo;s commercial zones, backed by a
              worldwide network covering every major shipping route.
            </p>
          </div>
          <Button href="/network" variant="outline" icon="arrow">
            Explore network
          </Button>
        </Reveal>
        <div className="mt-12">
          <PakistanMap />
        </div>
      </Section>

      {/* Proof */}
      <Section tone="paper">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>Proof in the numbers</SectionLabel>
            <h2 className="mt-5 font-display text-section font-extrabold text-ink">
              A track record cargo owners trust
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              The credentials behind every shipment — measurable, verifiable, and
              earned over 25 years of continuous operation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" icon="arrow">
                Start a shipment
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { n: "1 business day", l: "Quotation turnaround", icon: "clock" as const },
              { n: "180+ countries", l: "Reachable via JC TRANS", icon: "globe" as const },
              { n: "5 gateways", l: "Sea & dry ports operated", icon: "anchor" as const },
              { n: "Zero-lapse", l: "Customs licence since 1999", icon: "shield" as const },
            ].map((p) => (
              <div
                key={p.l}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <Icon name={p.icon} size={24} className="text-brand-700" />
                <p className="mt-4 font-display text-2xl font-extrabold text-ink">
                  {p.n}
                </p>
                <p className="mt-1 text-sm text-muted">{p.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Move your cargo with a partner that has done it for 25 years"
        description="Tell us your origin, destination and commodity — and receive a competitive, end-to-end quotation within one business day."
      />
    </>
  );
}
