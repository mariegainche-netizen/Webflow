import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SiteLink } from "@/components/site-link";
import { ForecastCard, OffersCard, OrderCard } from "@/components/product-ui";
import { ConnectedFlowV2 } from "@/components/v2/connected-flow";
import { PartnerLogosSection } from "@/components/v2/partner-logos-section";
import { TrustStripV2 } from "@/components/v2/trust-strip";
import { CustomerStoryCard } from "@/components/v2/story-card";
import {
  CategoryTag,
  Display,
  FlowPath,
  MetaLabel,
  Parallax,
  Photo,
  Rule,
  V2Section,
} from "@/components/v2/kit";
import { content } from "@/lib/content";
import { caseStudies } from "@/data/site";
import { track } from "@/lib/analytics";
import crateProduce from "@/assets/v2/crate-produce.jpg";

import handsMarket from "@/assets/v2/hands-market.jpg";

export function HomeV2() {
  const t = content;
  const h = t.home;
  
  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="relative overflow-hidden bg-forest text-forest-foreground">
        <FlowPath
          d="M-20 260 C 260 260, 340 90, 620 120 S 1000 300, 1260 170"
          viewBox="0 0 1200 400"
          className="absolute inset-x-0 top-24 h-[420px] w-full text-lime/35"
          strokeWidth={1.25}
        />
        <div className="container-page relative grid items-center gap-10 pb-8 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:pb-14 lg:pt-[4.5rem]">
          <div>
            <Reveal>
              <MetaLabel dot tone="dark">{h.hero.eyebrow}</MetaLabel>
            </Reveal>
            <Reveal delay={60}>
              <Display size="lg" as="h1" tone="dark" className="mt-5 lg:text-[3.5rem]">
                {h.hero.headline}
              </Display>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-forest-foreground/80">{h.hero.text}</p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-lime text-forest hover:bg-lime/90">
                  <SiteLink to="/book-demo" onClick={() => track("book_demo_click", { location: "home_hero_v2" })}>
                    {h.hero.primary}
                    <ArrowRight className="size-4" />
                  </SiteLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-forest-foreground/35 bg-transparent text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"
                >
                  <a
                    href="#how-it-works"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    {h.hero.secondary}
                    <ArrowDown className="size-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <MetaLabel tone="dark">Fresh produce</MetaLabel>
                <MetaLabel tone="dark">Seafood</MetaLabel>
                <MetaLabel tone="dark">Meat</MetaLabel>
              </div>
            </Reveal>
          </div>

          {/* physical + digital composition — desktop/tablet only */}
          <Reveal delay={120} className="relative hidden sm:block">
            <div className="relative">
              <Parallax strength={14}>
                <Photo
                  src={crateProduce}
                  alt="Freshly harvested produce in a wooden crate"
                  ratio="aspect-[3/2]"
                  priority
                  width={1600}
                  height={1200}
                  className="lg:ml-10"
                  imgClassName="opacity-[0.88] contrast-[1.06] saturate-[1.05]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-transparent lg:ml-10"
                />
              </Parallax>
              <div className="pointer-events-none absolute left-0 top-6 hidden w-[54%] sm:block">
                <div className="shadow-[0_24px_60px_-30px_oklch(0.24_0.05_165/0.55)]">
                  <ForecastCard />
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-8 right-0 hidden w-[52%] sm:block lg:-right-6">
                <div className="shadow-[0_24px_60px_-30px_oklch(0.24_0.05_165/0.55)]">
                  <OrderCard />
                </div>
              </div>
              <div className="absolute left-4 top-4">
                <CategoryTag>Fresh produce</CategoryTag>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- TRUST STRIP */}
      <TrustStripV2 label={h.proof.logosLabel} />

      {/* ----------------------------------------------------------- PROOF */}
      <V2Section tone="tint" density="compact" className="!py-5">
        <MetaLabel dot>CONSENTIO IN NUMBERS</MetaLabel>
        <div className="mt-2.5 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {h.proof.stats.map((stat, i) => (
            <Reveal key={stat.value + i} delay={i * 60} className="bg-[oklch(0.975_0.014_150)]">
              <div className="flex h-full flex-col px-4 py-2.5">
                <p className="text-xl font-extrabold leading-[1.1] tracking-tight text-forest">{stat.value}</p>
                <p className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground">
                  {stat.label}
                  {stat.note ? ` ${stat.note}` : ""}
                </p>

              </div>
            </Reveal>
          ))}
        </div>
      </V2Section>

      {/* -------------------------------------------- WHY FRESH IS DIFFERENT */}
      <V2Section tone="light">
        <div className="max-w-[52rem]">
          <MetaLabel dot>{h.problem.eyebrow}</MetaLabel>
          <Display size="md" className="mt-4 lg:mt-6">
            {h.problem.headline}
          </Display>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:mt-6 lg:text-lg">
            {h.problem.text}
          </p>
        </div>

        <div className="mt-6 grid gap-3 lg:mt-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
          {/* stable side — deliberately flat and quiet */}
          <Reveal>
            <div className="flex h-full flex-col border border-border bg-[oklch(0.978_0.004_150)] p-5 lg:p-9">
              <MetaLabel>Stable · Predictable · Structured</MetaLabel>
              <h3 className="mt-3 text-lg font-bold text-muted-foreground lg:mt-4 lg:text-xl">
                {h.problem.standard.title}
              </h3>
              <ul className="mt-4 flex-1 space-y-0 lg:mt-6">
                {h.problem.standard.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-border py-2 text-[0.875rem] text-muted-foreground last:border-b lg:py-3 lg:text-[0.9375rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground lg:mt-6">{h.problem.standard.conclusion}</p>
            </div>
          </Reveal>

          {/* mobile comparison connector */}
          <div aria-hidden className="flex items-center justify-center gap-2 lg:hidden">
            <span className="h-px flex-1 bg-border" />
            <span className="inline-flex size-7 items-center justify-center rounded-full border border-lime/50 bg-lime/15 text-forest">
              <ArrowDown className="size-3.5" />
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* volatile side — photography, motion, live metadata */}
          <Reveal delay={80}>
            <div className="relative flex h-full flex-col overflow-hidden bg-forest text-forest-foreground">
              <img
                src={handsMarket}
                alt="Hands inspecting tomatoes at a fresh market"
                loading="lazy"
                width={1408}
                height={1408}
                className="absolute inset-0 size-full object-cover opacity-35"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" />
              <div className="relative flex flex-1 flex-col p-5 lg:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <MetaLabel tone="dark" dot>
                    Live data · Updated 09:42
                  </MetaLabel>
                  <CategoryTag>Week 27</CategoryTag>
                </div>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight sm:text-3xl lg:mt-4">
                  {h.problem.fresh.title}
                </h3>
                <ul className="mt-4 flex-1 space-y-0 lg:mt-6">
                  {h.problem.fresh.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline justify-between gap-4 border-t border-forest-foreground/15 py-2 last:border-b lg:gap-6 lg:py-3.5"
                    >
                      <span className="text-[0.875rem] text-forest-foreground/90 lg:text-[0.9375rem]">{item}</span>
                      <span className="shrink-0 font-mono text-[0.6875rem] tracking-widest text-lime">
                        {["+12%", "6H", "±340KG", "D+2"][i]}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.9375rem] font-bold text-lime lg:mt-6 lg:text-base">
                  {h.problem.fresh.conclusion}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </V2Section>


      {/* ------------------------------------------------- CONNECTED FLOW */}
      <ConnectedFlowV2 />

      {/* -------------------------------------------- TWO SIDES, ONE TEMPO */}
      <V2Section density="compact" tone="light">
        <MetaLabel dot>Two sides, one tempo</MetaLabel>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {[h.retailerSection, h.supplierSection].map((side, i) => (
            <Reveal key={side.title} delay={i * 80} className="h-full">

              <article className="flex h-full flex-col border border-border bg-card p-6 lg:p-8">

                <MetaLabel>{side.title}</MetaLabel>
                <Display size="sm" className="mt-3">
                  {side.headline}
                </Display>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{side.text}</p>
                <ul className="mt-5 flex-1">
                  {side.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 border-t border-border py-2.5 text-[0.9375rem] leading-snug text-muted-foreground last:border-b"
                    >
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-lime" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-6 self-start">
                  <SiteLink to={i === 0 ? "/retailers" : "/suppliers"}>
                    {side.cta}
                    <ArrowRight className="size-4" />
                  </SiteLink>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </V2Section>


      {/* ------------------------------------------------ CUSTOMER STORIES */}
      {/* Deliberately calmer than the Flow section above: same card for every
          customer, customer name as the strongest element. */}
      <V2Section density="compact" tone="dark">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <MetaLabel tone="dark" dot>{h.stories.eyebrow}</MetaLabel>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-forest-foreground sm:text-3xl">
              {h.stories.headline}
            </h2>
          </div>
          <SiteLink
            to="/customer-stories"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-lime transition-all hover:gap-2.5"
          >
            {h.stories.cta}
            <ArrowRight className="size-3.5" />
          </SiteLink>
        </div>


        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 60} className="h-full">
              <CustomerStoryCard cs={cs} compact />
            </Reveal>
          ))}
        </div>
      </V2Section>


      {/* ------------------------------------------------------ INTEGRATIONS */}
      <V2Section density="compact" tone="light">
        <PartnerLogosSection {...h.implementation.integrationsSection} />
      </V2Section>

      {/* --------------------------------------------------------- FINAL CTA */}
      <FinalCtaV2
        headline={h.finalCta.headline}
        text={h.finalCta.text}
        primary={h.finalCta.primary}
        location="home_final_v2"
      >
        <SiteLink
          to="/retailers"
          className="text-base font-semibold text-forest-foreground underline decoration-lime decoration-2 underline-offset-4"
        >
          {h.finalCta.retailerLink}
        </SiteLink>
        <SiteLink
          to="/suppliers"
          className="text-base font-semibold text-forest-foreground underline decoration-lime decoration-2 underline-offset-4"
        >
          {h.finalCta.supplierLink}
        </SiteLink>
      </FinalCtaV2>
    </>
  );
}

