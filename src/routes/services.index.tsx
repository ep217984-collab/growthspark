import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { coreServices } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services & The GrowthSpark Method | GrowthSpark Impact" },
      { name: "description", content: "Core growth services and proprietary frameworks for serious authors. Visibility audits, Amazon optimization, growth roadmaps, launch strategy, and long-term reader systems." },
      { property: "og:title", content: "Author Growth Services | GrowthSpark Impact" },
      { property: "og:description", content: "Core services and proprietary frameworks engineered for long-term author careers." },
      { tagName: "link", rel: "canonical", href: "https://growthsparkimpact.lovable.app/services" },
    ],
  }),
  component: Services,
});

const method = [
  {
    name: "Reader Gravity™",
    discipline: "Visibility & Discovery Systems",
    body: "Focused on discoverability, positioning, audience alignment, and attracting the right readers to the right book at the right moment.",
  },
  {
    name: "Story Signal™",
    discipline: "Messaging & Positioning",
    body: "Focused on clarifying the value of the book, strengthening messaging, and improving reader resonance at every touchpoint.",
  },
  {
    name: "Literary Intelligence™",
    discipline: "Research & Analytics",
    body: "Focused on market research, competitive analysis, reader psychology, and the strategic decision-making behind every recommendation.",
  },
  {
    name: "Audience Echo™",
    discipline: "Reader Community & Engagement",
    body: "Focused on building meaningful reader relationships and encouraging long-term engagement across email, social, and community.",
  },
  {
    name: "Book Velocity™",
    discipline: "Launch & Growth Systems",
    body: "Focused on momentum generation, launch execution, and the sustainable long-term growth that turns one book into a career.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$697",
    cadence: "one-time",
    desc: "For debut authors and clarity seekers.",
    popular: false,
    anchor: false,
    features: [
      "Author Visibility Audit",
      "Amazon listing optimization",
      "Metadata & description review",
      "Keyword & category research",
      "Competitor & comp title analysis",
      "Reader positioning report",
      "60-minute strategy session",
      "30-day action plan",
    ],
  },
  {
    name: "Growth",
    price: "$2,497",
    cadence: "per month",
    desc: "For authors actively building readership systems.",
    popular: true,
    anchor: false,
    features: [
      "Everything in Starter",
      "Reader acquisition strategy",
      "Email marketing system",
      "Landing page optimization",
      "Author brand development",
      "Campaign management",
      "Monthly reporting",
      "Ongoing optimization",
    ],
  },
  {
    name: "Authority",
    price: "$4,997",
    cadence: "per month",
    desc: "For established authors scaling long-term growth.",
    popular: false,
    anchor: false,
    features: [
      "Everything in Growth",
      "Funnel strategy & optimization",
      "Creator outreach",
      "Book launch management",
      "Lifecycle email marketing",
      "Website optimization",
      "Reader community building",
      "Dedicated strategist",
    ],
  },
  {
    name: "Legacy",
    price: "$8,497",
    cadence: "per month",
    desc: "For multi-book authors and publishing brands.",
    popular: false,
    anchor: true,
    features: [
      "Everything in Authority",
      "Dedicated growth team",
      "Full marketing ecosystem management",
      "Premium launch strategy",
      "Strategic partnerships",
      "Advanced analytics",
      "Quarterly planning",
      "Priority support",
      "Executive-level consulting",
    ],
  },
];

const journey = [
  ["01", "Apply", "Submit a brief or book a discovery call. We review fit before we ever pitch a plan."],
  ["02", "Diagnose", "A senior audit of your positioning, retail pages, ads, list, and existing funnel."],
  ["03", "Design", "A custom growth plan with sequencing, targets, owners, budgets, and 90-day outcomes."],
  ["04", "Build & Run", "We execute, ads, email, landing pages, creator outreach, brand assets."],
  ["05", "Compound", "Weekly review, monthly reporting, quarterly planning. The engine keeps earning."],
];

const faqs: [string, string][] = [
  ["How long until I see results?", "Most authors see visibility lift within 2 to 4 weeks. Meaningful sales movement typically lands in 1 to 3 months depending on genre, plan, and where your book starts."],
  ["What's the minimum engagement?", "Starter is a one-time audit. Growth, Authority, and Legacy run on month-to-month terms with a recommended 90-day minimum so the strategy has room to compound."],
  ["Do you guarantee bestseller results?", "No reputable agency does. What we guarantee is senior strategy, transparent reporting, and a partner who actually cares about your book."],
  ["Will I work with juniors?", "No. Every engagement is led by Emmanuel and a senior team. The people you meet on the first call are the people doing the work."],
  ["Can I upgrade tiers later?", "Yes. You can move up at any time. We prorate the difference and hand off into the higher tier without losing momentum."],
  ["What if my book isn't published yet?", "We love pre-launch engagements. The earlier you bring us in, the more compounding return you'll see."],
];

