---
title: "GitHub optimization"
platform: "github"
objective: "Master index and routing logic for optimizing a GitHub profile and repositories for internal search and Copilot."
status: "draft"
last_updated: "2026-04-29"
tags: ["github", "github-seo", "developer-portfolio", "github-profile-optimization", "README-optimization", "Copilot-visibility", "personal-branding", "job-search", "AI-agent-github", "index", "seo"]
agent_priority: "high"
id: "github"
---

> This directory helps turn a GitHub profile from a code dump into a searchable proof-of-work system for humans, GitHub search, Copilot, and other AI agents.

---

## 1. Overview: The internal ecosystem

Most GitHub profiles show activity. Fewer explain why the work matters, what the developer can actually build, and which repositories deserve attention.

Optimizing for GitHub is fundamentally different from optimizing for Google or a traditional ATS. You are optimizing for an ecosystem that combines repository metadata, exact-match code queries, contribution visibility, human trust signals, and semantic indexing for Copilot.

The first audience is GitHub's internal code search engine, known as **Blackbird**. The durable optimization target is not a secret ranking formula; it is making public repositories eligible for code search and easy to query, inspect, and understand when recruiters or developers search for specific technologies or projects.

The second audience consists of **AI Agents and Copilot**. Copilot uses a sophisticated semantic search index that updates in the background. Ensuring your documentation and codebase are structured to feed this index correctly is the foundation of Agentic Engine Optimization (AEO) for code.

```text
Weak signal:
"Backend server"

Stronger signal:
"FastAPI authentication service with JWT, PostgreSQL, rate limiting, and Docker deployment"
```

## 2. Use this module when

- A GitHub profile does not clearly explain who the developer is and what they build.
- Pinned repositories, topics, descriptions, or READMEs do not show the strongest proof of work.
- A project should be easier to find through GitHub search, external search, or AI tools.
- A repository needs cleaner instructions for Copilot, code agents, or future maintainers.

## 3. Fast path

1. For the profile page, start with [Profile architecture](./profile-architecture.md) and [Profile README](./profile-readme.md).
2. For an individual project, start with [Repository SEO](./repository-seo.md).
3. If language stats look wrong, use [Linguist and statistics](./linguist-and-stats.md).
4. If the repository is meant to work well with code agents, use [Copilot and agents](./copilot-and-agents.md).
5. Use [Engagement signals](./engagement-signals.md) after the basic profile and repository structure are already clear.

## 4. Module index

The optimization logic is divided into the following documents, ordered from foundational algorithms to specific technical configurations:

- **[GitHub code search and Blackbird](./algorithm-blackbird.md):** Practical guide to GitHub code search, documented limits, query qualifiers, and indexing exclusions.
- **[Profile architecture](./profile-architecture.md):** Foundational settings, optimizing the 160-character bio, strategic repository pinning, and contribution graph management.
- **[Profile README](./profile-readme.md):** Strategy for the special `username/username` repository, using markdown badges, and maintaining token efficiency.
- **[Repository SEO](./repository-seo.md):** Rules for optimizing individual projects, including naming conventions, short descriptions, and topic tags.
- **[Linguist and statistics](./linguist-and-stats.md):** How to correct the repository language statistics bar using `.gitattributes` so generated, vendored, or documentation-heavy files do not skew your perceived stack.
- **[Engagement signals](./engagement-signals.md):** How stars, forks, releases, and maintenance hygiene affect repository trust and discovery.
- **[Copilot and agents](./copilot-and-agents.md):** The definitive guide to AEO within GitHub, including Copilot indexing, repository instructions, and `AGENTS.md` precedence.
- **[Sources](./sources.md):** Citations and research validating the internal mechanics of GitHub search and Copilot indexing.

## 5. Usage for agents

When an AI agent is tasked with optimizing a user's GitHub presence:

1. Review this index to determine which specific sub-module is relevant to the task.
2. If optimizing the overarching profile (`username/username`), load `profile-architecture.md` and `profile-readme.md`.
3. If optimizing a specific project repository, load `repository-seo.md` and `linguist-and-stats.md`.
4. If writing AI instructions for a codebase, load `copilot-and-agents.md`.
5. Always enforce the formatting constraints defined in the sub-modules over generic creative writing.

---

*Next step: Understand the search engine in [GitHub code search and Blackbird](./algorithm-blackbird.md).*



---

## Section: algorithm blackbird

<!--
metadata:
  title: "GitHub code search and Blackbird"
  platform: "github"
  objective: "Practical guide to GitHub code search mechanics and the documented restrictions that affect repository discoverability."
  status: "draft"
  last_updated: "2026-04-29"
  tags: ["github", "algorithm", "blackbird", "search"]
  agent_priority: "medium"
-->



> This file summarizes durable, documented GitHub code-search behavior and the repository conditions that affect whether a project can be searched and inspected.

---

## 1. Overview

GitHub's global code search is powered by Blackbird. Unlike standard web search engines, it is designed specifically for code and repository navigation. The useful optimization work here is not reverse-engineering hidden ranking behavior; it is removing documented conditions that prevent repositories or files from being searchable in the first place, then making code, paths, and documentation easy to query.

## 2. Indexing requirements and exclusions

**Rule:** Keep the repository public if it needs to appear in public search. Private repositories can still be indexed for authorized users, but they will not appear in public recruiter or developer searches.

**Rule:** Keep the default branch non-empty and the repository reasonably active. GitHub documents that only the default branch is indexed for code search. GitHub also documents that only repositories with recent activity, or repositories returned in search results within the last year, are searchable. A stale showcase repository is still usable, but it is safer to keep a small amount of maintenance activity on the default branch.

**Rule:** Respect the size limits. GitHub documents several code-search limits. The important ones for personal projects are:

- Only files smaller than `384 KB` are searchable.
- Only the first `500 KB` of each file is searchable.
- Only repositories with fewer than `500,000` files are searchable.
- Archived repositories are not searchable.

## 3. Search behavior and visibility

**Rule:** Understand the fork restriction before using forks as portfolio pieces. GitHub documents that forked repositories are only searchable in code search if the fork has more stars than the parent repository and has at least one pushed commit after being created. Even then, users must include `fork:true` or `fork:only` in their query to include forks in results.

**Rule:** Public visibility is absolute. While private repositories are indexed, they are only searchable by users with explicit access. To appear in recruiter searches or open-source queries, the repository visibility must be set to Public.

## 4. Search features and qualifiers

**Rule:** Leverage the Symbol index. GitHub code search includes symbol search and code navigation. Cleanly named functions, classes, and files are easier to discover than vague identifiers.

**Rule:** Use query-time qualifiers for inspection. Users and agents can refine code searches using qualifiers such as `repo:`, `path:`, `language:`, and `symbol:`. A searchable repository with sensible paths and names is dramatically easier to inspect than one that depends on internal tribal knowledge.

## 5. Anti-Patterns

### The unmodified fork

**What it looks like:** Forking a popular repository and leaving it untouched. **Why it fails:** Code search has special restrictions for forks, and untouched forks rarely satisfy the conditions needed to appear in search. **What to do instead:** If starting from a scaffold, prefer a template repository or create a new standalone repository. If using a fork, make substantial changes and understand that fork visibility in code search is still constrained.

---

*Next step: Configure your foundational settings in [Profile architecture](./profile-architecture.md).*

---

## Section: copilot and agents

<!--
metadata:
  title: "Copilot and agent optimization"
  platform: "github"
  objective: "Guide to Agentic Engine Optimization (AEO) within GitHub, utilizing AGENTS.md and Copilot context."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["github", "copilot", "aeo", "agents"]
  agent_priority: "high"
-->



> This file explains how to structure a repository so GitHub Copilot and other AI agents can find the right context quickly. It distinguishes official GitHub behavior from general recommendations for external tooling.

---

## 1. Overview

