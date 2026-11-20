import { createFileRoute } from "@tanstack/react-router";
import { EditorialCategoryPage } from "@/components/EditorialCategoryPage";

export const Route = createFileRoute("/editorial/editors-picks")({
  head: () => ({
    meta: [
      { title: "Editor's Picks — GrowthSpark Editorial" },
      { name: "description", content: "Curated editorial recommendations across genre, mood, and season." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/editors-picks" }],
  }),
  component: () => (
    <EditorialCategoryPage
      kicker="Editor's Picks"
      title="Curated by our editors, for readers we trust."
      intro="Editor's Picks are our team's recommendations across the categories we cover most closely. Every pick links directly to its full editorial feature."
      sections={[
        { heading: "Best Historical Fiction", body: "The novels that make the past feel like a room you could walk into." },
        { heading: "Best Medieval Romance", body: "The romances that treat love as seriously as they treat their setting." },
        { heading: "Best Thrillers", body: "Books that keep the lights on and the pages turning long past midnight." },
        { heading: "Best Fantasy", body: "New worlds built with the care of a cathedral, and the wit of a good friend." },
        { heading: "Best Children's Books", body: "Books written for children, and quietly written for the adults reading aloud." },
        { heading: "Best Debut Novels", body: "The first novels that already read like the third." },
        { heading: "Hidden Gems", body: "The books our editors keep pressing into people's hands." },
        { heading: "Award Winners", body: "Recognized elsewhere, and worth revisiting here." },
      ]}
      footnote="Editor's Picks are refreshed regularly as new features are published."
    />
  ),
});
