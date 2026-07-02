export const site = {
  name: "AgentKit SEO",
  url: "https://agentkit-seo.github.io",
  repoUrl: "https://github.com/agentkit-seo/agentkit-seo",
  packageVersion: "1.8.3",
  npmUrl: "https://www.npmjs.com/package/agentkit-seo",
  defaultImage: "/og/agentkit-seo.png",
  description:
    "Open-source agent skills and playbooks for LinkedIn profile optimization, GitHub SEO, ATS resumes, portfolio SEO, and evidence-based personal branding.",
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
  { label: "Profile Optimization", href: "/profile-optimization/" },
  { label: "Docs", href: "/docs/" },
  { label: "Playbooks", href: "/playbooks/" },
  { label: "Providers", href: "/providers/" },
  { label: "GitHub", href: "https://github.com/agentkit-seo/agentkit-seo" },
];

export const publicRoutes = [
  { path: "/", label: "Home" },
  { path: "/profile-optimization/", label: "Profile Optimization" },
  { path: "/playbooks/", label: "Playbooks" },
  { path: "/skills/", label: "Agent Skills" },
  { path: "/providers/", label: "Providers" },
  { path: "/design/", label: "Design" },
  { path: "/docs/", label: "Docs" },
  { path: "/docs/installation/", label: "Installation" },
  { path: "/docs/usage/", label: "Usage" },
  { path: "/docs/context-file-example/", label: "Context File Example" },
  { path: "/docs/cli/", label: "CLI" },
  { path: "/faq/", label: "FAQ" },
  { path: "/changelog/", label: "Changelog" },
  { path: "/contact/", label: "Contact" },
];

// Claude Code plugin marketplace distribution (new in 1.8.0).
export const marketplace = {
  addCommand: "/plugin marketplace add agentkit-seo/agentkit-seo",
  installCommand: "/plugin install agentkit-seo@agentkit-seo",
};

