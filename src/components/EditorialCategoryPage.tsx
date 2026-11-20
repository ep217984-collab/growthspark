import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";

type Section = { heading: string; body: string };

export function EditorialCategoryPage({
  kicker,
  title,
  intro,
  sections,
  footnote,
}: {
  kicker: string;
  title: string;
  intro: string;
  sections: Section[];
  footnote?: string;
}) {
  return (
    <>
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-16">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">{kicker}</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="py-20 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.heading} className="surface-card rounded-2xl p-7">
              <BookOpen className="text-gold" size={20} />
              <h3 className="mt-5 font-serif text-2xl leading-tight">{s.heading}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {footnote && (
        <section className="py-16 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <div className="mx-auto max-w-3xl px-6 text-center text-sm text-muted-foreground leading-relaxed italic">
            {footnote}
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link to="/editorial" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
            Back to Editorial <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
