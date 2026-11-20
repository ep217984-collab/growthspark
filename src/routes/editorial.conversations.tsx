import { createFileRoute } from "@tanstack/react-router";
import { EditorialCategoryPage } from "@/components/EditorialCategoryPage";

export const Route = createFileRoute("/editorial/conversations")({
  head: () => ({
    meta: [
      { title: "Literary Conversations — GrowthSpark Editorial" },
      { name: "description", content: "Long form editorial essays on publishing, reading, and the future of the book." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/conversations" }],
  }),
  component: () => (
    <EditorialCategoryPage
      kicker="Literary Conversations"
      title="Essays on the culture of books."
      intro="Long form editorial essays from the GrowthSpark team on the ideas shaping publishing and reading today."
      sections={[
        { heading: "The future of publishing", body: "How the industry is changing, and what remains stubbornly, wonderfully unchanged." },
        { heading: "Reader psychology", body: "Why we pick up the books we pick up, and why we finish so few of them." },
        { heading: "Why historical fiction matters", body: "The case for spending more time in centuries that are not our own." },
        { heading: "Building lasting author careers", body: "Not the launch, the decade after it." },
        { heading: "Book clubs and community", body: "Why the room a book is discussed in matters as much as the book itself." },
        { heading: "Independent publishing", body: "The imprints, editors, and authors quietly changing the industry from the outside." },
        { heading: "The importance of storytelling", body: "A defense of the oldest technology in human history." },
      ]}
      footnote="Literary Conversations are published on a slower cadence than our features. Each essay is written to be worth the reader's time."
    />
  ),
});
