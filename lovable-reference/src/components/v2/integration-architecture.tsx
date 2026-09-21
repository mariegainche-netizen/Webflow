import { ArrowRight } from "lucide-react";
import { SiteLink } from "@/components/site-link";
import { MetaLabel, Display, Rule } from "@/components/v2/kit";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  headline: string;
  text: string;
  benefitTitle: string;
  benefitText: string;
  partnerEyebrow?: string;
  partnerTitle?: string;
  partnerText?: string;
  partnerCta?: string;
  className?: string;
};

const layers = [
  {
    label: "Systems of record",
    items: ["SAP", "Microsoft", "Descartes StepCom"],
    tone: "muted" as const,
  },
  {
    label: "Consentio collaborative layer",
    items: ["Forecast", "Requests", "Offers", "Allocation", "Orders", "Documents"],
    tone: "brand" as const,
  },
  {
    label: "People and partners",
    items: ["Buying teams", "Suppliers", "Logistics", "Finance"],
    tone: "muted" as const,
  },
];

/**
 * Positioning diagram: Consentio does not replace the ERP, it connects the
 * collaborative workflows around it. Copy comes from existing content.
 */
export function IntegrationArchitecture({
  eyebrow,
  headline,
  text,
  benefitTitle,
  benefitText,
  partnerEyebrow,
  partnerTitle,
  partnerText,
  partnerCta,
  className,
}: Props) {
  return (
    <div className={cn(className)}>
      {/* header: intent left, value statement right — one horizontal band */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
        <div>
          <MetaLabel dot>{eyebrow}</MetaLabel>
          <Display size="md" className="mt-4">
            {headline}
          </Display>
        </div>
        <div className="lg:pb-1">
          <p className="text-base leading-relaxed text-muted-foreground">{text}</p>
          <p className="mt-4 text-lg font-bold text-forest">{benefitTitle}</p>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{benefitText}</p>
        </div>
      </div>

      <Rule className="mt-8" />

      {/* horizontal architecture flow: three layers read left to right */}
      <Reveal className="mt-8 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
        {layers.map((layer) => (
          <div
            key={layer.label}
            className={cn(
              "flex flex-col gap-3 p-6",
              layer.tone === "brand" ? "bg-forest text-forest-foreground" : "bg-card",
            )}
          >
            <MetaLabel tone={layer.tone === "brand" ? "dark" : "light"}>{layer.label}</MetaLabel>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className={cn(
                    "text-sm font-bold tracking-tight",
                    layer.tone === "brand" ? "text-forest-foreground" : "text-forest/80",
                  )}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>

      {partnerTitle ? (
        <div className="mt-8 border-l-2 border-lime pl-5">
          {partnerEyebrow ? <MetaLabel>{partnerEyebrow}</MetaLabel> : null}
          <p className="mt-2 text-base font-bold text-forest">{partnerTitle}</p>
          {partnerText ? (
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">{partnerText}</p>
          ) : null}
          {partnerCta ? (
            <SiteLink
              to="/book-demo"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-forest transition-all hover:gap-2.5"
            >
              {partnerCta}
              <ArrowRight className="size-3.5" />
            </SiteLink>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

