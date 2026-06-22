import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";
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
}[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: contact.whatsapp.label,
    href: contact.whatsapp.href,
    external: true,
    desc: "Fastest response — message us directly for quick quotations and cargo status updates.",
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
    label: "Sales Email",
    value: contact.salesEmail.label,
    href: contact.salesEmail.href,
    desc: "For commercial enquiries, rate requests and new business discussions.",
  },
  {
    icon: "mail",
    label: "Management",
    value: contact.mgmtEmail.label,
    href: contact.mgmtEmail.href,
    desc: "A direct channel to senior management for complex shipments or partnerships.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s move your{" "}
            <span className="text-gradient-brand">cargo forward</span>
          </>
        }
        description="Our logistics experts are available to discuss your freight requirements, provide competitive quotations, and design end-to-end solutions tailored to your supply chain."
        image="/images/towers.jpg"
        imageAlt="Corporate towers viewed from below against the sky"
      />

      {/* Form + methods */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          {/* Form */}
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

          {/* Right column */}
          <div className="space-y-6">
            <Reveal stagger className="grid gap-4 sm:grid-cols-2">
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-e1 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-e2"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={m.icon} size={20} />
                  </span>
                  <p className="eyebrow mt-4 text-muted">{m.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{m.value}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{m.desc}</p>
                </a>
              ))}
            </Reveal>

            {/* Hours */}
            <Reveal className="rounded-2xl border border-line bg-white p-6 shadow-e1">
              <div className="flex items-center gap-2.5">
                <Icon name="clock" size={20} className="text-brand-700" />
                <h3 className="font-display text-base font-bold text-ink">
                  Business hours
                </h3>
                <span className="mono text-[0.6rem] tracking-widest text-muted">
                  PKT
                </span>
              </div>
              <dl className="mt-4 space-y-2.5">
                {businessHours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between gap-4 border-b border-line pb-2.5 text-sm last:border-0 last:pb-0"
                  >
                    <dt className="text-muted">{h.day}</dt>
                    <dd
                      className={`text-right font-medium ${
                        h.hours === "Closed" ? "text-accent-600" : "text-ink-700"
                      }`}
                    >
                      {h.hours}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                WhatsApp messages are monitored outside office hours for urgent
                cargo enquiries.
              </p>
            </Reveal>

            {/* Head office */}
            <Reveal className="tick-corners relative rounded-2xl border border-line bg-deep p-6 text-on-deep shadow-e1">
              <div className="flex items-center gap-2.5">
                <Icon name="pin" size={20} className="text-brand-300" />
                <h3 className="font-display text-base font-bold text-white">
                  Head office
                </h3>
              </div>
              <p className="mt-3 text-sm text-on-deep-muted">{contact.headOffice}</p>
              <p className="mt-4 text-xs text-on-deep-muted">
                Branch offices in{" "}
                {offices
                  .filter((o) => !o.hq)
                  .map((o) => o.city)
                  .join(", ")}
                .
              </p>
            </Reveal>
          </div>
        </div>
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
        description="The quickest way to a quotation is WhatsApp — or submit the form above and we'll be in touch within one business day."
        image="/images/port.jpg"
      />
    </>
  );
}
