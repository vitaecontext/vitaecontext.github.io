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
  useWhen: string[];
  method: string[];
};

export const skills: Skill[] = [
  {
    slug: "agent-context-optimization",
    name: "Agent Context Optimization",
    metaTitle: "Build Your AI Career Context File",
    metaDescription:
      "Create a reusable Markdown file for career facts, stated goals, evidence, constraints, and claims to avoid.",
    shortName: "Agent Context",
    icon: "context",
    href: "/skills/agent-context-optimization/",
    summary:
      "Build a private Markdown source of truth for verified career facts, links, projects, positioning, and stated goals and targeting.",
    audience: "Agents that need grounded context before editing public profiles.",
    outputs: ["Context file spec", "Goals and targeting", "Maintenance workflow"],
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
      "Review CV structure, ATS parsing constraints, job-specific terminology, and evidence-backed bullet writing.",
    shortName: "CV/ATS",
    icon: "cv",
    href: "/skills/cv-ats/",
    summary:
      "Turn CVs into parser-friendly, recruiter-readable documents with cleaner structure, keywords, and proof bullets.",
    audience: "Job seekers tailoring CVs without breaking ATS readability.",
    outputs: ["ATS-safe structure", "Keyword alignment", "Bullet rewrites"],
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
    slug: "vitaegraph",
    name: "VitaeGraph",
    invocationName: "agentkit-seo-vitaegraph",
    metaTitle: "Build a Private Markdown Career Knowledge Graph",
    metaDescription:
      "Use VitaeGraph to structure deep career material into local Markdown records with validation and rebuildable indexes for agent workflows.",
    shortName: "VitaeGraph",
    icon: "graph",
    href: "/skills/vitaegraph/",
    summary:
      "Build, deepen, validate, and index a private hierarchical career knowledge graph from supplied career material.",
    audience: "Agents that need deeper selected records beyond a compact career context file.",
    outputs: ["Markdown graph records", "Validation diagnostics", "Rebuildable graph indexes"],
    useWhen: [
      "A single compact context file is too flat for detailed education, thesis, course, project, or publication records.",
      "An agent needs to create or maintain hierarchical Markdown records before using selected context in downstream tasks.",
      "A local graph needs duplicate-ID, link, schema, or index validation.",
    ],
    method: [
      "Plan the graph from available material before writing records.",
      "Create focused Markdown nodes for education, projects, experience, certifications, awards, and publications.",
      "Validate record IDs and internal links, then generate deterministic local indexes as rebuildable artifacts.",
    ],
  },
  {
    slug: "linkedin",
    name: "LinkedIn Optimization",
    metaTitle: "Optimize Your LinkedIn for Search",
    metaDescription:
      "Review LinkedIn headline, About, Experience, Featured, and Skills sections using supplied career context.",
    shortName: "LinkedIn",
    icon: "linkedin",
    href: "/skills/linkedin/",
    summary:
      "Improve LinkedIn headline, About, Experience, Featured, and Skills sections with evidence-backed positioning.",
    audience: "Professionals who need recruiter search and AI-readable profile clarity.",
    outputs: ["Profile audit", "Headline and About rewrites", "Featured strategy"],
    useWhen: [
      "A LinkedIn profile sounds generic or does not clearly express the relevant role and skills.",
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
      "Review GitHub profiles, repositories, metadata, READMEs, proof, search structure, and agent instructions.",
    shortName: "GitHub",
    icon: "github",
    href: "/skills/github/",
    summary:
      "Make profiles and repositories easier to discover, inspect, and trust across GitHub search, Copilot, and humans.",
    audience: "Developers turning code into searchable proof of work.",
    outputs: ["Profile README fixes", "Repo metadata", "Agent instructions"],
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
      "Audit portfolio crawlability, metadata, structured data, rendering, sitemaps, performance, and AI-readable structure.",
    shortName: "Web Portfolio",
    icon: "portfolio",
    href: "/skills/web-portfolio/",
    summary:
      "Audit portfolio crawlability, metadata, structured data, JavaScript rendering, performance, and AI-readable signals.",
    audience: "Builders who need their own site to be discoverable and useful.",
    outputs: ["SEO/AEO audit", "Structured data plan", "Indexability checks"],
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
      "Review X profile structure, pinned posts, content formatting, topic consistency, and documented platform behavior.",
    shortName: "X/Twitter",
    icon: "x",
    href: "/skills/x-twitter/",
    summary:
      "Shape profiles, pinned posts, and content loops around clear positioning and documented platform behavior.",
    audience: "Technical operators who want a sharper public posting system.",
    outputs: ["Bio and profile audit", "Pinned post strategy", "Posting loop"],
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
