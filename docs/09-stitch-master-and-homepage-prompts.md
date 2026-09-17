# Tieko Media Platform: Stitch Master and Homepage Prompts

**Document ID:** TMP-09  
**Version:** 0.1  
**Status:** Ready for first Stitch generation  
**Date:** 17 September 2026  
**Owner:** Tieko Media Limited  
**Product lead:** David Oluwadamilola Vanteko  
**Parent documents:** TMP-00 to TMP-08  
**Repository:** tiekomedia-alt/tieko-media-platform

## 1. Purpose

This document contains:

1. The reusable Stitch master design prompt
2. The first homepage-generation prompt
3. Responsive requirements
4. Anti-slop constraints
5. Review criteria
6. Follow-up iteration prompts

The master prompt should accompany every future page prompt so that the complete website remains coherent.

Stitch must design around the approved content. It must not rewrite the business strategy, add unverified claims or invent proof.

## 2. How to use the prompts

### First Stitch message

Paste the Master Design Prompt in section 3.

### Second Stitch message

Paste the Homepage Prompt in section 4.

### Reference images

Attach the approved Tieko carousel designs that demonstrate:

- The curling red Àmì form
- Textured red surfaces
- Warm ivory or white foundations
- Black editorial typography
- African editorial composition
- Dynamic cropping and layering

Tell Stitch that these images are visual-language references, not layouts to copy literally.

### Requested outputs

Request:

- Desktop homepage at 1440 pixels wide
- Tablet homepage at 834 pixels wide
- Mobile homepage at 390 pixels wide
- Component and interaction notes
- Sticky-navigation states
- Accessible menu state
- Hover and focus states
- Reduced-motion behaviour

## 3. Stitch Master Design Prompt

Copy everything between MASTER PROMPT START and MASTER PROMPT END.

### MASTER PROMPT START

Design a distinctive, production-ready responsive website system for Tieko Media Limited.

Tieko Media is an African digital intelligence and infrastructure company based in Lagos, Nigeria. It is more than a conventional media agency. It helps businesses and institutions establish credible foundations, build useful digital and information systems, reach relevant audiences and make better-informed decisions.

The website must feel African, intelligent, editorial, assured and contemporary. It should communicate depth without looking like a consulting template or an artificial-intelligence startup.

BRAND POSITIONING

Primary category:
African digital intelligence and infrastructure

Core proposition:
We research. We build. We amplify. We optimise.

Brand promise:
Beyond attention. We build the infrastructure behind visible, credible and enduring businesses.

Brand idea:
Built in Lagos. Useful anywhere.

PRIMARY AUDIENCES

- Nigerian and African founders
- Growing companies
- Established businesses
- Institutions and non-profits
- Marketing and communications leaders
- International organisations entering Nigerian or African markets
- Executives, investors and advisers seeking African market intelligence
- Professional firms requiring digital, compliance or records-management support

VISUAL DIRECTION

Use a warm ivory or soft off-white foundation, deep black or charcoal typography, Tieko red as the principal expressive colour and restrained gold only where it adds meaning.

The design must feel editorial rather than card-driven.

Use:

- Strong asymmetric editorial grids
- Generous but deliberate spacing
- Bold condensed display typography
- A refined editorial serif for selected statements
- A highly readable sans-serif for body copy and interface text
- Fine technical lines
- Registration marks or restrained indexing details
- Numbered sections where useful
- Authentic African imagery
- Tactile paper, textile or print texture used sparingly
- Sharp rectangular or lightly softened content areas
- Clear hierarchy
- Strong image cropping
- Meaningful negative space
- A visible but controlled red visual rhythm

THE TIEKO ÀMÌ RIBBON

The primary brand signature is a red sculptural ribbon inspired by Yoruba àmì marks, African textile movement and the dynamic red forms used in Tieko's social-media designs.

The ribbon should:

- Curl, fold and overlap
- Enter compositions from different edges
- Guide the eye towards important content
- Frame or partially reveal selected imagery
- Connect major sections visually
- Sometimes appear as a flat graphic mark
- Feel tactile and intentional
- Change composition across sections
- Remain recognisably part of one system

The ribbon must not:

- Obstruct text
- Become a random three-dimensional blob
- Appear in every section
- Reduce contrast
- Overwhelm mobile screens
- Create horizontal overflow
- Require heavy animation
- Look like a generic gradient wave

