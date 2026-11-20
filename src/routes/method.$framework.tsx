import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

type Framework = {
  slug: string;
  name: string;
  tag: string;
  purpose: string;
  methodology: string[];
  application: string[];
  outcomes: string[];
  example: string;
};

const frameworks: Record<string, Framework> = {
  "reader-gravity": {
    slug: "reader-gravity",
    name: "Reader Gravity™",
    tag: "Discoverability & attraction",
    purpose:
      "Reader Gravity is our model for how the right reader is pulled toward the right book at the right moment. It reframes discoverability as a system of forces, category, cover, hook, social proof, price, and placement, rather than a single lever.",
    methodology: [
      "Map the seven attraction forces around the title",
      "Score current gravity across each force",
      "Prioritize the smallest set of changes with the largest lift",
      "Deploy, measure, and iterate on a 30-day cadence",
    ],
    application: [
      "New releases entering competitive subgenres",
      "Backlist titles with traffic but weak conversion",
      "Series relaunches and repositioning campaigns",
    ],
    outcomes: [
      "Higher organic detail-page conversion",
      "Improved category rank durability",
      "Reduced dependency on paid acquisition",
    ],
    example:
      "A mystery series with strong reviews but weak conversion regained category presence after a Reader Gravity audit rebuilt the cover system, category map, and A+ content in a coordinated release.",
  },
  "story-signal": {
    slug: "story-signal",
    name: "Story Signal™",
    tag: "Positioning & hook",
    purpose:
      "Story Signal is our positioning framework. It defines the single, defensible claim a book makes to its ideal reader, the one line that separates it from its category and makes it worth choosing.",
    methodology: [
      "Interrogate the book's promise, tone, and reader payoff",
      "Study category conventions and comparative signals",
      "Draft and test three candidate positions",
      "Codify the winning position into copy, cover, and campaign",
    ],
    application: [
      "Pre-launch positioning for debut titles",
      "Repositioning of underperforming backlist",
      "Author brand-level positioning across multiple books",
    ],
    outcomes: [
      "A single, defensible position expressed everywhere the book appears",
      "Clearer creative direction across trailer, cover, and copy",
      "Faster reader qualification and stronger conversion",
    ],
    example:
      "A literary fiction debut moved from an ambiguous 'coming-of-age' framing to a specific emotional promise, which then drove the trailer, cover system, and blurb, lifting pre-order momentum meaningfully.",
  },
  "literary-intelligence": {
    slug: "literary-intelligence",
    name: "Literary Intelligence™",
    tag: "Research & data",
    purpose:
      "Literary Intelligence is how we turn category, comp title, keyword, and reader data into strategic decisions. It is the analytical layer that keeps opinion honest and prevents wishful thinking from shaping campaigns.",
    methodology: [
      "Structured category and subcategory landscape mapping",
      "Comp title selection and pattern analysis",
      "Keyword clustering and intent modeling",
      "Reader review mining for language and objections",
    ],
    application: [
      "Category and metadata decisions on Amazon",
      "Ad targeting and creative angle selection",
      "Pricing and promotional cadence design",
    ],
    outcomes: [
      "Better category placement decisions",
      "Sharper ad copy grounded in real reader language",
      "Confidence at the decisions that matter most",
    ],
    example:
      "A romance author's backlist rebuild was sequenced entirely on Literary Intelligence findings, including a category migration that lifted organic rank across the series.",
  },
  "audience-echo": {
    slug: "audience-echo",
    name: "Audience Echo™",
    tag: "Word-of-mouth & lifecycle",
    purpose:
      "Audience Echo is our framework for engineering word-of-mouth. It treats readers as a compounding asset, mapping how enthusiasm is created, captured, and returned to the author's system across every release.",
    methodology: [
      "Reader lifecycle mapping from discovery to advocacy",
      "ARC and community program design",
      "Email and community architecture",
      "Systems for capturing and re-activating enthusiasm",
    ],
    application: [
      "Debut authors building their first reader base",
      "Established authors converting readers into subscribers",
      "Series authors improving read-through and reviews",
    ],
    outcomes: [
      "Larger, healthier owned audience",
      "Improved review velocity and quality",
      "Reader base that compounds across releases",
    ],
    example:
      "A fantasy debut's launch used Audience Echo to convert release-week readers into an active email community, several multiples larger by launch end.",
  },
  "book-velocity": {
    slug: "book-velocity",
    name: "Book Velocity™",
    tag: "Launch & momentum",
    purpose:
      "Book Velocity is our launch framework. It converts the finite energy of release week into a sustained runway, sequencing pre-launch, launch, and post-launch activity into one continuous motion.",
    methodology: [
      "90-day runway design across ads, email, ARC, and creators",
      "Release-week orchestration",
      "Post-launch momentum systems",
      "30 / 60 / 90 performance review",
    ],
    application: [
      "Debut and second-book launches",
      "Series continuation launches",
      "Backlist relaunches and box-set introductions",
    ],
    outcomes: [
      "Higher launch-window rank and durability",
      "Sustained sales rhythm after launch week",
      "A repeatable launch playbook for future titles",
    ],
    example:
      "A fantasy debut hit top subgenre rank inside the launch window, then sustained a steady sales rhythm well past release month using the Book Velocity post-launch system.",
  },
};

