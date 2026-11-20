import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Award, BookOpen, Quote } from "lucide-react";
import cover from "@/assets/changing-eyes-cover.png.asset.json";

type Feature = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  cover: string;
  amazon: string;
  awards: string[];
  tagline: string;
  sections: { heading: string; paragraphs: string[]; pull?: string }[];
  pillars: { heading: string; body: string }[];
  authorMessage: string;
  bookDetails: { label: string; value: string }[];
};

const features: Record<string, Feature> = {
  "changing-eyes": {
    slug: "changing-eyes",
    title: "Changing Eyes",
    subtitle: "A Memoir of Love, Loss, and Unwavering Hope",
    author: "Leanne Antaya",
    cover: cover.url,
    amazon: "https://www.amazon.com/dp/0578391686",
    awards: ["Literary Titan Book Award", "Pencraft Book Award — Best Book 2022"],
    tagline: "A mother's battle cry. A lifeline thrown into the darkness of addiction. A beacon of hope for families who have lost their way in the shadows of despair.",
    sections: [
      {
        heading: "Publisher's Note",
        paragraphs: [
          "Changing Eyes is not merely a book. It is a testament to the human spirit's capacity to endure the unendurable. It is a mother's battle cry, a lifeline thrown into the darkness of addiction, and a beacon of hope for families who have lost their way in the shadows of despair.",
          "This editorial feature is presented by GrowthSpark Impact, a platform dedicated to amplifying voices that matter. We are honored to showcase the work of Leanne Antaya, an author whose courage and honesty have earned her multiple literary awards and the gratitude of countless readers worldwide.",
        ],
      },
      {
        heading: "About the Author",
        paragraphs: [
          "Leanne Antaya is an award-winning author whose powerful debut memoir, Changing Eyes, has earned both the Literary Titan Book Award and the Pencraft Book Award for its unflinching honesty and emotional depth.",
          "Her journey began not with recognition, but with heartbreak. When her son, Trey, was pulled into the grip of addiction, Leanne was thrust into a battle she never expected to fight. What followed was a story of anguish and resilience, of a mother's unwavering love tested in the darkest of times.",
          "Out of that storm came Changing Eyes, a raw, deeply moving memoir that shines a light on the realities of addiction while offering hope, strength, and solidarity to families walking the same path. More than just a book, it is a lifeline, a testament to perseverance, and a reminder that love can endure even in the face of unimaginable pain.",
          "Today, Leanne Antaya writes and speaks as a voice for the voiceless, a beacon for those navigating the shadows of addiction, and an inspiration to anyone searching for courage in the midst of despair.",
        ],
      },
      {
        heading: "The Origin of a Masterpiece",
        paragraphs: [
          "Every great work of literature has a moment of conception, a spark that ignites the creative fire. For Leanne Antaya, that moment came in the sterile, fluorescent-lit corridors of a hospital room, where she sat vigil over her son Trey after he had suffered a devastating overdose.",
          "In those agonizing hours, Leanne did what any mother would do. She reflected. She dissected. She questioned every decision she had ever made as a parent. What could she have done differently? Where had she gone wrong? How had her son, her beloved child, ended up at death's door?",
          "These questions haunted her, and in her desperation, she began to write. Page after page, journal entry after journal entry, she poured her heart onto paper. What started as a cathartic exercise, a way to process her grief and guilt, would eventually become the foundation of a transformative work of literature.",
          "The journal grew. The notes accumulated. And in those pages, a voice emerged — raw and unflinching, determined to find meaning in the madness.",
        ],
      },
      {
        heading: "A Mother's Unwavering Love",
        pull: "Not as a memoir of victimhood, but as a manifesto of hope.",
        paragraphs: [
          "When Trey defied all medical expectations and came home, the miracle was not lost on his mother. The doctors had not believed he would survive. The odds had been stacked against him. Yet here he was, breathing, healing, and fighting for his life alongside his mother.",
          "But even as Leanne celebrated her son's return, she could not turn a blind eye to the tragedy unfolding around her. She watched as Trey's friends — young men and women with dreams and futures — succumbed to the same disease that had nearly claimed her son. She witnessed their mothers weep, their families shatter, and their communities mourn.",
          "In the faces of those grieving mothers, Leanne saw herself. She saw what could have been. She saw what still could be for countless families trapped in the relentless cycle of addiction.",
          "It was in that moment of clarity that Changing Eyes was born. Not as a memoir of victimhood, but as a manifesto of hope. Not as a tale of defeat, but as a story of survival. Not as a chronicle of despair, but as a roadmap to resilience.",
        ],
      },
      {
        heading: "The Day That Changed Everything",
        paragraphs: [
          "When the final manuscript was complete, when the last word had been written and the last edit made, Leanne Antaya pressed publish. The day Changing Eyes was released into the world, she cried.",
          "Those tears were not tears of sadness, though the memories that fueled the book were painful. They were tears of release, of accomplishment, of profound gratitude for the opportunity to share her story with others who desperately needed to hear it.",
          "With that single act of courage, Leanne transformed her family's private struggle into a public gift. She opened her heart to the world, knowing that her vulnerability could become someone else's strength. She exposed her wounds, trusting that her scars could heal others.",
        ],
      },
    ],
    pillars: [
      { heading: "For Families Battling Addiction", body: "This book serves as a companion for families who feel alone in their struggle. Leanne's story validates their pain, acknowledges their fears, and offers tangible hope that recovery is possible, even when the odds seem insurmountable." },
      { heading: "For Those Who Have Lost Loved Ones", body: "For parents who have buried their children, siblings who have lost their brothers and sisters, and friends who have watched helplessly as addiction claimed someone they loved, Changing Eyes offers a space to grieve, to remember, and to find meaning in loss." },
      { heading: "For Society at Large", body: "By sharing her family's journey, Leanne Antaya contributes to the crucial work of removing the stigma of drug addiction. Through her courage, she invites readers to see addiction not as a moral failing, but as a disease that can affect anyone." },
      { heading: "For the Addict Themselves", body: "This book is also for those struggling with addiction. It is a reminder that they are loved, that they are worth fighting for, and that recovery is not only possible, but worth pursuing with every fiber of their being." },
    ],
    authorMessage: "To promote hope to families in need, and to remove the stigma of drug addiction.",
    bookDetails: [
      { label: "Title", value: "Changing Eyes" },
      { label: "Author", value: "Leanne Antaya" },
      { label: "Genre", value: "Memoir · Nonfiction" },
      { label: "Awards", value: "Literary Titan Book Award · Pencraft Book Award" },
      { label: "Available", value: "Amazon" },
    ],
  },
};

