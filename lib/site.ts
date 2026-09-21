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
 * - Contact inbox: inquire@sparklifecollective.org.
 * - Social: Instagram, Facebook, X, and TikTok handles below.
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

export const CONTACT_EMAIL = "inquire@sparklifecollective.org";

// Commercial Spark Life site. Link only — do not invent a legal relationship.
export const SPARK_LIFE_URL = "https://www.sparklifetoday.com/";

export const social = [
  {
    href: "https://www.instagram.com/sparklifecollective/",
    label: "Instagram",
    path: "M12 0C8.74 0 8.333.015 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.015 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.015 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 3.269.146 4.771 1.691 4.919 4.919.055 1.265.079 1.645.079 4.85s-.023 3.585-.079 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.047-1.645.071-4.85.071-3.204 0-3.585-.016-4.85-.071-3.26-.149-4.771-1.699-4.919-4.92-.047-1.266-.071-1.645-.071-4.849s.024-3.585.071-4.85C2.166 3.906 3.686 2.36 6.95 2.23c1.267-.047 1.645-.071 4.85-.071zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    href: "https://www.facebook.com/spark.life.collective/",
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: "https://x.com/SparkLifeColl",
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z",
  },
  {
    href: "https://www.tiktok.com/@sparklifecollective",
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.69 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
] as const;

// Partner, Resources, and Get Involved are hidden until those pages exist.
// Connect goes straight to the inquiry inbox, matching the static pages.
export const nav = {
  primary: [
    { href: "/about", label: "About" },
    { href: "/retreats", label: "Retreats" },
    { href: "/programs", label: "Programs" },
    { href: `mailto:${CONTACT_EMAIL}`, label: "Connect" },
  ],
  footer: [
    { href: "/about", label: "About" },
    { href: "/retreats", label: "Retreats" },
    { href: "/programs", label: "Programs" },
    { href: `mailto:${CONTACT_EMAIL}`, label: "Connect" },
    { href: SPARK_LIFE_URL, label: "Spark Life" },
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

/**
 * Retreat catalog as supplied by Spark Life: aspects covered, theme, scripture.
 * The live listing at /retreats/ is homepage/retreats/index.html — keep both in step.
 */
export const retreatConcepts: Array<{
  name: string;
  aspects: string[];
  theme: string;
  scripture: string;
  href?: string;
  scheduled: boolean;
}> = [
  {
    name: "Root & Rise",
    aspects: ["Spirituality", "Adversity"],
    theme: "Anchored faith through hardship. A sacred reset.",
    scripture: "James 1:2–4",
    href: "/retreats/root-and-rise",
    scheduled: true,
  },
  {
    name: "Seek & Secure",
    aspects: ["Curiosity", "Intimacy"],
    theme: "From spiritual wonder to relational trust.",
    scripture: "John 1:38–39",
    scheduled: false,
  },
  {
    name: "Share, Support & Strengthen",
    aspects: ["Communication", "Accountability", "Relationships"],
    theme: "Speaking honestly, showing up with integrity, growing together.",
    scripture: "Ephesians 4:2–3",
    scheduled: false,
  },
  {
    name: "Stand & Shine",
    aspects: ["Individuality", "Appearance"],
    theme: "Showing up fully, inside and out.",
    scripture: "Matthew 5:14–16",
    scheduled: false,
  },
  {
    name: "Flex & Flow",
    aspects: ["Adaptability", "Play"],
    theme: "Rediscovering joy through presence, silliness, emotional flexibility.",
    scripture: "Psalm 118:24",
    scheduled: false,
  },
  {
    name: "Design & Deliver",
    aspects: ["Creativity", "Career"],
    theme: "Turning vision into meaningful work.",
    scripture: "Exodus 35:31–33",
    scheduled: false,
  },
  {
    name: "Presence & Purpose",
    aspects: ["Reputation", "Influence"],
    theme: "Using your voice and name to reflect truth and goodness.",
    scripture: "Proverbs 22:1–2",
    scheduled: false,
  },
  {
    name: "Rest & Renew",
    aspects: ["Comfort", "Health"],
    theme: "A return to wholeness through peace and restoration.",
    scripture: "Psalm 23:1–4",
    scheduled: false,
  },
  {
    name: "Plan & Pursue",
    aspects: ["Organization", "Dreaming"],
    theme: "Giving form to vision. Structure with spirit.",
    scripture: "Proverbs 19:21",
    scheduled: false,
  },
  {
    name: "Supply & Soar",
    aspects: ["Wealth", "Adventure"],
    theme: "Resourcing a life of bold exploration and trust.",
    scripture: "Ecclesiastes 5:18–20",
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
