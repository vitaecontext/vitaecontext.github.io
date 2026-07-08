---
title: "VitaeGraph"
platform: "general"
objective: "Explain when to use VitaeGraph and how to maintain private Markdown career graph records."
status: "draft"
published: "2026-07-07"
last_updated: "2026-07-07"
tags: ["vitaegraph", "knowledge-graph", "markdown", "career-context", "agent-skills"]
agent_priority: "high"
id: "vitaegraph"
---

> VitaeGraph is the deep-record layer for AgentKit SEO. It complements the compact personal career context file with private, local Markdown records and rebuildable indexes.

## Section: Overview

Use VitaeGraph when career material is too detailed for one compact context file. The compact file remains the fast agent handoff: identity, current goals, core facts, constraints, and high-level proof. VitaeGraph stores deeper records for education, thesis work, university courses, repository-backed projects, experience, certifications, awards, and publications.

The graph is local-first. Source records are Markdown files the user can read and edit. Generated JSON indexes are rebuildable artifacts.

## Section: When to use it

Use VitaeGraph when:

- A degree contains thesis work, courses, publications, or projects that deserve their own records.
- A project needs more detail than a short context-file bullet can carry.
- A GitHub repository URL is available and the agent should inspect public repo context before summarizing the project.
- An agent needs selected deep context instead of the whole career history.
- Record IDs, internal links, and generated indexes need validation.

Do not use VitaeGraph as a replacement for the compact career context file. Use it as the deeper companion when the task needs more structure.

## Section: Default private workspace

The default private workspace convention is:

```text
~/.agentkit-seo/<name-surname>-career-context.md
~/.agentkit-seo/vitaegraph/
```

The context file and VitaeGraph folder are separate artifacts. They may link to each other, but each remains useful on its own.

## Section: Basic workflow

1. Inspect the supplied career material and plan the records before writing.
2. Create hierarchical Markdown records for the material that exists.
3. Keep university courses under the related education folder when they belong to a degree.
4. Keep thesis work under the related education folder when it belongs to a degree.
5. Enrich repository-backed projects with public GitHub context when a repository URL is supplied.
6. Validate the graph for duplicate IDs, internal links, and supported field values.
7. Rebuild indexes from the Markdown source records.

## Section: CLI commands

Initialize a graph:

```bash
npx agentkit-seo graph init --root ~/.agentkit-seo/vitaegraph
```

Validate a graph:

```bash
npx agentkit-seo graph validate --root ~/.agentkit-seo/vitaegraph
```

Generate deterministic indexes:

```bash
npx agentkit-seo graph index --root ~/.agentkit-seo/vitaegraph
```

## Section: Privacy and limits

VitaeGraph does not create a backend, cloud service, vector database, or public career profile. Private career files are user-controlled local artifacts and should not be committed.

VitaeGraph structures supplied material. It does not verify claims automatically, guarantee retrieval quality, or guarantee better platform outcomes.
