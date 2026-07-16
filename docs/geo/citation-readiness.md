# VitaeContext citation-readiness assessment

Date: 2026-07-16

## Assessment

VitaeContext is structurally ready to be retrieved and cited for branded, installation, skill, and VitaeGraph questions because it has static canonical pages, public source code, exact commands, versioned releases, visible maintainers, and detailed documentation. It is less ready for broad category and comparison questions because several key definitions and privacy/evidence comparisons are distributed across pages rather than expressed as compact canonical answers.

The former GitHub Pages hostname is not currently an active competing site: a direct origin check on 2026-07-16 returned GitHub's platform-level 404. Search-engine, answer-engine, or crawler caches may still surface former HTML temporarily, so monitoring stale citations matters more than adding repeated former-name copy to the current site.

“Citation ready” means an accurate source is available and extractable. It does not mean a system will cite it. Repository-controlled answer, entity, linking, and validation improvements were completed on 2026-07-16; an optional former-hostname migration bridge remains an owner choice, not an implementation defect.

## Claim-to-source ledger

| Public claim | Canonical source | Current public page | Readiness | Gap/action |
| --- | --- | --- | --- | --- |
| Project name is VitaeContext | Product brand contract/package | `/` | Strong | Monitor stale former URLs; keep current links consistent. |
| Tagline is “Keep your career context. Reuse it across AI.” | Product brand contract | `/` H1 | Strong | Keep stable. |
| Project gives agents reusable career context and focused skills | Product README/skills | `/` | Strong | Add one concise canonical definition. |
| Project is open source under MIT | Product package/license | Repository; homepage mentions MIT near CTA | Strong | Add visible license/source fact to design or project summary if needed. |
| Current package is `vitaecontext` 2.0.0 | Product package/changelog | `llms.txt`, CLI hero, changelog, schema | Strong | Ensure release updates are synchronized. |
| Creators/maintainers are Renato Mignone and Elia Innocenti | Product README/site config | `/contact/` | Strong | Keep profiles and roles aligned. |
| Eight runtime skills ship | Product current status/export config | `/skills/`, `llms.txt` | Strong | Keep exact names and counts synchronized. |
| Supported targets are Codex, Claude Code, Gemini CLI, Antigravity, OpenCode, shared | Product provider config | `/providers/`, FAQ | Strong | Keep activation caveats; verify Antigravity live behavior before stronger claims. |
| Current install command is `npx vitaecontext install --provider <provider>` | CLI/product README | `/docs/installation/` | Strong | Keep current package primary. |
| Codex receives `~/.agents/skills/` plus Codex home skill location | Product Codex adapter/runtime | `/providers/` | Improved | Website path corrected in this audit. Verify generated layout. |
| Career Context is user-owned Markdown input | Context Builder/product README | `/`, context example | Strong | Normalize old “agent-context-file” terms. |
| Career Context can be reused outside VitaeContext | Product README | `/docs/usage/` | Strong | Add direct provider-boundary answer. |
| VitaeContext has no backend collecting Career Context | Product privacy/architecture | `/faq/` | Good | Link the repository privacy policy and avoid claims about providers. |
| Files remain private/local | Product privacy model | Multiple pages | Conditional | Always include “until supplied to an external provider.” |
| Skills preserve evidence boundaries | Runtime skill rules | `/`, `/design/`, guides | Good | Publish compact evidence vocabulary and no-independent-verification limitation. |
| VitaeContext prevents hallucinations | Not supportable as an absolute | n/a | Do not use | Say it reduces unsupported-claim risk through context and review; errors remain possible. |
| VitaeGraph is optional deeper layer | Product README/graph spec | `/vitaegraph/` | Strong | Add one concise standalone definition. |
| VitaeGraph stores local Markdown records | Graph spec | `/vitaegraph/` | Strong | Keep record list exact. |
| Generated indexes are deterministic/rebuildable | Graph CLI/spec | `/vitaegraph/`, docs | Strong | Keep exact filenames synchronized with current CLI. |
| Graph validation proves claims | Not supported | n/a | Do not use | State validation checks structure, not real-world authenticity. |
| Skills improve rankings/ATS outcomes/citations | Not supportable | FAQ/disclaimers reject this | Do not use | Preserve no-guarantee language. |
| AgentKit SEO is the former name | Changelog/compatibility package | `/changelog/` | Strong on current domain | Former hostname is 404; cached former HTML may remain temporarily. |
| Old GitHub repo maps to current repo | Live GitHub redirect | External | Strong | Do not reuse old repository name. |
| `llms.txt` improves citations | No reliable project evidence | n/a | Do not use | Describe only as emerging navigation convention. |

## Page readiness

