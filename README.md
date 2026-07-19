# VitaeContext Website

Static Astro website for [VitaeContext](https://vitaecontext.github.io). VitaeContext gives AI agents a private, reusable source of truth about a person's career, then provides focused skills for turning that context into grounded professional work.

VitaeContext was formerly AgentKit SEO. The old npm name remains available only as a compatibility entry point.

## Commands

```bash
npm install
npm run sync:product
npm run sync:check
npm run build
npm run dev
```

The site is statically rendered and uses Astro pages for all important routes. Metadata and structured data live in shared helpers under `src/data/metadata.ts`.

`sync:product` reads the sibling product repository by default, regenerates the six mirrored playbooks and `src/data/product-contract.json`, and aligns the public package version. Set `VITAECONTEXT_SOURCE_DIR` to use another product checkout. Deployment runs `sync:check` against a fresh checkout of `vitaecontext/vitaecontext` and fails on drift.

## Routes

- `/`
- `/vitaegraph/`
- `/profile-optimization/`
- `/playbooks/`
- `/playbooks/cv-ats/`
- `/playbooks/linkedin/`
- `/playbooks/github/`
- `/playbooks/web-portfolio/`
- `/playbooks/x-twitter/`
- `/playbooks/context-builder/`
- `/playbooks/vitaegraph/`
- `/skills/`
- `/skills/vitaegraph/`
- `/skills/cv-ats/`
- `/skills/linkedin/`
- `/skills/github/`
- `/skills/web-portfolio/`
- `/skills/x-twitter/`
- `/skills/context-builder/`
- `/providers/`
- `/docs/`
- `/docs/installation/`
- `/docs/usage/`
- `/changelog/`
- `/contact/`
