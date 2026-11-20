import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { PdfViewer } from "@/components/PdfViewer";

export const Route = createFileRoute("/proof-of-work/$slug")({
  loader: ({ params }): { project: Project; related: Project[] } => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    const related = projects
      .filter((p) => p.slug !== project.slug)
      .sort((a, b) => {
        const score = (x: Project) =>
          (x.category === project.category ? 2 : 0) + (x.client === project.client ? 1 : 0);
        return score(b) - score(a);
      })
      .slice(0, 3);
    return { project, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Project not found | GrowthSpark Impact" },
          { name: "robots", content: "noindex" },
        ],
      };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title}, Proof of Work | GrowthSpark Impact` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title}, GrowthSpark Impact` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `https://growthsparkimpact.lovable.app/proof-of-work/${p.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-5xl">Project not found.</h1>
      <Link to="/proof-of-work" className="mt-8 inline-flex items-center gap-2 text-gold">
        <ArrowLeft size={16} /> Back to Proof of Work
      </Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project: p, related } = Route.useLoaderData() as { project: Project; related: Project[] };

  return (
    <article className="pb-24">
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-16">
          <div>
            <Link
              to="/proof-of-work"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-gold transition"
            >
              <ArrowLeft size={12} /> Back to Proof of Work
            </Link>
          </div>
          <span className="mt-10 inline-block text-[11px] uppercase tracking-[0.28em] text-gold">{p.category}</span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">{p.title}</h1>

          <dl className="mt-8 grid sm:grid-cols-3 gap-6 max-w-3xl">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Client</dt>
              <dd className="mt-1 text-foreground/90">{p.client}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Date</dt>
              <dd className="mt-1 text-foreground/90">{p.publishedAt}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Category</dt>
              <dd className="mt-1 text-foreground/90">{p.category}</dd>
            </div>
          </dl>

          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">{p.summary}</p>

          {p.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground border border-[oklch(1_0_0_/_0.15)] rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {(p.pdf || p.links?.length) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {p.pdf && (
                <>
                  <a
                    href={p.pdf}
                    download
                    className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition"
                  >
                    <Download size={16} /> Download PDF
                  </a>
                  <a
                    href={p.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-6 py-3 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition"
                  >
                    <ExternalLink size={14} /> Open Full Screen
                  </a>
                </>
              )}
              {p.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-6 py-3 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition"
                >
                  <ExternalLink size={14} /> {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {p.video && (
        <section className="py-16 border-b border-[oklch(1_0_0_/_0.06)]">
          <div className="mx-auto max-w-[1240px] px-6">
            <h2 className="font-serif text-3xl mb-6">Project Film</h2>
            <div className="surface-card rounded-2xl overflow-hidden border border-[oklch(1_0_0_/_0.1)] shadow-2xl">
              <video
                src={p.video}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto bg-black"
              />
            </div>
          </div>
        </section>
      )}

      {p.pdf && (
        <section className="py-16 border-b border-[oklch(1_0_0_/_0.06)]">
          <div className="mx-auto max-w-[1240px] px-6">
            <h2 className="font-serif text-3xl mb-6">Document</h2>
            <PdfViewer src={p.pdf} title={p.title} />
          </div>
        </section>
      )}

      {p.images && p.images.length > 0 && (
        <section className="py-16 border-b border-[oklch(1_0_0_/_0.06)]">
          <div className="mx-auto max-w-[1240px] px-6">
            <h2 className="font-serif text-3xl mb-6">Visuals</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {p.images.map((img) => (
                <figure key={img.src} className="surface-card rounded-2xl overflow-hidden">
                  <img src={img.src} alt={img.caption ?? p.title} loading="lazy" className="w-full h-auto" />
                  {img.caption && (
                    <figcaption className="px-5 py-4 text-xs text-muted-foreground">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {(p.challenge || p.strategy || p.execution || p.learnings) && (
        <section className="py-16 border-b border-[oklch(1_0_0_/_0.06)]">
          <div className="mx-auto max-w-3xl px-6 space-y-10">
            {p.challenge && <Prose title="The Challenge" body={p.challenge} />}
            {p.strategy && <Prose title="Strategy" body={p.strategy} />}
            {p.execution && <Prose title="Process and Execution" body={p.execution} />}
            {p.learnings && <Prose title="Key Learnings" body={p.learnings} />}
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-6 grid md:grid-cols-2 gap-8">
          <Card title="Objectives" items={p.objectives} />
          <Card title="Work Completed" items={p.services} />
          <Card title="Deliverables" items={p.deliverables} />
          <Card title="Project Outcomes" items={p.results} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 border-t border-[oklch(1_0_0_/_0.06)]">
          <div className="mx-auto max-w-[1240px] px-6">
            <h2 className="font-serif text-3xl mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/proof-of-work/$slug"
                  params={{ slug: r.slug }}
                  className="group surface-card rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:border-gold/40 transition"
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{r.category}</span>
                  <h3 className="mt-4 font-serif text-xl leading-tight">{r.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground flex-1">{r.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                    View project <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 border-t border-[oklch(1_0_0_/_0.06)] bg-[oklch(0.18_0.012_250)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          {p.redacted && (
            <p className="text-sm text-muted-foreground italic">
              Certain details have been redacted to protect client confidentiality.
            </p>
          )}
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition"
          >
            Commission Work
          </Link>
        </div>
      </section>
    </article>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="surface-card rounded-2xl p-8">
      <span className="text-[11px] uppercase tracking-[0.28em] text-gold">{title}</span>
      <ul className="mt-6 space-y-3 text-foreground/85">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <span className="text-gold">•</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Prose({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
