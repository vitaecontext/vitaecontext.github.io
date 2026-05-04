import { skills, publicRoutes, site } from "@data/site";

const routes = [...publicRoutes, ...skills.map((skill) => ({ path: skill.href, label: skill.name }))];

export function GET() {
  const urls = routes
    .map((route) => {
      const loc = new URL(route.path, site.url).toString();
      return `<url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${route.path === "/" ? "1.0" : "0.7"}</priority></url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
