import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/editorial/why-we-feature")({
  head: () => ({
    meta: [
      { title: "Why We Feature Authors — GrowthSpark Editorial" },
      { name: "description", content: "Our editorial philosophy. GrowthSpark Editorial does not feature every book. Here is how we choose." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/why-we-feature" }],
  }),
  component: WhyWeFeature,
});

function WhyWeFeature() {
  const criteria = [
    { title: "Exceptional storytelling", body: "The prose earns the reader's attention on the page, not through marketing." },
    { title: "Originality", body: "The book adds something the shelf did not already have." },
    { title: "Reader impact", body: "The book stays with the reader after the last page. We look for the ones that linger." },
    { title: "Literary quality", body: "Whatever the genre, the writing is treated with respect." },
    { title: "Strong themes", body: "The book has something to say, and says it with intention." },
    { title: "Meaningful contribution", body: "The book contributes something to today's literary landscape, whether commercial, cultural, or quietly personal." },
  ];

  return (
    <>
      <section className="border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-20">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Editorial Philosophy</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
            We do not feature every book. That is the point.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            GrowthSpark Editorial is a curated publication. Every feature is earned, not purchased. When our editors choose to publish a piece on a book, it is because we believe the work deserves to be read.
          </p>
        </div>
      </section>

      <section className="py-20 border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">How We Choose</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Our editorial criteria.</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((c) => (
              <div key={c.title} className="surface-card rounded-2xl p-7">
                <h3 className="font-serif text-xl text-gold">{c.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-[oklch(0.236_0.047_306_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto text-gold" size={32} />
          <blockquote className="mt-6 font-serif text-2xl md:text-3xl italic leading-tight">
            "GrowthSpark Editorial maintains complete editorial independence. While some featured authors are GrowthSpark clients and others are independently selected, every article reflects our genuine appreciation for outstanding storytelling. Editorial opinions remain our own."
          </blockquote>
          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">The GrowthSpark Editorial Team</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Read the Publication</span>
          <h2 className="mt-3 font-serif text-4xl leading-tight">Start with our featured authors.</h2>
          <Link to="/editorial/featured-authors" className="mt-10 inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
            Browse Featured Authors <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
