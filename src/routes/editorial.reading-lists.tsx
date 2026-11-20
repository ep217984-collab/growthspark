import { createFileRoute } from "@tanstack/react-router";
import { EditorialCategoryPage } from "@/components/EditorialCategoryPage";

export const Route = createFileRoute("/editorial/reading-lists")({
  head: () => ({
    meta: [
      { title: "Reading Lists — GrowthSpark Editorial" },
      { name: "description", content: "Themed reading lists from the GrowthSpark editorial team." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/reading-lists" }],
  }),
  component: () => (
    <EditorialCategoryPage
      kicker="Reading Lists"
      title="Where to begin, when the shelf feels overwhelming."
      intro="Themed reading lists from the GrowthSpark team, designed to give readers a coherent month, or a coherent shelf."
      sections={[
        { heading: "For readers new to a genre", body: "The entry points that make the rest of a genre make sense." },
        { heading: "For readers with a favorite author", body: "What to read while waiting for the next book from a writer you love." },
        { heading: "For readers in a slump", body: "The shorter, sharper books that get you back to reading." },
        { heading: "For readers who prefer nonfiction", body: "Narrative nonfiction that reads with the pace of a novel." },
      ]}
      footnote="Every list is annotated. We do not simply hand you titles. We tell you why they are on the list, and where to start."
    />
  ),
});
