# VitaeContext discovery measurement plan

Date: 2026-07-16

## Measurement principle

Measure discoverability, correctness, and qualified next actions. Do not report eligibility work as guaranteed ranking, citation, traffic, or career outcomes.

No analytics or webmaster-account data was available during this repository audit. All account actions below are owner actions and remain uncompleted.

## Baseline to capture

Export or record the following for `vitaecontext.github.io` and, where historical owner access exists, the former `agentkit-seo.github.io` property. The former hostname returned GitHub's platform-level 404 on 2026-07-16; stale indexed URLs or cached HTML may remain temporarily:

- indexed/canonical page counts and exclusions;
- submitted/discovered sitemap status;
- branded queries and landing pages;
- nonbranded impressions/clicks by the clusters in `keyword-map.md`;
- old-name queries and the domains/URLs receiving impressions;
- top linked pages and referring domains;
- crawl errors, duplicate/canonical selections, and structured-data reports;
- search and AI-referral landing pages in analytics;
- install-link, repository-link, copy-command, and copy-setup-prompt events if analytics is deliberately added;
- current npm package page, repository description/topics/social preview, marketplace metadata, and compatibility-package description;
- fixed manual prompt/search sample from the generative-engine strategy.

Record the property, date range, country/device filters, and export date. Do not combine old and current domains without labeling them.

## Key indicators

| Layer | Indicator | Why it matters | Limitation |
| --- | --- | --- | --- |
| Technical | Intended canonical routes indexed; 404 excluded; sitemap processed | Verifies basic discovery and canonical health | Indexing is not ranking. |
| Entity | Current name/site/repo/package returned for exact brand | Checks entity consolidation | Results vary by engine, locale, and time. |
| Legacy | Former-name queries reach migration/current sources rather than obsolete full pages | Measures rename cleanup | Old results can persist after correction. |
| Intent | Impressions/clicks by canonical cluster/page | Tests the query-to-page assignment | Search Console query data is sampled/limited. |
| Engagement | Install, repository, example, guide/skill next actions | Shows whether landing pages lead somewhere useful | Event design and consent must be appropriate. |
| AEO/GEO | Correct answer, correct primary name, correct source/citation in fixed prompt sample | Detects factual drift and source conflicts | Not a stable market-share or ranking metric. |
| Freshness | Days from release to aligned site/package/entity facts | Measures publishing discipline | Requires a maintained change log. |
| Quality | Broken links, duplicate metadata, schema parse errors, orphan routes | Detects repository regressions | Local validation cannot confirm live index state. |

## Query groups

Track groups, not invented single-keyword forecasts:

- current brand: VitaeContext, Vitae Context, current package/repository;
- former brand: AgentKit SEO, renamed, GitHub, install;
- Career Context: career context for AI/agents, reusable/portable/private career information;
- grounding/evidence: grounded career workflow, provenance, unsupported résumé claims, hallucination prevention;
- VitaeGraph: brand, career knowledge graph, Markdown career graph;
- install/provider/CLI;
- agent skills and each shipped task surface;
- comparison/education: Career Context versus résumé, memory, LinkedIn, knowledge graph.

Use regex filters only when documented and reviewed; keep exact query exports for auditability.

## 30-day plan

1. Confirm the current site property and sitemap in owner tools.
2. If historical access exists, inspect the former property for stale indexed URLs; do not treat cached HTML as evidence that the origin remains live.
3. Optionally attempt to reclaim the `agentkit-seo` namespace and, if successful, create only `agentkit-seo/agentkit-seo.github.io` with a minimal zero-second refresh, current canonical, visible explanation, and visible current-site link. Do not recreate the former documentation site.
4. If reclamation is unavailable, retain the legitimate 404, update controlled external links/listings, and monitor stale former URLs leaving indexes.
5. Inspect canonical selection and indexability for `/`, `/docs/usage/`, `/docs/installation/`, `/vitaegraph/`, `/skills/`, `/changelog/`, `/profile-optimization/`, and 404.
6. Update owner-controlled GitHub, npm, marketplace, directory, and social links using current identity.
7. Run the fixed manual question sample and save cited URLs/answer notes.
8. Keep the implemented deterministic local SEO validation passing as content changes.

## 60-day plan

1. Compare current-versus-former branded impressions and selected URLs.
2. Review whether old-domain pages remain indexed or cited; request recrawl/removal only through owner tools and appropriate policies.
3. Review query clusters landing on the wrong page, especially homepage/usage/context builder and VitaeGraph product/skill/guide.
4. Check whether `/profile-optimization/` was merged/redirected or assigned a distinct discoverable role.
5. Review referral landing pages from known AI/search sources where analytics supports them.
6. Re-run the question sample and compare factual correctness, primary name, commands, privacy qualifiers, and citations.
7. Refresh volatile platform-source dates before promoting those guides further.

## 90-day plan

1. Evaluate whether existing-page improvements cover Career Context category/comparison intent.
2. Consider a dedicated Career Context reference page only if query evidence and content depth justify one canonical target.
3. Evaluate title/description rewrites only where actual query-page mismatch is visible; do not churn stable metadata without evidence.
4. Review internal links, orphan status, crawl/index reports, and structured-data consistency.
5. Compare install/repository/example next-action engagement by landing page.
6. Reconcile all public facts with the current product release.
7. Document which hypotheses were supported, unsupported, or still uncertain.

## Owner action checklist

| Surface | Action | Status |
| --- | --- | --- |
| Google Search Console | Confirm the current property; inspect any accessible historical former property and stale URLs; request recrawl/removal only where appropriate | Not performed |
| Bing Webmaster Tools | Verify/import the current property; inspect any accessible historical former URLs and caches | Not performed |
| Analytics | Decide whether to add/use privacy-appropriate analytics; define referrer and next-action events | Not performed |
| GitHub | Verify repository description, topics, homepage, social preview, release notes, old redirect | Read-only public review only |
| npm | Verify current and compatibility package metadata/deprecation message | Read-only public/source review only |
| Claude/Gemini/other listings | Verify public listing name, URL, version, commands after release | Not performed |
| Former GitHub Pages | Optional: attempt namespace reclamation and publish only a minimal migration page; fallback is to retain the legitimate 404 | Not performed; optional, not a repository defect |
| External owned profiles/posts/directories | Update old domain, package, commands, and brand where found | Not performed |

## Reporting template

```text
Period:
Properties and tools:
Changes released:

Technical:
- Indexed canonical routes:
- Exclusions/errors:
- Sitemap status:

Entity:
- Current-brand observations:
- Former-brand observations:
- Conflicting sources:

Intent:
- Query clusters gaining/losing visibility:
- Landing-page mismatches:
- Pages needing content or link changes:

Answer/generative sample:
- Questions tested:
- Correct answers:
- Current name primary:
- Current commands/version:
- Privacy/evidence qualifiers preserved:
- Cited sources:

Next actions:
- Repository:
- Owner/external:
- Uncertainty:
```

## Guardrails

- Never infer search volume from impressions in a short or filtered window.
- Never call manual prompt sampling “citation share” without a defined, repeatable sample and clear limitation.
- Do not attribute job, recruiter, ranking, ATS, or career outcomes to VitaeContext without causal evidence.
- Do not publish private Career Context, VitaeGraph, analytics, or account data in the repository.
- Treat zero or missing data as unknown until property setup, filters, indexing, and date range are verified.
