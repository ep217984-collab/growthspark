export type BookAscendancyProgram = {
  slug: string;
  name: string;
  kicker: string;
  whatItIs: string;
  whoItIsFor: string;
  howItWorks: string[];
  authorReceives: string[];
  readerParticipation: string;
  ctaLabel: string;
};

export const bookAscendancyPrograms: BookAscendancyProgram[] = [
  {
    slug: "author-interviews",
    name: "Author Interviews",
    kicker: "Editorial · Conversation",
    whatItIs:
      "A professionally hosted interview that introduces readers to the author behind the book: the craft, the intent, and the story that shaped the work.",
    whoItIsFor:
      "Authors preparing for a launch, entering a new market, or introducing their work to a wider reading community for the first time.",
    howItWorks: [
      "A discovery brief establishes the angle and question outline.",
      "A written or recorded interview session is conducted with the author.",
      "The interview is edited and returned to the author for review.",
      "The final piece is designed and published on the Book Ascendancy site.",
      "The feature is promoted across social channels and the newsletter.",
    ],
    authorReceives: [
      "A published editorial interview",
      "An author biography and creative process feature",
      "Shareable social assets",
      "Newsletter inclusion",
      "Author-owned copy for press or media kit use",
    ],
    readerParticipation:
      "Readers can submit questions ahead of the interview and respond publicly once the feature is published, creating an early point of contact with the author.",
    ctaLabel: "Inquire About an Interview",
  },
  {
    slug: "author-spotlights",
    name: "Author Spotlights",
    kicker: "Editorial · Profile",
    whatItIs:
      "A premium editorial feature that highlights the author, the book, and the story behind the work in a polished, magazine-style presentation.",
    whoItIsFor:
      "Authors seeking a considered editorial moment around a launch, a milestone, or a repositioning of an existing title.",
    howItWorks: [
      "Editorial intake and angle selection with the author.",
      "Review of manuscript and supporting materials.",
      "Drafting of the feature by the Book Ascendancy editorial team.",
      "Author approval of the final copy.",
      "Design, publication, and promotion across the community.",
    ],
    authorReceives: [
      "A published spotlight article",
      "A professional author profile",
      "Custom promotional graphics",
      "Optional homepage placement",
    ],
    readerParticipation:
      "Readers discover the spotlight through the homepage, newsletter, and social feed, and can leave comments or reading impressions on the published piece.",
    ctaLabel: "Inquire About a Spotlight",
  },
  {
    slug: "newspaper-spotlights",
    name: "Newspaper Spotlights",
    kicker: "Editorial · Keepsake Format",
    whatItIs:
      "A digital newspaper-style feature designed to showcase an author in a premium editorial format, complete with a front page, headline, editorial story, and design treatment.",
    whoItIsFor:
      "Authors who want a distinctive promotional asset with a heritage editorial feel, well-suited to launches, awards, and press outreach.",
    howItWorks: [
      "Editorial brief and story angle are agreed with the author.",
      "Interview and material collection.",
      "Editorial writing of the feature story and review.",
      "Newspaper-style layout and design.",
      "Delivery of the digital edition as web and PDF.",
    ],
    authorReceives: [
      "A digital newspaper edition (web and PDF)",
      "A book review and selected quotes",
      "Shareable social cutouts",
      "Author-owned copies for reuse in media kits",
    ],
    readerParticipation:
      "Readers browse the digital edition as part of the community archive and can share individual sections across their own networks.",
    ctaLabel: "Inquire About a Newspaper Spotlight",
  },
  {
    slug: "book-of-the-month",
    name: "Book of the Month",
    kicker: "Community · Sustained Feature",
    whatItIs:
      "A month-long feature celebrating one selected title with coordinated placement across the Book Ascendancy community.",
    whoItIsFor:
      "Authors with a launch window, a repositioning campaign, or a strong backlist title ready for renewed attention.",
    howItWorks: [
      "Title selection and editorial planning.",
      "Content and asset production ahead of the feature window.",
      "Rollout across the website, social channels, and newsletter.",
      "A mid-month reader engagement checkpoint.",
      "An end-of-month recap shared with the community.",
    ],
    authorReceives: [
      "Homepage placement for the defined feature window",
      "A dedicated feature article",
      "A newsletter feature and social series",
      "A reading discussion tied to the title",
    ],
    readerParticipation:
      "Readers are invited to read along, share recommendations, and take part in discussion throughout the month-long window.",
    ctaLabel: "Inquire About Book of the Month",
  },
  {
    slug: "virtual-book-tours",
    name: "Virtual Book Tours",
    kicker: "Community · Multi-Stop Campaign",
    whatItIs:
      "A coordinated series of features, appearances, and reader touchpoints scheduled across several days or weeks, functioning as a modern equivalent to a physical book tour.",
    whoItIsFor:
      "Authors with a launch or relaunch who want sustained visibility across several formats rather than a single feature moment.",
    howItWorks: [
      "A tour itinerary is planned, combining formats such as interviews, spotlights, and discussion events.",
      "Content and assets are produced ahead of the tour.",
      "Stops are published on a set schedule across the tour window.",
      "Each stop is promoted individually to the community.",
      "A closing recap consolidates the full tour for the author's ongoing use.",
    ],
    authorReceives: [
      "A multi-stop content schedule",
      "A combination of interview, spotlight, and discussion formats",
      "Promotion at each stop of the tour",
      "A consolidated recap with links to every stop",
    ],
    readerParticipation:
      "Readers follow the tour stop by stop, engaging with a different format each time and building familiarity with the author over the course of the campaign.",
    ctaLabel: "Inquire About a Virtual Book Tour",
  },
  {
    slug: "reader-discussion-features",
    name: "Reader Discussion Features",
    kicker: "Community · Live Conversation",
    whatItIs:
      "A facilitated discussion where readers engage directly with an author's work: moderated, prepared, and designed to be substantive rather than promotional.",
    whoItIsFor:
      "Authors ready to spend time with readers in a curated setting, particularly effective for literary fiction, memoir, and thoughtful non-fiction.",
    howItWorks: [
      "Scheduling and a community briefing ahead of the event.",
      "Preparation of a discussion guide with key themes.",
      "A live, moderated event with reader participation.",
      "A post-event editorial recap published to the community.",
    ],
    authorReceives: [
      "A live discussion event",
      "A discussion guide in PDF form",
      "An editorial recap for the Book Ascendancy site",
    ],
    readerParticipation:
      "Readers take part directly, asking questions and sharing reactions in real time, with the discussion guide available for follow-up book club use.",
    ctaLabel: "Inquire About a Discussion Feature",
  },
  {
    slug: "author-qa",
    name: "Author Q&A",
    kicker: "Editorial · Reader-Led",
    whatItIs:
      "A structured question-and-answer feature built directly from questions submitted by readers, giving the community a direct line to the author.",
    whoItIsFor:
      "Authors with an existing reader base, or those looking to build one, who are comfortable answering candid questions about their work and process.",
    howItWorks: [
      "A call for reader questions is published to the community.",
      "Questions are collected, reviewed, and organized by theme.",
      "The author responds in writing or on a recorded session.",
      "Responses are edited and formatted into a published feature.",
      "The Q&A is shared across the site, social channels, and newsletter.",
    ],
    authorReceives: [
      "A published Q&A feature built from real reader questions",
      "Attribution and credit for participating readers",
      "Shareable excerpts for social use",
      "Newsletter inclusion",
    ],
    readerParticipation:
      "Readers submit the questions that shape the feature and see their names credited alongside the author's answers.",
    ctaLabel: "Inquire About an Author Q&A",
  },
  {
    slug: "book-club-features",
    name: "Book Club Features",
    kicker: "Community · Book Club Adoption",
    whatItIs:
      "A structured presentation of a title to the Book Ascendancy reading community as a recommended book club selection, including discussion materials.",
    whoItIsFor:
      "Authors whose books lend themselves to group discussion: strong themes, discussable structure, and clear talking points.",
    howItWorks: [
      "The title is reviewed for book club fit.",
      "A discussion guide is developed covering themes, questions, and context.",
      "The book is presented to the community as a club selection.",
      "A moderated discussion period runs alongside the selection.",
      "Reader feedback and highlights are compiled for the author.",
    ],
    authorReceives: [
      "A published discussion guide",
      "Formal presentation as a book club selection",
      "A summary of reader feedback and discussion highlights",
    ],
    readerParticipation:
      "Readers read the selection together on a shared timeline and use the discussion guide to structure their own conversations.",
    ctaLabel: "Inquire About a Book Club Feature",
  },
  {
    slug: "new-release-spotlights",
    name: "New Release Spotlights",
    kicker: "Editorial · Launch Window",
    whatItIs:
      "A launch-focused feature that introduces a newly released title to the community during its first weeks in the market, when early momentum matters most.",
    whoItIsFor:
      "Authors with a title releasing in the near term who want coordinated visibility during the launch window rather than after it.",
    howItWorks: [
      "The release date and launch materials are confirmed with the author.",
      "A launch feature is drafted ahead of publication.",
      "The feature is published to coincide with the release window.",
      "Promotion runs across the website, social, and newsletter during launch week.",
    ],
    authorReceives: [
      "A launch-timed feature article",
      "Coordinated promotion during release week",
      "Shareable launch-week social assets",
    ],
    readerParticipation:
      "Readers are introduced to the title as it becomes available, with a clear call to action to read and discuss it early.",
    ctaLabel: "Inquire About a New Release Spotlight",
  },
  {
    slug: "backlist-features",
    name: "Backlist Features",
    kicker: "Editorial · Catalogue Discovery",
    whatItIs:
      "A premium profile highlighting an author's complete body of work, designed to introduce new readers to titles beyond the most recent release.",
    whoItIsFor:
      "Authors with an established catalogue, series writers, and authors preparing to reintroduce earlier work to a broader audience.",
    howItWorks: [
      "A review of the author's full catalogue.",
      "Editorial writing that frames the backlist for new readers.",
      "Design and selection of supporting assets.",
      "Publication and cross-linking within the community.",
    ],
    authorReceives: [
      "A published author showcase page covering the full catalogue",
      "A downloadable suggested reading-order guide",
      "An anchor asset the author can link to indefinitely",
    ],
    readerParticipation:
      "Readers use the showcase as an entry point into an author's catalogue, choosing where to start based on the suggested reading order.",
    ctaLabel: "Inquire About a Backlist Feature",
  },
  {
    slug: "seasonal-reading-features",
    name: "Seasonal Reading Features",
    kicker: "Community · Curated Lists",
    whatItIs:
      "A curated recommendation placement built around seasonal reading moods, holidays, or time-of-year themes, connecting a title with readers actively looking for that kind of book.",
    whoItIsFor:
      "Authors whose books have a strong seasonal or thematic fit, such as holiday settings, summer reading, or year-end reflection titles.",
    howItWorks: [
      "The title is assessed for fit against the upcoming seasonal calendar.",
      "Editorial write-up placing the book within the seasonal theme.",
      "Placement within the relevant seasonal list and newsletter.",
      "Resurfacing in future years where the seasonal fit continues.",
    ],
    authorReceives: [
      "Placement on a seasonal or thematic reading list",
      "Editorial recommendation copy",
      "Newsletter inclusion tied to the season",
    ],
    readerParticipation:
      "Readers browse seasonal lists when choosing what to read next, discovering titles through timing and mood rather than a single announcement.",
    ctaLabel: "Inquire About a Seasonal Feature",
  },
  {
    slug: "literary-community-features",
    name: "Literary Community Features",
    kicker: "Community · Peer Conversation",
    whatItIs:
      "A collaborative feature connecting an author to the wider Book Ascendancy literary community, including roundtables with other authors and contributions to the shared resource library.",
    whoItIsFor:
      "Authors who bring perspective on craft, genre, or publishing and want to be seen as part of a broader literary conversation rather than in isolation.",
    howItWorks: [
      "Panel curation or topic selection alongside other participating authors.",
      "A pre-session brief covering the discussion or article scope.",
      "A live or recorded discussion, or a written contribution to the resource library.",
      "Editorial recap and publication to the community.",
    ],
    authorReceives: [
      "A published roundtable or resource library contribution",
      "Social media promotion",
      "Cross-audience exposure alongside participating authors",
    ],
    readerParticipation:
      "Readers engage with the wider conversation, and reference content such as reading guides continues to reach new readers well beyond the original publication date.",
    ctaLabel: "Inquire About a Community Feature",
  },
];

