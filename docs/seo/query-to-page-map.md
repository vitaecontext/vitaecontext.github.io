# VitaeContext query-to-page map

Date: 2026-07-16

This document assigns one canonical target to each important intent. A secondary page may support the answer through a contextual link, but it should not repeat the same primary proposition.

## Canonical assignment

| Intent cluster | Canonical target | Current fit | Required improvement | Supporting links | Primary next action |
| --- | --- | --- | --- | --- | --- |
| What is VitaeContext? | `/` | Suitable | Add one concise extractable definition near the top; preserve current brand and category language. | `/docs/usage/`, `/design/`, repository | View how it works or install. |
| VitaeContext brand/navigation | `/` | Suitable | Keep title, H1, description, entity links, and current name stable. | All primary hubs | Choose a next task. |
| VitaeContext source, architecture, license | `/design/` | Suitable | Add compact package/repository/license/version facts and stable entity links. | Repository, `/contact/`, `/changelog/` | Inspect source. |
| VitaeContext maintainers/creators | `/contact/` | Suitable | Keep names and public profiles explicit; align with project metadata. | `/design/`, repository | Open a profile or repository issue. |
| Install VitaeContext | `/docs/installation/` | Suitable | Keep exact current commands and verification step; add a short compatibility note only if migration users need it. | `/providers/`, `/docs/cli/` | Run the provider-specific install. |
| Supported agent providers | `/providers/` | Suitable | Clarify that install/activation behavior varies and not every provider behaves identically. | `/docs/installation/`, `/docs/usage/` | Select a provider. |
| VitaeContext CLI commands | `/docs/cli/` | Suitable | Keep synchronized with the generated 2.1.0 product contract and link each command group to its conceptual guide. | `/docs/installation/`, `/vitaegraph/` | Copy a command. |
| VitaeContext agent skills | `/skills/` | Suitable | Define “agent skill,” preserve eight-skill inventory, and make skill versus guide distinction answer-first. | `/playbooks/`, `/docs/installation/` | Select/install a skill. |
| What is Career Context for AI? | `/` | Suitable but incomplete | Add a direct definition, ownership, content, and portability boundary; disambiguate from “career in AI.” | `/docs/usage/`, `/docs/context-file-example/` | Inspect the example. |
| How to create a Career Context file | `/playbooks/context-builder/` | Suitable | Normalize canonical terminology and use a short ordered method before the long reference. | `/skills/context-builder/`, `/docs/context-file-example/`, `/docs/cli/` | Install the skill or create the template. |
| Career Context example/template | `/docs/context-file-example/` | Strong | Keep fictional labeling; add exact template command and maintenance link if absent. | Raw Markdown, context-builder guide, usage | Create a private template. |
| Portable/reusable career information | `/docs/usage/` | Suitable | Explain portability across accepting systems and the provider handoff boundary. | `/`, context example, FAQ | Apply the workflow to one task. |
| Private career context / provider boundary | `/docs/usage/` | Suitable but needs stronger answer | State local-before-sharing behavior, no backend, and external provider policies in one visible section. | `/faq/`, product privacy file | Review privacy before sharing. |
| Career Context versus résumé/CV | `/docs/usage/` | Suitable but missing explicit comparison | Add a small comparison: maintained input versus selective task output. | `/playbooks/cv-ats/`, context example | Build context before tailoring a CV. |
| Career Context versus provider memory | `/docs/usage/` | Suitable but missing explicit comparison | Explain inspectable user-owned file versus provider-specific memory; avoid universal provider claims. | `/design/`, FAQ | Keep/update the file. |
| Grounded AI career workflow | `/docs/usage/` | Strong | Use an answer-first four-step sequence and explicit review limitations. | `/design/`, skills | Choose a focused skill. |
| Prevent invented résumé/CV facts | `/playbooks/context-builder/` | Suitable | Add a concise problem/answer section on evidence boundaries and “claims to avoid”; avoid “hallucination-proof.” | `/docs/usage/`, CV guide | Create or update Career Context. |
| Evidence/provenance model | `/design/` | Suitable | Define source, supported fact, stated goal, inference, inaccessible material, and needs-evidence claim. | `/docs/usage/`, context example | Inspect architecture/source. |
| What is VitaeGraph? | `/vitaegraph/` | Strong | Add one quotable definition and a short “not a résumé / not independent verification” boundary. | `/skills/vitaegraph/`, `/playbooks/vitaegraph/` | Choose whether deeper records are needed. |
| Career knowledge graph / Markdown career graph | `/vitaegraph/` | Strong | Explain record types, `contains`, `related to`, Markdown canonical source, and generated indexes. | VitaeGraph guide, CLI | Explore the record model. |
| Build/maintain a VitaeGraph | `/playbooks/vitaegraph/` | Suitable | Lead with create/deepen/maintain/validate/index/retrieve/migrate choices. | `/skills/vitaegraph/`, `/docs/cli/` | Install/invoke the skill. |
| VitaeGraph agent skill | `/skills/vitaegraph/` | Strong | Keep exact invocation and expected outputs; link product definition and human method. | `/vitaegraph/`, guide, install | Install the skill. |
| VitaeGraph commands | `/docs/cli/` | Strong | Keep `init`, `validate`, and `index` exact and link back to privacy/record model. | `/vitaegraph/` | Copy command. |
| ATS résumé/CV agent skill | `/skills/cv-ats/` | Strong | Add context requirements, limitations, and runtime-specific output examples. | CV guide, installation | Install/invoke `vitaecontext-cv`. |
| ATS/CV educational method | `/playbooks/cv-ats/` | Strong | Preserve parser-safe and human-readable framing; remove unsupported outcome language if found. | Skill page, context guide | Use skill or follow guide. |
| LinkedIn agent skill | `/skills/linkedin/` | Strong | Keep exact scope and evidence boundary; distinguish official platform guidance from inference. | Guide, installation | Install/invoke skill. |
| LinkedIn optimization guide | `/playbooks/linkedin/` | Strong | Review volatile platform claims/source dates during implementation. | Skill page | Read method or use skill. |
| GitHub profile/repository agent skill | `/skills/github/` | Strong | Explain tokenless public fetcher boundary and selected output. | Guide, installation | Install/invoke skill. |
| GitHub optimization guide | `/playbooks/github/` | Strong | Keep proof-of-work and discoverability claims conservative. | Skill page | Read method or use skill. |
| Portfolio SEO agent skill | `/skills/web-portfolio/` | Strong | Keep technical audit scope and mutation authority explicit. | Guide, installation | Install/invoke skill. |
| Portfolio SEO/indexing guide | `/playbooks/web-portfolio/` | Strong | Normalize old product examples and review volatile AI-discovery claims against current primary guidance. | Skill page | Follow guide or use skill. |
| X/Twitter agent skill | `/skills/x-twitter/` | Suitable | Keep provider/current-source caveats and no-reach promise. | Guide, installation | Install/invoke skill. |
| X/Twitter optimization guide | `/playbooks/x-twitter/` | Suitable | Refresh volatile product limits and ranking claims from official sources before broader promotion. | Skill page | Read method or use skill. |
| Root skill routing/progressive disclosure | `/skills/vitaecontext/` | Suitable | Simplify repetitive title and clarify when to invoke root versus focused module. | `/playbooks/vitaecontext/`, skills catalog | Invoke the root router. |
| Human skill-routing method | `/playbooks/vitaecontext/` | Niche but valid | Prevent it from becoming another general “what is VitaeContext” page. | Root skill, design | Choose a module. |
| AgentKit SEO renamed / migration | `/changelog/` | Suitable current-domain authority | Keep one concise factual section with current repository, package, and install links. | Compatibility package; optional former-hostname migration page | Move to current install docs. |
| AgentKit SEO old install commands | `/changelog/` and current installation docs | Former hostname currently returns GitHub's platform-level 404; stale caches may still show old commands | Keep current destinations explicit. Optionally add a minimal migration page only if the namespace is reclaimed. | Current install, changelog, repository | Use VitaeContext. |
| Broad career/profile task chooser | `/profile-optimization/` only if retained | Weak/orphaned | Preferred: merge useful routing into `/skills/` or `/docs/usage/` and redirect. Alternative: assign distinct task-chooser intent and add HTML inbound link. | Skills, guides, usage | Choose skill or guide. |

