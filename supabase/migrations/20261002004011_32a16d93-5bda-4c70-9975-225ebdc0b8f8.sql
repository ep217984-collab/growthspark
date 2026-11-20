CREATE OR REPLACE FUNCTION public.get_approved_reviews()
RETURNS TABLE (
  id uuid,
  author_name text,
  book_title text,
  service_used text,
  rating smallint,
  review_title text,
  review_body text,
  created_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id, author_name, book_title, service_used, rating, review_title, review_body, created_at
  FROM public.client_reviews
  WHERE status = 'approved'
  ORDER BY created_at DESC
$$;

REVOKE ALL ON FUNCTION public.get_approved_reviews() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_approved_reviews() TO anon, authenticated;

DROP POLICY IF EXISTS "Anyone can read approved reviews" ON public.client_reviews;
REVOKE SELECT ON public.client_reviews FROM anon, authenticated;
