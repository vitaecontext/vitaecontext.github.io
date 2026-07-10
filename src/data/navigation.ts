export const navItems = [
  { label: "Skills", href: "/skills/", placement: "primary" },
  { label: "Guides", href: "/playbooks/", placement: "primary" },
  { label: "Docs", href: "/docs/", placement: "primary" },
  { label: "VitaeGraph", href: "/vitaegraph/", placement: "product" },
  { label: "GitHub", href: "https://github.com/agentkit-seo/agentkit-seo", placement: "external" },
] as const;

export const footerGroups = [
  { label: "Use AgentKit SEO", links: [
    { label: "Skills", href: "/skills/" },
    { label: "Guides", href: "/playbooks/" },
    { label: "Documentation", href: "/docs/" },
    { label: "Providers", href: "/providers/" },
  ] },
  { label: "Learn", links: [
    { label: "Context example", href: "/docs/context-file-example/" },
    { label: "VitaeGraph", href: "/vitaegraph/" },
    { label: "Design", href: "/design/" },
    { label: "FAQ", href: "/faq/" },
  ] },
  { label: "Project", links: [
    { label: "GitHub", href: "https://github.com/agentkit-seo/agentkit-seo" },
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
  { path: "/docs/usage/", label: "How It Works" },
  { path: "/docs/context-file-example/", label: "Context File Example" },
  { path: "/docs/cli/", label: "CLI" },
  { path: "/faq/", label: "FAQ" },
  { path: "/changelog/", label: "Changelog" },
  { path: "/contact/", label: "Contact" },
];

// Claude Code plugin marketplace distribution (new in 1.8.0).
export const marketplace = {
  addCommand: "/plugin marketplace add agentkit-seo/agentkit-seo",
  installCommand: "/plugin install agentkit-seo@agentkit-seo",
};
