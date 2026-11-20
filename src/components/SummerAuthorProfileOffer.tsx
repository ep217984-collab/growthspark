import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const includes = [
  "A long form, magazine style author profile",
  "A professionally written editorial feature",
  "A dedicated author hub page on our publication",
  "Book cover presentation for your titles",
  "Available retailer and buy links",
  "A permanent digital asset that stays online",
  "A shareable feature for your website, newsletter, and social media",
];

export function SummerAuthorProfileOffer() {
  return (
    <section className="py-20 border-t border-[oklch(0.308_0.034_127_/_0.14)]">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="surface-card rounded-2xl p-8 sm:p-10 md:p-14">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Summer Author Profile Offer</span>
            <div className="mt-5 flex justify-center">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold border border-gold/40 rounded-full px-4 py-2">
                <Sparkles size={12} /> 15% Summer Discount
              </span>
            </div>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-tight">
              A season to invest in your author story.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground leading-relaxed">
              For a limited season, GrowthSpark Impact is offering 15% off the Author Profile
              package. Ask us about the complimentary bonus included with the summer offer.
            </p>
          </div>

          <div className="mt-10 border-t border-[oklch(0.308_0.034_127_/_0.16)] pt-8">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">What an Author Profile Includes</span>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {includes.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                  <Check size={15} className="text-gold shrink-0 mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
              Request an Author Profile <ArrowRight size={16} />
            </Link>
            <Link to="/editorial/featured-authors" className="inline-flex items-center justify-center gap-2 border border-[oklch(0.308_0.034_127_/_0.3)] px-6 py-3 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
              Explore Author Profiles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
