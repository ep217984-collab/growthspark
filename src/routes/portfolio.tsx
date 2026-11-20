import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Real Client Work | GrowthSpark Impact" },
      { name: "description", content: "Real client work from GrowthSpark Impact: book trailer projects, Amazon optimization reports, author growth roadmaps, social media branding, launch campaigns, and reader acquisition programs." },
      { property: "og:title", content: "Real Client Work, GrowthSpark Impact" },
      { property: "og:description", content: "Selected author growth programs from our boutique studio. Challenge, process, deliverables, outcomes." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/portfolio" }],
  }),
  component: Portfolio,
});

type Project = {
  category: string;
  title: string;
  genre?: string;
  challenge: string;
  objectives: string[];
  process: string[];
  deliverables: string[];
  outcomes: string[];
  visual: { kind: "video" | "mockup" | "report" | "brand"; label: string };
};

const projects: Project[] = [
  {
    category: "Book Trailer Project",
    title: "Cinematic Launch Trailer, Literary Fiction",
    genre: "Literary Fiction",
    challenge:
      "A literary fiction author preparing for launch needed promotional video assets that matched the emotional weight of the book and could carry the campaign across social platforms.",
    objectives: [
      "Translate the book's tone into a 60-second cinematic trailer",
      "Produce platform-specific cutdowns for Instagram, TikTok, and YouTube",
      "Support a coordinated pre-launch and release-week push",
    ],
    process: [
      "Creative direction session with the author",
      "Script, storyboard, and shot list",
      "Production, editing, sound design, and color",
      "Vertical, square, and horizontal cutdowns",
      "Launch integration with paid and organic campaigns",
    ],
    deliverables: [
      "Hero 60-second trailer",
      "15-second and 30-second social cuts",
      "Vertical and square format variants",
      "Static key frames for ad creative",
    ],
    outcomes: [
      "Notable lift in pre-order momentum",
      "Stronger engagement across launch-week social",
      "Reusable evergreen creative for ongoing ads",
    ],
    visual: { kind: "video", label: "Trailer Reel" },
  },
  {
    category: "Amazon Optimization Report",
    title: "Backlist Amazon Optimization, Mystery Series",
    genre: "Mystery / Thriller",
    challenge:
      "An established author's mystery backlist was underperforming relative to traffic. Listings were dated, metadata was thin, and series read-through was leaking.",
    objectives: [
      "Improve organic discoverability across the series",
      "Lift conversion on existing detail-page traffic",
      "Tighten series read-through from Book 1 forward",
    ],
    process: [
      "Full keyword and category research",
      "Backend metadata rebuild across all titles",
      "A+ content and series-page redesign",
      "Copy and hook refinement for each blurb",
      "Performance tracking and iterative tuning",
    ],
    deliverables: [
      "Comprehensive Amazon Optimization Report",
      "Updated metadata and category mapping",
      "Refreshed A+ content across the series",
      "Rewritten blurbs and hooks",
    ],
    outcomes: [
      "Meaningful organic ranking lift across keywords",
      "Higher conversion on existing detail-page traffic",
      "Stronger reader read-through into later titles",
    ],
    visual: { kind: "report", label: "Optimization Report" },
  },
  {
    category: "Author Growth Roadmap",
    title: "12-Month Growth Roadmap, Romance Author",
    genre: "Contemporary Romance",
    challenge:
      "A multi-book romance author had momentum but no clear plan. Decisions were reactive, launches were inconsistent, and growth felt episodic instead of compounding.",
    objectives: [
      "Replace reactive marketing with a structured plan",
      "Sequence the next 12 months of releases and campaigns",
      "Install systems that compound across launches",
    ],
    process: [
      "Goal-setting and stage assessment",
      "Audience and catalog analysis",
      "Priority and sequencing workshop",
      "Roadmap drafting, review, and finalization",
      "Implementation guidance",
    ],
    deliverables: [
      "30-Day Strategic Plan",
      "60-Day Growth Roadmap",
      "90-Day Visibility Blueprint",
      "12-Month Reader Acquisition Strategy",
    ],
    outcomes: [
      "Clear direction across the next four releases",
      "Consistent monthly growth rituals in place",
      "Compounding visibility quarter over quarter",
    ],
    visual: { kind: "report", label: "Roadmap Document" },
  },
  {
    category: "Social Media Branding Project",
    title: "Author Brand System, Memoirist",
    genre: "Memoir",
    challenge:
      "A debut memoirist had no consistent visual or verbal identity across profiles, banners, and content. Reader recognition was low and trust signals were inconsistent.",
    objectives: [
      "Establish a cohesive author brand across platforms",
      "Strengthen reader recognition and trust",
      "Create a sustainable content rhythm",
    ],
    process: [
      "Brand and voice discovery",
      "Visual identity and banner design",
      "Profile optimization across platforms",
      "Content pillars and editorial calendar",
      "Handover with engagement playbook",
    ],
    deliverables: [
      "Brand identity guidelines",
      "Optimized profiles and banners",
      "Content calendar for the first 90 days",
      "Reader engagement framework",
    ],
    outcomes: [
      "A unified, recognizable author presence",
      "Higher engagement on new content",
      "Clearer reader-to-subscriber conversion",
    ],
    visual: { kind: "brand", label: "Brand Mockups" },
  },
  {
    category: "Launch Strategy Campaign",
    title: "Release-Week War Room, Fantasy Debut",
    genre: "Fantasy",
    challenge:
      "A debut fantasy author with a small list needed a structured launch that would extend beyond release week and create lasting momentum.",
    objectives: [
      "Build a disciplined 90-day launch runway",
      "Coordinate ads, email, ARC, and creator outreach",
      "Install post-launch systems for sustained visibility",
    ],
    process: [
      "Pre-launch positioning and runway design",
      "Campaign sequencing across channels",
      "Release-week orchestration",
      "Post-launch momentum systems",
      "30/60/90 performance review",
    ],
    deliverables: [
      "Launch Calendar and Promotional Timeline",
      "Reader Acquisition Plan",
      "Visibility Strategy and Campaign Roadmap",
      "Post-Launch Growth Framework",
    ],
    outcomes: [
      "Top subgenre rank achieved within launch window",
      "Email list grew several multiples through launch",
      "Sustained sales rhythm long after release week",
    ],
    visual: { kind: "mockup", label: "Launch Dashboard" },
  },
  {
    category: "Reader Acquisition Project",
    title: "Creator & Community Outreach, Children's Book",
    genre: "Children's",
    challenge:
      "A beautifully produced children's book had strong distribution but was invisible to the parents, educators, and creators who would champion it.",
    objectives: [
      "Identify the right communities and creators",
      "Build trusted third-party advocacy",
      "Create durable platform reach with educators",
    ],
    process: [
      "Audience and niche mapping",
      "Outreach list curation",
      "Personalized creator and educator outreach",
      "Partnership coordination and ARC support",
      "Reporting and relationship maintenance",
    ],
    deliverables: [
      "Curated outreach lists",
      "Personalized outreach sequences",
      "ARC and partnership coordination",
      "Audience expansion strategy document",
    ],
    outcomes: [
      "Multiple school and library adoptions",
      "Ongoing creator and educator partnerships",
      "A durable reader platform built around the book",
    ],
    visual: { kind: "mockup", label: "Outreach Snapshot" },
  },
];

