---
title: "Web portfolio SEO and indexing"
platform: "portfolio"
objective: "Master index and routing logic for making a personal website crawlable, indexable, and trustworthy in search and AI discovery systems."
status: "draft"
last_updated: "2026-05-11"
tags: ["portfolio", "portfolio-seo", "personal-website-seo", "structured-data", "answer-engine-optimization", "AEO", "llms-txt", "AI-search-visibility", "sitemap", "robots-txt", "crawlability", "seo", "indexing", "aeo"]
agent_priority: "high"
id: "web-portfolio"
---

> This directory helps make a personal portfolio discoverable, crawlable, and persuasive instead of just visually polished.

---

## 1. Overview

A portfolio can look finished and still be invisible. If project pages cannot be crawled, metadata is generic, or case studies do not explain the work, search engines and AI tools have little to surface.

A personal website is the only professional surface fully controlled by its owner. That control is useful only if the site can be discovered, rendered, and trusted by Google, Bing, and modern AI retrieval systems. This module defines the technical and editorial rules that make a portfolio indexable, understandable, and worth surfacing for both branded and non-branded queries.

```text
Weak project page:
"Project One - React app"

Stronger project page:
"AgentKit SEO - installable AI skill package for career profile optimization"
```

## 2. Use this module when

- A portfolio is live but not appearing in search results.
- Pages exist but metadata, structured data, or canonical URLs are weak or missing.
- A React, SPA, or static site needs crawlability and rendering checks.
- Project pages need clearer case-study structure for humans, search engines, and AI tools.

## 3. Fast path

1. If the site is not indexed, start with [Indexability and submission](./indexability-and-submission.md).
2. If the site has too few real pages, use [Site architecture](./site-architecture.md).
3. If search snippets or link previews are weak, use [Metadata and snippets](./metadata-and-snippets.md).
4. If the site is JavaScript-heavy, use [JavaScript SEO](./javascript-seo.md).
5. If project pages feel thin, use [Content and case studies](./content-and-case-studies.md).

## 4. Module index

The optimization logic is divided into the following documents, ordered from crawlability fundamentals to AI-readable enhancements:

- **[Indexability and submission](./indexability-and-submission.md):** The hard requirements for getting a portfolio crawled and indexed, including `robots.txt`, `sitemap.xml`, Search Console, Bing Webmaster Tools, and IndexNow.
- **[Site architecture](./site-architecture.md):** Recommended page hierarchy, URL design, internal linking, breadcrumbs, and why a portfolio needs dedicated project URLs.
- **[Metadata and snippets](./metadata-and-snippets.md):** Rules for page titles, meta descriptions, canonical URLs, site identity signals, and search-result presentation.
- **[Structured data](./structured-data.md):** Practical schema strategy for personal sites, including `WebSite`, `ProfilePage`, `Person`, `BreadcrumbList`, and article markup.
- **[JavaScript SEO](./javascript-seo.md):** Rendering constraints for React, SPA, and hybrid stacks, including crawlable links, lazy loading, and soft-404 avoidance.
- **[Performance and mobile](./performance-and-mobile.md):** Mobile-first indexing, Core Web Vitals, image handling, HTTPS, and practical performance hygiene.
- **[Content and case studies](./content-and-case-studies.md):** How to write portfolio pages that satisfy people-first quality expectations and demonstrate real expertise.
- **[LLMs and AEO](./llms-and-aeo.md):** Optional AI-discovery enhancements such as `llms.txt`, crawler policy, and LLM-readable page design.
- **[Launch and monitoring](./launch-and-monitoring.md):** Deployment checklist, indexing workflow, and ongoing monitoring routine.
- **[Sources](./sources.md):** Official documentation and standards that validate the rules in this module.

## 5. Usage for agents

When an AI agent is tasked with optimizing a user's personal website:

1. If the site is missing from search or has indexing issues, start with `indexability-and-submission.md` and `launch-and-monitoring.md`.
2. If the site is built with a modern frontend stack, load `javascript-seo.md` and `performance-and-mobile.md`.
3. If the task involves rewriting page templates or content, load `metadata-and-snippets.md`, `structured-data.md`, and `content-and-case-studies.md`.
4. If the user wants to optimize for AI-assisted job search tools (e.g., Perplexity, ChatGPT queries like "find me a frontend engineer with React experience"), load both `llms-and-aeo.md` and `structured-data.md`.
5. If the user wants AI-facing discoverability in addition to traditional SEO, load `llms-and-aeo.md`.
6. Always keep metadata, structured data, and visible page content aligned. Never invent facts to satisfy markup or keyword targets.
7. When the site has repeatable page templates, implement SEO as reusable data and components instead of hand-editing tags page by page.

---

*Next step: Start with [Indexability and submission](./indexability-and-submission.md).*



---

## Section: content and case studies

<!--
metadata:
  title: "Portfolio content and case studies"
  platform: "portfolio"
  objective: "Define the content patterns that make a personal website useful, trustworthy, and capable of ranking beyond branded searches."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["portfolio", "content", "case-studies", "trust"]
  agent_priority: "high"
-->



> This file defines how to write portfolio pages that communicate real expertise, satisfy people-first quality expectations, and create strong entry points for search and AI systems.

---

## 1. Overview

Search visibility for a personal site is not only a technical problem. A portfolio also needs enough original, trustworthy content to justify ranking. This file focuses on the content layer of portfolio SEO: positioning, About-page clarity, project-detail depth, and case-study writing that demonstrates first-hand experience rather than generic self-promotion.

## 2. Best practices

**Recommendation:** Use Google's E-E-A-T framework as a quality checklist. Google uses Experience, Expertise, Authoritativeness, and Trustworthiness as part of its quality guidance, especially for evaluating whether content is helpful and reliable. For a portfolio, *Experience* (first-hand knowledge) and *Expertise* (verifiable skills) are the primary differentiators. Case studies must demonstrate that the author actually did the work, not just summarized a topic.

**Rule:** Give the site a clear professional focus. The homepage and About page should make the target domain obvious. A portfolio that tries to target every possible role creates vague page copy and makes the site harder to understand.

