import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";


export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Executive Leadership | GrowthSpark Impact" },
      { name: "description", content: "Meet the executive leadership of GrowthSpark Impact, a multidisciplinary partnership of strategists, creatives, technologists, and analysts serving serious authors." },
      { property: "og:title", content: "Executive Leadership, GrowthSpark Impact" },
      { property: "og:description", content: "A multidisciplinary partnership of strategists, creatives, technologists, and analysts." },
      { property: "og:url", content: "https://growthsparkimpact.lovable.app/leadership" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/leadership" }],
  }),
  component: LeadershipPage,
});

type Exec = {
  name: string;
  role: string;
  division: string;
  bio: string;
  responsibilities: string[];
  philosophy?: string;
  expertise?: string[];
};

const execs: Exec[] = [
  {
    name: "Emmanuel Promise",
    role: "Founder & Lead Growth Strategist",

    division: "Strategy Division",
    bio:
      "Emmanuel founded GrowthSpark Impact to give serious authors access to the kind of senior, integrated strategy usually reserved for large publishing brands. He leads engagements across positioning, catalog strategy, and long-term reader lifecycle.",
    responsibilities: [
      "Overall strategic direction of every client engagement",
      "Frameworks and methodology stewardship",
      "Senior consulting on flagship accounts",
    ],
    philosophy:
      "A book is the beginning of a relationship. Everything we build should honor that relationship and let it compound.",
    expertise: ["Author growth strategy", "Positioning", "Catalog & lifecycle"],
  },
  {
    name: "Darasimi",
    role: "Reader Acquisition Lead",
    division: "Reader Acquisition Division",
    bio:
      "Darasimi leads the systems that build owned author audiences, email, community, ARC, and creator programs, turning launch energy into a compounding reader base.",
    responsibilities: [
      "Reader acquisition strategy across engagements",
      "Community and ARC program design",
      "Creator and partnership outreach systems",
    ],
    philosophy:
      "You do not acquire readers. You earn them, and then you keep the promise.",
    expertise: ["Owned audience systems", "Community design", "Creator partnerships"],
  },
  {
    name: "Samuel",
    role: "Brand & Content Strategist",
    division: "Brand & Content Division",
    bio:
      "Samuel shapes the author brand systems and editorial voice that give a writer's public presence coherence, from platform bios to campaign copy to long-form content.",
    responsibilities: [
      "Author brand identity and voice systems",
      "Editorial calendars and content architecture",
      "Campaign copy and long-form editorial",
    ],
    philosophy:
      "Brand is what a reader believes about you when you're not in the room.",
    expertise: ["Brand systems", "Editorial strategy", "Copy craft"],
  },
  {
    name: "Daniel",
    role: "Analytics & Lifecycle Lead",
    division: "Analytics & Lifecycle Division",
    bio:
      "Daniel runs the analytical layer that keeps our decisions honest, reader lifecycle modeling, campaign measurement, and the reporting that turns activity into insight.",
    responsibilities: [
      "Reader lifecycle modeling",
      "Campaign and channel measurement",
      "Client reporting and insight cadence",
    ],
    philosophy:
      "Numbers tell you what happened. Judgment tells you what to do about it.",
    expertise: ["Lifecycle modeling", "Attribution", "Reporting systems"],
  },
  {
    name: "Victor",
    role: "Technology & Digital Experience Director",
    division: "Technology & Digital Experience Division",
    bio:
      "Victor leads the digital infrastructure behind our engagements, author websites, landing systems, marketing tech, and the technical rigor that keeps campaigns dependable.",
    responsibilities: [
      "Author websites and landing systems",
      "Marketing technology architecture",
      "Technical performance and reliability",
    ],
    philosophy:
      "Technology should disappear behind the reader's experience of the work.",
    expertise: ["Web strategy", "Martech", "Digital experience"],
  },
  {
    name: "Abraham Prinsley",
    role: "Director of Strategic Partnerships & Author Success",
    division: "Strategic Partnerships Division",
    bio:
      "Abraham leads the partnership ecosystem, including our long-term collaboration with Book Ascendancy Book Club, and stewards author success across the full engagement arc.",
    responsibilities: [
      "Strategic partnership program",
      "Author success across engagement lifecycle",
      "Cross-partner program design and stewardship",
    ],
    philosophy:
      "No author grows in isolation. The strongest careers are the ones with the strongest circle.",
    expertise: ["Partnership strategy", "Author success", "Program design"],
  },
  {
    name: "Michael Jeremiah",
    role: "Creative Director & Visual Brand Experience",
    division: "Creative Division",
    bio:
      "Michael leads the visual identity and creative direction for GrowthSpark Impact and the authors we serve, from book trailer creative to campaign design systems.",
    responsibilities: [
      "Visual identity systems for authors and campaigns",
      "Creative oversight of book trailers and film work",
      "Campaign art direction",
    ],
    philosophy:
      "Craft is the difference between something a reader notices and something they remember.",
    expertise: ["Art direction", "Book trailer creative", "Brand systems"],
  },
  {
    name: "Monday Jeremiah",
    role: "Director of Publishing Partnerships & Literary Engagement",
    division: "Publishing Partnerships Division",
    bio:
      "Monday leads publishing partnerships and literary engagement, connecting authors to the wider literary ecosystem and stewarding programs across our partner community.",
    responsibilities: [
      "Publishing and literary community partnerships",
      "Program stewardship across partner ecosystem",
      "Author-partner engagement design",
    ],
    philosophy:
      "The literary world is a community. Our role is to keep opening its doors.",
    expertise: ["Publishing partnerships", "Literary programs", "Community engagement"],
  },
  {
    name: "Daniel Akpan",
    role: "Director of Client Strategy & Business Transformation",
    division: "Client Strategy Division",
    bio:
      "Daniel leads client strategy and business transformation, helping authors think about their careers as businesses, and structuring engagements for sustainable long-term outcomes.",
    responsibilities: [
      "Client strategy across senior engagements",
      "Author business transformation programs",
      "Long-term engagement design",
    ],
    philosophy:
      "The most valuable thing we can give an author is a career worth compounding into.",
    expertise: ["Client strategy", "Author business design", "Transformation"],
  },
  {
    name: "Ayandiran Solomon",
    role: "Director of Strategic Growth & Author Partnerships",
    division: "Strategic Growth & Author Partnerships Division",
    bio:
      "Solomon leads strategic growth initiatives and author partnership development at GrowthSpark Impact. He focuses on long term growth planning and on sourcing the collaborations, communities, and platforms that extend an author's visibility well beyond a single launch.",
    responsibilities: [
      "Strategic growth planning across the client roster",
      "Author partnership sourcing and development",
      "Relationship management across the publishing ecosystem",
      "Author opportunity development and pipeline design",
    ],
    philosophy:
      "Growth is not a campaign you run once. It is a set of relationships you keep investing in.",
    expertise: ["Growth strategy", "Partnership development", "Author opportunity design"],
  },
  {
    name: "Utibe",
    role: "Editorial & Author Relations Director",
    division: "Editorial & Author Relations",
    bio:
      "Utibe leads editorial development and author relationship initiatives at GrowthSpark Impact. He helps shape author features, editorial campaigns, author communications, interview opportunities, and long form literary content while ensuring every author interaction reflects the quality and professionalism of the GrowthSpark Impact brand.",
    responsibilities: [
      "Author feature development",
      "Editorial content",
      "Author interviews",
      "Author communications",
      "Literary profile development",
      "Feature campaign coordination",
      "Author relationship management",
      "Editorial partnerships",
      "Content review",
      "Quality control",
    ],
    philosophy:
      "An author remembers how they were treated long after they forget the campaign metrics.",
    expertise: ["Editorial development", "Author relations", "Long form literary content"],
  },
  {
    name: "Wasiu Toheeb",
    role: "Author Growth & Partnerships Manager",
    division: "Author Growth & Partnerships",
    bio:
      "Wasiu supports author growth initiatives and partnership development at GrowthSpark Impact. He helps identify opportunities for author outreach, literary partnerships, reader engagement, and strategic relationship development while supporting initiatives designed to strengthen long term connections between authors, readers, and relevant literary communities.",
    responsibilities: [
      "Author growth support",
      "Partnership development",
      "Literary partnership research",
      "Author outreach support",
      "Reader engagement initiatives",
      "Community opportunity research",
      "Strategic relationship coordination",
      "Partnership communication",
      "Growth opportunity identification",
      "Campaign support",
    ],
    philosophy:
      "The right introduction, made at the right moment, can do more for an author than another month of spend.",
    expertise: ["Growth support", "Partnership research", "Reader engagement"],
  },
  {
    name: "Sunday David",
    role: "Director of Business Development & Strategic Partnerships",
    division: "Business Development & Strategic Partnerships Division",
    bio:
      "Sunday David serves as the Director of Business Development & Strategic Partnerships at GrowthSpark Impact. He focuses on identifying growth opportunities, building meaningful professional relationships, and developing strategic collaborations that strengthen the company's position within the author and publishing industry. His work supports the company's commitment to connecting authors with opportunities, resources, and partnerships that contribute to sustainable growth.",
    responsibilities: [
      "Identifying new business opportunities and potential growth channels.",
      "Building relationships with authors, publishers, and industry professionals.",
      "Developing strategic partnerships that support the company's expansion.",
      "Exploring collaborations that create value for authors and publishing brands.",
      "Supporting client acquisition and long-term business growth.",
    ],
  },
];


