import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Mic,
  Newspaper,
  Search,
  Tags,
  BarChart3,
  BookMarked,
  Sparkles,
  Share2,
  Briefcase,
  Film,
  Video,
  Image as ImageIcon,
  Map,
  Rocket,
  Users,
  Package,
} from "lucide-react";
import { SummerAuthorProfileOffer } from "@/components/SummerAuthorProfileOffer";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/one-time-services")({
  head: () => ({
    meta: [
      { title: "One-Time Services — GrowthSpark Impact" },
      {
        name: "description",
        content:
          "A curated catalog of one-time professional author services, delivered with the same senior expertise as our flagship growth partnerships.",
      },
      { property: "og:title", content: "One-Time Services — GrowthSpark Impact" },
      {
        property: "og:description",
        content:
          "Focused, high-impact author services from the GrowthSpark Impact studio. Editorial, Amazon, branding, creative, and strategy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/one-time-services" }],
  }),
  component: OneTimeServices,
});

type Service = {
  name: string;
  price: string;
  icon: LucideIcon;
  summary: string;
  deliverables?: string[];
};

type Category = {
  kicker: string;
  title: string;
  intro: string;
  services: Service[];
};

const categories: Category[] = [
  {
    kicker: "Category 01",
    title: "Editorial & Publishing Services",
    intro:
      "For authors who want professionally written promotional content and editorial exposure built to the standard of a literary magazine.",
    services: [
      {
        name: "Featured Author Article",
        price: "$247",
        icon: FileText,
        summary:
          "A professionally researched and written feature highlighting your book, your journey, and your work in an engaging editorial format.",
        deliverables: [
          "Professionally written article",
          "Book cover integration",
          "Author biography",
          "Editorial formatting",
          "Downloadable PDF version",
          "Website publication where applicable",
          "SEO friendly formatting",
        ],
      },
      {
        name: "Premium Editorial Feature",
        price: "$399",
        icon: BookOpen,
        summary:
          "An in depth magazine style feature that showcases your book through thoughtful storytelling and premium editorial presentation.",
        deliverables: [
          "Long form editorial article",
          "Premium formatting",
          "Book highlights",
          "Reader recommendations",
          "Professional design",
          "Downloadable PDF",
        ],
      },
      {
        name: "Author Interview",
        price: "$249",
        icon: Mic,
        summary:
          "A professionally structured interview that lets readers connect with your story, your writing process, and your creative journey.",
        deliverables: [
          "Custom interview questions",
          "Professionally edited responses",
          "Publication ready formatting",
          "Downloadable PDF",
        ],
      },
      {
        name: "Newspaper Spotlight",
        price: "$199",
        icon: Newspaper,
        summary:
          "A concise newspaper style spotlight introducing your book and giving readers a clear reason to discover it.",
      },
    ],
  },
  {
    kicker: "Category 02",
    title: "Amazon & Discoverability Services",
    intro:
      "Precision work on the pages, keywords, and categories that decide whether readers ever find your book.",
    services: [
      {
        name: "Amazon Optimization",
        price: "$497",
        icon: Search,
        summary:
          "A full sweep of your Amazon presence so your book page earns its place in the algorithms readers actually browse.",
        deliverables: [
          "Keyword research",
          "Category optimization",
          "Metadata enhancement",
          "Competitive analysis",
          "Book page review",
        ],
      },
      {
        name: "Metadata Optimization",
        price: "$249",
        icon: Tags,
        summary:
          "A focused refinement of the invisible signals that drive discovery, ranking, and reader intent.",
        deliverables: [
          "Metadata audit",
          "Optimized keywords",
          "Category review",
          "Positioning recommendations",
        ],
      },
      {
        name: "Book Visibility Audit",
        price: "$347",
        icon: BarChart3,
        summary:
          "A senior level audit that maps exactly where your book is discoverable, where it is invisible, and how to close the gap.",
        deliverables: [
          "Discoverability assessment",
          "Competitor analysis",
          "Growth opportunities",
          "Positioning review",
          "Professional audit report",
        ],
      },
      {
        name: "Goodreads Optimization",
        price: "$249",
        icon: BookMarked,
        summary:
          "A structured plan to make your Goodreads presence work as a real reader discovery channel.",
        deliverables: [
          "Goodreads profile review",
          "Shelf strategy",
          "Listopia research",
          "Reader discovery recommendations",
        ],
      },
    ],
  },
  {
    kicker: "Category 03",
    title: "Branding Services",
    intro:
      "The identity work that turns you from an author with a book into a recognizable literary brand.",
    services: [
      {
        name: "Author Brand Audit",
        price: "$299",
        icon: Sparkles,
        summary:
          "A candid, senior led review of how your author brand currently reads to readers, media, and the industry.",
        deliverables: [
          "Brand review",
          "Positioning assessment",
          "Audience alignment",
          "Growth recommendations",
        ],
      },
      {
        name: "Social Media Branding",
        price: "$297",
        icon: Share2,
        summary:
          "A cohesive visual and narrative identity across your primary author platforms.",
        deliverables: [
          "Profile optimization",
          "Banner design",
          "Bio creation",
          "Brand positioning",
          "Content direction",
        ],
      },
      {
        name: "Professional Author Media Kit",
        price: "$349",
        icon: Briefcase,
        summary:
          "The press ready document that lets journalists, podcasters, and partners take you seriously in a single download.",
        deliverables: [
          "Author biography",
          "Media assets",
          "Press information",
          "Professional layout",
        ],
      },
    ],
  },
  {
    kicker: "Category 04",
    title: "Creative Studio",
    intro:
      "Cinematic, story led visuals produced with the craft of a boutique creative agency.",
    services: [
      {
        name: "Professional Book Trailer",
        price: "$697",
        icon: Film,
        summary:
          "A cinematic trailer that translates the emotional core of your book into a short film readers want to share.",
        deliverables: [
          "Cinematic trailer",
          "Social media versions",
          "Promotional video assets",
          "HD export",
        ],
      },
      {
        name: "Social Media Promotional Video",
        price: "$249",
        icon: Video,
        summary:
          "Short form promotional videos optimized for TikTok, Instagram Reels, YouTube Shorts, and other social platforms.",
      },
      {
        name: "Launch Graphics Kit",
        price: "$279",
        icon: ImageIcon,
        summary:
          "A coordinated visual system for launch week so every post, banner, and announcement looks unmistakably yours.",
        deliverables: [
          "Social graphics",
          "Promotional banners",
          "Announcement posts",
          "Reader assets",
        ],
      },
    ],
  },
  {
    kicker: "Category 05",
    title: "Strategy Services",
    intro:
      "Senior strategic thinking distilled into a plan you can actually execute.",
    services: [
      {
        name: "Author Strategy Session",
        price: "$197",
        icon: Briefcase,
        summary:
          "A focused ninety minute working session with a senior strategist on your book, your positioning, and your next move.",
        deliverables: [
          "Pre session questionnaire review",
          "Live strategy conversation",
          "Written summary of decisions",
          "Recommended next steps",
        ],
      },
      {

        name: "Author Growth Roadmap",
        price: "$597",
        icon: Map,
        summary:
          "A clear ninety day operating plan for your author business, structured for momentum rather than motion.",
        deliverables: [
          "30 day plan",
          "60 day plan",
          "90 day plan",
          "Launch timeline",
          "Growth recommendations",
        ],
      },
      {
        name: "Book Launch Strategy",
        price: "$549",
        icon: Rocket,
        summary:
          "The full launch architecture, from pre launch positioning through the first weeks after release.",
        deliverables: [
          "Launch calendar",
          "Promotional timeline",
          "Marketing recommendations",
          "Reader engagement plan",
        ],
      },
      {
        name: "Reader Acquisition Blueprint",
        price: "$499",
        icon: Users,
        summary:
          "A precise blueprint for where your next thousand real readers will actually come from.",
        deliverables: [
          "Reader targeting",
          "Community research",
          "Partnership opportunities",
          "Growth strategy",
        ],
      },
    ],
  },
];

