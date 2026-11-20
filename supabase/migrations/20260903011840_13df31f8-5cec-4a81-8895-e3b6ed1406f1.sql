CREATE TYPE public.review_status AS ENUM ('pending', 'approved', 'rejected');

CREATE TABLE public.client_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(trim(full_name)) BETWEEN 2 AND 120),
  email text NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND char_length(email) <= 200),
  author_name text CHECK (author_name IS NULL OR char_length(author_name) <= 120),
  book_title text CHECK (book_title IS NULL OR char_length(book_title) <= 200),
  service_used text NOT NULL CHECK (char_length(trim(service_used)) BETWEEN 2 AND 160),
  rating smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_title text NOT NULL CHECK (char_length(trim(review_title)) BETWEEN 3 AND 140),
  review_body text NOT NULL CHECK (char_length(trim(review_body)) BETWEEN 20 AND 5000),
  permission_to_display boolean NOT NULL CHECK (permission_to_display = true),
  genuine_experience boolean NOT NULL CHECK (genuine_experience = true),
  status public.review_status NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX client_reviews_dedupe_idx
  ON public.client_reviews (lower(email), lower(review_title));

GRANT SELECT (id, full_name, author_name, book_title, service_used, rating, review_title, review_body, status, created_at)
  ON public.client_reviews TO anon, authenticated;
GRANT INSERT (full_name, email, author_name, book_title, service_used, rating, review_title, review_body, permission_to_display, genuine_experience)
  ON public.client_reviews TO anon, authenticated;
GRANT ALL ON public.client_reviews TO service_role;

ALTER TABLE public.client_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON public.client_reviews FOR SELECT TO anon, authenticated
  USING (status = 'approved');

CREATE POLICY "Anyone can submit a review"
  ON public.client_reviews FOR INSERT TO anon, authenticated
  WITH CHECK (status = 'pending');
