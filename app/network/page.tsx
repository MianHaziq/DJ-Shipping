import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import PakistanMap from "@/components/PakistanMap";
import OfficeCard from "@/components/OfficeCard";
import WorldReachMap from "@/components/WorldReachMap";
import MembershipGrid from "@/components/MembershipGrid";
import CtaBand from "@/components/CtaBand";
import { offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Network & Locations",
  description:
    "Five offices across Pakistan — Lahore, Karachi, Faisalabad, Islamabad and Sialkot — backed by a worldwide network covering every major trade corridor. Globally connected, locally expert.",
};

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Network & Locations"
        title={
          <>
            Present where <span className="text-gradient-sky">trade</span> flows
          </>
        }
        description="Five Pakistani offices strategically positioned across commercial zones, supported by a worldwide network covering every major shipping route."
        image="/images/fleet.jpg"
        imageAlt="Aerial view of a logistics distribution hub with a fleet of trucks"
      />

      {/* Interactive map */}
      <Section tone="surface">
        <Reveal className="max-w-2xl">
          <SectionLabel>Coverage map</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            Five gateways, one network
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Select an office to view its role, location and specialised services
            — from the Lahore headquarters to the Karachi port operations hub.
          </p>
        </Reveal>
        <div className="mt-12">
          <PakistanMap />
        </div>
      </Section>

      {/* Office grid */}
      <Section tone="paper">
        <Reveal className="max-w-2xl">
          <SectionLabel>Our offices</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            Local presence, every commercial zone
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <OfficeCard key={o.code} office={o} />
          ))}
        </Reveal>
      </Section>

      {/* World reach */}
      <Section tone="paper" className="pt-0!">
        <Reveal className="max-w-2xl">
          <SectionLabel>Global corridors</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            Key trade corridors we move along
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            From the China / CPEC routes to European ports and North America — a
            worldwide reach anchored in Pakistan.
          </p>
        </Reveal>
        <div className="mt-12">
          <WorldReachMap />
        </div>
      </Section>

      {/* Memberships */}
      <Section tone="surface" id="memberships">
        <Reveal className="max-w-2xl">
          <SectionLabel>Global memberships</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            Globally connected, locally expert
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Accreditations that authorise, verify and extend our reach across
            international logistics.
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <MembershipGrid />
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Wherever your cargo goes"
        title="Tap into a network built across 25 years and 180+ countries"
        description="From a single licensed partner in Pakistan to a pre-vetted global consortium — your shipment is covered end to end."
        image="/images/globe.jpg"
      />
    </>
  );
}
