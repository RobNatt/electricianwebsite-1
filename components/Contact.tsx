"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { projectTypes, site } from "@/lib/site";

const labelClass = "flex flex-col gap-2 text-[13px] font-medium text-fg-2";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t border-white/6 bg-ink-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[120px] -right-[160px] h-[720px] w-[720px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.18), rgba(245,158,11,0) 65%)" }}
      />
      <div className="relative mx-auto grid max-w-[1160px] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-[clamp(40px,6vw,80px)]">
        <Reveal className="flex flex-col gap-10">
          <div>
            <p className="eyebrow">Request a quote</p>
            <h2 className="h2">Tell us about the project.</h2>
            <p className="mt-6 mb-0 max-w-[420px] text-base leading-[1.6] text-muted">
              We reply within one business day. For outages or anything that smells like burning, call now.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="mt-0 mb-1.5 text-[13px] text-steel">Phone, 24/7 emergencies</p>
              <a
                href={site.phoneHref}
                className="font-display text-[28px] font-bold tracking-[-0.02em] text-fg hover:text-amber"
              >
                {site.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="mt-0 mb-1.5 text-[13px] text-steel">Email</p>
              <a href={`mailto:${site.email}`} className="text-[17px] text-fg hover:text-amber">
                {site.email}
              </a>
            </div>
            <div>
              <p className="mt-0 mb-1.5 text-[13px] text-steel">Office hours</p>
              <p className="m-0 text-base leading-[1.6]">
                {site.hours[0]}
                <br />
                {site.hours[1]}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="glass p-[clamp(24px,4vw,40px)]">
          {sent ? (
            <div role="status" className="flex flex-col gap-3 py-6">
              <span
                aria-hidden="true"
                className="h-3 w-3 rounded-full bg-amber shadow-[0_0_16px_3px_rgba(255,179,71,0.6)]"
              />
              <h3 className="font-display mt-2 mb-0 text-[26px] font-bold tracking-[-0.02em]">
                Thanks, we&apos;ve got it.
              </h3>
              <p className="m-0 text-base leading-[1.6] text-muted">
                An electrician will call you within one business day to talk through the scope.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: send the form data to the quote inbox (email service or CRM).
                setSent(true);
              }}
            >
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5">
                <label className={labelClass}>
                  Name
                  <input className="field" required name="name" autoComplete="name" placeholder="Your full name" />
                </label>
                <label className={labelClass}>
                  Phone
                  <input
                    className="field"
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 000-0000"
                  />
                </label>
              </div>
              <label className={labelClass}>
                Project type
                <select className="field" name="type">
                  {projectTypes.map((t) => (
                    <option key={t} className="bg-ink-2">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Message
                <textarea
                  className="field resize-y"
                  name="message"
                  rows={5}
                  placeholder="Scope, address or suburb, and when you'd like to start"
                />
              </label>
              <button type="submit" className="btn btn-primary cursor-pointer border-none px-[26px] py-4 text-base">
                Request a Quote
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
