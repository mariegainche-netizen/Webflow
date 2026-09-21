import type { ReactNode } from "react";
import * as Icons from "lucide-react";
import { ArrowRight, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SiteLink, type SitePath } from "@/components/site-link";
import { cn } from "@/lib/utils";
import { customerLogos, integrations } from "@/data/site";
import {
  AllocationCard,
  CatalogueCard,
  ForecastCard,
  OffersCard,
  OrderCard,
  RequestsCard,
  TrackingCard,
  UiPanel,
} from "@/components/product-ui";
import { track } from "@/lib/analytics";

/** Renders a lucide icon by name, with a safe fallback. */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Cmp className={className} aria-hidden />;
}

export function CheckList({
  items,
  tone = "light",
  className,
}: {
  items: string[];
  tone?: "light" | "forest";
  className?: string;
}) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check
            className={cn("mt-0.5 size-4 shrink-0", tone === "forest" ? "text-lime" : "text-deep")}
            aria-hidden
          />
          <span className={cn("text-base", tone === "forest" ? "text-forest-foreground/85" : "text-foreground/85")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Card({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "forest";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 transition-colors lg:p-7",
        tone === "forest"
          ? "border-forest-foreground/12 bg-deep/50 hover:border-lime/40"
          : "border-border bg-card hover:border-forest/30",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Audience block used on the homepage for the retailer and supplier propositions. */
export function AudienceBlock({
  eyebrow,
  title,
  headline,
  text,
  benefits,
  cta,
  to,
  variant,
  media,
}: {
  eyebrow: string;
  title: string;
  headline: string;
  text: string;
  benefits: string[];
  cta: string;
  to: SitePath;
  variant: "retailer" | "supplier";
  media?: ReactNode;
}) {
  const primary = variant === "retailer";
  return (
    <div className={cn("grid gap-12 lg:items-center lg:gap-20", media ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-1")}>
      <div>
        <p className={cn("eyebrow", primary ? "text-muted-foreground" : "text-lime")}>
          <span aria-hidden className="h-px w-6 bg-lime" />
          {eyebrow}
        </p>
        <p
          className={cn(
            "mt-5 text-xs font-bold uppercase tracking-[0.16em]",
            primary ? "text-forest/50" : "text-forest-foreground/50",
          )}
        >
          {title}
        </p>
        <h2
          className={cn(
            "mt-3 font-extrabold leading-[1.05] tracking-tight",
            primary
              ? "text-4xl text-forest sm:text-5xl lg:text-[3.5rem]"
              : "text-3xl text-forest-foreground sm:text-4xl lg:text-[3rem]",
          )}
        >
          {headline}
        </h2>
        <p className={cn("lede mt-6", primary ? "text-muted-foreground" : "text-onforest-muted")}>{text}</p>
        <CheckList items={benefits} tone={primary ? "light" : "forest"} className="mt-8" />
        <div className="mt-9">
          <Button asChild size="lg" variant={primary ? "default" : "lime"}>
            <SiteLink
              to={to}
              onClick={() =>
                track(primary ? "retailer_cta_click" : "supplier_cta_click", { location: "home_audience" })
              }
            >
              {cta}
              <ArrowRight className="size-4" />
            </SiteLink>
          </Button>
        </div>
      </div>
      {media ? <Reveal delay={80}>{media}</Reveal> : null}
    </div>
  );
}

/** Numbered workflow rail — hairline separated, no cards. */
export function WorkflowTimeline({
  steps,
  tone = "light",
}: {
  steps: { title: string; text: string; stage?: string }[];
  tone?: "light" | "forest";
}) {
  const dark = tone === "forest";
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 50} as="li" className={dark ? "bg-forest" : "bg-background"}>
          <div className="flex h-full flex-col p-7">
            <span
              className={cn(
                "text-[0.6875rem] font-bold uppercase tracking-[0.16em]",
                dark ? "text-lime" : "text-muted-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={cn("mt-4 text-lg font-bold", dark ? "text-forest-foreground" : "text-forest")}>
              {step.title}
            </h3>
            <p className={cn("mt-2 text-[0.9375rem] leading-relaxed", dark ? "text-onforest-muted" : "text-muted-foreground")}>
              {step.text}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Editable customer logo strip — approved logos only (see data/site.ts). */
/**
 * Customer logo strip: one row on desktop, smooth marquee on mobile.
 * Approved logo assets render as grayscale images; brands without an approved
 * asset render an explicit wordmark placeholder (never a recreated logo).
 */
export function LogoStrip({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("", className)}>
      <p className="text-center text-sm font-semibold text-muted-foreground">{label}</p>

      {/* Desktop / tablet: static row */}
      <ul className="mt-8 hidden flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:flex lg:gap-x-12">
        {customerLogos.map((c) => (
          <li key={c.name}>
            <LogoItem name={c.name} logo={c.logo} />
          </li>
        ))}
      </ul>

      {/* Mobile: continuous marquee */}
      <div className="marquee mt-8 sm:hidden" aria-hidden>
        <ul className="marquee-track">
          {[...customerLogos, ...customerLogos].map((c, i) => (
            <li key={`${c.name}-${i}`} className="shrink-0">
              <LogoItem name={c.name} logo={c.logo} />
            </li>
          ))}
        </ul>
      </div>
      <ul className="sr-only sm:hidden">
        {customerLogos.map((c) => (
          <li key={c.name}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

function LogoItem({ name, logo }: { name: string; logo: string | null }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        className="h-7 w-auto max-w-[8rem] object-contain opacity-55 grayscale transition-opacity hover:opacity-90"
      />
    );
  }
  return (
    // LOGO PLACEHOLDER: awaiting the approved brand asset.
    <span
      data-logo="placeholder"
      title={`${name} — logo placeholder`}
      className="text-[0.95rem] font-extrabold tracking-tight text-forest/40 transition-colors hover:text-forest/70 lg:text-base"
    >
      {name}
    </span>
  );
}

export function IntegrationStrip({ title }: { title: string }) {
  return (
    <div className="border-t border-border pt-8">
      <p className="eyebrow text-muted-foreground">{title}</p>
      <ul className="mt-5 flex flex-wrap items-center gap-x-12 gap-y-5">
        {integrations.map((i) => (
          <li key={i.name} className="text-lg font-extrabold text-forest/45">
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


export function IntegrationLogo({ name }: { name: string }) {
  if (name === "SAP") {
    return (
      <svg viewBox="0 6 24 12" role="img" aria-label="SAP logo" fill="currentColor" className="h-9 w-auto lg:h-10">
        <path d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z" />
      </svg>
    );
  }
  if (name === "Microsoft") {
    return (
      <span className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" role="img" aria-label="Microsoft logo" fill="currentColor" className="h-6 w-6 lg:h-7 lg:w-7">
          <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z" />
        </svg>
        <span className="text-xl font-extrabold tracking-tight lg:text-2xl">Microsoft</span>
      </span>
    );
  }
  return <span className="text-xl font-extrabold tracking-tight lg:text-2xl">{name}</span>;
}

type IntegrationsSectionProps = {
  eyebrow: string;
  headline: string;
  text: string;
  benefitTitle: string;
  benefitText: string;
  partnerEyebrow: string;
  partnerTitle: string;
  partnerText: string;
  partnerCta: string;
};

export function IntegrationsSection(props: IntegrationsSectionProps) {
  return (
    <div>
      <Reveal>
        <p className="eyebrow text-muted-foreground">{props.eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-forest lg:text-4xl">
          {props.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">{props.text}</p>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-8 flex flex-wrap items-center gap-x-14 gap-y-6">
          {integrations.map((i) => (
            <li key={i.name} className="flex items-center text-forest/45 transition-colors hover:text-forest/70">
              <IntegrationLogo name={i.name} />
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg font-bold tracking-tight text-forest">{props.benefitTitle}</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{props.benefitText}</p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-muted-foreground">{props.partnerEyebrow}</p>
            <p className="mt-2 text-base font-bold text-forest">{props.partnerTitle}</p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{props.partnerText}</p>
          </div>
          <SiteLink
            to="/book-demo"
            className="inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4"
          >
            {props.partnerCta}
            <ArrowRight className="size-4" aria-hidden />
          </SiteLink>
        </div>
      </Reveal>
    </div>
  );
}

export function KpiCard({ value, label, tone = "light" }: { value: ReactNode; label: string; tone?: "light" | "forest" }) {
  return (
    <div
      className={cn(
        "border-t pt-6",
        tone === "forest" ? "border-forest-foreground/20" : "border-border",
      )}
    >
      <p className={cn("text-4xl font-extrabold tracking-tight lg:text-5xl", tone === "forest" ? "text-lime" : "text-forest")}>
        {value}
      </p>
      <p className={cn("mt-2 text-[0.9375rem]", tone === "forest" ? "text-onforest-muted" : "text-muted-foreground")}>
        {label}
      </p>
    </div>
  );
}

/**
 * Composed product view: a live-styled Consentio interface panel built from
 * page furniture (never a screenshot inside a browser mockup).
 * Sample values are illustrative interface data, not customer results.
 */
export function ScreenshotFrame({
  title,
  rows,
}: {
  title: string;
  rows: readonly { label: string; value: string }[];
}) {
  return (
    <UiPanel label={title} meta="Live workspace">
      <div className="divide-y divide-border/70">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
            <span className="text-[0.8125rem] font-semibold text-foreground">{row.label}</span>
            <span className="text-[0.8125rem] text-muted-foreground">{row.value}</span>
          </div>
        ))}
      </div>
    </UiPanel>
  );
}

/** Product visual matched to each module of the Retailers and Suppliers pages. */
const moduleVisuals: Record<string, () => ReactNode> = {
  forecasting: () => <ForecastCard />,
  consultations: () => <OffersCard />,
  allocation: () => <AllocationCard />,
  orders: () => <OrderCard />,
  catalogues: () => <CatalogueCard />,
  "order-automation": () => <OrderCard />,
  workspace: () => <RequestsCard />,
  visibility: () => <TrackingCard />,
};

/** Alternating product block used on the Retailers and Suppliers pages. */
export function ModuleBlock({
  id,
  eyebrow,
  title,
  text,
  capabilities,
  screenshot,
  reversed = false,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  text: string;
  capabilities: readonly string[];
  screenshot: { title: string; rows: readonly { label: string; value: string }[] };
  reversed?: boolean;
}) {
  const visual = moduleVisuals[id];
  return (
    <div id={id} className="scroll-mt-28 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className={cn(reversed && "lg:order-2")}>
        {eyebrow ? (
          <p className="eyebrow text-muted-foreground">
            <span aria-hidden className="h-px w-6 bg-lime" />
            {eyebrow}
          </p>
        ) : null}
        <h3 className={cn("text-[1.75rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-4xl", eyebrow ? "mt-4" : "")}>
          {title}
        </h3>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">{text}</p>
        <CheckList items={[...capabilities]} className="mt-7" />
      </div>
      <Reveal delay={60} className={cn("grid gap-3", reversed && "lg:order-1")}>
        {visual ? visual() : null}
        <ScreenshotFrame title={screenshot.title} rows={screenshot.rows} />
      </Reveal>
    </div>
  );
}

/** Accessible FAQ list (native details/summary, no JS). */
export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="mt-10 divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-forest">
            {item.q}
            <Plus className="size-4 shrink-0 text-deep transition-transform group-open:rotate-45" aria-hidden />
          </summary>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaSection({
  headline,
  text,
  primaryLabel,
  tone = "lime",
  children,
}: {
  headline: string;
  text?: string;
  primaryLabel: string;
  tone?: "lime" | "forest";
  children?: ReactNode;
}) {
  const lime = tone === "lime";
  return (
    <section className={cn("section-y", lime ? "bg-lime text-lime-foreground" : "bg-forest text-forest-foreground")}>
      <div className="container-page max-w-4xl text-center">
        <h2 className="display-2">{headline}</h2>
        {text ? (
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg", lime ? "text-lime-foreground/80" : "text-onforest-muted")}>
            {text}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant={lime ? "default" : "lime"}>
            <SiteLink
              to="/book-demo"
              onClick={() => track("book_demo_click", { location: "cta_section" })}
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </SiteLink>
          </Button>
          {children}
        </div>
      </div>
    </section>
  );
}