Use static composition by default. If motion is suggested, keep it slow, subtle and optional. Respect reduced-motion preferences.

COLOUR DIRECTION

Primary:
- Tieko red, based on the established brand red
- Deep black or charcoal
- Warm ivory or soft off-white

Secondary:
- Restrained warm grey
- Restrained gold for small editorial details only

Do not use:
- Purple
- Rainbow gradients
- Neon colours
- Blue technology gradients
- Aurora effects
- Multicoloured glow

TYPOGRAPHY

Create a serious editorial hierarchy.

Use:

- Bold condensed sans-serif for major display headings
- Editorial serif for selected quotations or short strategic statements
- Neutral, highly legible sans-serif for paragraphs, labels, forms and navigation
- Strong size contrast
- Controlled line lengths
- Sentence case

Avoid:

- Rounded startup fonts
- Thin low-contrast text
- Gradient text
- Excessive all-caps copy
- Tiny captions
- Decorative type that reduces readability

NAVIGATION

Use a permanent sticky header on every public page.

Desktop navigation:
- Services
- Products
- Intelligence
- Work
- Insights
- About
- Book a Call

The Book a Call action should be distinct but not oversized.

The Services control must accommodate eight services through a grouped dropdown or editorial mega menu:

Build visibility:
- Media Buying
- Digital Presence Optimisation
- Billboard Advertising

Build authority:
- Content Creation
- Press Release Services

Build foundations:
- Compliance
- Data and Records Management

Build intelligence:
- Intelligence Reports

The sticky header may become slightly more compact after scrolling, but it must not jump, flicker or hide.

The mobile header must include:

- Tieko wordmark or logo
- Book a Call or a clearly prioritised booking route
- Labelled menu control
- Accessible full-screen or large-panel navigation
- Visible close control
- Logical focus order

PRIMARY CTA

The universal primary CTA is:
Book a Call

Use contextual secondary actions only when relevant.

Do not repeat the same CTA button excessively. A CTA in the header, one or two relevant page sections and the footer is sufficient.

RESPONSIVE SYSTEM

Create layouts for:

- 1440-pixel desktop
- 834-pixel tablet
- 390-pixel mobile

The system must also work at 320 pixels and 200 per cent browser zoom.

Requirements:

- No horizontal overflow
- Minimum comfortable touch targets
- Readable body copy
- Logical content order
- Mobile-specific Àmì crops
- Equivalent navigation destinations
- No desktop layout simply reduced in size
- Tables must adapt
- Images must preserve focal points
- Sticky navigation must remain compact

ACCESSIBILITY

Target WCAG 2.2 Level AA.

Include:

- Strong colour contrast
- Visible keyboard focus
- Clear link and button states
- Semantic hierarchy
- Form labels
- Error states
- Reduced-motion alternative
- No information communicated by colour alone
- No text embedded only in images
- Legible type at all widths
- Appropriate touch targets

PERFORMANCE

Design for a fast Next.js website.

Avoid:

- Heavy WebGL
- Autoplay hero video
- Multiple background videos
- Large animation libraries
- Unnecessary parallax
- Large image carousels
- Continuous decorative motion
- Complex cursor-following effects

Use optimised responsive images and lightweight SVG for the Àmì Ribbon.

STRICT ANTI-SLOP RULES

Do not use:

- Aurora backgrounds
- Purple gradients
- Gradient text
- Random three-dimensional shapes
- Generic three-dimensional product blobs
- Neon or glowing effects
- Animated gradient borders
- Mouse-follow glow
- Floating statistic pills
- Fake dashboards
- Fake browser frames tilted in three dimensions
- Generic stock avatars
- Unverified company logo marquees
- Infinite logo carousels
- Fake testimonials
- Unsourced statistics
- Red-cross-versus-green-check comparison tables
- Repeated rounded cards
- Pills for ordinary navigation and buttons
- An icon inside a rounded gradient square for every item
- Fade-up animation on every section
- Vague buzzword-heavy headlines
- Excessive symmetry
- A centred 600-pixel text column for the entire page
- Repeated calls to action in every section
- Newsletter forms without a defined purpose
- Footer links that do not lead anywhere
- AI badges
- Emojis as the visual system
- Generic technology circuit imagery

PROOF AND CONTENT INTEGRITY

Never invent:

