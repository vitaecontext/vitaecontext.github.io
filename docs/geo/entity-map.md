# VitaeContext canonical entity map

Verified: 2026-07-16

## Canonical project entity

| Property | Canonical value | Evidence / qualification |
| --- | --- | --- |
| Current project name | **VitaeContext** | Product and website `AGENTS.md`, README, package, repository, website. |
| Canonical tagline | **Keep your career context. Reuse it across AI.** | Product brand contract. |
| Concise description | VitaeContext gives AI agents a private, reusable source of truth about a person's career, then provides focused skills for turning that context into grounded professional work. | Canonical product definition. Website description adds “career systems,” which is compatible but should not replace the canonical definition everywhere. |
| Category | Open-source career-context infrastructure and agent-skill package | “Career-context infrastructure” is the product’s umbrella category. SEO, AEO, ATS, and platform optimization are module capabilities, not the product identity. |
| Problem solved | AI agents and downstream career systems often receive scattered, stale, incomplete, or unsupported career information. VitaeContext organizes user-supplied facts, goals, evidence, and boundaries into reusable context before task-specific work. | Product README and design. |
| Intended audiences | Developers using AI coding agents; people maintaining reusable career information; people creating CVs, résumés, profiles, portfolios, applications, messages, and interview material; evidence/privacy-sensitive users; agents needing career context. | Product/site instructions and skill inventory. |
| Canonical website | `https://vitaecontext.github.io/` | Astro config, shared site data, repository metadata. |
| Canonical repository | `https://github.com/vitaecontext/vitaecontext` | Product/site data and live repository. |
| npm package | `vitaecontext` | Product package metadata and npm link. |
| Current package version | `2.1.0` | Product contract generated from `../vitaecontext/package.json`, website shared data, changelog, `llms.txt`. |
| CLI executable | `vitaecontext` | Product package `bin`/CLI and documentation. |
| Compatibility package/alias | `agentkit-seo` | Deprecated compatibility entry that forwards to VitaeContext; not a current co-brand. |
| License | MIT | Product `LICENSE`, package metadata, skill frontmatter. |
| Creators/maintainers | Renato Mignone and Elia Innocenti | Product README and website site config/contact page. Use “co-creator & maintainer” only where currently supported. |
| Source language/form | JavaScript/Node CLI plus Markdown runtime skills, references, guides, schemas, and records | Repository contents. Individual skill JSON-LD currently describes the skill artifact’s programming language as Markdown. |
| Cost/access | Open source; package and skills available without a purchase price | Repository/license/package. Do not infer hosted service pricing because there is no project backend service. |

## Installation identity

Recommended current commands:

```bash
npx vitaecontext install --provider <provider>
npx vitaecontext doctor
```

Supported provider values:

| Provider value | User-facing target | Default shape / note |
| --- | --- | --- |
| `codex` | Codex | Skill folders under `~/.agents/skills/` plus `CODEX_HOME/skills` when set, otherwise `~/.codex/skills/`. |
| `claude-code` | Claude Code | Skills under `~/.claude/skills/`; plugin marketplace also available. |
| `gemini-cli` | Gemini CLI | Extension under `~/.gemini/extensions/vitaecontext/`. |
| `antigravity` | Antigravity CLI | Gemini-compatible plugin layout under `~/.gemini/antigravity-cli/plugins/vitaecontext/`; exact live command surfacing remains a documented product uncertainty. |
| `opencode` | OpenCode | Skills plus flat command wrappers. |
| `shared` | Portable bundle | Requires an explicit target directory. |

Claude Code marketplace commands:

```text
/plugin marketplace add vitaecontext/vitaecontext
/plugin install vitaecontext@vitaecontext
```

The website must preserve exact command names and should not imply identical activation behavior across providers.

## Career Context entity

