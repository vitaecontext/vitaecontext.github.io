# VitaeContext SEO, AEO, and GEO discovery audit

Audit date: 2026-07-16

Repository baseline: commit `6743305` (`Add copyable agent setup prompt`)

Scope: discovery, technical baseline, intent strategy, entity definition, approved repository implementation, and generated-output validation.

## Executive summary

VitaeContext has a sound static-search foundation. The Astro production build emits meaningful HTML, every intended HTML page has one H1 and a distinct title and description, canonical and Open Graph URLs agree, JSON-LD parses, the sitemap lists the intended canonical pages, and the public content remains available without client-side rendering. The current name, URLs, package identity, and version are consistent with the authoritative product repository.

The former Pages hostname is not an active competing website. A direct request on 2026-07-16 returned GitHub's platform-level `404 Site not found` response, while the old GitHub repository URL redirected correctly to `https://github.com/vitaecontext/vitaecontext`. Search engines, answer engines, and crawler caches may temporarily retain or surface former HTML; that is stale index evidence, not proof that the site remains live. A migration page is an optional owner action if the former organization namespace can be reclaimed, not a repository implementation defect.

The current information architecture also has two manageable intent conflicts:

- `/profile-optimization/` is an indexable, sitemap-listed task router with no inbound HTML links. Its broad purpose overlaps the homepage, `/skills/`, `/playbooks/`, and `/docs/usage/`.
- Skill pages and matching guide pages intentionally cover the same topic. They are not duplicates when the skill page owns installable runtime intent and the guide owns human educational intent. Future copy must preserve that distinction.

The approved implementation is now complete for repository-controlled work. Existing canonical pages were strengthened instead of multiplying keyword variants; the 404 policy was corrected; stable entity IDs were added; the orphan task chooser received a distinct linked role; canonical answers and limitations were added; and deterministic production-output validation now runs in CI. No unsupported schema or thin landing-page set was added. Full implementation evidence is in `docs/seo/implementation-report.md`.

## Evidence and method

The audit inspected:

- repository instructions, package metadata, lockfile, Astro configuration, route files, layouts, shared metadata builders, data modules, components, playbook collection, public assets, robots rules, `llms.txt`, sitemap generation, deployment workflow, generated production HTML, and generated assets;
- authoritative product files in `../vitaecontext/`, including its instructions, README, design and architecture documents, current-status notes, package metadata, root and focused skill entrypoints, provider/install architecture, and VitaeGraph specification;
- live result pages for VitaeContext, VitaeGraph, AgentKit SEO, career context, agent skills, résumé grounding, provenance, and career knowledge graphs;
- primary search and platform guidance from Google Search Central, Bing Webmaster Tools, Schema.org, OpenAI, GitHub, and Chrome documentation.

No analytics, Search Console, Bing Webmaster Tools, server logs, ranking tracker, or paid keyword-volume source was available. Priority and confidence are qualitative. Live result observations are a dated sample, not a ranking claim.

## Command baseline

| Command | Result | Interpretation |
| --- | --- | --- |
| `npm ci` | PASS | 453 packages installed; 0 audit vulnerabilities reported. |
| `npm run build` | PASS | `astro check` reported 0 errors, warnings, or hints; 32 generated page endpoints. |
| `npm test` | NOT CONFIGURED | npm reports no `test` script. This is a pre-existing command-surface gap, not a test failure. |
| `npm run lint` | NOT CONFIGURED | npm reports no `lint` script. |
| `npm run type-check` | NOT CONFIGURED | npm reports no `type-check` script. |
| `npm run typecheck` | NOT CONFIGURED | npm reports no `typecheck` script. |
| `npm run validate` | NOT CONFIGURED | npm reports no `validate` script. The configured build already runs `astro check`. |
| generated HTML audit | PASS | Unique titles/descriptions, one H1, canonical/Open Graph agreement, and valid JSON-LD across all HTML output. |
| internal link audit | PASS | No unresolved internal HTML links found. |
| OG image inspection | PASS | All referenced PNG social cards are 1200 × 630. |

The build emits the expected Vite advisory for the interactive Three.js graph bundle. `VitaeGraph3D` is about 1.4 MB in the current output. Repository instructions explicitly identify this advisory as expected while the 3D graph remains interactive. Performance review remains an implementation milestone, not a baseline failure.