/** Shared V2 closing CTA: dark, photographic, flow-connected. */
export function FinalCtaV2({
  headline,
  text,
  primary,
  location,
  children,
  image = crateProduce,
}: {
  headline: string;
  text?: string;
  primary: string;
  location: string;
  children?: React.ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest py-10 text-forest-foreground lg:py-16">
      <img
        src={image}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute right-0 top-0 hidden h-full w-1/2 object-cover opacity-30 lg:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-gradient-to-r from-forest via-forest to-transparent lg:block"
      />
      <FlowPath
        d="M-20 120 C 280 30, 520 210, 820 100 S 1100 40, 1260 110"
        viewBox="0 0 1200 200"
        className="absolute inset-x-0 bottom-8 h-20 w-full text-lime/60"
      />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <MetaLabel tone="dark" dot>
            Next step
          </MetaLabel>
          <h2 className="mt-6 text-[2.25rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.5rem]">
            {headline}
          </h2>
          {text ? <p className="mt-5 text-lg leading-relaxed text-onforest-muted">{text}</p> : null}
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button asChild size="lg" variant="secondary">
              <SiteLink to="/book-demo" onClick={() => track("book_demo_click", { location })}>
                {primary}
                <ArrowRight className="size-4" />
              </SiteLink>
            </Button>
            {children}
          </div>
        </div>
        <Rule tone="dark" className="mt-14" />
      </div>
    </section>
  );
}
