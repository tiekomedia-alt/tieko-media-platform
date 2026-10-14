import Image from "next/image";
import Link from "next/link";
import Header from "@/components/navigation/Header";

const bookingHref = "/book-a-call?service=data-centre-sourcing-lagos";

const audiences = [
  ["International companies entering Nigeria", "Local capacity, a local presence and a clearer view of operators, risk and regulatory expectations."],
  ["Banks, fintechs and payment companies", "Options that can be assessed against uptime, security, audit and data-residency expectations."],
  ["Telcos, ISPs and network operators", "Carrier-neutral space, interconnection and route diversity questions handled in one framework."],
  ["Digital platforms and SaaS businesses", "Lower latency for Nigerian users or a resilient second site without an unfocused market search."],
  ["Enterprise procurement teams", "A fair, documented vendor comparison rather than a collection of incomparable brochures."],
  ["Regulated and public-sector suppliers", "A structured way to investigate sector rules, local-hosting questions and evidence requirements."],
  ["Cloud and AI workloads", "Early clarity on power density, cooling, connectivity and expansion limits before commitment."],
];

const process = [
  ["01", "Discovery call", "We understand workloads, risk, timing and budget range.", "Scope confirmation and an information request."],
  ["02", "Define", "We clarify workload, growth, access, compliance and service expectations.", "Requirements brief."],
  ["03", "Frame", "We prepare consistent vendor questions and scoring criteria.", "Vendor-question framework and scorecard."],
  ["04", "Compare", "Suitable options are organised on the same decision framework.", "Shortlist comparison."],
  ["05", "Coordinate", "We support introductions and the route to due diligence.", "Meeting pack and due-diligence checklist."],
  ["06", "Decide", "We summarise findings, trade-offs and the next action.", "Decision and next-step summary."],
];

const requirementGroups: Array<[string, string[]]> = [
  ["What are you putting in the facility?", ["Production, disaster recovery, backup, cloud edge or high-performance workloads.", "Primary site, secondary site or migration from another facility.", "Colocation, private cage or suite, managed hosting, cloud interconnect or a mix."]],
  ["How much capacity is needed?", ["Racks or total IT load today and at expected peak.", "Average and peak power per rack, floor space and reserved expansion capacity.", "A realistic three-to-five-year growth curve."]],
  ["What does failure cost?", ["Maximum tolerable downtime and recovery objectives.", "Business-critical systems and customer commitments.", "The resilience level the business can justify."]],
  ["Who needs access?", ["24/7 staff or contractor access, visitor rules and equipment deliveries.", "Remote-hands scope, skill level and response expectations.", "Shipping, receiving, storage and staging requirements."]],
  ["What rules apply to the data?", ["Sector regulators, customer contracts and audit expectations.", "Data-residency or localisation considerations.", "Evidence required from the facility, such as ISO 27001 or PCI DSS where relevant."]],
  ["What commercial model works?", ["One-time versus recurring cost, contract term and exit flexibility.", "Billing currency, payment route and decision deadline.", "The people who approve the spend."]],
];

const vendorDueDiligence = [
  ["Power", "Utility arrangement, independent sources, generator and UPS redundancy, fuel logistics, power density, billing and documented outage history."],
  ["Cooling and environment", "Cooling design, redundancy, temperature and humidity commitments, dependencies and support for high-density or liquid cooling."],
  ["Connectivity", "Carrier neutrality, on-site providers, diverse fibre entry, exchange points, cloud on-ramps, cross-connect process and latency."],
  ["Resilience and design", "The exact certification claimed, the difference between designed-to and certified standards, maintenance approach and availability history."],
  ["Physical security and operations", "Access control, CCTV, fire protection, flood risk, staffing, remote hands, escalation and incident reporting."],
  ["Compliance and commercial terms", "Evidence, contracting entity, insurance, pricing components, billing currency, escalation, service credits and exit assistance."],
];

const costRows = [
  ["Space", "Rack, half rack, cage or private suite; minimum commitment."],
  ["Power", "Committed kW, metered usage, energy pass-through and fuel adjustments."],
  ["Connectivity", "Cross-connects, IP transit, IX ports, cloud on-ramps and carrier fees."],
  ["Set-up and support", "Onboarding, remote hands, call-outs, access and storage."],
  ["Contract terms", "Indexation, escalation, term, early exit and currency clauses."],
];

