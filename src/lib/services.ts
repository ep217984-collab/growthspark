export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  summary: string;
  tagline: string;
  whatItIs: string;
  whoItIsFor: string[];
  challenge: string;
  approach: string;
  process: string[];
  deliverables: string[];
  outcomes: string[];
  whyItMatters: string;
  faqs: ServiceFaq[];
  exampleWork?: string;
};

export const coreServices: Service[] = [
  {
    slug: "visibility-audit",
    name: "Author Visibility Audit",
    tagline: "A clear diagnosis of where readers are being lost, before a single dollar is spent on growth.",
    summary:
      "A comprehensive assessment of a book's discoverability, positioning, reader alignment, metadata, and market opportunities, designed to surface the hidden obstacles keeping the right readers from finding the work.",
    whatItIs:
      "The Author Visibility Audit is a senior-led diagnostic engagement. We review your listing, metadata, categories, retail presence, and reader-facing positioning to identify exactly where discoverability is breaking down and why the right readers aren't finding the book.",
    whoItIsFor: [
      "Debut authors who aren't sure why their book isn't gaining traction",
      "Authors preparing to invest in marketing but want clarity first",
      "Established authors with a backlist title that has stalled",
      "Authors evaluating whether their current strategy is working",
    ],
    challenge:
      "Many authors invest in ads, promotions, or launch pushes without understanding whether their book's foundation, metadata, categories, positioning, and reader alignment, can actually convert that attention. Without a clear diagnosis, spend gets wasted chasing symptoms instead of causes.",
    approach:
      "We start with your current-state materials and work backward from the reader's experience: how they discover the book, what they see on the page, and where they drop off. Every recommendation is prioritized by expected impact so you know what to fix first.",
    process: [
      "Intake brief and current-state review",
      "Listing, metadata, and category diagnostic",
      "Competitor and comp-title benchmarking",
      "Reader journey and conversion analysis",
      "Senior strategist review and report build",
    ],
    deliverables: [
      "Comprehensive Visibility Audit Report",
      "Reader Journey Analysis",
      "Competitor Benchmark Review",
      "Amazon Presence Assessment",
      "Positioning Recommendations",
      "Discoverability Gap Analysis",
      "Growth Opportunity Assessment",
    ],
    outcomes: [
      "A precise understanding of where visibility is being lost",
      "A prioritized list of fixes ranked by expected impact",
      "Clarity on which growth investments make sense next",
      "A benchmark against comparable titles in your category",
    ],
    whyItMatters:
      "Visibility problems compound quietly. A book with weak metadata or misaligned categories can underperform for years without the author ever knowing why. The audit turns that uncertainty into a concrete action list.",
    faqs: [
      { q: "How long does the audit take?", a: "Most audits are delivered within 5 to 10 business days of receiving your intake brief and access to your listings." },
      { q: "Do I need to already have a book published?", a: "The audit works best with a live listing, but pre-launch manuscripts can also be reviewed for positioning and category strategy." },
      { q: "What happens after I receive the report?", a: "You can implement the recommendations yourself, or move into one of our ongoing engagement tiers where we execute them for you." },
      { q: "Is this only for Amazon?", a: "Amazon is a major focus since it's where most book discovery happens, but the audit also reviews Goodreads, your author site, and broader positioning." },
      { q: "Will you tell me if my book just isn't ready for marketing spend?", a: "Yes. Part of the audit's value is an honest read on whether the foundation supports further investment yet." },
    ],
    exampleWork: "Anonymised examples of past audit findings and before/after metadata changes are available to review in our Proof of Work section.",
  },
  {
    slug: "amazon-optimization",
    name: "Amazon Optimization",
    tagline: "Turning browsers into buyers through sharper metadata, categories, and conversion mechanics.",
    summary:
      "Strategic optimization engineered to improve search visibility, category placement, conversion rates, and overall discoverability across the Amazon ecosystem.",
    whatItIs:
      "A hands-on rebuild of the technical and creative levers that determine how often your book is found on Amazon and how often that traffic converts into a sale, from backend keywords to detail-page copy.",
    whoItIsFor: [
      "Authors whose books aren't showing up for relevant searches",
      "Authors sitting in the wrong categories for their genre",
      "Authors with decent traffic but low conversion",
      "Authors relaunching a backlist title",
    ],
    challenge:
      "Amazon's search and category systems reward specific, well-researched metadata. Many listings are built once at launch and never revisited, leaving books stuck in overcrowded categories or invisible for the searches readers actually use.",
    approach:
      "We rebuild the listing from the backend out: keyword research grounded in real reader search behavior, category placement chosen for both relevance and competitiveness, and detail-page content rewritten to convert once a reader lands on the page.",
    process: [
      "Keyword and category research",
      "Backend metadata rebuild",
      "Detail page and A+ content review",
      "Conversion and copy refinement",
      "Performance tracking and iteration",
    ],
    deliverables: [
      "Keyword Research",
      "Category Optimization",
      "Metadata Enhancement",
      "Competitive Market Analysis",
      "Book Detail Page Review",
      "Conversion Recommendations",
      "Product Page Positioning Improvements",
    ],
    outcomes: [
      "Stronger category placement",
      "Sharper alignment with reader search intent",
      "Increased organic discoverability",
      "Improved conversion across the listing",
    ],
    whyItMatters:
      "Amazon is where most book discovery and purchase decisions happen. A listing that isn't optimized for search and conversion will underperform no matter how much traffic is driven to it from outside channels.",
    faqs: [
      { q: "Will this guarantee more sales?", a: "No one can honestly guarantee sales outcomes. What we can guarantee is a listing that is fully optimized against current best practices and reader search behavior." },
      { q: "How often should optimization be revisited?", a: "We recommend a review every 90 to 120 days, or after any major algorithm or marketplace change." },
      { q: "Do you handle Amazon Ads too?", a: "Optimization here focuses on organic listing performance. Paid campaigns are scoped separately depending on your plan." },
      { q: "Can this be done for a book that's already ranking well?", a: "Yes. Even strong performers often have room to improve conversion or expand into adjacent categories." },
      { q: "Do you need access to my KDP account?", a: "Yes, we'll need author-level access or you can implement our recommendations directly if you prefer to keep account access private." },
    ],
    exampleWork: "Anonymised before/after listing comparisons are shared in our Proof of Work section during onboarding.",
  },
  {
    slug: "growth-roadmaps",
    name: "Author Growth Roadmaps",
    tagline: "A sequenced plan that replaces guesswork with a clear next step, every time.",
    summary:
      "Custom strategic growth plans tailored to the author's goals, genre, audience, and stage of career, providing direction for both immediate and long-term initiatives.",
    whatItIs:
      "A written, sequenced growth plan spanning 30, 60, and 90 days that translates your goals into a specific set of prioritized actions across visibility, launch, and audience-building.",
    whoItIsFor: [
      "Authors who feel busy but unsure if their efforts are compounding",
      "Authors preparing for an upcoming launch",
      "Authors juggling multiple ideas without a way to prioritize them",
      "Authors moving from a single-book mindset to a career mindset",
    ],
    challenge:
      "Author marketing advice is abundant and often contradictory. Without a plan tailored to genre, stage, and goals, authors end up spreading effort across too many tactics at once, none of which get enough attention to work.",
    approach:
      "We start with an honest assessment of where you are today, then sequence a plan that respects your time, budget, and team size, prioritizing the highest-leverage actions first rather than trying to do everything at once.",
    process: [
      "Goal-setting and stage assessment",
      "Market and audience research",
      "Priority and sequencing workshop",
      "Roadmap drafting and review",
      "Final delivery with implementation guidance",
    ],
    deliverables: [
      "30-Day Strategic Plan",
      "60-Day Growth Roadmap",
      "90-Day Visibility Blueprint",
      "Reader Acquisition Strategy",
      "Launch Preparation Timeline",
      "Audience Development Framework",
      "Growth Priority Recommendations",
    ],
    outcomes: [
      "A structured action plan with clear sequencing",
      "Reduced uncertainty about what to work on next",
      "A realistic timeline matched to your capacity",
      "A foundation for sustained, compounding growth",
    ],
    whyItMatters:
      "Growth compounds when effort is sequenced correctly. A roadmap prevents the common trap of starting many initiatives at once and finishing none of them well.",
    faqs: [
      { q: "How far in advance should I request a roadmap?", a: "For a launch-focused roadmap, 8 to 12 weeks of runway gives the most flexibility, but we can build shorter-timeline plans too." },
      { q: "Do you execute the roadmap or just deliver it?", a: "The roadmap itself is a strategy deliverable. Execution is available through our Growth, Authority, or Legacy engagement tiers." },
      { q: "What if my goals change partway through?", a: "Roadmaps are built to be revisited. We recommend a check-in at each 30-day milestone to adjust as needed." },
      { q: "Is this useful for a single title or a whole catalog?", a: "Both. We build roadmaps for single launches as well as multi-book, multi-year author strategies." },
      { q: "What information do you need from me to start?", a: "A completed intake covering your goals, genre, current metrics, budget range, and available time each week." },
    ],
    exampleWork: "Anonymised roadmap excerpts, including quarterly sequencing and milestone structure, are shared in our Proof of Work section.",
  },
  {
    slug: "goodreads",
    name: "Goodreads Visibility Campaigns",
    tagline: "Reaching readers where they already talk about books.",
    summary:
      "Leverage Goodreads as a discoverability engine by improving positioning, shelf placement opportunities, community visibility, and reader engagement.",
    whatItIs:
      "A focused engagement to strengthen your presence on Goodreads, from profile and shelf optimization to identifying community and Listopia opportunities that put your book in front of active readers.",
    whoItIsFor: [
      "Authors with an underdeveloped or inactive Goodreads presence",
      "Authors whose genre has strong Goodreads reader communities",
      "Authors looking to build reviews and shelf activity ahead of a launch",
      "Authors wanting a more complete cross-platform discovery footprint",
    ],
    challenge:
      "Goodreads is one of the largest reader communities online, but most authors treat it as an afterthought, an unclaimed profile with no strategy behind shelving, lists, or community engagement.",
    approach:
      "We audit your current Goodreads footprint, identify relevant Listopia lists and shelves where your book could realistically gain traction, and build a plan for genuine community engagement rather than artificial activity.",
    process: [
      "Profile and shelf audit",
      "Listopia and community opportunity mapping",
      "Engagement strategy build",
      "Implementation guidance",
      "Performance review",
    ],
    deliverables: [
      "Goodreads Profile Optimization",
      "Listopia Opportunity Research",
      "Shelf Strategy Development",
      "Community Engagement Recommendations",
      "Reader Discovery Planning",
      "Goodreads Positioning Review",
    ],
    outcomes: [
      "Increased exposure to active readers in your genre",
      "A more complete and professional Goodreads presence",
      "A realistic plan for organic shelf and list growth",
      "Better cross-platform reader discovery",
    ],
    whyItMatters:
      "Many readers research a book on Goodreads before buying it elsewhere. A thin or inactive profile can quietly undercut the trust built by marketing efforts on other platforms.",
    faqs: [
      { q: "Do you buy reviews or fake engagement?", a: "No. We never buy reviews, ratings, or fake engagement of any kind. All recommendations are organic and within Goodreads' terms of service." },
      { q: "Can this help with a pre-launch book?", a: "Yes, pre-launch profile setup and early Listopia positioning is often the ideal time to start." },
      { q: "How is this different from the Visibility Audit?", a: "The audit covers your full discoverability picture at a high level. This engagement goes deep specifically on Goodreads." },
      { q: "Will you manage my Goodreads Author Program application?", a: "Yes, we can guide you through claiming and setting up your Goodreads Author profile if it isn't already active." },
      { q: "How long before I see changes in shelf activity?", a: "Organic community growth takes time. Most authors see meaningful shelf and list movement within a few months of consistent activity." },
    ],
    exampleWork: "Examples of profile builds, shelf positioning and reader engagement plans are reviewed together during onboarding.",
  },
  {
    slug: "book-trailers",
    name: "Book Trailer Production",
    tagline: "Cinematic creative that carries the emotional weight of the book across platforms.",
    summary:
      "Professional promotional trailers designed to increase reader engagement, strengthen book presentation, and support launch campaigns across digital platforms.",
    whatItIs:
      "End-to-end production of a book trailer and its supporting video assets, from concept and scripting through editing and platform-specific formatting for social, ads, and retail pages.",
    whoItIsFor: [
      "Authors preparing for a launch who want a strong visual anchor asset",
      "Authors relaunching a backlist title with fresh creative",
      "Authors running paid social or video ad campaigns",
      "Authors who want a portfolio-quality asset for their author site",
    ],
    challenge:
      "Text-based marketing alone often struggles to convey tone and emotional stakes quickly. A well-made trailer can communicate genre and mood in seconds, but low-quality or generic trailers can undercut a book's credibility.",
    approach:
      "We start with the book's core emotional hook and build a concept around it, then produce a trailer along with cutdowns sized for the platforms where it will actually run, so the same creative works across your whole launch campaign.",
    process: [
      "Concept and creative direction",
      "Scripting and storyboarding",
      "Production and editing",
      "Platform-specific cutdowns",
      "Final delivery and launch integration",
    ],
    deliverables: [
      "Custom Book Trailer Creation",
      "Social Media Trailer Variations",
      "Promotional Video Assets",
      "Launch Campaign Video Content",
      "Platform-Specific Formatting",
      "Portfolio Integration",
    ],
    outcomes: [
      "A stronger first impression across marketing channels",
      "Higher engagement on social and video placements",
      "Reusable creative for evergreen and launch marketing",
      "A professional asset for your author brand and site",
    ],
    whyItMatters:
      "Video consistently outperforms static creative for engagement across most social platforms. A trailer gives readers an emotional entry point into the book before they ever read a page.",
    faqs: [
      { q: "How long does production take?", a: "Typical turnaround is 3 to 5 weeks from concept approval to final delivery, depending on complexity." },
      { q: "Do you use stock footage or original filming?", a: "Most trailers use a combination of licensed stock, motion graphics, and typography. Original filming is available as a separate scope." },
      { q: "Can I request revisions?", a: "Yes, a set number of revision rounds is included at each production stage, outlined in your project scope." },
      { q: "What formats will I receive?", a: "Deliverables typically include a primary cut plus vertical, square, and short-form cutdowns for social and ad placements." },
      { q: "Can the trailer be used in paid ads?", a: "Yes, the assets are built to be ad-ready across major platforms." },
    ],
    exampleWork: "Sample trailer work is shown anonymised, without client names, in our Proof of Work section.",
  },
  {
    slug: "branding-social",
    name: "Author Branding & Social Media",
    tagline: "A consistent, professional presence readers recognize wherever they find you.",
    summary:
      "Build a cohesive, professional author presence that strengthens trust, recognition, and reader connection across every digital platform.",
    whatItIs:
      "A brand and content engagement covering visual identity, profile presentation, and an ongoing content strategy so your author presence looks and feels consistent across every platform readers might encounter you on.",
    whoItIsFor: [
      "Authors with inconsistent branding across platforms",
      "Authors who post irregularly and want a sustainable content system",
      "Authors rebranding around a new pen name, series, or genre pivot",
      "Authors who want their online presence to feel as polished as their book",
    ],
    challenge:
      "Readers often check an author's social profiles before buying. Inconsistent visuals, an unclear voice, or a stale content calendar can undercut the trust a strong book has already earned.",
    approach:
      "We start with brand and voice discovery to understand how you want to show up, then build a visual identity and content system designed to be sustainable for you or your team to maintain long after the engagement ends.",
    process: [
      "Brand and voice discovery",
      "Visual identity review",
      "Content pillar definition",
      "Calendar and engagement framework build",
      "Handover and ongoing guidance",
    ],
    deliverables: [
      "Profile Optimization",
      "Banner Design",
      "Brand Identity Review",
      "Content Strategy Development",
      "Social Media Content Calendar",
      "Reader Engagement Recommendations",
      "Positioning Framework",
    ],
    outcomes: [
      "A consistent, recognizable author brand",
      "A sustainable content system rather than sporadic posting",
      "Clearer positioning across every platform",
      "Stronger reader trust and recognition over time",
    ],
    whyItMatters:
      "Brand consistency compounds recognition over time. A reader who sees the same clear voice and visual identity across platforms is more likely to remember and return to an author.",
    faqs: [
      { q: "Which platforms do you cover?", a: "We tailor the platform mix to where your readers actually spend time, commonly Instagram, TikTok, and an author website." },
      { q: "Do you write and post the content for me?", a: "That depends on your engagement tier. Some plans include content creation and posting, others deliver the strategy and calendar for your team to run." },
      { q: "Can this work with an existing brand I like?", a: "Yes, we can refine and extend an existing identity rather than starting from scratch." },
      { q: "How often is the content calendar updated?", a: "Calendars are typically built and refreshed monthly to stay aligned with launches and seasonal opportunities." },
      { q: "Is this suitable for a first-time author with no following?", a: "Yes, this is often where it has the most impact, establishing a consistent foundation from day one." },
    ],
    exampleWork: "Sample brand direction boards and content calendars are shown, anonymised, during a discovery call.",
  },
  {
    slug: "reader-acquisition",
    name: "Reader Acquisition & Outreach",
    tagline: "Connecting your book with the readers, reviewers, and communities most likely to care.",
    summary:
      "Strategic outreach connecting books with the readers, reviewers, influencers, bloggers, creators, and communities most likely to engage with them.",
    whatItIs:
      "A targeted outreach engagement that identifies and connects with reviewers, bloggers, creators, and reader communities aligned with your genre, along with ARC coordination and partnership development.",
    whoItIsFor: [
      "Authors preparing for launch who need early reviews and word of mouth",
      "Authors looking to expand beyond their existing audience",
      "Authors seeking creator or blogger partnerships in their genre",
      "Authors building or managing an ARC team",
    ],
    challenge:
      "Trusted third-party recommendations, from bloggers, creators, or reader communities, carry weight that self-promotion often can't. But identifying the right partners and reaching out effectively takes significant time most authors don't have.",
    approach:
      "We map the niche communities, creators, and reviewers most relevant to your genre and book, then run personalized outreach rather than mass, generic pitches, prioritizing quality relationships over volume.",
    process: [
      "Target audience and niche mapping",
      "Outreach list curation",
      "Personalized outreach execution",
      "ARC and partnership coordination",
      "Reporting and relationship maintenance",
    ],
    deliverables: [
      "Influencer Research & Outreach",
      "Book Blogger Outreach",
      "Reader Community Identification",
      "ARC Team Planning",
      "Partnership Opportunities",
      "Audience Expansion Strategy",
    ],
    outcomes: [
      "Expanded visibility through trusted third-party recommendations",
      "A curated, active ARC team",
      "New reader community touchpoints",
      "Relationships that can extend into future launches",
    ],
    whyItMatters:
      "Reader acquisition through trusted voices tends to convert better than cold advertising because it arrives with built-in social proof from a source the reader already follows.",
    faqs: [
      { q: "Do you guarantee reviews from outreach?", a: "No. We cannot guarantee any individual reviewer's response or rating, only a well-targeted, professional outreach process." },
      { q: "How many contacts are typically reached?", a: "This varies by genre and scope, and is defined at the start of the engagement based on your goals and budget." },
      { q: "Can you help build my ARC team from scratch?", a: "Yes, this is a common starting point for authors without an existing reader list." },
      { q: "Is this compliant with platform review policies?", a: "Yes, all outreach follows Amazon, Goodreads, and platform-specific review guidelines." },
      { q: "How long does an outreach campaign run?", a: "Most campaigns run 4 to 8 weeks, timed around your launch or promotional window." },
    ],
    exampleWork: "Anonymised outreach frameworks and ARC team structures are shared on request during scoping.",
  },
  {
    slug: "launch-strategy",
    name: "Launch Strategy & Momentum",
    tagline: "A disciplined runway that sustains visibility well beyond release week.",
    summary:
      "Comprehensive launch planning and post-launch growth systems designed to sustain visibility well beyond release week.",
    whatItIs:
      "A complete launch engagement covering pre-launch positioning, release-week execution, and the post-launch systems that keep momentum going instead of letting it fade after the first week.",
    whoItIsFor: [
      "Authors with an upcoming release who want a coordinated plan",
      "Authors who've had launches fizzle out quickly in the past",
      "Authors juggling ads, email, ARC, and social without a unifying calendar",
      "Authors planning a series launch across multiple books",
    ],
    challenge:
      "Many launches concentrate all their energy into release week and then go quiet, losing the momentum that took months to build. Without a post-launch plan, visibility gains are often temporary.",
    approach:
      "We build a full runway: a pre-launch phase to build anticipation, a coordinated release-week sequence across channels, and a 30/60/90-day framework designed to sustain and compound momentum afterward.",
    process: [
      "Pre-launch positioning and runway design",
      "Campaign sequencing across channels",
      "Release-week orchestration",
      "Post-launch momentum systems",
      "30/60/90 performance review",
    ],
    deliverables: [
      "Launch Calendar",
      "Promotional Timeline",
      "Reader Acquisition Plan",
      "Visibility Strategy",
      "Campaign Roadmap",
      "Post-Launch Growth Framework",
      "Performance Review Recommendations",
    ],
    outcomes: [
      "A structured, coordinated launch process",
      "Maximized exposure during release week",
      "Systems that sustain growth after release week ends",
      "Clear 30/60/90-day performance checkpoints",
    ],
    whyItMatters:
      "A launch is a limited window of attention. Coordinating channels and planning for what happens after release week is often what separates a short spike from lasting career momentum.",
    faqs: [
      { q: "How far in advance should launch planning start?", a: "We recommend starting 10 to 12 weeks before release for a full pre-launch runway, though shorter timelines can be accommodated." },
      { q: "Does this include ad spend?", a: "No, ad spend is invoiced separately at cost. This engagement covers strategy, planning, and coordination." },
      { q: "Can this be used for a series launch?", a: "Yes, we frequently build multi-book launch sequences that account for how each release supports the others." },
      { q: "What happens after the 90-day review?", a: "Many authors transition into an ongoing Growth or Authority tier engagement to keep building on launch momentum." },
      { q: "Do you coordinate directly with my other vendors, like a publicist?", a: "Yes, we're glad to coordinate with existing publicists, cover designers, or other vendors as part of the launch calendar." },
    ],
    exampleWork: "Anonymised launch calendars and week by week runway plans are walked through in a discovery call.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return coreServices.find((s) => s.slug === slug);
}
