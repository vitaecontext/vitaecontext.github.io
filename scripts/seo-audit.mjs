import { existsSync, readFileSync } from "node:fs";
import { extname } from "node:path";

const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
const origin = "https://vitaecontext.github.io";
const expectedRoutes = [
  "/", "/vitaegraph/", "/profile-optimization/", "/playbooks/", "/skills/", "/providers/", "/design/",
  "/docs/", "/docs/installation/", "/docs/mcp/", "/docs/usage/", "/docs/context-file-example/", "/docs/cli/", "/faq/",
  "/changelog/", "/contact/", "/skills/context-builder/", "/skills/cv-ats/", "/skills/github/",
  "/skills/linkedin/", "/skills/vitaecontext/", "/skills/vitaegraph/", "/skills/web-portfolio/",
  "/skills/x-twitter/", "/playbooks/context-builder/", "/playbooks/cv-ats/", "/playbooks/github/",
  "/playbooks/linkedin/", "/playbooks/vitaecontext/", "/playbooks/vitaegraph/", "/playbooks/web-portfolio/",
  "/playbooks/x-twitter/",
];
const errors = [];
const records = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function decode(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function attr(tag, name) {
  return decode(tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, "i"))?.[1]);
}

function routeFile(pathname) {
  if (pathname === "/") return new URL("index.html", dist);
  return new URL(`${pathname.replace(/^\//, "")}index.html`, dist);
}

