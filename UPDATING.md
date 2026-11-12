# How to update the Selke Pest Control site

Live site: https://www.selkepestcontrol.com
GitHub: `sjmorongell/selke-pest-control`, branch `main`. Vercel deploys automatically
from GitHub, so don't change anything in Vercel. Push files to GitHub one commit at a time.

## Build

```
pnpm build   # = restore images -> vite build -> write static SEO pages
```

1. `scripts/restore-assets.mjs` decodes the base64 photos in `scripts/collage/` into `public/service-collage/`.
2. `vite build` builds the React app into `dist/`.
3. `scripts/build-static-pages.mjs` writes a static HTML file for every URL, each with its own meta tags and schema.

Nothing patches the source code at build time anymore. What's in `src/` is exactly what ships.

## Where to make common changes

| Change | Edit |
| --- | --- |
| Homepage sections and their order | `src/app/App.tsx` |
| Top navigation (every page) | `src/app/components/SiteHeader.tsx` |
| Footer (every page) | `src/app/components/SiteFooter.tsx` |
| Footer service-area map | `src/app/components/ServiceAreaMap.tsx` (dots come from `serviceAreas.json`) |
| Services: names, descriptions, what's included, FAQs | `src/app/data/services.json` (updates the nav dropdown, homepage cards, `/services`, each service page, the footer, and the SEO pages) |
| Sitewide FAQ (`/faq`) | `src/app/data/faqs.json` |
| Phone, email, license, reviews count | `src/app/App.tsx` (search for the old value; also check `public/llms.txt`) |
| Quote form (EmailJS / reCAPTCHA) | `src/app/components/QuoteFormModal.tsx` |
| Service area menu | `src/app/components/ServiceAreasMenu.tsx` (reads `serviceAreas.json`) |
| Pest pages | `src/app/data/pestData.ts` + `pestPages` in `scripts/generate-seo-pages.mjs` |
| Giveaway pages | `src/app/pages/GiveawayPage.tsx`, `GiveawayThankYouPage.tsx` |

### Add a city

1. Add the city's page content to `src/app/data/newCityData.json`.
2. Add the city (with GPS coordinates and county) to `src/app/data/serviceAreas.json`.
3. Add the URL to `public/sitemap.xml` and `public/llms.txt`.

The menu, map, county hub page, and static SEO page all update from those JSON files.

### Add a service

1. Add an entry to `src/app/data/services.json`. Copy an existing one; `icon` must be one of the keys in `SERVICE_ICONS` in `src/app/data/services.ts`.
2. Add `/services/<slug>` to `public/sitemap.xml` and `public/llms.txt`.

New pages that need the standard header, footer, and quote form can wrap their content in `PageShell` (`src/app/components/PageShell.tsx`). See `FaqPage.tsx` for a short example.

### Add a county

Add it to `counties` in `src/app/data/serviceAreas.json`, then add the URL to the sitemap and `llms.txt`.

### Add a blog post

Blog posts are listed in several places (not consolidated yet):

1. The article body: `src/app/utils/blogContent.ts`
2. The title, date, and URL: `blogMeta` in `src/app/pages/BlogPage.tsx`
3. The `/blog` index card: `src/app/data/blogIndexData.ts`
4. The homepage blog card: the posts list in `src/app/App.tsx`
5. The static SEO page: the `articles` list in `scripts/generate-current-pages.mjs`
6. `public/sitemap.xml` and `public/llms.txt`

### Add or replace an image

GitHub's API can't take binary files, so images are saved as base64 text and
turned back into images at build time by `scripts/restore-assets.mjs`:

```
base64 -w0 photo.webp > scripts/collage/photo.b64
# build writes public/service-collage/photo.webp -> served at /service-collage/photo.webp
```

For a different destination folder, add one line to `FOLDERS` in `scripts/restore-assets.mjs`.
Use `.webp` and keep photos under about 200 KB.

## Before pushing

Run `pnpm build`. It must finish with no errors.
