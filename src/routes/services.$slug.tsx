import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { coreServices, getServiceBySlug } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      return {
        meta: [
          { title: "Service Not Found | GrowthSpark Impact" },
          { name: "description", content: "This service could not be found. Explore the full list of GrowthSpark Impact growth services." },
          { property: "og:title", content: "Service Not Found | GrowthSpark Impact" },
          { property: "og:description", content: "This service could not be found. Explore the full list of GrowthSpark Impact growth services." },
          { tagName: "link", rel: "canonical", href: `https://growthsparkimpact.lovable.app/services/${params.slug}` },
        ],
      };
    }
    return {
      meta: [
        { title: `${service.name} | GrowthSpark Impact` },
        { name: "description", content: service.tagline },
        { property: "og:title", content: `${service.name} | GrowthSpark Impact` },
        { property: "og:description", content: service.tagline },
        { tagName: "link", rel: "canonical", href: `https://growthsparkimpact.lovable.app/services/${service.slug}` },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl">Service not found</h1>
          <p className="mt-4 text-muted-foreground">
            We couldn't find the service you were looking for. It may have been renamed or moved.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition"
          >
            Back to Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    );
  }

  const index = coreServices.findIndex((s) => s.slug === slug);
  const prev = coreServices[(index - 1 + coreServices.length) % coreServices.length];
  const next = coreServices[(index + 1) % coreServices.length];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1000px] px-6 pt-28 pb-16">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Core Growth Service
          </div>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.1] max-w-3xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.tagline}</p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm text-gold hover:opacity-80 transition"
          >
            Back to all services
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] px-6">
        {/* OVERVIEW */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Overview</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">What it is.</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{service.whatItIs}</p>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Who It's For</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Built for authors like you.</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {service.whoItIsFor.map((w) => (
              <li key={w} className="surface-card rounded-2xl p-5 flex gap-3 text-foreground/85">
                <Check size={18} className="text-gold shrink-0 mt-0.5" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CHALLENGE */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">The Challenge</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Why this happens.</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{service.challenge}</p>
        </section>

        {/* APPROACH */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Our Approach</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">How we work.</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{service.approach}</p>
        </section>

        {/* PROCESS */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Process</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Step by step.</h2>
          <ol className="mt-8 space-y-4">
            {service.process.map((p, idx) => (
              <li key={p} className="surface-card rounded-2xl p-5 flex gap-4 items-start">
                <span className="font-serif text-2xl text-gold shrink-0 w-8">{String(idx + 1).padStart(2, "0")}</span>
                <span className="text-foreground/85 mt-1">{p}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* DELIVERABLES */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Deliverables</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">What you receive.</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-foreground/85">
                <Check size={16} className="text-gold shrink-0 mt-1" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* EXAMPLE WORK */}
        {service.exampleWork && (
          <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Example Work</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">See it in practice.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{service.exampleWork}</p>
          </section>
        )}

        {/* OUTCOMES */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Expected Outcomes</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">What changes.</h2>
          <ul className="mt-8 space-y-3">
            {service.outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-foreground/85">
                <Check size={16} className="text-gold shrink-0 mt-1" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-14 border-b border-[oklch(0.308_0.034_127_/_0.14)]">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Why It Matters</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">The bigger picture.</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{service.whyItMatters}</p>
        </section>

        {/* FAQ */}
        <section className="py-14">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">FAQ</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Common questions.</h2>
          <Accordion type="single" collapsible className="mt-8">
            {service.faqs.map((f, idx) => (
              <AccordionItem key={f.q} value={`faq-${idx}`} className="border-[oklch(0.308_0.034_127_/_0.18)]">
                <AccordionTrigger className="text-left font-serif text-lg">{f.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      {/* CTA */}
      <section className="py-24 border-t border-[oklch(0.308_0.034_127_/_0.14)] bg-[var(--section-alt)]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Ready to start with {service.name}?</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Book a discovery call to talk through fit, or explore our one-time services for a lighter starting point.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Book a Discovery Call <ArrowRight size={16} />
            </Link>
            <Link to="/one-time-services" className="inline-flex items-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-7 py-3.5 rounded-full font-medium text-sm tracking-wide hover:border-gold hover:text-gold transition">
              One-Time Services
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 border-t border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1000px] px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Related Services</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Often paired with this.</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {coreServices
              .filter((s) => s.slug !== slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="surface-card rounded-2xl p-6 hover:border-gold/40 transition"
                >
                  <div className="font-serif text-xl leading-tight">{s.name}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}

      <section className="py-10 border-t border-[oklch(0.308_0.034_127_/_0.14)]">
        <div className="mx-auto max-w-[1000px] px-6 flex flex-col sm:flex-row justify-between gap-4">
          <Link
            to="/services/$slug"
            params={{ slug: prev.slug }}
            className="surface-card rounded-2xl p-5 flex-1 hover:border-gold/40 transition"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Previous</div>
            <div className="mt-2 font-serif text-lg">{prev.name}</div>
          </Link>
          <Link
            to="/services/$slug"
            params={{ slug: next.slug }}
            className="surface-card rounded-2xl p-5 flex-1 text-right hover:border-gold/40 transition"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Next</div>
            <div className="mt-2 font-serif text-lg">{next.name}</div>
          </Link>
        </div>
      </section>
    </>
  );
}
