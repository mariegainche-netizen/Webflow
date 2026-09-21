// =============================================================================
// CONSENTIO V2 — Interactive forecast chart card (single product line).
// All figures are ILLUSTRATIVE INTERFACE SAMPLE DATA, never customer results.
// =============================================================================
import { useRef, useState } from "react";
import { UiPanel } from "@/components/product-ui";
import { cn } from "@/lib/utils";

const weeks = ["W22", "W23", "W24", "W25", "W26", "W27", "W28", "W29", "W30", "W31", "W32", "W33"];

/** Index of the last past week — "Today" sits just after it. */
const TODAY_INDEX = 5;

/** Actual sales only exist up to today. */
const actual: (number | null)[] = [38, 44, 41, 52, 58, 55, null, null, null, null, null, null];
const forecast = [40, 43, 45, 50, 55, 58, 62, 68, 70, 74, 79, 83];
const lastYear = [36, 39, 42, 44, 51, 53, 57, 61, 64, 66, 71, 74];

const W = 320;
const H = 132;
const PAD_Y = 12;

const allValues = [...actual.filter((v): v is number => v !== null), ...forecast, ...lastYear];
const MIN = Math.min(...allValues) - 4;
const MAX = Math.max(...allValues) + 4;

function x(i: number) {
  return (i * W) / (weeks.length - 1);
}
function y(v: number) {
  return PAD_Y + (1 - (v - MIN) / (MAX - MIN)) * (H - PAD_Y * 2);
}
function path(values: (number | null)[], from = 0, to = values.length - 1) {
  const pts: string[] = [];
  for (let i = from; i <= to; i++) {
    const v = values[i];
    if (v === null || v === undefined) continue;
    pts.push(`${pts.length === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`);
  }
  return pts.join(" ");
}

const TODAY_X = (x(TODAY_INDEX) + x(TODAY_INDEX + 1)) / 2;

