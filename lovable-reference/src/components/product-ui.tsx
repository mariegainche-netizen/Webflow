// =============================================================================
// CONSENTIO — Product interface components.
// These are composed interface elements (not screenshots) used as the visual
// language of the website: forecast, offers, allocation, orders, tracking.
// All figures shown are ILLUSTRATIVE INTERFACE SAMPLE DATA, never customer
// results or validated performance metrics.
// =============================================================================
import type { ReactNode } from "react";
import { ArrowRight, Check, Truck, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ SHELL */

export function UiPanel({
  label,
  meta,
  children,
  className,
  accent = "forest",
}: {
  label: string;
  meta?: string;
  children: ReactNode;
  className?: string;
  accent?: "forest" | "lime";
}) {
  return (
    <div className={cn("rounded-lg border border-border bg-card", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        <span className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          <span
            aria-hidden
            className={cn("size-1.5 rounded-full", accent === "lime" ? "bg-lime" : "bg-forest")}
          />
          {label}
        </span>
        {meta ? <span className="text-[0.6875rem] font-medium text-muted-foreground">{meta}</span> : null}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Row({
  left,
  right,
  strong,
}: {
  left: ReactNode;
  right: ReactNode;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/70 py-2 last:border-0 last:pb-0 first:pt-0">
      <span className={cn("text-[0.8125rem]", strong ? "font-bold text-foreground" : "text-muted-foreground")}>
        {left}
      </span>
      <span className={cn("text-[0.8125rem] tabular-nums", strong ? "font-bold text-forest" : "text-foreground/80")}>
        {right}
      </span>
    </div>
  );
}

/* --------------------------------------------------------------- FORECAST */

const forecastSeries = [38, 44, 41, 52, 58, 55, 63, 71, 68, 76, 82, 79];
const forecastPlan = [40, 43, 45, 50, 55, 58, 62, 68, 70, 74, 79, 83];

function toPath(values: number[], w: number, h: number) {
  const max = 92;
  const step = w / (values.length - 1);
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`)
    .join(" ");
}

export function ForecastCard({ className }: { className?: string }) {
  const w = 280;
  const h = 96;
  return (
    <UiPanel label="Demand forecast" meta="Fresh produce · W22–W33" className={className}>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-2xl font-extrabold tracking-tight text-forest">Week 27</p>
          <p className="text-xs text-muted-foreground">Planned volume vs. forecast</p>
        </div>
        <div className="flex flex-col items-end gap-1 text-[0.6875rem] font-semibold">
          <span className="flex items-center gap-1.5 text-forest">
            <span aria-hidden className="h-0.5 w-4 rounded bg-forest" /> Forecast
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span aria-hidden className="h-0.5 w-4 rounded bg-lime" /> Plan
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 w-full" role="img" aria-label="Demand forecast trend chart">
        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1="0"
            x2={w}
            y1={h * g}
            y2={h * g}
            className="stroke-border"
            strokeWidth="1"
          />
        ))}
        <path d={toPath(forecastPlan, w, h)} className="fill-none stroke-lime" strokeWidth="2.5" strokeLinecap="round" />
        <path d={toPath(forecastSeries, w, h)} className="fill-none stroke-forest" strokeWidth="2.5" strokeLinecap="round" />
        <circle
          cx={(w / (forecastSeries.length - 1)) * 11}
          cy={h - (79 / 92) * h}
          r="4"
          className="fill-forest"
        />
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3">
        {[
          ["Categories", "6"],
          ["Sites", "18"],
          ["Horizon", "12 wks"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">{k}</p>
            <p className="text-sm font-bold text-forest tabular-nums">{v}</p>
          </div>
        ))}
      </div>
    </UiPanel>
  );
}

/* ----------------------------------------------------------------- OFFERS */

const offers = [
  { supplier: "Supplier A", ref: "TM-A-4412", price: "1.28 €/kg", volume: "12 t", best: true },
  { supplier: "Supplier B", ref: "TOM-MRM-05", price: "1.34 €/kg", volume: "8 t", best: false },
  { supplier: "Supplier C", ref: "9920-TMD", price: "1.41 €/kg", volume: "15 t", best: false },
];

export function OffersCard({ className }: { className?: string }) {
  return (
    <UiPanel label="Supplier offers" meta="Consultation · Week 27" className={className}>
      <div className="mb-1 flex items-center justify-between gap-3 border-b border-border pb-2">
        <span className="truncate text-[0.75rem] font-bold text-forest">
          Tomato Marmande · 5 kg case
        </span>
        <span className="shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground">
          3 offers
        </span>
      </div>
      <div className="space-y-0">
        {offers.map((o) => (
          <div
            key={o.supplier}
            className="flex items-center justify-between gap-3 border-b border-border/70 py-2 last:border-0"
          >
            <span className="flex min-w-0 items-center gap-2">
              <span aria-hidden className="size-6 shrink-0 rounded bg-sand" />
              <span className="min-w-0">
                <span className="block truncate text-[0.8125rem] font-semibold text-foreground">
                  {o.supplier}
                </span>
                <span className="block truncate font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted-foreground">
                  ref {o.ref}
                </span>
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-3">
              <span className="text-[0.75rem] text-muted-foreground tabular-nums">{o.volume}</span>
              <span
                className={cn(
                  "rounded px-2 py-0.5 text-[0.8125rem] font-bold tabular-nums",
                  o.best ? "bg-lime/25 text-forest" : "text-foreground/80",
                )}
              >
                {o.price}
              </span>
            </span>
          </div>
        ))}
      </div>
    </UiPanel>
  );
}

/* ------------------------------------------------------------- ALLOCATION */

const allocation = [
  { supplier: "Supplier A", share: 52 },
  { supplier: "Supplier B", share: 30 },
  { supplier: "Supplier C", share: 18 },
];

export function AllocationCard({ className }: { className?: string }) {
  return (
    <UiPanel label="Allocation" meta="35 t · 3 suppliers" className={className}>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full">
        <span className="bg-forest" style={{ width: "52%" }} />
        <span className="bg-deep" style={{ width: "30%" }} />
        <span className="bg-lime" style={{ width: "18%" }} />
      </div>
      <div className="mt-3 space-y-0">
        {allocation.map((a) => (
          <Row key={a.supplier} left={a.supplier} right={`${a.share}%`} />
        ))}
      </div>
    </UiPanel>
  );
}

/* ----------------------------------------------------------------- ORDERS */

export function OrderCard({ className }: { className?: string }) {
  return (
    <UiPanel label="Purchase order" meta="PO-2749" className={className} accent="lime">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-forest">Fresh produce · Week 27</p>
          <p className="mt-0.5 text-xs text-muted-foreground">3 suppliers · 12 lines</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-lime/25 px-2.5 py-1 text-[0.6875rem] font-bold text-forest">
          <Check className="size-3" aria-hidden /> Confirmed
        </span>
      </div>
      <div className="mt-3 space-y-0">
        <Row left="Sent to suppliers" right="09:12" />
        <Row left="Confirmations" right="3 / 3" />
        <Row left="ERP sync" right="Complete" strong />
      </div>
    </UiPanel>
  );
}

/* --------------------------------------------------------------- TRACKING */

const tracking = [
  { label: "Order confirmed", done: true },
  { label: "Dispatched", done: true },
  { label: "In transit", done: false },
  { label: "Delivered", done: false },
];

export function TrackingCard({ className }: { className?: string }) {
  return (
    <UiPanel label="Shipment" meta="SHP-118 · Chilled" className={className}>
      <ol className="space-y-2.5">
        {tracking.map((s) => (
          <li key={s.label} className="flex items-center gap-2.5">
            <span
              aria-hidden
              className={cn(
                "grid size-4 shrink-0 place-items-center rounded-full border",
                s.done ? "border-forest bg-forest" : "border-border bg-background",
              )}
            >
              {s.done ? <Check className="size-2.5 text-forest-foreground" /> : null}
            </span>
            <span className={cn("text-[0.8125rem]", s.done ? "font-semibold text-foreground" : "text-muted-foreground")}>
              {s.label}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex items-center gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
        <Truck className="size-3.5" aria-hidden /> ETA Thursday, 06:30
      </p>
    </UiPanel>
  );
}

/* -------------------------------------------------- SUPPLIER-SIDE ELEMENTS */

export function CatalogueCard({ className }: { className?: string }) {
  const items = [
    { name: "Cherry tomato 500g", status: "Available" },
    { name: "Baby spinach 2kg", status: "Available" },
    { name: "Mussels 5kg net", status: "Limited" },
  ];
  return (
    <UiPanel label="Catalogue" meta="Published · 3 customers" className={className} accent="lime">
      <div className="space-y-0">
        {items.map((i) => (
          <div key={i.name} className="flex items-center justify-between gap-3 border-b border-border/70 py-2.5 last:border-0">
            <span className="flex min-w-0 items-center gap-2">
              <span aria-hidden className="size-6 shrink-0 rounded bg-sand" />
              <span className="truncate text-[0.8125rem] font-semibold text-foreground">{i.name}</span>
            </span>
            <span
              className={cn(
                "shrink-0 rounded px-2 py-0.5 text-[0.6875rem] font-bold",
                i.status === "Available" ? "bg-lime/25 text-forest" : "bg-sand text-muted-foreground",
              )}
            >
              {i.status}
            </span>
          </div>
        ))}
      </div>
    </UiPanel>
  );
}

export function RequestsCard({ className }: { className?: string }) {
  return (
    <UiPanel label="Customer requests" meta="Inbox · 4 open" className={className}>
      <div className="space-y-0">
        <Row left="Retailer 1 — Week 27" right="Respond" strong />
        <Row left="Retailer 2 — Seafood" right="Draft" />
        <Row left="Retailer 3 — Weekly plan" right="Sent" />
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-border pt-3 text-xs text-muted-foreground">
        <FileText className="size-3.5" aria-hidden /> Offers respond directly from the request
      </div>
    </UiPanel>
  );
}

/* ------------------------------------------------------ FLOW COMPOSITION */

/**
 * Hero composition: Forecast → Source → Allocate → Order → Track.
 * Interface elements are composed as page furniture rather than screenshots.
 */
export function FlowComposition() {
  return (
    <div className="relative">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="grid gap-3">
          <FlowStep index={1} label="Forecast" />
          <ForecastCard />
        </div>
        <div className="grid gap-3 sm:pt-10">
          <FlowStep index={2} label="Source" />
          <OffersCard />
          <FlowStep index={3} label="Allocate" />
          <AllocationCard />
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="grid gap-3">
          <FlowStep index={4} label="Order" />
          <OrderCard />
        </div>
        <div className="grid gap-3">
          <FlowStep index={5} label="Track" />
          <TrackingCard />
        </div>
      </div>
    </div>
  );
}

function FlowStep({ index, label }: { index: number; label: string }) {
  return (
    <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
      <span className="grid size-4 place-items-center rounded-full bg-forest text-[0.5625rem] text-forest-foreground">
        {index}
      </span>
      {label}
      <ArrowRight className="size-3 text-border" aria-hidden />
    </p>
  );
}

/** Compact flow rail used inside content sections. */
export function FlowRail({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          <span className="text-sm font-bold text-forest">{s}</span>
          {i < steps.length - 1 ? <ArrowRight className="size-3.5 text-border" aria-hidden /> : null}
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------ SUPPLIER-ROLE ELEMENTS */
// These panels are shown on the Supplier page. The user looking at them is a
// supplier sales/ops team: they receive orders from customers, not from
// suppliers. Never reuse buyer-side wording here.

export function SupplierOrderCard({ className }: { className?: string }) {
  return (
    <UiPanel label="Received order" meta="ORD-4471 · Retailer A" className={className} accent="lime">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-forest">Fresh produce · Week 27</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Customer: Retailer A · 12 lines</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-lime/25 px-2.5 py-1 text-[0.6875rem] font-bold text-forest">
          <Check className="size-3" aria-hidden /> Confirmed
        </span>
      </div>
      <div className="mt-3 space-y-0">
        <Row left="Requested volume" right="8.4 t" />
        <Row left="Confirmed quantity" right="8.4 t" />
        <Row left="Delivery point" right="DC Lyon · D+2" />
        <Row left="ERP sync" right="Complete" strong />
      </div>
    </UiPanel>
  );
}

export function SupplierActivityCard({ className }: { className?: string }) {
  const rows = [
    { customer: "Retailer A", offers: "12", orders: "9" },
    { customer: "Retailer B", offers: "8", orders: "6" },
    { customer: "Retailer C", offers: "5", orders: "5" },
  ];
  return (
    <UiPanel label="Customer activity" meta="This week · Your accounts">
      <div className="mb-2 flex items-center justify-between gap-3 text-[0.6875rem] font-bold uppercase tracking-wider text-muted-foreground">
        <span>Customer</span>
        <span className="flex gap-5">
          <span>Offers sent</span>
          <span>Orders</span>
        </span>
      </div>
      <div className="space-y-0">
        {rows.map((r) => (
          <div
            key={r.customer}
            className="flex items-center justify-between gap-3 border-b border-border/70 py-2.5 last:border-0"
          >
            <span className="truncate text-[0.8125rem] font-semibold text-foreground">{r.customer}</span>
            <span className="flex shrink-0 items-center gap-5 tabular-nums">
              <span className="w-12 text-right text-[0.8125rem] text-muted-foreground">{r.offers}</span>
              <span className="w-8 text-right text-[0.8125rem] font-bold text-forest">{r.orders}</span>
            </span>
          </div>
        ))}
      </div>
    </UiPanel>
  );
}