Developers and recruiters increasingly use AI tools to evaluate repositories. On GitHub itself, Copilot uses repository indexing and repository-specific instruction files. Outside GitHub, other agents and retrieval pipelines often depend on clean documentation and file structure. These are related needs, but they are not the same system.

## 2. Copilot semantic indexing

**Rule:** Expect initial indexing to take time on large repositories. GitHub documents that repository indexing runs in the background and can take up to 60 seconds for a large repository. The first question in a fresh repository context may therefore be weaker than later questions once indexing completes.

## 3. Repository instruction files

**Rule:** Use `.github/copilot-instructions.md` for repository-wide Copilot guidance. GitHub's official repository custom instructions file for Copilot is `.github/copilot-instructions.md`. Use it for broad repository guidance such as coding conventions, test commands, and validation expectations.

**Rule:** Use `.github/instructions/*.instructions.md` for path-specific guidance. GitHub supports path-specific instruction files inside `.github/instructions`. These use frontmatter with `applyTo` globs so guidance can target only certain parts of the codebase.

**Rule:** Use `AGENTS.md` for agent-specific instructions, and place it where scope matters. GitHub documents that `AGENTS.md` files can be stored anywhere within the repository, and that the nearest `AGENTS.md` in the directory tree takes precedence when Copilot is working.

**Recommendation:** Keep instruction files focused and non-conflicting. GitHub's docs do not prescribe a strict template, but concise, task-oriented instructions are easier for agents to follow than sprawling policy documents.

**Recommendation:** Use a simple boundary structure inside `AGENTS.md`. A practical pattern is:

- **Always do:** non-negotiable conventions.
- **Ask first:** actions that require confirmation.
- **Never do:** hard boundaries and dangerous areas.

This is a recommendation pattern drawn from GitHub's blog, not a product requirement.

## 4. External agent preparedness

**Recommendation:** Keep critical operational documentation in Markdown and easy-to-find paths. This is not a GitHub product requirement. It is an inference for external agents and retrieval systems. Many simple tooling stacks work better with clean Markdown in obvious locations than with scattered PDFs or generated documentation.

**Recommendation:** Include an architectural index somewhere near the root. Do not force an agent to infer the repository map from scratch. A short map of where core domains live is high-value context for both humans and AI tools.

## 5. Documentation hygiene

**Recommendation:** Prefer source-of-truth docs over duplicated summaries. External retrieval systems perform better when the repository has one authoritative place for setup instructions, one for architecture, and one for conventions. Duplication creates conflicting context.

---

*Return to the [GitHub optimization index](./README.md).*

---

## Section: engagement signals

<!--
metadata:
  title: "GitHub engagement and trust signals"
  platform: "github"
  objective: "How stars, forks, releases, maintenance signals, and external references affect repository trust and discovery."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["github", "engagement", "stars", "ranking"]
  agent_priority: "low"
-->



> This file explains how social proof and maintenance signals affect repository trust, human conversion, and discovery without overstating undocumented GitHub ranking behavior.

---

## 1. Overview

Metadata (names, topics, READMEs) provides semantic context for GitHub search and external search engines. Engagement and maintenance signals provide trust for humans and may influence discovery surfaces such as Explore, recommendations, and external search results. GitHub does not publish a complete public ranking formula, so this file distinguishes documented user-visible signals from reasonable trust recommendations.

## 2. Primary trust signals

**Recommendation:** Treat stars and forks as social proof, not guaranteed ranking levers. Stars and forks make a repository look useful and adopted. They can improve click-through and credibility when a user compares similar projects, but GitHub does not publish a deterministic formula that says a starred repository will outrank an unstarred one for every query.

**Recommendation:** Build visible contributor credibility. Public contributions, clear ownership, and recognizable maintainers help humans evaluate a repository. Graph-based reputation models such as OpenRank are useful research analogies, but they should not be described as GitHub's confirmed production ranking system unless GitHub documents that behavior.

