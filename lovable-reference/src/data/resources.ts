// =============================================================================
// CONSENTIO — V3 resource library (migrated from the Klarys EN resources page).
//
// SOURCE OF TRUTH
// https://www.klarys.io/en/resources — every visible card of that page, in page
// order, minus four excluded items (SAP webinar, Procsea becomes Klarys, CO2
// compensated company, Foodtech 500). Titles and card summaries are the public
// ones from that page; detail bodies are condensed rewrites, not copies.
//
// WEBFLOW MAPPING
// This file is shaped as ONE Webflow CMS Collection ("Resources") rendered by
// ONE Collection Template page (/resources/{slug}).
//   - Plain fields    -> slug, title, excerpt, publicationDate, readingTime,
//                        author, image, imageAlt, legacyUrl, mediaUrl,
//                        ctaLabel, ctaUrl, seoTitle, seoDescription
//   - Option fields   -> type, topic, legacyBrand
//   - Switch fields   -> featured, archived
//   - Rich text       -> body (heading / paragraphs / bullets / pullout)
//   - Conditional     -> customerStory.* and the media block are only shown
//                        when set.
// V1 and V2 keep using ArticleRecord in src/data/site.ts — untouched.
// =============================================================================

export type ResourceType = "Customer Story" | "Insight" | "Guide" | "Webinar" | "Podcast";

export type ResourceTopic =
  | "Procurement & Operations"
  | "Data & Integration"
  | "Market & Supply Chain";

export type ResourceAudience = "Retailer" | "Supplier";

export type ResourceBodySection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  pullout?: string;
  /** Optional inline illustration (absolute URL). */
  image?: string;
  imageAlt?: string;
};

export type ResourceRecord = {
  slug: string;
  title: string;
  excerpt: string;
  type: ResourceType;
  topic: ResourceTopic;
  publicationDate: string | null;
  /** Overrides the auto-formatted date (used by the French customer stories). */
  dateLabel?: string;
  readingTime?: string;
  author?: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  legacyBrand: "Consentio" | "Klarys";
  legacyUrl?: string;
  archived: boolean;
  body: ResourceBodySection[];
  customerStory?: {
    client: string;
    /** Which side of the market the story speaks to (customer stories only). */
    audience?: ResourceAudience;
    country?: string;
    segment?: string;
    modules?: string[];
    metrics?: { value: string; label: string }[];
    quote?: { text: string; author: string };
    /** Customer logo (absolute URL). */
    logo?: string;
    /** Spokesperson portrait (absolute URL). */
    portrait?: string;
    /** Spokesperson name + role. */
    spokesperson?: string;
    /** Key benefits shown as a check list. */
    benefits?: string[];
    /** Closing CTA headline for the story page. */
    ctaHeadline?: string;
  };
  mediaUrl?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  seo: { title: string; description: string };
};


/** Original Klarys Webflow CDN assets (card / hero images). */
const CDN = "https://cdn.prod.website-files.com/6453d1b183ca1984831e3a77/";
const ART = "https://www.klarys.io/en/articles/";
/** Original Consentio Webflow CDN assets (customer-story hero images). */
const CO = "https://cdn.prod.website-files.com/5eaacd304c1f3035efdee766/";
import coastLogo from "@/assets/logos/coast-tropical.png";
import lagadecLogo from "@/assets/logos/lagadec-primeurs.png";
import agroponienteWarehouse from "@/assets/agroponiente-warehouse.jpg.asset.json";
import agroponienteLogo from "@/assets/logos/agroponiente.png.asset.json";
import lagadecFieldImage from "@/assets/lagadec-cauliflower.jpg.asset.json";

