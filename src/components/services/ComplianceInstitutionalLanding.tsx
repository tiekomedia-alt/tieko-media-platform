import Image from "next/image";
import Link from "next/link";
import AmiRibbon from "@/components/brand/AmiRibbon";
import Header from "@/components/navigation/Header";

const bookingHref = "/book-a-call?service=compliance-institutional-support";

const serviceCategories = [
  {
    number: "01",
    title: "Company incorporation and corporate filings",
    summary:
      "Structured support for Nigerian founders, foreign participants and established organisations handling incorporation or post-incorporation filings.",
    tieko:
      "We organise the intake, prepare a tailored document checklist, coordinate information gathering, support portal administration and track the application or filing.",
    external:
      "The Corporate Affairs Commission controls registration, queries, statutory fees, records and approval. Independent legal advisers are involved where legal drafting, opinions or regulated representation are required.",
  },
  {
    number: "02",
    title: "Export registration and licensing application support",
    summary:
      "Preparation and coordination for businesses registering as exporters or organising documents for a relevant export-facing application.",
    tieko:
      "We check the stated business objective, map the required records, organise corporate documents and coordinate the submission pathway.",
    external:
      "The Nigerian Export Promotion Council issues exporter certificates. Product, sector or destination-specific permits may involve other authorities, and each institution controls its own requirements and decision.",
  },
  {
    number: "03",
    title: "Trademark application and coordination",
    summary:
      "Administrative support for businesses preparing to protect a name, mark or other brand asset in Nigeria.",
    tieko:
      "We capture the mark and ownership information, organise the brief, coordinate preliminary checks and keep the application record moving.",
    external:
      "The Trademarks Registry controls examination, publication, objections and registration. A qualified intellectual-property professional is engaged where legal advice, representation or a formal opinion is needed.",
  },
  {
    number: "04",
    title: "NDPC registration and compliance support",
    summary:
      "Practical readiness and coordination for organisations assessing registration and data-protection obligations under Nigeria's data-protection framework.",
    tieko:
      "We help organise processing information, responsible contacts, records and the administrative material needed for an appropriate compliance pathway.",
    external:
      "The Nigeria Data Protection Commission determines registration and regulatory outcomes. Audit, verification and regulated DPCO work must be performed by an appropriately licensed Data Protection Compliance Organisation where required.",
  },
  {
    number: "05",
    title: "Tax registration, filing coordination and professional referrals",
    summary:
      "Administrative coordination for businesses organising tax records, registrations and annual compliance work without losing visibility of the process.",
    tieko:
      "We gather the business context, organise available records, manage the information checklist and coordinate communication with a suitable external professional.",
    external:
      "Tax advice, audit opinions, signed accounts and professional filings are handled by appropriately qualified accountants, auditors or tax advisers. The relevant revenue authority controls registration, assessment and acceptance.",
  },
  {
    number: "06",
    title: "CSCS and institutional account application support",
    summary:
      "Application coordination for businesses preparing corporate securities or other institutional onboarding records.",
    tieko:
      "We help define the intended account pathway, assemble corporate and KYC records, coordinate responses and keep an application checklist visible to you.",
    external:
      "A stockbroker, custodian, CSCS or another relevant institution controls eligibility, account opening, identifiers, fees and timelines. We do not provide investment advice or guarantee account approval.",
  },
];

const audiences = [
  ["Founders", "People incorporating a Nigerian business or establishing a clearer corporate record before entering contracts, banking or regulated applications."],
  ["Established businesses", "Companies catching up on filings, organising tax coordination or preparing for a new operational requirement."],
  ["Exporters", "Businesses preparing their corporate records and exporter-registration pathway before formal export activity."],
  ["Institutions", "Organisations assembling the corporate, KYC and supporting records required for an institutional application."],
];