## Generated route inventory

Inbound counts are source-page counts from generated HTML and exclude self-links, `llms.txt`, the sitemap, and external links. Global footer links therefore receive 31 inbound pages. `Index` reflects the intended state after the narrow 404 correction. Descriptions below are abbreviated; exact emitted descriptions are recorded.

| URL | Purpose / audience / primary intent | Title / description / H1 | Canonical | Index / sitemap | Structured data | HTML inbound | Duplication or cannibalization |
| --- | --- | --- | --- | --- | --- | ---: | --- |
| `/` | Canonical project overview; users, developers, agents; “what is VitaeContext / career context for AI” | **One Career Context for Grounded AI Work \| VitaeContext**; “Create reusable, evidence-bounded career context before AI-assisted CVs…”; H1 “Keep your career context. Reuse it across AI.” | `https://vitaecontext.github.io/` | Index / yes | `WebSite`, `Organization`, `SoftwareApplication`, `BreadcrumbList` | 31 | Owns category and current-brand intent. Keep deeper workflow detail on `/docs/usage/`. |
| `/vitaegraph/` | Product-module explanation; users and technical evaluators; “VitaeGraph / connected Markdown career records” | **VitaeGraph \| Connected Markdown Career Records \| VitaeContext**; “Organize detailed projects, roles, education…”; H1 “Detailed career context, stored as connected Markdown records.” | `/vitaegraph/` | Index / yes | `TechArticle`, `BreadcrumbList` | 31 | Owns product/category intent; skill and guide pages own install/use and method intent. |
| `/profile-optimization/` | Broad task router; career users; “career/profile optimization workflows” | **Career Workflows \| VitaeContext**; “Find VitaeContext skills and readable guides…”; H1 “Start from the task you need to do.” | `/profile-optimization/` | Index / yes | `WebPage`, `BreadcrumbList` | 0 | Orphaned in HTML and overlaps home, skills, guides, and usage. Decide merge/redirect or give it a distinct linked role before expanding it. |
| `/skills/` | Installable module catalog; agent users/developers; “VitaeContext agent skills” | **Agent Skills \| VitaeContext**; “Eight installable VitaeContext skills…”; H1 “Focused instructions for focused work.” | `/skills/` | Index / yes | `CollectionPage`, `BreadcrumbList` | 31 | Distinct from guides through runtime/install intent. |
| `/skills/context-builder/` | Runtime module detail; agent users; “career context file agent skill” | **Build Your AI Career Context File Agent Skill \| VitaeContext**; “Create a reusable Markdown file…”; H1 `vitaecontext-build` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 3 | Pair with guide; retain runtime intent here. |
| `/skills/cv-ats/` | Runtime module detail; job seekers/agents; “ATS résumé/CV agent skill” | **Build an ATS-Safe Resume Agent Skill \| VitaeContext**; “Review CV structure, ATS parsing constraints…”; H1 `vitaecontext-cv` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 3 | Pair with guide; avoid generic ATS-score claims. |
| `/skills/github/` | Runtime module detail; developers/agents; “GitHub profile SEO agent skill” | **Optimize Your GitHub Profile for SEO Agent Skill \| VitaeContext**; “Review GitHub profiles, repositories…”; H1 `vitaecontext-github` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 3 | Pair with guide; runtime intent. |
| `/skills/linkedin/` | Runtime module detail; professionals/agents; “LinkedIn optimization agent skill” | **Optimize Your LinkedIn for Search Agent Skill \| VitaeContext**; “Review LinkedIn headline, About…”; H1 `vitaecontext-linkedin` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 3 | Pair with guide; runtime intent. |
| `/skills/vitaecontext/` | Root router skill; agent developers; “VitaeContext orchestration skill” | **VitaeContext Orchestration and Routing Skill Agent Skill \| VitaeContext**; root routing description; H1 `vitaecontext` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 2 | Title is repetitive; improve later without changing intent. |
| `/skills/vitaegraph/` | Runtime module detail; agents; “career knowledge graph agent skill” | **Build a Private Markdown Career Knowledge Graph Agent Skill \| VitaeContext**; local graph description; H1 `vitaecontext-vitaegraph` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 2 | Separate from product overview by installable runtime intent. |
| `/skills/web-portfolio/` | Runtime module detail; developers/agents; “portfolio SEO agent skill” | **Optimize Your Portfolio for Search Agent Skill \| VitaeContext**; portfolio audit description; H1 `vitaecontext-portfolio` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 3 | Pair with guide; runtime intent. |
| `/skills/x-twitter/` | Runtime module detail; creators/agents; “X/Twitter profile agent skill” | **Optimize Your X Profile for Search Agent Skill \| VitaeContext**; profile audit description; H1 `vitaecontext-x` | same URL | Index / yes | `SoftwareSourceCode`, `BreadcrumbList` | 3 | Pair with guide; runtime intent. |
| `/playbooks/` | Human guide catalog; readers; “career context and profile optimization guides” | **Guides \| VitaeContext**; “Human-readable VitaeContext guides…”; H1 “The methods behind the skills.” | `/playbooks/` | Index / yes | `CollectionPage`, `BreadcrumbList` | 31 | Distinct from skills through no-install educational intent. |
| `/playbooks/context-builder/` | Long-form method; people/agents researching process; “how to build career context for AI” | **Context Builder \| VitaeContext**; private Markdown source-of-truth description; H1 “Context Builder” | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 4 | Canonical educational target for detailed context-file method. |
| `/playbooks/cv-ats/` | Long-form method; job seekers; “CV/ATS optimization guide” | **CV and ATS optimization \| VitaeContext**; parser/recruiter description; H1 same | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 3 | Educational pair to the skill page. |
| `/playbooks/github/` | Long-form method; developers; “GitHub profile/repository optimization guide” | **GitHub optimization \| VitaeContext**; search/trust description; H1 same | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 3 | Educational pair to skill page. |
| `/playbooks/linkedin/` | Long-form method; professionals; “LinkedIn profile optimization guide” | **LinkedIn profile optimization \| VitaeContext**; section-improvement description; H1 same | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 3 | Educational pair to skill page. |
| `/playbooks/vitaecontext/` | Root routing method; agent developers; “skill routing/progressive disclosure” | **Orchestration and routing \| VitaeContext**; root runtime wiki description; H1 same | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 2 | Niche technical intent; do not compete with homepage definition. |
| `/playbooks/vitaegraph/` | Detailed graph method; technical users; “build/validate/index career knowledge graph” | **VitaeGraph \| VitaeContext**; private graph workflow description; H1 “VitaeGraph” | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 2 | Method target; product page owns general definition. |
| `/playbooks/web-portfolio/` | Long-form method; developers; “portfolio SEO/indexing guide” | **Web portfolio SEO and indexing \| VitaeContext**; audit scope description; H1 same | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 3 | Educational pair to skill page. |
| `/playbooks/x-twitter/` | Long-form method; creators; “X/Twitter optimization guide” | **X (Twitter) optimization \| VitaeContext**; profile/post description; H1 same | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 3 | Educational pair to skill page. |
| `/docs/` | Documentation hub; users/developers; “VitaeContext documentation” | **Documentation \| VitaeContext**; workflow/install/graph summary; H1 “Start with the part you need.” | `/docs/` | Index / yes | `CollectionPage`, `BreadcrumbList` | 31 | Hub only; child docs own task queries. |
| `/docs/installation/` | Install guide; developers/agent users; “install VitaeContext” | **Installation \| VitaeContext**; npm/marketplace/local install description; H1 “Install VitaeContext” | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 14 | Canonical installation target; providers owns environment comparison. |
| `/docs/usage/` | Workflow explanation; users; “how VitaeContext works / how to use it” | **How VitaeContext Works \| VitaeContext**; context-skill-review sequence; H1 same | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 5 | Deeper process target; homepage owns concise definition. |
| `/docs/context-file-example/` | Annotated fictional example; users/agents; “career context file example/template” | **Personal Career Context File Example and Template \| VitaeContext**; contents/evidence description; H1 “What goes inside a career context file?” | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 31 | Strong example intent; raw Markdown is a supporting noncanonical artifact. |
| `/docs/cli/` | Command reference; developers; “VitaeContext CLI commands” | **CLI Reference \| VitaeContext**; version/update/doctor/list/template/graph/install/uninstall/export; H1 “CLI reference” | same URL | Index / yes | `TechArticle`, `BreadcrumbList` | 4 | Canonical CLI target. |
| `/providers/` | Provider comparison; developers; “supported VitaeContext providers/install targets” | **Supported Providers \| VitaeContext**; six targets; H1 “Install once in the agent you use.” | `/providers/` | Index / yes | `CollectionPage`, `BreadcrumbList` | 31 | Keep distinct from installation through comparison/reference intent. |
| `/design/` | Architecture explanation; technical evaluators; “VitaeContext design/architecture” | **Design \| VitaeContext**; separated context/method/knowledge/adapters; H1 “How the pieces fit together” | `/design/` | Index / yes | `WebPage`, `BreadcrumbList` | 31 | Supports entity credibility and technical comparisons. |
| `/faq/` | Genuine project questions; users/agents; branded questions and limitations | **VitaeContext FAQ \| VitaeContext**; product/provider/install/graph boundaries; H1 “Frequently asked questions” | `/faq/` | Index / yes | `WebPage`, `FAQPage`, `BreadcrumbList` | 31 | Do not add speculative keyword FAQs. Some terminology should be updated to canonical “Career Context” in implementation. |
| `/changelog/` | Release and rename history; users/search systems; “AgentKit SEO renamed / VitaeContext releases” | **Changelog \| VitaeContext**; release/history description; H1 “Changelog” | `/changelog/` | Index / yes | `WebPage`, `BreadcrumbList` | 31 | Canonical on-site legacy-name bridge. Keep the former name limited to factual history. |
| `/contact/` | Maintainer and contribution identity; users/evaluators; “VitaeContext maintainers/contact” | **Contact \| VitaeContext**; contribution/attribution description; H1 “Contact” | `/contact/` | Index / yes | `ContactPage`, `BreadcrumbList` | 31 | Supports creator attribution; do not add `Person` schema without fuller matching profile content. |
| `/404.html` | Error utility; lost visitors; recovery navigation | **Page Not Found \| VitaeContext**; requested-page-not-found description; H1 “Page not found” | currently emits `/404/` | Noindex / no | none | 0 | Utility page. Canonical is nonconsequential under noindex but should be omitted in a later metadata refactor. |
| `/examples/sample-career-context.md` | Raw fictional Markdown example; agents/users; direct retrieval | No HTML title/description/canonical; Markdown H1 “Alex Morgan - Backend developer focused on reliable web services” | none | Crawlable support file / no | none | 1 | Supporting artifact, not an independent search landing page. Keep prominently labeled fictional. |
| `/sitemap.xml` | Crawler discovery manifest | XML URL set with 31 canonical indexable HTML routes | n/a | Crawlable / n/a | XML Sitemap | linked from `robots.txt` | Excludes 404 and raw Markdown, as expected. |

