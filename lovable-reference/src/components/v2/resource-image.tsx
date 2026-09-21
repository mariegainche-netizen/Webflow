import { useState } from "react";
import { cn } from "@/lib/utils";
import fallbackImage from "@/assets/v2/crate-produce.jpg";

/**
 * Editorial image window for V3 resources. Accepts remote legacy CDN URLs and
 * falls back to a project editorial photo so a dead asset never breaks layout.
 */
export function ResourceImage({
  src,
  alt,
  ratio = "aspect-[16/9]",
  className,
  eager = false,
  overlay,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  eager?: boolean;
  overlay?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-sand", ratio, className)}>
      <img
        src={failed ? fallbackImage : src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        className="size-full object-cover"
      />
      {overlay}
    </div>
  );
}
