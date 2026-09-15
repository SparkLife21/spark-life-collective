# Spark Life Collective

Public website for **Spark Life Collective (SLC)** — a 501(c)(3) nonprofit ministry, established 2024. SLC is a separate legal entity from Spark Life (SparkLifeToday.com).

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**. The production build is a **static export**. GitHub Actions uploads it to **IONOS regular web hosting** (`/collective`) over SFTP — no Node server on IONOS.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy: GitHub → IONOS

IONOS serves the static files. It cannot run `next start`. GitHub builds the site and uploads **`out/`** over SFTP into webspace folder **`/collective`**.

### 1. Connect GitHub to IONOS

In the repo: **Settings → Secrets and variables → Actions**.

Secrets (from IONOS → Hosting → SFTP & SSH — the account for `/collective`):

| Secret | Value |
| --- | --- |
| `IONOS_SFTP_HOST` | Server name only, e.g. `access….webspace-data.io` (not `sftp` or `sftp://…`) |
| `IONOS_SFTP_USER` | SFTP username |
| `IONOS_SFTP_PASSWORD` | SFTP password |

Variables:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Live URL, e.g. `https://your-domain.com` |

Leave `IONOS_SFTP_REMOTE_DIR` unset so uploads go to `collective`. If this SFTP user is already locked to `/collective`, set that variable to `.`.

### 2. Ship

Merge to **`main`**, or run **Actions → Deploy to IONOS → Run workflow**. GitHub runs `npm run build` and uploads the files, including `.htaccess`.

### 3. Point the domain at `/collective`

In IONOS: **Domains** → connect the domain to webspace directory **`/collective`**, then turn on SSL. Visit the domain — `/about/` and other routes should load without a Node process.

If a path 404s, confirm `.htaccess` is in `/collective` and that Apache `mod_rewrite` is on (it usually is).

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
