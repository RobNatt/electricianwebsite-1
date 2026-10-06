"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { steps } from "@/lib/site";

export function Process() {
  return (
    <section id="process" className="section-pad border-y border-white/6 bg-ink-2">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mb-16 max-w-[640px]">
          <p className="eyebrow">Process</p>
          <h2 className="h2">Four steps, no surprises.</h2>
        </Reveal>
        <div className="relative">
          {/* Connecting line: desktop only, since it can't follow a vertical stack */}
          <div aria-hidden="true" className="absolute top-1.5 right-1.5 left-1.5 hidden h-px bg-white/10 desk:block" />
          <motion.div
            aria-hidden="true"
            className="absolute top-1.5 right-1.5 left-1.5 hidden h-px origin-left desk:block"
            style={{
              background: "linear-gradient(90deg,#F59E0B,#FFB347)",
              boxShadow: "0 0 12px rgba(255,179,71,0.6)",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          />
          <ol className="m-0 grid list-none grid-cols-1 gap-x-8 gap-y-10 p-0 desk:grid-cols-4">
            {steps.map((s, i) => {
              const last = i === steps.length - 1;
              return (
                <Reveal as="li" key={s.title} delay={i * 150} className="flex flex-col gap-3">
                  <span
                    aria-hidden="true"
                    className={`relative z-[1] mb-4 h-[13px] w-[13px] rounded-full border-2 border-amber ${
                      last ? "bg-amber shadow-[0_0_14px_rgba(255,179,71,0.7)]" : "bg-ink"
                    }`}
                  />
                  <span className="font-mono text-xs text-steel">Step {i + 1}</span>
                  <h3 className="font-display m-0 text-[22px] font-bold tracking-[-0.02em]">{s.title}</h3>
                  <p className="m-0 text-[15px] leading-[1.6] text-muted">{s.body}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
