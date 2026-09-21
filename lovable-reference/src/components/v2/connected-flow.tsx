import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";
import { AllocationVisual } from "@/components/v2/allocation-visual";
import { DeploymentVisual } from "@/components/v2/deployment-visual";
import { ExecutionVisual } from "@/components/v2/execution-visual";
import { ForecastChartCard } from "@/components/v2/forecast-chart";
import { FragmentationVisual } from "@/components/v2/fragmentation-visual";
import { Display, MetaLabel } from "@/components/v2/kit";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Signature V2 moment: the four operational stages of the Consentio flow.
 * Desktop = sticky scroll storytelling. Mobile = vertical timeline.
 * Copy is reused verbatim from the existing V1 process cycle content.
 */

type Stage = {
  num: string;
  title: string;
  text: string;
  /** Mobile-only richer one-liner (comparison cards are hidden below lg). */
  mobileText?: string;
  meta: string;
  without?: string[];
  with?: string[];
  ui: ReactNode;
};




const stages: Stage[] = [
  {
    num: "01",
    title: "Forecast",
    text: content.home.workflow.steps[0]?.text ?? "",
    mobileText:
      "Centralized sales and historical data with AI-powered demand forecasting, and granular visibility by store, category and period.",
    meta: "Week 27 · Demand plan",
    without: ["Scattered historical data", "Manual spreadsheet calculations"],
    with: [
      "Centralized sales and historical data",
      "AI-powered demand forecasting",
      "Granular visibility by store, category and period",
    ],
    ui: <ForecastChartCard />,
  },
  {
    num: "02",
    title: "Collect",
    text: content.home.workflow.steps[2]?.text ?? "",
    mobileText:
      "Structured supplier requests bring prices, volumes and availability into one comparable format, with real-time visibility for buyers.",
    meta: "Live data · 14 suppliers",
    without: ["Offers through email, Excel and messages", "Manual consolidation by buyers"],
    with: [
      "Structured supplier requests",
      "Comparable prices, volumes and availability",
      "Real-time visibility for buyers",
    ],
    ui: <FragmentationVisual />,
  },
  {
    num: "03",
    title: "Allocation",
    text: content.home.workflow.steps[3]?.text ?? "",
    mobileText:
      "All offers compared in one place for faster volume allocation, with transparent and traceable decisions.",
    meta: "Allocation · Updated 09:42",
    without: ["Decisions based on fragmented information", "Manual supplier comparisons"],
    with: [
      "All offers compared in one place",
      "Faster volume allocation",
      "Transparent and traceable decisions",
    ],
    ui: <AllocationVisual />,
  },
  {
    num: "04",
    title: "Order execution",
    text: content.home.workflow.steps[5]?.text ?? "",
    mobileText:
      "Allocations become orders, with confirmations and amendments centralized and validated order data synced with your ERP.",
    meta: "Orders · Synced to ERP",
    without: ["Orders created manually from allocations", "Changes exchanged by email or phone"],
    with: [
      "Allocations converted into orders",
      "Centralized confirmations and amendments",
      "Validated order data synced with ERP",
    ],
    ui: <ExecutionVisual />,
  },
  {
    num: "05",
    title: "Modular approach",
    text: content.home.implementation.text,
    mobileText:
      "A focused pilot live in weeks, measurable impact before extending scope, then progressive rollout across categories and teams.",
    meta: "Your workspace · Your modules",
    without: ["Big-bang rollouts that take months before any result", "Value proven only after full deployment"],
    with: [
      "Focused pilot live in weeks",
      "Measurable impact before extending scope",
      "Progressive rollout across categories and teams",
    ],
    ui: <DeploymentVisual />,
  },
];

