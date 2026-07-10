# Agent Context: AgentKit SEO Website

This repository contains the public Astro website for AgentKit SEO, deployed at `https://agentkit-seo.github.io`.

Use this file before editing. Keep the site plain, factual, modular, crawlable, and aligned with the product repository at `../agentkit-seo/`.

## Product idea

AgentKit SEO is an open-source package of agent skills for career work. It helps a person keep career facts, stated goals, evidence, constraints, and claims to avoid in reusable Markdown. Focused skills then use that context for CVs, profiles, repositories, portfolios, messages, interviews, applications, and other professional tasks.

VitaeGraph is the optional deeper layer. It stores detailed career material as local Markdown records and relationships, with deterministic rebuildable indexes.

The site must not imply:

- guaranteed rankings, visibility, citations, recruiter attention, ATS scores, or career outcomes;
- that AgentKit SEO independently verifies every user claim;
- that every installed skill works in every AI provider;
- that a local context file is private after a user gives it to an external provider.

Use plain language. Explain what files, skills, providers, and commands do. Avoid generic SaaS claims and excessive marketing language.

## Source of truth

Read the product repository before changing product claims:

- `../agentkit-seo/AGENTS.md`
- `../agentkit-seo/README.md`
- `../agentkit-seo/DESIGN.md`
- `../agentkit-seo/.assets/docs/architecture-map.md`
- relevant files under `../agentkit-seo/.skills/`, `../agentkit-seo/vitaegraph/`, and `../agentkit-seo/hub/`

The product repository is authoritative for runtime behavior, commands, supported providers, skill names, VitaeGraph semantics, and install paths. Do not edit it from this repository. Website content is a human-readable mirror and must not invent behavior.

## Stack and commands

- Framework: Astro 7 with `@astrojs/react`.
- Output: static files for GitHub Pages.
- React/Three: only for the interactive VitaeGraph 3D sample.
- Content: Astro collection under `src/content/playbooks/`.
- Site URL: `https://agentkit-seo.github.io`.
- Build output: `dist/`; never edit it directly.

```bash
npm run dev
npm run build
npm run preview
npm run og:generate
```

Run `npm run build` after meaningful changes. It runs `astro check` and builds all routes. The Three.js bundle may produce a Vite size advisory; this is expected while the 3D graph remains interactive.

Run `npm run og:generate` only when OG copy, colors, layout, or image generation inputs change. Do not hand-edit generated files under `public/og/`.

## Code map

### Routes

- `src/pages/index.astro`: homepage composition only.
- `src/pages/vitaegraph.astro`: VitaeGraph composition only.
- `src/pages/docs/`: documentation hub, workflow, installation, CLI, and context example.
- `src/pages/skills/`: installable skill catalog and dynamic skill detail route.
- `src/pages/playbooks/`: human-readable guide catalog and dynamic guide detail route.
- `src/pages/providers.astro`: provider installation reference.
- `src/pages/design.astro`: project architecture explanation.
- `src/pages/profile-optimization.astro`: retained broad career-workflow route; keep it simple and non-duplicative.
- `src/pages/faq.astro`, `src/pages/changelog.astro`, `src/pages/contact.astro`, `src/pages/404.astro`: project information routes.
- `src/pages/sitemap.xml.ts`: generated sitemap from public routes, skills, and playbook collection entries.

### Components

Feature folders keep agent context narrow:

- `src/components/landing/`: homepage narrative and visuals.
- `src/components/vitaegraph/`: green sub-brand, graph workspace, records, relationships, retrieval, and start sections.
- `src/components/docs/`: documentation-specific sections.
- `src/components/skills/`: installable skill catalog and detail content.
- `src/components/guides/`: human-readable guide catalog and reference shell.
- `src/components/providers/`: provider cards and installation surfaces.
- `src/components/project/`: design/project architecture sections.
- `src/components/shared/`: reusable `PageHero`, `SectionIntro`, and `InfoCard` primitives.
- `src/components/Header.astro`, `Footer.astro`, `JsonLd.astro`, `PlatformIcon.astro`, `SiteEnhancements.astro`, `ContextCode.astro`: site-wide primitives.

Page files should compose components. Put feature markup in its feature folder instead of growing route files or global CSS.

### Data

