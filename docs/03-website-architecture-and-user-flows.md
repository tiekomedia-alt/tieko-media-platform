# Tieko Media Platform: Website Architecture and User Flows

**Document ID:** TMP-03  
**Version:** 0.2  
**Status:** Working draft  
**Date:** 16 September 2026  
**Owner:** Tieko Media Limited  
**Product lead:** David Oluwadamilola Vanteko  
**Parent documents:** TMP-00 Master Project Brief and TMP-01 Product Requirements Document  
**Repository:** tiekomedia-alt/tieko-media-platform

## 1. Purpose

This document defines how the Tieko Media website is organised and how users move through it.

It establishes:

- Website hierarchy
- Primary and secondary navigation
- Page relationships
- Page templates
- Entry points
- Conversion routes
- Internal-linking behaviour
- Booking and enquiry flows
- Paid intelligence-report flows
- Compliance-service boundaries
- Product-discovery flows
- Paid-campaign landing-page flows
- Mobile navigation principles
- Error, empty and confirmation states

This is a Website Flow document. It does not refer to the Webflow website-building platform.

## 2. Architecture goals

The architecture must:

1. Make Tieko Media’s positioning understandable within seconds.
2. Allow visitors to enter through any important page without becoming disoriented.
3. Keep the eight launch services easy to discover.
4. Prevent the navigation from becoming crowded.
5. Connect services, insights, products, reports and case studies.
6. Make Book a Call continuously available without becoming intrusive.
7. Preserve the professional separation between Tieko Media and Vanteko & Associates.
8. Support search-engine crawling and meaningful internal linking.
9. Support individual advertising campaigns for individual services.
10. Expand cleanly as new services, products, reports and case studies are approved.

## 3. Architectural model

The platform will use a hub-and-spoke structure.

- The homepage introduces the complete Tieko system.
- Hub pages organise related content.
- Detail pages answer specific user needs and search intent.
- Proof pages support service claims.
- Insights and reports create discovery pathways.
- Every major pathway leads towards a meaningful next action.

```mermaid
flowchart TD
    H["Homepage"] --> S["Services"]
    H --> P["Products"]
    H --> I["Intelligence"]
    H --> W["Work"]
    H --> N["Insights"]
    S --> C["Service pages"]
    P --> D["Product pages"]
    I --> R["Reports"]
    W --> K["Case studies"]
    N --> A["Articles"]
    C --> B["Book a Call"]
    D --> B
    R --> B
    K --> B
    A --> B
```

## 4. Primary navigation

### 4.1 Desktop navigation

The primary navigation will contain:

1. Services
2. Products
3. Intelligence
4. Work
5. Insights
6. About
7. Book a Call

Book a Call must be visually distinct as the primary action.

### 4.2 Services menu

The Services menu should expose the eight launch services without placing all eight items directly in the navigation bar.

Recommended menu structure:

#### Build Visibility

- Media Buying
- Digital Presence Optimisation
- Content Creation

#### Reach and Reputation

- Billboard Advertising
- Press Release Services

#### Structure and Decisions

- Compliance
- Intelligence Reports
- Data and Records Management

The final menu labels may be refined during content design, but every service must remain directly accessible within one interaction from the main Services control.

### 4.3 Products menu

Initial items:

- View All Products
- TeamShuffle

LegalFlashcards9ja will only be added after its public name, status and presentation are approved.

### 4.4 Intelligence menu

Initial items:

- Intelligence Overview
- Commission a Report
- Reports and Briefings
- Research Methodology

The Reports and Briefings route may initially display a limited collection while the catalogue grows.

### 4.5 About menu

Initial items:

- About Tieko
- Team
- Contact

### 4.6 Mobile navigation

The mobile menu must:

- Open from a clearly labelled menu button
- Trap focus appropriately when presented as a modal panel
- Close using a visible control, Escape key and completed navigation
- Preserve Book a Call as a prominent action
- Use expandable service groups where helpful
- Avoid deeply nested menus
- Prevent background scrolling while open
- Remain fully usable at 200 percent zoom
- Announce its expanded or collapsed state to assistive technology

Recommended mobile order:

1. Book a Call
2. Services
3. Products
4. Intelligence
5. Work
6. Insights
7. About
8. Contact

## 5. Global utility elements

### 5.1 Header

The header must include:

- Tieko Media logo or wordmark
- Primary navigation
- Book a Call
- Accessible mobile-menu control

