# Tieko Media search launch and authority plan

Updated: 13 October 2026

## Canonical launch

- Canonical origin: `https://tiekomedia.com`
- Preferred host: apex domain (`tiekomedia.com`)
- Redirect `www.tiekomedia.com` to the apex domain at the hosting/DNS layer.
- Production build command: `npm run build`
- Required public files after deployment:
  - `https://tiekomedia.com/robots.txt`
  - `https://tiekomedia.com/sitemap.xml`
  - `https://tiekomedia.com/opengraph-image`
- Required production environment variables:
  - `GOOGLE_SITE_VERIFICATION`
  - `BING_SITE_VERIFICATION`
  - Existing email, analytics and form variables from `.env.local`

The domain did not resolve publicly during the 13 October 2026 audit. Hosting must be created or identified, the project deployed, and the registrar's DNS records pointed to that host before indexing or live performance measurement can begin.

## Search engine activation

1. Add `https://tiekomedia.com` as a Domain property in Google Search Console.
2. Verify ownership through DNS, or place the supplied token in `GOOGLE_SITE_VERIFICATION` and redeploy.
3. Add the site in Bing Webmaster Tools. Import from Search Console where appropriate, or place the Bing token in `BING_SITE_VERIFICATION` and redeploy.
4. Submit `https://tiekomedia.com/sitemap.xml` in both platforms.
5. Inspect and request indexing for the homepage, About page, Services page, SEO service page, Compliance service page and the most important Insights articles.
6. Record the submission date and check coverage after 48–72 hours. Indexing is controlled by the search engines and cannot be guaranteed.

## Core Web Vitals measurement

- On launch day: run Lighthouse mobile and desktop tests on the homepage, Services, SEO service, Compliance, About, Work, Insights and DIQ routes.
- Record LCP, INP/TBT, CLS, image payload, JavaScript payload and any render-blocking requests.
- After enough real-user data exists: review Search Console's Core Web Vitals report and Chrome UX Report data.
- Initial targets: LCP at or below 2.5 seconds, INP at or below 200 ms, and CLS at or below 0.1 at the 75th percentile.
- Re-test after each material design, script or image change.

## Consistent business identity (NAP)

- Business name: Tieko Media Limited
- Address: 13b Samuel Awoniyi, off Salvation Road, Opebi, Ikeja, Lagos 100212, Nigeria
- Phone: +234 903 819 8689
- Website: https://tiekomedia.com
- Public email: info@tiekomedia.com

Use this exact identity wherever possible. Do not create duplicate listings.

## Directory placement queue

| Priority | Platform | Purpose | Status | Required owner action |
| --- | --- | --- | --- | --- |
| 1 | Google Business Profile | Local entity and map visibility | Account access required | Claim or create, then verify the location |
| 1 | Bing Places for Business | Bing local entity visibility | Account access required | Claim/create and verify; import Google data only after it is correct |
| 1 | Apple Business Connect | Apple Maps and Siri entity visibility | Account access required | Register the organisation and verify it |
| 1 | LinkedIn Company Page | Company entity and staff association | Account access required | Confirm the official page, URL and company details |
| 2 | Clutch | Relevant B2B agency profile and client evidence | Profile review required | Create a free profile; request only genuine client reviews |
| 2 | Relevant Nigerian business/industry directories | Local citations | Vet individually | Accept only maintained, indexed and relevant directories |

### Citation cleanup already identified

- The former WordPress site presents an older brand description and contact details.
- A third-party Worldorgs listing presents an older business name, phone number and WordPress URL.
- Confirm ownership before changing either listing. Update the name, phone and canonical website; do not manufacture reviews or duplicate the listing.

## Digital PR starting angles

1. **The Nigerian Digital Intelligence Quotient:** publish anonymised, aggregate assessment findings after a meaningful sample exists. Never expose respondent emails or individual answers.
2. **Visibility is infrastructure, not posting:** an evidence-led opinion piece connecting websites, search, records, response systems and measurement.
3. **What Nigerian businesses lose through fragmented digital ownership:** a practical report on domains, passwords, recovery access and vendor handover.
4. **From search question to useful service:** a transparent TeamShuffle build note covering research, information architecture and search-led content without inventing performance claims.

For each pitch, prepare one original finding, one named spokesperson, a concise media note, a relevant landing page and reusable visual material. Match the pitch to the publication's audience instead of distributing the same release everywhere.

## Ethical backlink rules

- Prioritise relevant editorial links, verified business profiles, partner/client acknowledgements and genuinely useful contributed expertise.
- Ask named partners and clients for accurate project attribution only where they are comfortable publishing it.
- Link to the page that best answers the reader's need, not always the homepage.
- Reject private blog networks, automated bulk links, hidden links, comment spam, irrelevant guest-post farms and paid links presented as editorial endorsements.
- Mark sponsored placements appropriately and keep evidence of the agreement.
- Track referring page, target page, relationship, contact, status, publication date and whether the link is sponsored, nofollow or editorial.

## First 30-day authority sequence

- Week 1: launch the domain, verify search tools, submit the sitemap, correct owned profiles and claim priority map listings.
- Week 2: publish the About page and two high-intent Insights articles; request accurate partner/client attribution.
- Week 3: pitch one data-led DIQ story and one practical digital-ownership story to a short, relevant media list.
- Week 4: review index coverage, referral quality, branded search results and Core Web Vitals; improve weak pages before expanding outreach.
