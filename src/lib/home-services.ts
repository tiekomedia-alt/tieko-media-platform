export type HomeService = {
  name: string;
  href: string;
  description: string;
  linkLabel: string;
};

export type CapabilityGroup = {
  id: string;
  title: string;
  capability: string;
  statement: string;
  description: string;
  services: HomeService[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "visibility",
    title: "Build visibility",
    capability: "Amplify",
    statement: "Reach the right people with purpose.",
    description:
      "We connect media buying, outdoor advertising, content and press distribution to a defined audience, objective and measurement plan.",
    services: [
      {
        name: "Media Buying",
        href: "/services/media-buying",
        description:
          "Plan and place advertising around a defined audience, campaign objective and measurement framework. Tieko Media coordinates channel selection, budget allocation, buying, optimisation and reporting across suitable media.",
        linkLabel: "Explore Media Buying",
      },
      {
        name: "Digital Presence Optimisation",
        href: "/services/digital-presence-optimisation",
        description:
          "Improve how your business is found, understood, trusted and converted across your website, search engines, directories, content and emerging AI discovery systems.",
        linkLabel: "Improve Your Digital Presence",
      },
      {
        name: "Billboard Advertising",
        href: "/services/billboard-advertising",
        description:
          "Plan outdoor campaigns around location, audience, format, creative visibility and verified placement. Tieko Media coordinates the campaign from assessment to reporting.",
        linkLabel: "Explore Billboard Advertising",
      },
    ],
  },
  {
    id: "authority",
    title: "Build authority",
    capability: "Build",
    statement: "Create useful digital systems and owned assets.",
    description:
      "We plan websites, content systems, digital products, assessments and conversion pathways designed around real business needs.",
    services: [
      {
        name: "Content Creation",
        href: "/services/content-creation",
        description:
          "Build a repeatable content system that explains your value, develops authority and supports the customer journey. Strategy, production and distribution planning work together.",
        linkLabel: "Explore Content Creation",
      },
      {
        name: "Press Release Services",
        href: "/services/press-release-services",
        description:
          "Identify a credible news angle, prepare a clear release and coordinate suitable media outreach or distribution while distinguishing earned, sponsored and paid placement.",
        linkLabel: "Explore Press Release Services",
      },
    ],
  },
  {
    id: "foundations",
    title: "Build foundations",
    capability: "Establish",
    statement: "Build credible business and information foundations.",
    description:
      "From business compliance coordination to records governance, we help organisations put essential structures in place before complexity grows.",
    services: [
      {
        name: "Compliance",
        href: "/services/compliance",
        description:
          "Establish and maintain important business, regulatory and intellectual-property foundations through a properly scoped process. Regulated legal services are delivered by David Vanteko through Vanteko & Associates where required.",
        linkLabel: "Explore Compliance",
      },
      {
        name: "Data and Records Management",
        href: "/services/data-records-management",
        description:
          "Digitise, organise, classify, retain, retrieve and govern institutional records. Tieko Media also helps organisations discover useful intelligence within data they are authorised to process.",
        linkLabel: "Explore Data and Records Management",
      },
      {
        name: "Business Automation & AI Systems",
        href: "/services/business-automation-ai-systems",
        description:
          "Tieko Media helps businesses connect tools, automate repetitive work and build practical AI-assisted systems that improve response, follow-up, content operations, reporting and internal access to knowledge.",
        linkLabel: "Explore Business Automation & AI Systems",
      },
    ],
  },
  {
    id: "intelligence",
    title: "Build intelligence",
    capability: "Protect and inform",
    statement: "Improve decisions, reputation and operational clarity.",
    description:
      "We research markets, identify gaps, organise information and provide the intelligence needed to act with greater confidence.",
    services: [
      {
        name: "Intelligence Reports",
        href: "/services/intelligence-reports",
        description:
          "Turn fragmented market, competitor, search, audience and regulatory information into decision-ready intelligence. Commission research around a real commercial question.",
        linkLabel: "Explore Intelligence Reports",
      },
    ],
  },
];
