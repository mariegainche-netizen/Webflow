import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X, ExternalLink } from "lucide-react";
import { Logo } from "@/components/logo";
import { SiteLink, type SitePath } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const t = content;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock background scroll while the mobile drawer is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const mainLinks: { to: SitePath; label: string }[] = [
    { to: "/retailers", label: t.nav.retailers },
    { to: "/suppliers", label: t.nav.suppliers },
    { to: "/customer-stories", label: t.nav.stories },
    { to: "/resources", label: t.nav.resources },
    { to: "/company", label: t.nav.company },
  ];

  const linkClass =
    "rounded-md px-3 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-forest data-[status=active]:text-forest";

  /** Compact outline treatment for the two existing-customer platform logins. */
  const loginClass =
    "inline-flex h-10 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-semibold text-forest transition-colors hover:border-forest/40 hover:bg-sand";

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/90 text-foreground backdrop-blur transition-colors",
        scrolled && "border-border",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {mainLinks.map((l) => (
            <SiteLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </SiteLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {/* Existing customers: two distinct platform logins, secondary to the demo CTA. */}
          <a
            href={siteConfig.klarysLoginUrl || undefined}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => track("klarys_login_click", { location: "header" })}
            className={loginClass}
          >
            {t.nav.klarysLogin}
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
          <a
            href={siteConfig.consentioLoginUrl || undefined}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => track("sign_in_click", { location: "header" })}
            className={loginClass}
          >
            {t.nav.consentioLogin}
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
          <Button asChild>
            <SiteLink
              to="/book-demo"
              onClick={() => track("book_demo_click", { location: "header" })}
            >
              {t.nav.bookDemo}
            </SiteLink>
          </Button>
        </div>


        <button
          type="button"
          className="inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-forest lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? t.nav.close : t.nav.menu}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <Menu className="size-6" />
        </button>
      </div>
    </header>

      {/* Mobile drawer — kept OUTSIDE the header: the header's backdrop-blur
          creates a containing block, which would trap this fixed overlay. */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden">
          <div className="container-page flex h-18 shrink-0 items-center justify-between border-b border-border">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label={t.nav.close}
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-forest"
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="container-page flex-1 overflow-y-auto py-6">
            <div className="grid gap-1">
              {mainLinks.map((l) => (
                <SiteLink
                  key={l.to}
                  to={l.to}
                  className="rounded-xl px-4 py-3 text-base font-bold text-forest"
                >
                  {l.label}
                </SiteLink>
              ))}
            </div>
            <div className="mt-8 grid gap-3">
              <a
                href={siteConfig.klarysLoginUrl || undefined}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => track("klarys_login_click", { location: "mobile_nav" })}
                className="inline-flex h-12 items-center justify-center gap-1.5 rounded-md border border-border text-base font-semibold text-forest"
              >
                {t.nav.klarysLogin}
                <ExternalLink className="size-4" aria-hidden />
              </a>
              <a
                href={siteConfig.consentioLoginUrl || undefined}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => track("sign_in_click", { location: "mobile_nav" })}
                className="inline-flex h-12 items-center justify-center gap-1.5 rounded-md border border-border text-base font-semibold text-forest"
              >
                {t.nav.consentioLogin}
                <ExternalLink className="size-4" aria-hidden />
              </a>
              <Button asChild size="lg">
                <SiteLink
                  to="/book-demo"
                  onClick={() => track("book_demo_click", { location: "mobile_nav" })}
                >
                  {t.nav.bookDemo}
                </SiteLink>
              </Button>
            </div>

          </div>
        </div>
      ) : null}
    </>
  );
}
