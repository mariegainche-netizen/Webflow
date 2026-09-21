import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SiteLink } from "@/components/site-link";
import { content, pick } from "@/lib/content";
import { countries } from "@/data/site";
import {
  CategoryTag,
  Display,
  EditorialHeroV2,
  FlowPath,
  MetaLabel,
  Parallax,
  Photo,
  Rule,
  SectionNumber,
  V2Section,
} from "@/components/v2/kit";
import { FinalCtaV2 } from "@/components/v2/home";
import warehouseDawn from "@/assets/v2/warehouse-dawn.jpg";
import handsMarket from "@/assets/v2/hands-market.jpg";
import seafoodLine from "@/assets/v2/seafood-line.jpg";
import warehouseProduce from "@/assets/warehouse-produce.jpg";
import buyerData from "@/assets/buyer-data.jpg";
import logisticsDock from "@/assets/logistics-dock.jpg";
import seafoodPacking from "@/assets/seafood-packing.jpg";

/* ------------------------------------------------------------------ */
/*  COMPANY — V2                                                       */
/* ------------------------------------------------------------------ */

export function CompanyV2() {
  const t = content;
  const c = t.company;

  const pillarImages = [warehouseProduce, buyerData, logisticsDock];

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <EditorialHeroV2
        image={warehouseDawn}
        imageAlt="Warehouse at dawn, produce being prepared for distribution"
        eyebrow={c.hero.eyebrow}
        headline={c.hero.headline}
        text={c.hero.text}
      />

      {/* --------------------------------------------------------- MISSION */}
      <V2Section density="compact" tone="light">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <Reveal>
            <div>
              <SectionNumber value="01" />
              <MetaLabel dot className="mt-4">
                Mission
              </MetaLabel>
              <Display size="md" className="mt-4">
                {c.mission.headline}
              </Display>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">{c.mission.text}</p>
          </Reveal>
        </div>
      </V2Section>

      {/* --------------------------------------------------------- WHY NOW */}
      <section className="relative overflow-hidden bg-[oklch(0.21_0.04_166)] text-forest-foreground">
        <img
          src={handsMarket}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="container-page relative v2-compact">
          <SectionNumber value="02" tone="dark" />
          <div className="mt-4 max-w-3xl">
            <MetaLabel tone="dark" dot>
              Why now
            </MetaLabel>
            <Display size="md" tone="dark" className="mt-4">
              {c.whyNow.headline}
            </Display>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-forest-foreground/80">{c.whyNow.text}</p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- EXPERTISE */}
      <V2Section tone="tint">
        <SectionNumber value="03" />
        <div className="mt-4 max-w-3xl">
          <MetaLabel dot>Expertise</MetaLabel>
          <Display size="md" className="mt-5">
            {c.expertise.headline}
          </Display>
        </div>

        <div className="relative mt-10">
          <FlowPath
            d="M0 40 C 260 40, 320 40, 600 40 S 960 40, 1200 40"
            viewBox="0 0 1200 80"
            className="absolute inset-x-0 top-[9.5rem] hidden h-8 w-full text-lime lg:block"
            strokeWidth={1.5}
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {c.expertise.pillars.map((pillar, i) => (
              <Reveal key={pillar} delay={i * 80}>
                <div className="group flex h-full flex-col">
                  <Photo
                    src={pillarImages[i] ?? warehouseProduce}
                    alt={pillar}
                    ratio="aspect-[4/3]"
                    width={1200}
                    height={900}
                  />
                  <div className="mt-5">
                    <span className="font-mono text-[0.75rem] font-bold tracking-[0.3em] text-forest/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-forest">{pillar}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Rule className="mt-10" />
        <p className="mt-6 text-base font-bold text-forest">{c.expertise.proof}</p>
      </V2Section>

      {/* ------------------------------------------------------- FOOTPRINT */}
      <section className="relative overflow-hidden bg-forest text-forest-foreground">
        <div className="container-page relative v2-compact">
          <SectionNumber value="04" tone="dark" />
          <div className="mt-4 max-w-2xl">
            <MetaLabel tone="dark" dot>
              European footprint
            </MetaLabel>
            <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-[-0.03em] text-forest-foreground sm:text-3xl">
              {c.footprint.headline}
            </h2>
          </div>

          <div className="relative mt-8">
            <FlowPath
              d="M40 90 C 260 20, 460 160, 700 70 S 1000 20, 1160 90"
              viewBox="0 0 1200 180"
              className="absolute inset-x-0 top-1/2 hidden h-24 w-full -translate-y-1/2 text-lime/50 lg:block"
              strokeWidth={1.25}
              dashed
            />
            <div className="grid gap-10 sm:grid-cols-3 lg:gap-6">
              {countries.map((country, i) => (
                <Reveal key={country.code} delay={i * 90}>
                  <div className="relative flex flex-col items-start">
                    <span className="font-mono text-[0.6875rem] font-bold tracking-[0.3em] text-lime/80">
                      {country.code}
                    </span>
                    <span className="mt-2 text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">
                      {pick(country.name)}
                    </span>
                    <span className="mt-1 text-sm font-semibold text-lime/90">{country.city}</span>
                    <span className="mt-2 text-[0.9375rem] leading-relaxed text-forest-foreground/70">
                      {pick(country.role)}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------- TEAM */}
      <V2Section density="compact" tone="light">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Photo
              src={handsMarket}
              alt="Consentio team members reviewing fresh produce with a supplier"
              ratio="aspect-[4/3]"
              width={1200}
              height={900}
            />
          </Reveal>
          <Reveal delay={80}>
            <MetaLabel dot>The team</MetaLabel>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug tracking-[-0.03em] text-forest sm:text-3xl">
              Fresh food people, working with technology people.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Buyers, category specialists, supply chain operators, product designers and engineers build Consentio
              together, close to the day-to-day reality of fresh food trade.
            </p>
          </Reveal>
        </div>
      </V2Section>

      {/* ------------------------------------------------------- KLARYS */}
      <section className="relative overflow-hidden bg-[oklch(0.21_0.04_166)] text-forest-foreground">
        <FlowPath
          d="M-40 40 C 260 40, 320 140, 600 140 S 900 40, 1240 40"
          viewBox="0 0 1200 180"
          className="absolute inset-x-0 top-10 h-40 w-full text-lime/40"
        />
        <div className="container-page relative v2-compact">
          <SectionNumber value="05" tone="dark" />
          <div className="mt-4 max-w-3xl">
            <MetaLabel tone="dark" dot>
              A broader platform
            </MetaLabel>
            <Display size="md" tone="dark" className="mt-5">
              {c.klarys.headline}
            </Display>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest-foreground/80">{c.klarys.text}</p>
          </div>

          {/* Two complementary capabilities becoming one platform. */}
          <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
            <Reveal>
              <div className="h-full border border-forest-foreground/15 bg-forest-foreground/5 p-6">
                <MetaLabel tone="dark">Klarys</MetaLabel>
                <p className="mt-3 text-xl font-extrabold leading-snug">Leading Sourcing-to-store procurement platform for fresh produce retailers</p>
              </div>
            </Reveal>
            <span
              aria-hidden
              className="mx-auto font-mono text-sm font-bold text-lime lg:rotate-0"
            >
              +
            </span>
            <Reveal delay={80}>
              <div className="h-full border border-forest-foreground/15 bg-forest-foreground/5 p-6">
                <MetaLabel tone="dark">Consentio</MetaLabel>
                <p className="mt-3 text-xl font-extrabold leading-snug">Fresh produce trade made easy for both Suppliers &amp; Retailers</p>
              </div>
            </Reveal>
          </div>

          <Button asChild size="lg" variant="lime" className="mt-8">
            <SiteLink to="/klarys-joins-consentio">
              {c.klarys.cta}
              <ArrowRight className="size-4" />
            </SiteLink>
          </Button>
        </div>
      </section>

      <FinalCtaV2
        headline={t.home.finalCta.headline}
        primary={t.common.bookDemo}
        location="company_final_v2"
        image={seafoodLine}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  KLARYS — V2                                                        */
/* ------------------------------------------------------------------ */

export function KlarysV2() {
  const t = content;
  const k = t.klarys;
  

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="relative overflow-hidden bg-forest text-forest-foreground">
        <Parallax strength={18} className="absolute inset-0">
          <img
            src={seafoodPacking}
            alt="Seafood packing line, operational fresh food process"
            className="size-full scale-[1.08] object-cover opacity-40"
            width={1920}
            height={1280}
          />
        </Parallax>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest via-forest/75 to-forest/30" />
        <FlowPath
          d="M-40 260 C 220 150, 420 150, 600 230 S 980 150, 1240 230"
          viewBox="0 0 1200 300"
          className="absolute inset-x-0 top-6 h-64 w-full text-lime/40"
        />
        <div className="container-page relative v2-compact">
          <Reveal>
            <MetaLabel tone="dark" dot>
              {k.hero.eyebrow}
            </MetaLabel>
          </Reveal>
          <Reveal delay={60}>
            <Display size="lg" as="h1" tone="dark" className="mt-5 max-w-3xl">
              {k.hero.headline}
            </Display>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest-foreground/85">{k.hero.text}</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="lime">
                <SiteLink to="/retailers">{k.ctas.retailers}</SiteLink>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <SiteLink to="/book-demo">{k.ctas.contact}</SiteLink>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- CONVERGENCE */}
      <section className="relative overflow-hidden bg-[oklch(0.21_0.04_166)] text-forest-foreground">
        <div className="container-page relative v2-compact">
          <SectionNumber value="01" tone="dark" />
          <div className="mt-4 max-w-3xl">
            <MetaLabel tone="dark" dot>
              Two capabilities, one platform
            </MetaLabel>
            <Display size="md" tone="dark" className="mt-6">
              Klarys and Consentio, converging.
            </Display>
          </div>

          <div className="relative mt-12">
            <FlowPath
              d="M0 30 C 220 30, 340 190, 600 190 S 860 30, 1200 30"
              viewBox="0 0 1200 220"
              className="absolute inset-x-0 top-0 hidden h-56 w-full text-lime/60 lg:block"
              strokeWidth={1.5}
            />
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-end lg:gap-6">
              <Reveal>
                <div className="border border-forest-foreground/15 bg-forest-foreground/5 p-7">
                  <MetaLabel tone="dark">Klarys</MetaLabel>
                  <p className="mt-4 text-2xl font-extrabold leading-tight">Fresh food specialist expertise</p>
                </div>
              </Reveal>
              <div className="hidden justify-center lg:flex">
                <span className="size-3 rounded-full bg-lime" aria-hidden />
              </div>
              <Reveal delay={100}>
                <div className="border border-forest-foreground/15 bg-forest-foreground/5 p-7">
                  <MetaLabel tone="dark">Consentio</MetaLabel>
                  <p className="mt-4 text-2xl font-extrabold leading-tight">Retail and technology platform</p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="mx-auto mt-10 max-w-xl border border-lime/50 bg-lime/10 p-7 text-center lg:mt-4">
                <MetaLabel tone="dark" dot className="justify-center">
                  Broader platform
                </MetaLabel>
                <p className="mt-4 text-2xl font-extrabold leading-tight">
                  One integrated platform for fresh food procurement.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- BENEFITS */}
      <V2Section density="compact" tone="light">
        <SectionNumber value="02" />
        <div className="relative mt-10">
          <FlowPath
            d="M0 40 C 260 40, 320 40, 600 40 S 960 40, 1200 40"
            viewBox="0 0 1200 80"
            className="absolute inset-x-0 top-6 hidden h-8 w-full text-lime lg:block"
            strokeWidth={1.5}
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {k.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 80}>
                <div className="flex h-full flex-col border-t border-border pt-6">
                  <span className="font-mono text-[0.75rem] font-bold tracking-[0.3em] text-forest/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-xl font-extrabold leading-snug tracking-tight text-forest">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </V2Section>

      {/* ----------------------------------------------------- CONTINUITY */}
      <V2Section density="compact" tone="warm">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <div>
              <MetaLabel dot>Continuity</MetaLabel>
              <Display size="md" className="mt-5">
                {k.continuity.headline}
              </Display>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">{k.continuity.text}</p>
              <ul className="mt-8 space-y-0">
                {k.benefits.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 border-t border-border py-3.5 last:border-b">
                    <span className="size-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
                    <span className="text-[0.9375rem] text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </V2Section>

      <FinalCtaV2
        headline={t.home.finalCta.headline}
        primary={t.common.bookDemo}
        location="klarys_final_v2"
        image={handsMarket}
      >
        <SiteLink
          to="/retailers"
          className="text-base font-semibold text-forest-foreground underline decoration-lime decoration-2 underline-offset-4"
        >
          {k.ctas.retailers}
        </SiteLink>
      </FinalCtaV2>
    </>
  );
}