const locations = [
  ["Lekki corridor", "Purpose-built facilities and a growing business district.", "Access routes, flooding exposure and mainland travel time."],
  ["Victoria Island and Ikoyi", "Close to banks, corporates and many carrier points of presence.", "Dense-area power, space and congestion constraints."],
  ["Ikeja and the mainland", "Airport, industrial and commercial proximity.", "Site-specific power, security and access arrangements."],
  ["Abuja and other cities", "Government proximity or regional resilience.", "Option depth, connectivity and operator maturity."],
];

const models = [
  ["Retail colocation", "Growing businesses and enterprises.", "Per-unit cost can rise with scale."],
  ["Wholesale or private suite", "Larger, stable or high-density needs.", "Greater commitment and longer contracts."],
  ["Managed hosting or private cloud", "Teams seeking less hardware responsibility.", "Less control and potential vendor dependency."],
  ["Cloud and hybrid", "Local latency or residency alongside cloud flexibility.", "More network-design and cost complexity."],
  ["Disaster recovery site", "An existing primary site elsewhere.", "Needs clear failover testing and network planning."],
  ["Build or lease", "Specialist or very large requirements.", "Capital, power, time and permit risk."],
];

const risks = ["Unclear requirements", "Unverified Tier III claims", "Power and fuel assumptions", "Single-point connectivity", "Contract lock-in", "Currency surprises", "Import delays", "Late compliance gaps", "Over-sizing or under-sizing"];

const deliverables = ["Requirements brief", "Vendor-question framework", "Shortlist and comparison", "Introductions and coordination", "Due-diligence checklist", "Decision and next-step summary"];

