# Image inventory

Status of every image on the site after the real photography pass.

**All temporary concept assets have been replaced.** No `Temp` label appears anywhere on the
site, because no placeholder remains in use.

---

## Source material

Originals live in `/images-originals` and are **read-only**. Nothing in that folder was
modified, renamed, moved, or deleted. Every web asset is a copy or a crop written to a new file
in `src/assets/images/`.

| Original | Pixels | Used |
|---|---|---|
| `hero-aerial-data-center.png` | 3840 × 2160 | Yes — 3 derived assets |
| `aerial-data-centers-modular.png` | 3840 × 2160 | Yes — 3 derived assets |
| `gas-treatment.png` | 3497 × 2244 | Yes — 2 derived assets |
| `potrait-ariel-perelman.png` | 884 × 884 | Yes |
| `potrait-bernardo-cabral-nonna.png` | 884 × 884 | Yes |

All five were used. Nothing was excluded — every photograph supplied was of sufficient
resolution, sharpness, and composition, and none carried sensitive content.

### Adjustments applied

Only what the brief permits:

- **Cropping** — five tight crops taken from the three site photographs, so each placement
  shows a distinct, purposeful frame instead of the same wide view repeated.
- **Resizing** — the three site photographs were resampled from 3840/3497 px wide to 3000 px.
  That still exceeds the largest width the page ever requests (2400 px).
- **Format conversion and compression** — PNG → JPEG at quality 90 for the working sources, then
  Astro emits AVIF, WebP, and a JPEG fallback at quality 74.
- **Responsive focal points** — `object-position` per placement, and per breakpoint on the hero.

**Nothing else.** No exposure, white-balance, contrast, or colour grading was applied — the
photographs were already warm and consistent with the DATUM palette, so grading them would have
been change for its own sake. No equipment, people, vegetation, buildings, or sky were added,
removed, or altered. No generative fill, no composites, no retouching of any kind.

---

## Where each photograph is used

| Section | Asset | Derived from | Crop |
|---|---|---|---|
| **Hero** (primary visual) | `deployment-site-aerial.jpg` | `hero-aerial-data-center.png` | Full frame. `object-position: 58% 52%` desktop, `55% 55%` mobile |
| **Hero** (layered detail) | `immersion-cooling-detail.jpg` | `hero-aerial-data-center.png` | Crop 1340 × 840 |
| **Position** | `process-vessels-detail.jpg` | `gas-treatment.png` | Crop 1350 × 840 |
| **Systems — MDC** | `modular-units-detail.jpg` | `aerial-data-centers-modular.png` | Crop 1600 × 1000 |
| **Systems — PWR** | `power-module-detail.jpg` | `hero-aerial-data-center.png` | Crop 1400 × 875 |
| **Systems — CLG** | `immersion-cooling-detail.jpg` | `hero-aerial-data-center.png` | Crop 1340 × 840 |
| **Systems — LOG** | `site-access-detail.jpg` | `aerial-data-centers-modular.png` | Crop 1600 × 1000 |
| **Systems — INT** | `deployment-site-aerial.jpg` | `hero-aerial-data-center.png` | Full frame, `56% 55%` |
| **Deployment Method** (band) | `gas-processing-site.jpg` | `gas-treatment.png` | Full frame, `50% 64%` |
| **Visual Infrastructure** (feature) | `modular-array-aerial.jpg` | `aerial-data-centers-modular.png` | Full frame, `50% 54%` |
| **Visual Infrastructure** (sequence) | `deployment-site-aerial.jpg`, `modular-array-aerial.jpg`, `gas-processing-site.jpg` | all three | Three different focal points |
| **Leadership** | `portrait-ariel-martin-perelman.png`, `portrait-bernardo-cabral-nonna.png` | portraits | Native square, presented as circles |

### Sections deliberately left without a photograph

- **Operating Environments** — a six-cell text grid. A band image would compete with the grid
  rather than support it, and every available scene is already carrying another section. The
  brief's instruction not to force every image into the site applies here.
