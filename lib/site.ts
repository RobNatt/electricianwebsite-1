// Project images are AI-generated (Higgsfield) stand-ins; replace with real job photos.
// Business details. Everything here is a placeholder from the design mock-up:
// swap in the real name, contact details, licence number and stats.
export const site = {
  name: "Halden Electric",
  tagline: "Your partner for impeccable electrical work",
  phoneDisplay: "(555) 014-2290",
  phoneHref: "tel:+15550142290",
  email: "quotes@haldenelectric.com",
  licence: "Electrical contractor licence #EC-000000",
  serviceArea: "Serving the greater metro area and surrounding suburbs",
  hours: ["Mon–Fri 7:00–17:00", "Sat 8:00–12:00"],
  // Set to false to show the still poster instead of the looping hero video.
  playHeroVideo: true,
  maintainer: { name: "N-Tech Digital Solutions", url: "https://ntechdigitalsolutions.com" },
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "Licensed & insured", label: "Master electrician on every job" },
  { value: "18+ years", label: "In residential and commercial" },
  { value: "1,200 projects", label: "Completed and signed off" },
  { value: "5★ reviews", label: "Across Google and Houzz", accent: true },
];

export const services = [
  {
    title: "Residential",
    body: "Full rewires, renovations and new custom homes. Concealed cabling, clean terminations, labelled boards.",
  },
  {
    title: "Commercial",
    body: "Fit-outs, retail and hospitality builds. We work to the builder's program and hand over complete test records.",
  },
  {
    title: "EV chargers",
    body: "Level 2 home and fleet chargers, with a load calculation first so your panel isn't overloaded.",
  },
  {
    title: "Panel upgrades",
    body: "100A to 200A service upgrades, sub-panels and surge protection, permitted and coordinated with the utility.",
  },
  {
    title: "Lighting design",
    body: "Layered interior and landscape lighting, dimming scenes and smart controls, planned with your architect.",
  },
  {
    title: "Emergency callouts",
    body: "24/7 response for outages, burning smells and tripping breakers. A licensed electrician answers, not a call centre.",
  },
];

export const commitments = [
  {
    title: "Master-licensed, fully insured",
    body: "A master electrician supervises every job. $2M general liability and workers' comp certificates are sent with your quote.",
  },
  {
    title: "Tidy job sites",
    body: "Drop sheets and shoe covers inside, dust extraction on every cut-in, and the site swept before we leave each day.",
  },
  {
    title: "Fixed, itemised pricing",
    body: "Line-by-line quotes with materials named. The price only changes if the scope does, and you approve that in writing first.",
  },
  {
    title: "5-year workmanship warranty",
    body: "If something we installed fails because of how we installed it, we come back and fix it at no charge.",
  },
];

export type Project = {
  title: string;
  meta: string;
  placeholder: string;
  /** Path under /public or an allowed remote URL (see next.config.ts). Leave unset to show the placeholder. */
  image?: string;
  tall?: boolean;
};

export const projects: Project[] = [
  {
    title: "Ridge House",
    meta: "New build · Full wiring, landscape lighting, 2 EV chargers",
    placeholder: "Project photo: custom residence at dusk",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3IWTwWfP0Q2Akgqk2XTpORwxqIc/hf_20261006_224110_6482666f-de58-4fed-aebe-db09210547b7.png",
    tall: true,
  },
  {
    title: "Oak & Ember",
    meta: "Commercial · Kitchen circuits, feature lighting",
    placeholder: "Project photo: restaurant fit-out",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3IWTwWfP0Q2Akgqk2XTpORwxqIc/hf_20261006_224109_49be0e6d-cdbe-46bb-aaf3-a3b0aa783fc8.png",
  },
  {
    title: "Westfield Terrace",
    meta: "Renovation · 200A service upgrade, full rewire",
    placeholder: "Project photo: panel upgrade, labelled board",
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3IWTwWfP0Q2Akgqk2XTpORwxqIc/hf_20261006_224110_33b64700-e9a4-4fcb-b7fc-137753834381.png",
  },
];

export const steps = [
  { title: "Consult", body: "We walk the site or review drawings with you and note every requirement." },
  { title: "Quote", body: "An itemised, fixed price within 48 hours, with a start date you can plan around." },
  { title: "Install", body: "The same crew start to finish, with a daily update on progress." },
  { title: "Inspect", body: "Full testing, permit inspection, and a handover pack with circuit schedules." },
];

export type Review = { quote: string; name: string; role: string };

// Placeholder reviews from the design mock-up.
export const reviews: Review[] = [
  {
    quote:
      "The quote matched the invoice to the dollar. Our architect commented on how clean the rough-in was before the drywall went up.",
    name: "Sarah M.",
    role: "Custom home, Ridge House",
  },
  {
    quote:
      "They hit every milestone on our fit-out schedule and the inspection passed first time. They're on our next three jobs.",
    name: "Daniel R.",
    role: "Project manager, commercial builder",
  },
  {
    quote:
      "Panel upgrade and EV charger done in a day. They covered the floors, labelled every breaker and walked me through the board.",
    name: "Priya K.",
    role: "Homeowner, Westfield",
  },
  {
    quote:
      "Called at 9pm with half the house dark. An electrician was on site within the hour and traced it to a failed neutral at the meter.",
    name: "James T.",
    role: "Emergency callout",
  },
  {
    quote:
      "They planned the lighting with our architect from the drawings. Every scene works exactly as we pictured it.",
    name: "Elena V.",
    role: "Lighting design, coastal home",
  },
  {
    quote: "Our café fit-out had a tight window between trades. They worked two nights to keep the opening date.",
    name: "Marcus L.",
    role: "Owner, Oak & Ember",
  },
  {
    quote:
      "No upsell. They confirmed our existing panel could carry the charger and saved us an upgrade we were told we needed.",
    name: "Tom & Ana B.",
    role: "EV charger install",
  },
  {
    quote:
      "Fourth job with them across our rental portfolio. Test records and permits are always complete for the inspector.",
    name: "Rachel O.",
    role: "Property manager",
  },
];

export const projectTypes = [
  "Residential",
  "Commercial",
  "EV charger",
  "Panel upgrade",
  "Lighting design",
  "Emergency",
];
