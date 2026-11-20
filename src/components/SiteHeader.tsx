import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = { to: string; label: string };
type NavGroup = { label: string; to: string; items?: NavItem[] };

const nav: NavGroup[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    items: [
      { to: "/about", label: "Our Story" },
      { to: "/leadership", label: "Leadership" },
      { to: "/partnerships", label: "Partnerships" },
      { to: "/reviews", label: "Client Reviews" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    items: [
      { to: "/services", label: "Core Services" },
      { to: "/one-time-services", label: "One Time Services" },
      { to: "/method", label: "GrowthSpark Method™" },
      { to: "/podcast-opportunities", label: "Podcast Opportunities" },
    ],
  },
  {
    label: "Work",
    to: "/portfolio",
    items: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/proof-of-work", label: "Proof of Work" },
      { to: "/editorial/featured-authors", label: "Featured Authors" },
    ],
  },
  {
    label: "Insights",
    to: "/insights",
    items: [
      { to: "/editorial", label: "Journal" },
      { to: "/insights", label: "Insights" },
      { to: "/resources", label: "Resources" },
      { to: "/genre-strategies", label: "Genre Strategies" },
    ],
  },
  {
    label: "Book Ascendancy",
    to: "/book-ascendancy",
    items: [
      { to: "/book-ascendancy", label: "The Partnership" },
      { to: "/book-ascendancy/services", label: "Author Programs" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="GrowthSpark Impact home">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[oklch(0.236_0.047_306_/_0.25)] bg-[oklch(0.236_0.047_306_/_0.05)] text-gold font-serif text-base">
        G
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-lg tracking-wide text-foreground">
          Growth<span className="text-gold">Spark</span> Impact
        </span>
        <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Author Growth Studio
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-[oklch(0.236_0.047_306_/_0.14)]">
      <div className="mx-auto max-w-[1240px] px-6 h-20 flex items-center justify-between gap-4">
        <Wordmark />

        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((g) =>
            g.items ? (
              <div key={g.label} className="relative group">
                <Link
                  to={g.to}
                  className="inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                  activeProps={{ className: "inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide text-gold" }}
                >
                  {g.label}
                  <ChevronDown size={13} className="opacity-60" />
                </Link>
                <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-3 z-50">
                  <div className="min-w-[230px] rounded-xl border border-[oklch(0.236_0.047_306_/_0.16)] bg-[var(--popover)] p-2 shadow-2xl">
                    {g.items.map((i) => (
                      <Link
                        key={i.to}
                        to={i.to}
                        className="block rounded-lg px-3 py-2.5 text-[13px] text-foreground/75 hover:bg-[oklch(0.236_0.047_306_/_0.12)] hover:text-gold transition"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={g.to}
                to={g.to}
                className="px-3 py-2 text-[13px] font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                activeProps={{ className: "px-3 py-2 text-[13px] font-medium tracking-wide text-gold" }}
                activeOptions={{ exact: true }}
              >
                {g.label}
              </Link>
            ),
          )}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center whitespace-nowrap rounded-full border border-gold/60 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-primary-foreground transition"
          >
            Book a Discovery Call
          </Link>
        </nav>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[oklch(0.236_0.047_306_/_0.14)] bg-background max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            {nav.map((g) =>
              g.items ? (
                <div key={g.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground/80"
                    onClick={() => setExpanded(expanded === g.label ? null : g.label)}
                    aria-expanded={expanded === g.label}
                  >
                    {g.label}
                    <ChevronDown size={15} className={expanded === g.label ? "rotate-180 transition" : "transition"} />
                  </button>
                  {expanded === g.label && (
                    <div className="pl-4 border-l border-[oklch(0.236_0.047_306_/_0.16)] ml-4 mb-2">
                      {g.items.map((i) => (
                        <Link
                          key={i.to}
                          to={i.to}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-gold"
                          activeProps={{ className: "block px-4 py-2.5 text-sm text-gold" }}
                        >
                          {i.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={g.to}
                  to={g.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-foreground/80"
                  activeProps={{ className: "px-4 py-3 rounded-lg text-sm font-medium text-gold" }}
                  activeOptions={{ exact: true }}
                >
                  {g.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full border border-gold/60 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold"
            >
              Book a Discovery Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
