import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Network, TrendingUp, Sparkles, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Strategic Partnerships — GrowthSpark Impact" },
      { name: "description", content: "GrowthSpark Impact collaborates with respected literary organizations, reader communities, and publishing professionals to help authors build sustainable careers." },
      { property: "og:title", content: "Strategic Partnerships — GrowthSpark Impact" },
      { property: "og:description", content: "Trusted partnerships across the publishing ecosystem, including Book Ascendancy Book Club." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/partnerships" }],
  }),
  component: Partnerships,
});

function Partnerships() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Strategic Partnerships
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Meaningful partnerships build <span className="text-gradient-gold italic">lasting author careers.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            GrowthSpark Impact believes the strongest author careers are built through trusted
            relationships and consistent strategic execution. By collaborating with respected
            literary organizations, reader communities, and publishing professionals, we help
            authors extend their reach, strengthen reader relationships, and build sustainable
            careers beyond a single book launch.
          </p>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Every partnership is carefully selected based on shared values of integrity,
            professionalism, and a genuine commitment to helping authors succeed.
          </p>
        </div>
      </section>

      {/* FEATURED PARTNER */}
      <section className="py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold">
            <Sparkles size={14} /> Featured Strategic Partner
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Book Ascendancy Book Club</h2>

          <div className="mt-12 surface-card rounded-3xl p-10 md:p-14 grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="aspect-square rounded-2xl border border-[oklch(0.308_0.034_127_/_0.18)] bg-[oklch(0.308_0.034_127_/_0.05)] flex flex-col items-center justify-center text-center p-8">
                <BookOpen className="text-gold" size={44} />
                <div className="mt-6 font-serif text-2xl leading-tight">Book Ascendancy<br />Book Club</div>
                <div className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold border border-gold/40 rounded-full px-3 py-1">
                  <ShieldCheck size={12} /> Official Partner
                </div>
              </div>
            </div>
            <div className="md:col-span-8">
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Partnership Overview</span>
              <h3 className="mt-3 font-serif text-3xl leading-tight">Official Strategic Reader Community Partner</h3>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GrowthSpark Impact is proud to collaborate with Book Ascendancy Book Club,
                  a reader-focused literary community dedicated to connecting exceptional
                  books with engaged readers.
                </p>
                <p>
                  Through this partnership, authors may gain opportunities to participate in
                  reader discussions, promotional campaigns, community features, book
                  discovery initiatives, and literary engagement activities that complement
                  their broader growth strategy.
                </p>
                <p className="text-foreground">
                  Together, we share a common objective — helping outstanding books reach the
                  readers they were written for while fostering authentic relationships between
                  authors and literary communities.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/book-ascendancy"
                  className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition"
                >
                  Explore Book Ascendancy <ArrowRight size={14} />
                </Link>
                <Link to="/book-ascendancy/services" className="inline-flex items-center gap-2 border border-gold/60 text-gold px-6 py-3 rounded-full font-medium text-sm hover:bg-gold hover:text-primary-foreground transition">
                  View Partner Services <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNERSHIPS MATTER */}
      <section className="py-24 border-t border-[oklch(0.308_0.034_127_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Our Philosophy</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Why strategic partnerships matter.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              { Icon: Users, t: "Reader Communities", b: "Meaningful relationships begin with engaged readers. Strategic partnerships create opportunities for authentic discovery and lasting reader loyalty." },
              { Icon: Network, t: "Industry Collaboration", b: "Working alongside respected literary organizations allows authors to benefit from broader networks, shared expertise, and expanded visibility." },
              { Icon: TrendingUp, t: "Long-Term Growth", b: "GrowthSpark focuses on partnerships that contribute to sustainable author development rather than short-term promotional exposure." },
              { Icon: Sparkles, t: "A Connected Publishing Ecosystem", b: "By bringing together strategy, technology, creative execution, and literary communities, GrowthSpark provides authors with a more complete growth experience." },
            ].map(({ Icon, t, b }) => (
              <div key={t} className="surface-card rounded-2xl p-8">
                <Icon className="text-gold" size={22} />
                <h3 className="mt-5 font-serif text-2xl">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Partner With Us</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Building a connected publishing ecosystem.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            If your organization, community, or platform shares our commitment to author success,
            we'd welcome a conversation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Explore a Partnership <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              About the Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
