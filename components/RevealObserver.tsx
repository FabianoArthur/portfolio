"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll, progressive: content is visible by default and only
 * elements still below the fold get hidden, right before they are observed.
 * If this never runs (no JS, blocked script), nothing is ever hidden.
 * CSS does the animation and skips it under prefers-reduced-motion.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = elements.filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    elements.forEach((el) => {
      if (!below.includes(el)) el.classList.add("is-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    below.forEach((el) => observer.observe(el));
    root.classList.add("reveal-ready");
    return () => observer.disconnect();
  }, []);

  return null;
}
