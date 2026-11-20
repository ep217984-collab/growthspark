import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | Frameworks & Tools for Authors" },
      { name: "description", content: "Working tools from our practice: launch checklists, growth planners, reader persona worksheets, Amazon guides, and outreach kits for serious authors." },
      { property: "og:title", content: "Resources, GrowthSpark Impact" },
      { property: "og:description", content: "Frameworks, worksheets, and templates from our practice, shared with the wider author community." },
      { property: "og:url", content: "https://growthsparkimpact.lovable.app/resources" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/resources" }],
  }),
  component: ResourcesPage,
});

type Resource = { title: string; kind: string; d: string; href?: string };

const groups: { name: string; items: Resource[] }[] = [
  {
    name: "Strategic Frameworks",
    items: [
      { title: "Book Launch Checklist", kind: "Checklist", d: "The 90-day sequence we use to run disciplined launches." },
      { title: "Author Growth Planner", kind: "Planner", d: "A yearly planner for structuring releases, backlist, and reader work." },
      { title: "Publishing Timeline", kind: "Framework", d: "A month-by-month publishing timeline template." },
    ],
  },
  {
    name: "Reader & Audience Tools",
    items: [
      { title: "Reader Persona Worksheet", kind: "Worksheet", d: "Define the reader you're actually writing for." },
      { title: "Book Club Outreach Kit", kind: "Kit", d: "How to approach book clubs with a professional pitch." },
      { title: "Email Templates", kind: "Templates", d: "Author-tested email templates for launches, ARC, and outreach." },
    ],
  },
  {
    name: "Platform & Optimization",
    items: [
      { title: "Amazon Optimization Guide", kind: "Guide", d: "Metadata, category, A+ content, a practical field guide.", href: "/genre-book-marketing-strategies.pdf" },
      { title: "GrowthSpark Templates", kind: "Templates", d: "The document templates we use inside our engagements." },
      { title: "Roadmap Worksheets", kind: "Worksheets", d: "The worksheets behind our 12-month roadmap engagements." },
    ],
  },
];

function ResourcesPage() {
  return (
    <>
      <section className="hairline-b">
        <div className="container-editorial pt-32 md:pt-44 pb-24">
          <div className="eyebrow-gold"><span className="rule-gold" />Resources</div>
          <h1 className="mt-8 display-1 max-w-[18ch]">
            Working tools from <span className="italic text-gradient-gold">our practice.</span>
          </h1>
          <p className="mt-8 lede max-w-2xl">
            The frameworks, worksheets, and templates we use inside client engagements , 
            made available to the wider author community. Practical, tested, and free.
          </p>
        </div>
      </section>

      <section className="section-pad space-y-16">
        <div className="container-editorial space-y-16">
          {groups.map((g) => (
            <div key={g.name}>
              <div className="eyebrow"><span className="rule-gold" />{g.name}</div>
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.items.map((r) => {
                  const inner = (
                    <>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-gold">{r.kind}</div>
                      <div className="mt-3 font-serif text-2xl">{r.title}</div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
                        {r.href ? <>Download <Download size={14} /></> : <>Request access <ArrowRight size={14} /></>}
                      </div>
                    </>
                  );
                  return r.href ? (
                    <a key={r.title} href={r.href} download className="surface-card rounded-2xl p-8 block hover:border-gold/40 transition">{inner}</a>
                  ) : (
                    <Link key={r.title} to="/newsletter" className="surface-card rounded-2xl p-8 block hover:border-gold/40 transition">{inner}</Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad hairline-t bg-[oklch(0.18_0.012_250)]">
        <div className="container-editorial text-center">
          <div className="eyebrow-gold justify-center"><span className="rule-gold" />Get new resources first</div>
          <h2 className="mt-6 display-2 max-w-3xl mx-auto">Join the GrowthSpark Journal.</h2>
          <p className="mt-6 lede max-w-2xl mx-auto">
            Occasional essays and new resources sent to serious authors and publishing brands.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <Link to="/newsletter" className="btn-gold">Subscribe <ArrowRight size={16} /></Link>
            <Link to="/insights" className="btn-ghost">Read the journal</Link>
          </div>
        </div>
      </section>
    </>
  );
}