- **Contact and Footer** — the copper email block is the focal point. A background photograph
  behind it would reduce contrast and weaken the one action on the page.

---

## Why these crops

Three site scenes cover eleven placements, so each placement was given a purpose-made frame
rather than repeating the same wide view:

- **Scene A** (remote desert pad — containerized power module and immersion-cooled compute):
  hero, hero detail, PWR, CLG, INT, one sequence frame.
- **Scene B** (modular unit array beside production infrastructure): MDC, LOG, the Visual
  Infrastructure feature, one sequence frame.
- **Scene C** (gas processing site — tanks and separator vessels): Position, Method band, one
  sequence frame.

The repetition is real and worth naming: a viewer who studies the page will recognise the same
two aerials in several places. More scenes would fix that — see below.

---

## What alt text does and does not say

Every `alt` describes only what is visibly in the frame — equipment, arrangement, ground
conditions. None asserts that a site belongs to Ninja Supplies, names a client or location,
states a capacity, or implies a completed project. That restraint is deliberate: the brief
permits no such claim without explicit confirmation.

Two people appear in the hero photograph at small scale. The alt text does not identify them or
describe them as employees.

Equipment in the photographs carries small manufacturer marks, as working equipment does. These
were left untouched — removing them would alter operational reality, which the brief prohibits.
They are legible only at close inspection and do not present any third party as the site owner.

---

## No temporary assets remain in the site

The eight concept compositions built during Stage 3 are no longer referenced and have been
removed from `public/`. They are archived in `concept/assets/` alongside the Stage 3 prototype
and are not part of the build.

| Concept asset | Replaced by |
|---|---|
| `concept-01-array.svg` | `deployment-site-aerial.jpg` (Systems INT) |
| `concept-02-cooling.svg` | `immersion-cooling-detail.jpg` (Systems CLG) |
| `concept-03-switchgear.svg` | `power-module-detail.jpg` (Systems PWR) |
| `concept-04-aerial.svg` | `site-access-detail.jpg` (Systems LOG) |
| `concept-05-staging.svg` | `modular-units-detail.jpg` (Systems MDC) |
| `concept-06-detail.svg` | `immersion-cooling-detail.jpg` (hero layered crop) |
| `concept-07-hero-tall.svg` | `deployment-site-aerial.jpg` (hero) |
| `concept-08-field.svg` | `modular-array-aerial.jpg` (Visual Infrastructure feature) |

---

## Photography still worth adding

None of these block publication. Each would strengthen the page.

1. **A ground-level shot of electrical distribution** — switchgear, a transformer, or a
   termination cabinet, shot square-on. The PWR panel currently uses an aerial of the power
   module, which reads as *generation* more than *distribution*. This is the most useful single
   addition.
2. **A third and fourth site scene** — the strongest fix for the repetition noted above.
   Anything from a different location or a different stage of work.
3. **Equipment in transit or being set** — a module on a trailer, or a lift in progress. The
   Deployment Method section describes logistics but currently illustrates it with a site view.
4. **A detail at human scale** — hands on a termination, a panel being landed. Every current
   photograph is either an aerial or a wide ground shot; nothing is close.
5. **Open Graph share image** — a 1200 × 630 raster at `public/og/og-cover.png`, then set
   `meta.ogImage` in `src/data/content.ts`. Currently `null`, so no `og:image` tag is emitted
   and no broken path exists. This is the only genuinely missing asset.

---

## Replacing or adding an image later

1. Put the new photograph in `src/assets/images/`.
2. Import it in `src/data/content.ts` and point the relevant section's `image` at it.
3. Update the `alt` text in the same place — describe only what is visible.
4. Set `imagePosition` (or the component's `position` prop) if the subject needs a different
   focal point.

Astro handles AVIF/WebP generation, responsive `srcset`, and intrinsic dimensions automatically.
No component needs editing for an image swap.

**Note on build output:** Astro also copies the untouched source files into `dist/_astro/`
even though nothing references them (about 5 MB). They are never served. This is Astro's
behaviour for imported assets, not a configuration error.
