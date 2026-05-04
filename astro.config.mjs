import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://agentkit-seo.github.io",
  root: fileURLToPath(new URL(".", import.meta.url)),
  outDir: fileURLToPath(new URL("./dist", import.meta.url)),
  output: "static",
  integrations: [sitemap()],
});
