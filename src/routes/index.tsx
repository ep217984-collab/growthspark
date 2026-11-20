import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowthSpark Impact | Boutique Author Growth Consultancy" },
      {
        name: "description",
        content:
          "GrowthSpark Impact is a boutique consultancy that builds long-term author careers. Strategy, creative, technology, partnerships, and analytics, engineered for lasting reader relationships.",
      },
      { property: "og:title", content: "GrowthSpark Impact, Boutique Author Growth Consultancy" },
      {
        property: "og:description",
        content:
          "We build author careers, not campaigns. A boutique consultancy for serious writers and publishing brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://growthsparkimpact.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/" }],
  }),
  component: Home,
});

/* ─────────────────────────── Sub-components ─────────────────────────── */

function Eyebrow({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div className={gold ? "eyebrow-gold" : "eyebrow"}>
      <span className="rule-gold" />
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 display-2">{title}</h2>
      {lede && <p className="mt-6 lede">{lede}</p>}
    </div>
  );
}

/* ─────────────────────────── Sections ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden hairline-b">
      <div className="container-editorial relative pt-32 md:pt-44 pb-24 md:pb-40">
        <Eyebrow gold>A boutique author growth consultancy</Eyebrow>
        <h1 className="mt-8 display-1 max-w-[18ch] fade-up">
          We build author <span className="italic text-gradient-gold">careers</span>,
          <br className="hidden md:block" /> not campaigns.
        </h1>
        <p className="mt-8 lede max-w-2xl">
          GrowthSpark Impact is the trusted growth partner serious authors choose when
          they want to build a lasting literary career. Strategy, creative, technology,
          partnerships, and analytics, brought together as one integrated ecosystem.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-gold">
            Book a Discovery Call <ArrowRight size={16} />
          </Link>
          <Link to="/method" className="btn-ghost">
            The GrowthSpark Method
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          {[
            ["9", "Strategic divisions"],
            ["48+", "Author engagements"],
            ["12", "Genres served"],
            ["$697 to $8,497", "Engagement range"],
          ].map(([k, v]) => (
            <div key={v} className="hairline-t pt-5">
              <div className="font-serif text-3xl md:text-4xl text-foreground">{k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  const rows = [
    "Independent authors",
    "Publishing imprints",
    "Book Ascendancy Book Club",
    "Debut & backlist authors",
    "Literary agents",
    "Author collectives",
  ];
  return (
    <section className="py-16 hairline-b">
      <div className="container-editorial">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span className="text-gold">Trusted by</span>
          {rows.map((r) => (
            <span key={r} className="opacity-80">
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  const groups = [
    {
      k: "Debut Authors",
      d: "Launching with intent, position, publish, and build a reader base that carries beyond release week.",
    },
    {
      k: "Established Authors",
      d: "Turn a growing backlist into compounding revenue with structured visibility, reader lifecycle, and category authority.",
    },
    {
      k: "Publishing Brands",
      d: "Boutique imprints and author collectives ready for senior strategy across catalog, campaign, and community.",
    },
    {
      k: "Literary Readers",
      d: "Through Book Ascendancy Book Club, we connect readers with exceptional books and the authors behind them.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="Who we serve"
          title={
            <>
              Serious authors. <span className="italic text-gradient-gold">Real readers.</span>
            </>
          }
          lede="Every successful author career begins with a genuine reader relationship. We serve both sides of the literary world with the same care."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div key={g.k} className="surface-card rounded-2xl p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-gold">{g.k}</div>
              <p className="mt-4 text-foreground/85 leading-relaxed">{g.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="section-pad hairline-t hairline-b bg-[var(--section-alt)]">
      <div className="container-editorial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Eyebrow>Our philosophy</Eyebrow>
        </div>
        <div className="lg:col-span-8">
          <p className="display-3 text-foreground/95">
            "A book is not a campaign. It is the beginning of a relationship , 
            between a writer and the readers who will carry their work forward."
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-8 text-foreground/80 leading-relaxed">
            <p>
              We measure our work not by launch-week charts, but by the durability
              of the systems we leave behind, reader lifecycles that compound, brand
              equity that appreciates, and a category presence that outlasts any single title.
            </p>
            <p>
              Every engagement is led by senior strategists, supported by a
              multidisciplinary team, and grounded in the belief that authorship is a
              craft worth protecting and a career worth building patiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const frameworks = [
    {
      slug: "reader-gravity",
      name: "Reader Gravity™",
      d: "The forces that pull the right reader toward the right book at the right moment.",
    },
    {
      slug: "story-signal",
      name: "Story Signal™",
      d: "Positioning that separates a title from its category and makes it findable.",
    },
    {
      slug: "literary-intelligence",
      name: "Literary Intelligence™",
      d: "Category, comp title, and reader data translated into strategic decisions.",
    },
    {
      slug: "audience-echo",
      name: "Audience Echo™",
      d: "How word-of-mouth is engineered, measured, and sustained across releases.",
    },
    {
      slug: "book-velocity",
      name: "Book Velocity™",
      d: "The launch cadence and runway that converts momentum into a lasting presence.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="container-editorial">
        <SectionHeader
          eyebrow="The GrowthSpark Method™"
          title={
            <>
              Five proprietary frameworks. <span className="italic">One integrated system.</span>
            </>
          }
          lede="Our consulting frameworks are the intellectual infrastructure behind every engagement, refined across genres, audiences, and career stages."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {frameworks.map((f, i) => (
            <Link
              key={f.slug}
              to="/method/$framework"
              params={{ framework: f.slug }}
              className="group surface-card rounded-2xl p-7 hover:border-gold/40 transition-all"
            >
              <div className="font-serif text-4xl text-gold/70">0{i + 1}</div>
              <div className="mt-6 font-serif text-xl">{f.name}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gold opacity-0 group-hover:opacity-100 transition">
                Explore <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedServices() {
  const services = [
    { to: "/services", name: "Author Visibility Audit", d: "A senior-led diagnostic of positioning, discoverability, and reader lifecycle." },
    { to: "/services", name: "Amazon Optimization", d: "Metadata, category, A+ content, and conversion tuning across the catalog." },
    { to: "/services", name: "Author Growth Roadmap", d: "A 12-month strategy that sequences launches, backlist, and reader acquisition." },
    { to: "/services", name: "Book Trailer Production", d: "Cinematic creative that carries the emotional weight of the book across platforms." },
    { to: "/services", name: "Reader Acquisition", d: "Owned audience systems, list, community, and creator partnerships that compound." },
    { to: "/services", name: "Launch Strategy", d: "A disciplined 90-day runway coordinating ads, email, ARC, and creator outreach." },
  ];
  return (
    <section className="section-pad hairline-t bg-[var(--section-alt)]">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Featured services"
            title={<>Consulting-led. <span className="italic">Craft-executed.</span></>}
          />
          <Link to="/services" className="text-sm text-gold inline-flex items-center gap-1">
            View all services <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.name} to={s.to} className="group surface-card rounded-2xl p-8 hover:border-gold/40 transition">
              <div className="font-serif text-2xl">{s.name}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="mt-8 inline-flex items-center gap-1 text-xs uppercase tracking-[0.22em] text-gold">
                Learn more <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RealClientWork() {
  const items = [
    { cat: "Book Trailer", t: "Cinematic Launch Trailer, Literary Fiction" },
    { cat: "Amazon Optimization", t: "Backlist Rebuild, Mystery Series" },
    { cat: "Growth Roadmap", t: "12-Month Roadmap, Romance Author" },
    { cat: "Brand Identity", t: "Author Brand System, Memoirist" },
  ];
  return (
    <section className="section-pad">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Real client work" title={<>Proof, <span className="italic text-gradient-gold">not promises.</span></>} />
          <Link to="/portfolio" className="text-sm text-gold inline-flex items-center gap-1">
            View portfolio <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <Link key={i.t} to="/portfolio" className="group block">
              <div className="aspect-[16/10] rounded-2xl border border-[oklch(0.236_0.047_306_/_0.16)] bg-[var(--section-alt)] overflow-hidden relative">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{i.cat}</div>
                  <div className="mt-2 font-serif text-2xl">{i.t}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyHighlights() {
  return (
    <section className="section-pad hairline-t bg-[var(--section-alt)]">
      <div className="container-editorial grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Case studies"
            title={<>Structured outcomes,<br />measured over quarters.</>}
            lede="Selected engagements demonstrating how our frameworks translate into durable growth."
          />
          <Link to="/case-studies" className="mt-8 inline-flex items-center gap-1 text-sm text-gold">
            Read case studies <ArrowRight size={14} />
          </Link>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {[
            { c: "Debut Fantasy Launch", r: "Top-subgenre rank in launch window; list scaled several multiples through release." },
            { c: "Romance Backlist Program", r: "Compounding read-through across the series; sustained monthly rank improvement." },
            { c: "Memoirist Brand Build", r: "Cohesive identity, stronger conversion, and a durable content rhythm." },
          ].map((x) => (
            <div key={x.c} className="surface-card rounded-2xl p-7 flex items-center justify-between gap-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Engagement</div>
                <div className="mt-2 font-serif text-xl">{x.c}</div>
                <p className="mt-2 text-sm text-muted-foreground max-w-xl">{x.r}</p>
              </div>
              <ArrowUpRight className="text-muted-foreground shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipTeaser() {
  const leads = [
    ["Emmanuel", "Founder & Lead Growth Strategist"],
    ["Abraham Prinsley", "Strategic Partnerships & Author Success"],
    ["Michael Jeremiah", "Creative Director"],
    ["Daniel Akpan", "Client Strategy & Business Transformation"],
  ];
  return (
    <section className="section-pad">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Executive leadership"
            title={<>Senior strategy on <span className="italic">every</span> engagement.</>}
            lede="A multidisciplinary partnership of strategists, creatives, technologists, and analysts."
          />
          <Link to="/leadership" className="text-sm text-gold inline-flex items-center gap-1">
            Meet the team <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leads.map(([n, r]) => (
            <div key={n} className="surface-card rounded-2xl p-7">
              <div
                className="aspect-square rounded-xl mb-6"
                style={{ background: "var(--section-alt)" }}
                aria-hidden
              />
              <div className="font-serif text-xl">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{r}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnerships() {
  return (
    <section className="section-pad hairline-t bg-[var(--section-alt)]">
      <div className="container-editorial grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Strategic partnerships"
            title={<>An ecosystem, <span className="italic text-gradient-gold">not a silo.</span></>}
            lede="We collaborate with trusted literary partners to give our authors deeper access to readers, communities, and industry momentum."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/partnerships" className="btn-ghost">Partnerships</Link>
            <Link to="/book-ascendancy" className="btn-gold">Book Ascendancy <ArrowRight size={14} /></Link>
          </div>
        </div>
        <div className="lg:col-span-7 surface-card rounded-2xl p-10">
          <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Featured partner</div>
          <div className="mt-4 font-serif text-3xl">Book Ascendancy Book Club</div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            An independent literary community connecting authors and readers through
            author interviews, spotlight features, book-of-the-month programs, virtual
            tours, and community reading campaigns.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {["Author Interviews", "Spotlight Series", "Book of the Month", "Virtual Book Tours"].map((x) => (
              <div key={x} className="hairline-t pt-3 text-foreground/85">{x}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const posts = [
    { cat: "Publishing Strategy", t: "Why author careers compound in quarters, not launches." },
    { cat: "Reader Psychology", t: "The three moments that decide whether a reader finishes your book." },
    { cat: "Amazon Optimization", t: "A senior operator's take on category selection in 2026." },
  ];
  return (
    <section className="section-pad">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Insights" title={<>Editorial writing from our practice.</>} />
          <Link to="/insights" className="text-sm text-gold inline-flex items-center gap-1">
            Read the journal <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.t} to="/insights" className="group block">
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">{p.cat}</div>
              <div className="mt-4 font-serif text-2xl leading-snug group-hover:text-gold transition">{p.t}</div>
              <div className="mt-6 hairline-t pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                GrowthSpark Journal
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-pad hairline-t bg-[var(--section-alt)]">
      <div className="container-editorial">
        <Eyebrow>In their words</Eyebrow>
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {[
            {
              q: "GrowthSpark did what no marketing team had managed: they made the strategy behind our releases legible. Every decision now has a reason.",
              a: "Multi-book Romance Author",
            },
            {
              q: "They treat authorship like a career, not a launch. Our backlist finally works for us.",
              a: "Mystery Series Author",
            },
          ].map((t) => (
            <blockquote key={t.a} className="surface-card rounded-2xl p-10">
              <p className="font-serif text-2xl leading-snug text-foreground/95">"{t.q}"</p>
              <footer className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">{t.a}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/testimonials" className="text-sm text-gold inline-flex items-center gap-1">
            More testimonials <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  const items = [
    "Book Launch Checklist",
    "Author Growth Planner",
    "Reader Persona Worksheet",
    "Amazon Optimization Guide",
    "Book Club Outreach Kit",
    "Publishing Timeline",
  ];
  return (
    <section className="section-pad">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Resources"
            title={<>Working tools from <span className="italic">our practice.</span></>}
            lede="Frameworks, worksheets, and templates we use with clients, available to the wider author community."
          />
          <Link to="/resources" className="text-sm text-gold inline-flex items-center gap-1">
            Browse resources <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((i) => (
            <Link
              key={i}
              to="/resources"
              className="group flex items-center justify-between gap-4 hairline-t pt-5 pb-5"
            >
              <span className="font-serif text-lg group-hover:text-gold transition">{i}</span>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-gold transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad-lg hairline-t bg-[var(--section-alt)]">
      <div className="container-editorial text-center">
        <Eyebrow gold>Begin the conversation</Eyebrow>
        <h2 className="mt-8 display-1 max-w-[16ch] mx-auto">
          Build a career your <span className="italic text-gradient-gold">readers</span> return to.
        </h2>
        <p className="mt-8 lede max-w-2xl mx-auto">
          Every engagement begins with a discovery call. We'll walk through your goals,
          your catalog, and whether GrowthSpark Impact is the right partner for the
          next stage of your author career.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-gold">
            Book a Discovery Call <ArrowRight size={16} />
          </Link>
          <Link to="/audit" className="btn-ghost">Free Visibility Audit</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */

function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <WhoWeHelp />
      <Philosophy />
      <Method />
      <FeaturedServices />
      <RealClientWork />
      <CaseStudyHighlights />
      <LeadershipTeaser />
      <Partnerships />
      <Insights />
      <Testimonials />
      <Resources />
      <FinalCTA />
    </>
  );
}