**Recommendation:** Earn external references. GitHub repositories are indexed by standard web search engines. Links from documentation, articles, package registries, talks, or credible community discussions can help external search discovery and send qualified users to the repository. Do not claim that backlinks directly boost GitHub's internal ranking unless a source documents it.

**Recommendation:** Maintain a clear release history when the project is versioned. Using GitHub Releases to tag versions (e.g., `v1.0.0`, `v1.1.0`) shows humans that the project is maintained and gives external search engines additional stable pages to index. Do not create fake releases for projects that do not have meaningful versioned changes.

## 3. Health and maintenance signals

**Recommendation:** Manage Issue and PR hygiene. A repository with hundreds of open, unaddressed issues or pull requests can look abandoned. Aim to respond, label, close, or document triage expectations so visitors understand the maintenance state.

**Recommendation:** Ask for stars sparingly and honestly. A small call-to-action can remind satisfied users to star a useful repository. Keep it secondary to actual documentation and avoid manipulative wording.

**Recommendation:** Use continuous integration (CI) badges when they reflect real checks. Passing build badges provide quick visual proof that the codebase is tested. They help human trust and can improve conversion from visitor to user or contributor.

## 4. Anti-Patterns

### The single massive commit

**What it looks like:** Developing a project locally for three months and pushing it to GitHub in a single, massive commit labeled "initial commit." **Why it fails:** It deprives humans and tools of an activity timeline. A single commit gives little evidence of design evolution, maintenance, or project health. **What to do instead:** Initialize the Git repository locally on day one, write descriptive atomic commits as you build the project, and push regularly.

---

*Next step: Learn Agentic Engine Optimization in [Copilot and agents](./copilot-and-agents.md).*

---

## Section: linguist and stats

<!--
metadata:
  title: "GitHub Linguist and statistics"
  platform: "github"
  objective: "How to correct the repository language statistics bar using .gitattributes."
  status: "draft"
  last_updated: "2026-04-29"
  tags: ["github", "linguist", "gitattributes", "stats"]
  agent_priority: "medium"
-->



> This file explains how to control GitHub's internal language detection engine (Linguist) to ensure your repository accurately reflects your core technical skills, rather than being skewed by vendor files.

---

## 1. Overview

GitHub displays a color-coded language statistics bar at the top of every repository (e.g., indicating a project is 60% Python, 40% JavaScript). This bar is generated by an open-source Ruby library called **Linguist**. 

Recruiters frequently glance at this bar to verify your primary skill set. However, Linguist calculates percentages based on total file byte size. If you commit a massive minified CSS framework or a large JSON dataset into a Go backend project, Linguist may incorrectly label your repository as "100% CSS" or "100% JSON," completely hiding your Go engineering work.

## 2. Using .gitattributes to override Linguist

You can explicitly instruct Linguist to ignore specific files or directories by using a `.gitattributes` file in the root of your repository.

**Rule:** Mark vendor, generated, and data files with the most accurate Linguist attribute. Use `linguist-vendored=true` for third-party dependencies, `linguist-generated=true` for generated output, and `linguist-documentation=true` for documentation-heavy folders. These attributes can remove files from language statistics and may affect code-search visibility, so use the narrowest truthful classification.

```text



data/*.json linguist-generated=true
data/*.csv linguist-generated=true


public/build/* linguist-vendored=true


vendor/* linguist-vendored=true


docs/* linguist-documentation=true


*.myextension linguist-detectable=true
```

**Rule:** Force a specific language for ambiguous files. If Linguist misidentifies a file extension, you can force it to recognize the correct language.

```text

*.h linguist-language=C++
```

## 3. Impact on Search Indexing

**Rule:** Understand that some Linguist overrides can affect code search visibility. GitHub code search excludes generated and vendored files from many search paths. This is generally the desired outcome for third-party bundles or generated artifacts, but do not mark first-party source code as vendored or generated just to change the language bar.

## 4. Anti-Patterns

### The 99% HTML backend

