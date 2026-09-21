type Meta = Record<string, string>[];

/**
 * Builds per-page head metadata: title, description, OG/Twitter, canonical
 * and optional JSON-LD. `path` is the route path (e.g. "/retailers").
 */
export function buildHead({
  path,
  title,
  description,
  ogType = "website",
  jsonLd = [],
  noindex = false,
}: {
  path: string;
  title: string;
  description: string;
  ogType?: string;
  jsonLd?: unknown[];
  noindex?: boolean;
}) {
  const url = path === "" ? "/" : path;
  const meta: Meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:locale", content: "en" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (noindex) meta.push({ name: "robots", content: "noindex" });

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

/** Breadcrumb structured data for internal pages. */
export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "" ? "/" : item.path,
    })),
  };
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Consentio",
  description: "The operating platform for fresh food procurement and supplier collaboration.",
  areaServed: ["FR", "ES", "CH"],
};
