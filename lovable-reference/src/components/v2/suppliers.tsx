import {
  ArrowRight,
  Check,
  
  Inbox,
  Quote,
  Receipt,
  Tags,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SiteLink } from "@/components/site-link";
import { Faq } from "@/components/blocks";
import { FinalCtaV2 } from "@/components/v2/home";
import { PartnerLogosSection } from "@/components/v2/partner-logos-section";
import {
  CategoryTag,
  Display,
  FlowPath,
  MetaLabel,
  Photo,
  V2Section,
} from "@/components/v2/kit";
import { CompactHeroV2, HeroVariantSwitch, useHeroVariant } from "@/components/v2/hero-variant";

import { RequestsCard } from "@/components/product-ui";
import { content, pick } from "@/lib/content";
import { cn } from "@/lib/utils";
import { supplierLogos, supplierTestimonials } from "@/data/site";
import { track } from "@/lib/analytics";
import warehouseProduce from "@/assets/warehouse-produce.jpg";
import seafoodPacking from "@/assets/seafood-packing.jpg";
import logisticsDock from "@/assets/logistics-dock.jpg";
import handsMarket from "@/assets/v2/hands-market.jpg";
import magicOrdersFlow from "@/assets/magic-orders-flow.png.asset.json";
import webshopFlow from "@/assets/webshop-flow.png.asset.json";

// One picto per free-plan card, in card order.
const freeIcons = [Tags, Inbox, Truck, Receipt];

