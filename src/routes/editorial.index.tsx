import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Bookmark, Quote } from "lucide-react";
import cover from "@/assets/changing-eyes-cover.png.asset.json";

export const Route = createFileRoute("/editorial/")({
  head: () => ({
    meta: [
      { title: "GrowthSpark Editorial — Stories Worth Discovering. Authors Worth Celebrating." },
      { name: "description", content: "GrowthSpark Editorial is our literary publication dedicated to introducing exceptional books and remarkable authors to readers around the world." },
      { property: "og:title", content: "GrowthSpark Editorial — A Literary Publication" },
      { property: "og:description", content: "Professionally researched, thoughtfully written editorial features on the books and authors worth discovering." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial" }],
  }),
  component: EditorialHome,
});

function EditorialHome() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-24">
          <span className="text-[11px] uppercase tracking-[0.32em] text-gold">The Editorial</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] max-w-5xl">
            Stories worth discovering. <span className="text-gradient-gold italic">Authors worth celebrating.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            GrowthSpark Editorial is our literary publication dedicated to introducing exceptional books and remarkable authors to readers around the world through professionally researched, thoughtfully written editorial features.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/editorial/featured-authors" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Browse Featured Authors <ArrowRight size={16} />
            </Link>
            <Link to="/editorial/why-we-feature" className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              Our Editorial Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED AUTHOR OF THE MONTH */}
      <section className="py-24 border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Featured Author of the Month
          </div>
          <div className="mt-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <Link to="/editorial/$slug" params={{ slug: "changing-eyes" }} className="block group">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
                  <img
                    src={cover.url}
                    alt="Changing Eyes by Leanne Antaya — book cover"
                    className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl group-hover:scale-[1.01] transition-transform"
                  />
                </div>
              </Link>
            </div>
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold border border-gold/40 rounded-full px-3 py-1.5">
                <Bookmark size={12} /> Featured by GrowthSpark Editorial
              </span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
                Changing Eyes
              </h2>
              <p className="mt-3 font-serif italic text-xl text-muted-foreground">A Memoir of Love, Loss, and Unwavering Hope</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-gold">By Leanne Antaya · Memoir</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                A mother's battle cry. A lifeline thrown into the darkness of addiction. A beacon of hope for families searching for meaning in the shadows of despair. An award winning memoir we believe deserves to be read.
              </p>
              <Link to="/editorial/$slug" params={{ slug: "changing-eyes" }} className="mt-8 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                Read the full feature <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION GRID */}
      <section className="py-24 border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Explore the Publication</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Every section, carefully curated.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { to: "/editorial/featured-authors", label: "Featured Authors", copy: "Long form editorial profiles of the authors and books we champion." },
              { to: "/editorial/interviews", label: "Author Interviews", copy: "In depth conversations on craft, process, and the writing life." },
              { to: "/editorial/spotlights", label: "Book Spotlights", copy: "Concise editorial introductions to books deserving greater recognition." },
              { to: "/editorial/editors-picks", label: "Editor's Picks", copy: "Curated recommendations across genre, mood, and season." },
              { to: "/editorial/conversations", label: "Literary Conversations", copy: "Long form essays on publishing, reading, and the future of the book." },
              { to: "/editorial/reading-lists", label: "Reading Lists", copy: "Themed lists to guide your next month of reading." },
              { to: "/editorial/collections", label: "Seasonal Collections", copy: "Curated collections that follow the rhythm of the year." },
              { to: "/editorial/why-we-feature", label: "Why We Feature", copy: "Our editorial standards, and why every feature must be earned." },
            ].map((c) => (
              <Link key={c.to} to={c.to} className="surface-card rounded-2xl p-7 hover:-translate-y-1 hover:border-gold/40 transition group">
                <BookOpen className="text-gold" size={20} />
                <h3 className="mt-5 font-serif text-xl leading-tight">{c.label}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-gold text-xs group-hover:gap-3 transition-all">
                  Enter section <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL PROMISE */}
      <section className="py-24 border-b border-[oklch(1_0_0_/_0.06)] bg-[oklch(0.18_0.012_250)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto text-gold" size={32} />
          <blockquote className="mt-6 font-serif text-3xl md:text-4xl italic leading-tight">
            "GrowthSpark Editorial maintains complete editorial independence. While some featured authors are GrowthSpark clients and others are independently selected, every article reflects our genuine appreciation for outstanding storytelling. Editorial opinions remain our own."
          </blockquote>
          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">The GrowthSpark Editorial Team</p>
        </div>
      </section>
    </>
  );
}
