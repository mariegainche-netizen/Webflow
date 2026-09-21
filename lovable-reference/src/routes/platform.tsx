import { createFileRoute, redirect } from "@tanstack/react-router";

/** The standalone Platform page was removed; keep the URL working. */
export const Route = createFileRoute("/platform")({
  beforeLoad: () => {
    throw redirect({ href: "/retailers", replace: true });
  },
});
