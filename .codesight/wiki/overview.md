# porfolio — Overview

> **Navigation aid.** This article shows WHERE things live (routes, models, files). Read actual source files before implementing new features or making changes.

**porfolio** is a typescript project built with next-app, organized as a monorepo.

## Scale

33 UI components · 3 library files

**UI:** 33 components (react) — see [ui.md](./ui.md)

## High-Impact Files

Changes to these files have the widest blast radius across the codebase:

- `src/lib/utils.ts` — imported by **19** files
- `src/data/resume.tsx` — imported by **12** files
- `src/components/ui/button.tsx` — imported by **6** files
- `src/components/magicui/blur-fade.tsx` — imported by **4** files
- `src/components/magicui/flickering-grid.tsx` — imported by **2** files
- `src/components/lab/bar-row.tsx` — imported by **2** files

---
_Back to [index.md](./index.md) · Generated 2026-05-08_