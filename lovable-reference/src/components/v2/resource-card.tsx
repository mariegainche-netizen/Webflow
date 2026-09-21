import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CategoryTag } from "@/components/v2/kit";
import { ResourceImage } from "@/components/v2/resource-image";
import { formatResourceDate, type ResourceRecord } from "@/data/resources";
import { cn } from "@/lib/utils";

/** Detail route a record belongs to: stories have their own hub. */
export function resourceHref(resource: ResourceRecord) {
  return resource.type === "Customer Story"
    ? ({ to: "/customer-stories/$slug", params: { slug: resource.slug } } as const)
    : ({ to: "/resources/$slug", params: { slug: resource.slug } } as const);
}

export function ResourceMetaV2({ resource, className }: { resource: ResourceRecord; className?: string }) {
  const parts = [
    resource.dateLabel ?? formatResourceDate(resource.publicationDate),
    resource.readingTime,
    resource.author,
  ].filter(Boolean);

  if (parts.length === 0) return null;
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground",
        className,
      )}
    >
      {parts.join(" · ")}
    </p>
  );
}

/**
 * Compact brand marker pinned to the top-left of a story image.
 * Container height, inset and styling are identical everywhere; only the width
 * adapts, using two variants driven by the logo's natural aspect ratio.
 */
function StoryLogo({ src, alt }: { src: string; alt: string }) {
  const [wide, setWide] = useState(false);

  return (
    <div
      className={cn(
        "absolute left-3 top-3 flex h-[3rem] items-center justify-center rounded-[0.25rem] bg-white px-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
        wide ? "w-[10rem]" : "w-[6.5rem]",
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={(e) => {
          const el = e.currentTarget;
          if (el.naturalWidth / (el.naturalHeight || 1) >= 2.4) setWide(true);
        }}
        className="h-full max-w-full object-contain"
      />
    </div>
  );
}

/** Editorial card used on the V2 Resources / Customer Stories grids. */
export function ResourceCardV2({
  resource,
  label,
  ratio = "aspect-[16/9]",
}: {
  resource: ResourceRecord;
  label?: string;
  ratio?: string;
}) {
  const href = resourceHref(resource);
  const isStory = resource.type === "Customer Story";
  const client = resource.customerStory?.client;
  const logo = resource.customerStory?.logo;
  const tag = label ?? (isStory ? undefined : resource.topic);

  return (
    <Link
      {...href}
      className="group flex h-full flex-col border border-border bg-card transition-colors hover:border-forest"
    >
      <div className="relative overflow-hidden">
        <ResourceImage src={resource.image} alt={resource.imageAlt} ratio={ratio} />
        {tag ? (
          <div className="absolute left-4 top-4">
            <CategoryTag>{tag}</CategoryTag>
          </div>
        ) : null}
        {isStory && logo ? <StoryLogo src={logo} alt={`${client ?? resource.title} logo`} /> : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {isStory && client ? (
          <p className="text-xl font-extrabold leading-tight tracking-[-0.01em] text-forest">{client}</p>
        ) : null}
        <h3
          className={cn(
            "font-bold leading-snug text-forest group-hover:underline",
            isStory && client ? "mt-1.5 text-[0.9375rem] font-semibold text-forest/85" : "text-lg",
          )}
        >
          {resource.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.875rem] leading-relaxed text-muted-foreground">{resource.excerpt}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <ResourceMetaV2 resource={resource} />
          <ArrowUpRight className="size-4 shrink-0 text-forest opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
}
