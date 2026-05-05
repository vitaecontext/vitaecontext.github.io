import { site } from "./site";

export type JsonLd = Record<string, unknown>;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

export function canonical(path: string) {
  return new URL(path, site.url).toString();
}

export function assetUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function fullTitle(title: string) {
  return title === site.name ? title : `${title} | ${site.name}`;
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: assetUrl("/icon-512.png"),
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: assetUrl("/icon-512.png"),
    sameAs: [site.repoUrl],
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    description: site.description,
    url: site.url,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function articleJsonLd(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: canonical(path),
    mainEntityOfPage: canonical(path),
    inLanguage: "en",
    author: site.authors.map((author) => ({
      "@type": "Person",
      name: author.name,
      email: author.email,
      url: author.portfolio,
      sameAs: [author.github, author.linkedin],
    })),
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: assetUrl("/icon-512.png"),
      },
    },
  };
}
