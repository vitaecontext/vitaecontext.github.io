import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptRoot = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptRoot, "..");
const productRoot = path.resolve(
  process.env.VITAECONTEXT_SOURCE_DIR ?? path.join(siteRoot, "..", "vitaecontext")
);
const sourceRoot = path.join(productRoot, "hub");
const destinationRoot = path.join(siteRoot, "src", "content", "playbooks");
const contractPath = path.join(siteRoot, "src", "data", "product-contract.json");
const llmsPath = path.join(siteRoot, "public", "llms.txt");
const checkOnly = process.argv.includes("--check");

const playbooks = [
  "context-builder",
  "cv-ats",
  "github",
  "linkedin",
  "web-portfolio",
  "x-twitter"
];

function digest(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function normalizeRepositoryLinks(content) {
  return content
    .replace(
      /\]\((?:\.\.\/)+(\.skills\/[^)]+)\)/g,
      "](https://github.com/vitaecontext/vitaecontext/blob/main/$1)"
    )
    .replace(
      /\]\((?:\.\.\/)+(skills\/[^)]+)\)/g,
      "](https://github.com/vitaecontext/vitaecontext/blob/main/$1)"
    )
    .replace(
      /\]\((?:\.\.\/)+(src\/[^)]+)\)/g,
      "](https://github.com/vitaecontext/vitaecontext/blob/main/$1)"
    );
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function buildPlaybook(playbook) {
  const sourceDirectory = path.join(sourceRoot, playbook);
  const entries = await fs.readdir(sourceDirectory, { withFileTypes: true });
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();
  if (!markdownFiles.includes("README.md")) {
    throw new Error(`Missing README.md in product playbook: ${playbook}`);
  }

  const readme = await fs.readFile(path.join(sourceDirectory, "README.md"), "utf8");
  const strippedReadme = normalizeRepositoryLinks(readme.replace(/^#\s+.*$/gm, ""));
  const metadata = strippedReadme.match(/<!--\s*metadata:\n([\s\S]*?)-->/);
  const frontmatter = metadata
    ? `---\n${metadata[1].replace(/\n  /g, "\n").trim()}\nid: "${playbook}"\n---\n\n`
    : `---\ntitle: "${playbook.replaceAll("-", " ")}"\nplatform: "${playbook}"\nid: "${playbook}"\n---\n\n`;
  const parts = [metadata ? strippedReadme.replace(metadata[0], "").trim() : strippedReadme.trim()];

  for (const file of markdownFiles) {
    if (file === "README.md") continue;
    const content = normalizeRepositoryLinks((await fs.readFile(path.join(sourceDirectory, file), "utf8"))
      .replace(/^#\s+.*$/gm, "")
      .trim());
    parts.push(`---\n\n## Section: ${file.slice(0, -3).replaceAll("-", " ")}\n\n${content}`);
  }
  return `${frontmatter}${parts.join("\n\n")}\n`;
}

async function compareOrWrite(filePath, content, mismatches) {
  if (checkOnly) {
    const current = await fs.readFile(filePath, "utf8").catch(() => null);
    if (current !== content) mismatches.push(path.relative(siteRoot, filePath));
    return;
  }
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
}

async function run() {
  const packageMetadata = await readJson(path.join(productRoot, "package.json"));
  const exportConfig = await readJson(path.join(productRoot, "src", "export-config.json"));
  const mismatches = [];
  const hashes = {};

  for (const playbook of playbooks) {
    const content = await buildPlaybook(playbook);
    hashes[playbook] = digest(content);
    await compareOrWrite(path.join(destinationRoot, `${playbook}.md`), content, mismatches);
  }

  const contract = {
    schemaVersion: 1,
    packageName: packageMetadata.name,
    packageVersion: packageMetadata.version,
    skills: exportConfig.skills.map((skill) => skill.name),
    providers: Object.keys(exportConfig.providers).sort(),
    playbooks: hashes
  };
  await compareOrWrite(contractPath, `${JSON.stringify(contract, null, 2)}\n`, mismatches);

  const llms = await fs.readFile(llmsPath, "utf8");
  const expectedLlms = llms.replace(
    /Current package version: [0-9A-Za-z.+-]+\./,
    `Current package version: ${packageMetadata.version}.`
  );
  await compareOrWrite(llmsPath, expectedLlms, mismatches);

  if (mismatches.length > 0) {
    for (const file of mismatches) console.error(`stale: ${file}`);
    throw new Error(`Product synchronization check found ${mismatches.length} stale file(s). Run npm run sync:product.`);
  }
  console.log(`${checkOnly ? "ok: checked" : "synced"} ${playbooks.length} product playbook(s) for VitaeContext ${packageMetadata.version}`);
}

run().catch((error) => {
  console.error(`error: ${error.message}`);
  process.exit(1);
});
