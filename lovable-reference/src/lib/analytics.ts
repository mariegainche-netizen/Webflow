// =============================================================================
// Analytics layer.
// Tag manager / GA / LinkedIn / HubSpot snippets are NOT injected yet — add the
// IDs in src/data/site.ts and load the scripts through the consent manager.
// Until then, every tracked event is pushed to window.dataLayer so that GTM can
// pick it up as soon as the container is installed.
// =============================================================================

export type TrackedEvent =
  | "book_demo_click"
  | "retailer_cta_click"
  | "supplier_cta_click"
  | "early_access_click"
  | "sign_in_click"
  | "klarys_login_click"
  | "form_start"
  | "form_completion"
  | "customer_story_view"
  | "module_card_click";

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Payload[];
  }
}

export function track(event: TrackedEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

/** UTM + page source values captured for the demo form hidden fields. */
export function getCampaignContext() {
  if (typeof window === "undefined") {
    return { pageSource: "", language: "en", utmSource: "", utmMedium: "", utmCampaign: "", utmContent: "" };
  }
  const p = new URLSearchParams(window.location.search);
  return {
    pageSource: window.location.pathname,
    language: "en",
    utmSource: p.get("utm_source") ?? "",
    utmMedium: p.get("utm_medium") ?? "",
    utmCampaign: p.get("utm_campaign") ?? "",
    utmContent: p.get("utm_content") ?? "",
  };
}
