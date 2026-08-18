---
title: "X (Twitter) optimization"
platform: "x-twitter"
objective: "Index and overview for the X (Twitter) platform optimization module."
status: "review"
last_updated: "2026-05-27"
tags: ["x", "twitter", "overview", "indexing"]
agent_priority: "high"
id: "x-twitter"
---

> This module helps make an X profile and posting loop easier to understand, easier to follow, and less dependent on vague growth advice.
> Public web page: [X/Twitter optimization playbook](https://vitaecontext.github.io/playbooks/x-twitter/).

---

## 1. Overview

Posting more is not a strategy. A strong X presence needs clear positioning, useful native posts, and a repeatable engagement loop that fits the account's niche.

X (Twitter) is no longer a simple chronological feed. Current X help pages document recommender systems for For You, Search, Explore, Notifications, and other surfaces. Historical open-source repositories add architecture context, but they are not a complete contract for live production ranking.

The primary audience for this module is AI agents generating or reviewing X content and humans looking to improve profile clarity, native value, and credible conversation. Where behavior is officially documented, treat it as source-backed product behavior. Where behavior comes from historical repositories, architecture snapshots, or field observation, mark it as inference or a recommendation to test.

```text
Weak post:
"Here are 10 tools every developer needs."

Stronger post:
"I rebuilt my portfolio for search visibility. The biggest gain was not metadata.
It was giving every serious project its own crawlable URL and proof-of-work page."
```

## 2. Use this module when

- An X profile needs clearer positioning, bio structure, or pinned-post strategy.
- Posts need stronger hooks, better formatting, or more useful native value.
- The account needs a repeatable engagement loop instead of random posting.
- Advice must separate documented behavior from contested algorithm claims.

## 3. Fast path

1. For profile setup, start with [profile-optimization.md](./profile-optimization.md).
2. For individual posts and threads, use [posting-strategy.md](./posting-strategy.md).
3. For growth loops, use [engagement-and-growth.md](./engagement-and-growth.md).
4. For Premium-specific choices, use [premium-strategies.md](./premium-strategies.md).
5. Use [algorithm-phoenix.md](./algorithm-phoenix.md) when a task depends on ranking assumptions.

## 4. Module index

Agents must route to the specific file needed for the task at hand. Do not load the entire module unless requested.

- [algorithm-phoenix.md](./algorithm-phoenix.md) — Current recommender help pages, historical architecture context, and clearly marked inferences.
- [profile-optimization.md](./profile-optimization.md) — Treating the profile as a searchable landing page (bio, display name, handle).
- [posting-strategy.md](./posting-strategy.md) — Content SEO, opening-hook heuristics, link placement experiments, and native media.
- [engagement-and-growth.md](./engagement-and-growth.md) — Conversation depth, replies, and source-aware niche engagement.
- [premium-strategies.md](./premium-strategies.md) — Officially documented Premium capabilities and practical tactics.
- [sources.md](./sources.md) — Official, maintainer-published, and confidence-labeled sources with downgrade notes.

## 5. Rules

**Rule:** When optimizing an X profile or generating a tweet, the agent must consult the relevant file from the index above before generating output.

**Rule:** Output must prioritize profile clarity, native value, credible proof, and conversation quality over generic social media fluff.

---

Runtime skill: [skills/vitaecontext-x/SKILL.md](https://github.com/vitaecontext/vitaecontext/blob/main/skills/vitaecontext-x/SKILL.md). Source notes: [sources.md](./sources.md).

---

## Section: algorithm phoenix

<!--
metadata:
  title: "X algorithm and ranking signals"
  platform: "x-twitter"
  objective: "Separates current official X recommender documentation from historical open-source architecture and inferred Grok or Phoenix-era claims."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["algorithm", "open-source", "weights", "ranking"]
  agent_priority: "high"
-->



> This file separates current official X recommender documentation from historical open-source architecture and inferred Grok or Phoenix-era claims.

---

## 1. Overview

Current X help pages document recommender systems for For You, Search, Explore, Notifications, and other surfaces. They describe candidate sourcing, personalization signals, ranking, filtering, feedback collection, and user controls at a product level.

X also open-sourced major parts of its recommendation stack in `twitter/the-algorithm` and `twitter/the-algorithm-ml`. Those repositories provide useful historical architecture context. Later repositories such as `xai-org/x-algorithm` require separate maintainer review before being used as source evidence.

When optimizing content, prioritize current official X documentation first. Treat historical repositories, architecture snapshots, and creator heuristics as inference, not guaranteed ranking laws.

## 2. Current official recommender documentation

X's current help pages support these product-level claims:

- For You finds posts from accounts, Lists, and Topics the viewer follows, plus accounts the viewer does not explicitly follow.
- For You ranks relevance using a neural network trained on interactions such as Likes, Reposts, and Replies.
- For You uses signals such as followed accounts, followed Topics, liked posts, posts liked by the viewer's network, and accounts followed by the viewer's network.
- Search has multiple result categories, including Top, Latest, People, Media, and Lists.
- Top search ranking uses engagement, health, and relevance scores.
- Latest search is the least personalized path and returns matching posts in reverse chronological order with global visibility filtering.
- X filters content that may be harmful, abusive, spammy, blocked, muted, protected, or otherwise ineligible before showing recommendations.

These pages do not publish a universal formula for reach, a guaranteed external-link penalty, or deterministic posting-frequency thresholds.

## 3. The historical baseline (Heavy Ranker)

The values below are historical examples from the 2023 open-source release and are most useful as directional priors. They should not be treated as guaranteed live constants.

**Rule:** Optimize for conversation depth and dwell time, not just likes.

- **Reply Engaged by Author (~75.0):** Historically one of the strongest positive signals.
- **Reply (~13.5):** A strong conversational signal.
- **Good Profile Click (~12.0):** Profile visit and downstream engagement.
- **Good Click / Dwell (~11.0):** Conversation click with meaningful dwell.
- **Retweet (~1.0):** Positive but lower than deep conversation.
- **Favorite / Like (~0.5):** Positive but comparatively low signal.

**Rule:** Avoid negative feedback signals.
- **Report (~-369.0):** Historically a severe negative outcome.
- **Negative feedback (~-74.0):** "Show less often," mute, and block events.

## 4. SimClusters and Two-Tower retrieval

X has historically sourced out-of-network content using graph and embedding-based retrieval systems.

**Recommendation:** Stay in your lane to improve out-of-network fit. Historically, SimClusters modeled community affinity from follow and engagement graphs. More recent architecture snapshots describe Two-Tower retrieval (User Tower + Candidate Tower) for semantic matching. Strategic takeaway: strong topical consistency can improve retrieval quality and out-of-network fit.

## 5. Phoenix and Grok-era architecture snapshots

Unreviewed public architecture snapshots describe a Phoenix-style pipeline with:

- In-network and out-of-network candidate sourcing.
- Multi-action prediction and weighted scoring.
- Author diversity scoring to avoid feed monotony.
- Filtering layers for policy, safety, duplication, and user preferences.

Treat these as inferred design signals only. They are not a full public contract for live ranking behavior unless current official X documentation links them as production documentation.

**Not publicly documented as deterministic rules:**

- A universal penalty for external links.
- A strict sentiment-only rule that dictates distribution.
- Exact posting-frequency thresholds that trigger suppression.

**Recommendation:** Use controlled A/B tests for contested tactics (for example, inline links vs first-reply links), and prefer clear, value-dense posts over engagement bait.

**Recommendation:** Pace posts to reduce self-competition in the same feed session.

## 6. Examples

Good example:

```text
<!-- CORRECT: optimized for replies and conversation depth -->
We migrated our entire backend from Node.js to Go last month. Memory usage dropped by 60%, but the developer learning curve was steeper than expected.

Has your team attempted a similar migration? What was the hardest part?
```

Bad example:
```text
<!-- WRONG: optimized for low-value likes and engagement bait -->
10 tools every developer needs. Like and bookmark this right now!
```

## 7. Anti-patterns

### The Like-farming thread

**What it looks like:** "10 tools you need. Like and bookmark this!" **Why it fails:** It optimizes for shallow engagement instead of useful discussion. Historical ranking material also treated deeper conversation signals as more meaningful than likes alone. **What to do instead:** End the thread with a specific, open-ended question to invite substantive replies, then continue the discussion in follow-up responses.

---

Source notes: [sources.md](./sources.md).

---

## Section: engagement and growth

<!--
metadata:
  title: "X engagement and growth"
  platform: "x-twitter"
  objective: "Strategies for improving conversation quality and out-of-network discovery without overstating ranking guarantees."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["engagement", "growth", "replies", "velocity"]
  agent_priority: "medium"
-->



> This file defines tactical behaviors that improve conversation depth and out-of-network retrieval, while separating documented signals from field-tested heuristics.

---

## 1. Overview

Growth on X generally improves when a creator sustains useful conversation in a consistent niche. Current X documentation says recommendations use a variety of interaction and network signals. Historical architecture material supports graph and embedding-based retrieval, while most day-to-day posting tactics remain empirical.

Agents providing strategic advice must steer users away from "broadcast" behavior and toward "conversational" behavior.

## 2. Rules

### 2.1 The "First Hour" velocity

**Recommendation:** Publish when the target audience is active and monitor replies immediately. Early engagement often correlates with broader distribution, but no public fixed "first-hour threshold" is documented.

### 2.2 Author replies and conversation quality

Author replies were one of the strongest historical engagement signals in the 2023 open-source baseline. Treat that as historical architecture evidence, not a guaranteed live multiplier.

**Recommendation:** Reply to thoughtful comments on owned posts while the discussion is active. **Rule:** End posts with specific, open-ended questions. "What is your stack?" works better than "Agree?" because it requires a substantive answer.

### 2.3 Niche engagement (SimClusters & Two-Tower)

**Recommendation:** To build initial authority, identify 10-15 high-authority accounts within the user's target niche. Leave high-value, constructive replies on their posts soon after they publish. This can associate the user's account with the target audience through public interaction patterns, but the exact retrieval mechanism is not a live public contract.

### 2.4 Out-of-network retrieval

Out-of-network reach is the primary driver of follower growth. It occurs when a post is recommended to users who do not follow the author.

**Recommendation:** Maintain topical consistency to improve reader trust and out-of-network matching. When content drifts too far off-niche, the account becomes harder for people and recommender systems to classify.

## 3. Examples

### Framing for the Author Reply

Good example:
```text
We just migrated our database to Postgres. Query times dropped 40%, but the migration scripts were a nightmare to write.

If you've done a major DB migration recently, what was the unexpected bottleneck you hit?
```
*Why this is good:* It shares a concrete insight and asks a highly specific question. When another engineer replies, the author has a natural reason to continue the conversation.

Bad example:
```text
Postgres is the best database. Agree?
```
*Why it fails:* It asks a closed "yes/no" question that tends to generate low-quality, one-word replies. It provides little substance for meaningful follow-up conversation.

## 4. Anti-Patterns

### The silent broadcaster

**What it looks like:** Publishing a high-quality thread, logging off, and ignoring the comments it receives. **Why it fails:** It leaves useful conversation unfinished and trains the audience that replying is pointless. **What to do instead:** Allocate a bounded reply window after publishing when the post is meant to start discussion.

---

*Next step: Check paid-tier assumptions in [Premium strategies](./premium-strategies.md).*

---

## Section: posting strategy

<!--
metadata:
  title: "X posting strategy and formats"
  platform: "x-twitter"
  objective: "Evidence-aligned guidelines for formatting posts, media, and Alt Text to maximize readability, accessibility, and discoverability."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["posting", "media", "alt-text", "seo"]
  agent_priority: "high"
-->



> This file defines how an individual post should be formatted to capture search intent, increase readability, and improve accessibility.

---

## 1. Overview

Content formatting influences how quickly users understand and engage with a post. Current X documentation supports general claims about recommendation signals, filtering, search categories, media, and post limits. Historical ranking snapshots can inform architecture priors, but exact live thresholds are not guaranteed.

## 2. Rules

### 2.1 Opening-hook heuristic ("First 50")

There is no official public rule proving a deterministic "first 50 characters" ranking factor.

**Recommendation:** Place the primary keyword or strongest hook near the start of the post to improve scannability and intent matching.

### 2.2 Alt Text and AI visibility

Visuals are critical, but AI models and accessibility tools need text context to interpret images reliably.

**Rule:** Add descriptive Alt Text to every image or GIF when possible. **Recommendation:** Write Alt Text for accessibility first, then include relevant keywords naturally when accurate to the visual.

### 2.3 Media enrichment and Video

Native media often improves engagement compared to text-only posts.

**Recommendation:** Prioritize native video and image formats that are easy to consume on mobile. **Recommendation:** No official source currently documents a universal reach multiplier for a specific video duration range. Test duration and format against your own audience metrics.

### 2.4 Thread structuring for dwell time

Threads can increase reading time and create more reply opportunities when the topic needs depth. They are a format choice, not a universal ranking requirement.

**Recommendation:** Start with 4-8 posts when a topic needs depth, then adjust based on completion and engagement data. **Rule:** Use line breaks every 1-2 sentences for mobile readability.

## 3. Examples

### Optimizing Alt Text for SEO

Good example (Alt Text for a chart):
```text
A line graph showing the 300% increase in organic traffic for a SaaS website over 6 months after implementing programmatic SEO and fixing core web vitals.
```
*Why this is good:* It accurately describes the image for accessibility while preserving clear topic keywords ("organic traffic", "SaaS", "programmatic SEO").

Bad example (Alt Text for a chart):
```text
Screenshot 2026-04-24
```
*Why it fails:* It provides little context for assistive technology, readers, or downstream systems that rely on text to understand the image.

## 4. Anti-Patterns

### Main-body external links

**What it looks like:** Writing a short hook and immediately pasting a YouTube or Substack link. **Why it can fail:** A link-first post with low native value often gets weaker engagement. A universal platform-level link penalty is not publicly documented as a hard rule. **What to do instead:** Write a comprehensive, zero-click post or thread that delivers the core value natively. Use external links where they support the goal, and test inline links against first-reply placement when optimization matters.

### High-frequency burst posting

**What it looks like:** Publishing 4 separate posts within a 10-minute window to "flood the feed." **Why it can fail:** Historical architecture material and current filtering guidance support the general idea that feeds avoid repetitive or low-quality sessions, but no public threshold defines burst suppression. **What to do instead:** Space out individual posts, or combine related thoughts into a single formatted thread when the topic needs depth.

---

*Next step: Build the reply loop in [Engagement and growth](./engagement-and-growth.md).*

---

## Section: premium strategies

<!--
metadata:
  title: "X Premium strategies"
  platform: "x-twitter"
  objective: "Officially documented capabilities and practical tactics for X Premium users."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["premium", "verified", "long-form", "monetization"]
  agent_priority: "medium"
-->



> This file outlines the documented product capabilities of X Premium and practical tactics that can improve outcomes for subscribed users.

---

## 1. Overview

An X Premium subscription changes product capabilities and may affect reply visibility, but it should not be treated as a guaranteed viral-growth switch. Premium features vary by tier, platform, geography, account state, and current product rollout.

Agents must verify if a user has X Premium before recommending strategies reliant on long-form content, longer video, Boost, or reply ranking. If the user is on the free tier, agents should route back to `algorithm-phoenix.md` and `posting-strategy.md` for baseline optimization tactics.

## 2. Rules

### 2.1 What is officially documented

**Rule:** Base Premium advice on official feature documentation, not assumed reach percentages.

- Premium documentation describes longer posts, with exact limits depending on current official docs and client behavior.
- Premium documentation describes reply prioritization in conversations as a preference, with levels being tested.
- Premium users can access longer video upload limits, but exact limits should be verified against current X documentation before drafting recommendations.
- Premium users may have access to paid Boost tools, which are separate from organic ranking behavior.

### 2.2 Reply prioritization

**Recommendation:** If the account has Premium, use any reply-prioritization advantage for high-value commentary on relevant posts. Do not treat reply priority as a substitute for expertise or fit.

### 2.3 Long-form formatting

Premium users may be able to bypass the standard 280-character post limit. Verify the current limit before drafting long-form posts.

**Rule:** Treat long-form posts as mini-blog articles. Use markdown-style formatting (bold text, bullet points) to ensure readability. **Recommendation:** Use a strong opening hook to earn the "Show more" click and keep scanning easy with clear sectioning.

## 3. Anti-Patterns

### Low-effort reply farming

**What it looks like:** A Premium user replying "Great post!" on dozens of viral posts to exploit prioritized ranking. **Why it fails:** Repetitive low-effort replies can hurt credibility and typically generate weak profile conversion, even when initial visibility is higher. **What to do instead:** Write a 2-3 sentence reply that adds a new perspective, provides a counter-argument, or shares a relevant data point.

---

*Next step: Ground ranking assumptions in [Algorithm Phoenix](./algorithm-phoenix.md).*

---

## Section: profile optimization

<!--
metadata:
  title: "X profile optimization and AI footprinting"
  platform: "x-twitter"
  objective: "Rules for structuring an X profile for search discoverability, profile conversion, and clear niche positioning."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["profile", "bio", "seo", "footprint"]
  agent_priority: "high"
-->



> This file defines how to structure an X profile so it is easy to understand by people, searchable on-platform, and useful as a conversion point for profile visitors.

---

## 1. Overview

An X profile acts as a compact public identity surface. X documents editable profile fields, a 160-character bio limit, pinned posts, and account-search preference for complete name, username, and bio fields.

The primary audience for this file is an agent tasked with rewriting a user's X profile. The outcome is a profile that clearly communicates authority, uses relevant keywords naturally, and provides a structured funnel for profile visitors.

## 2. Rules

### 2.1 The display name and handle

**Recommendation:** Include the primary keyword or job title in the display name when it improves immediate clarity and people-search discoverability.

**Recommendation:** Ensure the handle (`@username`) matches the user's brand across other platforms to build cross-platform entity trust for external search engines.

### 2.2 The Bio formula

The 160-character bio functions like a compact profile summary for people, search surfaces, and external previews. This is methodology layered on top of the official field limit, not a platform ranking guarantee.

**Recommendation:** Structure the bio using this formula: `[Who I help] + [How I help] + [Social Proof] + [Call To Action]`

**Recommendation:** Place the most critical niche terms early when doing so reads naturally.

### 2.3 The funnel (Pinned post and Highlights)

Historical ranking snapshots suggest profile clicks and downstream engagement can matter, and X search guidance favors complete profiles. The profile should therefore offer a useful next step without forcing weak proof.

**Recommendation:** Use a Pinned Post when the account has a strong evergreen asset. This acts as the top of the funnel (e.g., a lead magnet, a high-performing thread, or a newsletter link). If there is no strong evergreen asset yet, leave the pinned slot empty rather than pinning weak content. **Recommendation:** If the account has access to Highlights, curate testimonials, high-signal threads, and case studies to build authority for new visitors.

## 3. Examples

### Bio formatting

Good example:
```text
Helping SaaS founders scale organic traffic via programmatic SEO. Grew 3 startups to 1M+ monthly visits. Get my free technical SEO checklist:
```
*Why this is good:* It follows the formula precisely. Who/How: "Helping SaaS founders scale organic traffic via programmatic SEO". Proof: "Grew 3 startups...". CTA: "Get my free...". It reads naturally while hitting major keywords.

Bad example:
```text
SEO Expert | Growth Hacker | Digital Marketing | Coffee Addict | Views are my own
```
*Why it fails:* Keyword stuffing without context. It lacks a value proposition, social proof, and a CTA, providing no reason for a user to follow or understand the account's authority.

## 4. Anti-Patterns

### The misleading bio

**What it looks like:** A profile bio filled with provocative keywords outside the core professional niche, or a pattern of aggressive follow/unfollow behavior. **Why it fails:** Misleading positioning attracts the wrong audience and can lead to negative feedback events such as blocks, mutes, or reports. **What to do instead:** Ensure the bio accurately reflects the content to avoid misleading users who might otherwise mute or report the account.

### Link-tree only bios

**What it looks like:** A bio that only says "Links below" and points to a link hub. **Why it fails:** It wastes the limited bio space that search surfaces and profile visitors use to understand the account. **What to do instead:** Define the user's niche and expertise before adding the CTA for the link.

---

*Next step: Shape native posts in [Posting strategy](./posting-strategy.md).*

---

## Section: sources

<!--
metadata:
  title: "X optimization sources"
  platform: "x-twitter"
  objective: "Centralized official and maintainer-published sources for X profile, post, search, accessibility, Premium, and recommendation claims."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["x", "twitter", "sources", "recommendations"]
  agent_priority: "low"
-->



> This file lists official X, Twitter, and maintainer-published sources that can support X/Twitter module claims. Empirical creator advice and agency SEO posts are excluded from `stable` source support.

---

## 1. Overview

The `x-twitter` module separates current official product behavior from historical open-source recommendation material. The 2023 Twitter recommendation release is useful as architecture evidence, but it is not a complete contract for current production ranking behavior.

## 2. Source table

| Source | URL | Type | Covers | Confidence |
|---|---|---|---|---|
| X Help: How to customize your profile | https://help.x.com/articles/166743 | help-center | Profile image, header image, name, bio, location, website, birth date, pinned post, image recommendations, and 160-character bio limit | stable |
| X Help: How to change your X username | https://help.x.com/articles/14609 | help-center | Username, handle, display-name behavior, username length, allowed handle characters | stable |
| X Help: About our approach to recommendations | https://help.x.com/en/rules-and-policies/recommendations | help-center | Recommendation surfaces, amplification limits, For You signals, Trends inputs, user controls | likely |
| X Help: For You Home Timeline Recommendations | https://help.x.com/en/resources/recommender-systems/for-you-home-timeline-recommendations | help-center | Current For You candidate sources, personalization signals, filtering, Following timeline fallback, and links to X recommender architecture material | likely |
| X Engineering Blog: Twitter's Recommendation Algorithm | https://blog.x.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm | official-blog | Historical For You candidate sourcing, ranking, filtering, and open-source release context | likely |
| twitter/the-algorithm | https://github.com/twitter/the-algorithm | official-docs | Historical open-source recommendation code and architecture | inferred |
| twitter/the-algorithm-ml | https://github.com/twitter/the-algorithm-ml | official-docs | Historical open-source ML artifacts, including Heavy Ranker and TwHIN material | inferred |
| X Help: About X Premium | https://help.x.com/en/using-x/x-premium | help-center | Premium tiers, availability, feature variability, longer-post access, reply prioritization, subscription requirements, and checkmark caveats | likely |
| X Help: About longer videos for X Premium subscribers | https://help.x.com/en/using-x/premium-longer-videos | help-center | Video upload duration, resolution, platform, and file-size limits by Premium status | likely |
| X Help: Undo Post | https://help.x.com/en/using-x/undo-post | help-center | Undo Post behavior and timing as a Premium feature | likely |
| X Help: How to add image descriptions | https://help.x.com/en/using-x/add-image-descriptions | help-center | Alt Text purpose, user flow, and 1,000-character image-description field | stable |
| X Help: How to use the ALT badge and GIF label | https://help.x.com/en/using-x/how-to-use-alt-gif | help-center | ALT badge and GIF label behavior | stable |
| X Help: How to use X search | https://help.x.com/articles/459288 | help-center | Search surfaces, keyword and hashtag search, safe-search controls | stable |
| X Help: Search Recommendations | https://help.x.com/en/resources/recommender-systems/search-recommendations | help-center | Search categories, Top/Latest/People/Media/List ranking behavior, search ranking signals, visibility filtering, and search-feedback collection | likely |
| X Help: Help with X search | https://help.x.com/en/using-x/x-search-not-working | help-center | Reasons posts/accounts may not appear in search, profile completeness preference, safe-search filtering, and search relevance caveats | likely |
| X Help: How to Post | https://help.x.com/en/using-x/how-to-post | help-center | Standard post character limit, media-count limit, longer-post flow, source labels, and scheduling/draft behavior | likely |
| X Help: About X limits | https://help.x.com/en/rules-and-policies/x-limits | help-center | Current technical account limits for posts, replies, DMs, following, email changes, and temporary-limit caveats | likely |
| X Business: Boost | https://business.x.com/en/products/boost | official-docs | Paid amplification product separate from organic ranking | likely |

## 3. Removed or downgraded sources

The previous source list included agency blogs, independent experiments, traffic-statistics posts, and a SimClusters research paper. Those sources are excluded from the authoritative source table. Use them only as background for `inferred` or `disputed` notes when explicitly needed.

The `xai-org/x-algorithm` repository was discovered during review. Do not use it as stable X production-behavior evidence unless an official X-owned source links it as current production documentation. It may be considered only as inferred maintainer-published architecture context after separate maintainer review.

No clean official source was found for exact live ranking weights, universal external-link penalties, shadowban diagnosis, posting-frequency thresholds, or Grok-era production ranking details. Treat those claims as `disputed` unless the user supplies current account evidence or official source material.

---

See also: [X (Twitter) optimization](./README.md) and [runtime knowledge](https://github.com/vitaecontext/vitaecontext/blob/main/skills/vitaecontext-x/wiki/knowledge.md).
