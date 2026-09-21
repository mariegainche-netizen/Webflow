// =============================================================================
// CONSENTIO — Central editable site data.
// Metrics, logos, modules, availability, integrations, countries, case studies.
// EDIT HERE, not in components. Every figure must be validated before launch.
// =============================================================================

/** ---------------------------------------------------------------- METRICS */
// APPROVAL REQUIRED: validate every figure with the commercial team.
export const metrics = {
  activeSuppliers: { value: 3200, suffix: "+", labelKey: "activeSuppliers" },
  expertiseYears: { value: 10, suffix: "", labelKey: "expertiseYears" }
} as const;

export const proofPoints: Record<string, string[]> = {
  en: [
    "3,200+ suppliers using Consentio",
    "10 years of combined fresh food and technology expertise",
    "Fresh produce, seafood, meat and other fresh categories",
    "Active across France, Spain and Switzerland"
  ]

};

/** ------------------------------------------------------------ CUSTOMER LOGOS */
// APPROVED FOR PUBLIC COMMUNICATION ONLY. Never add a logo without approval.
// `logo: null` renders a clearly identified wordmark placeholder until the
// approved logo asset is supplied. Never recreate a brand logo by hand.
import carrefourLogo from "@/assets/logos/carrefour.png";
import intermarcheLogo from "@/assets/logos/intermarche.png";
import lagadecLogo from "@/assets/logos/lagadec-primeurs.png";
import biocoopAsset from "@/assets/logos/biocoop.png.asset.json";
import bellAsset from "@/assets/logos/bell-food-group.png.asset.json";
import mytilimerAsset from "@/assets/logos/mytilimer.jpg.asset.json";
import ultraMarineAsset from "@/assets/logos/ultra-marine.jpg.asset.json";
import monoprixAsset from "@/assets/logos/monoprix.png.asset.json";
import manorAsset from "@/assets/logos/manor-fresh.png.asset.json";
import reynaudAsset from "@/assets/logos/reynaud.png.asset.json";

export type CustomerLogo = { name: string; logo: string | null };

export const customerLogos: CustomerLogo[] = [
  { name: "Carrefour", logo: carrefourLogo },
  { name: "Intermarché", logo: intermarcheLogo },
  { name: "Biocoop", logo: biocoopAsset.url },
  { name: "Monoprix", logo: monoprixAsset.url },
  { name: "Manor Fresh", logo: manorAsset.url },
  { name: "Bell Food Group", logo: bellAsset.url },
  { name: "Maison Reynaud", logo: reynaudAsset.url },
  { name: "Mytilimer", logo: mytilimerAsset.url },
  { name: "Ultra Marine", logo: ultraMarineAsset.url },
  { name: "Lagadec", logo: lagadecLogo },
];

/** Supplier-side brands shown on the For suppliers page. */
import rougelineAsset from "@/assets/logos/rougeline.jpg.asset.json";
import blueWhaleAsset from "@/assets/logos/blue-whale.png.asset.json";
import everestAsset from "@/assets/logos/everest-fresh.png.asset.json";
import clasolAsset from "@/assets/logos/clasol.png.asset.json";
import kultiveAsset from "@/assets/logos/kultive.png.asset.json";
import agroponienteLogoAsset from "@/assets/logos/agroponiente-logo.png.asset.json";
import coastCitrusAsset from "@/assets/logos/coast-citrus.png.asset.json";
import primealeAsset from "@/assets/logos/primeale.png.asset.json";
import saveolAsset from "@/assets/logos/saveol.png.asset.json";
import solarennAsset from "@/assets/logos/solarenn.png.asset.json";

export const supplierLogos: CustomerLogo[] = [
  { name: "Les Paysans de Rougeline", logo: rougelineAsset.url },
  { name: "Blue Whale", logo: blueWhaleAsset.url },
  { name: "Everest Fresh", logo: everestAsset.url },
  { name: "Grupo Clasol", logo: clasolAsset.url },
  { name: "Kultive", logo: kultiveAsset.url },
  { name: "Grupo Agroponiente", logo: agroponienteLogoAsset.url },
  { name: "Coast Citrus", logo: coastCitrusAsset.url },
  { name: "Priméale", logo: primealeAsset.url },
  { name: "Savéol", logo: saveolAsset.url },
  { name: "Solarenn", logo: solarennAsset.url },
];


