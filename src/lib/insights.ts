export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type InsightSource = {
  label: string;
  url: string;
};

export type RelatedService = {
  label: string;
  href: string;
};

export type Insight = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  coverNumber: string;
  accent: "red" | "gold" | "ink";
  introduction: string[];
  sections: InsightSection[];
  relatedServices: RelatedService[];
  sources?: InsightSource[];
  reviewNote?: string;
};

export const insights: Insight[] = [
  {
    slug: "digital-intelligence-quotient",
    title: "Digital Intelligence Quotient",
    shortTitle: "Digital Intelligence Quotient",
    description:
      "A practical scorecard for Nigerian businesses and personal brands to test whether their digital presence can be found, trusted and converted into demand.",
    category: "Digital intelligence",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 8,
    coverNumber: "01",
    accent: "red",
    introduction: [
      "Digital intelligence is not the number of apps you use. It is your ability to choose, connect and improve the systems that help people discover you, understand you, trust you and take action.",
      "Nigeria has energetic digital adoption, but activity is not the same as infrastructure. A business can post every day and still have no searchable website, usable customer data, documented process or reliable path from attention to revenue. This scorecard helps expose that gap.",
    ],
    sections: [
      {
        heading: "Score the five layers",
        paragraphs: [
          "Tieko Media's interactive DIQ assessment asks four Yes or No questions across each of five capability areas. Every Yes is worth five points, producing a transparent score out of 100. The goal is not perfection. It is to see which missing layer is making every other investment less valuable.",
        ],
        bullets: [
          "Foundation: owned identity, corporate email, usable mobile journeys and documented workflows.",
          "Visibility: searchable pages, consistent profiles, accurate listings, useful content and controlled advertising.",
          "Commerce: dedicated banking, international receiving and payment capability, and offers that can travel.",
          "Intelligence: analytics, customer records, responsible AI workflows and decisions made from evidence.",
          "Control: backups, privacy practices, multi-factor authentication and organisational ownership of access.",
        ],
        callout: "0–19 is red: foundation not yet built. 20–49 is red: digitally exposed. 50–69 is orange: visible but fragile. 70–84 is green: digitally capable. 85–100 is green: digitally intelligent.",
      },
      {
        heading: "The questions that reveal the truth",
        paragraphs: [
          "Search for your business without using its exact name. Can a buyer understand what you do? Open your site on an ordinary phone connection. Can they contact you without pinching, guessing or waiting? Ask where last month’s leads came from. Can anyone answer with evidence?",
          "Then test continuity. If the person who manages your Instagram leaves tomorrow, do you retain the files, passwords, content calendar, audience knowledge and performance history? Intelligence lives in the system, not in one person’s memory.",
        ],
      },
      {
        heading: "Build in the right order",
        paragraphs: [
          "Fix identity and access first. Then make the offer understandable. Build the website and search foundation before buying more reach. Connect enquiries to a simple follow-up process. Only after that should you increase content volume or advertising spend.",
          "Tieko Media uses this order because a strong digital presence is an operating system. Each layer should make the next one easier to measure and improve.",
        ],
      },
    ],
    relatedServices: [
      { label: "Review your digital presence", href: "/services/digital-presence-optimisation" },
      { label: "Turn evidence into business intelligence", href: "/services/intelligence-reports" },
      { label: "Build a useful content system", href: "/services/content-creation" },
    ],
    sources: [
      {
        label: "World Bank: Nigeria Digital Economy Diagnostic",
        url: "https://www.worldbank.org/en/country/nigeria/publication/nigeria-digital-economy-diagnostic-a-plan-for-building-nigerias-inclusive-digital-future",
      },
    ],
  },
  {
    slug: "clipping-new-social-media-distribution",
    title: "Clipping is becoming the new distribution layer for influence",
    shortTitle: "Clipping and the new influence economy",
    description:
      "Why turning long-form ideas into useful short clips is changing social distribution, and how brands can clip without losing context, consent or credibility.",
    category: "Media and influence",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 6,
    coverNumber: "02",
    accent: "gold",
    introduction: [
      "A clip is no longer just a leftover excerpt. It is a distribution product: one clear moment, packaged for the feed, designed to earn a pause and lead somewhere deeper.",
      "For creators, executives and brands, the opportunity is not to cut everything into fragments. It is to build long-form material rich enough to produce many honest, self-contained entry points.",
    ],
    sections: [
      {
        heading: "Why clips travel",
        paragraphs: [
          "Short clips reduce the cost of attention. A viewer can test an idea in seconds before deciding whether the speaker deserves more time. Subtitles make the idea portable, a strong opening creates tension and a single argument is easier to remember than a compressed summary of everything.",
          "The best clips do not depend on empty shock. They contain a complete thought and leave the viewer with a useful question, distinction or next step.",
        ],
      },
      {
        heading: "A clipping system, not random editing",
        paragraphs: [
          "Begin with source material that has a point of view: interviews, webinars, speeches, demonstrations or informed conversations. Log themes as the recording happens. Cut for one audience problem at a time, then adapt the opening, caption and format to each platform.",
        ],
        bullets: [
          "Hook: state the tension without manufacturing outrage.",
          "Context: give enough information for the clip to be fair and understandable.",
          "Proof: keep the example, demonstration or reasoning that earns belief.",
          "Path: tell interested viewers where the complete idea or relevant service lives.",
        ],
      },
      {
        heading: "Consent and context are part of quality",
        paragraphs: [
          "A fast clipping operation still needs rights, approvals and brand safety. Confirm who owns the source, whether participants agreed to reuse, how edits may change meaning and which claims require review. A clip that wins attention by distorting the speaker eventually destroys the trust it was meant to build.",
          "Measure saves, qualified replies, profile visits and assisted enquiries, not only views. Reach tells you the clip travelled. Behaviour tells you whether it carried value.",
        ],
      },
    ],
    relatedServices: [
      { label: "Plan and produce a content system", href: "/services/content-creation" },
      { label: "Build a media distribution plan", href: "/mediaservices" },
      { label: "Optimise the destination behind the clip", href: "/services/digital-presence-optimisation" },
    ],
  },
  {
    slug: "compliance-business-longevity-nigeria",
    title: "Compliance is the bedrock of a business built to last",
    shortTitle: "Compliance and business longevity",
    description:
      "Compliance is not paperwork after growth. It is the operating discipline that protects ownership, trust, records and continuity in a Nigerian business.",
    category: "Business foundations",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 7,
    coverNumber: "03",
    accent: "ink",
    introduction: [
      "Many businesses treat compliance as a fee paid to avoid trouble. Strong businesses treat it as infrastructure. Registration defines the legal vehicle. Records show what happened. Contracts clarify expectations. Privacy controls protect people. Returns and licences preserve the right to operate.",
      "Compliance does not guarantee success, but weak compliance can quietly cancel years of commercial effort.",
    ],
    sections: [
      {
        heading: "Compliance makes the business legible",
        paragraphs: [
          "A business becomes easier to bank, insure, finance, partner with and transfer when its ownership, filings, accounts, obligations and decisions can be verified. The Corporate Affairs Commission describes registration and ongoing corporate compliance as part of legal recognition and long-term legitimacy.",
          "The same principle applies beyond incorporation. A company that collects customer details needs a lawful and accountable approach to personal data. A company that sells regulated products must understand the regulator attached to the product, not merely the company name.",
        ],
      },
      {
        heading: "The compliance calendar is a management tool",
        paragraphs: [
          "Create one register for annual returns, tax obligations, licences, insurance, contracts, privacy reviews and sector-specific renewals. Give every item an owner, due date, evidence link and escalation path. Store the underlying documents in a controlled records system.",
        ],
        bullets: [
          "Know the entity, owners and authorised decision-makers.",
          "Track filings and renewals before they become emergencies.",
          "Keep contracts, invoices, approvals and policies retrievable.",
          "Review how customer, employee and vendor data is collected and protected.",
          "Check regulatory requirements whenever the product, market or channel changes.",
        ],
      },
      {
        heading: "Longevity is organised memory",
        paragraphs: [
          "A founder may remember every agreement, supplier and exception. A durable institution cannot depend on that memory. Compliance converts critical knowledge into records, roles and repeatable decisions that survive staff changes, disputes, audits and succession.",
          "The useful question is not ‘are we compliant?’ as if it were a permanent state. Ask ‘what changed, what evidence do we have and who is responsible for the next action?’",
        ],
      },
    ],
    relatedServices: [
      { label: "Coordinate compliance and institutional support", href: "/services/compliance" },
      { label: "Build a dependable records system", href: "/services/data-records-management" },
      { label: "Map your next business decision", href: "/services/intelligence-reports" },
    ],
    sources: [
      { label: "Corporate Affairs Commission", url: "https://www.cac.gov.ng/" },
      { label: "Nigeria Data Protection Commission FAQs", url: "https://ndpc.gov.ng/faqs/" },
      {
        label: "FCCPC consumer rights and business responsibilities",
        url: "https://fccpc.gov.ng/consumers/consumer-rights-responsibilities/rights-responsibilities/",
      },
    ],
    reviewNote:
      "This article is general information, not legal, tax or regulatory advice. Requirements depend on the entity, activity and market. Confirm the current position with the relevant authority and a qualified adviser.",
  },
  {
    slug: "how-to-start-a-business-in-nigeria-compliance-map",
    title: "Starting a business in Nigeria: build the compliance map first",
    shortTitle: "Nigeria business compliance map",
    description:
      "A practical starting map for CAC registration, tax identity, NDPC responsibilities and the sector agencies a Nigerian business may need before trading or exporting.",
    category: "Business foundations",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 10,
    coverNumber: "04",
    accent: "red",
    introduction: [
      "Registering with the Corporate Affairs Commission is a beginning, not a universal licence to conduct every type of business. Your legal form, people, product, data, premises, location and market determine the rest of the compliance map.",
      "The safest sequence is activity first, obligations second, applications third. Do not buy random certificates because another business did. Map the exact activity and confirm which authority regulates it.",
    ],
    sections: [
      {
        heading: "The foundation that most businesses share",
        paragraphs: [
          "Choose an appropriate structure and register it through the CAC. Record beneficial ownership and governance information accurately, then keep post-incorporation changes and annual returns current. Obtain or retrieve the applicable Tax ID and understand which federal, state and local tax obligations apply.",
          "If you collect personal data through forms, payments, employment, delivery or marketing, the Nigeria Data Protection Act framework is relevant. Data protection begins with knowing what you collect, why you need it, who receives it, how long it is kept and how it is secured.",
        ],
      },
      {
        heading: "Then follow the business activity",
        paragraphs: [
          "Sector regulation attaches to what you actually do. Food, drugs, cosmetics, medical devices and other regulated products can bring NAFDAC requirements. Standards and manufactured goods may involve SON. Financial services may involve the CBN or SEC. Communications can involve the NCC. Consumer-facing businesses remain subject to consumer-protection duties.",
        ],
        bullets: [
          "Exporting generally starts with NEPC exporter registration.",
          "Agricultural exports may require NAQS inspection and a phytosanitary certificate that meets the destination country’s rules.",
          "Processed or semi-processed foods may also require NAFDAC documentation or export certification.",
          "The buyer, logistics route, customs process and destination market can each add documents beyond Nigerian registration.",
        ],
        callout: "Example: exporting farm produce is not one licence. It is a chain of entity, exporter, product-health, customs, buyer and destination requirements.",
      },
      {
        heading: "Build a one-page regulatory map",
        paragraphs: [
          "Write down the activity, product, customer, channel, location and destination. For each one, list the possible authority, required evidence, application owner, renewal date and official source. Mark every uncertain item for professional confirmation before money is committed.",
          "This map prevents the common mistake of discovering a missing permit after inventory has been produced, a campaign has launched or goods have reached a border.",
        ],
      },
      {
        heading: "Do not confuse a checklist with advice",
        paragraphs: [
          "Regulations, portals, names, fees and thresholds change. A useful checklist points you towards the right question; it does not replace current advice from the relevant agency or a qualified professional.",
        ],
      },
    ],
    relatedServices: [
      { label: "Get compliance coordination support", href: "/services/compliance" },
      { label: "Organise applications and regulatory records", href: "/services/data-records-management" },
      { label: "Research a market or operating requirement", href: "/services/intelligence-reports" },
    ],
    sources: [
      { label: "CAC Company Registration Portal", url: "https://icrp.cac.gov.ng/" },
      { label: "Nigeria Revenue Service Tax ID portal", url: "https://taxid.nrs.gov.ng/" },
      { label: "Nigeria Data Protection Commission", url: "https://ndpc.gov.ng/faqs/" },
      { label: "NEPC exporter registration", url: "https://nepc.gov.ng/get-started/e-registration/" },
      {
        label: "NEPC export documents and procedures",
        url: "https://nepc.gov.ng/get-started/export-documents-procedures/",
      },
      { label: "Nigeria Agricultural Quarantine Service", url: "https://naqs.gov.ng/" },
      { label: "NAFDAC regulatory guidance", url: "https://nafdac.gov.ng/regulatory-resources/application-forms/" },
    ],
    reviewNote:
      "This is an orientation map, not legal, tax, export or product-registration advice. Confirm current requirements with each authority and an appropriately qualified adviser before acting.",
  },
  {
    slug: "nigerian-family-business-succession",
    title: "Why many Nigerian businesses do not survive the founder",
    shortTitle: "From founder to institution",
    description:
      "The succession problem behind many Nigerian family businesses, and the governance, records and next-generation preparation that turn a founder’s success into an institution.",
    category: "Business continuity",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 8,
    coverNumber: "05",
    accent: "gold",
    introduction: [
      "Nigeria produces remarkable founders. The harder task is producing institutions that can outlive them. When authority, relationships, records and judgement sit inside one person, the enterprise may be large but it is not yet transferable.",
      "This is not an ethnic failure or a shortage of entrepreneurial talent. It is a governance problem that appears in family businesses across regions, industries and cultures.",
    ],
    sections: [
      {
        heading: "Do not reduce complex histories to one lesson",
        paragraphs: [
          "MKO Abiola’s Concord group is often invoked in conversations about vanished business empires. Its history also involved extraordinary political disruption, including the banning of Concord publications and the founder’s incarceration. It would be inaccurate to describe that story as succession failure alone.",
          "The better lesson is concentration risk. A group closely tied to one founder’s capital, relationships, public identity and decision-making is exposed when that founder is removed, whatever the cause. By contrast, multigenerational trading families such as the Dantata lineage show how commercial knowledge, networks and capital can be transferred, even as the form of the enterprise changes.",
        ],
      },
      {
        heading: "The Igbo apprenticeship model offers a different lens",
        paragraphs: [
          "The Igbo apprenticeship tradition often reproduces entrepreneurs rather than preserving one company unchanged. An apprentice learns, earns trust, receives support and may establish a new enterprise. That is powerful economic continuity, but it is different from corporate continuity under one brand and governance structure.",
          "A founder who wants both outcomes must deliberately transfer commercial capability while also building an institution that can operate without daily founder intervention.",
        ],
      },
      {
        heading: "Succession begins long before retirement",
        paragraphs: [
          "PwC reported that only a minority of Nigerian family businesses in its 2021 survey had a documented succession plan. The practical work is not simply naming a child. It includes testing future leaders, defining ownership, separating family and management decisions, documenting critical relationships and allowing competent non-family professionals to lead.",
        ],
        bullets: [
          "Create a board or advisory structure that can challenge the founder.",
          "Write role, ownership, dividend and conflict-resolution rules.",
          "Build management information that does not depend on oral reports.",
          "Give successors real operating responsibility before transition day.",
          "Plan for incapacity, dispute and unexpected absence, not only retirement.",
        ],
      },
      {
        heading: "Legacy is a system",
        paragraphs: [
          "A name, building or portfolio is not a complete legacy. The most durable inheritance is a system that can make sound decisions, preserve trust and adapt when the founder is no longer in the room.",
        ],
      },
    ],
    relatedServices: [
      { label: "Organise institutional records", href: "/services/data-records-management" },
      { label: "Strengthen governance and compliance coordination", href: "/services/compliance" },
      { label: "Build decision-ready business intelligence", href: "/services/intelligence-reports" },
    ],
    sources: [
      {
        label: "PwC Nigeria: Strengthening family businesses",
        url: "https://www.pwc.com/ng/en/assets/pdf/strengthening-family-businesses.pdf",
      },
      {
        label: "Covenant University: succession education and Nigerian family businesses",
        url: "https://journals.covenantuniversity.edu.ng/index.php/cjbss/article/view/2989",
      },
      {
        label: "Abertay University: transgenerational business legacies among the Igbo",
        url: "https://rke.abertay.ac.uk/en/publications/transgenerational-business-legacies-and-intergenerational-success/",
      },
    ],
  },
  {
    slug: "paid-ads-without-digital-foundation",
    title: "The hidden price of running paid ads without a digital foundation",
    shortTitle: "Paid ads cannot repair weak foundations",
    description:
      "Paid advertising can buy attention, but it cannot repair a confusing offer, slow website, missing metadata, weak proof or broken follow-up system.",
    category: "Digital growth",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 6,
    coverNumber: "06",
    accent: "ink",
    introduction: [
      "Advertising is an amplifier. If the destination is clear and credible, it accelerates learning and sales. If the destination is confusing, it pays to expose the confusion to more people.",
      "That is the hidden price of an ads-first strategy: you rent traffic while the assets that should keep producing value remain unfinished.",
    ],
    sections: [
      {
        heading: "What the advert cannot fix",
        paragraphs: [
          "An advert cannot make an unclear offer understandable after the click. It cannot make a slow mobile page feel trustworthy. It cannot replace a useful page title, meta description, favicon, accurate business listing, customer evidence or a working enquiry process.",
        ],
        bullets: [
          "Message mismatch raises abandonment.",
          "Weak mobile performance wastes expensive clicks.",
          "Missing proof makes comparison easier for competitors.",
          "Poor tracking prevents useful optimisation.",
          "No follow-up turns interest into forgotten messages.",
        ],
      },
      {
        heading: "Owned infrastructure compounds",
        paragraphs: [
          "A useful service page can answer questions from advertising, search, referrals, email and direct visits. Strong analytics improve future campaigns. A content library keeps working after the media budget stops. Clear records help the team learn which enquiries become customers.",
          "This does not make paid media unnecessary. It makes paid media accountable to a system larger than the campaign dashboard.",
        ],
      },
      {
        heading: "The foundation-first sequence",
        paragraphs: [
          "Clarify the audience and offer. Fix the conversion page on mobile. Add evidence and a useful next step. Establish analytics and follow-up ownership. Then run controlled campaigns with one learning objective at a time.",
          "The result is not merely cheaper traffic. It is better business knowledge after every campaign.",
        ],
      },
    ],
    relatedServices: [
      { label: "Optimise your digital presence", href: "/services/digital-presence-optimisation" },
      { label: "Plan media around a working destination", href: "/mediaservices" },
      { label: "Create content that keeps earning attention", href: "/services/content-creation" },
    ],
  },
  {
    slug: "visibility-is-the-new-oil",
    title: "Visibility is the new oil, but infrastructure creates the value",
    shortTitle: "Visibility is the new oil",
    description:
      "Attention is abundant but unstable. The businesses that benefit from visibility build the infrastructure to capture trust, intent, data and repeat demand.",
    category: "Digital growth",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 6,
    coverNumber: "07",
    accent: "red",
    introduction: [
      "Visibility behaves like a raw resource. It has potential, but potential is not value. A viral post, media mention or search impression matters only when the business can refine that attention into understanding, trust and a useful next action.",
      "The winners are not always the loudest organisations. They are the ones with enough infrastructure to retain the worth of every moment they are seen.",
    ],
    sections: [
      {
        heading: "Attention leaks through weak systems",
        paragraphs: [
          "People see a post, search the name, open a profile, inspect a website, compare evidence and decide whether to proceed. Every unclear biography, inconsistent address, dead link, slow page and unanswered message is a leak in that journey.",
          "More reach poured into the top does not repair the leaks below. It may only make the waste harder to ignore.",
        ],
      },
      {
        heading: "The refinery behind visibility",
        paragraphs: [
          "A visibility system connects media, search, content, reputation, conversion and records. Media introduces the organisation. Search helps people recover it later. Content answers objections. Proof reduces perceived risk. A clear offer enables action. Records and analytics show what to improve.",
        ],
        callout: "Reach is rented. Recognition is earned. Searchability, trust and customer knowledge are assets.",
      },
      {
        heading: "Measure the movement, not the noise",
        paragraphs: [
          "Track branded search, qualified visits, useful page depth, enquiries, response time, conversion quality and repeat demand. These measures reveal whether visibility is moving people through the system or merely producing applause at the surface.",
          "The strategic question is not ‘how do we get attention?’ It is ‘what should happen when the right person notices us?’",
        ],
      },
    ],
    relatedServices: [
      { label: "Build search visibility that compounds", href: "/services/seo-aeo-ranking" },
      { label: "Plan media that supports a customer journey", href: "/mediaservices" },
      { label: "Create content that turns attention into trust", href: "/services/content-creation" },
    ],
  },
  {
    slug: "seo-aeo-visibility-strategy",
    title: "Why SEO and AEO belong in the same visibility strategy",
    shortTitle: "SEO, AEO and useful visibility",
    description:
      "SEO helps machines retrieve your pages. Answer engine optimisation helps your information become clear, useful and citable. Both begin with people-first content and sound technical foundations.",
    category: "Search and discovery",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 8,
    coverNumber: "08",
    accent: "gold",
    introduction: [
      "Search engine optimisation and answer engine optimisation are often sold as competing disciplines. In practice, the useful work overlaps: publish crawlable pages, answer real questions clearly, use accurate entities and evidence, and make the next action obvious.",
      "Google’s guidance for generative AI search continues to describe established SEO practices as foundational. There is no magic AI-search schema that can replace useful, accessible and trustworthy content.",
    ],
    sections: [
      {
        heading: "SEO creates retrievability",
        paragraphs: [
          "Search engines need stable URLs, descriptive titles, meaningful headings, crawlable links, mobile performance and content that matches the page’s promise. Unique descriptions help people understand why a result is relevant, even though search engines may choose a different snippet.",
          "Technical hygiene is not the whole strategy, but without it strong ideas can remain difficult to discover or interpret.",
        ],
      },
      {
        heading: "AEO creates answer clarity",
        paragraphs: [
          "People increasingly search in complete questions and continue with follow-ups. A useful answer page defines the issue early, explains important distinctions, shows evidence, anticipates the next question and identifies who is responsible for the information.",
          "This is not permission to publish hundreds of shallow question pages. One substantial resource can answer a cluster of related questions better than many thin pages.",
        ],
      },
      {
        heading: "One operating model for both",
        bullets: [
          "Research the language customers use before deciding the format.",
          "Give a direct answer near the beginning, then earn depth with explanation and evidence.",
          "Use original experience, data or frameworks instead of generic summaries.",
          "Link to relevant services and authoritative external sources with descriptive anchor text.",
          "Review articles when facts, regulations or customer behaviour change.",
        ],
        paragraphs: [
          "The goal is not to write for a crawler or a chatbot. It is to publish information that deserves to be retrieved because it resolves a real human need.",
        ],
      },
    ],
    relatedServices: [
      { label: "Build your SEO and AEO system", href: "/services/seo-aeo-ranking" },
      { label: "Research the questions your market asks", href: "/services/intelligence-reports" },
      { label: "Turn those questions into useful content", href: "/services/content-creation" },
    ],
    sources: [
      {
        label: "Google Search: SEO Starter Guide",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      {
        label: "Google Search: optimising for generative AI features",
        url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      },
      {
        label: "Google Search: helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
  },
  {
    slug: "answer-what-customers-search-for",
    title: "Stop reinventing the wheel. Answer what customers are already asking",
    shortTitle: "Answer existing customer demand",
    description:
      "A demand-led content strategy begins with the questions people already ask, then connects each useful answer to the service capable of solving the underlying problem.",
    category: "Content strategy",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 6,
    coverNumber: "09",
    accent: "ink",
    introduction: [
      "A business does not need to invent public curiosity. Customers already reveal it through search queries, sales calls, WhatsApp messages, objections, reviews and the language they use to describe failed attempts.",
      "Tieko Media’s strategy begins by finding those questions. We then organise the evidence, create the clearest useful answer and connect the answer to an appropriate service, not to a forced sales pitch.",
    ],
    sections: [
      {
        heading: "Listen before you publish",
        paragraphs: [
          "Collect questions from customer conversations, search data, internal teams, industry forums and related queries. Group them by the job the person is trying to complete: understand a problem, compare options, reduce risk, find a provider or act correctly.",
          "The words matter because expert language and customer language are rarely identical. A technically accurate page can still fail if it never uses the concepts a buyer recognises.",
        ],
      },
      {
        heading: "Build the answer around intent",
        paragraphs: [
          "State the direct answer first. Explain the conditions and trade-offs. Provide a checklist, example or decision framework. Cite sources where the claim depends on an authority. Then offer the next step for readers who need help applying the information.",
        ],
        bullets: [
          "Informational intent needs clarity and evidence.",
          "Comparison intent needs criteria and honest trade-offs.",
          "Commercial intent needs proof, process and fit.",
          "Action intent needs a short, low-friction next step.",
        ],
      },
      {
        heading: "Service design should learn from content",
        paragraphs: [
          "If the same question appears repeatedly, it may reveal a missing offer, unclear process or preventable customer risk. Content is therefore not only marketing output. It is market research that can improve the service itself.",
          "Publish, observe, update. The wheel becomes valuable when it keeps turning information into better decisions.",
        ],
      },
    ],
    relatedServices: [
      { label: "Research customer questions and market demand", href: "/services/intelligence-reports" },
      { label: "Build a demand-led content system", href: "/services/content-creation" },
      { label: "Make useful answers discoverable", href: "/services/seo-aeo-ranking" },
    ],
    sources: [
      {
        label: "Google Search: helpful, reliable, people-first content",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
      },
    ],
  },
  {
    slug: "are-influencers-an-influenza",
    title: "Are influencers an influenza?",
    shortTitle: "Are influencers an influenza?",
    description:
      "Influence can spread like an infection: quickly, emotionally and beyond control. The cure is not avoiding creators, but building relevance, disclosure and measurement into the partnership.",
    category: "Media and influence",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 6,
    coverNumber: "10",
    accent: "red",
    introduction: [
      "The wordplay is useful because influence can behave like contagion. A phrase, product or behaviour jumps between people through repetition and social proof. But virality can also carry exaggeration, mismatch and reputational risk faster than a brand can respond.",
      "Influencers are not the illness. Unexamined influence is.",
    ],
    sections: [
      {
        heading: "Reach is not relevance",
        paragraphs: [
          "A large audience can be the wrong audience. Before looking at follower counts, examine subject fit, audience geography, comment quality, past partnerships, disclosure habits and the creator’s ability to explain the product honestly.",
          "The creator should make the message more credible to a specific community, not merely make the logo more visible.",
        ],
      },
      {
        heading: "Treat the partnership as media and reputation",
        paragraphs: [
          "Agree the claim boundaries, approval process, usage rights, disclosure, response plan and measurement before publication. Give the creator room to sound human, but never outsource the truth of the offer.",
        ],
        bullets: [
          "Define the audience behaviour you want, not only the number of views.",
          "Use trackable destinations and consistent campaign naming.",
          "Capture recurring questions for future content and product improvement.",
          "Plan what happens if the post is misunderstood or the creator becomes controversial.",
        ],
      },
      {
        heading: "Healthy influence leaves an asset",
        paragraphs: [
          "After the campaign, the business should retain more than a screenshot of reach. It should gain reusable creative, audience insight, search demand, qualified visitors, customer questions or a stronger association in the market.",
          "When influence is connected to infrastructure, attention does not disappear when the post leaves the feed.",
        ],
      },
    ],
    relatedServices: [
      { label: "Plan a responsible media campaign", href: "/mediaservices" },
      { label: "Create campaign content and derivatives", href: "/services/content-creation" },
      { label: "Build the destination that captures interest", href: "/services/digital-presence-optimisation" },
    ],
  },
  {
    slug: "africa-digital-infrastructure-curiosity",
    title: "Africa’s digital infrastructure problem is also a curiosity problem",
    shortTitle: "Curiosity is digital infrastructure",
    description:
      "Connectivity and capital matter, but so do learning cultures. Fear of mistakes, weak experimentation and unasked questions can stop African organisations from using digital tools well.",
    category: "Digital culture",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 7,
    coverNumber: "11",
    accent: "gold",
    introduction: [
      "Africa’s digital gap cannot be explained by mindset alone. Broadband, power, devices, cost, policy and access are material constraints. The World Bank’s digital-economy framework treats infrastructure, platforms, financial services, entrepreneurship and skills as connected foundations.",
      "Yet organisations can possess tools and still remain digitally weak. The missing layer is often a culture that permits questions, small experiments and learning from visible mistakes.",
    ],
    sections: [
      {
        heading: "Caution can become expensive",
        paragraphs: [
          "Many people are trained to avoid the wrong answer, wait for authority and conceal uncertainty. In fast-changing digital work, that behaviour delays discovery. Teams keep manual processes nobody has mapped, buy software nobody tests and repeat campaigns because questioning the routine feels unsafe.",
          "Carefulness is valuable when it protects customers, money and data. It becomes a problem when it prevents reversible experiments or honest reporting.",
        ],
      },
      {
        heading: "Make curiosity operational",
        paragraphs: [
          "Curiosity becomes infrastructure when it has time, rules and records. Give teams a small test budget. Define which decisions are reversible. Require a short hypothesis before a trial and a simple learning note after it. Reward the early discovery of a weak assumption.",
        ],
        bullets: [
          "Ask what problem a tool is meant to solve before procurement.",
          "Test with a narrow workflow and real users before scaling.",
          "Separate a failed experiment from negligent execution.",
          "Document what changed so another team does not repeat the same lesson.",
        ],
      },
      {
        heading: "Digital maturity is a learning rate",
        paragraphs: [
          "The most digitally intelligent organisation is not the one with the longest software list. It is the one that notices change, asks better questions, protects essential controls and converts experiments into repeatable capability.",
          "Infrastructure connects people to technology. Curiosity helps them discover what the connection is for.",
        ],
      },
    ],
    relatedServices: [
      { label: "Research the problem before choosing the tool", href: "/services/intelligence-reports" },
      { label: "Optimise the systems customers experience", href: "/services/digital-presence-optimisation" },
      { label: "Document knowledge and operational records", href: "/services/data-records-management" },
    ],
    sources: [
      {
        label: "World Bank: Nigeria Digital Economy Diagnostic",
        url: "https://www.worldbank.org/en/country/nigeria/publication/nigeria-digital-economy-diagnostic-a-plan-for-building-nigerias-inclusive-digital-future",
      },
    ],
  },
  {
    slug: "why-businesses-fail-in-digital-economy",
    title: "Why businesses fail in the digital economy",
    shortTitle: "Why digital businesses fail",
    description:
      "Digital failure rarely begins with a lack of social posts. It begins when an organisation mistakes channels for strategy and tools for an operating system.",
    category: "Digital strategy",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 7,
    coverNumber: "12",
    accent: "ink",
    introduction: [
      "A business can own a website, five social accounts, a CRM subscription and an advertising budget while remaining digitally fragile. Tools do not become capability until they are connected to clear ownership, useful data and repeatable decisions.",
      "Digital failure is often organisational failure made visible on a screen.",
    ],
    sections: [
      {
        heading: "The common failure pattern",
        paragraphs: [
          "The business chooses channels before clarifying the customer problem. It publishes without a content system, advertises without a conversion path, collects data without quality rules and buys software without changing the workflow. Each activity produces motion, but very little compounds.",
        ],
        bullets: [
          "No single owner for the customer journey.",
          "Brand promises that operations cannot fulfil.",
          "Decisions based on vanity metrics or memory.",
          "Important accounts and files controlled by individuals.",
          "No process for reviewing what customers repeatedly ask or abandon.",
        ],
      },
      {
        heading: "Build capability before complexity",
        paragraphs: [
          "Start with one audience, one important journey and one measurable outcome. Make the information clear. Fix access and ownership. Connect the enquiry to follow-up. Establish a small set of trusted measures. Only then add automation, more channels or more content volume.",
          "Complexity should be earned by a working system, not used to hide the absence of one.",
        ],
      },
      {
        heading: "Resilience is the real digital advantage",
        paragraphs: [
          "Platforms change, algorithms move and formats lose attention. A resilient business retains its domain, customer understanding, records, creative assets, processes and capacity to learn. It can adapt its channels without rebuilding its identity every time.",
        ],
      },
    ],
    relatedServices: [
      { label: "Diagnose your digital presence", href: "/services/digital-presence-optimisation" },
      { label: "Organise the records behind the operation", href: "/services/data-records-management" },
      { label: "Use research to choose the next investment", href: "/services/intelligence-reports" },
    ],
  },
  {
    slug: "business-data-from-records-to-decisions",
    title: "Business data is only useful when it changes a decision",
    shortTitle: "From business records to decisions",
    description:
      "Data becomes valuable when a business can trust, retrieve and use it. Start with the decision, then collect the smallest reliable evidence needed.",
    category: "Data and decisions",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 7,
    coverNumber: "13",
    accent: "red",
    introduction: [
      "Businesses often say they need more data when they first need a better question. A spreadsheet with ten thousand rows is not intelligence if nobody trusts the definitions, knows who updated it or can connect it to an action.",
      "Useful data is evidence organised for a decision.",
    ],
    sections: [
      {
        heading: "Begin with the decision",
        paragraphs: [
          "Ask what decision will change: which service to prioritise, which customer to follow up, where delays occur, what content attracts qualified demand or which obligation is due next. Then identify the minimum information needed to make that decision with less uncertainty.",
          "This protects the business from collecting sensitive or expensive information simply because it might be useful one day.",
        ],
      },
      {
        heading: "Quality has an owner",
        paragraphs: [
          "Every important field needs a definition, source, owner and update rule. Names should follow a standard. Dates should behave like dates. Duplicate customers should be resolved. Access should reflect responsibility. Retention should reflect legal and operational need.",
        ],
        bullets: [
          "Capture the source of every lead, not just the final channel.",
          "Separate enquiries, qualified opportunities and completed sales.",
          "Record why work was lost, delayed or refunded.",
          "Keep evidence behind regulatory and operational milestones.",
          "Review which reports actually influence action.",
        ],
      },
      {
        heading: "Turn reporting into a learning rhythm",
        paragraphs: [
          "A useful dashboard is part of a meeting, not decoration on a screen. Review a small set of measures at a consistent interval. Record the interpretation, decision, owner and expected result. At the next review, compare the outcome with the assumption.",
          "That loop turns records into organisational memory and organisational memory into better judgement.",
        ],
      },
    ],
    relatedServices: [
      { label: "Build a dependable records system", href: "/services/data-records-management" },
      { label: "Commission decision-ready research", href: "/services/intelligence-reports" },
      { label: "Improve digital measurement and conversion", href: "/services/digital-presence-optimisation" },
    ],
    sources: [
      { label: "Nigeria Data Protection Commission FAQs", url: "https://ndpc.gov.ng/faqs/" },
    ],
    reviewNote:
      "Data governance and privacy obligations depend on the information, purpose and organisation involved. Confirm the applicable requirements before implementing a new data process.",
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export const insightRoutes = insights.map((insight) => `/insights/${insight.slug}`);