export function getProgramBySlug(slug: string) {
  return bookAscendancyPrograms.find((p) => p.slug === slug);
}

export function getAdjacentPrograms(slug: string) {
  const index = bookAscendancyPrograms.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  const prev = bookAscendancyPrograms[(index - 1 + bookAscendancyPrograms.length) % bookAscendancyPrograms.length];
  const next = bookAscendancyPrograms[(index + 1) % bookAscendancyPrograms.length];
  return { prev, next };
}

export type ProgramFaq = { q: string; a: string };

const sharedParticipationFaq: ProgramFaq = {
  q: "How do I apply to take part?",
  a: "Start with an enquiry through GrowthSpark Impact. We review your book and stage, then coordinate the introduction to Book Ascendancy, which makes the final editorial decision.",
};

const sharedRelationshipFaq: ProgramFaq = {
  q: "Is Book Ascendancy the same company as GrowthSpark Impact?",
  a: "No. Book Ascendancy Book Club is an independent literary community. GrowthSpark Impact is an author growth studio that partners with it, helping authors decide whether a programme fits and coordinating the introduction.",
};

export const programFaqs: Record<string, ProgramFaq[]> = {
  "author-interviews": [
    { q: "Is the interview written or recorded?", a: "Either. Written interviews suit authors who prefer to shape their answers carefully; recorded sessions suit authors who speak more naturally than they write." },
    { q: "Do I see the piece before it is published?", a: "Yes. Every interview is returned to the author for review and approval before publication." },
    { q: "Can I reuse the interview elsewhere?", a: "Yes. Authors receive a copy they can use in a press kit, on their own website, or with media contacts." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "author-spotlights": [
    { q: "How is a spotlight different from an interview?", a: "An interview is led by your own words in a question and answer format. A spotlight is an editorial piece written about you and the book, in a magazine style." },
    { q: "What materials do you need from me?", a: "Your manuscript or a sample, your author biography, cover files, and any retailer links you want included." },
    { q: "How long does the spotlight stay online?", a: "Published spotlights remain online as a permanent part of the publication archive." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "newspaper-spotlights": [
    { q: "Is placement guaranteed?", a: "No. Editorial placement is never guaranteed, and we do not promise coverage we cannot control." },
    { q: "What is the format?", a: "A newspaper style write up focused on the book, the author, and why the work matters to readers now." },
    { q: "Can I share the piece publicly?", a: "Yes. The published feature is yours to share across your own channels." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "book-of-the-month": [
    { q: "How are titles selected?", a: "Selection is curated by Book Ascendancy based on the reading community's interests and the fit of the book. It is editorial, not purchased." },
    { q: "What is expected of the author?", a: "Availability during the feature month for reader questions and, where relevant, a discussion session." },
    { q: "How far ahead is the calendar set?", a: "Feature months are typically planned in advance, so early enquiry gives the most flexibility." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "virtual-book-tours": [
    { q: "How many sessions does a tour include?", a: "Scope is agreed at the outset and depends on the book, the audience, and your availability." },
    { q: "Do I need to be an experienced speaker?", a: "No. Sessions are hosted and structured, so you are guided throughout rather than presenting alone." },
    { q: "Are sessions recorded?", a: "Where agreed, sessions are recorded so the content keeps reaching readers after the live date." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "reader-discussion-features": [
    { q: "Do I have to join the discussion?", a: "Author participation is welcome but optional. Some authors prefer to let readers talk freely and join at the end." },
    { q: "What if readers are critical?", a: "Discussions are moderated for civility, but they are genuine reader conversations, not promotional posts." },
    { q: "What do I receive afterwards?", a: "An editorial recap of the discussion and the themes readers responded to most." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "author-qa": [
    { q: "Who asks the questions?", a: "Readers from the community submit them, with editorial curation to keep the session focused." },
    { q: "Can I decline a question?", a: "Yes. You see the curated questions in advance and can set anything aside." },
    { q: "How long does a session run?", a: "Sessions are kept tight, typically under an hour, so the conversation stays lively." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "book-club-features": [
    { q: "Does my book need a reading guide?", a: "Not in advance. Discussion prompts can be developed as part of the feature." },
    { q: "What genres suit a book club feature?", a: "Any book that gives readers something to discuss, across both fiction and nonfiction." },
    { q: "Will there be a live author session?", a: "Where the schedule and your availability allow, yes. It is agreed during planning." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "new-release-spotlights": [
    { q: "When should I enquire?", a: "As early as possible before release, so the feature can be timed to your launch window." },
    { q: "Can a recent release still qualify?", a: "Yes. Books published recently can often still be featured, depending on the calendar." },
    { q: "Does this replace a launch plan?", a: "No. It is one visibility moment within a launch, not the launch strategy itself." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "backlist-features": [
    { q: "How old can the book be?", a: "There is no cut off. Backlist features exist precisely to bring older titles back into view." },
    { q: "Does the book need a new edition?", a: "No, though a refreshed cover or description often makes the feature land better." },
    { q: "Can several backlist titles be featured?", a: "Series and catalogues can be featured together where it makes sense for readers." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "seasonal-reading-features": [
    { q: "How are seasonal lists themed?", a: "Around reading occasions and moods the community responds to through the year." },
    { q: "Is inclusion guaranteed?", a: "No. Lists are curated, and fit with the theme decides inclusion." },
    { q: "How long do seasonal lists keep working?", a: "Lists stay online and are often revisited by readers in later seasons." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
  "literary-community-features": [
    { q: "What do I contribute?", a: "Either a seat on a roundtable with other authors, or a written contribution to the shared resource library." },
    { q: "Do I need to promote my book?", a: "No. These features are about perspective and craft, which is why readers trust them." },
    { q: "Can I take part more than once?", a: "Yes, where topics suit your experience and the calendar allows." },
    sharedParticipationFaq,
    sharedRelationshipFaq,
  ],
};

export function getProgramFaqs(slug: string): ProgramFaq[] {
  return programFaqs[slug] ?? [sharedParticipationFaq, sharedRelationshipFaq];
}
