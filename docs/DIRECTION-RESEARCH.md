# Portfolio Direction Research

Research into what makes developer portfolios stand out in 2025-2026. Covers interactive features, content strategies, AI integrations, visual polish, discoverability, and UX. Based on ~60 searches across named portfolios, Awwwards/Codrops case studies, IndieWeb standards, and engineering blogs.

**Date:** 2026-05-05 | **Sources:** 53 | **Raw workspace:** `~/Documents/research/portfolio-site-additions_20260505_0459/`

---

## The Big Picture

Three patterns separate remarkable dev portfolios from adequate ones:

1. **The site itself proves your skills.** Rather than listing "I know APIs" in a skills section, expose a public `/api/profile` endpoint. Rather than claiming "AI experience," build a chatbot visitors can talk to. The medium demonstrates the message.

2. **Dual-audience design.** In 2026, your portfolio has two audiences: humans (recruiters, peers, hiring managers) and machines (ChatGPT, Claude, Perplexity, Google's AI). The best portfolios serve both — beautiful pages for humans, structured data and markdown endpoints for AI agents.

3. **Pick one signature feature and commit fully.** A portfolio with one deeply-executed idea beats one with ten shallow additions. The Windows XP recreation that hit Hacker News front page is memorable because it's *complete*. The VS-Code-clone portfolio works because every detail follows the conceit.

---

## What to Add (Explained)

### Command Palette (cmd-k)

**What it is:** A search/action popup (like Spotlight on Mac or Raycast) that appears when you press `Cmd+K`. It lets you jump to any page, toggle dark mode, copy your email, open your resume — all without clicking through navigation.

**Why it matters:** It signals "this person builds professional-grade interfaces." Linear, Vercel, Raycast, and Notion all have one. Fellow developers will immediately recognize the craft.

**How it works here:** shadcn/ui already ships a `Command` component built on `cmdk` (same library Linear uses). Drop it in, register commands for each page + actions, and it works. Later, wire it to Pagefind for fuzzy blog search.

**Effort:** ~4 hours. The component exists in our design system already.

---

### llms.txt (AI Discoverability File)

**What it is:** A plain markdown file at your site's root (`yoursite.com/llms.txt`) that tells AI tools what your site contains and how to navigate it. Think of it like a `robots.txt` or `sitemap.xml` but specifically formatted for LLMs to understand.

**Why it matters:** When someone asks ChatGPT or Claude "tell me about Dillon Mannion's work," the AI currently has to crawl and guess. With `llms.txt`, you give it a structured index: here are my projects, here's my experience, here's my blog — read these pages. Anthropic, Stripe, Cloudflare, and Cursor already ship this file. Adoption went from niche proposal (Sept 2024) to widespread standard after Mintlify auto-generated it for all their hosted docs sites.

**How it works here:** A static markdown file (or a Next.js route handler that generates it from `resume.tsx` data). Format is simple: site name, one-line summary, then categorized links with descriptions.

**Effort:** 30 minutes for the basic version.

---

### Full-Content RSS Feed

**What it is:** An XML file at `/feed.xml` that lets people subscribe to your blog in a feed reader (like Feedly, NetNewsWire, or Miniflux). "Full content" means the entire post appears in the reader — subscribers don't have to click through to your site.

**Why it matters:** The dev community strongly favors full-content feeds (not truncated teasers). It shows you respect your readers' time and workflow. It also makes your content available to AI aggregation pipelines and newsletter tools.

**How it works here:** Generate from `content-collections` data at build time. Every blog post becomes an entry with full markdown content, publish date, and permalink.

**Effort:** ~1 hour. Well-documented pattern for Next.js.

---

### /now Page

**What it is:** A page answering "what would I tell a friend I haven't seen in a year?" — what you're working on, what you're excited about, what's changed. Invented by Derek Sivers in 2015; there's a directory of 2,300+ sites at nownownow.com.

**Why it matters:** It turns a static portfolio into something alive. Visitors see what you're *currently* interested in — not just what you built two years ago. It gives context to your projects ("I'm currently deep in Nix and systems programming" explains why your lab has a NixTree widget). It also signals that you maintain your site actively.

**How it works here:** A simple MDX page or a section in `resume.tsx`. Update it every few weeks.

**Effort:** 30 minutes to create; 5 minutes to update periodically.

---

### /uses Page

**What it is:** A detailed list of your hardware, software, editor setup, terminal config, and tools. The uses.tech directory links to hundreds of developer examples.

**Why it matters:** Developers love comparing setups. It's low-effort content that drives organic traffic (people search "best terminal setup" or "developer desk setup"). It also demonstrates taste — *what* you chose and *why* tells people how you think about tools.

**What to include:** Computer/peripherals, editor + theme + extensions, terminal (shell, prompt, multiplexer), languages/frameworks you reach for, hosting/deployment, local LLM setup if applicable, dotfiles repo link.

**Effort:** 1-2 hours to write thoughtfully.

---

### Structured Data (JSON-LD)

**What it is:** Invisible metadata in your HTML that tells Google (and AI search engines) exactly what your pages contain in a machine-parseable format. For example: "This is a blog post, written by Dillon Mannion, published on this date, about this topic, with this many words."

**Why it matters:** It enables rich snippets in Google (author photo, publish date, breadcrumbs appear in search results). It helps AI search engines (Perplexity, Google AI Overview) correctly attribute your content. The `Person` schema with `sameAs` links to GitHub/LinkedIn helps Google associate your identity across platforms.

**What to add:**
- `Person` schema on the homepage (name, role, sameAs array with social links)
- `BlogPosting` schema on each blog post (headline, datePublished, author, wordCount)
- `BreadcrumbList` for navigation context
- `WebSite` schema with a `SearchAction` (points to cmd-k)

**Effort:** 2-3 hours. Template once, auto-generate per page.

---

### Copy as Markdown Button

**What it is:** A button on each blog post that copies the entire post as clean markdown to your clipboard. Often paired with a dropdown: "Open in ChatGPT" or "Open in Claude" with the URL pre-filled.

**Why it matters:** This is the user-facing side of AI discoverability. Visitors want to paste your content into LLMs for summarization, discussion, or reference. Making this one-click (instead of selecting all, copying, cleaning up HTML artifacts) is a small UX win that signals awareness of how people actually use content in 2026.

**How it works here:** A Next.js route handler at `/blog/<slug>/llm.md` that returns raw markdown (stripped of JSX/MDX components). The button fetches this and copies to clipboard.

**Effort:** ~3 hours (route handler + UI button).

---

### Paper Shaders (Ambient Background)

**What it is:** A lightweight library (`@paper-design/shaders-react`) that provides GPU-rendered visual effects — mesh gradients, simplex noise, god rays, water ripples — as React components. Each shader is a single WebGL2 canvas, far lighter than a full 3D framework like Three.js.

**Why it matters:** The site currently uses `FlickeringGrid` as an ambient background. Paper Shaders' `<MeshGradient>` would provide a richer, more modern visual (smooth color-shifting gradients instead of grid dots) at comparable performance cost. It's the kind of subtle polish that makes visitors pause and think "this looks *good*."

**Key detail:** Set `speed={0}` for a static gradient (zero ongoing GPU cost) or a very low speed for gentle motion. Use IntersectionObserver to pause when scrolled off-screen. Respect `prefers-reduced-motion`.

**Effort:** ~4 hours to integrate and tune. Replaces FlickeringGrid in `layout.tsx` and `contact-section.tsx`.

---

### View Transitions API (Page Transitions)

**What it is:** A browser-native API that animates between page navigations — elements morph smoothly from one position/size to another as you navigate. Think of how native mobile apps transition between screens vs. how most websites just "jump." This brings that smoothness to the web with minimal code.

**Why it matters:** It makes the entire site feel like a native app rather than a collection of separate HTML pages. Elements with matching `view-transition-name` CSS properties automatically animate between pages (e.g., a blog post title in a list morphs into the post's H1 when you click through).

**Caveat:** Still marked `experimental` in Next.js 16. Use Shu Ding's `next-view-transitions` wrapper (2.4k GitHub stars) for a more stable API that abstracts the experimental internals.

**Effort:** ~1 day to integrate. The wrapper handles most complexity.

---

### Pagefind (Static Site Search)

**What it is:** A client-side search engine that runs entirely in the browser via WebAssembly. It indexes your site after build, producing a tiny search index that loads on demand. Visitors get instant fuzzy search over all your blog posts and pages without any server or third-party service.

**Why it matters:** Large portfolios with many blog posts need discoverability. Pagefind is free, fast (~0.4s indexing for ~80 pages), privacy-friendly (no data leaves the browser), and works offline. Wire it into the command palette for a unified search experience.

**How it works here:** Run `pagefind --site .next` as a postbuild step. Import in the command palette component with `webpackIgnore: true`. When the user types in cmd-k, proxy to Pagefind's search API.

**Effort:** ~1 day (build integration + UI wiring).

---

### Giscus (Blog Comments)

**What it is:** A comment system for your blog powered by GitHub Discussions. Visitors authenticate with GitHub and leave comments that live as Discussion threads on your repo. Free, no tracking, open-source.

**Why it matters:** Comments create community around your writing. Unlike Disqus (heavy, ad-supported), Giscus is lightweight, privacy-respecting, and your developer audience already has GitHub accounts. Reactions (thumbs up, heart, etc.) come free.

**How it works here:** Add `@giscus/react` package, configure with your repo + Discussion category ID, drop the component at the bottom of blog posts. Requires the repo to be public.

**Effort:** ~2 hours.

---

### Per-Post View Counter

**What it is:** A small number next to each blog post showing how many times it's been viewed. leerob.io popularized this pattern: a simple Postgres/KV table with `slug` as key and `count` as value.

**Why it matters:** Social proof. Readers gravitate toward posts that others have read. It also gives you data on what content resonates without invasive analytics. Privacy-friendly implementations hash IP+UA+slug to deduplicate without storing personal data.

**How it works here:** Vercel KV (Redis) or Upstash — increment on page load via an edge middleware or API route. Display count client-side via SWR. Cost: free tier on Upstash handles thousands of daily views.

**Effort:** ~3 hours.

---

### Floating Table of Contents with Scrollspy

**What it is:** A sidebar (on wide viewports) or collapsible panel showing the heading structure of a blog post, with the current section highlighted as you scroll. "Scrollspy" means the highlight updates automatically based on scroll position.

**Why it matters:** Long blog posts need navigation. Readers want to see the structure at a glance, jump to specific sections, and understand where they are in the piece. Josh Comeau, Maxime Heckel, and most documentation sites use this pattern.

**How it works here:** Extract headings from MDX at build time (or via DOM query), render as a sticky aside, observe heading intersections with IntersectionObserver, highlight the active link. Collapse to a dropdown on mobile.

**Effort:** ~1 day.

---

### In-Browser ML Demo (Lab Widget)

**What it is:** A machine learning model running *entirely in the visitor's browser* — no server, no API key, no data leaving their device. Transformers.js v4 (2026) can run text generation, image classification, speech recognition, and more using WebGPU acceleration.

**Why it matters:** This is the strongest "I understand AI at a systems level" signal possible. While everyone else calls an API, you're running inference locally. A badge saying "0 API calls, 100% local, powered by WebGPU" is a conversation-starter. It's also genuinely novel — as of 2026, almost no personal portfolios ship this.

**Widget ideas:**
- Text classifier (sentiment, topic, or toxicity on user input)
- Tiny text generator (SmolLM-360M, runs in seconds on WebGPU)
- Image classifier (drop an image, get labels)
- Speech-to-text (Whisper-tiny, live microphone transcription)

**How it works here:** New lab widget component, dynamically imported (client-only). Download model on first interaction (show progress bar). Use Web Workers to avoid blocking the main thread.

**Effort:** 3-5 days for a polished implementation.

---

### "Ask My Portfolio" Chatbot (Lab Widget)

**What it is:** A chat interface where visitors can ask questions about you — your experience, projects, skills, availability — and get conversational answers. It knows everything in your portfolio because your `resume.tsx` data (~26KB) is injected as the system prompt.

**Why it matters:** It's both a useful tool (visitors get instant answers without scrolling) and a demonstration of AI integration skills. The "system-prompt-only" approach (no vector database, no embeddings) is surprisingly effective for portfolios because all your data fits in context.

**How it works here:** Vercel AI SDK's `streamText` + any model (gpt-4o-mini for cost, Claude for quality). System prompt contains your entire resume data. Rate limit with Upstash to prevent abuse. Cost: ~$0.05 across heavy testing sessions; budget $5-10/month with rate limiting.

**Effort:** 3-5 days including rate limiting and UI polish.

---

### Multiple Theme Variants

**What it is:** Beyond simple light/dark toggle — offer 4-6 curated color palettes (gruvbox, nord, catppuccin, tokyo-night, rose-pine, synthwave-84) that visitors can choose. Surface the picker in the command palette.

**Why it matters:** It signals "this person lives in dotfiles and cares about aesthetics." Fellow developers will recognize the named themes from their editors and terminals. It's also a delightful discovery moment — especially if some themes are hidden behind easter eggs (Konami code unlocks synthwave mode).

**How it works here:** Tailwind v4's CSS-vars approach makes this natural — define color tokens as CSS custom properties per theme, toggle by class on `<html>`. Persist choice in localStorage. Add themes as cmd-k actions.

**Effort:** 1-2 days (design the palettes + wire the switching).

---

### Konami Code Easter Egg

**What it is:** The famous cheat code (up up down down left right left right B A) as a keyboard listener that triggers a hidden feature — unlocking a secret theme, showing a confetti animation, revealing a hidden page, or playing a sound effect.

**Why it matters:** It's shareable. People who discover it tell others. It takes 30 minutes to implement but can drive word-of-mouth. Some developers write blog posts about their own easter eggs, turning the feature into content. The `konami-js` library (6KB) handles the detection; the payload can be anything.

**Ideas for payloads:** Unlock a CRT/retro scanline theme. Reveal a hidden `/arcade` page. Trigger a Matrix-style character rain. Show your ASCII-art avatar. Play a chiptune victory jingle (with permission).

**Effort:** 30 minutes for the basic listener + payload.

---

### Print-Friendly Resume / PDF Download

**What it is:** A `/resume` page designed to look good both on screen and when printed (Cmd+P). A "Download PDF" button triggers `window.print()` which produces a clean one-page resume. Alternatively, pre-generate the PDF at build time with Playwright.

**Why it matters:** Recruiters want PDFs. They paste them into ATS systems, share them in Slack, attach them to candidate profiles. If your portfolio doesn't have an obvious PDF download, they'll skip you or ask you to email one. Making it one click removes friction.

**How it works here:** A dedicated page at `/resume` with `@media print` CSS that hides navigation/footer, sets single-column layout, uses black-on-white, and fits to one page. Content pulled from `resume.tsx`. "Download PDF" button calls `window.print()`.

**Effort:** ~4 hours.

---

### /colophon Page

**What it is:** A page explaining how your site is built — the stack, the design decisions, the hosting, the fonts, the tools, and why you chose each. Named after the publisher's note at the end of printed books.

**Why it matters:** It's content that demonstrates technical depth without being a project showcase. "I chose Tailwind v4's CSS-first config over a config file because..." or "I use content-collections instead of MDX-bundler because..." tells hiring managers how you think about tradeoffs. Kenneth Reitz's colophon names his entire 18-year migration history.

**Effort:** 1-2 hours to write.

---

### Webmentions

**What it is:** An IndieWeb standard that lets websites notify each other when they link to each other — like @mentions but across the entire web. When someone tweets about your blog post, or replies on Mastodon, or links from their blog, webmention.io collects those mentions and you display them below your posts.

**Why it matters:** It positions you as an IndieWeb citizen who "owns their corner of the web." Mastodon profile verification comes free (just add `rel="me"` to social links). Cross-site conversations appear organically under your posts. It's the open-web alternative to walled-garden comment systems.

**How it works here:** Sign up at webmention.io, add two `<link>` tags to `<head>`, fetch mentions per-post at build time or via SWR client-side, render below content. Send outgoing mentions through Bridgy (syndicates Twitter/Mastodon/Bluesky replies as webmentions).

**Effort:** ~1 day.

---

### Explorable Explanations (Blog Enhancement)

**What it is:** Blog posts with interactive parameter scrubbers where readers can change assumptions and watch conclusions shift in real-time. Invented by Bret Victor ("Explorable Explanations," 2011). Instead of saying "if the interest rate is 5%...", you let the reader *drag* the rate and see the graph update live.

**Why it matters:** It's the highest "demonstrates thinking" signal in a portfolio blog. Distill.pub (Google's ML research journal) and Nicky Case's work prove the format is compelling. Very few developer portfolios use it — which makes it a strong differentiator.

**How it works here:** Custom React components in MDX posts. A `<Scrubber>` component for draggable values, state shared between scrubbers and visualizations via React context. Tangle.js is the original library; a custom implementation in React is ~200 lines.

**Effort:** 3-5 days for the infrastructure + one demo post.

---

## Content Pages Summary

| Page | What it is | Effort |
|------|-----------|--------|
| /now | What you're currently working on / excited about | 30 min |
| /uses | Your hardware, software, tools, and why | 1-2 hrs |
| /colophon | How and why the site is built the way it is | 1-2 hrs |
| /changelog | Site update history (from git or manual) | 1 hr |
| /resume | Print-friendly resume with PDF download | 4 hrs |
| /reading | Books you're reading / have read | 1 hr |
| /guestbook | Visitor signatures (via Giscus or simple form) | 2-3 hrs |

---

## Priority Recommendation

**Do these first (hours each):**
- llms.txt
- /now page
- /uses page
- RSS feed
- JSON-LD structured data
- Konami code easter egg

**Do these next (1-3 days each):**
- Command palette (cmdk)
- Copy as Markdown buttons
- Pagefind search (wire into cmd-k)
- View Transitions API
- Paper Shaders hero background
- Floating ToC for blog
- Giscus comments
- View counter
- Print-friendly /resume

**Signature pieces (3-7 days each, pick 1-2):**
- In-browser ML demo (transformers.js)
- "Ask my portfolio" chatbot
- Multiple theme variants
- Explorable explanation blog post
- Tilt/parallax lab cards

---

## Named Portfolios Worth Studying

| Developer | URL | What to notice |
|-----------|-----|----------------|
| Lee Robinson | leerob.com | Postgres views, RSS, /docs spec for agent-ready sites |
| Paco Coursey | paco.me | Wrote cmdk, obsessive polish, JS-disabled-by-default |
| Maggie Appleton | maggieappleton.com | Digital garden, webmentions, hover-card backlinks |
| Brian Lovin | brianlovin.com | macOS-style multi-column, over-engineered playground |
| Maxime Heckel | blog.maximeheckel.com | Scrollspy ToC, interactive shader posts |
| Jared Ratner | ratner.me | CRT aesthetic, hidden command buffer |
| Martin Laxenaire | martin-laxenaire.fr | WebGPU game as portfolio gate |
| mitchivin | mitchivin.com | Full Windows XP recreation (HN front page) |
| Cory Dransfeldt | coryd.dev | Multi-source check-in (Last.fm + Trakt + NBA) |
| Jeremias Menichelli | jeremias.codes | Cheat-code-unlocked themes |

---

## Key Insight

> The most memorable portfolios in 2025-2026 share one trait: **the form is the proof.** They don't list skills — they demonstrate them through the site itself. The site is the portfolio piece.

---

*Raw research data: `~/Documents/research/portfolio-site-additions_20260505_0459/` (report.md, evidence-map.md, critique.md)*
