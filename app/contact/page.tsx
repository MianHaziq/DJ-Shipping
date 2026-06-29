import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
// import QuoteForm from "@/components/QuoteForm"; // form temporarily disabled
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import type { IconName } from "@/lib/data";
import { contact, businessHours, faqs, offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a freight quote from DJ Shipping. Reach our logistics experts via WhatsApp, phone or email for competitive quotations and end-to-end supply chain solutions.",
};

const methods: {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  desc: string;
  featured?: boolean;
}[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: contact.whatsapp.label,
    href: contact.whatsapp.href,
    external: true,
    desc: "Fastest response — message us directly for quick quotations and cargo status updates.",
    featured: true,
  },
  {
    icon: "phone",
    label: "Telephone",
    value: contact.phone.label,
    href: contact.phone.href,
    desc: "Speak with our operations or sales team during business hours.",
  },
  {
    icon: "mail",
    label: "Management",
    value: contact.mgmtEmail.label,
    href: contact.mgmtEmail.href,
    desc: "A direct line to senior management for complex shipments or partnerships.",
  },
];

const branches = offices.filter((o) => !o.hq);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s move your{" "}
            <span className="text-gradient-sky">cargo forward</span>
          </>
        }
        description="Our logistics experts are available to discuss your freight requirements, provide competitive quotations, and design end-to-end solutions tailored to your supply chain."
        image="/images/towers.jpg"
        imageAlt="Corporate towers viewed from below against the sky"
      />

      {/* Contact methods + details */}
      <Section tone="surface">
        <Reveal className="max-w-2xl">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="mt-5 font-display text-section font-extrabold text-ink">
            Talk to our logistics team
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Reach us directly through whichever channel suits you — our team
            responds to quotation requests and cargo enquiries within one
            business day.
          </p>
        </Reveal>

        {/* Method cards */}
        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {methods.map((m) => {
            const featured = m.featured;
            return (
              <a
                key={m.label}
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-7 shadow-e1 transition-all duration-300 hover:-translate-y-1 hover:shadow-e3 ${
                  featured
                    ? "border-transparent bg-brand text-white"
                    : "border-line bg-card hover:border-brand/30"
                }`}
              >
                {featured && (
                  <div
                    className="bg-grid-deep absolute inset-0 opacity-30"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                      featured
                        ? "bg-white/15 text-white backdrop-blur-sm"
                        : "bg-brand-50 text-brand-700 group-hover:bg-brand group-hover:text-white"
                    }`}
                  >
                    <Icon name={m.icon} size={26} />
                  </span>
                  <Icon
                    name="arrow"
                    size={18}
                    className={`-rotate-45 transition-all duration-300 group-hover:rotate-0 ${
                      featured
                        ? "text-white/70 group-hover:text-white"
                        : "text-line-strong group-hover:text-brand"
                    }`}
                  />
                </div>
                <p
                  className={`eyebrow relative mt-6 ${
                    featured ? "text-white/80" : "text-muted"
                  }`}
                >
                  {m.label}
                </p>
                <p
                  className={`relative mt-1.5 font-display text-lg font-bold tracking-tight ${
                    featured ? "text-white" : "text-ink group-hover:text-brand"
                  }`}
                >
                  {m.value}
                </p>
                <p
                  className={`relative mt-3 text-sm leading-relaxed ${
                    featured ? "text-white/85" : "text-muted"
                  }`}
                >
                  {m.desc}
                </p>
              </a>
            );
          })}
        </Reveal>

        {/* Hours + head office */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* Business hours */}
          <Reveal className="flex flex-col rounded-2xl border border-line bg-card p-7 shadow-e1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name="clock" size={20} />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">
                Business hours
              </h3>
              <span className="mono ml-auto rounded-md border border-line px-2 py-0.5 text-[0.6rem] tracking-widest text-muted">
                PKT
              </span>
            </div>
            <dl className="mt-6 space-y-3">
              {businessHours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between gap-4 border-b border-line pb-3 text-sm last:border-0 last:pb-0"
                >
                  <dt className="text-muted">{h.day}</dt>
                  <dd
                    className={`text-right font-semibold ${
                      h.hours === "Closed"
                        ? "text-accent-700"
                        : "text-ink-700"
                    }`}
                  >
                    {h.hours}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted">
              <Icon name="whatsapp" size={14} className="mt-0.5 shrink-0 text-brand" />
              WhatsApp messages are monitored outside office hours for urgent
              cargo enquiries.
            </p>
          </Reveal>

          {/* Head office */}
          <Reveal className="tick-corners relative flex flex-col overflow-hidden rounded-2xl border border-deep-line bg-deep p-7 text-on-deep shadow-e2">
            <div
              className="bg-grid-deep absolute inset-0 opacity-40"
              aria-hidden="true"
            />
            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-300 backdrop-blur-sm">
                  <Icon name="pin" size={20} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  Head office
                </h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-on-deep-muted">
                {contact.headOffice}
              </p>

              <div className="mt-6">
                <p className="eyebrow text-on-deep-muted">
                  Branch offices · {branches.length}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {branches.map((o) => (
                    <span
                      key={o.city}
                      className="mono rounded-full border border-deep-line px-3 py-1 text-xs tracking-wide text-on-deep-muted"
                    >
                      {o.city}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="/network"
                className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
              >
                Explore our full network
                <Icon name="arrow" size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        {/*
          ── Quote form temporarily disabled ──────────────────────────
          To re-enable: uncomment the QuoteForm import at the top of this
          file and the block below.

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
            <Reveal>
              <SectionLabel>Request a quote</SectionLabel>
              <h2 className="mt-5 font-display text-section font-extrabold text-ink">
                Tell us about your shipment
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Share your cargo details and we&rsquo;ll respond with a tailored,
                end-to-end quotation within one business day.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        */}
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionLabel>Frequently asked</SectionLabel>
            <h2 className="mt-5 font-display text-section font-extrabold text-ink">
              Common questions
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Everything you need to know before your first shipment with us.
            </p>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBand
        eyebrow="Your shipment, our responsibility"
        title="Start a conversation with our logistics team today"
        description="The quickest way to a quotation is WhatsApp — send us your origin, destination and commodity, and we'll respond within one business day."
        image="/images/port.jpg"
      />
    </>
  );
}
