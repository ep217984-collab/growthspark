import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Sparkles, ShieldCheck, MessagesSquare, Newspaper } from "lucide-react";

export const Route = createFileRoute("/book-ascendancy/")({
  head: () => ({
    meta: [
      { title: "Book Ascendancy Book Club — Featured Literary Partner of GrowthSpark Impact" },
      { name: "description", content: "Book Ascendancy Book Club is a reader-focused literary community and GrowthSpark Impact's featured literary partner, creating meaningful opportunities for authors to connect with engaged readers." },
      { property: "og:title", content: "Book Ascendancy Book Club — Featured Literary Partner" },
      { property: "og:description", content: "An independent literary community partnering with GrowthSpark Impact to connect authors with engaged readers." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/book-ascendancy" }],
  }),
  component: BookAscendancy,
});

function BookAscendancy() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Featured Literary Partner
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Book Ascendancy <span className="text-gradient-gold italic">Book Club.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            A reader-focused literary community dedicated to discovering exceptional books,
            celebrating authors, and creating thoughtful conversations between writers and
            readers. Book Ascendancy is an independent partner of GrowthSpark Impact — its
            programs complement, but stand apart from, our consulting engagements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book-ascendancy/services" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Explore Partner Services <ArrowRight size={16} />
            </Link>
            <Link to="/partnerships" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              Back to Partnerships
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="mx-auto max-w-[1140px] px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-2xl surface-card flex flex-col items-center justify-center p-10 text-center">
              <BookOpen className="text-gold" size={48} />
              <div className="mt-8 font-serif text-3xl leading-tight">Book Ascendancy<br />Book Club</div>
              <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold border border-gold/40 rounded-full px-3 py-1">
                <ShieldCheck size={12} /> Independent Literary Partner
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">About the Partner</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2 leading-tight">A community built around readers.</h2>
            <p>
              Book Ascendancy Book Club exists to help readers discover thoughtful, well-crafted
              books and to give authors a genuine setting in which to share the story behind
              their work.
            </p>
            <p>
              Through its partnership with GrowthSpark Impact, the book club offers a range of
              opportunities that complement an author's broader growth strategy — helping build
              authentic reader relationships that endure well beyond a single launch.
            </p>
            <p className="text-foreground">
              Book Ascendancy operates independently. Participation is curated, editorial, and
              reader-first.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IT OFFERS */}
      <section className="py-24 border-t border-[oklch(0.308_0.034_127_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Programs & Experiences</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">What Book Ascendancy offers.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { Icon: Newspaper, t: "Editorial Features", b: "Author interviews, literary spotlights, and newspaper-style features that give each book a considered editorial treatment." },
              { Icon: MessagesSquare, t: "Reader Discussions", b: "Moderated conversations and Q&As that create meaningful contact between authors and engaged readers." },
              { Icon: Users, t: "Community Campaigns", b: "Book-of-the-month features, community reading initiatives, and curated recommendation programs." },
              { Icon: BookOpen, t: "Author Showcases", b: "Bibliography-wide showcases that introduce readers to an author's full body of work." },
              { Icon: Sparkles, t: "Roundtables & Panels", b: "Multi-author conversations about writing, publishing, and reader engagement." },
              { Icon: ShieldCheck, t: "Resource Library", b: "A growing library of reading guides, author resources, and literary commentary for the community." },
            ].map(({ Icon, t, b }) => (
              <div key={t} className="surface-card rounded-2xl p-8">
                <Icon className="text-gold" size={22} />
                <h3 className="mt-5 font-serif text-2xl">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link to="/book-ascendancy/services" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
              See the full list of services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Get Involved</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Interested in Book Ascendancy for your book?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            GrowthSpark Impact can help evaluate whether a Book Ascendancy program is a fit for
            your current stage, genre, and reader strategy.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link to="/book-ascendancy/services" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