**What it looks like:** A complex Rust microservice repository where the language bar shows 95% HTML and 5% Rust because a large static documentation site is included in the `/docs` folder. **Why it fails:** A non-technical recruiter scanning your profile for Rust experience will see the HTML bar and assume this is a frontend web design project, potentially passing over your profile. **What to do instead:** Mark documentation as documentation with `docs/* linguist-documentation=true`, or mark generated documentation output as generated when that is accurate. Use Linguist overrides to describe the repository honestly, not to hide first-party source code.

---

*Next step: Leverage social proof in [Engagement signals](./engagement-signals.md).*

---

## Section: profile architecture

<!--
metadata:
  title: "GitHub profile architecture"
  platform: "github"
  objective: "Rules for foundational profile settings, including the bio, pinned repositories, and the contribution graph."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["github", "profile", "bio", "contributions"]
  agent_priority: "medium"
-->



> This file defines the foundational structural settings required for a fully optimized GitHub profile, covering the bio limit, strategic repository pinning, and contribution graph management.

---

## 1. Overview

Before writing a custom profile README, configure the native architecture of the GitHub profile. These are the built-in fields and visual elements that GitHub provides by default. Recruiters, collaborators, and automated scrapers can use these fields to understand a developer's seniority, tech stack, and activity level.

**Rule:** Establish the 'Username Anchor'. Maintain consistent usernames across GitHub, LinkedIn, Twitter/X, and your personal portfolio. This creates a unified "Developer Brand" that simplifies cross-platform indexing for AI agents and recruiters.

**Recommendation:** Build credibility via public contributions. Public pull requests to respected projects give recruiters and collaborators visible proof of real-world engineering practice. Treat these as credibility signals and portfolio evidence, not as a guaranteed way to boost a hidden GitHub profile ranking score.

## 2. The Bio constraint

**Recommendation:** Treat the 160-character bio like a short profile summary. GitHub restricts the bio to 160 characters. Do not waste this space on quotes or vague statements. A safe formula is: `[Role] | [Core Tech Stack] | [Location/Remote]`.

**Rule:** Link out to your portfolio or LinkedIn. Ensure the "Website" field in your profile settings is populated. Do not put the URL in your 160-character bio, as it consumes valuable keyword space and is not clickable. Use the dedicated URL field.

## 3. Strategic repository pinning

**Recommendation:** Pin 4 to 6 repositories. GitHub allows you to pin up to 6 repositories to the top of your profile. Leaving this default means GitHub will auto-populate it with your most recently updated repos, which may include trivial forks or incomplete test projects. You must manually curate this section.

**Rule:** Pin finished, documented projects only. Do not pin a repository that lacks a detailed `README.md`. A pinned repository without documentation signals a lack of professional communication skills.

## 4. The Contribution Graph

**Rule:** Prioritize public commits for external SEO. The contribution graph is a visible activity signal. However, if your settings are configured to "hide private contributions," recruiters may see little activity even when most of your work happens in private repositories.

**Recommendation:** Show private contributions if necessary. If the majority of your work is in closed-source enterprise repositories, toggle the setting to "Include private contributions on my profile." This will display the activity (the green squares) without revealing the code or the names of the private repositories.

## 5. Examples

Good example (Bio):
```text
<!-- CORRECT: Clear role, specific stack, and location. Exactly 68 characters. -->
Senior Backend Engineer | Go, Kubernetes, PostgreSQL | Berlin
```

Bad example (Bio):
```text
<!-- WRONG: Vague, wastes space on fluff, lacks technical keywords. -->
Passionate coder turning coffee into software. I love building things!
```

---

*Next step: Build your custom landing page in [Profile README](./profile-readme.md).*

---

## Section: profile readme

<!--
metadata:
  title: "GitHub profile README"
  platform: "github"
  objective: "Strategy for the username/username repository, focusing on Markdown badges and token efficiency."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["github", "readme", "badges", "seo"]
  agent_priority: "high"
-->



> This file defines the strategy for creating the special `username/username` repository, transforming it into a visual landing page for humans and a structured keyword hub for AI agents.

