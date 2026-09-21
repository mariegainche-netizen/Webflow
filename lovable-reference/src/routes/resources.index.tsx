import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { breadcrumbLd, buildHead } from "@/lib/seo";
import { ResourcesV2 } from "@/components/v2/resources";

export const Route = createFileRoute("/resources/")({
  head: () => {
    const t = content;
    return buildHead({
      path: "/resources",
      title: t.resources.seo.title,
      description: t.resources.seo.description,
      jsonLd: [
        breadcrumbLd([
          { name: t.common.breadcrumbHome, path: "/" },
          { name: t.nav.resources, path: "/resources" },
        ]),
      ],
    });
  },
  component: ResourcesPage,
});

function ResourcesPage() {
  return <ResourcesV2 />;
}