The header must remain permanently available on every public page as the user scrolls. It may adapt subtly after scrolling, but must remain readable, compact, stable and accessible without causing layout shifts.

### 5.2 Footer

The footer must include:

- Short Tieko positioning statement
- Service links
- Product links
- Intelligence links
- Work and Insights
- About, Team and Contact
- Book a Call
- Privacy
- Cookies
- Terms
- Legal Disclaimer
- Accessibility
- Approved social profiles
- Business identity information
- Copyright information

The footer must not become a dumping ground for unapproved pages.

### 5.3 Breadcrumbs

Breadcrumbs are required for:

- Individual service pages
- Product pages
- Report pages
- Case studies
- Articles

Breadcrumbs must be visible, crawlable and consistent with structured data.

### 5.4 Global CTA

Book a Call must appear:

- In the header
- In major service-page conversion sections
- At the end of relevant detail pages
- In the footer

It must not appear as multiple competing buttons within the same visual region.

## 6. Sitemap

### 6.1 Core structure

```mermaid
flowchart TD
    H["/"] --> S["/services"]
    H --> P["/products"]
    H --> I["/intelligence"]
    H --> W["/work"]
    H --> N["/insights"]
    H --> A["/about"]
    H --> B["/book-a-call"]

    S --> S1["Media Buying"]
    S --> S2["Compliance"]
    S --> S3["Digital Presence Optimisation"]
    S --> S4["Content Creation"]
    S --> S5["Intelligence Reports"]
    S --> S6["Billboard Advertising"]
    S --> S7["Press Release Services"]
    S --> S8["Data and Records Management"]

    P --> P1["TeamShuffle"]
    I --> R["/reports/[slug]"]
    W --> C["/work/[slug]"]
    N --> X["/insights/[slug]"]
    A --> T["/team"]
    A --> CT["/contact"]
```

### 6.2 Required launch routes

| Area | Route | Purpose |
|---|---|---|
| Homepage | / | Positioning, discovery and primary conversion |
| Services hub | /services | Organise all launch services |
| Media Buying | /services/media-buying | Media planning, buying and optimisation |
| Compliance | /services/compliance | Compliance coordination and professional routing |
| Digital Presence Optimisation | /services/digital-presence-optimisation | Search, website, reputation and conversion improvement |
| Content Creation | /services/content-creation | Strategy and content systems |
| Intelligence Reports | /services/intelligence-reports | Paid research and report commissioning |
| Billboard Advertising | /services/billboard-advertising | Outdoor campaign planning and coordination |
| Press Release Services | /services/press-release-services | Press release preparation and distribution |
| Data and Records Management | /services/data-records-management | Digitisation, governance, secure records lifecycle and authorised data discovery |
| Products hub | /products | Approved owned products |
| TeamShuffle | /products/teamshuffle | Product proof and live-product referral |
| Digital Business Health Check | /tools/digital-business-health-check | Free scored self-assessment and qualified audit pathway |
| Intelligence hub | /intelligence | Intelligence capability and report discovery |
| Reports | /reports | Approved reports and briefings |
| Report detail | /reports/[slug] | Report summary, sample and commissioning |
| Work hub | /work | Case-study discovery |
| Case study | /work/[slug] | Detailed project evidence |
| Insights hub | /insights | Articles and thought leadership |
| Article | /insights/[slug] | Search-led educational content |
| About | /about | Mission, positioning and approach |
| Team | /team | Approved people and expertise |
| Contact | /contact | General contact options |
| Book a Call | /book-a-call | Primary conversion destination |
| Privacy | /privacy | Data-use information |
| Cookies | /cookies | Cookie information and preferences |
| Terms | /terms | General website terms |
| Legal Disclaimer | /legal-disclaimer | Professional and informational limitations |
| Accessibility | /accessibility | Accessibility statement |
| Not found | Framework route | Recovery from invalid URLs |

### 6.3 Reserved future routes

The following route groups may be introduced later:

- /services/[additional-service]
- /products/[approved-product]
- /industries/[slug]
- /locations/[slug]
- /tools/[slug]
- /events/[slug]
- /authors/[slug]

They must not be generated until content quality, ownership and search intent are approved.

## 7. Page hierarchy

### Level 1: Identity and conversion

- Homepage
- Book a Call

### Level 2: Commercial and authority hubs

- Services
- Products
- Intelligence
- Work
- Insights
- About

