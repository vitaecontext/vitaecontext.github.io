# VitaeContext technical SEO audit

Audit date: 2026-07-16

## Outcome

The production site is technically crawlable and internally consistent. The configured Astro build passes, the essential content is statically rendered, canonical and social URLs use the production origin, the sitemap matches the public route model, and generated JSON-LD parses. The audit found no broken internal HTML links.

The approved repository work is implemented. The 404 emits `noindex, follow` and omits canonical/`og:url`; stable entity IDs connect page schema; `/profile-optimization/` has a distinct task-chooser role and inbound HTML link; and `npm run seo:audit` validates generated output locally and in deployment CI. The former Pages hostname currently returns GitHub's platform-level 404; a migration page is an optional owner action, not a repository defect.

## Stack and deployment

| Area | Verified state | Assessment |
| --- | --- | --- |
| Framework | Astro 7 with `@astrojs/react` | Suitable for static semantic output. |
| Output | `static` to `dist/` | Crawlable without an application server. |
| Site origin | `https://vitaecontext.github.io` in Astro and shared data | Consistent. |
| Deployment | GitHub Pages workflow on pushes to `main`; Node 22; `npm ci`; `npm run build` | Deterministic repository deployment path. |
| Interactive JavaScript | Header/theme/copy controls plus React/Three only for VitaeGraph 3D sample | Essential meaning remains in HTML; graph has static explanatory fallback. |
| Build output | 32 page endpoints and 102 files in the audited build | Matches source route model. |

## Crawl and index controls

### robots.txt

Current file:

```text
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://vitaecontext.github.io/sitemap.xml
```

Assessment:

- The generic allow rule is sufficient for standards-compliant crawlers.
- Explicit OAI-SearchBot access is consistent with the project’s public-discovery goal.
- There is no crawler-specific content.
- No training-crawler policy is expressed. Search discovery and model training are separate owner-policy decisions; do not infer one from the other.
- Do not add long crawler lists unless the owner has a policy reason and can maintain them.

[Google’s AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) states that normal Googlebot controls apply to Search AI features. [OpenAI’s publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) identifies OAI-SearchBot as the relevant discovery crawler. Neither source makes `llms.txt` a prerequisite.

### HTML robots directives

- Intended public HTML routes emit `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`.
- `/404.html` now emits `noindex, follow`.
- The 404 remains crawlable, which is necessary for search systems to observe `noindex`.
- The 404 still emits a canonical to `/404/` through the shared layout. Because it is noindexed and absent from the sitemap, this is low risk. A later layout refinement should allow error pages to omit canonical and social URL metadata entirely.

### Non-HTML endpoints

- `/examples/sample-career-context.md` is a public fictional support artifact, not in the sitemap. It is linked from the annotated HTML example and clearly marked fictional in the content.
- `/robots.txt`, `/llms.txt`, the web manifest, images, CSS, JS, and JSON graph sample are public assets.
- No `llms-full.txt` exists on this website. This is not a defect. Google explicitly says no special AI text file is required for Search AI features.

## Sitemap

The generated XML sitemap contains 31 canonical HTML routes:

- 15 shared public routes;
- 8 skill routes;
- 8 playbook routes.

Verified properties:

- origin and trailing-slash form match page canonicals;
- 404 and raw Markdown example are excluded;
- playbooks use their maintained `last_updated` values;
- other routes omit `lastmod` rather than publishing a synthetic build date;
- the sitemap is referenced from `robots.txt`.

Finding: `/profile-optimization/` is included but has no inbound HTML link. A sitemap does not replace internal linking. Resolve the route’s role before the broad implementation phase.

## Canonical, Open Graph, and Twitter metadata

Generated-output checks passed for every HTML route:

- exactly one `<title>`;
- a nonempty meta description;
- one canonical link;
- canonical and `og:url` agree;
- title and `og:title` agree;
- description and `og:description` agree;
- Twitter metadata mirrors the page identity;
- all referenced social images exist and are declared as 1200 × 630 PNGs.

All canonical public routes use `https://vitaecontext.github.io`. No stale current-site `agentkit-seo` domain or repository URLs were found in source or generated HTML.

## Titles, descriptions, and headings

- All 31 public HTML routes have unique titles and descriptions.
- All HTML routes, including 404, have exactly one H1.
- Important headings and copy are statically rendered.
- The root skill title is awkward: “VitaeContext Orchestration and Routing Skill Agent Skill.” Improve it later in shared skill metadata, but this is not a technical defect.
- H1s on several hub pages are editorial rather than keyword-literal. Their titles and surrounding copy still establish purpose. Rewrites should be based on comprehension, not forced keyword repetition.

## Structured data

### Current types

- Homepage: `WebSite`, `Organization`, `SoftwareApplication`, `BreadcrumbList`.
- Collection hubs: `CollectionPage` through the page helper, plus `BreadcrumbList`.
- Documentation, guides, and VitaeGraph: `TechArticle` plus `BreadcrumbList`.
- Skill details: `SoftwareSourceCode` plus `BreadcrumbList`.
- FAQ: `WebPage`, `FAQPage`, `BreadcrumbList`.
- Contact: `ContactPage`, `BreadcrumbList`.
- Other project routes: `WebPage`, `BreadcrumbList`.

All emitted JSON parses. URLs use the canonical origin. Visible FAQ entries and FAQ JSON-LD use the same in-source array, preventing drift.

### Findings

