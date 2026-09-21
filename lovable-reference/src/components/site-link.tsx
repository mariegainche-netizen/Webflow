import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

/** Every public route of the site, as TanStack file-route ids. */
export type SitePath =
  | "/"
  | "/retailers"
  | "/suppliers"
  | "/customer-stories"
  | "/resources"
  | "/company"
  | "/book-demo"
  | "/klarys-joins-consentio"
  | "/privacy-policy"
  | "/legal-notice"
  | "/cookie-policy";

type SiteLinkProps = Omit<ComponentProps<typeof Link>, "to"> & {
  to: SitePath;
  children: ReactNode;
};

/** Internal link. Always use this instead of <a href>. */
export function SiteLink({ to, children, ...rest }: SiteLinkProps) {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}