| Property | Definition |
| --- | --- |
| Name | **Career Context** |
| Owner | The person whose career material it contains. |
| Form | Private, inspectable, editable Markdown file. |
| Purpose | Reusable source of supplied career facts, stated direction, constraints, evidence links, and claims to avoid. |
| Typical content | Identity, education, experience, projects, research, skills, certifications, achievements, goals, target roles/locations, output preferences, proof, and limitations. |
| Relationship to VitaeContext | VitaeContext helps create and use the artifact; the artifact is not the product itself. |
| Relationship to outputs | Input to task-specific CVs, profiles, portfolios, applications, messages, and interview work. |
| Privacy boundary | Local/user-controlled until supplied to an external provider or system; provider rules apply after handoff. |
| Evidence boundary | Stores user-supplied facts and proof references, separates intent from experience, and identifies claims to avoid. VitaeContext does not independently authenticate every item. |

Canonical public answer: `/` for definition, `/docs/usage/` for operation/privacy, and `/docs/context-file-example/` for structure.

## VitaeGraph entity

| Property | Definition |
| --- | --- |
| Name | **VitaeGraph** |
| Relationship | VitaeContext’s optional deeper structured-record layer; “powered by VitaeContext.” |
| Purpose | Store detailed career material in focused connected records for selective retrieval and maintenance. |
| Canonical data | Local Markdown records. |
| Record domains | Education, thesis, university courses, projects, experience, certifications/training, awards, publications. |
| Hierarchical relation | `parent` / “contains.” |
| Non-hierarchical relation | `related_records` / “related to.” |
| Generated artifacts | Deterministic graph, lexical search, and diagnostics JSON under `.generated/`; exact current filenames should follow the product CLI. |
| Default private location | `~/.vitaecontext/vitaegraph` unless an exact custom root is supplied. |
| Privacy boundary | Private local user material; never commit or publish by default. `visibility: public` means eligible for consideration, not publication consent. |
| Validation boundary | Checks schema/structure, IDs, links, and relationships; does not authenticate real-world claims. |

Canonical public answer: `/vitaegraph/`.

## Agent-skill entity relationships

VitaeContext 2.1.0 ships eight installed runtime skills:

| Invocation name | Relationship / role | Canonical website page |
| --- | --- | --- |
| `vitaecontext` | Root router and project/wiki entrypoint | `/skills/vitaecontext/` |
| `vitaecontext-build` | Builds and maintains Career Context | `/skills/context-builder/` |
| `vitaecontext-vitaegraph` | Builds, deepens, maintains, validates, indexes, retrieves, and migrates VitaeGraph | `/skills/vitaegraph/` |
| `vitaecontext-cv` | CV/résumé and ATS-focused method | `/skills/cv-ats/` |
| `vitaecontext-github` | GitHub profile/repository method and bounded public fetcher | `/skills/github/` |
| `vitaecontext-linkedin` | LinkedIn profile method | `/skills/linkedin/` |
| `vitaecontext-portfolio` | Web portfolio crawlability/content method | `/skills/web-portfolio/` |
| `vitaecontext-x` | X/Twitter profile and content method | `/skills/x-twitter/` |

A skill is an installable runtime artifact. A guide is the corresponding human-readable method. The skill and guide are related but not interchangeable entities.

## Evidence and privacy model

```text
User-supplied material
  -> Career Context (compact maintained facts, goals, proof, boundaries)
  -> optional VitaeGraph (deeper connected Markdown records)
  -> one focused agent skill or downstream system
  -> draft/audit/plan/patch
  -> human review
```

Entity assertions must preserve these distinctions:

- **Project fact:** verified from package/repository/public source.
- **Career fact:** supplied by a user or accessible source; not inherently verified by the project.
- **Stated goal:** direction, not completed experience.
- **Evidence link:** a reference supporting review, not automatic authentication.
- **Generated index:** rebuildable retrieval aid, not canonical career data.
- **Public eligibility:** permission to consider a record, not consent to publish.

