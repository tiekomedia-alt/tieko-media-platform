export type FocusedServiceSlug =
  | "billboard-advertising"
  | "intelligence-reports"
  | "data-records-management"
  | "digital-presence-optimisation";

export type FocusedService = {
  slug: FocusedServiceSlug;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  problemTitle: string;
  problemCopy: string;
  offerTitle?: string;
  services: Array<{
    number: string;
    title: string;
    copy: string;
  }>;
  process: Array<{
    number: string;
    title: string;
    copy: string;
  }>;
  processTitle?: string;
  boundaryTitle: string;
  boundaryCopy: string;
  finalTitle: string;
  finalCopy?: string;
};

export const focusedServices: Record<FocusedServiceSlug, FocusedService> = {
  "billboard-advertising": {
    slug: "billboard-advertising",
    eyebrow: "Billboard and Outdoor Advertising",
    title: "Put your message where the city can see it.",
    summary:
      "We coordinate outdoor campaigns from location assessment and format selection through creative readiness, placement and reporting.",
    image: "/images/services/billboard-lagos.webp",
    imageAlt:
      "Large-format outdoor billboard displayed on a commercial building in Lagos",
    imageCaption:
      "Lagos outdoor advertising format. Brand shown is not presented as a Tieko Media client.",
    problemTitle: "Outdoor advertising should begin with movement, audience and context.",
    problemCopy:
      "A visible board is not automatically the right board. We help businesses assess the objective, audience movement, viewing conditions, format and creative requirements before coordinating a suitable placement.",
    services: [
      {
        number: "01",
        title: "Location and audience assessment",
        copy: "Clarify the campaign objective and assess suitable corridors, neighbourhoods, audience movement and viewing conditions.",
      },
      {
        number: "02",
        title: "Format and availability coordination",
        copy: "Review suitable static, digital and other outdoor formats, then coordinate current availability with relevant media owners.",
      },
      {
        number: "03",
        title: "Creative readiness",
        copy: "Check that the message, scale, contrast and artwork specifications are appropriate for the chosen format and viewing distance.",
      },
      {
        number: "04",
        title: "Placement and reporting",
        copy: "Coordinate agreed production and placement steps, then collect the available proof of display and campaign documentation.",
      },
    ],
    process: [
      { number: "01", title: "Discuss", copy: "Share the audience, location preference, timing and campaign objective." },
      { number: "02", title: "Assess", copy: "We review formats, likely locations, availability and creative requirements." },
      { number: "03", title: "Scope", copy: "You receive a defined recommendation and costed scope before work begins." },
      { number: "04", title: "Coordinate", copy: "We manage agreed production, placement communication and follow-up." },
    ],
    boundaryTitle: "Placement is coordinated, not guaranteed in advance.",
    boundaryCopy:
      "Site availability, landlord or media-owner acceptance, regulatory requirements and installation timelines are controlled by external parties. We confirm the available scope before commitment and do not imply ownership of inventory or regulatory affiliation.",
    finalTitle: "Planning an outdoor campaign in Lagos or another Nigerian market?",
  },
  "intelligence-reports": {
    slug: "intelligence-reports",
    eyebrow: "Business Intelligence and Research",
    title: "Turn scattered information into a clear decision.",
    summary:
      "Focused research on one real business question, delivered as a practical brief.",
    image: "/images/services/business-intelligence.webp",
    imageAlt:
      "Illustrative Lagos research workspace with reports, charts and a laptop",
    imageCaption:
      "Illustration only. No client data shown.",
    problemTitle: "More information is not more clarity.",
    problemCopy:
      "You may hold pieces of market, competitor, customer and regulatory information with no clear way to use them. We define the question, gather the right evidence and deliver a brief you can act on.",
    offerTitle: "Research built around your decision.",
    services: [
      {
        number: "01",
        title: "Market and category research",
        copy: "Review demand, customer context and the shifts affecting your decision.",
      },
      {
        number: "02",
        title: "Competitor and visibility review",
        copy: "Review how competitors position themselves, communicate and show up in search.",
      },
      {
        number: "03",
        title: "Opportunity and gap analysis",
        copy: "Identify unmet needs, communication gaps and where deeper validation is needed.",
      },
      {
        number: "04",
        title: "Decision-ready report",
        copy: "Present sources, findings, limitations and next questions as a report or working session.",
      },
    ],
    process: [
      { number: "01", title: "Frame", copy: "Define the decision, audience and question the research must support." },
      { number: "02", title: "Research", copy: "Gather and compare suitable public, client-provided and authorised information." },
      { number: "03", title: "Interpret", copy: "Separate useful signals, evidence gaps, assumptions and limitations." },
      { number: "04", title: "Present", copy: "Deliver the agreed report and discuss practical next steps." },
    ],
    processTitle: "From question to brief.",
    boundaryTitle: "Research informs judgement. It does not replace it.",
    boundaryCopy:
      "Reports reflect the agreed scope and the information available at the time. We do not give investment advice, guarantee outcomes or present assumptions as facts.",
    finalTitle: "Have a business question that needs evidence?",
    finalCopy: "Tell us what you are trying to decide. We'll suggest the most useful next step.",
  },
  "data-records-management": {
    slug: "data-records-management",
    eyebrow: "Data and Records Management",
    title: "Make important business information easier to find, use and protect.",
    summary:
      "We help you organise physical and digital records into practical systems for classification, retrieval, retention and controlled use.",
    image: "/images/services/records-management.webp",
    imageAlt:
      "Illustrative records digitisation workspace with archive boxes, scanner and laptop",
    imageCaption:
      "Illustrative records workflow. No real personal, client or institutional records are displayed.",
    problemTitle: "Records become costly when nobody knows what exists or where it belongs.",
    problemCopy:
      "Disconnected files, inconsistent names and undocumented storage practices slow teams down and increase risk. We help define a workable structure that matches how authorised people need to create, retrieve, retain and dispose of information.",
    services: [
      {
        number: "01",
        title: "Records inventory and assessment",
        copy: "Identify record types, formats, owners, storage locations, retrieval problems and immediate priorities within the agreed scope.",
      },
      {
        number: "02",
        title: "Classification and file structure",
        copy: "Design practical naming, taxonomy, indexing and folder rules that staff can understand and maintain.",
      },
      {
        number: "03",
        title: "Digitisation workflow",
        copy: "Plan scanning, quality checks, metadata capture and migration for approved physical records and digital files.",
      },
      {
        number: "04",
        title: "Retrieval and governance support",
        copy: "Document access, retention, review and handover practices, with specialist referrals where legal or technical advice is required.",
      },
    ],
    process: [
      { number: "01", title: "Discover", copy: "Understand the records, users, systems and operational pain points." },
      { number: "02", title: "Design", copy: "Agree classification, digitisation, access and quality-control rules." },
      { number: "03", title: "Implement", copy: "Organise or migrate the agreed records in controlled stages." },
      { number: "04", title: "Handover", copy: "Provide documented workflows, responsibilities and next-step recommendations." },
    ],
    boundaryTitle: "Only authorised information should enter the process.",
    boundaryCopy:
      "The client remains responsible for confirming authority to process records and for approving access, retention and disposal decisions. Security controls, hosting, legal review and specialist compliance work are scoped separately where required.",
    finalTitle: "Are scattered records slowing down your team?",
  },
  "digital-presence-optimisation": {
    slug: "digital-presence-optimisation",
    eyebrow: "Website and Conversion Optimisation",
    title: "Turn your digital presence into a clearer customer journey.",
    summary:
      "We improve the owned journey from first visit to enquiry: your website, landing pages, messaging, conversion paths, analytics and follow-up.",
    image: "/images/services/digital-optimisation.webp",
    imageAlt:
      "Illustrative web optimisation workspace with laptop, mobile phone and customer journey notes",
    imageCaption:
      "Illustration only. Not a client result.",
    problemTitle: "More traffic cannot rescue a confusing customer journey.",
    problemCopy:
      "People may reach your website or profile and still struggle to understand the offer, trust the business or take the next step. We review the experience you control and fix the highest-friction gaps first.",
    offerTitle: "Four areas, scoped to your goal.",
    services: [
      {
        number: "01",
        title: "Customer-journey review",
        copy: "Review how clearly your website and owned profiles explain the offer, establish trust and direct visitors towards the right next action.",
      },
      {
        number: "02",
        title: "Website and landing pages",
        copy: "Improve messaging, structure, calls to action and the mobile experience.",
      },
      {
        number: "03",
        title: "Conversion and enquiry paths",
        copy: "Improve forms, booking routes, calls to action and hand-offs so interested visitors can move forward without avoidable friction.",
      },
      {
        number: "04",
        title: "Tracking and follow-up",
        copy: "Connect analytics and enquiry handling, so you learn from real customer behaviour.",
      },
    ],
    process: [
      { number: "01", title: "Review", copy: "Map the current digital journey and identify the highest-friction points." },
      { number: "02", title: "Prioritise", copy: "Separate urgent fixes, useful improvements and longer-term system work." },
      { number: "03", title: "Improve", copy: "Implement the agreed content, technical and conversion changes." },
      { number: "04", title: "Measure", copy: "Check behaviour and outcomes, then define the next improvement cycle." },
    ],
    processTitle: "Clarity first. Then a defined scope.",
    boundaryTitle: "We improve the customer journey, not promise sales.",
    boundaryCopy:
      "Customer decisions depend on the offer, market, pricing, response time and other factors outside a website. We improve the agreed digital experience and measurement system without guaranteeing enquiries or sales.",
    finalTitle: "Ready to make it easier for customers to choose you?",
    finalCopy: "Tell us where customers drop off. We'll suggest the most useful next step.",
  },
};
