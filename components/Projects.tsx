import Image from "next/image";
import { Reveal } from "./Reveal";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-[1160px]">
        <Reveal className="mb-14 max-w-[640px]">
          <p className="eyebrow">Selected projects</p>
          <h2 className="h2">Recent work, wired and signed off.</h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">
          {projects.map((p, i) => (
            <Reveal
              as="figure"
              key={p.title}
              delay={i * 80}
              className={`relative m-0 overflow-hidden rounded-[20px] bg-ink-2 ${
                p.tall ? "row-span-2 aspect-[4/5]" : "aspect-[16/10]"
              }`}
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.placeholder.replace(/^Project photo: /, "")}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-start justify-center p-6 pt-[18%] text-center text-[13px] text-hint"
                  style={{
                    background:
                      "radial-gradient(120% 80% at 70% 20%, rgba(255,179,71,0.08), rgba(255,179,71,0) 60%), #0B1220",
                  }}
                >
                  {p.placeholder}
                </div>
              )}
              <figcaption
                className="glass pointer-events-none absolute right-4 bottom-4 left-4 rounded-2xl px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] [--glass-bg:rgba(10,15,26,0.5)]"
              >
                <p className="font-display m-0 text-[17px] font-bold">{p.title}</p>
                <p className="mt-1 mb-0 text-[13px] text-muted">{p.meta}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
