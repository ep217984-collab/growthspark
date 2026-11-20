import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Sparkles, BookOpen, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "The Spark Newsletter | GrowthSpark Impact" },
      { name: "description", content: "A private newsletter for serious authors. Real book marketing strategy, distilled into short, practical notes." },
      { property: "og:title", content: "The Spark Newsletter, GrowthSpark Impact" },
      { property: "og:description", content: "Premium author growth notes, straight to your inbox." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/newsletter" }],
  }),
  component: Newsletter,
});

const perks = [
  { Icon: Sparkles, title: "Strategy Notes", body: "Short, sharp essays on positioning, launch, and reader acquisition, the same thinking we share with paying clients." },
  { Icon: BookOpen, title: "Author Playbooks", body: "Practical playbooks you can apply this week: blurb teardowns, ad creative angles, email flows, and landing page patterns." },
  { Icon: TrendingUp, title: "Market Signals", body: "What is actually working right now across genres, pricing, categories, creator platforms, and discovery channels worth your attention." },
];

function Newsletter() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("New newsletter signup, The Spark");
    const body = encodeURIComponent(`Please add me to The Spark newsletter.\n\nName: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:growthsparkimpact@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> The Spark · Private Newsletter
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Real book marketing, <span className="text-gradient-gold italic">straight to your inbox.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A private newsletter for authors who want clear, honest growth strategy.
            No fluff. No spam. One or two emails a month.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1140px] px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">What You'll Get</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">The same thinking we share with paying clients.</h2>
            <div className="mt-10 space-y-6">
              {perks.map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-[oklch(1_0_0_/_0.03)] border border-[oklch(1_0_0_/_0.1)] flex items-center justify-center">
                    <Icon className="text-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl">{title}</h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="surface-card rounded-2xl p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-[oklch(1_0_0_/_0.03)] border border-[oklch(1_0_0_/_0.1)] flex items-center justify-center">
                <Mail className="text-gold" size={18} />
              </div>
              <div>
                <div className="font-serif text-xl">Subscribe</div>
                <div className="text-xs text-muted-foreground">Free. Unsubscribe any time.</div>
              </div>
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="nl-name">Your Name</label>
              <input id="nl-name" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-lg border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.02)] px-4 py-3 outline-none focus:border-gold transition" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="nl-email">Email Address</label>
              <input id="nl-email" type="email" required maxLength={255} value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.02)] px-4 py-3 outline-none focus:border-gold transition" />
            </div>
            <button type="submit" className="w-full bg-gold text-primary-foreground rounded-full py-3.5 font-semibold text-sm tracking-wide hover:opacity-90 transition">
              {sent ? "Opening your email…" : "Sign Me Up"}
            </button>
            <p className="text-xs text-muted-foreground text-center">We respect your inbox. Your email is only used for The Spark.</p>
          </form>
        </div>
      </section>
    </>
  );
}