**Rule:** Make authorship and credibility explicit. People and search systems should be able to tell who created the content, what domain experience exists, and where supporting proof lives. Link to GitHub, LinkedIn, publications, demos, talks, or shipped products when relevant.

**Recommendation:** Keep the About page factual and specific. State the current role, operating domain, core strengths, and the type of work represented on the site. Avoid generic mission statements that could belong to any developer.

**Rule:** Give every serious project a detail page. A project card is not enough. The detail page should explain the problem, role, scope, stack, decisions, constraints, and outcome in enough depth that a recruiter or search engine can understand why the work matters.

**Recommendation:** Use internal linking to build topical authority. Case studies and project pages should not exist in isolation. Link between related projects, shared technologies, or relevant blog posts within the portfolio to improve crawl depth and signal related expertise to search engines.

**Recommendation:** Publish case studies or writing only when there is first-hand value. Original process notes, system design tradeoffs, migration lessons, and postmortems are stronger than keyword-targeted filler posts.

**Rule:** Update or retire stale pages. If a project is abandoned, rewritten, or no longer representative, revise the page or remove it from the index. Thin, outdated pages weaken the usefulness and credibility of the site.

## 3. Recommended case study template

Use the following outline for project-detail pages:

1. One-paragraph summary of what the project is and why it exists.
2. The specific problem or user need.
3. The exact role and ownership scope.
4. The stack and architectural constraints.
5. The key decisions and tradeoffs.
6. The outcome, metrics, or what changed after delivery.
7. Links to code, live demo, article, or external proof.

## 4. Examples

Good example:

```text
<!-- CORRECT: clear role, scope, and outcome -->
AgentKit SEO is an open-source documentation system for personal branding and
ATS optimization. I designed the repository structure, writing rules, and
module routing so that both humans and coding agents can use the same source of
truth. The result is a markdown-first knowledge base that supports targeted CV,
LinkedIn, GitHub, and portfolio optimization workflows.
```

Bad example:

```text
<!-- WRONG: generic, hype-heavy, and not tied to real work -->
This project changed everything for me. It is a revolutionary platform that
uses cutting-edge AI to transform the future of professional branding.
```

## 5. Anti-Patterns

### The screenshot cemetery

**What it looks like:** A grid of polished thumbnails with titles such as "Project One" and "Project Two", but no explanation of the problem, role, or outcome behind the visuals. **Why it fails:** Search engines get almost no usable context. Human readers also cannot tell whether the work reflects original engineering, design polish, or simple cloning. **What to do instead:** Treat screenshots as supporting evidence, not as the content itself. Pair visuals with structured, first-hand explanation.

---

*Related reading: [Structured data](./structured-data.md) and [Web portfolio optimization sources](./sources.md).*

---

## Section: indexability and submission

<!--
metadata:
  title: "Portfolio indexability and submission"
  platform: "portfolio"
  objective: "Define the technical requirements and submission workflow needed to get a personal website discovered and indexed."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["portfolio", "indexing", "sitemap", "robots"]
  agent_priority: "high"
-->



> This file defines the minimum technical requirements for making a personal website indexable, plus the correct workflow for submitting and monitoring important URLs.

---

## 1. Overview

Search engines do not index a portfolio because it looks polished. They index it when they can discover the URLs, fetch them successfully, render the important content, and decide the pages are worth storing. This file focuses on that first layer of SEO: crawlability, indexability, and the operational steps needed to move a new personal website into Google and Bing.

## 2. Best practices

**Rule:** Serve important public pages with HTTP `200` and indexable text. Google's minimum technical requirements still begin with three checks: Googlebot must not be blocked, the page must work, and the page must contain indexable content. A portfolio page that loads behind a login wall, returns an error state, or renders no meaningful text is not index-ready.

**Rule:** Keep important pages and required assets crawlable. Do not block the homepage, About page, Projects hub, project-detail pages, or the CSS and JavaScript files needed to render them. If rendering assets are blocked, search engines may see an incomplete page.

**Rule:** Use `noindex` or `X-Robots-Tag` to suppress search results, not `robots.txt`. `robots.txt` is a crawl-control file, not a reliable deindexing mechanism. If a page must stay out of search, keep it crawlable long enough for bots to read the `noindex` directive, or protect it behind authentication.

**Rule:** Publish `/robots.txt` at the site root and include the sitemap location. Keep the file short and explicit. Use it to block truly non-public or low-value paths such as `/admin/`, preview routes, or staging folders. Add a `Sitemap:` line that points to the canonical sitemap URL.

**Rule:** Publish `/sitemap.xml` and include only canonical, index-worthy URLs. The sitemap should list the pages that deserve indexing, not every reachable route. Exclude parameter variants, thin utility pages, temporary previews, and non-canonical duplicates. Keep the `lastmod` field accurate enough to reflect meaningful content changes.

**Recommendation:** Verify the site as a Search Console Domain property. Domain verification covers protocol and subdomain variants in one property. Use DNS verification first, then use URL Inspection to debug individual pages.

**Recommendation:** Add Bing Webmaster Tools and enable IndexNow when the stack supports it. Bing still relies on normal crawl discovery, but its submission tooling is stronger than Google's for change notification. IndexNow is useful for fast updates to project pages, blog posts, and deleted URLs.

**Rule:** Do not rely on Google's deprecated sitemap ping endpoint. Google completed the sitemap ping deprecation on June 26, 2023. The supported path is Search Console submission, sitemap discovery through `robots.txt`, and normal crawling.

## 3. Submission workflow

Use this sequence for a new or rebuilt portfolio:

1. Launch the canonical production site on HTTPS and redirect alternate hosts to the preferred host.
2. Verify the domain in Google Search Console with DNS.
3. Submit `/sitemap.xml` in Search Console.
4. Inspect the homepage, About page, Projects hub, and the most important project-detail pages in the URL Inspection tool.
5. Request indexing only for priority URLs that are already production-ready.
6. Add the site to Bing Webmaster Tools.
7. If supported, notify Bing and other participating engines about changed URLs through IndexNow.

## 4. Examples

Good example:

```text

User-agent: *
Disallow: /admin/
Disallow: /preview/
Sitemap: https://example.com/sitemap.xml
```

Bad example:

```text

User-agent: *
Disallow: /
```

