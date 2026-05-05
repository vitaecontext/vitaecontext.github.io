export const site = {
  name: "AgentKit SEO",
  url: "https://agentkit-seo.github.io",
  repoUrl: "https://github.com/agentkit-seo/agentkit-seo",
  defaultImage: "/og/agentkit-seo.png",
  description:
    "A human-readable knowledge hub and modular agent skill system for personal branding, LinkedIn profile optimization, GitHub SEO, CV/ATS resume optimization, portfolio SEO, X/Twitter strategy, and agent context files.",
  disclaimer:
    "Platform names, trademarks, and logos belong to their respective owners. AgentKit SEO is independent and is not affiliated with, sponsored by, or endorsed by those platforms.",
  authors: [
    {
      name: "Renato Mignone",
      email: "renato.mignone@gmail.com",
      github: "https://github.com/RenatoMignone",
      linkedin: "https://www.linkedin.com/in/renato-mignone/",
      portfolio: "https://renatomignone.github.io/",
    },
    {
      name: "Elia Innocenti",
      email: "home.eliainnocenti@gmail.com",
      github: "https://github.com/eliainnocenti",
      linkedin: "https://www.linkedin.com/in/eliainnocenti/",
      portfolio: "https://eliainnocenti.github.io/",
    },
  ],
};

export const navItems = [
  { label: "Playbooks", href: "/playbooks/" },
  { label: "Skills", href: "/skills/" },
  { label: "Providers", href: "/providers/" },
  { label: "Docs", href: "/docs/" },
  { label: "Changelog", href: "/changelog/" },
  { label: "Contact", href: "/contact/" },
  { label: "GitHub", href: "https://github.com/agentkit-seo/agentkit-seo" },
];

export const publicRoutes = [
  { path: "/", label: "Home" },
  { path: "/playbooks/", label: "Playbooks" },
  { path: "/skills/", label: "Agent Skills" },
  { path: "/providers/", label: "Providers" },
  { path: "/docs/", label: "Docs" },
  { path: "/docs/installation/", label: "Installation" },
  { path: "/docs/usage/", label: "Usage" },
  { path: "/changelog/", label: "Changelog" },
  { path: "/contact/", label: "Contact" },
];

export const providers = [
  {
    id: "codex",
    name: "Codex",
    summary:
      "Installs named skill folders into the Codex skills directory. Each skill becomes selectable by name within Codex environments that support skill loading.",
    status: "Direct install",
    globalTarget: "~/.codex/skills/",
    installCmd: "npx . install --provider codex",
    npxCmd: "npx agentkit-seo install --provider codex",
    invocation: "$agentkit-seo-github\n$agentkit-seo-linkedin",
    invocationNote: "Exact activation depends on Codex environment and installed skill support.",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    summary:
      "Copies skill folders into Claude Code's skill location. Claude may auto-select from skill metadata, but explicit naming is the safest invocation path.",
    status: "Direct install",
    globalTarget: "~/.claude/skills/",
    installCmd: "npx . install --provider claude-code",
    npxCmd: "npx agentkit-seo install --provider claude-code",
    invocation: "Use the agentkit-seo-linkedin skill to audit my LinkedIn profile.",
    invocationNote: "Ask for the installed skill explicitly by its full namespaced name.",
  },
  {
    id: "gemini-cli",
    name: "Gemini CLI",
    summary:
      "Installs a named Gemini CLI extension with TOML command files and skill folders. Adds namespaced slash commands for each surface.",
    status: "Extension install",
    globalTarget: "~/.gemini/extensions/agentkit-seo/",
    installCmd: "npx . install --provider gemini-cli",
    npxCmd: "npx agentkit-seo install --provider gemini-cli",
    invocation: "/agentkit-seo:github\n/agentkit-seo:linkedin\n/agentkit-seo:cv-ats",
    invocationNote: "Commands are namespaced under /agentkit-seo: for each skill surface.",
  },
  {
    id: "opencode",
    name: "OpenCode",
    summary:
      "Installs skill folders into the OpenCode skills directory plus Markdown command wrapper files for flat slash-command invocation.",
    status: "Direct install",
    globalTarget: "~/.config/opencode/skills/",
    installCmd: "npx . install --provider opencode",
    npxCmd: "npx agentkit-seo install --provider opencode",
    invocation: "/agentkit-seo-github\n/agentkit-seo-linkedin\n/agentkit-seo-context",
    invocationNote: "Flat command wrappers use a hyphenated prefix for direct slash invocation.",
  },
  {
    id: "shared",
    name: "Shared bundle",
    summary:
      "Exports portable SKILL.md folders to any target directory. For agents without a dedicated adapter or for manual packaging and reuse.",
    status: "Export target",
    globalTarget: "requires --target-dir",
    installCmd: "npx . install --provider shared --target-dir ./skills",
    npxCmd: "npx agentkit-seo install --provider shared --target-dir ./skills",
    invocation: "Copy or reference the relevant SKILL.md folder for your agent.",
    invocationNote: "No default global path — you control where the skill folders land.",
  },
];