function Services() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Services & Engagements
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            A full studio for the <span className="text-gradient-gold italic">long-term</span> author career.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            From clarity-stage audits to executive-level publishing brand management,
            every engagement is built around one outcome: more of the right readers,
            for longer.
          </p>
        </div>
      </section>

      {/* CORE GROWTH SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Core Growth Services</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">What authors actually receive.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Every author faces a different challenge. Some need discoverability.
              Others need positioning, launch support, reader acquisition, or
              long-term growth systems. Our services are designed to address the
              entire author journey, from visibility and positioning to reader
              growth and sustained career development.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {coreServices.map((s, i) => (
              <article key={s.slug} className="surface-card rounded-2xl p-8 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-gold">
                    Service {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl">{s.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.summary}</p>

                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="deliverables" className="border-[oklch(1_0_0_/_0.1)]">
                    <AccordionTrigger className="text-[11px] uppercase tracking-[0.22em] text-foreground/80">
                      Deliverables
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex gap-3 text-[14px] text-foreground/85">
                            <Check size={16} className="text-gold shrink-0 mt-1" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="process" className="border-[oklch(1_0_0_/_0.1)]">
                    <AccordionTrigger className="text-[11px] uppercase tracking-[0.22em] text-foreground/80">
                      Process Overview
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="space-y-2 pt-2">
                        {s.process.map((p, idx) => (
                          <li key={p} className="flex gap-3 text-[14px] text-foreground/85">
                            <span className="text-gold font-serif shrink-0 w-5">{idx + 1}.</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="outcomes" className="border-none">
                    <AccordionTrigger className="text-[11px] uppercase tracking-[0.22em] text-foreground/80">
                      Expected Outcomes
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="pt-2 space-y-2">
                        {s.outcomes.map((o) => (
                          <li key={o} className="text-[14px] text-foreground/85 leading-relaxed">{o}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:opacity-80 transition"
                >
                  View full service <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE GROWTHSPARK METHOD */}
      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)] bg-[oklch(0.18_0.012_250)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Proprietary Frameworks</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">The GrowthSpark Method™</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              These are not services. They are the proprietary strategic systems
              that guide every engagement we deliver, the underlying frameworks
              behind how we diagnose, decide, build, and grow.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {method.map((m) => (
              <div key={m.name} className="surface-card rounded-2xl p-7">
                <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{m.discipline}</div>
                <h3 className="mt-3 font-serif text-2xl">{m.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT JOURNEY */}
      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">The Client Journey</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">From first call to compounding career.</h2>
          </div>
          <ol className="mt-14 grid md:grid-cols-5 gap-5">
            {journey.map(([n, t, b]) => (
              <li key={n} className="surface-card rounded-2xl p-6">
                <div className="font-serif text-3xl text-gold">{n}</div>
                <div className="mt-4 font-serif text-xl">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Engagement Tiers</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Fixed pricing. No surprises.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Choose the tier that matches your stage. Move up at any time. Senior strategy on every plan.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative surface-card rounded-2xl p-7 flex flex-col ${
                  p.popular ? "border-gold/70 ring-1 ring-gold/30 shadow-[0_0_60px_-20px_oklch(0.74_0.108_82_/_0.4)]" : ""
                } ${p.anchor ? "opacity-95" : ""}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full tracking-[0.16em]">
                    MOST POPULAR
                  </span>
                )}
                {p.anchor && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 border border-gold/60 text-gold bg-background text-[10px] font-bold px-3 py-1 rounded-full tracking-[0.16em]">
                    BY APPLICATION
                  </span>
                )}
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{p.name}</div>
                <div className="mt-4 font-serif text-4xl">{p.price}</div>
                <div className="text-xs text-muted-foreground">{p.cadence}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-6 space-y-2.5 text-[13px] flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-foreground/85">
                      <Check size={14} className="text-gold shrink-0 mt-1" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-7 block text-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition ${
                    p.popular
                      ? "bg-gold text-primary-foreground hover:opacity-90"
                      : "border border-[oklch(1_0_0_/_0.18)] text-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {p.anchor ? "Apply for Legacy" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All monthly plans recommended at a 90-day minimum for compounding effect. Ad spend invoiced separately at cost.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Common Questions</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Frequently asked.</h2>
          <div className="mt-12 space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="group surface-card rounded-2xl p-6 [&_summary]:cursor-pointer">
                <summary className="font-serif text-lg flex justify-between items-center gap-4">
                  {q}
                  <span className="text-gold group-open:rotate-45 transition text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)] bg-[oklch(0.18_0.012_250)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Not sure which service fits your book?</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Start with a discovery call. We'll diagnose where you are and recommend the right engagement honestly, even if that engagement isn't us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Book a Discovery Call <ArrowRight size={16} />
            </Link>
            <Link to="/audit" className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:border-gold hover:text-gold transition">
              Free Visibility Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
