import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { breadcrumbLd, buildHead } from "@/lib/seo";
import { SuppliersV2 } from "@/components/v2/suppliers";

export const Route = createFileRoute("/suppliers")({
  head: () => {
    const t = content;
    return buildHead({
      path: "/suppliers",
      title: t.suppliers.seo.title,
      description: t.suppliers.seo.description,
      jsonLd: [
        breadcrumbLd([
          { name: t.common.breadcrumbHome, path: "/" },
          { name: t.nav.suppliers, path: "/suppliers" },
        ]),
      ],
    });
  },
  component: SuppliersRoute,
});

function SuppliersRoute() {
  return <SuppliersV2 />;
}
