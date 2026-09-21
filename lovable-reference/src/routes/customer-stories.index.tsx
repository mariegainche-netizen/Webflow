import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { breadcrumbLd, buildHead } from "@/lib/seo";
import { CustomerStoriesV2 } from "@/components/v2/customer-stories";

export const Route = createFileRoute("/customer-stories/")({
  head: () => {
    const t = content;
    return buildHead({
      path: "/customer-stories",
      title: t.stories.seo.title,
      description: t.stories.seo.description,
      jsonLd: [
        breadcrumbLd([
          { name: t.common.breadcrumbHome, path: "/" },
          { name: t.nav.stories, path: "/customer-stories" },
        ]),
      ],
    });
  },
  component: StoriesPage,
});

function StoriesPage() {
  return <CustomerStoriesV2 />;
}
