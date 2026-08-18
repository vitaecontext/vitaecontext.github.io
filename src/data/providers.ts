export type ProviderInfo = {
  id: string;
  name: string;
  summary: string;
  status: string;
  globalTarget: string;
  installCmd: string;
  npxCmd: string;
  invocation: string;
  invocationNote: string;
  mcpConfig?: {
    file: string;
    snippet: string;
  };
};

export const providers: ProviderInfo[] = [
  {
    id: "codex",
    name: "Codex",
    summary:
      "Installs named skill folders into Codex skill directories. A cloned repository also exposes the same eight skills through a native Codex plugin marketplace.",
    status: "Direct install + native plugin",
    globalTarget: "~/.agents/skills/ + CODEX_HOME/skills or ~/.codex/skills/",
    installCmd: "npx vitaecontext install --provider codex",
    npxCmd: "npx vitaecontext install --provider codex",
    invocation: "$vitaecontext-github\n$vitaecontext-vitaegraph",
    invocationNote: "Direct skills and the native plugin share one generated runtime source; exact activation depends on the Codex surface.",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    summary:
      "Copies skill folders into Claude Code's skill location. Claude may auto-select from skill metadata, but explicit naming is the safest invocation path.",
    status: "Direct install + plugin",
    globalTarget: "~/.claude/skills/",
    installCmd: "npx vitaecontext install --provider claude-code",
    npxCmd: "npx vitaecontext install --provider claude-code",
    invocation: "Use the vitaecontext-vitaegraph skill to plan my private career graph.",
    invocationNote: "Ask for the installed skill explicitly by its full namespaced name.",
    mcpConfig: {
      file: "CLI command",
      snippet: "claude mcp add vitaecontext -- npx -y vitaecontext-mcp",
    },
  },
  {
    id: "cursor",
    name: "Cursor",
    summary:
      "Installs shared skills and project rules for Cursor AI. Seamlessly integrates with Cursor's native MCP feature for cross-workspace context.",
    status: "Direct install + MCP",
    globalTarget: "~/.cursor/skills/ or .cursor/skills/",
    installCmd: "npx vitaecontext install --provider cursor",
    npxCmd: "npx vitaecontext install --provider cursor",
    invocation: "Use the installed vitaecontext-github skill or query via MCP.",
    invocationNote: "Supports both workspace rules in .cursor/skills/ and global MCP server registration.",
    mcpConfig: {
      file: "Settings -> Features -> MCP Servers",
      snippet: 'Name: vitaecontext | Type: command | Command: npx -y vitaecontext-mcp',
    },
  },
  {
    id: "windsurf",
    name: "Windsurf",
    summary:
      "Installs shared skills into Windsurf Cascade workspaces and global configs, with support for native Cascade MCP server integration.",
    status: "Direct install + MCP",
    globalTarget: "~/.codeium/windsurf/skills/ or .windsurf/skills/",
    installCmd: "npx vitaecontext install --provider windsurf",
    npxCmd: "npx vitaecontext install --provider windsurf",
    invocation: "Use vitaecontext-cv to tailor my resume for this project.",
    invocationNote: "Supports Cascade skills in .windsurf/skills/ and stdio MCP server in mcp_config.json.",
    mcpConfig: {
      file: "~/.codeium/windsurf/mcp_config.json",
      snippet: '{\n  "mcpServers": {\n    "vitaecontext": {\n      "command": "npx",\n      "args": ["-y", "vitaecontext-mcp"]\n    }\n  }\n}',
    },
  },
  {
    id: "roo-code",
    name: "Roo Code / Cline",
    summary:
      "Installs skill folders for Roo Code and Cline AI assistants in VS Code, with native stdio MCP server support.",
    status: "Direct install + MCP",
    globalTarget: "~/.config/roo-code/skills/ or .roo/skills/",
    installCmd: "npx vitaecontext install --provider roo-code",
    npxCmd: "npx vitaecontext install --provider roo-code",
    invocation: "Use vitaecontext-portfolio to audit my site crawlability.",
    invocationNote: "Supports project-level .roo/skills/ or personal global skills and MCP settings.",
    mcpConfig: {
      file: "cline_mcp_settings.json",
      snippet: '{\n  "mcpServers": {\n    "vitaecontext": {\n      "command": "npx",\n      "args": ["-y", "vitaecontext-mcp"]\n    }\n  }\n}',
    },
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
      "Installs a plugin layout into Antigravity CLI plugin staging path with Gemini-compatible commands and native MCP support.",
    status: "Plugin install + MCP",
    globalTarget: "~/.gemini/antigravity-cli/plugins/vitaecontext/",
    installCmd: "npx vitaecontext install --provider antigravity",
    npxCmd: "npx vitaecontext install --provider antigravity",
    invocation: "Use the installed vitaecontext-vitaegraph plugin skill to validate my graph.",
    invocationNote: "Reference the installed plugin skill by name, or configure the MCP server in mcp_config.json.",
    mcpConfig: {
      file: "~/.gemini/antigravity-cli/mcp_config.json",
      snippet: '{\n  "mcpServers": {\n    "vitaecontext": {\n      "command": "npx",\n      "args": ["-y", "vitaecontext-mcp"]\n    }\n  }\n}',
    },
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
    id: "ibm-bob",
    name: "IBM Bob",
    summary:
      "Installs skill folders and rules for IBM Bob / watsonx Code Assistant with enterprise-ready MCP server support.",
    status: "Direct install + MCP",
    globalTarget: "~/.ibm/skills/ or .ibm/skills/",
    installCmd: "npx vitaecontext install --provider ibm-bob",
    npxCmd: "npx vitaecontext install --provider ibm-bob",
    invocation: "Use vitaecontext-build to structure my career context.",
    invocationNote: "Configurable locally in .ibm/skills/ or globally with watsonx MCP server.",
    mcpConfig: {
      file: ".ibm/mcp_config.json",
      snippet: '{\n  "mcpServers": {\n    "vitaecontext": {\n      "command": "npx",\n      "args": ["-y", "vitaecontext-mcp"]\n    }\n  }\n}',
    },
  },
  {
    id: "grok",
    name: "xAI Grok",
    summary:
      "Installs skills for xAI Grok Agent environments and developer tools with stdio Model Context Protocol support.",
    status: "Direct install + MCP",
    globalTarget: "~/.grok/skills/ or .grok/skills/",
    installCmd: "npx vitaecontext install --provider grok",
    npxCmd: "npx vitaecontext install --provider grok",
    invocation: "Use vitaecontext-x to audit my profile positioning and posts.",
    invocationNote: "Supports project-level .grok/skills/ or developer MCP configurations.",
    mcpConfig: {
      file: ".grok/mcp_config.json",
      snippet: '{\n  "mcpServers": {\n    "vitaecontext": {\n      "command": "npx",\n      "args": ["-y", "vitaecontext-mcp"]\n    }\n  }\n}',
    },
  },
  {
    id: "shared",
    name: "Shared bundle",
    summary:
      "Exports portable standard SKILL.md folders to any target directory following the agentskills.io open specification.",
    status: "Export target",
    globalTarget: "requires --target-dir",
    installCmd: "npx vitaecontext install --provider shared --target-dir ./skills",
    npxCmd: "npx vitaecontext install --provider shared --target-dir ./skills",
    invocation: "Copy or reference the relevant SKILL.md folder for your agent.",
    invocationNote: "No default global path - you control where the portable skill folders land.",
  },
];
