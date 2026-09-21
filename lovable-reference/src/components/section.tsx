import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

type Tone = "light" | "sand" | "forest" | "lime";

const toneClasses: Record<Tone, string> = {
  light: "bg-background text-foreground",
  sand: "bg-sand text-foreground",
  forest: "bg-forest text-forest-foreground",
  lime: "bg-lime text-lime-foreground",
};

export function Section({
  children,
  tone = "light",
  className,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn(toneClasses[tone], "section-y scroll-mt-24", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p className={cn("eyebrow", tone === "forest" ? "text-lime" : "text-muted-foreground")}>
      <span
        aria-hidden
        className={cn("h-px w-6", tone === "forest" ? "bg-lime" : "bg-lime")}
      />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  headline,
  text,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  headline: string;
  text?: string;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "display-2 mt-4",
          tone === "forest" ? "text-forest-foreground" : "text-forest",
        )}
      >
        {headline}
      </h2>
      {text ? (
        <p
          className={cn(
            "lede mt-5",
            tone === "forest" ? "text-onforest-muted" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}

    </Reveal>
  );
}
