import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { CategoryTag, Display, MetaLabel, Rule, V2Section } from "@/components/v2/kit";
import { FinalCtaV2 } from "@/components/v2/home";
import { ResourceCardV2, ResourceMetaV2 } from "@/components/v2/resource-card";
import { ResourceImage } from "@/components/v2/resource-image";
import { content } from "@/lib/content";
import { relatedResources, type ResourceRecord } from "@/data/resources";
import { cn } from "@/lib/utils";


/** Single V2 detail template for every resource type, stories included. */
export function ResourceDetailV2({ resource }: { resource: ResourceRecord }) {
  const t = content;
  const story = resource.customerStory;
  const related = relatedResources(resource, 3);
  const isStory = resource.type === "Customer Story";

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="bg-forest text-forest-foreground">
        <div className="container-page grid items-center gap-8 py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12 lg:py-10">
          <div>
            <Link
              to={isStory ? "/customer-stories" : "/resources"}
              className="inline-flex items-center gap-2 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-forest-foreground/70 transition-colors hover:text-lime"
            >
              <ArrowLeft className="size-3" />
              {isStory ? "Toutes les customer stories" : t.nav.resources}
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <CategoryTag>{resource.type}</CategoryTag>
              <MetaLabel tone="dark">{isStory ? story?.client : resource.topic}</MetaLabel>
            </div>

            <Reveal>
              <Display size="lg" as="h1" tone="dark" className="mt-4 lg:text-[2.5rem]">
                {resource.title}
              </Display>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-4 text-base leading-relaxed text-forest-foreground/85">{resource.excerpt}</p>
            </Reveal>
            <ResourceMetaV2 resource={resource} className="mt-4 !text-forest-foreground/70" />
          </div>
          <Reveal delay={90}>
            <ResourceImage src={resource.image} alt={resource.imageAlt} ratio="aspect-[3/2]" eager />
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------- CONDITIONAL: STORY PROOF */}
      {story ? (
        <V2Section density="compact" tone="light">
          <MetaLabel dot>Context</MetaLabel>
          <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div>
              {story.logo ? (
                <img
                  src={story.logo}
                  alt={`${story.client} logo`}
                  loading="lazy"
                  className="mb-5 h-24 w-auto max-w-[320px] rounded-none object-contain object-left sm:h-28"
                />
              ) : null}
              <Display size="sm">{story.client}</Display>
              <dl className="mt-4 space-y-1.5">
                {(
                  [
                    ["Client", story.client],
                    ["Location", story.country],
                    ["Spokesperson", story.spokesperson],
                    ["Modules", story.modules?.join(", ")],
                  ] as [string, string | undefined][]
                )
                  .filter(([, value]) => Boolean(value))
                  .map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-wrap items-baseline gap-x-4 border-b border-border pb-2"
                    >
                      <dt className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-forest/70">
                        {label}
                      </dt>
                      <dd className="text-[0.9375rem] text-muted-foreground">{value}</dd>
                    </div>
                  ))}
              </dl>
              {story.benefits?.length ? (
                <div className="mt-5">
                  <MetaLabel>Benefits</MetaLabel>
                  <ul className="mt-3 space-y-2">
                    {story.benefits.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[0.9375rem] leading-snug text-forest">
                        <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <div>
              {story.metrics?.length ? (
                <div
                  className={cn(
                    "grid gap-px bg-forest",
                    story.metrics.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
                  )}
                >
                  {story.metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="bg-forest p-4">
                      <p className="text-3xl font-extrabold leading-none text-lime">{m.value}</p>
                      <p className="mt-2 text-[0.8125rem] leading-snug text-forest-foreground/70">{m.label}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {story.quote ? (
                <blockquote className="mt-5 border-l-2 border-lime pl-5">
                  <p className="text-[1.0625rem] leading-relaxed text-forest">“{story.quote.text}”</p>
                  <footer className="mt-3 flex items-center gap-3">
                    {story.portrait ? (
                      <img
                        src={story.portrait}
                        alt={story.quote.author}
                        loading="lazy"
                        className="size-10 shrink-0 rounded-full object-cover"
                      />
                    ) : null}
                    <span className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-forest/60">
                      {story.quote.author}
                    </span>
                  </footer>
                </blockquote>
              ) : null}
            </div>
          </div>
        </V2Section>
      ) : null}


      {/* ------------------------------------------------------------ BODY */}
      <V2Section density="compact" tone="light">
        <article className="mx-auto max-w-[46rem]">
          {resource.body.map((section, i) => (
            <section key={i} className={i === 0 ? "" : "mt-8"}>
              {section.heading ? (
                <>
                  {i > 0 ? <Rule className="mb-5" /> : null}
                  <h2 className="text-[1.5rem] font-extrabold leading-tight tracking-[-0.025em] text-forest">
                    {section.heading}
                  </h2>
                </>
              ) : null}
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-[0.6rem] h-px w-4 shrink-0 bg-forest/50" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.pullout ? (
                <p className="mt-5 border-l-2 border-lime bg-sand/60 px-5 py-4 text-[1.0625rem] font-bold leading-snug text-forest">
                  {section.pullout}
                </p>
              ) : null}
              {section.image ? (
                <img
                  src={section.image}
                  alt={section.imageAlt ?? ""}
                  loading="lazy"
                  className="mt-5 w-full border border-border object-contain"
                />
              ) : null}

            </section>
          ))}

          {/* --------------------------- CONDITIONAL: MEDIA (webinar/podcast) */}
          {resource.mediaUrl ? (
            <div className="mt-8 border border-border bg-sand/50 p-6">
              <MetaLabel>{resource.type}</MetaLabel>
              <p className="mt-3 text-[1.0625rem] leading-relaxed text-forest">
                This resource includes a recording.
              </p>
              <Button asChild className="mt-4">
                <a href={resource.mediaUrl} target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="size-4" />
                  {resource.ctaLabel ?? "Open the recording"}
                </a>
              </Button>
            </div>
          ) : null}
        </article>
      </V2Section>

      {/* --------------------------------------------------------- RELATED */}
      {related.length ? (
        <V2Section density="compact" tone="warm">
          <MetaLabel dot>{isStory ? "More customer stories" : "Related"}</MetaLabel>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60} className="h-full">
                <ResourceCardV2 resource={r} ratio="aspect-[21/9]" />
              </Reveal>
            ))}
          </div>
        </V2Section>
      ) : null}

      <FinalCtaV2
        headline={isStory ? (story?.ctaHeadline ?? t.home.finalCta.headline) : t.home.finalCta.headline}
        primary={isStory ? (resource.ctaLabel ?? t.common.bookDemo) : t.common.bookDemo}
        location={isStory ? "story_detail_v2" : "resource_detail_v2"}
      />

    </>
  );
}

/** Shown when a slug does not resolve in V2. */
export function ResourceNotFoundV2({ story = false }: { story?: boolean }) {
  return (
    <V2Section density="signature" tone="light">
      <div className="mx-auto max-w-xl text-center">
        <MetaLabel className="justify-center">Not found</MetaLabel>
        <Display size="md" as="h1" className="mt-4">
          This page is no longer available.
        </Display>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The content you were looking for may have moved. Browse the full library instead.
        </p>
        <Button asChild className="mt-6">
          <Link to={story ? "/customer-stories" : "/resources"}>
            {story ? "Back to Customer Stories" : "Back to Resources"}
          </Link>
        </Button>
      </div>
    </V2Section>
  );
}
