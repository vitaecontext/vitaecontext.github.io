const markdownFilePattern = /(?:^|\/)([^/#?]+)\.md(?:#([^?]+))?(?:\?.*)?$/i;

const explicitTargets = new Map([
  ["readme", "#main-content"],
  ["context-file-template", "/docs/context-file-example/"],
  ["career-context-starter", "/docs/context-file-example/"],
  ["alex-morgan-fictional-career-context", "/docs/context-file-example/"],
]);

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function rewriteMarkdownHref(href) {
  if (
    !href ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const skillPathIndex = href.indexOf(".skills/");
  if (skillPathIndex !== -1) {
    const repositoryPath = href.slice(skillPathIndex);
    return `https://github.com/vitaecontext/vitaecontext/blob/main/${repositoryPath}`;
  }

  const match = href.match(markdownFilePattern);
  if (!match) {
    return href;
  }

  const filenameSlug = slugify(match[1]);
  const linkedHash = match[2] ? `-${slugify(match[2])}` : "";
  return explicitTargets.get(filenameSlug) ?? `#section-${filenameSlug}${linkedHash}`;
}

function visitLinks(node) {
  if (!node || typeof node !== "object") {
    return;
  }

  if (node.type === "link" && typeof node.url === "string") {
    node.url = rewriteMarkdownHref(node.url);
  }

  if (Array.isArray(node.children)) {
    node.children.forEach(visitLinks);
  }
}

export function remarkPlaybookLinks() {
  return (tree) => {
    visitLinks(tree);
  };
}
