import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, H2 } from "@/components/LegalPage";

export const Route = createFileRoute("/service-agreement")({
  head: () => ({ meta: [{ title: "Service Agreement | GrowthSpark Impact" }, { name: "description", content: "Standard service agreement terms for GrowthSpark Impact engagements." }], links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/service-agreement" }] }),
  component: () => (
    <LegalPage title="Service Agreement" updated="June 2026">
      <p>This summary outlines the standard terms that appear in our engagement contracts. A formal Service Agreement is signed at the start of every paid engagement.</p>
      <H2>Scope of Work</H2>
      <p>Each engagement is governed by a written scope outlining deliverables, timelines, ownership, and reporting cadence.</p>
      <H2>Payment Terms</H2>
      <p>Starter is invoiced upfront. Monthly engagements are invoiced at the start of each cycle. Payment is due on receipt unless otherwise agreed.</p>
      <H2>Confidentiality</H2>
      <p>We treat author identity, manuscripts, marketing data, and strategic plans as confidential. We do not disclose client identity without written permission.</p>
      <H2>Ownership</H2>
      <p>Final deliverables (copy, assets, plans) become the property of the client upon full payment. Underlying frameworks, templates, and tooling remain the property of GrowthSpark Impact.</p>
      <H2>Termination</H2>
      <p>Either party may terminate a monthly engagement with 14 days' written notice. Fees for work completed remain payable.</p>
      <H2>Governing Terms</H2>
      <p>Full terms, including indemnification, warranty, and jurisdiction, are contained in the signed engagement contract.</p>
      <H2>Contact</H2>
      <p>growthsparkimpact@gmail.com</p>
    </LegalPage>
  ),
});
