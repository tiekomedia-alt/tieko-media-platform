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
  action: string;
  criticalRisk?: string;
};

export const diqQuestions: DiqQuestion[] = [
  {
    id: "searchable-website",
    category: "Foundation",
    text: "Do you have a fully functional, searchable website?",
    context: "An owned website gives customers and search engines a dependable place to understand your offer.",
    action: "Publish a mobile-friendly website that clearly explains your offer, contact route and next step.",
  },
  {
    id: "corporate-email",
    category: "Foundation",
    text: "Do you use a professional corporate email address, such as name@yourcompany.com?",
    context: "A domain-based email strengthens credibility and keeps business communication under company control.",
    action: "Set up a corporate email on a domain the business owns and secure its recovery access.",
  },
  {
    id: "business-bank-account",
    category: "Commerce",
    text: "Do you have a dedicated business bank account?",
    context: "Separating business money creates clearer records, stronger controls and better financial decisions.",
    action: "Open a dedicated business account and separate company transactions from personal spending.",
  },
  {
    id: "mapped-social-identity",
    category: "Visibility",
    text: "Do you have active social accounts mapped to one consistent brand identity?",
    context: "Customers should recognise the same name, offer, visual identity and contact details across platforms.",
    action: "Standardise your business name, offer, visuals and contact details across every active platform.",
  },
  {
    id: "domiciliary-account",
    category: "Commerce",
    text: "Do you maintain a domiciliary account for receiving international currencies?",
    context: "International receiving capability can remove friction when serving clients or partners beyond Nigeria.",
    action: "Set up a compliant international receiving route that fits your customers, currencies and business structure.",
  },
  {
    id: "advertising-account",
    category: "Visibility",
    text: "Have you set up and run a sponsored advertising account?",
    context: "Examples include Meta, Google and LinkedIn accounts owned by the business rather than an outside vendor.",
    action: "Create business-owned advertising accounts with controlled access, billing and conversion tracking.",
  },
  {
    id: "ai-workflows",
    category: "Intelligence",
    text: "Do you actively use an AI agent or AI-assisted workflow in daily operations?",
    context: "Useful AI adoption should improve a defined task while preserving human review and accountability.",
    action: "Choose one repeatable task for an AI-assisted workflow and document the required human review.",
  },
  {
    id: "global-digital-offer",
    category: "Commerce",
    text: "Do you have a digital product or service that can be purchased from anywhere in the world?",
    context: "A globally accessible offer has a clear description, delivery method and usable payment journey.",
    action: "Package one offer with a clear price, payment route and delivery process that works beyond your location.",
  },
  {
    id: "cloud-backup",
    category: "Control",
    text: "Is your core business data backed up securely in the cloud?",
    context: "Essential records should not exist only on one person's phone, laptop or messaging account.",
    action: "Back up essential business records in a controlled cloud system and test that they can be restored.",
    criticalRisk: "Essential business records may be lost because they are not securely backed up.",
  },
  {
    id: "master-access",
    category: "Control",
    text: "Do you own and control the master passwords and recovery access for every digital asset?",
    context: "The organisation should retain access even when an employee, agency or freelancer leaves.",
    action: "Recover and document company ownership of every master login, recovery email and administrator account.",
    criticalRisk: "The business could lose its digital assets because master access is not under company control.",
  },
  {
    id: "international-payment-method",
    category: "Commerce",
    text: "Can your business make secure international online payments when necessary?",
    context: "This may be a supported international card or another compliant payment method suited to your operations.",
    action: "Establish a secure, compliant method for necessary international business payments.",
  },
  {
    id: "analytics",
    category: "Intelligence",
    text: "Do you measure where website visitors and qualified enquiries come from?",
    context: "Connected analytics should help you distinguish attention from meaningful commercial interest.",
    action: "Connect analytics and conversion tracking, then review qualified enquiry sources every month.",
  },
  {
    id: "customer-records",
    category: "Intelligence",
    text: "Do you maintain an organised record of customers, enquiries and follow-up?",
    context: "A simple, dependable record is more valuable than leads scattered across personal inboxes and chats.",
    action: "Create one secure customer and enquiry register with an owner and a follow-up date.",
  },
  {
    id: "search-demand-content",
    category: "Visibility",
    text: "Do you publish content that answers questions your customers actively search for?",
    context: "Demand-led content helps the right audience discover your expertise before they are ready to contact you.",
    action: "Research the questions buyers ask and publish one useful answer linked to the relevant service each week.",
  },
  {
    id: "business-listings",
    category: "Visibility",
    text: "Are your important online business listings accurate and actively managed?",
    context: "Names, locations, opening details, contact routes and service information should remain consistent.",
    action: "Claim and correct your priority business listings so names, contacts and service details match everywhere.",
  },
  {
    id: "documented-workflows",
    category: "Foundation",
    text: "Are your important digital workflows documented so another person can follow them?",
    context: "Documented handoffs reduce dependence on memory and make improvement easier.",
    action: "Document the three workflows the business depends on most, including owners, access and hand-off steps.",
  },
  {
    id: "privacy-compliance",
    category: "Control",
    text: "Do you have a clear process for protecting customer data and responding to privacy requests?",
    context: "Data collection needs purpose, access control, retention rules and accountable handling.",
    action: "Create a data inventory, privacy notice, retention rules and a process for customer privacy requests.",
    criticalRisk: "Customer information is being handled without a clear privacy and accountability process.",
  },
  {
    id: "security-basics",
    category: "Control",
    text: "Do critical accounts use unique passwords and multi-factor authentication?",
    context: "Basic access hygiene reduces the chance that one compromised password exposes the entire operation.",
    action: "Move critical accounts to unique passwords in a password manager and enable multi-factor authentication.",
    criticalRisk: "Critical accounts are vulnerable because unique passwords and multi-factor authentication are not fully in place.",
  },
  {
    id: "mobile-conversion",
    category: "Foundation",
    text: "Can a customer understand your offer and take the next step easily on a mobile phone?",
    context: "The journey should load quickly, explain the offer and make contact or purchase straightforward.",
    action: "Audit the mobile journey for speed, readable copy and one obvious contact or purchase action.",
  },
  {
    id: "evidence-decisions",
    category: "Intelligence",
    text: "Does your team regularly use digital evidence to change a business decision?",
    context: "Digital intelligence becomes real when reports lead to an owner, an action and a later review.",
    action: "Hold a monthly evidence review that assigns one decision, one owner and one follow-up date.",
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
  if (score >= 85) {
    return {
      label: "Digitally intelligent",
      colour: "green",
      summary: "Your identity, visibility, payments and data work as one system, ready to support steady growth at home and abroad.",
      recommendation: "Protect what is working, strengthen your lowest category and review risk, automation and customer intelligence every quarter.",
    };
  }

  if (score >= 70) {
    return {
      label: "Digitally capable",
      colour: "green",
      summary: "Your core infrastructure works, but a few gaps still limit resilience, measurement or expansion.",
      recommendation: "Close the remaining control and intelligence gaps before increasing complexity or scaling demand.",
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

  if (score >= 20) {
    return {
      label: "Digitally exposed",
      colour: "red",
      summary: "Some systems are in place, but important gaps leave the business vulnerable to lost access, missed demand or interrupted operations.",
      recommendation: "Secure ownership and records first, then build a credible web presence and a dependable path from enquiry to payment.",
    };
  }

  return {
    label: "Foundation not yet built",
    colour: "red",
    summary: "Your business has not yet established the essential systems needed to be found, trusted, paid and protected online. This is a starting point, not a final verdict.",
    recommendation: "Begin with secure access, protected records, a credible business identity and one clear customer and payment journey.",
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

  const unanswered = diqQuestions
    .map((question, index) => ({ question, index }))
    .filter(({ index }) => !safeAnswers[index]);
  const priorityActions = [...unanswered]
    .sort((left, right) => Number(Boolean(right.question.criticalRisk)) - Number(Boolean(left.question.criticalRisk)) || left.index - right.index)
    .slice(0, 3)
    .map(({ question }) => question.action);
  const criticalAlerts = unanswered
    .flatMap(({ question }) => question.criticalRisk ? [question.criticalRisk] : []);

  return { score, tier: getDiqTier(score), categoryScores, priorityActions, criticalAlerts };
}