### Level 3: Detail and evidence

- Service pages
- Product pages
- Report pages
- Case studies
- Articles
- Team
- Contact

### Level 4: Legal, supporting and system pages

- Privacy
- Cookies
- Terms
- Legal Disclaimer
- Accessibility
- Confirmation states
- Error states
- Not-found page

No important commercial page should require more than three meaningful navigation decisions from the homepage.

## 8. Homepage web flow

Recommended homepage sequence:

1. Header
2. Positioning hero
3. Primary Book a Call and secondary Explore Our Services CTA
4. Short proof or credibility strip
5. Four-capability model
6. Eight launch services
7. Selected case studies
8. Product-building proof
9. Intelligence-report feature
10. Selected insights
11. Tieko approach
12. Final Book a Call section
13. Footer

```mermaid
flowchart TD
    E["Homepage entry"] --> V["Understand Tieko"]
    V --> Q{"Visitor intent"}
    Q -->|Needs a service| S["Choose service"]
    Q -->|Needs evidence| W["View work"]
    Q -->|Needs intelligence| I["Explore intelligence"]
    Q -->|Exploring Tieko| A["About or products"]
    S --> B["Book a Call"]
    W --> B
    I --> R["Commission a Report"]
    A --> B
```

### Homepage rules

- The hero must not attempt to explain every service.
- Products and intelligence must be visible without competing with the main positioning.
- The first viewport must contain a clear statement of what Tieko is.
- The final CTA must repeat the primary action without repeating the entire hero.
- The Àmì Ribbon should guide the visual journey through selected sections.

## 9. Services hub flow

Recommended sequence:

1. Services positioning
2. Explain the four-capability model
3. Problem-based service selector
4. Eight service summaries
5. Related work
6. Relevant insights
7. Book a Call

The service selector should help users identify their route through practical questions such as:

- Do you need to reach more of the right people?
- Do you need to improve how your business appears online?
- Do you need a consistent content system?
- Do you need legal or regulatory compliance support?
- Do you need research before making a decision?
- Do you need outdoor visibility?
- Do you have an announcement that requires media distribution?
- Do you need to digitise, organise, retain, retrieve or protect institutional records?

## 10. Standard service-page flow

Each service page should follow a shared conversion logic while allowing service-specific content.

```mermaid
flowchart TD
    E["Service-page entry"] --> H["Problem and promise"]
    H --> F["Determine fit"]
    F --> P["Review process"]
    P --> D["Review deliverables"]
    D --> T["Review proof"]
    T --> Q["Read FAQs"]
    Q --> C["Book a Call"]
```

Recommended page sequence:

1. Breadcrumb
2. Service-specific hero
3. Who the service is for
4. Problems addressed
5. Outcomes and value
6. Scope and deliverables
7. Process
8. Proof or methodology
9. Related work
10. Frequently asked questions
11. Related insights
12. Related services
13. Book a Call
14. Footer

### Service-page internal-link rules

Every service page must link to:

- Services hub
- At least one related service
- At least one relevant insight when available
- At least one case study when available
- Book a Call
- Relevant legal page where required

Every service page should receive links from:

- Services hub
- Homepage where prioritised
- Relevant articles
- Related case studies
- Footer or service menu where appropriate

## 11. Media Buying user flow

```mermaid
flowchart TD
    E["Ad, search or referral"] --> M["Media Buying page"]
    M --> N["Understand channels and process"]
    N --> A["Review assessment requirements"]
    A --> B["Book a Call"]
    B --> C["Provide campaign context"]
    C --> D["Scheduling confirmation"]
```

### Required decision information

Before booking, users should understand:

- Tieko’s professional fee is separate from advertising spend.
- Platforms and channels depend on the campaign objective.
- Performance cannot be guaranteed.
- Tracking readiness may need to be assessed.
- Creative production may be a separate or connected scope.

### Relevant internal links

- Content Creation
- Digital Presence Optimisation
- Billboard Advertising
- Relevant campaign case studies
- Media-buying insights

## 12. Compliance user flow

The compliance journey requires stricter boundaries.

```mermaid
flowchart TD
    E["Search, referral or service hub"] --> C["Compliance page"]
    C --> R["Read provider relationship"]
    R --> S["Choose general service need"]
    S --> D["Review disclaimer and privacy"]
    D --> Q{"Next action"}
    Q -->|Book call| B["Book initial call"]
    Q -->|Send enquiry| F["Limited initial form"]
    B --> X["Conflict and suitability process"]
    F --> X
    X --> V["Vanteko & Associates engagement if accepted"]
```

