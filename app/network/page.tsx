import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import PakistanMap from "@/components/PakistanMap";
import OfficeCard from "@/components/OfficeCard";
import WorldReachMap from "@/components/WorldReachMap";
import CtaBand from "@/components/CtaBand";
import { offices, memberships } from "@/lib/data";

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
      <Section tone="surface">
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
        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {memberships.map((m) => (
            <div
              key={m.abbr}
              className="flex gap-5 rounded-2xl border border-line bg-card p-7 shadow-e1"
            >
              <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-50 px-1 text-center">
                <span className="font-display text-sm font-extrabold leading-none text-brand-800 dark:text-brand-300">
                  {/* multi-word abbrs (e.g. "JC TRANS") show the first token,
                      not a mid-word slice like "JC T" */}
                  {m.abbr.includes(" ") ? m.abbr.split(" ")[0] : m.abbr}
                </span>
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {m.name}
                  </h3>
                  <span className="mono rounded-md border border-line px-2 py-0.5 text-[0.6rem] uppercase tracking-widest text-muted">
                    {m.scope}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
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
