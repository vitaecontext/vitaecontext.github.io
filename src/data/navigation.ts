export const navItems = [
  { label: "Skills", href: "/skills/", placement: "primary" },
  { label: "Guides", href: "/playbooks/", placement: "primary" },
  { label: "Providers", href: "/providers/", placement: "primary" },
  { label: "MCP", href: "/docs/mcp/", placement: "primary" },
  { label: "Docs", href: "/docs/", placement: "primary" },
  { label: "VitaeGraph", href: "/vitaegraph/", placement: "product" },
  { label: "GitHub", href: "https://github.com/vitaecontext/vitaecontext", placement: "external" },
] as const;

export const footerGroups = [
  { label: "Use VitaeContext", links: [
    { label: "Skills", href: "/skills/" },
    { label: "Guides", href: "/playbooks/" },
    { label: "Documentation", href: "/docs/" },
    { label: "Providers", href: "/providers/" },
    { label: "MCP Server", href: "/docs/mcp/" },
  ] },
  { label: "Learn", links: [
    { label: "Context example", href: "/docs/context-file-example/" },
    { label: "VitaeGraph", href: "/vitaegraph/" },
    { label: "MCP Guide", href: "/docs/mcp/" },
    { label: "Design", href: "/design/" },
    { label: "FAQ", href: "/faq/" },
  ] },
  { label: "Project", links: [
    { label: "GitHub", href: "https://github.com/vitaecontext/vitaecontext" },
    { label: "Changelog", href: "/changelog/" },
    { label: "Contact", href: "/contact/" },
  ] },
] as const;

export const publicRoutes = [
  { path: "/", label: "Home" },
  { path: "/vitaegraph/", label: "VitaeGraph" },
  { path: "/profile-optimization/", label: "Career Workflows" },
  { path: "/playbooks/", label: "Guides" },
  { path: "/skills/", label: "Agent Skills" },
  { path: "/providers/", label: "Providers" },
  { path: "/design/", label: "Design" },
  { path: "/docs/", label: "Docs" },
  { path: "/docs/installation/", label: "Installation" },
  { path: "/docs/mcp/", label: "MCP Server" },
  { path: "/docs/usage/", label: "How It Works" },
  { path: "/docs/context-file-example/", label: "Context File Example" },
  { path: "/docs/cli/", label: "CLI" },
  { path: "/faq/", label: "FAQ" },
  { path: "/changelog/", label: "Changelog" },
  { path: "/contact/", label: "Contact" },
];

// Claude Code plugin marketplace distribution (new in 1.8.0).
export const marketplace = {
  addCommand: "/plugin marketplace add vitaecontext/vitaecontext",
  installCommand: "/plugin install vitaecontext@vitaecontext",
};

export const codexMarketplace = {
  addCommand: "codex plugin marketplace add .agents/plugins",
  installCommand: "codex plugin add vitaecontext@vitaecontext",
};
