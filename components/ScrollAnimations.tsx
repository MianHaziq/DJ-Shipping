"use client"; // needs IntersectionObserver + DOM to drive scroll reveals and count-ups

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-scan on every route change — client-side navigation mounts new
    // .reveal elements that the previous observer never saw.
    let observer: IntersectionObserver | null = null;

    const formatCount = (n: number, prefix: string, suffix: string) =>
      `${prefix}${n.toLocaleString("en-US")}${suffix}`;

    const runCountUp = (el: HTMLElement) => {
      if (el.dataset.counting === "done") return;
      el.dataset.counting = "done";
      const end = Number(el.dataset.countup);
      const prefix = el.dataset.prefix ?? "";
      const suffix = el.dataset.suffix ?? "";
      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatCount(Math.round(end * eased), prefix, suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const setup = () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const targets = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-stagger"
      );

      if (prefersReduced || !("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-visible"));
        document
          .querySelectorAll<HTMLElement>("[data-countup]")
          .forEach((el) => {
            el.textContent = formatCount(
              Number(el.dataset.countup),
              el.dataset.prefix ?? "",
              el.dataset.suffix ?? ""
            );
          });
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            el.classList.add("is-visible");
            el.querySelectorAll<HTMLElement>("[data-countup]").forEach(runCountUp);
            if (el.dataset.countup) runCountUp(el);
            observer?.unobserve(el);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );

      targets.forEach((el) => {
        if (!el.classList.contains("is-visible")) observer?.observe(el);
      });
      document
        .querySelectorAll<HTMLElement>("[data-countup]")
        .forEach((el) => {
          if (!el.closest(".reveal, .reveal-stagger") && el.dataset.counting !== "done")
            observer?.observe(el);
        });
    };

    // Wait for the new route's DOM to paint before scanning.
    const raf = requestAnimationFrame(setup);

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