### Exact emitted title, description, and H1 inventory

This appendix preserves the full generated metadata values where the purpose table abbreviates them.

| URL | Exact title | Exact meta description | Exact H1 |
| --- | --- | --- | --- |
| `/` | One Career Context for Grounded AI Work \| VitaeContext | Create reusable, evidence-bounded career context before AI-assisted CVs, applications, profiles, and other professional work—then use it in any provider or system that accepts context. | Keep your career context. Reuse it across AI. |
| `/vitaegraph/` | VitaeGraph \| Connected Markdown Career Records \| VitaeContext | Organize detailed projects, roles, education, thesis work, credentials, and their relationships as local Markdown records with rebuildable indexes. | Detailed career context, stored as connected Markdown records. |
| `/profile-optimization/` | Career Workflows \| VitaeContext | Find VitaeContext skills and readable guides for career context, profiles, CVs, repositories, portfolios, messages, interviews, and related work. | Start from the task you need to do. |
| `/skills/` | Agent Skills \| VitaeContext | Eight installable VitaeContext skills for routing, career context, VitaeGraph, CV and ATS, LinkedIn, GitHub, portfolios, and X. | Focused instructions for focused work. |
| `/skills/context-builder/` | Build Your AI Career Context File Agent Skill \| VitaeContext | Create a reusable Markdown file for career facts, stated goals, evidence, constraints, and claims to avoid. | `vitaecontext-build` |
| `/skills/cv-ats/` | Build an ATS-Safe Resume Agent Skill \| VitaeContext | Review CV structure, ATS parsing constraints, job-specific terminology, and evidence-backed bullet writing. | `vitaecontext-cv` |
| `/skills/github/` | Optimize Your GitHub Profile for SEO Agent Skill \| VitaeContext | Review GitHub profiles, repositories, metadata, READMEs, proof, search structure, and agent instructions. | `vitaecontext-github` |
| `/skills/linkedin/` | Optimize Your LinkedIn for Search Agent Skill \| VitaeContext | Review LinkedIn headline, About, Experience, Featured, and Skills sections using supplied career context. | `vitaecontext-linkedin` |
| `/skills/vitaecontext/` | VitaeContext Orchestration and Routing Skill Agent Skill \| VitaeContext | The root VitaeContext skill: a runtime wiki and project self-description that routes a request to a single platform module and loads only the context that task needs. | `vitaecontext` |
| `/skills/vitaegraph/` | Build a Private Markdown Career Knowledge Graph Agent Skill \| VitaeContext | Use VitaeGraph to structure deep career material into local Markdown records with validation and rebuildable indexes for agent workflows. | `vitaecontext-vitaegraph` |
| `/skills/web-portfolio/` | Optimize Your Portfolio for Search Agent Skill \| VitaeContext | Audit portfolio crawlability, metadata, structured data, rendering, sitemaps, performance, and AI-readable structure. | `vitaecontext-portfolio` |
| `/skills/x-twitter/` | Optimize Your X Profile for Search Agent Skill \| VitaeContext | Review X profile structure, pinned posts, content formatting, topic consistency, and documented platform behavior. | `vitaecontext-x` |
| `/playbooks/` | Guides \| VitaeContext | Human-readable VitaeContext guides for reusable career context, VitaeGraph, CV and ATS, LinkedIn, GitHub, portfolios, and X. | The methods behind the skills. |
| `/playbooks/context-builder/` | Context Builder \| VitaeContext | Build a private Markdown source of truth for verified career facts, links, projects, positioning, and stated goals and targeting. | Context Builder |
| `/playbooks/cv-ats/` | CV and ATS optimization \| VitaeContext | Turn CVs into parser-friendly, recruiter-readable documents with cleaner structure, keywords, and proof bullets. | CV and ATS optimization |
| `/playbooks/github/` | GitHub optimization \| VitaeContext | Make profiles and repositories easier to discover, inspect, and trust across GitHub search, Copilot, and humans. | GitHub optimization |
| `/playbooks/linkedin/` | LinkedIn profile optimization \| VitaeContext | Improve LinkedIn headline, About, Experience, Featured, and Skills sections with evidence-backed positioning. | LinkedIn profile optimization |
| `/playbooks/vitaecontext/` | Orchestration and routing \| VitaeContext | The root runtime wiki and entrypoint that routes a request to one platform module and loads only the references that task needs. | Orchestration and routing |
| `/playbooks/vitaegraph/` | VitaeGraph \| VitaeContext | Build, deepen, validate, and index a private hierarchical career knowledge graph from supplied career material. | VitaeGraph |
| `/playbooks/web-portfolio/` | Web portfolio SEO and indexing \| VitaeContext | Audit portfolio crawlability, metadata, structured data, JavaScript rendering, performance, and AI-readable signals. | Web portfolio SEO and indexing |
| `/playbooks/x-twitter/` | X (Twitter) optimization \| VitaeContext | Shape profiles, pinned posts, and content loops around clear positioning and documented platform behavior. | X (Twitter) optimization |
| `/docs/` | Documentation \| VitaeContext | Learn how VitaeContext stores reusable career context, applies focused skills, installs into supported agents, and uses VitaeGraph for deeper records. | Start with the part you need. |
| `/docs/installation/` | Installation \| VitaeContext | Install VitaeContext from npm, the Claude Code marketplace, or a local checkout into a supported agent environment. | Install VitaeContext |
| `/docs/usage/` | How VitaeContext Works \| VitaeContext | Create reusable career context, choose one focused skill, and review evidence boundaries before using the result. | How VitaeContext works |
| `/docs/context-file-example/` | Personal Career Context File Example and Template \| VitaeContext | Explore a readable personal career context file template covering education, experience, projects, skills, certifications, goals, evidence, and AI agent instructions. | What goes inside a career context file? |
| `/docs/cli/` | CLI Reference \| VitaeContext | Reference for VitaeContext version, update, doctor, list, template, graph, install, uninstall, and export commands. | CLI reference |
| `/providers/` | Supported Providers \| VitaeContext | Install VitaeContext into Codex, Claude Code, Gemini CLI, Antigravity, OpenCode, or a portable shared skill directory. | Install once in the agent you use. |
| `/design/` | Design \| VitaeContext | How VitaeContext separates career context, task methods, versioned knowledge, evidence labels, and provider adapters. | How the pieces fit together |
| `/faq/` | VitaeContext FAQ \| VitaeContext | Answers about VitaeContext: what it is, supported providers, install, VitaeGraph, the agent-context-file, and what it deliberately does not promise. | Frequently asked questions |
| `/changelog/` | Changelog \| VitaeContext | VitaeContext changelog: current package releases, new public visuals, grounded career context improvements, and website updates. | Changelog |
| `/contact/` | Contact \| VitaeContext | Contact and contribution paths for VitaeContext, including GitHub-based project discovery and maintainer attribution. | Contact |
| `/404.html` | Page Not Found \| VitaeContext | The requested VitaeContext page was not found. Use the main navigation to reach skills, providers, docs, changelog, or contact. | Page not found |