### Compliance-flow rules

- Tieko Media may receive a general initial request.
- The page must identify Vanteko & Associates as the provider of regulated legal services.
- The form must avoid detailed confidential narratives.
- Submission must not create a solicitor-client relationship.
- Conflict checks may precede substantive discussion.
- Data transfer must follow the approved privacy and professional workflow.
- The visitor must receive truthful next-step information.
- No page may promise approval, access or influence over regulators.

### Compliance internal links

- Legal Disclaimer
- Privacy
- Relevant compliance insights
- Intelligence Reports where regulatory research is relevant
- Book a Call

## 13. Digital Presence Optimisation flow

```mermaid
flowchart TD
    E["Search, audit content or referral"] --> D["Optimisation page"]
    D --> G["Identify visibility gaps"]
    G --> S["Review assessment scope"]
    S --> P["Understand priorities and process"]
    P --> E2["View evidence or insights"]
    E2 --> B["Book a Call"]
```

### Primary cross-links

- Media Buying
- Content Creation
- Relevant SEO and visibility insights
- Website or optimisation case studies
- Future digital-presence assessment

## 14. Content Creation flow

```mermaid
flowchart TD
    E["Search, social or referral"] --> C["Content Creation page"]
    C --> S["Understand strategy-first approach"]
    S --> T["Select relevant content needs"]
    T --> P["Review production process"]
    P --> W["View approved work"]
    W --> B["Book a Call"]
```

### Primary cross-links

- Media Buying
- Press Release Services
- Digital Presence Optimisation
- Work
- Content-system insights

## 15. Intelligence-report flow

```mermaid
flowchart TD
    E["Intelligence hub, search or article"] --> I["Intelligence Reports page"]
    I --> C["Choose report category"]
    C --> R["Review scope and methodology"]
    R --> S["View sample or summary"]
    S --> Q{"Standard or custom need"}
    Q -->|Existing report| A["Request access or consultation"]
    Q -->|Custom report| F["Commissioning form"]
    A --> B["Book a Call"]
    F --> K["Qualification review"]
    K --> B
```

### Intelligence-flow rules

- Clearly identify reports as paid.
- Distinguish public summaries from paid content.
- Explain methodology and limitations.
- Preserve report category and source when the user begins an enquiry.
- Do not expose paid files through predictable public URLs.
- Do not promise a delivery date before scope confirmation.
- Do not introduce checkout until approved.

### Primary cross-links

- Intelligence hub
- Reports archive
- Relevant insights
- Compliance where regulatory analysis is required
- Digital Presence Optimisation where search intelligence is required
- Commission a Report
- Book a Call

## 16. Billboard Advertising flow

```mermaid
flowchart TD
    E["Search, campaign or referral"] --> B["Billboard Advertising page"]
    B --> O["Clarify campaign objective"]
    O --> L["Review location and format process"]
    L --> C["Understand creative and vendor coordination"]
    C --> A["Request assessment"]
    A --> K["Book a Call"]
```

### Required decision information

Users should understand:

- Inventory is subject to confirmation.
- Vendor pricing and professional fees may be separate.
- Measurement differs from digital advertising.
- Creative adaptation may be required.
- Permits or third-party approvals may apply.
- Proof of placement should be defined in the engagement.

### Primary cross-links

- Media Buying
- Content Creation
- Press Release Services
- Relevant campaign work

## 17. Press Release Services flow

```mermaid
flowchart TD
    E["Search, announcement or referral"] --> P["Press Release Services page"]
    P --> N["Assess newsworthiness"]
    N --> S["Review drafting and distribution scope"]
    S --> D["Understand placement types"]
    D --> F["Submit initial brief"]
    F --> B["Book a Call"]
```

### Required decision information

The flow must distinguish:

- Earned media
- Sponsored placement
- Paid distribution
- Editorial review
- Tieko’s professional fees
- Third-party publication costs
- Monitoring and reporting

The page must state that publication and editorial acceptance cannot be guaranteed.

### Primary cross-links

- Content Creation
- Media Buying
- Digital Presence Optimisation
- Billboard Advertising
- Relevant PR work and insights

## 18. Data and Records Management flow

