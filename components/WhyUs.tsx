"use client";

import { motion, type Variants } from "framer-motion";
import { commitments } from "@/lib/site";

const EASE = [0.2, 0.7, 0.2, 1] as const;
const VIEWPORT = { once: true, amount: 0.35, margin: "0px 0px -60px 0px" } as const;

// Left column: eyebrow, title and summary slide in from the left as one block.
const intro: Variants = {
  hidden: { opacity: 0, x: -64 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};

// Each commitment row runs its own sequence when it scrolls in: rule draws, then number, title, summary rise.
const row: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function WhyUs() {
  return (
    <section id="why" className="section-pad overflow-hidden border-y border-white/6 bg-ink-2">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(40px,6vw,96px)]">
        <motion.div variants={intro} initial="hidden" whileInView="show" viewport={VIEWPORT} className="self-start">
          <p className="eyebrow">Why us</p>
          <h2 className="h2">Four things we put in writing.</h2>
          <p className="mt-6 mb-0 max-w-[420px] text-base leading-[1.6] text-steel">
            These are commitments in every quote we send, not marketing lines.
          </p>
        </motion.div>
        <ol className="m-0 flex list-none flex-col p-0">
          {commitments.map((c, i) => (
            <motion.li
              key={c.title}
              variants={row}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="relative grid grid-cols-[48px_1fr] gap-4 py-7"
            >
              <motion.span
                aria-hidden="true"
                variants={rule}
                className="absolute top-0 right-0 left-0 h-px origin-left bg-white/10"
              />
              {i === commitments.length - 1 && (
                <motion.span
                  aria-hidden="true"
                  variants={rule}
                  className="absolute right-0 bottom-0 left-0 h-px origin-left bg-white/10"
                />
              )}
              <motion.span variants={rise} className="pt-1 font-mono text-[13px] text-amber">
                {String(i + 1).padStart(2, "0")}
              </motion.span>
              <div>
                <motion.h3
                  variants={rise}
                  className="font-display mt-0 mb-2 text-xl font-bold tracking-[-0.02em]"
                >
                  {c.title}
                </motion.h3>
                <motion.p variants={rise} className="m-0 text-[15px] leading-[1.6] text-muted">
                  {c.body}
                </motion.p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
