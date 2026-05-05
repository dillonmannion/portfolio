# Portfolio Upgrades

Improvement catalog for dillonmannion.com. Each entry describes the current
state, what to change, where the change lives, and relative effort.

Effort scale: **S** (< 1 hour), **M** (1-4 hours), **L** (4-8 hours), **XL** (multi-session).

---

## 1. Project Card Visuals

### Current state

Every project in `DATA.projects` (`src/data/resume.tsx`) has `image: ""` and
`video: ""`. The `ProjectCard` component (`src/components/project-card.tsx`)
renders a blank `<div className="w-full h-48 bg-muted" />` when both are empty.
The projects section is a 2-column grid of gray rectangles with text underneath.

### 1a. Static screenshots — **S**

Take 1280x720 viewport screenshots of the two live sites:
- Alpine Roots Big Bear (`bigbear-clover-creations.vercel.app`)
- Picasso Hair Salon (`picasso-hair-salon.vercel.app`)

Save to `public/projects/alpine-roots.png` and `public/projects/picasso.png`.
Set the `image` field on each project entry in `resume.tsx`. The `ProjectCard`
already handles `<img>` rendering with error fallback. No code changes needed
beyond data.

For source-only projects (Quantasy.ai, Expressions, Jurnl), capture a
representative screenshot of the repo README, a UI mockup, or an architecture
diagram. Even a branded placeholder with the project name and logo is better
than the gray box.

### 1b. Short video loops — **S**

Record 5-8 second screen captures (scroll, hover state, booking flow) as
`.webm` or `.mp4`. Save to `public/projects/`. Set the `video` field.
`ProjectCard` already renders `<video autoPlay loop muted playsInline>`.
Videos communicate interactivity far better than static images.

Good candidates:
- Alpine Roots: scroll through the property gallery
- Picasso: walk through the booking flow
- Quantasy.ai: draft board interaction (if a local dev build exists)

### 1c. Browser frame wrapper — **M**

Wrap project images/videos in a browser chrome mockup (address bar with dots,
URL text). Makes screenshots look like real applications instead of cropped
rectangles. Two options:
- CSS-only: a `BrowserFrame` component with a small top bar (`flex gap-1.5`,
  three 8px colored circles, a muted URL slug)
- Library: `react-browser-frame` or similar, though a hand-rolled 30-line
  component avoids a dependency

Touches: new component in `src/components/ui/browser-frame.tsx`, used inside
`ProjectCard` around the image/video element.

### 1d. Live iframe preview — **L**

Add a "Preview" toggle to `ProjectCard` that expands an `<iframe>` loading the
real site. Only viable for projects with a public URL (Alpine Roots, Picasso).

Considerations:
- This portfolio sets `X-Frame-Options: DENY` in `next.config.mjs` — that
  header applies to *this* site being framed, not to outbound iframes. The
  *target* sites need to allow framing (check their `X-Frame-Options` and
  `Content-Security-Policy frame-ancestors`).
- Add `loading="lazy"` and a fixed height container to avoid CLS.
- Sandbox the iframe: `sandbox="allow-scripts allow-same-origin"`.
- Mobile: iframes of full desktop sites look cramped on small viewports. Show
  the static image on mobile and only offer the iframe toggle on `md:` and up.

### 1e. OG image fallback — **M**

For projects without a manual screenshot, fetch the site's Open Graph image at
build time as a fallback. A small build script or utility that hits each
project's `href`, parses the HTML for `<meta property="og:image">`, and writes
the URL into a generated manifest. `ProjectCard` checks for the OG image when
`image` is empty.

---

## 2. GitHub Project Widgets

Several projects only have a source link and no live URL: Quantasy.ai,
Expressions Hair Designs, Jurnl, and all four lab entries. These need visual
proof-of-life beyond the description text.

### 2a. GitHub stats bar — **M**

Show stars, forks, primary language, and last commit date on each project card.
Fetch from the GitHub API at build time using `gh api repos/4Clover/{repo}`
(available via mise). Store as a JSON file in `.next/cache/` or a generated
module so runtime API calls are unnecessary.

Display as a small horizontal bar below the project description:
`star-icon 3 | fork-icon 1 | TypeScript | Updated 2 days ago`