export const Route = createFileRoute("/method/$framework")({
  loader: ({ params }) => {
    const f = frameworks[params.framework];
    if (!f) throw notFound();
    return { framework: f };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Framework | GrowthSpark Method" }, { name: "robots", content: "noindex" }] };
    const f = loaderData.framework;
    return {
      meta: [
        { title: `${f.name}, The GrowthSpark Method` },
        { name: "description", content: f.purpose.slice(0, 155) },
        { property: "og:title", content: `${f.name}, GrowthSpark Method` },
        { property: "og:description", content: f.purpose.slice(0, 155) },
        { property: "og:url", content: `https://growthsparkimpact.lovable.app/method/${params.framework}` },
      ],
      links: [{ rel: "canonical", href: `https://growthsparkimpact.lovable.app/method/${params.framework}` }],
    };
  },
  component: FrameworkPage,
  notFoundComponent: FrameworkNotFound,
});

function FrameworkNotFound() {
  return (
    <section className="section-pad-lg">
      <div className="container-editorial text-center">
        <div className="eyebrow-gold justify-center"><span className="rule-gold" />Not found</div>
        <h1 className="mt-6 display-2">This framework doesn't exist.</h1>
        <Link to="/method" className="mt-8 btn-ghost inline-flex">Back to the Method</Link>
      </div>
    </section>
  );
}

function FrameworkPage() {
  const { framework: f } = Route.useLoaderData();
  const others = Object.values(frameworks).filter((x) => x.slug !== f.slug);

  return (
    <>
      <section className="hairline-b">
        <div className="container-editorial pt-32 md:pt-40 pb-24">
          <Link to="/method" className="text-xs uppercase tracking-[0.24em] text-muted-foreground hover:text-gold">
            ← The GrowthSpark Method
          </Link>
          <div className="mt-8 eyebrow-gold"><span className="rule-gold" />{f.tag}</div>
          <h1 className="mt-6 display-1">{f.name}</h1>
          <p className="mt-8 lede max-w-2xl">{f.purpose}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-editorial grid lg:grid-cols-2 gap-10">
          <Card title="Methodology" items={f.methodology} numbered />
          <Card title="Application" items={f.application} />
          <Card title="Expected Outcomes" items={f.outcomes} gold />
          <div className="surface-card rounded-2xl p-10">
            <div className="eyebrow-gold"><span className="rule-gold" />Example</div>
            <p className="mt-6 font-serif text-2xl leading-snug">{f.example}</p>
          </div>
        </div>
      </section>

      <section className="section-pad hairline-t bg-[oklch(0.18_0.012_250)]">
        <div className="container-editorial">
          <div className="eyebrow"><span className="rule-gold" />Related frameworks</div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/method/$framework"
                params={{ framework: o.slug }}
                className="surface-card rounded-2xl p-6 hover:border-gold/40 transition"
              >
                <div className="font-serif text-xl">{o.name}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{o.tag}</div>
              </Link>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-gold">
              Apply this framework to your book <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ title, items, numbered, gold }: { title: string; items: string[]; numbered?: boolean; gold?: boolean }) {
  return (
    <div className="surface-card rounded-2xl p-10">
      <div className={gold ? "eyebrow-gold" : "eyebrow"}>
        <span className="rule-gold" />
        {title}
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((s, i) => (
          <li key={s} className="flex gap-3 text-foreground/90 leading-relaxed">
            {numbered ? (
              <span className="font-serif text-gold w-6 shrink-0">{i + 1}.</span>
            ) : (
              <Check size={16} className="text-gold mt-1 shrink-0" />
            )}
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