function VisualPlaceholder({ kind, label }: Project["visual"]) {
  return (
    <div className="aspect-[16/9] w-full rounded-xl border border-[oklch(1_0_0_/_0.08)] bg-[oklch(0.2_0.012_250)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,oklch(0.74_0.108_82_/_0.25),transparent_60%)]" />
      <div className="relative text-center">
        <div className="text-[10px] uppercase tracking-[0.28em] text-gold/80">{kind}</div>
        <div className="mt-2 font-serif text-2xl text-foreground/80">{label}</div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Confidential preview</div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <>
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Real Client Work
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Proof, not <span className="text-gradient-gold italic">promises.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A curated selection of book trailer projects, Amazon optimization
            reports, author growth roadmaps, branding programs, launch campaigns,
            and reader acquisition work delivered for serious authors.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground italic">
            Certain project details have been modified or partially redacted to
            protect client confidentiality while accurately representing the
            scope of work delivered.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6 space-y-10">
          {projects.map((p) => (
            <article key={p.title} className="surface-card rounded-2xl p-8 md:p-10 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <VisualPlaceholder kind={p.visual.kind} label={p.visual.label} />
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em]">
                  <span className="text-gold">{p.category}</span>
                  {p.genre && (
                    <>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{p.genre}</span>
                    </>
                  )}
                </div>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl">{p.title}</h3>
              </div>

              <div className="md:col-span-7 grid sm:grid-cols-2 gap-6 text-sm leading-relaxed">
                <div className="sm:col-span-2">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Challenge</div>
                  <p className="mt-1 text-foreground/85">{p.challenge}</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Objectives</div>
                  <ul className="mt-2 space-y-1.5">
                    {p.objectives.map((o) => (
                      <li key={o} className="flex gap-2 text-foreground/85">
                        <Check size={14} className="text-gold shrink-0 mt-1" /> {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Process</div>
                  <ol className="mt-2 space-y-1.5">
                    {p.process.map((step, i) => (
                      <li key={step} className="flex gap-2 text-foreground/85">
                        <span className="text-gold font-serif w-4 shrink-0">{i + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Deliverables</div>
                  <ul className="mt-2 space-y-1.5">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex gap-2 text-foreground/85">
                        <Check size={14} className="text-gold shrink-0 mt-1" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Outcomes</div>
                  <ul className="mt-2 space-y-1.5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-foreground/90 font-medium">
                        <Check size={14} className="text-gold shrink-0 mt-1" /> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)] bg-[oklch(0.18_0.012_250)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Want to see what we'd build for your book?</h2>
          <p className="mt-4 text-muted-foreground text-lg">Start with a discovery call or a free visibility audit.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Book a Discovery Call <ArrowRight size={16} />
            </Link>
            <Link to="/audit" className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              Free Visibility Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
