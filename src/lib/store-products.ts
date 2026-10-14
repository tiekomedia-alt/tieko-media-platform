export type StoreCategory =
  | "Infrastructure"
  | "Books & guides"
  | "Machinery"
  | "Furniture & craft"
  | "Decor & art"
  | "Prompt systems"
  | "Learning resources";

export type StoreProduct = {
  slug: string;
  title: string;
  shortTitle: string;
  category: StoreCategory;
  format: string;
  accent: "red" | "gold" | "green" | "ink";
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string }[];
  galleryHeading?: string;
  galleryDescription?: string;
  priceNgn?: number;
  description: string;
  promise: string;
  overview: string[];
  suitableFor: string[];
  includes: string[];
  process: { title: string; description: string }[];
  ctaLabel: string;
  ctaHref: string;
  ctaNote: string;
  relatedInsights: { label: string; href: string }[];
};

export const storeProducts: StoreProduct[] = [
  {
    slug: "data-centre-sourcing-lagos",
    title: "Data Centre Sourcing in Lagos",
    shortTitle: "Lagos Data Centres",
    category: "Infrastructure",
    format: "Advisory and sourcing",
    accent: "green",
    image: "/images/store/data-centre-sourcing-facility.jpg",
    imageAlt: "Aerial view of a data-centre facility and its surrounding landscape",
    description:
      "A structured route for organisations assessing colocation, hosting and data-centre options in Lagos.",
    promise: "Move from a vague infrastructure request to a shortlist built around your actual operational needs.",
    overview: [
      "Choosing a data-centre arrangement is not simply a search for rack space. Capacity, connectivity, power resilience, physical security, compliance expectations, support and commercial terms all affect the decision.",
      "Tieko Media helps define the requirement, organise vendor questions and coordinate the information needed for a more useful comparison. Technical, legal and procurement specialists may be introduced where the scope requires them.",
    ],
    suitableFor: ["Growing companies", "Digital platforms", "Enterprise procurement teams", "International firms entering Lagos"],
    includes: ["Requirements brief", "Vendor-question framework", "Shortlisting support", "Decision and next-step summary"],
    process: [
      { title: "Define", description: "Clarify workloads, risk, access, budget and service expectations." },
      { title: "Compare", description: "Organise suitable options against one consistent decision framework." },
      { title: "Coordinate", description: "Support introductions, information exchange and the path to due diligence." },
    ],
    ctaLabel: "Discuss your requirement",
    ctaHref: "/book-a-call?service=data-centre-sourcing-lagos",
    ctaNote: "Final recommendations depend on technical requirements and independent due diligence.",
    relatedInsights: [
      { label: "Data: from records to decisions", href: "/insights/business-data-from-records-to-decisions" },
      { label: "Why digital infrastructure matters", href: "/insights/africa-digital-infrastructure-curiosity" },
    ],
  },
  {
    slug: "tieko-media-books-amazon",
    title: "Tieko Media Digital Books on Amazon",
    shortTitle: "Digital Books",
    category: "Books & guides",
    format: "Four-book digital collection",
    accent: "red",
    description:
      "Tieko Media's digital-book collection for readers interested in Lagos, business, communication and practical growth.",
    promise: "Ideas made portable: focused reading designed to turn experience into something useful and repeatable.",
    overview: [
      "This collection brings Tieko Media's owned digital publications into one discoverable home while Amazon continues to handle book purchase and delivery.",
      "Each title now has its own search-focused page, verified cover, practical synopsis and direct Amazon purchase route.",
    ],
    suitableFor: ["Founders", "Creative professionals", "Business operators", "Readers building practical knowledge"],
    includes: ["Four Tieko Media titles", "Amazon fulfilment", "Individual title pages", "Cross-device digital reading"],
    process: [
      { title: "Discover", description: "Use the Tieko Store to understand the purpose and audience for each title." },
      { title: "Choose", description: "Open the relevant title page and review its synopsis and learning outcomes." },
      { title: "Buy on Amazon", description: "Complete the purchase through the applicable Amazon marketplace." },
    ],
    ctaLabel: "Browse the four titles",
    ctaHref: "/store#books-guides",
    ctaNote: "Amazon handles pricing, availability, payment and delivery for each book.",
    relatedInsights: [
      { label: "Answer what customers search for", href: "/insights/answer-what-customers-search-for" },
      { label: "Visibility is the new oil", href: "/insights/visibility-is-the-new-oil" },
    ],
  },
  {
    slug: "handwriting-workout-2027",
    title: "The Handwriting Workout: 365 Days of Guided Practice for Adults",
    shortTitle: "The Handwriting Workout",
    category: "Books & guides",
    format: "Paperback / 2027 edition",
    accent: "red",
    image: "/images/store/handwriting-workout-2027.jpg",
    imageAlt: "Cover of The Handwriting Workout 2027 Edition by Tieko Media Limited",
    description:
      "A dated, grid-based 2027 manual that develops clearer adult handwriting through one guided workout each day.",
    promise: "Give your handwriting focused attention every day and create a visible record of your progress across the year.",
    overview: [
      "The Handwriting Workout moves gradually from basic strokes and print letters to words, everyday writing and cursive practice. Every day of 2027 has its own full-page exercise.",
      "Readers trace light models, practise independently in the surrounding grid and use monthly comparisons to see how comfort, consistency and clarity are changing over time.",
    ],
    suitableFor: ["Adults rebuilding handwriting confidence", "Journal and planner users", "Learners practising print and cursive", "Anyone who wants a daily analogue habit"],
    includes: ["365 dated daily workouts", "A full practice grid on every daily page", "Progression from strokes to print and cursive", "Starting sample and monthly comparisons", "388 interior pages in A4 format"],
    process: [
      { title: "Trace", description: "Follow the light models to understand the day's movement and letter form." },
      { title: "Practise", description: "Use the surrounding grid to repeat the exercise in your own hand." },
      { title: "Compare", description: "Return to your starting sample during monthly check-ins and observe the change." },
    ],
    ctaLabel: "Buy the paperback on Amazon",
    ctaHref: "https://www.amazon.com/dp/B0HKZYPDTX",
    ctaNote: "Amazon controls current pricing, availability, shipping and returns.",
    relatedInsights: [
      { label: "Why disciplined systems outperform activity", href: "/insights/digital-intelligence-quotient" },
    ],
  },
  {
    slug: "lagos-handbook",
    title: "The Lagos Handbook",
    shortTitle: "The Lagos Handbook",
    category: "Books & guides",
    format: "Kindle edition",
    accent: "green",
    image: "/images/store/lagos-handbook.jpg",
    imageAlt: "Cover of The Lagos Handbook by Tieko Media Limited",
    description:
      "A practical local guide to arriving, getting around, eating and finding your feet in Lagos.",
    promise: "Arrive with a plan so you can spend less time figuring Lagos out and more time experiencing the city.",
    overview: [
      "The Lagos Handbook is written for first-time visitors, returning Nigerians, solo travellers and people arriving to meet a host. It connects pre-flight decisions to the everyday details that make a visit easier.",
      "Travel information can change. The handbook points readers towards official checks while also covering the practical rhythm of transport, payments, connectivity, food, neighbourhoods and planning a useful itinerary.",
    ],
    suitableFor: ["First-time Lagos visitors", "Returning Nigerians", "Solo travellers", "Guests meeting a local host"],
    includes: ["Arrival and airport preparation", "Mobile data, transport and accommodation guidance", "Payments, useful expressions and common situations", "Food, markets, art, landmarks and neighbourhoods", "Essential apps, checklists and sample itineraries"],
    process: [
      { title: "Prepare", description: "Check official entry requirements and plan the decisions that begin before the flight." },
      { title: "Arrive", description: "Use the practical guidance for connectivity, transport, payments and where to stay." },
      { title: "Explore", description: "Build an itinerary that matches your time, budget and reason for visiting." },
    ],
    ctaLabel: "Buy the Kindle edition on Amazon",
    ctaHref: "https://www.amazon.com/dp/B0HM48NF37",
    ctaNote: "Amazon controls current pricing, regional availability and digital delivery.",
    relatedInsights: [
      { label: "The Nigerian digital intelligence quotient", href: "/insights/digital-intelligence-quotient" },
      { label: "Visibility is the new oil", href: "/insights/visibility-is-the-new-oil" },
    ],
  },
  {
    slug: "creators-storyboard-planner",
    title: "The Creator's Storyboard Planner",
    shortTitle: "Storyboard Planner",
    category: "Books & guides",
    format: "Paperback creator workbook",
    accent: "gold",
    image: "/images/store/creators-storyboard-planner.jpg",
    imageAlt: "Cover of The Creator's Storyboard Planner by Tieko Media Limited",
    description:
      "A practical creator workbook for turning video ideas into organised, shootable production plans.",
    promise: "Shape the story before the camera rolls and keep the brief, shots, sound and edit review in one working system.",
    overview: [
      "The Creator's Storyboard Planner helps creators move from an idea to a structured visual sequence, a usable shot list and a clearer edit review.",
      "Its repeatable project cycles suit YouTube videos, short-form content, interviews, campaigns and other visual stories while leaving room for good ideas on set.",
    ],
    suitableFor: ["Video creators", "Social-media teams", "Interview and podcast producers", "Campaign and content planners"],
    includes: ["24 repeatable four-page project cycles", "Project brief and six-frame storyboard", "Shot list for framing, movement, audio and timing", "Edit review for clarity, pacing and continuity", "Supporting worksheets for locations, scripts, handoffs and repurposing"],
    process: [
      { title: "Brief", description: "Define the audience, goal, viewer promise and key message." },
      { title: "Storyboard", description: "Map the sequence, shots, movement, sound and capture requirements." },
      { title: "Review", description: "Check the completed edit for clarity, pacing, sound and continuity." },
    ],
    ctaLabel: "Buy the workbook on Amazon",
    ctaHref: "https://www.amazon.com/dp/B0HMFXKSLX",
    ctaNote: "Amazon controls current pricing, availability, shipping and returns.",
    relatedInsights: [
      { label: "Clipping as a distribution method", href: "/insights/clipping-new-social-media-distribution" },
      { label: "Answer what customers search for", href: "/insights/answer-what-customers-search-for" },
    ],
  },
  {
    slug: "graph-paper-notebook",
    title: "Graph Paper Notebook",
    shortTitle: "Graph Paper Notebook",
    category: "Books & guides",
    format: "Paperback / US Letter",
    accent: "ink",
    image: "/images/store/graph-paper-notebook.jpg",
    imageAlt: "Cover of the Graph Paper Notebook by Tieko Media Limited",
    description:
      "A large-format, quarter-inch quad-ruled notebook for calculations, diagrams, graphs, layouts and organised project thinking.",
    promise: "Put ideas into a clear, readable grid with enough room to calculate, sketch, map and plan.",
    overview: [
      "This US Letter graph-paper notebook gives students, teachers, makers and designers a structured surface for practical work.",
      "The light quarter-inch ruling supports maths, science, diagrams and project planning without overpowering the information placed on the page.",
    ],
    suitableFor: ["Students and teachers", "Makers and engineers", "Designers and planners", "Anyone who works better on a grid"],
    includes: ["109 graph-paper pages", "Quarter-inch squares", "One ownership page", "8.5 × 11 inch US Letter format", "Clean black-and-white interior"],
    process: [
      { title: "Calculate", description: "Use the grid for mathematics, graphs and structured working." },
      { title: "Sketch", description: "Map diagrams, layouts and technical ideas with consistent spacing." },
      { title: "Plan", description: "Keep project thinking organised on large-format pages." },
    ],
    ctaLabel: "Buy the notebook on Amazon",
    ctaHref: "https://www.amazon.com/dp/B0HMR2QZTM",
    ctaNote: "Amazon controls current pricing, availability, shipping and returns.",
    relatedInsights: [
      { label: "Turn records into useful decisions", href: "/insights/business-data-from-records-to-decisions" },
    ],
  },
  {
    slug: "six-week-ui-ux-project-tutorial",
    title: "Six-Week UI/UX Project Tutorial",
    shortTitle: "6-Week UI/UX Tutorial",
    category: "Learning resources",
    format: "Paid digital folder access",
    accent: "green",
    priceNgn: 30000,
    description:
      "A six-week, project-led learning resource for building practical UI/UX foundations before relying on AI tools.",
    promise: "Learn the thinking beneath the interface so AI accelerates your judgement instead of replacing it.",
    overview: [
      "This tutorial is positioned for learners who want a structured route into UI/UX fundamentals through project work rather than disconnected tips.",
      "Access is delivered privately by email after a verified payment. The Google Drive destination is kept out of public page code and is never displayed before payment confirmation.",
    ],
    suitableFor: ["Aspiring UI/UX designers", "Visual designers moving into product work", "Founders reviewing digital products", "AI-assisted builders who need stronger fundamentals"],
    includes: ["A six-week project pathway", "Foundation-first UI/UX learning", "Practical material organised in one folder", "A reusable reference beyond the six weeks", "Private access delivery after verified payment"],
    process: [
      { title: "Purchase", description: "Complete the secure Tieko checkout with the email that should receive access." },
      { title: "Verify", description: "The server independently verifies the Flutterwave transaction before fulfilment." },
      { title: "Receive access", description: "A private delivery email provides the tutorial folder and the access conditions." },
    ],
    ctaLabel: "Buy access securely",
    ctaHref: "/checkout/ui-ux-foundations-six-week-project",
    ctaNote: "Individual access only. Do not forward, copy, resell or redistribute the folder or its contents.",
    relatedInsights: [
      { label: "Why digital foundations matter", href: "/insights/paid-ads-without-digital-foundation" },
      { label: "Africa's digital infrastructure and curiosity gap", href: "/insights/africa-digital-infrastructure-curiosity" },
    ],
  },
  {
    slug: "storytelling-to-income-guide",
    title: "Storytelling to Income",
    shortTitle: "Storytelling to Income",
    category: "Books & guides",
    format: "Digital workbook",
    accent: "gold",
    description:
      "A practical Tieko Media guide for turning lived experience, expertise and useful stories into a clearer income pathway.",
    promise: "Stop treating storytelling as decoration. Build a message that leads somewhere commercially useful.",
    overview: [
      "Storytelling to Income helps creators and business owners connect what they know to a defined audience, a useful offer and a repeatable content direction.",
      "The guide is educational material, not a promise of earnings. Its value is in helping readers organise their thinking and act with greater clarity.",
    ],
    suitableFor: ["Creators", "Consultants", "Small-business owners", "Subject-matter experts"],
    includes: ["Story-positioning framework", "Audience prompts", "Offer-alignment exercises", "Action checklist"],
    process: [
      { title: "Find the useful story", description: "Identify the experience or knowledge that solves a real audience problem." },
      { title: "Shape the message", description: "Turn the raw story into a clear and credible communication structure." },
      { title: "Connect the offer", description: "Give attention a relevant next step instead of leaving it without direction." },
    ],
    ctaLabel: "Ask about the guide",
    ctaHref: "mailto:info@tiekomedia.com?subject=Storytelling%20to%20Income%20guide",
    ctaNote: "Availability and delivery details are confirmed before payment.",
    relatedInsights: [
      { label: "Clipping and social distribution", href: "/insights/clipping-new-social-media-distribution" },
      { label: "Content built around customer questions", href: "/insights/answer-what-customers-search-for" },
    ],
  },
  {
    slug: "smt-machinery",
    title: "Machinery by SMT",
    shortTitle: "SMT Machinery",
    category: "Machinery",
    format: "Physical equipment enquiry",
    accent: "ink",
    image: "/images/store/smt-machinery/smt-loader-fleet.jpg",
    imageAlt: "A line of yellow construction wheel loaders",
    gallery: [
      { src: "/images/store/smt-machinery/smt-wheel-loader.jpg", alt: "Yellow wheel loader at a work site" },
      { src: "/images/store/smt-machinery/smt-earthmover.jpg", alt: "Yellow earthmoving machinery at work" },
      { src: "/images/store/smt-machinery/smt-bulldozer.jpg", alt: "Yellow bulldozer moving earth" },
      { src: "/images/store/smt-machinery/smt-excavator-fleet.jpg", alt: "Excavator and construction equipment at a quarry" },
    ],
    galleryHeading: "Built for the work ahead.",
    galleryDescription: "Images are illustrative. Confirm the exact machine, specification, location, condition and availability before any commitment.",
    description:
      "A dedicated discovery page for machinery available through SMT, with specification-led enquiries and coordinated next steps.",
    promise: "Start with the job the machine must do, then confirm specification, condition, logistics and commercial terms.",
    overview: [
      "Industrial equipment should never be sold through a vague product card. A responsible transaction requires the exact model, capacity, condition, location, inspection position, logistics and documentation to be understood.",
      "This page creates the discovery route. Individual machine listings can be added as verified specifications, images, ownership records and availability are supplied by SMT.",
    ],
    suitableFor: ["Manufacturers", "Construction operators", "Agricultural processors", "Equipment buyers"],
    includes: ["Requirement capture", "Specification confirmation", "Inspection coordination", "Commercial next-step support"],
    process: [
      { title: "State the job", description: "Tell us the output, environment and capacity the equipment must support." },
      { title: "Verify the listing", description: "Review the exact machine specification, documentation and inspection position." },
      { title: "Plan the transaction", description: "Confirm commercial terms, logistics and any specialist checks required." },
    ],
    ctaLabel: "Request machinery details",
    ctaHref: "/book-a-call?service=smt-machinery",
    ctaNote: "Specifications, ownership, condition and availability must be verified before commitment.",
    relatedInsights: [
      { label: "Compliance as a business foundation", href: "/insights/compliance-business-longevity-nigeria" },
      { label: "Build with better business records", href: "/insights/business-data-from-records-to-decisions" },
    ],
  },
  {
    slug: "handwoven-rattan-baskets",
    title: "Handwoven Rattan Baskets",
    shortTitle: "Rattan Baskets",
    category: "Furniture & craft",
    format: "Physical product enquiry",
    accent: "gold",
    image: "/images/store/rattan-baskets/woven-storage-basket.jpg",
    imageAlt: "Handwoven natural-fibre storage basket with a fitted lid",
    gallery: [
      { src: "/images/store/rattan-baskets/woven-market-basket.jpg", alt: "Handwoven market-style basket with wrapped handles" },
      { src: "/images/store/rattan-baskets/woven-colour-baskets.jpg", alt: "A set of handwoven storage baskets in natural and red finishes" },
      { src: "/images/store/rattan-baskets/woven-basket-collection.jpg", alt: "A collection of handwoven storage baskets" },
      { src: "/images/store/rattan-baskets/woven-basket-detail.jpg", alt: "Close view of a handwoven basket and its handles" },
      { src: "/images/store/rattan-baskets/woven-basket-interior.jpg", alt: "Interior of a handwoven storage basket" },
    ],
    galleryHeading: "Natural texture. Useful form.",
    galleryDescription: "Every handwoven piece has its own character. We confirm the current design, size, finish, quantity and availability with you before an order is accepted.",
    description:
      "Decorative and functional rattan baskets for homes, hospitality spaces, gifting and considered retail collections.",
    promise: "Natural texture, useful form and a sourcing conversation built around size, quantity and intended use.",
    overview: [
      "Rattan baskets can work as storage, display pieces, gift packaging or a tactile detail within a larger interior concept.",
      "Because handmade pieces may vary, the Store confirms dimensions, finish, quantity and current availability before an order is accepted.",
    ],
    suitableFor: ["Homes", "Hotels and restaurants", "Interior designers", "Retail and gifting teams"],
    includes: ["Available-style review", "Size and quantity confirmation", "Finish guidance", "Delivery coordination"],
    process: [
      { title: "Choose the use", description: "Tell us whether the basket is for storage, styling, gifting or resale." },
      { title: "Confirm the piece", description: "Review current dimensions, finish, quantity and handmade variation." },
      { title: "Arrange delivery", description: "Agree collection or delivery once the order details are confirmed." },
    ],
    ctaLabel: "Chat on WhatsApp",
    ctaHref: "https://wa.me/message/FRKBB36RWTDVO1",
    ctaNote: "Message us on WhatsApp to confirm current images, sizes, prices and stock.",
    relatedInsights: [
      { label: "Visibility is commercial infrastructure", href: "/insights/visibility-is-the-new-oil" },
    ],
  },
  {
    slug: "rattan-chairs",
    title: "Rattan Chairs",
    shortTitle: "Rattan Chairs",
    category: "Furniture & craft",
    format: "Physical product enquiry",
    accent: "green",
    image: "/images/store/rattan-chairs/rattan-lounge-set.jpg",
    imageAlt: "Handwoven rattan lounge chairs with red cushions",
    gallery: [
      { src: "/images/store/rattan-chairs/rattan-pattern-chair.jpg", alt: "Handwoven rattan chair with a black-and-white patterned seat" },
      { src: "/images/store/rattan-chairs/rattan-red-hanging-chair.jpg", alt: "Rattan hanging chair with a red cushion" },
      { src: "/images/store/rattan-chairs/rattan-yellow-hanging-chair.jpg", alt: "Rattan hanging chair with a yellow cushion" },
    ],
    galleryHeading: "Seating with character.",
    galleryDescription: "Styles, dimensions, finishes and cushions vary. Message us to confirm the current options, lead time and delivery route for your space.",
    description:
      "Rattan seating for residential, hospitality and styled commercial spaces, sourced around the project's scale and finish.",
    promise: "A statement chair should suit the space, not merely fill it.",
    overview: [
      "The right rattan chair depends on proportion, intended use, finish and the environment in which it will live. The sourcing process begins with those details.",
      "Current designs, lead times, dimensions and delivery arrangements are confirmed before a customer makes a commitment.",
    ],
    suitableFor: ["Residential interiors", "Hospitality spaces", "Creative studios", "Retail display"],
    includes: ["Design-option review", "Dimension confirmation", "Quantity and finish planning", "Delivery coordination"],
    process: [
      { title: "Share the space", description: "Provide the setting, preferred style and approximate dimensions." },
      { title: "Review options", description: "Compare suitable designs, finishes and present availability." },
      { title: "Confirm fulfilment", description: "Agree the order, lead time and delivery plan." },
    ],
    ctaLabel: "Chat on WhatsApp",
    ctaHref: "https://wa.me/message/FRKBB36RWTDVO1",
    ctaNote: "Message us on WhatsApp to confirm design, size, finish, lead time and availability before payment.",
    relatedInsights: [
      { label: "Why dependable visibility matters", href: "/insights/paid-ads-without-digital-foundation" },
    ],
  },
  {
    slug: "decor-and-artworks",
    title: "Decor and Artworks",
    shortTitle: "Decor & Art",
    category: "Decor & art",
    format: "Curated physical pieces",
    accent: "red",
    image: "/images/store/decor-and-art/decor-mask-wall.jpg",
    imageAlt: "A curated arrangement of contemporary African-inspired wall masks",
    gallery: [
      { src: "/images/store/decor-and-art/decor-tall-masks.jpg", alt: "Three tall hand-carved wooden masks on display stands" },
      { src: "/images/store/decor-and-art/decor-carved-mask.jpg", alt: "Close view of a hand-carved wooden wall mask" },
      { src: "/images/store/decor-and-art/decor-mask-stands.jpg", alt: "A collection of wooden masks displayed on black stands" },
      { src: "/images/store/decor-and-art/decor-painted-drum.jpg", alt: "A hand-painted decorative drum with rope detailing" },
    ],
    galleryHeading: "Objects with presence.",
    galleryDescription: "Available pieces, dimensions, finishes and quantities change. We confirm the current item, condition and fulfilment route before an order is accepted.",
    description:
      "A changing collection of decor and artwork for spaces that need character, context and a more considered visual identity.",
    promise: "Choose pieces for the story and atmosphere they create—not simply because a wall is empty.",
    overview: [
      "The Tieko Store will present available pieces individually, with dimensions, medium, condition, artist or source information and fulfilment details wherever applicable.",
      "For project-led enquiries, pieces can also be considered as part of a wider home, office, hospitality or brand-space direction.",
    ],
    suitableFor: ["Collectors", "Homeowners", "Hospitality teams", "Interior and brand-space projects"],
    includes: ["Available-piece catalogue", "Dimensions and medium", "Placement conversation", "Collection or delivery planning"],
    process: [
      { title: "Set the direction", description: "Describe the space, atmosphere, scale and practical constraints." },
      { title: "Review pieces", description: "Consider verified details and current images for suitable works." },
      { title: "Place with intent", description: "Confirm acquisition and the collection, delivery or installation route." },
    ],
    ctaLabel: "Chat on WhatsApp",
    ctaHref: "https://wa.me/message/FRKBB36RWTDVO1",
    ctaNote: "Message us on WhatsApp to confirm the current collection, dimensions, prices and availability.",
    relatedInsights: [
      { label: "How visibility creates commercial value", href: "/insights/visibility-is-the-new-oil" },
    ],
  },
  {
    slug: "website-building-prompt-system",
    title: "Website Building Prompt System",
    shortTitle: "Website Prompt System",
    category: "Prompt systems",
    format: "Digital workflow resource",
    accent: "green",
    description:
      "A structured prompt and checklist system for planning, reviewing and improving a business website with AI support.",
    promise: "Use AI as part of a disciplined build process—not as a substitute for positioning, structure and quality control.",
    overview: [
      "This resource translates Tieko Media's practical website workflow into prompts that help users define goals, map pages, organise content and inspect important quality signals.",
      "It is designed as a working system. Users still need judgement, accurate business information and suitable technical review before publishing.",
    ],
    suitableFor: ["Founders", "Designers", "Marketing teams", "AI-assisted website builders"],
    includes: ["Discovery prompts", "Page-architecture workflow", "Content and SEO checks", "Pre-launch review checklist"],
    process: [
      { title: "Brief", description: "Turn the business goal and audience need into a usable project definition." },
      { title: "Build", description: "Work through structure, content, interface and technical prompts in sequence." },
      { title: "Inspect", description: "Use the review layer to find missing trust, search and usability foundations." },
    ],
    ctaLabel: "Join the product waitlist",
    ctaHref: "mailto:info@tiekomedia.com?subject=Website%20Building%20Prompt%20System",
    ctaNote: "Product format, licence, price and delivery method will be published before sale.",
    relatedInsights: [
      { label: "The cost of paid ads without foundations", href: "/insights/paid-ads-without-digital-foundation" },
      { label: "SEO and AEO visibility strategy", href: "/insights/seo-aeo-visibility-strategy" },
    ],
  },
  {
    slug: "business-compliance-check-prompt-pack",
    title: "Business Compliance Check Prompt Pack",
    shortTitle: "Compliance Prompt Pack",
    category: "Prompt systems",
    format: "Digital workflow resource",
    accent: "ink",
    description:
      "A guided prompt system for organising business compliance questions, evidence and follow-up actions before specialist review.",
    promise: "Surface the right questions earlier and organise the answers more responsibly.",
    overview: [
      "The prompt pack helps a business identify common information gaps across registration, privacy, contracts, sector obligations and record keeping.",
      "It is an organisational tool, not legal advice and not a substitute for a qualified professional or the relevant regulator. Its job is to make the next expert conversation better prepared.",
    ],
    suitableFor: ["New businesses", "Growing SMEs", "Operations teams", "Consultants preparing client reviews"],
    includes: ["Business-profile intake", "Evidence checklist", "Risk-question prompts", "Specialist hand-off summary"],
    process: [
      { title: "Profile", description: "Describe the business activity, customers, data, location and operating model." },
      { title: "Check", description: "Work through structured questions and record evidence instead of relying on memory." },
      { title: "Escalate", description: "Take unresolved issues to the appropriate legal, tax, privacy or sector specialist." },
    ],
    ctaLabel: "Join the product waitlist",
    ctaHref: "mailto:info@tiekomedia.com?subject=Business%20Compliance%20Check%20Prompt%20Pack",
    ctaNote: "This educational resource will include a clear no-legal-advice boundary.",
    relatedInsights: [
      { label: "Compliance and business longevity", href: "/insights/compliance-business-longevity-nigeria" },
      { label: "Nigeria business compliance map", href: "/insights/how-to-start-a-business-in-nigeria-compliance-map" },
    ],
  },
];

export const storeCategories = Array.from(new Set(storeProducts.map((product) => product.category)));

export function getStoreProduct(slug: string) {
  return storeProducts.find((product) => product.slug === slug);
}
