import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/section";
import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { buildHead } from "@/lib/seo";
import { formCountries, siteConfig } from "@/data/site";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/book-demo")({
  head: ({ params }) => {
    const t = content;
    return buildHead({
      path: "/book-demo",
      title: t.demo.seo.title,
      description: t.demo.seo.description,
    });
  },
  component: DemoPage,
});

function DemoPage() {
  const t = content;
  const d = t.demo;
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      if (siteConfig.hubspotEndpoint) {
        const res = await fetch(siteConfig.hubspotEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(String(res.status));
      }
      track("form_completion", { form: "demo" });
      setSent(true);
    } catch {
      setError(d.errors.generic);
    }
  }

  return (
    <Section tone="sand">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr]">
        <div className="rounded-3xl border border-border bg-card p-8 lg:p-10">
          {sent ? (
            <div>
              <h1 className="text-3xl font-extrabold text-forest">{d.success.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{d.success.text}</p>
              <Button asChild className="mt-8">
                <SiteLink to="/">
                  {d.success.back}
                </SiteLink>
              </Button>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-extrabold leading-tight text-forest sm:text-4xl">{d.headline}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{d.text}</p>
              <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={onSubmit} onFocus={() => track("form_start", { form: "demo" })}>
                <Field name="firstName" label={d.fields.firstName} required />
                <Field name="lastName" label={d.fields.lastName} required />
                <Field name="email" label={d.fields.email} type="email" required />
                <Field name="phone" label={`${d.fields.phone} (${d.fields.optional})`} type="tel" />
                <Field name="company" label={d.fields.company} required />
                <SelectField
                  name="country"
                  label={d.fields.country}
                  placeholder={d.fields.select}
                  options={[...formCountries]}
                  required
                />
                <SelectField
                  name="companyType"
                  label={d.fields.companyType}
                  placeholder={d.fields.select}
                  options={[...d.companyTypes]}
                  required
                />
                <Field name="jobTitle" label={d.fields.jobTitle} required />
                <SelectField
                  name="employees"
                  label={d.fields.employees}
                  placeholder={d.fields.select}
                  options={[...d.employeeRanges]}
                />
                <SelectField
                  name="objective"
                  label={d.fields.objective}
                  placeholder={d.fields.select}
                  options={[...d.objectives]}
                  required
                />
                <label className="sm:col-span-2 grid gap-2 text-sm font-semibold text-forest">
                  {d.fields.message} ({d.fields.optional})
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="rounded-xl border border-input bg-background px-4 py-3 text-base font-normal text-foreground outline-none focus:border-forest"
                  />
                </label>
                <label className="sm:col-span-2 flex gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" name="consent" required className="mt-1 size-4 accent-[oklch(0.28_0.06_160)]" />
                  <span>{d.fields.consent}</span>
                </label>
                {error ? <p className="sm:col-span-2 text-sm font-semibold text-destructive">{error}</p> : null}
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" variant="lime">
                    {d.fields.submit}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>

        <aside className="h-fit rounded-3xl bg-forest p-8 text-forest-foreground">
          <h2 className="text-xl font-bold">{d.aside.title}</h2>
          <ol className="mt-6 grid gap-4">
            {d.aside.steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-[0.9375rem] text-onforest-muted">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-lime text-xs font-extrabold text-lime-foreground">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-forest">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="rounded-xl border border-input bg-background px-4 py-3 text-base font-normal text-foreground outline-none focus:border-forest"
      />
    </label>
  );
}

function SelectField({
  name,
  label,
  options,
  placeholder,
  required,
}: {
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-forest">
      {label}
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-xl border border-input bg-background px-4 py-3 text-base font-normal text-foreground outline-none focus:border-forest"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