---

## 1. Overview

By creating a public repository with a name that exactly matches your GitHub username, the `README.md` file within it will be automatically displayed at the top of your profile page. This is your developer landing page. It should balance clear visual hierarchy for humans with concise, machine-readable text for search engines and AI agents.

## 2. Content constraints

**Rule:** Apply the "First 100 Words" rule. Search engines, scrapers, and LLM retrieval systems often rely heavily on early page text when summarizing or classifying a profile. Place your primary keywords (e.g., "Full-Stack Engineer," "Distributed Systems," "React") in the H1/H2 tags and the very first paragraph. Do not start with a long, rambling personal story.

**Rule:** Use Markdown Badges for the tech stack. Use the `Ileriayo/markdown-badges` syntax to create a visual tech stack. This serves a dual purpose:
1.  **For Humans:** It creates a clean, scannable, and colorful UI that increases dwell time.
2.  **For AI:** The `alt` text in the Markdown image tag (e.g., `![PostgreSQL](...)`) gives scrapers and accessibility tools readable context for the visual badge.

## 3. Formatting rules

**Rule:** Maintain a strict H2/H3 hierarchy. Do not use bold text to simulate headers. Use standard Markdown headers (`## About Me`, `## Tech Stack`, `## Featured Projects`). LLM agents use these headers to chunk the document semantically.

**Rule:** Avoid heavy dynamic stat cards if token efficiency is required. While dynamic stat cards (like GitHub Readme Stats) look useful to humans, they add generated SVG content that may not help external agents understand your work. If your primary goal is Agentic Engine Optimization (AEO), keep dynamic visuals secondary to plain Markdown sections that summarize your stack, projects, and links.

## 4. Examples

Good example (Tech Stack Badges):
```markdown
<!-- CORRECT: Visually appealing for humans, keyword-rich for machines -->
## Tech Stack
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white) ![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
```

Bad example:
```markdown
<!-- WRONG: Boring for humans, lacks visual hierarchy -->
## Skills
- Python
- Go
- Kubernetes
```

## 5. Anti-Patterns

### The empty landing page

**What it looks like:** Creating the `username/username` repository but leaving the default "Hi there 👋" template without adding any specific skills or projects.
**Why it fails:** It pushes your actual pinned repositories down the page and wastes the most valuable SEO real estate on your entire GitHub profile.
**What to do instead:** If you are not going to fully populate the profile README with a bio, tech stack, and links, delete the repository entirely so your pinned projects sit at the top of the page.

---

*Next step: Optimize individual projects in [Repository SEO](./repository-seo.md).*

---

## Section: repository seo

<!--
metadata:
  title: "GitHub repository SEO"
  platform: "github"
  objective: "Rules for optimizing individual projects for GitHub search, external search, and human evaluation."
  status: "draft"
  last_updated: "2026-04-29"
  tags: ["github", "repository", "seo", "topics"]
  agent_priority: "high"
-->



> This file provides the rules for optimizing an individual project repository so it is easier to find, understand, and evaluate across GitHub, external search, and AI tools.

---

## 1. Overview

Creating a great codebase is only half the battle; if the repository metadata is weak, fewer people will understand or find it. Repository names, About descriptions, README headings, and topic tags all provide structured context for GitHub search surfaces, external search engines, AI tools, and human visitors.

## 2. Metadata constraints

**Rule:** Use hyphenated, keyword-rich repository names. Do not use internal project codenames (e.g., `project-phoenix`). Use clear, descriptive names separated by hyphens so the search engine can tokenize the words (e.g., `react-native-auth-template`).

**Rule:** Optimize the "About" section as a meta description. The short description in the right sidebar is critical for discovery. Keep it short, concrete, and front-loaded with the main concept. Answer "What is it?" and, when useful, "Who is it for?" Do not leave this field blank.

