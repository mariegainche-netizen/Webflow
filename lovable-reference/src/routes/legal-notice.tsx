import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { content } from "@/lib/content";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/legal-notice")({
  head: ({ params }) => {
    const t = content;
    return buildHead({
      path: "/legal-notice",
      title: `${t.legal.notice.title} | Consentio`,
      description: t.legal.notice.intro.slice(0, 155),
    });
  },
  component: () => <LegalPage doc="notice" />,
});
