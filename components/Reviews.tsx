import { Reveal } from "./Reveal";
import { reviews, type Review } from "@/lib/site";

function ReviewCard({ r, hidden }: { r: Review; hidden?: boolean }) {
  return (
    <figure className="glass glass-hover m-0 flex flex-col gap-6 p-7" aria-hidden={hidden || undefined}>
      <blockquote className="m-0 text-base leading-[1.6] text-pretty text-quote">
        <span className="mb-3.5 block text-[13px] tracking-[0.15em] text-amber" role="img" aria-label="5 stars">
          ★★★★★
        </span>
        {r.quote}
      </blockquote>
      <figcaption className="text-sm">
        <span className="block font-semibold">{r.name}</span>
        <span className="text-steel">{r.role}</span>
      </figcaption>
    </figure>
  );
}

/** One endlessly scrolling column. The list is rendered twice so translateY(-50%) loops seamlessly. */
function Column({ items, duration, reverse }: { items: Review[]; duration: number; reverse?: boolean }) {
  return (
    <div
      className={`marquee flex flex-col gap-4 pb-4 ${reverse ? "marquee-reverse" : ""}`}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      {items.map((r) => (
        <ReviewCard key={r.name} r={r} />
      ))}
      {items.map((r) => (
        <ReviewCard key={`${r.name}-dup`} r={r} hidden />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[20%] -left-[120px] h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.13), rgba(245,158,11,0) 65%)" }}
      />
      <div className="relative mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(40px,6vw,80px)]">
        <Reveal>
          <p className="eyebrow">Reviews</p>
          <h2 className="h2">What clients say after handover.</h2>
          <p className="mt-6 mb-0 max-w-[400px] text-base leading-[1.6] text-steel">
            Reviews from homeowners, builders and property managers we&apos;ve worked with.
          </p>
        </Reveal>
        <Reveal
          className="marquee-viewport relative h-[640px] overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            maskImage: "linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          }}
        >
          {/* Phones: a single column with every review */}
          <div className="desk:hidden">
            <Column items={reviews} duration={42} />
          </div>
          {/* Desktop: two columns scrolling in opposite directions */}
          <div className="hidden grid-cols-2 items-start gap-4 desk:grid">
            <Column items={reviews.slice(0, 4)} duration={42} />
            <Column items={reviews.slice(4)} duration={50} reverse />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
