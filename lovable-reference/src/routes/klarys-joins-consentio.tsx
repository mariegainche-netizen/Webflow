import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { buildHead } from "@/lib/seo";
import { KlarysV2 } from "@/components/v2/company";

export const Route = createFileRoute("/klarys-joins-consentio")({
  head: () => {
    const t = content;
    return buildHead({
      path: "/klarys-joins-consentio",
      title: t.klarys.seo.title,
      description: t.klarys.seo.description,
    });
  },
  component: KlarysPage,
});

function KlarysPage() {
  return <KlarysV2 />;
}
