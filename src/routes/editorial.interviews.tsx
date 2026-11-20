import { createFileRoute } from "@tanstack/react-router";
import { EditorialCategoryPage } from "@/components/EditorialCategoryPage";

export const Route = createFileRoute("/editorial/interviews")({
  head: () => ({
    meta: [
      { title: "Author Interviews — GrowthSpark Editorial" },
      { name: "description", content: "In depth conversations with authors on craft, process, inspiration, and the writing life." },
    ],
    links: [{ rel: "canonical", href: "https://growthsparkimpact.lovable.app/editorial/interviews" }],
  }),
  component: () => (
    <EditorialCategoryPage
      kicker="Author Interviews"
      title="Conversations with the authors we admire."
      intro="GrowthSpark Editorial conducts long form interviews exploring the writing journey, creative inspiration, publishing experience, character development, research process, future projects, and reading recommendations of the authors we feature."
      sections={[
        { heading: "The writing journey", body: "How each author found their voice, the manuscripts that never made it out of the drawer, and the pivotal moment their work found its readers." },
        { heading: "Creative inspiration", body: "The books, films, cities, and quiet obsessions that fuel their imagination." },
        { heading: "Publishing experience", body: "What the road looked like, from first submission to bookstore shelf, and what they would do differently." },
        { heading: "Character development", body: "How characters take shape on the page, and the ones the author is still thinking about years later." },
        { heading: "Research process", body: "The libraries, interviews, and rabbit holes that give their fiction its foundation in fact." },
        { heading: "Future projects", body: "What is next, in as much detail as they are willing to share." },
        { heading: "Reading recommendations", body: "The books they press into every friend's hands, and the ones they wish more readers knew about." },
      ]}
      footnote="New interviews are added regularly. If you are an author whose work aligns with our editorial standards, our team will contact you directly."
    />
  ),
});
