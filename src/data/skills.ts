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
  inputs: string[];
  outputs: string[];
  boundary: string;
  useWhen: string[];
  method: string[];
};

export const skills: Skill[] = [
  {
    slug: "vitaecontext",
    name: "VitaeContext",
    invocationName: "vitaecontext",
    metaTitle: "VitaeContext Routing Skill",
    metaDescription: "Route work to Career Context or VitaeGraph while keeping agent context deliberately scoped.",
    shortName: "Router",
    icon: "package",
    href: "/skills/vitaecontext/",
    summary: "The small routing layer that decides whether a task needs compact Career Context or deeper VitaeGraph records.",
    audience: "Agents entering the VitaeContext system without a predetermined context depth.",
    inputs: ["The current request", "An existing Career Context file", "Available VitaeGraph records"],
    outputs: ["Context-depth decision", "Module routing", "Scoped retrieval plan"],
    boundary: "The router selects the context workflow. It does not perform platform-specific career tasks.",
    useWhen: [
      "A request spans compact Career Context and deeper structured records.",
      "An agent needs to decide which VitaeContext module to load.",
      "Context should stay scoped to the current task.",
    ],
    method: [
      "Identify the smallest context depth that can support the task.",
      "Route compact source-of-truth work to vitaecontext-build.",
      "Route detailed record and graph work to vitaecontext-vitaegraph.",
    ],
  },
  {
    slug: "context-builder",
    name: "Context Builder",
    invocationName: "vitaecontext-build",
    metaTitle: "Build a Reusable Career Context File",
    metaDescription: "Create a private Markdown source of truth for career facts, evidence, goals, constraints, and claims to avoid.",
    shortName: "Career Context",
    icon: "context",
    href: "/skills/context-builder/",
    summary: "Turn selected career material into a compact, maintained Markdown source of truth for downstream agent work.",
    audience: "People and agents that need grounded career context before another system performs a task.",
    inputs: ["Trusted career material", "Project and proof links", "Goals, constraints, and claims to avoid"],
    outputs: ["Private Career Context file", "Evidence boundaries", "Stable retrieval sections"],
    boundary: "The builder organizes supplied material. It does not independently verify claims or perform the downstream career task.",
    useWhen: [
      "Career material is scattered across documents, profiles, projects, and notes.",
      "An agent needs a consistent source of facts and direction.",
      "An existing context file needs maintenance or reconciliation.",
    ],
    method: [
      "Collect only the material the person chooses to supply.",
      "Separate evidence-backed history from stated direction and unresolved claims.",
      "Create or update a readable Markdown file with a stable retrieval interface.",
    ],
  },
  {
    slug: "vitaegraph",
    name: "VitaeGraph",
    invocationName: "vitaecontext-vitaegraph",
    metaTitle: "Build a Private Markdown Career Knowledge Graph",
    metaDescription: "Structure detailed career material into linked local Markdown records with validation and rebuildable indexes.",
    shortName: "VitaeGraph",
    icon: "graph",
    href: "/skills/vitaegraph/",
    summary: "Keep deeper project, role, education, publication, and award records without making every task load the full history.",
    audience: "Agents that need selected detail beyond a compact Career Context file.",
    inputs: ["Supplied career material", "Existing graph records", "A private graph root"],
    outputs: ["Linked Markdown records", "Validation diagnostics", "Rebuildable indexes"],
    boundary: "Graph validation checks structure and links. It does not authenticate real-world claims.",
    useWhen: [
      "A compact file is too flat for detailed projects, education, or publications.",
      "An agent needs selected deep records instead of a full career dump.",
      "A local graph needs link, ID, schema, or index validation.",
    ],
    method: [
      "Plan focused records from the supplied material.",
      "Connect records through explicit contains and related-to relationships.",
      "Validate the source Markdown, then rebuild deterministic local indexes.",
    ],
  },
];
