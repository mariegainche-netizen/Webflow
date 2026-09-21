import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { content } from "@/lib/content";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: ({ params }) => {
    const t = content;
    return buildHead({
      path: "/privacy-policy",
      title: `${t.legal.privacy.title} | Consentio`,
      description: t.legal.privacy.intro.slice(0, 155),
    });
  },
  component: () => <LegalPage doc="privacy" />,
});