## 5. Anti-Patterns

### The blocked homepage

**What it looks like:** The site launches with `Disallow: /`, a framework preview flag, or a blanket `noindex` left over from staging. **Why it fails:** Search engines either never crawl the portfolio or keep seeing a non-indexable version of the site long after launch. **What to do instead:** Keep a production-specific launch checklist. Before release, inspect the live homepage and confirm that both robots directives and status codes match the intended production policy.

---

*Related reading: [Launch and monitoring](./launch-and-monitoring.md) and [Web portfolio optimization sources](./sources.md).*

---

## Section: javascript seo

<!--
metadata:
  title: "Portfolio JavaScript SEO"
  platform: "portfolio"
  objective: "Define the rendering and navigation constraints needed to make a JavaScript-heavy personal site indexable."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["portfolio", "javascript", "rendering", "spa"]
  agent_priority: "high"
-->



> This file defines the rendering, navigation, and lazy-loading rules that keep a JavaScript-powered portfolio visible to search engines.

---

## 1. Overview

Modern portfolio sites often use React, Astro, Next.js, or other frontend-heavy stacks. These stacks are not inherently bad for SEO, but they introduce failure modes that static HTML sites avoid: empty initial HTML, non-crawlable navigation, delayed content rendering, and soft 404 behavior. This file focuses on how to keep a portfolio search-friendly when JavaScript is part of the architecture.

## 2. Best practices

**Recommendation:** Prefer static generation, server-side rendering, or hybrid rendering for core portfolio pages. The homepage, About page, Projects hub, project-detail pages, and writing pages should all render useful content without waiting for client-side data fetches to populate the main body.

**Rule:** Ensure that primary content exists in rendered HTML. Titles, headings, canonical tags, structured data, internal links, and the main descriptive copy should appear in the rendered HTML that search tools inspect. Do not hide the site's meaning behind hydration.

**Rule:** Use normal URLs and real anchor elements for main navigation. Primary routing should not depend on `onclick` handlers or URL fragments. Search engines crawl URLs, not interaction states.

**Rule:** Return real HTTP status codes. A deleted or missing project page should return `404` or `410`, not a pretty client-side error screen with a `200` response. Soft 404 behavior creates indexing noise and weakens site quality.

**Recommendation:** Keep JavaScript and CSS files crawlable and cache-safe. Search engines need access to rendering assets. Use content fingerprinting for bundles so that updated assets are fetched correctly after deployment.

## 3. Lazy-loading and hydration rules

**Rule:** Lazy-load media, not the main meaning of the page. Images, galleries, and below-the-fold embeds can be deferred. The primary text, title, and proof of relevance should not wait for user interaction.

**Rule:** Load deferred content when it enters the viewport. Do not require scroll depth tricks, button clicks, or hover states to reveal content that should be indexed.

**Recommendation:** Provide `<noscript>` fallbacks for critical identity content. While search engines execute JavaScript, providing a lightweight `<noscript>` block containing the basic profile summary, contact links, and primary skills serves as a failsafe for strict environments, privacy browsers, or simple crawlers that do not support JS.

**Recommendation:** Treat dynamic rendering as a workaround, not a default architecture. If the site needs a special bot-rendered path to be indexable, the underlying architecture is already fragile.

## 4. Examples

Good example:

```html
<!-- CORRECT: crawlable URL with visible anchor text -->
<a href="/projects/agentkit-seo/">AgentKit SEO case study</a>
```

Bad example:

```html
<!-- WRONG: route depends on JavaScript event handling -->
<div onclick="goToProject('agentkit-seo')">AgentKit SEO case study</div>
```

## 5. Anti-Patterns

### The beautiful empty shell

**What it looks like:** The site loads a polished frame, a hero animation, and a JavaScript bundle, but the meaningful text appears only after a client-side request completes. **Why it fails:** Crawlers may see a partial or delayed version of the page. Even if the page eventually renders, discovery and indexing become slower and less reliable. **What to do instead:** Render the core page content on the server or at build time, then hydrate interactivity around it.

---

*Next step: tighten user experience signals in [Performance and mobile](./performance-and-mobile.md).*

---

## Section: launch and monitoring

<!--
metadata:
  title: "Portfolio launch and monitoring"
  platform: "portfolio"
  objective: "Define the release checklist and monitoring workflow needed to keep a personal website indexed and healthy after launch."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["portfolio", "launch", "monitoring", "search-console"]
  agent_priority: "high"
-->



> This file defines the operational checklist for shipping a portfolio site, requesting indexing, and monitoring the pages that matter after release.

---

## 1. Overview

Many portfolio SEO failures are not architectural. They happen after deployment: staging directives remain live, redirects are inconsistent, structured data breaks on one template, or no one checks indexing again for months. This file focuses on operations rather than authoring. It defines how to launch a portfolio cleanly and how to monitor the site after the first crawl.

## 2. Pre-launch checklist

Complete the following checks before asking any search engine to index the site:

1. Confirm that the preferred host and protocol are final and that all alternates redirect to the canonical URL directly (no redirect chains). For example, `http://example.com` should redirect directly to `https://www.example.com`, not to `https://example.com` first.
2. Confirm that the homepage, About page, Projects hub, and key project pages return HTTP `200`.
3. Confirm that `/robots.txt` and `/sitemap.xml` are live on production.
4. Confirm that titles, meta descriptions, canonicals, and structured data are present on the rendered production pages.
5. Confirm that the primary navigation uses crawlable links and that no important pages are orphaned.
6. Confirm that mobile layouts preserve the same core content and metadata as desktop.

## 3. Submission sequence

After production is stable, use this rollout order:

1. Verify the site in Google Search Console.
2. Submit the sitemap in Search Console.
3. Inspect the homepage, About page, Projects hub, and the most important project pages.
4. Request indexing for those priority URLs only after they pass live inspection.
5. Add the site to Bing Webmaster Tools.
6. Submit changed URLs through IndexNow if the stack or hosting platform supports it.

## 4. Monitoring routine

Keep the monitoring loop small and repeatable:

