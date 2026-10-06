# Build: One-page site for a high-performing electrician

## Brand
- Business: [BUSINESS NAME], [CITY/SERVICE AREA]
- Positioning: premium, precise, trustworthy. This is the electrician you hire for homes and commercial builds where the work has to be impeccable. It should never look like a discount tradesman.
- Primary CTA: "Request a Quote" (phone: [PHONE])

## Stack
Next.js (App Router), TypeScript, Tailwind, Framer Motion. Motion is standard: scroll reveals, a staggered hero entrance, and hover states.

## The hero video (the centerpiece)
Three assets, all in `C:\Users\Robert\Downloads`. Copy them into `public/video/` with these names:

| Source file | Copy to | Purpose |
|---|---|---|
| `hf_20261006_152249_pingpong.webm` | `public/video/hero-pingpong.webm` | Primary (VP9, 1.6 MB) |
| `hf_20261006_152249_pingpong.mp4` | `public/video/hero-pingpong.mp4` | Fallback (H.264, 1.7 MB) for Safari and older browsers |
| `hero-poster.jpg` | `public/video/hero-poster.jpg` | Poster and reduced-motion image |

What it is: a 1440×1440 night shot of a modern concrete-and-timber building powering up. It starts dark, then the windows, uplights and downlights warm on. Both video files are already a seamless ping-pong loop (forward then reverse, 246 frames at 24 fps, about 10 seconds), so they only need the native `loop` attribute. Do NOT re-implement the reverse in JS.

Implementation (the source order matters: WebM first, MP4 second):
```tsx
<video
  className="absolute inset-0 h-full w-full object-cover"
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
```
- `muted` + `playsInline` + `autoPlay` are all required or browsers block autoplay. Neither file has an audio track.
- The browser plays the first source it supports. Chrome, Edge and Firefox take the WebM. Safari takes the MP4. Don't add JS format detection.
- The video is square, so use `object-cover` and set `object-position` to roughly `65% 50%` so the lit timber windows stay visible on desktop. Check the mobile crop too.
- The poster is the fully lit frame. Show it as a static `<Image>` instead of the `<video>` when `prefers-reduced-motion: reduce` is set.
- Layer a dark gradient scrim over the video (bottom heavier) so text stays AA-contrast against the bright windows.
- Test in Chrome and Safari and confirm the loop has no visible jump at the turnaround.

## Hero content
- Subtle tagline at the very top, small and uppercase with wide letter-spacing, about 70% opacity: **"Your partner for impeccable electrical work"**
- Nav as a floating glass pill: logo, Services, Projects, Why Us, Reviews, Contact, plus a "Request a Quote" button.
- H1 (large, tight tracking): a short confident line about precision and power. For example "Electrical work, done right the first time."
- One supporting sentence and two CTAs: primary "Request a Quote", secondary "See our work".
- Below the fold, a glass trust bar: Licensed & insured · [X]+ years · [X] projects · 5★ reviews.

## Glassmorphism system
Define these as design tokens in CSS variables and reuse them everywhere:
- Surface: `background: rgba(255,255,255,0.06)`, `backdrop-filter: blur(18px) saturate(140%)`, `border: 1px solid rgba(255,255,255,0.14)`, `border-radius: 20px`
- Inner top highlight: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 20px 50px -20px rgba(0,0,0,0.6)`
- Hover: border brightens, a faint amber glow (`0 0 40px -10px rgba(255,170,60,0.35)`), 2–4px lift
- Include a solid-colour fallback for browsers without `backdrop-filter`.
- Don't glass everything. Use it on the nav, hero stat bar, service cards, pricing/quote card and testimonial cards. Keep body text sections on solid dark surfaces for legibility.

## Palette and type
- Colours pulled from the video: near-black navy background (#05080F to #0B1220), warm amber accent (#FFB347 to #F59E0B) echoing the window light, soft off-white text, cool steel grey for secondary text. One accent only.
- Type: a refined geometric sans for headings (e.g. Inter Tight or Manrope) and Inter for body. Generous whitespace, 8px spacing scale.

## Page sections, in order
1. Hero (above)
2. Services: glass cards for Residential, Commercial, EV chargers, Panel upgrades, Lighting design, Emergency callouts
3. Why us: 3–4 specifics (licensed, tidy job sites, upfront pricing, warranty), no vague claims
4. Selected projects: an image grid with glass caption overlays
5. Process: 4 steps (Consult → Quote → Install → Inspect), with a thin animated line connecting them
6. Reviews: glass testimonial cards
7. Quote/contact: a glass form (name, phone, project type, message) beside phone and hours
8. Footer: licence number, service area, links

## Quality bar
- It should look like a $10k custom site, not a template. Every section earns its place and has real, specific copy (no lorem ipsum).
- Lighthouse performance 90+. Lazy-load below-fold media. The video is about 1.6 MB, so keep it as the only heavy asset above the fold.
- Responsive from 360px. Keyboard accessible. Visible focus states.
- When each section is built, screenshot it in the browser and show me before moving on.
