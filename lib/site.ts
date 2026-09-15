/**
 * Spark Life Collective — site constants and copy.
 *
 * Visual system follows the supplied homepage mock: Belief cream as the
 * page field, Faith navy for type, Connection gold for CTAs, photography
 * in the hero and bands. Official palette hex values are unchanged.
 *
 * OPEN DECISIONS (do not silently invent answers):
 * - Approved mission statement: placeholder only.
 * - Facilitator photos: omitted (name + role + bio text only).
 * - Public relationship to Spark Life: placeholder only — do not describe.
 * - Whether Root & Rise sessions are recorded: unconfirmed.
 * - Giving platform: unconfirmed (Givebutter / Donorbox / PayPal Giving Fund / other).
 * - Newsletter/email tool: unconfirmed.
 * - Contact inbox and social handles: unconfirmed — do not guess.
 * - SPARK app mockup in the brand deck: do not reference as an SLC product
 *   until Spark Life confirms it.
 */

export const site = {
  name: "Spark Life Collective",
  shortName: "SLC",
  established: 2024,
  // OPEN DECISION: production domain not specified. Set NEXT_PUBLIC_SITE_URL when known.
  defaultUrl: "http://localhost:3000",
  taglineDraft: "A place to root deep and rise whole — together.",
  nonprofitLine:
    "Spark Life Collective is a registered 501(c)(3) nonprofit. Donations may be tax-deductible; consult your tax advisor.",
  statusLine: "A 501(c)(3) nonprofit ministry, operating since 2024.",
  copyrightName: "Spark Life Collective",
} as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || site.defaultUrl;
}

export const nav = {
  primary: [
    { href: "/about", label: "About" },
    { href: "/retreats", label: "Retreats" },
    { href: "/programs", label: "Programs" },
    { href: "/partner", label: "Partner" },
    { href: "/resources", label: "Resources" },
    { href: "/get-involved", label: "Get Involved" },
  ],
  footer: [
    { href: "/about", label: "About" },
    { href: "/retreats", label: "Retreats" },
    { href: "/programs", label: "Programs" },
    { href: "/partner", label: "Partner" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const rootAndRise = {
  name: "Root & Rise",
  href: "/retreats/root-and-rise",
  theme: "Anchored faith through hardship. A sacred reset.",
  aspects: ["Spirituality", "Adversity"],
  scriptureReference: "James 1:2–4",
  format: "2 days, live on Zoom, 1 hour each day",
  datesLabel: "October 14–15, 2026",
  datesFlyer: "Oct 14th & 15th",
  startDate: "2026-10-14",
  endDate: "2026-10-15",
  timeEt: "1–2 PM ET",
  timeLabel: "1–2 PM ET / 12–1 PM CT / 11 AM–12 PM MT / 10–11 AM PT",
  timeLines: ["1–2 PM ET", "12–1 PM CT", "11 AM–12 PM MT", "10–11 AM PT"],
  cost: "Free — donation-supported",
  limitedSpace: "Limited space available",
  flyerSrc: "/images/root-and-rise-flyer.jpg",
  flyerAlt:
    "Root & Rise invitation: a garden at golden hour with raised beds, tomatoes, leafy greens, and sunflowers — no people. October 14th and 15th, free virtual retreat, 1–2 PM ET, limited space. Presented by Spark Life Collective.",
  registerUrl: "https://form.jotform.com/sparklife21/slc-retreat-root-rise",
  facilitators: [
    {
      name: "Spark Life",
      role: "Co-facilitator",
    },
    {
      name: "Danny",
      role: "Co-facilitator",
    },
  ],
} as const;

export const retreatConcepts: Array<{
  name: string;
  theme: string;
  href?: string;
  scheduled: boolean;
}> = [
  {
    name: "Root & Rise",
    theme: "Anchored faith through hardship. A sacred reset.",
    href: "/retreats/root-and-rise",
    scheduled: true,
  },
  {
    name: "Seek & Secure",
    theme: "From spiritual wonder to relational trust.",
    scheduled: false,
  },
  {
    name: "Share, Support & Strengthen",
    theme: "Speaking honestly, showing up with integrity, growing together.",
    scheduled: false,
  },
  {
    name: "Stand & Shine",
    theme: "Showing up fully, inside and out.",
    scheduled: false,
  },
  {
    name: "Flex & Flow",
    theme: "Rediscovering joy through presence, silliness, emotional flexibility.",
    scheduled: false,
  },
  {
    name: "Design & Deliver",
    theme: "Turning vision into meaningful work.",
    scheduled: false,
  },
  {
    name: "Presence & Purpose",
    theme: "Using your voice and name to reflect truth and goodness.",
    scheduled: false,
  },
  {
    name: "Rest & Renew",
    theme: "A return to wholeness through peace and restoration.",
    scheduled: false,
  },
  {
    name: "Plan & Pursue",
    theme: "Giving form to vision. Structure with spirit.",
    scheduled: false,
  },
  {
    name: "Supply & Soar",
    theme: "Resourcing a life of bold exploration and trust.",
    scheduled: false,
  },
];

export const copy = {
  homeIntro: {
    draft: true,
    text: "Spark Life Collective is a nonprofit ministry building experiences that help people root their identity in truth, walk through hardship with community, and grow whole — together. Our retreats are free, because we believe this shouldn't depend on what you can afford.",
  },
  howItWorks: {
    draft: true,
    text: "Every SLC retreat is free to attend. We ask for donations from those who are able, so the content stays open to everyone — regardless of circumstance.",
  },
  rootAndRiseExpect: {
    draft: true,
    text: "This is not a lecture. Over two live hours we will sit with Scripture, speak honestly about hardship, and make room for conversation, reflection, and prayer. Come as you are — no performance required, no prior retreat experience needed.",
  },
  aboutBuildingToward: {
    draft: true,
    text: "We are building toward gatherings where people can wrestle honestly with identity, relationships, purpose, stewardship, adversity, calling, community, and healing — not as topics on a slide, but as the actual stuff of a life. The work is grounded in the way of Jesus Christ: truth-telling, mercy, and the long patience of becoming whole together.",
  },
} as const;
