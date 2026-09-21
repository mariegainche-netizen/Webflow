import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SiteLink } from "@/components/site-link";
import { CheckList } from "@/components/blocks";
import { OffersCard } from "@/components/product-ui";
import { AllocationVisual } from "@/components/v2/allocation-visual";
import { ExecutionVisual } from "@/components/v2/execution-visual";
import { ForecastChartCard } from "@/components/v2/forecast-chart";
import { FragmentationVisual } from "@/components/v2/fragmentation-visual";

import { ScreenshotFrame } from "@/components/blocks";
import { PartnerLogosSection } from "@/components/v2/partner-logos-section";
import { FinalCtaV2 } from "@/components/v2/home";
import {
  CategoryTag,
  Display,
  FlowPath,
  MetaLabel,
  ModuleSectionHead,
  Parallax,
  Photo,
  Rule,
  SectionNumber,
  V2Section,
} from "@/components/v2/kit";
import { CompactHeroV2, HeroVariantSwitch, useHeroVariant } from "@/components/v2/hero-variant";
import { content } from "@/lib/content";
import { track } from "@/lib/analytics";
import buyerDesk from "@/assets/v2/buyer-desk.jpg";

const moduleVisuals: Record<string, () => React.ReactNode> = {
  forecasting: () => <ForecastChartCard />,
  consultations: () => <OffersCard />,
  allocation: () => <AllocationVisual />,
  orders: () => <ExecutionVisual />,
};