export const resources: ResourceRecord[] = [
  {
    slug: "common-standard-fresh-food",
    title: "Towards a common standard for fresh food",
    excerpt:
      "Like many other sectors, the agri-food industry has been engaged for several years in a gradual process of standardising its data. However, this movement is not the same everywhere and remains fragmented. Yet the industry - and consumers - stand to gain a great deal from the adoption of a common standard.",
    type: "Insight",
    topic: "Data & Integration",
    publicationDate: "2024-08-01",
    readingTime: "6 min read",
    author: "Klarys",
    image: `${CDN}66ab4c8b064b11092b1de168_Capture.PNG`,
    imageAlt: "Common product reference framework for fresh food",
    featured: true,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}common-standard-fresh-food`,
    archived: false,
    body: [
      {
        heading: "Why standardisation matters",
        paragraphs: [
          "Data standardisation answers two needs at once: reliable, structured information to steer the business, and product traceability as required by an expanding body of regulation. The European Supply Chain Act will make that second requirement considerably stronger.",
          "Fresh food remains behind other categories. Product descriptions, units, origins and quality grades still travel between partners in whatever shape each company happens to use.",
        ],
      },
      {
        heading: "What a shared reference framework changes",
        bullets: [
          "One description of a product, understood identically by every partner",
          "Traceability that survives each handover instead of being rebuilt",
          "Less manual re-keying and fewer disputes on invoices and deliveries",
          "Consumer-facing transparency built from data that already exists",
        ],
      },
      {
        heading: "A fragmented movement",
        paragraphs: [
          "Standardisation is progressing unevenly: large retailers and processors are far ahead of growers, wholesalers and smaller intermediaries. The value of a common standard only materialises once the smaller links can adopt it without a heavy IT project.",
        ],
        pullout: "A standard is only worth what the smallest partner in the chain can use.",
      },
    ],
    seo: {
      title: "Towards a common standard for fresh food | Consentio",
      description:
        "Why fresh food data standardisation is still fragmented, and what the industry and consumers gain from adopting a common product reference framework.",
    },
  },
  {
    slug: "csr-imperatives-fresh-food",
    title:
      "Carbon footprint, food waste, traceability... the CSR imperatives of the fresh food industry",
    excerpt:
      "In a world in the midst of a food transition, fresh food is highly prized for its quality, diversity and contribution to a healthy lifestyle. But behind these assets lie major challenges in terms of corporate social responsibility (CSR).",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2023-11-09",
    readingTime: "7 min read",
    author: "Klarys",
    image: `${CDN}654ce2d5f6887312ebbeb18c_dan-meyers-0AgtPoAARtE-unsplash.jpg`,
    imageAlt: "Fields and forests seen from above",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}carbon-footprint-food-waste-traceability-csr-imperatives-of-fresh-food-industry`,
    archived: false,
    body: [
      {
        heading: "The carbon question",
        paragraphs: [
          "Measuring the footprint of fresh food means accounting for production, processing, packaging, transport, storage and distribution. Meat is the usual target because of methane, but imported fruit and vegetables weigh heavily too: a large share of what is consumed in France travels from abroad.",
        ],
      },
      {
        heading: "Waste, remuneration, welfare",
        bullets: [
          "Food waste concentrated at the ends of the chain, where shelf life runs out",
          "Producer remuneration under pressure from long, opaque intermediation",
          "Animal welfare now a purchasing criterion, not only an ethical debate",
          "Traceability expected by consumers and increasingly required by law",
        ],
      },
      {
        heading: "CSR as an operating constraint",
        paragraphs: [
          "These commitments only become credible when they are measurable. That means capturing origin, volumes and losses in the ordinary flow of transactions rather than reconstructing them once a year for a report.",
        ],
        pullout: "A CSR claim is only as solid as the transaction data behind it.",
      },
    ],
    seo: {
      title: "The CSR imperatives of the fresh food industry | Consentio",
      description:
        "Carbon footprint, food waste, producer remuneration and traceability: the corporate social responsibility challenges facing the fresh food sector.",
    },
  },
  {
    slug: "fresh-food-supply-chain-challenges",
    title: "Fresh food: 6 major supply chain challenges",
    excerpt:
      "The fresh food supply chain is like a race against time: the life cycle of goods is very short, and the journey from production to end consumer is often full of obstacles.",
    type: "Guide",
    topic: "Market & Supply Chain",
    publicationDate: "2023-10-19",
    readingTime: "6 min read",
    author: "Klarys",
    image: `${CDN}65312b1ecd2ea44ff5c1332b_supply%20chain%20apples.jpg`,
    imageAlt: "Apples moving along a supply chain line",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}fresh-food-6-major-supply-chain-challenges`,
    archived: false,
    body: [
      {
        heading: "A particularly demanding chain",
        paragraphs: [
          "Fresh goods are perishable and fragile. Animal products demand strict cold chain discipline; ripe fruit and vegetables need careful handling. Quality has to be preserved at every step, from packing to transport to storage.",
        ],
      },
      {
        heading: "Six pressure points",
        bullets: [
          "Extremely short product life cycles leaving no slack for delay",
          "A highly fragmented landscape of producers, wholesalers and buyers",
          "Regulatory pressure on traceability, labelling and sustainability",
          "Volatile prices and volumes driven by weather and seasonality",
          "Cost control across transport, energy and cold storage",
          "Environmental expectations on emissions, packaging and waste",
        ],
      },
      {
        heading: "What holds it together",
        paragraphs: [
          "Each of these challenges is amplified by poor information flow. Where orders, availability and quality data circulate cleanly between partners, the chain absorbs shocks instead of transmitting them.",
        ],
      },
    ],
    seo: {
      title: "Fresh food: 6 major supply chain challenges | Consentio",
      description:
        "Short life cycles, fragmentation, regulation, volatility, costs and environmental pressure: the six supply chain challenges of the fresh food industry.",
    },
  },
  {
    slug: "food-waste-and-losses",
    title: "Food waste and losses",
    excerpt: "How the food industry is committed to reducing food waste and loss.",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2022-12-15",
    readingTime: "6 min read",
    author: "Klarys",
    image: `${CDN}6470d4a0a55b9bf807840bdc_504812_c690a36c456844cc830fc4af5ffbeabc~mv2.jpg`,
    imageAlt: "Discarded fresh produce",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}food-waste-and-losses`,
    archived: false,
    body: [
      {
        heading: "A growing volume",
        paragraphs: [
          "The agri-food industry is France's leading industrial sector by turnover and employment, and it faces a problem that keeps getting bigger. Global estimates put unconsumed food at billions of tonnes a year, with the trend still rising.",
          "The consequences are human, ecological and economic at the same time — which is why food loss is now treated as a supply chain priority rather than a communication topic.",
        ],
      },
      {
        heading: "Loss and waste are not the same",
        bullets: [
          "Losses occur upstream, during production, handling and storage",
          "Waste occurs downstream, in distribution, catering and households",
          "Both are largely driven by poor anticipation of real demand",
        ],
      },
      {
        heading: "Where the industry acts",
        paragraphs: [
          "Better forecasting, shorter routes between supply and demand, and clearer information on remaining shelf life all reduce the volume that never reaches a plate.",
        ],
      },
    ],
    seo: {
      title: "Food waste and losses in the fresh food industry | Consentio",
      description:
        "How the food industry is tackling food waste and losses, the difference between the two, and the supply chain levers that actually reduce them.",
    },
  },
  {
    slug: "finance-law-2024-e-invoicing",
    title: "Finance law 2024",
    excerpt:
      "From July 1, 2024, all companies must be able to declare and receive electronic invoices for all BtoB transactions.",
    type: "Insight",
    topic: "Data & Integration",
    publicationDate: "2024-07-01",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470d3a7937a5e96de216df1_504812_b3c24780d3d24a16be0eb69e812d2c5e~mv2.png`,
    imageAlt: "Electronic invoicing reform for retail",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}loi-de-finances-2024-pourquoi-la-grande-distribution-doit-d-urgence-s-attaquer-a-l-e-facturation`,
    archived: false,
    body: [
      {
        heading: "What the reform requires",
        paragraphs: [
          "The 2024 finance law phases in mandatory electronic invoicing (e-invoicing) and electronic reporting (e-reporting) for business-to-business transactions. Every company must be able to receive and declare electronic invoices.",
        ],
      },
      {
        heading: "Why food retail is exposed",
        bullets: [
          "Agri-food is France's first industrial sector, with very high invoice volumes",
          "Large retailers are prepared; growers and intermediaries often are not",
          "Weight, price and quality variances make fresh food invoices complex",
        ],
      },
      {
        heading: "Anticipating rather than absorbing",
        paragraphs: [
          "Companies that connect invoicing to structured order data ahead of the deadline turn a compliance obligation into faster processing and fewer disputes. Those that wait will face both at once.",
        ],
      },
    ],
    seo: {
      title: "Finance law 2024: e-invoicing and food retail | Consentio",
      description:
        "From July 2024 every company must receive and declare electronic invoices. What the reform means for the fresh food and retail supply chain.",
    },
  },
  {
    slug: "joining-gs1-a-must",
    title: "Why joining GS1 is a must",
    excerpt:
      "GS1 is the reference organization for all the actors of the distribution to obtain bar codes recognized in France and internationally.",
    type: "Guide",
    topic: "Data & Integration",
    publicationDate: "2022-11-24",
    readingTime: "4 min read",
    author: "Klarys",
    image: `${CDN}6470d301d3b6b46a21f1fef4_11062b_4b524540a76142e7bc34c86ca076d296~mv2.jpg`,
    imageAlt: "Barcode scanning in a distribution warehouse",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}joining-gs1-a-must`,
    archived: false,
    body: [
      {
        heading: "One identification system, two million companies",
        paragraphs: [
          "GS1 is a neutral non-profit organisation created to simplify and automate trade between partners through a single identification system. Tens of thousands of French companies and more than two million worldwide use its standards.",
        ],
      },
      {
        heading: "GTIN, barcodes, EDI",
        bullets: [
          "A GTIN (also known as EAN or UPC) for every product",
          "An associated barcode that automates and accelerates transactions",
          "A shared basis for EDI exchanges between customers and suppliers",
          "Compliance and traceability requirements met by design",
        ],
      },
      {
        heading: "Why it matters for fresh food",
        paragraphs: [
          "Fresh food has long relied on informal product descriptions. Standard identification is what allows automated ordering, reliable traceability and clean data exchange with retail customers.",
        ],
        pullout: "Standard identification is the entry ticket to automated trade.",
      },
    ],
    seo: {
      title: "Why joining GS1 is a must | Consentio",
      description:
        "GTIN codes, barcodes and EDI: what GS1 membership brings to fresh food suppliers and distributors in terms of efficiency, compliance and traceability.",
    },
  },
  {
    slug: "edi-for-whom-for-what-how",
    title: "EDI: for whom, for what, how?",
    excerpt: "Focus on the fields of application for which EDI changes lives.",
    type: "Guide",
    topic: "Data & Integration",
    publicationDate: "2022-06-29",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470d1a07e31051a48315bcf_f446ad_1a0397ce58e342538ec81d4b5396b129~mv2.jpg`,
    imageAlt: "Automated data exchange between trading partners",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}edi-for-whom`,
    archived: false,
    body: [
      {
        heading: "Who benefits",
        paragraphs: [
          "Already widespread in the wider agri-food sector, EDI is now reaching the traditional fresh produce market. Any company engaged in trade can benefit, on the customer side as well as the supplier side.",
        ],
      },
      {
        heading: "Which documents are covered",
        bullets: [
          "Purchase orders",
          "Invoices",
          "Shipping and despatch advices",
          "Customs documents, stock and shipping status, discounts, promotions and batch data",
        ],
      },
      {
        heading: "How to start",
        paragraphs: [
          "The first step is collecting and organising the data. Instead of printing an order form, the system generates a structured message that the partner's system can read directly — removing re-keying, delays and interpretation errors.",
        ],
      },
    ],
    seo: {
      title: "EDI: for whom, for what, how? | Consentio",
      description:
        "Who benefits from EDI, which documents it covers — orders, invoices, despatch advices, customs — and how to get started with automated data exchange.",
    },
  },
  {
    slug: "edi-and-procurement-performance",
    title: "EDI and procurement performance",
    excerpt: "The digital transformation of procurement is more topical than ever.",
    type: "Insight",
    topic: "Procurement & Operations",
    publicationDate: "2022-06-13",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470d11a55598689d509f530_f446ad_cd2ffe28eb8747e9b3af934b98caec5f~mv2.jpg`,
    imageAlt: "Procurement team reviewing digital purchasing data",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}l-edi-un-tremplin-pour-votre-performance-achats`,
    archived: false,
    body: [
      {
        heading: "Data quality drives purchasing value",
        paragraphs: [
          "In PwC's Digital Procurement study, the large majority of highly digitalised companies report that data quality has increased the value added by their purchasing function. France started later but is catching up quickly, particularly on transaction digitalisation.",
        ],
      },
      {
        heading: "Distribution is the fastest mover",
        bullets: [
          "Nearly half of French purchasing departments have already digitalised transactions",
          "Adoption is expected to rise sharply within a few years",
          "Distribution shows one of the strongest projected increases",
        ],
      },
      {
        heading: "From transaction to leverage",
        paragraphs: [
          "Automating order and invoice exchange frees buyers from clerical work and, more importantly, produces the clean history needed to negotiate, forecast and measure supplier performance.",
        ],
      },
    ],
    seo: {
      title: "EDI and procurement performance | Consentio",
      description:
        "Why digitalised transactions and clean data raise the value added by procurement teams, and where fresh food distribution stands in that transformation.",
    },
  },
  {
    slug: "digital-agriculture-and-innovation",
    title: "Digital agriculture and innovation",
    excerpt:
      "At the beginning of January, the Ministry of Agriculture and Food released its analysis notes on digital agriculture, a theme at the heart of the challenges for 2022.",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2022-02-04",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470cf6d185705dec44a8418_f446ad_3e04b6aad8a74edb8045084598d3d421~mv2.jpg`,
    imageAlt: "Digital technology used in agriculture",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}agriculture-numerique-agtech-innovation-filiere-rapport-minsitere-agriculture-alimentation`,
    archived: false,
    body: [
      {
        heading: "Four decades of gradual digitalisation",
        paragraphs: [
          "Agriculture has been digitalising since the 1980s: first management and accounting tools, then sensors enabling more precise farming, and more recently the rise of AgTech. Investment costs and reluctance among some actors have slowed deployment, but innovation has not stopped.",
        ],
      },
      {
        heading: "What the sector expects from it",
        bullets: [
          "Economic performance under tight margins",
          "Environmental efficiency in water, inputs and energy",
          "Working conditions and attractiveness of the profession",
          "Traceability demanded by downstream buyers and regulators",
        ],
      },
      {
        heading: "The condition for adoption",
        paragraphs: [
          "Technology only spreads where it fits daily practice and pays for itself quickly. The ministry's analysis points to support and interoperability, not novelty, as the deciding factors.",
        ],
      },
    ],
    seo: {
      title: "Digital agriculture and innovation | Consentio",
      description:
        "From farm management software to AgTech: what the French Ministry of Agriculture's analysis says about digital agriculture and its adoption conditions.",
    },
  },
  {
    slug: "egalim-law-2022",
    title: "Egalim Law: new features for 2022",
    excerpt:
      "Resulting from the General States of Food of 2017, the EGalim law touches on many issues around food.",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2022-01-11",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470cedda61024d9b34e1110_f446ad_dbeb20d1b0574bef8c2d37dcd19a5655~mv2.jpg`,
    imageAlt: "Local and organic products on display",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}loi-egalim-quelles-nouveautes-pour-2022`,
    archived: false,
    body: [
      {
        heading: "A law with several fronts",
        paragraphs: [
          "The EGAlim law addresses consumer information on product quality, the promotion of local and French produce, traceability across the agri-food chain and food safety. From 2022 several of its measures became binding.",
        ],
      },
      {
        heading: "Collective catering first",
        bullets: [
          "Public collective catering is targeted first, private catering later",
          "Quality and sustainability thresholds apply to purchased volumes",
          "Billions of meals a year make it a powerful lever for the whole chain",
        ],
      },
      {
        heading: "The practical consequence",
        paragraphs: [
          "Buyers have to prove the composition of their purchases, not merely intend to improve it. That shifts the burden onto sourcing records and supplier data.",
        ],
      },
    ],
    seo: {
      title: "Egalim Law: what changed in 2022 | Consentio",
      description:
        "Quality information, local sourcing, traceability and food safety: the EGAlim measures that came into force in 2022 and their impact on buyers.",
    },
  },
  {
    slug: "start-ups-and-agro-industry",
    title: "Start-ups and agro-industry",
    excerpt:
      "Can we really reinvent food? After all, nothing seems more natural, or more immutable than eating...",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: null,
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470ce41d88df1dd8703f6b7_f446ad_496be4643df74281a4e77b7322211068~mv2.jpg`,
    imageAlt: "Food tech innovation",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}quand-les-start-ups-mettent-l-agro-industrie-en-ebullition`,
    archived: false,
    body: [
      {
        heading: "Technology sits down at the table",
        paragraphs: [
          "For a decade, technology has been changing how food is produced, distributed and consumed — and for once the menu is being set by small players. Start-ups have moved faster than incumbents on plant-based products, distribution models and traceability.",
        ],
      },
      {
        heading: "How incumbents respond",
        bullets: [
          "Acquisitions and minority stakes in food tech ventures",
          "Internal innovation labs and accelerator partnerships",
          "Distribution agreements that bring new products to scale quickly",
        ],
      },
      {
        heading: "A win-win positioning",
        paragraphs: [
          "Rather than betting on one side, Klarys set out to support every actor in the sector, from the smallest to the largest, on the same infrastructure.",
        ],
      },
    ],
    seo: {
      title: "Start-ups and agro-industry | Consentio",
      description:
        "How food tech start-ups are reshaping production, distribution and consumption, and how established agro-industry players are responding.",
    },
  },
  {
    slug: "food-resilience-cnra",
    title: "Words from the experts: Food Resilience",
    excerpt:
      "Hermine Chombart de Lauwe, general delegate and co-founder of the National Council for Food Resilience, enlightens us.",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2021-11-16",
    readingTime: "6 min read",
    author: "Klarys",
    image: `${CDN}6479ebb552ba2a5a690e751a_1679242672447.jpeg`,
    imageAlt: "Interview on food resilience",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}la-resilience-alimentaire-le-cnra-vous-explique`,
    archived: false,
    body: [
      {
        heading: "A dependency few people see",
        paragraphs: [
          "A large share of the vegetables and an even larger share of the fruit consumed in France are imported, and the proportion has grown steadily since 2000. In seafood, salmon, shrimp and tuna dominate imports. Food resilience asks what happens when those flows are disrupted.",
        ],
      },
      {
        heading: "Why the CNRA was created",
        bullets: [
          "A gap between stated ambitions for healthier, more sustainable food and actual consumption",
          "Many existing local initiatives, but scattered and poorly connected",
          "A need to coordinate actors around territorial food capacity",
        ],
      },
      {
        heading: "From concept to practice",
        paragraphs: [
          "Resilience is built at territory level: knowing local production capacity, shortening chains where it makes sense, and giving buyers the visibility to source closer without losing reliability.",
        ],
      },
    ],
    seo: {
      title: "Words from the experts: food resilience | Consentio",
      description:
        "The National Council for Food Resilience explains import dependency, territorial food capacity and how the sector can build genuine resilience.",
    },
  },
  {
    slug: "csr-in-retail",
    title: "CSR in Retail",
    excerpt:
      "Within the European Union, France is a pioneer in CSR labeling (Corporate Social Responsibility).",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2021-10-28",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470cd0182dcfe54baad0219_f446ad_b7551e7c569341ac871c738f0ada1314~mv2.jpg`,
    imageAlt: "Retail store aisle",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}CSR-retail-sector`,
    archived: false,
    body: [
      {
        heading: "Where CSR comes from",
        paragraphs: [
          "The approach took shape in the 1980s alongside sustainable development principles, and gained weight in France with the 2001 New Economic Regulations law obliging listed companies to report on the environmental and societal consequences of their activities.",
          "The European Commission defines corporate social responsibility as the voluntary integration of social and environmental concerns into business operations and relationships with stakeholders.",
        ],
      },
      {
        heading: "What it covers in retail",
        bullets: [
          "Environmental impact of sourcing, transport and packaging",
          "Fair commercial relationships with suppliers and producers",
          "Working conditions and social dialogue",
          "Transparency towards consumers on origin and production methods",
        ],
      },
      {
        heading: "One strategy, four dimensions",
        paragraphs: [
          "From fruit and vegetables to seafood, the difficulty is not choosing between environmental, economic, ethical and social goals but combining them in a single coherent strategy that purchasing decisions actually reflect.",
        ],
      },
    ],
    seo: {
      title: "CSR in retail | Consentio",
      description:
        "How corporate social responsibility took hold in French retail, what it covers, and how environmental, economic, ethical and social goals combine.",
    },
  },
  {
    slug: "buyer-supplier-relations",
    title: "Buyer-supplier relations",
    excerpt:
      "In the agri-food sector, the digital transformation of procurement goes beyond the simple framework of saving time and money.",
    type: "Insight",
    topic: "Procurement & Operations",
    publicationDate: "2021-10-13",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6479f1e75a3d6aa996e04ea7_f446ad_605f630405e04a93a288bf9652cd63af~mv2%20copia.jpg`,
    imageAlt: "Buyer and supplier working together",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}digitalization-future-of-procurement`,
    archived: false,
    body: [
      {
        heading: "Digitalisation as a relationship factor",
        paragraphs: [
          "In agri-food, digitalising procurement is not only about saving time and money. It has become a determining factor in how durable the relationship between buyers and sellers turns out to be.",
          "Successive crises accelerated rather than delayed these projects: purchasing software is now considered essential by the large majority of decision-makers surveyed by the trade press.",
        ],
      },
      {
        heading: "What practitioners observe",
        bullets: [
          "Companies with existing e-procurement tools proved more resilient during the crisis",
          "Shared visibility reduces disputes over quantities, prices and delays",
          "Suppliers gain a predictable channel rather than scattered requests",
        ],
      },
      {
        heading: "Beyond the transaction",
        paragraphs: [
          "When the exchange of orders, confirmations and adjustments happens in one place, both sides spend their time on the commercial relationship instead of reconstructing what was agreed.",
        ],
        pullout: "Digital procurement is judged on the relationships it sustains, not the clicks it saves.",
      },
    ],
    seo: {
      title: "Buyer-supplier relations and digital procurement | Consentio",
      description:
        "Why digitalising procurement in agri-food strengthens buyer-supplier relationships and resilience, well beyond time and cost savings.",
    },
  },
  {
    slug: "local-consumption-trends",
    title: "Consuming locally produced food: trends",
    excerpt:
      'The health crisis and repeated lockdowns have given rise to new consumption habits, where "local consumption" has quickly become a priority in the choice of consumer purchases.',
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2021-07-28",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470ca21dac0661790668404_f446ad_43354a7770a64a4e82f4e6112a091399~mv2.jpg`,
    imageAlt: "Local produce on a market stall",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}local-consumption-new-trend`,
    archived: false,
    body: [
      {
        heading: "A market without a definition",
        paragraphs: [
          "Local products represent a market of roughly forty billion euros, part of it under official labels such as PDO, PGI and Label Rouge. Yet there is no regulatory definition of what counts as locally produced, which leaves retailers and consumers to interpret the term.",
        ],
      },
      {
        heading: "Why demand keeps rising",
        bullets: [
          "Trust in identifiable origin after successive food scares",
          "Support for regional producers and employment",
          "Perceived freshness and shorter transport",
          "Environmental expectations on food miles",
        ],
      },
      {
        heading: "The retailer's problem",
        paragraphs: [
          "Meeting that demand means sourcing from many small suppliers instead of a few large ones — a purchasing and logistics challenge before it is a marketing one.",
        ],
      },
    ],
    seo: {
      title: "Consuming locally produced food: trends | Consentio",
      description:
        "Why local consumption keeps growing, what counts as a local product in the absence of a legal definition, and what it demands from retailers.",
    },
  },
  {
    slug: "traceability-in-retail",
    title: "Traceability in Retail",
    excerpt:
      "Consumer expectations have changed enormously over the past few years with regard to mass distribution brands.",
    type: "Insight",
    topic: "Data & Integration",
    publicationDate: "2021-07-20",
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6470c9745f4bcd52c7e45824_f446ad_64586d6aa9c04b8a93af9d4891d58e09~mv2.jpg`,
    imageAlt: "Seafood counter in a supermarket",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}traceability-of-sea-products-in-retail`,
    archived: false,
    body: [
      {
        heading: "Less but better",
        paragraphs: [
          "Consumer studies show the same movement: buy less, buy better. Shoppers turn to quality products, expect transparency on origin and want traceability information to be easy to reach. Seafood is no exception — if anything it is the clearest case.",
        ],
      },
      {
        heading: "A measurable gap",
        bullets: [
          "Significant mislabelling rates have been documented across seafood retail",
          "Species substitution and vague origin claims remain common",
          "Errors accumulate at each handover between boat and shelf",
        ],
      },
      {
        heading: "Fixing it at the source",
        paragraphs: [
          "Traceability cannot be reconstructed at the counter. It has to be carried by the transaction data itself, from the first sale onwards, so that each partner passes on what it received instead of retyping it.",
        ],
      },
    ],
    seo: {
      title: "Traceability in retail | Consentio",
      description:
        "Consumers demand transparent origin information while mislabelling persists in seafood retail. Why traceability has to travel with transaction data.",
    },
  },
  {
    slug: "modernization-port-boulogne-sur-mer",
    title: "Modernization of the port of Boulogne-sur-mer",
    excerpt: "Decryption with Thierry Missonnier, Director of FromNord and the Aquimer.",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: "2021-07-19",
    readingTime: "6 min read",
    author: "Klarys",
    image: `${CDN}6479ea0e32ab202879dd2453_1516964887067.jpeg`,
    imageAlt: "Thierry Missonnier, Director of FromNord and Aquimer",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}seaview-2-boulogne-sur-mer-1er-port-de-peche-de-france-une-modernisation-au-fil-du-temps`,
    archived: false,
    body: [
      {
        heading: "France's leading fishing port",
        paragraphs: [
          "Despite a decline in French auction sales in volume and value, Boulogne-sur-Mer held first place as France's leading fishing port in tonnage and in value. Thierry Missonnier, director of the FromNord producer organisation and of the Aquimer cluster, explains how the port modernised over time.",
        ],
      },
      {
        heading: "An organisation behind the fleet",
        bullets: [
          "FromNord federates more than 160 vessels across Hauts-de-France, Normandy and the Bay of Biscay",
          "Both deep-sea and small-scale coastal fishing are represented",
          "Modernisation covered the auction hall, cold chain and digital sales tools",
        ],
      },
      {
        heading: "The challenges ahead",
        paragraphs: [
          "Renewing the fleet, attracting crews, adapting to quota and sustainability constraints and continuing to digitalise sales are the port's stated priorities for the coming years.",
        ],
      },
    ],
    seo: {
      title: "Modernization of the port of Boulogne-sur-Mer | Consentio",
      description:
        "Thierry Missonnier of FromNord and Aquimer on how France's leading fishing port modernised and the challenges facing it in the years ahead.",
    },
  },
  {
    slug: "aquimer-webinar-4-0-technologies",
    title: "Aquimer webinar: 4.0 technologies",
    excerpt:
      "Aquimer, partner of Klarys, organized a webinar on June 10, 2021 on the technologies developed within the Sea sector.",
    type: "Webinar",
    topic: "Data & Integration",
    publicationDate: "2021-06-10",
    readingTime: "3 min read",
    author: "Klarys",
    image: `${CDN}6470c62fd88df1dd87fc308c_f446ad_d8761cd2468f4838afb025133147e77d~mv2.jpg`,
    imageAlt: "Industry 4.0 technologies in the seafood sector",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}les-technologies-4-0-dans-la-filiere-des-produits-aquatiques`,
    archived: false,
    mediaUrl: "https://www.youtube.com/watch?v=wkRbrqLbnU0",
    ctaLabel: "Watch the webinar",
    body: [
      {
        heading: "Competitiveness through technology",
        paragraphs: [
          'Held on 10 June 2021, the Aquimer webinar "4.0 technologies, levers of competitiveness in the face of the health crisis" brought together Klarys, ICAM, Polytech Lille, CEATECH and Xperlean to show professionals what was already usable in the seafood sector.',
        ],
      },
      {
        heading: "On the programme",
        bullets: [
          "3D printing: innovative applications and production support — ICAM",
          "Exoskeletons as an industry 4.0 tool and their use in the sector — Polytech Lille",
          "Augmented and virtual reality applied to seafood processing",
          "Digital marketplaces and data exchange — Klarys",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "The session's argument was that 4.0 technologies are no longer prototypes for the seafood industry: they address concrete constraints on productivity, working conditions and traceability.",
        ],
      },
    ],
    seo: {
      title: "Aquimer webinar: 4.0 technologies in the seafood sector | Consentio",
      description:
        "Replay and summary of the Aquimer webinar on industry 4.0 technologies — 3D printing, exoskeletons, augmented reality and digital exchange — in the sea sector.",
    },
  },
  {
    slug: "sustainability-within-the-sea-sector",
    title: "Sustainability within the Sea sector",
    excerpt:
      "Interview with Estelle Soulet, Project Manager for the Mr.Goodfish Program, partner of Klarys since April 2021.",
    type: "Insight",
    topic: "Market & Supply Chain",
    publicationDate: null,
    readingTime: "5 min read",
    author: "Klarys",
    image: `${CDN}6479ea589bbe29f33cba6367_B9727183835Z.1_20210528170328_000%2BG4II6KKVM.1-0.jpeg.jpg`,
    imageAlt: "Estelle Soulet, Mr.Goodfish programme",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}seaview-la-durabilite-selon-estelle-soulet-programme-mr-goodfish`,
    archived: false,
    mediaUrl: "https://www.youtube.com/watch?v=FPrtOdHVgZc",
    ctaLabel: "Watch the interview",
    body: [
      {
        heading: "Seasonality applies to the sea too",
        paragraphs: [
          "Estelle Soulet works for the Mr.Goodfish programme, which for a decade has been guiding professionals and the public towards seasonal species. Her message is simple: seasonality is as valid for seafood as it is for fruit and vegetables.",
        ],
      },
      {
        heading: "The partnership with Klarys",
        bullets: [
          "Improving traceability of seasonal seafood",
          "Highlighting recommended species at the point of sale",
          "Helping professionals shift purchasing towards healthier stocks",
        ],
      },
      {
        heading: "Changing habits, not only labels",
        paragraphs: [
          "Sustainability advances when the recommended species are visible and available at the moment of buying, which is a data and merchandising problem as much as an ecological one.",
        ],
      },
    ],
    seo: {
      title: "Sustainability within the sea sector | Consentio",
      description:
        "Estelle Soulet of the Mr.Goodfish programme on seasonal seafood, traceability and how professionals can shift purchasing towards sustainable species.",
    },
  },
  {
    slug: "labels-of-the-sea-sector",
    title: "Better know the Labels of the Sea sector",
    excerpt:
      "Shedding light on the solutions and good reflexes to preserve the reserves of our oceans with Rémi Aubril.",
    type: "Guide",
    topic: "Market & Supply Chain",
    publicationDate: "2020-04-24",
    readingTime: "5 min read",
    author: "Rémi Aubril, Klarys",
    image: `${CDN}6479eafc8135059d4cc8de8b_1683883768218.jpeg`,
    imageAlt: "Seafood labels and certifications",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: `${ART}focus-on-seafood-labels`,
    archived: false,
    body: [
      {
        heading: "Understand better, advise better, consume better",
        paragraphs: [
          "The urge to consume better is felt by consumers and professionals alike. In seafood it has produced a wave of new measures and labels — so many that it has become hard to see clearly.",
          "According to Ifremer figures, close to half the volume of fish caught in France comes from sustainably exploited populations, against a far smaller share two decades earlier.",
        ],
      },
      {
        heading: "What the labels actually cover",
        bullets: [
          "Stock health and fishing method for wild capture",
          "Feed, density and environmental impact for aquaculture",
          "Origin and chain-of-custody guarantees",
          "Seasonality recommendations, which are not labels but guidance",
        ],
      },
      {
        heading: "Good reflexes",
        paragraphs: [
          "No single label answers every question. Combining stock information, seasonality and origin gives a more honest picture than relying on one logo.",
        ],
      },
    ],
    seo: {
      title: "Better know the labels of the sea sector | Consentio",
      description:
        "What seafood labels cover, what they do not, and the good reflexes for professionals who want to help preserve ocean stocks.",
    },
  },

  // ---------------------------------------------------------------------------
  // CUSTOMER STORIES — sourced from consentio.co/use/* and klarys.io/clients/*.
  // Facts, quotes and metrics come from those public pages only.
  // ---------------------------------------------------------------------------
  {
    slug: "coast-tropical-order-automation",
    title: "Saving 20 hours per week thanks to order automation with Coast Tropical",
    excerpt:
      "We were glad to work with COAST Tropical, a long-standing leader of the fresh produce industry in the United States and Mexico.",
    type: "Customer Story",
    topic: "Data & Integration",
    publicationDate: "2025-06-30",
    dateLabel: "June 30, 2025",
    readingTime: "4 min read",
    author: "Consentio",
    image: `${CO}68629831b88febf32d110561_Tropical%20fruits%202.png`,
    imageAlt: "Tropical fruit distributed by Coast Tropical",
    featured: false,
    legacyBrand: "Consentio",
    legacyUrl:
      "https://www.consentio.co/use/saving-20-hours-per-week-thanks-to-order-automation-with-coast-tropical",
    archived: false,
    body: [
      {
        paragraphs: [
          "Coast Tropical, a subsidiary of COAST Citrus Distributors — an agricultural company founded in 1950 — has become a major player in growing, importing and distributing fruit and vegetables across North America (California, Texas, Florida and more). Its mission is simple: guarantee freshness, quality and reliability to its customers, whether supermarkets, wholesalers or foodservice operators.",
          "Running that volume of business every day comes with a real challenge: processing a very large number of orders while staying accurate and responsive in a fast-moving sector. That is the challenge Coast Tropical turned to Consentio for.",
        ],
      },
      {
        heading: "What made Coast Tropical choose Consentio?",
        paragraphs: [
          "A key player in fresh produce distribution between the United States and Mexico, Coast Tropical chose Consentio to automate and simplify the order management that had until then been handled manually.",
          "Founded in 1950, the Coast Citrus Distributors group today brings together several entities (Coast Tropical, Olympic Fruit and Vegetable, plus sites in San Francisco, Texas and Florida) and processes a high volume of orders every day. A large share already flows through EDI, connected to their Produce Pro ERP.",
        ],
        pullout:
          "\u201cMost of our customers order through EDI, but we still receive a lot of orders by email that have to be keyed in by hand.\u201d — Hector Gonzalez",
      },
      {
        heading: "How did the implementation go?",
        paragraphs: [
          "To automate orders received by email, fax, SMS or WhatsApp, Coast Tropical rolled out Magic Orders in 2022, part of the Consentio suite. The tool automatically recognises the products ordered, applies delivery terms and pushes the information straight into Produce Pro.",
        ],
      },
      {
        heading: "What are the results today?",
        paragraphs: [
          "A dozen Coast customers already use Magic Orders, and the list grows every month. The time saved lets the teams refocus on what matters most: growing the business.",
        ],
        pullout: "\u201cWith the time we save, we make more sales calls!\u201d — Hector Gonzalez",
      },
    ],
    customerStory: {
      client: "Coast Tropical",
      audience: "Supplier",
      country: "Los Angeles, United States",
      spokesperson: "Hector Gonzalez, IT Director at COAST",
      logo: coastLogo,
      portrait: `${CO}686298e39fb61554f2f980e9_Captura%20de%20pantalla%202025-06-30%20a%20la(s)%2012.18.01%E2%80%AFp.m.%201.png`,
      benefits: [
        "Less time spent keying in orders manually",
        "Time freed up to focus on what matters",
      ],
      quote: {
        text: "Magic Orders saves us at least 20 hours of manual processing every week.",
        author: "Hector Gonzalez, IT Director at COAST, Coast Tropical",
      },
      ctaHeadline: "Discover Consentio Magic Orders",
    },
    ctaLabel: "Contact our sales team",
    seo: {
      title: "Coast Tropical saves 20 hours per week | Consentio",
      description:
        "How Coast Tropical automated orders received by email, fax, SMS and WhatsApp into Produce Pro with Magic Orders.",
    },
  },
  {
    slug: "lagadec-primeurs-customer-communication",
    title: "Lagadec Primeurs takes on the challenge of modernizing its communication with customers",
    excerpt:
      "Lagadec Primeurs, a French fruit and vegetable wholesaler, is one of Consentio's very first customers. We spoke with Yann, Sales Director, about his experience with the platform.",
    type: "Customer Story",
    topic: "Procurement & Operations",
    publicationDate: "2025-06-30",
    dateLabel: "June 30, 2025",
    readingTime: "5 min read",
    author: "Consentio",
    image: lagadecFieldImage.url,
    imageAlt: "Cauliflowers and cabbages growing in the field, Lagadec Primeurs production",
    featured: false,
    legacyBrand: "Consentio",
    legacyUrl:
      "https://www.consentio.co/use/lagadec-primeurs-takes-on-the-challenge-of-modernizing-its-communication-with-customers",
    archived: false,
    body: [
      {
        paragraphs: [
          "Lagadec Primeurs, a company based in Brittany, distributes its products all over France to a varied customer base: supermarkets, wholesalers and independent retailers. That diversity creates a real challenge: adapting and promoting its product ranges and daily offers effectively for every type of buyer.",
          "Previously, all communication with partners went through the phone. Building and maintaining an attractive website or daily catalogues meant significant cost and workload. That is the context in which Consentio was rolled out at Lagadec Primeurs in 2019.",
        ],
      },
      {
        heading: "How did the implementation and adoption of Consentio go?",
        paragraphs: [
          "Training the Lagadec Primeurs sales teams happened gradually, in-house. The real challenge was adoption on the customer side. In large retail, the tool is adopted very quickly: \u201cThe big chains adopt the app fast, they are comfortable with this kind of tool.\u201d",
          "In other segments, however, the learning curve was a little longer: users first had to get into the habit of downloading the app before building it into their daily routine.",
        ],
        pullout: "Since 2020: more than 2,500 orders placed on Consentio, 124 partners invited.",
        image: `${CO}68629313b6af3475eec565ff_Captura%20de%20pantalla%202025-06-18%20a%20la(s)%204.11.13%E2%80%AFp.m.%201.png`,
        imageAlt: "Consentio usage statistics at Lagadec Primeurs",
      },
      {
        paragraphs: [
          "Among the best practices put in place, adding a QR code on calendars proved very effective in giving customers quick access to the digital catalogue.",
          "Another major change: integrating Consentio with the Lagadec Primeurs ERP solved the daily headache of updating prices. Prices are now changed in one place only (the ERP), which then feeds the platform automatically — no more double entry.",
        ],
      },
      {
        heading: "What concrete results?",
        paragraphs: [
          "Three main benefits stand out.",
          "a) More efficient, more modern prospecting and account management. Unlike paper catalogues or phone calls, Consentio updates product information in real time. The ERP integration has clearly simplified catalogue management and guarantees that customers always see up-to-date data. The tool has proved particularly useful for smaller accounts, avoiding many phone calls.",
          "\u201cBefore, we managed everything by phone. Now it is far more structured, and we save time because customers access our products directly in the app.\u201d",
          "Consentio does not fully replace calls, but a lot of information is now visible directly in the catalogue, and orders can be placed independently — a real time saver for the sales team.",
          "b) Fewer errors. Going digital reduces the human errors tied to manual entry and makes orders more reliable. Consentio also offers simple order tracking, for internal teams and customers alike.",
        ],
      },
      {
        heading: "What comes next?",
        paragraphs: [
          "It remains important to keep supporting customers in adopting the platform to improve their experience. The notification system already helps the team stay responsive, and Lagadec hopes to see it improve further to anticipate needs even better. The tool keeps evolving through regular updates.",
        ],
      },
    ],
    customerStory: {
      client: "Lagadec",
      audience: "Supplier",
      country: "Kerlouan, France",
      spokesperson: "Yann, Sales Director",
      logo: lagadecLogo,
      portrait: `${CO}686289dc0d00d012c9a6a960_image%2063.png`,
      benefits: [
        "Streamlined, centralised communication",
        "Time savings and operational efficiency",
        "Higher customer satisfaction and loyalty",
      ],
      metrics: [
        { value: "2,500+", label: "Orders placed on Consentio since 2020" },
        { value: "124", label: "Partners invited" },
        { value: "2019", label: "Consentio rolled out" },
      ],
      quote: {
        text:
          "Thanks to Consentio, we now receive spontaneous orders from new customers, even ones we never approached.",
        author: "Yann, Sales Director, Lagadec",
      },
      ctaHeadline: "Try the Consentio online shop",
    },
    ctaLabel: "Contact our sales team",
    seo: {
      title: "Lagadec Primeurs modernizes customer communication | Consentio",
      description:
        "How Lagadec Primeurs digitised its daily offers, connected prices to its ERP and opened self-service ordering to its customers.",
    },
  },
  {
    slug: "anecoop-order-profitability",
    title: "Anecoop maximizes the profitability of its orders",
    excerpt:
      "We have worked with Anecoop France for several years. An interview with Stéphane Chabrol, Sales Director, about his journey with Consentio and the goals he pursues with the platform.",
    type: "Customer Story",
    topic: "Procurement & Operations",
    publicationDate: "2025-06-25",
    dateLabel: "June 25, 2025",
    readingTime: "5 min read",
    author: "Consentio",
    image: `${CO}685b45d22fbfa2e6b0aeef4f_image%2061.png`,
    imageAlt: "Anecoop fruit and vegetable production",
    featured: false,
    legacyBrand: "Consentio",
    legacyUrl: "https://www.consentio.co/use/use-case-1",
    archived: false,
    body: [
      {
        paragraphs: [
          "Anecoop France is one of the main subsidiaries of the Anecoop group, a world leader in fruit and vegetable exports, with one billion euros in revenue in 2023. Anecoop is among the largest Spanish exporters and operates internationally, supplying major European supermarket chains.",
        ],
      },
      {
        heading: "Can you introduce your company and your role?",
        paragraphs: [
          "Anecoop is a leading European agricultural cooperative specialised in growing and selling fruit and vegetables, bringing together more than 70 member cooperatives and hundreds of individual growers. As Sales Director of Anecoop France, Stéphane runs day-to-day operations with retail buying groups.",
        ],
      },
      {
        heading: "Why did you choose Consentio?",
        paragraphs: [
          "Before Consentio, order processing was largely manual, with a clear need for automation to gain daily productivity. Consentio stood out as the right solution: smooth integration with existing systems and an intuitive interface. The concrete result is a clear drop in order errors, where previously, in peak periods, it was common to miss product lines, get a price wrong or key in the wrong quantity.",
        ],
      },
      {
        heading: "How has Consentio helped you reach your goals?",
        paragraphs: [
          "Consentio has simplified order management and solved recurring communication issues with buyers. Deliveries are now more reliably on time, with better controlled stock levels. Being able to tailor the platform to Anecoop's specific needs has also been a real plus, leading to better profitability and less product loss.",
        ],
      },
      {
        heading: "What are the next goals with Consentio?",
        paragraphs: [
          "Anecoop wants to add new capabilities, in particular predictive analytics, to anticipate customer demand and optimise stock.",
        ],
      },
      {
        heading: "Is there one aspect of Consentio you particularly value?",
        paragraphs: [
          "Beyond the gains in efficiency and profitability, Stéphane highlights the quality of customer support: a responsive, committed team for every question or issue, including when new technical features are integrated. The intuitive interface has also made adoption much easier for the teams and cut training time.",
        ],
      },
      {
        heading: "A word for a future Consentio customer?",
        pullout: "\u201cTrust them.\u201d",
      },
    ],
    customerStory: {
      client: "Anecoop France",
      audience: "Supplier",
      country: "Perpignan, France",
      spokesperson: "Stéphane Chabrol, Sales Director (fruit and vegetable export)",
      logo: `${CO}685b45dda64a41e38cdf40cd_Group%20426.png`,
      portrait: `${CO}686289a70ad3cd2af813b5cf_Mask%20group.png`,
      benefits: [
        "Improved operational efficiency",
        "Better communication and customisation",
        "Higher profitability and stronger support",
      ],
      metrics: [
        { value: "€1bn", label: "Group revenue in 2023" },
        { value: "70+", label: "Member cooperatives in the group" },
      ],
      quote: {
        text:
          "Communication with our buyers is far smoother today, which lets us deliver on time and keep optimal stock levels.",
        author: "Stéphane Chabrol, Sales Director, Anecoop France",
      },
      ctaHeadline: "See how Consentio fits your needs",
    },
    ctaLabel: "Contact our sales team",
    seo: {
      title: "Anecoop maximizes the profitability of its orders | Consentio",
      description:
        "How Anecoop France reduced order errors, smoothed communication with buyers and limited product loss with Consentio.",
    },
  },
  {
    slug: "mytilimer-eprocurement-mussel-producers",
    title: "Mytilimer digitizes transactions with 76 mussel producers and cuts ordering time by 4x",
    excerpt:
      "Mytilimer centralized the offer of more than 70 mussel producers, automated its purchasing documents and divided ordering time by four.",
    type: "Customer Story",
    topic: "Data & Integration",
    publicationDate: null,
    readingTime: "4 min read",
    author: "Klarys",
    image: `${CDN}65966c0c80833e823f038614_Mytilimer.png`,
    imageAlt: "Mytilimer mussel production and e-procurement",
    featured: false,
    legacyBrand: "Klarys",
    legacyUrl: "https://www.klarys.io/clients/cas-client-mytilimer-eprocurement",
    archived: false,
    body: [
      {
        heading: "Challenge",
        paragraphs: [
          "Mytilimer works with 76 mussel producers, from family businesses to very small operations. Supplier management and purchasing were largely manual, handled over the phone and by email.",
          "The purchasing team had no global view of availability, order status or incoming goods.",
        ],
      },
      {
        heading: "Objectives",
        bullets: [
          "Digitize the procurement process",
          "Centralize reliable activity data",
          "Get a global view of product availability",
          "Harmonize product and order information",
          "Simplify exchanges with producers",
        ],
      },
      {
        heading: "What changed",
        paragraphs: [
          "The platform centralizes the offer of all mussel producers and gives each producer an intuitive interface to manage orders and documents from anywhere, including a smartphone.",
        ],
      },
      {
        heading: "Results",
        bullets: [
          "Purchasing processes digitalized and automated",
          "Consolidated supplier offer in one place",
          "Accounting documents generated automatically",
          "Producers manage their orders from a smartphone",
          "One standardized ordering process",
        ],
        pullout: "Ordering time divided by four.",
      },
      {
        heading: "Company context",
        paragraphs: [
          "Mytilimer reported €60m revenue in 2021, with 150 employees, 7 product families and 2 brands. These figures describe the company, not the outcome of the project.",
        ],
      },
    ],
    customerStory: {
      client: "Mytilimer",
      audience: "Supplier",
      country: "France",
      segment: "Seafood / mussel distribution",
      benefits: [
        "Digitalized, automated purchasing process",
        "One consolidated view of producer availability",
        "Accounting documents generated automatically",
      ],
      metrics: [
        { value: "76", label: "Mussel producers connected" },
        { value: "4x", label: "Faster ordering (ordering time divided by four)" },
      ],
      ctaHeadline: "See how Consentio fits your needs",
    },
    ctaLabel: "Contact our sales team",
    seo: {
      title: "Mytilimer digitizes purchasing with 76 mussel producers | Consentio",
      description:
        "How Mytilimer centralized the offer of its mussel producers, automated accounting documents and divided ordering time by four.",
    },
  },
  {
    slug: "agroponiente-order-entry-automation",
    title: "Agroponiente automates order entry",
    excerpt:
      "A leading fruit and vegetable group in southern Europe moves from keying in orders to supervising an automatic process.",
    type: "Customer Story",
    topic: "Data & Integration",
    publicationDate: "2026-09-09",
    dateLabel: "September 9, 2026",
    readingTime: "4 min read",
    author: "Consentio",
    image: agroponienteWarehouse.url,
    imageAlt: "Agroponiente logistics warehouse with aisles of stacked crates and staff at work",
    featured: false,
    legacyBrand: "Consentio",
    archived: false,
    body: [
      {
        heading: "Context",
        paragraphs: [
          "Agroponiente is one of the largest fruit and vegetable groups in southern Europe. From El Ejido, it moves a broad catalogue of fruit and vegetables to retail chains, wholesalers and international customers, with revenue of around 350 million euros and close to 1,000 people on staff.",
          "Operating at that scale has a direct consequence in the back office: hundreds of orders coming in every week. A significant share already arrives structured via EDI and integrated into their ERP, Hispatec. But a large part arrives by email — in PDF, Excel or TXT — and another part by WhatsApp and phone call. All of that had to be keyed in by hand by the administrative team, buyer by buyer, line by line.",
        ],
      },
      {
        heading: "The challenge",
        paragraphs: [
          "The objective was clear: the team should stop keying in orders and move to supervising an automatic process.",
          "The group works with a very diverse portfolio of buyers, each with its own format and its own rules. Automating that requires interpreting each document, translating the buyer's references into the ERP catalogue, applying the business rules and pushing it into Hispatec without friction — all against a closed ERP and an operation that leaves no room for half measures.",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "Agroponiente implemented Magic Orders for the orders that arrive by email. The system reads each order in its own format (PDF, Excel or TXT), recognises the products, applies the business rules and transfers it directly into Hispatec. EDI orders were left outside the scope for a simple reason: the group already had them integrated. Today Agroponiente processes orders (PDF, Excel, TXT) with more than 30 different order formats.",
          "For the orders that arrive by WhatsApp or phone call, the piece is the Consentio App: the sales reps — both office-based and auction-floor — enter the order directly from their mobile or computer, quickly, without going through the administrative team.",
          "The deployment relies on a deep synchronisation with Hispatec — orders, catalogue, price lists and customers — with automatic price-list updates several times a day. The project started at the beginning of 2023 and has grown steadily since then.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Today Agroponiente has more than 30 active buyer formats being processed automatically through Magic Orders, and the number keeps growing. In parallel, order entry through the App has removed a bottleneck from the administrative team that previously absorbed everything.",
          "The result is a back office that supervises instead of keying in, and a sales team that spends its time on what moves the business — selling.",
        ],
        pullout:
          "Do you receive orders by email, WhatsApp or phone that you still key in by hand? Let's talk about how to automate them.",
      },
    ],
    customerStory: {
      client: "Agroponiente, S.A.",
      audience: "Supplier",
      country: "El Ejido, Andalusia (Spain)",
      logo: agroponienteLogo.url,
      segment: "Fruit and vegetable production and marketing",
      modules: ["Magic Orders", "Consentio App", "Hispatec ERP sync"],
      benefits: [
        "A back office that supervises instead of keying in orders",
        "Sales reps enter orders themselves from mobile or computer",
        "Deep Hispatec synchronisation for orders, catalogue, price lists and customers",
      ],
      metrics: [
        { value: "30+", label: "Buyer order formats processed automatically" },
        { value: "€350m", label: "Group revenue" },
        { value: "~1,000", label: "People on staff" },
      ],
      quote: {
        text: "The team stopped keying in orders and moved to supervising an automatic process.",
        author: "Agroponiente, S.A.",
      },
      ctaHeadline: "Discover Consentio Magic Orders",
    },
    ctaLabel: "Contact our sales team",
    seo: {
      title: "Agroponiente automates order entry with Magic Orders | Consentio",
      description:
        "How Agroponiente automates 30+ buyer order formats from email, WhatsApp and phone into its Hispatec ERP with Magic Orders and the Consentio App.",
    },
  },
];



