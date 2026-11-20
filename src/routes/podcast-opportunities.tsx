import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import hero from "@/assets/podcast-hero.jpg";
import micBook from "@/assets/podcast-mic-book.jpg";

const URL = "https://growthsparkimpact.lovable.app/podcast-opportunities";
const TITLE = "GrowthSpark Podcast Opportunities | GrowthSpark Impact";
const DESC =
  "GrowthSpark Impact helps authors find relevant podcast conversations, connect with suitable independent hosts, and manage personalized outreach.";

export const Route = createFileRoute("/podcast-opportunities")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: PodcastPage,
});

const benefits = [
  { k: "Book Discovery", t: "Reach Readers Who Connect With Your Book", d: "Relevant podcast conversations can introduce your book to listeners who are already interested in its subject, themes, or ideas, creating opportunities for new readers to discover your work." },
  { k: "New Clients", t: "Create Opportunities Beyond the Book", d: "For authors who are also consultants, coaches, professionals, speakers, or entrepreneurs, podcast interviews can introduce their expertise to potential clients and professional communities." },
  { k: "Credibility", t: "Share Your Expertise With Confidence", d: "Thoughtful conversations allow you to explain your knowledge, experiences, and perspectives in a way that helps audiences understand your professional background and expertise." },
  { k: "Publicity", t: "Extend the Reach of Your Story", d: "Podcast appearances create additional opportunities to discuss your work, introduce your book, and expand awareness across relevant communities." },
];

const steps = [
  { t: "Author and Book Research", d: "We review your background, expertise, book themes, and goals to understand the perspective you can bring to a conversation." },
  { t: "Podcast Discovery", d: "We research relevant podcast shows, hosts, topics, and listener communities that align with your book and professional interests." },
  { t: "Personalized Outreach", d: "We prepare thoughtful, tailored pitches that communicate why your perspective and book could contribute to a particular podcast conversation." },
  { t: "Follow-ups and Coordination", d: "We conduct outreach and follow-ups within the agreed scope, monitor responses, and help coordinate communication when hosts express interest." },
];

const deliverables = [
  { t: "Author and book research", d: "A review of your background, expertise, book themes, and goals to inform the outreach." },
  { t: "Podcast and host research", d: "Research into potentially relevant shows, hosts, subjects, and listener audiences." },
  { t: "Personalized podcast pitches", d: "Pitch copy tailored to your perspective and the individual show's topics and audience." },
  { t: "Outreach and follow-ups", d: "Podcast outreach and follow-ups carried out according to the agreed service scope." },
  { t: "Response monitoring and coordination", d: "Monitoring host responses and coordinating communication when a host expresses interest." },
  { t: "Preparation resources", d: "Relevant resources to help you organize your ideas and communicate clearly, as included in your agreed offering." },
];

const bonuses = [
  { t: "Pre-Interview Purpose Brief", d: "An overview of a potential conversation's purpose, audience, and suggested topics. When included, it is shared during preparation for a relevant opportunity, at the stage agreed with you. A brief does not mean an interview is confirmed.", lines: ["Purpose", "Audience", "Suggested topics"] },
  { t: "Author Media Kit", d: "Host-facing information that may include your biography, book details, expertise, relevant talking points, and other useful background you provide. When included, it is prepared during the agreed service for use in podcast outreach.", lines: ["Biography", "Book details", "Expertise"] },
  { t: "Podcast Interview Preparation Guide", d: "A practical guide to organizing talking points, explaining ideas clearly, and preparing for interview questions. When included, it is shared during the agreed preparation stage; receiving it does not guarantee a booking.", lines: ["Talking points", "Clarity", "Preparation"] },
];

const pillars = [
  { t: "Thoughtful Research", d: "Understand the book and author before identifying opportunities." },
  { t: "Relevant Connections", d: "Focus on podcast audiences that align with the author's subject matter and expertise." },
  { t: "Personal Communication", d: "Approach each opportunity with tailored messaging rather than generic mass outreach." },
];

const audiences = [
  "Fiction and nonfiction authors",
  "Memoirists with experiences to share",
  "Business and leadership authors",
  "Christian authors and faith-based writers",
  "Academics and researchers",
  "Coaches, consultants, and professionals who have written books",
  "Authors exploring new ways to connect with relevant communities",
];