function stripTags(value) {
  return decode(value.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function meta(html, selector, value) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  return tags.find((tag) => attr(tag, selector)?.toLowerCase() === value.toLowerCase());
}

function pngSize(file) {
  const data = readFileSync(file);
  if (data.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
}

function outputPath(pathname) {
  const clean = pathname.replace(/^\//, "");
  if (!clean) return new URL("index.html", dist);
  if (extname(clean)) return new URL(clean, dist);
  return new URL(`${clean.replace(/\/$/, "")}/index.html`, dist);
}

if (!existsSync(dist)) {
  console.error("SEO audit requires generated output. Run npm run build first.");
  process.exit(1);
}

for (const pathname of [...expectedRoutes, "/404.html"]) {
  const file = pathname === "/404.html" ? new URL("404.html", dist) : routeFile(pathname);
  if (!existsSync(file)) {
    fail(pathname, "expected generated HTML is missing");
    continue;
  }

  const html = readFileSync(file, "utf8");
  const titles = [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)].map((match) => stripTags(match[1]));
  const descriptions = (html.match(/<meta\s+name=["']description["'][^>]*>/i) ?? html.match(/<meta\s+content=["'][^"']*["'][^>]*name=["']description["'][^>]*>/i));
  const description = descriptions ? attr(descriptions[0], "content") : "";
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => stripTags(match[1]));
  const canonicalTag = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0];
  const canonical = canonicalTag ? attr(canonicalTag, "href") : "";
  const robotsTag = meta(html, "name", "robots");
  const robots = robotsTag ? attr(robotsTag, "content") : "";
  const ogUrlTag = meta(html, "property", "og:url");
  const ogUrl = ogUrlTag ? attr(ogUrlTag, "content") : "";
  const ogTitleTag = meta(html, "property", "og:title");
  const ogDescriptionTag = meta(html, "property", "og:description");
  const ogImageTag = meta(html, "property", "og:image");
  const twitterTitleTag = meta(html, "name", "twitter:title");
  const twitterDescriptionTag = meta(html, "name", "twitter:description");
  const twitterImageTag = meta(html, "name", "twitter:image");

  if (titles.length !== 1 || !titles[0]) fail(pathname, `expected one nonempty title, found ${titles.length}`);
  if (description.length < 70) fail(pathname, `description is missing or too short (${description.length} characters)`);
  if (h1s.length !== 1 || !h1s[0]) fail(pathname, `expected one nonempty H1, found ${h1s.length}`);

  if (pathname === "/404.html") {
    if (!robots.toLowerCase().includes("noindex")) fail(pathname, "must emit noindex");
    if (canonical || ogUrl) fail(pathname, "utility page must omit canonical and og:url");
  } else {
    const expectedCanonical = new URL(pathname, `${origin}/`).toString();
    if (canonical !== expectedCanonical) fail(pathname, `canonical mismatch: ${canonical || "missing"}`);
    if (ogUrl !== canonical) fail(pathname, "og:url must equal canonical");
    if (!robots.toLowerCase().startsWith("index, follow")) fail(pathname, `unexpected robots directive: ${robots || "missing"}`);
    if (attr(ogTitleTag, "content") !== titles[0]) fail(pathname, "og:title must equal title");
    if (attr(ogDescriptionTag, "content") !== description) fail(pathname, "og:description must equal description");
    if (attr(twitterTitleTag, "content") !== titles[0]) fail(pathname, "twitter:title must equal title");
    if (attr(twitterDescriptionTag, "content") !== description) fail(pathname, "twitter:description must equal description");
    if (attr(twitterImageTag, "content") !== attr(ogImageTag, "content")) fail(pathname, "twitter:image must equal og:image");
  }

  if (ogImageTag) {
    const imageUrl = attr(ogImageTag, "content");
    if (!imageUrl.startsWith(`${origin}/`)) fail(pathname, `social image uses unexpected origin: ${imageUrl}`);
    else {
      const imageFile = outputPath(new URL(imageUrl).pathname);
      if (!existsSync(imageFile)) fail(pathname, `social image is missing: ${imageUrl}`);
      else {
        const dimensions = pngSize(imageFile);
        if (!dimensions || dimensions.width !== 1200 || dimensions.height !== 630) fail(pathname, `social image must be a 1200x630 PNG: ${imageUrl}`);
      }
    }
  }

  const ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => decode(match[1])));
  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    if (!/\salt=["'][^"']*["']/i.test(tag)) fail(pathname, `image is missing alt: ${tag.slice(0, 100)}`);
    if (!attr(tag, "width") || !attr(tag, "height")) fail(pathname, `image is missing width/height: ${attr(tag, "src")}`);
  }

  const jsonScripts = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (pathname !== "/404.html" && jsonScripts.length < 2) fail(pathname, `expected page schema and breadcrumbs, found ${jsonScripts.length}`);
  for (const [, source] of jsonScripts) {
    try {
      const value = JSON.parse(source);
      const serialized = JSON.stringify(value);
      if (serialized.includes("agentkit-seo.github.io") || serialized.includes("github.com/agentkit-seo")) fail(pathname, "JSON-LD contains a retired URL");
      if (/"https:\/\/vitaecontext\.github\.io[^"#]*"/.test(serialized) && serialized.includes("vitaecontext.github.io//")) fail(pathname, "JSON-LD contains a malformed canonical URL");
      for (const match of serialized.matchAll(/"date(?:Published|Modified)":"([^"]+)"/g)) {
        if (!html.includes(`datetime="${match[1]}"`)) fail(pathname, `structured date is not visible in HTML: ${match[1]}`);
      }
    } catch (error) {
      fail(pathname, `invalid JSON-LD: ${error.message}`);
    }
  }
  const schemaText = jsonScripts.map((match) => match[1]).join("\n");
  if (pathname !== "/404.html" && !schemaText.includes(canonical)) fail(pathname, "structured data does not contain the page canonical URL");
  if (pathname === "/" && !["#website", "#organization", "#software"].every((id) => schemaText.includes(`${origin}/${id}`))) fail(pathname, "homepage entity graph is missing stable website, organization, or software IDs");
  if (pathname !== "/404.html" && !schemaText.includes(`${origin}/#website`) && pathname !== "/") fail(pathname, "page schema is not connected to the stable website entity");
  if (pathname.startsWith("/skills/") && pathname !== "/skills/" && !schemaText.includes(`${canonical}#software-source-code`)) fail(pathname, "skill schema is missing its stable source-code ID");

  for (const tag of html.match(/<a\b[^>]*href=["'][^"']+["'][^>]*>/gi) ?? []) {
    const href = attr(tag, "href");
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http:")) continue;
    const url = new URL(href, `${origin}${pathname}`);
    if (url.origin !== origin) continue;
    const target = outputPath(url.pathname);
    if (!existsSync(target)) fail(pathname, `broken internal link: ${href}`);
    if (url.hash && url.pathname === pathname && !ids.has(decodeURIComponent(url.hash.slice(1)))) fail(pathname, `missing same-page fragment: ${href}`);
  }

  if (pathname !== "/404.html" && stripTags(html).length < 500) fail(pathname, "generated static text is unexpectedly thin");
  if (pathname !== "/changelog/" && /AgentKit SEO/i.test(stripTags(html))) fail(pathname, "former brand appears outside the approved history page");
  if (/lorem ipsum|\bTODO\b|REPLACE_ME/i.test(stripTags(html))) fail(pathname, "placeholder text found");
  records.push({ pathname, title: titles[0], description, canonical });
}

