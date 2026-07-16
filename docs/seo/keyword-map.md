# VitaeContext qualitative keyword and intent map

Research date: 2026-07-16

This map organizes query opportunities without inventing volume, traffic, ranking, or conversion estimates. **Priority** reflects strategic fit and the importance of a clear canonical answer. **Confidence** reflects how strongly repository facts and the live-result sample support the language and intent.

## Research observations

- Exact searches for VitaeContext already surface current project pages, but broad “career context for AI agents” language is noisy and often interpreted as careers *in* AI agents rather than personal career information supplied *to* agents. Copy needs the qualifiers “a person's career,” “career information,” “Career Context,” and concrete downstream tasks.
- Live results use several adjacent terms: “career knowledge graph,” “Career Identity Graph,” “career vault,” “master career profile,” “multi-source résumé tailoring,” “provenance tracking,” “anti-hallucination guardrails,” “AI agent skills,” and “reusable context.” VitaeContext should explain its own model using plain terms and use those adjacent terms only where they accurately map to product behavior.
- “Agent skills” is now a recognizable technical phrase for reusable instruction/workflow packages. The project should pair it with exact task nouns—résumé, CV, LinkedIn, GitHub, portfolio—rather than assume the phrase alone describes the product.
- Résumé/ATS result sets are crowded with builders, scorers, auto-apply systems, and strong outcome claims. VitaeContext is better differentiated as the context and evidence layer before those tools, not as another résumé builder or autonomous job-application service.
- “Career knowledge graph” is an active category phrase in products and recent research. `/vitaegraph/` can own the project-specific definition while clearly stating that Markdown remains canonical and indexes are rebuildable.
- Former-name results or crawler caches may temporarily surface HTML previously served by `agentkit-seo.github.io`, but the hostname returned GitHub's platform-level 404 when checked at the origin on 2026-07-16. Do not interpret cached copies as an active competing site or fill the current homepage with legacy wording.
- “Private” and “local” need careful qualification. The files are local and controlled by the user until the user supplies them to a provider; VitaeContext cannot determine how an external provider then handles the content.

## Cluster map

