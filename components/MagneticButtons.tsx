"use client";

import { useEffect } from "react";
import gsap from "gsap";

/** Magnetic pull on every .btn, for fine pointers without reduced motion. */
export function MagneticButtons() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>(".btn").forEach((el) => {
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.35,
          y: (e.clientY - r.top - r.height / 2) * 0.45,
          duration: 0.4,
          ease: "power3.out",
        });
      };
      const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
        gsap.set(el, { clearProps: "transform" });
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