- Client names
- Client logos
- Testimonials
- Awards
- Campaign numbers
- Review counts
- Report titles
- Team members
- Office locations
- Partner names
- Certifications

Use clearly labelled placeholders where approved evidence is unavailable.

Compliance must state:
Regulated legal services are delivered by David Vanteko through Vanteko & Associates where required.

Data and Records Management must not promise absolute prevention of data leakage.

Intelligence Reports must be identified as paid unless expressly marked free.

DESIGN CHARACTER

The final result should feel like:

- An African editorial intelligence company
- A serious business partner
- A product builder
- A research organisation
- A modern media and distribution company
- A company with legal and information-governance awareness

It must not feel like:

- A generic digital agency
- A generic artificial-intelligence startup
- A template marketplace website
- A cryptocurrency company
- A corporate law firm
- A noisy advertising agency
- A portfolio made only to win design awards

Produce a coherent component system, not a collection of unrelated sections.

### MASTER PROMPT END

## 4. Stitch Homepage Prompt

Copy everything between HOMEPAGE PROMPT START and HOMEPAGE PROMPT END after supplying the master prompt.

### HOMEPAGE PROMPT START

Using the Tieko Media master design direction already provided, design the responsive homepage.

Do not change the approved business positioning. Do not invent proof. Do not add sections simply to make the page longer.

PAGE OBJECTIVE

The homepage must:

- Establish Tieko as an African digital intelligence and infrastructure company
- Explain that Tieko is more than a media agency
- Present eight services without overwhelming the visitor
- Promote the Digital Business Health Check
- Use TeamShuffle as product-building proof
- Present intelligence reports as a paid capability
- Generate qualified Book a Call actions
- Work as the primary brand, search and referral destination

PAGE WIDTHS

Produce:

- Desktop at 1440 pixels
- Tablet at 834 pixels
- Mobile at 390 pixels

Show the permanent sticky header in the initial and scrolled states.

SECTION 1: STICKY HEADER

Logo:
Tieko Media

Navigation:
- Services
- Products
- Intelligence
- Work
- Insights
- About

Primary action:
Book a Call

Keep the header editorial, compact and stable.

Do not use a large pill-shaped navigation container.

SECTION 2: HERO

Eyebrow:
African digital intelligence and infrastructure

H1:
Build a business people can find, trust and choose.

Supporting copy:
Tieko Media helps ambitious businesses and institutions build the foundations, visibility, content, intelligence and information systems they need to operate clearly and grow deliberately.

Brand rhythm:
We research. We build. We amplify. We optimise.

Primary CTA:
Book a Call

Secondary CTA:
Explore Our Services

Trust line:
Built in Lagos. Useful anywhere.

Optional rating placeholder:
Rated 5 stars on Google

Do not display a review count. Use the rating line only as a clearly labelled placeholder pending verification.

Hero visual:

Create an authentic African editorial image treatment showing purposeful business, creative or institutional activity. Do not use a generic smiling office team.

Use one strong red Àmì Ribbon curl to connect the headline and image. The ribbon may enter from the edge, fold around part of the image and direct attention towards the CTA.

Keep the first screen clear. Do not add floating cards, dashboards, avatars, logos or statistics.

SECTION 3: PROBLEM

Eyebrow:
Visibility needs a foundation

Heading:
Attention is not enough. Your business needs infrastructure.

Copy:
A campaign can bring people to your business. What they find next determines whether they trust it.

An incomplete business identity, a confusing website, inconsistent content, weak records, poor measurement or decisions made without evidence can turn attention into wasted effort.

Tieko connects the systems behind the public result. We help you build correctly, communicate clearly, reach deliberately and improve with evidence.

Design this as a strong editorial transition, not a grid of rounded cards.

SECTION 4: FOUR CAPABILITIES

Eyebrow:
One connected system

Heading:
Four capabilities. One stronger business.

Introduction:
Growth problems rarely exist in isolation. Tieko brings together the foundations, systems, distribution and intelligence required to solve them properly.

Present four numbered capabilities:

01 Establish
Build credible business and information foundations.
Related: Compliance, Data and Records Management

02 Build
Create useful digital systems and owned assets.
Related: Digital Presence Optimisation, Content Creation, Products

03 Amplify
Reach the right people with purpose.
Related: Media Buying, Billboard Advertising, Content Creation, Press Release Services