| Page | Retrieval strengths | Citation weakness | Next change |
| --- | --- | --- | --- |
| `/` | Strong H1, compact definition and boundary, static workflow, current entity | Repository-controlled work complete | Monitor extracted answers after deployment. |
| `/docs/usage/` | Concrete workflow, comparisons, privacy handoff, verification boundary, prompts | Repository-controlled work complete | Monitor query-to-page fit. |
| `/docs/context-file-example/` | Fictional example, raw Markdown, exact template command, maintenance path | Repository-controlled work complete | Keep command synchronized with releases. |
| `/vitaegraph/` | Compact definition, graph sample, record/index model, explicit validation boundary | Repository-controlled work complete | Keep schema and command facts synchronized. |
| `/skills/` | Exact inventory, agent-skill definition, provider caveat, install CTA | Repository-controlled work complete | Keep inventory synchronized. |
| Skill pages | Exact invocation, module-specific inputs/method/outputs/limits | Repository-controlled work complete | Preserve runtime intent during content updates. |
| Guides | Deep method, sources, normalized entry terminology, visible snapshot dates | Volatile platform sources still require scheduled review | Follow source review dates. |
| `/design/` | Architecture, evidence vocabulary, package/repository/license/version/maintainer facts | Repository-controlled work complete | Keep entity facts synchronized. |
| `/docs/installation/` | Exact commands | Stale caches may retain obsolete former commands | Update controlled links/listings and monitor stale URLs. |
| `/changelog/` | Factual rename, releases, and exact current site/repo/npm/install destinations | Repository-controlled work complete | Keep the single concise transition current. |
| `/faq/` | Genuine visible answers, current terminology, provider/privacy boundaries, matching JSON-LD | Repository-controlled work complete | Keep answers synchronized. |
| `/profile-optimization/` | Narrow task chooser with contextual inbound link | Repository-controlled work complete | Keep it short and distinct. |
| `llms.txt` | Concise current facts and canonical links | Not a standard citation guarantee; no HTML inbound value | Keep derivative and synchronized. |

## Source quality tiers

Use sources in this order for public factual claims:

1. **Canonical implementation/source:** package metadata, CLI, schemas, runtime skill source, license.
2. **Maintained project documentation:** README, architecture, privacy/security, changelog, current website docs.
3. **Official external documentation:** Google, Bing, OpenAI, GitHub, Schema.org, provider/platform help.
4. **Primary research:** papers for general category context, clearly separated from product proof.
5. **Live result observations:** evidence of language and discoverability at a date, not truth about ranking systems or demand.
6. **Secondary commentary/community posts:** query-language discovery only unless independently verified.

Do not cite project marketing as proof of project outcomes.

## Passage-level readiness checklist

Before publishing or revising an important passage, verify:

- the named entity is unambiguous;
- the first sentence answers the heading;
- qualifiers travel with claims about privacy, evidence, provider support, rankings, ATS, or citations;
- the command, version, path, skill name, record type, or relationship is exact;
- a reader can reach the primary source in one link where practical;
- a fictional example cannot be mistaken for a user/customer;
- dates are attached to volatile facts;
- the passage remains accurate when quoted without the previous section;
- no unsupported metric, adoption number, customer, ranking, or outcome appears;
- the current name is primary and the former name appears only for migration/history.

## Missing evidence

The following should not become public claims until evidence exists:

- search volume, rankings, traffic, conversion, citation share, or adoption;
- user/customer counts or named users;
- recruiter, employer, ATS, or platform outcomes;
- accuracy or hallucination-reduction rates;
- performance benchmarks for the skills or graph retrieval;
- provider behavior not tested or documented, including exact Antigravity command surfacing;
- universal privacy after content is supplied to an AI provider;
- universal parsing behavior across all ATS products;
- `llms.txt` citation or ranking impact.

## External citation blockers

| Blocker | Effect | Resolution | Owner |
| --- | --- | --- | --- |
| Stale former URLs or cached HTML remain | Search or answer systems may repeat obsolete entity names, URLs, or commands despite the origin 404 | Update controlled links/listings and monitor index removal; optionally publish the specified minimal bridge if namespace reclamation succeeds | Project owners |
| Search/webmaster data unavailable | No evidence of query impressions, canonical choice, or index coverage | Review Search Console/Bing properties and export baseline | Site owner |
| Stale owner-controlled listings may exist | External sources can reinforce old identity | Inventory exact-name/domain/command mentions and update high-authority listings | Project owners |
| Stable structured-data IDs absent | Entity connections rely on repeated values | Add one consistent entity graph after visible content alignment | Website implementation |
| Legacy artifact terms in long guides | Extracted passages may name the wrong concept/path | Terminology/source review | Website implementation |
| Current-status file says 1.9.2 while package is 2.0.0 | Internal maintainer evidence conflicts | Update product status document in product repository | Product maintainer |

## Monitoring protocol

Monthly during transition, then quarterly:

1. Search exact current and former names in conventional and generative search.
2. Record returned/cited domains, titles, commands, and entity names.
3. Check the former hostname's origin status, stale cached/indexed URLs, GitHub redirect, npm compatibility page, current homepage, install page, and changelog.
4. Sample the fixed question set in the generative-engine strategy.
5. Compare answers with the canonical entity map.
6. Correct source conflicts before adding more explanatory content.
7. Log observation date, interface, locale, and whether the result was personalized when known.

## Readiness decision

- **Branded/project facts:** ready; monitor stale former-domain caches.
- **Installation and skill queries:** ready, with ongoing release synchronization.
- **VitaeGraph branded/category queries:** ready but would benefit from a shorter definition and validation boundary.
- **Career Context category/comparison queries:** partially ready; improve existing pages before creating a concept page.
- **Privacy/evidence/hallucination queries:** partially ready; limitations must be colocated with claims.
- **Former-name queries:** ready on the current domain; stale former URLs may require monitoring while caches expire.
- **Outcome/recommendation queries:** intentionally unsupported without evidence.
