import { getCollection } from "astro:content";
import { publicRoutes } from "@data/navigation";
import { skills } from "@data/skills";
import { site } from "@data/site-config";

const skillRoutes = skills.map((skill) => ({
  path: skill.href,
  label: skill.name,
}));

export async function GET() {
  const playbooks = await getCollection("playbooks");
  const playbookRoutes = playbooks.map((entry) => ({
    path: `/playbooks/${entry.id}/`,
    label: entry.data.title,
    lastmod: entry.data.last_updated,
  }));

  const routes = [...publicRoutes, ...skillRoutes, ...playbookRoutes];
  const urls = routes
    .map((route) => {
      const loc = new URL(route.path, site.url).toString();
      const lastmod = "lastmod" in route && route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : "";
      return `<url><loc>${loc}</loc>${lastmod}</url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