const faqs = [
  { q: "What does GrowthSpark Impact do for authors?", a: "We provide podcast research and outreach services on your behalf: author and book research, podcast and host research, personalized pitches, agreed outreach and follow-ups, and response monitoring. When hosts express interest, we help coordinate communication. Preparation resources are included according to the agreed service scope." },
  { q: "Do you own the podcasts you contact?", a: "No. GrowthSpark Impact does not own the podcasts it contacts. We research and approach independently operated shows based on their relevance to your book and audience. Hosts retain control over guest selection, editorial decisions, and scheduling." },
  { q: "Will I be guaranteed a podcast interview?", a: "No. Neither a response nor an interview is guaranteed. Bookings depend on host interest, editorial fit, availability, and scheduling. We agree the research and outreach scope with you, but the decision to invite a guest belongs to each host." },
  { q: "What complimentary resources are included?", a: "The agreed offering may include a Pre-Interview Purpose Brief, an Author Media Kit, and a Podcast Interview Preparation Guide. These cover a potential conversation's purpose and audience, useful host-facing author and book information, and practical preparation advice. We confirm inclusions and delivery stages with you; resources are not unconditionally available before you become a client and do not imply a confirmed interview." },
  { q: "Can podcast appearances help me sell books or attract clients?", a: "Relevant appearances may support book discovery, professional credibility, and publicity. For authors whose work includes professional services, they may also create opportunities to connect with prospective clients. We cannot guarantee book sales, client acquisition, publicity results, or any other commercial outcome." },
  { q: "How do I get started?", a: "Use our Contact page and select Podcast Outreach and Guest Opportunities under Inquiry Type. Tell us about your book, background, and goals. We can then discuss relevant opportunities and agree a suitable scope before any outreach begins." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow-gold">
      <span className="rule-gold" /> {children}
    </div>
  );
}

function PodcastPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hairline-b">
        <img src={hero} alt="Vintage microphone on a wooden desk beside stacked books in warm light" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative container-editorial pt-28 pb-24 md:pt-40 md:pb-36 fade-up">
          <Eyebrow>GrowthSpark Podcast Opportunities</Eyebrow>
          <h1 className="display-1 mt-8 max-w-4xl">
            Your Story Has a Place in the <span className="text-gradient-gold italic">Right Conversation.</span>
          </h1>
          <p className="lede mt-8 max-w-2xl">
            Every book carries an idea, experience, or perspective worth sharing. GrowthSpark Impact helps you identify potentially relevant podcast opportunities and manages the research, personalized pitches, and outreach on your behalf, so you can focus on the ideas you want to share.
          </p>
          <p className="mt-6 font-serif italic text-xl text-gold/90">Where Authors, Ideas, and Audiences Come Together.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="btn-gold h-auto whitespace-normal text-left"><a href="#value">Explore the Opportunities <ArrowRight size={14} /></a></Button>
            <Button asChild variant="ghost" className="btn-ghost h-auto whitespace-normal"><a href="#approach">How It Works</a></Button>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="value" className="section-pad hairline-b scroll-mt-24">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Eyebrow>The Value of Being Heard</Eyebrow>
              <h2 className="display-2 mt-6">One Conversation Can Open New Possibilities.</h2>
            </div>
            <p className="lede lg:col-span-6 lg:col-start-7 self-end">
              Relevant podcast appearances may support book discovery, professional credibility, and publicity. For authors who offer professional services, they may also open conversations with prospective clients. These possibilities depend on audience fit and are not promised results.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <article key={b.t} className="surface-card rounded-2xl p-8 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow-gold">{b.k}</span>
                  <span className="font-serif text-3xl text-gold/40">0{i + 1}</span>
                </div>
                <h3 className="display-3 mt-6 !text-2xl md:!text-3xl">{b.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{b.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground italic">These are potential benefits of relevant podcast appearances. Outcomes vary and are never guaranteed.</p>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="section-pad hairline-b scroll-mt-24 bg-[var(--section-alt)]">
        <div className="container-editorial">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="display-2 mt-6 max-w-3xl">Finding the Conversations That Fit Your Story.</h2>
          <p className="lede mt-6 max-w-2xl">
            Every author has a different voice, audience, and reason for writing. That is why we focus on relevant connections rather than sending generic pitches to as many podcasts as possible.
          </p>
          <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[oklch(0.236_0.047_306_/_0.14)] rounded-2xl overflow-hidden">
            {steps.map((s, i) => (
              <li key={s.t} className="bg-background p-8">
                <span className="font-serif text-5xl text-gold">{i + 1}</span>
                <h3 className="mt-6 font-serif text-2xl leading-tight">{s.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 hairline-t pt-12">
            <Eyebrow>What You Receive</Eyebrow>
            <h3 className="mt-6 font-serif text-3xl">Practical support, with a clearly agreed scope.</h3>
            <dl className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-8">
              {deliverables.map((item) => (
                <div key={item.t}>
                  <dt className="font-serif text-xl text-gold">{item.t}</dt>
                  <dd className="mt-3 text-muted-foreground leading-relaxed">{item.d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-3xl text-sm text-muted-foreground leading-relaxed">The precise deliverables, extent of outreach, follow-ups, and resource timing depend on the service agreed with you. Not every outreach attempt receives a response, and no interview or commercial outcome is guaranteed.</p>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="section-pad-lg hairline-b">
        <div className="container-editorial">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center"><Eyebrow>Complimentary Author Bonuses</Eyebrow></div>
            <h2 className="display-2 mt-6">Additional Support for Every Step of Your Podcast Journey.</h2>
            <p className="lede mt-6">
              Depending on your agreed offering, these complimentary resources help you present your work professionally and prepare for potential conversations. We confirm what is included and when each resource will be shared as part of your service.
            </p>
          </div>
          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {bonuses.map((b) => (
              <article key={b.t} className="surface-card rounded-2xl p-8 flex flex-col">
                {/* document mockup */}
                <div className="relative mx-auto w-full max-w-[220px] aspect-[3/4] rounded-md bg-[oklch(0.95_0.012_85)] p-5 shadow-2xl rotate-[-2deg]">
                  <div className="h-1 w-10 bg-[oklch(0.62_0.1_80)]" />
                  <p className="mt-4 font-serif text-[15px] leading-snug text-[oklch(0.2_0.01_250)]">{b.t}</p>
                  <div className="mt-5 space-y-3">
                    {b.lines.map((l) => (
                      <div key={l}>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[oklch(0.45_0.02_80)]">{l}</p>
                        <div className="mt-1 h-1 w-full rounded bg-[oklch(0.82_0.01_85)]" />
                        <div className="mt-1 h-1 w-3/4 rounded bg-[oklch(0.82_0.01_85)]" />
                      </div>
                    ))}
                  </div>
                  <p className="absolute bottom-4 left-5 text-[8px] uppercase tracking-[0.2em] text-[oklch(0.45_0.02_80)]">GrowthSpark Impact</p>
                </div>
                <span className="mt-10 eyebrow-gold !text-[10px]">Complimentary Author Resource</span>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{b.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{b.d}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground italic">Included according to the agreed service offering, not unconditionally before you become a client. Preparation does not mean an interview is confirmed.</p>
        </div>
      </section>

      {/* PERSONALIZED */}
      <section className="section-pad hairline-b">
        <div className="container-editorial grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Why a Personalized Approach Matters</Eyebrow>
            <h2 className="display-2 mt-6">Your Story Is Not a Mass Pitch.</h2>
            <p className="lede mt-6">
              Your book should not be reduced to a generic promotional message. We believe podcast outreach should begin with understanding the author, recognizing the ideas behind the book, and finding the conversations where those ideas genuinely belong.
            </p>
          </div>
          <div className="divide-y divide-[oklch(0.236_0.047_306_/_0.16)] border-y border-[oklch(0.236_0.047_306_/_0.16)]">
            {pillars.map((p) => (
              <div key={p.t} className="py-8">
                <h3 className="font-serif text-2xl text-gold">{p.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="section-pad hairline-b bg-[var(--section-alt)]">
        <div className="container-editorial">
          <Eyebrow>Who Can Benefit</Eyebrow>
          <h2 className="display-2 mt-6 max-w-3xl">Conversations for Authors With Something to Share.</h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {audiences.map((a, i) => (
              <div key={a} className="border-t border-[oklch(0.236_0.047_306_/_0.18)] py-6 flex gap-5">
                <span className="font-serif italic text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-serif text-xl leading-snug">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-muted-foreground leading-relaxed">
            Podcast suitability depends on the book, the author, the show's subject matter, and the host's interests. Every conversation begins with an honest look at fit.
          </p>
        </div>
      </section>

      {/* INVITATION */}
      <section className="section-pad hairline-b">
        <div className="container-editorial max-w-3xl text-center">
          <h2 className="display-2">Let's Explore Where Your Story Could Go.</h2>
          <p className="lede mt-6">
            Your next podcast conversation may introduce your ideas to someone who has been looking for exactly the perspective you bring. Let's explore the opportunities that make sense for your book, your experience, and your goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild className="btn-gold h-auto whitespace-normal"><Link to="/contact">Start a Conversation <ArrowRight size={14} /></Link></Button>
            <Button asChild variant="ghost" className="btn-ghost h-auto whitespace-normal"><Link to="/contact">Book a Discovery Call</Link></Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad hairline-b">
        <div className="container-editorial max-w-3xl">
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`} className="border-[oklch(0.236_0.047_306_/_0.16)]">
                <AccordionTrigger className="font-serif text-xl text-left hover:no-underline hover:text-gold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL */}
      <section className="relative overflow-hidden">
        <img src={micBook} alt="Microphone beside an open book in warm low light" loading="lazy" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="relative container-editorial section-pad-lg text-center">
          <h2 className="display-2 max-w-3xl mx-auto text-gradient-gold">Every Meaningful Conversation Begins With a Story.</h2>
          <p className="lede mt-6 max-w-xl mx-auto">Let's discover the conversations where your ideas can find new audiences.</p>
          <Button asChild className="btn-gold h-auto whitespace-normal mt-10 max-w-full"><Link to="/contact">Connect With GrowthSpark Impact <ArrowRight size={14} /></Link></Button>
        </div>
      </section>
    </>
  );
}
