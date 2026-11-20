import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2 } from "@/components/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy | GrowthSpark Impact" }, { name: "description", content: "How GrowthSpark Impact uses cookies and similar technologies." }], links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/cookies" }] }),
  component: () => (
    <LegalPage title="Cookie Policy" updated="June 2026">
      <p>This policy explains how we use cookies and similar technologies on the GrowthSpark Impact website.</p>
      <H2>What Are Cookies</H2>
      <p>Cookies are small text files stored on your device when you visit a website. They help the site function, remember preferences, and understand how visitors use it.</p>
      <H2>How We Use Them</H2>
      <p>We use a minimal set of cookies for essential site functionality and lightweight analytics that help us understand traffic patterns. We do not use third-party advertising cookies.</p>
      <H2>Managing Cookies</H2>
      <p>You can disable cookies in your browser settings at any time. Some parts of the site may not function as intended if cookies are disabled.</p>
      <H2>Updates</H2>
      <p>We may update this policy as our use of cookies evolves. Changes will be reflected on this page.</p>
      <H2>Contact</H2>
      <p>growthsparkimpact@gmail.com</p>
    </LegalPage>
  ),
});
