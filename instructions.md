# FrontEnd Application Instructions & Guidelines

All developers and agents working on the website frontend must adhere to these standards.

## 1. Environment & Setup
*   Ensure node/npm is used for managing dependencies.
*   Do not commit `node_modules` or local environment variables (`.env`).
*   **Environment Variables**: Always use environment files (`.env.local`) for environment variables. Never hardcode credentials, webhook links, or integration links.

## 2. Git & Version Control
*   This directory is a separate Git repository tracking the website frontend.
*   The remote repository is configured to `git@github.com:princegbabuwo/ai-brainz-website.git`.
*   Always run Git commands inside the `Website/FrontEnd/` directory to manage and commit changes related to the website frontend.
*   Auto-Push Commits: Ensure commits are pushed immediately to the remote branch (`git push`).

## 3. SEO & LLM Optimization Rules
*   **SEO Focus**: Prioritize the website development to be highly SEO focused. This includes using semantic HTML, responsive grids, fast loading assets, and proper Page Metadata hooks.
*   **LLM Focus**: Optimize the site for AI search engines and crawler agents (like ChatGPT, Claude, Perplexity) using standard files: `robots.txt`, `llms.txt`, and structured formatting.
*   **Sitemap Maintenance**: Always ensure `public/sitemap.xml` is updated whenever new pages or blog posts are added or updated to synchronize crawling paths.

