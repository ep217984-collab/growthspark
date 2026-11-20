import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bookAscendancyPrograms, getProgramBySlug, getAdjacentPrograms, getProgramFaqs } from "@/lib/book-ascendancy";

export const Route = createFileRoute("/book-ascendancy/services/$slug")({
  head: ({ params }) => {
    const program = getProgramBySlug(params.slug);
    const title = program
      ? `${program.name} — Book Ascendancy Program | GrowthSpark Impact`
      : "Program Not Found — Book Ascendancy | GrowthSpark Impact";
    const description = program
      ? program.whatItIs
      : "This Book Ascendancy program could not be found. Browse the full list of author programs.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { tagName: "link", rel: "canonical", href: `https://growthsparkimpact.lovable.app/book-ascendancy/services/${params.slug}` },
      ],
    };
  },
  component: ProgramDetail,
});

function ProgramDetail() {
  const { slug } = Route.useParams();
  const program = getProgramBySlug(slug);

  if (!program) {
    return (
      <section className="py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Program Not Found</span>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            We could not find that program.
          </h1>
          <p className="mt-6 text-muted-foreground text-lg">
            It may have been renamed or moved. Browse the full list of Book Ascendancy programs below.
          </p>
          <div className="mt-10">
            <Link to="/book-ascendancy/services" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const { prev, next } = getAdjacentPrograms(slug);
  const index = bookAscendancyPrograms.findIndex((p) => p.slug === slug);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1140px] px-6 pt-28 pb-16">
          <Link to="/book-ascendancy/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition">
            <ArrowLeft size={14} /> All Programs
          </Link>
          <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Program {String(index + 1).padStart(2, "0")} · {program.kicker}
          </div>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.08] max-w-3xl">
            {program.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {program.whatItIs}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              {program.ctaLabel} <ArrowRight size={16} />
            </Link>
            <Link to="/book-ascendancy" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              About Book Ascendancy
            </Link>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-20">
        <div className="mx-auto max-w-[1140px] px-6 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-6">
            <div className="surface-card rounded-2xl p-8">
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Who It Is For</span>
              <p className="mt-3 text-muted-foreground leading-relaxed">{program.whoItIsFor}</p>
            </div>
            <div className="surface-card rounded-2xl p-8">
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">How Readers Participate</span>
              <p className="mt-3 text-muted-foreground leading-relaxed">{program.readerParticipation}</p>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-[oklch(0.308_0.034_127_/_0.04)] p-8">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold">
                <ShieldCheck size={12} /> GrowthSpark Impact × Book Ascendancy
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Book Ascendancy Book Club operates independently. GrowthSpark Impact helps authors
                decide whether this program fits their current stage and strategy, and coordinates
                the introduction. Selection for any program remains editorial and curated by
                Book Ascendancy.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">How It Works</span>
              <ol className="mt-4 space-y-4">
                {program.howItWorks.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border border-gold/40 text-gold text-sm font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="surface-card rounded-2xl p-8">
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">What the Author Receives</span>
              <ul className="mt-4 space-y-2">
                {program.authorReceives.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition">
                {program.ctaLabel} <ArrowRight size={14} />
              </Link>
              <Link to="/book-ascendancy/services" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-6 py-3 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-4">
        <div className="mx-auto max-w-[1140px] px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">FAQ</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Common questions.</h2>
          <Accordion type="single" collapsible className="mt-8">
            {getProgramFaqs(slug).map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-[oklch(0.308_0.034_127_/_0.18)]">
                <AccordionTrigger className="text-left font-serif text-lg">{f.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="py-16 border-t border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1140px] px-6 grid sm:grid-cols-2 gap-4">
          {prev && (
            <Link
              to="/book-ascendancy/services/$slug"
              params={{ slug: prev.slug }}
              className="surface-card rounded-2xl p-6 hover:border-gold/50 transition"
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-2">
                <ArrowLeft size={12} /> Previous Program
              </span>
              <div className="mt-2 font-serif text-xl">{prev.name}</div>
            </Link>
          )}
          {next && (
            <Link
              to="/book-ascendancy/services/$slug"
              params={{ slug: next.slug }}
              className="surface-card rounded-2xl p-6 text-right hover:border-gold/50 transition"
            >
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground inline-flex items-center gap-2 justify-end">
                Next Program <ArrowRight size={12} />
              </span>
              <div className="mt-2 font-serif text-xl">{next.name}</div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
