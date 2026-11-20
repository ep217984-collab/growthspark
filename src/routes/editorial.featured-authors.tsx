import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bookmark, Clock } from "lucide-react";
import cover from "@/assets/changing-eyes-cover.png.asset.json";
import sunriseCover from "@/assets/before-the-sunrise-cover.jpg.asset.json";
import peaceCover from "@/assets/peace-in-the-storm-cover.jpg.asset.json";
import skyCover from "@/assets/reaching-for-the-sky-cover.jpg.asset.json";
import woundedCover from "@/assets/the-walking-wounded-cover.jpg.asset.json";
import flashCoverAsset from "@/assets/a-flash-in-time-cover-official.png.asset.json";
import religionCover from "@/assets/religion-and-science-cover.jpg.asset.json";
import brucePaulCover from "@/assets/bruce-and-paul-cover.jpg.asset.json";
import { woodyFeature } from "@/lib/editorial/woody";
const flashCover = flashCoverAsset.url;

export const Route = createFileRoute("/editorial/featured-authors")({
  head: () => ({
    meta: [
      { title: "Featured Authors — GrowthSpark Editorial" },
      { name: "description", content: "Long form editorial features on the authors and books championed by GrowthSpark Editorial." },
      { property: "og:title", content: "Featured Authors — GrowthSpark Editorial" },
      { property: "og:description", content: "Editorial features on the authors and books we champion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/featured-authors" }],
  }),
  component: FeaturedAuthors,
});

const features = [
  {
    ...woodyFeature,
    excerpt: "The real experiences behind Woody’s journey as an author, and a crime story exploring journalism, freedom, relationships, and the human cost of violence.",
  },
  {
    slug: "bruce-and-paul-the-day-the-lie-ended",
    title: "Bruce & Paul: The Day The Lie Ended",
    subtitle: "A Masterwork of Authenticity and Courage",
    author: "Lee Gerard",
    genre: "Contemporary Romance · LGBTQ Fiction",
    published: "October 2026",
    readingTime: "12 min read",
    cover: brucePaulCover.url,
    excerpt: "A literary profile and critical analysis of a deeply personal novel about identity, family expectations, religious shame, and the courage to live authentically.",
  },
  {
    slug: "religion-and-science",
    title: "Religion and Science: The Soul",
    subtitle: "Scientific Evidence for the Existence of Souls, Karma and the Afterlife",
    author: "Jargal Dorj",
    genre: "Science · Religion · Philosophy",
    published: "September 2026",
    readingTime: "13 min read",
    cover: religionCover.url,
    excerpt: "A mathematician brings logic, set theory and quantum physics to the oldest questions humanity asks about the soul, karma and what follows death.",
  },
  {
    slug: "a-flash-in-time",
    title: "A Flash In Time",
    subtitle: "When Science and Fiction Collide in a Near Future Thriller",
    author: "J.N. Frye",
    genre: "Science Fiction",
    published: "September 2026",
    readingTime: "11 min read",
    cover: flashCover,
    excerpt: "A debut techno thriller built on real electrical engineering, where a government antenna tuned to the Earth's own frequency starts sending people somewhere else.",
  },
  {
    slug: "before-the-sunrise",
    title: "Before the Sunrise",
    subtitle: "A Young Adult Novel of Friendship, Loyalty, and Courage",
    author: "Melisande Corlett",
    genre: "Young Adult Fiction",
    published: "July 2026",
    readingTime: "14 min read",
    cover: sunriseCover.url,
    excerpt: "An award nominated debut on friendship, loyalty, and the quiet courage that emerges in the hours before dawn.",
  },
  {
    slug: "peace-in-the-midst-of-the-storm",
    title: "Peace in the Midst of the Storm",
    subtitle: "A Testament of Resilience, Faith, and Unwavering Hope",
    author: "Kaleb Thompson",
    genre: "Inspirational Poetry",
    published: "July 2026",
    readingTime: "13 min read",
    cover: peaceCover.url,
    excerpt: "An Amazon bestselling poetry collection that meets readers honestly in the middle of their own storms.",
  },
  {
    slug: "reaching-for-the-sky",
    title: "Reaching for the Sky",
    subtitle: "A Life Lived at Altitude",
    author: "Thomas Sawyer Storey",
    genre: "Memoir",
    published: "July 2026",
    readingTime: "15 min read",
    cover: skyCover.url,
    excerpt: "The memoir of a Navy veteran and thirty five year Los Angeles airborne broadcaster who watched a city change from the cockpit.",
  },
  {
    slug: "changing-eyes",
    title: "Changing Eyes",
    subtitle: "A Memoir of Love, Loss, and Unwavering Hope",
    author: "Leanne Antaya",
    genre: "Memoir",
    published: "July 2026",
    readingTime: "12 min read",
    cover: cover.url,
    excerpt: "An award winning memoir on addiction, motherhood, and the endurance of love, and the mother behind it.",
  },
  {
    slug: "the-walking-wounded",
    title: "The Walking Wounded Revised",
    subtitle: "The Healing Journey: Restoring Hope from Your Abusive Past",
    author: "Pastor Deborah Ling",
    genre: "Christian Living",
    published: "August 2026",
    readingTime: "13 min read",
    cover: woundedCover.url,
    excerpt: "A survivor's roadmap out of shame, written by a pastor who has walked the same road and refuses to speak from a safe distance.",
  },
];

function FeaturedAuthors() {
  return (
    <>
      <section className="border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-20 pb-16">
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Featured Authors</span>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05] max-w-4xl">
            The authors and books we champion.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover editorial features published by GrowthSpark Impact, with article credits included on each feature page.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <Link
              key={f.slug}
              to="/editorial/$slug"
              params={{ slug: f.slug }}
              className="group surface-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 hover:border-gold/40 transition"
            >
              <div className="aspect-[3/4] bg-[var(--section-alt)] overflow-hidden">
                <img
                  src={f.cover}
                  alt={`${f.title} by ${f.author} — book cover`}
                  className="h-full w-full object-contain transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold border border-gold/30 rounded-full px-2.5 py-1 self-start">
                  <Bookmark size={11} /> Featured by GrowthSpark Editorial
                </span>
                <h2 className="mt-5 font-serif text-2xl leading-tight">{f.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground italic">{f.subtitle}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">By {f.author} · {f.genre}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed flex-1">{f.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{f.published}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {f.readingTime}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
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
