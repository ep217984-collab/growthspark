import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/genre-strategies")({
  head: () => ({
    meta: [
      { title: "Genre Book Marketing Strategies | GrowthSpark Impact" },
      {
        name: "description",
        content:
          "A free research based guide with realistic, working book marketing plans for authors across 8 major genres. Reader profiles, platforms, 12 week timelines, budgets, and KPIs.",
      },
      { property: "og:title", content: "Genre Book Marketing Strategies | GrowthSpark Impact" },
      {
        property: "og:description",
        content:
          "Realistic, working marketing plans for authors across 8 major genres. No fluff. No generic advice.",
      },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/genre-strategies" }],
  }),
  component: GenreStrategiesPage,
});

const toc = [
  { id: "general", label: "General Strategies" },
  { id: "memoir", label: "Memoir" },
  { id: "thriller", label: "Thriller" },
  { id: "romance", label: "Romance" },
  { id: "scifi", label: "Sci Fi & Fantasy" },
  { id: "selfhelp", label: "Self Help / Nonfiction" },
  { id: "children", label: "Children's Books" },
  { id: "horror", label: "Horror" },
  { id: "poetry", label: "Poetry" },
  { id: "summary", label: "Summary Table & KPIs" },
];

type Row = [string, string, string];

const genres: Array<{
  id: string;
  icon: string;
  title: string;
  profile: string[];
  platforms: string[];
  plan: Row[];
  budget: string;
  metric: string;
}> = [
  {
    id: "memoir",
    icon: "📘",
    title: "Memoir",
    profile: [
      "Age 35 to 70, female skewing",
      "Seeks emotional truth, transformation, inspiration",
      "Buys print and audiobook heavily",
    ],
    platforms: [
      "Goodreads (memoir groups)",
      "Podcasts (narrative and storytelling shows)",
      "Facebook (niche: Memoir Writing & Reading)",
      "Amazon (paperback and Audible)",
    ],
    plan: [
      ["Pre launch", "Record a 2 minute emotional trailer video (author reads a powerful passage)", "Viral potential on Instagram Reels"],
      ["Launch week", "Partner with 5 micro podcasts (500 to 2k listens) for interview and reading", "100 to 300 sales"],
      ["Month 1", "Run Facebook ads targeting Brene Brown readers and grief memoirs", "$2 to $3 CPA (cost per sale)"],
      ["Long term", "Submit to BookBub (memoir category) and discount to $2.99", "1,000+ sales in 72 hours"],
    ],
    budget: "$500",
    metric: "Reviews that say I cried or This changed my perspective.",
  },
  {
    id: "thriller",
    icon: "🔪",
    title: "Thriller",
    profile: [
      "Age 25 to 55, balanced gender",
      "Reads fast (1 to 2 books per week)",
      "Heavy Kindle Unlimited (KU) users",
      "Loves plot twists, serial killers, psychological tension",
    ],
    platforms: [
      "TikTok (#BookTok and #ThrillerBooks)",
      "Reddit (r/thrillerbooks, r/suggestmeabook)",
      "Amazon KU and countdown deals",
    ],
    plan: [
      ["Pre launch", "ARCs via NetGalley and Booksprout (target 50 reviews)", "Social proof"],
      ["Launch week", "Amazon countdown deal ($0.99 for 5 days) plus automatic KU enrollment", "Rank in top 5,000 storewide"],
      ["Week 2", "TikTok: Plot twist that shocked me while writing plus hook first line", "5k to 50k views"],
      ["Month 2", "Facebook ad: If you loved The Silent Patient, try this. Video of first 10 seconds", "3x to 5x ROAS"],
    ],
    budget: "$800",
    metric: "KU page reads (target: 100,000+ in month 1)",
  },
  {
    id: "romance",
    icon: "❤️",
    title: "Romance",
    profile: [
      "Female 25 to 55 (dominant)",
      "Reads 3 to 5 books per week",
      "Loyal to tropes (enemies to lovers, marriage of convenience, small town)",
      "High engagement on social media",
    ],
    platforms: [
      "TikTok (BookTok and #RomanceBooks)",
      "Facebook groups (very active: Romance Readers Rock)",
      "Newsletter swaps with other romance authors",
    ],
    plan: [
      ["Pre launch", "Create a trope specific reader magnet (The Viscount's Mistake, an enemies to lovers prequel)", "500 emails before launch"],
      ["Launch week", "Run a group promo with 10 romance authors (newsletter bundle)", "2,000+ downloads day 1"],
      ["Month 1", "TikTok daily: tropes, slow burn quotes, who would cast this hero?", "Organic surge"],
      ["Month 2", "Amazon Ads with romance keywords (steamy enemies to lovers, billionaire romance)", "$0.30 CPC"],
    ],
    budget: "$300",
    metric: "Email list growth rate (10% weekly)",
  },
  {
    id: "scifi",
    icon: "🚀",
    title: "Sci Fi & Fantasy",
    profile: [
      "Male and female 20 to 45",
      "Very loyal to series (will read all 7 books)",
      "Heavy Reddit and Discord users",
      "Cares about worldbuilding, magic systems, maps",
    ],
    platforms: [
      "Reddit (r/fantasy, r/printSF, r/selfpublish)",
      "Discord (author and book clubs)",
      "BookTube (YouTube reviewers)",
    ],
    plan: [
      ["Pre launch", "Release series starter free (Book 1 permafree on all retailers)", "Build read through to Book 2"],
      ["Launch week", "Post in r/fantasy: I wrote a book for fans of Sanderson and Abercrombie, here's a free code", "500 to 1k downloads"],
      ["Month 1", "YouTube outreach: send 10 BookTubers a signed ARC plus map poster", "2 to 3 video reviews"],
      ["Month 2", "Reddit ads targeting r/fantasy (very cheap, $0.10 to $0.20 CPC)", "1,000 clicks for $100"],
    ],
    budget: "$200",
    metric: "Series read through rate (Book 1 to Book 2 should be greater than 50%)",
  },
  {
    id: "selfhelp",
    icon: "🧠",
    title: "Self Help / Nonfiction",
    profile: [
      "Age 30 to 60",
      "Searches for solutions (anxiety, productivity, finance, relationships)",
      "Heavy audiobook listener",
      "Trusts authority (credentials, testimonials, case studies)",
    ],
    platforms: [
      "LinkedIn (professional niche)",
      "Podcast guesting (topical shows)",
      "Amazon (paperback and Audible)",
      "Webinars and lead magnets",
    ],
    plan: [
      ["Pre launch", "Create a free checklist or workbook (lead magnet), 10 pages", "1k email signups"],
      ["Launch week", "Run a 24 hour live webinar (teach chapter 1 for free) and sell the book at the end", "50 to 100 sales in 1 day"],
      ["Month 1", "Pitch 50 podcasts in your niche (e.g., how to stop procrastinating)", "10 podcast interviews and 500 sales"],
      ["Month 2", "Facebook ads targeting Tony Robbins and Atomic Habits readers", "4x ROAS"],
    ],
    budget: "$1,000",
    metric: "Average review greater than 4.5 stars; reader says actionable",
  },
  {
    id: "children",
    icon: "📚",
    title: "Children's Books",
    profile: [
      "Buyer: parent, grandparent, or teacher (age 30 to 45)",
      "Cares about illustrations, message, durability (board books)",
      "Buys via Amazon, Target, indie bookstores, school fairs",
    ],
    platforms: [
      "Instagram (parent influencers)",
      "TikTok (#BookTokForKids, a growing niche)",
      "Local schools and libraries (author visits)",
      "Etsy (signed copies and plushies)",
    ],
    plan: [
      ["Pre launch", "Send 50 free copies to mommy bloggers and kindergarten teachers", "10 genuine reviews"],
      ["Launch week", "Instagram Reel: 15 second read aloud with your child or puppet", "10k+ views"],
      ["Month 1", "Partner with 1 kid's book box subscription (e.g., Literati)", "500 bulk order"],
      ["Month 2", "Run a school visit contest: Buy 20 copies, author visits your class via Zoom", "500 sales"],
    ],
    budget: "$400",
    metric: "Teacher and parent testimonials and repeat purchases",
  },
  {
    id: "horror",
    icon: "👻",
    title: "Horror",
    profile: [
      "Age 20 to 40, balanced gender, slightly male skewing",
      "Seeks dread, atmosphere, unique monsters",
      "Loyal to sub niches (cosmic horror, splatterpunk, gothic)",
      "Active on Reddit and horror podcasts",
    ],
    platforms: [
      "Reddit (r/horrorlit, r/nosleep)",
      "Horror YouTube (e.g., Bedtime Stories channel)",
      "TikTok (#HorrorBookTok)",
    ],
    plan: [
      ["Pre launch", "Release a free horror short story on your website (same universe as the novel)", "Email signups"],
      ["Launch week", "Post in r/horrorlit: I wrote a folk horror novel set in Appalachia, first 10 commenters get free ebook", "10 reviews day 1"],
      ["Month 1", "Pitch 20 horror podcasts (e.g., The NoSleep Podcast, Horror Hill)", "3 to 5 interviews"],
      ["Month 2", "Amazon ads with dark horror, slow burn terror, cosmic dread keywords", "$0.25 CPC"],
    ],
    budget: "$250",
    metric: "This kept me up at night reviews",
  },
  {
    id: "poetry",
    icon: "🖋️",
    title: "Poetry",
    profile: [
      "Age 18 to 35, heavily female",
      "Follows modern poets (Rupi Kaur, Atticus)",
      "Highly visual and short form",
      "Buys paperback (gift purchases)",
    ],
    platforms: [
      "Instagram (visual poetry posts)",
      "TikTok (poetry readings with ambient music)",
      "Etsy (signed chapbooks, stickers)",
    ],
    plan: [
      ["Pre launch", "Post 1 poem every day on Instagram for 30 days (carousel format)", "5k followers"],
      ["Launch week", "Instagram Live launch party, read 5 poems, answer questions", "50 to 100 sales"],
      ["Month 1", "Collaborate with 5 poetry accounts (shout out swaps)", "Steady growth"],
      ["Month 2", "TikTok poem plus rain sound plus typing POV, a viral format", "100k+ views possible"],
    ],
    budget: "$50",
    metric: "Shares and tag a friend who needs this comments",
  },
];

function PlanTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-32">Phase</TableHead>
            <TableHead className="min-w-64">Action</TableHead>
            <TableHead className="min-w-48">Expected Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium align-top">{r[0]}</TableCell>
              <TableCell className="align-top">{r[1]}</TableCell>
              <TableCell className="align-top">{r[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function GenreBlock({ g }: { g: (typeof genres)[number] }) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-serif text-xl mb-2">Reader Profile</h3>
          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
            {g.profile.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-2">Best Platforms</h3>
          <ul className="list-disc pl-5 space-y-1 text-foreground/80">
            {g.platforms.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-serif text-xl mb-2">12 Week Working Plan</h3>
        <PlanTable rows={g.plan} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-border p-4 bg-secondary/40">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Budget</div>
          <div className="font-serif text-2xl mt-1">{g.budget}</div>
        </div>
        <div className="rounded-lg border border-border p-4 bg-secondary/40">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Key Success Metric</div>
          <div className="mt-1 text-foreground/90">{g.metric}</div>
        </div>
      </div>
    </div>
  );
}

function GenreStrategiesPage() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/60 to-background border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <Badge variant="secondary" className="mb-4">Last Updated: June 9, 2026</Badge>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight">
              Genre Specific Book Marketing Strategies
            </h1>
            <p className="mt-2 text-lg md:text-xl text-muted-foreground">
              Complete Author Resource
            </p>
            <p className="mt-6 text-lg text-foreground/80 max-w-3xl">
              This free research based guide provides realistic, working marketing plans for authors
              across 8 major genres. Each plan includes reader profiles, best platforms, 12 week
              timelines, budgets, and key success metrics. No fluff. No generic advice.
            </p>
          </div>
        </section>

        {/* TOC */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="font-serif text-2xl mb-4">Table of Contents</h2>
          <ol className="grid sm:grid-cols-2 gap-2 list-decimal pl-5">
            {toc.map((t) => (
              <li key={t.id}>
                <a className="text-primary hover:underline" href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ol>
        </section>

        {/* General */}
        <section id="general" className="mx-auto max-w-5xl px-6 py-10 scroll-mt-24">
          <h2 className="font-serif text-3xl mb-4">1. General Marketing Strategies (Universal)</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-48">Strategy</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Email List", "Owner audience; reader magnet (free chapter, short story, checklist)"],
                  ["Amazon Optimization", "Keywords, categories, A+ content, Kindle Unlimited"],
                  ["ARC Teams", "Advance Review Copies leading to 20+ reviews before launch"],
                  ["Paid Ads", "Amazon Ads, Facebook/Instagram, BookBub (genre dependent)"],
                  ["Social Media Niche", "TikTok, Instagram, Reddit, FB groups (platform varies by genre)"],
                  ["Cross Promotions", "Newsletter swaps, boxed sets, promo stacks"],
                ].map(([s, d]) => (
                  <TableRow key={s}>
                    <TableCell className="font-medium align-top">{s}</TableCell>
                    <TableCell className="align-top">{d}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/10 p-5">
            <p className="italic text-foreground/90">
              Golden rule: Generic ads fail. Genre specific targeting plus reader psychology equals sales.
            </p>
          </div>
        </section>

        {/* Genres */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <Accordion type="multiple" className="w-full">
            {genres.map((g, idx) => (
              <AccordionItem key={g.id} value={g.id} id={g.id} className="scroll-mt-24">
                <AccordionTrigger className="text-left">
                  <span className="font-serif text-xl md:text-2xl">
                    <span className="mr-2">{g.icon}</span>
                    {idx + 2}. {g.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2">
                    <GenreBlock g={g} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Summary */}
        <section id="summary" className="mx-auto max-w-5xl px-6 py-10 scroll-mt-24">
          <h2 className="font-serif text-3xl mb-4">10. Summary Table & KPIs</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Genre</TableHead>
                  <TableHead>Primary Strategy</TableHead>
                  <TableHead>Monthly Budget (First 3 Months)</TableHead>
                  <TableHead>Best Platform</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Memoir", "Podcasts plus emotional video", "$500", "Goodreads / Podcasts"],
                  ["Thriller", "Amazon KU plus TikTok plot twists", "$800", "TikTok / Reddit"],
                  ["Romance", "Email list plus trope content", "$300", "TikTok / FB groups"],
                  ["Sci Fi/Fantasy", "Free series starter plus Reddit", "$200", "Reddit / BookTube"],
                  ["Self Help", "Webinar plus lead magnet", "$1,000", "LinkedIn / Podcasts"],
                  ["Children's Books", "Teacher and school outreach", "$400", "Instagram / Local"],
                  ["Horror", "Reddit plus horror podcasts", "$250", "Reddit / YouTube"],
                  ["Poetry", "Daily Instagram visual poems", "$50", "Instagram / TikTok"],
                ].map((r) => (
                  <TableRow key={r[0]}>
                    {r.map((c, i) => (
                      <TableCell key={i} className={i === 0 ? "font-medium" : ""}>{c}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <h3 className="font-serif text-2xl mt-10 mb-4">Universal KPIs</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Tool</TableHead>
                  <TableHead>Good Target</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ["Email open rate", "ConvertKit / MailerLite", "≥ 40%"],
                  ["Cost per sale (ads)", "Amazon/Facebook Ads", "≤ $2.50"],
                  ["Reviews (within 60 days)", "Amazon", "≥ 50"],
                  ["Read through (series)", "Kindle Unlimited dashboard", "≥ 60% Book 1 to Book 2"],
                ].map((r) => (
                  <TableRow key={r[0]}>
                    {r.map((c, i) => (
                      <TableCell key={i} className={i === 0 ? "font-medium" : ""}>{c}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-6">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-secondary/40 to-background p-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl">
              Want a custom marketing plan for your specific book?
            </h2>
            <p className="mt-3 text-foreground/80 max-w-2xl mx-auto">
              Contact us for a consultation tailored to your genre, audience, and launch timeline.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request a Custom Genre Plan</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="/genre-book-marketing-strategies.pdf"
                  download="Genre-Book-Marketing-Strategies.pdf"
                >
                  Download PDF Version
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 flex items-center justify-center"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <SiteFooter />
    </div>
  );
}
