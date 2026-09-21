// =============================================================================
// CONSENTIO V2 — "Allocation workspace" composition.
// One interface: product context, supplier offers, allocation mode (manual /
// AI recommendation) and a draggable-looking allocation bar as the hero.
// Content is ILLUSTRATIVE INTERFACE SAMPLE DATA.
// =============================================================================
import { Check, Sparkles } from "lucide-react";
import { UiPanel } from "@/components/product-ui";
import { cn } from "@/lib/utils";
import tomatoImage from "@/assets/v2/vine-tomato.jpg";

const suppliers = [
  {
    id: "A",
    price: "€1.28/kg",
    available: "18 t available",
    volume: "18 t",
    share: 52,
    tag: "Best price",
    bar: "bg-forest",
    dot: "bg-forest",
    best: true,
  },
  {
    id: "B",
    price: "€1.34/kg",
    available: "10 t available",
    volume: "10 t",
    share: 30,
    tag: "Preferred",
    bar: "bg-deep",
    dot: "bg-deep",
  },
  {
    id: "C",
    price: "€1.41/kg",
    available: "7 t available",
    volume: "7 t",
    share: 18,
    tag: "Limited",
    bar: "bg-lime",
    dot: "bg-lime",
  },
];

const criteria = ["Best total cost", "Diversified sourcing", "100% coverage"];

/** One product's requested volume being distributed across three suppliers. */
export function AllocationVisual({ className }: { className?: string }) {
  return (
    <UiPanel label="Allocation · Week 27" meta="35 t requested" className={className}>
      {/* 1 — product being allocated */}
      <div className="flex items-center gap-3 rounded-md border border-border bg-sand/40 p-2">
        <img
          src={tomatoImage}
          alt="Vine tomatoes"
          loading="lazy"
          width={512}
          height={512}
          className="size-11 shrink-0 rounded-md object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-[0.875rem] font-bold text-forest">Vine tomato</p>
          <p className="text-[0.6875rem] text-muted-foreground">Cat. I · 5 kg case</p>
        </div>
        <span className="ml-auto shrink-0 font-mono text-[0.8125rem] font-bold tabular-nums text-forest">
          35 t
        </span>
      </div>

      {/* 2 — compact supplier options */}
      <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
        {suppliers.map((s) => (
          <div
            key={s.id}
            className={cn(
              "rounded-md border px-2 py-1.5",
              s.best ? "border-lime/60 bg-lime/10" : "border-border bg-card",
            )}
          >
            <span className="flex items-center gap-1.5">
              <span aria-hidden className={cn("size-1.5 rounded-full", s.dot)} />
              <span className="text-[0.75rem] font-bold text-forest">Supplier {s.id}</span>
            </span>
            <p className="mt-0.5 font-mono text-[0.8125rem] font-bold tabular-nums text-foreground">{s.price}</p>
            <p className="text-[0.625rem] text-muted-foreground">{s.available}</p>
            <span
              className={cn(
                "mt-1 inline-block text-[0.5625rem] font-bold uppercase tracking-[0.1em]",
                s.best ? "text-forest" : "text-muted-foreground/70",
              )}
            >
              {s.tag}
            </span>
          </div>
        ))}
      </div>

      {/* connectors down to the matching segment */}
      <div aria-hidden className="grid grid-cols-3 gap-2">
        {suppliers.map((s) => (
          <div key={s.id} className="flex h-3.5 justify-center sm:h-6">
            <span className="w-px bg-border" />
          </div>
        ))}
      </div>


      {/* 3 — allocation mode selector */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Allocation mode
        </span>
        <span className="inline-flex rounded-full border border-border bg-card p-0.5">
          <span className="rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold text-muted-foreground">
            Manual
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-forest px-2.5 py-1 text-[0.6875rem] font-bold text-forest-foreground">
            <Sparkles aria-hidden className="size-3 text-lime" />
            AI recommendation
          </span>
        </span>
      </div>

      {/* 4a — mobile: one compact AI recommendation row */}
      <p className="mt-2 flex flex-wrap items-center gap-x-1.5 rounded-md border border-lime/50 bg-lime/10 px-2 py-1.5 text-[0.6875rem] font-semibold text-forest sm:hidden">
        <Sparkles aria-hidden className="size-3 shrink-0 text-forest" />
        <span className="font-bold">AI recommendation</span>
        <span className="text-muted-foreground">Best cost · Diversified · 100% covered</span>
      </p>

      {/* 4b — tablet and up: AI recommendation summary */}
      <div className="mt-3 hidden rounded-md border border-lime/50 bg-lime/10 px-2.5 py-2 sm:block">
        <p className="flex items-center gap-1.5 text-[0.75rem] font-bold text-forest">
          <Sparkles aria-hidden className="size-3.5 text-forest" />
          AI suggested allocation
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {criteria.map((c) => (
            <span
              key={c}
              className="rounded-full border border-forest/20 bg-card px-2 py-0.5 text-[0.625rem] font-semibold text-forest"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* 5 — hero: the allocation bar */}
      <p className="mt-3 text-center font-mono text-[0.5625rem] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:mt-5">
        35 t to allocate
      </p>
      <div className="relative mt-2 rounded-lg ring-2 ring-lime/40">
        <div className="flex h-12 w-full overflow-hidden rounded-lg border border-border sm:h-14">

          {suppliers.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                "relative flex flex-col items-center justify-center gap-0.5",
                s.bar,
                i > 0 && "border-l border-card/40",
                s.id === "C" ? "text-forest" : "text-forest-foreground",
              )}
              style={{ width: `${s.share}%` }}
            >
              <span className="text-[0.5625rem] font-bold uppercase tracking-[0.1em] opacity-80">{s.id}</span>
              <span className="font-mono text-[0.875rem] font-bold tabular-nums leading-none">{s.volume}</span>
              <span className="font-mono text-[0.5625rem] tabular-nums opacity-80">{s.share}%</span>
            </div>
          ))}
        </div>
        {/* draggable handles between segments */}
        {[52, 82].map((left) => (
          <span
            key={left}
            aria-hidden
            className="absolute top-1/2 grid size-4 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-forest/30 bg-card shadow-sm"
            style={{ left: `${left}%` }}
          >
            <span className="h-2 w-[3px] rounded-full bg-forest/50" />
          </span>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="text-[0.5625rem] uppercase tracking-[0.14em] text-muted-foreground/70">
          Drag to adjust
        </span>
        <span className="inline-flex items-center gap-1 text-[0.625rem] font-semibold text-forest underline decoration-forest/30 underline-offset-2">
          <Sparkles aria-hidden className="size-3" />
          Regenerate recommendation
        </span>
      </div>

      {/* 6 — status line */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-border pt-2 sm:mt-4 sm:pt-3">
        <Check aria-hidden className="size-3.5 text-lime" />
        <span className="text-[0.8125rem] font-bold text-forest">35 t allocated</span>
        <span className="text-[0.6875rem] text-muted-foreground">3 suppliers · 100% covered</span>
        <span className="hidden text-[0.625rem] text-muted-foreground/70 sm:inline">Suggested by AI · editable</span>
      </div>

    </UiPanel>
  );
}
