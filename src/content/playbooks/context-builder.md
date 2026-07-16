---
title: "Context Builder"
platform: "general"
objective: "Navigation index for the context-builder folder, including the specification, workflow, maintenance guide, template, and example file."
status: "draft"
last_updated: "2026-07-16"
tags: ["context-file", "agent-context", "personal-branding", "AI-career-assistant", "LLM-context-file", "career-context-for-developers", "agent-memory", "goals-and-targeting", "index", "navigation"]
agent_priority: "medium"
id: "context-builder"
---

> This guide defines the standard for building and maintaining Career Context: the user-owned source that keeps career-focused AI work grounded in supplied facts and explicit evidence boundaries.

---

## 1. Overview

The fastest way to get generic career output is to give an agent scattered context. A CV in one message, a LinkedIn profile in another, a GitHub URL later, and a few corrections after the first bad draft.

This module fixes that by turning professional history into one structured Markdown file. The file describes a person's academic and professional record in a format that both humans and AI agents can navigate reliably.

The intended use is simple: keep one canonical context file up to date, load it into an agent session, and combine it with the platform-specific modules in this repository when generating CVs, LinkedIn text, portfolio copy, or interview prep.

The file holds two kinds of content that must never blur together: **verified facts** (what is true and provable) and **stated goals and targeting** (where the person wants to go). The goals and targeting block lets downstream skills aim output without inventing experience to support it. See the goals and targeting rules in the [context file spec](#section-context-file-spec) below.

## How does Career Context reduce unsupported claims?

Career Context gives an agent supplied facts, stated goals, evidence links, and claims to avoid before it drafts. The method tells the agent to flag missing support instead of strengthening a claim beyond the available material.

This reduces unsupported-claim risk; it does not independently fact-check the material or guarantee that a model cannot make an error. Review every generated output before using it.

```text
Before:
"Here is my CV. Also my GitHub is different now. Actually ignore that old project."

After:
"Use my Career Context as the source, then audit my LinkedIn profile."
```

## 2. Use this module when

- A user does not yet have Career Context.
- Existing career material is scattered across CVs, LinkedIn, GitHub, notes, and portfolio pages.
- An agent needs one verified source of truth before rewriting public career material.
- A context file already exists but has become stale, too long, or inconsistent.

## 3. Fast path

1. Read [why-context-files.md](./why-context-files.md) to understand the purpose.
2. Use [templates/context-file-template.md](./templates/context-file-template.md) to create the first draft.
3. Check the draft against [context-file-spec.md](./context-file-spec.md).
4. Use [agent-workflow.md](./agent-workflow.md) when loading the file into an agent session.
5. Return to [file-maintenance.md](./file-maintenance.md) whenever new facts need to be added.

## 4. Directory contents

- [context-file-spec.md](./context-file-spec.md): The authoritative specification for structure, section order, semantic tags, and validation.
- [why-context-files.md](./why-context-files.md): The motivation document explaining why a context file outperforms copy-pasted raw text or agent memory.
- [agent-workflow.md](./agent-workflow.md): The operational guide for loading the file into agent sessions and combining it with other modules.
- [file-maintenance.md](./file-maintenance.md): The maintenance lifecycle for updates, token growth, verified facts, and version history.
- [templates/context-file-template.md](./templates/context-file-template.md): A guided template for building a new personal context file.
- [Fictional Career Context example](/docs/context-file-example/): A public worked example showing how the structure looks without exposing a person's private file.

## 5. Usage for agents

When an AI agent is asked to work with a personal context file:

1. Load [context-file-spec.md](./context-file-spec.md) before editing or validating the file.
2. Load [agent-workflow.md](./agent-workflow.md) when the task is about prompting or module routing.
3. Load [file-maintenance.md](./file-maintenance.md) when new content must be integrated into an existing file.
4. Treat the personal context file itself as the factual source of truth, not the surrounding explanatory docs.



---

## Section: agent workflow

<!--
metadata:
  title: "Agent workflow for context file users"
  platform: "general"
  objective: "Explains how to invoke the context file in an agent session, how to combine it with Skill submodules, and what good output looks like for each major task type."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["context-file", "workflow", "prompting", "agent", "skill"]
  agent_priority: "medium"
-->



> Practical instructions for using Career Context in an agent session, covering invocation patterns, skill routing, prompt templates, and output quality criteria for common career tasks.

---

## 1. Overview

This section is for users who have already built Career Context following the rules in the specification below. It explains how to load the file into an agent session, write an effective task prompt, and combine the file with a focused skill. The method is designed to preserve supplied facts and evidence boundaries; generated work still requires review.

## 2. Invoking the context file

### 2.1 The basic invocation pattern

Every session that uses the context file follows the same three-step pattern.

**Step 1 - Load the context file.** Provide the file to the agent as context before stating your task. In most coding agents, this means opening the file in the same working directory and referencing it explicitly in your prompt, or passing it using the agent's file attachment mechanism. In chat-based agents, paste the full file content directly into the session.

**Step 2 - State the task with constraints.** Name the output type, the target platform or role, and any hard constraints (word count, format, target audience). The more specific the constraints, the less the agent needs to guess.

**Step 3 - Evaluate and iterate.** Use the quality criteria in section 5 of this file to assess the output. If a section is weak, ask the agent to revise it by naming the specific fact or section in the context file that should be drawn on more heavily.

### 2.2 File discovery convention

The safest way to use a context file is to pass the path explicitly in the prompt. This avoids accidental use of an old or unrelated profile.

**Rule:** Prefer an explicit path when invoking the skill, for example `Use the context file at ~/career/name-surname-seo-context.md`.

**Recommendation:** If the user wants a portable default location, suggest `~/.vitaecontext/<name-surname>-seo-context.md`. The generic fallback `~/.vitaecontext/context.md` is acceptable only when the user prefers a neutral filename. Agents may check a default path only after the user asks to use it or confirms that the path is correct.

**Rule:** Do not search the user's entire filesystem for a context file. If no explicit path or confirmed default exists, ask the user for the file path.

**Rule:** Do not assume file-writing permission. Before creating or overwriting the context file, ask the user to choose a storage mode: local workspace file, explicit path, portable default, or in-chat draft.

**Rule:** For large context files, prefer writing to a confirmed file path or producing targeted diffs. Use in-chat full drafts only when the user asks for them, and split long drafts by section.

### 2.3 What the agent can and cannot do without additional input

The agent can generate, reword, tailor, and format outputs using the facts in the context file. It can select the most relevant subset of your experience for a given role, apply platform-specific formatting rules from a Skill submodule, and produce outputs in the correct tone and length.

The agent cannot verify facts that are not in the file. If a skill is listed in the Skills index but has no supporting evidence in a course, project, or role section, the agent cannot justify it in a cover letter. The agent also cannot make positioning decisions that are not stated in the file. If the QUICK REFERENCE block lists two target roles, the agent will generate content appropriate to both unless you specify which one to prioritize in the task prompt. Finally, the agent cannot know about professional developments that occurred after the file was last updated. The context file is the agent's only source of truth for your career record.

## 3. Prompt templates for common tasks

Each template below shows the full structure of a task prompt. Fill in the bracketed placeholders. Load your context file into the session before submitting the prompt.

### 3.1 Cover letter

```text
Using my context file, write a cover letter for the following job description.

Job description:
[Paste the full job description here]

Constraints:
- Maximum length: [e.g., 400 words]
- Tone: professional, direct, first person
- Emphasize: [e.g., the eBPF kernel research and the post-quantum cryptography thesis]
- Do not mention: [e.g., unrelated coursework, internships outside the target domain]
- Target reader: [e.g., a hiring manager at a security research lab]

Base every claim strictly on verified facts in the context file.
Do not add skills, projects, or roles that are not in the file.
```

### 3.2 LinkedIn section rewrite

```text
Using my context file and the rules in the linkedin Skill submodule,
rewrite my LinkedIn [About | Headline | Experience entry for ROLE NAME].

Constraints:
- Target audience: [e.g., security research groups and senior engineering recruiters]
- Positioning: use the target_roles and top_skills from the QUICK REFERENCE block
- Length: follow the platform limits defined in the linkedin submodule
- Do not use the first person in the headline
- Include at least one quantified result

Reference the linkedin submodule formatting rules for section structure and keyword placement.
```

### 3.3 CV variant

```text
Using my context file and the rules in the cv-ats Skill submodule,
generate a one-page CV tailored for the following role:

Target role: [e.g., Cryptography Research Intern]
Target company type: [e.g., academic research lab, enterprise security vendor]

Selection rules:
- Include all entries tagged [THESIS], [ROLE], and [CERT] that are directly relevant
- Include the three most relevant [PROJECT] entries based on keyword overlap with the role
- Omit coursework that has no direct relevance to the target role
- Apply ATS formatting rules from the cv-ats submodule

Format: single column, no tables, machine-readable fonts only.
```

### 3.4 Interview preparation

```text
Using my context file, prepare five interview questions and model answers
for a [e.g., security analyst] role.

Requirements:
- Base every model answer strictly on facts from the context file
- Cite the specific project, grade, or result that supports each claim
- Use the STAR format (Situation, Task, Action, Result) for behavioral questions
- Keep each answer under 200 words

Do not invent results or technologies not present in the context file.
```

## 4. Combining the context file with Skill submodules

The Skill submodules in this repository contain platform-specific rules that the agent applies on top of the facts in your context file. Loading both together gives the agent both the content (from your context file) and the formatting and quality rules (from the submodule).

The table below shows the correct submodule to load for each common task.

| Task | Submodule to load |
|---|---|
| LinkedIn headline, About, or Experience | `linkedin` |
| GitHub profile README or repository README | `github` |
| CV or ATS optimization | `cv-ats` |
| Portfolio page copy | `web-portfolio` |
| X/Twitter profile, bio, pinned post, or posting plan | `x-twitter` |

**Rule:** Always load the context file first, then the submodule. If you load only the submodule, the agent has rules but no content. If you load only the context file, the agent has content but no platform-specific rules.

### 4.1 Example: ATS-optimized CV

To generate an ATS-optimized CV, load the context file and the `cv-ats` submodule together, then use the CV variant prompt template from section 3.3. The agent applies the keyword extraction rules, formatting constraints, and section ordering from the submodule to the content from your context file.

### 4.2 Example: LinkedIn About section

To rewrite the About section, load the context file and the `linkedin` submodule together, then use the LinkedIn section rewrite template from section 3.2. The agent applies character limits, keyword placement rules, and the platform's first-person conventions to the positioning data from your QUICK REFERENCE block and the body of your context file.

## 5. What good output looks like

Use the criteria below to evaluate each output type. If an output does not meet these criteria, ask the agent to revise it, citing the specific section of the context file that contains the missing detail.

### 5.1 Cover letter

A good cover letter output:
- Names at least one specific project or role from the context file in the first paragraph.
- Cites at least one quantified result (grade, ranking, accuracy rate, dataset size).
- Matches the target role's language without copying the job description verbatim.
- Stays within the requested word count.
- Contains no skills or claims that are not supported by evidence in the context file.

### 5.2 LinkedIn section

A good LinkedIn section output:
- Uses the exact positioning language from the QUICK REFERENCE block.
- Stays within the character limits defined in the `linkedin` submodule.
- Includes at least one keyword that appears in the `top_skills` field of the QUICK REFERENCE block.
- Does not begin with a first-person pronoun in the About section opener.

### 5.3 CV variant

A good CV variant output:
- Selects only entries directly relevant to the stated target role.
- Presents all dates in the format defined in the context file spec (Month Year, en-dash ranges).
- Uses single-column layout with no tables, graphics, or Unicode bold characters.
- Includes a skills section that maps directly to the Skills index in the context file.

### 5.4 Interview preparation

A good interview preparation output:
- Cites the specific project name, grade, or competition result that grounds each answer.
- Does not generalize beyond what is verifiable in the context file.
- Formats behavioral answers in STAR structure with a clearly stated, quantified result.

---

*Next step: Keep your file accurate over time in [Context file maintenance](./file-maintenance.md).*

---

## Section: context file spec

<!--
metadata:
  title: "Career Context file specification"
  platform: "general"
  objective: "Defines the required structure, section order, formatting conventions, and agent-optimization rules for Career Context."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["context-file", "specification", "agent-optimization", "formatting"]
  agent_priority: "high"
-->



> Defines the structure, section order, and formatting rules that Career Context follows to remain usable by both a human maintainer and an AI agent.

---

## 1. Overview

Career Context is a single Markdown document containing a person's supplied professional record. It is an input for career outputs such as CVs, cover letters, LinkedIn sections, portfolio copy, and interview preparation material. Two readers use it: a human who maintains it and an agent that retrieves relevant facts from it. The structure serves both readers while remaining inspectable and editable.

The file can live wherever the user wants. Prefer an explicit user-chosen path. A useful portable convention is `~/.vitaecontext/<name-surname>-seo-context.md`; a local workspace draft is also valid while the file is being created. Agents must confirm the destination before creating or overwriting the file. Because valid context files can become large, agents should prefer file writes or targeted diffs over full in-chat drafts; if file writing is unavailable, return a compact outline first and split the full Markdown draft by section only when requested.

## 2. File structure

The context file contains ten sections in a fixed order. The table below defines the requirement status of each section.

| # | Section | Status |
|---|---|---|
| 1 | Title | Required |
| 2 | QUICK REFERENCE block | Required |
| 3 | Scope declaration | Required |
| 4 | Education | Required |
| 5 | Professional experience | Conditional |
| 6 | Research and publications | Conditional |
| 7 | Skills index | Required |
| 8 | Certifications and achievements | Conditional |
| 9 | Languages | Required |
| 10 | Extracurricular and leadership | Optional |

**Required:** present in every valid context file. **Conditional:** present if the described content exists. **Optional:** may be omitted.

### 2.1 Title

**Rule:** Use one H1 heading containing the person's full name and a one-phrase professional descriptor.

```markdown

```

The descriptor reflects the person's positioning, not their current job title. It is the phrase an agent uses as a default tagline in generated outputs.

### 2.2 QUICK REFERENCE block

The **QUICK REFERENCE block** is the most critical section. Place it immediately after the title, before any prose. An agent completing most tasks - cover letters, CV summaries, bios - reads this block first and descends into the body only when it needs specific detail.

**Rule:** Write the block as a YAML fenced code block under an H2 heading labeled `QUICK REFERENCE`.

```yaml
name: Firstname Lastname
current_location: City, Country
target_roles: [Role A, Role B]
open_to_relocation: true/false

education:
  - "[DEGREE] Degree Name | Institution | Grade | Month Year"
  - "[DEGREE] Degree Name | Institution | GPA x/y | exp. Month Year"

gpa_summary: "Course A: grade, Course B: grade, Course C: grade, ..."

professional:
  - "[ROLE] Job Title | Company | Period"

top_skills: [skill1, skill2, skill3]
tools: [tool1, tool2, tool3]

competitions:
  - "Result - Competition Name (Year)"

certifications:
  - "Cert Name | Issuer | Date | ID (if applicable)"

languages:
  - "Language: Level (Certificate if applicable)"

github: https://github.com/username
linkedin: https://linkedin.com/in/username
portfolio: https://yoursite.com
```

**Rule:** Use inline values or flat arrays only. Do not nest objects beyond the top level.

**Rule:** Omit any field that has no value. Do not write `null` or `N/A`.

**Recommendation:** List 8–15 entries in `top_skills`, ordered from most to least central to the person's positioning.

The `gpa_summary` field lists all graded courses on a single comma-separated line. This lets an agent retrieve the full academic record without leaving the block.

### 2.2.1 Goals and targeting (stated intent)

The **Goals and targeting** block records where the person wants to go, as distinct from what they have already done. Place it directly under the QUICK REFERENCE block.

**Rule:** Everything in this block is **stated intent, not verified fact**. An agent may use it to choose emphasis, tone, and which experience to surface, but it must never present a goal as an accomplishment. A target role is not a held role; an interest is not a demonstrated skill.

Capture the following fields. Omit any that do not apply.

```yaml
goals_and_targeting:
  ideal_role: "The role the person is aiming for next"
  current_focus: "What they are working on or learning right now"
  next_work: "What they want to work on next"
  target_locations: [City, Country]   # or: No restriction
  interests: [topic, topic]
  constraints: [e.g. remote only, visa sponsorship required]
```

**Rule:** Use `No restriction` for `target_locations` when the person is open to any location, rather than omitting the field, so downstream skills do not have to guess.

**Rule:** Keep goals and targeting separate from the Education, Experience, and Skills sections. Those sections stay strictly factual. When a downstream skill writes public copy, it grounds every claim in the factual sections and uses goals and targeting only to decide what to emphasize.

### 2.3 Scope declaration

The **scope declaration** is a single paragraph written in third person. It states what the file is, what it is not, and what it is for. Write it so an agent can read it as instructions rather than self-description.

**Rule:** Close the scope declaration with a `<!-- VERIFIED FACTS: ... -->` HTML comment listing every atomic fact in the file that must never be hallucinated: grades, scores, dates, IDs, and rankings. Update this comment whenever a new verified fact is added.

```markdown
This file is a personal knowledge base documenting [Name]'s full [field] career.
It is not intended for direct distribution to third parties. Its purpose is to serve
as a structured source of truth from which career outputs can be generated. All
facts, grades, dates, and names are verified.

<!-- VERIFIED FACTS: graduation=YYYY-MM-DD, final grade=x/y, GPA=x.xx/y,
cert score=NNN, cert id=XXXXXXX, competition result=Nth place, score=XXXXXXX -->
```

The HTML comment is invisible in rendered Markdown but visible to any agent reading raw text.

### 2.4 Education

Write each degree as an H2 heading using the `[DEGREE]` tag.

```markdown
## [DEGREE] Degree name (Classification) | Institution, City, Country | Grade | Start – End
```

Follow the heading with one sentence describing the degree's focus and its relevance to the person's current positioning. An agent uses this sentence when it needs to represent the degree in a generated output.

**Courses**

Group courses under an H3 semester heading. Write each course as an H4 entry with the `[COURSE]` tag.

```markdown
### Semester label

#### [COURSE] Course name | Grade: x/y | Code: XXXXXXX
Topics: term one, term two, term three, term four, ...
```

The `Topics:` line is a flat comma-separated enumeration of technical terms. Do not use bullet points. The purpose of this line is keyword coverage for ATS matching and agent skill-mapping.

**Projects**

If a course has a project, nest it under the course as an H5 entry with the `[PROJECT]` tag.

```markdown
##### [PROJECT] Project name | Repo: https://github.com/...
**TL;DR:** One sentence - what was built, core technologies, key result.
```

**Rule:** Every `[PROJECT]` entry must include a `**TL;DR:**` line immediately after its heading. Keep it under 30 words.

Full project detail follows the TL;DR in this order:

- **Description:** what the project is.
- **Technologies:** comma-separated list of tools and frameworks.
- **Key areas:** what was implemented or demonstrated.
- **Results:** quantified outcomes.

Do not explain what a technology does. State what was done with it.

**Thesis**

Write the thesis as an H3 entry under its parent degree, using the `[THESIS]` tag.

```markdown
### [THESIS] Short title
**Full title:** Official title, in the original language if different.
**Supervisors:** Name, Name
**Research area:** Area A, Area B
**TL;DR:** One sentence - contribution and outcome.
```

### 2.5 Professional experience

Write each role as an H3 entry using the `[ROLE]` tag.

```markdown
### [ROLE] Job title | Company | Location | Period
**TL;DR:** One sentence describing the role's scope and primary focus.
```

Follow the TL;DR with bullet points covering the technical problem addressed, tools and methodologies used, and measurable outcomes. Do not use narrative paragraphs.

If the role is the industry context for a thesis, add a cross-reference on the line after the TL;DR:

```markdown
*This role is the industry context for the [THESIS] documented under [degree section].*
```

### 2.6 Research and publications

Include this section only if the person has formal research outputs: published papers, preprints, DOI-linked reports, or papers under review.

Write each paper as an H3 entry using the `[PAPER]` or `[PREPRINT]` tag.

```markdown
### [PAPER] Short title | Venue | Year
**Full title:** Full paper title.
**Authors:** Author A, **Firstname Lastname**, Author B
**DOI:** https://doi.org/...
**TL;DR:** One sentence - contribution and main finding.
```

For work not yet published, use `[PREPRINT]` and add the status after the year: `| Under review` or `| In preparation`.

### 2.7 Skills index

**Rule:** Write the Skills index as a flat categorical enumeration. Do not use prose or bullet lists.

Write each category as a bold label followed by a comma-separated list on the same line.

```markdown
**Security:** term, term, term, ...
**Networks:** term, term, term, ...
**Cryptography:** term, term, term, ...
**Machine learning / AI:** term, term, term, ...
**Embedded systems:** term, term, term, ...
**Development:** term, term, term, ...
**Frameworks and tools:** term, term, term, ...
**Standards and frameworks:** term, term, term, ...
**Compliance and regulation:** term, term, term, ...
```

Add or remove categories to match the person's field. **Rule:** Every skill listed must appear in at least one other section of the file. Do not add skills without supporting evidence in the body.

### 2.8 Certifications and achievements

Write each entry as an H3 using the appropriate tag. The three entry types and their formats are shown below.

```markdown
### [CERT] Certificate name | Issuer | Date | ID: XXXXXXX
Score: overall score and per-component breakdown if applicable.

### [COMPETITION] Competition name | Year | Result: Nth place / Score: X
**TL;DR:** One sentence - the challenge and what was built or demonstrated.

### [AWARD] Award name | Issuing body | Date
One sentence describing what was recognized and in what context.
```

### 2.9 Languages

**Rule:** Write the Languages section as a table. Do not use prose.

The table below shows the required columns and an example row for each case.

| Language | Level | Certificate | Notes |
|---|---|---|---|
| Italian | Native | - | - |
| English | B2 / C1 speaking | Cambridge FCE, Score 172, ID C7109952 | - |
| French | Basic | - | - |

Use CEFR levels as the standard. Include standardized test scores and IDs in the Certificate column.

### 2.10 Extracurricular and leadership

Write each entry as an H3 using the `[ORG]` tag.

```markdown
### [ORG] Organization name | Role | Period
- Specific, quantified contribution with scope indicators.
- Specific, quantified contribution with scope indicators.
```

Each bullet must state a concrete activity with scope indicators: number of events, number of participants, names of partners or sponsors. Do not write generic descriptions such as "contributed to team success."

## 3. Formatting rules

These rules apply across the entire file regardless of section.

### 3.1 Semantic section tags

Every H3 and deeper heading representing a professional artifact must begin with a semantic tag in square brackets. The table below lists the full tag vocabulary.

| Tag | Used for |
|---|---|
| `[DEGREE]` | Academic degree |
| `[COURSE]` | Individual course |
| `[PROJECT]` | Practical project under a course or role |
| `[THESIS]` | Bachelor's or Master's thesis |
| `[ROLE]` | Professional position or internship |
| `[PAPER]` | Published or submitted academic paper |
| `[PREPRINT]` | Paper in preparation or under review |
| `[CERT]` | Formal certificate or credential |
| `[COMPETITION]` | Competitive event with a scored result |
| `[AWARD]` | Award or honor |
| `[ORG]` | Organization membership |

Tags enable an agent to identify the content type before reading it. This allows selective loading of specific sections without parsing the full file.

### 3.2 TL;DR convention

**Rule:** Every `[PROJECT]`, `[THESIS]`, `[COMPETITION]`, and `[ROLE]` entry must include a `**TL;DR:**` line immediately after its heading. Write it as a single sentence of at most 30 words. It must be the first line of body content in the section, never a heading.

### 3.3 No unicode bold

**Rule:** Do not use Unicode bold characters (e.g., `𝗡𝗲𝘁𝘄𝗼𝗿𝗸`, `𝗔𝗜`) anywhere in the file. Use standard Markdown bold (`**text**`) or plain text instead.

Unicode bold inflates token count, breaks in some parsers, and carries no semantic meaning for language models.

### 3.4 Date format

**Rule:** Follow this format for all dates throughout the file.

| Context | Format | Example |
|---|---|---|
| Single date | Month Year | June 2024 |
| Range | Month Year – Month Year | September 2021 – June 2024 |
| Future date | Expected Month Year | Expected October 2026 |

Use an en-dash (`–`), not a hyphen (`-`), in date ranges. Do not mix formats within the file.

### 3.5 Quantify all results

**Recommendation:** Express every result, outcome, or contribution that can be measured as a number. Apply this to grades, accuracy rates, rankings, participant counts, dataset sizes, and durations.

When a number is approximate, prefix it with `~`. Do not use vague language such as "many," "several," or "a large number of."

### 3.6 Technology lists

**Rule:** List technologies, tools, libraries, and frameworks as comma-separated values on a single line. Do not use a bullet list for technology enumeration.

Good example:

```markdown
<!-- CORRECT: flat list, token-efficient, agent-parseable -->
Technologies: Python, PyTorch, Scikit-learn, Pandas, QEMU, ARM GCC
```

Bad example:

```markdown
<!-- WRONG: bullet list wastes tokens and fragments what is a single concept group -->
Technologies:
- Python
- PyTorch
- Scikit-learn
```

### 3.7 Header hierarchy

**Rule:** Follow this four-level hierarchy strictly. Do not skip levels.

| Level | Used for |
|---|---|
| H1 (`#`) | File title. One per file. |
| H2 (`##`) | Major sections: Education, Professional experience, Skills index, etc. |
| H3 (`###`) | Individual entries: each degree, role, cert, competition. |
| H4 (`####`) | Sub-entries: courses under a degree, labs under a project hub. |
| H5 (`#####`) | Projects nested under a course or lab. |

## 4. Anti-patterns

### Unicode bold as visual headers

**What it looks like:** `𝗡𝗲𝘁𝘄𝗼𝗿𝗸 𝗮𝗻𝗱 𝗖𝗹𝗼𝘂𝗱 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆` used as a visual header inside a section body.

**Why it fails:** Unicode bold characters inflate token count, break in some parsers, and are semantically invisible to language models. Content appears unstructured to an agent.

**What to do instead:** Use a proper Markdown heading at the correct level in the hierarchy.

### Skills listed without body evidence

**What it looks like:** A term appears in the Skills index but does not appear in any course, project, or role section.

**Why it fails:** An agent asked to justify a skill claim in a cover letter cannot cite supporting evidence. Recruiters or screening workflows that compare claims across documents may flag unsupported skills as weak or inconsistent.

**What to do instead:** Only list a skill if it is backed by at least one course, project, role, or certification in the file body.

### Explanatory prose inside project sections

**What it looks like:** "PyTorch is a deep learning framework. It was used in this project to train a classifier."

**Why it fails:** The reader is assumed to know what the tool is. Explaining it wastes tokens and buries the actual contribution.

**What to do instead:** State what was done with the tool, not what the tool is.

### Missing TL;DR on project and role sections

**What it looks like:** A 30-line project section with no TL;DR line.

**Why it fails:** An agent generating a CV bullet for that project must parse the full section to find the key claim. This increases token usage and raises the risk of misrepresentation.

**What to do instead:** Add a TL;DR immediately after every `[PROJECT]`, `[THESIS]`, `[COMPETITION]`, and `[ROLE]` heading.

### Null and N/A values in the QUICK REFERENCE block

**What it looks like:** `portfolio: N/A` or `portfolio: null` in the YAML block.

**Why it fails:** These values pollute the block with noise. A YAML parser may treat them as strings rather than absent fields, causing unexpected behavior in agent pipelines that consume the block programmatically.

**What to do instead:** Omit the field entirely when it has no value.

## 5. Validation checklist

Before considering a context file complete, verify all of the following items.

- [ ] The file opens with an H1 title in the specified format.
- [ ] The QUICK REFERENCE YAML block is complete and appears before the scope declaration.
- [ ] The scope declaration includes the `<!-- VERIFIED FACTS: ... -->` comment.
- [ ] Every verified fact in the file appears inside the `<!-- VERIFIED FACTS: ... -->` comment.
- [ ] Every H3 and deeper heading representing a professional artifact has a semantic tag.
- [ ] Every `[PROJECT]`, `[THESIS]`, `[COMPETITION]`, and `[ROLE]` section has a TL;DR line under 30 words.
- [ ] The Skills index is present and written as a flat categorical enumeration.
- [ ] Every skill in the Skills index appears in at least one body section.
- [ ] No Unicode bold characters appear anywhere in the file.
- [ ] All dates follow the specified format with en-dashes for ranges.
- [ ] All technology enumerations use comma-separated format, not bullet lists.
- [ ] All quantifiable results are expressed as numbers.
- [ ] The QUICK REFERENCE block contains no `null` or `N/A` values.

---

*Next step: Learn how to load the file into a session in the [Agent workflow for context file users](./agent-workflow.md).*

---

## Section: file maintenance

<!--
metadata:
  title: "Context file maintenance"
  platform: "general"
  objective: "Explains when and how to update Career Context, manage token growth, and keep evidence anchors and version history accurate."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["context-file", "maintenance", "versioning", "token-efficiency"]
  agent_priority: "low"
-->



> Rules and workflows for keeping Career Context accurate, current, and token-efficient as the user's career evolves over time.

---

## 1. Overview

This section covers the maintenance lifecycle of Career Context. A file that is outdated, disorganized, or bloated with redundant detail can surface stale facts and waste context. The primary audience is a person who has already built the file and wants to maintain it over time.

## 2. When to update

**Rule:** Update the context file only when a real-world event has occurred and is verifiable. Do not add content speculatively.

The trigger for every update is a completed, confirmable fact. These are the events that warrant an update:

- A new course grade is confirmed.
- A project is finished and a repository or report exists.
- A new role, internship, or research position begins.
- A competition result is published.
- A certification is awarded and an ID or score is issued.
- A paper is accepted, published, or posted as a preprint.
- A language certificate is received with an official score.

Do not add a course before the grade is official. Do not add a project before it has a concrete deliverable. Do not add a role before the start date has passed. A context file that contains unverified facts is worse than one that is slightly out of date - the VERIFIED FACTS comment in the scope declaration exists precisely to enforce this rule.

## 3. How to integrate new content using an agent

Integrating new content into an existing context file by hand is error-prone, especially when the file is large. The recommended approach is to feed the raw new material to an agent and instruct it to integrate the content into the correct section, following the structural rules in [context-file-spec.md](./context-file-spec.md).

Use the prompt template below for every integration task.

```text
I have new content to add to my Career Context. The context file is loaded
in this session. The rules that govern its structure are in context-file-spec.md,
also loaded in this session.

New material:
[Paste the raw new material here. This can be a grade notification, a project
description, a certificate PDF export, a role description, or any other
unstructured source.]

Instructions:
1. Identify which section of the context file this content belongs in, based
   on the section tags and structure defined in context-file-spec.md.
2. Write the new entry in the correct format, including the required semantic
   tag, TL;DR line (if applicable), and any required fields.
3. Show me the complete new entry as a diff: the proposed addition, with its
   position in the file clearly identified (e.g., "insert after line X" or
   "append to section Y").
4. Identify any facts in the new material that must be added to the
   VERIFIED FACTS comment in the scope declaration. List them explicitly.
5. Identify any new skills demonstrated in the new material that should be
   added to the Skills index. For each one, confirm that it is supported by
   evidence in the new entry before adding it.

Do not modify any existing content in the context file. Only add.
```

Review the agent's proposed diff before applying it. The agent should not modify existing entries. It should not add skills to the Skills index without backing evidence. It should not invent facts not present in the raw material.

## 4. Token growth management

As the context file grows over multiple years, it may reach a size where loading it in full consumes a significant portion of the available context window. The rules below prevent the file from bloating while preserving its completeness.

**Rule:** Do not delete completed entries. Move them toward the bottom of their section if they are no longer central to your positioning, but do not remove them. A missing entry cannot be cited.

**Recommendation:** When an entry becomes peripheral to your current positioning, compress its body detail. Remove sub-bullets that explain generic methodology and retain only the facts that are specific and quantified. The heading, tag, TL;DR, and key result must always remain.

**Rule:** The QUICK REFERENCE block must always reflect current positioning, not historical completeness. If a role ended three years ago and is no longer relevant to your target roles, remove it from the `professional:` field in the QUICK REFERENCE block. The full entry stays in the body.

**Rule:** The `top_skills` field in the QUICK REFERENCE block lists the 8–15 skills most central to your current positioning. Remove skills that have become background knowledge and are no longer differentiating. The skill still stays in the Skills index body; it just drops out of the quick-access list.

The net effect of these rules is that the QUICK REFERENCE block always reads as a current snapshot of your positioning, while the file body preserves the full historical record for deep queries.

## 5. Keeping the VERIFIED FACTS comment current

The `<!-- VERIFIED FACTS: ... -->` HTML comment at the end of the scope declaration is the file's integrity anchor. It lists every atomic fact that must never be hallucinated: grades, GPA, dates, certification IDs, certification scores, competition rankings, and any other numeric or dated fact that an agent might otherwise estimate or guess.

**Rule:** Every time a new verified fact is added to the file body, it must also be added to the VERIFIED FACTS comment. This step is not optional.

The format for the comment is a comma-separated list of key-value pairs on one line, or multiple lines within the comment block if the list is long. For example:

```markdown
<!-- VERIFIED FACTS: graduation=2024-06-13, final_grade=101/110, gpa=29.48/30,
cert_score=172, cert_id=C7109952, competition_result=1st_place,
competition_year=2025 -->
```

When using an agent to integrate new content (section 3 of this file), always instruct it to update the VERIFIED FACTS comment as part of the same task. The prompt template in section 3 already includes this instruction.

## 6. Versioning the context file

**Recommendation:** Keep the context file in a private Git repository or a versioned cloud document. The commit history is the changelog of your career.

A private Git repository is the most robust option. Each update becomes a commit. The commit message describes what changed. Examples:

```text
Add grade for Network and Cloud Security (30L/30)
Add eBPF verifier bypass research project
Add Huawei internship - post-quantum cryptography thesis
Add IEEE-HKN 1st place result, update QUICK REFERENCE
```

This practice produces three concrete benefits. First, you can recover any earlier version of the file if an update introduces an error. Second, the commit log gives you a dated record of every career development, which is useful for performance reviews, annual self-assessments, and visa or scholarship applications that require a chronological work history. Third, if you ever want to roll back the QUICK REFERENCE block to a previous positioning (for a specific application that targets an older skill set), you can retrieve it precisely.

If a Git repository is not practical, a versioned cloud document with named versions (e.g., "Version after Huawei start - February 2026") serves the same purpose. The critical property is that past states of the file are recoverable.

**Rule:** Never overwrite the file in place without a version checkpoint. A context file with no history is a fragile artifact.

---

*Return to the [Agent context optimization index](./README.md).*

---

## Section: why context files

<!--
metadata:
  title: "Why build Career Context"
  platform: "general"
  objective: "Explains the problem that Career Context solves and how it differs from common alternatives."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["context-file", "motivation", "workflow", "productivity"]
  agent_priority: "low"
-->



> A new agent conversation may start without the career facts, evidence boundaries, or direction needed for the task. Career Context gives it a maintained, inspectable starting point.

---

## 1. Overview

This section explains the practical problem that Career Context solves. It covers how the file changes the daily workflow of using an agent for career tasks and compares it with common workarounds. It is written for someone deciding whether to build the file.

## 2. The problem: every session starts from scratch

Each time you open a new agent session and ask for a career-related output, the agent has no memory of previous conversations. It does not know your name, your degree, your work history, your strongest skills, or the role you are targeting. You have to supply that information every time. In practice, this means one of three things happens.

You paste raw text into the chat. A CV export, a LinkedIn profile dump, a copy of old cover letters. The agent works with whatever you give it. The problem is that raw text is unstructured. There is no clear separation between a course you took in 2019 and your current thesis work. There are no explicit signals about which project was most technically demanding, which role was most recent, or what your target positioning is. The agent does its best, but it is guessing at structure and priority.

You rely on a provider's memory feature. Storage, retrieval, inspection, correction, portability, and reset behavior vary by provider. A user-owned file remains directly inspectable and can be supplied to another system, while a provider feature remains governed by that provider.

You write a long prompt from scratch. You describe yourself every time: your background, your skills, the role you are applying for, the tone you want. This is the most reliable approach, but it is also the most wasteful. The same facts get rewritten in every session, with small variations that introduce inconsistency over time.

All three approaches produce the same outcome: generic, loosely grounded outputs that require heavy editing before they are usable.

## 3. What the context file changes

Career Context is a Markdown document you maintain in your own file system. It can contain education, experience, projects, skills, certifications, languages, goals, evidence links, boundaries, and claims to avoid in a consistent structure.

When the file exists and is up to date, the workflow for any career task collapses to three steps.

Load the context file into the agent's context window. State the task. Receive an accurate, specific output.

That is the entire process. The agent does not need to ask what degree you hold, what grade you received, which technology you used, or what the result of a project was. Every fact is already in the file, in a structure the agent can navigate without confusion.

The outputs this enables are qualitatively different. A cover letter generated from a context file names the specific project most relevant to the job description. It cites the actual grade or competition result that demonstrates the claim, and positions you precisely rather than generically. A LinkedIn About section rewrite reflects your actual current positioning, not a paraphrased version of whatever text you pasted in. A CV variant for a specific role selects and emphasises the right subset of your experience, because the full record is available for the agent to choose from.

## 4. What you can do with the file

The examples below are the kinds of prompts you write once the file exists. Each one assumes the context file is loaded into the session alongside any relevant Skill submodule.

```text
Using my context file, write a cover letter for this job description.
Target role: Senior Security Engineer. Keep it under 400 words.
Emphasize the eBPF kernel research and the Huawei PQC thesis.
```

```text
Update the About section of my LinkedIn profile based on my current
positioning in the context file. Apply the rules in the linkedin submodule.
Target audience: security research groups and senior engineering recruiters.
```

```text
Generate a one-page CV tailored for a cryptography research internship.
Use only the content from my context file that is directly relevant.
Format it for ATS compatibility following the cv-ats submodule rules.
```

```text
Using my context file, prepare five interview questions and model answers
for a security analyst role. Base the answers strictly on verified facts
in the file, not on general knowledge.
```

These are not special prompts that require new skills to write. They are the natural result of having all your facts organized in one place. The context file is the input. The Skill submodules in this repository are the rules. The agent is the executor.

## 5. Why this outperforms the alternatives

The table below compares Career Context with the three workarounds described in section 2.

The approach being compared and why each falls short is summarized here.

**Copy-pasted raw text** is unstructured. Semester boundaries are invisible to the agent. Project importance is undefined. Positioning is implicit rather than declared. Every session produces slightly different outputs because the input is slightly different each time.

**Provider memory** is provider-specific. Its inspection, correction, persistence, retrieval, and portability behavior depends on the product. Career Context is a separate user-owned file whose contents can be inspected and corrected directly; it does not make the provider's memory behavior more predictable.

**Per-session prompts** are accurate when written carefully, but they are a maintenance burden. You are re-doing the same work repeatedly. There is no canonical version of your career record. Different sessions produce outputs that are inconsistent with each other because the prompts differ slightly each time.

The context file solves each of these problems. It is structured, so the agent can locate any fact by navigating the section tags. It is canonical, so every output is grounded in the same source of truth. It is version-controlled, so you can see exactly what changed between the version you used for one application and the version you are using now.

## 6. The file is a living document, not a one-time artifact

The context file is not something you build once and archive. It is a document you feed whenever your career changes. A new grade is confirmed: add it to the relevant course entry and update the QUICK REFERENCE block. A project is completed: add the TL;DR, the technologies, the outcome. A new role starts: add the role entry with the TL;DR and the initial scope.

Each update is small. The average update takes less time than explaining the new fact from scratch in an agent session. Over time, the file becomes a complete, accurate, and always-current record of your professional history - one that any agent can use immediately, without prompting, without clarification, without guessing.

That is the case for building it.

---

*Next step: Review the Career Context file specification in this guide.*
