import { useEffect, useState, type ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { Display, FlowPath, MetaLabel } from "@/components/v2/kit";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  TEMPORARY: hero A/B comparison for Retailers & Suppliers (V2).     */
/*  Remove this file and its usages once a direction is approved.      */
/* ------------------------------------------------------------------ */

export type HeroVariant = "a" | "b";

/** Remembers the chosen hero variant per page while navigating. */
export function useHeroVariant(pageKey: string) {
  const storageKey = `v2-hero-variant:${pageKey}`;
  const [variant, setVariant] = useState<HeroVariant>("a");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "a" || saved === "b") setVariant(saved);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const choose = (next: HeroVariant) => {
    setVariant(next);
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      /* ignore */
    }
  };

  return { variant, choose };
}

/** Very discreet internal switch: Hero A | B. */
export function HeroVariantSwitch({
  variant,
  onChange,
  tone = "light",
  className,
}: {
  variant: HeroVariant;
  onChange: (v: HeroVariant) => void;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      aria-label="Hero variant (internal preview)"
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.16em]",
        tone === "dark"
          ? "border-forest-foreground/25 text-forest-foreground/55"
          : "border-border text-muted-foreground/70",
        className,
      )}
    >
      <span className="pl-0.5">Hero</span>
      {(["a", "b"] as const).map((v) => (
        <button
          key={v}
          type="button"
          aria-pressed={variant === v}
          onClick={() => onChange(v)}
          className={cn(
            "rounded-full px-1.5 py-0.5 transition-colors",
            variant === v
              ? tone === "dark"
                ? "bg-lime/90 text-forest"
                : "bg-forest text-forest-foreground"
              : "opacity-70 hover:opacity-100",
          )}
        >
          {v.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/**
 * Hero B — compact dark editorial hero with commercial CTA row.
 * No photography, no product illustration; content-driven height.
 */
export function CompactHeroV2({
  eyebrow,
  headline,
  text,
  actions,
  meta,
  switcher,
}: {
  eyebrow: string;
  headline: string;
  text?: string;
  actions?: ReactNode;
  meta?: ReactNode;
  switcher?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-forest-foreground">
      <FlowPath
        d="M-20 260 C 260 260, 340 90, 620 120 S 1000 300, 1260 170"
        viewBox="0 0 1200 400"
        className="absolute inset-x-0 top-6 h-[320px] w-full text-lime/40"
        strokeWidth={1.25}
      />
      <div className="container-page relative py-7 lg:py-9">
        {switcher ? (
          <div className="pointer-events-auto absolute right-4 top-2 z-10 lg:right-8">{switcher}</div>
        ) : null}
        <div className="max-w-[44rem] lg:max-w-[70%]">
          <Reveal>
            <MetaLabel tone="dark" dot>
              {eyebrow}
            </MetaLabel>
          </Reveal>
          <Reveal delay={60}>
            <Display size="md" as="h1" tone="dark" className="mt-3 lg:text-[2.5rem]">
              {headline}
            </Display>
          </Reveal>
          {text ? (
            <Reveal delay={120}>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-forest-foreground/85">
                {text}
              </p>
            </Reveal>
          ) : null}
          {actions ? (
            <Reveal delay={180}>
              <div className="mt-5 flex flex-wrap gap-3">{actions}</div>
            </Reveal>
          ) : null}
          {meta ? (
            <Reveal delay={240}>
              <div className="mt-5 border-t border-forest-foreground/15 pt-3.5">{meta}</div>
            </Reveal>

          ) : null}
        </div>
      </div>
    </section>
  );
}