function LeadershipPage() {
  return (
    <>
      <section className="hairline-b">
        <div className="container-editorial pt-32 md:pt-44 pb-24">
          <div className="eyebrow-gold"><span className="rule-gold" />Executive Leadership</div>
          <h1 className="mt-8 display-1 max-w-[16ch]">
            A partnership of <span className="italic text-gradient-gold">disciplines.</span>
          </h1>
          <p className="mt-8 lede max-w-2xl">
            Thirteen divisions. One studio. GrowthSpark Impact is led by senior operators
            across strategy, creative, technology, partnerships, and analytics, each bringing deep expertise to every author engagement.
          </p>
        </div>
      </section>

      <section className="section-pad space-y-6">
        <div className="container-editorial space-y-6">
          {execs.map((e) => (
            <article key={e.name} className="surface-card rounded-2xl p-8 md:p-12 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="text-[10px] uppercase tracking-[0.24em] text-gold">{e.division}</div>
                <h2 className="mt-3 font-serif text-3xl">{e.name}</h2>
                <div className="mt-2 text-sm text-muted-foreground">{e.role}</div>
              </div>

              <div className="md:col-span-8 grid sm:grid-cols-2 gap-8 text-sm leading-relaxed">
                <div className="sm:col-span-2">
                  <div className="eyebrow"><span className="rule-gold" />Biography</div>
                  <p className="mt-4 text-foreground/90">{e.bio}</p>
                </div>
                <div>
                  <div className="eyebrow"><span className="rule-gold" />Responsibilities</div>
                  <ul className="mt-4 space-y-2 text-foreground/85">
                    {e.responsibilities.map((r) => <li key={r}>· {r}</li>)}
                  </ul>
                </div>
                {e.expertise && (
                  <div>
                    <div className="eyebrow"><span className="rule-gold" />Areas of expertise</div>
                    <ul className="mt-4 space-y-2 text-foreground/85">
                      {e.expertise.map((r) => <li key={r}>· {r}</li>)}
                    </ul>
                  </div>
                )}
                {e.philosophy && (
                  <div className="sm:col-span-2 hairline-t pt-6">
                    <div className="eyebrow-gold"><span className="rule-gold" />Philosophy</div>
                    <p className="mt-4 font-serif text-xl leading-snug text-foreground/95">"{e.philosophy}"</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad hairline-t bg-[oklch(0.18_0.012_250)]">
        <div className="container-editorial text-center">
          <div className="eyebrow-gold justify-center"><span className="rule-gold" />Work with us</div>
          <h2 className="mt-6 display-2 max-w-3xl mx-auto">
            The best engagements begin with a conversation.
          </h2>
          <div className="mt-10">
            <Link to="/contact" className="btn-gold">Book a Discovery Call <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
