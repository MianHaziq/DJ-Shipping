import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-deep pt-20 text-on-deep">
      <div className="bg-grid-deep absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-x relative z-10 py-24 text-center">
        <span className="mono text-sm tracking-[0.3em] text-brand-300">
          ERROR · 404
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-extrabold leading-[1] text-white">
          This route is off the manifest
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-on-deep-muted">
          The page you&rsquo;re looking for couldn&rsquo;t be located. Let&rsquo;s
          route you back on course.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="accent" size="lg" icon="arrow">
            Back to home
          </Button>
          <Button href="/contact" variant="light" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