export const RESOURCE_FILTERS = [
  "All",
  "Procurement & Operations",
  "Data & Integration",
  "Market & Supply Chain",
] as const;

export type ResourceFilter = (typeof RESOURCE_FILTERS)[number];

export const AUDIENCE_FILTERS = ["Suppliers", "Retailers"] as const;

export type AudienceFilter = (typeof AUDIENCE_FILTERS)[number];


export function matchesFilter(resource: ResourceRecord, filter: ResourceFilter) {
  if (filter === "All") return true;
  return resource.topic === filter;
}

export function matchesAudience(resource: ResourceRecord, audience: AudienceFilter) {
  const target = audience === "Retailers" ? "Retailer" : "Supplier";
  return resource.customerStory?.audience === target;
}

/** Customer stories live in their own hub section, not the topic archive. */
export function customerStories() {
  return visibleResources().filter((r) => r.type === "Customer Story");
}

export function editorialResources() {
  return visibleResources().filter((r) => r.type !== "Customer Story");
}


export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug && !r.archived);
}

export function visibleResources() {
  return resources.filter((r) => !r.archived);
}

export function relatedResources(current: ResourceRecord, limit = 3) {
  const pool = visibleResources().filter((r) => r.slug !== current.slug);

  // Customer stories only ever lead to other customer stories (French section).
  if (current.type === "Customer Story") {
    const stories = pool.filter((r) => r.type === "Customer Story");
    const sameAudience = stories.filter(
      (r) => r.customerStory?.audience === current.customerStory?.audience,
    );
    const ordered = [...sameAudience, ...stories.filter((r) => !sameAudience.includes(r))];
    return ordered.slice(0, limit);
  }


  const sameTopic = pool.filter((r) => r.topic === current.topic);
  return [...sameTopic, ...pool.filter((r) => r.topic !== current.topic)].slice(0, limit);
}

export function formatResourceDate(date: string | null) {
  if (!date) return "";
  return new Date(date)
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}
