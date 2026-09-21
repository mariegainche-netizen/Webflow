import { en, type SiteContent } from "@/content/en";

/** The site is English-only. All copy comes from src/content/en.ts. */
export const content: SiteContent = en;

/** Reads the English value out of a legacy translated record. */
export function pick<T>(record: Record<string, T>): T {
  return record.en;
}