04 Protect and inform
Improve decisions, reputation and operational clarity.
Related: Intelligence Reports, Digital Presence Optimisation, Data and Records Management

Use an editorial list, matrix or large numbered layout. Avoid four identical rounded icon cards.

SECTION 5: EIGHT SERVICES

Eyebrow:
What we do

Heading:
Services built around how businesses actually grow.

Introduction:
You may need one focused service or a connected programme of work. We begin with the problem, identify what is missing and recommend a scope that makes commercial sense.

Present all eight services:

Media Buying
Plan and place advertising around a defined audience, campaign objective and measurement framework.
Link: Explore Media Buying

Compliance
Establish and maintain important business, regulatory and intellectual-property foundations. Regulated legal services are delivered by David Vanteko through Vanteko & Associates where required.
Link: Explore Compliance

Digital Presence Optimisation
Improve how your business is found, understood, trusted and converted across websites, search, directories, content and AI discovery systems.
Link: Improve Your Digital Presence

Content Creation
Build a repeatable content system that explains your value, develops authority and supports the customer journey.
Link: Explore Content Creation

Intelligence Reports
Turn fragmented market, competitor, search, audience and regulatory information into decision-ready intelligence.
Link: Explore Intelligence Reports

Billboard Advertising
Plan outdoor campaigns around location, audience, format, creative visibility and verified placement.
Link: Explore Billboard Advertising

Press Release Services
Identify a credible news angle, prepare a clear release and coordinate appropriate media outreach or distribution.
Link: Explore Press Release Services

Data and Records Management
Digitise, organise, classify, retain, retrieve and govern institutional records while discovering useful intelligence within authorised data.
Link: Explore Data and Records Management

Use an editorial service index or alternating grid with strong typography. Do not use eight identical floating cards with gradient icons.

After the services, include:

Heading:
Not sure which service fits the problem?

Copy:
Tell us what is happening in your business. We will help you identify the immediate need, the dependencies around it and the most sensible next step.

CTA:
Book a Call

SECTION 6: DIGITAL BUSINESS HEALTH CHECK

Eyebrow:
Free business assessment

Heading:
How strong is your digital business foundation?

Copy:
A business can look active online and still have serious gaps underneath.

The Tieko Digital Business Health Check reviews eight areas that affect visibility, trust and growth. Complete the short assessment and receive an immediate indicative score, dimension results and three practical priorities.

Your basic result is not hidden behind an email form.

Show the eight dimensions in a readable assessment framework:

- Business Identity and Compliance
- Website and Technical Foundation
- Search Discoverability
- Content and Brand Consistency
- Customer Acquisition and Conversion
- Data, Analytics and Measurement
- Reputation and Trust
- Privacy and Security Readiness

Primary CTA:
Start the Free Health Check

Secondary CTA:
Learn About the Professional Audit

Disclaimer:
The free result is an indicative self-assessment. It is not legal advice, a security certification or a professional audit.

The section may use a restrained score-interface preview, but it must not show fake business results or a fabricated live score.

SECTION 7: WORK AND PRODUCTS

Eyebrow:
Selected work

Heading:
Strategy becomes valuable when it is built.

Copy:
We develop campaigns, digital infrastructure, content systems, research and original products. Our work is judged by whether it solves the intended problem, not by how many fashionable features it contains.

Use clearly labelled project placeholders where approved case studies are missing. Do not invent client names or outcomes.

Include a dedicated TeamShuffle feature.

TeamShuffle eyebrow:
Built by Tieko

TeamShuffle heading:
We do not only advise. We build.

TeamShuffle copy:
TeamShuffle is a live collection of simple tools for creating fair groups and teams. It includes a random team generator, team balancer, wheel of names and virtual dice tools.

Building and growing TeamShuffle gives Tieko direct experience across product strategy, interface design, engineering coordination, search optimisation, content architecture, analytics and continuous improvement.

Primary CTA:
Explore TeamShuffle

Secondary CTA:
View Our Products

Use a real or labelled product screenshot placeholder. Do not create a fake analytics dashboard.

SECTION 8: INTELLIGENCE

Eyebrow:
Tieko Intelligence

Heading:
Make the decision with more than instinct.

Copy:
Markets move, competitors reposition, regulations change and customer demand leaves signals across multiple sources.

