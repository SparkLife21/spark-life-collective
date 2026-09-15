# Spark Life Collective

Public website for **Spark Life Collective (SLC)** — a 501(c)(3) nonprofit ministry, established 2024. SLC is a separate legal entity from Spark Life (SparkLifeToday.com).

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. Deploy on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Homepage

The homepage is a pixel-close implementation of the supplied design mock. Content in those sections is mock copy (including sample retreats, stats, and extra nav items) so the layout can be reviewed. Swap photography in `public/images/homepage/` — each usage is marked with a TODO.

## Fonts

CSS variables in `app/globals.css` are ready for licensed files:

| Variable | Brand face | Current web fallback |
| --- | --- | --- |
| `--font-mango` | Black Mango Bold / Regular | Playfair Display |
| `--font-narrow` | Agrandir Narrow | Barlow Condensed |
| `--font-script` | Holla or Vincentia | Yellowtail |
| `--font-sans` | Agrandir | Outfit |

Add `@font-face` rules (or drop files in `/public/fonts`) and the families will pick up without rewriting components.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Homepage (mock layout) |
| `/retreats/root-and-rise` | Featured retreat, October 14–15, 2026 |
| `/give` | Donation explanation + platform swap point |
| `/about` | Story, F.A.I.T.H. pillars, mission placeholder |
| `/retreats` | Overview + exploratory retreat concepts |
| `/contact` | Contact form (inbox TBD) |
| `/programs` `/partner` `/resources` `/get-involved` | Mock-nav placeholders |

## Integrations

Set env vars in `.env.local` (see `.env.example`). Search for `JOTFORM EMBED`, `DONATE EMBED`, and `EMAIL SIGNUP`.
