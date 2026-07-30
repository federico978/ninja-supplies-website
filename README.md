# Ninja Supplies

One-page website for Ninja Supplies — modular infrastructure and deployment for computing
operations sited at the energy source.

Built with [Astro](https://astro.build). Static output, no backend, no database, no CMS.

---

## Quick start

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Astro/TypeScript diagnostics |

Requires Node 20.3+ (developed against Node 26).

---

## Editing content

**All public copy lives in one file: [`src/data/content.ts`](src/data/content.ts).**

Nothing in `src/components/` needs to be touched for a copy change. The file is organised by
section and includes the rules the content is held to — no invented claims, no unsupported
statistics, no implied physical presence.

A few things worth knowing:

- **`hero.headline`** is an array of lines. Four alternative headlines are kept in
  `hero.headlineAlternatives` so they can be swapped in and compared without touching a component.
- **`systems.entries[].dependsOn`** drives the dependency highlight in the Systems section. Change
  a code list and the interaction updates automatically.
- **`contact.prompts`** is the "Useful to include" list in the contact section.
- **`meta.ogImage`** is `null` until a share image exists (see `CONCEPT-ASSETS.md`).

---

## The production domain

**No domain is configured, referenced, or inferred anywhere in this project.** Not in metadata,
not in the sitemap, not in `robots.txt`, not in the footer, not in the Astro config.

When a domain is chosen, set one environment variable:

```bash
PUBLIC_SITE_URL=https://your-domain.example
```

Copy `.env.example` to `.env` for local use, and set the same variable in Cloudflare Pages for
production builds. Setting it switches on, in one step:

- the canonical `<link>`
- `og:url` and the Twitter/X card URL
- `sitemap-index.xml` (the `@astrojs/sitemap` integration is only loaded when the variable is set)
- the `Sitemap:` line in `robots.txt`

Leaving it empty is a fully valid build — the site deploys and works, it simply omits the tags
that require an absolute URL. The build fails fast with a clear message if the value is set but
is not an absolute URL including protocol.

---

## Project structure

```
images-originals/     READ-ONLY source photographs. Never modified by the build.
public/
  icons/              Apple touch icon
  favicon.svg
src/
  assets/images/      Web photography — optimized by Astro at build time
  components/         One component per section, plus Figure and Wordmark
  data/content.ts     ALL site copy and every image reference
  layouts/Base.astro  <head>, metadata, fonts, global behaviour
  pages/
    index.astro       The single page — section order lives here
    robots.txt.ts     Generated so the Sitemap line is domain-gated
  styles/
    tokens.css        Design tokens: colour, type scale, spacing, motion
    global.css        Reset, primitives, shared patterns
concept/              Stage 3 prototype, kept for reference. Not part of the build.
CONCEPT-ASSETS.md     Image inventory and replacement instructions
```

`concept/` is the approved Stage 3 prototype. It is not referenced by the build and can be
deleted at any time.

---

## Page structure

| # | Section | Surface |
|---|---|---|
| — | Header (sticky) | Limestone |
| 01 | Hero | Limestone |
| 02 | Position | Sand |
| 03 | Integrated Systems | Limestone → paper |
| 04 | Deployment Method | **Charcoal** |
| 05 | Operating Environments | Limestone |
| 06 | Visual Infrastructure | **Deep brown** |
| 07 | Why Ninja Supplies | Sand |
| 08 | Leadership | Limestone |
| 09 | Contact | **Deep brown** |
| — | Footer | Brown |

The dark blocks are placed to give the page rhythm without introducing colour. Section order is
edited in `src/pages/index.astro`; section numbering is in `src/data/content.ts`.

---

## Design system

- **Typography** — Archivo (display and body, variable, width axis) and IBM Plex Mono (labels,
  indices, system codes). Both open-licensed and **self-hosted** via Fontsource. No third-party
  font request at runtime; the built HTML contains no external URLs at all.
- **Colour** — warm limestone ground, sand, concrete, graphite, charcoal, deep brown, with copper
  as the single accent. Contrast values are documented inline in `tokens.css`; every value used
  for small text clears 4.5:1.
- **The datum** — the fine ruled line with copper ticks appears once, beneath the hero headline.
  It is not repeated through the page.
- **Technical labels** — every code, index, and label carries real information. There are no
  invented drawing numbers, coordinates, ratings, or specifications anywhere in the project.

---

## The contact experience

**There is no form.** A disabled form reads as broken, so it was removed. The contact section is
now a single, unmissable copper block containing the email address, followed by a short
"Useful to include" list that does the work the form fields were doing — it tells the reader
what to send.

The entire contact action is `mailto:contact@ninjasupplies.us`. There is no backend, no
third-party service, and nothing to configure or maintain.

If a form is wanted later, the options are Cloudflare Pages Functions (most control, most
setup), a hosted service such as Formspree (fastest, but enquiry data passes through a third
party), or keeping the current mailto-only approach. Nothing will be implemented without that
decision.

---

## Deploying to Cloudflare Pages

Not yet connected. When ready:

**Build settings**

| Setting | Value |
|---|---|
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` or later (set `NODE_VERSION` if the default is older) |

**Environment variables** — add `PUBLIC_SITE_URL` once the domain exists. Set it for both
Production and Preview, or leave Preview unset so preview builds omit canonical tags.

**Steps**

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a project and connect the repository.
3. Enter the build settings above.
4. Deploy. Cloudflare rebuilds on every push to the production branch.
5. Attach the domain and set `PUBLIC_SITE_URL` to match, then redeploy so the canonical tags and
   sitemap are generated.

No DNS, Cloudflare, or GitHub configuration has been performed by this project.

---

## Accessibility and performance

Verified in-browser at 1440, 1280, 1024, 768, 430, 375, and 320px:

- No horizontal overflow at any width
- One `h1`; heading order runs h1 → h2 → h3 with no skipped levels
- All 15 images carry descriptive alt text; hero eager with `fetchpriority="high"`, rest lazy
- Every image served as AVIF/WebP with a JPEG fallback, responsive `srcset`, and intrinsic
  width/height so nothing shifts on load
- All five system accordions expose valid `aria-expanded` / `aria-controls`
- No form, and no disabled controls anywhere on the page
- No broken anchors; skip link present; visible copper focus rings
- Full `prefers-reduced-motion` support — all transitions and smooth scrolling disabled
- Reveal animations are applied **only** when scripting is available, with a load-time fallback,
  so no content can be left permanently invisible by a blocked script or a missed observer callback

Build output is roughly 26 MB total, almost entirely photography across AVIF/WebP/JPEG at
several widths; a browser loads only the variants it needs. Scripts are inlined and
amount to a few hundred bytes; there are no runtime dependencies, no analytics, and no
third-party requests.

---

## Licence and ownership

Fonts are open-licensed (Archivo and IBM Plex Mono, SIL Open Font License) and self-hosted.
All imagery is temporary concept material produced for this project — see `CONCEPT-ASSETS.md`.