## Baseline strengths

- Static semantic HTML contains the essential project explanation, navigation, headings, links, and guide content.
- Canonical URLs, Open Graph URLs, page metadata, and JSON-LD URLs use the production origin consistently.
- Titles and descriptions are distinct across all HTML routes.
- Every HTML page has exactly one H1.
- Breadcrumbs and conservative page types are used consistently.
- The sitemap contains canonical public HTML routes only and uses content dates only for playbooks.
- `robots.txt` allows general crawlers and OAI-SearchBot and references the canonical sitemap.
- The source repository, prepared npm package, website, and current 2.1.0 identity agree through the generated product contract.
- The current public site uses VitaeContext as the primary brand. The only visible former-name reference is the factual 2.0.0 changelog entry.
- The fictional career-context example is clearly marked and is not user data.

## Findings and priorities

### Optional owner action: add a minimal former-hostname migration page

Verified at the origin on 2026-07-16: `agentkit-seo.github.io` returns GitHub's platform-level 404. Any former HTML still appearing in search results or crawler tools may be stale cached/indexed material. There is no active duplicate site to retire from this repository.

Preferred optional action:

1. Attempt to reclaim the `agentkit-seo` organization namespace.
2. If successful, create only `agentkit-seo/agentkit-seo.github.io`.
3. Publish a minimal migration page with a zero-second meta refresh to `https://vitaecontext.github.io/`, a canonical pointing to that current URL, a visible explanation, and a visible current-site link.
4. Do not recreate the former documentation site or present AgentKit SEO as a current parallel brand.

