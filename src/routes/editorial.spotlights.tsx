import { createFileRoute } from "@tanstack/react-router";
import { EditorialCategoryPage } from "@/components/EditorialCategoryPage";

export const Route = createFileRoute("/editorial/spotlights")({
  head: () => ({
    meta: [
      { title: "Book Spotlights — GrowthSpark Editorial" },
      { name: "description", content: "Concise editorial introductions to books deserving greater recognition." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/spotlights" }],
  }),
  component: () => (
    <EditorialCategoryPage
      kicker="Book Spotlights"
      title="Books deserving a wider readership."
      intro="Spotlights are concise editorial introductions to books our team believes readers should know about. Every spotlight includes a synopsis, editorial commentary, recommendation, genre information, and a clear sense of who should read it."
      sections={[
        { heading: "Book cover", body: "Presented prominently, as any bookseller would." },
        { heading: "Synopsis", body: "A tight, honest summary of the book itself, in our own words." },
        { heading: "Editorial commentary", body: "What our team makes of the writing, the structure, and the ideas at work." },
        { heading: "Reader recommendation", body: "Whether we would put the book on our own nightstand, and why." },
        { heading: "Genre information", body: "Where the book sits, and where it quietly refuses to sit." },
        { heading: "Who should read it", body: "The reader, in their armchair, that this book is quietly waiting for." },
      ]}
      footnote="Spotlights are shorter than our long form Featured Author profiles, and no less considered."
    />
  ),
});