export function SuppliersV2() {
  const t = content;
  const s = t.suppliers;
  const { variant, choose } = useHeroVariant("suppliers");

  const heroSwitch = (tone: "light" | "dark") => (
    <HeroVariantSwitch variant={variant} onChange={choose} tone={tone} />
  );

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      {variant === "b" ? (
        <CompactHeroV2
          eyebrow={s.hero.eyebrow}
          headline={s.hero.headline}
          text={s.hero.text}
          switcher={heroSwitch("dark")}
          actions={
            <>
              <Button asChild size="lg" className="bg-lime text-forest hover:bg-lime/90">
                <SiteLink
                  to="/book-demo"
                  onClick={() => track("supplier_cta_click", { location: "supplier_hero_v2" })}
                >
                  {s.hero.primary}
                  <ArrowRight className="size-4" />
                </SiteLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-forest-foreground/40 bg-transparent text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"
              >
                <a href="#extend">{s.hero.secondary}</a>
              </Button>
            </>
          }
          meta={
            <p className="text-sm font-semibold text-forest-foreground/70">{s.hero.qualifier}</p>
          }
        />
      ) : (
      <section className="relative overflow-hidden bg-background">
        <div className="container-page relative flex justify-end pt-3">{heroSwitch("light")}</div>
        <div className="container-page relative grid items-center gap-10 pb-12 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:pb-14 lg:pt-[4.5rem]">
          <div>
            <Reveal>
              <MetaLabel dot>{s.hero.eyebrow}</MetaLabel>
            </Reveal>
            <Reveal delay={60}>
              <Display size="md" as="h1" className="mt-5 max-w-[26ch]">
                {s.hero.headline}
              </Display>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {s.hero.text}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <SiteLink
                    to="/book-demo"
                    onClick={() => track("supplier_cta_click", { location: "supplier_hero_v2" })}
                  >
                    {s.hero.primary}
                    <ArrowRight className="size-4" />
                  </SiteLink>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#extend">{s.hero.secondary}</a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 border-t border-border pt-5 text-sm font-semibold text-muted-foreground">
                {s.hero.qualifier}
              </p>
            </Reveal>
          </div>

          {/* Signature moment: many retailer flows converging into one workspace. */}
          <Reveal delay={140} className="relative">
            <div className="relative min-h-[17rem]">
              <FlowPath
                d="M40 30 C 160 60, 200 150, 300 190 M40 110 C 160 130, 220 160, 300 195 M40 200 C 160 190, 230 195, 300 200 M40 300 C 160 260, 230 220, 300 205 M40 370 C 160 320, 220 250, 300 210"
                viewBox="0 0 420 400"
                className="absolute inset-0 size-full text-forest/25"
                strokeWidth={1.25}
              />
              <div className="absolute left-0 top-0 w-[64%] space-y-2.5">
                <MiniRequest
                  label="Retailer A"
                  tag="Fresh produce"
                  detail="Weekly request · due 14:00"
                />
                <MiniRequest label="Retailer B" tag="Seafood" detail="Price consultation" />
                <MiniRequest label="Retailer C" tag="Meat" detail="Order amendment" />
                <MiniRequest
                  label="Retailer D"
                  tag="Fresh produce"
                  detail="New reference request"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[62%] shadow-[0_24px_60px_-28px_oklch(0.24_0.05_165/0.5)]">
                <RequestsCard />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      )}

      {/* ------------------------------- SEPARATOR BAND (hero A only) */}
      {variant === "b" ? null : (
      <section className="relative overflow-hidden border-y border-border bg-forest">
        <img
          src={warehouseProduce}
          alt="Pallets of fresh produce staged for dispatch in a supplier warehouse"
          loading="lazy"
          width={1920}
          height={280}
          className="h-[110px] w-full object-cover object-center opacity-80 lg:h-[140px]"
        />
        <div className="absolute inset-y-0 left-6 flex items-center gap-3 lg:left-10">
          <CategoryTag>Fresh produce</CategoryTag>
          <MetaLabel tone="dark" dot>
            Live data · Updated 09:42
          </MetaLabel>
        </div>
      </section>
      )}


      {/* ------------------------------------------- 01 · CONSENTIO SUPPLIER (FREE) */}
      <V2Section tone="light" id="consentio-supplier">
        <SectionHeading eyebrow={s.free.eyebrow} headline={s.free.headline} num="01" />
        <Reveal delay={60}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {s.free.text}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {s.free.cards.map((c, i) => {
            const Icon = freeIcons[i % freeIcons.length];
            return (
              <Reveal key={c.title} delay={i * 50} className="bg-background">
                <div className="group flex h-full flex-col p-6 transition-colors hover:bg-[oklch(0.975_0.014_150)]">
                  <span
                    aria-hidden
                    className="flex size-9 items-center justify-center rounded-full bg-sand text-forest transition-colors group-hover:bg-lime"
                  >
                    <Icon className="size-[1.05rem]" />
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug text-forest">{c.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </V2Section>

      {/* ------------------------------- 02 · FROM RETAILERS TO ALL CUSTOMERS */}
      <section className="relative overflow-hidden bg-[oklch(0.21_0.04_166)] py-14 text-forest-foreground lg:py-16">
        <img
          src={handsMarket}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-15"
        />
        <div className="container-page relative">
          <MetaLabel tone="dark" dot>
            {s.transition.eyebrow}
          </MetaLabel>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div>
              <p className="max-w-xl text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-3xl lg:text-[2.4rem]">
                {s.transition.statement}
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-onforest-muted">
                {s.transition.text}
              </p>
            </div>
            <ExtensionArchitecture />
          </div>
        </div>
      </section>

      {/* ------------------------------------------ 03 · INTRO BAND */}
      <V2Section tone="light" id="extend" className="scroll-mt-28 !py-6 sm:!py-8">
        <Display size="sm" className="max-w-2xl">
          {s.extend.headline}
        </Display>
      </V2Section>

      {/* ------------------------------------------ 03 · MODULE: MAGIC ORDERS (TEXT LEFT) */}
      <V2Section tone="tint" className="!pt-10 sm:!pt-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <MetaLabel dot>{s.extend.magicOrders.label}</MetaLabel>
            <h3 className="mt-3 text-[1.625rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-[2rem]">
              {s.extend.magicOrders.headline}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              {s.extend.magicOrders.text}
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-x-5">
              {s.extend.magicOrders.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                  <span className="text-[0.9375rem] font-semibold leading-snug text-forest">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-7">
              <SiteLink
                to="/book-demo"
                onClick={() => track("supplier_cta_click", { location: "supplier_magic_orders" })}
                className="inline-flex items-center gap-2 text-sm font-bold text-forest underline decoration-lime decoration-2 underline-offset-4"
              >
                {s.extend.magicOrders.cta}
                <ArrowRight className="size-4" aria-hidden />
              </SiteLink>
            </div>
          </div>

          <Reveal delay={60} className="min-w-0">
            {/* Wide diagram: scrollable on phones so the labels stay legible. */}
            <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
              <img
                src={magicOrdersFlow.url}
                alt="Orders arriving as email, PDF, Excel or web portal files are read by Magic Orders, turned into a structured purchase order and sent to ERP systems such as SAP, Oracle or Microsoft Dynamics"
                loading="lazy"
                className="w-[34rem] max-w-none sm:w-full"
              />
            </div>
          </Reveal>
        </div>
      </V2Section>

      {/* ------------------------------------------ MODULE: WEBSHOP (ILLUSTRATION LEFT) */}
      <V2Section tone="light" id="webshop" className="scroll-mt-28">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal delay={60} className="min-w-0 lg:order-first">
            {/* Wide diagram: scrollable on phones so the labels stay legible. */}
            <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
              <img
                src={webshopFlow.url}
                alt="A supplier catalogue with client-specific prices and volumes, a branded webshop where customers add fresh products to their cart, and the resulting order received directly in the supplier system"
                loading="lazy"
                className="w-[34rem] max-w-none sm:w-full"
              />
            </div>
          </Reveal>

          <div>
            <MetaLabel dot>{s.extend.webshop.label}</MetaLabel>
            <h3 className="mt-3 text-[1.625rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-[2rem]">
              {s.extend.webshop.headline}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              {s.extend.webshop.text}
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 sm:gap-x-5">
              {s.extend.webshop.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                  <span className="text-[0.9375rem] font-semibold leading-snug text-forest">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-7">
              <SiteLink
                to="/book-demo"
                onClick={() => track("supplier_cta_click", { location: "supplier_webshop" })}
                className="inline-flex items-center gap-2 text-sm font-bold text-forest underline decoration-lime decoration-2 underline-offset-4"
              >
                {s.extend.webshop.cta}
                <ArrowRight className="size-4" aria-hidden />
              </SiteLink>
            </div>
          </div>
        </div>
      </V2Section>

      {/* ---------------------------------------------- 05 · OPERATIONAL OUTCOMES */}
      <V2Section tone="dark" density="compact" id="outcomes">
        <SectionHeading
          eyebrow={s.outcomes.eyebrow}
          headline={s.outcomes.headline}
          num="05"
          tone="dark"
        />
        <ul className="mt-9 grid gap-px overflow-hidden border border-forest-foreground/10 bg-forest-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {s.outcomes.items.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 40}
              as="li"
              className="bg-forest-foreground/[0.04] transition-colors hover:bg-forest-foreground/[0.08]"
            >
              <div className="flex h-full items-start gap-3 p-5">
                <Check className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                <span className="text-[0.9375rem] font-semibold leading-snug text-forest-foreground">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </V2Section>


      {/* ----------------------------------------------------- PROOF / LOGOS */}
      <V2Section tone="tint" density="compact">
        <Reveal>
          <Display size="sm" className="max-w-2xl">
            {s.proof.headline}
          </Display>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-6 border-t border-border pt-7 lg:gap-x-11">
            {supplierLogos.map((c) => (
              <li key={c.name} className="flex h-7 w-[28%] items-center justify-center sm:w-[16%] lg:h-8 lg:w-auto">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="max-h-7 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0 lg:max-h-8 lg:max-w-[9rem]"
                  />
                ) : (
                  <span className="max-w-full truncate text-center text-[0.75rem] font-extrabold tracking-tight text-forest/55 transition-colors hover:text-forest lg:text-base">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </V2Section>

      {/* ---------------------------------------------------------- TESTIMONIALS */}
      {supplierTestimonials.length > 0 ? (
        <V2Section density="compact" tone="light">
          <SectionHeading
            eyebrow="Supplier teams"
            headline={s.testimonials.headline}
            num="04"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {supplierTestimonials.map((quote, i) => (
              <Reveal key={quote.author} delay={i * 60} className="h-full">
                <figure className="flex h-full flex-col border border-border bg-card p-7">
                  <Quote className="size-5 text-lime" aria-hidden />
                  <blockquote className="mt-4 text-[0.9375rem] leading-relaxed text-foreground/85">
                    {pick(quote.text)}
                  </blockquote>
                  <figcaption className="mt-auto pt-6">
                    <p className="text-sm font-bold text-forest">{quote.author}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-muted-foreground">
                      {quote.role} · {quote.company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </V2Section>
      ) : null}

      {/* ------------------------------------------------------- IMAGE BAND */}
      <section className="border-b border-border">
        <div className="grid lg:grid-cols-2">
          <Photo
            src={seafoodPacking}
            alt="Workers sorting fresh fish into crates in a seafood packing facility"
            ratio="aspect-[32/9]"
            width={1200}
            height={338}
          />
          <Photo
            src={logisticsDock}
            alt="Pallets of fresh goods staged at a logistics dock"
            ratio="aspect-[32/9]"
            width={1200}
            height={338}
          />
        </div>
      </section>

      {/* ---------------------------------------------------------- INTEGRATION */}
      <V2Section density="compact" tone="light" id="integration">
        <PartnerLogosSection
          eyebrow="Integrations"
          headline="Connected to the systems your teams already use."
          text="Consentio can connect with all ERPs on the market. The solution is adapted to your processes, not reverse, so sales and operations teams can work with fewer manual steps."
          partnerCta="Talk integration"
        />
      </V2Section>

      {/* ------------------------------------------------------------------ FAQ */}
      <V2Section density="compact" tone="tint">
        <SectionHeading eyebrow="Good to know" headline={s.faq.headline} num="05" />
        <Faq items={s.faq.items} />
      </V2Section>

      <FinalCtaV2
        headline={s.finalCta.headline}
        text={s.finalCta.text}
        primary={s.finalCta.primary}
        location="supplier_final_v2"
      >
        <SiteLink
          to="/customer-stories"
          onClick={() => track("supplier_cta_click", { location: "supplier_final_v2" })}
          className="text-base font-semibold text-forest-foreground underline decoration-lime decoration-2 underline-offset-4"
        >
          {s.finalCta.secondary}
        </SiteLink>
      </FinalCtaV2>
    </>
  );
}

/* ------------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  headline,
  num,
  tone = "light",
  size = "md",
}: {
  eyebrow?: string;
  headline: string;
  num: string;
  tone?: "light" | "dark";
  size?: "sm" | "md";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className={size === "sm" ? "max-w-3xl" : "max-w-2xl"}>
        {eyebrow ? (
          <MetaLabel tone={dark ? "dark" : undefined} dot>
            {eyebrow}
          </MetaLabel>
        ) : null}
        <Display size={size} className={cn(eyebrow && "mt-5", dark && "text-forest-foreground")}>
          {headline}
        </Display>
      </div>
      <span
        className={cn(
          "font-mono text-[3rem] font-bold leading-none tracking-tight lg:text-[4rem]",
          dark ? "text-forest-foreground/20" : "text-forest/10",
        )}
      >
        {num}
      </span>
    </div>
  );
}

/** Small labelled card representing one customer's request landing in the inbox. */
function MiniRequest({ label, tag, detail }: { label: string; tag: string; detail: string }) {
  return (
    <div className="border border-border bg-card px-3.5 py-2.5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[0.8125rem] font-bold text-forest">{label}</span>
        <span className="font-mono text-[0.5625rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {tag}
        </span>
      </div>
      <p className="mt-1 text-[0.75rem] text-muted-foreground">{detail}</p>
    </div>
  );
}

/**
 * Section 02 visual: one Consentio Supplier workspace branching into the two
 * paid modules that extend it to the rest of the customer base.
 */
function ExtensionArchitecture() {
  const s = content.suppliers.transition;
  return (
    <Reveal className="relative border border-forest-foreground/15 bg-deep/50 p-6 lg:p-8">
      <div className="mx-auto max-w-sm">
        <div className="border border-lime/40 bg-forest-foreground/[0.06] px-4 py-3 text-center">
          <span className="text-[0.9375rem] font-extrabold text-forest-foreground">{s.root}</span>
          <span className="mt-1 block font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-lime/80">
            ALREADY CONNECTED WITH RETAILERS
          </span>
        </div>

        <FlowPath
          d="M100 0 L100 18 M100 18 L20 18 L20 44 M100 18 L180 18 L180 44"
          viewBox="0 0 200 46"
          className="h-11 w-full text-lime/60"
          strokeWidth={1.25}
        />

        <div className="grid grid-cols-2 gap-3">
          {s.branches.map((b) => (
            <div
              key={b.title}
              className="border border-forest-foreground/15 bg-forest-foreground/[0.04] px-3.5 py-3"
            >
              <span className="block text-[0.8125rem] font-bold text-forest-foreground">
                {b.title}
              </span>
              <span className="mt-1 block text-[0.75rem] leading-snug text-onforest-muted">
                {b.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
