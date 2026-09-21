// =============================================================================
// CONSENTIO — English source content (primary language).
// All customer-facing copy lives here. FR/ES files mirror this exact structure.
// APPROVAL NOTE: any change to customer names, metrics or claims in this file
// requires commercial + legal approval before publication.
// SCOPE NOTE: no open supplier network, supplier discovery marketplace or
// market intelligence proposition is promoted anywhere in this content.
// =============================================================================

export const en = {
  locale: "en",
  dir: "ltr",

  nav: {
    retailers: "For Retailers",
    suppliers: "For Suppliers",
    stories: "Customer Stories",
    resources: "Resources",
    company: "Company",
    signIn: "Sign in",
    klarysLogin: "Klarys Login",
    consentioLogin: "Consentio Login",
    bookDemo: "Book a demo",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },

  common: {
    bookDemo: "Book a demo",
    learnMore: "Learn more",
    forRetailers: "For food retailers",
    forSuppliers: "For fresh food suppliers",
    breadcrumbHome: "Home",
  },

  home: {
    seo: {
      title: "Consentio | Fresh Food Procurement and Supplier Collaboration",
      description:
        "Consentio connects retailer procurement workflows with supplier collaboration and order execution, from demand planning to delivery.",
    },
    hero: {
      eyebrow: "Built for fresh food",
      headline: "The operating platform for fresh food trade.",
      text: "Consentio connects buyers and suppliers across forecasting, sourcing, orders and execution — in one continuous workflow.",
      primary: "Book a demo",
      secondary: "See how it works",
      diagram: {
        left: { title: "Retail buying teams", items: ["Demand plans", "Requests", "Allocation", "Purchase orders"] },
        center: {
          title: "Connected workflow",
          items: ["Product data", "Requests", "Offers", "Allocation", "Orders", "Confirmations", "Documents"],
        },
        right: { title: "Supplier teams", items: ["Catalogues", "Offers", "Order confirmations", "Delivery data"] },
      },
    },
    proof: {
      headline: "Working with fresh food retailers and suppliers across Europe.",
      logosLabel: "Trusted by leading fresh food companies across Europe",
      stats: [
        { icon: "users", value: "3,200+", label: "suppliers using Consentio", note: "" },
        { icon: "calendar", value: "10+ years", label: "of fresh food", note: "and technology expertise" },
        { icon: "fish", value: "Fresh produce, seafood, meat", label: "and other fresh categories", note: "" },
        { icon: "globe", value: "Active across", label: "France, Spain, Switzerland, Benelux and the United States", note: "" },
      ],
    },

    problem: {
      eyebrow: "Why fresh is different",
      headline: "Fresh categories cannot be managed like standard goods.",
      text: "Prices, availability and quality change daily. Purchasing decisions are taken with incomplete information and executed across disconnected channels.",
      standard: {
        title: "Standard grocery purchasing",
        items: [
          "Stable references and prices",
          "Long negotiation cycles",
          "Predictable lead times",
          "Contracted volumes",
        ],
        conclusion: "Standard procurement tools are designed for this reality.",
      },
      fresh: {
        title: "Fresh food purchasing",
        items: [
          "Daily price and availability changes",
          "Short decision windows",
          "Volumes adjusted continuously",
          "Perishable stock and quality variation",
        ],
        conclusion: "Fresh needs workflows built for daily decisions and execution.",
      },
      highlight:
        "Consentio structures the daily exchange between buying teams and their suppliers, from demand planning to order execution.",
    },
    workflow: {
      eyebrow: "The connected workflow",
      headline: "One workflow, from demand plan to synchronized order data.",
      text: "Each step feeds the next. Buyers and suppliers work on the same structured information instead of exchanging files, emails and messages.",
      steps: [
        { title: "Forecast", text: "Build demand plans by category, store group and period." },
        { title: "Request", text: "Send structured requests to the suppliers you already work with." },
        { title: "Offers", text: "Collect prices, volumes and availability in one comparable format." },
        { title: "Allocation", text: "Distribute volumes across suppliers with full decision context." },
        { title: "Orders", text: "Convert allocations into provisional and firm purchase orders." },
        { title: "Execution", text: "Track confirmations, amendments, deliveries and documents." },
        { title: "Sync", text: "Send validated order data back to your ERP and supplier systems." },
      ],
      chain: ["Forecast", "Request", "Offers", "Allocation", "Orders", "Execution", "Sync"],
      highlight: "One continuous flow instead of seven disconnected processes.",
    },
    retailerSection: {
      eyebrow: "Primary use case",
      title: "For food retailers",
      headline: "Run your fresh food buying operations from one place.",
      text: "Give buying teams a single workspace for demand planning, supplier consultations, offer comparison, allocation and order execution.",
      benefits: [
        "Plan demand and share volume targets early",
        "Run structured consultations with your supplier base",
        "Compare offers on price, volume, quality and origin",
        "Allocate volumes and generate orders in one step",
        "Track execution and supplier performance",
      ],
      cta: "Explore Consentio for retailers",
    },
    supplierSection: {
      eyebrow: "Supplier side",
      title: "For fresh food suppliers",
      headline: "Simplify sales and order operations with your customers.",
      text: "Work with the customers you already supply through structured product data, offers and orders instead of scattered emails, spreadsheets and calls.",
      benefits: [
        "Maintain one catalogue mapped to each customer",
        "Respond to customer requests with structured offers",
        "Receive and confirm orders in one place",
        "Reduce manual re-entry between channels",
        "Share delivery and document information reliably",
      ],
      cta: "Explore Consentio for suppliers",
    },
    stories: {
      eyebrow: "Customer stories",
      headline: "Fresh food operations, improved in practice.",
      cta: "See all customer stories",
    },
    implementation: {
      eyebrow: "Start small. Scale fast.",
      headline: "A modular approach. Value from the first deployment.",
      text: "Start with a focused use case, prove value quickly, then expand progressively across categories, workflows and teams.",
      steps: [
        {
          title: "Pilot",
          lead: "Start focused.",
          text: "Start with one use case, category or supplier scope.",
        },
        {
          title: "Prove value",
          lead: "Demonstrate impact quickly.",
          text: "Deploy, measure operational impact and validate the business case.",
        },
        {
          title: "Expand",
          lead: "Build progressively.",
          text: "Add modules, categories, suppliers and workflows based on priorities and demonstrated value.",
        },
        {
          title: "Scale",
          lead: "Extend across the organization.",
          text: "Scale across teams, categories and markets while integrating Consentio with existing enterprise systems.",
        },
      ],
      valueLine: ["Focused scope", "Fast deployment", "Measurable value", "Progressive scale"],
      integrationsTitle: "Designed to work with your existing systems",
      integrationsSection: {
        eyebrow: "Integrations & technology partners",
        headline: "Already connected to your ecosystem.",
        text: "Consentio integrates with leading enterprise platforms to accelerate deployment and fit into your existing technology stack.",
        benefitTitle: "Connect faster. Deploy with less friction.",
        benefitText:
          "Existing integrations help Consentio fit into your current systems without rebuilding your technology stack.",
        partnerEyebrow: "Technology partners",
        partnerTitle: "Building technology for the food supply chain?",
        partnerText:
          "We partner with complementary software providers to create more connected workflows for our customers.",
        partnerCta: "Become a partner",
      },
    },
    finalCta: {
      headline: "See Consentio on your own categories.",
      text: "Book a demo with the team that works with your side of the trade.",
      primary: "Book a demo",
      retailerLink: "For retailers",
      supplierLink: "For suppliers",
    },
  },

  retailers: {
    seo: {
      title: "Fresh Food Procurement Software for Retailers | Consentio",
      description:
        "Forecast demand, run supplier consultations, compare offers, allocate volumes and automate purchase orders for fresh food categories.",
    },
    hero: {
      eyebrow: "For food retailers and buying offices",
      headline: "Run your fresh food buying operations from one place.",
      text: "Consentio gives buying teams a structured workspace for demand planning, supplier consultations, offer comparison, allocation and order execution across fresh categories.",
      primary: "Book a demo",
      secondary: "See the modules",
      dashboard: {
        title: "Buying workspace",
        rows: [
          { label: "Open consultations", value: "Week 24 — 6 categories" },
          { label: "Offers received", value: "42 from 18 suppliers" },
          { label: "Volumes to allocate", value: "Fresh produce, seafood" },
          { label: "Orders to confirm", value: "Ready for ERP sync" },
        ],
      },
    },
    problem: {
      headline: "Buying teams spend their day reconciling information.",
      text: "\n",
      points: [
        "Supplier offers spread across email, phone and messaging",
        "Manual spreadsheets rebuilt for every consultation",
        "No shared view of prices, volumes and availability",
        "Allocation decisions difficult to justify afterwards",
        "Orders re-entered into several systems",
        "Limited visibility on supplier performance",
      ],
    },
    workflow: {
      headline: "The buying workflow, end to end.",
      stages: [
        { stage: "Plan", title: "Demand planning", text: "Build volume plans by category, store group and period." },
        { stage: "Consult", title: "Supplier consultation", text: "Send structured requests to selected suppliers." },
        { stage: "Compare", title: "Offer comparison", text: "Review offers side by side on comparable criteria." },
        { stage: "Decide", title: "Allocation", text: "Split volumes across suppliers with decision context." },
        { stage: "Execute", title: "Orders", text: "Generate provisional and firm orders from allocations." },
        { stage: "Follow", title: "Execution and data", text: "Track confirmations, deliveries, documents and performance." },
      ],
    },
    modules: {
      headline: "Four connected blocks of buyer-side functionality.",
      text: "Each block works on its own and connects to the next. There is no separate product to buy for each step.",
      items: [
        {
          id: "forecasting",
          eyebrow: "Block 01",
          title: "Forecasting and planning",
          text: "Anticipate demand and share target volumes with suppliers before decisions have to be made.",
          capabilities: [
            "Demand plans by category, store group and period",
            "Historical and seasonal analysis",
            "Promotion and campaign planning",
            "Volume targets shared with suppliers",
            "Plan versus actual follow-up",
          ],
          screenshot: {
            title: "Demand plan",
            rows: [
              { label: "Category", value: "Fresh produce" },
              { label: "Period", value: "Weeks 24-27" },
              { label: "Planned volume", value: "By store group" },
              { label: "Shared with", value: "Selected suppliers" },
            ],
          },
        },
        {
          id: "consultations",
          eyebrow: "Block 02",
          title: "Consultations and offers",
          text: "Run structured consultations with the suppliers you work with and receive comparable responses.",
          capabilities: [
            "Structured requests and tenders",
            "Supplier response deadlines and reminders",
            "Prices, volumes, origin, calibre and packaging",
            "Availability and quality information",
            "Full consultation history",
          ],
          screenshot: {
            title: "Consultation",
            rows: [
              { label: "Request", value: "Week 24 — stone fruit" },
              { label: "Suppliers invited", value: "12" },
              { label: "Responses", value: "9 structured offers" },
              { label: "Deadline", value: "Automatic reminders" },
            ],
          },
        },
        {
          id: "allocation",
          eyebrow: "Block 03",
          title: "Comparison and allocation",
          text: "Compare the market you received and distribute volumes across suppliers with full context.",
          capabilities: [
            "Side-by-side offer comparison",
            "Price, volume, origin and quality criteria",
            "Shortage and gap detection",
            "Volume allocation across suppliers",
            "Traceable decision rationale",
          ],
          screenshot: {
            title: "Offer comparison",
            rows: [
              { label: "Offers compared", value: "9" },
              { label: "Criteria", value: "Price, volume, origin" },
              { label: "Allocation", value: "Split across 4 suppliers" },
              { label: "Status", value: "Ready to order" },
            ],
          },
        },
        {
          id: "orders",
          eyebrow: "Block 04",
          title: "Orders and execution",
          text: "Turn allocations into orders and follow execution through to delivery and documents.",
          capabilities: [
            "Provisional and firm purchase orders",
            "Supplier confirmations and amendments",
            "Delivery information and documents",
            "Invoice and dispute follow-up",
            "Supplier performance tracking",
          ],
          screenshot: {
            title: "Order execution",
            rows: [
              { label: "Orders sent", value: "18" },
              { label: "Confirmed", value: "16" },
              { label: "Amendments", value: "2 pending review" },
              { label: "Documents", value: "Delivery notes attached" },
            ],
          },
        },
      ],
    },
    evidence: {
      headline: "What buying teams gain.",
      // No guaranteed savings or performance figures are promised on this page.
      points: [
        "One workspace for the full buying cycle",
        "Comparable supplier information for every decision",
        "Less manual re-entry between tools",
        "Traceable allocation and order history",
      ],
    },
    integration: {
      eyebrow: "ERP and systems",
      headline: "Consentio complements your ERP. It does not replace it.",
      text: "Your ERP remains the system of record for master data, stock and finance. Consentio handles the collaborative layer that sits before and around the order: planning, consultation, offer comparison, allocation and supplier execution. Validated order and document data is then synchronized back into your existing systems.",
      capabilities: [
        "Product and supplier master data imported from your ERP",
        "Validated orders pushed back to your ERP",
        "Delivery and invoice documents exchanged in structured formats",
        "EDI and file-based exchanges supported",
        "API access for custom flows",
        "Integration scope defined project by project",
      ],
      note: "Integration work is scoped with your IT team. We do not present integrations as plug and play.",
      cta: "Discuss an integration",
    },
    implementation: {
      headline: "Implementation, category by category.",
      steps: [
        { title: "Scope", text: "Define the first category, suppliers and workflows." },
        { title: "Set up", text: "Import product and supplier data and configure the workflow." },
        { title: "Onboard suppliers", text: "We support your suppliers through onboarding and first use." },
        { title: "Extend", text: "Add categories, teams and system integrations progressively." },
      ],
    },
    finalCta: {
      headline: "See Consentio on your own categories and suppliers.",
      text: "We prepare the demo around your buying workflows.",
      primary: "Book a retailer demo",
    },
  },

  suppliers: {
    seo: {
      title: "Sales and Order Management for Fresh Food Suppliers | Consentio",
      description:
        "Consentio helps fresh food suppliers manage catalogues, customer requests, offers and orders with the retail customers they already supply.",
    },
    hero: {
      eyebrow: "For suppliers",
      headline:
        "Work with all your retail customers from just one place",
      text: "Collaborate with retailers already using Consentio — from offers to orders, shipments and invoicing — or automate and digitize your other customer relationships on the platform. Or both.",
      primary: "Book a demo",
      secondary: "Explore supplier solutions",
      qualifier:
        "Starting on Consentio to work with your retail customers is free. You get to decide when you want to use paying modules.",
    },

    proof: {
      headline: "Used by supplier teams working with European fresh food retailers.",
      points: [
        "Fresh produce, seafood, meat and other fresh categories",
        "Sales, customer service and operations teams",
        "Works alongside your existing ERP",
        "Available in English, French and Spanish",
      ],
    },
    free: {
      eyebrow: "Consentio supplier",
      headline: "Everything you need to sell fresh produce efficiently is on Consentio.",
      text: "When one of your retail customers works with Consentio, you receive an invitation to use the platform to manage the operational relationship with them.",
      cards: [
        {
          title: "Respond to offers and consultations",
          text: "Share prices, volumes and availability.",
        },
        {
          title: "Receive customer orders",
          text: "Centralize structured orders from Consentio retailers.",
        },
        {
          title: "Confirm shipments",
          text: "Communicate quantities, dates and delivery information.",
        },
        {
          title: "Manage invoicing",
          text: "Complete the transaction flow in the same workspace.",
        },
      ],
    },
    transition: {
      eyebrow: "From one retailer to all your customers",
      statement:
        "Consentio is not only an offering system for retailers who use it.\nIt is also be the operating layer for all your customers.",
      text: "Use Consentio with connected retailers. Extend the same level of automation to the rest of your customer base with our solutions Magic Orders and Webshop.",
      root: "Consentio Center of Operations",
      branches: [
        { title: "Magic Orders", text: "Automate incoming orders" },
        { title: "Webshop", text: "Create a digital ordering channel" },
      ],
    },
    extend: {
      eyebrow: "Extend Consentio",
      headline: "Two modules to digitize the rest of your customer base.",
      magicOrders: {
        label: "Magic Orders",
        headline: "Automate incoming orders from every customer.",
        text: "Customers can keep sending orders through their existing channels. Magic Orders reads them, structures them and pushes them into your workflow or ERP. You're a cooperative? It also works with shipping notes.",
        benefits: [
          "Eliminate manual order entry",
          "Reduce errors",
          "Integrate existing customer orders",
          "No need to change customer habits",
        ],
        cta: "Explore Magic Orders",
      },
      webshop: {
        label: "Webshop",
        headline: "Give customers a digital way to order from you.",
        text: "Publish your catalogue and offers through a branded ordering interface and receive customer orders directly.",
        benefits: [
          "Digitize direct sales",
          "Distribute offers and catalogues",
          "Simplify repeat ordering",
          "Give customers a self-service ordering experience",
        ],
        cta: "Explore Webshop",
      },
    },
    outcomes: {
      eyebrow: "Operational outcomes",
      headline: "Less manual work. More time for what matters.",
      items: [
        "Less manual order entry",
        "Fewer errors",
        "Faster customer response",
        "One view across customers",
        "Better sales & operations coordination",
        "More time spent selling",
      ],
    },


    modules: {
      headline: "Four modules to improve sales team efficiency.",
      items: [
        {
          id: "catalogues",
          title: "Manage catalogues and prices effortlessly",
          text: "Maintain one reliable catalogue and turn it into customer-specific offers.",
          capabilities: [
            "Master product catalogue",
            "Customer-specific references and packaging",
            "Customer-specific prices, availability and validity periods",
            "Permanent and temporary offers",
            "Specifications and certification documents",
          ],
          screenshot: {
            title: "Catalogue",
            rows: [
              { label: "Products", value: "Master catalogue" },
              { label: "Customer mapping", value: "Per retailer references" },
              { label: "Offer", value: "Week 24 availability" },
              { label: "Documents", value: "Specifications attached" },
            ],
          },
        },
        {
          id: "order-automation",
          title: "Orders, delivery notes and invoices, with zero manual entry",
          text: "Consolidate incoming customer orders and remove manual re-entry.",
          capabilities: [
            "All retail orders in only one place",
            "Automatically sent to the ERP, no manual entry",
            "Amendments notifications to your teams",
            "Delivery notes and invoices",
            "Fewer entry errors and disputes",
          ],
          screenshot: {
            title: "Order inbox",
            rows: [
              { label: "Orders received", value: "24 today" },
              { label: "Confirmed", value: "21" },
              { label: "Amendments", value: "3 to review" },
              { label: "Documents", value: "Generated automatically" },
            ],
          },
        },
        {
          id: "workspace",
          title: "Improve collaboration within your team",
          text: "Give sales, customer service and operations a shared view of each customer..",
          capabilities: [
            "Shared customer history",
            "Roles and permissions by team",
            "Internal notes and follow-up",
            "Task ownership on requests and orders",
            "Consistent responses across the team",
          ],
          screenshot: {
            title: "Customer workspace",
            rows: [
              { label: "Customer", value: "Retail group" },
              { label: "Open requests", value: "4" },
              { label: "Owner", value: "Sales and operations" },
              { label: "History", value: "Offers and orders" },
            ],
          },
        },
        {
          id: "visibility",
          title: "Improve customer knowledge, gain insights for better sales.",
          text: "Follow your own commercial and operational activity with your customers.",
          capabilities: [
            "Activity by customer and product",
            "Offer and order follow-up",
            "Service level and amendment tracking",
            "Exportable operational data",
            "Shared reporting with your teams",
          ],
          screenshot: {
            title: "Activity overview",
            rows: [
              { label: "Customers", value: "Active this week" },
              { label: "Offers sent", value: "By product family" },
              { label: "Orders", value: "Confirmed and amended" },
              { label: "Export", value: "Operational data" },
            ],
          },
        },
      ],
    },
    testimonials: {
      headline: "What supplier teams say.",
      pending: "Approved supplier testimonials will be published here.",
    },
    integration: {
      headline: "Works alongside your existing systems.",
      text: "Consentio handles the exchange with your customers and synchronizes confirmed order and document data with your ERP. Your internal systems remain in place.",
      capabilities: [
        "Product and price data imported from your systems",
        "Confirmed orders exported to your ERP",
        "Structured delivery and invoice documents",
        "EDI and file-based exchanges supported",
        "API access for custom flows",
        "Integration scope defined project by project",
      ],
      cta: "Discuss an integration",
    },
    faq: {
      headline: "Frequently asked questions",
      items: [
        {
          q: "Do my customers need to use Consentio?",
          a: "Consentio is most useful when you and your customer work in the same structured flow. Our team helps set up the connection with the customers you already supply.",
        },
        {
          q: "Does Consentio replace my ERP?",
          a: "No. Consentio handles the collaborative layer with your customers and synchronizes confirmed order and document data with your existing systems.",
        },
        {
          q: "How long does implementation take?",
          a: "It depends on the number of customers, products and integrations. We usually start with one customer flow and extend progressively.",
        },
        {
          q: "Can I keep customer-specific references and packaging?",
          a: "Yes. Your master catalogue can be mapped to each customer's references, packaging and specifications.",
        },
        {
          q: "Who in my company uses Consentio?",
          a: "Typically sales, customer service and operations teams, with roles and permissions defined per team.",
        },
        {
          q: "Is Consentio available in my language?",
          a: "The platform and our teams work in English, French and Spanish.",
        },
      ],
    },
    finalCta: {
      headline: "Work with all your retail customers from just one place",
      text: "See how Consentio can support your supplier operations.",
      primary: "Book a demo",
      secondary: "Explore customer stories",
    },

  },

  stories: {
    seo: {
      title: "Customer Stories | Consentio",
      description:
        "Explore how retailers, food groups and suppliers use Consentio to improve purchasing, collaboration and operational execution.",
    },
    hero: {
      headline: "Fresh food operations, improved in practice.",
      text: "Explore how retailers, food groups and suppliers use Consentio to improve purchasing, collaboration and operational execution.",
    },
    filtersLabel: "Filter stories",
    all: "All stories",
    filters: ["Retailers", "Suppliers"],
    template: {
      company: "Company",
      industry: "Industry",
      context: "Operational context",
      challenge: "Initial challenge",
      workflow: "Consentio workflow",
      modules: "Modules used",
      approach: "Implementation approach",
      results: "Results",
      quote: "Customer quote",
      cta: "Discuss a similar project",
      readStory: "Read customer story",
      pending: "Awaiting approved customer content.",
    },
    emptyFilter: "No customer story matches this filter yet.",
  },

  company: {
    seo: {
      title: "Company | Consentio",
      description:
        "Consentio combines fresh food expertise, retail knowledge, data and technology to improve how buyers and suppliers work together.",
    },
    hero: {
      eyebrow: "About Consentio",
      headline: "Technology built for the realities of fresh food.",
      text: "Consentio combines fresh food expertise, retail knowledge, data and technology to improve how buyers and suppliers work together.",
    },
    mission: {
      headline: "Our mission",
      text: "Make fresh food trade more efficient, reliable and sustainable by connecting decisions, data and operational workflows.",
    },
    whyNow: {
      headline: "Fresh food needs its own digital infrastructure.",
      text: "Fresh categories represent some of the most complex operations in food retail. Product volatility, fragmented supplier relationships and perishable inventory cannot be managed effectively with tools designed for standardized goods.",
    },
    expertise: {
      headline: "Built from industry and technology experience.",
      pillars: ["Retail and buying operations", "Fresh food industry expertise", "Technology, data and AI"],
      proof: "10 years of combined product development and field experience.",
    },
    footprint: {
      headline: "A European platform with local industry expertise.",
      officeLabel: "Office location to be validated",
    },
    klarys: {
      headline: "Consentio and Klarys have joined forces.",
      text: "The combination brings together complementary product expertise across fresh produce, seafood, meat and other fresh categories, creating a broader platform for retailers and suppliers.",
      cta: "Read the announcement",
    },
  },

  klarys: {
    seo: {
      title: "Klarys joins Consentio | One fresh food procurement platform",
      description:
        "Klarys and Consentio have joined forces to build one integrated platform for fresh food procurement and supplier collaboration.",
    },
    hero: {
      eyebrow: "Announcement",
      headline: "Klarys is now part of Consentio.",
      text: "Klarys and Consentio have joined forces to build one integrated platform for fresh food procurement and supplier collaboration.",
    },
    benefits: [
      "Broader fresh food coverage",
      "More retailer and supplier workflows",
      "A stronger European team",
    ],
    continuity: {
      headline: "For existing customers and users",
      text: "Your existing access, operational workflows and support channels remain available. Our teams will communicate directly about any future product or contractual changes.",
    },
    ctas: {
      retailers: "Discover Consentio for retailers",
      contact: "Contact the team",
      signIn: "Sign in",
    },
  },

  resources: {
    seo: {
      title: "Resources | Consentio",
      description: "Insights for fresh food procurement and supplier teams.",
    },
    hero: {
      headline: "Insights for fresh food procurement and supplier teams.",
      text: "Articles, guides and operational insights for buying and commercial teams working with fresh categories.",
    },
    categories: [
      "Fresh food procurement",
      "Supplier collaboration",
      "Forecasting",
      "Consultations and offers",
      "Order automation",
      "Digital operations",
    ],
    all: "All categories",
    placeholderBadge: "Existing article to migrate",
    cmsNote:
      "CMS-ready grid. Each article record supports: title, description, category, language, publication date, author, image, SEO metadata, old URL and new URL.",
    fields: {
      title: "Title",
      description: "Description",
      category: "Category",
      language: "Language",
      date: "Publication date",
      author: "Author",
      image: "Image",
      seo: "SEO metadata",
      oldUrl: "Old URL",
      newUrl: "New URL",
    },
  },

  demo: {
    seo: {
      title: "Book a demo | Consentio",
      description:
        "Tell us about your organization and the fresh food workflows you want to improve. We will connect you with the relevant Consentio team.",
    },
    headline: "Let's discuss your fresh food operations.",
    text: "Tell us about your organization and the workflows you want to improve. We will connect you with the relevant Consentio team.",
    aside: {
      title: "What happens next",
      steps: [
        "We review your request and operational context.",
        "A specialist from the retailer or supplier team contacts you.",
        "We prepare a demo focused on your categories and workflows.",
      ],
    },
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Work email",
      phone: "Phone number",
      company: "Company",
      country: "Country",
      companyType: "Company type",
      jobTitle: "Job title",
      employees: "Number of employees",
      objective: "Primary objective",
      message: "Message",
      consent:
        "I agree that Consentio may store and process my information to respond to this request, in line with the privacy policy.",
      select: "Please select",
      optional: "Optional",
      submit: "Book a demo",
      submitting: "Sending…",
    },
    companyTypes: [
      "Food retailer",
      "Central buying office",
      "Grower or producer",
      "Cooperative",
      "Wholesaler",
      "Food manufacturer",
      "Other",
    ],
    objectives: [
      "Forecast demand",
      "Run supplier consultations",
      "Compare offers and allocate volumes",
      "Automate orders",
      "Improve supplier collaboration",
      "Manage product catalogues",
      "Other",
    ],
    employeeRanges: ["1-50", "51-200", "201-1,000", "1,001-5,000", "More than 5,000"],
    errors: {
      required: "This field is required",
      email: "Enter a valid work email address",
      consent: "Please accept the privacy terms to continue",
      generic: "Something went wrong. Please try again or contact us by email.",
    },
    success: {
      title: "Request received",
      text: "Thank you. Our team will review your request and contact you shortly.",
      back: "Back to home",
    },
  },

  footer: {
    description: "Fresh food procurement and supplier collaboration, connected end to end.",
    solutions: "Solutions",
    resources: "Resources",
    company: "Company",
    access: "Access",
    platformAccess: "Platform access",
    legal: "Legal",
    links: {
      retailers: "For retailers",
      suppliers: "For suppliers",
      forecasting: "Forecasting and planning",
      consultations: "Consultations and offers",
      allocation: "Comparison and allocation",
      orders: "Orders and execution",
      integrations: "ERP integration",
      stories: "Customer stories",
      articles: "Articles and guides",
      about: "About us",
      klarys: "Klarys joins Consentio",
      contact: "Contact",
      bookDemo: "Book a demo",
      signIn: "Sign in",
      klarysLogin: "Klarys Login",
      consentioLogin: "Consentio Login",
      privacy: "Privacy policy",
      legal: "Legal notice",
      cookies: "Cookie policy",
    },
  },

  legal: {
    privacy: {
      title: "Privacy policy",
      intro:
        "This page describes how Consentio processes personal data collected through this website. LEGAL APPROVAL REQUIRED: replace this template with the final policy validated by legal counsel before publication.",
      sections: [
        { title: "Data controller", text: "Consentio, contact details to be confirmed by the legal team." },
        {
          title: "Data we collect",
          text: "Contact details submitted through the demo request form, and technical data collected by analytics tools where consent has been given.",
        },
        {
          title: "Purpose of processing",
          text: "Responding to commercial requests, managing customer relationships and improving the website.",
        },
        {
          title: "Your rights",
          text: "You may request access, rectification, deletion or portability of your personal data, and object to processing.",
        },
        { title: "Retention", text: "Retention periods to be confirmed by the legal team." },
      ],
    },
    notice: {
      title: "Legal notice",
      intro:
        "Publisher, hosting and company registration information. LEGAL APPROVAL REQUIRED: complete with validated corporate details before publication.",
      sections: [
        { title: "Publisher", text: "Company name, legal form, share capital, registration number and registered office to be confirmed." },
        { title: "Hosting", text: "Hosting provider details to be confirmed." },
        { title: "Intellectual property", text: "All content on this website is the property of Consentio unless stated otherwise." },
      ],
    },
    cookies: {
      title: "Cookie policy",
      intro:
        "This page describes the cookies and similar technologies used on this website. LEGAL APPROVAL REQUIRED before publication.",
      sections: [
        { title: "Essential cookies", text: "Required for the website to function, including language preference storage." },
        { title: "Analytics cookies", text: "Used to measure audience and improve content. Placeholders are prepared for Google Analytics, Google Tag Manager, LinkedIn Insight Tag and HubSpot tracking." },
        { title: "Managing cookies", text: "You can manage cookies through your browser settings. A consent management tool will be connected before launch." },
      ],
    },
  },

  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has been moved.",
    cta: "Back to home",
  },
};

export type SiteContent = typeof en;