If the namespace cannot be reclaimed, retain the legitimate 404, keep the current changelog's single concise former-name explanation, update controlled external links/listings, and monitor stale former URLs leaving indexes. None of those external actions is claimed as completed here.

### High: resolve `/profile-optimization/`

At baseline the route was indexable and sitemap-listed but had no inbound HTML links. It now has a distinct task-chooser purpose and a contextual homepage link. It remains short so it does not compete with the homepage, skill catalog, guide catalog, or usage guide.

Implemented decision: retain it as a narrowly scoped task chooser for legacy links, link it contextually, and keep it short. It was not expanded into a second homepage.

### High: strengthen the canonical definition and comparison answers

Implemented: the homepage has a compact extractable definition and colocated limitation; `/docs/usage/` owns Career Context comparisons; `/vitaegraph/` owns the compact-context versus deeper-record comparison. No wording-variant pages were created.

### Medium: preserve skill/guide intent separation

Each module has both `/skills/<slug>/` and `/playbooks/<slug>/`. This is useful if:

- skill pages lead with exact invocation name, install path, when to use, and output;
- guide pages lead with the human-readable method, examples, limitations, and sources;
- reciprocal links explicitly label “installable skill” versus “readable guide.”

Avoid copying the same long introduction into both surfaces.

### Medium: entity identifiers and structured data

