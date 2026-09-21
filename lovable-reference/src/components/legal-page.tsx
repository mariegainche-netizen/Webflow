import { Section } from "@/components/section";
import { content } from "@/lib/content";

/**
 * Shared renderer for the three legal templates.
 * LEGAL APPROVAL REQUIRED before these texts are published.
 */
export function LegalPage({ doc }: { doc: "privacy" | "notice" | "cookies" }) {
  const doc_ = content.legal[doc];

  return (
    <Section>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold leading-tight text-forest">{doc_.title}</h1>
        <p className="mt-6 rounded-xl border border-dashed border-border bg-sand px-5 py-4 text-[0.9375rem] text-muted-foreground">
          {doc_.intro}
        </p>
        <div className="mt-10 grid gap-8">
          {doc_.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-forest">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
