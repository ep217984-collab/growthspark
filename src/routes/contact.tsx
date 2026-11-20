import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { buildInquiryMailto, podcastInquiryCategory } from "@/lib/contact-inquiry";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | GrowthSpark Impact" },
      { name: "description", content: "Reach the GrowthSpark Impact studio. Book a discovery call or send a private inquiry." },
      { property: "og:title", content: "Contact, GrowthSpark Impact" },
      { property: "og:description", content: "Book a discovery call with the GrowthSpark Impact studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/contact" }],
  }),
  component: Contact,
});

const emails = [
  { label: "Brand Inquiries", value: "growthsparkimpact@gmail.com" },
  { label: "Founder Direct", value: "connectwithemmanuel928@gmail.com" },
  { label: "Alternate", value: "emmanuelpromise2673@gmail.com" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [category, setCategory] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    window.location.href = buildInquiryMailto(fd);
    setSent(true);
  }

  return (
    <>
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Contact The Studio
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Let's talk about your <span className="text-gradient-gold italic">book and your readers.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Discovery calls are private, no-pressure, and senior-led. We'll review
            where you are, where you want to go, and recommend the right engagement
            honestly, even if it isn't us.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Direct Channels</span>
              <h2 className="mt-3 font-serif text-3xl">Reach us directly.</h2>
            </div>
            <div className="space-y-3">
              {emails.map((e) => (
                <a key={e.value} href={`mailto:${e.value}`} className="block surface-card rounded-2xl p-5 hover:border-gold/40 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[oklch(1_0_0_/_0.03)] border border-[oklch(1_0_0_/_0.1)] flex items-center justify-center">
                      <Mail size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-gold">{e.label}</div>
                      <div className="text-sm text-foreground/85 break-all">{e.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="surface-card rounded-2xl p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold">Prefer the audit first?</div>
              <p className="mt-2 text-sm text-muted-foreground">Claim a free Book Visibility Audit, a senior review of your positioning, listing, and discoverability.</p>
              <Link to="/audit" className="mt-4 inline-flex items-center text-sm text-gold hover:underline">Start the audit →</Link>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 surface-card rounded-2xl p-8 md:p-10 space-y-5">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Discovery Inquiry</span>
              <h2 className="mt-2 font-serif text-2xl md:text-3xl">Tell us about your book.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your Name" name="name" required />
              <Field label="Email Address" name="email" type="email" required />
              <Field label="Book Title" name="book" />
              <Field label="Genre" name="genre" />
              <Field label="Stage" name="stage" placeholder="Pre-launch, launched, established…" />
              <Field label="Budget Tier" name="budget" placeholder="Starter, Growth, Authority, Legacy" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="category">Inquiry Type</label>
              <select id="category" name="category" value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 w-full min-w-0 rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold transition">
                <option value="">General Discovery Inquiry</option>
                <option value={podcastInquiryCategory}>{podcastInquiryCategory}</option>
              </select>
              {category && <p className="mt-2 text-sm leading-relaxed text-gold">{category}</p>}
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" defaultValue="Discovery inquiry" className="mt-2 w-full rounded-lg border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.02)] px-4 py-3 outline-none focus:border-gold transition" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-lg border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.02)] px-4 py-3 outline-none focus:border-gold transition resize-none" />
            </div>
            <Button type="submit" className="h-auto w-full bg-gold text-primary-foreground rounded-full py-3.5 font-semibold text-sm tracking-wide hover:opacity-90 transition">
              {sent ? "Opening your email…" : "Send Inquiry"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">Replies typically within one business day.</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground" htmlFor={name}>{label}{required && " *"}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-lg border border-[oklch(1_0_0_/_0.12)] bg-[oklch(1_0_0_/_0.02)] px-4 py-3 outline-none focus:border-gold transition" />
    </div>
  );
}