const duplicate = (field) => {
  const seen = new Map();
  for (const record of records.filter((item) => item.pathname !== "/404.html")) {
    if (seen.has(record[field])) fail(record.pathname, `duplicate ${field} also used by ${seen.get(record[field])}`);
    seen.set(record[field], record.pathname);
  }
};
duplicate("title");
duplicate("description");

const inbound = new Map(expectedRoutes.map((route) => [route, new Set()]));
for (const sourcePath of expectedRoutes) {
  const html = readFileSync(routeFile(sourcePath), "utf8");
  for (const tag of html.match(/<a\b[^>]*href=["'][^"']+["'][^>]*>/gi) ?? []) {
    const href = attr(tag, "href");
    if (!href) continue;
    const url = new URL(href, `${origin}${sourcePath}`);
    if (url.origin !== origin || !inbound.has(url.pathname) || url.pathname === sourcePath) continue;
    inbound.get(url.pathname).add(sourcePath);
  }
}
for (const [route, sources] of inbound) {
  if (route !== "/" && sources.size === 0) fail(route, "canonical route has no inbound HTML link");
}

const sitemapFile = new URL("sitemap.xml", dist);
if (!existsSync(sitemapFile)) fail("sitemap.xml", "missing");
else {
  const sitemap = readFileSync(sitemapFile, "utf8");
  const actual = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname).sort();
  const expected = [...expectedRoutes].sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) fail("sitemap.xml", `route set mismatch\n  expected: ${expected.join(", ")}\n  actual: ${actual.join(", ")}`);
  if (sitemap.includes("<lastmod>") && [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].some((match) => !/^\d{4}-\d{2}-\d{2}$/.test(match[1]))) fail("sitemap.xml", "lastmod values must be real ISO dates");
}

const robots = readFileSync(new URL("robots.txt", dist), "utf8");
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) fail("robots.txt", "canonical sitemap reference is missing");

const llms = readFileSync(new URL("llms.txt", dist), "utf8");
for (const [, href] of llms.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)) {
  const url = new URL(href);
  if (url.origin === origin && !existsSync(outputPath(url.pathname))) fail("llms.txt", `broken canonical link: ${href}`);
}
if (!/fictional/i.test(readFileSync(new URL("examples/sample-career-context.md", dist), "utf8"))) fail("sample context", "public example must be explicitly fictional");

if (errors.length) {
  console.error(`SEO audit failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO audit passed: ${expectedRoutes.length} canonical routes plus 404; metadata, headings, canonicals, robots, Open Graph, images, links, JSON-LD, sitemap, llms.txt, and legacy-brand boundaries verified.`);