```mermaid
flowchart TD
    E["Search, referral or service hub"] --> D["Data and Records Management page"]
    D --> N["Identify records and data need"]
    N --> S["Define authorised scope and sensitivity"]
    S --> A["Assess records, systems and workflows"]
    A --> R["Recommend governance and delivery plan"]
    R --> B["Book a Call"]
```

### Required decision information

Users should understand:

- The service covers the records lifecycle, including capture, classification, retention, retrieval, archival storage and lawful disposal.
- Data discovery and analysis only use records and systems the client is authorised to provide or permit Tieko to access.
- Third-party storage, scanning, hosting or destruction may be delivered by approved specialist partners under documented confidentiality and data-processing terms.
- Data leakage risk can be reduced, but absolute prevention cannot be guaranteed.
- Cybersecurity testing, legal advice and certification are separate scopes unless expressly included.
- Sensitive records require enhanced access controls, transfer rules, retention decisions and incident procedures.

### Primary cross-links

- Compliance
- Intelligence Reports
- Digital Presence Optimisation
- Relevant data-governance and digitisation insights
- Book a Call

## 19. Products flow

```mermaid
flowchart TD
    E["Homepage, navigation or case study"] --> P["Products hub"]
    P --> T["TeamShuffle page"]
    T --> V["Visit TeamShuffle"]
    T --> C["View product case study"]
    C --> B["Book a Call"]
```

### Product-flow rules

- Approved live products should link to their own websites.
- External product links must be clearly identifiable.
- Product status must be accurate.
- Product pages should connect the product to Tieko’s capabilities.
- Confidential and unapproved products must not appear.
- Product pages must not become sales pages for unrelated services.

## 20. Work and case-study flow

```mermaid
flowchart TD
    E["Homepage, service or search"] --> W["Work hub"]
    W --> C["Select case study"]
    C --> P["Understand problem"]
    P --> S["Review strategy and execution"]
    S --> R["Review results"]
    R --> N["Explore related service"]
    N --> B["Book a Call"]
```

### Case-study linking rules

Each case study should link to:

- Relevant service pages
- Relevant product page where applicable
- Related insight
- Book a Call

Each service page should link back to the most relevant approved case studies.

## 21. Insights user flow

```mermaid
flowchart TD
    E["Search, social or internal link"] --> A["Article"]
    A --> V["Receive complete answer"]
    V --> R["Explore related content"]
    R --> S["Visit relevant service or report"]
    S --> B["Book a Call or commission report"]
```

### Article conversion rules

- The article must answer the reader’s question before presenting a sales prompt.
- CTAs must match the topic.
- Internal links must be contextual.
- Articles should not contain aggressive repeated pop-ups.
- Author and update information must be visible.
- Sources should be supplied where required.
- Related content should be editorially relevant.

## 22. Book a Call flow

```mermaid
flowchart TD
    C["CTA click"] --> B["Book a Call page"]
    B --> S["Select or confirm service context"]
    S --> P["Review call purpose and privacy"]
    P --> T["Choose time"]
    T --> D["Provide required details"]
    D --> V["Validate submission"]
    V --> X{"Successful booking?"}
    X -->|Yes| Y["Confirmation and next steps"]
    X -->|No| E["Accessible error and retry"]
```

### Booking-flow requirements

- Preserve referral page and service context.
- Make timezone explicit.
- State the expected call duration.
- Explain what the visitor should prepare.
- Collect only necessary information.
- Display truthful confirmation.
- Provide calendar and rescheduling information where supported.
- Do not state or imply that booking creates a solicitor-client relationship.
- Record approved analytics events without collecting sensitive content.

## 23. General enquiry flow

```mermaid
flowchart TD
    E["Contact or contextual enquiry"] --> F["Form"]
    F --> V["Client and server validation"]
    V --> S{"Valid and safe?"}
    S -->|No| R["Accessible correction"]
    S -->|Yes| P["Spam and rate-limit checks"]
    P --> A{"Accepted?"}
    A -->|No| G["Safe error or alternate contact"]
    A -->|Yes| D["Store or route securely"]
    D --> C["Truthful confirmation"]
    D --> N["Internal notification"]
```

### Confirmation requirements

A successful confirmation must include:

- Confirmation that the message was received
- Submission reference where available
- Realistic next steps
- Alternative contact method if appropriate
- No guaranteed outcome
- No false claim that a human has reviewed the submission

## 24. Paid-campaign landing-page flow

Individual service pages may support focused advertising variants.