export const Route = createFileRoute("/features/$slug")({
  loader: ({ params }): { feature: Feature } => {
    const feature = features[params.slug];
    if (!feature) throw notFound();
    return { feature };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Feature not found — GrowthSpark Impact" }, { name: "robots", content: "noindex" }] };
    }
    const f = loaderData.feature;
    const title = `${f.title} by ${f.author} — An Editorial Feature | GrowthSpark Impact`;
    const desc = `${f.title} — ${f.subtitle}. An editorial feature on ${f.author}, presented by GrowthSpark Impact.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: f.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: f.cover },
      ],
      links: [{ rel: "canonical", href: `https://growthsparkimpact.lovable.app/features/${f.slug}` }],
    };
  },
  component: FeatureArticle,
  notFoundComponent: FeatureNotFound,
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl">Something went wrong.</h1>
        <p className="mt-4 text-muted-foreground">Please try again in a moment.</p>
        <button onClick={reset} className="mt-8 btn-gold">Try again</button>
      </div>
    );
  },
});

function FeatureNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <span className="text-[11px] uppercase tracking-[0.28em] text-gold">404</span>
      <h1 className="mt-4 font-serif text-5xl">Feature not found.</h1>
      <p className="mt-4 text-muted-foreground">This editorial feature does not exist — or has been moved.</p>
      <Link to="/features" className="mt-8 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
        <ArrowLeft size={16} /> Back to all features
      </Link>
    </div>
  );
}

