export const providers = [
  {
    id: "codex",
    name: "Codex",
    summary:
      "Installs named skill folders into the Codex skills directory. Each skill becomes selectable by name within Codex environments that support skill loading.",
    status: "Direct install",
    globalTarget: "~/.codex/skills/",
    installCmd: "npx vitaecontext install --provider codex",
    npxCmd: "npx vitaecontext install --provider codex",
    invocation: "$vitaecontext-github\n$vitaecontext-vitaegraph",
    invocationNote: "Exact activation depends on Codex environment and installed skill support.",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    summary:
      "Copies skill folders into Claude Code's skill location. Claude may auto-select from skill metadata, but explicit naming is the safest invocation path.",
    status: "Direct install",
    globalTarget: "~/.claude/skills/",
    installCmd: "npx vitaecontext install --provider claude-code",
    npxCmd: "npx vitaecontext install --provider claude-code",
    invocation: "Use the vitaecontext-vitaegraph skill to plan my private career graph.",
    invocationNote: "Ask for the installed skill explicitly by its full namespaced name.",
  },
  {
    id: "gemini-cli",
    name: "Gemini CLI",
    summary:
      "Installs a named Gemini CLI extension with TOML command files and skill folders. Adds namespaced slash commands for each surface.",
    status: "Extension install",
    globalTarget: "~/.gemini/extensions/vitaecontext/",
    installCmd: "npx vitaecontext install --provider gemini-cli",
    npxCmd: "npx vitaecontext install --provider gemini-cli",
    invocation: "/vitaecontext:github\n/vitaecontext:vitaegraph\n/vitaecontext:cv",
    invocationNote: "Commands are namespaced under /vitaecontext: for each skill surface.",
  },
  {
    id: "antigravity",
    name: "Antigravity",
    summary:
      "Installs a plugin layout based on the Gemini-compatible bundle into the Antigravity CLI plugin staging path. The same skill folders ship with an Antigravity plugin manifest.",
    status: "Plugin install",
    globalTarget: "~/.gemini/antigravity-cli/plugins/vitaecontext/",
    installCmd: "npx vitaecontext install --provider antigravity",
    npxCmd: "npx vitaecontext install --provider antigravity",
    invocation: "Use the installed vitaecontext-vitaegraph plugin skill to validate my graph.",
    invocationNote: "Reference the installed plugin skill by name. The layout is based on the Gemini-compatible bundle.",
  },
  {
    id: "opencode",
    name: "OpenCode",
    summary:
      "Installs skill folders into the OpenCode skills directory plus Markdown command wrapper files for flat slash-command invocation.",
    status: "Direct install",
    globalTarget: "~/.config/opencode/skills/",
    installCmd: "npx vitaecontext install --provider opencode",
    npxCmd: "npx vitaecontext install --provider opencode",
    invocation: "/vitaecontext-github\n/vitaecontext-vitaegraph\n/vitaecontext-context",
    invocationNote: "Flat command wrappers use a hyphenated prefix for direct slash invocation.",
  },
  {
    id: "shared",
    name: "Shared bundle",
    summary:
      "Exports portable SKILL.md folders to any target directory. For agents without a dedicated adapter or for manual packaging and reuse.",
    status: "Export target",
    globalTarget: "requires --target-dir",
    installCmd: "npx vitaecontext install --provider shared --target-dir ./skills",
    npxCmd: "npx vitaecontext install --provider shared --target-dir ./skills",
    invocation: "Copy or reference the relevant SKILL.md folder for your agent.",
    invocationNote: "No default global path - you control where the skill folders land.",
  },
];