- Review the Page Indexing report when important pages are missing or suddenly excluded.
- Use URL Inspection after every significant template or deployment change.
- Check rich result reports after changing structured data.
- Review the Performance report periodically to see which pages and queries are actually earning impressions.
- Re-audit the canonical set monthly: homepage, About page, Projects hub, top project pages, and active writing pages.

## 5. Anti-Patterns

### The launch and disappear workflow

**What it looks like:** The site ships, the sitemap is submitted once, and no one checks Search Console again until traffic drops months later. **Why it fails:** Indexing regressions, broken canonicals, and accidental `noindex` states can persist quietly. **What to do instead:** Treat Search Console and Bing Webmaster Tools as part of routine maintenance, not as one-time launch tools.

---

*Back to the module index: [Web portfolio SEO and indexing](./README.md).*

---

## Section: llms and aeo

<!--
metadata:
  title: "Portfolio LLMs and AEO"
  platform: "portfolio"
  objective: "Define the optional AI-discovery enhancements that make a personal website easier to retrieve and summarize accurately."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["portfolio", "llms", "aeo", "llms-txt"]
  agent_priority: "medium"
-->



> This file defines the optional AI-facing enhancements that help a personal website be discovered and interpreted by modern search assistants and LLM-based retrieval tools.

---

## 1. Overview

Traditional SEO is still the base layer of discoverability, but personal websites are now also being retrieved by chat search systems and agent workflows. Those systems benefit from clearer crawler policy, stable canonical pages, and optional LLM-oriented guidance such as `llms.txt`. This file covers the add-on layer of portfolio optimization for AI retrieval without confusing it with standard search indexing.

## 2. Best practices

**Recommendation:** Publish `/llms.txt` if AI retrieval is part of the site's goals. `llms.txt` is not a Google or Bing indexing standard. It is a community proposal for inference-time guidance intended to help language models understand what a site contains and where the most useful pages live.

**Rule:** Treat `llms.txt` as a curated guide, not as a shadow sitemap. List the most important pages only: homepage, About page, Projects hub, best project-detail pages, writing hub, and selected articles or case studies. The file should stay short enough to be genuinely useful to a model with limited context.

**Recommendation:** Publish `/llms-full.txt` to provide a complete context dump. While `llms.txt` serves as a lightweight index, the proposed `llms-full.txt` variant contains the full Markdown content of the most important pages on the site. For developer portfolios, a self-contained context file can help models summarize projects with fewer external fetch requests.

**Recommendation:** Keep canonical pages concise and self-contained. LLM retrieval works better when a project page can be summarized accurately from its own content. Do not force agents to reconstruct meaning by stitching together dozens of fragments across the site.

**Recommendation:** Make crawler policy explicit when AI search visibility matters. OpenAI's guidance for ChatGPT Search is clear: inclusion depends in part on allowing `OAI-Searchbot`. Other vendors also expose separate bots for different functions. Keep the site's `robots.txt` policy intentional instead of assuming every crawler behaves like Googlebot.

**Recommendation:** Separate retrieval policy from training policy when the provider supports distinct bots. Some vendors use one bot for search or user-directed retrieval and another for model training or general crawling. Treat these as separate policy decisions.

## 3. Examples

Good example:

```text


> Personal website for backend engineering, AI tooling, and open-source case studies.

## Core pages

- [About](https://example.com/about/): Professional profile, current focus, and links to external identities.
- [Projects](https://example.com/projects/): Hub for major engineering and documentation projects.
- [AgentKit SEO case study](https://example.com/projects/agentkit-seo/): Detailed write-up of repository architecture and authoring system.

## Optional

- [Writing](https://example.com/writing/): Essays and technical notes.
```

## 4. Anti-Patterns

### The duplicate shadow site

**What it looks like:** Separate AI-only markdown pages start to drift away from the canonical HTML pages, with different dates, claims, or project descriptions. **Why it fails:** Humans, search engines, and AI systems end up reading conflicting versions of the same site. **What to do instead:** Keep `llms.txt` lightweight and point back to the canonical public URLs. If markdown mirrors exist, treat them as synchronized derivatives, not alternative truth sources.

---

*Related reading: [Indexability and submission](./indexability-and-submission.md) and [Web portfolio optimization sources](./sources.md).*

---

## Section: metadata and snippets

<!--
metadata:
  title: "Portfolio metadata and snippets"
  platform: "portfolio"
  objective: "Define the metadata rules that shape how a personal website appears in search results and how canonical identity is established."
  status: "draft"
  last_updated: "2026-05-11"
  tags: ["portfolio", "metadata", "titles", "canonical"]
  agent_priority: "high"
-->



> This file defines the rules for writing page titles, meta descriptions, canonical tags, and related identity signals for a personal website.

---

## 1. Overview

Metadata is the interface layer between a page and a search result. Title links, snippets, canonical hints, and site-name signals all help search systems decide what a page is, when to cluster duplicates, and how to present the result to a searcher. This file focuses on the metadata that matters most for a personal portfolio.

## 2. Best practices for title links

**Rule:** Give every indexable page a unique `<title>`. Each page must have a title that clearly names its subject. Reusing the same title pattern across every page weakens relevance and makes search results harder to distinguish.

**Rule:** Keep the title under 60 characters to prevent truncation. Google does not enforce a fixed character limit for title links, but long titles are often truncated in search results. A portfolio title that is too long can hide its primary keywords and look unprofessional.

**Rule:** Put the page topic first and the site name second. For portfolios, the page subject should lead the title. A project page should begin with the project name or the core topic, not with the site name.

**Rule:** Avoid vague labels such as "Home", "Profile", or "Project". These labels do not help users or search engines understand what is unique about the page. The homepage should still name the person or brand and the professional focus.

**Recommendation:** Keep the visible `h1` aligned with the title. Google can build title links from multiple sources, including the page title, headings, and other prominent text. When the title and `h1` point to the same topic, the signal is cleaner.

## 3. Best practices for snippets

**Recommendation:** Write a concise meta description for every important page. Use one or two sentences that summarize the actual content of the page. This is a hint, not a guarantee, but it improves the chance of a useful snippet when on-page text is not enough.

**Rule:** Put the essential summary in the visible page copy. Google primarily builds snippets from page content itself. The first paragraph of a project page or About page should therefore carry the key facts in natural prose.

