"use client";

import { MotionConfig } from "framer-motion";

/** Honour prefers-reduced-motion for every Framer Motion animation on the page. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
