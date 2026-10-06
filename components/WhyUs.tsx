import { Reveal } from "./Reveal";
import { commitments } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why" className="section-pad border-y border-white/6 bg-ink-2">
      <div className="mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(40px,6vw,96px)]">
        <Reveal>
          <p className="eyebrow">Why us</p>
          <h2 className="h2">Four things we put in writing.</h2>
          <p className="mt-6 mb-0 max-w-[420px] text-base leading-[1.6] text-steel">
            These are commitments in every quote we send, not marketing lines.
          </p>
        </Reveal>
        <div className="flex flex-col">
          {commitments.map((c, i) => (
            <Reveal
              key={c.title}
              className={`grid grid-cols-[48px_1fr] gap-4 border-t border-white/10 py-7 ${
                i === commitments.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="pt-1 font-mono text-[13px] text-amber">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display mt-0 mb-2 text-xl font-bold tracking-[-0.02em]">{c.title}</h3>
                <p className="m-0 text-[15px] leading-[1.6] text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
