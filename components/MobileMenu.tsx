"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/site";

const EASE = [0.2, 0.7, 0.2, 1] as const;

const panel = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: EASE } },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2, ease: EASE } },
};
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

export const MENU_ID = "mobile-menu";

/** Hamburger that morphs into a close icon. Shown below the 900px breakpoint. */
export function MenuToggle({
  open,
  onToggle,
  buttonRef,
}: {
  open: boolean;
  onToggle: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const bar = "absolute left-1/2 h-[1.5px] w-[18px] -translate-x-1/2 rounded-full bg-fg transition-transform duration-300";
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={MENU_ID}
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative h-11 w-11 shrink-0 cursor-pointer rounded-full border border-white/14 bg-white/6 transition-colors hover:bg-white/10 desk:hidden"
    >
      <span aria-hidden="true" className={`${bar} top-[18px] ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
      <span aria-hidden="true" className={`${bar} top-[25px] ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
    </button>
  );
}

/** Glass dropdown under the nav pill; links stagger in each time it opens. */
export function MobileMenuPanel({
  open,
  onClose,
  toggleRef,
}: {
  open: boolean;
  onClose: (restoreFocus?: boolean) => void;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector("a")?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose(true);
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) onClose();
    };
    const mq = window.matchMedia("(min-width: 900px)");
    const onWide = () => mq.matches && onClose();

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    mq.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      mq.removeEventListener("change", onWide);
    };
  }, [open, onClose, toggleRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id={MENU_ID}
          className="glass absolute top-full [--glass-bg:rgba(8,12,20,0.96)] right-[clamp(16px,4vw,48px)] left-[clamp(16px,4vw,48px)] mt-2 origin-top p-3 desk:hidden"
          variants={panel}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <nav aria-label="Mobile">
            <motion.ul className="m-0 flex list-none flex-col p-0" variants={list}>
              {navLinks.map((l) => (
                <motion.li key={l.href} variants={item}>
                  <a
                    href={l.href}
                    onClick={() => onClose()}
                    className="font-display flex min-h-12 items-center rounded-xl px-4 text-lg font-semibold tracking-[-0.01em] text-fg transition-colors hover:bg-white/8 hover:text-white"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={item} className="mt-2 border-t border-white/8 pt-3">
                <a
                  href="#contact"
                  onClick={() => onClose()}
                  className="btn btn-primary block w-full px-6 py-3.5 text-center text-base"
                >
                  Request a Quote
                </a>
              </motion.li>
            </motion.ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