Implemented JSON-LD uses stable `https://vitaecontext.github.io/#website`, `#organization`, and `#software` identifiers plus stable page, article, skill-source, FAQ, and breadcrumb IDs. `alternateName: "AgentKit SEO"` remains intentionally omitted: the changelog is the visible migration authority, and repeating the former name in homepage schema is unnecessary for the limited bridge.

### Medium: terminology normalization

Current definitions, navigation, FAQ, examples, and guide entrypoints now use **Career Context** for the artifact. Historical changelog wording and literal compatibility/schema identifiers remain where accuracy requires them.

### Low: performance and asset budget

The optional interactive graph remains the documented large bundle with static explanatory content. Sitewide header/footer references now reuse the existing 28 KB icon instead of requesting the 376 KB and 768 KB theme logos; browser checks confirmed stable 320 px and 1440 px layouts.

## Pages to improve, merge, create, or avoid

| Decision | Pages | Rationale |
| --- | --- | --- |
| Improve | `/`, `/docs/usage/`, `/docs/context-file-example/`, `/vitaegraph/`, `/faq/` | Strengthen extractable definitions, comparisons, privacy boundary, provenance, and consistent terminology. |
| Improve | Skill and matching guide pages | Make runtime versus educational intent unmistakable and strengthen contextual cross-links. |
| Merge or retain narrowly | `/profile-optimization/` | Current route is orphaned and broad. Prefer consolidation over another landing page. |
| Create only if evidence supports depth | One “Career Context” concept/reference page | A dedicated concept page may be justified if homepage/docs changes cannot answer definition, comparison, privacy, portability, evidence, and maintenance in one coherent canonical target. Reassess after improving existing pages. |
| Do not create | Separate pages for “career context for AI,” “for AI agents,” “portable career context,” “private career context,” and “reusable career information” | These are close variants of one intent and would become doorway/thin pages. |
| Do not create | A separate page for every former-name query | `/changelog/` plus the compatibility package are sufficient; a minimal former-hostname page is optional only if the namespace is reclaimed. |
| Do not create | Generic “best AI résumé tool,” fabricated comparison, testimonial, ranking, ATS-score, or AI-citation pages | Unsupported and outside the product’s verified category. |
| Do not create | `llms-full.txt` merely for perceived rankings | Google explicitly says no new AI text file is required for AI features. Keep `llms.txt` as a low-cost navigation convention, not a ranking lever. |

