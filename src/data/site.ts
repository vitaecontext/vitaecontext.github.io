export const site = {
  name: "AgentKit SEO",
  url: "https://agentkit-seo.github.io",
  repoUrl: "https://github.com/agentkit-seo/agentkit-seo",
  defaultImage: "/og/agentkit-seo.svg",
  description:
    "A human-readable knowledge hub and modular agent skill system for personal branding, LinkedIn profile optimization, GitHub SEO, CV/ATS resume optimization, portfolio SEO, X/Twitter strategy, and agent context files.",
  disclaimer:
    "Platform names are trademarks of their respective owners. AgentKit SEO is not affiliated with or endorsed by them.",
  authors: [
    {
      name: "Renato Mignone",
      github: "https://github.com/RenatoMignone",
      linkedin: "https://www.linkedin.com/in/renato-mignone/",
      portfolio: "https://renatomignone.github.io/",
    },
    {
      name: "Elia Innocenti",
      github: "https://github.com/eliainnocenti",
      linkedin: "https://www.linkedin.com/in/eliainnocenti/",
      portfolio: "https://eliainnocenti.github.io/",
    },
  ],
};

export const navItems = [
  { label: "Skills", href: "/skills/" },
  { label: "Providers", href: "/providers/" },
  { label: "Docs", href: "/docs/" },
  { label: "Changelog", href: "/changelog/" },
  { label: "Contact", href: "/contact/" },
  { label: "GitHub", href: "https://github.com/agentkit-seo/agentkit-seo" },
];

export const publicRoutes = [
  { path: "/", label: "Home" },
  { path: "/skills/", label: "Skills" },
  { path: "/providers/", label: "Providers" },
  { path: "/docs/", label: "Docs" },
  { path: "/docs/installation/", label: "Installation" },
  { path: "/docs/usage/", label: "Usage" },
  { path: "/changelog/", label: "Changelog" },
  { path: "/contact/", label: "Contact" },
];

export const providers = [
  {
    name: "Codex",
    summary:
      "Installable skill folders for Codex environments that support named skills.",
    invocation: "Mention the installed AgentKit SEO skill by name.",
    status: "Direct install",
  },
  {
    name: "Claude Code",
    summary:
      "Portable skill folders copied into Claude Code's skill location.",
    invocation: "Ask for the relevant AgentKit SEO skill explicitly.",
    status: "Direct install",
  },
  {
    name: "Gemini CLI",
    summary:
      "Generated extension layout with namespaced AgentKit SEO commands.",
    invocation: "Use commands such as /agentkit-seo:linkedin.",
    status: "Local extension install",
  },
  {
    name: "OpenCode",
    summary:
      "Shared skill folders plus thin command wrappers for flat invocation.",
    invocation: "Use commands such as /agentkit-seo-linkedin.",
    status: "Direct install",
  },
  {
    name: "Shared skill bundle",
    summary:
      "Portable SKILL.md folders for manual reuse, packaging, or agents without a dedicated adapter.",
    invocation: "Copy or reference the relevant skill folder.",
    status: "Export target",
  },
];

export const serviceMarks = [
  {
    name: "CV/ATS",
    mark: "CV",
    tone: "teal",
    text: "Resume optimization for ATS parsing, recruiter scanning, keywords, and proof bullets.",
  },
  {
    name: "LinkedIn",
    mark: "in",
    tone: "blue",
    text: "LinkedIn profile optimization for headlines, About copy, Featured proof, skills, and search clarity.",
  },
  {
    name: "GitHub",
    mark: "GH",
    tone: "ink",
    text: "GitHub profile and repository SEO for READMEs, topics, pinned repos, and AI-readable proof.",
  },
  {
    name: "Web Portfolio",
    mark: "WWW",
    tone: "green",
    text: "Portfolio SEO for crawlable pages, metadata, structured data, sitemaps, and snippets.",
  },
  {
    name: "X/Twitter",
    mark: "X",
    tone: "ink",
    text: "X and Twitter profile optimization for bio clarity, pinned posts, posting strategy, and engagement loops.",
  },
  {
    name: "Agent Context",
    mark: "CTX",
    tone: "gold",
    text: "Agent context file architecture for one verified career source of truth across every surface.",
  },
];