/** -------------------------------------------------------------- INTEGRATIONS */
import sapAsset from "@/assets/erp/saperp.png.asset.json";
import microsoftAsset from "@/assets/erp/microsoftlogo.png.asset.json";
import dynamicsAsset from "@/assets/erp/microdsoftdynamics.png.asset.json";
import oracleAsset from "@/assets/erp/oracleerp.png.asset.json";
import inforAsset from "@/assets/erp/inforerp.png.asset.json";
import cegidAsset from "@/assets/erp/cegidlogo.png.asset.json";
import generixAsset from "@/assets/erp/generixlog.png.asset.json";
import stepcomAsset from "@/assets/erp/stepcomdescarte.png.asset.json";
// Approved integration logos + placeholder wordmarks (to be replaced).
export const integrations = [
  { name: "SAP", logo: sapAsset.url },
  { name: "Microsoft", logo: microsoftAsset.url },
  { name: "Microsoft Dynamics", logo: dynamicsAsset.url },
  { name: "Oracle", logo: oracleAsset.url },
  { name: "Infor", logo: inforAsset.url },
  { name: "Cegid", logo: cegidAsset.url },
  { name: "Generix", logo: generixAsset.url },
  { name: "Descartes StepCom", logo: stepcomAsset.url, onDark: true },
] as const;

/** ------------------------------------------------------------------ COUNTRIES */
// DEMO CONTENT — city and office role are illustrative until validated.
export const countries = [
  { code: "FR", name: { en: "France" }, city: "Paris", role: { en: "Retail partnerships and customer success" } },
  { code: "ES", name: { en: "Spain" }, city: "Barcelona", role: { en: "Product, engineering and supplier onboarding" } },
  { code: "CH", name: { en: "Switzerland" }, city: "Zurich", role: { en: "Fresh food expertise and enterprise accounts" } }
];

/** Full country list for the demo form (short list + open field). */
export const formCountries = [
  "France",
  "Spain",
  "Switzerland",
  "Belgium",
  "Germany",
  "Italy",
  "Netherlands",
  "Portugal",
  "United Kingdom",
  "Other"
];

/** ------------------------------------------------- SUPPLIER TESTIMONIALS
 * APPROVAL REQUIRED: only add entries validated by the customer and the
 * commercial team. While this list is empty, no testimonial is displayed.
 */
export type Testimonial = {
  author: string;
  role: string;
  company: string;
  text: Record<string, string>;
};

// DEMO CONTENT — replace with approved copy before publication.
export const supplierTestimonials: Testimonial[] = [
  {
    author: "Camille Ferrand",
    role: "Sales director",
    company: "Fresh produce grower-shipper",
    text: {
      en: "We stopped rebuilding the same price list in five different formats. Our customers see availability the day we publish it."
    }
  },
  {
    author: "Marc Oberli",
    role: "Head of customer service",
    company: "Meat and poultry processor",
    text: {
      en: "Orders and amendments land in one place and go straight to the ERP, whether customers use Consentio to order or not. The team spends its time on customers, not on re-keying."
    }
  },
  {
    author: "Elena Ruiz",
    role: "Commercial operations manager",
    company: "Seafood supplier",
    text: {
      en: "Answering a retailer consultation used to take half a day. Now we submit an offer in a few minutes and track what was confirmed. Production teams receive the info faster and work more efficiently."
    }
  }
];