## Implemented stable identifiers

Implemented identifiers in `src/data/metadata.ts`:

| Entity | `@id` pattern |
| --- | --- |
| Website | `https://vitaecontext.github.io/#website` |
| Project/organization | `https://vitaecontext.github.io/#organization` |
| Software package | `https://vitaecontext.github.io/#software` |
| Individual page | canonical URL plus `#webpage` where useful |
| Article/guide | canonical URL plus `#article` |
| Skill source artifact | canonical skill URL plus `#software-source-code` |

Implementation rules:

- Reuse IDs rather than repeating anonymous embedded entities.
- Keep `url`, `codeRepository`, `downloadUrl`, `license`, `softwareVersion`, creators, and visible copy aligned.
- Use current name as `name` everywhere.
- Do not create a standalone structured entity for a private user’s Career Context or VitaeGraph.
- Do not expose private record identifiers in public schema.

## AgentKit SEO transition

| Question | Decision |
| --- | --- |
| Is AgentKit SEO a current name? | No. It is a former project name and compatibility package. |
| Where should “formerly AgentKit SEO” appear? | Product README/compatibility documentation and the 2.0.0 changelog entry; optionally, a minimal former-hostname migration page if the namespace is reclaimed. |
| Should it appear in the current homepage H1/title/tagline? | No. |
| Should it appear persistently in the header/footer? | No. |
| Should a dedicated current-domain migration page be created? | Not now. `/changelog/` is sufficient unless query/log evidence shows a distinct user need. |
| Should `alternateName` be used? | Deferred. It is semantically truthful, but add only with stable entity IDs and matching visible migration context. It provides no guaranteed search feature. |
| What is the former-hostname state? | Direct origin check on 2026-07-16 returned GitHub's platform-level 404. Cached former HTML may persist temporarily in search or crawler systems. |
| What is the optional transition action? | Attempt to reclaim the `agentkit-seo` organization namespace; if successful, create only `agentkit-seo/agentkit-seo.github.io` with a zero-second refresh, current canonical, visible explanation/link, and no recreated former docs. |
| What is the fallback? | Retain the legitimate 404, keep one concise current changelog explanation, update controlled external links/listings, and monitor stale URL removal. |

## External listings requiring owner review

| Surface | Verified/current state | Owner action |
| --- | --- | --- |
| Former GitHub Pages hostname | GitHub platform-level 404 at the origin; stale caches may retain former HTML | Optional namespace reclamation and minimal migration page as specified above; otherwise retain 404. Not a repository defect. |
| GitHub repository | Current entity; old repo URL redirects | Keep description, topics, social preview, website URL, releases, and old redirect intact. Do not reuse old repository name. |
| npm `vitaecontext` | Current package | Keep name, description, repository, homepage, version, maintainers, and keywords aligned. |
| npm `agentkit-seo` compatibility | Current compatibility bridge | Keep deprecated/compatibility status explicit and forward behavior tested. |
| Claude Code marketplace metadata | Current VitaeContext commands in product source | Verify public listing/cache after releases. |
| Gemini/other galleries | External crawler/listing behavior uncertain | Review after releases; do not claim listing until verified. |
| Search Console | Current site has a Google verification meta tag | Owner should inspect property/canonical coverage and submit sitemap; audit cannot confirm account state. |
| Bing Webmaster Tools | Account state unknown | Verify/import property, submit sitemap, inspect old/new domain indexation. |
| Package/CDN mirrors | Compatibility identity visible on jsDelivr | Monitor name/description after releases; correct stale mirrors where owner controls metadata. |
| Social/profile links, posts, docs, directories | Not comprehensively enumerable without owner accounts | Search for exact old name/domain/commands and update high-authority owned listings first. |

## Known uncertainty

The website deployment checks generated playbooks, package version, skill names, provider names, and content hashes against a fresh product-repository checkout. Product status and website shared data are aligned for 2.1.0.