function Comparison({ stage, className }: { stage: Stage; className?: string }) {
  const without = stage.without ?? [];
  const withList = stage.with ?? [];
  if (!without.length && !withList.length) return null;
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      <div className="rounded-lg border border-forest-foreground/15 p-3.5">
        <p className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-onforest-muted">Without Consentio</p>
        <ul className="mt-2.5 space-y-1.5">
          {without.map((item) => (
            <li key={item} className="flex gap-2 text-[0.8125rem] leading-snug text-onforest-muted">
              <X aria-hidden className="mt-0.5 size-3.5 shrink-0 opacity-60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-lime/30 bg-lime/[0.06] p-3.5">
        <p className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-lime">With Consentio</p>
        <ul className="mt-2.5 space-y-1.5">
          {withList.map((item) => (
            <li key={item} className="flex gap-2 text-[0.8125rem] leading-snug text-forest-foreground/90">
              <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-lime" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


/** Extra scroll (in step-units) kept after the last step so 04 stays centred. */
const TAIL = 0;

export function ConnectedFlowV2() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        const p = Math.min(Math.max(-rect.top / total, 0), 1);
        setProgress(p);
        setActive(Math.min(Math.floor(p * (stages.length + TAIL)), stages.length - 1));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const goToStage = (i: number) => {
    const node = wrapRef.current;
    if (!node) return;
    const total = node.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const top =
      node.getBoundingClientRect().top +
      window.scrollY +
      total * ((i + 0.5) / (stages.length + TAIL));
    window.scrollTo({ top, behavior: "smooth" });
  };

  const w = content.home.workflow;
  const lineFraction = Math.min((progress * (stages.length + TAIL) + 0.5) / stages.length, 1);

  return (
    <section id="how-it-works" className="bg-forest text-forest-foreground scroll-mt-0">
      {/* ------------------------------------------------------- intro */}
      <div className="container-page pt-10 lg:pt-12">
        <MetaLabel tone="dark" dot>
          {w.eyebrow}
        </MetaLabel>
        <Display size="md" tone="dark" className="mt-4 max-w-[52rem]">
          {w.headline}
        </Display>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-onforest-muted">{w.text}</p>
      </div>

      {/* --------------------------------------------- desktop: sticky */}
      <div
        ref={wrapRef}
        className="relative hidden lg:block"
        style={{ height: `calc(${stages.length * 32 + TAIL * 32}vh + 20vh)` }}
      >
        <div className="sticky top-24 flex min-h-[52vh] items-start pt-2">
          <div className="container-page grid w-full grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start gap-14">



            {/* stage list + flow line */}
            <div className="relative pl-10">
              <div aria-hidden className="absolute left-[3px] top-3 bottom-3 w-px bg-forest-foreground/15" />
              <div
                aria-hidden
                className="absolute left-[3px] top-3 w-px bg-lime"
                style={{ height: `calc(${lineFraction * 100}% - 0.75rem)` }}
              />

              {stages.map((s, i) => {
                const on = i === active;
                return (
                  <div key={s.num} className="relative py-4">
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -left-10 top-[1.8rem] size-[7px] rounded-full transition-colors duration-500",
                        on ? "bg-lime" : "bg-forest-foreground/25",
                      )}
                    />
                    <div
                      className={cn(
                        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        on ? "opacity-100" : "opacity-40 hover:opacity-80",
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => goToStage(i)}
                        aria-current={on ? "step" : undefined}
                        className={cn(
                          "group flex w-full items-baseline gap-4 rounded-sm text-left transition-transform duration-300",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70 focus-visible:ring-offset-2 focus-visible:ring-offset-forest",
                          on ? "cursor-default" : "cursor-pointer hover:translate-x-1",
                        )}
                      >
                        <span
                          className={cn(
                            "font-mono text-[2.5rem] font-bold leading-none tabular-nums tracking-tight transition-colors duration-500",
                            on ? "text-lime" : "text-forest-foreground/40 group-hover:text-lime/70",
                          )}
                        >
                          {s.num}
                        </span>
                        <h3 className="text-2xl font-extrabold tracking-tight">{s.title}</h3>
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-500",
                          on ? "h-[15.5rem] opacity-100" : "h-0 opacity-0",
                        )}
                      >
                        <p className="mt-2.5 max-w-md text-base leading-relaxed text-onforest-muted">{s.text}</p>
                        <Comparison stage={s} className="mt-4 max-w-2xl" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* UI preview */}
            <div className="relative min-h-[21rem]">
              {stages.map((s, i) => (
                <div
                  key={s.num}
                  aria-hidden={i !== active}
                  className={cn(
                    "absolute inset-0 flex flex-col justify-start pt-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    i === active
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0",
                  )}
                >
                  <MetaLabel tone="dark" className="mb-3">
                    {s.meta}
                  </MetaLabel>
                  <div className="[&_*]:!text-inherit-0">{s.ui}</div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>

      {/* --------------------------------------------- mobile: timeline */}
      <div className="container-page relative mt-7 lg:hidden">
        <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-forest-foreground/15" />
        <div className="space-y-7">
          {stages.map((s, i) => (
            <div key={s.num} className="relative pl-7">
              <span aria-hidden className="absolute left-[4px] top-2 size-[7px] rounded-full bg-lime" />
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-lg font-bold tabular-nums text-lime">{s.num}</span>
                <h3 className="text-lg font-extrabold tracking-tight">{s.title}</h3>
                <span className="ml-auto font-mono text-[0.625rem] tabular-nums tracking-[0.18em] text-onforest-muted">
                  {s.num} / {String(stages.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1.5 text-[0.875rem] leading-snug text-onforest-muted">{s.mobileText ?? s.text}</p>
              <div className="mt-3">{s.ui}</div>
              
            </div>

          ))}
        </div>
      </div>

      <div className="pb-4 lg:pb-6" />

    </section>
  );
}
