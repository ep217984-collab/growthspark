import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2 } from "@/components/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [{ title: "Refund Policy | GrowthSpark Impact" }, { name: "description", content: "GrowthSpark Impact refund terms for one-time audits and ongoing engagements." }], links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/refund-policy" }] }),
  component: () => (
    <LegalPage title="Refund Policy" updated="June 2026">
      <p>We believe in clear, fair terms. Refund handling depends on the engagement type.</p>
      <H2>Starter (One-Time Audit)</H2>
      <p>Because work begins immediately upon onboarding and includes senior strategist time, the Starter audit is non-refundable once work has commenced. If you change your mind before kickoff, you may request a full refund within 48 hours of purchase.</p>
      <H2>Monthly Engagements (Growth / Authority / Legacy)</H2>
      <p>Monthly fees cover the month in which they are billed and are non-refundable once that month has begun. You may cancel renewal at any time with 14 days' notice before the next billing cycle.</p>
      <H2>Ad Spend</H2>
      <p>Ad spend is invoiced separately and paid directly to the ad platforms. Refunds on ad spend are governed by those platforms.</p>
      <H2>Disputes</H2>
      <p>If you believe a refund situation falls outside this policy, please contact us directly. We resolve issues quickly and fairly.</p>
      <H2>Contact</H2>
      <p>growthsparkimpact@gmail.com</p>
    </LegalPage>
  ),
});
