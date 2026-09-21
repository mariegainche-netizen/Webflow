import { useEffect, useRef, useState, type ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  V2 art-direction kit.                                              */
/*  Shared primitives for the "physical fresh food + digital flow"     */
/*  visual language. Used only by V2 pages — V1 never imports these.   */
/* ------------------------------------------------------------------ */

/** Small operational metadata label: LIVE DATA · WEEK 27 · FRESH PRODUCE. */
export function MetaLabel({
  children,
  tone = "light",
  dot = false,
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-lime/80" : "text-muted-foreground",
        className,
      )}
    >
      {dot ? (
        <span
          aria-hidden
          className={cn("size-1.5 rounded-full", tone === "dark" ? "bg-lime" : "bg-lime")}
        />
      ) : null}
      {children}
    </span>
  );
}

/** Large editorial section numbering: 01 / 02 / 03. */
export function SectionNumber({
  value,
  tone = "light",
  className,
}: {
  value: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block font-mono text-[0.75rem] font-bold tabular-nums tracking-[0.3em]",
        tone === "dark" ? "text-lime" : "text-forest/45",
        className,
      )}
    >
      {value}
    </span>
  );
}

/** Draws the Consentio Flow line once it enters the viewport. */
export function FlowPath({
  d,
  className,
  viewBox = "0 0 1200 200",
  strokeWidth = 1.5,
  duration = 2200,
  dashed = false,
}: {
  d: string;
  className?: string;
  viewBox?: string;
  strokeWidth?: number;
  duration?: number;
  dashed?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("pointer-events-none", className)}
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dashed ? "4 7" : 1400}
        strokeDashoffset={dashed ? undefined : drawn ? 0 : 1400}
        style={dashed ? undefined : { transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.22,1,0.36,1)` }}
      />
    </svg>
  );
}

/** Section shell with the V2 tonal system. */
export function V2Section({
  children,
  tone = "light",
  className,
  id,
  bleed = false,
  density = "compact",
}: {
  children: ReactNode;
  tone?: "light" | "tint" | "warm" | "dark" | "deep";
  className?: string;
  id?: string;
  bleed?: boolean;
  density?: "compact" | "standard" | "signature";
}) {
  const tones = {
    light: "bg-background text-foreground",
    tint: "bg-[oklch(0.975_0.014_150)] text-foreground",
    warm: "bg-[oklch(0.978_0.012_85)] text-foreground",
    dark: "bg-forest text-forest-foreground",
    deep: "bg-[oklch(0.21_0.04_166)] text-forest-foreground",
  } as const;

  const densities = {
    compact: "v2-compact",
    standard: "v2-standard",
    signature: "v2-signature",
  } as const;

  return (
    <section id={id} className={cn(tones[tone], "scroll-mt-24", !bleed && densities[density], className)}>
      {bleed ? children : <div className="container-page">{children}</div>}
    </section>
  );
}

/** Oversized editorial statement type. */
export function Display({
  children,
  size = "lg",
  tone = "light",
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  const sizes = {
    sm: "text-2xl sm:text-3xl lg:text-[2.25rem]",
    md: "text-3xl sm:text-4xl lg:text-[2.75rem]",
    lg: "text-[2.5rem] leading-[0.98] sm:text-6xl lg:text-[4.25rem]",
    xl: "text-[2.75rem] leading-[0.95] sm:text-6xl lg:text-[5.25rem]",
  } as const;

  return (
    <Tag
      className={cn(
        "font-extrabold tracking-[-0.035em] text-balance",
        sizes[size],
        size === "sm" || size === "md" ? "leading-[1.05]" : undefined,
        tone === "dark" ? "text-forest-foreground" : "text-forest",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Editorial photo frame: hard crop, hairline border, 1–2% hover zoom. */
export function Photo({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-[4/3]",
  overlay = true,
  priority = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  overlay?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <div className={cn("group relative overflow-hidden bg-forest", ratio, className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]",
          imgClassName,
        )}
      />
      {overlay ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/5 to-transparent"
        />
      ) : null}
    </div>
  );
}

/** Category tag used over photography: FRESH PRODUCE / SEAFOOD / MEAT. */
export function CategoryTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-forest-foreground/30 bg-forest/70 px-2.5 py-1 font-mono text-[0.625rem] font-bold uppercase tracking-[0.2em] text-forest-foreground backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Thin rule used to separate editorial blocks. */
export function Rule({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("h-px w-full", tone === "dark" ? "bg-forest-foreground/15" : "bg-border", className)}
    />
  );
}

/** Slow parallax wrapper for hero imagery. Disabled under reduced motion. */
export function Parallax({
  children,
  strength = 18,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setOffset(Math.max(-1, Math.min(1, progress)) * -strength);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared editorial hero (Customer stories / Resources / Company).     */
/* ------------------------------------------------------------------ */

/** Dark editorial page hero: muted photo band, lime flow curve, tight stack. */
export function EditorialHeroV2({
  image,
  imageAlt = "",
  eyebrow,
  headline,
  text,
}: {
  image: string;
  imageAlt?: string;
  eyebrow: string;
  headline: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-forest-foreground">
      <img
        src={image}
        alt={imageAlt}
        aria-hidden={imageAlt ? undefined : true}
        loading="eager"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/40" />
      <FlowPath
        d="M-20 260 C 260 260, 340 90, 620 120 S 1000 300, 1260 170"
        viewBox="0 0 1200 400"
        className="absolute inset-x-0 top-10 h-[360px] w-full text-lime/50"
        strokeWidth={1.25}
      />
      <div className="container-page relative max-w-3xl py-6 lg:py-8">
        <Reveal>
          <MetaLabel tone="dark" dot>
            {eyebrow}
          </MetaLabel>
        </Reveal>
        <Reveal delay={60}>
          <Display size="lg" as="h1" tone="dark" className="mt-4 lg:text-[2.75rem]">
            {headline}
          </Display>
        </Reveal>
        {text ? (
          <Reveal delay={120}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-forest-foreground/85">{text}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Compact module-group heading (Retailers / Suppliers, block 03).     */
/* ------------------------------------------------------------------ */

/** One-line section head: number · label · headline. Keeps vertical space low. */
export function ModuleSectionHead({
  num,
  label,
  headline,
  tone = "light",
  className,
}: {
  num: string;
  label: string;
  headline: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 border-b pb-4 sm:flex-row sm:items-baseline sm:gap-5",
        tone === "dark" ? "border-forest-foreground/20" : "border-border",
        className,
      )}
    >
      <span
        className={cn(
          "shrink-0 font-mono text-[0.6875rem] font-bold tabular-nums tracking-[0.3em]",
          tone === "dark" ? "text-lime" : "text-forest/45",
        )}
      >
        {num}
      </span>
      <MetaLabel tone={tone} className="shrink-0">
        {label}
      </MetaLabel>
      <h2
        className={cn(
          "text-[1.375rem] font-extrabold leading-snug tracking-[-0.02em] sm:text-[1.625rem]",
          tone === "dark" ? "text-forest-foreground" : "text-forest",
        )}
      >
        {headline}
      </h2>
    </div>
  );
}
