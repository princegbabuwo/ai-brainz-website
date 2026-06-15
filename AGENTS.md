# AGENTS.md - Website Governance & AI Instructions

> **General Agent Instruction Rules:**
> - Keep content extremely concise (fewer words/lines).
> - Group rules into explicit categories (e.g. ## Tech Stack, ## Core Commands).
> - Focus on precise commands and architectural constraints; avoid generic fluff.
> - Never repeat instructions. Maintain project context.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 1. Tech Stack & Repository Setup
- **Sub-repository:** `Website/FrontEnd/`
- **Remote Repo:** `git@github.com:princegbabuwo/ai-brainz-website.git`
- **Dependencies:** Node/npm. Do not commit `node_modules` or `.env`.

## 2. Core Commands
- **Git Context:** Always run Git commands inside `Website/FrontEnd/` when working on frontend.
- **Auto-Push:** Push commits immediately using `git push`.

## 3. SEO & LLM Constraints
- **SEO Optimization:** Semantic HTML, responsive grids, fast assets, and proper Page Metadata hooks.
- **LLM Crawlers:** Optimize via `robots.txt`, `llms.txt`, and structured formatting.
- **Sitemaps:** Keep `public/sitemap.xml` updated when pages/posts are added or changed.
- **Env Security:** Use `.env.local` for environment variables; never hardcode credentials.
