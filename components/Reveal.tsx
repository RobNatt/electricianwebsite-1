"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

const EASE = [0.2, 0.7, 0.2, 1] as const;

const tags = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  nav: motion.nav,
  article: motion.article,
  figure: motion.figure,
  li: motion.li,
};

type Props = HTMLMotionProps<"div"> & {
  as?: keyof typeof tags;
  /** Delay in ms, as in the design's data-delay. */
  delay?: number;
};

/** Fade-and-rise on scroll into view (once). */
export function Reveal({ as = "div", delay = 0, children, ...rest }: Props) {
  const Tag = tags[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