Touches:
- Build script or `next.config.mjs` redirect to a generated JSON endpoint
- New `GitHubStats` component used inside `ProjectCard`
- `resume.tsx`: add a `repo` field (e.g. `"4Clover/bigbear"`) to each project

### 2b. README preview card — **L**

For repos without a live URL, fetch and render a curated excerpt of the README
(first 2-3 paragraphs or up to the first `##` heading) inside the project card
image area. Use `gh api repos/4Clover/{repo}/readme` to get raw markdown at
build time, truncate, and render with `react-markdown`.

This replaces the gray box with actual content for source-only projects.

### 2c. Code snippet spotlight — **M**

For technically impressive repos (agent-link-mcp, ClassifyThatBeat), show a
syntax-highlighted code snippet in the card image area. Pick the 10-20 most
representative lines (e.g., the MCP tool registration, the Spotify API call).

The project already has Shiki via `src/components/mdx/code-block.tsx` (client-
side `shiki/bundle/web`). Create a `CodePreview` component that renders a
static code block with a filename label and line numbers.

### 2d. Contribution activity sparkline — **M**

A tiny sparkline or heatmap showing commit activity per repo over the last 90
days. Fetched at build time from `gh api repos/4Clover/{repo}/stats/commit_activity`.
Rendered as an inline SVG or canvas element on each card.

Shows that projects are actively maintained, not abandoned.

### 2e. Architecture diagram for complex projects — **L**

For Expressions Hair Designs (SvelteKit + Supabase + Drizzle + Square +
Storyblok + Cloudflare), render a small interactive architecture diagram
showing how the services connect. Boxes and arrows using SVG or a lightweight
diagramming library.

Could be a standalone lab widget or embedded in a future case study page.

---

## 3. Resume Embed / Download

There is no way for visitors to view or download a traditional resume. The
navbar (`src/data/resume.tsx` `DATA.navbar`) only has Home and Blog.

### 3a. PDF download button — **S**

Place a `resume.pdf` in `public/`. Add a download link to the hero section
(next to the avatar) or the navbar. Simple `<a href="/resume.pdf" download>`
with a download icon.

Navbar addition in `resume.tsx`:
```ts
{ href: "/resume.pdf", icon: FileTextIcon, label: "Resume" }
```

### 3b. Interactive `/resume` page — **L**

A dedicated route (`src/app/resume/page.tsx`) that renders `DATA` in a clean,
printable resume layout. All the data already exists in `resume.tsx` — work
history, education, skills, projects.

Key features:
- `@media print` styles for clean `Ctrl+P` output
- A "Download PDF" button that triggers `window.print()` or links to the static
  PDF
- Compact, single-page layout optimized for scanning
- ATS-friendly semantic HTML (no complex grids or absolute positioning)

Add to navbar: `{ href: "/resume", icon: FileTextIcon, label: "Resume" }`.

### 3c. Auto-generated PDF from data — **XL**

Build a script that generates `public/resume.pdf` from `resume.tsx` data at
build time. Options:
- `@react-pdf/renderer`: render React components to PDF directly
- Puppeteer: headless Chrome renders the `/resume` page to PDF
- LaTeX template: generate `.tex` from data, compile with `tectonic`

The benefit is a single source of truth — edit `resume.tsx`, and both the web
and PDF versions update. The drawback is build complexity and an additional
dependency.

### 3d. Multiple format options — **M**

Once a PDF exists, offer a small dropdown or button group:
- "View online" -> `/resume`
- "Download PDF" -> `/resume.pdf`
- "Plain text" -> `/resume.txt` (generated, ATS-optimized)

---

## 4. Homepage Sections

### 4a. Recent blog posts section — **M**

Surface the latest 2-3 blog posts on the landing page between Lab and Contact.
The data is already available via `allPosts` from `content-collections`.

Layout: a minimal list similar to the blog index — post title, date, one-line
summary. A "View all posts" link to `/blog`.

Currently there are 7 MDX posts in `content/`. Showing recent ones
cross-promotes content and adds freshness signals to the homepage.

Touches:
- New `BlogPreviewSection` in `src/components/section/`
- Import `allPosts` in `page.tsx`, sort by date, take first 3
- Add between the Lab and Contact `<section>` blocks

