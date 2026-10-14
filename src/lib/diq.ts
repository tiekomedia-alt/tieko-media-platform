export const DIQ_PATH = "/digital-intelligence-quotient";

export type DiqCategory =
  | "Foundation"
  | "Visibility"
  | "Commerce"
  | "Intelligence"
  | "Control";

export type DiqQuestion = {
  id: string;
  category: DiqCategory;
  text: string;
  context: string;
};

export const diqQuestions: DiqQuestion[] = [
  {
    id: "searchable-website",
    category: "Foundation",
    text: "Do you have a fully functional, searchable website?",
    context: "An owned website gives customers and search engines a dependable place to understand your offer.",
  },
  {
    id: "corporate-email",
    category: "Foundation",
    text: "Do you use a professional corporate email address, such as name@yourcompany.com?",
    context: "A domain-based email strengthens credibility and keeps business communication under company control.",
  },
  {
    id: "business-bank-account",
    category: "Commerce",
    text: "Do you have a dedicated business bank account?",
    context: "Separating business money creates clearer records, stronger controls and better financial decisions.",
  },
  {
    id: "mapped-social-identity",
    category: "Visibility",
    text: "Do you have active social accounts mapped to one consistent brand identity?",
    context: "Customers should recognise the same name, offer, visual identity and contact details across platforms.",
  },
  {
    id: "domiciliary-account",
    category: "Commerce",
    text: "Do you maintain a domiciliary account for receiving international currencies?",
    context: "International receiving capability can remove friction when serving clients or partners beyond Nigeria.",
  },
  {
    id: "advertising-account",
    category: "Visibility",
    text: "Have you set up and run a sponsored advertising account?",
    context: "Examples include Meta, Google and LinkedIn accounts owned by the business rather than an outside vendor.",
  },
  {
    id: "ai-workflows",
    category: "Intelligence",
    text: "Do you actively use an AI agent or AI-assisted workflow in daily operations?",
    context: "Useful AI adoption should improve a defined task while preserving human review and accountability.",
  },
  {
    id: "global-digital-offer",
    category: "Commerce",
    text: "Do you have a digital product or service that can be purchased from anywhere in the world?",
    context: "A globally accessible offer has a clear description, delivery method and usable payment journey.",
  },
  {
    id: "cloud-backup",
    category: "Control",
    text: "Is your core business data backed up securely in the cloud?",
    context: "Essential records should not exist only on one person's phone, laptop or messaging account.",
  },
  {
    id: "master-access",
    category: "Control",
    text: "Do you own and control the master passwords and recovery access for every digital asset?",
    context: "The organisation should retain access even when an employee, agency or freelancer leaves.",
  },
  {
    id: "international-payment-method",
    category: "Commerce",
    text: "Can your business make secure international online payments when necessary?",
    context: "This may be a supported international card or another compliant payment method suited to your operations.",
  },
  {
    id: "analytics",
    category: "Intelligence",
    text: "Do you measure where website visitors and qualified enquiries come from?",
    context: "Connected analytics should help you distinguish attention from meaningful commercial interest.",
  },
  {
    id: "customer-records",
    category: "Intelligence",
    text: "Do you maintain an organised record of customers, enquiries and follow-up?",
    context: "A simple, dependable record is more valuable than leads scattered across personal inboxes and chats.",
  },
  {
    id: "search-demand-content",
    category: "Visibility",
    text: "Do you publish content that answers questions your customers actively search for?",
    context: "Demand-led content helps the right audience discover your expertise before they are ready to contact you.",
  },
  {
    id: "business-listings",
    category: "Visibility",
    text: "Are your important online business listings accurate and actively managed?",
    context: "Names, locations, opening details, contact routes and service information should remain consistent.",
  },
  {
    id: "documented-workflows",
    category: "Foundation",
    text: "Are your important digital workflows documented so another person can follow them?",
    context: "Documented handoffs reduce dependence on memory and make improvement easier.",
  },
  {
    id: "privacy-compliance",
    category: "Control",
    text: "Do you have a clear process for protecting customer data and responding to privacy requests?",
    context: "Data collection needs purpose, access control, retention rules and accountable handling.",
  },
  {
    id: "security-basics",
    category: "Control",
    text: "Do critical accounts use unique passwords and multi-factor authentication?",
    context: "Basic access hygiene reduces the chance that one compromised password exposes the entire operation.",
  },
  {
    id: "mobile-conversion",
    category: "Foundation",
    text: "Can a customer understand your offer and take the next step easily on a mobile phone?",
    context: "The journey should load quickly, explain the offer and make contact or purchase straightforward.",
  },
  {
    id: "evidence-decisions",
    category: "Intelligence",
    text: "Does your team regularly use digital evidence to change a business decision?",
    context: "Digital intelligence becomes real when reports lead to an owner, an action and a later review.",
  },
];

export const diqCategories: DiqCategory[] = [
  "Foundation",
  "Visibility",
  "Commerce",
  "Intelligence",
  "Control",
];

export type DiqTier = {
  label: string;
  colour: "red" | "orange" | "green";
  summary: string;
  recommendation: string;
};

export function getDiqTier(score: number): DiqTier {
  if (score >= 70) {
    return {
      label: "Digitally intelligent",
      colour: "green",
      summary: "Your identity, visibility, payments and data work as one system, ready to support steady growth at home and abroad.",
      recommendation: "Protect what is working, strengthen your lowest category and review risk, automation and customer intelligence every quarter.",
    };
  }

  if (score >= 50) {
    return {
      label: "Visible but fragile",
      colour: "orange",
      summary: "You are active and easy to find, but key systems still rely on improvisation. One lost password or failed payment could stall you.",
      recommendation: "Strengthen ownership, payments, records and customer pathways before increasing advertising or content volume.",
    };
  }

  return {
    label: "Digitally exposed",
    colour: "red",
    summary: "Gaps in your identity, access, records or customer systems put the business at risk.",
    recommendation: "Fix the essentials first: controlled access, a credible web presence, dependable records and a working payment path.",
  };
}

export function calculateDiq(answers: boolean[]) {
  const safeAnswers = diqQuestions.map((_, index) => answers[index] === true);
  const score = safeAnswers.filter(Boolean).length * 5;
  const categoryScores = Object.fromEntries(
    diqCategories.map((category) => {
      const questionIndexes = diqQuestions
        .map((question, index) => ({ question, index }))
        .filter(({ question }) => question.category === category);
      const yesCount = questionIndexes.filter(({ index }) => safeAnswers[index]).length;
      return [category, Math.round((yesCount / questionIndexes.length) * 100)];
    }),
  ) as Record<DiqCategory, number>;

  return { score, tier: getDiqTier(score), categoryScores };
}