```mermaid
flowchart TD
    A["Advertisement"] --> L["Matching landing page"]
    L --> P["Promise and audience fit"]
    P --> O["Offer and deliverables"]
    O --> T["Proof and trust"]
    T --> F["FAQ or objection handling"]
    F --> C["Book a Call or enquiry"]
    C --> M["Attributed conversion"]
```

### Landing-page rules

- Message must match the advertisement.
- One primary conversion action should dominate.
- Global navigation may be simplified but not deceptive.
- Required legal and privacy links must remain accessible.
- Tracking parameters must be preserved securely.
- Pages must not become indexable duplicates of canonical service pages.
- Campaign claims must be verifiable.
- The experience must work without third-party tracking consent where possible.

## 25. Digital Business Health Check flow

The Tieko Digital Business Health Check is an original lead-generation and educational tool. It must not reproduce another company’s wording, scoring model or assessment framework.

The tool has two levels:

1. A free, short self-assessment that produces an immediate indicative score.
2. A paid professional Digital Presence and Infrastructure Audit that produces verified findings and a prioritised roadmap.

```mermaid
flowchart TD
    E["Campaign, search, article or service page"] --> L["Health Check landing page"]
    L --> S["Start free assessment"]
    S --> Q["Answer scored questions"]
    Q --> R["Immediate score and category results"]
    R --> G["Review priority gaps"]
    G --> O{"Choose next step"}
    O -->|Receive summary| M["Optional email delivery"]
    O -->|Need professional review| B["Book paid audit call"]
    O -->|Learn more| C["Relevant services and insights"]
```

### 25.1 Proposed assessment dimensions

The free assessment should evaluate eight dimensions:

1. Business Identity and Compliance
2. Website and Technical Foundation
3. Search Discoverability
4. Content and Brand Consistency
5. Customer Acquisition and Conversion
6. Data, Analytics and Measurement
7. Reputation and Trust
8. Privacy and Security Readiness

Each dimension must contain a small number of plain-language questions. Questions must assess observable practices rather than invite users to rate themselves vaguely.

### 25.2 Scoring model

The free tool should produce:

- An overall score from 0 to 100
- A score for each dimension
- A short readiness band
- Three immediate priorities
- Relevant service or insight recommendations
- A clear statement that the result is indicative, not a professional audit

Proposed bands:

| Score | Band | Meaning |
|---|---|---|
| 0 to 24 | Vulnerable Foundation | Critical business and digital foundations require attention |
| 25 to 49 | Emerging Foundation | Important systems exist, but material gaps remain |
| 50 to 74 | Established Presence | The business has useful foundations with identifiable optimisation opportunities |
| 75 to 100 | Growth Ready | The business has strong systems and should focus on advanced optimisation and scale |

The final formula, question weights and band language must be validated before launch. A high score must not imply legal compliance, security certification or guaranteed business performance.

### 25.3 Result experience

The user must see the overall score immediately after completing the assessment.

The result page should include:

- Overall score
- Dimension scores
- Plain-language interpretation
- Strengths
- Priority gaps
- Three next actions
- Relevant Tieko services
- Link to the paid audit
- Book a Call
- Ability to receive a detailed summary by email where approved

The basic score must not be hidden behind an email gate.

Email delivery must:

- Be optional
- Use a separate marketing-consent choice
- State what will be sent
- Avoid pre-ticked consent
- Store only necessary data
- Provide truthful follow-up expectations

### 25.4 Paid audit pathway

The paid Digital Presence and Infrastructure Audit may include:

- Evidence review
- Website and technical assessment
- Search visibility analysis
- Content and brand consistency review
- Conversion-path review
- Analytics and measurement review
- Reputation and trust review
- Data, privacy and security observations
- Compliance coordination where required
- Prioritised roadmap
- Executive summary
- Recommended quick wins
- Longer-term actions

The paid audit must distinguish verified findings from self-reported answers.

### 25.5 Campaign use

The free assessment may be promoted through:

- Search campaigns
- Social advertising
- Founder-focused content
- Email
- Workshops
- Relevant articles
- Partner referrals

Campaign landing variants must preserve canonical and indexing rules.

### 25.6 Tool security and privacy

The tool must:

- Validate all inputs
- Avoid collecting sensitive legal, financial or security details
- Avoid open file uploads in the free assessment
- Apply rate limiting and bot controls
- Prevent score manipulation from creating unsafe server behaviour
- Avoid exposing proprietary scoring logic where that would enable abuse
- Never present the result as legal, financial or cybersecurity certification
- Avoid sending assessment answers into analytics platforms
- Retain data only according to the approved policy

### 25.7 Tool internal links

The Health Check should receive links from:

- Homepage
- Services hub
- Digital Presence Optimisation
- Compliance
- Media Buying
- Content Creation
- Relevant insights
- Campaign landing pages

The result experience may link to:

- Relevant service pages
- Relevant insights
- Book a Call
- Paid audit information

## 26. Internal-linking system

### 25.1 Required link relationships

| Source | Must link to |
|---|---|
| Homepage | Major hubs, selected services, products, work, intelligence and insights |
| Services hub | All eight launch services |
| Service page | Related services, proof, insights, Book a Call |
| Product hub | All approved public products |
| Product page | Live product, related work, relevant capability |
| Intelligence hub | Reports, methodology, commissioning |
| Report page | Related reports, insights, Commission a Report |
| Work hub | Published case studies |
| Case study | Relevant services and Book a Call |
| Insights hub | Articles and topic archives where approved |
| Article | Related content, relevant service or report |
| About | Team, products, work and Book a Call |
| Footer | Priority hubs, services and legal pages |

### 25.2 Anchor-text principles

Internal links must:

- Describe the destination
- Avoid repetitive “click here” labels
- Remain natural in context
- Support users before search engines
- Avoid excessive exact-match repetition
- Never link confidential or unpublished content

### 25.3 Orphan-page prevention

No indexable page may be published without:

- At least one crawlable internal link from an appropriate hub or detail page
- Inclusion in the correct sitemap
- Correct canonical treatment
- A content owner
- A defined user purpose

## 27. Content discovery and taxonomy

### 26.1 Initial insight topics

- Digital Infrastructure
- Media Buying
- Search and Visibility
- Content Systems
- AI and Business
- Compliance
- Data and Analytics
- African Market Intelligence
- Product Building
- Reputation and Trust

### 26.2 Report categories

- Market Intelligence
- Competitor Intelligence
- Search and Demand Intelligence
- Regulatory Intelligence
- Digital Landscape Analysis
- Audience Research
- Opportunity Research
- Custom Commissioned Research

### 26.3 Case-study filters

Filters may include:

- Service
- Industry
- Location
- Project type

Filters should only be implemented when sufficient content exists. Empty or nearly empty filters should not appear at launch.

## 28. Search and filtering flow

Site search is optional for version 1.

If introduced:

```mermaid
flowchart TD
    Q["Search query"] --> V["Validate and normalise"]
    V --> R["Public results"]
    R --> F["Filter by content type"]
    F --> D["Open result"]
    R --> E["Useful empty state"]
```

Search must exclude:

- Drafts
- Private reports
- Confidential product references
- Administrative content
- Personal enquiry data
- Preview URLs

## 29. Cross-device flow continuity

Users must be able to complete all primary flows on mobile without switching devices.

Required mobile behaviours:

- Book a Call remains discoverable.
- Forms use appropriate input types.
- Service comparison does not require wide tables.
- Àmì Ribbon assets are simplified and cropped safely.
- Long articles remain readable.
- Breadcrumbs do not cause horizontal overflow.
- The mobile menu exposes the same destinations as desktop.
- Embedded booking experiences remain usable or open through an accessible alternative.
- Tap-to-call and approved WhatsApp actions may be used where appropriate.

## 30. States and recovery flows

### 30.1 Loading states

Loading states must:

- Communicate progress
- Avoid content jumping
- Remain accessible
- Avoid indefinite animation
- Provide recovery if loading fails

### 30.2 Empty states

Required empty states may include:

- No reports in a selected category
- No case studies for a filter
- No search results
- No available booking slots

Each must explain what happened and provide a useful alternative.

### 30.3 Error states

Error messages must:

- Use plain language
- Avoid exposing technical details
- Identify correctable fields
- Preserve valid input where safe
- Provide a retry or alternative
- Be announced to assistive technology

### 30.4 Not-found page

The not-found experience must:

- State that the page could not be found
- Offer search or important navigation
- Link to Services, Insights and Book a Call
- Use a restrained brand expression
- Return the correct HTTP status

### 30.5 Submission failures

A failed submission must never display success.

The user should receive:

- A clear failure message
- Safe retry guidance
- An alternative contact route where appropriate
- No duplicate submission caused by uncontrolled retry

## 31. Analytics flow map

The following transitions must be measurable:

- Homepage to service
- Homepage to Book a Call
- Service to Book a Call
- Service to enquiry
- Article to service
- Article to report
- Report to Commission a Report
- Product page to external product
- Case study to related service
- Campaign page to conversion
- Form start to completion
- Booking start to completion where supported

Analytics must not capture:

- Detailed legal facts
- Form message content
- Uploaded document contents
- Sensitive personal data
- Authentication credentials

## 32. SEO flow requirements

Search engines should be able to move through the site using:

- Primary navigation
- Hub pages
- Breadcrumbs
- Contextual internal links
- HTML sitemap if later approved
- XML sitemap

The crawl path should prioritise:

1. Homepage
2. Commercial hubs
3. Priority services
4. Work and product proof
5. Intelligence and reports
6. Insights
7. Supporting legal and identity pages

Campaign duplicates, previews, drafts, internal search results and administrative routes must not enter the index.

## 33. Content-governance flow

```mermaid
flowchart TD
    D["Draft"] --> R["Editorial review"]
    R --> F["Fact and claim check"]
    F --> L["Legal or professional review if required"]
    L --> P["Preview"]
    P --> A["Approval"]
    A --> U["Publish"]
    U --> M["Monitor and update"]
    M --> X["Archive or redirect"]
```

### Required review triggers

Legal or professional review is required when content includes:

- Legal advice or compliance interpretation
- Regulatory claims
- Data-protection guidance
- Professional credentials
- Comparative or potentially defamatory statements
- Client-sensitive information
- Guarantees or performance claims
- Intellectual-property claims

## 34. Navigation and architecture acceptance criteria

The architecture is ready for implementation when:

1. Every P0 page has a confirmed route and purpose.
2. Every priority service is accessible within one interaction from Services.
3. Book a Call is accessible from every major page.
4. Mobile and desktop navigation expose equivalent core destinations.
5. No confidential product appears in the sitemap.
6. Compliance flows preserve the Vanteko & Associates boundary.
7. Intelligence commissioning does not expose paid content.
8. Service pages have defined related links.
9. Articles can connect to commercial pages without becoming thin sales content.
10. Campaign landing pages have canonical and indexing rules.
11. Error and recovery paths are defined.
12. Breadcrumb rules are defined.
13. Orphan-page prevention rules are documented.
14. All primary flows can be completed on mobile.
15. Analytics transitions are defined without collecting sensitive content.
16. The architecture can support additional approved services without restructuring the whole platform.
17. Stakeholder approval is recorded.

## 35. Decisions required before UI design is finalised

The following decisions remain open:

- Whether the Services control uses a mega menu or a simpler grouped dropdown
- Final booking provider
- Whether booking is embedded or hosted externally
- Whether general enquiries and Book a Call remain separate
- Whether site search is included at launch
- Whether report previews require email submission
- Whether WhatsApp appears globally or only contextually
- Whether industry pages are needed at launch
- Final footer business identity information
- Final service grouping labels
- Approved case studies for launch
- Approved report samples
- Final public status of LegalFlashcards9ja

## 36. Immediate next steps

1. Review and approve this architecture.
2. Create the Brand and Design System document.
3. Create the SEO and Content Architecture document.
4. Resolve the open navigation and booking decisions.
5. Produce page-level wireframe requirements.
6. Create the Stitch master design prompt.
7. Create individual Stitch prompts beginning with the homepage.
8. Validate the designed flows on mobile, tablet and desktop before engineering.

## 37. Approval

**Product lead:** David Oluwadamilola Vanteko  
**Organisation:** Tieko Media Limited  
**Approval status:** Pending review
## Approved future architecture: Tieko Store

The future Store will use `/store` as its index route and `/store/[slug]` for individual products, reports, recommendations, comparisons, partner offers, educational products and campaign destinations. No Store routes are part of Frontend Checkpoint 1.

The architecture must provide reusable page formats for:

1. Digital product
2. Affiliate recommendation
3. Product comparison
4. Paid intelligence report
5. Campaign landing page

Every format must provide a clear route back to the Store index, identify the offer owner or partner, disclose affiliate relationships where applicable and avoid dead purchase actions. Products or offers must remain unpublished until their destination, fulfilment path, claims and disclosures have been verified.
