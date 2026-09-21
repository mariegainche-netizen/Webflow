// =============================================================================
// CONSENTIO V2 — "Modular approach" composition.
// Four stages: Pilot → Prove value → Expand → Scale.
// Mobile = compact 2 x 2 progression grid. Tablet and up = stacked cards.
// =============================================================================
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  {
    num: "01",
    label: "Pilot",
    line: "Start with one use case and a focused team.",
    short: "Start focused",
    tag: "One module · Limited scope",
    check: false,
  },
  {
    num: "02",
    label: "Prove value",
    line: "Validate the impact before expanding.",
    short: "Validate impact",
    tag: "Impact validated",
    check: true,
  },
  {
    num: "03",
    label: "Expand",
    line: "Add modules and connect more workflows.",
    short: "Add modules and teams",
    tag: "More modules · More teams",
    check: false,
  },
  {
    num: "04",
    label: "Scale",
    line: "Roll out across categories and markets.",
    short: "Extend across categories",
    tag: "More categories · More markets",
    check: false,
  },
];

export function DeploymentVisual({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <p className="font-mono text-[0.625rem] font-bold uppercase tracking-[0.18em] text-lime">
        Deployment · Step by step
      </p>

      {/* Mobile: 2 x 2 progression grid. */}
      <div className="mt-2.5 sm:hidden">
        <div className="grid grid-cols-2 gap-1.5">
          {stages.map((s) => (
            <div key={s.num} className="rounded-lg border border-border bg-card px-2.5 py-2">
              <p className="flex items-baseline gap-1.5">
                <span className="font-mono text-[0.8125rem] font-extrabold tabular-nums text-forest/60">
                  {s.num}
                </span>
                <span className="text-[0.875rem] font-bold leading-tight text-forest">{s.label}</span>
              </p>
              <p className="mt-0.5 text-[0.75rem] leading-snug text-muted-foreground">{s.short}</p>
              <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-lime/20 px-1.5 py-px font-mono text-[0.5rem] font-bold uppercase tracking-[0.08em] text-forest">
                {s.check && <Check aria-hidden className="size-2.5" />}
                {s.tag}
              </span>
            </div>
          ))}
        </div>
        <div aria-hidden className="mt-1.5 flex items-center justify-center gap-1.5 text-lime">
          <ArrowRight className="size-3" />
          <ArrowDown className="size-3" />
          <ArrowRight className="size-3" />
        </div>
      </div>

      {/* Tablet and up: unchanged stacked cards. */}
      <div className="mt-3 hidden sm:block">
        {stages.map((s, i) => (
          <div key={s.num}>
            <div className="flex min-h-[6.5rem] items-center gap-4 rounded-lg border border-border bg-card px-4 py-4 sm:min-h-[6.875rem]">
              <span className="shrink-0 font-mono text-[1.375rem] font-extrabold leading-none tabular-nums text-forest">
                {s.num}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.9375rem] font-bold leading-tight text-forest">{s.label}</p>
                <p className="mt-1 text-[0.8125rem] leading-snug text-muted-foreground">{s.line}</p>
                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-lime/20 px-2 py-0.5 font-mono text-[0.5625rem] font-bold uppercase tracking-[0.1em] text-forest">
                  {s.check && <Check aria-hidden className="size-3" />}
                  {s.tag}
                </span>
              </div>
            </div>
            {i < stages.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown aria-hidden className="size-4 text-lime" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
