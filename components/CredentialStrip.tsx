import { memberships, company } from "@/lib/data";

interface CredentialStripProps {
  tone?: "paper" | "surface";
}

// Quiet credential wall + heritage seal. Reads as verifiable trust, not decoration.
export default function CredentialStrip({ tone = "surface" }: CredentialStripProps) {
  return (
    <section className={tone === "surface" ? "bg-surface" : "bg-paper"}>
      <div className="container-x flex flex-col items-center gap-8 border-y border-line py-10 lg:flex-row lg:justify-between lg:gap-12">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/5">
            <span className="font-display text-lg font-extrabold text-accent-600">
              {company.years}
            </span>
          </span>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-ink">
              Licensed since {company.established}
            </p>
            <p className="text-xs text-muted">
              A continuous customs clearance track record
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {memberships.map((m) => (
            <div key={m.abbr} className="flex flex-col items-center text-center">
              <span className="font-display text-lg font-extrabold tracking-tight text-brand-800">
                {m.abbr}
              </span>
              <span className="mono text-[0.6rem] uppercase tracking-widest text-muted">
                {m.scope}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
