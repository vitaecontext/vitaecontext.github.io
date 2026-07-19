---
title: "LinkedIn profile optimization"
platform: "linkedin"
objective: "Master index for optimizing LinkedIn profiles around current ranking signals, search discovery, and AI-readable profile structure."
status: "draft"
last_updated: "2026-06-21"
tags: ["linkedin", "360Brew", "search", "ai"]
agent_priority: "high"
id: "linkedin"
---

> This directory helps turn a LinkedIn profile from a generic professional summary into a searchable, evidence-backed profile that recruiters and AI tools can understand.
> Public web page: [LinkedIn optimization playbook](https://vitaecontext.github.io/playbooks/linkedin/).

---

## 1. Overview: The dual-audience problem

Most LinkedIn profiles sound polished and say very little. They use broad claims, vague titles, and soft skills that are hard to verify.

Optimizing a LinkedIn profile is no longer just about adding keywords for a human recruiter to skim. You are now optimizing for two distinct, machine-driven audiences simultaneously.

The first audience is LinkedIn's own ranking, recommendation, and people-search systems. LinkedIn's official help pages say these systems use signals from profile identity, content quality, and recent activity to personalize what members see.

The second audience consists of external AI tools used in recruiting and research. These tools may consume LinkedIn profile data through exports, enrichment products, browser automation, or scraping. The safest optimization strategy is still the same: use explicit job titles, clean skill names, and structured proof of work.

As of April 28, 2026, public commentary around 360Brew is disputed. Some creator and vendor articles describe it as deployed, but secondary reporting and LinkedIn posts quote LinkedIn VP Tim Jurka saying 360Brew was tested with a small group of members and shut down. This module therefore treats 360Brew as research and public debate, not as a production rulebook.

This module provides the structural rules, formatting constraints, and content formulas needed to satisfy both audiences while maintaining an engaging narrative for the human reader who ultimately makes the hiring decision.

```text
Weak headline:
"Student | Developer | Tech enthusiast"

Stronger headline:
"Cybersecurity engineering student | Security research, Python, Linux, network security"
```

## 2. Use this module when

- A LinkedIn profile needs clearer positioning for recruiters, search, or external AI tools.
- The headline, About section, Experience, Featured section, or Skills list feels generic.
- Public profile claims need to stay aligned with the CV, GitHub, portfolio, and context file.
- The user wants activity and engagement advice without relying on algorithm folklore.

## 3. Fast path

1. For a full profile audit, start with [Profile architecture](./profile-architecture.md).
2. For visible positioning, use [Headline strategy](./headline-strategy.md) and [About section](./about-section.md).
3. For proof of work, use [Experience and skills](./experience-and-skills.md) and [Featured section](./featured-section.md).
4. For AI-readable structure, use [AI agent optimization](./ai-agent-optimization.md).
5. For posting and commenting, use [Engagement strategy](./engagement-strategy.md).

## 4. Module index

The optimization logic is divided into the following documents, ordered from foundational algorithms to specific section strategies:

- **[360Brew and ranking signals](./algorithm-360brew.md):** What LinkedIn officially documents, what the public 360Brew debate shows, and what should still be treated as inference.
- **[AI agent optimization](./ai-agent-optimization.md):** Rules for making the profile easy for external AI tools, parsers, and enrichment workflows to understand.
- **[Profile architecture](./profile-architecture.md):** Visual and structural basics, including custom URLs, the Verifications badge, the Voice badge, and Location settings.
- **[Headline strategy](./headline-strategy.md):** Strict formulas for writing highly discoverable, keyword-rich headlines without corporate fluff.
- **[About section](./about-section.md):** Constraints for writing the About section, focusing on first-person voice, clear role positioning, and readable evidence.
- **[Experience and skills](./experience-and-skills.md):** How to keep profile facts aligned with the CV, surface proof links, and use current LinkedIn skills features well.
- **[Featured section](./featured-section.md):** Structuring the Featured carousel with "Proof of Work" (video demos, architecture diagrams, GitHub repositories).
- **[Engagement strategy](./engagement-strategy.md):** Evidence-based posting and commenting practices that align with documented relevance and quality signals.
- **[Sources](./sources.md):** Official LinkedIn help pages plus downgrade notes for 360Brew research and external commentary.

## 5. Reference profiles

The following LinkedIn profiles are actively maintained using the strategies defined in this module and serve as real-world examples of dual-audience optimization:

- **Renato Mignone**: [linkedin.com/in/renato-mignone](https://www.linkedin.com/in/renato-mignone/)
- **Elia Innocenti**: [linkedin.com/in/eliainnocenti](https://www.linkedin.com/in/eliainnocenti/)

## 6. Usage for agents

When an AI agent is tasked with optimizing a user's LinkedIn profile:

1. Review this index to determine which specific sub-module is relevant to the task.
2. If optimizing the overall profile positioning, load `algorithm-360brew.md` and `ai-agent-optimization.md`.
3. If rewriting specific text sections, load `headline-strategy.md` or `about-section.md`.
4. Prefer official LinkedIn guidance over third-party folklore, and label any inferred algorithm behavior as inference rather than fact.

---

Runtime skill: [.skills/agent-skill/vitaecontext-linkedin/SKILL.md](https://github.com/vitaecontext/vitaecontext/blob/main/.skills/agent-skill/vitaecontext-linkedin/SKILL.md). Source notes: [sources.md](./sources.md).

---

## Section: about section

<!--
metadata:
  title: "LinkedIn About section"
  platform: "linkedin"
  objective: "Constraints for writing the About section with clear positioning, readable evidence, and explicit next steps."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["linkedin", "about", "storytelling", "llm"]
  agent_priority: "high"
-->


> This file defines the constraints for the About section, which must function as a readable positioning statement for humans and a clean evidence block for search and AI tools.

---

## 1. Overview

The About section is the core explanatory layer of the profile. While the headline acts as the hook, the About section provides the context and evidence required by recruiters, collaborators, and downstream AI tools. It should clearly articulate the problems solved, the tools used, and the role being targeted.

## 2. Content constraints

**Rule:** Write in the first person. LinkedIn is a professional networking platform, not a formal CV. Do not write in the third person (e.g., "Alex is a senior developer"). Use "I" to establish a direct, conversational tone.

**Rule:** Clearly define your "Ideal Role" and target audience. State explicitly who the profile helps or what roles are being targeted. Clear role language reduces ambiguity for both recruiters and automated matching systems.

**Rule:** Use concrete evidence instead of keyword dumping. Do not write a raw list of technologies. Use complete, context-rich sentences that tie the tools to outcomes, domains, or responsibilities.

**Rule:** Include a clear Call to Action (CTA). End the section by telling the reader exactly what to do next (e.g., "Feel free to DM me to discuss distributed systems, or reach out at email@example.com").

## 3. Formatting rules

**Rule:** Earn the "see more" click with the first lines. The first two sentences should state the strongest positioning claim on the profile. A good opener improves readability and increases the chance that the rest of the section will actually be read.

**Rule:** Use short paragraphs and bullet points. Large walls of text are ignored by human readers and are harder for parsers to segment cleanly. Break the section into readable chunks and use bullets only where they genuinely improve scanning.

## 4. Examples

Good example:
```text
<!-- CORRECT: Strong opener, first-person voice, clear focus, quantified impact, and CTA -->
I build resilient, scalable cloud infrastructure that does not wake engineers up at 3 AM. Over the past 5 years, I have focused on automating deployment pipelines and migrating legacy monolithic systems to Kubernetes.

My core expertise lies in designing GitOps workflows using ArgoCD and Terraform on AWS, which recently helped my team reduce average deployment times by 40% while maintaining 99.99% uptime.

I am currently open to Senior Site Reliability Engineer (SRE) or Platform Engineering roles.

Let's connect! Feel free to DM me here or reach out at email@example.com.
```

Bad example:
```text
<!-- WRONG: Third-person, buzzwords, weak evidence, no CTA -->
John is an innovative, passionate, and results-driven professional with a proven track record of success in the technology sector. He excels at synergizing cross-functional teams to deliver impactful solutions that drive business growth.

Skills: Python, Java, C++, HTML, CSS, SQL, AWS, Azure, Agile, Scrum, Leadership.
```

---

*Next step: Build your visual portfolio in the [Featured section](./featured-section.md).*

---

## Section: ai agent optimization

<!--
metadata:
  title: "AI agent and LLM optimization"
  platform: "linkedin"
  objective: "Recommendations for making a LinkedIn profile easy for external AI tools, parsers, and enrichment workflows to understand."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["linkedin", "ai-agents", "llm", "parsing"]
  agent_priority: "high"
-->



> This file defines the rules for optimizing a LinkedIn profile so external AI tools can read it robustly, even when their exact data pipelines are not public.

---

## 1. Overview

External recruitment tools do not all work the same way. Some rely on browser automation, some on exported or enriched profile data, and some on scraped text. The details are rarely public. The practical response is simple: write a profile that remains understandable after plain-text extraction.

## 2. Vector search readiness

**Rule:** Use standard industry terminology. If the profile uses overly creative titles or uncommon names for common tools, external matching systems have less reliable text to work with. Standard role names and standard skill names are safer.

**Rule:** Explicitly state the "Ideal Role" and core competencies. Many AI-driven workflows compare profile text with a job description. If the About section explicitly names target roles and core competencies in clear language, the match is easier to justify.

## 3. Structured data completeness

**Rule:** Fully populate all structured data fields. Do not rely entirely on the About section. Complete the Skills, Certifications, Education, Experience, and Featured sections so important facts are duplicated in the places parsers most often inspect first.

**Rule:** Add proof links where the claim is strongest. When a project, paper, repository, talk, or credential is public, link it in the most relevant section. Plain claims are weaker than claims with a visible proof source.

## 4. Examples

Good example:
```text
<!-- CORRECT: Explicit terminology for an external parser -->
Targeting Senior Backend Engineer roles. Core competencies include:
- Distributed Systems (Go, gRPC)
- Cloud Infrastructure (Kubernetes, AWS)
- Database Optimization (PostgreSQL)
```

Bad example:
```text
<!-- WRONG: Vague terminology that gives matching tools little usable signal -->
I am a passionate tech enthusiast looking for my next big adventure in the cloud space. I love building things that scale and working with data.
```

---

*Next step: Configure your foundational settings in [Profile architecture](./profile-architecture.md).*

---

## Section: algorithm 360brew

<!--
metadata:
  title: "360Brew and LinkedIn ranking signals"
  platform: "linkedin"
  objective: "Explains what is officially documented about LinkedIn ranking, what the public 360Brew debate adds, and which conclusions remain inferred."
  status: "draft"
  last_updated: "2026-06-21"
  tags: ["linkedin", "360Brew", "ranking", "search"]
  agent_priority: "medium"
-->



> This file separates confirmed LinkedIn behavior from public research and speculation. Use it to avoid treating 360Brew commentary as settled fact.

---

## 1. Overview

LinkedIn has publicly documented how Feed and search relevance work. 360Brew research and public commentary are useful background, but they are not official product documentation for current LinkedIn ranking behavior.

As of June 21, 2026, the grounded position is:

- LinkedIn officially says Feed ranking uses signals from profile identity, content, network, and recent activity.
- LinkedIn officially says people search results depend on relevance to the searcher, profile completeness, skills, connections, and standard job titles.
- 360Brew material and public commentary may explain research direction, but they are not retained as stable source support in this module.
- Several marketing and creator articles claim 360Brew is deployed, but those claims are not official LinkedIn product documentation.
- Secondary reporting and social posts about LinkedIn statements are useful dispute context, not stable product evidence.
- This module therefore treats 360Brew as research and public debate, not as a production rulebook.

## 2. What LinkedIn officially documents

**Rule:** Optimize the profile around identity, content, and activity signals. LinkedIn's help center says Feed personalization looks at three main groups of signals:

- **Identity:** profile details such as role, location, workplace, and skills.
- **Content:** what a post is about, how recent it is, and whether it provides knowledge or advice.
- **Activity:** what a member reacts to, comments on, shares, spends time viewing, and engages with recently.

**Rule:** Optimize for relevance to the searcher, not a universal rank position. LinkedIn explicitly says it cannot guarantee a fixed order in people search results. The order depends on the searcher's profile, connections, filters, and other relevance signals.

**Rule:** Complete the profile using standard language. LinkedIn's own search guidance says profile completeness, relevant skills, and standard job titles improve discoverability. Novel titles may express personality, but they are worse for search.

## 3. What the 360Brew debate changes

**Rule:** Treat 360Brew as dispute context, not proof of rollout. The public discussion around 360Brew may show research direction and market interpretation, but it does not prove that 360Brew is the live Feed algorithm. Strong claims about full deployment should be treated as secondary commentary unless LinkedIn publishes official product or engineering documentation confirming them.

**Inference:** semantic consistency remains a durable bet. LinkedIn's official guidance already combines profile identity, content, activity, and relevance. Independent commentary around 360Brew points in the same practical direction: clear role positioning, consistent topic focus, and explicit evidence of skills are safer than vague content. It is not reasonable to infer a specific live "semantic coherence score" unless LinkedIn publishes that behavior.

**Inference:** recent behavior likely remains important. LinkedIn's official help pages already emphasize recent engagement and recent content. Public 360Brew commentary points in a compatible direction, but it does not prove specific folklore rules such as fixed weighting windows or exact feed caps.

**Rule:** Separate observed platform changes from model naming. Reach patterns, content-format performance, and recommendation behavior can change even if the community name for the change is wrong. Agents should optimize for official relevance signals and clearly labeled observations, not for a branded algorithm narrative.

## 4. Anti-patterns

### The engagement pod

**What it looks like:** Participating in groups where users artificially "like" and comment on each other's posts to boost metrics. **Why it fails:** LinkedIn explicitly says it reduces the visibility of low-quality content and weighs the quality and constructiveness of conversation. Pod activity pushes behavior in the opposite direction. **What to do instead:** Publish useful, niche-relevant posts and participate in real discussions where expertise is visible.

### The topic scatter

**What it looks like:** Claiming one specialization on the profile while most recent activity points somewhere else. **Why it fails:** LinkedIn already uses profile details, content, and recent activity together. Mixed signals make both search relevance and human evaluation worse. **What to do instead:** Keep headline, About, Experience, Skills, and public activity aligned around a small number of real topic pillars.

---

*Next step: Learn how to optimize for external scrapers in [AI agent optimization](./ai-agent-optimization.md).*

---

## Section: engagement strategy

<!--
metadata:
  title: "LinkedIn engagement strategy"
  platform: "linkedin"
  objective: "Evidence-based guidance for posting and commenting on LinkedIn without relying on folklore timing rules."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["linkedin", "engagement", "comments", "content"]
  agent_priority: "medium"
-->



> This file focuses on stable engagement practices that align with LinkedIn's documented relevance signals. It deliberately avoids unsupported folklore such as fixed golden-hour formulas or comment word-count thresholds.

---

## 1. Overview

An optimized profile structure is less useful if the account looks inactive, unfocused, or low-value. LinkedIn's official guidance emphasizes recent content, meaningful interactions, and quality signals. That supports a simple operating principle: stay active in ways that reinforce the topic you want to be known for.

## 2. Posting best practices

**Recommendation:** Publish on a sustainable cadence. There is no official LinkedIn rule saying everyone should post at a fixed frequency. A consistent schedule that can be maintained for months is better than short bursts of activity followed by silence.

**Rule:** Keep posts tightly aligned with the expertise the profile claims. If the profile is positioned around backend engineering, the content should mostly teach, show, or comment on backend engineering, adjacent infrastructure, and relevant case studies. Topical clarity is better for both human readers and recommendation systems.

**Recommendation:** Reply while the conversation is still active. LinkedIn does not publish a fixed response window, but recent engagement is explicitly part of the relevance model. When a worthwhile discussion begins, respond while it is still current instead of leaving threads unattended for days.

## 3. Commenting best practices

**Rule:** Comment where expertise is visible. The best comments add a concrete example, a counterexample, a technical clarification, or a first-hand lesson. Generic praise creates little value and does not strengthen positioning.

**Rule:** Stay inside the professional topics you want associated with the profile. LinkedIn's official relevance guidance combines profile identity with recent activity. Comments across completely unrelated topics dilute the signal of what the profile is actually about.

**Recommendation:** Prioritize constructiveness over volume. LinkedIn says it considers whether a conversation is constructive and professional. A smaller number of useful comments is better than spraying short reactions across many threads.

## 4. Anti-patterns

### The generic comment

**What it looks like:** Repeating comments such as "Great post," "So true," or "Agreed." **Why it fails:** It adds no information, no expertise, and no reason for anyone to click through to the profile. **What to do instead:** Add one useful detail, one real example, or one thoughtful question.

### The topic chase

**What it looks like:** Jumping into every trending topic regardless of fit. **Why it fails:** Temporary visibility from unrelated topics often weakens the long-term clarity of the profile. **What to do instead:** Keep a small number of topic pillars and return to them consistently.

---

*Return to the [LinkedIn profile optimization index](./README.md).*

---

## Section: experience and skills

<!--
metadata:
  title: "LinkedIn experience and skills"
  platform: "linkedin"
  objective: "Rules for keeping experience credible, making skills easy to validate, and using current LinkedIn profile features well."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["linkedin", "experience", "skills", "credibility"]
  agent_priority: "high"
-->



> This file outlines how to structure professional history and skills on LinkedIn so the profile stays credible, searchable, and easy to validate.

---

## 1. Overview

The Experience and Skills sections are the evidentiary foundation of the profile. They validate the claims made in the headline and About section. Inconsistencies here, especially when compared with a CV or public portfolio, create avoidable credibility problems.

## 2. Experience constraints

**Rule:** Keep the CV and LinkedIn factually aligned. Ensure the dates, titles, employers, and core results listed in Experience match the facts used in the CV. Small wording differences are fine; factual mismatches are not.

**Rule:** Use the Action + Metric format for bullet points. Just like your CV, use formulas like STAR or XYZ (e.g., "Optimized SQL queries, reducing server costs by 20%"). Do not write generic paragraphs outlining your basic duties.

**Rule:** Map direct URLs into Experience entries. For technical roles, do not just list the projects. Add direct links to relevant GitHub repositories, papers, demos, or product pages when those links are public and support the claim being made.

## 3. Skills constraints

**Rule:** Use current LinkedIn skill features, not obsolete ones. LinkedIn Skill Assessments are no longer available. LinkedIn now encourages members to show how a skill is used by linking it to roles, projects, education, and credentials on the profile.

**Rule:** Reorder the top skills to match the profile's positioning. LinkedIn lets members reorder skills. Put the strongest and most relevant skills first so the profile's top signals match the role being targeted.

**Rule:** Use standard skill names and attach them to real evidence. LinkedIn allows up to 100 skills. Fill the section with relevant, recognizable terms, then connect those skills to experience, education, or credentials when prompted. A shorter, accurate list is better than a bloated list of weak matches.

## 4. Anti-Patterns

### The orphan skill

**What it looks like:** Listing skills that are never supported anywhere else on the profile. **Why it fails:** Recruiters cannot easily validate the claim, and the skill becomes weak evidence instead of strong evidence. **What to do instead:** Make sure the most important skills also appear in experience bullets, project links, credentials, or education entries.

---

*Next step: Drive traffic to your new profile with the [Engagement strategy](./engagement-strategy.md).*

---

## Section: featured section

<!--
metadata:
  title: "LinkedIn Featured section"
  platform: "linkedin"
  objective: "Guidelines for structuring the Featured carousel to act as visual 'Proof of Work' for tech professionals."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["linkedin", "featured", "portfolio", "visual"]
  agent_priority: "medium"
-->



> This file details how to leverage the Featured section as a high-conversion lead magnet, emphasizing visual media and direct links to technical artifacts.

---

## 1. Overview

The Featured section sits prominently near the top of the profile, just below the About section. It is the most visual component of the LinkedIn interface and serves as your immediate "Proof of Work." For software engineers and tech professionals, this section replaces the need for a recruiter to hunt down your personal website.

## 2. Content constraints

**Rule:** Prioritize visual media over plain text links. Text links often generate generic, poorly formatted preview cards. Use high-quality thumbnails, architectural diagrams, or short video demos (e.g., a screen recording of an app you built) when adding links to the Featured section. Strong visuals usually improve human scanning and conversion compared with plain links.

**Rule:** Directly link to GitHub repositories and live demos. Do not link to generic company homepages. Link directly to the specific GitHub repository you maintain, the specific feature you shipped, or a detailed technical blog post you authored.

**Rule:** Feature your best-performing niche content. If you authored a LinkedIn post that performed well and aligns with your target niche, pin it to the Featured section. This gives new profile visitors a quick proof point for your domain focus.

## 3. Anti-Patterns

### The stale carousel

**What it looks like:** A Featured section containing links to a project from 5 years ago, or a broken link to a startup that no longer exists. **Why it fails:** It signals to both humans and the algorithm that the profile is abandoned or that the user has not produced meaningful work recently. **What to do instead:** Rotate the content in your Featured section at least twice a year to highlight your most recent and relevant achievements.

---

*Next step: Sync your history with the ATS in [Experience and skills](./experience-and-skills.md).*

---

## Section: headline strategy

<!--
metadata:
  title: "LinkedIn headline strategy"
  platform: "linkedin"
  objective: "Strict formulas and constraints for writing highly discoverable, keyword-rich LinkedIn headlines."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["linkedin", "headline", "seo", "keywords"]
  agent_priority: "high"
-->



> This file defines headline formulas that work for human readers, LinkedIn search, and plain-text matching systems without relying on novelty titles.

---

## 1. Overview

The headline is one of the strongest positioning fields on the profile and the element that travels with the name across comments, search results, and feed interactions. It should instantly communicate role, specialty, and value.

## 2. Headline formulas

**Rule:** Use the Role + Stack + Impact formula. Do not use the default headline generated by LinkedIn (e.g., "Software Engineer at Tech Corp"). For technical roles, construct the headline using this exact structure: `[Target Role] | [Top 2-3 Tech Stacks] | [Impact/Results/USP]`.

**Rule:** Avoid corporate buzzwords and fluff. Never use words like "Passionate," "Guru," "Ninja," "Results-driven," or "Innovative." These waste space and do little to improve searchability. LinkedIn's own people-search guidance recommends standard job titles.

**Rule:** Separate elements with clean delimiters. Use the pipe (`|`) or a bullet (`•`) to separate the distinct semantic blocks within the headline. This aids both human readability and machine parsing.

## 3. Examples

Good example:
```text
<!-- CORRECT: Follows the exact formula with specific keywords -->
Senior Backend Engineer | Go, Kubernetes, PostgreSQL | Architecting low-latency distributed systems
```

Good example:
```text
<!-- CORRECT: Clear role, specific stack, and quantified impact -->
Data Scientist | PyTorch & LLMs | Reducing customer churn by 20% through predictive modeling
```

Bad example:
```text
<!-- WRONG: Generic title and wasted characters on fluff -->
Passionate Software Developer at XYZ Corp | Tech Enthusiast | I love building scalable applications!
```

## 4. Anti-Patterns

### The unemployed seeker tag

**What it looks like:** `Actively looking for new opportunities` or `Unemployed Software Engineer`. **Why it fails:** Recruiters search for role names and specialties, not for the phrase "looking for opportunities." It uses the most valuable text in the profile without clarifying fit. **What to do instead:** Use the "Open to Work" setting in the background and write a strong, role-focused headline using the standard formula.

---

*Next step: Expand your narrative in the [About section](./about-section.md).*

---

## Section: profile architecture

<!--
metadata:
  title: "LinkedIn profile architecture"
  platform: "linkedin"
  objective: "Rules for the visual and structural basics of a LinkedIn profile, including URLs, location SEO, verification, and profile settings."
  status: "draft"
  last_updated: "2026-04-29"
  tags: ["linkedin", "architecture", "seo", "setup"]
  agent_priority: "medium"
-->



> This file defines the foundational structural settings required for a fully optimized LinkedIn profile, covering URLs, location SEO, and visual hierarchy.

---

## 1. Overview

Before writing prose or detailing experience, the profile's underlying structure must be configured correctly. These foundational settings dictate how easily a profile is found via search engines and how it signals technical competence at first glance.

## 2. Structural rules

**Rule:** Claim a custom public URL. Clean your LinkedIn URL to remove the random alphanumeric string appended by default (e.g., change `linkedin.com/in/john-doe-8a3b21` to `linkedin.com/in/johndoe`). This improves SEO indexing and looks professional on a CV.

**Rule:** Earn the Verifications badge. Use LinkedIn's verification tools when eligible. LinkedIn says verified members see 60% more profile views and 50% more engagement on average. Treat verification as a trust and conversion signal, not as proof of a specific ranking boost. At the time of writing, LinkedIn supports identity verification through partners such as CLEAR in the U.S., Canada, and Mexico, and Persona in many other regions.

**Rule:** Set location and job preferences explicitly. If remote work is a target, configure that through LinkedIn's profile and job-preference settings rather than only mentioning it in free text. Structured settings are more reliable than a headline note.

## 3. Visual and audio hierarchy

**Rule:** Deploy a professional banner with a USP. The banner image is prime real estate. Do not leave it blank or use a generic stock photo. Use a custom design (via Canva or Figma) that displays your Unique Selling Proposition (USP) or a clear Call to Action (CTA).

**Recommendation:** Record the Voice Badge on mobile. Use the LinkedIn mobile app to record the name pronunciation clip if it improves the profile experience. This is optional, but it helps human readers pronounce the name correctly and can make the profile feel more complete.

---

*Next step: Write a high-converting hook in [Headline strategy](./headline-strategy.md).*

---

## Section: sources

<!--
metadata:
  title: "LinkedIn optimization sources"
  platform: "linkedin"
  objective: "Centralized official LinkedIn sources for profile structure, search, Feed, verification, skills, and activity claims."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["linkedin", "sources", "search", "skills"]
  agent_priority: "low"
-->



> This file lists official LinkedIn sources that can support LinkedIn module claims. Third-party algorithm commentary and creator-growth posts are excluded from `stable` source support.

---

## 1. Overview

The `linkedin` module uses LinkedIn Help and LinkedIn-published material as the baseline. Public research and vendor commentary about named ranking systems can inform disputed notes, but it must not be presented as settled production behavior.

## 2. Source table

| Source | URL | Type | Covers | Confidence |
|---|---|---|---|---|
| LinkedIn Help: How the Feed ranks content | https://www.linkedin.com/help/linkedin/answer/a9554004 | help-center | Feed ranking uses many signals, including post context and profile, network, and activity signals; demographic fields are not Feed visibility signals | stable |
| LinkedIn Help: LinkedIn relevance | https://www.linkedin.com/help/linkedin/answer/a1339724 | help-center | Identity, Content, and Activity signal groups for relevance and recommendations | likely |
| LinkedIn Help: Order of your profile in people search results | https://www.linkedin.com/help/linkedin/answer/a521944 | help-center | Search-order non-guarantees, relevance to searcher, profile completeness, skills, connections, standard job titles | stable |
| LinkedIn Help: Add and remove skills on your profile | https://www.linkedin.com/help/linkedin/answer/a549047 | help-center | Skills section behavior, adding skills, skill association with profile sections, 100-skill limit | stable |
| LinkedIn Help: Display order of skills | https://www.linkedin.com/help/linkedin/answer/a568137/display-order-of-skills | help-center | Skill ordering and display management | stable |
| LinkedIn Help: Skill endorsements | https://www.linkedin.com/help/linkedin/answer/a565106 | help-center | Endorsement behavior, 100-skill limit, endorsement role in profile strength and opportunity discovery | stable |
| LinkedIn Help: Skill Assessments no longer available | https://www.linkedin.com/help/linkedin/answer/a1690529 | help-center | Discontinuation of LinkedIn Skill Assessments | stable |
| LinkedIn Help: Verifications on your LinkedIn profile | https://www.linkedin.com/help/linkedin/answer/a1359065/verifications-on-your-linkedin-profile | help-center | Verification types, badge behavior, availability limits, LinkedIn's own profile-view and engagement averages | likely |
| LinkedIn Help: Identity verification via CLEAR | https://www.linkedin.com/help/linkedin/answer/a1485597 | help-center | CLEAR eligibility and geography constraints | likely |
| LinkedIn Help: Identity verification via Persona | https://www.linkedin.com/help/linkedin/answer/a6513799 | help-center | Persona eligibility and device requirements | likely |

## 3. Removed or downgraded sources

The previous source list included arXiv 360Brew research, LinkedIn creator commentary, vendor posts, and an open-source outreach example. Those are not official LinkedIn product documentation. Retain 360Brew only as a disputed research context in prose when needed, not as support for live LinkedIn ranking claims.

No clean official source was found for exact field limits across every profile section, fixed Feed weights, posting-time formulas, semantic scores, full 360Brew rollout, applicant outcomes, or recruiter-search ranking guarantees. Treat those claims as `likely`, `inferred`, or `disputed` depending on inspected evidence.

---

See also: [LinkedIn profile optimization](./README.md) and [runtime knowledge](https://github.com/vitaecontext/vitaecontext/blob/main/.skills/agent-skill/vitaecontext-linkedin/wiki/knowledge.md).
