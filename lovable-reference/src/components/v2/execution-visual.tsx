// =============================================================================
// CONSENTIO V2 — "Order execution" composition.
// One supplier order with two products, a five-step workflow and its documents.
// Content is ILLUSTRATIVE INTERFACE SAMPLE DATA.
// =============================================================================
import { Check, ChevronRight, FileText, RefreshCw } from "lucide-react";
import { UiPanel } from "@/components/product-ui";
import { cn } from "@/lib/utils";
import tomatoImage from "@/assets/v2/vine-tomato.jpg";
import cucumberImage from "@/assets/v2/cucumber.jpg";

const products = [
  { name: "Vine tomato", desc: "Cat. I · 5 kg case", price: "€1.24 /kg", qty: "18 t", img: tomatoImage, alt: "Vine tomatoes" },
  { name: "Cucumber", desc: "Cat. I · 12-piece case", price: "€0.68 /pc", qty: "6 t", img: cucumberImage, alt: "Cucumbers" },
];


const steps = [
  { label: "Order sent", state: "done" },
  { label: "Confirmed", state: "done" },
  { label: "Preparing", state: "current" },
  { label: "Shipped", state: "todo" },
  { label: "Delivered", state: "todo" },
] as const;

const documents = [
  { label: "PO", ready: true },
  { label: "Confirmation", ready: true },
  { label: "DESADV", ready: false },
  { label: "Delivery note", ready: false },
];

/** A single supplier order, its workflow and its documents. */
export function ExecutionVisual({ className }: { className?: string }) {
  return (
    <UiPanel label="Order · PO-2749" meta="Week 27" className={className}>
      {/* supplier */}
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[0.5625rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">Supplier</p>
          <p className="mt-1 text-[1.0625rem] font-extrabold tracking-tight text-forest">Supplier A</p>
        </div>
        <p className="text-[0.6875rem] font-medium text-muted-foreground">2 products · 24 t</p>
      </div>

      {/* product lines */}
      <div className="mt-2.5 rounded-md border border-border bg-sand/40 sm:mt-3">
        <div className="flex items-center gap-3 rounded-t-md border-b border-border bg-white px-2.5 py-2 text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          <span className="min-w-0 flex-1">Product</span>
          <span className="w-[4.5rem] shrink-0 text-right">Price</span>
          <span className="w-[3.25rem] shrink-0 whitespace-nowrap text-right">Qty</span>
        </div>


        <div className="divide-y divide-border/70">
          {products.map((p) => (
            <div key={p.name} className="flex items-center gap-2.5 p-2 sm:gap-3 sm:p-2.5">
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                width={512}
                height={512}
                className="size-10 shrink-0 rounded-md object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.875rem] font-bold text-forest">{p.name}</p>
                <p className="text-[0.6875rem] text-muted-foreground">{p.desc}</p>
              </div>
              <p className="w-[4.5rem] shrink-0 text-right font-mono text-[0.8125rem] font-semibold tabular-nums text-forest">
                {p.price}
              </p>
              <p className="w-[3.25rem] shrink-0 text-right font-mono text-[1.0625rem] font-bold tabular-nums text-forest">
                {p.qty}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* status */}
      <p className="mt-3 text-[0.5625rem] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:mt-4">Order status</p>
      {/* Mobile: compact horizontal chip flow that wraps. */}
      <ol className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-1.5 sm:hidden">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-center gap-1">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[0.6875rem] leading-tight",
                s.state === "done" && "border-forest/25 bg-sand/60 font-semibold text-forest",
                s.state === "current" && "border-forest bg-lime font-bold text-forest",
                s.state === "todo" && "border-dashed border-border text-muted-foreground/80",
              )}
            >
              {s.state === "done" ? (
                <Check aria-hidden className="size-2.5" strokeWidth={3} />
              ) : (
                <span
                  aria-hidden
                  className={cn(
                    "size-1.5 rounded-full",
                    s.state === "current" ? "bg-forest" : "border border-border bg-card",
                  )}
                />
              )}
              {s.label}
            </span>
            {i < steps.length - 1 ? (
              <ChevronRight aria-hidden className="size-3 text-muted-foreground/50" />
            ) : null}
          </li>
        ))}
      </ol>


      {/* Tablet and up: horizontal stepper. */}
      <div className="relative mt-3 hidden sm:block">
        <span aria-hidden className="absolute left-[10%] right-[10%] top-[7px] h-px bg-border" />
        <span aria-hidden className="absolute left-[10%] top-[7px] h-px w-[40%] bg-forest" />
        <div className="relative grid grid-cols-5">
          {steps.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 text-center">
              <span
                className={cn(
                  "grid size-3.5 place-items-center rounded-full border",
                  s.state === "done" && "border-forest bg-forest text-forest-foreground",
                  s.state === "current" && "border-forest bg-lime ring-4 ring-lime/25",
                  s.state === "todo" && "border-border bg-card",
                )}
              >
                {s.state === "done" ? <Check aria-hidden className="size-2" /> : null}
              </span>
              <span
                className={cn(
                  "text-[0.625rem] leading-tight",
                  s.state === "todo" ? "text-muted-foreground/70" : "font-semibold text-forest",
                  s.state === "current" && "font-bold",
                )}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* documents */}
      <div className="mt-3 border-t border-border pt-2 sm:mt-4 sm:pt-3">
        <p className="text-[0.5625rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">Documents</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {documents.map((d) => (
            <span
              key={d.label}
              className={cn(
                "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-[0.6875rem] font-semibold",
                d.ready
                  ? "border-border bg-sand/50 text-forest"
                  : "border-dashed border-border bg-transparent text-muted-foreground",
              )}
            >
              <FileText aria-hidden className="size-3" />
              {d.label}
              {d.ready ? <Check aria-hidden className="size-3 text-forest" strokeWidth={3} /> : null}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 py-1 text-[0.6875rem] font-bold text-forest">
            <RefreshCw aria-hidden className="size-3.5" />
            ERP synced
            <Check aria-hidden className="size-3 text-forest" strokeWidth={3} />
          </span>
        </div>
      </div>


    </UiPanel>
  );
}