export const providers = [
  {
    id: "codex",
    name: "Codex",
    summary:
      "Installs named skill folders into the Codex skills directory. Each skill becomes selectable by name within Codex environments that support skill loading.",
    status: "Direct install",
    globalTarget: "~/.codex/skills/",
    installCmd: "npx agentkit-seo install --provider codex",
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
    installCmd: "npx agentkit-seo install --provider claude-code",
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
    installCmd: "npx agentkit-seo install --provider gemini-cli",
    npxCmd: "npx agentkit-seo install --provider gemini-cli",
    invocation: "/agentkit-seo:github\n/agentkit-seo:linkedin\n/agentkit-seo:cv-ats",
    invocationNote: "Commands are namespaced under /agentkit-seo: for each skill surface.",
  },
  {
    id: "antigravity",
    name: "Antigravity",
    summary:
      "Installs a plugin layout based on the Gemini-compatible bundle into the Antigravity CLI plugin staging path. The same skill folders ship with an Antigravity plugin manifest.",
    status: "Plugin install",
    globalTarget: "~/.gemini/antigravity-cli/plugins/agentkit-seo/",
    installCmd: "npx agentkit-seo install --provider antigravity",
    npxCmd: "npx agentkit-seo install --provider antigravity",
    invocation: "Use the installed agentkit-seo-github plugin skill to audit my GitHub profile.",
    invocationNote: "Reference the installed plugin skill by name. The layout is based on the Gemini-compatible bundle.",
  },
  {
    id: "opencode",
    name: "OpenCode",
    summary:
      "Installs skill folders into the OpenCode skills directory plus Markdown command wrapper files for flat slash-command invocation.",
    status: "Direct install",
    globalTarget: "~/.config/opencode/skills/",
    installCmd: "npx agentkit-seo install --provider opencode",
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
    installCmd: "npx agentkit-seo install --provider shared --target-dir ./skills",
    npxCmd: "npx agentkit-seo install --provider shared --target-dir ./skills",
    invocation: "Copy or reference the relevant SKILL.md folder for your agent.",
    invocationNote: "No default global path - you control where the skill folders land.",
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

export type Skill = {
  slug: string;
  name: string;
  invocationName?: string;
  ogImage?: string;
  metaTitle: string;
  metaDescription: string;
  shortName: string;
  icon: string;
  href: string;
  summary: string;
  audience: string;
  outputs: string[];
  searchIntent: string;
  questions: string[];
  useWhen: string[];
  method: string[];
};

export const skills: Skill[] = [
  {
    slug: "agent-context-optimization",
    name: "Agent Context Optimization",
    metaTitle: "Build Your AI Career Context File",
    metaDescription:
      "Create an AI career context file and personal branding source of truth so agent skills keep every profile rewrite factual.",
    shortName: "Agent Context",
    icon: "context",
    href: "/skills/agent-context-optimization/",
    summary:
      "Build a private Markdown source of truth for verified career facts, links, projects, positioning, and stated goals and targeting.",
    audience: "Agents that need grounded context before editing public profiles.",
    outputs: ["Context file spec", "Goals and targeting", "Maintenance workflow"],
    searchIntent:
      "personal branding source of truth, AI career context file, agent memory for profile optimization, AI career assistant, LLM context file for job search, career context file for developers, agent-readable resume context",
    questions: [
      "How do I build a personal career knowledge base for AI agents?",
      "What should an AI career context file contain?",
      "How can I keep my CV, LinkedIn, GitHub, and portfolio facts consistent?",
      "How do I give ChatGPT, Claude, Codex, or Gemini reusable career context?",
      "How can an AI career assistant avoid inventing professional claims?",
    ],
    useWhen: [
      "Career material is scattered across CVs, LinkedIn, GitHub, notes, and portfolio pages.",
      "An agent needs verified facts and stated goals before rewriting public career copy.",
      "A context file exists but has become stale, inconsistent, or too long.",
    ],
    method: [
      "Collect identity, roles, projects, links, achievements, constraints, and tone preferences.",
      "Capture goals and targeting (ideal role, current focus, target locations, interests) as stated intent kept separate from verified facts.",
      "Normalize the material into a private Markdown file, then use it as the factual base before CV, LinkedIn, GitHub, portfolio, or X work.",
    ],
  },
  {
    slug: "cv-ats",
    name: "CV and ATS Optimization",
    metaTitle: "Build an ATS-Safe Resume",
    metaDescription:
      "Learn ATS resume optimization, ATS-safe resume format, and resume keyword strategy so your experience is parsed cleanly.",
    shortName: "CV/ATS",
    icon: "cv",
    href: "/skills/cv-ats/",
    summary:
      "Turn CVs into parser-friendly, recruiter-readable documents with cleaner structure, keywords, and proof bullets.",
    audience: "Job seekers tailoring CVs without breaking ATS readability.",
    outputs: ["ATS-safe structure", "Keyword alignment", "Bullet rewrites"],
    searchIntent:
      "CV optimization, ATS resume optimization, resume keyword strategy, recruiter readable resume, AI agent for resume optimization, resume keywords for software engineers, how to tailor a resume for job applications, ATS-safe resume format",
    questions: [
      "How do I make my CV or resume ATS-friendly?",
      "How can I tailor a resume to a job description without keyword stuffing?",
      "How do I perform an ATS resume review or resume audit?",
      "How should I rewrite resume bullets with measurable evidence?",
      "What resume format is easiest for ATS parsers and recruiters to read?",
      "How do I optimize a software engineer resume for relevant keywords?",
    ],
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
    metaTitle: "Optimize Your LinkedIn for Search",
    metaDescription:
      "Use LinkedIn profile optimization, headline rewrites, and LinkedIn SEO for developers so recruiters understand your fit faster.",
    shortName: "LinkedIn",
    icon: "linkedin",
    href: "/skills/linkedin/",
    summary:
      "Improve LinkedIn headline, About, Experience, Featured, and Skills sections with evidence-backed positioning.",
    audience: "Professionals who need recruiter search and AI-readable profile clarity.",
    outputs: ["Profile audit", "Headline and About rewrites", "Featured strategy"],
    searchIntent:
      "LinkedIn profile optimization, LinkedIn headline rewrite, LinkedIn About section, recruiter search visibility, how to get recruiter attention on LinkedIn, AI agent for LinkedIn profile, improve LinkedIn for job search, LLM LinkedIn rewrite",
    questions: [
      "How do I audit and optimize my LinkedIn profile for a job search?",
      "How should I rewrite my LinkedIn headline for recruiter visibility?",
      "What should I write in my LinkedIn About section?",
      "How do I improve LinkedIn Experience, Skills, and Featured sections?",
      "How does LinkedIn SEO help recruiters understand my professional profile?",
      "How can an AI agent improve my LinkedIn profile without inventing claims?",
    ],
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
    metaTitle: "Optimize Your GitHub Profile for SEO",
    metaDescription:
      "Learn GitHub for SEO, whether GitHub profile backlinks have SEO value, and GitHub bio limits so recruiters and searchers understand your work faster.",
    shortName: "GitHub",
    icon: "github",
    href: "/skills/github/",
    summary:
      "Make profiles and repositories easier to discover, inspect, and trust across GitHub search, Copilot, and humans.",
    audience: "Developers turning code into searchable proof of work.",
    outputs: ["Profile README fixes", "Repo metadata", "Agent instructions"],
    searchIntent:
      "GitHub profile optimization, GitHub repository SEO, README optimization, Copilot agent instructions, improve GitHub profile for job search, GitHub SEO for developers, AI agent for GitHub profile, developer portfolio GitHub",
    questions: [
      "How do I optimize my GitHub profile for recruiters and job searches?",
      "What should a developer put in a GitHub profile README?",
      "How do I choose pinned repositories for a GitHub portfolio?",
      "How do names, descriptions, topics, and READMEs improve repository discoverability?",
      "How can I make a GitHub repository easier for search engines and AI agents to understand?",
      "What Copilot or agent instruction files should a repository include?",
    ],
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
    metaTitle: "Optimize Your Portfolio for Search",
    metaDescription:
      "Improve portfolio SEO, personal website SEO, and developer portfolio indexing so your best work is easier to crawl and click.",
    shortName: "Web Portfolio",
    icon: "portfolio",
    href: "/skills/web-portfolio/",
    summary:
      "Audit portfolio crawlability, metadata, structured data, JavaScript rendering, performance, and AI-readable signals.",
    audience: "Builders who need their own site to be discoverable and useful.",
    outputs: ["SEO/AEO audit", "Structured data plan", "Indexability checks"],
    searchIntent:
      "portfolio SEO, personal website SEO, structured data, sitemap, robots.txt, AI search visibility, answer engine optimization, AEO for personal websites, optimize for ChatGPT and Perplexity, llms.txt setup, portfolio tips for getting hired",
    questions: [
      "How do I optimize a developer portfolio or personal website for search?",
      "Why is my portfolio not indexed by Google or Bing?",
      "Which titles, descriptions, canonical tags, and structured data should a portfolio use?",
      "How do I improve portfolio visibility in AI search, ChatGPT, and Perplexity?",
      "What do SEO, AEO, and GEO mean for a personal website?",
      "Do I need robots.txt, sitemap.xml, schema markup, or llms.txt?",
      "How should I structure project case studies for recruiters and search engines?",
    ],
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
    metaTitle: "Optimize Your X Profile for Search",
    metaDescription:
      "Learn Twitter optimization for X.com: improve profile search, pinned posts, and technical creator positioning so the right audience follows.",
    shortName: "X/Twitter",
    icon: "x",
    href: "/skills/x-twitter/",
    summary:
      "Shape profiles, pinned posts, and content loops around clear positioning and documented platform behavior.",
    audience: "Technical operators who want a sharper public posting system.",
    outputs: ["Bio and profile audit", "Pinned post strategy", "Posting loop"],
    searchIntent:
      "X profile optimization, Twitter bio optimization, pinned post strategy, technical creator posting, how to grow on X as a developer, Twitter bio for software engineers, AI agent for X profile optimization",
    questions: [
      "How do I optimize an X or Twitter profile for search?",
      "What should a developer or technical creator write in an X bio?",
      "What is an effective pinned post strategy for professional positioning?",
      "How do I combine an X content strategy with a repeatable engagement strategy?",
      "How can I improve X profile visibility without relying on algorithm myths?",
    ],
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
  {
    slug: "agentkit-seo",
    name: "Orchestration and Routing",
    invocationName: "agentkit-seo",
    metaTitle: "AgentKit SEO Orchestration and Routing Skill",
    metaDescription:
      "The root AgentKit SEO skill: a runtime wiki and project self-description that routes a request to a single platform module and loads only the context that task needs.",
    shortName: "Orchestration",
    icon: "package",
    href: "/skills/agentkit-seo/",
    summary:
      "The root runtime wiki and entrypoint that routes a request to one platform module and loads only the references that task needs.",
    audience: "Agents deciding which module to load before starting career work.",
    outputs: ["Module routing", "Knowledge-graph map", "Scoped context loading"],
    searchIntent:
      "AgentKit SEO orchestration, agent skill routing, runtime wiki entrypoint, progressive disclosure for agent skills, Markdown knowledge graph for career optimization, which AgentKit SEO module to use",
    questions: [
      "Which AgentKit SEO skill should I use for my career optimization task?",
      "How does an AI agent route a broad profile request to one focused module?",
      "How can agent skills load only the knowledge needed for the current task?",
      "How does a Markdown knowledge graph support professional profile optimization?",
    ],
    useWhen: [
      "A request is broad and the right platform module is not yet obvious.",
      "An agent needs the project self-description and knowledge-graph entrypoint before loading a module.",
      "A task should load one module and its references, not the whole library at once.",
    ],
    method: [
      "Read the root self-description to understand the system and its module boundaries.",
      "Route the request to a single platform module instead of loading every skill.",
      "Pull deeper references and wiki entries only when the current task needs them.",
    ],
  },
];
