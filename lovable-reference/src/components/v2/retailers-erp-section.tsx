import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SiteLink } from "@/components/site-link";
import { MetaLabel } from "@/components/v2/kit";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  headline: string;
  text: string;
  note?: string;
  cta: string;
};

/** Compact three-layer stack: systems of record → Consentio → people. */
const layers = [
  {
    label: "Your systems of record",
    items: ["ERP", "Stock", "Finance"],
    tone: "muted" as const,
  },
  {
    label: "Consentio layer",
    items: ["Forecast", "Offers", "Allocation", "Orders"],
    tone: "brand" as const,
  },
  {
    label: "People and partners",
    items: ["Buying teams", "Suppliers", "Logistics"],
    tone: "muted" as const,
  },
];

/** Illustrative ERP / systems wordmarks — placeholders, not customer claims. */
const wordmarks = [
  "SAP",
  "Microsoft Dynamics",
  "Descartes StepCom",
  "Oracle NetSuite",
  "Infor M3",
  "Sage X3",
  "Odoo",
  "Business Central",
];

export function RetailersErpSection({ eyebrow, headline, text, note, cta }: Props) {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        {/* left: intent */}
        <div>
          <MetaLabel dot>{eyebrow}</MetaLabel>
          <h2 className="mt-4 max-w-xl text-[1.5rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-[1.875rem]">
            {headline}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">{text}</p>
          {note ? <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{note}</p> : null}
          <Button asChild className="mt-6">
            <SiteLink to="/book-demo">
              {cta}
              <ArrowRight className="size-4" />
            </SiteLink>
          </Button>
        </div>

        {/* right: compact vertical diagram, height capped to stay balanced */}
        <Reveal delay={80} className="lg:max-h-[22rem]">
          <div className="mx-auto flex w-full max-w-md flex-col items-stretch">
            {layers.map((layer, i) => (
              <div key={layer.label} className="flex flex-col items-stretch">
                <div
                  className={cn(
                    "border px-5 py-3.5",
                    layer.tone === "brand"
                      ? "border-forest bg-forest text-forest-foreground shadow-[0_16px_40px_-28px_oklch(0.24_0.05_165/0.6)]"
                      : "border-border bg-card",
                  )}
                >
                  <MetaLabel tone={layer.tone === "brand" ? "dark" : "light"}>{layer.label}</MetaLabel>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          "text-[0.8125rem] font-semibold tracking-tight",
                          layer.tone === "brand" ? "text-forest-foreground" : "text-forest/80",
                        )}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {i < layers.length - 1 ? (
                  <div className="flex justify-center py-1.5" aria-hidden>
                    <ArrowDown className="size-4 text-forest/40" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* systems wordmark band */}
      <Reveal delay={120} className="mt-9">
        <ul className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4 lg:grid-cols-8">
          {wordmarks.map((name) => (
            <li
              key={name}
              className="flex min-h-[3.75rem] items-center justify-center bg-card px-3 text-center font-mono text-[0.6875rem] font-bold uppercase leading-tight tracking-[0.12em] text-forest/55 transition-colors hover:text-forest"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
