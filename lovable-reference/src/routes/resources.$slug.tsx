import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, buildHead } from "@/lib/seo";
import { content } from "@/lib/content";
import { getResource } from "@/data/resources";
import { ResourceDetailV2, ResourceNotFoundV2 } from "@/components/v2/resource-detail";


export const Route = createFileRoute("/resources/$slug")({
  head: ({ params }) => {
    const resource = getResource(params.slug);
    if (!resource) {
      return buildHead({
        path: `/resources/${params.slug}`,
        title: "Resource not found | Consentio",
        description: "This resource is no longer available.",
        noindex: true,
      });
    }
    return buildHead({
      path: `/resources/${resource.slug}`,
      title: resource.seo.title,
      description: resource.seo.description,
      ogType: "article",
      jsonLd: [
        breadcrumbLd([
          { name: content.common.breadcrumbHome, path: "/" },
          { name: content.nav.resources, path: "/resources" },
          { name: resource.title, path: `/resources/${resource.slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resource.title,
          description: resource.excerpt,
          image: resource.image,
          datePublished: resource.publicationDate ?? undefined,
          author: resource.author ? { "@type": "Organization", name: resource.author } : undefined,
        },
      ],
    });
  },
  component: ResourceDetailPage,
});

function ResourceDetailPage() {
  const { slug } = Route.useParams();
  const resource = getResource(slug);
  if (!resource) return <ResourceNotFoundV2 />;
  return <ResourceDetailV2 resource={resource} />;
}
