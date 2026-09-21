import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { content } from "@/lib/content";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/cookie-policy")({
  head: ({ params }) => {
    const t = content;
    return buildHead({
      path: "/cookie-policy",
      title: `${t.legal.cookies.title} | Consentio`,
      description: t.legal.cookies.intro.slice(0, 155),
    });
  },
  component: () => <LegalPage doc="cookies" />,
});