const process = [
  ["01", "Introductory call", "We clarify the business objective, current status and institution involved."],
  ["02", "Scope assessment", "We identify the administrative work, dependencies and any professional input required."],
  ["03", "Document preparation", "We provide a tailored checklist, organise supplied records and identify missing information."],
  ["04", "Submission or coordination", "We handle the agreed administration and coordinate with the institution or external professional."],
  ["05", "Follow-up and handover", "We track responses, organise queries and hand over the available records when the scoped work is complete."],
];

const workExamples = [
  ["Nairafolio", "Business compliance support."],
  ["Spen Agro", "Compliance and licensing coordination."],
  ["OliveBloom", "Nonprofit compliance and brand-foundation support."],
];

const faqs = [
  ["Which documents will I need?", "The list depends on the entity, institution and application. After the introductory call, we prepare a scoped checklist rather than using one generic document list."],
  ["Are government and professional fees included?", "No fee should be assumed to be included unless it appears in the written scope. Statutory charges, professional fees, searches, publications, certifications and third-party costs are identified separately where known."],
  ["Can you guarantee approval?", "No. We can improve organisation, readiness and follow-up, but an authority, professional firm, broker, custodian or other institution controls its own decision and timeline."],
  ["Do you provide legal, tax or investment advice?", "We provide business administration and coordination within the agreed scope. Regulated legal, audit, tax, data-protection or investment work is referred to an appropriately qualified or licensed professional where required."],
  ["How long will the process take?", "Timing depends on document readiness, the selected service and the external institution. We will explain known dependencies but will not promise a fixed approval date controlled by another organisation."],
  ["What happens after the introductory call?", "If the service is a suitable fit, you receive a proposed scope covering our work, external dependencies, expected inputs, fees and the next practical action."],
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function ComplianceInstitutionalLanding() {
  return (
    <div className="compliance-page">
      <Header />
      <main id="main-content">
        <section className="compliance-hero" aria-labelledby="compliance-title">
          <AmiRibbon />
          <div className="compliance-shell compliance-hero-grid">
            <div className="compliance-hero-copy">
              <nav aria-label="Breadcrumb" className="compliance-breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>Compliance</span>
              </nav>
              <p className="compliance-kicker">Compliance and institutional support</p>
              <h1 id="compliance-title">Move important business applications forward with clearer coordination.</h1>
              <p className="compliance-lead">
              We help founders, businesses and organisations organise documents, coordinate applications and manage the administrative work around Nigerian corporate, export, trademark, data-protection, tax and institutional processes.
              </p>
              <div className="compliance-actions">
              <Link href={bookingHref} className="compliance-primary">Book a call <Arrow /></Link>
                <a href="#services">Explore the services</a>
              </div>
              <p className="compliance-boundary">
                We provide scoped business administration and coordination. Authorities and appropriately qualified external professionals retain responsibility for regulated work, decisions and approvals.
              </p>
            </div>
            <figure className="compliance-hero-visual">
              <Image
                src="/images/services/compliance-institutional-support.webp"
                alt="Illustrative organised workspace with folders and documents overlooking Lagos"
                width={1672}
                height={941}
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
              />
              <figcaption>Illustrative image. It does not depict a client, approval or government office.</figcaption>
            </figure>
          </div>
        </section>

        <section className="compliance-intro" aria-labelledby="compliance-intro-title">
          <div className="compliance-shell compliance-intro-grid">
            <p className="compliance-kicker">Why this service exists</p>
            <div>
              <h2 id="compliance-intro-title">The form may be online. The process can still be overwhelming.</h2>
              <p>Important applications often involve several records, decision-makers and external portals. Missing information, unclear ownership and untracked queries can slow the business down.</p>
            <p>We create one visible working process around the application, clarify what is needed, organise what you control and coordinate the next step without pretending to control the institution.</p>
            </div>
          </div>
        </section>

        <section id="services" className="compliance-services" aria-labelledby="compliance-services-title">
          <div className="compliance-shell">
            <div className="compliance-heading">
              <div>
                <p className="compliance-kicker">Service categories</p>
                <h2 id="compliance-services-title">Support matched to the actual application.</h2>
              </div>
              <p>Every engagement is scoped separately because the required documents, professional roles and institutional pathway vary.</p>
            </div>
            <div className="compliance-service-list">
              {serviceCategories.map((service) => (
                <article key={service.number}>
                  <div className="compliance-service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <div className="compliance-responsibility-grid">
                    <div><strong>We handle</strong><p>{service.tieko}</p></div>
                      <div><strong>External responsibility</strong><p>{service.external}</p></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compliance-audience" aria-labelledby="compliance-audience-title">
          <div className="compliance-shell">
            <div className="compliance-heading compliance-heading-light">
              <div>
                <p className="compliance-kicker">Who it is for</p>
                <h2 id="compliance-audience-title">For organisations that need the work organised and followed through.</h2>
              </div>
                <Link href={bookingHref}>Book a call <Arrow /></Link>
            </div>
            <div className="compliance-audience-grid">
              {audiences.map(([title, copy]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compliance-process" aria-labelledby="compliance-process-title">
          <div className="compliance-shell">
            <div className="compliance-heading">
              <div>
                <p className="compliance-kicker">The process</p>
                <h2 id="compliance-process-title">One accountable pathway from question to handover.</h2>
              </div>
          <p>We separate the work we can manage from the decisions, professional opinions and timelines controlled elsewhere.</p>
            </div>
            <ol className="compliance-process-list">
              {process.map(([, title, copy]) => (
                <li key={title}><h3>{title}</h3><p>{copy}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="compliance-evidence" aria-labelledby="compliance-evidence-title">
          <div className="compliance-shell compliance-evidence-grid">
            <div>
              <p className="compliance-kicker">Recorded work</p>
              <h2 id="compliance-evidence-title">Relevant project scopes, stated without invented outcomes.</h2>
              <p>These examples reflect confirmed categories of work. Detailed case studies and client-approved documentation have not yet been published.</p>
              <Link href="/work">View selected work <Arrow /></Link>
            </div>
            <div className="compliance-evidence-list">
              {workExamples.map(([name, scope]) => (
                <article key={name}><div><h3>{name}</h3><p>{scope}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="compliance-authorities" aria-labelledby="compliance-authorities-title">
          <div className="compliance-shell">
            <p className="compliance-kicker">Official pathways</p>
            <h2 id="compliance-authorities-title">Applications remain subject to the relevant institution.</h2>
            <div>
              <a href="https://www.cac.gov.ng/" target="_blank" rel="noreferrer">Corporate Affairs Commission</a>
              <a href="https://nepc.gov.ng/get-started/e-registration/" target="_blank" rel="noreferrer">Nigerian Export Promotion Council</a>
              <a href="https://iponigeria.fmiti.gov.ng/" target="_blank" rel="noreferrer">Intellectual Property Office Nigeria</a>
              <a href="https://www.ndpc.gov.ng/" target="_blank" rel="noreferrer">Nigeria Data Protection Commission</a>
              <a href="https://www.firs.gov.ng/" target="_blank" rel="noreferrer">Federal Inland Revenue Service</a>
              <a href="https://www.cscs.ng/" target="_blank" rel="noreferrer">Central Securities Clearing System</a>
            </div>
          </div>
        </section>

        <section className="compliance-faq" aria-labelledby="compliance-faq-title">
          <div className="compliance-shell compliance-faq-grid">
            <div><p className="compliance-kicker">Frequently asked</p><h2 id="compliance-faq-title">Before the first call.</h2></div>
            <div>
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}<span aria-hidden="true">+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="compliance-final" aria-labelledby="compliance-final-title">
          <div className="compliance-final-ribbon" aria-hidden="true" />
          <div className="compliance-shell">
            <p className="compliance-kicker">Start with the actual requirement</p>
            <h2 id="compliance-final-title">Tell us what you need to complete.</h2>
            <p>We will help you identify the administrative scope, external dependencies and next practical step.</p>
            <Link href={bookingHref}>Book a call <Arrow /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