/** Minimal, hoverable single-product chart: actual sales, forecast and last year. */
export function ForecastChartCard({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const index = active ?? TODAY_INDEX;
  const isPast = index <= TODAY_INDEX;

  function pointerIndex(clientX: number) {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return null;
    const ratio = (clientX - rect.left) / rect.width;
    return Math.max(0, Math.min(weeks.length - 1, Math.round(ratio * (weeks.length - 1))));
  }

  const actualValue = actual[index];
  const forecastValue = forecast[index] ?? 0;
  const lastYearValue = lastYear[index] ?? 0;
  const delta = isPast && actualValue != null ? actualValue - forecastValue : forecastValue - lastYearValue;
  const deltaLabel = isPast && actualValue != null ? "vs. forecast" : "vs. last year";

  return (
    <UiPanel label="Demand forecast" meta="Vine tomato · Cat. I · 5 kg case" className={className}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-forest tabular-nums sm:text-2xl">{weeks[index]}</p>
          <p className="text-xs text-muted-foreground">
            {isPast ? "Past week" : "Forward week"} · tonnes / week
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 text-[0.6875rem] font-semibold">
          <span className="flex items-center gap-1.5 text-forest">
            <span aria-hidden className="h-0.5 w-4 rounded bg-forest" /> Actual
            <span className="tabular-nums">{actualValue != null ? `${actualValue} t` : "—"}</span>
          </span>
          <span className="flex items-center gap-1.5 text-forest/70">
            <span aria-hidden className="h-0.5 w-4 rounded bg-lime" /> Forecast
            <span className="tabular-nums">{forecastValue} t</span>
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span aria-hidden className="h-0.5 w-4 rounded bg-muted-foreground/40" /> Last year
            <span className="tabular-nums">{lastYearValue} t</span>
          </span>
          <span className={cn("tabular-nums", delta >= 0 ? "text-forest/70" : "text-amber-accent")}>
            {delta >= 0 ? "+" : ""}
            {delta} t {deltaLabel}
          </span>
        </div>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="mt-2.5 h-[7.5rem] w-full touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-lime sm:mt-4 sm:h-44"
        role="img"
        aria-label="Weekly volume for one product: actual sales up to today, forecast and last year, weeks 22 to 33. Use arrow keys to inspect each week."
        tabIndex={0}
        onPointerMove={(e) => setActive(pointerIndex(e.clientX))}
        onPointerDown={(e) => setActive(pointerIndex(e.clientX))}
        onPointerLeave={() => setActive(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            setActive((prev) => {
              const base = prev ?? TODAY_INDEX;
              return Math.max(0, Math.min(weeks.length - 1, base + (e.key === "ArrowRight" ? 1 : -1)));
            });
          }
        }}
        onBlur={() => setActive(null)}
      >
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        ))}

        {/* Forward area shading */}
        <rect x={TODAY_X} y={0} width={W - TODAY_X} height={H} className="fill-forest/[0.03]" />

        {/* Last year — secondary */}
        <path d={path(lastYear)} className="fill-none stroke-muted-foreground/35" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />

        {/* Forecast — solid on the past, dashed forward */}
        <path d={path(forecast, 0, TODAY_INDEX)} className="fill-none stroke-lime" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path
          d={path(forecast, TODAY_INDEX, weeks.length - 1)}
          className="fill-none stroke-lime"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
        />

        {/* Actual sales — past only */}
        <path d={path(actual, 0, TODAY_INDEX)} className="fill-none stroke-forest" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <circle cx={x(TODAY_INDEX)} cy={y(actual[TODAY_INDEX] as number)} r="3" className="fill-forest" />

        {/* Today marker */}
        <line x1={TODAY_X} x2={TODAY_X} y1={0} y2={H} className="stroke-forest/50" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <text x={TODAY_X + 4} y={11} className="fill-forest/70 text-[9px] font-semibold uppercase">
          Today
        </text>

        {/* Hover guide */}
        <line
          x1={x(index)}
          x2={x(index)}
          y1={0}
          y2={H}
          className="stroke-forest/30"
          strokeWidth="1"
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx={x(index)} cy={y(lastYearValue)} r="3" className="fill-muted-foreground/50" />
        <circle cx={x(index)} cy={y(forecastValue)} r="3.5" className="fill-lime" />
        {actualValue != null && <circle cx={x(index)} cy={y(actualValue)} r="3.5" className="fill-forest" />}
      </svg>

      <div className="mt-2 grid grid-cols-12 font-mono text-[0.5rem] uppercase tracking-[0.06em] text-muted-foreground">
        {weeks.map((wk, i) => (
          <span
            key={wk}
            className={cn(
              "text-center",
              i % 2 === 1 && "hidden sm:inline",
              i === index && "font-bold text-forest",
            )}
          >
            {wk}
          </span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-2 sm:mt-3 sm:pt-3">
        {[
          ["Product", "1 SKU"],
          ["Sites", "18"],
          ["Horizon", "12 wks"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-[0.6875rem] uppercase tracking-wider text-muted-foreground">{k}</p>
            <p className="text-sm font-bold tabular-nums text-forest">{v}</p>
          </div>
        ))}
      </div>

      {/* Accessible data table. The sr-only utility must sit on a wrapper: applied
          directly to a <table> the overflow clip is ignored and the table widens the page. */}
      <div className="sr-only">
        <table>
          <caption>Illustrative weekly volume for one product: actual sales, forecast and last year</caption>
          <thead>
            <tr>
              <th scope="col">Week</th>
              <th scope="col">Actual sales (t)</th>
              <th scope="col">Forecast (t)</th>
              <th scope="col">Last year (t)</th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((wk, i) => (
              <tr key={wk}>
                <th scope="row">{wk}</th>
                <td>{actual[i] ?? "—"}</td>
                <td>{forecast[i]}</td>
                <td>{lastYear[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UiPanel>
  );
}
