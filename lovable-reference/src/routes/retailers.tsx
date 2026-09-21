import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { breadcrumbLd, buildHead } from "@/lib/seo";
import { RetailersV2 } from "@/components/v2/retailers";

export const Route = createFileRoute("/retailers")({
  head: () => {
    const t = content;
    return buildHead({
      path: "/retailers",
      title: t.retailers.seo.title,
      description: t.retailers.seo.description,
      jsonLd: [
        breadcrumbLd([
          { name: t.common.breadcrumbHome, path: "/" },
          { name: t.nav.retailers, path: "/retailers" },
        ]),
      ],
    });
  },
  component: RetailersRoute,
});

function RetailersRoute() {
  return <RetailersV2 />;
}
