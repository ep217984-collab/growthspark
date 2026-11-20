import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | GrowthSpark Impact" },
      { name: "description", content: "Honest reactions from authors we've worked with. No scripts, no exaggerations." },
      { property: "og:title", content: "Author Testimonials, GrowthSpark Impact" },
      { property: "og:description", content: "Plain, honest words from authors we have worked with." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/testimonials" }],
  }),
  component: Testimonials,
});

const items = [
  { quote: "I had almost given up on marketing my debut. They rewrote my blurb, fixed my categories, and finally my sales became predictable. Nothing flashy, just things that actually worked.", who: "Fantasy Author" },
  { quote: "They treated my backlist as a system, not a single launch. Six months in, revenue is meaningfully up and more importantly steady.", who: "Romance Author" },
  { quote: "They understood that a children's book needs to reach parents and educators in very specific ways. The outreach felt thoughtful, the creative tasteful, and the results earned.", who: "Children's Author" },
  { quote: "What I appreciated most was the honesty. They told me when an idea wouldn't work, when to pause spend, and when to push. That kind of straight talk is hard to find.", who: "Thriller Author" },
  { quote: "I came in expecting big promises. Instead I got a calm, organized plan, weekly reporting, and a small group of creators who genuinely connected with my memoir.", who: "Memoir Author" },
  { quote: "Their pre-launch work for my sci-fi release was the difference between a quiet drop and a real release week.", who: "Sci-Fi Author" },
  { quote: "I'm a working author, not a marketer. They let me stay in the writing while they handled the strategy. That space alone was worth the engagement.", who: "Literary Fiction Author" },
  { quote: "No theater. No vanity metrics. Clean numbers, sensible decisions, and a team that actually reads books. That is rare, and it shows in the work.", who: "Nonfiction Author" },
];

function Testimonials() {
  return (
    <>
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> In Their Words
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            What the authors we work with <span className="text-gradient-gold italic">actually say.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Plain language, real reactions, no scripts. Identifying details are
            omitted out of respect for the writers we serve.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((t) => (
              <figure key={t.who} className="surface-card rounded-2xl p-8">
                <Quote className="text-gold" size={20} />
                <blockquote className="mt-4 leading-relaxed text-foreground/90 text-[15px]">"{t.quote}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-[oklch(0.308_0.034_127_/_0.16)] text-[11px] uppercase tracking-[0.22em] text-gold">{t.who}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto surface-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl">A note on these testimonials</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We do not publish author names. Many of our clients write under pen
              names, and almost all prefer that their marketing work stay private.
              What you read here are real responses, lightly edited for clarity,
              presented by genre only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