**Rule:** Do not stuff keywords into descriptions. A list of repeated technologies or role titles looks manipulative and does not improve snippet quality.

## 4. Best practices for Open Graph and social tags

Open Graph (OG) tags do not directly impact Google rankings, but they control how a link appears when shared on LinkedIn, Slack, X, and other preview surfaces. Some crawlers and summarizers may also use them as lightweight page summaries.

**Rule:** Provide `og:title`, `og:description`, `og:image`, and `og:url` on every public page. Without these tags, platforms may scrape the page unpredictably, resulting in broken or generic link previews that reduce click-through.

**Rule:** Set a high-quality `og:image` that represents the specific page. The `og:image` is often the first visual impression a recruiter or peer sees. It should be 1200 x 630 pixels. Do not use a generic site-wide logo for a specific project case study; use a screenshot of that specific project.

**Rule:** Keep social-preview text inside a safe visual area. LinkedIn, Slack, X, and messaging apps may crop or resize preview images. Avoid placing critical words at the extreme edges, keep badges and labels wide enough for their longest expected text, and verify the generated image visually before deployment.

**Recommendation:** Generate page-specific preview images from the same metadata used by the page. A repeatable generator can produce one image per project, article, or playbook using the canonical title, short description, URL, page type, and brand colors. This keeps Open Graph, Twitter Cards, structured data `image`, and the visible page topic aligned.

**Recommendation:** Include X (Twitter) Card tags as a fallback. Set `twitter:card` to `summary_large_image` to ensure the link unfurls into a full-width image preview on X, rather than a small thumbnail.

## 5. Best practices for canonical identity

**Rule:** Pick one canonical host and protocol. Choose the preferred public address of the site, such as `https://example.com/` or `https://www.example.com/`, and redirect all alternatives to it.

**Rule:** Use `rel="canonical"` only to point at the true representative URL. Canonical tags help with duplicate clustering. They should not be used to push unrelated pages into the index or to mask weak pages that should instead be merged, redirected, or removed.

**Recommendation:** Keep site identity signals consistent on the homepage. Use the same professional name in the homepage title, main heading, site branding, and `WebSite` structured data. If an alternate short name exists, provide it as an alternate site name rather than switching names page to page.

## 6. Examples

Good example:

```text
<!-- CORRECT: descriptive title and aligned page summary -->
<title>AgentKit SEO Case Study | Example Developer</title>
<meta name="description" content="Case study of an open-source documentation system for personal branding, ATS optimization, and agent-readable career assets." />
<meta property="og:title" content="AgentKit SEO Case Study | Example Developer" />
<meta property="og:image" content="https://example.com/og/projects/agentkit-seo.png" />
<meta name="twitter:card" content="summary_large_image" />
```

Bad example:

```text
<!-- WRONG: vague, generic, and unhelpful -->
<title>Home</title>
<meta name="description" content="developer engineer software coding portfolio website projects projects projects" />
```

---

*Next step: attach machine-readable meaning in [Structured data](./structured-data.md).*

---

## Section: performance and mobile

<!--
metadata:
  title: "Portfolio performance and mobile readiness"
  platform: "portfolio"
  objective: "Define the mobile, performance, image, and HTTPS rules that support search visibility and a strong page experience."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["portfolio", "performance", "mobile", "cwv"]
  agent_priority: "medium"
-->



> This file defines the page-experience constraints that help a personal website load well, behave well on mobile, and avoid common performance regressions.

---

## 1. Overview

Google indexes the mobile version of a site and strongly recommends mobile-friendly design. Performance is not a substitute for useful content, but slow, unstable pages waste crawl resources and reduce user trust at the exact moment a portfolio needs to make a strong first impression. This file focuses on responsive design, Core Web Vitals, image handling, and basic transport hygiene.

## 2. Best practices

**Rule:** Use responsive design as the default mobile strategy. Serving the same URL and same core content to desktop and mobile is the simplest way to preserve parity. Avoid splitting a personal portfolio across separate mobile URLs unless there is a compelling legacy reason.

**Rule:** Keep mobile and desktop content equivalent. The mobile page should expose the same main text, titles, meta tags, structured data, and critical links as the desktop page. If mobile hides key content, search visibility weakens.

**Rule:** Serve the site over HTTPS and redirect HTTP to HTTPS. Transport security is a baseline trust signal and prevents protocol duplication.

**Recommendation:** Keep Largest Contentful Paint (LCP) under 2.5 seconds, Interaction to Next Paint (INP) under 200 milliseconds, and Cumulative Layout Shift (CLS) under 0.1 on the pages that matter most. The homepage, About page, Projects hub, and project-detail pages should load and respond quickly enough to feel immediate on ordinary devices and connections.

**Rule:** Define explicit width and height dimensions for all images and videos to prevent Cumulative Layout Shift (CLS). Portfolios fail CLS checks most often because images load late and push the surrounding text down. Explicit dimensions allow the browser to reserve the exact space needed before the asset finishes loading.

**Rule:** Use `font-display: swap` for all custom web fonts. Custom fonts must not delay the rendering of the main heading or the first paragraph (Flash of Invisible Text). Using `font-display: swap` ensures the browser immediately paints a fallback font and swaps it once the custom font is ready.

**Recommendation:** Compress and size media intentionally. Portfolio sites often fail because screenshots, animated backgrounds, and hero video dominate the first load. Resize media to its real display size, choose appropriate formats, and defer non-critical assets.

**Recommendation:** Use descriptive image filenames and meaningful alt text. Images can surface the site in visual search features and also reinforce page meaning. Keep images near relevant text and describe them accurately.

**Rule:** Do not let ornamental effects dominate the critical path. Custom fonts, scroll effects, parallax systems, and autoplay media should not delay the main heading, the first paragraph, or the primary project proof.

## 3. Examples

Good example:

```html
<!-- CORRECT: stable image dimensions and meaningful alt text -->
<img
  src="/images/agentkit-seo-homepage.webp"
  alt="Screenshot of the AgentKit SEO documentation homepage"
  width="1280"
  height="720"
  loading="lazy"
/>
```

Bad example:

```html
<!-- WRONG: generic filename, no alt text, no intrinsic dimensions -->
<img src="/images/final-final-1.png" />
```

