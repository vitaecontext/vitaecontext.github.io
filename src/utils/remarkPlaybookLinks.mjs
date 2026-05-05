const markdownFilePattern = /(?:^|\/)([^/#?]+)\.md(?:#([^?]+))?(?:\?.*)?$/i;

const explicitTargets = new Map([
  ["readme", "#main-content"],
  ["context-file-template", "#section-context-file-spec"],
  ["renato-mignone-context-file", "#section-context-file-spec"],
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
