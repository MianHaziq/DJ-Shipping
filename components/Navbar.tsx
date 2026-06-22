"use client"; // needs useState/useEffect for scroll state, mobile drawer, pathname

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, contact } from "@/lib/data";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock + Escape while drawer open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 transition-all duration-300 ease-out-quint ${
        scrolled
          ? "border-b border-line bg-white/85 backdrop-blur-xl shadow-e1"
          : "border-b border-transparent bg-white/0"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="DJ Shipping home"
          >
            <Logo tone={scrolled ? "default" : "light"} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const linkColor = scrolled
                ? active
                  ? "text-brand"
                  : "text-ink-700 hover:text-brand"
                : active
                  ? "text-white"
                  : "text-white/75 hover:text-white";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkColor}`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex"
            >
              <Icon name="whatsapp" size={16} />
              Request a Quote
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                scrolled
                  ? "border-line bg-white text-ink"
                  : "border-white/25 bg-white/10 text-white backdrop-blur-sm"
              }`}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-120 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-deep/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`drawer-enter absolute right-0 top-0 flex h-dvh w-[86%] max-w-sm flex-col bg-deep text-on-deep ${
            open ? "is-open" : ""
          }`}
        >
          <div className="flex h-20 items-center justify-between px-6">
            <Logo tone="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deep-line text-on-deep"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 pt-4" aria-label="Mobile">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-deep-2 text-white"
                    : "text-on-deep hover:bg-deep-2"
                }`}
              >
                <span>{item.label}</span>
                <span className="mono text-xs text-on-deep-muted">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 border-t border-deep-line p-6">
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent font-semibold text-white"
            >
              <Icon name="whatsapp" size={18} />
              Request a Quote
            </a>
            <a
              href={contact.phone.href}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-deep-line font-semibold text-on-deep"
            >
              <Icon name="phone" size={18} />
              {contact.phone.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
