import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
}

// Compact inner-page hero with a duotone photo band.
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-deep pt-20">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-35"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-deep via-deep/92 to-deep/55"
        aria-hidden="true"
      />
      <div className="bg-grid-deep absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-x relative z-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel tone="light">{eyebrow}</SectionLabel>
          <h1 className="reveal mt-6 font-display text-[clamp(2.3rem,1.4rem+3.6vw,4rem)] font-extrabold leading-[1.02] tracking-tight text-white">
            {title}
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-on-deep-muted">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
