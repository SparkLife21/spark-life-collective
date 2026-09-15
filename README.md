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
| `/retreats/root-and-rise` | Featured retreat, October 14–15, 2026 |
| `/give` | Donation explanation + platform swap point |
| `/about` | Story, F.A.I.T.H. pillars, mission placeholder, 501(c)(3) |
| `/retreats` | Overview + exploratory retreat concepts |
| `/contact` | Contact form (inbox TBD) |

Copy marked **Draft copy — not approved** on the site has not been approved by Spark Life. Bracketed `[CONFIRM]` / `[insert]` / `[MISSION STATEMENT — insert approved copy]` lines are open items, not final policy.

## Brand (official kit)

Faith navy `#023550` is the dominant field. Connection gold `#CC9752` is the primary accent and CTA color. Belief cream `#EEEEE9` is for breathing room (form embeds, flyer contrast). Empowerment, Stability, Devotion, Expression, and Exploration are supporting accents — not evenly distributed.

The lockup in `public/images/` is the uploaded SLC mark with the background removed (transparent PNG). Gold wordmark + gold flame for navy fields (`slc-logo-light.png`); original navy wordmark + gold flame for cream (`slc-logo.png`).

Web type stand-ins until licensed files are supplied: **Yellowtail** (Holla/Vincentia script), **Cinzel** (Black Mango / art-deco caps), **Outfit** (Agrandir Tight).

Do not treat the SPARK app mockup in the brand deck as an SLC product until Spark Life confirms it.

## Integrations (swap points)

Set these in `.env.local` when Spark Life shares them. Until then, labeled placeholder blocks render in the UI.

| Env var | What it wires |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, Open Graph, sitemap |
| `NEXT_PUBLIC_JOTFORM_ROOT_AND_RISE_URL` | Root & Rise Jotform iframe (defaults to the live form) |
| `NEXT_PUBLIC_DONATE_URL` | Donate button/link |
| `NEXT_PUBLIC_NEWSLETTER_ACTION_URL` | Email signup form action |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact form `mailto:` |
| `NEXT_PUBLIC_SOCIAL_LINKS` | `Label\|url,Label\|url` |

Search the repo for `JOTFORM EMBED`, `DONATE EMBED`, and `EMAIL SIGNUP` to find the swap points.

## Deploy

Connect the GitHub repo to [Vercel](https://vercel.com). Add the env vars above in the project settings. Point a custom domain at the deployment after Spark Life reviews a preview URL.