**Rule:** Maximize the 20 Topic tags. GitHub allows up to 20 topics per repository. These work as structured discovery tags. Aim to use the most relevant topics instead of filling the list with weak matches.
*   Include the core language/framework (`python`, `fastapi`).
*   Include the architectural pattern (`microservices`, `rest-api`).
*   Include the industry or use case (`ecommerce`, `automation`).

## 3. Visual and structural constraints

**Recommendation:** Upload a custom Social Preview image. Navigate to Settings > General > Social preview and upload a custom 1280 x 640 px image. When your repository is shared on LinkedIn, X, Discord, or chat tools, this image acts as a professional card and can improve click-through.

**Rule:** Provide a clear "Quickstart" in the README. The project `README.md` must have an explicit "Installation" or "Quickstart" section near the top, featuring a one-line install command (e.g., `npm install package-name`). This reduces friction and increases the likelihood that a visitor will actually test the code and star the repository.

**Recommendation:** Include Security and Maintenance signal files. Human developers and automated tools look for signals of professional maintenance. Including files like `CODEOWNERS`, `SECURITY.md`, and `LICENSE`, plus relevant security badges such as OpenSSF Scorecard, makes the project easier to evaluate. These files support trust; do not describe them as a guaranteed authority-score boost.

## 4. Examples

Good example (About section):
```text
<!-- CORRECT: 11 words, starts with the core keyword, clear use case -->
A lightweight React component library for building accessible enterprise dashboards.
```

Bad example (About section):
```text
<!-- WRONG: Vague, no keywords, focuses on the author rather than the tool -->
This is my final project for the web dev bootcamp.
```

## 5. Anti-Patterns

### The undocumented monolith

**What it looks like:** Pushing 10,000 lines of complex backend code to a repository with a README that only says "Backend Server." **Why it fails:** Neither humans nor AI agents can understand the value of the code without context. Search tools may still index the code, but they will not receive clear project-level language about the architecture, use case, or value. Recruiters and developers are also more likely to leave quickly. **What to do instead:** Always document the architecture, the "Why," and the tech stack in the repository README, even if the code itself is clean.

---

*Next step: Fix your language stats in [Linguist and statistics](./linguist-and-stats.md).*

---

## Section: sources

<!--
metadata:
  title: "GitHub optimization sources"
  platform: "github"
  objective: "Centralized citations and research validating the mechanics of GitHub search and Copilot indexing."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["github", "sources", "research", "blackbird"]
  agent_priority: "low"
-->



> This file contains the research, citations, and system documentation that validate the rules and constraints defined in the github module.

---

## 1. Overview

The rules defined in the `github` module are based primarily on GitHub's official documentation. Community or blog sources are used only where GitHub publishes guidance informally rather than as product documentation.

## 2. Sources

- [Indexing repositories for GitHub Copilot (GitHub Docs)](https://docs.github.com/en/copilot/concepts/context/repository-indexing) - Official description of repository indexing, initial indexing time, and automatic updates.
- [Adding repository custom instructions for GitHub Copilot (GitHub Docs)](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) - Official documentation for `.github/copilot-instructions.md`, path-specific instructions, and `AGENTS.md` precedence.
- [Searching code (GitHub Docs source)](https://github.com/github/docs/blob/main/content/search-github/searching-on-github/searching-code.md) - Primary source for legacy code-search restrictions such as default-branch indexing, fork rules, searchable file size, and archived-repository exclusions.
- [Navigating code on GitHub (GitHub Docs)](https://docs.github.com/en/repositories/working-with-files/using-files/navigating-code-on-github) - Official documentation for code navigation and symbol search behavior.
- [Archiving repositories (GitHub Docs)](https://docs.github.com/repositories/archiving-a-github-repository/archiving-repositories) - Official behavior of archived repositories and their read-only state.
- [Setting repository visibility (GitHub Docs)](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) - Official behavior for public and private visibility.
- [How to write a great agents.md: Lessons from over 2,500 repositories (GitHub Blog)](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/) - Useful secondary guidance for the structure and practical use of `AGENTS.md`.