Tieko gathers, evaluates and organises those signals into research that helps organisations understand a market, examine an opportunity, assess a competitor or decide what to do next.

Present four intelligence types:

- Market intelligence
- Competitor intelligence
- Search and demand intelligence
- Regulatory intelligence

Primary CTA:
Explore Intelligence

Secondary CTA:
Commission a Report

Disclosure:
Intelligence reports are paid unless a report is expressly marked as free.

Design this section with an editorial research character. Use documents, mapping, annotations or data structures carefully. Do not use a fake futuristic dashboard.

SECTION 9: WHY TIEKO

Eyebrow:
How we work

Heading:
Build the right thing before trying to scale it.

Present five principles:

- Strategy before noise
- Systems before scale
- Evidence before assumption
- Context before imitation
- Clarity before complexity

Follow with:

Heading:
More than a media agency.

Copy:
Media is one part of the work.

Tieko combines legal understanding, digital strategy, product thinking, research, content, data and distribution. This allows us to see the connections that isolated service providers often miss.

We can examine the foundation behind a campaign, the search problem behind a website, the records problem behind an institution or the intelligence gap behind a commercial decision.

The result is not more activity for its own sake. It is a clearer, stronger system for growth.

This section should feel confident and restrained. Avoid founder-worship design or exaggerated biography.

SECTION 10: TRUST AND INSIGHTS

Trust heading:
Trusted for thoughtful, practical work.

Rating placeholder:
Tieko Media is rated 5 stars on Google.

Link:
Read Our Google Reviews

Clearly label the review count as pending verification and do not invent testimonial cards.

Insights eyebrow:
Insights

Insights heading:
Useful thinking for people building in Africa.

Insights copy:
Practical analysis on digital infrastructure, media, search, content, compliance, information governance, African markets and product building.

Use four article placeholders:

- What Is a Digital Presence Audit?
- Media Planning Versus Media Buying in Nigeria
- How to Digitise Paper Records Without Creating Digital Disorder
- What Is a Business Intelligence Report?

CTA:
Read Our Insights

SECTION 11: ABOUT PREVIEW

Eyebrow:
About Tieko

Heading:
Built in Lagos. Designed for serious growth.

Copy:
Tieko Media Limited is an African digital intelligence and infrastructure company led by David Oluwadamilola Vanteko.

We work with founders, companies, institutions and organisations that need more than temporary attention. We help them establish credible foundations, build useful systems, reach relevant audiences and make better-informed decisions.

CTA:
About Tieko Media

Use an authentic founder, team or Lagos-context image placeholder. Do not invent a large office or staff group.

SECTION 12: FINAL CONVERSION

Eyebrow:
Start with the real problem

Heading:
What does your business need to build next?

Copy:
Tell us what you are trying to achieve, what is getting in the way and what you have already attempted. We will use the first conversation to understand the problem and identify a practical next step.

CTA:
Book a Call

Supporting note:
Booking a call does not create a solicitor-client relationship or guarantee that Tieko will accept an engagement.

Use a strong red field or a black editorial field with a restrained red Àmì element. Do not use a glowing gradient CTA card.

SECTION 13: FOOTER

Positioning:
Tieko Media is an African digital intelligence and infrastructure company. We research, build, amplify and optimise the systems businesses need to operate, compete and grow.

Service links:
- Media Buying
- Compliance
- Digital Presence Optimisation
- Content Creation
- Intelligence Reports
- Billboard Advertising
- Press Release Services
- Data and Records Management

Explore:
- Products
- Intelligence
- Work
- Insights
- About
- Team
- Contact

Tools and actions:
- Digital Business Health Check
- Book a Call
- Commission a Report
- TeamShuffle

Legal:
- Privacy
- Cookies
- Terms
- Legal Disclaimer
- Accessibility

Do not use placeholder hash links.

MOBILE REQUIREMENTS

At 390 pixels:

- Keep the hero headline readable and force no awkward one-word line.
- Stack hero CTAs.
- Simplify the Àmì Ribbon.
- Present capabilities as a numbered vertical sequence.
- Present all eight services clearly without a horizontal carousel.
- Keep Health Check dimensions readable.
- Place TeamShuffle after selected work.
- Avoid very long centred paragraphs.
- Keep body copy left-aligned.
- Ensure footer groups are easy to scan.
- Keep sticky navigation compact.
- Do not use a permanent bottom CTA that blocks content.

