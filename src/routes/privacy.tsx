import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2 } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | GrowthSpark Impact" }, { name: "description", content: "How GrowthSpark Impact collects, uses, and protects your information." }], links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/privacy" }] }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>GrowthSpark Impact ("we", "our", "the studio") respects your privacy. This policy explains what we collect, why we collect it, and how we handle it.</p>
      <H2>Information We Collect</H2>
      <p>We collect information you voluntarily provide through forms on this site, including your name, email, book title, genre, and any details you share when requesting an audit, booking a discovery call, or subscribing to our newsletter.</p>
      <H2>How We Use It</H2>
      <p>We use your information solely to respond to your inquiry, deliver requested resources, send newsletter content you opted into, and coordinate engagements. We do not sell or rent your information to third parties.</p>
      <H2>Email Communications</H2>
      <p>You can unsubscribe from any non-transactional email at any time. Newsletter signups can be removed by replying "unsubscribe" or contacting us directly.</p>
      <H2>Cookies & Analytics</H2>
      <p>We use minimal analytics to understand how visitors use the site. See our Cookie Policy for details.</p>
      <H2>Data Retention</H2>
      <p>Inquiry and engagement records are retained for the duration of our working relationship and for a reasonable period afterward for accounting, legal, and reference purposes.</p>
      <H2>Your Rights</H2>
      <p>You may request access to, correction of, or deletion of your personal information by emailing growthsparkimpact@gmail.com.</p>
      <H2>Contact</H2>
      <p>Questions about this policy: growthsparkimpact@gmail.com</p>
    </LegalPage>
  ),
});
