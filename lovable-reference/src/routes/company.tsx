import { createFileRoute } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { breadcrumbLd, buildHead } from "@/lib/seo";
import { CompanyV2 } from "@/components/v2/company";

export const Route = createFileRoute("/company")({
  head: () => {
    const t = content;
    return buildHead({
      path: "/company",
      title: t.company.seo.title,
      description: t.company.seo.description,
      jsonLd: [
        breadcrumbLd([
          { name: t.common.breadcrumbHome, path: "/" },
          { name: t.nav.company, path: "/company" },
        ]),
      ],
    });
  },
  component: CompanyPage,
});

function CompanyPage() {
  return <CompanyV2 />;
}
