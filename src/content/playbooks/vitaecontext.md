---
title: "Orchestration and routing"
platform: "general"
objective: "The root VitaeContext module: a runtime wiki and project self-description that routes a request to a single platform module and loads only the context that task needs."
status: "draft"
published: "2026-06-07"
last_updated: "2026-07-16"
tags: ["orchestration", "routing", "runtime-wiki", "progressive-disclosure", "knowledge-graph", "agent-skill", "entrypoint"]
agent_priority: "high"
id: "vitaecontext"
---

> The root `vitaecontext` module is the entrypoint for the whole bundle. It is a runtime wiki and project self-description that helps an agent understand the system, navigate the knowledge graph, and route a request to the single platform module that fits, instead of loading every skill at once.

---

## 1. Overview

VitaeContext ships eight installed runtime skills: the root router, Career Context builder, VitaeGraph, and five focused modules for GitHub, LinkedIn, CV/ATS, web portfolios, and X/Twitter. The root router is the entrypoint when the right focused module is not yet obvious.

It does two jobs:

- **Self-description.** It explains what VitaeContext is, what each module covers, and where the boundaries between modules are, so an agent can answer "which module should I use?" without guessing.
- **Routing.** It directs a broad request to a single module and the smallest set of references that module needs, rather than pulling the entire library into context.

This keeps each session focused: one module, the references it needs, and the user's Career Context as the factual base.

## 2. Use this module when

- A request is broad and the right platform module is not yet obvious.
- An agent needs the project self-description and the knowledge-graph entrypoint before loading a module.
- A task should load one module and its references, not the whole bundle at once.

## 3. Fast path

1. Read the root self-description to understand the system and its module boundaries.
2. Identify the single surface the request is really about (a profile, a repository, a CV, a site, a posting strategy, or the context file itself).
3. Route to that module and load only the references the current task needs.
4. Keep Career Context as the user-owned source the chosen module reads before writing.

---

## Section: routing the request

The orchestration module maps a request to one module. Most requests resolve to a single surface.

| The request is about | Route to |
|---|---|
| Building or maintaining the private career source of truth | [context-builder](/playbooks/context-builder/) |
| Building or maintaining detailed connected career records | [VitaeGraph](/playbooks/vitaegraph/) |
| A GitHub profile or repository | [github](/playbooks/github/) |
| A LinkedIn profile | [linkedin](/playbooks/linkedin/) |
| A CV or resume for ATS parsing | [cv-ats](/playbooks/cv-ats/) |
| A personal website or portfolio | [web-portfolio](/playbooks/web-portfolio/) |
| An X/Twitter profile or posting strategy | [x-twitter](/playbooks/x-twitter/) |

When a request touches more than one surface, the orchestration module still routes to one module at a time. It starts with the context file when the facts are not yet consolidated, then sends each public surface through its own module.

---

## Section: progressive disclosure

The orchestration module exists so an agent does not have to load the whole system to answer a narrow question. A broad question enters at one entrypoint and narrows to a single module and a single constraint.

In practice this means:

- Load one module, then only the references and wiki entries that the current task needs.
- Ask for the smallest missing input set rather than demanding every asset upfront.
- Pull deeper context only when the task actually requires it.

This is token discipline: the agent spends its context budget on the surface being worked on, not on instructions for the other surfaces it is not touching.

---

## Section: knowledge graph

The modules connect as a navigable Markdown knowledge graph with one entrypoint and explicit edges. The root self-description is that entrypoint. From there, each module links to its own references and its own wiki entries (canonical definitions, platform constraints with confidence labels, known failure modes, and audit rules).

Career Context sits beside the graph: platform modules read it before writing, so every public surface starts from the same supplied facts and stated goals. See the [Design](/design/) page for how the LLM Wiki, evidence labels, and one-source-many-adapters distribution fit together.
