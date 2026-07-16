# VitaeContext answer-engine strategy

Date: 2026-07-16

## Objective

Make the current public pages easy to extract, quote, and use as accurate answers without creating repetitive FAQ blocks or implying that any answer engine will cite them. Answer-engine optimization here means clear questions, direct factual answers, stable terminology, visible limitations, and links to deeper evidence.

Google states that no special AI schema, machine-readable file, or extra technical requirement is needed for its AI Search features beyond ordinary Search eligibility. Bing similarly connects grounding eligibility to core discovery, indexation, content clarity, and trust. The strategy therefore starts with indexable HTML and coherent answers, not speculative markup.

## Answer contract

Every important answer should contain, in this order:

1. **Direct answer:** one or two sentences that can stand alone.
2. **Boundary:** what the project does not do or what condition changes the answer.
3. **Mechanism or example:** the concrete file, command, record, relationship, or workflow involved.
4. **Evidence path:** link to the canonical page, source repository, command reference, example, or maintained guide.
5. **Next action:** the smallest useful step for that intent.

Answers should use the source labels already inherent in the product model:

- **Verified project fact:** confirmed by current package/source.
- **Supplied career fact:** present in user-provided material; not independently verified by VitaeContext.
- **Stated intent:** a goal or target, kept separate from experience.
- **Inference:** a recommendation derived from available material.
- **Needs evidence:** a stronger claim the available material cannot support.
- **Inaccessible:** a source or provider state that could not be inspected.

These labels need not appear mechanically in every paragraph. They should be visible where extraction could otherwise turn a conditional statement into a fact.

## Canonical short answers

These are strategy drafts for later page implementation, not a mandate to duplicate them verbatim across the site.

### What is VitaeContext?

VitaeContext is open-source career-context infrastructure for AI agents and career systems. It helps a person maintain private, reusable Career Context in Markdown, then provides focused agent skills for turning that supplied context into grounded professional work.

Boundary: VitaeContext does not independently verify every career claim and does not guarantee rankings, ATS scores, recruiter attention, citations, or career outcomes.

Canonical page: `/`.

### What is Career Context?

Career Context is a user-owned, maintained record of career facts, stated goals, projects, evidence links, constraints, and claims to avoid. An agent reads it before producing a task-specific CV, profile, portfolio, application answer, message, or interview draft.

Boundary: the file can remain local, but once a user supplies it to an external AI provider, that provider’s data rules apply.

Canonical page: `/`, with full workflow on `/docs/usage/` and example on `/docs/context-file-example/`.

### How is Career Context different from a résumé or CV?

Career Context is the maintained input: it can contain more history, evidence, goals, and constraints than any one document. A résumé or CV is a selective output tailored to a role and audience.

Canonical page: `/docs/usage/`.

### How is Career Context different from AI memory?

Career Context is an inspectable file the user owns and can move between systems. Provider memory is an external product feature whose storage, retrieval, and privacy behavior varies by provider.

Boundary: VitaeContext does not make every provider behave the same and cannot preserve local privacy after content is shared with one.

Canonical page: `/docs/usage/`.

### What is VitaeGraph?

VitaeGraph is VitaeContext’s optional deeper layer for detailed career material. It stores projects, roles, education, courses, thesis work, certifications, awards, and publications as connected local Markdown records; generated JSON indexes are deterministic and rebuildable.

Boundary: generated indexes help navigation and retrieval; they do not authenticate the real-world truth of a claim.

Canonical page: `/vitaegraph/`.

### How does VitaeContext reduce invented career claims?

VitaeContext gives an agent explicit supplied facts, stated goals, evidence boundaries, and claims to avoid before drafting. Its skills instruct the agent to preserve supported claims and flag missing evidence instead of strengthening unsupported copy.

Boundary: this is a grounding and review method, not automatic independent fact-checking or a guarantee that a model cannot make an error.

Canonical page: `/docs/usage/` or `/playbooks/context-builder/`, depending on whether the question is conceptual or procedural.

### Is VitaeContext private?

The package is a local CLI and readable Markdown skill set with no project backend for collecting Career Context. The user chooses where files live and what to supply to an agent.

Boundary: external providers govern content after it is shared with them.

Canonical page: `/docs/usage/`, supported by `/faq/` and the repository privacy document.

### What agent skills are included?

VitaeContext ships eight runtime skills: a root router, Context Builder, VitaeGraph, CV/ATS, GitHub, LinkedIn, web portfolio, and X/Twitter. Provider installation and activation vary, while the shared skill names and source remain stable.

Canonical page: `/skills/`.

### How do I install VitaeContext?

Install the current package for one provider with `npx vitaecontext install --provider <provider>`, then run `npx vitaecontext doctor` to inspect the installation. Supported targets and provider-specific invocation are listed in the installation and provider references.