1. Stable entity IDs are missing. Embedded organizations and software entities repeat by value rather than referencing `#organization`, `#website`, and `#software` identifiers.
2. `SoftwareApplication` is defensible for the installable package, while skill pages correctly use `SoftwareSourceCode`. No review, rating, job, product, person, or event schema is fabricated.
3. Google does not document a rich-result feature for generic `SoftwareSourceCode`. Treat it as entity description, not a display guarantee.
4. `FAQPage` matches visible content, but Google’s eligibility/display policies may be limited. Keep it only because the page is a genuine FAQ, not for an assumed rich result.
5. `alternateName: "AgentKit SEO"` is truthful Schema.org vocabulary but is not implemented. It should be considered only alongside visible, concise migration context and stable entity IDs. It is not required for the transition and has no guaranteed search effect.
6. Creator names are visible on `/contact/` but current project schema uses an organization author. A future entity pass can use creator relationships only if page content and repository metadata remain aligned; do not add thin `Person` entities just to enlarge the graph.

## Internal linking

Generated HTML contains no unresolved internal page links. The global header/footer makes the main hubs and project routes broadly reachable.

Findings:

- `/profile-optimization/` has zero inbound HTML links.
- Low-level skill/guide pages receive two to four HTML inbound sources, mainly catalog, reciprocal pair, and sometimes homepage.
- The changelog, contact, design, FAQ, docs hub, skill hub, guide hub, providers, context example, and VitaeGraph receive global footer/header links.
- `llms.txt` links `/profile-optimization/`, but machine-oriented navigation is not a substitute for HTML discovery.

Implementation should prefer contextual links among definitions, examples, methods, skills, installation, and architecture rather than adding more global navigation.

## Static rendering and JavaScript

The generated homepage, hubs, guides, skill pages, docs, and static VitaeGraph explanation contain their essential text and links in HTML. JavaScript enhances:

- theme selection;
- mobile menu behavior;
- code and setup-prompt copy controls;
- scroll progress;
- the optional interactive VitaeGraph sample.

The 3D component produces the documented large-chunk advisory. Its JS file is about 1.4 MB in the audited build. Several brand PNGs are between roughly 0.6 MB and 1.5 MB. Later performance work should measure load behavior and responsive image usage. Do not remove the graph or replace its static explanation solely to satisfy a bundle threshold.

## Accessibility and semantic discovery

Verified from source and generated HTML:

- language is declared as English;
- a skip link targets the main content;
- header, main, footer, and labeled navigation landmarks exist;
- pages have one H1;
- header icons and decorative marks are hidden from assistive technology where appropriate;
- interactive controls have button semantics and labels;
- the VitaeGraph sample has static explanatory content and a mobile fallback.

Deferred manual checks:

- keyboard traversal of graph controls and mobile menu;
- color contrast across both themes;
- 320 px horizontal overflow on all representative routes;
- focus visibility;
- reduced-motion behavior;
- full image-alt inventory in rendered content.

These require browser/manual or automated accessibility testing during implementation, especially when visible pages change.

## External identity and duplication

The current site uses only current production URLs. However:

- a direct origin request to `https://agentkit-seo.github.io/` returned GitHub's platform-level `404 Site not found` response on 2026-07-16;
- `https://github.com/agentkit-seo/agentkit-seo` redirects to the current repository;
- the `agentkit-seo` compatibility package identifies VitaeContext as the current package;
- search-engine, answer-engine, or crawler caches may temporarily retain former HTML, which is stale index evidence rather than an active competing website.

GitHub documents that repository redirects and GitHub Pages hostname behavior are separate. Because the former hostname currently returns a legitimate 404, no repository fix is required. An owner may optionally reclaim the former organization namespace and publish only the minimal migration page described below.

## Deterministic generated-output audit

`npm run seo:audit` now inspects built `dist/` output and is run after the production build in deployment CI. It validates:

- expected route set;
- unique/nonempty titles and descriptions;
- exactly one H1 per HTML page;
- canonical and Open Graph URL agreement;
- correct robots directive by route class;
- referenced social images and their dimensions;
- parseable JSON-LD and canonical entity URLs;
- internal link resolution, including fragments where practical;
- sitemap equality with intended canonical indexable routes;
- robots sitemap reference;
- no unexpected former-brand copy outside approved migration/history locations;
- `llms.txt` links that resolve to current canonical resources;
- placeholder/example content clearly labeled;
- no accidental private Career Context or VitaeGraph records.

The audit is deterministic and does not depend on live search engines or third-party validators.

## Prioritized technical implementation plan

| Priority | Work | Acceptance evidence |
| --- | --- | --- |
| Complete | Set 404 to `noindex, follow` | Generated `dist/404.html` directive. |
| Optional owner | Reclaim the former organization namespace and publish a minimal migration page | If feasible, only `agentkit-seo/agentkit-seo.github.io` exists, with a zero-second refresh, current canonical, visible explanation/link, and no recreated docs; otherwise the legitimate 404 remains. |
| Complete | Resolve orphaned `/profile-optimization/` | Distinct task-chooser purpose and crawlable contextual inbound link. |
| Complete | Add deterministic generated-output audit | `npm run seo:audit` passes locally and in CI without network. |
| Complete | Add stable entity `@id` references | Homepage and page JSON-LD reference one website/organization/software entity graph and match visible facts. |
| Complete | Refine error-page metadata | 404 omits canonical and `og:url`. |
| Complete | Normalize current terminology in public content | Current definitions and entrypoints use Career Context; history/compatibility literals are preserved. |
| Complete | Measure and improve assets/layout | Header logo transfer reduced; 320 px and 1440 px browser checks pass; static graph content preserved. |

## Sources

Accessed 2026-07-16:

- [Google AI features and website guidance](https://developers.google.com/search/docs/appearance/ai-features)
- [Google canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Bing robots meta support](https://www.bing.com/webmasters/help/robots-meta-tags-and-attributes-that-bing-supports-5198d240)
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Schema.org](https://schema.org/)
- [GitHub repository rename guidance](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository)
