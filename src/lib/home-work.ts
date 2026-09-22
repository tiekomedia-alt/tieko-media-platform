export const reviewRequestHref = "/book-a-call?interest=digital-infrastructure-review";

export const infrastructureReviewAreas = [
  "Digital presence and reputation",
  "Website and search visibility",
  "Brand and content consistency",
  "Compliance and licensing",
  "Records and information systems",
  "Automation opportunities",
  "Measurement and decision-making",
] as const;

export const teamShuffleResponsibilities = [
  "Product strategy",
  "User experience and interface design",
  "Responsive engineering",
  "Fairness and balancing logic",
  "Custom team identities",
  "Verification records",
  "Shareable results",
  "Search architecture",
  "Continuing product improvement",
] as const;

export type WorkProject = {
  name: string;
  slug: string;
  location?: string;
  description: string;
  placeholder: string;
  caseStudyAvailable: boolean;
};

export const supportingWork: WorkProject[] = [
  {
    name: "Passion Care Academy",
    slug: "passion-care-academy",
    location: "Delaware",
    description: "Digital reputation improvement, website strategy and development.",
    placeholder: "Screenshot and verified outcome pending",
    caseStudyAvailable: false,
  },
  {
    name: "Compassion Heart World Mission",
    slug: "compassion-heart-world-mission",
    location: "Delaware",
    description: "Website strategy, design and development for an international nonprofit organisation.",
    placeholder: "Screenshot pending",
    caseStudyAvailable: false,
  },
  {
    name: "Delaware resort website",
    slug: "delaware-resort-website",
    location: "Client name unpublished",
    description: "Website design and development.",
    placeholder: "Screenshot pending",
    caseStudyAvailable: false,
  },
  {
    name: "Nairafolio",
    slug: "nairafolio",
    description: "Business compliance support.",
    placeholder: "Project documentation pending",
    caseStudyAvailable: false,
  },
  {
    name: "Spen Agro",
    slug: "spen-agro",
    description: "Compliance and licensing.",
    placeholder: "Project documentation pending",
    caseStudyAvailable: false,
  },
  {
    name: "OliveBloom",
    slug: "olivebloom",
    location: "Lagos",
    description: "Nonprofit compliance and branding.",
    placeholder: "Project documentation pending",
    caseStudyAvailable: false,
  },
];

export const homepageSupportingWork = supportingWork.slice(0, 2);

export const teamShuffleCaseStudy = {
  slug: "teamshuffle",
  href: "/work/teamshuffle",
  caseStudyAvailable: false,
} as const;
