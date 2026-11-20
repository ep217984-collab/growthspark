import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2 } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Service | GrowthSpark Impact" }, { name: "description", content: "Terms governing the use of the GrowthSpark Impact website and services." }], links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/terms" }] }),
  component: () => (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>By accessing or using this website and our services, you agree to these Terms of Service.</p>
      <H2>Use of the Site</H2>
      <p>This site is provided for informational purposes. You agree not to misuse the site, attempt unauthorized access, or interfere with its normal operation.</p>
      <H2>Engagements</H2>
      <p>All paid engagements are governed by a separate Service Agreement signed at the start of work. The plans and pricing displayed here are summary descriptions and may be tailored at engagement.</p>
      <H2>Intellectual Property</H2>
      <p>All content on this site, including writing, design, frameworks, and trademarks, is owned by GrowthSpark Impact and may not be reproduced without written permission.</p>
      <H2>Limitation of Liability</H2>
      <p>The site is provided "as is". GrowthSpark Impact is not liable for any indirect, incidental, or consequential damages arising from your use of the site or its content.</p>
      <H2>Changes</H2>
      <p>We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.</p>
      <H2>Contact</H2>
      <p>Questions: growthsparkimpact@gmail.com</p>
    </LegalPage>
  ),
});
