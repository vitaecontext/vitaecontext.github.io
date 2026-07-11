import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { unified } from "@astrojs/markdown-remark";
import { fileURLToPath } from "node:url";
import { remarkPlaybookLinks } from "./src/utils/remarkPlaybookLinks.mjs";

export default defineConfig({
  site: "https://vitaecontext.github.io",
  root: fileURLToPath(new URL(".", import.meta.url)),
  outDir: fileURLToPath(new URL("./dist", import.meta.url)),
  output: "static",
  integrations: [react()],
  markdown: {
    processor: unified({ remarkPlugins: [remarkPlaybookLinks] }),
  },
});
