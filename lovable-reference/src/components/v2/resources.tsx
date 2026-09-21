import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { CategoryTag, EditorialHeroV2, V2Section } from "@/components/v2/kit";
import { FinalCtaV2 } from "@/components/v2/home";
import { ResourceCardV2, ResourceMetaV2 } from "@/components/v2/resource-card";
import { ResourceImage } from "@/components/v2/resource-image";
import { content } from "@/lib/content";
import { editorialResources, matchesFilter, RESOURCE_FILTERS, type ResourceFilter } from "@/data/resources";
import { cn } from "@/lib/utils";

import crateProduce from "@/assets/v2/crate-produce.jpg";

export function ResourcesV2() {
  const t = content;
  const r = t.resources;
  const [filter, setFilter] = useState<ResourceFilter>("All");

  const library = editorialResources();
  const visible = library.filter((resource) => matchesFilter(resource, filter));
  const featured = filter === "All" ? visible.find((resource) => resource.featured) : undefined;
  const rest = featured ? visible.filter((resource) => resource.slug !== featured.slug) : visible;

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <EditorialHeroV2
        image={crateProduce}
        imageAlt="Freshly harvested produce in a wooden crate"
        eyebrow="Resources"
        headline={r.hero.headline}
        text={r.hero.text}
      />

      {/* --------------------------------------------------------- ARTICLES */}
      <V2Section density="compact" tone="light">
        <div role="group" aria-label="Filter articles" className="flex flex-wrap gap-2">
          {RESOURCE_FILTERS.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-semibold transition-colors",
                filter === c
                  ? "border-forest bg-forest text-forest-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-forest",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {featured ? (
          <Reveal className="mt-8 block">
            <Link
              to="/resources/$slug"
              params={{ slug: featured.slug }}
              className="group grid items-stretch border border-border bg-card transition-colors hover:border-forest lg:grid-cols-2"
            >
              <ResourceImage
                src={featured.image}
                alt={featured.imageAlt}
                ratio="aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[22rem]"
                eager
              />

              <div className="flex flex-col justify-center p-7 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <CategoryTag>{featured.topic}</CategoryTag>
                  <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Featured
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-forest group-hover:underline sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <ResourceMetaV2 resource={featured} className="mt-5" />
                <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-forest">
                  Read article
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ) : null}

        {rest.length === 0 ? (
          <p className="mt-8 text-base text-muted-foreground">No resources in this category yet.</p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((resource, i) => (
              <Reveal key={resource.slug} delay={i * 60} className="h-full">
                <ResourceCardV2 resource={resource} />
              </Reveal>
            ))}
          </div>
        )}
      </V2Section>

      <FinalCtaV2
        headline={t.home.finalCta.headline}
        primary={t.common.bookDemo}
        location="resources_final_v2"
        image={crateProduce}
      />
    </>
  );
}
