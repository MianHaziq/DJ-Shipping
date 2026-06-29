import Link from "next/link";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import {
  company,
  contact,
  navItems,
  footerServices,
  memberships,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-on-deep">
      <div className="bg-grid-deep absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-x relative">
        {/* Top */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] md:py-20">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-on-deep-muted">
              {company.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {memberships.map((m) => (
                <span
                  key={m.abbr}
                  className="mono rounded-md border border-deep-line px-2.5 py-1 text-[0.62rem] tracking-widest text-on-deep-muted"
                >
                  {m.abbr}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-brand-300">Navigate</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-on-deep-muted transition-colors hover:text-white"
                  >
                    {item.label === "Home" ? "Home" : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-brand-300">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-on-deep-muted transition-colors hover:text-white"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-brand-300">Head Office</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3 text-on-deep-muted">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand-300" />
                <span>{contact.headOffice}</span>
              </li>
              <li>
                <a
                  href={contact.phone.href}
                  className="flex items-center gap-3 text-on-deep-muted transition-colors hover:text-white"
                >
                  <Icon name="phone" size={18} className="shrink-0 text-brand-300" />
                  {contact.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-on-deep-muted transition-colors hover:text-white"
                >
                  <Icon name="whatsapp" size={18} className="shrink-0 text-brand-300" />
                  {contact.whatsapp.label}
                </a>
              </li>
              <li>
                <a
                  href={contact.mgmtEmail.href}
                  className="flex items-center gap-3 text-on-deep-muted transition-colors hover:text-white"
                >
                  <Icon name="mail" size={18} className="shrink-0 text-brand-300" />
                  {contact.mgmtEmail.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-deep-line py-7 text-sm text-on-deep-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <a
            href={`https://${company.domain}`}
            className="mono text-xs tracking-widest text-brand-300 transition-colors hover:text-white"
          >
            {company.domain}
          </a>
        </div>
      </div>
    </footer>
  );
}
