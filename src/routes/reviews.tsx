import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Star, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews | GrowthSpark Impact" },
      {
        name: "description",
        content:
          "Share your experience working with GrowthSpark Impact. Read verified client reviews from authors and publishing brands we have partnered with.",
      },
      { property: "og:title", content: "Client Reviews, GrowthSpark Impact" },
      {
        property: "og:description",
        content: "Your experience matters. Share your experience working with GrowthSpark Impact.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://growthsparkimpact.lovable.app/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/reviews" }],
  }),
  component: Reviews,
});

const services = [
  "Author Visibility Audit",
  "Amazon Optimization",
  "Author Growth Roadmaps",
  "Goodreads Visibility Campaigns",
  "Book Trailer Production",
  "Author Branding & Social Media",
  "Reader Acquisition & Outreach",
  "Launch Strategy & Momentum",
  "One Time Services",
  "Book Ascendancy Program",
  "Author Profile Feature",
  "Other",
];

type PublicReview = {
  id: string;
  author_name: string | null;
  book_title: string | null;
  service_used: string;
  rating: number;
  review_title: string;
  review_body: string;
  created_at: string;
};

const inputClass =
  "w-full rounded-lg border border-[oklch(0.236_0.047_306_/_0.2)] bg-[oklch(0.236_0.047_306_/_0.05)] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-gold/70 transition";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={15}
          className={n <= value ? "fill-gold text-gold" : "text-muted-foreground/40"}
          aria-hidden
        />
      ))}
    </div>
  );
}