const bundles = [
  {
    name: "Visibility Starter Bundle",
    price: "$499",
    includes: [
      "Book Visibility Audit",
      "Amazon Optimization",
      "Goodreads Optimization",
      "Competitor Analysis",
    ],
  },
  {
    name: "Author Brand Bundle",
    price: "$599",
    includes: ["Brand Audit", "Social Media Branding", "Professional Bio", "Banner Design"],
  },
  {
    name: "Editorial Bundle",
    price: "$399",
    includes: [
      "Premium Editorial Feature",
      "Book Spotlight",
      "Downloadable PDF",
      "Social Promotion Assets",
    ],
  },
  {
    name: "Launch Essentials Bundle",
    price: "$999",
    includes: [
      "Launch Strategy",
      "Book Trailer",
      "Amazon Optimization",
      "Author Growth Roadmap",
    ],
  },
];

const journey = [
  { step: "One", label: "One Time Service", detail: "Begin with a focused, high impact project." },
  { step: "Two", label: "Strategic Consultation", detail: "Translate results into a longer term plan." },
  { step: "Three", label: "Growth Partnership", detail: "Move into ongoing senior led execution." },
  { step: "Four", label: "Long Term Author Success", detail: "A career built with a trusted studio." },
];

function OneTimeServices() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="container-editorial pt-24 pb-20">
          <span className="eyebrow-gold">
            <span className="rule-gold" /> One Time Services
          </span>
          <h1 className="display-1 mt-8 max-w-5xl">
            Professional author services.
            <br />
            <span className="text-gradient-gold">Delivered with senior expertise.</span>
          </h1>
          <p className="lede mt-10 max-w-2xl">
            Not every author is ready for an ongoing growth partnership. Our one time services provide
            focused, high impact solutions designed to strengthen your book, your brand, and your long
            term author career.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#catalog" className="btn-gold">
              View the catalog <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-ghost">
              Speak with the studio
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-pad border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="container-editorial grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="eyebrow">
              <span className="rule-gold" /> The Studio Standard
            </span>
            <h2 className="display-2 mt-6">A curated catalog, not a price list.</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Many authors begin with a single project before partnering with us for larger strategic
              engagements. Every service on this page is delivered by the same senior team responsible
              for our premium consulting programs.
            </p>
            <p>
              These are not discounted or junior led services. They are the same craft, scoped for a
              defined outcome so authors can experience the studio before committing to an ongoing
              partnership.
            </p>
          </div>
        </div>
      </section>

      {/* One time vs ongoing */}
      <section className="section-pad border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="container-editorial">
          <span className="eyebrow-gold">
            <span className="rule-gold" /> How To Choose
          </span>
          <h2 className="display-2 mt-6 max-w-3xl">
            One time services or an ongoing growth partnership.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="surface-card rounded-2xl p-8">
              <h3 className="font-serif text-2xl">One Time Services</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A single, clearly scoped project with a fixed price and a defined deliverable. Best when
                you need one specific thing solved, such as an audit, a trailer, or a launch plan.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/85">
                <li>Fixed price, from $197 to $997</li>
                <li>One project, one outcome</li>
                <li>No ongoing commitment</li>
                <li>A way to experience the studio first</li>
              </ul>
            </div>
            <div className="surface-card rounded-2xl p-8">
              <h3 className="font-serif text-2xl">Ongoing Growth Partnerships</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Monthly senior led execution across visibility, positioning, reader acquisition, and
                launch momentum. Best when you are building a career rather than promoting one title.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/85">
                <li>Starter at $697 one time</li>
                <li>Growth at $2,497 per month</li>
                <li>Authority at $4,997 per month</li>
                <li>Legacy at $8,497 per month</li>
              </ul>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-gold text-sm">
                Explore growth services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <div id="catalog">

        {categories.map((cat) => (
          <section
            key={cat.title}
            className="section-pad border-b border-[oklch(0.236_0.047_306_/_0.14)]"
          >
            <div className="container-editorial">
              <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
                <div className="md:col-span-5">
                  <span className="eyebrow-gold">
                    <span className="rule-gold" /> {cat.kicker}
                  </span>
                  <h2 className="display-2 mt-6">{cat.title}</h2>
                </div>
                <p className="md:col-span-7 lede">{cat.intro}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {cat.services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <article
                      key={s.name}
                      className="surface-card rounded-2xl p-8 lift hover:border-sea"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[oklch(0.236_0.047_306_/_0.18)] bg-[oklch(0.236_0.047_306_/_0.05)] text-gold">
                          <Icon size={20} />
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.22em] text-gold whitespace-nowrap">
                          {s.price}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-[28px] leading-tight mt-6">
                        {s.name}
                      </h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed">{s.summary}</p>
                      {s.deliverables && (
                        <>
                          <div className="mt-6 flex items-center gap-3">
                            <span className="rule-gold" />
                            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                              Deliverables
                            </span>
                          </div>
                          <ul className="mt-4 space-y-2">
                            {s.deliverables.map((d) => (
                              <li
                                key={d}
                                className="text-sm text-foreground/85 flex gap-3 leading-relaxed"
                              >
                                <span className="text-gold mt-1.5 inline-block h-1 w-1 rounded-full bg-gold" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      <div className="mt-8 pt-6 border-t border-[oklch(0.236_0.047_306_/_0.14)]">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-gold text-[12px] uppercase tracking-[0.2em] font-semibold hover:gap-3 transition-all"
                        >
                          Commission this service <ArrowRight size={14} />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bundles */}
      <section className="section-pad border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="container-editorial">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
            <div className="md:col-span-6">
              <span className="eyebrow-gold">
                <span className="rule-gold" /> Author Success Bundles
              </span>
              <h2 className="display-2 mt-6">Considered pairings for meaningful momentum.</h2>
            </div>
            <p className="md:col-span-6 lede">
              Curated combinations of our most requested services, priced to reward authors who want a
              broader arc of work in a single, decisive engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map((b) => (
              <article
                key={b.name}
                className="surface-card rounded-2xl p-8 lift flex flex-col"
              >
                <Package className="text-gold" size={22} />
                <h3 className="font-serif text-xl md:text-2xl leading-tight mt-6">{b.name}</h3>
                <div className="mt-3 text-gradient-gold font-serif text-3xl">{b.price}</div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="rule-gold" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    Includes
                  </span>
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  {b.includes.map((i) => (
                    <li key={i} className="text-sm text-foreground/85 flex gap-3 leading-relaxed">
                      <span className="text-gold mt-1.5 inline-block h-1 w-1 rounded-full bg-gold" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-gold text-[12px] uppercase tracking-[0.2em] font-semibold hover:gap-3 transition-all"
                >
                  Reserve this bundle <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Client journey */}
      <section className="section-pad border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <span className="eyebrow-gold">
              <span className="rule-gold" /> The Client Journey
            </span>
            <h2 className="display-2 mt-6">Start small. Grow with confidence.</h2>
            <p className="lede mt-8">
              Many GrowthSpark clients begin with a single professional service before expanding into a
              long term strategic partnership. Each stage builds on the trust, insight, and momentum of
              the last.
            </p>
          </div>

          <ol className="mt-16 grid md:grid-cols-4 gap-6">
            {journey.map((j, i) => (
              <li key={j.step} className="surface-card rounded-2xl p-7 relative">
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Stage {j.step}</div>
                <h3 className="font-serif text-2xl leading-tight mt-4">{j.label}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{j.detail}</p>
                {i < journey.length - 1 && (
                  <ArrowRight
                    className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gold/50"
                    size={18}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SummerAuthorProfileOffer />

      {/* Closing CTA */}
      <section className="section-pad">
        <div className="container-editorial text-center max-w-3xl">
          <h2 className="display-2">Commission a single service. Or begin a longer story with us.</h2>
          <p className="lede mt-8">
            Tell us what you are working on. We will recommend the sharpest starting point, whether it
            is a one time engagement or a longer partnership with the studio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold">
              Begin a conversation <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-ghost">
              View growth partnerships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
