REVOKE SELECT (full_name) ON public.client_reviews FROM anon, authenticated;
REVOKE SELECT (email) ON public.client_reviews FROM anon, authenticated;
GRANT ALL ON public.client_reviews TO service_role;
