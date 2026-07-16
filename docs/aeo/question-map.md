# VitaeContext question map

Date: 2026-07-16

Each question has one primary answer page. Supporting pages may add detail but should link back rather than create competing definitions.

| Question | Audience / stage | Canonical page | Answer requirements | Evidence | Priority |
| --- | --- | --- | --- | --- | --- |
| What is VitaeContext? | Everyone / discovery | `/` | Category, user-owned Career Context, focused skills, grounded work, open-source status, limitation. | Product brand contract and README. | High |
| What problem does VitaeContext solve? | Users / discovery | `/` | Scattered/stale career information, repeated explanation, unsupported claim drift; context-first response. | Product README and homepage workflow. | High |
| Who is VitaeContext for? | Users/developers / evaluation | `/` | Developers, people maintaining career information, career-document/profile users, agent users, evidence/privacy-sensitive users. | Product README and skills. | High |
| Is VitaeContext a résumé builder or job-application agent? | Evaluators / comparison | `/docs/usage/` | No; it prepares context and methods that can support downstream systems/tasks. | Product brand contract. | High |
| What is Career Context? | Users/agents / discovery | `/` | User-owned maintained artifact; contents and role as input. | Context Builder spec and product README. | High |
| What goes inside Career Context? | Users/agents / consideration | `/docs/context-file-example/` | Facts, roles, projects, skills, evidence, goals, constraints, claims to avoid; fictional example notice. | Sample context and builder references. | High |
| How do I create Career Context? | Users/agents / action | `/playbooks/context-builder/` | Gather trusted material, invoke builder, choose private path, review, maintain. | `vitaecontext-build` skill and CLI template command. | High |
| How is Career Context different from a résumé or CV? | Users / comparison | `/docs/usage/` | Maintained broad input versus selective task output. | Product workflow. | High |
| How is Career Context different from LinkedIn or a portfolio? | Users / comparison | `/docs/usage/` | Private source versus public surface; same facts can be adapted without identical copy. | Product workflow and focused skills. | Medium |
| How is Career Context different from AI memory? | Users/developers / comparison | `/docs/usage/` | Inspectable portable user file versus provider-specific feature; no universal provider behavior. | Product architecture and provider boundary. | High |
| Can I use Career Context outside VitaeContext? | Users / evaluation | `/docs/usage/` | Yes, with systems accepting supplied context; explain review and provider boundary. | Product README. | High |
| Is Career Context private? | Privacy-sensitive users / evaluation | `/docs/usage/` | Local/user-controlled until shared; no backend; external provider rules after handoff. | Product privacy policy and architecture. | High |
| Does VitaeContext collect career data? | Privacy-sensitive users / evaluation | `/faq/` | Project has local CLI/Markdown and no backend collection; avoid claims about provider behavior. | Product privacy policy. | High |
| Does VitaeContext verify my claims? | Users / risk evaluation | `/docs/usage/` | No independent verification; structures supplied facts/evidence and flags gaps. | Brand contract and skills. | High |
| How does VitaeContext reduce AI hallucinations? | Users/agents / problem solving | `/playbooks/context-builder/` | Supplied facts, stated intent, evidence boundaries, claims to avoid, review; no “hallucination-proof” claim. | Context Builder and module self-review rules. | High |
| What does “grounded” mean here? | Users/agents / education | `/design/` | Output traces to supplied or accessible evidence and labels inference/uncertainty. | Design and skill evidence model. | High |
| How is provenance represented? | Technical/evidence users / evaluation | `/design/` | Source groups, supplied facts, proof links, confidence/boundary labels; no evidence nodes in VitaeGraph. | Design, context spec, graph rules. | High |
| What is VitaeGraph? | Everyone / discovery | `/vitaegraph/` | Optional deeper local Markdown record layer, record types, relationships, rebuildable indexes. | VitaeGraph spec. | High |
| When should I use VitaeGraph instead of one context file? | Users/agents / comparison | `/vitaegraph/` | Use compact file for repeated fast facts; graph for detailed connected records and selective retrieval. | Product README and graph spec. | High |
| Is VitaeGraph a database? | Technical users / comparison | `/vitaegraph/` | Markdown is canonical; JSON indexes are generated/rebuildable; clarify local filesystem model. | Graph model. | Medium |
| Does VitaeGraph prove a career claim is true? | Evidence-sensitive users / risk | `/vitaegraph/` | No; validation checks structure/links/IDs, not real-world authenticity. | Graph rules. | High |
| Which records can VitaeGraph store? | Users/agents / consideration | `/vitaegraph/` | Education, thesis, courses, projects, experience, certifications, awards, publications. | Graph schema and skill. | Medium |
| What do `contains` and `related to` mean? | Technical users/agents / education | `/vitaegraph/` | Parent-child hierarchy versus non-hierarchical connection, with examples. | Graph model and visual labels. | Medium |
| How do I create or validate VitaeGraph? | Developers/agents / action | `/docs/cli/` | Exact `graph init`, `validate`, `index`, optional root behavior, no-force safety boundary. | CLI and graph skill. | High |
| Which agent skills ship with VitaeContext? | Developers/agents / consideration | `/skills/` | Exact eight-skill inventory and distinction between router/context/graph/platform modules. | Package/current status. | High |
| What is an agent skill? | Developers/users / education | `/skills/` | Packaged runtime instructions, references, maintained knowledge; differs from human guide. | Package architecture. | High |
| What is the difference between a skill and a guide? | Users/developers / navigation | `/faq/` | Skill is installed runtime package; guide is readable method with no install. | Site information architecture. | High |
| Which skill should I use? | Agent users / routing | `/skills/vitaecontext/` | Route broad request to one focused module; exact triggers. | Root runtime skill. | Medium |
| How do I install VitaeContext? | Developers / action | `/docs/installation/` | Current npm command, provider value, doctor verification, no unsupported default. | Product CLI. | High |
| Which providers are supported? | Developers / comparison | `/providers/` | Codex, Claude Code, Gemini CLI, Antigravity, OpenCode, shared; install/activation differences. | Export config and current status. | High |
| Does every skill work the same in every provider? | Developers / risk | `/providers/` | No; shared source but provider installation/activation varies and exact runtime behavior may differ. | Provider docs and brand constraints. | High |
| What are the main CLI commands? | Developers / lookup | `/docs/cli/` | Version, update, doctor, list, template, graph, install, uninstall, export. | CLI source/current status. | High |
| How do I uninstall VitaeContext? | Developers / action | `/docs/cli/` | Manifest-driven command, same destination flags, dry-run option. | CLI source. | Medium |
| Is VitaeContext affiliated with LinkedIn, GitHub, X, or an AI provider? | Users / trust | `/faq/` | No; trademarks belong to owners; independent project. | Site disclaimer. | Medium |
| Does VitaeContext guarantee ATS scores, search rankings, recruiter attention, or AI citations? | Users / risk | `/faq/` | Explicit no; eligibility/readability and prioritization only. | Brand contract and scorecard rules. | High |
| Who created and maintains VitaeContext? | Evaluators/contributors / trust | `/contact/` | Renato Mignone and Elia Innocenti; links to public profiles and repository. | Site config and product README. | High |
| What license does VitaeContext use? | Developers / evaluation | `/design/` | MIT license, with source link. | Product `LICENSE` and package metadata. | Medium |
| What happened to AgentKit SEO? | Former users/search systems / migration | `/changelog/` | Former name, broader direction, current package/repo/site, compatibility alias. | 2.0.0 changelog and compatibility package. | High |
| Can I still run `agentkit-seo`? | Former users / migration | `/changelog/` | Deprecated compatibility entry forwards to current CLI; recommend current command. | Compatibility package source. | High |
| Where should old AgentKit SEO links point? | Owners/external maintainers / migration | `/changelog/`; optional former-hostname migration page | Update controlled links to exact current destinations. If the namespace is reclaimed, the minimal old-host page should refresh and visibly link to the current homepage. | Current canonical URLs and former-hostname 404 check. | High |
| How should I measure whether discovery improves? | Maintainers / measurement | `docs/seo/measurement-plan.md` (repository documentation) | Search Console/Bing/analytics/referrer/prompt sampling; no guaranteed attribution. | Official platform measurement docs. | Medium |

## Writing rules for these answers

- Put the direct response before background.
- Use one current term for each entity.
- Include a limitation when the answer concerns privacy, evidence, provider behavior, rankings, ATS, or citations.
- Link detailed procedures instead of expanding every answer into a full guide.
- Keep volatile facts dated and sourced.
- Never transform goals, inference, inaccessible content, or needs-evidence claims into verified experience.
- Do not multiply this table into dozens of public FAQ entries. It is a routing and editorial tool.
