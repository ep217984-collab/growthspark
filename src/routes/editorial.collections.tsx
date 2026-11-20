import { createFileRoute } from "@tanstack/react-router";
import { EditorialCategoryPage } from "@/components/EditorialCategoryPage";

export const Route = createFileRoute("/editorial/collections")({
  head: () => ({
    meta: [
      { title: "Seasonal Collections — GrowthSpark Editorial" },
      { name: "description", content: "Curated seasonal reading collections that follow the rhythm of the year." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/collections" }],
  }),
  component: () => (
    <EditorialCategoryPage
      kicker="Seasonal Collections"
      title="Books for the season you are actually in."
      intro="Curated collections that follow the rhythm of the year, presented with the care of a bookseller who knows their shop."
      sections={[
        { heading: "Christmas Reads", body: "Comfort, warmth, and the occasional ghost story." },
        { heading: "Summer Reading", body: "Books that hold up on a beach chair, and reward you when you return to them at home." },
        { heading: "Autumn Favorites", body: "Slower novels for shorter days." },
        { heading: "Black History Month", body: "Essential and overlooked voices in Black literature." },
        { heading: "Women's History Month", body: "The women reshaping the canon, past and present." },
        { heading: "Halloween Reads", body: "Gothic, uncanny, and quietly unsettling." },
        { heading: "Historical Fiction Month", body: "A dedicated season for the genre we most often champion." },
        { heading: "Romance Week", body: "The romances our editors return to." },
      ]}
      footnote="Each collection has its own dedicated landing page as the season approaches."
    />
  ),
});