function Reviews() {
  const [reviews, setReviews] = useState<PublicReview[] | null>(null);
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    supabase.rpc("get_approved_reviews").then(({ data, error: err }) => {
      if (!active) return;
      if (err) console.error(err);
      setReviews((data as PublicReview[] | null) ?? []);
    });
    return () => {
      active = false;
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    if (get("website")) return; // honeypot

    if (rating < 1) {
      setError("Please select a rating from 1 to 5 stars.");
      return;
    }
    if (get("review_body").length < 20) {
      setError("Please write at least a few sentences about your experience.");
      return;
    }
    if (!fd.get("permission_to_display") || !fd.get("genuine_experience")) {
      setError("Please confirm both statements before submitting.");
      return;
    }

    setSubmitting(true);
    const { error: err } = await supabase.from("client_reviews").insert({
      full_name: get("full_name"),
      email: get("email"),
      author_name: get("author_name") || null,
      book_title: get("book_title") || null,
      service_used: get("service_used"),
      rating,
      review_title: get("review_title"),
      review_body: get("review_body"),
      permission_to_display: true,
      genuine_experience: true,
    });
    setSubmitting(false);

    if (err) {
      console.error(err);
      if (err.code === "23505") {
        setError("It looks like you have already submitted a review with this title. Thank you.");
      } else {
        setError("We could not submit your review. Please try again in a moment.");
      }
      return;
    }
    form.reset();
    setRating(0);
    setDone(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="border-b border-[oklch(0.236_0.047_306_/_0.14)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-28 pb-20">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="h-px w-10 bg-gold/60" /> Client Reviews
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Your Experience <span className="text-gradient-gold italic">Matters.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Have you worked with GrowthSpark Impact? Share your experience and help us continue
            building a stronger experience for authors.
          </p>
          <div className="mt-10">
            <a
              href="#leave-a-review"
              className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition"
            >
              Leave a Review <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* PUBLISHED REVIEWS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Published Reviews</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">What authors say.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every review published here comes from a real client and is reviewed before publication.
            We never publish invented quotes, names, or ratings.
          </p>

          <div className="mt-12">
            {reviews === null ? (
              <div className="surface-card rounded-2xl p-10 text-sm text-muted-foreground">
                Loading reviews.
              </div>
            ) : reviews.length === 0 ? (
              <div className="surface-card rounded-2xl p-10 md:p-14 max-w-3xl">
                <Quote className="text-gold/60" size={26} aria-hidden />
                <h3 className="mt-5 font-serif text-2xl md:text-3xl">
                  No published reviews yet.
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We only publish reviews written by real clients, and each one is reviewed before it
                  appears here. Rather than fill this space with invented quotes, we are leaving it
                  open until the first approved review is published. If you have worked with us, your
                  experience would be the first.
                </p>
                <a
                  href="#leave-a-review"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all"
                >
                  Share your experience <ArrowRight size={16} />
                </a>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((r) => (
                  <article key={r.id} className="surface-card rounded-2xl p-7 flex flex-col">
                    <Stars value={r.rating} />
                    <h3 className="mt-4 font-serif text-xl leading-tight">{r.review_title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {r.review_body}
                    </p>
                    <div className="mt-6 pt-5 border-t border-[oklch(0.236_0.047_306_/_0.16)]">
                      <div className="text-sm text-foreground">{r.author_name || "Verified Client"}</div>
                      {r.book_title && (
                        <div className="text-xs text-muted-foreground italic mt-0.5">{r.book_title}</div>
                      )}
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gold">
                        {r.service_used}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section
        id="leave-a-review"
        className="py-24 border-t border-[oklch(0.236_0.047_306_/_0.14)] bg-[var(--section-alt)] scroll-mt-24"
      >
        <div className="mx-auto max-w-[820px] px-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Leave a Review</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            What was your experience working with GrowthSpark Impact?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Your email address is used only to verify your review. It is never displayed publicly.
            Submissions are reviewed before publication.
          </p>

          {done ? (
            <div className="mt-10 surface-card rounded-2xl p-10" role="status">
              <h3 className="font-serif text-2xl text-gold">Review received</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Thank you for sharing your experience. Your review has been received and will be
                reviewed before publication.
              </p>
              <button
                type="button"
                onClick={() => setDone(false)}
                className="mt-8 text-sm text-gold hover:underline"
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 surface-card rounded-2xl p-7 md:p-10 space-y-6">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="full_name" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input id="full_name" name="full_name" required minLength={2} maxLength={120} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input id="email" name="email" type="email" required maxLength={200} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="author_name" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Author or Professional Name <span className="normal-case tracking-normal">(optional)</span>
                  </label>
                  <input id="author_name" name="author_name" maxLength={120} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="book_title" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Book Title <span className="normal-case tracking-normal">(optional)</span>
                  </label>
                  <input id="book_title" name="book_title" maxLength={200} className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="service_used" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Service Used
                </label>
                <select id="service_used" name="service_used" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-[var(--section-alt)]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Rating</span>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      aria-pressed={rating === n}
                      className="p-1.5 rounded-md hover:bg-[oklch(0.236_0.047_306_/_0.12)] transition"
                    >
                      <Star size={24} className={n <= rating ? "fill-gold text-gold" : "text-muted-foreground/50"} />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {rating > 0 ? `${rating} of 5` : "Select a rating"}
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="review_title" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Review Title
                </label>
                <input id="review_title" name="review_title" required minLength={3} maxLength={140} className={inputClass} />
              </div>

              <div>
                <label htmlFor="review_body" className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Review
                </label>
                <textarea
                  id="review_body"
                  name="review_body"
                  required
                  minLength={20}
                  maxLength={5000}
                  rows={7}
                  placeholder="What was your experience working with GrowthSpark Impact?"
                  className={inputClass}
                />
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <label className="flex gap-3 items-start cursor-pointer">
                  <input type="checkbox" name="permission_to_display" required className="mt-1 accent-[var(--gold)]" />
                  <span>I give GrowthSpark Impact permission to display my review on its website.</span>
                </label>
                <label className="flex gap-3 items-start cursor-pointer">
                  <input type="checkbox" name="genuine_experience" required className="mt-1 accent-[var(--gold)]" />
                  <span>I confirm that this review reflects my genuine experience.</span>
                </label>
              </div>

              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition disabled:opacity-60"
              >
                {submitting ? "Submitting" : "Submit My Review"} <ArrowRight size={16} />
              </button>
              <p className="text-xs text-muted-foreground">
                Submitting a review does not guarantee publication.
              </p>
            </form>
          )}

          <div className="mt-12 text-sm text-muted-foreground">
            Prefer to speak with us directly?{" "}
            <Link to="/contact" className="text-gold hover:underline">
              Book a discovery call
            </Link>
            .
          </div>
        </div>
      </section>
    </>
  );
}