export const skills = [
  {
    slug: "agent-context-optimization",
    name: "Agent Context Optimization",
    shortName: "Agent Context",
    href: "/skills/agent-context-optimization/",
    summary:
      "Build a private Markdown source of truth for verified career facts, links, projects, and positioning.",
    audience: "Agents that need grounded context before editing public profiles.",
    outputs: ["Context file spec", "Maintenance workflow", "Agent routing"],
    searchIntent:
      "personal branding source of truth, AI career context file, agent memory for profile optimization",
    useWhen: [
      "Career material is scattered across CVs, LinkedIn, GitHub, notes, and portfolio pages.",
      "An agent needs verified facts before rewriting public career copy.",
      "A context file exists but has become stale, inconsistent, or too long.",
    ],
    method: [
      "Collect identity, roles, projects, links, achievements, constraints, and tone preferences.",
      "Normalize the material into a private Markdown file that agents and humans can navigate.",
      "Use that file as the factual base before CV, LinkedIn, GitHub, portfolio, or X work.",
    ],
  },
  {
    slug: "cv-ats",
    name: "CV and ATS Optimization",
    shortName: "CV/ATS",
    href: "/skills/cv-ats/",
    summary:
      "Turn CVs into parser-friendly, recruiter-readable documents with cleaner structure, keywords, and proof bullets.",
    audience: "Job seekers tailoring CVs without breaking ATS readability.",
    outputs: ["ATS-safe structure", "Keyword alignment", "Bullet rewrites"],
    searchIntent:
      "CV optimization, ATS resume optimization, resume keyword strategy, recruiter readable resume",
    useWhen: [
      "A resume or CV needs tailoring for a target job description.",
      "The layout may be too visual, dense, table-heavy, or difficult for parsers to extract.",
      "Bullets need clearer action verbs, metrics, and role keyword alignment.",
    ],
    method: [
      "Check section order, headings, file format, typography, and parser-safe structure.",
      "Extract hard skills, soft skills, and job-specific language from the target role.",
      "Rewrite bullets around action, task, result, and verified evidence.",
    ],
  },
  {
    slug: "linkedin",
    name: "LinkedIn Optimization",
    shortName: "LinkedIn",
    href: "/skills/linkedin/",
    summary:
      "Improve LinkedIn headline, About, Experience, Featured, and Skills sections with evidence-backed positioning.",
    audience: "Professionals who need recruiter search and AI-readable profile clarity.",
    outputs: ["Profile audit", "Headline and About rewrites", "Featured strategy"],
    searchIntent:
      "LinkedIn profile optimization, LinkedIn headline rewrite, LinkedIn About section, recruiter search visibility",
    useWhen: [
      "A LinkedIn profile sounds generic or does not rank for the right role terms.",
      "Headline, About, Experience, Featured, or Skills sections need clearer proof.",
      "Profile claims must stay aligned with CV, GitHub, portfolio, and the context file.",
    ],
    method: [
      "Separate documented LinkedIn guidance from disputed or inferred ranking claims.",
      "Use explicit job titles, clean skill names, proof links, and human-readable evidence.",
      "Tune headline, About, Experience, Featured, Skills, and activity suggestions together.",
    ],
  },
  {
    slug: "github",
    name: "GitHub Optimization",
    shortName: "GitHub",
    href: "/skills/github/",
    summary:
      "Make profiles and repositories easier to discover, inspect, and trust across GitHub search, Copilot, and humans.",
    audience: "Developers turning code into searchable proof of work.",
    outputs: ["Profile README fixes", "Repo metadata", "Agent instructions"],
    searchIntent:
      "GitHub profile optimization, GitHub repository SEO, README optimization, Copilot agent instructions",
    useWhen: [
      "A GitHub profile shows activity but not a clear developer position or proof of work.",
      "Pinned repositories, topics, descriptions, or READMEs do not surface the strongest projects.",
      "A repository should be easier for GitHub search, external search, Copilot, and agents to inspect.",
    ],
    method: [
      "Improve profile architecture, bio, pinned repositories, and the profile README.",
      "Tune repository names, descriptions, topics, README structure, and proof points.",
      "Add agent-facing instructions where they help code tools understand the project.",
    ],
  },
  {
    slug: "web-portfolio",
    name: "Web Portfolio SEO",
    shortName: "Web Portfolio",
    href: "/skills/web-portfolio/",
    summary:
      "Audit portfolio crawlability, metadata, structured data, JavaScript rendering, performance, and AI-readable signals.",
    audience: "Builders who need their own site to be discoverable and useful.",
    outputs: ["SEO/AEO audit", "Structured data plan", "Indexability checks"],
    searchIntent:
      "portfolio SEO, personal website SEO, structured data, sitemap, robots.txt, AI search visibility",
    useWhen: [
      "A personal website looks polished but does not appear in search results.",
      "Pages have weak titles, descriptions, canonical URLs, structured data, or sitemap coverage.",
      "A React, SPA, Astro, or static site needs crawlability, rendering, and mobile checks.",
    ],
    method: [
      "Confirm real crawlable URLs, internal links, robots.txt, sitemap.xml, and static meaning.",
      "Align titles, meta descriptions, Open Graph, canonical URLs, and visible copy.",
      "Use structured data and focused case-study content without inventing claims.",
    ],
  },
  {
    slug: "x-twitter",
    name: "X/Twitter Optimization",
    shortName: "X/Twitter",
    href: "/skills/x-twitter/",
    summary:
      "Shape profiles, pinned posts, and content loops around clear positioning and documented platform behavior.",
    audience: "Technical operators who want a sharper public posting system.",
    outputs: ["Bio and profile audit", "Pinned post strategy", "Posting loop"],
    searchIntent:
      "X profile optimization, Twitter bio optimization, pinned post strategy, technical creator posting",
    useWhen: [
      "An X or Twitter profile needs clearer positioning, bio structure, or pinned-post strategy.",
      "Posts need stronger hooks, formatting, native value, and topic consistency.",
      "Advice should separate documented behavior from contested algorithm claims.",
    ],
    method: [
      "Treat the profile as a searchable landing page with clear niche and proof.",
      "Shape posts around native value, strong openings, and repeatable engagement loops.",
      "Mark algorithm assumptions as recommendations to test, not universal rules.",
    ],
  },
];

export const workflow = [
  {
    title: "Consolidate context",
    text: "Collect CVs, profiles, links, project notes, and constraints into one private agent-context-file.",
  },
  {
    title: "Generate or audit",
    text: "Route the task to a focused skill so the agent loads the right platform rules, not the whole library.",
  },
  {
    title: "Verify claims",
    text: "Mark missing evidence, avoid unsupported metrics, and keep visible copy aligned across surfaces.",
  },
  {
    title: "Publish updates",
    text: "Apply improvements to the target platform, then keep the context file current for the next pass.",
  },
];

export const indexingSignals = [
  {
    title: "Static first",
    text: "Core pages render as HTML with titles, headings, descriptions, canonicals, links, and structured data present at build time.",
  },
  {
    title: "Crawler map",
    text: "Important pages are shallow, internally linked, included in sitemap.xml, and referenced from robots.txt.",
  },
  {
    title: "Snippet alignment",
    text: "Page metadata mirrors visible copy so search engines, social previews, and AI systems read the same positioning.",
  },
  {
    title: "Claim discipline",
    text: "Skills push unsupported metrics, endorsements, and private details into review instead of publishing them as facts.",
  },
];
