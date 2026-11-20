import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free Book Visibility Audit | GrowthSpark Impact" },
      { name: "description", content: "Claim a free Book Visibility Audit, a senior review of your positioning, retail listing, metadata, and discoverability." },
      { property: "og:title", content: "Free Book Visibility Audit, GrowthSpark Impact" },
      { property: "og:description", content: "A senior-led visibility audit of your book, free." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/audit" }],
  }),
  component: Audit,
});

const includes = [
  "Positioning & blurb review",
  "Cover & metadata audit",
  "Category & keyword analysis",
  "Comp title and shelf-neighbor check",
  "Retail listing critique (Amazon focus)",
  "Reader funnel observations",
  "Three prioritized recommendations",
];

function Audit() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Free Book Visibility Audit Request");
    const body = encodeURIComponent(
      `Audit request from the GrowthSpark Impact website.\n\nName: ${fd.get("name")}\nEmail: ${fd.get("email")}\nBook Title: ${fd.get("book")}\nGenre: ${fd.get("genre")}\nAmazon Link: ${fd.get("link") || ", "}\nGoal: ${fd.get("goal") || ", "}`
    );
    window.location.href = `mailto:growthsparkimpact@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Complimentary Senior Audit
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            A free Book Visibility Audit, <span className="text-gradient-gold italic">led by a senior strategist.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us about your book. We'll review your positioning, listing, and
            discoverability and send you three prioritized recommendations you can act
            on this week, at no cost and with no obligation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">What's Included</span>
            <h2 className="font-serif text-3xl md:text-4xl">A senior review, free.</h2>
            <ul className="mt-4 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex gap-3 text-foreground/85">
                  <CheckCircle2 size={18} className="text-gold shrink-0 mt-1" /> {i}
                </li>
              ))}
            </ul>
            <div className="surface-card rounded-2xl p-6 mt-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold">How It Works</div>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><span className="text-foreground">1.</span> Submit the form, takes under two minutes.</li>
                <li><span className="text-foreground">2.</span> A senior strategist personally reviews your book.</li>
                <li><span className="text-foreground">3.</span> We send your audit within 3, 5 business days.</li>
                <li><span className="text-foreground">4.</span> No pitch. No pressure. Just useful work.</li>
              </ol>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 surface-card rounded-2xl p-8 md:p-10 space-y-5">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Request Your Audit</span>
              <h2 className="mt-2 font-serif text-2xl md:text-3xl">Tell us about your book.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your Name" name="name" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Book Title" name="book" required />
              <Field label="Genre" name="genre" required />
              <div className="md:col-span-2">
                <Field label="Amazon / Retail Link (optional)" name="link" />
              </div>
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="goal">What's your main goal right now?</label>
                <textarea id="goal" name="goal" rows={4} className="mt-2 w-full rounded-lg border border-[oklch(0.308_0.034_127_/_0.2)] bg-[oklch(0.308_0.034_127_/_0.04)] px-4 py-3 outline-none focus:border-gold transition resize-none" />
              </div>
            </div>
            <button type="submit" className="w-full bg-gold text-primary-foreground rounded-full py-3.5 font-semibold text-sm tracking-wide hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              {sent ? "Opening your email…" : <>Claim My Free Audit <ArrowRight size={16} /></>}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Limited audits available each month. Prefer to talk first? <Link to="/contact" className="text-gold hover:underline">Book a discovery call</Link>.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor={name}>{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full rounded-lg border border-[oklch(0.308_0.034_127_/_0.2)] bg-[oklch(0.308_0.034_127_/_0.04)] px-4 py-3 outline-none focus:border-gold transition" />
    </div>
  );
}
