import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site-link";
import { CategoryTag, Photo } from "@/components/v2/kit";
import { content, pick } from "@/lib/content";

/** Reads the localized list of approved results for a case study. */
function pickList(map: Record<string, string[]>): string[] {
  return map.en ?? [];
}
import type { CaseStudy } from "@/data/site";

import handsMarket from "@/assets/v2/hands-market.jpg";
import seafoodLine from "@/assets/v2/seafood-line.jpg";

import meatCutting from "@/assets/bell-food-meat.webp.asset.json";
import warehouseProduce from "@/assets/warehouse-produce.jpg";

/** Maps a case study's tags to the most relevant editorial photo. */
export function storyImage(cs: CaseStudy): { src: string; alt: string; tag: string } {
  if (cs.tags.includes("Seafood")) {
    return { src: seafoodLine, alt: "Seafood packing line", tag: "Seafood" };
  }
  if (cs.tags.includes("Meat and poultry")) {
    return { src: meatCutting.url, alt: "Butcher trimming fresh beef cuts on a wooden block", tag: "Meat and poultry" };
  }
  if (cs.tags.includes("Fresh produce")) {
    return { src: handsMarket, alt: "Hands inspecting tomatoes at a fresh market", tag: "Fresh produce" };
  }
  return { src: warehouseProduce, alt: "Fresh produce warehouse", tag: "Fresh food" };
}

/**
 * The single customer-story component used everywhere in V2.
 * Every story gets the same width, structure, minimum height, hierarchy and
 * CTA placement — no story is visually more important than another.
 * The customer name is deliberately the strongest element on the card.
 */
export function CustomerStoryCard({ cs, compact = false }: { cs: CaseStudy; compact?: boolean }) {
  const s = content.stories;
  const img = storyImage(cs);
  const results = pickList(cs.results);

  return (
    <article
      id={cs.slug}
      className={`scroll-mt-28 flex h-full flex-col border border-border bg-card ${
        compact ? "min-h-[21rem]" : "min-h-[24rem]"
      }`}
    >
      <div className="relative overflow-hidden">
        <Photo src={img.src} alt={img.alt} ratio="aspect-[5/2]" width={1200} height={480} />
        <div className="absolute left-3 top-3">
          <CategoryTag>{img.tag}</CategoryTag>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        {/* The customer is the proof: name first, largest element on the card. */}
        <p className="text-2xl font-extrabold uppercase leading-none tracking-[-0.02em] text-forest sm:text-[1.75rem]">
          {cs.company}
        </p>
        <p className="mt-1.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {pick(cs.industry)}
        </p>

        <h3 className="mt-3.5 text-[1.0625rem] font-bold leading-snug text-forest">{pick(cs.title)}</h3>
        <p className="mt-1.5 line-clamp-2 text-[0.875rem] leading-relaxed text-muted-foreground">{pick(cs.summary)}</p>

        {/* Key outcomes — same treatment on every story. */}
        {results.length > 0 ? (
          <ul className="mt-3.5 space-y-1 border-t border-border pt-3">
            {results.slice(0, 2).map((res) => (
              <li key={res} className="flex gap-2 text-[0.8125rem] font-semibold leading-snug text-forest">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime" />
                {res}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {cs.modules.map((m) => (
            <span key={m} className="rounded-full bg-sand px-2.5 py-0.5 text-[0.6875rem] font-semibold text-forest">
              {m}
            </span>
          ))}
        </div>

        <SiteLink
          to="/customer-stories"
          className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-bold text-forest transition-all hover:gap-2.5"
        >
          {s.template.readStory}
          <ArrowRight className="size-3.5" />
        </SiteLink>
      </div>
    </article>
  );
}