| Cluster | Representative queries | Audience / intent | Canonical target | Priority | Confidence | Content direction |
| --- | --- | --- | --- | --- | --- | --- |
| VitaeContext brand | VitaeContext; Vitae Context; what is VitaeContext; VitaeContext career context | All audiences; navigational and definitional | `/` | High | High | Lead with the canonical definition, tagline, category, limitations, and current identity. |
| Brand + source | VitaeContext GitHub; VitaeContext open source; VitaeContext license; who maintains VitaeContext | Developers/evaluators; source and trust | `/design/` with direct repository links; `/contact/` for maintainers | High | High | Keep repository, MIT license, architecture, maintainers, and public source easy to verify. |
| Brand + install | install VitaeContext; VitaeContext npm; npx vitaecontext; VitaeContext Codex/Claude/Gemini | Developers/agent users; transactional setup | `/docs/installation/` | High | High | Exact commands, supported targets, privacy boundary, and links to provider details. |
| Brand + commands | VitaeContext CLI; vitaecontext doctor; vitaecontext graph init; vitaecontext uninstall | Developers; command lookup | `/docs/cli/` | High | High | Exact command reference; avoid duplicating full command docs elsewhere. |
| Brand + skills | VitaeContext agent skills; VitaeContext skills; career skills for Codex | Developers/agent users; module discovery | `/skills/` | High | High | Explain what a skill is, list all eight, distinguish runtime skills from guides. |
| VitaeGraph brand | VitaeGraph; what is VitaeGraph; VitaeGraph career graph | Users/developers/agents; definition and evaluation | `/vitaegraph/` | High | High | Own the concise definition, record model, relationship model, privacy, and limitations. |
| VitaeGraph setup | install VitaeGraph; VitaeGraph CLI; create/validate/index VitaeGraph | Developers/agents; setup and operation | `/skills/vitaegraph/` for skill selection, `/docs/cli/` for command lookup | High | High | Link exact task intent to one of these pages; avoid making the product overview a command manual. |
| Career knowledge graph | career knowledge graph; personal career knowledge graph; Markdown career knowledge graph; structured career history for AI agents | Technical users; category education/comparison | `/vitaegraph/` | High | High | Define how VitaeGraph differs from a flat résumé, generic graph database, and generated index. |
| AgentKit SEO legacy | AgentKit SEO; AgentKit SEO GitHub; AgentKit SEO renamed; what happened to AgentKit SEO | Former users; migration/navigational | `/changelog/`; optional former-hostname migration page only if the namespace is reclaimed | High | High | One concise “now VitaeContext” explanation; exact current links; do not treat both as active brands. |
| Career context category | career context for AI; career context for AI agents; AI career context file; career source of truth for AI | Users and agents; problem/solution education | `/` | High | Medium | Define “Career Context” as the user-owned artifact and use concrete examples to disambiguate from careers in AI. |
| Portable/reusable career information | portable career context; reusable career information for AI; reuse career history across AI; master career profile for AI | Users; portability and repeat-use problem | `/docs/usage/` | High | Medium | Explain file portability, repeated task reuse, provider independence, and review boundary. |
| Private/local career context | private career context; local career profile for AI; keep career data private with AI | Privacy-sensitive users; risk and control | `/docs/usage/` with FAQ support | High | Medium | State what stays local, when data leaves user control, no backend behavior, and provider-policy boundary. |
| Context-file example | career context file example; AI career context template; structured career history Markdown template | Users/agents; example and implementation | `/docs/context-file-example/` | High | High | Keep the example fictional, annotated, directly retrievable, and linked to creation commands. |
| Grounded career workflows | grounded AI career workflow; evidence-based AI résumé; factual AI career documents; career source of truth | Users/agents; problem/solution | `/docs/usage/` | High | Medium | Show inputs → Career Context → one focused method → human review. Avoid claims of automatic verification. |
| Hallucination prevention | prevent AI hallucinations in résumé writing; stop ChatGPT inventing resume facts; factual AI CV; anti-hallucination resume workflow | Job seekers/agents; risk mitigation | `/playbooks/context-builder/` with `/docs/usage/` | High | Medium | Answer with evidence boundaries, claims to avoid, missing-evidence flags, and human review—not “hallucination-proof.” |
| Evidence and provenance | provenance in AI-generated career documents; source-backed resume generation; evidence tracking for career records | Technical/evidence-sensitive users; evaluation and method | `/design/` | High | Medium | Explain verified facts, stated intent, source material, inference boundaries, and project limits. Do not claim independent fact verification. |
| Career Context vs résumé | career context vs resume; career context vs CV; master career record vs tailored resume | Users; comparison/education | `/docs/usage/` | High | Medium | Career Context is a maintained input; a résumé/CV is a selective output for a role. |
| Career Context vs AI memory | career context vs AI memory; personal AI memory for job search; how to give AI my career history | Users/developers; comparison/how-to | `/docs/usage/` | High | Medium | Compare inspectable user-owned Markdown with provider memory; do not claim all provider memory behaves the same. |
| Agent skills category | what are AI agent skills; reusable agent skills for career work; career agent skill package | Developers/agents; category education | `/skills/` | Medium | High | Define skills as packaged instructions/references; show installation and exact invocation names. |
| Résumé/CV skill | resume agent skill; CV optimization agent skill; ATS resume agent; ATS-safe resume skill | Job seekers/agents; task and install | `/skills/cv-ats/` | High | High | Runtime use case, evidence boundary, ATS-safe structure, expected outputs; no guaranteed ATS score. |
| Résumé/CV guide | how to tailor a resume with AI without inventing facts; ATS-safe CV format; resume keyword strategy | Job seekers; educational | `/playbooks/cv-ats/` | High | High | Human-readable method and sources; link to installable skill. |
| LinkedIn skill | LinkedIn optimization agent skill; AI agent for LinkedIn profile; LinkedIn headline skill | Professionals/agents; task and install | `/skills/linkedin/` | High | High | Exact invocation, context needed, sections covered, and limitations. |
| LinkedIn guide | LinkedIn profile optimization; evidence-backed LinkedIn About; LinkedIn profile search clarity | Professionals; educational | `/playbooks/linkedin/` | Medium | High | Human method; distinguish documented behavior from inference. |
| GitHub skill | GitHub profile optimization agent; GitHub SEO agent skill; Codex skill for GitHub profile | Developers/agents; task and install | `/skills/github/` | High | High | Profile/repository audit, fetcher boundary, exact outputs. |
| GitHub guide | GitHub profile SEO; repository README optimization; GitHub profile for job search | Developers; educational | `/playbooks/github/` | Medium | High | Human method and proof-of-work framing; no ranking guarantee. |
| Portfolio skill | portfolio SEO agent skill; optimize developer portfolio for search; AI-readable portfolio skill | Developers/agents; task and install | `/skills/web-portfolio/` | High | High | Crawlability, metadata, structured data, rendering, performance, and code-edit scope. |
| Portfolio guide | personal website SEO; developer portfolio indexing; portfolio structured data | Developers; educational | `/playbooks/web-portfolio/` | Medium | High | Primary-source technical guidance and human-readable implementation method. |
| X/Twitter skill | X profile optimization agent skill; Twitter bio agent skill; pinned post skill | Creators/agents; task and install | `/skills/x-twitter/` | Medium | High | Exact runtime use, current-source requirement, and no reach promise. |
| Provider selection | VitaeContext supported providers; install career skills in Codex/Claude Code/Gemini/OpenCode | Developers; comparison and setup | `/providers/` | High | High | Compare install shape, path, invocation, and caveats; route commands to install/CLI docs. |
| Comparison with downstream tools | career context vs resume builder; context layer before job application agent; VitaeContext alternative to AI memory | Evaluators; category comparison | `/docs/usage/` initially | Medium | Medium | Compare layers and jobs-to-be-done, not named competitors, unless a factual comparison can be maintained. |
| Agent-readable/project architecture | career context architecture; progressive disclosure agent skills; career knowledge graph for LLM agents | Agent developers; technical education | `/design/` and `/playbooks/vitaecontext/` | Medium | High | Stable architecture facts, scoped loading, source boundaries, and versioned knowledge. |

