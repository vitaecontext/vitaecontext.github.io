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

`sync:product` reads the sibling product repository by default, regenerates `src/data/product-contract.json`, and aligns the package version in `public/llms.txt`. The retired platform playbook collection is no longer populated. The provider catalog is maintained separately from the generated contract; mark source-only adapters until they are published on npm. Set `VITAECONTEXT_SOURCE_DIR` to use another product checkout. Deployment runs `sync:check` against a fresh checkout of `vitaecontext/vitaecontext` and fails on drift.

## Routes

- `/`
- `/vitaegraph/`
- `/design/`
- `/profile-optimization/` (compatibility route)
- `/playbooks/` and `/playbooks/context-builder/`
- `/skills/`, `/skills/vitaecontext/`, `/skills/context-builder/`, `/skills/vitaegraph/`
- `/providers/`
- `/docs/`, `/docs/installation/`, `/docs/usage/`, `/docs/cli/`, `/docs/mcp/`, `/docs/context-file-example/`
- `/faq/`, `/changelog/`, `/contact/`
