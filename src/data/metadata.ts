import { site } from "./site-config";

export type JsonLd = Record<string, unknown>;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  robots?: string;
  canonical?: boolean;
  type?: "website" | "article";
  image?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
};

export const entityIds = {
  website: `${site.url}/#website`,
  organization: `${site.url}/#organization`,
  software: `${site.url}/#software`,
} as const;

type ArticleJsonLdOptions = {
  schemaType?: "Article" | "BlogPosting" | "TechArticle";
  image?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
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
    "@id": `${canonical(items.at(-1)?.path ?? "/")}#breadcrumb`,
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
    "@id": entityIds.website,
    name: site.name,
    url: canonical("/"),
    description: site.description,
    publisher: {
      "@type": "Organization",
      "@id": entityIds.organization,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": entityIds.organization,
    name: site.name,
    url: canonical("/"),
    logo: assetUrl("/icons/icon-512.png"),
    sameAs: [site.repoUrl],
  };
}

export function softwareJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": entityIds.software,
    name: site.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    softwareVersion: site.packageVersion,
    description: site.description,
    url: canonical("/"),
    downloadUrl: site.npmUrl,
    codeRepository: site.repoUrl,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      "@id": entityIds.organization,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function softwareSourceCodeJsonLd(title: string, description: string, path: string, invocationName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${canonical(path)}#software-source-code`,
    name: invocationName,
    headline: title,
    description,
    url: canonical(path),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${canonical(path)}#webpage`,
      isPartOf: {
        "@type": "WebSite",
        "@id": entityIds.website,
      },
    },
    codeRepository: site.repoUrl,
    programmingLanguage: "Markdown",
    runtimePlatform: ["Codex", "Claude Code", "Gemini CLI", "Antigravity", "OpenCode"],
    license: "https://opensource.org/license/mit",
    isPartOf: {
      "@type": "SoftwareApplication",
      "@id": entityIds.software,
    },
    author: {
      "@type": "Organization",
      "@id": entityIds.organization,
    },
  };
}

export function webPageJsonLd(title: string, description: string, path: string, pageType = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${canonical(path)}#webpage`,
    name: title,
    description,
    url: canonical(path),
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": entityIds.website,
    },
    publisher: {
      "@type": "Organization",
      "@id": entityIds.organization,
    },
    about: {
      "@type": "SoftwareApplication",
      "@id": entityIds.software,
    },
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>, path = "/faq/") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical(path)}#faq`,
    isPartOf: {
      "@type": "WebSite",
      "@id": entityIds.website,
    },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(title: string, description: string, path: string, options: ArticleJsonLdOptions = {}) {
  const image = assetUrl(options.image ?? site.defaultImage);

  return {
    "@context": "https://schema.org",
    "@type": options.schemaType ?? "TechArticle",
    "@id": `${canonical(path)}#article`,
    headline: title,
    description,
    url: canonical(path),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${canonical(path)}#webpage`,
    },
    image: [image],
    ...(options.datePublished && { datePublished: options.datePublished }),
    ...(options.dateModified && { dateModified: options.dateModified }),
    ...(options.keywords?.length && { keywords: options.keywords.join(", ") }),
    inLanguage: "en",
    author: {
      "@type": "Organization",
      "@id": entityIds.organization,
    },
    publisher: {
      "@type": "Organization",
      "@id": entityIds.organization,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": entityIds.website,
    },
    about: {
      "@type": "SoftwareApplication",
      "@id": entityIds.software,
    },
  };
}