/** ------------------------------------------------------------ CASE STUDIES */
// APPROVAL REQUIRED: replace summaries with final approved case-study copy
// before publication. Never add metrics or quotes that are not approved.
export type CaseStudy = {
  slug: string;
  company: string;
  tags: string[];
  industry: Record<string, string>;
  title: Record<string, string>;
  summary: Record<string, string>;
  context: Record<string, string>;
  challenge: Record<string, string>;
  workflow: Record<string, string>;
  modules: string[];
  approach: Record<string, string>;
  /** Leave empty when no approved metric exists — no metric is displayed. */
  results: Record<string, string[]>;
  /** Leave null until an approved customer quote is available. */
  quote: { text: Record<string, string>; author: string } | null;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "manor",
    company: "Manor",
    tags: ["Retailers", "Fresh produce", "Procurement"],
    industry: { en: "Food retail"  },
    title: {
      en: "Digitalizing fresh food purchasing and supplier collaboration"

    },
    summary: {
      en: "A centralized platform to simplify exchanges between buyers and suppliers and improve control across purchasing operations."

    },
    context: {
      en: "Central buying operations across fresh categories."

    },
    challenge: {
      en: "Exchanges between buyers and suppliers spread across disconnected channels."

    },
    workflow: {
      en: "Offer collection, supplier collaboration and order follow-up in one workspace."

    },
    modules: ["Offers and allocation", "Orders and collaboration"],
    approach: {
      en: "Progressive rollout by category with supplier onboarding support."

    },
    // DEMO CONTENT — illustrative figures, not approved customer metrics.
    results: {
      en: ["70% less email back-and-forth", "3x faster offer collection", "180+ suppliers onboarded"]
    },
    quote: {
      text: {
        en: "Buyers and suppliers finally work on the same information, in the same place, at the same time."
      },
      author: "Head of fresh purchasing, Manor (demo quote)"
    }
  },
  {
    slug: "bell-food-group",
    company: "Bell Food Group",
    tags: ["Suppliers", "Meat and poultry", "Integrations"],
    industry: { en: "Fresh food manufacturing"  },
    title: {
      en: "Connecting fresh food operations with enterprise systems"

    },
    summary: {
      en: "Structured workflows, automated notifications and digital processes designed to complement existing ERP environments."

    },
    context: {
      en: "Large-scale fresh food operations with established enterprise systems."

    },
    challenge: {
      en: "Operational exchanges to be digitalized without replacing core systems."

    },
    workflow: {
      en: "Structured order and document flows synchronized with enterprise systems."

    },
    modules: ["Orders and collaboration", "Integrations"],
    approach: {
      en: "Integration-first implementation with staged workflow activation."

    },
    // DEMO CONTENT — illustrative figures, not approved customer metrics.
    results: {
      en: ["95% of orders sent to ERP automatically", "Zero manual re-keying", "2 weeks to first live category"]
    },
    quote: {
      text: {
        en: "We digitalized the exchanges around our ERP without touching the ERP itself."
      },
      author: "IT programme manager, Bell Food Group (demo quote)"
    }
  },
  {
    slug: "ultra-marine",
    company: "Ultra Marine",
    tags: ["Suppliers", "Seafood", "Orders"],
    industry: { en: "Seafood"  },
    title: {
      en: "Aggregating offers and automating operational flows"

    },
    summary: {
      en: "Real-time supplier offer consolidation combined with the automation of logistics and financial workflows."

    },
    context: {
      en: "Seafood sourcing with fast-moving availability and prices."

    },
    challenge: {
      en: "Offers and operational documents handled across several channels."

    },
    workflow: {
      en: "Offer aggregation feeding automated order, delivery and invoicing flows."

    },
    modules: ["Offers and allocation", "Orders and collaboration", "Data and intelligence"],
    approach: {
      en: "Pilot on a focused product scope, then extension to further flows."

    },
    // DEMO CONTENT — illustrative figures, not approved customer metrics.
    results: {
      en: ["Offers consolidated in real time", "60% faster order-to-invoice cycle", "4 delivery points synchronized"]
    },
    quote: {
      text: {
        en: "Availability changes several times a day. Our customers now see the real picture instead of yesterday's list."
      },
      author: "Commercial director, Ultra Marine (demo quote)"
    }
  }
];

/** ---------------------------------------------------------------- RESOURCES */
// CMS-ready records. Placeholders only — do not invent articles or reports.
export type ArticleRecord = {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  category: string;
  language: string;
  date: string | null;
  author: string | null;
  image: string | null;
  seo: { title: string | null; description: string | null };
  oldUrl: string | null;
  newUrl: string | null;
  placeholder: boolean;
  readingTime: string;
  featured: boolean;
};

