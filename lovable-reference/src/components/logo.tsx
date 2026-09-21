import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/consentio-logo.png.asset.json";

/** Consentio brand logo (horizontal, full color). */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center"
      aria-label="Consentio — home"
    >
      <img
        src={logoAsset.url}
        alt="Consentio"
        width={1559}
        height={289}
        className={cn(
          "h-5 w-auto transition-opacity group-hover:opacity-80 sm:h-[22px]",
          tone === "light" && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
