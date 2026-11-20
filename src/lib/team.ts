
export type TeamMember = {
  name: string;
  role: string;
  division: string;
  photo?: string;
  bio: string;
};

export const teamIntro = {
  eyebrow: "The People Behind The Work",
  title: "A senior team, organised into clear divisions.",
  paragraphs: [
    "GrowthSpark Impact is powered by a multidisciplinary team of strategists, creatives, technologists, analysts, and relationship builders who work together to support authors at every stage of their publishing journey.",
    "Each division owns a defined part of the engagement, and every division reports into the same strategic plan. That structure is what allows a boutique studio to deliver integrated work without junior handoffs or outsourced execution.",
    "The people you meet on your first discovery call are the people who do the work.",
  ],
};

export const team: TeamMember[] = [
  {
    name: "Emmanuel Promise",
    role: "Founder & Lead Growth Strategist",
    division: "Strategy Division",
    bio: "Sets the strategic direction on every account. Leads positioning, launch architecture, and the long view on each author's career. Personally on the first call of every engagement.",
  },
  {
    name: "Darasimi",
    role: "Reader Acquisition Lead",
    division: "Reader Acquisition Division",
    bio: "Owns reader acquisition across Amazon, BookBub, Meta, and TikTok. Creative testing, audience strategy, and the disciplined optimisation that turns budget into compounding readership.",
  },
  {
    name: "Samuel",
    role: "Brand & Content Strategist",
    division: "Brand & Content Division",
    bio: "Shapes the language around each book: blurbs, hooks, landing pages, editorial calendars, and brand voice. Bridges craft and conversion across every author touchpoint.",
  },
  {
    name: "Daniel",
    role: "Analytics & Lifecycle Lead",
    division: "Analytics & Lifecycle Division",
    bio: "Builds the dashboards, email automations, and lifecycle systems that turn one time buyers into long term readers. Measures what matters and reports it plainly.",
  },
  {
    name: "Victor",
    role: "Technology & Digital Experience Director",
    division: "Technology & Digital Experience Division",
    bio: "Leads website strategy, UX, automation, digital infrastructure, and platform performance so every engagement is supported by a modern, scalable, reliable digital ecosystem.",
  },
  {
    name: "Ayandiran Solomon",
    role: "Director of Strategic Growth & Author Partnerships",
    division: "Strategic Growth & Author Partnerships Division",
    bio: "Leads strategic growth initiatives and author partnership development at GrowthSpark Impact. Works on long term growth planning, author opportunity development, partnership sourcing, and relationship management across the publishing ecosystem, helping authors access the collaborations, communities, and platforms that extend their visibility well beyond a single launch.",
  },
  {
    name: "Abraham Prinsley",
    role: "Director of Strategic Partnerships & Author Success",
    division: "Strategic Partnerships & Author Success Division",
    bio: "Cultivates relationships across the publishing ecosystem with literary organisations, book communities, reviewers, content creators, and publishing professionals. Also oversees the author experience across the full client journey, ensuring every engagement reflects our standard of professionalism and transparency.",
  },
  {
    name: "Monday Jeremiah",
    role: "Director of Publishing Partnerships & Literary Engagement",
    division: "Publishing Partnerships & Literary Engagement Division",
    bio: "Connects GrowthSpark authors with independent bookstores, reader communities, media outlets, podcasts, reviewers, literary festivals, and book clubs, creating opportunities that extend far past the marketing plan itself.",
  },
  {
    name: "Michael Jeremiah",
    role: "Creative Director & Visual Brand Experience",
    division: "Creative Division",
    bio: "Owns visual strategy and creative execution: author brand identity, book trailer creative direction, website art direction, campaign design systems, motion graphics, and creative quality assurance.",
  },
  {
    name: "Utibe",
    role: "Editorial & Author Relations Director",
    division: "Editorial & Author Relations",
    bio: "Utibe leads editorial development and author relationship initiatives at GrowthSpark Impact. He helps shape author features, editorial campaigns, author communications, interview opportunities, and long form literary content while ensuring every author interaction reflects the quality and professionalism of the GrowthSpark Impact brand.",
  },
  {
    name: "Wasiu Toheeb",
    role: "Author Growth & Partnerships Manager",
    division: "Author Growth & Partnerships",
    bio: "Wasiu supports author growth initiatives and partnership development at GrowthSpark Impact. He helps identify opportunities for author outreach, literary partnerships, reader engagement, and strategic relationship development while supporting initiatives designed to strengthen long term connections between authors, readers, and relevant literary communities.",
  },
  {
    name: "Sunday David",
    role: "Director of Business Development & Strategic Partnerships",
    division: "Business Development & Strategic Partnerships Division",
    bio: "Sunday David serves as the Director of Business Development & Strategic Partnerships at GrowthSpark Impact. He focuses on identifying growth opportunities, building meaningful professional relationships, and developing strategic collaborations that strengthen the company's position within the author and publishing industry. His work supports the company's commitment to connecting authors with opportunities, resources, and partnerships that contribute to sustainable growth.",
  },
  {
    name: "Client Operations",
    role: "Onboarding · Scheduling · Reporting · Client Success",
    division: "Client Operations Division",
    bio: "The operational backbone of every engagement. Owns onboarding, billing coordination, scheduling, project administration, reporting cadence, and client success support.",
  },
];
