import type { InsightSection } from "@/lib/insights";

export type InsightFaq = {
  question: string;
  answer: string;
};

export type InsightEnhancement = {
  image: string;
  imageAlt: string;
  imageCaption: string;
  readingMinutes: number;
  takeaways: string[];
  sections: InsightSection[];
  faqs: InsightFaq[];
};

export const insightEnhancements: Record<string, InsightEnhancement> = {
  "digital-intelligence-quotient": {
    image: "/images/insights/digital-intelligence-quotient.webp",
    imageAlt: "A connected model of customer, commerce, records and digital tools across Nigeria",
    imageCaption: "Digital intelligence connects identity, discovery, trust, conversion and learning into one operating system.",
    readingMinutes: 12,
    takeaways: [
      "Digital activity is not the same as digital intelligence.",
      "A business is only as strong as the weakest link between discovery and follow-up.",
      "Ownership, records and measurement matter as much as content volume.",
      "The score is useful only when it produces a prioritised improvement plan.",
    ],
    sections: [
      {
        heading: "What each score looks like in practice",
        paragraphs: [
          "A red score below 50 describes a digitally exposed business. It usually depends on one social account, one person's phone and informal customer memory. It may be busy, but it cannot reliably recover leads, explain performance or continue when access changes. An orange score from 50 to 69 is visible but fragile: more channels exist, yet they do not share a dependable identity, destination or data trail.",
          "A green score from 70 to 100 signals connected digital capability. The business has consistent information, an owned website, defined conversion paths, shared access and a measurement rhythm. At the highest end, it uses evidence to improve offers, content, operations and customer experience. The difference is not the price of the software. It is the quality of the connections and decisions.",
        ],
      },
      {
        heading: "Run a 30-day intelligence reset",
        paragraphs: [
          "In week one, audit every public profile, domain, listing, analytics account and lead channel. Record the owner and recovery method. In week two, test the customer journey on a low-cost phone and ordinary connection. Ask someone unfamiliar with the company to explain the offer after thirty seconds.",
          "In week three, choose five measures that connect attention to commercial outcomes. In week four, fix the highest-friction point and document the process. Repeat the scorecard after ninety days. Improvement should appear as reduced uncertainty, faster response and more reliable customer movement, not merely more tools.",
        ],
        bullets: [
          "One source of truth for business identity and contact details.",
          "One documented route from enquiry to responsible team member.",
          "One dashboard that distinguishes attention, intent and revenue.",
          "One monthly decision recorded from the evidence.",
        ],
      },
    ],
    faqs: [
      { question: "Is digital intelligence the same as digital literacy?", answer: "No. Literacy is the ability to use digital tools. Digital intelligence includes choosing the right tools, connecting them to business goals, protecting information and learning from the resulting evidence." },
      { question: "Can a small business achieve a high score?", answer: "Yes. A small business with clear ownership, a useful website, disciplined follow-up and trustworthy records can be more digitally intelligent than a larger company with many disconnected platforms." },
      { question: "Which layer should be fixed first?", answer: "Fix access, identity and the main customer journey first. Advertising or content expansion should wait until interested people can understand the offer and complete a reliable next step." },
    ],
  },
  "clipping-new-social-media-distribution": {
    image: "/images/insights/clipping-social-distribution.webp",
    imageAlt: "A professional camera transforming one recording into a sequence of short vertical visual clips",
    imageCaption: "A strong clipping system turns one substantial source into many honest entry points.",
    readingMinutes: 10,
    takeaways: [
      "Record with derivative content in mind, but never sacrifice the quality of the source.",
      "Each clip should contain one complete and defensible idea.",
      "Rights, consent and context belong inside the production workflow.",
      "Measure what viewers do after watching, not views alone.",
    ],
    sections: [
      {
        heading: "Design the source for useful derivatives",
        paragraphs: [
          "Clipping works best when the original conversation has structure. Give the speaker a clear audience, three to five themes and examples worth preserving. Capture clean audio, stable framing and enough resolution to create vertical crops. A producer should log strong moments during recording instead of searching blindly afterwards.",
          "Build recurring formats around the expertise: one misconception corrected, one case unpacked, one process demonstrated or one question answered. This creates recognition without forcing every clip into the same script.",
        ],
      },
      {
        heading: "Distribution needs a destination",
        paragraphs: [
          "A short clip may earn discovery, but a profile, article, service page or full episode must carry the next layer of meaning. Align the caption and link with the specific problem discussed. Sending every clip to a generic homepage wastes the context that earned the click.",
          "Create a simple clip ledger containing the source, topic, rights status, platforms, publication date, destination and result. Over time, the ledger reveals which questions attract the right audience and which source formats produce the most reusable value.",
        ],
        callout: "The clip earns the pause. The destination earns the decision.",
      },
      {
        heading: "Protect meaning while increasing output",
        paragraphs: [
          "Scale creates a temptation to reward the most dramatic sentence rather than the most useful one. Establish an editorial test before publishing: can the clip be understood without the missing minute, does the headline match what was actually said, and would the speaker defend the edit in front of the intended audience? If the answer is uncertain, add context or choose another moment.",
          "Consent should also be specific enough to operate. A guest who agreed to a recorded interview may not expect their face to appear indefinitely in paid advertising. Document the approved channels, edit process, usage term and takedown procedure. Keep the original recording and approval trail with the project files so the brand can answer questions later.",
          "Finally, review the portfolio rather than judging isolated clips. A month of fragments should still represent the depth, tone and range of the source. Repetition can build memory, but distortion builds the wrong memory faster.",
        ],
      },
    ],
    faqs: [
      { question: "How long should a social clip be?", answer: "Long enough to complete one useful thought. Some ideas need twenty seconds and others need two minutes. Retention and comprehension matter more than an arbitrary duration." },
      { question: "Should the same clip be posted everywhere?", answer: "The core idea can travel, but the opening, crop, caption, cover and destination should reflect how people use each platform." },
      { question: "Can clipping damage a speaker’s reputation?", answer: "Yes, when an edit removes essential context or implies a claim the speaker did not make. Approval rules and access to the full source reduce that risk." },
    ],
  },
  "compliance-business-longevity-nigeria": {
    image: "/images/insights/compliance-business-longevity.webp",
    imageAlt: "A durable commercial building supported by organised records and governance layers",
    imageCaption: "Compliance is the foundation beneath ownership, trust, continuity and responsible growth.",
    readingMinutes: 12,
    takeaways: [
      "Incorporation is the start of compliance, not the end.",
      "A compliance calendar needs owners, evidence and escalation rules.",
      "Good records reduce founder dependence and make continuity possible.",
      "Requirements should be checked whenever the activity, market or product changes.",
    ],
    sections: [
      {
        heading: "The cost of postponing compliance",
        paragraphs: [
          "The consequences do not always arrive as a dramatic enforcement action. They appear as a bank request the company cannot satisfy, a contract lost because ownership records are inconsistent, a shipment delayed, a renewal missed or a customer complaint that exposes missing terms and records. Each problem consumes senior attention at the worst possible time.",
          "Late compliance is also more expensive because evidence must be reconstructed from messages, personal devices and memory. A disciplined company captures the evidence while the work happens.",
        ],
      },
      {
        heading: "Build a proportionate control system",
        paragraphs: [
          "Small organisations do not need a bureaucracy copied from a bank. They need controls proportionate to their risk. Start with the legal entity, key filings, contracts, money, people, customer data and sector permissions. Assign one accountable owner to each area and schedule a quarterly review.",
          "Use a controlled folder structure and naming convention. Keep the current document separate from superseded versions. Record approvals and renewal evidence. Where professional judgement is needed, note the adviser, scope and date rather than treating an old opinion as permanent truth.",
        ],
        bullets: [
          "Red: operating right, customer safety, tax or data risk requires immediate action.",
          "Amber: evidence exists but is incomplete, inconsistent or approaching expiry.",
          "Green: current evidence is stored, owned and scheduled for review.",
        ],
      },
      {
        heading: "Make compliance part of ordinary operations",
        paragraphs: [
          "The strongest compliance system is not a folder opened only before an inspection. It is built into the actions employees already perform. A new vendor cannot be approved without the required checks, a marketing form cannot launch without a defined data purpose, and a regulated product cannot move to market without evidence of the applicable review. The control sits near the decision it protects.",
          "Create a calendar that distinguishes one-off approvals, recurring returns, renewals and event-triggered duties. Link every item to the responsible person, supporting evidence and escalation route. A reminder without ownership merely announces that a deadline is approaching; it does not make anyone accountable for meeting it.",
          "Leadership should review exceptions and recurring delays, not every routine document. This keeps oversight proportionate while revealing where a process, adviser relationship or internal capability needs improvement. Because requirements can change, confirm current obligations with the relevant authority or qualified professional before acting.",
        ],
      },
    ],
    faqs: [
      { question: "Does CAC registration mean a business is fully compliant?", answer: "No. Registration establishes the entity or business name. Tax, data protection, employment, consumer, premises and sector requirements depend on what the organisation actually does." },
      { question: "Who should own compliance in a small company?", answer: "A named senior person should be accountable, even when specialists or external advisers perform the work. Responsibility should never disappear between vendors." },
      { question: "How often should the compliance map be reviewed?", answer: "Review it at least quarterly and whenever the business launches a new product, enters a market, hires in a new category, changes premises or begins collecting new kinds of data." },
    ],
  },
  "how-to-start-a-business-in-nigeria-compliance-map": {
    image: "/images/insights/nigeria-business-compliance-map.webp",
    imageAlt: "A Nigerian business connected to registration, tax, data protection, production, agriculture and export pathways",
    imageCaption: "The correct regulatory route follows the activity, product, customer, location and destination.",
    readingMinutes: 15,
    takeaways: [
      "Choose the business activity before collecting licences.",
      "CAC registration does not replace sector approval.",
      "Export readiness includes Nigerian and destination-market requirements.",
      "Every application should have an owner, evidence folder and renewal date.",
    ],
    sections: [
      {
        heading: "A practical sequence from idea to operation",
        paragraphs: [
          "First describe the activity in plain language: what will be sold, to whom, through which channel, from which location and into which market. Next choose a legal structure that fits ownership, liability, financing and continuity. Register the entity accurately, open appropriate financial accounts and establish tax identity and bookkeeping before transactions become difficult to reconstruct.",
          "Then map people, premises, products, data and sector rules. Employment introduces contracts, payroll and workplace responsibilities. Physical premises may introduce state and local approvals. Personal-data collection introduces privacy duties. Regulated products and professional services create additional approval paths.",
        ],
      },
      {
        heading: "The farm-produce export example",
        paragraphs: [
          "An agricultural exporter may need an incorporated or registered entity, tax records and NEPC exporter registration. Plant products can require NAQS inspection and phytosanitary certification. The buyer may require traceability, residue, moisture, quality or packaging evidence. Processed food can create a NAFDAC pathway, while customs, logistics, insurance and destination-country rules remain separate parts of the transaction.",
          "The commercial contract should align with operational reality: product specification, inspection, rejection, delivery terms, currency, payment, insurance and responsibility at each border. A missing requirement discovered after harvest or loading can destroy margin and trust.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        bullets: [
          "Registering an entity name that does not fit the intended ownership or regulated activity.",
          "Paying an intermediary without verifying the application on the official portal.",
          "Assuming a certificate has no renewal or continuing obligation.",
          "Producing labels, packaging or inventory before requirements are confirmed.",
          "Keeping every login and document in one consultant’s personal account.",
          "Treating informal advice from another business as a regulatory decision.",
        ],
        paragraphs: [
          "Create the map before committing irreversible money. When the requirement is unclear, write the question precisely and obtain current confirmation from the responsible authority or qualified professional.",
        ],
      },
    ],
    faqs: [
      { question: "Should I register a business name or a limited company?", answer: "The answer depends on ownership, liability, investment, governance and the activity. Compare the consequences with a qualified adviser rather than choosing only by the cheapest filing fee." },
      { question: "Does every business need NDPC registration?", answer: "Not necessarily. Data-protection duties can apply even where a specific registration category does not. The volume, sensitivity and role of the organisation should be assessed under current NDPC guidance." },
      { question: "Which agency regulates agricultural exports?", answer: "There is no single universal answer. NEPC covers exporter registration, while NAQS, NAFDAC, customs and destination authorities may apply depending on the commodity and processing level." },
    ],
  },
  "nigerian-family-business-succession": {
    image: "/images/insights/family-business-succession.webp",
    imageAlt: "Two generations jointly transferring a carefully built Nigerian business institution",
    imageCaption: "Succession succeeds when ownership, judgement, relationships and operating knowledge can all move forward.",
    readingMinutes: 13,
    takeaways: [
      "A large founder-led company is not automatically a transferable institution.",
      "Succession includes ownership, governance, management and family relationships.",
      "The Igbo apprenticeship model demonstrates capability transfer, which differs from preserving one corporate vehicle.",
      "Emergency continuity should be designed before a planned retirement discussion.",
    ],
    sections: [
      {
        heading: "Four transitions, not one",
        paragraphs: [
          "Families often speak about succession as if it were the appointment of a new managing director. In reality, four transitions may occur at different times: ownership of shares and assets, authority over governance, responsibility for daily management and stewardship of family relationships. Confusing them creates conflict.",
          "A founder can retain ownership while professional management grows. Family members can sit on a family council without occupying operating roles. A board can protect the institution while a successor develops. Clear separation gives each conversation the right participants and evidence.",
        ],
      },
      {
        heading: "Create the succession evidence pack",
        paragraphs: [
          "The next generation needs more than encouragement. Build a controlled pack containing the ownership register, constitutional documents, major contracts, debt, property, insurance, licences, tax position, bank mandates, key advisers, intellectual property, customer concentration, supplier dependencies and active disputes.",
          "Add a decision map: which matters require board approval, which belong to management and which affect the family as owners. Test the pack by asking whether a competent leader could stabilise the business during a ninety-day founder absence.",
        ],
      },
      {
        heading: "What founders and successors owe each other",
        paragraphs: [
          "Founders owe successors truthful information, room to make bounded decisions and a path based on competence rather than birth order alone. Successors owe the institution preparation, respect for accumulated knowledge and the courage to modernise without dismissing the relationships that created the business.",
          "The goal is not to preserve every founder habit. It is to preserve the organisation’s purpose and commercial capability while allowing its methods to evolve.",
        ],
      },
    ],
    faqs: [
      { question: "When should succession planning begin?", answer: "As soon as the business has employees, assets, obligations or relationships that should survive the founder. Emergency continuity comes before retirement planning." },
      { question: "Must a child become the chief executive?", answer: "No. Family ownership can coexist with professional management. The appropriate leader should be chosen through defined competence, governance and accountability criteria." },
      { question: "Is succession mainly a legal exercise?", answer: "Legal documents are essential, but they cannot transfer judgement, relationships or operating knowledge by themselves. Training, records, governance and staged responsibility are also required." },
    ],
  },
  "paid-ads-without-digital-foundation": {
    image: "/images/insights/paid-ads-digital-foundation.webp",
    imageAlt: "Advertising attention leaking through a broken foundation beside a structured customer pathway",
    imageCaption: "Paid reach magnifies the destination. It does not repair the destination.",
    readingMinutes: 10,
    takeaways: [
      "Advertising amplifies the customer journey that already exists.",
      "Technical and message friction make every paid click more expensive.",
      "Owned pages, data and content continue producing value after a campaign ends.",
      "Campaign measurement should connect media metrics to qualified commercial outcomes.",
    ],
    sections: [
      {
        heading: "Calculate the full cost of a weak journey",
        paragraphs: [
          "Cost per click is only the entrance fee. Add the cost of visits lost to slow pages, enquiries lost to unclear offers, staff time spent answering questions the page should resolve and future campaigns run without dependable learning. The apparent media result can hide an expensive operating problem.",
          "Review the journey from advert promise to landing-page headline, evidence, mobile usability, form completion, response time and sales follow-up. A break at any stage changes the economics of the entire campaign.",
        ],
      },
      {
        heading: "A pre-flight check before spending",
        bullets: [
          "The advert and landing page describe the same specific offer.",
          "The page loads and remains usable on an ordinary mobile connection.",
          "Proof is visible before the customer is asked for commitment.",
          "Analytics distinguish the campaign, page action and qualified enquiry.",
          "A named person owns response time and lead status.",
          "The customer can recover the business later through search or an owned domain.",
        ],
        paragraphs: [
          "Start with a small controlled budget. Use the first campaign to test the message and journey, not to prove that advertising works in the abstract. Fix the largest leak before increasing spend.",
        ],
      },
      {
        heading: "Use paid media as a learning instrument",
        paragraphs: [
          "A disciplined campaign begins with a question. Which promise earns attention from the right buyer? Which objection prevents action? Which audience recognises the problem most urgently? Build a test that can answer one of these questions, keep the other variables controlled and record what changed. Running five messages, three audiences and two landing pages at once may create activity without producing a clear lesson.",
          "Qualitative evidence belongs beside the dashboard. Read the enquiries, listen to sales calls and note the language customers use after seeing the advert. A campaign with a modest conversion rate may reveal a valuable new use case; a campaign with cheap clicks may attract people who will never buy. Media numbers cannot make that distinction alone.",
          "The useful result of advertising is therefore larger than immediate sales. It is revenue plus reusable knowledge: a stronger message, a better page, a clearer audience and a record of what the market did. That knowledge should remain available when the campaign ends.",
        ],
      },
    ],
    faqs: [
      { question: "Should a new business avoid paid advertising?", answer: "Not necessarily. Small tests can reveal demand, but the offer, landing page, measurement and follow-up should be ready before the business attempts to scale reach." },
      { question: "Is a social-media profile enough as a landing page?", answer: "Sometimes for a narrow low-risk action, but an owned page usually provides better control over explanation, evidence, measurement and long-term discoverability." },
      { question: "Which metric matters most?", answer: "Use the metric closest to the business outcome that can still be measured reliably, such as qualified enquiry, booked consultation or profitable sale, while monitoring earlier diagnostic measures." },
    ],
  },
  "visibility-is-the-new-oil": {
    image: "/images/insights/visibility-business-infrastructure.webp",
    imageAlt: "Attention moving through an elegant system of trust, records and customer pathways",
    imageCaption: "Attention becomes valuable when infrastructure turns it into recognition, intent and learning.",
    readingMinutes: 10,
    takeaways: [
      "Visibility is an input, not the final business outcome.",
      "Search, reputation, content and conversion must work as one journey.",
      "Owned assets retain value when algorithms and campaign budgets change.",
      "The right measurement follows movement from attention to qualified action.",
    ],
    sections: [
      {
        heading: "Four kinds of visibility",
        paragraphs: [
          "Borrowed visibility comes from another person’s audience. Paid visibility comes from media spend. Platform visibility comes from algorithms and listings. Owned visibility comes from the pages, subscriber relationships, reputation and search presence the business can continue improving.",
          "A resilient strategy uses the first three to strengthen the fourth. A media appearance should create searchable demand. A campaign should grow customer knowledge. A social series should lead to an owned resource. Otherwise the organisation repeatedly starts from zero.",
        ],
      },
      {
        heading: "Build the conversion infrastructure",
        paragraphs: [
          "For each visibility source, define the intended next behaviour and the evidence needed at that moment. Someone discovering the category needs explanation. Someone comparing providers needs proof and fit. Someone ready to act needs a clear offer, response expectation and low-friction contact path.",
          "Then connect the journey to records. Capture the source without asking the customer to complete a research project. Record response and outcome. Use recurring objections to improve pages, content and service design.",
        ],
      },
      {
        heading: "Design a visibility portfolio",
        paragraphs: [
          "Treat visibility like a portfolio rather than a single bet. Use high-intent search pages for people already looking, educational content for people defining the problem, credible media or partnerships for borrowed trust, and selective paid distribution for controlled reach. Each asset has a different job, cost and time horizon.",
          "Map the portfolio quarterly. Note which audience each channel reaches, what happens next, who owns it and what remains if the channel disappears. This exposes dangerous concentration. A company whose discovery, conversations, customer list and proof all live inside one social account does not own a visibility engine; it rents one fragile doorway.",
          "The goal is not to appear everywhere. It is to be present in the few places that matter, with enough consistency that prospects can recognise the business, verify its claims and continue the journey without starting over.",
        ],
      },
    ],
    faqs: [
      { question: "Is visibility more important than product quality?", answer: "No. Visibility introduces the offer; product and service quality create satisfaction, reputation and repeat demand. One cannot sustainably compensate for the absence of the other." },
      { question: "What is the best visibility channel?", answer: "The best mix depends on audience behaviour, buying risk, market and resources. The durable principle is to connect rented or borrowed reach to owned, measurable infrastructure." },
      { question: "How can a business measure visibility quality?", answer: "Look beyond reach to branded search, relevant visits, qualified enquiries, conversion, repeat engagement and the customer questions generated by the exposure." },
    ],
  },
  "seo-aeo-visibility-strategy": {
    image: "/images/insights/seo-aeo-visibility.webp",
    imageAlt: "A business question passing through organised pages and evidence into a clear useful answer",
    imageCaption: "Search visibility improves when clear questions meet crawlable, trustworthy and well-structured answers.",
    readingMinutes: 12,
    takeaways: [
      "AEO does not replace SEO; both depend on retrievable and useful content.",
      "Direct answers need evidence, context and a clear responsible source.",
      "Thin question pages create volume without authority.",
      "Search performance should be connected to meaningful customer journeys.",
    ],
    sections: [
      {
        heading: "From keyword to question ecosystem",
        paragraphs: [
          "A keyword is evidence of language, not a complete content brief. Map the main question, the user’s level of knowledge, related decisions and the next questions likely to follow. A business-registration topic, for example, connects structure, tax identity, sector rules, records, cost and timing.",
          "Choose one page to own the central intent, then support it with genuinely distinct resources. This prevents several weak pages from competing with each other while helping readers move from understanding to action.",
        ],
      },
      {
        heading: "Build an answer that deserves citation",
        paragraphs: [
          "Define the subject in the opening. State the short answer without hiding essential conditions. Use headings that match the reader’s decision path. Cite primary sources for claims that can change. Identify the author or responsible organisation and show when the material was reviewed.",
          "Add original value through experience, a framework, a local example, a comparison or a tool. Generic summaries are easy to reproduce and provide little reason for a person or an answer system to prefer your page.",
        ],
      },
      {
        heading: "Measure discovery and usefulness together",
        bullets: [
          "Indexation and crawl health show whether the page can participate.",
          "Impressions and queries show where the page is being considered.",
          "Clicks and engagement show whether the promise matches the need.",
          "Service exploration and qualified enquiries show commercial usefulness.",
          "Updates and citations show whether the resource remains dependable.",
        ],
        paragraphs: [
          "Rankings can diagnose visibility, but they are not the final business outcome. The page should help the right reader make a better decision.",
        ],
      },
      {
        heading: "Maintain the answer after publication",
        paragraphs: [
          "Search work does not end when a page is indexed. Assign an owner and review date, especially for guidance involving regulation, prices, platform behaviour or application procedures. Monitor the queries that surface the page and compare them with the promise in the title. New questions may require clarification; a changed rule may require immediate correction.",
          "Preserve a short update record so readers and colleagues can understand what changed. Correct outdated examples, repair broken citations and consolidate overlapping pages rather than allowing a library of near-duplicates to accumulate. Internal links should follow the reader's next decision, not exist merely to distribute ranking signals.",
          "This maintenance discipline is equally useful for human readers and answer systems. Both benefit from a source that is current, attributable, specific and connected to deeper evidence. Sustainable visibility is therefore an editorial operation, not a one-time technical task.",
        ],
      },
    ],
    faqs: [
      { question: "What is answer engine optimisation?", answer: "AEO is the practice of making information clear, structured, trustworthy and retrievable for systems that provide direct or generated answers. It builds on sound SEO and content principles." },
      { question: "Does a website need special AI schema?", answer: "There is no universal special schema that guarantees inclusion in generated answers. Use supported structured data that accurately describes the visible page and follow established search guidance." },
      { question: "Should every customer question become a page?", answer: "No. Closely related questions usually belong in one substantial resource. Create a separate page only when the intent, audience or required answer is genuinely distinct." },
    ],
  },
  "answer-what-customers-search-for": {
    image: "/images/insights/customer-questions-service-design.webp",
    imageAlt: "Customer signals converging into an organised insight and tailored service pathway",
    imageCaption: "The best content strategy listens to demand before it decides what to publish.",
    readingMinutes: 10,
    takeaways: [
      "Customer language should influence both content and service design.",
      "Search data is one source of demand evidence, not the only source.",
      "A good answer resolves the question before presenting the service.",
      "Repeated questions often reveal a missing process or offer.",
    ],
    sections: [
      {
        heading: "Create a question bank",
        paragraphs: [
          "Build one shared register from search queries, enquiries, sales calls, proposal objections, support messages, reviews and staff observations. Preserve the customer’s original wording, then add the underlying need, journey stage, responsible expert and available evidence.",
          "Score questions by frequency, commercial relevance, risk, current answer quality and Tieko’s ability to add something original. This keeps the editorial calendar grounded in demand without turning it into a mechanical list of popular phrases.",
        ],
      },
      {
        heading: "Use one question across the system",
        paragraphs: [
          "A substantial answer can become an article, service-page section, sales explanation, short clip, carousel, email and internal training note. Each version should respect the format while keeping the factual core consistent.",
          "When the answer changes because a regulation, platform or market changes, update the source resource first and then the derivatives. This is why content operations and records management belong in the same conversation.",
        ],
      },
      {
        heading: "Know when a question should change the service",
        paragraphs: [
          "Some questions are content gaps; others are operating signals. If prospects repeatedly ask what happens after payment, the answer may require a clearer onboarding process. If clients keep asking for the same adjacent support, there may be a product opportunity. If people misunderstand the result, the positioning may be wrong even when the article is excellent.",
          "Route recurring questions to the team that can act on them. Marketing can improve the explanation, sales can qualify expectations, operations can redesign the handoff and leadership can decide whether the offer itself needs to change. Record the response and check whether the question becomes less frequent or more informed over time.",
          "This closes the loop at the heart of Tieko Media's approach: discover real demand, answer it clearly, build the appropriate service around it and use evidence from delivery to improve the next answer.",
        ],
      },
    ],
    faqs: [
      { question: "Where should a business find customer questions?", answer: "Begin with direct conversations and search-performance data, then add related searches, industry communities, support records, reviews and competitor gaps." },
      { question: "Will answering questions give away too much?", answer: "A useful explanation demonstrates competence and helps buyers judge fit. Keep confidential methods and client data protected, but do not hide basic clarity merely to force an enquiry." },
      { question: "How does question-led content connect to sales?", answer: "It reduces uncertainty at the relevant stage and offers an appropriate next step. The service link should solve the deeper problem rather than interrupt the answer." },
    ],
  },
  "are-influencers-an-influenza": {
    image: "/images/insights/influencers-influence-risk.webp",
    imageAlt: "A creator's message passing through relevance, trust and measurement filters before reaching an audience",
    imageCaption: "Influence becomes useful when relevance, truth and accountability filter the reach.",
    readingMinutes: 10,
    takeaways: [
      "The creator’s audience fit matters more than raw follower count.",
      "A brand remains responsible for the truth of the campaign claim.",
      "Usage rights, disclosure and crisis response should be agreed before publication.",
      "The campaign should leave customer insight or an owned asset behind.",
    ],
    sections: [
      {
        heading: "Perform creator due diligence",
        paragraphs: [
          "Review the creator’s themes, tone, audience geography, comment quality, prior partnerships, controversies and disclosure habits. Look for consistency between the audience the creator appears to have and the people who actually respond. Ask for relevant performance evidence, not screenshots chosen without context.",
          "Check whether the creator can explain the offer without making unsupported promises. A smaller expert audience may produce better trust and commercial action than a large entertainment audience with little category relevance.",
        ],
      },
      {
        heading: "Write a responsible campaign brief",
        paragraphs: [
          "The brief should define the audience, problem, approved facts, prohibited claims, disclosure language, deliverables, review points, usage period, edit rights, exclusivity, destination and reporting. It should also distinguish the creator’s personal experience from statements that require objective evidence.",
          "Plan for imperfection. Agree how factual errors will be corrected and who responds if the campaign attracts criticism. Speed matters, but a pre-agreed path prevents panic from creating a second problem.",
        ],
      },
      {
        heading: "Build value beyond the creator's post",
        paragraphs: [
          "A creator can introduce attention, but the brand must be ready to receive it. Build a relevant landing page, clear availability information, a trackable route to action and a response plan before the post goes live. Preserve useful campaign questions and objections so they can improve future content, frequently asked questions and customer support.",
          "Where permission allows, transform the collaboration into durable proof: a documented demonstration, an expert conversation, a customer education resource or a clearly disclosed case study. The aim is not simply to reuse a person's face. It is to retain the useful knowledge created through the partnership.",
          "Evaluate the relationship after the campaign. Did the creator represent the offer accurately? Did the audience match the intended market? Did the brand respond well? A smaller repeat partnership built on shared standards may be more valuable than a constant search for the next large audience.",
        ],
      },
    ],
    faqs: [
      { question: "Are micro-influencers more effective?", answer: "They can be when their audience is relevant and engaged, but size alone does not determine effectiveness. Fit, trust, creative quality, offer and destination all matter." },
      { question: "Who owns influencer content?", answer: "Ownership and usage rights depend on the agreement. The contract should specify where, how and for how long the brand may reuse the material." },
      { question: "What should an influencer campaign measure?", answer: "Measure the intended behaviour: qualified traffic, searches, enquiries, sales, saves or informed conversation. Use reach and views as context rather than the entire result." },
    ],
  },
  "africa-digital-infrastructure-curiosity": {
    image: "/images/insights/africa-curiosity-infrastructure.webp",
    imageAlt: "An African team learning through prototypes while building a connected infrastructure model",
    imageCaption: "Physical access enables participation. Curiosity and safe experimentation turn access into capability.",
    readingMinutes: 11,
    takeaways: [
      "Mindset cannot replace power, broadband, devices, finance or policy.",
      "Tools create little value when teams are afraid to question broken routines.",
      "Safe-to-fail experiments need boundaries, hypotheses and learning records.",
      "Digital maturity is the ability to learn without abandoning responsibility.",
    ],
    sections: [
      {
        heading: "Separate structural barriers from organisational habits",
        paragraphs: [
          "A team cannot think its way around an unavailable connection, unaffordable device or unreliable power supply. Leaders should name these material barriers honestly and invest or advocate accordingly. Blaming individuals for structural limits is neither accurate nor useful.",
          "Within the space an organisation can control, however, habits matter. A purchased system can remain unused because nobody studied the workflow, asked users what failed or had permission to test a different approach. Structural investment and learning culture must advance together.",
        ],
      },
      {
        heading: "Create safe-to-learn boundaries",
        paragraphs: [
          "Classify decisions by risk. Experiments involving sensitive data, customer money, safety or regulatory obligations need stronger review. A reversible internal workflow test can move faster. Teams learn when they understand which boundary applies and who can approve movement.",
          "Hold short learning reviews that ask what was expected, what happened, what evidence changed and what should be tried next. Do not reward reckless execution, but do reward early truth about a weak assumption.",
        ],
      },
      {
        heading: "Turn curiosity into an institutional capability",
        paragraphs: [
          "Curiosity becomes infrastructure when it survives beyond one enthusiastic employee. Give teams time to observe users, a channel for proposing improvements, access to the information needed to test an idea and a visible way to share what was learned. Managers should ask for evidence and reasoning, not only certainty.",
          "Schools, firms and public institutions can model this through small routines: demonstration days, post-project reviews, documented prototypes and cross-functional problem sessions. The purpose is not fashionable innovation theatre. It is to reduce the social cost of saying that a process is unclear or an assumption may be wrong.",
          "Africa's infrastructure challenge is physical, financial and institutional at once. Better connectivity and power expand what is possible. A learning culture determines whether organisations adapt those capabilities to local realities, maintain them and build the next layer rather than remaining passive consumers.",
        ],
      },
    ],
    faqs: [
      { question: "Does this argument blame African culture for digital gaps?", answer: "No. The article explicitly recognises infrastructure, affordability, policy and access constraints. It examines learning culture as one additional organisational factor that leaders can influence." },
      { question: "How can failure be encouraged without accepting negligence?", answer: "Define safe boundaries, protect high-risk areas, document hypotheses and review evidence. A well-designed experiment is different from ignoring known duties or controls." },
      { question: "What is a good first experiment?", answer: "Choose a narrow, reversible workflow with a visible user problem, a named owner, a short timeframe and one measurable outcome." },
    ],
  },
  "why-businesses-fail-in-digital-economy": {
    image: "/images/insights/digital-business-failure.webp",
    imageAlt: "Disconnected business tools contrasted with an organised customer and decision system",
    imageCaption: "Digital capability comes from connected ownership, workflows and evidence, not the number of platforms purchased.",
    readingMinutes: 11,
    takeaways: [
      "Digital failure usually reflects fragmented ownership and unclear strategy.",
      "Automating a broken workflow can make failure faster and harder to see.",
      "Small connected capabilities are more valuable than a large unused technology stack.",
      "Resilience depends on owned access, records and the ability to learn across platforms.",
    ],
    sections: [
      {
        heading: "The seven signs of digital fragility",
        bullets: [
          "Nobody can list every account, owner and recovery route.",
          "The same customer appears differently across sales, finance and support records.",
          "Content production stops when one person is unavailable.",
          "Reports describe activity but do not change a decision.",
          "Customers repeat information at every stage of the journey.",
          "Automation has no documented exception or human owner.",
          "The company cannot explain what it learned from its last campaign or tool purchase.",
        ],
        paragraphs: [
          "These are not purely technology problems. They reveal gaps in governance, process design and organisational memory.",
        ],
      },
      {
        heading: "A minimum viable digital operating system",
        paragraphs: [
          "Start with controlled identity and access, one accurate customer record, a documented lead-to-service workflow, an owned web destination, a small content library and a monthly performance review. Choose tools that support this system rather than allowing vendors to define the system for you.",
          "Name the owner of each handoff. Define the minimum information required. Document exceptions. Back up essential assets. When the simple system is reliable, add automation where repetition is stable and the risk is understood.",
        ],
      },
      {
        heading: "Sequence transformation around business risk",
        paragraphs: [
          "Do not begin with a catalogue of software. Begin with the failure that matters: lost enquiries, inconsistent delivery, inaccessible records, weak reporting or dependence on one employee. Map the current path, identify the cost and select the smallest capability that reduces that risk. This makes the business case visible and gives the team a result it can learn from.",
          "Adoption needs its own design. Explain what changes, involve the people who perform the work, define the new source of truth and retire duplicate methods deliberately. If staff must maintain the spreadsheet, messaging thread and new platform forever, the transformation has added labour instead of removing friction.",
          "Review the system after implementation. Measure the operating outcome, exceptions, user behaviour and new risks. Digital maturity is not the purchase date; it is the organisation's continuing ability to notice failure, revise the workflow and preserve what it learns.",
        ],
      },
    ],
    faqs: [
      { question: "Is digital transformation mainly an IT project?", answer: "No. Technology is involved, but the transformation affects customer journeys, ownership, workflows, skills, data, controls and management decisions." },
      { question: "Should a business automate before documenting its process?", answer: "Usually no. Document and simplify the workflow first. Otherwise automation may scale inconsistency or hide exceptions that require human judgement." },
      { question: "How can a small company reduce platform dependence?", answer: "Own the domain, retain customer and content records lawfully, maintain shared access, back up important assets and build journeys that can adapt when one channel changes." },
    ],
  },
  "business-data-from-records-to-decisions": {
    image: "/images/insights/business-data-decisions.webp",
    imageAlt: "Scattered business records becoming organised evidence and a clear management decision",
    imageCaption: "Data earns value when definitions, quality and ownership support a real decision.",
    readingMinutes: 11,
    takeaways: [
      "Begin with a decision, not with a request to collect everything.",
      "Every important field needs a definition, source and accountable owner.",
      "Privacy and retention should be designed into the data process.",
      "A dashboard becomes useful when it produces an action and a later review.",
    ],
    sections: [
      {
        heading: "Build a simple data dictionary",
        paragraphs: [
          "For every measure used in management, write the name, plain-language definition, calculation, source, owner, update frequency and known limitation. Decide whether cancelled, refunded or duplicate transactions are included. Document what makes an enquiry qualified and when a sale is considered complete.",
          "This work can feel slow, but it prevents meetings where people debate whose spreadsheet is correct instead of deciding what to do.",
        ],
      },
      {
        heading: "Use data without collecting carelessly",
        paragraphs: [
          "Collect the minimum information needed for the stated purpose. Restrict access by responsibility, protect transfers, define retention and create a path for correction or deletion where required. Sensitive information deserves stronger controls than an anonymous page-view count.",
          "Data quality and data protection reinforce each other. Knowing where information came from, why it exists and who owns it improves both analysis and accountability.",
        ],
      },
      {
        heading: "Turn the dashboard into a decision record",
        paragraphs: [
          "At each review, capture the observation, interpretation, decision, owner and date for reassessment. If qualified enquiries fell, the decision might be to revise a landing page or investigate response time. The next meeting should test that choice against the new evidence.",
          "Without this record, dashboards become recurring presentations. With it, data becomes a memory of how the organisation thinks and learns.",
        ],
      },
      {
        heading: "Create a management rhythm around evidence",
        paragraphs: [
          "Different decisions need different clocks. Frontline teams may review response time each day, managers may examine conversion and delivery each week, and leadership may review profitability, retention and strategic risk each month or quarter. Forcing every measure into one giant meeting makes urgent signals late and strategic signals noisy.",
          "Give each review a fixed question set: what changed, is the change material, what may explain it, what action follows, who owns that action and when will the result be checked? Separate observation from interpretation so a confident story does not become a substitute for evidence. Record uncertainty when the available data cannot support a conclusion.",
          "Over time, this rhythm improves the data itself. Teams discover which fields are unreliable, which measures arrive too late and which reports never influence action. Removing an unused metric can be as valuable as adding a new one because attention is also a limited business resource.",
        ],
      },
    ],
    faqs: [
      { question: "Does a small business need a data warehouse?", answer: "Usually not at the beginning. It first needs consistent definitions, reliable source records, controlled access and a few decision-relevant reports." },
      { question: "What is the difference between data and business intelligence?", answer: "Data is recorded evidence. Business intelligence organises and interprets that evidence to reduce uncertainty around a decision." },
      { question: "How many metrics should management track?", answer: "Use the smallest set that explains the important customer, operational, financial and risk outcomes. Additional detail can remain available for diagnosis." },
    ],
  },
};

export function getInsightEnhancement(slug: string) {
  return insightEnhancements[slug];
}