export function RetailersV2() {
  const t = content;
  const r = t.retailers;
  const { variant, choose } = useHeroVariant("retailers");

  const heroSwitch = (tone: "light" | "dark") => (
    <HeroVariantSwitch variant={variant} onChange={choose} tone={tone} />
  );

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      {variant === "b" ? (
        <CompactHeroV2
          eyebrow={r.hero.eyebrow}
          headline={r.hero.headline}
          text={r.hero.text}
          switcher={heroSwitch("dark")}
          actions={
            <>
              <Button asChild size="lg" className="bg-lime text-forest hover:bg-lime/90">
                <SiteLink
                  to="/book-demo"
                  onClick={() => track("retailer_cta_click", { location: "retailer_hero_v2" })}
                >
                  {r.hero.primary}
                  <ArrowRight className="size-4" />
                </SiteLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-forest-foreground/40 bg-transparent text-forest-foreground hover:bg-forest-foreground/10 hover:text-forest-foreground"
              >
                <a href="#modules">{r.hero.secondary}</a>
              </Button>
            </>
          }
          meta={
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <MetaLabel tone="dark">Fresh produce</MetaLabel>
              <MetaLabel tone="dark">Seafood</MetaLabel>
              <MetaLabel tone="dark">Meat</MetaLabel>
            </div>
          }
        />
      ) : (
      <section className="relative overflow-hidden bg-background">
        <FlowPath
          d="M-20 260 C 260 260, 340 90, 620 120 S 1000 300, 1260 170"
          viewBox="0 0 1200 400"
          className="absolute inset-x-0 top-24 h-[420px] w-full text-lime/50"
          strokeWidth={1.25}
        />
        <div className="container-page relative flex justify-end pt-3">{heroSwitch("light")}</div>
        <div className="container-page relative grid items-center gap-10 pb-12 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 lg:pb-14 lg:pt-[4.5rem]">
          <div>
            <Reveal>
              <MetaLabel dot>{r.hero.eyebrow}</MetaLabel>
            </Reveal>
            <Reveal delay={60}>
              <Display size="lg" as="h1" className="mt-5 lg:text-[3.25rem]">
                {r.hero.headline}
              </Display>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {r.hero.text}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <SiteLink
                    to="/book-demo"
                    onClick={() => track("retailer_cta_click", { location: "retailer_hero_v2" })}
                  >
                    {r.hero.primary}
                    <ArrowRight className="size-4" />
                  </SiteLink>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#modules">{r.hero.secondary}</a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <MetaLabel>Fresh produce</MetaLabel>
                <MetaLabel>Seafood</MetaLabel>
                <MetaLabel>Meat</MetaLabel>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative">
              <Parallax strength={14}>
                <Photo
                  src={buyerDesk}
                  alt="Fresh food buyer reviewing supplier data on a laptop next to crates of produce"

                  ratio="aspect-[3/2]"
                  priority
                  width={1600}
                  height={1200}
                  className="lg:ml-10"
                />
              </Parallax>
              <div className="pointer-events-none absolute -bottom-8 left-0 hidden w-[62%] sm:block lg:-left-4">
                <div className="shadow-[0_24px_60px_-30px_oklch(0.24_0.05_165/0.55)]">
                  <ScreenshotFrame title={r.hero.dashboard.title} rows={r.hero.dashboard.rows} />
                </div>
              </div>
              <div className="absolute left-4 top-4">
                <CategoryTag>Buying workspace</CategoryTag>
              </div>
            </div>
            <div className="mt-6 sm:hidden">
              <ScreenshotFrame title={r.hero.dashboard.title} rows={r.hero.dashboard.rows} />
            </div>
          </Reveal>
        </div>
      </section>
      )}

      {/* --------------------------------------------------------- PROBLEM */}
      <V2Section tone="tint" id="problem">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div>
            <SectionNumber value="01" />
            <MetaLabel dot className="mt-4">
              The daily reality
            </MetaLabel>
            <Display size="md" className="mt-5">
              {r.problem.headline}
            </Display>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {r.problem.text}
            </p>
            <Rule className="mt-8" />
            <ul className="mt-6 grid gap-3">
              {r.problem.points.map((p, i) => (
                <Reveal key={p} delay={i * 40} as="li">
                  <p className="text-[0.9375rem] text-foreground/85">{p}</p>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* fragmentation -> convergence composition */}
          <Reveal delay={80} className="relative">
            <FragmentationVisual />
          </Reveal>
        </div>
      </V2Section>

      {/* ----------------------------------------------------------- WORKFLOW */}
      <V2Section tone="light">
        <SectionNumber value="02" />
        <MetaLabel dot className="mt-4">
          End to end
        </MetaLabel>
        <Display size="md" className="mt-5 max-w-3xl">
          {r.workflow.headline}
        </Display>

        <div className="relative mt-12">
          <FlowPath
            d="M0 40 C 200 40, 260 40, 460 40 S 700 40, 940 40 S 1140 40, 1200 40"
            viewBox="0 0 1200 80"
            className="absolute inset-x-0 top-[2.35rem] hidden h-8 w-full text-lime lg:block"
            strokeWidth={1.5}
          />
          <ol className="grid gap-8 lg:grid-cols-6 lg:gap-4">
            {r.workflow.stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 60} as="li" className="relative">
                <div className="flex flex-col border-l-2 border-lime pl-4 lg:border-l-0 lg:pl-0">
                  <span
                    aria-hidden
                    className="relative z-10 mb-4 hidden size-4 rounded-full border-2 border-lime bg-background lg:block"
                  />
                  <MetaLabel>
                    {String(i + 1).padStart(2, "0")} · {s.stage}
                  </MetaLabel>
                  <h3 className="mt-3 text-base font-bold text-forest">{s.title}</h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </V2Section>

      {/* ------------------------------------------------------- MODULE 01: UI LEFT / TEXT RIGHT */}
      <V2Section tone="tint" id="modules">
        <ModuleSectionHead num="03" label="Modules" headline={r.modules.headline} />

        {r.modules.items[0] ? (
          <div
            id={r.modules.items[0].id}
            className="scroll-mt-28 mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
          >
            <Reveal className="order-2 lg:order-1">
              <ForecastChartCard />
            </Reveal>

            <div className="order-1 lg:order-2">
              <MetaLabel>{r.modules.items[0].eyebrow}</MetaLabel>
              <h3 className="mt-3 text-[1.625rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-[2rem]">
                {r.modules.items[0].title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                {r.modules.items[0].text}
              </p>
              <CheckList items={[...r.modules.items[0].capabilities]} className="mt-5" />
            </div>
          </div>
        ) : null}
      </V2Section>

      {/* ------------------------------------------------- MODULE 02: TEXT LEFT / PHOTO + UI RIGHT */}
      {r.modules.items[1] ? (
        <V2Section tone="light" id={r.modules.items[1].id} className="scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <MetaLabel dot>{r.modules.items[1].eyebrow}</MetaLabel>
              <h3 className="mt-3 text-[1.625rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-[2rem]">
                {r.modules.items[1].title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                {r.modules.items[1].text}
              </p>
              <CheckList items={[...r.modules.items[1].capabilities]} className="mt-5" />
            </div>
            <Reveal delay={60} className="grid gap-3">
              {moduleVisuals[r.modules.items[1].id]?.()}
              <ScreenshotFrame
                title={r.modules.items[1].screenshot.title}
                rows={r.modules.items[1].screenshot.rows}
              />
            </Reveal>
          </div>
        </V2Section>
      ) : null}

      {/* --------------------------------------------- MODULE 03: UI LEFT / TEXT RIGHT */}
      {r.modules.items[2] ? (
        <V2Section tone="tint" id={r.modules.items[2].id} className="scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <Reveal delay={60} className="order-2 grid gap-3 lg:order-1">
              {moduleVisuals[r.modules.items[2].id]?.()}

            </Reveal>
            <div className="order-1 lg:order-2">
              <MetaLabel dot>{r.modules.items[2].eyebrow}</MetaLabel>
              <h3 className="mt-3 text-[1.625rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-[2rem]">
                {r.modules.items[2].title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                {r.modules.items[2].text}
              </p>
              <CheckList items={[...r.modules.items[2].capabilities]} className="mt-5" />
            </div>
          </div>
        </V2Section>
      ) : null}

      {/* ---------------------------------------------- MODULE 04: DARK FOREST */}
      {r.modules.items[3] ? (
        <V2Section tone="dark" id={r.modules.items[3].id} className="scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <MetaLabel tone="dark" dot>
                {r.modules.items[3].eyebrow}
              </MetaLabel>
              <h3 className="mt-3 text-[1.625rem] font-extrabold leading-[1.1] tracking-tight text-forest-foreground sm:text-[2rem]">
                {r.modules.items[3].title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-onforest-muted">
                {r.modules.items[3].text}
              </p>
              <ul className="mt-5 space-y-2">
                {r.modules.items[3].capabilities.map((c) => (
                  <li key={c} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                    <span className="text-[0.9375rem] text-forest-foreground/85">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Reveal delay={60} className="grid gap-3">
              {moduleVisuals[r.modules.items[3].id]?.()}

            </Reveal>
          </div>
        </V2Section>
      ) : null}

      {/* -------------------------------------------------------- INTEGRATION */}
      <V2Section density="compact" tone="warm" id="integration">
        <PartnerLogosSection
          eyebrow={r.integration.eyebrow}
          headline={r.integration.headline}
          text={r.integration.text}
          partnerCta={r.integration.cta}
        />
      </V2Section>


      {/* ------------------------------------------- IMPLEMENTATION (timeline) */}
      <V2Section density="compact" tone="light">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <SectionNumber value="06" />
          <h2 className="max-w-2xl text-xl font-extrabold leading-snug tracking-[-0.02em] text-forest sm:text-2xl">
            {r.implementation.headline}
          </h2>
        </div>
        <ol className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {r.implementation.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60} as="li">
              <div className="border-t border-border pt-4">
                <span className="font-mono text-[0.6875rem] font-bold tabular-nums tracking-[0.3em] text-forest/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-forest">{step.title}</h3>
                <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </V2Section>

      {/* --------------------------------------------------------- FINAL CTA */}
      <FinalCtaV2
        headline={r.finalCta.headline}
        text={r.finalCta.text}
        primary={r.finalCta.primary}
        location="retailers_final_v2"
      />
    </>
  );
}
