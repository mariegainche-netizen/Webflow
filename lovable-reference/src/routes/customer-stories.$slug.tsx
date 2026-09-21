import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, buildHead } from "@/lib/seo";
import { content } from "@/lib/content";
import { getResource } from "@/data/resources";
import { ResourceDetailV2, ResourceNotFoundV2 } from "@/components/v2/resource-detail";

export const Route = createFileRoute("/customer-stories/$slug")({
  head: ({ params }) => {
    const resource = getResource(params.slug);
    if (!resource) {
      return buildHead({
        path: `/customer-stories/${params.slug}`,
        title: "Customer story not found | Consentio",
        description: "This customer story is no longer available.",
        noindex: true,
      });
    }
    return buildHead({
      path: `/customer-stories/${resource.slug}`,
      title: resource.seo.title,
      description: resource.seo.description,
      ogType: "article",
      jsonLd: [
        breadcrumbLd([
          { name: content.common.breadcrumbHome, path: "/" },
          { name: content.nav.stories, path: "/customer-stories" },
          { name: resource.title, path: `/customer-stories/${resource.slug}` },
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
  component: StoryDetailPage,
});

function StoryDetailPage() {
  const { slug } = Route.useParams();
  const resource = getResource(slug);
  if (!resource) return <ResourceNotFoundV2 story />;
  return <ResourceDetailV2 resource={resource} />;
}