const faqs = [
  ["What is the difference between colocation and cloud hosting in Nigeria?", "Colocation means placing your own equipment in a facility while the operator provides space, power, cooling, security and connectivity. Cloud hosting rents computing resources owned and managed by the provider. Many organisations use both; the balance depends on workload, compliance and budget."],
  ["How much does data centre colocation in Lagos cost?", "There is no single price. Space, committed power, cooling, connectivity, contract term, currency and support charges all affect cost. Quotes become useful only after those components are normalised."],
  ["Do I have to host my data in Nigeria?", "It depends on your sector, data type and contracts. Data-protection and sector-specific rules may apply. Confirm the exact position with qualified Nigerian counsel and the relevant regulator before signing."],
  ["Is Lagos the only option?", "Lagos is the principal market and a key cable-landing region, so most buyers begin there. Abuja or another city can make sense for government proximity or a secondary site."],
  ["What does Tier III actually mean?", "Tier III is an Uptime Institute classification associated with concurrent maintainability. Ask whether a facility is formally certified or simply designed to that standard, then request the certificate, its scope and dates."],
  ["How reliable is power for Nigerian data centres?", "The important questions are design redundancy, UPS and generator arrangement, fuel logistics, backup runtime and documented outage history - not a marketing claim alone."],
  ["Can an international company without a Nigerian entity use a Lagos data centre?", "Often yes, but the contracting entity, tax treatment, payment route and equipment-import process should be planned with the operator, counsel and a licensed clearing agent."],
  ["How long does sourcing and move-in take?", "Shortlisting is usually measured in weeks; contracting, shipping, customs clearance and installation can add time. A realistic timeline depends on requirements, vendor response and equipment lead times."],
  ["Do you charge data-centre operators?", "The commercial arrangement is agreed during scoping and explained transparently. Tieko Media does not guarantee operator pricing, availability or contract terms."],
  ["Do you replace my IT team, lawyers or auditors?", "No. We organise requirements and vendor information so technical, legal and procurement teams can make a more informed decision. Specialists may be introduced where needed."],
  ["Can you help with a small footprint or pilot?", "Yes. A starter deployment can be scoped with a realistic route to later growth."],
  ["Can you help with disaster recovery and migration?", "Yes. Recovery, failover and migration-window questions are included in the requirements brief."],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function ServiceCta() {
  return (
    <div className="dc-cta">
      <Link href={bookingHref}>Discuss your requirement <Arrow /></Link>
      <small>Final recommendations depend on technical requirements and independent due diligence.</small>
    </div>
  );
}

export default function DataCentreSourcingLanding() {
  return (
    <div className="min-h-screen bg-warm-ivory text-ink-black">
      <Header />
      <main id="main-content" className="dc-page">
        <section className="dc-hero" aria-labelledby="dc-title">
          <div className="dc-shell dc-hero-grid">
            <div>
              <nav className="dc-breadcrumb" aria-label="Breadcrumb"><Link href="/services">Services</Link><span>/</span><span>Data centre sourcing</span></nav>
              <p className="dc-kicker">Infrastructure advisory and sourcing</p>
              <h1 id="dc-title">Find the right data centre in Lagos, without guessing.</h1>
              <p className="dc-lead">Move from a vague infrastructure request to a shortlist built around capacity, power, connectivity, compliance, location and budget. Independent, vendor-neutral and structured for decision-makers anywhere in the world.</p>
              <div className="dc-hero-actions"><ServiceCta /><Link className="dc-text-link" href="#dc-checklist">Download the requirements checklist <Arrow /></Link></div>
            </div>
            <figure className="dc-hero-image">
              <Image
                src="/images/services/data-centre-sourcing-lagos.jpg"
                alt="Server racks wrapped by Tieko Media's signature red ribbon"
                width={1672}
                height={941}
                sizes="(max-width: 768px) 100vw, 44vw"
                priority
              />
            </figure>
          </div>
        </section>

        <nav className="dc-section-nav" aria-label="On this page"><div className="dc-shell"><a href="#dc-for">Who it is for</a><a href="#dc-process">How it works</a><a href="#dc-requirements">Requirements</a><a href="#dc-vendors">Vendor questions</a><a href="#dc-compliance">Compliance</a><a href="#dc-budget">Budget</a><a href="#dc-checklist">Checklist</a><a href="#dc-faq">FAQ</a></div></nav>

        <section id="dc-for" className="dc-section" aria-labelledby="dc-for-title"><div className="dc-shell"><div className="dc-heading"><p className="dc-kicker">Who this is for</p><h2 id="dc-for-title">Built for teams that need a clear answer, not a brochure.</h2></div><div className="dc-audience-grid">{audiences.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><ServiceCta /></div></section>

        <section className="dc-context" aria-labelledby="dc-context-title"><div className="dc-shell dc-context-grid"><div><p className="dc-kicker dc-kicker-light">What this is - and is not</p><h2 id="dc-context-title">Context before transaction.</h2></div><div><p>Choosing a data-centre arrangement is not simply a search for rack space. Capacity, connectivity, power resilience, physical security, compliance expectations, support and commercial terms can each change the total cost.</p><p>Tieko Media defines the requirement, organises vendor questions and coordinates information for a useful comparison. We work alongside technical, legal and procurement specialists where the scope requires them.</p><div className="dc-do-grid"><div><strong>What we do</strong><ul><li>Write a requirements brief.</li><li>Build comparable vendor questions.</li><li>Shortlist against needs and budget range.</li><li>Coordinate due-diligence information.</li></ul></div><div><strong>What we do not do</strong><ul><li>Own or operate data centres.</li><li>Guarantee pricing or availability.</li><li>Replace engineers, counsel or auditors.</li></ul></div></div></div></div></section>

        <section id="dc-process" className="dc-section" aria-labelledby="dc-process-title"><div className="dc-shell"><div className="dc-heading"><p className="dc-kicker">How it works</p><h2 id="dc-process-title">A clear route from question to shortlist.</h2></div><ol className="dc-process-list">{process.map(([number, title, copy, output]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><small>{output}</small></li>)}</ol><p className="dc-note">Timelines depend on how complete your requirements are and how quickly vendors respond. Most engagements are scoped on the first call.</p></div></section>

        <section id="dc-requirements" className="dc-section dc-section-paper" aria-labelledby="dc-requirements-title"><div className="dc-shell"><div className="dc-heading"><p className="dc-kicker">Requirements</p><h2 id="dc-requirements-title">Start with your own requirements, not the vendor&apos;s brochure.</h2><p>Most poor data-centre decisions begin by skipping this stage. These are the questions we work through with you.</p></div><div className="dc-accordion-grid">{requirementGroups.map(([title, points]) => <details key={title}><summary>{title}</summary><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></details>)}</div></div></section>

        <section id="dc-vendors" className="dc-section dc-section-dark" aria-labelledby="dc-vendors-title"><div className="dc-shell"><div className="dc-heading dc-heading-light"><p className="dc-kicker dc-kicker-light">Vendor due diligence</p><h2 id="dc-vendors-title">What to ask every facility before you shortlist.</h2><p>Vague or missing answers are information. We put the same questions to every operator so the answers can be compared side by side.</p></div><div className="dc-vendor-grid">{vendorDueDiligence.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><ServiceCta /></div></section>

        <section id="dc-compliance" className="dc-section" aria-labelledby="dc-compliance-title"><div className="dc-shell dc-compliance-grid"><div><p className="dc-kicker">Nigeria compliance considerations</p><h2 id="dc-compliance-title">Regulation affects where your data can live.</h2></div><div><p>Requirements vary by sector and change over time. The Nigeria Data Protection Act 2023 and the NDPC framework create data-protection obligations, including considerations for personal-data transfers. We identify the questions to take to qualified Nigerian counsel and the relevant regulator.</p><ul><li>Sector rules for banking, payments, insurance, telecoms, health or government work.</li><li>Data-residency, localisation, audit and certification expectations.</li><li>Contracting entity, tax, equipment import and customs planning.</li><li>Operator evidence such as ISO 27001, ISO 22301, PCI DSS, SOC reports or relevant Uptime certification.</li></ul><aside>General guidance only, not legal, regulatory or engineering advice. Confirm current obligations with qualified Nigerian counsel and your regulator before signing.</aside></div></div></section>

        <section id="dc-budget" className="dc-section dc-section-paper" aria-labelledby="dc-budget-title"><div className="dc-shell"><div className="dc-heading"><p className="dc-kicker">Budget and location</p><h2 id="dc-budget-title">Understand the total cost, not just the rack price.</h2><p>Quotes only become comparable when every cost component is normalised.</p></div><div className="dc-table">{costRows.map(([item, detail]) => <div key={item}><strong>{item}</strong><span>{detail}</span></div>)}</div><div className="dc-location-grid"><div><h3>Where in Lagos - and beyond</h3><p>Location is a risk decision, not just an address. We compare connectivity, power quality, flood and physical risk, access, security, latency and expansion room.</p></div><div>{locations.map(([area, why, check]) => <details key={area}><summary>{area}</summary><p><strong>Why buyers look:</strong> {why}</p><p><strong>Check:</strong> {check}</p></details>)}</div></div></div></section>

        <section id="dc-options" className="dc-section" aria-labelledby="dc-options-title"><div className="dc-shell"><div className="dc-heading"><p className="dc-kicker">Sourcing options</p><h2 id="dc-options-title">Choose the model before you choose the vendor.</h2></div><div className="dc-model-grid">{models.map(([title, bestFor, tradeoff]) => <article key={title}><h3>{title}</h3><p><strong>Best for:</strong> {bestFor}</p><p><strong>Trade-off:</strong> {tradeoff}</p></article>)}</div><ServiceCta /></div></section>

        <section className="dc-risks" aria-labelledby="dc-risks-title"><div className="dc-shell"><div><p className="dc-kicker dc-kicker-light">Risks we see early</p><h2 id="dc-risks-title">The details that are expensive to discover late.</h2></div><ul>{risks.map((risk) => <li key={risk}>{risk}</li>)}</ul></div></section>

        <section className="dc-section" aria-labelledby="dc-deliverables-title"><div className="dc-shell"><div className="dc-heading"><p className="dc-kicker">What you get</p><h2 id="dc-deliverables-title">A decision pack, not a pile of introductions.</h2></div><ol className="dc-deliverables">{deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></section>

        <section id="dc-checklist" className="dc-checklist" aria-labelledby="dc-checklist-title"><div className="dc-shell dc-checklist-grid"><div><p className="dc-kicker dc-kicker-light">Free preparation resource</p><h2 id="dc-checklist-title">Lagos Data Centre Requirements Checklist.</h2><p>A practical one-page starting point covering the questions your team should answer before speaking with a vendor.</p><a href="/downloads/lagos-data-centre-requirements-checklist.pdf" download>Download the checklist <Arrow /></a><small>It is a planning tool, not legal, regulatory or engineering advice.</small></div><ol><li>Workload and site purpose</li><li>Capacity, power and growth</li><li>Connectivity and access</li><li>Compliance and evidence</li><li>Budget, currency and timing</li></ol></div></section>

        <section id="dc-faq" className="dc-section dc-section-paper" aria-labelledby="dc-faq-title"><div className="dc-shell dc-faq-grid"><div><p className="dc-kicker">Frequently asked questions</p><h2 id="dc-faq-title">Answers before the first call.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

        <section className="dc-final" aria-labelledby="dc-final-title"><div className="dc-shell"><p className="dc-kicker dc-kicker-light">Your next move</p><h2 id="dc-final-title">Start with the right question.</h2><p>Tell us what you are trying to run, how fast it needs to grow, and what failure would cost you. We will help turn that into a requirement you can take to market with confidence.</p><ServiceCta /></div></section>
      </main>
    </div>
  );
}
