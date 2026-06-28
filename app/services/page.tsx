import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import ServicePillar from "@/components/ServicePillar";
import ComparisonGrid from "@/components/ComparisonGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import { services, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Customs clearance, air & ocean freight forwarding, and land transportation. DJ Shipping's integrated service model covers every stage of your cargo's journey across Pakistan and worldwide.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Three pillars of <span className="text-gradient-sky">logistics</span>{" "}
            mastery
          </>
        }
        description="From port entry to final destination, our integrated service model covers every stage of your cargo's journey — licensed, certified, and refined over a quarter century."
        image="/images/port.jpg"
        imageAlt="Aerial view of a busy container terminal with gantry cranes"
      />

      {/* Pillars */}
      <Section tone="paper">
        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((s, i) => (
            <ServicePillar key={s.slug} service={s} reversed={i % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section tone="surface">
        <Reveal className="max-w-2xl">
          <SectionLabel>Choose your mode</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            Match the freight mode to your cargo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Not sure which option fits? Compare transit times, load types and
            visibility at a glance — then talk to our team for a tailored plan.
          </p>
        </Reveal>
        <div className="mt-12">
          <ComparisonGrid />
        </div>
      </Section>

      {/* Process */}
      <Section tone="paper">
        <Reveal className="max-w-2xl">
          <SectionLabel>End-to-end coverage</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            How a shipment moves with DJ Shipping
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every consignment follows the same accountable, transparent path —
            consolidated under one licensed, experienced team.
          </p>
        </Reveal>
        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionLabel>Common questions</SectionLabel>
            <h2 className="mt-5 font-display text-section font-extrabold text-ink">
              Answers before you ship
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              The questions cargo owners ask us most — from licensing to
              hazardous cargo handling.
            </p>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBand
        eyebrow="One partner. Every shipment."
        title="Consolidate freight, customs and transport under one team"
        description="Bring your whole supply chain to a single licensed, experienced partner — and simplify every shipment from quote to delivery."
        image="/images/freight.jpg"
      />
    </>
  );
}