### 4b. Testimonials / client quotes — **M**

Add a `DATA.testimonials` array in `resume.tsx` and a `TestimonialsSection`
component. Even one or two lines from Alpine Roots or Picasso clients adds
social proof.

Structure:
```ts
testimonials: [
  {
    quote: "Dillon delivered exactly what we needed...",
    author: "Client Name",
    role: "Owner, Alpine Roots Big Bear",
    avatar: "/testimonials/client.jpg", // optional
  },
]
```

Render as a simple blockquote card or a horizontal scroll of quote cards.

### 4c. Skills categorization — **M**

The current skills section is a flat row of badges. Group skills into
categories for better storytelling:

- **Frontend**: TypeScript, React, Next.js, Svelte
- **Backend**: Node.js, Python, Java, C++
- **Data**: PostgreSQL, MongoDB, Supabase
- **DevOps / Tools**: Nix

Each category as a labeled group with the existing icon badges underneath.
Optionally add proficiency indicators (years, comfort level) but avoid
self-assessment bars — they're contentious.

### 4d. Timeline view — **XL**

A vertical timeline combining work experience, education, and key project
milestones in chronological order. Shows career progression as a narrative
rather than three separate lists.

Libraries: `react-vertical-timeline-component` or hand-rolled with CSS
`::before` pseudo-elements for the line and dots.

Would replace or supplement the current separate Work Experience and Education
sections. Large layout change — prototype first.

---

## 5. Lab Enhancements

### Current state

Four lab widgets exist, all rendering synthetic/simulated data:
- `genre-classifier`: deterministic hash-based bar chart (simulated)
- `agent-terminal`: scripted animation of a fake terminal session
- `nix-tree`: static file tree with expand/collapse
- `primate-chart`: synthetic data bar chart with metric toggle

### 5a. ClassifyThatBeat live demo — **L**

Replace or augment the simulated classifier with real data. Options:
- **Curated catalog**: pre-analyze 20-30 well-known EDM tracks with real
  Spotify audio features, store results as static JSON. User picks from a
  dropdown instead of typing. No API key needed at runtime.
- **Live Spotify API**: user authenticates with Spotify, pastes a track URL,
  and gets real classification. Requires a backend proxy or serverless function
  to handle the API key. Higher effort but more impressive.

### 5b. Agent terminal live mode — **XL**

The current widget is a scripted animation. A real interactive demo would
connect to a sandboxed backend via WebSocket, letting visitors type a prompt
and see an agent respond. This is high-effort and has security/cost
implications (rate limiting, sandboxing, API costs).

A middle ground: pre-record 3-5 real agent sessions as JSON transcripts and
let the user pick which one to "replay." More authentic than the current
single scripted sequence, without the backend complexity.

### 5c. Portfolio meta widget — **M**

A lab entry that showcases this portfolio itself: tech stack, build time,
Lighthouse scores, bundle size, line count. Fetched at build time.

Self-referential but effective — demonstrates awareness of performance and
build tooling. The data is cheap to generate (`next build` output, `wc -l`,
Lighthouse CI).

### 5d. Quantasy.ai draft board widget — **L**

A lab-style interactive widget showing a mock fantasy football draft board or
VBD ranking table. Renders synthetic player data in the Balatro-inspired card
style described in the project. Would give visitors a taste of the Quantasy.ai
experience without navigating to a separate site.

Register in `WIDGETS` map in `lab-section.tsx` + add entry in `DATA.lab`.

### 5e. Interactive Nix config explorer — **M**

Upgrade the `nix-tree` widget from a static file tree to an interactive
explorer that shows actual Nix module contents (truncated) when a file is
clicked. Fetch file contents from the GitHub API at build time, store as
static JSON. Clicking a file node expands a syntax-highlighted code preview
below the tree.

---

## 6. Blog Improvements

### 6a. Blog post cover images — **M**

The blog index (`src/app/blog/page.tsx`) shows only title and date. Add an
optional `image` field to the MDX frontmatter schema (already in the Zod
schema as optional) and render a thumbnail in the blog list.

### 6b. Reading time estimate — **S**

