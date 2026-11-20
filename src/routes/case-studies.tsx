import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | GrowthSpark Impact" },
      { name: "description", content: "Detailed author growth case studies: problem, strategy, execution, timeline, results, and key learnings from real engagements." },
      { property: "og:title", content: "Case Studies, GrowthSpark Impact" },
      { property: "og:description", content: "Detailed consulting-grade case studies from our author engagements." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/case-studies" }],
  }),
  component: CaseStudies,
});

const studies = [
  {
    who: "Fantasy Author · Debut",
    title: "From Quiet Debut to a Real Reader Base",
    problem:
      "A first-time fantasy author arrived with a strong manuscript, almost no email list, no defined audience, and a six-month-old release that had quietly stalled. The author was close to self-funding another launch out of pocket with no clear plan for why book two would perform differently than book one.",
    strategy:
      "We re-anchored the book in its true subgenre, rewrote the blurb around the emotional hook readers actually buy, fixed the comp titles, and re-architected Amazon categories. We layered a focused Amazon Ads and BookBub program on top, paired with a simple welcome sequence and a clean author landing page.",
    execution:
      "Cover, blurb, and metadata audit. Category and keyword rebuild. 30-day ad ramp on two platforms with daily creative iteration in week one. Email welcome flow with three nurture emails. Landing page with one clear conversion goal. Weekly performance review.",
    timeline: "Month 1: foundation. Months 2, 4: paid ramp. Months 5, 6: lifecycle systems.",
    outcomes: [
      "The book was repositioned into the subgenre its readers actually browse",
      "A working email list replaced reliance on one-off promotion",
      "Advertising creative was iterated on evidence rather than guesswork",
      "Book two began from an existing readership instead of from zero",
    ],
    learnings:
      "The win wasn't a viral spike. It was a profitable, repeatable engine. By month six the book was running on autopilot, and pre-orders for book two were arriving before announcement.",
  },
  {
    who: "Romance Author · Established",
    title: "Reviving a Stagnant Backlist",
    problem:
      "An established romance author with six previously published titles had watched sales flatten over two years. Covers felt dated, blurbs no longer matched current reader expectations, and there was no working email program bringing existing readers back for new releases.",
    strategy:
      "We treated the catalog as a business, not an archive. The whole backlist was repositioned for current reader taste, refreshed visually, and stitched together as a series funnel that profitably pulls new readers into Book 1 and feeds them through the catalog in the right order.",
    execution:
      "Six-book cover refresh and blurb rewrite. Lifecycle email program with re-engagement, series progression, and new-release flows. Amazon Ads concentrated on Book 1. A+ content rebuilt across all six listings. Weekly read-through monitoring.",
    timeline: "Month 1, 2: catalog refresh. Months 3, 4: lifecycle build. Months 5, 6: optimization and read-through tuning.",
    outcomes: [
      "The catalogue was refreshed to match current reader expectations",
      "A series funnel replaced six unconnected listings",
      "Lifecycle email brought lapsed readers back for new releases",
      "Read-through, not single-title spikes, became the growth driver",
    ],
    learnings:
      "The lift was driven almost entirely by series read-through, not single-title hits. The backlist became a compounding asset that no longer depends on a launch to perform.",
  },
  {
    who: "Children's Author · Mid-list",
    title: "A Children's Book Finds Its Readers",
    problem:
      "A beautifully illustrated children's book had strong distribution but was invisible to the parents, teachers, and gift-buyers who would actually love it. Sales were dependent on the author's immediate network and going nowhere.",
    strategy:
      "Build a focused acquisition engine targeting parents and educators directly, supported by creator partnerships and a clear gift-buyer landing page that turns casual visitors into buyers.",
    execution:
      "Parenting blog and educator community outreach. Targeted advertising aimed at parents in the right age range. Creator partnerships with accounts that genuinely review books. Landing page with a free downloadable activity sheet and a short video reading.",
    timeline: "Month 1: outreach foundation. Months 2, 3: ad scaling. Months 4, 6: school and library expansion.",
    outcomes: [
      "Parents, teachers and gift buyers were addressed directly for the first time",
      "Outreach reached educator and parenting communities beyond the author's network",
      "A landing page with a free activity sheet gave visitors a reason to convert",
      "The author now owns a reader list and a launch-ready foundation for book two",
    ],
    learnings:
      "The author now owns the platform, an email list of parents and educators, a content engine, and a launch-ready foundation for book two without starting from zero.",
  },
];

function CaseStudies() {
  return (
    <>
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Case Studies
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
Real engagements. <span className="text-gradient-gold italic">Honestly told.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Consulting-grade case studies. Problem, strategy, execution, timeline,
            outcomes, and what we learned. We describe the work rather than quoting
            sales or performance figures we cannot publish.
          </p>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground italic">
            Certain details have been redacted to protect client confidentiality.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1140px] px-6 space-y-10">
          {studies.map((s) => (
            <article key={s.title} className="surface-card rounded-2xl p-8 md:p-12">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{s.who}</div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">{s.title}</h2>

              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <Section label="Problem" body={s.problem} />
                <Section label="Strategy" body={s.strategy} />
                <Section label="Execution" body={s.execution} />
                <Section label="Timeline" body={s.timeline} />
              </div>

              <div className="mt-8 rounded-xl bg-[oklch(0.308_0.034_127_/_0.05)] border border-[oklch(0.308_0.034_127_/_0.14)] p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Outcomes</div>
                <ul className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-gold">•</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-xl bg-[oklch(0.308_0.034_127_/_0.05)] border border-[oklch(0.308_0.034_127_/_0.14)] p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Key Learnings</div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.learnings}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-[oklch(0.308_0.034_127_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Curious what we'd build for your book?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Book a Discovery Call <ArrowRight size={16} />
            </Link>
            <Link to="/audit" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              Free Visibility Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{label}</div>
      <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
