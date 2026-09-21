// =============================================================================
// CONSENTIO V2 — "Fragmentation converges into Consentio" composition.
// Shared by the retailers "daily reality" block and the home Collect stage.
// Content is ILLUSTRATIVE INTERFACE SAMPLE DATA.
// =============================================================================
import { ArrowDown, Database, FileSpreadsheet, Globe, Mail, MessageSquare, Phone } from "lucide-react";
import { OffersCard } from "@/components/product-ui";
import { CategoryTag, MetaLabel } from "@/components/v2/kit";

const fragments: { icon: typeof Mail; label: string; meta: string; badge?: string }[] = [
  { icon: Mail, label: "Email thread", meta: "42 unread", badge: "42" },
  { icon: FileSpreadsheet, label: "Spreadsheet", meta: "v14_final_FINAL.xlsx" },
  { icon: Phone, label: "Phone call", meta: "09:12 — Supplier B", badge: "2" },
  { icon: MessageSquare, label: "Messages", meta: "3 chats open", badge: "3" },
  { icon: Database, label: "ERP export", meta: "Stale since Monday", badge: "!" },
];

/** Mobile mosaic: same channels, schematic mini-cards (icon + label + badge). */
const mobileFragments: { icon: typeof Mail; label: string; badge?: string }[] = [
  { icon: Mail, label: "Email", badge: "42" },
  { icon: FileSpreadsheet, label: "Spreadsheet" },
  { icon: MessageSquare, label: "Messages", badge: "3" },
  { icon: Phone, label: "Phone", badge: "2" },
  { icon: Database, label: "ERP", badge: "!" },
  { icon: Globe, label: "Web portal" },
];

/** Scattered inbound channels converging into the Consentio buying workspace. */
export function FragmentationVisual({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* Mobile: compact schematic mosaic — many channels, minimal detail. */}
      <div className="grid grid-cols-2 gap-1.5 sm:hidden">
        {mobileFragments.map((f, i) => (
          <div
            key={f.label}
            className="flex items-center gap-2 rounded-none border border-border bg-card px-2 py-1.5"
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (0.4 + (i % 3) * 0.2)}deg)` }}
          >
            <f.icon className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
            <span className="min-w-0 flex-1 truncate text-[0.75rem] font-semibold text-foreground">
              {f.label}
            </span>
            {f.badge ? (
              <span className="inline-flex min-w-4 shrink-0 items-center justify-center rounded-full bg-[oklch(0.58_0.21_25)] px-1 py-px font-mono text-[0.5625rem] font-bold tabular-nums leading-none text-white">
                {f.badge}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      {/* Tablet and up: unchanged detailed source cards. */}
      <div className="hidden gap-2.5 sm:grid sm:grid-cols-2">
        {fragments.map((f, i) => (
          <div
            key={f.label}
            className="flex items-center gap-2.5 rounded-none border border-border bg-card px-3 py-2"
            style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (0.5 + i * 0.2)}deg)` }}
          >
            <f.icon className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[0.78125rem] font-semibold text-foreground">
                {f.label}
              </span>
              <span className="block truncate text-[0.625rem] text-muted-foreground">{f.meta}</span>
            </span>
            {f.badge ? (
              <span className="inline-flex min-w-5 shrink-0 items-center justify-center rounded-full bg-[oklch(0.58_0.21_25)] px-1.5 py-0.5 font-mono text-[0.625rem] font-bold tabular-nums leading-none text-white">
                {f.badge}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center py-1 sm:py-2" aria-hidden>
        <ArrowDown className="size-4 text-forest/40 sm:size-5" />
      </div>
      <div className="border border-forest bg-forest p-2.5 text-forest-foreground sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <MetaLabel tone="dark" dot>
            Consentio buying workspace
          </MetaLabel>
          <CategoryTag>Live data</CategoryTag>
        </div>
        <div className="mt-2 sm:mt-3">
          <OffersCard />
        </div>
      </div>
    </div>
  );
}
