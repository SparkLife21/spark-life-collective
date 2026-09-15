# Spark Life Collective

Public website for **Spark Life Collective (SLC)** — a 501(c)(3) nonprofit ministry, established 2024. SLC is a separate legal entity from Spark Life (SparkLifeToday.com). This codebase does not describe a parent/program/ownership relationship between the two.

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. Deploy on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home — launch CTA for Root & Rise |
| `/retreats/root-and-rise` | Featured retreat, Oct 6–7, 2026 |
| `/give` | Donation explanation + platform swap point |
| `/about` | Story, mission placeholder, 501(c)(3) |
| `/retreats` | Overview + exploratory retreat concepts |
| `/contact` | Contact form (inbox TBD) |

Copy marked **Draft copy — not approved** on the site has not been approved by Spark Life. Bracketed `[CONFIRM]` / `[insert]` lines are open items, not final policy.

## Integrations (swap points)

Set these in `.env.local` when Spark Life shares them. Until then, labeled placeholder blocks render in the UI.

| Env var | What it wires |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, Open Graph, sitemap |
| `NEXT_PUBLIC_JOTFORM_ROOT_AND_RISE_URL` | Root & Rise Jotform iframe |
| `NEXT_PUBLIC_DONATE_URL` | Donate button/link |
| `NEXT_PUBLIC_NEWSLETTER_ACTION_URL` | Email signup form action |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact form `mailto:` |
| `NEXT_PUBLIC_SOCIAL_LINKS` | `Label\|url,Label\|url` |

Search the repo for `JOTFORM EMBED`, `DONATE EMBED`, and `EMAIL SIGNUP` to find the swap points.

## Design defaults (open decisions)

- **Palette:** dominant `#9B3636`, `#CC9752`, `#ECEEE9`, `#1A1A1A`. Moss / dusk / heather are accent-only.
- **Imagery:** symbolic only (light, horizon, roots). No human figures. Facilitator photos omitted.
- **Type:** Fraunces (headings) + Source Sans 3 (body).

## Deploy

Connect the GitHub repo to [Vercel](https://vercel.com). Add the env vars above in the project settings. Point a custom domain at the deployment after Spark Life reviews a preview URL.
