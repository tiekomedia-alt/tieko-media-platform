import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer-layout">
        <div className="site-footer-brand">
          <Link href="/" aria-label="Tieko Media home">
            <Image
              src="/brand/tieko-logo-circle.png"
              alt="Tieko Media"
              width={320}
              height={320}
            />
          </Link>
          <p>We help you get found, build trust and make better decisions through research, content and digital optimisation.</p>
        </div>

        <nav aria-label="Footer navigation">
          <p>Explore</p>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/store">Store</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book-a-call">Book a call</Link>
        </nav>

        <address>
          <p>Contact us</p>
          <a href="mailto:tiekomedia@gmail.com">tiekomedia@gmail.com</a>
          <a href="mailto:info@tiekomedia.com">info@tiekomedia.com</a>
          <a href="tel:+2349038198689">+234 903 819 8689</a>
        </address>
      </div>
      <div className="section-shell site-footer-bottom">
        <p>Tieko Media Limited</p>
        <nav className="site-footer-legal" aria-label="Legal information">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