Canonical page: `/docs/installation/`.

### What happened to AgentKit SEO?

AgentKit SEO was the former name of VitaeContext. The project expanded beyond profile SEO into reusable career-context infrastructure; the deprecated `agentkit-seo` package remains only as a compatibility entry point.

Canonical page: `/changelog/`. The former hostname currently returns GitHub's platform-level 404. If its organization namespace can be reclaimed, it may optionally provide only a minimal migration bridge; stale crawler or answer-engine caches may retain former HTML temporarily.

## Page-level answer design

| Page | First answer to make extractable | Supporting answer shapes |
| --- | --- | --- |
| `/` | What is VitaeContext and what problem does it solve? | Four-step flow; audience; limitations; Career Context definition. |
| `/docs/usage/` | How does Career Context move through a task? | Ordered steps; context-vs-résumé comparison; privacy handoff; review checklist. |
| `/docs/context-file-example/` | What belongs in Career Context? | Annotated fields; fictional example; template command; evidence boundary. |
| `/vitaegraph/` | What is VitaeGraph and when is it useful? | Context file comparison; record tree; relationship examples; generated-index limitation. |
| `/skills/` | What is an agent skill and which ones ship? | Comparison table; exact names; provider caveat; install next step. |
| Skill details | When should this skill be invoked? | Inputs, method, outputs, limitations, exact invocation. |
| Guide details | How does the method work for a human reader? | Steps, rules, examples, anti-patterns, maintained sources. |
| `/design/` | How does the evidence and architecture model work? | Layer diagram plus textual equivalent; entity/source distinctions; maintainership. |
| `/providers/` | Which provider target matches this environment? | Comparison table with path, command, invocation, caveat. |
| `/docs/cli/` | Which command performs this operation? | Command/flags/examples; expected effect; safety note. |
| `/faq/` | Genuine recurring project questions | Short answers that link to deeper canonical pages; no query-padding. |
| `/changelog/` | What changed and when? | Factual version sections; one rename explanation; current links. |

## Structural recommendations

- Use question headings only where the user genuinely arrives with that question.
- Place the direct answer immediately after the heading; do not start with marketing setup.
- Keep definitions stable across homepage, docs, `llms.txt`, repository README, npm description, and structured data.
- Put comparisons in small tables when two or more artifacts share attributes such as ownership, scope, depth, portability, and output role.
- Use ordered lists only for real sequences such as install, build context, select skill, review output.
- Keep command names, provider values, file paths, record types, and relationships exact.
- Make limitations part of the answer body rather than a remote legal note.
- Retain meaningful source and review dates on volatile platform guides.
- Keep important answers in static HTML; use client JavaScript only for enhancement.

## FAQ policy

The existing `/faq/` page is a genuine project FAQ and derives visible answers and JSON-LD from the same data. Preserve that pattern.

Do not:

- add questions solely because a keyword variant exists;
- repeat the same question on multiple pages with materially different answers;
- add `FAQPage` markup to pages that are not visible FAQs;
- assume FAQ markup will produce a rich result;
- convert every heading into a question.

When a question needs a detailed method, the FAQ answer should remain short and link to the canonical guide rather than duplicate it.

## Answer freshness

| Fact class | Review trigger | Source |
| --- | --- | --- |
| Project name/category/tagline | Brand or positioning change | Product `AGENTS.md` and README. |
| Version/commands/providers | Every product release | Product package, current status, CLI. |
| Skill inventory and behavior | Skill/package changes | Canonical skill source. |
| VitaeGraph schema/commands | Graph release | VitaeGraph specification and CLI. |
| Search/AI crawler guidance | At least quarterly or before policy change | Official Google, Bing, OpenAI docs. |
| Platform-specific LinkedIn/GitHub/X behavior | Source review date or before substantive rewrite | Official platform sources and maintained wiki confidence. |
| Former-name transition | When old properties/listings change | Current changelog, GitHub redirect, compatibility package, former-hostname origin response, and any stale cached URLs. |

## Measurement

Answer readiness can be measured without claiming control over citations:

- coverage: each core question has one canonical public answer;
- consistency: the same entity fact has one current value across public surfaces;
- extractability: the answer remains accurate when its first two sentences are read alone;
- evidence: factual claims link to source or canonical project documentation;
- referral observation: where analytics exist, segment known search/AI referrers and landing pages;
- prompt sampling: periodically ask a fixed set of questions in major search/answer products, record whether the answer is correct and which sources are cited, and treat results as volatile observations;
- correction latency: time from product change to public answer and entity update.

Do not report a proprietary “AEO score” as if it predicts visibility.

## Sources

Accessed 2026-07-16:

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: guidance on generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- Canonical VitaeContext source repository and generated website output.
