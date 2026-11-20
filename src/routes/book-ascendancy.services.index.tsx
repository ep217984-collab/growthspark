import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { bookAscendancyPrograms } from "@/lib/book-ascendancy";

export const Route = createFileRoute("/book-ascendancy/services/")({
  head: () => ({
    meta: [
      { title: "Book Ascendancy Services — Featured Literary Partner of GrowthSpark Impact" },
      { name: "description", content: "Explore Book Ascendancy Book Club's twelve author programs: interviews, spotlights, newspaper features, book tours, reader discussions, Q&As, and community features." },
      { property: "og:title", content: "Book Ascendancy Services — Author Programs" },
      { property: "og:description", content: "Twelve curated programs connecting authors with engaged readers through Book Ascendancy Book Club." },
      { tagName: "link", rel: "canonical", href: "https://growthsparkimpact.lovable.app/book-ascendancy/services" },
    ],
  }),
  component: BookAscendancyServices,
});

function BookAscendancyServices() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Book Ascendancy · Partner Services
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Programs designed to connect authors with <span className="text-gradient-gold italic">engaged readers.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Book Ascendancy Book Club offers a curated selection of twelve author programs:
            editorial features, reader discussions, community campaigns, and literary
            community contributions. Each program is designed to complement an author's
            broader growth strategy with meaningful, reader-first experiences.
          </p>
        </div>
      </section>

      {/* PROGRAM GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">The Twelve Programs</span>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookAscendancyPrograms.map((p, i) => (
              <Link
                key={p.slug}
                to="/book-ascendancy/services/$slug"
                params={{ slug: p.slug }}
                className="group surface-card rounded-2xl p-7 flex flex-col hover:border-gold/50 transition"
              >
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {p.kicker}
                </div>
                <h2 className="mt-4 font-serif text-2xl leading-tight group-hover:text-gold transition-colors">
                  {p.name}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm flex-1">
                  {p.whatItIs}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-gold text-sm">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[oklch(0.308_0.034_127_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Next Step</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Not sure which program fits your book?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            GrowthSpark Impact can help evaluate the right Book Ascendancy program based on your
            genre, stage, and reader strategy, as part of a broader author growth plan.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link to="/partnerships" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              All Partnerships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