export const serviceMarks = [
  {
    name: "CV/ATS",
    href: "/playbooks/cv-ats/",
    icon: "cv",
    mark: "CV",
    tone: "teal",
    text: "Resume optimization for ATS parsing, recruiter scanning, keywords, and proof bullets.",
  },
  {
    name: "LinkedIn",
    href: "/playbooks/linkedin/",
    icon: "linkedin",
    mark: "in",
    tone: "blue",
    text: "LinkedIn profile optimization for headlines, About copy, Featured proof, skills, and search clarity.",
  },
  {
    name: "GitHub",
    href: "/playbooks/github/",
    icon: "github",
    mark: "GH",
    tone: "ink",
    text: "GitHub profile and repository SEO for READMEs, topics, pinned repos, and AI-readable proof.",
  },
  {
    name: "Web Portfolio",
    href: "/playbooks/web-portfolio/",
    icon: "portfolio",
    mark: "WWW",
    tone: "green",
    text: "Portfolio SEO for crawlable pages, metadata, structured data, sitemaps, and snippets.",
  },
  {
    name: "X/Twitter",
    href: "/playbooks/x-twitter/",
    icon: "x",
    mark: "X",
    tone: "ink",
    text: "X and Twitter profile optimization for bio clarity, pinned posts, posting strategy, and engagement loops.",
  },
  {
    name: "Agent Context",
    href: "/playbooks/agent-context-optimization/",
    icon: "context",
    mark: "CTX",
    tone: "gold",
    text: "Agent context file architecture for one verified career source of truth across every surface.",
  },
];

export const skills = [
  {
    slug: "agent-context-optimization",
    name: "Agent Context Optimization",
    metaTitle: "AI Career Context File Optimization",
    metaDescription:
      "Build an AI-readable career context file that keeps LinkedIn, GitHub, CV, portfolio, and X profile optimization grounded in verified facts.",
    shortName: "Agent Context",
    icon: "context",
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
    metaTitle: "ATS Resume and CV Optimization",
    metaDescription:
      "Use AgentKit SEO for ATS resume optimization, CV keyword alignment, recruiter-readable structure, and evidence-backed bullet rewrites.",
    shortName: "CV/ATS",
    icon: "cv",
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
    metaTitle: "LinkedIn Profile Optimization",
    metaDescription:
      "Use AgentKit SEO for LinkedIn profile optimization, headline rewrites, About section positioning, Featured proof, skills, and recruiter search clarity.",
    shortName: "LinkedIn",
    icon: "linkedin",
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
    metaTitle: "GitHub Profile and Repository SEO",
    metaDescription:
      "Use AgentKit SEO for GitHub profile optimization, repository SEO, README structure, topics, pinned repos, and AI-readable project proof.",
    shortName: "GitHub",
    icon: "github",
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
    metaTitle: "Portfolio SEO and Personal Website Optimization",
    metaDescription:
      "Use AgentKit SEO for portfolio SEO, personal website optimization, crawlability, metadata, structured data, sitemap, robots.txt, and AI search visibility.",
    shortName: "Web Portfolio",
    icon: "portfolio",
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
    metaTitle: "X and Twitter Profile Optimization",
    metaDescription:
      "Use AgentKit SEO for X profile optimization, Twitter bio optimization, pinned post strategy, content positioning, and technical creator visibility.",
    shortName: "X/Twitter",
    icon: "x",
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
