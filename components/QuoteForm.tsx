"use client"; // needs useState for the submission state machine + validation

import { useState } from "react";
import Icon from "@/components/Icon";
import { contact } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

const modes = ["Air Freight", "Ocean Freight (FCL)", "Ocean Freight (LCL)", "Land Transport", "Customs Clearance"];
const incoterms = ["EXW", "FOB", "CIF", "CFR", "DAP", "DDP", "Not sure"];

const fieldCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus:bg-card focus:ring-2 focus:ring-brand/15 aria-[invalid=true]:border-accent-600 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-accent/20";
const labelCls = "mb-1.5 block text-xs font-semibold text-ink-700";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string)?.trim() ?? "";

    const name = get("name");
    const email = get("email");
    const origin = get("origin");
    const destination = get("destination");
    const commodity = get("commodity");

    // Validate: required fields present + email well-formed.
    const missing = new Set<string>();
    if (!name) missing.add("name");
    if (!email) missing.add("email");
    if (!origin) missing.add("origin");
    if (!destination) missing.add("destination");
    if (!commodity) missing.add("commodity");

    const emailMalformed = !!email && !emailPattern.test(email);
    if (emailMalformed) missing.add("email");

    if (missing.size > 0) {
      setInvalid(missing);
      setStatus("error");
      setError(
        emailMalformed && missing.size === 1
          ? "Please enter a valid email address."
          : "Please complete the required fields marked with an asterisk."
      );
      // Move focus to the first invalid field for keyboard / screen-reader users.
      const order = ["name", "email", "origin", "destination", "commodity"];
      const firstInvalid = order.find((k) => missing.has(k));
      if (firstInvalid) {
        (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      }
      return;
    }

    setInvalid(new Set());
    setStatus("sending");

    const lines = [
      "New Quote Request — DJ Shipping",
      `Name: ${name}`,
      get("company") && `Company: ${get("company")}`,
      `Email: ${email}`,
      get("phone") && `Phone: ${get("phone")}`,
      `Mode: ${get("mode")}`,
      `Origin: ${origin}`,
      `Destination: ${destination}`,
      `Commodity: ${commodity}`,
      get("weight") && `Weight / Volume: ${get("weight")}`,
      `Incoterm: ${get("incoterm")}`,
      get("date") && `Target date: ${get("date")}`,
      get("message") && `Notes: ${get("message")}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`${contact.whatsapp.href}?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("success");
    form.reset();
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand/20 bg-card p-10 text-center shadow-e2">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <Icon name="check" size={32} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink">
          Request prepared
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Your details have been packaged into a WhatsApp message — just hit send,
          and our team will respond with a quotation within one business day. You
          can also email{" "}
          <a className="font-semibold text-brand dark:text-brand-300" href={contact.mgmtEmail.href}>
            {contact.mgmtEmail.label}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex h-11 items-center rounded-full border border-line px-6 text-sm font-semibold text-ink transition-colors hover:bg-surface"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-card p-6 shadow-e2 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name <span className="text-accent-700">*</span>
          </label>
          <input id="name" name="name" type="text" required aria-required="true" aria-invalid={invalid.has("name")} className={fieldCls} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            Company
          </label>
          <input id="company" name="company" type="text" className={fieldCls} placeholder="Acme Trading Co." />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Work email <span className="text-accent-700">*</span>
          </label>
          <input id="email" name="email" type="email" required aria-required="true" aria-invalid={invalid.has("email")} className={fieldCls} placeholder="jane@acme.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={fieldCls} placeholder="+92 300 0000000" />
        </div>
        <div>
          <label htmlFor="mode" className={labelCls}>
            Freight mode
          </label>
          <select id="mode" name="mode" className={fieldCls} defaultValue={modes[0]}>
            {modes.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="incoterm" className={labelCls}>
            Incoterm
          </label>
          <select id="incoterm" name="incoterm" className={fieldCls} defaultValue="Not sure">
            {incoterms.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="origin" className={labelCls}>
            Origin <span className="text-accent-700">*</span>
          </label>
          <input id="origin" name="origin" type="text" required aria-required="true" aria-invalid={invalid.has("origin")} className={fieldCls} placeholder="Shanghai, China" />
        </div>
        <div>
          <label htmlFor="destination" className={labelCls}>
            Destination <span className="text-accent-700">*</span>
          </label>
          <input id="destination" name="destination" type="text" required aria-required="true" aria-invalid={invalid.has("destination")} className={fieldCls} placeholder="Karachi, Pakistan" />
        </div>
        <div>
          <label htmlFor="commodity" className={labelCls}>
            Commodity <span className="text-accent-700">*</span>
          </label>
          <input id="commodity" name="commodity" type="text" required aria-required="true" aria-invalid={invalid.has("commodity")} className={fieldCls} placeholder="Textile machinery" />
        </div>
        <div>
          <label htmlFor="weight" className={labelCls}>
            Weight / Volume
          </label>
          <input id="weight" name="weight" type="text" className={fieldCls} placeholder="2 x 40HC · 18,000 kg" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="date" className={labelCls}>
            Target ship date
          </label>
          <input id="date" name="date" type="text" className={fieldCls} placeholder="Within 2 weeks" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Additional notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className={`${fieldCls} resize-none`}
            placeholder="Any special handling, deadlines or documentation requirements…"
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 flex items-center gap-2 rounded-xl border border-accent/30 bg-accent-50 px-4 py-3 text-sm font-medium text-accent-700"
        >
          <Icon name="shield" size={16} />
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Preparing…" : "Request a Quote"}
          {status !== "sending" && <Icon name="arrow" size={16} />}
        </button>
        <p className="mono text-xs text-muted">
          Response within <span className="text-brand dark:text-brand-300">1 business day</span>
        </p>
      </div>
    </form>
  );
}
