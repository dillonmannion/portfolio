# Portfolio

Personal portfolio site for Dillion Verma — resume sections, project showcase, and an MDX blog. Built with Next.js 16 App Router, React 19, TypeScript, TailwindCSS v4, and shadcn/ui (new-york style).

## Commands

Package manager is `pnpm` (Node >= 18). All commands run from repo root.

- Install: `pnpm install`
- Dev server: `pnpm dev` (Next.js, http://localhost:3000)
- Production build: `pnpm build` (also regenerates content collections)
- Start built app: `pnpm start`
- Lint: `pnpm lint`
- Lint and autofix: `pnpm lint:fix`
- Lint a single file: `pnpm lint path/to/file.tsx`
- Typecheck (no script — invoke directly): `pnpm exec tsc --noEmit`
- Add a shadcn component: `pnpm dlx shadcn@latest add <component>` (config in `components.json`, target dir `@/components/ui`)
- Add a new blog post: drop a `.mdx` file in `content/` matching the schema in `content-collections.ts`

No test runner is configured.

## Architecture

Single Next.js app with App Router under `src/app/`.

- `src/app/page.tsx` — landing page; hero/about/education/skills are rendered inline, then composes `WorkSection`, `ProjectsSection`, `HackathonsSection`, `ContactSection`. All resume content reads from `@/data/resume`.
- `src/app/blog/page.tsx` — paginated blog index (5 per page) sourced from `content-collections`.
- `src/app/blog/[slug]/page.tsx` — MDX post renderer; `generateStaticParams` enumerates all posts.
- `src/app/layout.tsx` — root layout, theme provider, navbar, fonts (Geist / Geist Mono).
- `src/data/resume.tsx` — single source of truth for personal data; the file the user edits to "configure" the site.
- `src/components/ui/` — shadcn primitives plus `svgs/` brand icons.
- `src/components/magicui/` — animation primitives (`blur-fade` is the workhorse).
- `src/components/section/` — page-level resume sections used by `app/page.tsx`.
- `src/components/mdx/` — `code-block.tsx` (client-side Shiki via `shiki/bundle/web`), `media-container.tsx`.
- `src/mdx-components.tsx` — MDX component overrides (pre, code, hr, table, MediaContainer).
- `src/lib/` — `utils.ts` (`cn`, `formatDate`), `pagination.ts`, `remark-code-meta.ts` (custom remark plugin).
- `content/` — MDX blog posts. Frontmatter schema enforced by Zod in `content-collections.ts`. Pipeline uses `remark-gfm` + `remarkCodeMeta` only.
- `.content-collections/generated/` — generated TypeScript output, imported as `content-collections`. Gitignored. Regenerated on `pnpm dev` and `pnpm build`.
- `next.config.mjs` — wraps with `withContentCollections`; sets security headers (X-Frame-Options DENY, nosniff, Permissions-Policy, Referrer-Policy).

Path alias `@/*` resolves to `./src/*`. Path alias `content-collections` resolves to `./.content-collections/generated`.

## Conventions

- Component file naming: `kebab-case.tsx` (e.g. `project-card.tsx`, `blur-fade-text.tsx`).
- Prefer `cn()` from `@/lib/utils` for conditional class merging. Plain template-literal concatenation is used in a few simple components — match the local pattern.
- shadcn variants via `class-variance-authority` (`cva`); see `src/components/ui/button.tsx` for the pattern.
- Animations via `motion` (the new `framer-motion` package) and the `magicui` blur-fade primitives. Stagger delays use `BLUR_FADE_DELAY = 0.04` (defined per page).
- Frontmatter for blog posts must satisfy: `title`, `publishedAt`, `summary` (required); `updatedAt`, `author`, `image` (optional). Validation will fail the build.
- Use the `Geist` and `Geist_Mono` next/font instances loaded in `app/layout.tsx`. Do not add new font loaders.

## Constraints

- Never import directly from `.content-collections/generated/`; always use the bare specifier `content-collections`.
- Never edit files inside `.content-collections/` or `.next/` — both are generated.
- Do not weaken the security headers in `next.config.mjs` without a stated reason.
- Keep `reactStrictMode: true`. Do not toggle it off to suppress warnings.
- Do not introduce a second package manager; lockfile is `pnpm-lock.yaml`.
- The blog index page size (`PAGE_SIZE = 5`) is intentional. Change it in one place: `src/app/blog/page.tsx`.
- MDX `code` rendering: inline code is detected by absence of `data-language`. Preserve that contract in `src/mdx-components.tsx`.
- The MDX pipeline does not use `rehype-pretty-code` even though the dep is present — highlighting happens client-side in `code-block.tsx`. Do not wire it in without a deliberate plan.

## Testing

No test framework is configured. If adding tests:

- Use Playwright for e2e against meaningful pages (landing, `/blog`, a sample post).
- Use Vitest for utility coverage (`src/lib/pagination.ts` is the obvious target).
- Add a corresponding script to `package.json` so it is discoverable.

Until then, manual verification: `pnpm build` succeeds, `pnpm dev` renders `/`, `/blog`, and at least one `/blog/<slug>` without errors.