function FeatureArticle() {
  const { feature: f } = Route.useLoaderData() as { feature: Feature };

  return (
    <article>
      {/* HERO */}
      <section className="border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-24 pb-20">
          <Link to="/features" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-gold transition">
            <ArrowLeft size={12} /> All Editorial Features
          </Link>
          <div className="mt-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
                <img
                  src={f.cover}
                  alt={`${f.title} by ${f.author} — book cover`}
                  className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-10 bg-gold/60" /> An Editorial Feature · Presented by GrowthSpark Impact
              </div>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05]">
                {f.title}
              </h1>
              <p className="mt-4 font-serif italic text-2xl text-muted-foreground">{f.subtitle}</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold">By {f.author}</p>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">{f.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {f.awards.map((a) => (
                  <span key={a} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold border border-gold/40 rounded-full px-3 py-1.5">
                    <Award size={12} /> {a}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={f.amazon} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
                  Order on Amazon <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-[oklch(0.236_0.047_306_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-24">
        <div className="mx-auto max-w-[720px] px-6 space-y-20">
          {f.sections.map((s) => (
            <div key={s.heading}>
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Chapter</span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">{s.heading}</h2>
              <div className="mt-8 space-y-6 text-lg leading-[1.8] text-foreground/85">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {s.pull && (
                <blockquote className="my-12 border-l-2 border-gold pl-8 font-serif italic text-2xl md:text-3xl leading-snug text-foreground">
                  "{s.pull}"
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-gold">The Power of {f.title}</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Why this book matters.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {f.pillars.map((p) => (
              <div key={p.heading} className="surface-card rounded-2xl p-8">
                <BookOpen className="text-gold" size={22} />
                <h3 className="mt-5 font-serif text-2xl leading-tight">{p.heading}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITICAL ACCLAIM */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Critical Acclaim</span>
          <Quote className="mx-auto mt-8 text-gold" size={32} />
          <blockquote className="mt-6 font-serif text-3xl md:text-4xl italic leading-tight">
            "This story doesn't flinch. It faces what others avoid and leaves you stronger for it."
          </blockquote>
          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Reviewer, on {f.title}</p>
        </div>
      </section>

      {/* AUTHOR MESSAGE */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">A Message From the Author</span>
          <blockquote className="mt-8 font-serif text-3xl md:text-4xl italic leading-snug">
            "{f.authorMessage}"
          </blockquote>
          <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">— {f.author}</p>
        </div>
      </section>

      {/* BOOK DETAILS + CTA */}
      <section className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1140px] px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img
              src={f.cover}
              alt={`${f.title} — book cover`}
              className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Book Details</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">Order your copy today.</h2>
            <dl className="mt-10 divide-y divide-[oklch(0.236_0.047_306_/_0.16)] border-t border-b border-[oklch(0.236_0.047_306_/_0.16)]">
              {f.bookDetails.map((d) => (
                <div key={d.label} className="grid grid-cols-3 py-4">
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{d.label}</dt>
                  <dd className="col-span-2 text-foreground">{d.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={f.amazon} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
                Order on Amazon <ArrowRight size={16} />
              </a>
              <Link to="/features" className="inline-flex items-center gap-2 border border-[oklch(0.236_0.047_306_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
                More Editorial Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section className="py-20 border-t border-[oklch(0.236_0.047_306_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Editorial feature written and presented by <span className="text-gold">GrowthSpark Impact</span> — a platform dedicated to amplifying voices that matter.
          </p>
        </div>
      </section>
    </article>
  );
}