- `src/data/site-config.ts`: site identity, URLs, authors, package version, disclaimer, and default image.
- `src/data/navigation.ts`: primary navigation, footer groups, public routes, and Claude Code marketplace commands.
- `src/data/skills.ts`: installable skill catalog and skill-specific summaries, methods, outputs, and use cases.
- `src/data/providers.ts`: provider IDs, install commands, paths, invocation examples, and provider notes.
- `src/data/metadata.ts`: canonical URL helpers and JSON-LD builders.
- `src/data/sampleContext.ts`: fictional public context example only.

Do not recreate site facts in individual pages when shared data already exists.

### Styles

- `src/styles/global.css`: tokens, reset, layout primitives, buttons, cards, prose, code blocks, lists, and responsive base rules. Keep it small.
- `src/styles/components/header.css` and `footer.css`: shared shell styles.
- `src/styles/pages/landing.css`: homepage system.
- `src/styles/pages/vitaegraph.css`: green VitaeGraph system and graph layout.
- `src/styles/pages/catalog.css`: Skills, Guides, and guide-detail layouts.
- `src/styles/pages/docs.css`: documentation layouts.
- `src/styles/pages/providers.css`: provider catalog.
- `src/styles/pages/context-example.css`: context example visual treatment.
- `src/styles/pages/project.css`: Design page.
- `src/styles/pages/contact.css` and `faq.css`: remaining project routes.

Do not append historical redesign CSS to `global.css`. If a feature needs new styling, add it to the narrowest feature stylesheet.

## Information architecture

Primary navigation is intentionally small:

- Skills: installable runtime modules.
- Guides: human-readable methods with no install required.
- Docs: workflow, installation, CLI, and project references.
- VitaeGraph: related green product module.
- GitHub: source repository.

Providers remain a documentation route, not a primary navigation item. Preserve existing routes and canonical paths unless an explicit migration is requested.

Skills and Guides are different surfaces:

- A skill packages runtime instructions, references, and maintained knowledge for a supported agent.
- A guide explains the method for a human reader.

Do not expose keyword/search-intent lists as visible page copy.

## VitaeGraph rules

`/vitaegraph/` is a first-class product page powered by AgentKit SEO. Preserve the interactive 3D sample:

- `src/components/vitaegraph/VitaeGraph3D.jsx`
- `src/components/vitaegraph/graphConfig.js`
- `src/components/vitaegraph/graphLabels.js`
- `src/components/vitaegraph/VitaeGraphStaticPreview.astro`
- `public/vitaegraph/demo-graph.json`

The graph is a generic explanatory sample, not a user's real graph or a product screenshot. Keep the `VitaeGraph` / `powered by AgentKit SEO` lockup, green visual distinction, readable record model, explicit `contains` and `related to` relationships, and mobile graph fallback.

Do not add private career records, fake graph metrics, blockchain/cybersecurity visual language, or claims that generated indexes authenticate real-world facts.

## Metadata and structured data

Metadata stays centralized:

- `src/layouts/BaseLayout.astro` renders canonical, title, description, OG, Twitter, favicon, theme, and JSON-LD output.
- `src/data/metadata.ts` creates canonical URLs and schema objects.
- `src/components/JsonLd.astro` renders schema scripts.

Every important route needs aligned visible H1, title, description, canonical URL, social image, and JSON-LD. Use conservative schema types: `WebSite`, `Organization`, `SoftwareApplication`, `CollectionPage`, `ContactPage`, `TechArticle`, and `BreadcrumbList` where appropriate.

Do not add review, testimonial, job, event, product, or person schema without genuine matching content.

## Content rules

- Use short, direct English.
- Define technical terms when first introduced.
- Keep claims source-aware and distinguish facts, goals, inference, inaccessible material, and needs-evidence claims.
- Preserve product command names exactly.
- Do not add fake customers, testimonials, metrics, endorsements, affiliations, or outcomes.
- Keep fictional context examples clearly fictional.
- Keep user context and VitaeGraph records out of `public/`, `src/content/`, and commits.

## Validation checklist

Before finishing:

1. Run `npm run build`.
2. Run `git diff --check`.
3. Check changed desktop and mobile routes, especially homepage, Docs, Skills, Guides, Providers, and VitaeGraph.
4. Confirm no horizontal overflow and readable H1 sizing.
5. Confirm internal links resolve in `dist/` when routes or navigation change.
6. Confirm product repository remains untouched.
7. Do not commit `dist/` or generated install output.

Deployment runs through `.github/workflows/deploy-pages.yml` on pushes to `main`.
