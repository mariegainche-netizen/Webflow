import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { buildHead, organizationLd } from "@/lib/seo";
import { HomeV2 } from "@/components/v2/home";

export const Route = createFileRoute("/")({
  head: () => {
    const t = content;
    return buildHead({
      path: "/",
      title: t.home.seo.title,
      description: t.home.seo.description,
      jsonLd: [organizationLd],
    });
  },
  component: HomePage,
});

function HomePage() {
  return <HomeV2 />;
}
