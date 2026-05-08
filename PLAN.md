# Portfolio Update Plan — Descriptions + Images

> **Goal:** Update all card descriptions to match `Dillon-Mannion-Resume.pdf` and provide every card on the site with an image.
> **Source of truth:** `Dillon-Mannion-Resume.pdf` for descriptions, `Dillon_Mannion_Resume_Reference.md` for what stays/goes.
> **Primary file:** `src/data/resume.tsx` (imported by 11 files — all changes are data-layer).

---

## Part 1: Description Updates (`src/data/resume.tsx`)

### Top-Level Fields

| Field | Change |
|-------|--------|
| `description` | Rewrite to PDF header: "Operations and systems-implementation builder bridging frontline fulfillment experience with end-to-end delivery of business operations platforms across booking, scheduling, finance, and tax workflows." |
| `summary` | Rewrite to PDF two-paragraph summary (discovery → launch, cutting complexity, streamlining repeatable processes). Keep existing `/#education`, `/#projects`, `/#lab` anchor links for cross-navigation. |

### Work Experience

| Action | Entry | Details |
|--------|-------|---------|
| **Rename + rewrite** | Freelance → **Independent Business Systems Developer** | company: "Independent", title: "Business Systems Developer", description: PDF 5 bullets. `logoUrl`: `/fleuron-glyph.svg` (confirmed in `/public`). |
| **Update** | Amazon | title → "Warehouse Associate — Operations Point of Contact" (reference doc: most defensible framing). Description → PDF 4 bullets. `logoUrl` stays `/amazon.png`. |
| **Add** | **Costco Wholesale** | Seasonal Merchandise Associate, Rancho Cucamonga CA, Oct 2025 – Jan 2026. PDF 2 bullets. Needs logo. |
| **Keep (condense)** | Premier Swim Academy | Keep entry, brief description. Needs logo. |
| **Keep (condense)** | Wendy's | Keep entry, brief description. Needs logo. |
| **Remove** | TPFS Warehouse | Reference doc: "employer name needed", too thin to show. |

### Projects

| Action | Current → New | Description Source | Dates |
|--------|--------------|-------------------|-------|
| **Rename** | Alpine Roots Big Bear → **Grizzly Getaway** | PDF: "Live booking, availability, and tax-tracking platform supporting an operating cabin-rental business; integrated back-office workflows for deduction tracking." | Jun 2025 – Present |
| **Update** | Picasso Hair Salon | PDF: "Production multi-step scheduling, customer portal, and admin dashboard for end-to-end service management. Supabase backend with RLS and OAuth, TDD via Vitest and Playwright (90% core coverage), Vercel CI/CD, internationalized in English, Spanish, and Chinese." | Jun 2025 – Present |
| **Rename** | Quantasy.ai → **Quantasy** | PDF: "Founder-led platform in alpha with ~40 testers; designed core data model and UX for roster management, synthesized user feedback to drive iterative roadmap refinement." | May 2025 – Present |
| **Rename** | Expressions Hair Designs → **Fleuron** | PDF: "Extended Picasso's core booking system into a multi-tenant SaaS pattern with boutique per-business sites, finance tracking, tax-deduction support, and employee management; Mapped feature-parity gaps against market-leading platforms to prioritize roadmap items." | 2025 – Present |
| **Add** | **UC Davis DataLab** | PDF: "Analyzed 43,800 records across 218 subjects using EDA, PCA, CCA, and SEM in Python and R. Built a Python web app and HTML reference guide so non-statisticians could contribute across the analysis pipeline. Findings presented to DataLab researchers." | Apr – Jun 2025 |
| **Add** | **Cafepillar** | PDF: "Implemented scalable game-state and data-management systems enabling 15 new recipes to be added without code rewrites; reduced feature build time ~30% via OOP patterns (Factory, Observer, Command). Optimized A* pathfinding (~80% reduction in computational overhead) and resolved 100+ Git merge conflicts across a five-person team repository." | Sep 2024 – Mar 2025 |
| **Remove** | Jurnl | Not in PDF or reference doc recommended entries. |

### Education

| Action | Entry | Details |
|--------|-------|---------|
| Keep | UC Davis | No changes. `logoUrl`: `/ucdavis.png`. |
| Keep | Chaffey College | No changes. `logoUrl`: `/chaffey.png`. |
| **Remove** | Los Osos High School | Reference doc: "generally omitted post-college." |

### Lab Section

No description changes — lab entries are not on the resume. No image field in `LabCard` component; interactive widgets serve as the visual.

---

## Part 2: Images

### Current Image Inventory

```
public/amazon.png    — Amazon work logo (exists)
public/chaffey.png   — Chaffey College education logo (exists)
public/me.png        — Avatar (exists)
public/ucdavis.png   — UC Davis education logo (exists)
public/fleuron-glyph.svg — Fleuron brand mark (exists, will reuse for Independent work logo)
```

### Project Hero Images (rectangular, rendered at `h-48` / 192px with `object-cover`)

| Project | Source | Status |
|---------|--------|--------|
| Grizzly Getaway | Browser screenshot of `bigbear-clover-creations.vercel.app` | **Captured** |
| Picasso Hair Salon | Browser screenshot of `picasso-hair-salon.vercel.app` | **Captured** |
| Cafepillar | Gameplay screenshot via itch.io embed (`https://itch.io/embed-upload/12310105?color=6C9F5B`) | **Captured** |
| Quantasy | Generate branded SVG placeholder (fantasy sports theme) | Pending |
| Fleuron | Generate branded SVG placeholder (salon SaaS theme) | Pending |
| UC Davis DataLab | Generate branded SVG placeholder (data analysis theme) | Pending |

### Work Logos (circular, ~40px, rendered in accordion headers)

| Entry | Source | Status |
|-------|--------|--------|
| Independent | `/fleuron-glyph.svg` (reuse existing) | **Ready** |
| Amazon | `/amazon.png` (already exists) | **Ready** |
| Costco Wholesale | Source or create circular SVG logo | Pending |
| Premier Swim Academy | Source or create circular SVG logo | Pending |
| Wendy's | Source or create circular SVG logo | Pending |

### Education Logos

All covered — UC Davis and Chaffey already exist. Los Osos removed.

---

## Part 3: Execution Order

1. **Descriptions** — Update all text in `src/data/resume.tsx` (pure data change, zero risk)
2. **Save screenshots** — Save captured browser screenshots to `/public` as optimized images
3. **Generate placeholders** — Create 3 branded SVG hero images for Quantasy, Fleuron, DataLab
4. **Source work logos** — Create or download circular logos for Costco, Premier Swim, Wendy's
5. **Wire images** — Set `image` and `logoUrl` fields in `resume.tsx` to new paths
6. **Build + verify** — `pnpm build` succeeds, `pnpm dev` renders all sections correctly

---

## Decisions (Resolved)

| Question | Answer |
|----------|--------|
| Los Osos HS | **Omit** |
| Premier Swim / Wendy's | **Keep condensed** with logos |
| Freelance/Independent logo | **`/fleuron-glyph.svg`** |
| Projects without live sites | **Generate branded placeholders**; Cafepillar uses itch.io embed screenshot |
