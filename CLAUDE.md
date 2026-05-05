# CLAUDE.md

See @AGENTS.md for project context, commands, architecture, and constraints.

## AI Context (codesight)

`.codesight/` contains an AST-derived context map. Read these before exploring blindly:

- `.codesight/CODESIGHT.md` — components, libs, key deps, dependency graph (~1.7k tokens).
- `.codesight/wiki/index.md` — orientation; links to `overview.md` and `ui.md`.
- `.codesight/KNOWLEDGE.md` — knowledge index.

Regenerate after significant changes: `npx codesight --wiki` (per `.codesight/wiki/index.md`). Last scan: 2026-05-04.

## Repo-specific notes

- The site is data-driven from `src/data/resume.tsx` (~26 KB, imported by 11 files). When the user says "update my portfolio," that is almost always the file to edit, not the section components.
- Adding a lab widget is a two-file change: register in the `WIDGETS` map in `src/components/section/lab-section.tsx` AND add the entry under `DATA.lab` in `src/data/resume.tsx` with the matching `widget` key.
- Content collections are imported as `content-collections` (TS path alias). The first `pnpm dev` or `pnpm build` after a fresh checkout populates `.content-collections/generated/`. If imports from `content-collections` fail to resolve, run `pnpm build` once.
- TailwindCSS v4 is configured via the `@tailwindcss/postcss` plugin (`postcss.config.mjs`). There is no `tailwind.config.ts` despite the reference in `components.json` — tokens live in `src/app/globals.css` using v4 CSS-first config.
- Two ESLint configs coexist: `eslint.config.mjs` (flat, authoritative) and a legacy `.eslintrc.json` (`extends: next/core-web-vitals`). Edit the flat config.
- Zod schema violations on MDX frontmatter only surface at content-collections compile time — `pnpm build` is the only thing that catches them.
- `README.md` is the upstream template (Dillion Verma) — do not treat as authoritative.

## CI

No CI workflows are committed (`.github/` does not exist). There is no repo-side build verification — anything not caught locally ships.

## .claude/ and tool markers

- `.claude/` contains only `settings.local.json` (cosmetic: disables spinner tips). No project-scoped rules, skills, hooks, or MCP servers. Global config from `~/.claude/` applies.
- `.codex` (empty file at root) is a Codex CLI marker — leave it alone.