## Competing intents and resolution rules

### Homepage versus usage guide

- Homepage: category, problem, concise definition, audience, primary workflow, trust boundary, first next step.
- Usage guide: full sequence, file handoff, provider boundary, comparison answers, review behavior, example prompts.
- Do not duplicate the same long narrative on both.

### VitaeGraph product versus skill versus guide

- `/vitaegraph/`: “what it is, why it exists, how records and relationships work.”
- `/skills/vitaegraph/`: “install and invoke the runtime skill; what it returns.”
- `/playbooks/vitaegraph/`: “human-readable create/maintain/validate method.”
- `/docs/cli/`: exact commands and flags.

### Skills versus guides

- `/skills/<slug>/`: installable artifact, invocation name, provider use, inputs, outputs, limitations.
- `/playbooks/<slug>/`: human method, sources, examples, rules, anti-patterns.
- Each pair links to the other with descriptive text. Avoid identical introductions longer than a short shared definition.

### Installation versus providers versus CLI

- Installation: recommended setup sequence.
- Providers: environment comparison and provider-specific path/invocation.
- CLI: command reference.

### Current versus former brand

- Current homepage and hubs: VitaeContext only.
- Current changelog: one factual transition record.
- Product README and compatibility package: concise migration/compatibility explanation.
- Former hostname: legitimate 404 today; optional minimal migration page only if the namespace is reclaimed.
- Do not add former-name badges, headings, or repeated footer text to current public pages.