## 4. Anti-Patterns

### The animation-first portfolio

**What it looks like:** The homepage opens with a full-screen animation, large web fonts, multiple video loops, and a heavy JavaScript timeline before any useful text appears. **Why it fails:** Load performance drops, mobile usability degrades, and the page spends its budget on decoration instead of clarity. **What to do instead:** Render the main heading, value proposition, and navigation first. Add motion only after the page is already fast and stable.

---

*Next step: strengthen content quality in [Content and case studies](./content-and-case-studies.md).*

---

## Section: site architecture

<!--
metadata:
  title: "Portfolio site architecture"
  platform: "portfolio"
  objective: "Define the URL structure, page hierarchy, and internal linking patterns that make a personal website easy to crawl and easy to understand."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["portfolio", "architecture", "urls", "internal-links"]
  agent_priority: "high"
-->



> This file defines the structural rules for organizing a personal website so that search engines can discover its key pages and users can navigate it without ambiguity.

---

## 1. Overview

Search engines infer a large part of a portfolio's meaning from structure. Clear URLs, stable navigation, and dedicated detail pages help crawlers understand what the site is about and which pages deserve prominence. This file focuses on the information architecture of a personal website: what pages should exist, how they should connect, and which patterns weaken discoverability.

## 2. Best practices

**Recommendation:** Give each important intent its own URL. Keep the homepage focused on orientation. Move durable information into dedicated pages such as `/about/`, `/projects/`, `/projects/<slug>/`, `/writing/`, and `/contact/`. A single long homepage can still rank for branded queries, but it is a weak container for project-specific discovery.

**Rule:** Keep important pages within a shallow, obvious hierarchy. The homepage should link directly to the major hubs. Hub pages should link directly to their detail pages. Do not hide critical pages behind multiple overlays, filters, or client-side interactions.

**Rule:** Use readable, stable, lowercase, hyphenated URLs. Portfolio URLs should communicate content at a glance. Prefer `/projects/agentkit-seo/` over `/work?id=17` or `/ProjectPhoenixFinalV2/`. Stable URLs also make future redirects and external linking easier.

**Rule:** Use real internal links. For navigation and content discovery, use `<a href="...">` links that resolve to real URLs. Do not rely on buttons, `onclick` handlers, or fragment-driven routes for primary navigation.

**Recommendation:** Add breadcrumb trails on nested pages. Project detail pages, articles, and case studies benefit from visible breadcrumb navigation. This helps users move through the site and gives search engines a clearer hierarchical model.

**Recommendation:** Avoid orphan pages. Every indexable page should be reachable through normal internal linking from at least one crawlable parent page. If a project page exists only in the sitemap and nowhere else on the site, it sends a weak importance signal.

**Rule:** Serve a hard `404` status code for missing routes. Portfolio sites built on static hosts (like Netlify or GitHub Pages) or SPA frameworks often default to serving a custom "Not Found" page while returning a `200 OK` status. This creates "soft 404s" that confuse search engines and dilute crawl budgets. Ensure the server explicitly returns a `404` or `410` header.

## 3. Recommended URL map

The exact portfolio can vary by profession, but the baseline structure should look like this:

```text
/
/about/
/projects/
/projects/agentkit-seo/
/projects/personal-site-rebuild/
/writing/
/writing/how-i-designed-a-context-file/
/contact/
```

If the portfolio has no writing section, omit it. If the site contains a CV or media kit, keep those under stable, descriptive paths such as `/cv/` or `/media/` rather than attaching opaque file names to the root.

## 4. Examples

Good example:

```html
<!-- CORRECT: crawlable internal navigation -->
<nav>
  <a href="/about/">About</a>
  <a href="/projects/">Projects</a>
  <a href="/writing/">Writing</a>
  <a href="/contact/">Contact</a>
</nav>
```

Bad example:

```html
<!-- WRONG: navigation depends on JavaScript event handlers instead of href -->
<nav>
  <button onclick="router.go('about')">About</button>
  <button onclick="router.go('projects')">Projects</button>
</nav>
```

## 5. Anti-Patterns

### The single-page trap

**What it looks like:** The entire portfolio lives on one long homepage with sections like "About," "Work," and "Contact," but no dedicated URLs for project details. **Why it fails:** The site has very few indexable entry points for non-branded queries. Search engines and AI agents also struggle to deep-link to a specific project or a specific proof point. **What to do instead:** Keep a concise homepage, then publish dedicated detail pages for every serious project, article, or case study worth ranking.

---

*Next step: refine search-result presentation in [Metadata and snippets](./metadata-and-snippets.md).*

---

## Section: sources

<!--
metadata:
  title: "Web portfolio optimization sources"
  platform: "portfolio"
  objective: "Centralized citations and official documentation validating the mechanics of portfolio indexing, metadata, structured data, and AI discovery."
  status: "draft"
  last_updated: "2026-05-11"
  tags: ["portfolio", "sources", "research", "indexing"]
  agent_priority: "low"
-->



> This file contains the official documentation, standards, and product guidance that validate the rules and recommendations in the web-portfolio module.

---

## 1. Overview

The rules in this module are based primarily on Google Search Central, Google Search Console Help, Bing Webmaster and IndexNow documentation, and official crawler guidance from AI-search vendors. Google remains the main reference for technical indexability, while Bing, OpenAI, Anthropic, and Perplexity are included where their official documentation adds operational guidance for discovery and retrieval.

## 2. Sources

