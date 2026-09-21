import { Logo } from "@/components/logo";
import { SiteLink, type SitePath } from "@/components/site-link";
import { content } from "@/lib/content";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/data/site";

type FooterLink = { to: SitePath; label: string; hash?: string };

export function Footer() {
  const t = content;
  const year = new Date().getFullYear();

  const solutionLinks: FooterLink[] = [
    { to: "/retailers", label: t.footer.links.retailers },
    { to: "/suppliers", label: t.footer.links.suppliers },
    { to: "/retailers", label: t.footer.links.integrations, hash: "integration" },
  ];


  const resourceLinks: FooterLink[] = [
    { to: "/resources", label: t.footer.links.articles },
    { to: "/customer-stories", label: t.footer.links.stories },
  ];

  const companyLinks: FooterLink[] = [
    { to: "/company", label: t.footer.links.about },
    { to: "/klarys-joins-consentio", label: t.footer.links.klarys },
    { to: "/book-demo", label: t.footer.links.contact },
  ];

  const legalLinks: FooterLink[] = [
    { to: "/privacy-policy", label: t.footer.links.privacy },
    { to: "/legal-notice", label: t.footer.links.legal },
    { to: "/cookie-policy", label: t.footer.links.cookies },
  ];

  const itemClass = "text-sm text-forest-foreground/70 transition-colors hover:text-lime";

  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="container-page grid gap-8 py-10 lg:grid-cols-5 lg:gap-8 lg:py-12">
        <div className="lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-forest-foreground/70">{t.footer.description}</p>
        </div>

        <FooterColumn title={t.footer.solutions} links={solutionLinks} itemClass={itemClass} />
        <FooterColumn title={t.footer.resources} links={resourceLinks} itemClass={itemClass} />
        <FooterColumn title={t.footer.company} links={companyLinks} itemClass={itemClass} />

        <nav aria-label={t.footer.platformAccess}>
          <h2 className="text-sm font-bold uppercase tracking-wider text-lime">{t.footer.platformAccess}</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={siteConfig.klarysLoginUrl || undefined}
                target="_blank"
                rel="noreferrer noopener"
                className={itemClass}
                onClick={() => track("klarys_login_click", { location: "footer" })}
              >
                {t.footer.links.klarysLogin}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.consentioLoginUrl || undefined}
                target="_blank"
                rel="noreferrer noopener"
                className={itemClass}
                onClick={() => track("sign_in_click", { location: "footer" })}
              >
                {t.footer.links.consentioLogin}
              </a>
            </li>
            <li>
              <SiteLink
                to="/book-demo"
                className={itemClass}
                onClick={() => track("book_demo_click", { location: "footer" })}
              >
                {t.footer.links.bookDemo}
              </SiteLink>
            </li>
          </ul>
        </nav>
      </div>


      <div className="border-t border-forest-foreground/10">
        <div className="container-page flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-forest-foreground/60">
            © {year} Consentio. {siteConfig.contactEmail}
          </p>
          <nav aria-label={t.footer.legal}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <SiteLink to={l.to} className={itemClass}>
                    {l.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  itemClass,
}: {
  title: string;
  links: FooterLink[];
  itemClass: string;
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-bold uppercase tracking-wider text-lime">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <SiteLink to={l.to} hash={l.hash} className={itemClass}>
              {l.label}
            </SiteLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
