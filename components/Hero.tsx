"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Reveal } from "./Reveal";
import { navLinks, site, stats } from "@/lib/site";

const videoMask = "linear-gradient(90deg, transparent 0%, #000 14%)";
const mediaStyle: React.CSSProperties = {
  WebkitMaskImage: videoMask,
  maskImage: videoMask,
  objectPosition: "65% 50%",
};

const navList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};
const navItem = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // The video only plays when motion is allowed; reduced-motion users get the poster (CSS swap below).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches || !site.playHeroVideo) v.pause();
      else v.play().catch(() => {});
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Soft amber glow that trails the cursor behind the hero content.
  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const r = hero.getBoundingClientRect();
    gsap.set(glow, { x: r.width * 0.62, y: r.height * 0.45 });
    const xTo = gsap.quickTo(glow, "x", { duration: 1.1, ease: "power3.out" });
    const yTo = gsap.quickTo(glow, "y", { duration: 1.1, ease: "power3.out" });
    const onMove = (e: MouseEvent) => {
      const b = hero.getBoundingClientRect();
      xTo(e.clientX - b.left);
      yTo(e.clientY - b.top);
      glow.style.opacity = "1";
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const showVideo = site.playHeroVideo;
  const mediaClass = "absolute top-0 right-0 h-full w-[min(100%,135svh)] object-cover";

  return (
    <header ref={heroRef} id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {showVideo && (
        <video
          ref={videoRef}
          className={`${mediaClass} motion-reduce:hidden`}
          style={mediaStyle}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/hero-pingpong.webm" type="video/webm" />
          <source src="/video/hero-pingpong.mp4" type="video/mp4" />
        </video>
      )}
      <div className={`${mediaClass} ${showVideo ? "hidden motion-reduce:block" : ""}`} aria-hidden="true">
        <Image
          src="/video/hero-poster.jpg"
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 135svh"
          className="object-cover"
          style={mediaStyle}
        />
      </div>

      {/* Scrim: heavier at the bottom and on the text side, for AA contrast over the lit windows */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,8,15,0.6) 0%, rgba(5,8,15,0.15) 30%, rgba(5,8,15,0.55) 65%, #05080F 100%), linear-gradient(90deg, rgba(5,8,15,0.75) 0%, rgba(5,8,15,0.25) 55%, rgba(5,8,15,0) 80%)",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 z-[1] -mt-[280px] -ml-[280px] h-[560px] w-[560px] rounded-full opacity-0 mix-blend-screen blur-[48px] transition-opacity duration-[600ms]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,179,71,0.5) 0%, rgba(245,158,11,0.16) 40%, rgba(245,158,11,0) 70%)",
        }}
      />

      <div className="gutter-x relative z-[2] flex flex-col gap-4 pt-5">
        <Reveal
          as="p"
          className="m-0 text-center text-[11px] font-medium tracking-[0.28em] uppercase opacity-70"
        >
          {site.tagline}
        </Reveal>
        <Reveal
          as="nav"
          delay={80}
          aria-label="Primary"
          className="glass glass-dark mx-auto flex w-full max-w-[1160px] items-center justify-between gap-4 rounded-full py-2.5 pr-2.5 pl-[22px]"
        >
          <a
            href="#top"
            className="font-display flex items-center gap-2.5 text-[17px] font-extrabold tracking-[-0.02em] text-fg"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-amber shadow-[0_0_14px_2px_rgba(255,179,71,0.7)]"
            />
            {site.name}
          </a>
          <motion.ul
            className="m-0 hidden list-none gap-1 p-0 text-sm font-medium desk:flex"
            variants={navList}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((l) => (
              <motion.li key={l.href} variants={navItem}>
                <a
                  href={l.href}
                  className="block rounded-full px-3.5 py-2 text-fg-2 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <a href="#contact" className="btn btn-primary shrink-0 px-[18px] py-[11px] text-sm">
            Request a Quote
          </a>
        </Reveal>
      </div>

      <div className="gutter-x relative z-[2] mx-auto flex w-full max-w-[1160px] flex-1 flex-col justify-end pt-24 pb-10">
        <Reveal
          as="h1"
          delay={200}
          className="font-display m-0 max-w-[820px] text-[clamp(42px,7.2vw,92px)] leading-[0.98] font-bold tracking-[-0.04em] text-balance"
        >
          Electrical work, done right the first time.
        </Reveal>
        <Reveal
          as="p"
          delay={320}
          className="mt-6 mb-0 max-w-[520px] text-[clamp(16px,1.6vw,19px)] leading-[1.55] text-pretty text-fg-2"
        >
          Licensed electricians for custom homes and commercial builds, from first-fix wiring to the last lighting
          scene.
        </Reveal>
        <Reveal delay={440} className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="btn btn-primary px-[26px] py-4 text-base">
            Request a Quote
          </a>
          <a href="#projects" className="btn btn-ghost px-[26px] py-4 text-base">
            See our work
          </a>
        </Reveal>

        <Reveal
          delay={600}
          className="glass mt-[clamp(48px,8vh,88px)] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] [--glass-bg:rgba(10,15,26,0.4)]"
        >
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`flex flex-col gap-1 px-6 py-5 ${i > 0 ? "border-l border-white/8" : ""}`}
            >
              <span
                className={`font-display text-xl font-bold tracking-[-0.02em] ${s.accent ? "text-amber" : ""}`}
              >
                {s.value}
              </span>
              <span className="text-[13px] text-steel">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  );
}
