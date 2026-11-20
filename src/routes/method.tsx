import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/method")({
  head: () => ({
    meta: [
      { title: "The GrowthSpark Method™ | Frameworks for Author Growth" },
      { name: "description", content: "Five proprietary consulting frameworks, Reader Gravity, Story Signal, Literary Intelligence, Audience Echo, and Book Velocity, that power every GrowthSpark engagement." },
      { property: "og:title", content: "The GrowthSpark Method™" },
      { property: "og:description", content: "Five proprietary frameworks. One integrated author growth system." },
      { property: "og:url", content: "https://growthsparkimpact.lovable.app/method" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/method" }],
  }),
  component: MethodHub,
});

const frameworks = [
  { slug: "reader-gravity", name: "Reader Gravity™", cat: "Visibility and Discovery Systems", d: "The forces that pull the right reader toward the right book at the right moment." },
  { slug: "story-signal", name: "Story Signal™", cat: "Messaging and Positioning", d: "Positioning that separates a title from its category and makes it findable." },
  { slug: "literary-intelligence", name: "Literary Intelligence™", cat: "Research and Analytics", d: "Category, comp title, and reader data translated into strategic decisions." },
  { slug: "audience-echo", name: "Audience Echo™", cat: "Community Building and Reader Engagement", d: "How word-of-mouth is engineered, measured, and sustained across releases." },
  { slug: "book-velocity", name: "Book Velocity™", cat: "Launch and Growth Systems", d: "The launch cadence and runway that converts momentum into a lasting presence." },
];


function MethodHub() {
  return (
    <>
      <section className="hairline-b">
        <div className="container-editorial pt-32 md:pt-44 pb-24">
          <div className="eyebrow-gold"><span className="rule-gold" />The GrowthSpark Method™</div>
          <h1 className="mt-8 display-1 max-w-[16ch]">
            Frameworks that make <span className="italic text-gradient-gold">strategy legible.</span>
          </h1>
          <p className="mt-8 lede max-w-2xl">
            Five proprietary frameworks form the intellectual infrastructure behind every
            GrowthSpark engagement. Each one is refined across genres, career stages, and
            reader audiences, and each one earns its place in your growth system.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl">
            <div className="surface-card rounded-2xl p-7">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Core Services</div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                What clients receive. Defined engagements with scoped deliverables, such as an
                Author Visibility Audit or a Goodreads Visibility Campaign.
              </p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-gold text-sm">
                View core services <ArrowRight size={14} />
              </Link>
            </div>
            <div className="surface-card rounded-2xl p-7">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold">The GrowthSpark Method™</div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                How GrowthSpark approaches the work. These are strategic frameworks, not products
                you buy. They shape the thinking inside every service we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="section-pad">
        <div className="container-editorial space-y-6">
          {frameworks.map((f, i) => (
            <Link
              key={f.slug}
              to="/method/$framework"
              params={{ framework: f.slug }}
              className="group surface-card rounded-2xl p-10 flex items-center justify-between gap-8 hover:border-gold/40 transition"
            >
              <div>
                <div className="font-serif text-gold/70 text-3xl">0{i + 1}</div>
                <div className="mt-4 font-serif text-3xl">{f.name}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{f.cat}</div>
                <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">{f.d}</p>
              </div>

              <ArrowRight className="text-muted-foreground group-hover:text-gold shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
