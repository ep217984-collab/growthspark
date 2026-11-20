import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { team, teamIntro } from "@/lib/team";



export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | GrowthSpark Impact" },
      { name: "description", content: "GrowthSpark Impact is a boutique author growth studio founded by Emmanuel to build reader-driven careers, not just campaigns." },
      { property: "og:title", content: "About, GrowthSpark Impact" },
      { property: "og:description", content: "Boutique author growth studio. Senior strategy. Long-term reader systems." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> The Studio
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            A studio built for <span className="text-gradient-gold italic">authors who take their careers seriously.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            GrowthSpark Impact is a boutique author growth studio. We don't run
            generic marketing campaigns. We engineer reader acquisition systems,
            positioning strategy, and long-term growth infrastructure for serious
            authors and publishing brands.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-24">
        <div className="mx-auto max-w-[1140px] px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="surface-card rounded-2xl p-10 border border-[oklch(0.236_0.047_306_/_0.15)]">
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Founder</div>
              <div className="mt-4 font-serif text-3xl leading-tight">Emmanuel Promise</div>
              <div className="mt-2 text-sm text-muted-foreground">Founder & Lead Growth Strategist</div>
              <div className="mt-6 h-px w-12 bg-gold/50" />
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Sets the strategic direction on every account and is personally on the first call of every engagement.
              </p>
            </div>
          </div>


          <div className="md:col-span-7 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Founder Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2 leading-tight">Why GrowthSpark exists.</h2>
            <p>
              I founded GrowthSpark Impact after watching too many talented authors
              release important work into silence. The writing wasn't the problem.
              The positioning was wrong, the discovery was broken, and there was no
              system quietly working in the background once launch week ended.
            </p>
            <p>
              I started this studio to close that gap, to bring senior-level growth
              thinking to authors the way it has long been available to startups and
              consumer brands. The same rigor. The same systems. None of the bloat.
            </p>
            <p>
              Today we work with a deliberately small roster of authors and publishing
              brands. We are senior by design, boutique by choice, and honest by
              policy. A book is not a campaign. It is a career. We build for that.
            </p>
            <p className="text-foreground">
             , Emmanuel
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">What Drives Us</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Principles that shape every decision.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              ["Mission", "To ensure no great book dies in silence. We help authors reach the readers their work was written for, and build the systems that keep those readers returning."],
              ["Vision", "To be the most trusted growth partner for serious authors worldwide, the studio quietly behind careers that compound for decades."],
              ["Values", "Integrity over hype. Craft over noise. Senior strategy on every account. Transparent reporting. Honest pricing. Authors first, always."],
              ["Long-Term Commitment", "We optimize for the career, not the calendar week. Launches matter. Backlists matter more."],
              ["Author First", "Every plan is built around your voice, your book, and your goals. We never force a template, and we never chase trends that don't fit your work."],
              ["Honest Numbers", "We report what worked, what didn't, and what we'd do next. No vanity metrics. No theater."],
            ].map(([t, b]) => (
              <div key={t} className="surface-card rounded-2xl p-8">
                <h3 className="font-serif text-2xl text-gold">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / DIVISIONS */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">{teamIntro.eyebrow}</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">{teamIntro.title}</h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              {teamIntro.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <article
                key={m.name}
                className="surface-card rounded-2xl p-8 flex flex-col border border-[oklch(0.236_0.047_306_/_0.15)] hover:border-gold/40 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{m.division}</div>
                <h3 className="mt-4 font-serif text-2xl leading-tight">{m.name}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{m.role}</div>
                <div className="mt-5 h-px w-12 bg-gold/50" />
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed flex-1">{m.bio}</p>
              </article>
            ))}
          </div>

        </div>

      </section>

      {/* MORE THAN A MARKETING AGENCY */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1140px] px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Beyond Marketing</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">More than a marketing agency.</h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              GrowthSpark Impact is built on the belief that author success requires more than
              isolated marketing campaigns.
            </p>
            <p>
              Our team combines strategic consulting, creative execution, technical expertise,
              and trusted industry relationships to build systems that support authors throughout
              every stage of their publishing journey.
            </p>
            <p className="text-foreground">
              We believe the future of author growth is collaborative, data-informed, and
              reader-focused. This philosophy guides every recommendation, every partnership,
              and every engagement.
            </p>
            <div className="pt-4">
              <Link to="/partnerships" className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all">
                Explore our Strategic Partnerships <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT / CTA */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Our Commitment</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            We choose every engagement. We then build it like it's our own.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            We don't take on more authors than we can serve well. If we're a fit, we go deep. If we're not, we'll tell you, and we'll point you to who is.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border border-[oklch(0.236_0.047_306_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
