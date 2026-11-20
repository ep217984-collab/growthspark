import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import videoNoteAsset from "@/assets/recommended-video-author-story.mp4.asset.json";
import videoChangingEyesAsset from "@/assets/changing-eyes-leanne-antaya.mp4.asset.json";
import posterNoteAsset from "@/assets/recommended-video-leanne-note-poster.jpg.asset.json";
import posterChangingEyesAsset from "@/assets/recommended-video-changing-eyes-poster.jpg.asset.json";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Author Growth Notes | GrowthSpark Impact" },
      { name: "description", content: "Editorial notes on Amazon optimization, author branding, book launch strategy, reader growth, email marketing, and book advertising." },
      { property: "og:title", content: "Insights, GrowthSpark Impact" },
      { property: "og:description", content: "Editorial notes for serious authors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/insights" }],
  }),
  component: Insights,
});

const categories = [
  { name: "Amazon Optimization", desc: "Listing pages, A+ content, categories, keywords, and series presentation.", count: 6 },
  { name: "Author Branding", desc: "Voice, identity, story, and the visual system that makes a reader trust you.", count: 4 },
  { name: "Book Launch Strategy", desc: "Pre-order runways, release-week sequencing, and the 90 days after.", count: 5 },
  { name: "Reader Growth", desc: "Acquisition systems, communities, and the loops that compound readership.", count: 7 },
  { name: "Email Marketing", desc: "Welcome flows, lifecycle automations, and list strategy that actually earns.", count: 4 },
  { name: "Book Advertising", desc: "Amazon Ads, BookBub, Meta, and TikTok, strategy, creative, and measurement.", count: 5 },
];

const articles = [
  { cat: "Amazon Optimization", title: "The Three Listing Levers That Move More Books Than Any Ad", read: "8 min" },
  { cat: "Author Branding", title: "Why Most Author Brands Are Just Logos, and What to Build Instead", read: "6 min" },
  { cat: "Book Launch Strategy", title: "Launch Weeks Are Beginnings, Not Peaks: A 90-Day Framework", read: "11 min" },
  { cat: "Reader Growth", title: "How to Build a Reader Acquisition System That Compounds", read: "9 min" },
  { cat: "Email Marketing", title: "The Author Welcome Sequence Worth Building Right Now", read: "7 min" },
  { cat: "Book Advertising", title: "Amazon Ads vs BookBub: When Each Wins and Why", read: "10 min" },
  { cat: "Reader Growth", title: "Series Funnels: Turning Book 1 Into a Whole Catalog", read: "8 min" },
  { cat: "Amazon Optimization", title: "Backend Keywords: The Quiet Algorithm Most Authors Ignore", read: "6 min" },
  { cat: "Author Branding", title: "A Brand System for Authors With More Than One Book", read: "9 min" },
];

const recommendedVideos = [
  {
    title: "A Video from John Frye",
    desc: "Watch John Frye in the original video shared with GrowthSpark Impact.",
    creator: "John Frye",
    src: videoNoteAsset.url,
    poster: posterNoteAsset.url,
    alt: "John Frye speaking on camera",
  },
  {
    title: "Leanne Antaya on Her Book and Book Marketing",
    desc: "Leanne Antaya discusses Changing Eyes, her experience with her book marketer, and her perspective on the book marketing process.",
    creator: "Leanne Antaya, author of Changing Eyes",
    src: videoChangingEyesAsset.url,
    poster: posterChangingEyesAsset.url,
    alt: "Leanne Antaya holding a copy of her book Changing Eyes",
  },
];

function Insights() {
  return (
    <>
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Insights
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Editorial notes on the <span className="text-gradient-gold italic">business of being an author.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The thinking behind our engagements, distilled, organized, and free to
            read. Browse by category or open the full archive.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Categories</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Browse by topic.</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <div key={c.name} className="surface-card rounded-2xl p-7 hover:-translate-y-1 hover:border-gold/40 transition">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl">{c.name}</h3>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-gold">{c.count} notes</span>
                </div>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)] bg-[oklch(0.18_0.012_250)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Recent Notes</span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Latest from the studio.</h2>
            </div>
            <Link to="/newsletter" className="text-sm text-gold hover:underline inline-flex items-center gap-1">Subscribe to The Spark <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => (
              <article key={a.title} className="surface-card rounded-2xl p-7 flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold">{a.cat}</span>
                <h3 className="mt-3 font-serif text-xl leading-snug flex-1">{a.title}</h3>
                <div className="mt-6 pt-5 border-t border-[oklch(1_0_0_/_0.06)] flex items-center justify-between text-xs text-muted-foreground">
                  <span>{a.read} read</span>
                  <span className="text-gold inline-flex items-center gap-1">Coming soon</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Full articles are published in The Spark first. <Link to="/newsletter" className="text-gold hover:underline">Join the list</Link> to read them as they drop.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Recommended Videos</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Stories worth your time.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Discover thoughtful conversations, useful insights, and stories worth your time.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {recommendedVideos.map((v) => (
              <article key={v.title} className="surface-card rounded-2xl overflow-hidden flex flex-col">
                <div className="relative mx-auto w-full max-w-[320px] pt-8 px-8">
                  <video
                    className="w-full rounded-xl border border-[oklch(1_0_0_/_0.08)] bg-black"
                    controls
                    playsInline
                    preload="none"
                    poster={v.poster}
                    aria-label={v.alt}
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-xl leading-snug">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-1">{v.desc}</p>
                  <div className="mt-6 pt-5 border-t border-[oklch(1_0_0_/_0.06)] flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>{v.creator}</span>
                    <span className="text-gold inline-flex items-center gap-1.5 shrink-0"><Play size={12} /> Watch video</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
