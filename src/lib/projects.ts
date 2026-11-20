export type ProjectImage = { src: string; caption?: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  objectives: string[];
  services: string[];
  deliverables: string[];
  results: string[];
  challenge?: string;
  strategy?: string;
  execution?: string;
  learnings?: string;
  publishedAt: string;
  tags: string[];
  pdf?: string;
  video?: string;
  images?: ProjectImage[];
  links?: { label: string; href: string }[];
  redacted?: boolean;
};


export const projects: Project[] = [
  {
    slug: "changing-eyes-amazon-optimization",
    title: "Changing Eyes, Amazon Optimization Report",
    category: "Amazon Optimization Reports",
    client: "Leanne Antaya",
    summary: "A full Amazon listing optimization report covering metadata, category placement, keyword architecture, and conversion copy for an award winning memoir.",
    objectives: [
      "Improve organic discoverability inside Amazon's memoir category",
      "Increase click through from search results to product page",
      "Position the book alongside comparable award winning memoirs",
    ],
    services: ["Amazon SEO", "Metadata Engineering", "Category Placement", "Conversion Copywriting"],
    deliverables: ["Full audit report", "Optimized metadata sheet", "Category and keyword recommendations", "Rewritten book description"],
    results: [
      "Repositioned within a more accurate and less saturated memoir subcategory",
      "Restructured description for higher conversion on mobile",
      "Established a clear keyword architecture for ongoing testing",
    ],
    publishedAt: "July 2026",
    tags: ["Memoir", "Amazon", "Optimization"],
    pdf: "/proof-of-work/Changing_Eyes_Amazon_Optimization.pdf",
    images: [{ src: "/__l5e/assets-v1/afe48bae-cf61-43b5-9f8d-271850855d7c/changing-eyes-cover.png", caption: "Cover art used across the optimized listing" }],
    challenge: "The memoir sat in a broad, heavily contested category where it competed against high-profile titles, and its description was written for a reader who had already decided to buy rather than for one still deciding.",
    strategy: "Rebuild the listing from the backend out: research the language readers actually search when looking for this kind of memoir, move the book into a subcategory that matches its subject rather than its shelf, and rewrite the description to lead with the emotional hook.",
    execution: "Full metadata and category diagnostic, keyword architecture built around reader search language, a rewritten description structured for mobile reading, and a delivered report the author can implement or hand to a team.",
    learnings: "Category accuracy mattered more than category size. Moving the book somewhere smaller but truer put it in front of readers who were already looking for the subject.",
  },
  {
    slug: "a-flash-in-time-amazon-package",
    title: "A Flash In Time, Amazon Optimization Package",
    category: "Amazon Optimization Reports",
    client: "J. N. Frye",
    summary: "A complete Amazon optimization package for a fiction title, including listing rework, keyword strategy, and category positioning.",
    objectives: [
      "Establish visibility for a debut fiction release",
      "Build a defensible keyword footprint across relevant genre searches",
      "Position the book for long term rank stability",
    ],
    services: ["Amazon SEO", "Keyword Research", "Category Strategy", "Listing Copy"],
    deliverables: ["Full listing rewrite", "Keyword architecture", "Category placement recommendations", "Ongoing testing plan"],
    results: [
      "Cleaner listing structure aligned with reader search behavior",
      "Keyword architecture designed for iteration, not a single push",
      "Category placement matched to the book's actual audience",
    ],
    publishedAt: "June 2026",
    tags: ["Fiction", "Amazon", "Launch"],
    pdf: "/proof-of-work/A_Flash_In_Time_Amazon_Optimization_Package.pdf",
    challenge: "A debut fiction title had no search footprint at all, so nothing on the listing was working to attract readers who did not already know the author.",
    strategy: "Treat the listing as a long-term asset rather than a launch artefact: build a keyword architecture broad enough to test against, and choose categories the book could realistically hold.",
    execution: "Keyword research across genre search behaviour, a complete listing rewrite, category placement recommendations, and a testing plan the author can run over subsequent months.",
    learnings: "For a debut, the first listing is a hypothesis. Structuring it so it can be tested and revised matters more than getting every keyword right on day one.",
  },
  {
    slug: "john-frye-market-research",
    title: "Market Research and Competitive Intelligence Report",
    category: "Research Reports",
    client: "J. N. Frye",
    summary: "A market research and competitive intelligence report profiling comparable titles, reader behavior, and positioning opportunities.",
    objectives: [
      "Understand the competitive shelf around the client's release",
      "Identify positioning gaps in the category",
      "Inform launch messaging and long term audience strategy",
    ],
    services: ["Market Research", "Competitive Intelligence", "Audience Analysis", "Positioning Strategy"],
    deliverables: ["Category landscape overview", "Competitor teardowns", "Audience insights", "Positioning recommendations"],
    results: [
      "Clear picture of the shelf the book was entering",
      "Identified two positioning angles competitors were underusing",
      "Framework carried forward into launch messaging",
    ],
    publishedAt: "June 2026",
    tags: ["Research", "Fiction", "Positioning"],
    pdf: "/proof-of-work/John_Frye_Market_Research_Competitive_Intelligence.pdf",
    challenge: "The author was preparing to position a book without a clear picture of the competitive shelf, which risked messaging that echoed everything already there.",
    strategy: "Map the category as it actually appears to a reader: which comparable titles dominate, how they present themselves, and which angles are being underused.",
    execution: "Category landscape review, individual competitor teardowns, audience analysis, and a set of positioning recommendations carried into launch messaging.",
    learnings: "Two positioning angles were consistently underused by comparable titles, which gave the book something specific to own rather than a general claim to make.",
  },
  {
    slug: "john-frye-progress-report-june-2026",
    title: "Client Progress Report, June 2026",
    category: "Author Visibility Audits",
    client: "J. N. Frye",
    summary: "A monthly progress report documenting deliverables, results, and next steps across an active author growth engagement.",
    objectives: [
      "Give the client a transparent view of the month's work",
      "Report on visibility, listing performance, and campaign progress",
      "Confirm priorities for the following month",
    ],
    services: ["Account Management", "Reporting", "Author Growth Strategy"],
    deliverables: ["Work completed this month", "Metrics snapshot", "Learnings", "Next month's plan"],
    results: [
      "Documented, evidence based reporting",
      "Clarified priorities for the following cycle",
    ],
    publishedAt: "June 2026",
    tags: ["Reporting", "Client Ops"],
    pdf: "/proof-of-work/John_Frye_Progress_Report_June2026.pdf",
    challenge: "Ongoing engagements can drift when the client cannot see what has been done, why it was done, and what happens next.",
    strategy: "Report transparently every month: work completed, what was observed, what was learned, and the agreed priorities for the following cycle.",
    execution: "A written monthly report covering deliverables, a metrics snapshot from the platforms in use, documented learnings, and a plan for the next month.",
    learnings: "Regular written reporting kept priorities honest. Work that could not be justified in the report tended not to be worth doing.",
  },
  {
    slug: "peace-in-the-midst-editorial",
    title: "Peace in the Midst of the Storm, Editorial Feature",
    category: "Editorial Features",
    client: "Anonymous Author",
    summary: "A full length editorial feature exploring the book's themes, author story, and reader appeal, prepared for publication.",
    objectives: [
      "Introduce the book to a wider readership",
      "Position the author within the broader inspirational nonfiction category",
      "Create an evergreen editorial asset",
    ],
    services: ["Editorial Writing", "Author Research", "Positioning", "Publication Design"],
    deliverables: ["Long form feature article", "Author biography", "Editorial perspective"],
    results: [
      "A polished editorial asset the author can share indefinitely",
      "Clear positioning for the book's target reader",
    ],
    publishedAt: "July 2026",
    tags: ["Editorial", "Nonfiction"],
    pdf: "/proof-of-work/Peace_in_the_Midst_of_the_Storm.pdf",
    redacted: true,
    challenge: "The book's themes were difficult to convey in a retail description alone, so readers who would connect with it had no way to encounter it properly.",
    strategy: "Give the work an editorial home: a long-form feature that introduces the themes, the author, and the reader it is written for.",
    execution: "Author research and interview, a long-form feature article, an author biography, and a publication-ready editorial layout.",
    learnings: "A permanent editorial asset does work a listing cannot. It gives the author something to share indefinitely rather than something to promote once.",
  },
  {
    slug: "peace-in-the-midst-roadmap",
    title: "Peace in the Midst of the Storm, Growth Roadmap",
    category: "Author Growth Roadmaps",
    client: "Anonymous Author",
    summary: "A twelve month author growth roadmap covering visibility, retail optimization, reader acquisition, and community building.",
    objectives: [
      "Build a repeatable system for long term visibility",
      "Sequence tactics by priority and dependency",
      "Give the author a clear map for the year ahead",
    ],
    services: ["Growth Strategy", "Roadmap Design", "Retail Optimization", "Reader Acquisition"],
    deliverables: ["Twelve month roadmap", "Quarterly priorities", "Deliverable checklist"],
    results: [
      "A sequenced, testable plan the author can execute against",
      "Clear ownership between GrowthSpark and the author",
    ],
    publishedAt: "July 2026",
    tags: ["Roadmap", "Strategy"],
    pdf: "/proof-of-work/peace-in-the-midst-roadmap.pdf",
    redacted: true,
    challenge: "The author had ambition and no sequence, which meant several initiatives starting at once and none finishing well.",
    strategy: "Sequence the year by dependency: foundation first, then retail optimisation, then reader acquisition, then community, so each phase makes the next easier.",
    execution: "A twelve month roadmap with quarterly priorities, a deliverable checklist, and a clear division of ownership between GrowthSpark Impact and the author.",
    learnings: "Naming who owns each item was as important as the plan itself. Unowned tasks were the ones that stalled.",
  },
  {
    slug: "the-leaky-raft-roadmap",
    title: "The Leaky Raft, Growth Roadmap",
    category: "Author Growth Roadmaps",
    client: "Anonymous Author",
    summary: "A tailored growth roadmap for a fiction release, covering launch strategy, retail positioning, and long term audience development.",
    objectives: [
      "Design a launch that does not depend on a single spike",
      "Establish a retail position the book can defend",
      "Build the author's readership beyond the first title",
    ],
    services: ["Launch Strategy", "Retail Positioning", "Audience Development"],
    deliverables: ["Launch playbook", "Retail positioning brief", "Long term audience plan"],
    results: [
      "A launch designed for accumulation, not one large peak",
      "A clear next twelve months for the author",
    ],
    publishedAt: "July 2026",
    tags: ["Roadmap", "Fiction"],
    pdf: "/proof-of-work/the-leaky-raft-roadmap.pdf",
    redacted: true,
    challenge: "Launch plans that depend on a single release-week spike leave nothing behind once the week ends.",
    strategy: "Design the launch for accumulation: a retail position the book can defend, and audience building that continues past release.",
    execution: "A launch playbook, a retail positioning brief, and a long-term audience development plan covering the twelve months after release.",
    learnings: "Planning the months after launch changed the launch itself, because assets were built to be reused rather than spent.",
  },
  {
    slug: "bvm-service-knowledge-guide",
    title: "Book Visibility Method, Service Knowledge Guide",
    category: "Book Marketing Strategies",
    client: "GrowthSpark Impact",
    summary: "The internal service knowledge guide behind the Book Visibility Method, published as a public reference so authors can see exactly how we work.",
    objectives: [
      "Document the method so nothing depends on tribal knowledge",
      "Give prospective clients a transparent view of how we operate",
      "Serve as the training reference for our team",
    ],
    services: ["Methodology", "Documentation", "Enablement"],
    deliverables: ["Full service knowledge guide", "Process definitions", "Deliverable templates"],
    results: [
      "A shared reference for the whole team",
      "Faster onboarding, and more consistent client work",
    ],
    publishedAt: "July 2026",
    tags: ["Method", "Reference"],
    pdf: "/proof-of-work/BVM_Service_Knowledge_Guide.pdf",
    challenge: "Method knowledge lived in individual heads, which made onboarding slow and client work inconsistent.",
    strategy: "Document the method in full and publish it, so both the team and prospective clients can see exactly how the work is done.",
    execution: "A complete service knowledge guide with process definitions, deliverable templates, and quality standards for each stage.",
    learnings: "Publishing the method publicly raised the standard of the work, because anything vague had to be made explicit before it could be written down.",
  },
  {
    slug: "cinematic-book-trailer",
    title: "Cinematic Book Trailer Production",
    category: "Creative Production",
    client: "Anonymous Author",
    summary: "A cinematic book trailer produced for a launch campaign, cut for social platforms and paid placements.",
    objectives: [
      "Translate the book's tone into a short cinematic film",
      "Produce cutdowns sized for every major platform",
      "Give the launch campaign reusable creative",
    ],
    services: ["Creative Direction", "Video Production", "Editing and Sound Design", "Platform Cutdowns"],
    deliverables: ["Hero trailer", "Vertical and square cutdowns", "Static key frames for ads"],
    results: [
      "A launch asset the author can run indefinitely",
      "Stronger engagement across release week social",
    ],
    publishedAt: "July 2026",
    tags: ["Video", "Launch", "Creative"],
    video: "/__l5e/assets-v1/13a19ca9-7a84-46c0-a10d-2d3dfc774c65/testimonial-book.mp4",
    redacted: true,
    challenge: "The book's tone was hard to convey in static promotional images, and the campaign needed creative that worked across several platforms.",
    strategy: "Translate the book's atmosphere into a short film first, then cut it down rather than shooting separately for each placement.",
    execution: "Creative direction and script, production and edit, sound design, vertical and square cutdowns, and static key frames pulled for advertising.",
    learnings: "Producing the hero film with cutdowns planned from the start gave the campaign a full creative set from one production.",
  },
];

