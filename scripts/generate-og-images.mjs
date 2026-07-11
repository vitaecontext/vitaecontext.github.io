import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { Resvg } from "@resvg/resvg-js";

const outputRoot = "public/og";
const size = { width: 1200, height: 630 };

function renderPng(svg) {
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: size.width } });
  return resvg.render().asPng();
}

const topics = [
  {
    slug: "context-builder",
    label: "Agent Context",
    title: "AI Career Context File Optimization",
    subtitle: "One verified source of truth for agents, profiles, CVs, and portfolio copy.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "CTX",
  },
  {
    slug: "vitaegraph",
    label: "VitaeGraph",
    title: "Private Markdown Career Knowledge Graph",
    subtitle: "Deep local career records, validation, and rebuildable indexes for agent workflows.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "VG",
  },
  {
    slug: "cv-ats",
    label: "CV/ATS",
    title: "ATS Resume and CV Optimization",
    subtitle: "Parser-safe structure, recruiter scanning, keywords, and proof bullets.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "CV",
  },
  {
    slug: "github",
    label: "GitHub",
    title: "GitHub Profile and Repository SEO",
    subtitle: "READMEs, topics, pinned repositories, and AI-readable project proof.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "GH",
  },
  {
    slug: "linkedin",
    label: "LinkedIn",
    title: "LinkedIn Profile Optimization",
    subtitle: "Headline, About, Featured proof, skills, and recruiter search clarity.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "IN",
  },
  {
    slug: "web-portfolio",
    label: "Web Portfolio",
    title: "Portfolio SEO and Personal Website Optimization",
    subtitle: "Crawlability, metadata, structured data, snippets, and AI search visibility.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "WWW",
  },
  {
    slug: "x-twitter",
    label: "X / Twitter",
    title: "X and Twitter Profile Optimization",
    subtitle: "Bio clarity, pinned-post strategy, technical positioning, and posting loops.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "X",
  },
  {
    slug: "vitaecontext",
    label: "Orchestration",
    title: "Orchestration and Routing",
    subtitle: "Route a request to one module and load only the context that task needs.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "VC",
  },
];

// Standalone pages (single OG card each, written to public/og/<slug>.png).
const pages = [
  {
    slug: "design",
    label: "Design",
    title: "Applied Agentic-AI Concepts",
    subtitle: "Career context file, LLM Wiki, evidence labels, and an internal audit scorecard.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "DSN",
    chip: "Design overview",
  },
  {
    slug: "cli",
    label: "CLI",
    title: "VitaeContext CLI Reference",
    subtitle: "version, update, doctor, list, template, graph, install, uninstall, and export.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "CLI",
    chip: "Command reference",
  },
  {
    slug: "vitaegraph",
    label: "VitaeGraph",
    title: "VitaeGraph",
    subtitle: "Private Markdown career knowledge graphs, powered by VitaeContext.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "VG",
    chip: "Product module",
  },
  {
    slug: "faq",
    label: "FAQ",
    title: "VitaeContext FAQ",
    subtitle: "Honest answers on providers, install, scope, and what it does not promise.",
    accent: "#1F684B",
    accentDark: "#123C2D",
    pattern: "FAQ",
    chip: "Questions and answers",
  },
];

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapText(value, maxChars) {
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function textBlock(lines, x, y, fontSize, lineHeight, options = {}) {
  const attrs = [
    `x="${x}"`,
    `y="${y}"`,
    `font-family="Inter, Arial, sans-serif"`,
    `font-size="${fontSize}"`,
    `font-weight="${options.weight ?? 700}"`,
    `fill="${options.fill ?? "#18201C"}"`,
  ];

  return `<text ${attrs.join(" ")}>${lines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`)
    .join("")}</text>`;
}

function svgForTopic(topic, variant) {
  const eyebrow =
    variant === "skill"
      ? "VitaeContext - agent skill"
      : variant === "page"
        ? "Documentation"
        : "VitaeContext - methodology playbook";
  const title = variant === "skill" ? `${topic.title} Agent Skill` : topic.title;
  const titleLines = wrapText(title, 28).slice(0, 3);
  const subtitleLines = wrapText(topic.subtitle, 58).slice(0, 2);
  const chipLabel =
    variant === "skill" ? "Installable skill" : variant === "page" ? topic.chip ?? "Reference" : "Human-readable guide";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}" viewBox="0 0 ${size.width} ${size.height}">
  <rect width="${size.width}" height="${size.height}" fill="#F7F5EF"/>
  <rect x="0" y="0" width="${size.width}" height="${size.height}" fill="#F7F5EF"/>
  <rect x="0" y="0" width="38" height="${size.height}" fill="${topic.accent}"/>
  <circle cx="1010" cy="98" r="210" fill="${topic.accent}" opacity="0.09"/>
  <circle cx="1128" cy="516" r="175" fill="#123C2D" opacity="0.06"/>

  <g transform="translate(82 72)">
    <rect x="0" y="0" width="84" height="84" rx="18" fill="${topic.accentDark}"/>
    <text x="42" y="54" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#F7F5EF">${escapeXml(topic.pattern)}</text>
    <text x="112" y="28" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="800" fill="#18201C">VitaeContext</text>
    <text x="112" y="61" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="650" fill="#5C6861">${escapeXml(eyebrow)}</text>
  </g>

  <g transform="translate(82 198)">
    <rect x="0" y="0" width="${Math.max(210, topic.label.length * 13 + 82)}" height="42" rx="21" fill="#F7F5EF" stroke="${topic.accent}" stroke-width="2"/>
    <circle cx="28" cy="21" r="8" fill="${topic.accent}"/>
    <text x="50" y="27" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800" fill="${topic.accentDark}">${escapeXml(topic.label)}</text>
  </g>

  ${textBlock(titleLines, 82, 309, 58, 68, { weight: 850, fill: "#18201C" })}
  ${textBlock(subtitleLines, 86, 505, 26, 35, { weight: 650, fill: "#5C6861" })}

  <g transform="translate(790 398)">
    <rect x="0" y="0" width="325" height="76" rx="14" fill="#F7F5EF" stroke="#CED8D2" stroke-width="2"/>
    <text x="30" y="31" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="800" fill="#5C6861">PAGE TYPE</text>
    <text x="30" y="58" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="850" fill="${topic.accentDark}">${escapeXml(chipLabel)}</text>
  </g>

  <g transform="translate(790 500)">
    <rect x="0" y="0" width="325" height="52" rx="13" fill="${topic.accentDark}"/>
    <text x="30" y="34" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800" fill="#F7F5EF">vitaecontext.github.io</text>
  </g>
</svg>`;
}

function writeImage(topic, variant) {
  const dir = variant === "page" ? outputRoot : join(outputRoot, variant === "skill" ? "skills" : "playbooks");
  const svgPath = join(dir, `${topic.slug}.svg`);
  const pngPath = join(dir, `${topic.slug}.png`);

  mkdirSync(dirname(svgPath), { recursive: true });
  const svg = svgForTopic(topic, variant);
  writeFileSync(svgPath, svg);
  writeFileSync(pngPath, renderPng(svg));
  return pngPath;
}

const generated = [];
for (const topic of topics) {
  generated.push(writeImage(topic, "playbook"));
  generated.push(writeImage(topic, "skill"));
}
for (const page of pages) {
  generated.push(writeImage(page, "page"));
}

console.log(`Generated ${generated.length} OG images:`);
for (const file of generated) console.log(`- ${file}`);
