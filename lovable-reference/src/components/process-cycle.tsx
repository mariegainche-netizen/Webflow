// =============================================================================
// CONSENTIO — Interactive procurement cycle.
// Four stages (Forecast, Collect, Attribution, Order execution) presented as a
// clickable circular flow with a dynamic comparison + product UI panel.
// All figures shown are ILLUSTRATIVE INTERFACE SAMPLE DATA.
// =============================================================================
import { useState, type ReactNode } from "react";
import {
  BarChart3,
  ClipboardList,
  Users,
  FileText,
  Clock,
  Eye,
  ShieldCheck,
  TrendingUp,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/section";
import { Reveal } from "@/components/motion";

/* ------------------------------------------------------------- PRODUCT UI */

function Panel({ title, meta, children }: { title: string; meta?: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between gap-3 border-b border-border px-3.5 py-2.5">
        <span className="text-[0.8125rem] font-bold text-forest">{title}</span>
        {meta ? <span className="text-[0.6875rem] font-medium text-muted-foreground">{meta}</span> : null}
      </div>
      <div className="p-3.5">{children}</div>
    </div>
  );
}

function Selects({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {items.map((s) => (
        <div key={s.label}>
          <p className="text-[0.625rem] font-semibold uppercase tracking-wide text-muted-foreground">{s.label}</p>
          <div className="mt-1 flex items-center justify-between rounded-md border border-border px-2 py-1.5 text-[0.75rem] font-medium text-foreground">
            {s.value}
            <span aria-hidden className="text-muted-foreground">⌄</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const SERIES = [32, 38, 35, 44, 41, 52, 58, 64];

function ForecastUi() {
  const max = 72;
  const w = 300;
  const h = 96;
  const pts = SERIES.map((v, i) => {
    const x = (i / (SERIES.length - 1)) * w;
    const y = h - (v / max) * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <Panel title="Demand forecast" meta="Sample data">
      <Selects
        items={[
          { label: "Category", value: "Fruit" },
          { label: "Store group", value: "All" },
          { label: "Period", value: "8 weeks" },
        ]}
      />
      <div className="mt-3.5 rounded-md border border-border p-3">
        <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" role="img" aria-label="Historical demand and forecast line">
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="0" x2={w} y1={(h / 3) * i} y2={(h / 3) * i} className="stroke-border" strokeWidth="1" />
          ))}
          {SERIES.map((v, i) => (
            <rect
              key={i}
              x={(i / SERIES.length) * w + 6}
              width={w / SERIES.length - 12}
              y={h - (v / max) * h * 0.82}
              height={(v / max) * h * 0.82}
              className="fill-muted"
            />
          ))}
          <polyline points={pts} fill="none" className="stroke-forest" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <div className="mt-2 flex justify-between text-[0.625rem] tabular-nums text-muted-foreground">
          {["W01", "W02", "W03", "W04", "W05", "W06", "W07", "W08"].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[0.625rem] font-semibold uppercase tracking-wide text-muted-foreground">Top categories</p>
      <div className="mt-1.5 divide-y divide-border">
        {[
          ["Tomatoes", "+12.4%"],
          ["Lettuce", "+9.1%"],
          ["Bananas", "+6.7%"],
        ].map(([a, b]) => (
          <div key={a} className="flex items-center justify-between py-1.5 text-[0.8125rem]">
            <span className="text-foreground">{a}</span>
            <span className="font-semibold tabular-nums text-forest">{b}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[30rem] border-collapse text-left">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="border-b border-border pb-2 text-[0.625rem] font-bold uppercase tracking-wide text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/70 last:border-0">
              {r.map((c, j) => (
                <td key={j} className="py-2 pr-3 text-[0.75rem] text-foreground/85 tabular-nums">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CollectUi() {
  return (
    <Panel title="Supplier offers — Tomatoes, W32" meta="Sample data">
      <Table
        head={["Supplier", "Origin", "Price", "Volume", "Packaging", "Delivery"]}
        rows={[
          ["Huerta Verde", "ES", <span className="font-semibold text-forest">1.14 €/kg</span>, "12 t", "6×1 kg", "12 Aug"],
          ["Mytilimer", "FR", "1.21 €/kg", "8 t", "Bulk 10 kg", "12 Aug"],
          ["Agri Sud", "MA", "1.08 €/kg", "16 t", "5×2 kg", "13 Aug"],
          ["Reynaud", "FR", "1.27 €/kg", "6 t", "6×1 kg", "12 Aug"],
        ]}
      />
    </Panel>
  );
}

function AttributionUi() {
  return (
    <Panel title="Volume allocation — 30 t required" meta="Sample data">
      <Table
        head={["Supplier", "Price", "Available", "Allocated", "Share"]}
        rows={[
          ["Agri Sud", "1.08 €/kg", "16 t", <span className="font-semibold text-forest">14 t</span>, "47%"],
          ["Huerta Verde", "1.14 €/kg", "12 t", <span className="font-semibold text-forest">10 t</span>, "33%"],
          ["Mytilimer", "1.21 €/kg", "8 t", <span className="font-semibold text-forest">6 t</span>, "20%"],
        ]}
      />
      <div className="mt-3 flex overflow-hidden rounded-full">
        <span className="h-2 bg-forest" style={{ width: "47%" }} />
        <span className="h-2 bg-forest/60" style={{ width: "33%" }} />
        <span className="h-2 bg-lime" style={{ width: "20%" }} />
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-border pt-2.5 text-[0.8125rem]">
        <span className="text-muted-foreground">Total purchasing value</span>
        <span className="font-bold tabular-nums text-forest">33 720 €</span>
      </div>
    </Panel>
  );
}

function StatusTag({ label }: { label: string }) {
  const tone =
    label === "Confirmed" || label === "Synced"
      ? "border-forest/25 bg-forest/8 text-forest"
      : label === "Pending"
        ? "border-border bg-muted text-muted-foreground"
        : "border-amber-accent/30 bg-amber-accent/10 text-amber-accent";
  return (
    <span className={cn("inline-flex rounded-full border px-2 py-0.5 text-[0.625rem] font-semibold", tone)}>
      {label}
    </span>
  );
}

function OrderUi() {
  return (
    <Panel title="Order execution" meta="Sample data">
      <Table
        head={["PO", "Supplier", "Product", "Qty", "Delivery", "Status", "ERP"]}
        rows={[
          ["PO-4821", "Agri Sud", "Tomatoes", "14 t", "13 Aug", <StatusTag label="Confirmed" />, <StatusTag label="Synced" />],
          ["PO-4822", "Huerta Verde", "Tomatoes", "10 t", "12 Aug", <StatusTag label="Updated" />, <StatusTag label="Synced" />],
          ["PO-4823", "Mytilimer", "Mussels", "6 t", "12 Aug", <StatusTag label="Pending" />, <StatusTag label="Pending" />],
        ]}
      />
    </Panel>
  );
}

/* --------------------------------------------------------------- CONTENT */

type Stage = {
  id: string;
  num: string;
  title: string;
  icon: typeof BarChart3;
  description: string;
  without: string[];
  with: string[];
  ui: () => ReactNode;
};

const STAGES: Stage[] = [
  {
    id: "forecast",
    num: "01",
    title: "Forecast",
    icon: BarChart3,
    description: "Build accurate demand plans by category, store group and period.",
    without: [
      "Scattered historical data",
      "Manual spreadsheet calculations",
      "Limited visibility by store or category",
      "Difficult to anticipate demand changes",
    ],
    with: [
      "Centralized sales and historical data",
      "AI-powered demand forecasting",
      "Granular visibility by store, category and period",
      "Earlier detection of demand shifts",
    ],
    ui: () => <ForecastUi />,
  },
  {
    id: "collect",
    num: "02",
    title: "Collect",
    icon: ClipboardList,
    description: "Collect supplier prices, volumes and availability in one structured format.",
    without: [
      "Offers received through email, Excel and messages",
      "Different formats from each supplier",
      "Manual consolidation by buyers",
      "Difficult price and availability comparison",
    ],
    with: [
      "Structured supplier requests",
      "Centralized offers",
      "Comparable prices, volumes and availability",
      "Real-time visibility for buyers",
    ],
    ui: () => <CollectUi />,
  },
  {
    id: "attribution",
    num: "03",
    title: "Attribution",
    icon: Users,
    description: "Turn market information into faster, better-informed allocation decisions.",
    without: [
      "Decisions based on fragmented information",
      "Manual supplier comparisons",
      "Limited visibility on alternatives",
      "Allocation decisions difficult to trace",
    ],
    with: [
      "All offers compared in one place",
      "Complete decision context",
      "Faster volume allocation",
      "Transparent and traceable purchasing decisions",
    ],
    ui: () => <AttributionUi />,
  },
  {
    id: "order-execution",
    num: "04",
    title: "Order execution",
    icon: FileText,
    description: "Convert purchasing decisions into orders and keep execution synchronized.",
    without: [
      "Orders manually created from allocation decisions",
      "Changes exchanged through email or phone",
      "Confirmation status difficult to track",
      "ERP data updated manually",
    ],
    with: [
      "Allocations automatically converted into orders",
      "Centralized confirmations and amendments",
      "Shared execution status",
      "Validated order data synchronized with ERP systems",
    ],
    ui: () => <OrderUi />,
  },
];

const BENEFITS = [
  { icon: Clock, title: "Less manual work", text: "Automate repetitive tasks" },
  { icon: Eye, title: "More visibility", text: "End-to-end transparency" },
  { icon: ShieldCheck, title: "Better decisions", text: "Complete, reliable information" },
  { icon: TrendingUp, title: "Stronger supply", text: "Secure, resilient supply chains" },
];

/* ------------------------------------------------------------- THE CIRCLE */

const POSITIONS = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2",
  "left-1/2 bottom-0 -translate-x-1/2",
  "left-0 top-1/2 -translate-y-1/2",
];

function CircleNav({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <svg viewBox="0 0 100 100" className="absolute inset-[3.2rem]" aria-hidden>
        <circle cx="50" cy="50" r="48" fill="none" className="stroke-border" strokeWidth="1.2" />
        {[
          [78, 22],
          [78, 78],
          [22, 78],
          [22, 22],
        ].map(([x, y], i) => (
          <polygon
            key={i}
            points="-3,-2.4 3,0 -3,2.4"
            className="fill-muted-foreground/50"
            transform={`translate(${x} ${y}) rotate(${45 + i * 90})`}
          />
        ))}
      </svg>

      <div className="absolute inset-[7.5rem] flex flex-col items-center justify-center text-center">
        <p className="text-lg font-extrabold leading-tight tracking-tight text-forest">A continuous data flow</p>
        <p className="mt-2 text-[0.75rem] leading-snug text-muted-foreground">
          One source of truth shared by buyers and suppliers.
        </p>
      </div>

      {STAGES.map((s, i) => {
        const isActive = s.id === active;
        const Icon = s.icon;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s.id)}
            aria-pressed={isActive}
            className={cn(
              "absolute flex flex-col items-center justify-center rounded-full border bg-background text-center transition-all duration-300",
              POSITIONS[i],
              isActive
                ? "size-[6.5rem] border-forest text-forest shadow-[0_0_0_6px_color-mix(in_oklab,var(--lime)_18%,transparent)]"
                : "size-[5.5rem] border-border text-foreground hover:border-forest/40",
            )}
          >
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full text-[0.5625rem] font-bold transition-colors",
                isActive ? "bg-forest text-forest-foreground" : "bg-muted text-muted-foreground",
              )}
            >
              {s.num}
            </span>
            <Icon className={cn("mt-1 size-4", isActive ? "text-forest" : "text-muted-foreground")} />
            <span
              className={cn(
                "mt-1 max-w-[5rem] text-[0.6875rem] font-bold leading-tight",
                isActive ? "text-forest" : "text-foreground",
              )}
            >
              {s.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------- SECTION */

export function ProcessCycle() {
  const [active, setActive] = useState(STAGES[0]!.id);
  const stage = STAGES.find((s) => s.id === active)!;

  return (
    <section id="how-it-works" className="section-y scroll-mt-24 bg-background">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow>Our process</Eyebrow>
            <h2 className="display-2 mt-4 text-forest">
              One connected flow.
              <br />
              From forecast to execution.
            </h2>
            <p className="lede mt-5 text-muted-foreground">
              Consentio connects every step of fresh food procurement so buyers and suppliers work from the same
              structured, real-time data.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {BENEFITS.map((b) => (
                <div key={b.title} className="bg-background p-4">
                  <b.icon className="size-4 text-forest" />
                  <p className="mt-2.5 text-[0.8125rem] font-bold leading-snug text-forest">{b.title}</p>
                  <p className="mt-1 text-[0.75rem] leading-snug text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[38fr_62fr] lg:items-start lg:gap-14">
          {/* Circle — desktop / tablet */}
          <div className="hidden md:block">
            <CircleNav active={active} onSelect={setActive} />
          </div>

          {/* Horizontal selector — mobile */}
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:hidden">
            {STAGES.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[0.8125rem] font-semibold transition-colors duration-200",
                    isActive ? "border-forest bg-forest/5 text-forest" : "border-border text-muted-foreground",
                  )}
                >
                  <s.icon className="size-3.5" />
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Dynamic panel */}
          <div key={stage.id} className="animate-fade-in">
            <div className="flex items-center gap-3">
              <span className="flex size-7 items-center justify-center rounded-md bg-forest text-[0.6875rem] font-bold text-forest-foreground">
                {stage.num}
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-forest">{stage.title}</h3>
            </div>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">{stage.description}</p>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-destructive/80">
                  Without Consentio
                </p>
                <ul className="mt-3 space-y-2.5">
                  {stage.without.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.8125rem] leading-snug text-muted-foreground">
                      <X className="mt-0.5 size-3.5 shrink-0 text-destructive/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-forest/25 bg-forest/[0.03] p-4">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-forest">With Consentio</p>
                <ul className="mt-3 space-y-2.5">
                  {stage.with.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.8125rem] leading-snug text-foreground/85">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-forest" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5">{stage.ui()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