## Research sources

Sources were accessed 2026-07-16.

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) — foundational SEO remains applicable; no special AI schema or text file is required; important content should be textual and internally linked.
- [Google: generative AI content guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) — prioritize accuracy, quality, relevance, and matching metadata/structured data.
- [Google: canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) — canonical signals should be consistent.
- [Google: sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) — list preferred canonical URLs and use accurate modification dates.
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) — crawlable links, canonical URLs, accurate sitemaps, content clarity, and ordinary SEO also support grounding eligibility.
- [Bing robots meta support](https://www.bing.com/webmasters/help/robots-meta-tags-and-attributes-that-bing-supports-5198d240) — `noindex` must remain crawlable to be observed.
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) — OAI-SearchBot access supports discovery; `noindex` requires crawl access.
- [Schema.org SoftwareApplication](https://schema.org/SoftwareApplication), [SoftwareSourceCode](https://schema.org/SoftwareSourceCode), and [alternateName](https://schema.org/alternateName) — vocabulary references, not rich-result guarantees.
- [GitHub repository rename guidance](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository) — repository redirects exclude project-site URLs.
- [Chrome Lighthouse `llms.txt` documentation](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt) — describes `llms.txt` as an emerging convention.
- [VitaeContext repository](https://github.com/vitaecontext/vitaecontext) — canonical source, creators, license, package behavior, modules, commands, and transition history.
- [VitaeContext npm package](https://www.npmjs.com/package/vitaecontext) and [AgentKit SEO compatibility package via jsDelivr](https://www.jsdelivr.com/package/npm/agentkit-seo) — current and compatibility identities.
- [Career-Aware Resume Tailoring with Provenance Tracking](https://arxiv.org/abs/2605.05257) and [CareerPathKG](https://aclanthology.org/2026.eacl-industry.60/) — current terminology evidence for longitudinal career records, provenance-aware generation, and career knowledge graphs; these are research context, not proof of VitaeContext outcomes.

## Audit boundary

Verified repository and public-page facts are distinguished from live-result observations and recommendations. No claim is made about current rankings, traffic, adoption, query volume, citations, or future indexing. Owner-only actions remain unperformed.
