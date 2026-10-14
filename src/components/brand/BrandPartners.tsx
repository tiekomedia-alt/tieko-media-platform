import Image from "next/image";
import Link from "next/link";
import { brandPartners } from "@/lib/brands";

type BrandPartnersProps = {
  variant?: "ribbon" | "wall";
};

function BrandLogo({ name, logo, duplicate = false }: (typeof brandPartners)[number] & { duplicate?: boolean }) {
  return (
    <div className="brand-logo-card" role={duplicate ? undefined : "listitem"}>
      <Image
        src={logo}
        alt={duplicate ? "" : `${name} logo`}
        width={600}
        height={320}
        sizes="(max-width: 768px) 46vw, 220px"
      />
    </div>
  );
}

export default function BrandPartners({ variant = "ribbon" }: BrandPartnersProps) {
  if (variant === "wall") {
    return (
      <section className="brand-partners brand-partners--wall" aria-labelledby="brand-wall-title">
        <div className="section-shell">
          <div className="brand-partners-heading">
            <p className="section-eyebrow">Brands we have worked with</p>
            <div>
              <h2 id="brand-wall-title">Different sectors. One standard of care.</h2>
              <p>
                From emerging ventures to established organisations, our work has supported teams across technology,
                hospitality, media, agriculture, property, childcare and the nonprofit sector.
              </p>
            </div>
          </div>
          <div className="brand-logo-wall" role="list" aria-label="Brands Tieko Media has worked with">
            {brandPartners.map((brand) => (
              <BrandLogo key={brand.name} {...brand} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="brand-partners brand-partners--ribbon" aria-labelledby="brand-ribbon-title">
      <div className="section-shell brand-partners-ribbon-heading">
        <div>
          <p className="section-eyebrow">Trusted experience</p>
          <h2 id="brand-ribbon-title">Brands we have worked with over the years.</h2>
        </div>
        <div>
          <p>Built across sectors, shaped around real business needs.</p>
          <Link href="/work">Explore our work <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="brand-ribbon-window">
        <div className="brand-ribbon-track">
          <div className="brand-ribbon-set" role="list" aria-label="Brands Tieko Media has worked with">
            {brandPartners.map((brand) => (
              <BrandLogo key={brand.name} {...brand} />
            ))}
          </div>
          <div className="brand-ribbon-set" aria-hidden="true">
            {brandPartners.map((brand) => (
              <BrandLogo key={`duplicate-${brand.name}`} {...brand} duplicate />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
