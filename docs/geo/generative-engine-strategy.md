# VitaeContext generative-engine strategy

Date: 2026-07-16

## Position

Generative-engine optimization for VitaeContext is citation eligibility and factual clarity work. It cannot guarantee that a generative system will retrieve, mention, recommend, or cite the project.

The project should be understandable through ordinary indexed HTML, a coherent entity graph, source-backed definitions, useful examples, and stable links. `llms.txt` can remain a concise navigation aid, but it is not the foundation of this strategy.

## Research basis

Current official guidance points toward established web fundamentals:

- [Google](https://developers.google.com/search/docs/appearance/ai-features) says AI Overviews and AI Mode use the same Search foundations, may fan a question out into related searches, require indexed/snippet-eligible pages, and need no special schema or AI text file.
- [Bing](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) connects grounding eligibility to crawlability, canonical URLs, internal links, content clarity, accurate sitemaps, and trust.
- [OpenAI](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) identifies OAI-SearchBot access and `noindex` as relevant publisher controls and notes that referral traffic can be measured.
- [Chrome Lighthouse](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt) describes `llms.txt` as an emerging convention, not a search guarantee.

## Retrieval model for planning

A generative answer may decompose a broad query into subquestions. VitaeContext should provide coherent canonical answers for the likely fan-out:

```text
“How can I keep my career information grounded across AI tools?”
  -> What is Career Context?
  -> Is it portable and private?
  -> How is it different from a résumé or AI memory?
  -> How is it created and maintained?
  -> How are unsupported claims handled?
  -> Which agents and skills can use it?
  -> Is there a deeper knowledge-graph option?
```

The response should resolve to a small set of complementary pages rather than many near-duplicate landing pages.

## Canonical source hierarchy

| Source | Authority role | Content it should own |
| --- | --- | --- |
| Product repository | Runtime/source authority | Package behavior, current commands, providers, skills, creators, license, version, release history, privacy policy. |
| Website homepage | Public entity/category authority | Current name, concise definition, problem, audience, solution, primary workflow, limitations. |
| Website docs | Task/reference authority | Installation, usage, CLI, context example, provider behavior. |
| VitaeGraph page/spec | Product-module authority | Graph purpose, record/relationship model, local Markdown, generated indexes, privacy/validation boundaries. |
| Skill pages | Runtime discovery authority | Exact skill name, triggers, input, method, output, install/invocation. |
| Guides | Human method authority | Steps, examples, rules, anti-patterns, sources, review dates. |
| `llms.txt` | Concise navigation derivative | Stable summary and links back to canonical HTML/source. |
| Former hostname | Current platform 404; optional migration only | Old-to-current identity connection if the namespace can be reclaimed; stale cached HTML may persist temporarily. |

If sources disagree, fix the underlying canonical source and its derivatives rather than adding another explanatory page.

## Entity strategy

The current name is always **VitaeContext**. **AgentKit SEO** is only a former name and compatibility bridge. **Career Context** is the user-owned artifact. **VitaeGraph** is the optional deeper record layer. **Agent skills** are task-specific runtime packages.

Implementation should:

1. use stable website, organization/project, and software IDs in JSON-LD;
2. connect pages and skill artifacts to those entities;
3. keep the current name primary in visible copy and structured data;
4. make repository, package, version, license, creators, and install commands easy to verify;
5. keep the rename in the changelog and compatibility documentation, with an optional minimal former-hostname migration page only if the namespace can be reclaimed;
6. consider `alternateName` only after stable IDs and matching visible migration context exist;
7. never publish private person/career-record entities from user files.

Full values and relationships are in `docs/geo/entity-map.md`.

## Content strategy for generative retrieval

### Define before persuading

Important pages should start with a clear definition or direct answer. Marketing language that depends on the preceding page context is less useful when a passage is retrieved alone.

### Preserve qualifying context

A sentence about privacy, evidence, or support must remain accurate when extracted. Prefer:

> Career Context can remain in a local file until a user supplies it to an external provider; the provider’s data rules apply after that handoff.

Avoid splitting “it is private” and the handoff limitation into distant sections.

### Show mechanisms

Concrete items improve verifiability:

- exact Markdown artifact name and example;
- exact skill invocation names;
- current install and CLI commands;
- specific graph record types;
- explicit `contains` and `related to` relationships;
- source versus generated artifact distinctions;
- review and evidence labels.

### Use comparisons carefully

High-value comparisons are conceptual and durable:

- Career Context versus résumé/CV;
- Career Context versus provider memory;
- compact Career Context versus VitaeGraph;
- skill versus guide;
- project grounding versus independent verification.

Avoid competitor grids that become stale or imply superiority without evidence.

### Retain source trails

- Project facts link to the repository, package, changelog, or exact docs.
- Volatile platform guidance links to current primary sources and carries review dates.
- Research context is labeled as external research, not evidence of project performance.
- Examples are labeled fictional or illustrative.
- Unsupported outcome claims are excluded.

## Technical eligibility

Maintain:

- public crawl access for search-discovery crawlers;
- indexable, canonical, snippet-eligible HTML for intended pages;
- meaningful static text and crawlable internal links;
- consistent sitemap/canonical/structured-data URLs;
- correct `noindex` on utility/error content;
- valid JSON-LD that matches visible content;
- current social and repository metadata;
- stable URLs and redirects/migration handling for renamed properties.

Do not:

- serve different claims to AI crawlers;
- add special “AI schema” that has no supported vocabulary or visible content;
- publish hidden keyword lists;
- produce large machine-only page variants that can drift from HTML;
- block a crawler while expecting it to observe page-level `noindex`;
- use `llms.txt` as a substitute for sitemap and internal links.

## `llms.txt` policy

The current file is concise, factual, versioned, and links canonical public resources. Keep it only as a derivative navigation map.

Review rules:

- update version and shipped facts with each release;
- link only current canonical pages and source;
- avoid claims not present in public HTML or source;
- do not expose private content;
- do not add `llms-full.txt` unless a real retrieval use case and synchronization process exist;
- do not claim ranking or citation impact.

## Brand-transition strategy

The current generative risk is not insufficient former-name repetition. It is stale cached or indexed evidence:

- current site and repository identify VitaeContext;
- old repository redirects correctly;
- compatibility package connects names;
- the former GitHub Pages hostname returned GitHub's platform-level 404 at the origin on 2026-07-16, although search, answer-engine, or crawler caches may temporarily retain former HTML and outdated commands.

Resolution:

1. Keep one current-domain changelog explanation.
2. Optionally attempt to reclaim the `agentkit-seo` organization namespace. If successful, create only `agentkit-seo/agentkit-seo.github.io` with a minimal zero-second refresh, current canonical, visible explanation, and visible current-site link; do not recreate former docs.
3. If reclamation is unavailable, retain the legitimate 404.
4. Update owner-controlled package, repository, marketplace, directory, and social links/listings.
5. Monitor whether answer systems stop citing stale former URLs.
6. Do not add former-name copy across current skill/guide pages.

## Citation acquisition without fabrication

The project can improve the likelihood of legitimate third-party references by publishing useful artifacts, not by manufacturing mentions:

- stable open-source releases and changelogs;
- complete package/repository metadata;
- durable technical documentation for the Career Context and VitaeGraph models;
- citable definitions and limitations;
- fictional, reproducible examples;
- source-backed human guides;
- contribution and issue routes;
- transparent privacy and security policies;
- meaningful demonstrations or research only when real evidence exists.

Do not create fake customers, testimonials, directories, reviews, academic affiliations, benchmarks, adoption numbers, or generated “press” pages.

## Evaluation set

Run a dated manual sample across conventional and generative search products for:

- What is VitaeContext?
- What is Career Context for AI agents?
- How can I stop AI from inventing résumé facts?
- How is career context different from a résumé?
- How can I reuse career information across AI tools?
- What is a career knowledge graph?
- What is VitaeGraph?
- Which agent skills can optimize a CV, LinkedIn, GitHub, or portfolio?
- How do I install VitaeContext in Codex/Claude Code/Gemini CLI?
- What happened to AgentKit SEO?

Record:

- whether the answer is factually correct;
- which entity name is primary;
- whether stale former-hostname URLs or cached HTML appear or are cited;
- which canonical page is selected;
- whether privacy/evidence limitations survive extraction;
- whether commands/version are current;
- cited URLs and observation date.

This is qualitative monitoring, not a ranking score.

## Implementation milestones

| Phase | Work | Completion signal |
| --- | --- | --- |
| 1. Entity cleanup | Current external listings; stable core facts; optional former-hostname bridge | Origin remains a legitimate 404 or serves only a minimal migration page; current links agree. |
| 2. Canonical answers | Homepage, usage, design, VitaeGraph definition/comparison/privacy sections | Core evaluation questions resolve to concise accurate answers. |
| 3. Entity graph | Stable JSON-LD IDs and relationships | Parsed graph uses one current entity set and matches visible content. |
| 4. Content distinction | Skill/guide separation and contextual linking | Runtime and educational pages answer different intents. |
| 5. Validation | Deterministic generated-output audit in CI | Route, metadata, schema, links, sitemap, brand usage checks pass. |
| 6. Measurement | Search/analytics/referral/prompt sampling | Dated observations and owner dashboard baseline exist. |

## Risks

- Generative citations are volatile and not guaranteed.
- Former-domain content may persist in search-engine, answer-engine, or crawler caches after the origin returns 404 or a migration page.
- Over-optimizing around the former name could delay current entity consolidation.
- Adding thin answer pages can create more ambiguity than coverage.
- Volatile platform advice can damage trust if not reviewed.
- “Private,” “verified,” “grounded,” and “knowledge graph” can overstate behavior when qualifications are omitted.