Calculate word count / 200 for each post and display next to the date.
Content-collections can compute this at build time via a custom transform.

### 6c. Tag/category system — **M**

Add a `tags` field to the frontmatter schema. Render tags as filter pills on
the blog index. Enables visitors to find posts by topic.

### 6d. Related posts — **M**

At the bottom of each blog post page (`src/app/blog/[slug]/page.tsx`), show
2-3 related posts based on shared tags or recency. Encourages continued
reading.

### 6e. RSS feed — **S**

Generate `/feed.xml` at build time from `allPosts`. Next.js App Router supports
this via a `route.ts` handler that returns XML. Signals professionalism and
enables syndication.

---

## 7. SEO and Metadata

### 7a. Open Graph image — **M**

The root layout sets `openGraph` metadata but there is no OG image. When the
site is shared on LinkedIn, Twitter, or Slack, it shows a plain text card.

Options:
- Static: design a 1200x630 OG image in Figma, save to `public/og.png`, and
  reference it in `layout.tsx` metadata.
- Dynamic: use `next/og` (Vercel's `ImageResponse`) to generate OG images
  per-page with the page title rendered on a branded background.

Dynamic is more impressive for blog posts (each post gets a unique card).

### 7b. Favicon — **S**

Verify a proper favicon exists. The `public/` directory has `me.png` but no
`favicon.ico` or `apple-touch-icon.png`. Generate a favicon set from the
avatar or a custom icon.

### 7c. Sitemap — **S**

Next.js App Router supports auto-generated sitemaps via `src/app/sitemap.ts`.
Export a function that returns all routes (home, blog index, each blog post).
Helps search engine discoverability.

### 7d. Structured data (JSON-LD) — **M**

Add JSON-LD structured data to the homepage (Person schema) and blog posts
(Article schema). Helps search engines understand the content and can produce
rich snippets.

```ts
// In layout.tsx or page.tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dillon Mannion",
    url: "https://dillonmannion.com",
    jobTitle: "Full-Stack Web Developer",
    // ...
  })}
</script>
```

---

## 8. Design and Polish

### 8a. Work experience logos — **S**

Three work entries have `logoUrl: ""` (Freelance, Premier Swim Academy,
Wendy's). Los Osos High School also has no logo. Even a generic company icon
or the first letter in a colored circle is better than the current empty
`bg-muted` circle rendered in `page.tsx`.

For Freelance, use a personal brand mark or the portfolio avatar. For known
companies (Wendy's), their logo is publicly available.

### 8b. Hover and interaction states — **M**

The project cards have a basic `hover:ring-2 hover:ring-muted` effect. More
intentional interactions:
- Subtle scale on hover (`hover:scale-[1.02]`)
- Image/video zoom on hover within the card frame (overflow-hidden + scale)
- Lab cards: richer expand/collapse animation
- Skills badges: tooltip on hover showing context (years of experience, or
  "used in: Alpine Roots, Quantasy.ai")

### 8c. Light and dark theme polish — **M**

`defaultTheme` is `"light"` in `layout.tsx`. Verify both themes look
intentional. Common issues:
- Image backgrounds that clash in dark mode
- Insufficient contrast on muted text in dark mode
- The flickering grid may need different colors per theme
- Project card screenshots should ideally match the current theme, or use a
  neutral screenshot

### 8d. Page transitions — **M**

The blur-fade animations handle initial load well but navigating between pages
(Home -> Blog -> Post) has no transition. Consider `next-view-transitions` or
a layout-level animation wrapper for smoother navigation.

### 8e. 404 page — **S**

No custom 404 exists. A branded `src/app/not-found.tsx` with the flickering
grid background and a link back to home keeps the experience consistent.

---

## 9. Technical Improvements

### 9a. Analytics — **S**

Add privacy-friendly analytics (Plausible, Umami, or Vercel Analytics) to
understand which projects and blog posts visitors actually engage with. Informs
prioritization of future improvements.

Single script tag in `layout.tsx` or the Vercel dashboard toggle.

### 9b. Performance audit — **M**

Run Lighthouse on the live site. Known areas to check:
- FlickeringGrid renders a full-viewport canvas — verify it doesn't tank FCP
- Shiki client-side bundle in blog posts (code-block.tsx) — measure JS weight
- Font loading: 4 weights of Geist + 5 weights of Geist Mono loaded in
  `layout.tsx` — consider subsetting to the 2-3 weights actually used
- Images without explicit `width`/`height` (if added per upgrade 1a)

### 9c. Accessibility audit — **M**

Check:
- Keyboard navigation through all interactive elements (lab widgets, nav, cards)
- Screen reader experience for the lab widgets (ARIA labels on the terminal,
  chart bars, tree nodes)
- Color contrast in both themes
- Reduced motion: `blur-fade` animations should respect
  `prefers-reduced-motion`
- Focus indicators on all interactive elements

### 9d. Error boundaries — **S**

Lab widgets are client-only and dynamic-imported. If one fails to load or
throws at runtime, it could break the entire lab section. Wrap each widget in
a React error boundary that shows a graceful fallback.

---

## 10. Content Depth

### 10a. Case study pages — **XL**

For each freelance project (Alpine Roots, Picasso, Expressions), create a
detailed case study page at `/projects/[slug]`:

- **Problem**: what the client needed
- **Approach**: tech stack decisions and why
- **Implementation**: key technical challenges solved
- **Results**: metrics, client feedback, before/after

This is the single most impactful content change for demonstrating depth to
potential employers or clients. A card with a two-sentence description doesn't
convey the problem-solving that went into each project.

Route: `src/app/projects/[slug]/page.tsx`. Data: either MDX files in a
`content/projects/` directory (paralleling the blog) or a `DATA.caseStudies`
array in `resume.tsx`.

### 10b. Project detail modal — **L**

A lighter alternative to full case study pages: clicking a project card opens
a modal/drawer with an expanded description, more screenshots, tech stack
rationale, and links. No new route needed — all data lives in `resume.tsx`.

Less SEO value than dedicated pages but faster to implement.

### 10c. Metrics in project descriptions — **S**

Add quantifiable outcomes to existing project descriptions where data exists:
- "Serves X monthly visitors"
- "Processed Y bookings in first month"
- "Reduced page load time from X to Y"
- "Z% uptime since launch"

Edit `resume.tsx` descriptions only. No code changes.

---

## Priority Matrix

| Priority | Upgrade | Effort | Impact |
|----------|---------|--------|--------|
| 1 | 1a. Static screenshots | S | Eliminates gray boxes |
| 2 | 3a. PDF resume download | S | Expected by recruiters |
| 3 | 7a. Open Graph image | M | Makes sharing look professional |
| 4 | 7b. Favicon | S | Basic professionalism |
| 5 | 7c. Sitemap | S | SEO baseline |
| 6 | 1b. Video loops | S | Shows interactivity |
| 7 | 8a. Work experience logos | S | Polishes work section |
| 8 | 8e. 404 page | S | Branded error state |
| 9 | 6e. RSS feed | S | Blog professionalism |
| 10 | 6b. Reading time | S | Blog polish |
| 11 | 10c. Metrics in descriptions | S | Adds credibility |
| 12 | 1c. Browser frame wrapper | M | Visual sophistication |
| 13 | 4a. Recent blog posts | M | Cross-promotes content |
| 14 | 2a. GitHub stats bar | M | Source-only project vitality |
| 15 | 4c. Skills categorization | M | Better storytelling |
| 16 | 3b. Interactive /resume page | L | Professional completeness |
| 17 | 10a. Case study pages | XL | Deepest impact for hiring |
| 18 | 5a. ClassifyThatBeat live demo | L | Lab impressiveness |
| 19 | 2c. Code snippet spotlight | M | Technical showcase |
| 20 | 5d. Quantasy.ai draft widget | L | Project showcase |
| 21 | 9c. Accessibility audit | M | Inclusive design |
| 22 | 9b. Performance audit | M | Technical credibility |
| 23 | 4b. Testimonials | M | Social proof |
| 24 | 7d. Structured data | M | SEO depth |
| 25 | 8b. Hover states | M | Interaction polish |
| 26 | 4d. Timeline view | XL | Narrative arc |
| 27 | 5b. Agent terminal live mode | XL | High effort, high wow |
| 28 | 3c. Auto-generated PDF | XL | Single source of truth |