- [Google Search technical requirements](https://developers.google.com/search/docs/essentials/technical) - Confirms the minimum conditions for Google index eligibility: crawl access, HTTP `200`, and indexable content.
- [Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) - Confirms that `robots.txt` controls crawling, not reliable deindexing, and points to `noindex` for search suppression.
- [Robots `meta` tag, `data-nosnippet`, and `X-Robots-Tag` specifications](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) - Defines page-level index and snippet controls and explains the interaction between crawl access and indexing directives.
- [Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) - Validates the role of `sitemap.xml`, `lastmod`, and sitemap extensions.
- [Sitemaps ping endpoint is going away](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping) - Confirms that Google's old sitemap ping endpoint was deprecated and should not be used as a modern submission workflow.
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080) - Documents Search Console verification methods, including DNS verification for Domain properties.
- [Inspect and troubleshoot a single page](https://support.google.com/webmasters/answer/12482179) - Defines the live URL inspection workflow and request-indexing workflow for individual pages.
- [Influencing title links in search results](https://developers.google.com/search/docs/appearance/title-link) - Validates best practices for page titles and explains how Google generates title links.
- [Control your snippets in search results](https://developers.google.com/search/docs/appearance/snippet) - Confirms that snippets are usually generated from visible page content and only sometimes from meta descriptions.
- [What is canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization) - Defines canonical selection and duplicate clustering.
- [Understand the JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) - Documents Google's crawl, render, and index pipeline for JavaScript-powered sites.
- [Dynamic rendering as a workaround](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering) - Confirms that dynamic rendering is a workaround and that static rendering, SSR, or hydration are preferred.
- [Fix lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) - Defines safe lazy-loading behavior for content that still needs to be discovered and indexed.
- [Mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) - Confirms that Google indexes with the mobile crawler and explains mobile parity requirements.
- [Link best practices for Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) - Validates the requirement for crawlable `<a href>` links and meaningful anchor text.
- [Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images) - Documents image discovery, supported image formats, filenames, alt text, and image presentation guidance.
- [Provide a site name to Google Search](https://developers.google.com/search/docs/appearance/site-names) - Explains homepage site-name signals and the role of `WebSite` structured data.
- [Introduction to structured data markup in Google Search](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) - Explains how structured data gives Google explicit page-meaning clues and confirms JSON-LD as the recommended format when supported by the site stack.
- [ProfilePage (Schema.org)](https://schema.org/ProfilePage) - The authoritative spec for `ProfilePage` markup.
- [Profile page structured data (Google)](https://developers.google.com/search/docs/appearance/structured-data/profile-page) - Confirms `ProfilePage` support and explicitly includes About-style profile pages as valid use cases.
- [Person (Schema.org)](https://schema.org/Person) - The authoritative spec for `Person` markup used inside the `ProfilePage` `mainEntity` or `Article` `author`.
- [WebSite (Schema.org)](https://schema.org/WebSite) - The authoritative type for the canonical website entity.
- [Organization (Schema.org)](https://schema.org/Organization) - The authoritative type for organization identity, publisher, and same-as profile relationships.
- [WebPage (Schema.org)](https://schema.org/WebPage) - The base page type used for generic pages and `mainEntityOfPage` references.
- [CollectionPage (Schema.org)](https://schema.org/CollectionPage) - The page type for hubs and listing pages that collect related resources.
- [ContactPage (Schema.org)](https://schema.org/ContactPage) - The page type for pages whose main purpose is contacting the site owner or organization.
- [SoftwareSourceCode (Schema.org)](https://schema.org/SoftwareSourceCode) - The authoritative spec for developer project markup covering languages, code repository links, and application architecture.
- [SoftwareApplication (Schema.org)](https://schema.org/SoftwareApplication) - The authoritative type for deployed software products and applications.
- [TechArticle (Schema.org)](https://schema.org/TechArticle) - The article subtype for technical documentation, tutorials, and methodology pages.
- [Breadcrumb structured data (Google)](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) - Validates breadcrumb markup and the recommendation to support site hierarchy with structured data.
- [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article) - Documents article markup and author markup best practices relevant to writing and case-study pages.
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) - Confirms that structured data must match visible content and must not be blocked if rich-result eligibility is desired.
- [The Open Graph protocol](https://ogp.me/) - Defines the core social graph metadata properties used by link preview systems.
- [JSON-LD Structured Data for Blogs: A Real Implementation](https://didof.dev/en/blog/json-ld-structured-data/) - Practical Astro implementation reference for reusable JSON-LD components, article fields, and validation workflow.
- [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals) - Defines the current performance metrics Google recommends monitoring for page experience.
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) - Provides the quality framework for people-first portfolio content and the "Who, How, and Why" self-assessment.
- [IndexNow documentation](https://www.indexnow.org/documentation) - Defines the official protocol for notifying participating search engines about added, updated, or deleted URLs.
- [Bing Webmaster Tools URL and Content Submission API](https://www.bing.com/webmasters/url-submission-api?source=card) - Documents Bing's direct URL and content submission APIs.
- [ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search/) - Confirms that inclusion in ChatGPT Search depends in part on allowing `OAI-Searchbot` and its published IP ranges.
- [The `/llms.txt` file](https://llmstxt.org/) - Official proposal describing `llms.txt` as an inference-time guidance file for LLMs.
- [Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) - Documents Anthropic's crawler separation and robots.txt controls.
- [Perplexity crawlers](https://docs.perplexity.ai/guides/bots) - Official crawler guidance for Perplexity, including robots.txt tags and use distinctions.
- [RFC 9309: Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309) - The formal standard for `robots.txt`.
- [Sitemaps XML format](https://www.sitemaps.org/protocol.html) - The canonical protocol reference for sitemap structure.

---

## Section: structured data

<!--
metadata:
  title: "Portfolio structured data"
  platform: "portfolio"
  objective: "Define the schema strategy that helps search engines and AI systems understand a personal website without introducing misleading markup."
  status: "draft"
  last_updated: "2026-05-11"
  tags: ["portfolio", "schema", "structured-data", "person"]
  agent_priority: "high"
-->



> This file defines the structured data types that are most useful for a personal website and the constraints for deploying them safely.

---

## 1. Overview

Structured data does not replace good content or good architecture, but it gives search systems explicit clues about what a page represents. For a personal portfolio, the highest-value outcome is not a pile of random schema types; it is a small, accurate set of page-specific markup that reinforces the visible content. This file focuses on the schema strategy that fits a personal site without drifting into spammy or irrelevant markup.

## 2. Best practices

**Rule:** Put `WebSite` structured data on the homepage. Use the homepage to define the site's preferred name and canonical root URL. This supports site-name interpretation and creates a stable top-level identity signal.

**Recommendation:** Use `Organization` or `Person` consistently for the site owner. A personal portfolio usually uses `Person`; a project, product, or documentation site can use `Organization`. The same entity should appear consistently in publisher, author, same-as, and homepage identity fields.

**Rule:** Use `ProfilePage` with a `Person` `mainEntity` on the About page or author page. Google explicitly supports `ProfilePage` for pages whose primary focus is a single person or organization. A personal About page is a valid use case when the visible content is genuinely centered on the person behind the site.

**Recommendation:** Use `CollectionPage` for index pages and `ContactPage` for contact pages. Hubs such as `/projects/`, `/writing/`, `/playbooks/`, or `/skills/` are collections, not articles. Contact pages should not be marked as blog posts or project pages.

**Recommendation:** Use `BreadcrumbList` on nested project and writing pages. Breadcrumbs help reinforce hierarchy on pages that sit below a hub such as `/projects/` or `/writing/`.

**Recommendation:** Use `SoftwareSourceCode` or `SoftwareApplication` on developer project pages. Generic `Article` schema is often incorrect for a deployed tool or a GitHub repository write-up. Use `SoftwareSourceCode` for open-source repositories and `SoftwareApplication` for deployed applications or SaaS projects to accurately describe the project's requirements, language, and operating system.

**Recommendation:** Use `Article`, `BlogPosting`, or `TechArticle` only for real editorial pages. Case studies, technical essays, tutorials, playbooks, and blog posts can use article markup when they have visible headings, body copy, dates, and author information. A generic project landing page should not pretend to be an article if it is not written as one.

**Recommendation:** Link authors to a real author or About URL. When article markup includes an author, use `Person` and provide a valid `url` or `sameAs` value that points to a page or profile that identifies the author clearly.

**Recommendation:** Use `rel="me"` for cross-platform identity verification. On outbound links to external profiles (e.g., GitHub, LinkedIn, Mastodon), include the `rel="me"` attribute. This serves as a decentralized identity-verification function, helping AI disambiguation systems and search engines confirm that the portfolio and the social profiles belong to the exact same entity.

**Rule:** Include article freshness fields when the page exposes dates. For editorial pages, pass `datePublished`, `dateModified`, `author`, `publisher`, `headline`, `description`, canonical `url`, `mainEntityOfPage`, and representative `image` from the page metadata or content frontmatter. Do not add dates to JSON-LD if the page does not show or support them.

**Rule:** Keep the structured-data image aligned with the social-preview image. If a page has a page-specific Open Graph image, use the same canonical absolute URL in article or project schema unless there is a stronger content image. This prevents search, social, and AI systems from receiving conflicting visual summaries.

**Recommendation:** Build JSON-LD as a reusable component. In component-based stacks such as Astro, Next.js, Nuxt, or SvelteKit, define structured-data objects in a metadata helper and render them through a small JSON-LD component. This avoids copy-paste mistakes, keeps optional fields out when missing, and lets every page template inherit the same validation-safe pattern.

**Rule:** Keep markup aligned with visible page content. Structured data must describe what users can actually see on the page. Hidden, misleading, or generic markup can invalidate rich-result eligibility and weaken trust signals.

**Rule:** Do not expect blocked or `noindex` pages to yield rich-result benefits. If a page is blocked from Googlebot or marked `noindex`, search systems cannot reliably use the structured data on that page for search appearance.

## 3. Recommended implementation pattern

For a static or hybrid portfolio, use this pattern:

1. Define canonical site data once: site URL, name, description, owner, logo, and same-as profile links.
2. Define one metadata object per route or content entry: title, description, canonical path, image, dates, and tags.
3. Render standard head tags from that object: `<title>`, meta description, canonical, Open Graph, and Twitter Card tags.
4. Render JSON-LD from the same object: homepage identity, page-type schema, article or project schema, and breadcrumbs.
5. Generate page-specific 1200 x 630 social images from the same metadata when the page is important enough to be shared.
6. Validate the built HTML, not only the source component, because search tools inspect the deployed output.

## 4. Validation workflow

Use this validation sequence after every template change:

1. Validate syntax with JSON-LD aware tools.
2. Test eligible pages in Google's Rich Results Test.
3. Inspect the live URL in Search Console to confirm that the rendered HTML includes the markup.
4. Recheck the relevant rich result reports after deployment.
5. Submit the sitemap and request indexing for only the highest-value changed URLs when quota is limited.

## 5. Examples

Good example:

```html
<!-- CORRECT: ProfilePage markup for an About page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Example Developer",
    "url": "https://example.com/about/",
    "sameAs": [
      "https://github.com/example",
      "https://www.linkedin.com/in/example/"
    ]
  }
}
</script>
```

Article-style page example:

```html
<!-- CORRECT: article markup generated from page metadata -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Web Portfolio SEO and Indexing",
  "description": "A practical playbook for metadata, JSON-LD, crawlability, and search-result presentation.",
  "url": "https://example.com/playbooks/web-portfolio/",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/playbooks/web-portfolio/"
  },
  "image": ["https://example.com/og/playbooks/web-portfolio.png"],
  "datePublished": "2026-04-29",
  "dateModified": "2026-05-11",
  "author": {
    "@type": "Organization",
    "name": "AgentKit SEO"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AgentKit SEO"
  },
  "keywords": ["portfolio", "seo", "structured-data"]
}
</script>
```

## 6. Anti-Patterns

### The fake rich-result stack

**What it looks like:** Marking the homepage as a product, review, article, event, and FAQ page because a plugin suggested every available schema type. **Why it fails:** The markup no longer matches the visible focus of the page. At best it is ignored; at worst it becomes a quality problem. **What to do instead:** Mark up the primary purpose of each page only. Home page gets site identity. About page gets profile identity. Writing pages get article identity. Hierarchical pages get breadcrumbs.

### The disconnected SEO layer

**What it looks like:** The visible page says one thing, the meta description says another, the Open Graph image has a generic title, and the JSON-LD uses a copied schema from a different page type. **Why it fails:** Search engines receive conflicting signals and may ignore the markup or rewrite the presentation. **What to do instead:** Treat page metadata as a single source of truth. Generate visible dates, head tags, social images, and JSON-LD from the same route or content data whenever possible.

---

*Related reading: [Content and case studies](./content-and-case-studies.md) and [Web portfolio optimization sources](./sources.md).*
