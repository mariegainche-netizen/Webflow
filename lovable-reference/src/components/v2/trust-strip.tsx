import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { customerLogos } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * V2 homepage trust strip — a compact, standalone white band that sits between
 * the dark hero and the pale-green credibility section. Social proof only.
 * Mobile keeps everything on one row through a 3-per-view swipe carousel.
 */
export function TrustStripV2({ label, className }: { label: string; className?: string }) {
  return (
    <section className={cn("border-b border-border bg-background", className)}>
      <div className="container-page py-5 lg:py-8">
        <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </p>

        {/* Desktop / tablet: one clean centered row */}
        <ul className="mt-6 hidden flex-wrap items-center justify-center gap-x-9 gap-y-5 sm:flex lg:gap-x-11">
          {customerLogos.map((c) => (
            <li key={c.name} className="flex h-9 items-center lg:h-10">
              <TrustLogo name={c.name} logo={c.logo} />
            </li>
          ))}
        </ul>

        {/* Mobile: single-row carousel, 3 logos per view */}
        <MobileLogoCarousel />
      </div>
    </section>
  );
}

const PER_VIEW = 3;

function MobileLogoCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(customerLogos.length / PER_VIEW);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const pageWidth = el.clientWidth;
    if (pageWidth <= 0) return;
    setPage(Math.min(pages - 1, Math.round(el.scrollLeft / pageWidth)));
  }, [pages]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const goTo = (p: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: p * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="mt-4 sm:hidden">
      <div className="flex items-center gap-1">
        <CarouselButton
          label="Previous logos"
          disabled={page === 0}
          onClick={() => goTo(Math.max(0, page - 1))}
        >
          <ChevronLeft className="size-4" />
        </CarouselButton>

        <ul
          ref={trackRef}
          className="flex flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {customerLogos.map((c) => (
            <li
              key={c.name}
              className="flex h-8 shrink-0 basis-[calc((100%-1.5rem)/3)] snap-start items-center justify-center"
            >
              <TrustLogo name={c.name} logo={c.logo} mobile />
            </li>
          ))}
        </ul>

        <CarouselButton
          label="Next logos"
          disabled={page >= pages - 1}
          onClick={() => goTo(Math.min(pages - 1, page + 1))}
        >
          <ChevronRight className="size-4" />
        </CarouselButton>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to logo set ${i + 1}`}
            aria-current={i === page ? "true" : undefined}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === page ? "w-4 bg-lime" : "w-1.5 bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function CarouselButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-opacity",
        disabled ? "opacity-25" : "opacity-70",
      )}
    >
      {children}
    </button>
  );
}

function TrustLogo({
  name,
  logo,
  mobile = false,
}: {
  name: string;
  logo: string | null;
  mobile?: boolean;
}) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        className={cn(
          "w-auto object-contain opacity-60 grayscale transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-100 hover:grayscale-0",
          mobile ? "max-h-8 max-w-full" : "h-full max-h-8 max-w-[7.5rem] lg:max-h-10",
        )}
      />
    );
  }
  return (
    // LOGO PLACEHOLDER: awaiting the approved brand asset.
    <span
      data-logo="placeholder"
      title={`${name} — logo placeholder`}
      className={cn(
        "font-extrabold tracking-tight text-forest/60 transition-all duration-300 ease-in-out hover:scale-105 hover:text-forest",
        mobile ? "max-w-full truncate text-center text-[0.75rem] leading-tight" : "text-base",
      )}
    >
      {name}
    </span>
  );
}
