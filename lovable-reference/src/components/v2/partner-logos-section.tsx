import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SiteLink } from "@/components/site-link";
import { MetaLabel, Display } from "@/components/v2/kit";
import { integrations } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  headline: string;
  text: string;
  benefitTitle?: string;
  benefitText?: string;
  partnerEyebrow?: string;
  partnerTitle?: string;
  partnerText?: string;
  partnerCta?: string;
  className?: string;
};

const SPEED = 0.35; // px per frame — slow, continuous drift

/**
 * Home / Retailers integrations block — compact editorial header plus a
 * continuously auto-scrolling logo carousel. Logos are monochrome at rest and
 * reveal their brand colours on hover; arrows and dots allow manual control.
 */
export function PartnerLogosSection({ eyebrow, headline, text, partnerCta, className }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);
  const resumeAt = useRef(0);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  // The list is rendered twice so the drift can loop seamlessly.
  const loop = [...integrations, ...integrations];

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    setPages(Math.max(1, Math.ceil(half / el.clientWidth)));
    setPage(Math.round((el.scrollLeft % half) / el.clientWidth) % Math.max(1, Math.ceil(half / el.clientWidth)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    let frame = 0;
    const tick = () => {
      const el = trackRef.current;
      if (el && !pausedRef.current && Date.now() > resumeAt.current) {
        const half = el.scrollWidth / 2;
        el.scrollLeft = el.scrollLeft >= half ? el.scrollLeft - half : el.scrollLeft + SPEED;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = (next: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.min(Math.max(next, 0), pages - 1);
    resumeAt.current = Date.now() + 5000;
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    setPage(clamped);
  };

  return (
    <div className={cn(className)}>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
        <div>
          <MetaLabel dot>{eyebrow}</MetaLabel>
          <Display size="sm" className="mt-2.5">
            {headline}
          </Display>
        </div>
        <div>
          <p className="max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">{text}</p>
          {partnerCta ? (
            <SiteLink
              to="/book-demo"
              className="mt-3 inline-flex items-center gap-2 text-[0.9375rem] font-bold tracking-tight text-forest underline decoration-lime decoration-2 underline-offset-[6px] transition-all hover:gap-3"
            >
              {partnerCta}
              <ArrowRight className="size-4" aria-hidden />
            </SiteLink>
          ) : null}
        </div>
      </div>

      {/* Auto-scrolling logo carousel */}
      <Reveal delay={80} className="mt-4">
        <div
          className="relative"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="rounded-lg border border-border bg-card px-8 py-1.5 shadow-[0_1px_3px_oklch(0.24_0.05_165/0.06)] sm:px-10">
            <ul
              ref={trackRef}
              onScroll={measure}
              className="flex gap-1 overflow-x-auto overflow-y-hidden pt-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {loop.map((i, idx) => (
                <li key={`${i.name}-${idx}`} className="w-1/2 shrink-0 px-1 sm:w-1/3 lg:w-1/4">
                  <SiteLink
                    to="/book-demo"
                    aria-label={`Explore the ${i.name} integration`}
                    className="group relative flex h-14 items-center justify-center rounded-md px-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:shadow-[0_10px_24px_-14px_oklch(0.84_0.19_120/0.65)] hover:ring-1 hover:ring-lime/50"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-1 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-0.5 text-[0.6875rem] font-semibold text-forest opacity-0 shadow-[0_6px_18px_-8px_oklch(0.24_0.05_165/0.35)] transition-opacity duration-200 group-hover:opacity-100 lg:block"
                    >
                      {`Click to explore ${i.name} integration`}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-full items-center justify-center rounded",
                        "onDark" in i && i.onDark ? "bg-forest px-2 py-1" : undefined,
                      )}
                    >
                      <img
                        src={i.logo}
                        alt={`${i.name} logo`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </span>
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>

          {/* edge fades — hint the continuous horizontal motion */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-1 left-1 w-14 rounded-l-lg bg-gradient-to-r from-card to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-1 right-1 w-14 rounded-r-lg bg-gradient-to-l from-card to-transparent"
          />

          <CarouselArrow side="left" onClick={() => goTo(page - 1)} />
          <CarouselArrow side="right" onClick={() => goTo(page + 1)} />
        </div>

        {pages > 1 ? (
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to logo page ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === page ? "w-4 bg-lime" : "w-1.5 border border-border bg-transparent",
                )}
              />
            ))}
          </div>
        ) : null}
      </Reveal>
    </div>
  );
}

function CarouselArrow({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous logos" : "Next logos"}
      className={cn(
        "absolute top-1/2 z-10 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-forest transition-colors hover:border-lime",
        side === "left" ? "left-1" : "right-1",
      )}
    >
      <Icon className="size-3.5" aria-hidden />
    </button>
  );
}
