export const typeLabels = {
  core: "Core",
  context: "Context file",
  profile: "Profile",
  source: "Markdown source",
  record: "Record group",
  project: "Project",
  experience: "Experience",
  education: "Education",
  certification: "Certification",
  skills: "Skills",
  skill: "Skill",
  repo: "GitHub / repo",
  evidence: "Evidence",
  publication: "Publication",
  generated: "Generated index",
  agent: "Agent retrieval",
  output: "Output",
};

export const colors = {
  core: "#91b9a3",
  context: "#4c7180",
  profile: "#91b9a3",
  source: "#e7f0eb",
  record: "#287a55",
  project: "#287a55",
  experience: "#1f684b",
  education: "#4c7180",
  certification: "#b7792d",
  skills: "#716b86",
  skill: "#716b86",
  repo: "#b7792d",
  evidence: "#a14e46",
  publication: "#a14e46",
  generated: "#716b86",
  agent: "#4c7180",
  output: "#716b86",
};

export const visibleTypes = Object.keys(typeLabels);

export const directionalEdges = new Set(["GENERATES", "RETRIEVES", "GROUNDS", "USED_FOR"]);

export const labeledNodeTypes = new Set([
  "core",
  "context",
  "profile",
  "source",
  "record",
  "project",
  "education",
  "experience",
  "certification",
  "skills",
  "repo",
  "evidence",
  "publication",
  "generated",
  "agent",
  "output",
]);

export const alwaysLabeledNodeIds = new Set([
  "vitaegraph",
  "career-context-file",
  "markdown-records",
  "project-records",
  "role-records",
  "education-records",
  "github-repositories",
  "repository-analysis",
  "thesis-work",
  "university-courses",
  "skills",
  "evidence",
  "graph-json",
  "search-index-json",
  "diagnostics-json",
  "agent-retrieval",
  "relevant-subgraph",
  "tailored-cv",
  "linkedin-rewrite",
  "application-answers",
  "portfolio-seo",
]);

export function endpointId(endpoint) {
  return typeof endpoint === "string" ? endpoint : endpoint?.id;
}

export function getNeighborIds(graphData, selectedId) {
  if (!selectedId) return new Set();

  const ids = new Set([selectedId]);
  graphData.links.forEach((link) => {
    const source = endpointId(link.source);
    const target = endpointId(link.target);
    if (source === selectedId) ids.add(target);
    if (target === selectedId) ids.add(source);
  });
  return ids;
}

export function getLinkStrength(type) {
  if (type === "CONTAINS") return 0.72;
  if (type === "GENERATES" || type === "RETRIEVES") return 0.58;
  if (type === "GROUNDS" || type === "SUPPORTS") return 0.42;
  return 0.32;
}

export function getLinkDistance(type) {
  if (type === "CONTAINS") return 48;
  if (type === "GENERATES" || type === "RETRIEVES") return 64;
  if (type === "USED_FOR") return 70;
  return 58;
}
