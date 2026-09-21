import { useState } from "react";
import { Reveal } from "@/components/motion";
import { EditorialHeroV2, V2Section } from "@/components/v2/kit";
import { ResourceCardV2 } from "@/components/v2/resource-card";
import { FinalCtaV2 } from "@/components/v2/home";
import { content } from "@/lib/content";
import { AUDIENCE_FILTERS, customerStories, matchesAudience, type AudienceFilter } from "@/data/resources";
import { cn } from "@/lib/utils";

import warehouseDawn from "@/assets/v2/warehouse-dawn.jpg";
import handsMarket from "@/assets/v2/hands-market.jpg";

export function CustomerStoriesV2() {
  const t = content;
  const s = t.stories;
  const [audience, setAudience] = useState<AudienceFilter>("Suppliers");

  const visible = customerStories().filter((resource) => matchesAudience(resource, audience));

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <EditorialHeroV2
        image={warehouseDawn}
        eyebrow="Customer stories"
        headline={s.hero.headline}
        text={s.hero.text}
      />

      {/* ------------------------------------------ AUDIENCE + STORY GRID */}
      <V2Section density="compact" tone="light">
        <div
          role="group"
          aria-label="Filter customer stories by audience"
          className="flex flex-wrap items-center gap-2"
        >
          <span className="mr-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Audience
          </span>
          {AUDIENCE_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={audience === f}
              onClick={() => setAudience(f)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-semibold transition-colors",
                audience === f
                  ? "border-forest bg-forest text-forest-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-forest",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 text-base text-muted-foreground">Retailer customer stories coming soon.</p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((resource, i) => (
              <Reveal key={resource.slug} delay={i * 60} className="h-full">
                <ResourceCardV2 resource={resource} ratio="aspect-[16/9]" />
              </Reveal>
            ))}
          </div>
        )}
      </V2Section>

      {/* --------------------------------------------------------- FINAL CTA */}
      <FinalCtaV2
        headline={s.template.cta}
        primary={t.common.bookDemo}
        location="stories_final_v2"
        image={handsMarket}
      />
    </>
  );
}
