import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, FileText } from "lucide-react";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/proof-of-work/")({
  head: () => ({
    meta: [
      { title: "Proof of Work | Real Client Deliverables | GrowthSpark Impact" },
      { name: "description", content: "A library of real client deliverables, research reports, and marketing strategies from the GrowthSpark Impact team." },
      { property: "og:title", content: "Proof of Work, GrowthSpark Impact" },
      { property: "og:description", content: "Authentic examples of the work we deliver for the authors we serve." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/proof-of-work" }],
  }),
  component: ProofOfWork,
});

const categories = Array.from(new Set(projects.map((p) => p.category)));

function ProofOfWork() {
  return (
    <>
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-24 pb-20">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Proof of Work</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] max-w-5xl">
            Real client deliverables. <span className="text-gradient-gold italic">Documented, downloadable, real.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A public library of the reports, roadmaps, and strategies we have produced for the authors we serve. Certain information has been removed or redacted to protect client confidentiality where required.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground border border-[oklch(0.308_0.034_127_/_0.25)] rounded-full px-3 py-1.5">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/proof-of-work/$slug"
              params={{ slug: p.slug }}
              className="group surface-card rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-gold/40 transition"
            >
              <div className="flex items-center justify-between">
                <FileText className="text-gold" size={22} />
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{p.category}</span>
              </div>
              <h2 className="mt-6 font-serif text-2xl leading-tight">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">Client: {p.client}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{p.summary}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.publishedAt}</span>
                {p.redacted && <span className="text-gold/80">Partially Redacted</span>}
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                View project <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-[oklch(0.308_0.034_127_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-muted-foreground italic">
            Certain project details have been modified or partially redacted to protect client confidentiality while accurately representing the scope of work delivered.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
            Commission Work <Download size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
