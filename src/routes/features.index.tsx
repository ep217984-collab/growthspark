import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import cover from "@/assets/changing-eyes-cover.png.asset.json";

export const Route = createFileRoute("/features/")({
  head: () => ({
    meta: [
      { title: "Featured Authors — Editorial Features | GrowthSpark Impact" },
      { name: "description", content: "Long-form editorial features on the authors and books we champion — written and presented by GrowthSpark Impact." },
      { property: "og:title", content: "Featured Authors — GrowthSpark Impact" },
      { property: "og:description", content: "Editorial features on the authors and books we champion." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/features" }],
  }),
  component: FeaturesHub,
});

const features = [
  {
    slug: "changing-eyes",
    title: "Changing Eyes",
    subtitle: "A Memoir of Love, Loss, and Unwavering Hope",
    author: "Leanne Antaya",
    cover: cover.url,
    excerpt:
      "An award-winning memoir on addiction, motherhood, and the endurance of love — and the mother behind it.",
    tags: ["Memoir", "Award Winner"],
  },
];

function FeaturesHub() {
  return (
    <>
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Editorial Features
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            The authors and books <span className="text-gradient-gold italic">we champion.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Long-form editorial features written and presented by GrowthSpark Impact —
            profiles of the voices, stories, and works we believe deserve a wider readership.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <Link
              key={f.slug}
              to="/features/$slug"
              params={{ slug: f.slug }}
              className="group surface-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-gold/40 transition"
            >
              <div className="aspect-[3/4] bg-[var(--section-alt)] overflow-hidden">
                <img
                  src={f.cover}
                  alt={`${f.title} by ${f.author} — book cover`}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex gap-2 flex-wrap">
                  {f.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.22em] text-gold border border-gold/30 rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-5 font-serif text-2xl leading-tight">{f.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground italic">{f.subtitle}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">By {f.author}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed flex-1">{f.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                  Read the feature <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
