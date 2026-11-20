import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

type FooterLink = { label: string; to: string };

const groups: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Insights", to: "/insights" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Core Growth Services", to: "/services" },
      { label: "One Time Services", to: "/one-time-services" },
      { label: "Growth Plans", to: "/services" },
      { label: "GrowthSpark Method", to: "/method" },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Portfolio", to: "/portfolio" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Proof of Work", to: "/proof-of-work" },
      { label: "Featured Authors", to: "/editorial/featured-authors" },
    ],
  },
  {
    heading: "Book Ascendancy",
    links: [
      { label: "Book Ascendancy", to: "/book-ascendancy" },
      { label: "Author Interviews", to: "/editorial/interviews" },
      { label: "Author Spotlights", to: "/editorial/spotlights" },
      { label: "Book Club Programs", to: "/book-ascendancy/services" },
      { label: "Literary Features", to: "/editorial" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Leadership", to: "/leadership" },
      { label: "Partnerships", to: "/partnerships" },
      { label: "Client Reviews", to: "/reviews" },
      { label: "Newsletter", to: "/newsletter" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[oklch(0.308_0.034_127_/_0.14)] bg-[var(--section-alt)] text-foreground/75 mt-24">
      <div className="mx-auto max-w-[1240px] px-6 py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="font-serif text-2xl">
            Growth<span className="text-gold">Spark</span> Impact
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            A boutique author growth studio. We engineer reader acquisition systems,
            author positioning, and long term growth infrastructure for serious
            authors and publishing brands.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-px w-8 bg-gold/60" />
            Founded by Emmanuel
          </div>

          <ul className="mt-8 space-y-2.5 text-sm">
            <li>
              <a
                href="mailto:growthsparkimpact@gmail.com"
                className="inline-flex items-center gap-2 hover:text-gold transition py-1"
              >
                <Mail size={14} /> growthsparkimpact@gmail.com
              </a>
            </li>
            <li>
              <a
                href="mailto:connectwithemmanuel928@gmail.com"
                className="inline-flex items-center gap-2 hover:text-gold transition py-1"
              >
                <Mail size={14} /> connectwithemmanuel928@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-8 grid gap-10 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {groups.map((group) => (
            <div key={group.heading}>
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={`${group.heading}-${link.label}`}>
                    <Link to={link.to} className="hover:text-gold transition inline-block py-0.5">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
          <span>© 2025 GrowthSpark Impact. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-gold">Privacy</Link>
            <Link to="/terms" className="hover:text-gold">Terms</Link>
            <Link to="/refund-policy" className="hover:text-gold">Refund</Link>
            <Link to="/service-agreement" className="hover:text-gold">Service Agreement</Link>
            <Link to="/cookies" className="hover:text-gold">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