## Internal-link implementation map

| From | To | Suggested contextual anchor/purpose |
| --- | --- | --- |
| `/` | `/docs/usage/` | “See how Career Context grounds a task.” |
| `/` | `/docs/context-file-example/` | “Inspect a fictional Career Context example.” |
| `/` | `/design/` | “How evidence and task methods stay separate.” |
| `/docs/usage/` | `/playbooks/context-builder/` | “Build and maintain Career Context.” |
| `/docs/usage/` | `/faq/` | “Privacy and provider boundaries.” |
| `/docs/context-file-example/` | `/docs/cli/` | “Create the template with the CLI.” |
| `/design/` | `/contact/` | “Creators and maintainers.” |
| `/design/` | Repository | “Inspect the canonical implementation.” |
| `/vitaegraph/` | `/skills/vitaegraph/` | “Use the VitaeGraph agent skill.” |
| `/vitaegraph/` | `/playbooks/vitaegraph/` | “Read the record workflow.” |
| `/vitaegraph/` | `/docs/cli/` | “Run graph commands.” |
| Each skill page | Matching guide | “Read the method without installing.” |
| Each guide | Matching skill | “Use this as an installed agent skill.” |
| `/changelog/` transition entry | `/docs/installation/` | “Use current VitaeContext installation.” |
| Optional former-hostname migration page | `/` | Zero-second refresh, current canonical, visible explanation, and visible current-site link; do not recreate former docs. |

## Genuinely missing content

No new page is immediately required in this strategy phase. The missing *answers* can first be added to existing canonical pages:

- one compact “What is Career Context?” definition;
- Career Context versus résumé and provider memory;
- an explicit privacy handoff boundary;
- an evidence/provenance vocabulary;
- one concise “What VitaeGraph is not” boundary;
- a current-domain migration link set inside the existing changelog entry.

After those improvements, evaluate whether a distinct `/career-context/` reference page is justified. Create it only if the combined definition, comparison, privacy, maintenance, example, and evidence material becomes substantial enough that `/` and `/docs/usage/` cannot serve it cleanly. If created, it must become the single canonical educational target and the nearby pages must shorten their competing copy.

## Pages that should not be created

- keyword-variant pages for “career context for AI,” “career context for AI agents,” “private career context,” “portable career context,” or “reusable career information”;
- separate “AgentKit SEO renamed,” “AgentKit SEO GitHub,” and “AgentKit SEO install” pages on the current domain;
- one landing page for every provider plus one for every skill/provider combination;
- generic competitor or “best tool” pages without a maintained factual comparison method;
- speculative FAQ pages written only for schema;
- pages promising ATS scores, rankings, recruiter attention, indexing, citations, or job outcomes.

## Implementation sequence

1. Keep the existing concise changelog transition and exact current links; optionally add the specified minimal former-hostname page only if the namespace is reclaimed.
2. Resolve `/profile-optimization/` as merge/redirect or linked task chooser.
3. Improve homepage and usage answers without changing the site’s broad positioning.
4. Normalize Career Context terminology in FAQ and imported guide content.
5. Strengthen VitaeGraph product/skill/guide separation.
6. Standardize skill/guide cross-links and concise introductions.
7. Add stable structured-data entity IDs after visible content and entity facts are aligned.
8. Add deterministic generated-output validation before broad route changes.
