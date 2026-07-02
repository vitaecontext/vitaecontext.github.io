import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { remarkPlaybookLinks } from "./src/utils/remarkPlaybookLinks.mjs";

export default defineConfig({
  site: "https://agentkit-seo.github.io",
  root: fileURLToPath(new URL(".", import.meta.url)),
  outDir: fileURLToPath(new URL("./dist", import.meta.url)),
  output: "static",
  markdown: {
    remarkPlugins: [remarkPlaybookLinks],
  },
});
