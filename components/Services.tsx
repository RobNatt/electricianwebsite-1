import { Reveal } from "./Reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] left-[55%] h-[640px] w-[640px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.16), rgba(245,158,11,0) 65%)" }}
      />
      <div className="relative mx-auto max-w-[1160px]">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <p className="eyebrow">Services</p>
            <h2 className="h2">Everything from the meter to the last light switch.</h2>
          </div>
          <p className="m-0 max-w-[360px] text-base leading-[1.6] text-steel">
            One accountable team for design, install, testing and certification.
          </p>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-4">
          {services.map((s, i) => (
            // Reveal owns the scroll-in transform; the inner card owns the hover lift so they don't fight.
            <Reveal key={s.title} delay={(i % 3) * 80} className="flex">
              <article className="glass light-card group flex w-full flex-col gap-4 p-8">
                <span className="font-mono text-xs text-amber transition-[text-shadow] duration-500 group-hover:[text-shadow:0_0_12px_rgba(255,179,71,0.8)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display m-0 text-[22px] font-bold tracking-[-0.02em] transition-colors duration-500 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] text-muted transition-colors duration-500 group-hover:text-fg-2">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
