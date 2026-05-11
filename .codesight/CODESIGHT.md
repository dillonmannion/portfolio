# porfolio — AI Context Map

> **Stack:** next-app | none | react | typescript
> **Monorepo:** 

> 0 routes | 0 models | 33 components | 3 lib files | 0 env vars | 0 middleware | 0% test coverage
> **Token savings:** this file is ~1,800 tokens. Without it, AI exploration would cost ~20,600 tokens. **Saves ~18,800 tokens per conversation.**
> **Last scanned:** 2026-05-11 18:53 — re-run after significant changes

---

# Components

- **Image** — props: params — `src/app/blog/[slug]/opengraph-image.tsx`
- **Blog** — props: params — `src/app/blog/[slug]/page.tsx`
- **Image** — `src/app/blog/opengraph-image.tsx`
- **BlogPage** — props: searchParams — `src/app/blog/page.tsx`
- **RootLayout** — `src/app/layout.tsx`
- **NotFound** — `src/app/not-found.tsx`
- **Image** — `src/app/opengraph-image.tsx`
- **Page** — `src/app/page.tsx`
- **Icons** — `src/components/icons.tsx`
- **AgentTerminal** [client] — `src/components/lab/agent-terminal.tsx`
- **BarRow** — props: label, value, percent, labelWidth — `src/components/lab/bar-row.tsx`
- **GenreClassifier** [client] — `src/components/lab/genre-classifier.tsx`
- **NixTree** [client] — `src/components/lab/nix-tree.tsx`
- **PrimateChart** [client] — `src/components/lab/primate-chart.tsx`
- **LabCard** [client] — props: title, description, technologies, links — `src/components/lab-card.tsx`
- **BlurFadeText** [client] — props: text, className, variant, hidden — `src/components/magicui/blur-fade-text.tsx`
- **BlurFade** [client] — props: className, variant, hidden — `src/components/magicui/blur-fade.tsx`
- **DEFAULT_MAGNIFICATION** [client] — props: className, magnification, distance — `src/components/magicui/dock.tsx`
- **FlickeringGrid** [client] — props: squareSize, gridGap, flickerChance, color, width, height, className, maxOpacity — `src/components/magicui/flickering-grid.tsx`
- **CodeBlock** [client] — `src/components/mdx/code-block.tsx`
- **MediaContainer** — props: src, alt, type, className — `src/components/mdx/media-container.tsx`
- **ModeToggle** [client] — props: className — `src/components/mode-toggle.tsx`
- **Navbar** [client] — `src/components/navbar.tsx`
- **ProjectCard** [client] — props: title, href, description, dates, tags, link, image, video, links, className — `src/components/project-card.tsx`
- **ContactSection** — `src/components/section/contact-section.tsx`
- **LabSection** — `src/components/section/lab-section.tsx`
- **ProjectsSection** — `src/components/section/projects-section.tsx`
- **WorkSection** [client] — `src/components/section/work-section.tsx`
- **ThemeProvider** [client] — `src/components/theme-provider.tsx`
- **TimelineConnectItem** — props: className — `src/components/timeline.tsx`
- **TimelineItem** — props: className — `src/components/timeline.tsx`
- **Timeline** — props: className, orientation — `src/components/timeline.tsx`
- **DATA** — `src/data/resume.tsx`

---

# Libraries

- `src/lib/pagination.ts`
  - function paginate: (items, options) => PaginationResult<T>
  - function getPaginationMeta: (totalItems, options) => void
  - function normalizePage: (page, maxPage) => number
  - interface PaginationOptions
  - interface PaginationResult
- `src/lib/remark-code-meta.ts` — function remarkCodeMeta: () => void
- `src/lib/utils.ts` — function cn: (...inputs) => void, function formatDate: (date) => void

---

# Config

## Config Files

- `next.config.mjs`
- `tsconfig.json`

## Key Dependencies

- next: ^16.2.6
- react: ^19.2.6
- tailwindcss: ^4.3.0

---

# Dependency Graph

## Most Imported Files (change these carefully)

- `src/lib/utils.ts` — imported by **19** files
- `src/data/resume.tsx` — imported by **12** files
- `src/components/ui/button.tsx` — imported by **6** files
- `src/components/magicui/blur-fade.tsx` — imported by **4** files
- `src/components/magicui/flickering-grid.tsx` — imported by **2** files
- `src/components/lab/bar-row.tsx` — imported by **2** files
- `src/components/ui/badge.tsx` — imported by **2** files
- `src/lib/remark-code-meta.ts` — imported by **1** files
- `src/mdx-components.tsx` — imported by **1** files
- `src/lib/pagination.ts` — imported by **1** files
- `src/components/navbar.tsx` — imported by **1** files
- `src/components/theme-provider.tsx` — imported by **1** files
- `src/components/ui/tooltip.tsx` — imported by **1** files
- `src/components/magicui/blur-fade-text.tsx` — imported by **1** files
- `src/components/ui/avatar.tsx` — imported by **1** files
- `src/components/section/contact-section.tsx` — imported by **1** files
- `src/components/section/lab-section.tsx` — imported by **1** files
- `src/components/section/projects-section.tsx` — imported by **1** files
- `src/components/section/work-section.tsx` — imported by **1** files
- `src/components/magicui/dock.tsx` — imported by **1** files

## Import Map (who imports what)

- `src/lib/utils.ts` ← `src/app/blog/[slug]/page.tsx`, `src/app/layout.tsx`, `src/components/lab/nix-tree.tsx`, `src/components/lab-card.tsx`, `src/components/magicui/blur-fade-text.tsx` +14 more
- `src/data/resume.tsx` ← `src/app/blog/[slug]/opengraph-image.tsx`, `src/app/blog/[slug]/page.tsx`, `src/app/blog/opengraph-image.tsx`, `src/app/layout.tsx`, `src/app/opengraph-image.tsx` +7 more
- `src/components/ui/button.tsx` ← `src/app/not-found.tsx`, `src/components/lab/agent-terminal.tsx`, `src/components/lab/genre-classifier.tsx`, `src/components/lab/primate-chart.tsx`, `src/components/mdx/code-block.tsx` +1 more
- `src/components/magicui/blur-fade.tsx` ← `src/app/blog/page.tsx`, `src/app/page.tsx`, `src/components/section/lab-section.tsx`, `src/components/section/projects-section.tsx`
- `src/components/magicui/flickering-grid.tsx` ← `src/app/layout.tsx`, `src/components/section/contact-section.tsx`
- `src/components/lab/bar-row.tsx` ← `src/components/lab/genre-classifier.tsx`, `src/components/lab/primate-chart.tsx`
- `src/components/ui/badge.tsx` ← `src/components/lab-card.tsx`, `src/components/project-card.tsx`
- `src/lib/remark-code-meta.ts` ← `content-collections.ts`
- `src/mdx-components.tsx` ← `src/app/blog/[slug]/page.tsx`
- `src/lib/pagination.ts` ← `src/app/blog/page.tsx`

---

# Test Coverage

> **0%** of routes and models are covered by tests
> 1 test files found

---

_Generated by [codesight](https://github.com/Houseofmvps/codesight) — see your codebase clearly_