// DEMO CONTENT — illustrative editorial articles used to preview the layout.
// Replace with approved, migrated CMS content before publication.
export const articles: ArticleRecord[] = [
  {
    id: "demand-forecasting-fresh",
    title: { en: "Why fresh food demand planning breaks the classic forecasting playbook" },
    description: {
      en: "Shelf life, weather and promotions make fresh categories a moving target. How buying teams build a forecast that suppliers can actually act on."
    },
    category: "Forecasting",
    language: "en",
    date: "2026-06-18",
    author: "Consentio editorial team",
    readingTime: "7 min read",
    featured: true,
    image: null,
    seo: { title: null, description: null },
    oldUrl: null,
    newUrl: null,
    placeholder: false
  },
  {
    id: "supplier-consultations",
    title: { en: "Running weekly supplier consultations without a single spreadsheet" },
    description: {
      en: "A structured consultation gives every supplier the same brief, the same deadline and the same response format — and gives buyers comparable offers."
    },
    category: "Consultations and offers",
    language: "en",
    date: "2026-05-27",
    author: "Consentio editorial team",
    readingTime: "6 min read",
    featured: false,
    image: null,
    seo: { title: null, description: null },
    oldUrl: null,
    newUrl: null,
    placeholder: false
  },
  {
    id: "volume-allocation",
    title: { en: "Allocating volumes across suppliers: four rules that hold up in season" },
    description: {
      en: "Price is never the only criterion. Service level, origin and continuity of supply all belong in the allocation decision — and in the audit trail."
    },
    category: "Fresh food procurement",
    language: "en",
    date: "2026-05-06",
    author: "Consentio editorial team",
    readingTime: "5 min read",
    featured: false,
    image: null,
    seo: { title: null, description: null },
    oldUrl: null,
    newUrl: null,
    placeholder: false
  },
  {
    id: "order-automation",
    title: { en: "From confirmed order to invoice with zero manual entry" },
    description: {
      en: "Where re-keying actually happens in a fresh food order cycle, and which steps can be automated first for a visible result."
    },
    category: "Order automation",
    language: "en",
    date: "2026-04-14",
    author: "Consentio editorial team",
    readingTime: "8 min read",
    featured: false,
    image: null,
    seo: { title: null, description: null },
    oldUrl: null,
    newUrl: null,
    placeholder: false
  },
  {
    id: "erp-integration",
    title: { en: "Connecting a collaborative layer to SAP without an ERP project" },
    description: {
      en: "Your ERP stays the system of record. The collaboration around it — offers, amendments, confirmations — is what needs a shared workspace."
    },
    category: "Digital operations",
    language: "en",
    date: "2026-03-25",
    author: "Consentio editorial team",
    readingTime: "6 min read",
    featured: false,
    image: null,
    seo: { title: null, description: null },
    oldUrl: null,
    newUrl: null,
    placeholder: false
  },
  {
    id: "supplier-onboarding",
    title: { en: "Onboarding 100 suppliers in a season: what works in practice" },
    description: {
      en: "Supplier adoption decides whether a procurement platform delivers. Sequencing, support and the first workflow to activate."
    },
    category: "Supplier collaboration",
    language: "en",
    date: "2026-02-11",
    author: "Consentio editorial team",
    readingTime: "5 min read",
    featured: false,
    image: null,
    seo: { title: null, description: null },
    oldUrl: null,
    newUrl: null,
    placeholder: false
  }
];

/** ------------------------------------------------------------------ CONFIG */
export const siteConfig = {
  name: "Consentio",
  /** External application sign-in. Update with the production URL. */
  signInUrl: "https://app.consentio.co",
  /** CONSENTIO_LOGIN_URL — existing Consentio platform login. */
  consentioLoginUrl: "https://app.consentio.co",
  /** KLARYS_LOGIN_URL — configuration placeholder, set the real Klarys platform URL here. */
  klarysLoginUrl: "",
  contactEmail: "hello@consentio.co",
  /** HubSpot form endpoint. Leave empty to keep the prototype front-end only. */
  hubspotEndpoint: "",
  analytics: {
    gtmId: "", // GTM-XXXXXXX
    gaId: "", // G-XXXXXXXXXX
    linkedInPartnerId: "",
    hubspotPortalId: ""
  }
};
