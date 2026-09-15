# Spark Life Collective

Public website for **Spark Life Collective (SLC)** — a 501(c)(3) nonprofit ministry, established 2024. SLC is a separate legal entity from Spark Life (SparkLifeToday.com).

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. The production build is a **static export** for **IONOS regular web hosting** (upload the `out/` folder over FTP — no Node server).

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to IONOS (regular web hosting)

This host serves HTML/CSS/JS. It cannot run `next start`. Build a static site, then upload it.

1. Set the public URL (used in sitemap, robots, and Open Graph):

   ```bash
   echo "NEXT_PUBLIC_SITE_URL=https://your-domain.com" >> .env.local
   ```

2. Build:

   ```bash
   npm run build
   ```

   That writes static files to **`out/`**.

3. In IONOS File Manager or FTP, open the web root (usually **`htdocs`** or **`httpdocs`**).

4. Upload **the contents of `out/`** (not the `out` folder itself) into that web root. Include `.htaccess` — it is generated from `public/.htaccess`.

5. Visit the domain. `/about/` and other routes should load without a Node process.

If a path 404s, confirm `.htaccess` uploaded and that IONOS Apache `mod_rewrite` is on (it usually is). SSL is turned on in the IONOS panel, not in this repo.

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
