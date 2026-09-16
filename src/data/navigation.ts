export const navItems = [
  { label: "How it works", href: "/docs/usage/", placement: "primary" },
  { label: "Get started", href: "/docs/installation/", placement: "primary" },
  { label: "Docs", href: "/docs/", placement: "primary" },
  { label: "VitaeGraph", href: "/vitaegraph/", placement: "product" },
  { label: "GitHub", href: "https://github.com/vitaecontext/vitaecontext", placement: "external" },
] as const;

export const footerGroups = [
  { label: "Start", links: [
    { label: "How it works", href: "/docs/usage/" },
    { label: "Installation", href: "/docs/installation/" },
    { label: "Documentation", href: "/docs/" },
    { label: "MCP Server", href: "/docs/mcp/" },
  ] },
  { label: "Explore", links: [
    { label: "Context Builder guide", href: "/playbooks/" },
    { label: "Career Context example", href: "/docs/context-file-example/" },
    { label: "VitaeGraph", href: "/vitaegraph/" },
    { label: "Architecture", href: "/design/" },
    { label: "CLI reference", href: "/docs/cli/" },
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
  { path: "/playbooks/", label: "Career Context Guide" },
  { path: "/playbooks/context-builder/", label: "Context Builder" },
  { path: "/skills/", label: "Runtime Skills" },
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
