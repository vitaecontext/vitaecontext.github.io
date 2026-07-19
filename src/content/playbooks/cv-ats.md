---
title: "CV and ATS optimization"
platform: "cv-ats"
objective: "Master index and routing logic for formatting and optimizing CVs for Applicant Tracking Systems."
status: "draft"
last_updated: "2026-06-21"
tags: ["cv", "ats", "resume", "index"]
agent_priority: "high"
id: "cv-ats"
---

> This directory helps turn a CV into a document that parsers can extract, recruiters can scan, and agents can safely tailor without breaking the layout.
> Public web page: [CV and ATS optimization playbook](https://vitaecontext.github.io/playbooks/cv-ats/).

---

## 1. Overview: The ATS problem

The prettiest CV is not always the strongest CV. If the parser misses the name, dates, skills, or job titles, the design has already failed.

When you apply for a job, a human recruiter may not read your CV first. Many hiring teams use an Applicant Tracking System (ATS) to store applications, parse resumes into structured fields, search for candidates, and manage review workflows before a human evaluates the final profile.

The problem is that ATS parsers do not understand visual design the way a human does. They extract text from PDF or Word files, look for standard section headers such as "Experience" and "Education," and map the result into database fields. Some workflows also use keywords, filters, or matching tools to help recruiters find relevant candidates.

The solution is to design a CV for reliable parsing first and human readability second. This module provides constraints and strategies for building a machine-readable CV that gives the user's qualifications the best chance of being extracted correctly.

```text
Weak bullet:
"Worked on backend APIs and improved performance."

Stronger bullet:
"Reduced API response time by 38% by adding Redis caching and optimizing PostgreSQL queries."
```

## 2. Use this module when

- A CV needs to be tailored for a specific job description.
- The layout may be too visual, too dense, or hard for parsers to extract.
- Bullet points need stronger metrics, clearer action verbs, or better keyword alignment.
- A LaTeX, Markdown, Word, or PDF CV needs an agent-safe editing workflow.

## 3. Fast path

1. Start with [Core sections](./core-sections.md) to check the required structure.
2. Use [Formatting rules](./formatting-rules.md) before changing layout or typography.
3. Run the checks in [Common pitfalls](./common-pitfalls.md) before sending the CV.
4. Use [Keyword strategy](./keyword-strategy.md) and [Achievement metrics](./achievement-metrics.md) when tailoring content to a role.
5. Use [Agent workflow](./agent-workflow.md) when an AI agent is editing a source file.

## 4. Module index

The optimization logic is divided into the following documents, ordered from the most foundational structural rules to advanced AI workflows:

- **[Core sections](./core-sections.md):** The mandatory CV sections you must include, their exact naming conventions, and the correct chronological ordering.
- **[Formatting rules](./formatting-rules.md):** Hard constraints on the single-page layout, typography, file types, and eliminating wasted space.
- **[Common pitfalls](./common-pitfalls.md):** The elements that immediately break ATS parsers (graphics, tables), how to run the mandatory "copy-paste-friendly" test, and avoiding the LinkedIn "Trust Gap".
- **[Keyword strategy](./keyword-strategy.md):** The methodology for extracting hard and soft skills, handling gap analysis and skill translation, and integrating keywords for parser and recruiter clarity.
- **[Achievement metrics](./achievement-metrics.md):** The syntactic formula (Action Verb + Task + Result) and STAR/STAR+R/XYZ methods for writing high-impact bullet points, including the Resume Quantifier strategy.
- **[Agent workflow](./agent-workflow.md):** Why plain-text LaTeX (.tex) is the preferred format for automated CV tailoring by AI agents.
- **[Sources](./sources.md):** Official ATS, recruiting-platform, and parser documentation plus downgrade notes for unsupported claims.

## 5. Usage for agents

When an AI agent is tasked with optimizing a user's CV:

1. Review this index to determine which specific sub-module is relevant to the task.
2. If building a CV from scratch, start with `core-sections.md` and `formatting-rules.md`.
3. If fixing parsing issues, load `common-pitfalls.md`.
4. If rewriting bullet points, load `achievement-metrics.md` and `keyword-strategy.md`.
5. Always prioritize empirical constraints over creative formatting.

---

Runtime skill: [.skills/agent-skill/vitaecontext-cv/SKILL.md](https://github.com/vitaecontext/vitaecontext/blob/main/.skills/agent-skill/vitaecontext-cv/SKILL.md). Source notes: [sources.md](./sources.md).

---

## Section: achievement metrics

<!--
metadata:
  title: "CV achievement metrics"
  platform: "cv-ats"
  objective: "Defines a structured formula for writing high-impact, readable experience bullet points."
  status: "draft"
  last_updated: "2026-06-21"
  tags: ["cv", "ats", "metrics", "achievements"]
  agent_priority: "medium"
-->



> This file defines a structured formula for work experience bullet points so they highlight quantifiable impact for both parsers and human reviewers.

---

## 1. Overview

Recruiters and many screening workflows prioritize candidates who demonstrate impact rather than just listing responsibilities. Strong bullet points connect an action to a business result. This document recommends a clear syntactic formula so bullet points are rich in relevant keywords, easier to scan, and persuasive to humans.

## 2. The bullet point formula

**Recommendation:** Structure bullet points with an established framework like STAR, STAR+R, or XYZ when the experience supports it. Adopt a rigorous formula to make impact visible. The baseline is Action Verb + Task + Result. Highly recommended variations include:
- **STAR:** Situation (context), Task (challenge), Action (what you did), Result (quantifiable outcome).
- **STAR+R:** Adds *Reflection* to STAR (what was learned or how it shaped future architectural decisions). This is useful for seniority signals and interview preparation, especially when a reviewer wants evidence of reasoning.
- **XYZ:** Accomplished [X] as measured by [Y], by doing [Z].

**Rule:** Quantify achievements with hard numbers. Use numeric values (%, $, #) to define the result. Numbers make impact easier to scan and easier to search. If exact numbers are unknown, use the **Resume Quantifier** strategy to ethically estimate impact based on defensible proxy metrics (e.g., "Reduced latency by an estimated 30% based on baseline profiling").

**Rule:** Use the active voice and past tense for past roles. Avoid passive phrases like "Responsible for" or "Tasked with." Start immediately with the action. Use present tense only for ongoing responsibilities in a current role.

## 3. Examples

Good example:
```markdown
<!-- CORRECT -->
- Architected and migrated the legacy monolithic application to a microservices architecture using Docker and AWS, reducing server response time by 40% and cutting hosting costs by $12,000 annually.
```
*Why it works (STAR/XYZ method):* It establishes the Action (Architected and migrated), the Task (legacy monolithic to microservices with Docker/AWS), and the clear Result/Measurement (40% reduction, $12,000 savings).

Bad example:
```markdown
<!-- WRONG -->
- Responsible for migrating the old application to the cloud, which made it run faster and saved the company money.
```
*Why it fails:* It uses passive phrasing ("Responsible for") and lacks any specific technical keywords or quantifiable numbers.

## 4. Anti-Patterns

### The job description replica

**What it looks like:** Bullet points that read like a list of duties: "Attended daily standups," "Wrote code for the frontend," "Fixed bugs."
**Why it fails:** Listing duties proves you held the job, but it does not prove you were good at it. It lacks the target keywords and metrics that recruiters and screening systems use to understand fit.
**What to do instead:** Translate duties into achievements using the Action Verb + Task + Result formula.

---

*Next step: Automate this process in [Agent workflow](./agent-workflow.md).*

---

## Section: agent workflow

<!--
metadata:
  title: "Agent workflow for CV optimization"
  platform: "cv-ats"
  objective: "Explains why LaTeX (.tex) can be a strong source format for AI agents automating CV tailoring."
  status: "draft"
  last_updated: "2026-06-21"
  tags: ["cv", "ats", "latex", "agents", "automation"]
  agent_priority: "high"
-->



> This file details a robust technical workflow for AI agents managing CVs, using LaTeX (`.tex`) as a version-controlled source format with precise visual control when the user is comfortable compiling PDFs.

---

## 1. Overview

While word processors like Microsoft Word are standard for humans, they introduce invisible metadata, complex XML structures, and layout shifts when edited programmatically. For an AI agent tasked with continuously updating a user's CV to match specific job descriptions, plain text source formats are easier to review and version. LaTeX (`.tex`) is a strong default for this workflow when the user is comfortable compiling PDFs.

## 2. The LaTeX advantage

**Recommendation:** Use `.tex` as the source of truth for programmatic CV generation when the user already works comfortably with LaTeX. LaTeX files are plain text, which helps AI agents inject keywords, rewrite bullet points, and reorder sections with less risk than binary or layout-heavy formats. Layout still needs a compile and extraction check after edits.

**Recommendation:** Compile `.tex` directly to PDF for the final ATS submission when the employer accepts PDF. A PDF generated from LaTeX gives strong control over layout, margins, and typography, but the exported PDF still needs to pass a plain-text extraction check before submission.

## 3. Agent workflow constraints

**Rule:** Maintain strict separation of content and styling macros. When an agent edits a `.tex` file, it must only modify the content strings within predefined macros (e.g., `\cventry{Role}{Date}`). Do not alter the document preamble (`\usepackage`, `\geometry`) unless explicitly directed to change the global design.

**Recommendation:** Use the provided templates as the baseline. Keep personal CV examples outside the public repository unless they are fully anonymized. Apply the canonical rules from this workflow, the formatting rules, and the templates when generating or editing user-facing CVs.

## 4. Examples

Good example:
```latex
<!-- CORRECT -->
% Clean, macro-driven content injection \mysection{Experience} \cventry{Security Engineer Intern, Tech Corp}{Feb 2026 - Present} \begin{itemize}
    \item Architected a microservices backend... \end{itemize}
```
*Why it works:* The agent can easily locate the `\cventry` and the `itemize` block using regex or basic parsing, safely injecting new bullet points tailored to a specific job description without affecting the alignment of the date.

Bad example:
```latex
<!-- WRONG -->
% Hardcoded spatial formatting \noindent \textbf{Security Engineer Intern, Tech Corp} \hspace{4cm} \textbf{Feb 2026 - Present} \\
Architected a microservices backend...
```
*Why it fails:* Manual spacing (`\hspace`) and forced line breaks (`\\`) make the document fragile. If the agent changes the job title length, the date alignment will break.

---

*Return to the [CV and ATS optimization index](./README.md).*

---

## Section: common pitfalls

<!--
metadata:
  title: "CV common pitfalls"
  platform: "cv-ats"
  objective: "Lists specific elements that break ATS parsers and introduces the Plain Text Test for verification."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["cv", "ats", "pitfalls", "testing"]
  agent_priority: "medium"
-->



> This file catalogs common errors that cause a CV to be misparsed, and provides a practical method to verify ATS compatibility.

---

## 1. Overview

Many candidates are filtered out or slowed down not because they lack qualifications, but because the CV is difficult for parsing systems to extract cleanly. This document highlights the most common technical formatting mistakes and introduces a quick plain-text compatibility test.

## 2. Critical errors to avoid

**Rule:** Do not use headers and footers for critical information. Keep contact information in the main document body. Many resume parsers and screening workflows handle headers and footers unreliably, so they are the wrong place for email addresses, phone numbers, or portfolio links.

**Rule:** Do not embed hyperlinks in text. Write out URLs explicitly (e.g., `linkedin.com/in/username` or `github.com/username`). Do not rely on anchor text such as "Portfolio" or "Click here" as the only visible representation of the link.

**Rule:** Avoid visual skill rating elements. Do not use progress bars, star ratings, or pie charts to represent your proficiency in a skill (e.g., "Python: 4/5 stars"). The parser cannot read the visual graphic, and the resulting text extraction will be gibberish.

**Rule:** Avoid the "Trust Gap" (LinkedIn De-sync). Ensure the CV and public LinkedIn profile remain factually aligned. If dates, titles, or major claims differ across public materials, the candidate creates an avoidable credibility problem.

## 3. Verification: The Copy-Paste-Friendly test

**Rule:** Always verify the CV using a hard copy-paste into a plain text editor. Many modern ATS platforms parse PDFs well, but a plain-text check is still the cheapest way to catch missing text, reordered content, and broken layout before submission.

1. Open the finalized PDF in a standard PDF viewer.
2. Select all text (Ctrl+A / Cmd+A) and perform a hard copy.
3. Paste the text into a plain text editor (e.g., Notepad on Windows, TextEdit on macOS in plain text mode).
4. Review the output. 

If the text is out of order, missing entirely, or contains strange characters, the file needs to be fixed before submission. Adjust the layout until the plain-text output reads logically from top to bottom.

## 4. Anti-Patterns

### The hyperlink masking

**What it looks like:** `[View my GitHub profile here](https://github.com/username)` **Why it fails:** When the ATS strips the formatting, the resulting text will just say "View my GitHub profile here," and the actual URL is lost. **What to do instead:** Write the URL directly into the text: `GitHub profile: github.com/username`.

---

*Next step: Extract and inject the right vocabulary using the [Keyword strategy](./keyword-strategy.md).*

---

## Section: core sections

<!--
metadata:
  title: "CV core sections"
  platform: "cv-ats"
  objective: "Standardizes the required CV sections, their naming conventions, and correct chronological ordering."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["cv", "ats", "sections", "structure"]
  agent_priority: "high"
-->



> This file specifies the safest default sections for an ATS-optimized CV, using standard naming and structural hierarchy.

---

## 1. Overview

Applicant Tracking Systems and resume parsers work better with recognizable section names than with novelty labels. This document defines the safest naming patterns and ordering conventions for a machine-readable CV.

## 2. Core sections and naming rules

**Rule:** Use standard section headers. Do not use creative variations for core sections. Safe defaults include:
- Contact Information (Do not use a header; place directly at the top)
- Professional Summary
- Work Experience or Experience
- Skills
- Education

**Recommendation:** Format section headers consistently. ALL CAPS is acceptable, but consistency matters more than the exact visual treatment.

**Rule:** Structure the CV in reverse-chronological order. Within the Work Experience and Education sections, list entries from the most recent to the oldest.

## 3. Formatting rules within sections

**Rule:** Follow the "Top Line" rule for your name. The first line of the document should contain the full name only. Move degrees or credentials to later lines so the file opens with one clean identity signal.

**Rule:** Place contact information in the document body. Do not put email, phone number, or LinkedIn URL in the header or footer, because these areas are handled less reliably by parsers.

**Rule:** Use one explicit date format throughout the document. Use an unambiguous format such as `MM/YYYY - MM/YYYY` or `Month YYYY - Month YYYY`, and apply it consistently. Do not use seasons such as "Summer 2021" or year-only ranges if a month is known.

## 4. Examples

Good example:
```markdown
<!-- CORRECT -->
## Work Experience

**Software Engineer** Tech Corp | San Francisco, CA | 06/2021 - Present
- Bullet point one.
- Bullet point two.
```

Bad example:
```markdown
<!-- WRONG -->
## Professional Journey

**Tech Corp** — Software Engineer (Summer '21 to Now)
- Bullet point one.
- Bullet point two.
```
*Why it fails:* The header is harder to classify, and the date format is ambiguous.

## 5. Anti-Patterns

### Creative section headers

**What it looks like:** Using "What I've Built" instead of "Work Experience".
**Why it fails:** The section becomes harder for both parsers and recruiters to classify quickly.
**What to do instead:** Use a standard header such as "Work Experience" or "Experience".

---

*Next step: Apply the strict layout constraints in [Formatting rules](./formatting-rules.md).*

---

## Section: formatting rules

<!--
metadata:
  title: "ATS formatting rules"
  platform: "cv-ats"
  objective: "Defines the hard technical constraints for ATS parsing to ensure a CV is machine-readable."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["cv", "ats", "formatting", "layout"]
  agent_priority: "high"
-->



> This file defines conservative CV formatting constraints that improve the odds of clean parsing across Applicant Tracking Systems.
> Deviation from these layout rules can cause missing, reordered, or poorly classified text.

---

## 1. Overview

Applicant Tracking Systems and resume parsers extract text from uploaded files and try to map it into structured fields. They are much less reliable than a human reader when layout becomes decorative. This document defines the safest constraints for fonts, layout, and file types.

## 2. Layout constraints

**Recommendation:** Default to one page unless the profile clearly needs more space. This is mainly a recruiting and readability rule, not an ATS rule. For early-career candidates, one page is usually the strongest default.

**Rule:** Optimize horizontal space and eliminate orphan words. If a bullet point wraps to a new line leaving only one or two words on that line (an "orphan"), you are wasting an entire line of vertical space. Either prune filler words to pull the sentence back onto a single line, or expand the achievement with more metrics to fully utilize the second line.

**Rule:** Use a strict single-column layout. Multi-column layouts are still one of the most common causes of scrambled extraction. A single column is the safest default across parsers.

**Rule:** Do not use tables, text boxes, or floating elements. Information placed inside tables or text boxes is more likely to be skipped, reordered, or appended incorrectly during extraction.

**Rule:** Keep margins within standard limits (0.5" to 1"). Set document margins between 0.5 inches (1.27 cm) and 1 inch (2.54 cm) on all sides. This ensures printing and PDF conversion do not clip text, while maintaining enough "white space" for OCR systems to distinguish between sections.

## 3. Typography constraints

**Rule:** Stick to standard system fonts and size. Use established system fonts (Arial, Calibri, Georgia, Helvetica, Times New Roman, or Tahoma). Do not use custom web fonts. Maintain a minimum font size of 10pt, with 11pt body text preferred in most cases.

**Recommendation:** Disable automatic hyphenation. Do not split words across lines with automatic hyphenation if the template can avoid it. Plain-text extraction is cleaner when keywords stay intact.

**Rule:** Avoid graphics, icons, and non-standard bullets. Do not use SVG icons, PNG graphics, or custom bullet point shapes that can compile into garbled characters. Stick to simple hyphens or standard solid bullets.

## 4. File format rules

**Rule:** Submit CVs in `.docx` or text-based `.pdf` format only. If the employer does not specify a format, `.docx` and text-based `.pdf` are the safest options. If the employer specifies a format, follow the employer's instruction.

**Recommendation:** Use LaTeX (`.tex`) compiled to PDF for absolute layout control. LaTeX is a strong option for version-controlled, text-first workflows because the source file is plain text and layout is explicit. It is not magic: the exported PDF still needs to pass a plain-text extraction check.

> Warning: Never submit an image-based PDF (a scanned document or a flat image saved as a PDF). The ATS may not read the text, resulting in a blank or incomplete profile.

## 5. Examples

Good example:
```markdown
<!-- CORRECT -->

- Font: Arial 11pt
- Layout: Single column, left-aligned
- File type: exported from Word as a text-PDF
```

Good example (LaTeX):
```latex
<!-- CORRECT -->
% Standard article class with clean Helvetica font \documentclass[a4paper,10pt]{article} \usepackage[scaled]{helvet} \renewcommand{\familydefault}{\sfdefault} \usepackage[left=1.4cm,right=1.4cm,top=1.2cm,bottom=1.2cm]{geometry}
```

Bad example:
```markdown
<!-- WRONG -->

- Font: Custom Google Web Font (Inter)
- Layout: Two-column grid with a sidebar for skills
- File type: JPEG saved inside a PDF container
```

## 6. Anti-Patterns

### The invisible table hack

**What it looks like:** Using a two-column table with hidden borders to align dates on the right side of the page.
**Why it fails:** The parser may read the table in the wrong order, disconnecting the date from the job title.
**What to do instead:** Use standard tab stops or right-alignment formatting within a single text line to position dates. If using LaTeX, the `\hfill` command is perfect for this: `\textbf{Role}\hfill\textbf{Date}` generates the visual space while parsing sequentially as pure text.

---

*Next step: Learn how to test your layout in [Common pitfalls](./common-pitfalls.md).*

---

## Section: keyword strategy

<!--
metadata:
  title: "CV keyword strategy"
  platform: "cv-ats"
  objective: "Methodology for extracting and integrating job description keywords effectively into a CV."
  status: "draft"
  last_updated: "2026-06-21"
  tags: ["cv", "ats", "keywords", "seo"]
  agent_priority: "high"
-->



> This file defines how to identify high-value keywords from a job description and integrate them naturally into a CV for safer ATS parsing and recruiter screening.

---

## 1. Overview

ATS platforms and recruiter workflows often use keyword matches, structured fields, and search filters to surface candidates. The exact scoring behavior varies by vendor and employer. This document provides the strategy for identifying the right keywords (hard vs. soft skills) and contextualizing them within the CV without creating spammy or unreadable text.

## 2. Keyword extraction rules

**Rule:** Differentiate between hard skills and soft skills. Hard skills are technical abilities, tools, and platforms (e.g., "Python," "AWS," "Figma"). These are usually easier for parsers and recruiters to search directly, so prioritize them. Soft skills (e.g., "Leadership," "Communication") are secondary and should be demonstrated through context rather than listed verbatim.

**Rule:** Mirror the exact phrasing of the job description for hard skills. If the job description asks for "Search Engine Optimization," do not write only "SEO Strategy." Some systems and recruiter searches still rely on exact string matching.

**Rule:** Handle acronyms defensively. Include both the spelled-out term and the acronym on the first mention to capture all possible search queries.

**Rule:** Use Skill Translation for career transitions. Map transferable skills from one industry to the terminology of another. For example, translate "Project Management" in construction to "Agile Delivery" in tech to align with the target ATS dictionary.

## 3. Keyword integration rules

**Recommendation:** Contextualize keywords for parser and recruiter clarity. Some recruiting workflows may use matching tools or AI-assisted screening, but exact models are usually vendor-specific and not public. Integrate target keywords directly into Work Experience bullet points to show how the skill was used and why it mattered. Do not create a massive block of comma-separated keywords at the bottom of the CV.

**Rule:** Avoid keyword stuffing. Do not hide keywords using white text or artificially repeat a keyword more than naturally required. Parsers may still extract hidden text, and human reviewers can reject the application if the tactic is discovered.

**Recommendation:** Balance tailoring with speed (The "First-Come" Factor). Do not over-optimize at the expense of time. Many recruiters review applications in arrival order or in batches. A clear, well-tailored CV submitted early can outperform a heavily polished CV submitted after the hiring pipeline is already crowded.

## 4. Examples

Good example:
```markdown
<!-- CORRECT -->
- Managed Search Engine Optimization (SEO) strategies across 5 enterprise client accounts, increasing organic traffic by 45% year-over-year.
```
*Why it works:* It includes the exact phrasing, the acronym, and provides a contextual metric for the skill.

Bad example:
```markdown
<!-- WRONG -->
Skills: SEO, Search Engine Optimization, SEO strategy, search engine marketing, leadership, management, team player.
```
*Why it fails:* It lists variations of the same keyword without providing context, which reads poorly to humans and can be flagged by ATS filters.

## 5. Anti-Patterns

### The invisible keyword dump

**What it looks like:** A paragraph of job description keywords copy-pasted at the footer of the CV and changed to white text to blend into the background. **Why it fails:** ATS parsers extract all text regardless of color. The resulting profile will show a block of disjointed text, causing human recruiters to immediately reject the candidate for attempting to game the system. **What to do instead:** Integrate the most important keywords naturally into the Professional Summary and Work Experience sections.

---

*Next step: Prove your keywords with impact in [Achievement metrics](./achievement-metrics.md).*

---

## Section: sources

<!--
metadata:
  title: "ATS optimization sources"
  platform: "cv-ats"
  objective: "Centralized official sources for ATS parsing, resume upload behavior, and conservative CV formatting claims."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["cv", "ats", "sources", "parsing"]
  agent_priority: "low"
-->



> This file lists official or maintainer-published sources that can support CV and ATS claims. Candidate-facing resume advice that lacks an official ATS or parser source must stay `likely`, `inferred`, or `disputed` in runtime wiki entries.

---

## 1. Overview

The `cv-ats` module uses official ATS, recruiting-platform, and parser documentation where possible. University career-center pages, resume-tool blogs, agency posts, and community experiments are useful background, but they do not support `stable` platform-behavior claims.

## 2. Source table

| Source | URL | Type | Covers | Confidence |
|---|---|---|---|---|
| Greenhouse: Unsuccessful resume parse | https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse | help-center | Resume parse failure causes, file-size limits, image-only uploads, graphics, tables, headers, footers, text boxes, columns, unclear sections, incomplete titles | stable |
| Greenhouse: Manually add a candidate or prospect | https://support.greenhouse.io/hc/en-us/articles/115002195063-Manually-add-a-candidate-or-prospect | help-center | Resume upload parsing, required manual verification after parsing, embedded-image and layout risks | stable |
| Greenhouse: Resume parsing with non-English languages | https://support.greenhouse.io/hc/en-us/articles/205019689-Resume-parsing-with-non-English-languages | help-center | Language support boundaries for one ATS parser surface | likely |
| SmartRecruiters Developers: Parse a resume | https://developers.smartrecruiters.com/reference/candidatesresumeparse | official-docs | Resume parse endpoint behavior and incomplete-resume parse result | stable |
| Oracle Taleo: Plain Text Resume Parsing for Mobile Devices | https://docs.oracle.com/en/cloud/saas/taleo-enterprise/24c/otcug/c-plaintextresumeparsingmobile.html | official-docs | Plain-text resume paste parsing into candidate records and attached text files | stable |

## 3. Removed or downgraded sources

The previous source list included MIT CAPD, Microsoft Create, Yale Office of Career Strategy, and generic candidate advice. Those are not official ATS or parser sources. Keep their guidance as editorial background only, not as support for `stable` parser behavior.

No clean official source was found for universal claims about exact ATS scores, hidden knockout filters, universal parser ranking, or a single best submission format across all employers. Treat those claims as `inferred` or `disputed`.

---

See also: [CV and ATS optimization](./README.md) and [runtime knowledge](https://github.com/vitaecontext/vitaecontext/blob/main/.skills/agent-skill/vitaecontext-cv/wiki/knowledge.md).