## Priority interpretation

- **High:** central to the project entity, a shipped capability, a current migration risk, or a direct setup/task query with a clear canonical answer.
- **Medium:** relevant and supported, but narrower, more competitive, or better served after core pages are clearer.
- **Low:** not currently targeted. Low does not mean low search volume; no volume evidence is available.

## Terms to use carefully

| Term | Use | Avoid |
| --- | --- | --- |
| Career Context | The user-owned, maintained artifact. Capitalize when naming the product concept. | Calling the artifact “VitaeContext.” |
| VitaeContext | The current product/package/project. | Persistent `VitaeContext / AgentKit SEO` co-branding. |
| VitaeGraph | Optional deeper local Markdown record layer within VitaeContext. | Calling it a blockchain, external database, proof system, or independently verified graph. |
| Private / local | Files remain in locations the user controls until supplied elsewhere. | Suggesting content remains private after it is given to an external provider. |
| Evidence-bounded / grounded | Agent instructions preserve supplied facts, separate intent, and flag gaps. | “Verified by VitaeContext,” “hallucination-proof,” or guaranteed factual output. |
| ATS-safe / parser-friendly | Conservative document structure and terminology guidance. | Guaranteed ATS score, ranking, interview, or recruiter outcome. |
| Agent skill | Installable runtime instructions and references. | Claiming every skill works identically in every provider. |
| `llms.txt` | Emerging, low-cost navigation convention. | Standard ranking factor or guaranteed AI citation mechanism. |

## Sources

Accessed 2026-07-16:

- Live results for the query seeds listed in the execution objective.
- [Google AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a).
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq).
- [Career-Aware Resume Tailoring via Multi-Source Retrieval-Augmented Generation with Provenance Tracking](https://arxiv.org/abs/2605.05257).
- [CareerPathKG: Knowledge Graph Integrated Framework for Career Intelligence](https://aclanthology.org/2026.eacl-industry.60/).
- The canonical product repository and public website route inventory.