INTERACTION REQUIREMENTS

Show:

- Link hover
- Button hover
- Keyboard focus
- Services-menu open state
- Mobile-menu open state
- Accordion state if used
- Reduced-motion alternative
- Sticky-header scrolled state

Do not animate every section.

OUTPUT NOTES

After the layouts, provide:

1. Component inventory
2. Typography hierarchy
3. Colour roles
4. Spacing system
5. Àmì Ribbon asset recommendations
6. Image list
7. Interaction notes
8. Accessibility notes
9. Mobile differences
10. Any copy that does not fit comfortably

Do not rewrite or shorten approved copy without clearly flagging the proposed change.

### HOMEPAGE PROMPT END

## 5. Review checklist for the first Stitch output

### Brand recognition

- Does the page feel recognisably Tieko?
- Is the red Àmì Ribbon distinctive?
- Does the design feel African without cliché?
- Is red used with restraint and purpose?
- Does the page avoid generic technology styling?

### First-screen clarity

- Is the category visible?
- Is the H1 immediately readable?
- Is Book a Call obvious?
- Is Explore Our Services available?
- Is the hero free from clutter?

### Content hierarchy

- Can a visitor understand the four capabilities?
- Are all eight services discoverable?
- Is the Health Check prominent?
- Does TeamShuffle feel like evidence?
- Is Intelligence clearly paid and serious?
- Is the page long but still purposeful?

### Anti-slop review

Reject or revise the design if it includes more than a small number of the prohibited patterns in the master prompt.

### Responsive review

- Does the mobile design feel designed, not compressed?
- Is navigation usable?
- Does text wrap naturally?
- Are services readable without swiping?
- Is the ribbon safely cropped?
- Are touch targets large enough?

### Conversion review

- Is Book a Call present without repetition?
- Do contextual CTAs match their sections?
- Does the visitor have a useful path before the final CTA?
- Are there competing calls to action?

## 6. First-round iteration prompts

Use only the prompts that match the actual design problem.

### If the page looks generic

The current layout still feels like a generic agency or artificial-intelligence startup. Remove decorative cards, generic icons, gradients and startup patterns. Strengthen the editorial grid, condensed typography, authentic African image treatment, black and ivory contrast and the distinctive red Àmì Ribbon system. Make the composition recognisable without relying on the logo.

### If red is overused

Reduce the amount of red. Use Tieko red as a visual guide, focal point and section rhythm rather than as the background of every component. Restore more warm ivory and black negative space. Keep the Àmì Ribbon expressive but selective.

### If the ribbon looks like a blob

The red element must not resemble a generic three-dimensional blob or gradient wave. Redesign it as a purposeful Àmì Ribbon with a textile-like surface, controlled curl, clear direction and editorial cropping. It should guide attention and relate to the supplied Tieko carousel references.

### If the page uses too many cards

Replace repeated rounded cards with editorial lists, divided grids, numbered rows, image-and-text compositions and typographic hierarchy. Preserve grouping without placing every item inside a floating container.

### If the page is too long

Do not delete important content immediately. First combine the problem and capability sections, integrate TeamShuffle into selected work, and combine trust with insights. Preserve all eight services, the Health Check and the final CTA.

### If the page feels too corporate

Introduce more expressive editorial cropping, authentic Lagos and African context, tactile texture, red Àmì movement and stronger typography. Do not solve this with bright gradients, emojis or casual startup language.

### If the page feels too busy

Reduce simultaneous visual devices. Keep one primary idea per section. Remove unnecessary icons, motion, shadows, labels and competing colours. Increase meaningful negative space while preserving strong hierarchy.

### If mobile is weak

Redesign the mobile page independently. Use a clear vertical reading order, left-aligned body copy, simplified ribbon crops, full-width service rows, comfortable touch targets and a compact sticky header. Do not preserve desktop side-by-side layouts when they reduce readability.

## 7. Approval stages

The Stitch homepage should pass:

1. Strategic review
2. Brand review
3. Content review
4. Responsive review
5. Accessibility review
6. Performance feasibility review
7. Engineering feasibility review

No other page should establish a different visual language before the homepage direction is approved.

## 8. Approval

**Product lead:** David Oluwadamilola Vanteko  
**Organisation:** Tieko Media Limited  
**Approval status:** Ready for first Stitch generation
