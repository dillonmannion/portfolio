# CLAUDE.md

See @AGENTS.md for project context, commands, architecture, and constraints.

## Repo-specific notes

- The site is data-driven from `src/data/resume.tsx` (~26 KB). When the user says "update my portfolio," that is almost always the file to edit, not the section components.
- Content collections are imported as `content-collections` (TS path alias). The first `pnpm dev` or `pnpm build` after a fresh checkout populates `.content-collections/generated/`. If imports from `content-collections` fail to resolve, run `pnpm build` once.
- TailwindCSS v4 is configured via the `@tailwindcss/postcss` plugin (`postcss.config.mjs`). There is no `tailwind.config.ts` despite the reference in `components.json` — tokens live in `src/app/globals.css` using v4 CSS-first config.
- Two ESLint configs coexist: `eslint.config.mjs` (flat, authoritative) and a legacy `.eslintrc.json`. Edit the flat config.
- Zod schema violations on MDX frontmatter only surface at content-collections compile time — `pnpm build` is the only thing that catches them.

## CI

No CI workflows are committed (`.github/` does not exist). There is no repo-side build verification — anything not caught locally ships.

## .claude/

Only `settings.local.json` (cosmetic: disables spinner tips). No project-scoped rules, skills, hooks, or MCP servers. Global config from `~/.claude/` applies.
