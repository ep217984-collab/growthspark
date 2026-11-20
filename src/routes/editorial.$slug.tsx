import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Award, Bookmark, Clock, Download, Printer, Quote } from "lucide-react";
import cover from "@/assets/changing-eyes-cover.png.asset.json";
import sunriseCover from "@/assets/before-the-sunrise-cover.jpg.asset.json";
import peaceCover from "@/assets/peace-in-the-storm-cover.jpg.asset.json";
import skyCover from "@/assets/reaching-for-the-sky-cover.jpg.asset.json";
import woundedCover from "@/assets/the-walking-wounded-cover.jpg.asset.json";
import flashCoverAsset from "@/assets/a-flash-in-time-cover-official.png.asset.json";
import religionCover from "@/assets/religion-and-science-cover.jpg.asset.json";
import jargalPhoto from "@/assets/jargal-dorj-author.jpg.asset.json";
import brucePaulCover from "@/assets/bruce-and-paul-cover.jpg.asset.json";
import brucePaulFeaturePdf from "@/assets/bruce-and-paul-author-feature.pdf.asset.json";
import { woodyFeature } from "@/lib/editorial/woody";
const flashCover = flashCoverAsset.url;

type Feature = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  authorBio: string;
  genre: string;
  published: string;
  readingTime: string;
  cover: string;
  amazon?: string;
  awards: string[];
  tagline: string;
  aboutBook: string[];
  editorialFeature: { heading: string; paragraphs: string[]; pull?: string }[];
  behindTheStory: string[];
  whyWeChose: string[];
  perspective: { intro: string; bullets: { heading: string; body: string }[] };
  recommendedFor: string[];
  finalThoughts: string[];
  // Premium magazine-feature fields (all optional, rendered only when present)
  authorPhoto?: string;
  themes?: string[];
  authorPerspective?: string;
  readerTakeaway?: string;
  bookInfo?: { format?: string; pages?: string; publisher?: string; isbn?: string; publicationDate?: string };
  buyLinks?: { label: string; url: string }[];
  pdfUrl?: string;
  sampleFeature?: boolean;
  featureCredit?: string;
};

const features: Record<string, Feature> = {
  "innocent-souls": woodyFeature,
  "bruce-and-paul-the-day-the-lie-ended": {
    slug: "bruce-and-paul-the-day-the-lie-ended",
    title: "Bruce & Paul: The Day The Lie Ended",
    subtitle: "A Masterwork of Authenticity and Courage",
    author: "Lee Gerard",
    authorBio:
      "Lee Gerard is an author whose journey from mathematics and science to literature is rooted in perseverance and creative discovery. Nurtured by his upbringing in the Endless Mountains of Northeastern Pennsylvania, he overcame dyslexia and discovered a deep joy in writing. From his home in Las Vegas, Nevada, he writes emotionally charged gay romance, mystery, thriller, and Christian fiction for adult readers, with recurring themes of identity, faith, resilience, and authentic living.",
    genre: "Contemporary Romance · LGBTQ Fiction",
    published: "October 2026",
    readingTime: "12 min read",
    cover: brucePaulCover.url,
    amazon: "https://www.amazon.com/dp/B0GX2T9M13",
    awards: [],
    tagline:
      "A deeply personal novel about two men confronting the lives they were expected to live and finding the courage to end the lie.",
    themes: [
      "Identity and Authenticity",
      "Family Expectations",
      "Faith and Inclusion",
      "The Cost of Hiding",
      "Love and Emotional Honesty",
    ],
    aboutBook: [
      "Bruce & Paul: The Day The Lie Ended follows two men who have spent years avoiding the same essential truth about who they are and what they genuinely desire. Bruce has built a stable, predictable public life while carefully hiding the difficult truths of his identity. Paul has allowed duty, family loyalty, and emotional distance to shape his existence.",
      "When circumstances bring them back together, guarded conversation gives way to honesty, attraction, and a connection neither can ignore. Their story examines identity, family expectations, religious shame, and the exhausting performance of a life that does not feel like one's own.",
      "The title frames truth as an active liberation. The lie is not a single event but a daily ritual that demands energy to maintain. Ending it becomes the deliberate act of leaving that prison behind.",
    ],
    editorialFeature: [
      {
        heading: "The architect of authenticity",
        paragraphs: [
          "Lee Gerard does not simply construct narratives. His work creates space for readers who have felt like strangers in their own lives. His path to authorship moved from the analytical worlds of mathematics and science toward literature, where logic and emotional insight now meet on the page.",
          "Overcoming dyslexia became part of that creative discovery. What might have defined a limitation instead led to a deep joy in writing and a body of work concerned with the masks people construct to survive, the weight of family expectations, religious shame, and the moment when performance finally ends.",
        ],
      },
      {
        heading: "A critical and thematic analysis",
        paragraphs: [
          "Bruce appears to have built a successful and orderly life, yet that stability depends on keeping his identity hidden. Paul has been shaped by duty and family loyalty, using emotional distance as protection from the vulnerability he was taught to fear.",
          "Their reunion begins with tension and guarded conversation. Emotional honesty develops slowly, followed by an attraction grounded not only in passion but in the need to be accepted as they truly are.",
        ],
      },
      {
        heading: "The power of the title",
        pull: "The day the lie ends is not a defeat. It is a beginning.",
        paragraphs: [
          "The Day The Lie Ended is a deliberate phrase. It does not describe truth as a passive discovery. It presents the falsehood as something active, a performance that requires constant effort, and its ending as a conscious act of liberation.",
          "That choice captures the novel's central concern: the cost of building a life that does not belong to you and the frightening freedom that follows when the performance stops.",
        ],
      },
      {
        heading: "A voice of faith and inclusivity",
        paragraphs: [
          "Gerard writes from his identity as a gay Christian and offers a vision of faith centered on connection rather than condemnation. His work addresses readers who have experienced rejection from religious institutions while affirming that faith and identity do not have to exist in opposition.",
          "This conviction is not separate from the novel. It informs the book's treatment of shame, acceptance, honesty, and the possibility of living without dividing the self into acceptable and hidden parts.",
        ],
      },
      {
        heading: "The courage to live authentically",
        paragraphs: [
          "The novel shows how inauthentic living affects relationships, stifles joy, and extends pain beyond the person who is hiding. It also shows the relief that becomes possible when truth is spoken.",
          "Gerard's story is therefore not only about finding happiness. It is about finding the courage to be honest and recognizing honesty as the foundation on which genuine happiness can be built.",
        ],
      },
      {
        heading: "The literary significance",
        paragraphs: [
          "Gerard combines the structural discipline of his analytical background with emotional storytelling. The result is a contemporary romance willing to examine difficult questions about identity, empathy, faith, family, and authenticity.",
          "The book does not avoid the cost of hiding or simplify the moment of disclosure. Its power comes from treating vulnerability as complex, frightening, and necessary.",
        ],
      },
      {
        heading: "The message of hope",
        paragraphs: [
          "At its core, Bruce & Paul speaks to readers who have spent years performing versions of themselves that do not feel real. It acknowledges their exhaustion and fear while insisting that change remains possible.",
          "Its hope is not built on an easy resolution. It comes from the belief that telling the truth can become the beginning of an authentic life.",
        ],
      },
    ],
    behindTheStory: [
      "Gerard's writing journey grew from perseverance. His early grounding in mathematics and science and his experience overcoming dyslexia shaped a voice that joins structural precision with emotional candor.",
      "Across his work, he returns to characters confronting masks, expectations, faith, and the difficult movement from survival toward authenticity.",
    ],
    whyWeChose: [
      "GrowthSpark Editorial chose to feature Bruce & Paul because it brings emotional honesty to the cost of hiding and the courage required to live truthfully.",
      "Its intersection of romance, identity, family expectations, and faith creates a thoughtful conversation for readers interested in stories about belonging and self acceptance.",
    ],
    perspective: {
      intro:
        "Bruce & Paul: The Day The Lie Ended is an emotionally direct novel about the distance between a life that looks right and one that feels true.",
      bullets: [
        { heading: "Why it deserves attention", body: "It treats authenticity as a difficult practice rather than a simple declaration and gives emotional weight to the consequences of hiding." },
        { heading: "Who will enjoy it", body: "Readers of contemporary romance, LGBTQ fiction, later in life coming out stories, and character driven novels about faith and identity." },
        { heading: "Themes explored", body: "Family expectations, religious shame, emotional honesty, belonging, resilience, love, and the liberation of truth." },
        { heading: "What makes it stand out", body: "Its title and central metaphor transform the end of a falsehood from exposure into a deliberate beginning." },
        { heading: "Why it matters", body: "It offers recognition and hope to readers who have felt exhausted by performing a life that is not fully their own." },
      ],
    },
    recommendedFor: [
      "Readers of contemporary LGBTQ romance",
      "Readers interested in coming out later in life and authentic living",
      "Readers drawn to stories about faith, identity, and belonging",
      "Book clubs looking for conversations about family expectations and emotional honesty",
    ],
    bookInfo: {
      format: "Young Adult Edition",
      publisher: "Available on Amazon",
    },
    buyLinks: [
      { label: "View the book on Amazon", url: "https://www.amazon.com/dp/B0GX2T9M13" },
      { label: "Visit Lee Gerard's website", url: "https://leegerard.com/" },
    ],
    pdfUrl: brucePaulFeaturePdf.url,
    finalThoughts: [
      "For readers who need to hear that it is not too late to live truthfully, Bruce & Paul offers a story of honesty, connection, and beginning again.",
      "This feature was created and published by GrowthSpark Editorial as part of GrowthSpark Impact's commitment to bringing thoughtful books and their authors into wider literary conversation.",
    ],
  },
  "changing-eyes": {
    slug: "changing-eyes",
    title: "Changing Eyes",
    subtitle: "A Memoir of Love, Loss, and Unwavering Hope",
    author: "Leanne Antaya",
    authorBio:
      "Leanne Antaya is an award winning author whose debut memoir has earned both the Literary Titan Book Award and the Pencraft Book Award. Her work speaks with unflinching honesty to families navigating the shadows of addiction, offering hope, strength, and solidarity to those walking the same path.",
    genre: "Memoir · Nonfiction",
    published: "July 2026",
    readingTime: "12 min read",
    cover: cover.url,
    amazon: "https://www.amazon.com/dp/0578391686",
    awards: ["Literary Titan Book Award", "Pencraft Book Award, Best Book 2022"],
    tagline:
      "A mother's battle cry. A lifeline thrown into the darkness of addiction. A beacon of hope for families searching for meaning in the shadows of despair.",
    aboutBook: [
      "Changing Eyes is a memoir of love tested in the darkest of times. Written in the aftermath of her son's near fatal overdose, Leanne Antaya turns her private grief into a public gift, page after page.",
      "The book is honest about the anguish of watching a child disappear into addiction, and equally honest about the resilience it takes to keep loving them through it. It is a book about mothers, sons, and the quiet, unglamorous work of hope.",
    ],
    editorialFeature: [
      {
        heading: "The origin of a memoir",
        paragraphs: [
          "Every meaningful work of literature has a moment of conception. For Leanne Antaya, that moment came in the sterile corridors of a hospital, where she sat vigil over her son after a devastating overdose.",
          "In those agonizing hours she began to write. What started as a private way to process her grief and guilt became the foundation of a transformative work. The journal grew. The notes accumulated. And in those pages a voice emerged, raw and unflinching, determined to find meaning in the madness.",
        ],
      },
      {
        heading: "A mother's unwavering love",
        pull: "Not a memoir of victimhood, but a manifesto of hope.",
        paragraphs: [
          "When her son defied medical expectations and came home, Leanne could not turn away from the tragedy still unfolding around her. She watched as other young men and women succumbed to the same disease. She witnessed their mothers weep, their families shatter, their communities mourn.",
          "In the faces of those grieving mothers she saw herself. She saw what could have been. She saw what still could be for countless families trapped in the relentless cycle of addiction. It was in that moment of clarity that Changing Eyes was born.",
        ],
      },
      {
        heading: "The day the book was released",
        paragraphs: [
          "When the manuscript was finished and the last edit made, Leanne pressed publish. She cried, not from sadness, but from release, accomplishment, and gratitude for the opportunity to share her story with others who desperately needed to hear it.",
          "With that single act of courage, Leanne transformed her family's private struggle into a public gift. She opened her heart to the world, trusting that her vulnerability could become someone else's strength.",
        ],
      },
    ],
    behindTheStory: [
      "The book began as journal entries at a hospital bedside, not as a manuscript. That origin gives the writing its immediacy. The reader is not being told about pain in retrospect. They are inside it.",
      "Leanne wrote long after most authors would have stopped. The result is a memoir that resists tidy resolution, and is stronger for it.",
    ],
    whyWeChose: [
      "Changing Eyes contributes meaningfully to the literature of addiction and family. It refuses stigma without minimizing the disease.",
      "It is a book that mothers press into the hands of other mothers, and that is often the highest recommendation any book can earn.",
    ],
    perspective: {
      intro:
        "Changing Eyes is the kind of memoir that quietly changes how readers see the people around them. Its power is not in shock or spectacle, but in its refusal to look away.",
      bullets: [
        { heading: "Why it deserves attention", body: "Few memoirs on addiction manage to be honest about the horror without losing sight of the humanity. Leanne Antaya does both, from the first page." },
        { heading: "Who will enjoy it", body: "Readers of literary memoir, families touched by addiction, and anyone drawn to stories of resilience and quiet, difficult love." },
        { heading: "Themes explored", body: "Motherhood, addiction as illness, grief, faith, forgiveness, and the redefinition of hope in impossible circumstances." },
        { heading: "What makes it stand out", body: "The voice. Unadorned, unflinching, and deeply human. Every sentence earns its place." },
        { heading: "Why it matters", body: "Because stigma isolates families. This book refuses that isolation and offers, instead, company on the walk." },
      ],
    },
    recommendedFor: [
      "Readers who loved Beautiful Boy by David Sheff",
      "Readers of literary memoir in the tradition of Educated and The Glass Castle",
      "Book clubs looking for a discussion driven, emotionally resonant read",
      "Families and professionals working in recovery and mental health",
    ],
    finalThoughts: [
      "Changing Eyes is not merely a book. It is a testament to the human spirit's capacity to endure the unendurable, and to keep loving anyway.",
      "It is the kind of book we are proud to feature in the pages of GrowthSpark Editorial.",
    ],
  },
  "before-the-sunrise": {
    slug: "before-the-sunrise",
    title: "Before the Sunrise",
    subtitle: "A Young Adult Novel of Friendship, Loyalty, and Courage",
    author: "Melisande Corlett",
    authorBio:
      "Melisande Corlett is an Afro Caribbean native of New York and an award nominated author whose literary voice carries the weight of both personal experience and universal truth. A graduate of Norfolk State University with a Bachelor's degree in English and Mass Communications, she is a distinguished member of three honor societies and a committed advocate for women's empowerment. In 2026 she received honorary recognition from Influential Women for vision, inspiration, and impact.",
    genre: "Young Adult Fiction · Mystery",
    published: "July 2026",
    readingTime: "14 min read",
    cover: sunriseCover.url,
    awards: ["Best Author of the Year Nominee, International Impact Books", "Honoree, Influential Women 2026"],
    tagline:
      "A story that meets you in the waiting, in the not yet, and convinces you that dawn is coming.",
    aboutBook: [
      "Before the Sunrise is not a simple story about growth. The journey we follow is not an escape from danger. It is the crucible in which the protagonist, Jasaiah, must choose between her own escape and the search for her friend.",
      "This fundamental tension, self preservation versus loyalty, drives the narrative forward with a momentum that feels both inevitable and deeply uncertain. Melisande Corlett refuses to make the choice easy for her protagonist, and in doing so, she refuses to make it easy for the reader.",
      "The novel holds the excitement of escape and new beginnings alongside the urgent tension of a mysterious disappearance, and neither one overwhelms the other. It is a rare blend in young adult fiction, where genre conventions often demand a singular focus.",
    ],
    editorialFeature: [
      {
        heading: "From assignment to obsession",
        paragraphs: [
          "Before the Sunrise began as a tenth grade creative writing assignment in Mr. Walker's class. What started as a simple exercise in narrative construction became something far more significant, a seed planted in fertile soil that would take years to fully germinate.",
          "As time progressed, the story developed into a short story for a college final exam in Professor Williams's Young Adult Literature course. This was the moment when the work began to transform from an academic exercise into something with genuine emotional weight, and Corlett gave it the time and attention it deserved.",
        ],
      },
      {
        heading: "A different kind of heroine",
        pull: "Her power comes from within, sparked by a mustard seed of courage.",
        paragraphs: [
          "Jasaiah is not the typical young adult protagonist. She is not a declared predestined warrior traveling the path to ascension or great supernatural power. She is an ordinary young woman facing extraordinary circumstances.",
          "Corlett created a character whose heroism is defined not by supernatural abilities or destiny, but by her choices and her commitment to those she loves. As her courage grows she is empowered to pursue the unknown.",
        ],
      },
      {
        heading: "Stories that honor complexity",
        paragraphs: [
          "Corlett writes for readers who are tired of simple answers. She believes that the most important stories are those that refuse to resolve neatly, that leave room for ambiguity and continued reflection.",
          "Before the Sunrise became a public reflection of the author's private thoughts surrounding friendship and community. She understands that friendship can be fickle and friendship can also be fierce. This duality sits at the heart of her work.",
        ],
      },
    ],
    behindTheStory: [
      "The novel spent years in development, from classroom assignment to college final to published debut. That long gestation gives the writing its confidence. The voice on the page is one that has been listened to, questioned, and trusted.",
      "Corlett's dual perspective as an Afro Caribbean woman navigating multiple cultural worlds gives the book a texture that is both particular and universal, and it is one of the reasons the novel has resonated with such a broad readership.",
    ],
    whyWeChose: [
      "Before the Sunrise contributes meaningfully to the tradition of young adult fiction that trusts its readers with hard questions rather than easy answers.",
      "It stands out for its willingness to sit in the tension between self preservation and loyalty without offering a tidy resolution, which is why it continues to find its way into the hands of readers who most need it.",
    ],
    perspective: {
      intro:
        "Before the Sunrise is the kind of debut that quietly signals the arrival of a serious literary voice. Its power is not in spectacle, but in the way it refuses to look away from the emotional stakes of friendship.",
      bullets: [
        { heading: "Why it deserves attention", body: "Few young adult novels manage to hold thriller tension and emotional truth at once. Corlett does both, from the first chapter." },
        { heading: "Who will enjoy it", body: "Readers of literary young adult fiction, book clubs seeking discussion driven reads, and anyone drawn to stories where courage looks like ordinary people doing extraordinary things." },
        { heading: "Themes explored", body: "Friendship, loyalty, self preservation, courage, and the quiet decisions that reveal who we truly are when it matters most." },
        { heading: "What makes it stand out", body: "A protagonist whose heroism is defined by her choices, not by destiny or supernatural gift. The heroism feels earned." },
        { heading: "Why it matters", body: "Because young readers deserve stories that treat their emotional lives seriously and refuse to offer easy answers to difficult questions." },
      ],
    },
    recommendedFor: [
      "Readers of literary young adult fiction in the tradition of Angie Thomas and Nic Stone",
      "Book clubs seeking discussion driven, emotionally resonant reads",
      "Educators building syllabi that center friendship, loyalty, and moral courage",
      "Anyone who loves a mystery that carries genuine emotional weight",
    ],
    finalThoughts: [
      "Before the Sunrise is a work of quiet power. It does not shout for attention, but it earns it, chapter by chapter, with a voice that trusts its readers to sit in the discomfort of difficult questions.",
      "It is the kind of debut we are proud to feature in the pages of GrowthSpark Editorial.",
    ],
  },
  "peace-in-the-midst-of-the-storm": {
    slug: "peace-in-the-midst-of-the-storm",
    title: "Peace in the Midst of the Storm",
    subtitle: "A Testament of Resilience, Faith, and Unwavering Hope",
    author: "Kaleb Thompson",
    authorBio:
      "Kaleb Thompson is a native of North Myrtle Beach, South Carolina, and the author of the Amazon bestselling inspirational poetry collection Peace in the Midst of the Storm. Raised by a pastor father and a teacher's assistant mother, his upbringing was shaped by faith, service, and community. He holds a Bachelor's degree in Hospitality Management and a Master's degree in Business Administration from Coastal Carolina University.",
    genre: "Inspirational Poetry · Nonfiction",
    published: "July 2026",
    readingTime: "13 min read",
    cover: peaceCover.url,
    pdfUrl: "/proof-of-work/Peace_in_the_Midst_of_the_Storm.pdf",
    themes: ["Faith", "Grief and resilience", "Anxiety and inner peace", "Hope in adversity"],
    authorPerspective:
      "My hope is that these poems become a companion for anyone standing in their own storm, a reminder that peace is not the absence of struggle but the presence of a steady heart within it.",
    readerTakeaway:
      "Readers close this collection with a language for their grief and anxiety, and a conviction that a calm heart is possible even before the storm has passed.",
    bookInfo: {
      format: "Paperback and eBook",
      publisher: "Independently Published",
      publicationDate: "2026",
    },
    awards: ["New York Best Sellers Award", "Amazon Bestseller", "OnlineBookClub.org Top Three Poetry"],
    tagline:
      "Fifty three poems that speak directly to the heart of human struggle. A voice that refuses to be silenced.",
    aboutBook: [
      "Peace in the Midst of the Storm is not written from a place of detached observation. Kaleb Thompson writes from the trenches of personal experience, having wrestled deeply with anxiety and fear, and his poetry is a lifeline extended to readers who find themselves gasping for air in the midst of their own storms.",
      "With fifty three poems that meet the reader honestly in their struggle, Thompson delivers a message of profound authenticity. Giving up is never an option, and peace is not found in the absence of storms but in the presence of a calm heart amid the chaos.",
      "The collection has been praised by the president of Coastal Carolina University as simple and beautiful, described by Literary Titan as the work of a poet with the gift of touching the hearts of his readers, and called a unique, anointed work by Artisan Book Reviews.",
    ],
    editorialFeature: [
      {
        heading: "The inspiration behind the masterpiece",
        paragraphs: [
          "Every masterpiece is born from a collision of circumstances. For Kaleb Thompson, the decision to write Peace in the Midst of the Storm was propelled by grief, by the trauma of the pandemic, by his own private battles with anxiety and fear, by a longing for peace in a divided world, and by the conviction that his story could serve others.",
          "Rather than hide his own struggles, Thompson brought them into the poems. That honesty is what gives the collection its authority. These are not empty platitudes. They are the hard won reflections of someone who has walked through the valley and emerged with something to say.",
        ],
      },
      {
        heading: "A calm heart amid the chaos",
        pull: "Peace is not the absence of storms. It is the presence of a calm heart within them.",
        paragraphs: [
          "The central conviction of the collection is that the setbacks we currently experience are only temporary, and that we do not have to remain chained to negativity. The people who value our presence, our self love, our selflessness, and our integrity are the ones who help us move forward rather than remain stagnant.",
          "Thompson asks readers to consider how relieved they will be when they decide to release stress, toxicity, and emotional trauma while instilling serenity, generosity, and positive well being in their lives.",
        ],
      },
      {
        heading: "A voice that refuses to be silenced",
        paragraphs: [
          "Thompson's poetry glorifies the significant impact of embracing resilience, designated worth, strong faith, and unwavering confidence in enduring through obstacles and trials, regardless of how difficult they may be.",
          "It brings into effect the truth that no matter how heavy the load life deals us, the ability to concede is never an option. What ultimately makes us stronger is the powerful urge to overcome, which is where breakthrough welcomes us.",
        ],
      },
    ],
    behindTheStory: [
      "Thompson has spent his professional life in the hospitality industry, a field built entirely on service, and the same instinct to serve runs through his poetry. Each poem functions as a gesture of care extended to a reader he may never meet.",
      "Despite the collection's accolades and the endorsements from literary reviewers, university leaders, and readers, the book remains under discovered relative to its quality. It is one of the reasons we chose to feature it here.",
    ],
    whyWeChose: [
      "Peace in the Midst of the Storm belongs to the small tradition of inspirational poetry that earns its comfort through honesty about pain, rather than around it.",
      "It is a collection that readers keep near their Bibles and gift to loved ones in seasons of grief, which is the highest compliment any book of this kind can receive.",
    ],
    perspective: {
      intro:
        "Peace in the Midst of the Storm deserves a wider readership than it has received. Its quiet strength lies in Thompson's willingness to write from within the storm rather than after it.",
      bullets: [
        { heading: "Why it deserves attention", body: "It offers language for the experience of grief, anxiety, and fear without minimizing any of them, which is a rarer craft than it looks." },
        { heading: "Who will enjoy it", body: "Readers of inspirational poetry, believers seeking daily encouragement, and anyone navigating grief, anxiety, or a season of uncertainty." },
        { heading: "Themes explored", body: "Faith, grief, resilience, personal responsibility, unconditional love, and the cultivation of inner peace in the presence of adversity." },
        { heading: "What makes it stand out", body: "The authenticity of the voice. Thompson does not perform peace. He testifies to it." },
        { heading: "Why it matters", body: "Because in a divided, noisy world, poetry that offers steady faith and quiet courage is a genuine public good." },
      ],
    },
    recommendedFor: [
      "Readers of inspirational and devotional poetry",
      "Anyone processing grief, anxiety, or the lingering weight of the pandemic",
      "Ministry leaders and small group facilitators seeking discussion material",
      "Gift givers looking for a meaningful book for a loved one in a difficult season",
    ],
    finalThoughts: [
      "Peace in the Midst of the Storm is a collection that keeps giving on repeat readings. It is the kind of book that quietly earns a permanent place on a bedside table.",
      "It is a work we are proud to feature in the pages of GrowthSpark Editorial.",
    ],
  },
  "reaching-for-the-sky": {
    slug: "reaching-for-the-sky",
    title: "Reaching for the Sky",
    subtitle: "A Life Lived at Altitude — The Memoir of Thomas Sawyer Storey",
    author: "Thomas Sawyer Storey",
    authorBio:
      "Thomas Sawyer Storey is an eighty one year old veteran, former broadcaster, actor, and lifelong seeker of altitude. Born in Hollywood during World War II, he served in the United States Navy, survived a Category 5 super typhoon at sea, and deployed to Vietnam aboard the USS Hancock. He spent thirty five years in Los Angeles radio and television broadcasting as an airborne news and traffic reporter, earning eleven Golden Mic Awards from the Radio and Television News Association of Southern California.",
    genre: "Memoir · Nonfiction",
    published: "July 2026",
    readingTime: "15 min read",
    cover: skyCover.url,
    awards: ["Eleven Golden Mic Awards", "Navy Unit Commendation Recipient"],
    tagline:
      "The story of a man who took to the skies, literally and metaphorically, and spent decades observing the world from above.",
    aboutBook: [
      "Reaching for the Sky is a powerful and inspiring memoir that chronicles the life and career of Thomas Sawyer Storey, from a childhood shaped by World War II influences, to his adventurous years in the United States Navy, to a remarkable career in broadcasting.",
      "Through vivid storytelling, the author shares first hand experiences of serving aboard aircraft carriers during the Vietnam era, navigating dangerous flight deck operations, and witnessing history unfold. The journey continues into civilian life, where persistence, timing, and resilience led him into the competitive world of Los Angeles radio and television.",
      "The book contains over one hundred and fifty color photographs, including images of his grandfather, Vietnam, surfing in Hawaii, commercial diving, acting, and most importantly, photographs from the cockpit of his aircraft over breaking news stories.",
    ],
    editorialFeature: [
      {
        heading: "Hollywood, farms, and the call to service",
        paragraphs: [
          "Storey's origins in Hollywood were anything but ordinary. He grew up in the San Fernando Valley when it was mostly farmland, including the property once owned by Edgar Rice Burroughs, author of Tarzan. When that farm was sold and subdivided for housing, it became the city of Tarzana.",
          "At seventeen he joined the United States Navy, served as a survival swim instructor for Navy pilots in Hawaii, competed in the International Surfing Championship at Makaha, then served aboard the USS Hancock in the V 2 division catapults. He experienced two deployments to Yankee Station in Vietnam and survived a Category 5 super typhoon at sea.",
        ],
      },
      {
        heading: "A career in the clouds",
        pull: "The cockpit became his office. The sky became his workspace.",
        paragraphs: [
          "After the Navy, Storey attended the Don Martin School of Radio and Television Arts and Sciences in Hollywood and began a thirty five year career as an airborne news and traffic reporter across KFWB News 980, K Earth 101, Arrow 93 FM where he was known as Major Tom, KLSX, KMPC, and others.",
          "From his aircraft he watched Los Angeles grow, change, and sometimes crumble. He covered the Northridge earthquake of 1994 from the cockpit, reporting on collapsed freeways and burning buildings in the early morning hours. He covered the great Malibu fire of 1993, brush fires that threatened thousands of homes, and wild police pursuits across the freeways below.",
        ],
      },
      {
        heading: "A legacy for generations",
        paragraphs: [
          "Storey's grandfather, Thomas Sawyer Storey Sr., was a film director and cameraman who worked alongside icons such as Rudolph Valentino and Lon Chaney Jr. He witnessed the shift from silent films to the Talkies of the 1930s. Yet he never wrote his memoirs. His inner life, his struggles, and his triumphs vanished with him.",
          "That silence became the profound motivation for Storey to put pen to paper. Unlike his grandfather, he decided to leave something more enduring, a written record of his life, his thoughts, and his values, so that his family and future generations would not have to guess at the man behind the credits.",
        ],
      },
    ],
    behindTheStory: [
      "The memoir is organized around what Storey calls the sliding doors of life, the moments when opportunity knocks and courage decides whether to step through. It is a lens that turns his biography into something more useful than reminiscence.",
      "The visual dimension of the book is remarkable in its own right. Over one hundred and fifty color photographs, including aerial images taken from the cockpit during breaking news events, make Reaching for the Sky as much a visual archive of Southern California as it is a personal memoir.",
    ],
    whyWeChose: [
      "Reaching for the Sky sits at the intersection of personal memoir and cultural history. Storey's aerial vantage on decades of Los Angeles life makes his story a document of the city as well as the man.",
      "We are drawn to memoirs that understand their responsibility to future generations. This is one of them.",
    ],
    perspective: {
      intro:
        "Reaching for the Sky is a memoir that soars. Storey has done what his grandfather could not, leaving a written record of his life, his thoughts, and his values for the generations who will come after him.",
      bullets: [
        { heading: "Why it deserves attention", body: "It offers a first hand view of Vietnam era naval aviation and thirty five years of Los Angeles broadcasting from a vantage point almost nobody else in America can claim." },
        { heading: "Who will enjoy it", body: "Readers of aviation and military memoir, students of Southern California history, and anyone who loves stories of courage, opportunity, and legacy." },
        { heading: "Themes explored", body: "Legacy, family memory, service, resilience, the sliding doors of opportunity, and the moral weight of leaving a record for those who come after us." },
        { heading: "What makes it stand out", body: "The photographs. Over one hundred and fifty color images, including aerial shots taken during earthquakes, wildfires, and police pursuits." },
        { heading: "Why it matters", body: "Because the histories that are not written down disappear, and Storey has taken deliberate care that his will not." },
      ],
    },
    recommendedFor: [
      "Readers of aviation and military memoir",
      "Fans of Los Angeles history, broadcasting, and mid century Americana",
      "Grandparents thinking about the legacy they want to leave in writing",
      "Anyone drawn to stories of courage, timing, and the sliding doors of opportunity",
    ],
    finalThoughts: [
      "Reaching for the Sky is more than a memoir. It is a monument to a life well lived and an inspiration to future generations.",
      "It is a book we are proud to feature in the pages of GrowthSpark Editorial.",
    ],
  },
  "the-walking-wounded": {
    slug: "the-walking-wounded",
    title: "The Walking Wounded Revised",
    subtitle: "The Healing Journey: Restoring Hope from Your Abusive Past",
    author: "Pastor Deborah Ling",
    authorBio:
      "Pastor Deborah Ling is a pastor, prophet, and survivor of abuse who has been radically healed by the power of God and has dedicated her life to helping others find the same healing and restoration she has experienced. She is the author of ten books, including The Walking Wounded Revised, The ABCs of Christ, and The Devil's Twins. She lives in California and continues to minister to the broken and wounded through her writing and her ministry.",
    genre: "Christian Living · Inspirational Nonfiction",
    published: "August 2026",
    readingTime: "13 min read",
    cover: woundedCover.url,
    awards: ["Ten Published Works in Christian Living", "Widely Recommended in Recovery and Ministry Circles"],
    tagline:
      "A lifeline for anyone who has ever worn a mask to hide their pain, and a roadmap out of the past written by someone who has walked it.",
    aboutBook: [
      "The Walking Wounded Revised is not a book of abstract advice delivered from a safe distance. It is a survivor's account of abuse, shame, and the long work of healing, written by a woman who has lived every page of it.",
      "Pastor Deborah Ling writes for the reader who smiles while breaking inside, who says they are fine while falling apart, who has carried invisible wounds that nobody around them can see. She meets that reader in the pain rather than talking down to it.",
      "Each chapter closes with reflection questions designed to move the reader from reading into doing. They are not generic prompts. They ask for honesty, and they invite God into the places most readers have kept sealed.",
    ],
    editorialFeature: [
      {
        heading: "A book written from inside the fire",
        paragraphs: [
          "Pastor Deborah Ling has experienced the depths of human suffering, the weight of shame, and the loneliness of trauma. She has been abused, broken, and wounded. She wore a mask to hide her pain from the world and lived for years feeling defined by her past.",
          "What separates this book from the wider shelf of healing literature is the absence of distance. There is no counselor's chair between the author and the reader. There is only a fellow survivor saying the four words that so many people spend their lives waiting to hear from anyone at all.",
        ],
      },
      {
        heading: "Where therapy ends and the spiritual work begins",
        pull: "Finally, someone who understands.",
        paragraphs: [
          "One reader described years of therapy that helped and yet left something untouched. The sessions were attended. The work was done. The advice was followed. And still there was an emptiness that the clinical work had not reached.",
          "The Walking Wounded Revised is written directly into that gap. It treats healing as a whole person concern, mind, body, and spirit together, and it insists that spiritual restoration is not an optional supplement to recovery but part of its architecture.",
        ],
      },
      {
        heading: "A testament to God's faithfulness",
        paragraphs: [
          "Pastor Deborah has walked through trials that would have broken many people. She has experienced abuse, homelessness, and the loss of a child. She has faced attack since she was ten months old. Her account of that history is unflinching, and it never becomes spectacle.",
          "The argument the book makes across its chapters is simple and difficult at once. No one is beyond reach. The chains of the past can be broken, the wounds can be healed, and the scars can become testimonies that carry somebody else through their own night.",
        ],
      },
      {
        heading: "Five truths for the healing journey",
        paragraphs: [
          "The book organizes its teaching around five convictions. Your identity is in Christ and not in your trauma. Victim is past tense, a thing that happened to you rather than a name you have to answer to. The feelings of shame and worthlessness are lies rather than verdicts.",
          "The fourth and fifth follow from the first three. God's love is unconditional even in the seasons when the reader feels least worthy of it, and restoration is genuinely possible rather than a comfort offered to be polite. Together they form the spine of the book.",
        ],
      },
    ],
    behindTheStory: [
      "This is Pastor Deborah's tenth book, and the revision matters. Returning to the material after years of ministry allowed her to write with the clarity of someone who has since walked hundreds of other people through the same terrain.",
      "The reflection questions at the close of each chapter were built out of that ministry work. They are the questions she has watched actually move people, rather than the ones that merely sound thoughtful on the page.",
    ],
    whyWeChose: [
      "Books about abuse recovery often choose between clinical usefulness and emotional truth. The Walking Wounded Revised refuses that trade and holds both.",
      "It is a book readers hand to other readers quietly, which is usually the sign of a book doing real work in the world.",
    ],
    perspective: {
      intro:
        "The Walking Wounded Revised earns its place in the literature of healing by refusing easy comfort. It is patient with the reader who is not ready, and honest with the reader who is.",
      bullets: [
        { heading: "Why it deserves attention", body: "It closes the gap between clinical recovery and spiritual restoration, a gap that many survivors describe and few books address directly." },
        { heading: "Who will enjoy it", body: "Survivors of abuse, readers in long term recovery, pastors and ministry leaders, and anyone supporting someone through the aftermath of trauma." },
        { heading: "Themes explored", body: "Identity, shame, forgiveness, spiritual restoration, the language of victimhood, and the slow reconstruction of self worth." },
        { heading: "What makes it stand out", body: "The reflection questions. They turn a book that could have been read passively into a guided piece of personal work." },
        { heading: "Why it matters", body: "Because shame keeps survivors silent, and a book that speaks first gives permission for everything that follows." },
      ],
    },
    recommendedFor: [
      "Survivors of abuse seeking a faith centered path through recovery",
      "Readers who have found therapy helpful but incomplete",
      "Pastors, chaplains, and ministry leaders serving wounded congregations",
      "Small groups and church study circles working through healing together",
    ],
    finalThoughts: [
      "The Walking Wounded Revised is a companion rather than a cure. It walks beside the reader instead of standing ahead of them, and that is precisely why it works.",
      "It is a book we are proud to feature in the pages of GrowthSpark Editorial.",
    ],
  },
  "a-flash-in-time": {
    slug: "a-flash-in-time",
    title: "A Flash In Time",
    subtitle: "When Science and Fiction Collide in a Near Future Thriller",
    author: "J.N. Frye",
    authorBio:
      "J.N. Frye is the author of A Flash In Time, his debut science fiction novel. With a background in electronics, radar, AM and FM radio, and heavy electrical transit operations, Frye brings decades of technical expertise to his writing. He is also the author of several quality assurance guides and brings a practical, grounded perspective to the world of speculative fiction.",
    genre: "Science Fiction · Techno Thriller",
    published: "September 2026",
    readingTime: "11 min read",
    cover: flashCover,
    amazon: "https://a.co/d/0iAEkjO0",
    awards: ["4.97 out of 5.0 across 68 reader reviews on Amazon and Goodreads"],
    tagline:
      "A government experiment tuned to the resonant frequency of the Earth itself. A desert of red sand where the missing are sent. And a question that will not let the reader go: is this the beginning of the end of time?",
    themes: ["Energy Physics", "Government Conspiracy", "Time Distortion", "Alien Evolution", "Survival"],
    aboutBook: [
      "The novel opens in 2006, in the deserts of New Mexico. E-R-Mag Labs is about to activate the most ambitious communication device ever conceived, an AM radio antenna connected to Enet, a worldwide military communication net tuned to the resonant frequency of the Earth itself.",
      "When the switch is thrown, the transmitter explodes. A tree adorned with metal decorations vanishes. Two teenagers disappear with it. The antenna, now named the X pole, becomes a focal point for the Earth's magnetic energy. It begins absorbing not just electrical energy but any form of energy. And then it recharges itself.",
      "Every twenty four hours, people and equipment vanish in rough circles. They are not destroyed. They are sent elsewhere, to a red sand desert that feels both alien and hauntingly familiar, where they are stalked by creatures that resemble the greys of popular imagination but have followed a radically different evolutionary path.",
    ],
    editorialFeature: [
      {
        heading: "A book that demands to be read",
        paragraphs: [
          "In an era where science fiction often leans into fantasy or dystopian romance, A Flash In Time arrives as a refreshing and grounded return to the genre's roots. This is not a book that relies on spectacle alone. It is a story built on questions that feel increasingly urgent.",
          "What happens when humanity's relationship with energy becomes dangerously imbalanced? What if our technological progress is accelerating toward something we do not fully understand? With a 4.97 star rating across 68 reviews, the novel has already proven itself to be more than another science fiction release. It has connected with readers who value intelligent storytelling, plausible science, and characters that linger.",
        ],
      },
      {
        heading: "The science: grounded, believable, thought provoking",
        pull: "This is not speculative fiction that hand waves its science.",
        paragraphs: [
          "One of the novel's greatest strengths is its commitment to scientific plausibility. Frye draws on decades of experience in electronics, radar, AM and FM radio, and heavy electrical transit operations to build a world rooted in real engineering.",
          "The book explores electromagnetic saturation, the idea that humanity's increasing use of technology is fundamentally altering the energy environment of the planet. It explores resonant frequency, the possibility that the Earth has a natural frequency that can be tapped with unpredictable consequences. It explores time distortion and alien evolution, the notion that life elsewhere could follow paths shaped by environments we cannot yet imagine.",
          "The technology feels real because it is grounded in the author's own professional knowledge. Readers who appreciate hard science fiction will find themselves immersed in a world that is both plausible and deeply unsettling.",
        ],
      },
      {
        heading: "Characters: the heart of the story",
        paragraphs: [
          "While the science is compelling, the characters give A Flash In Time its emotional weight. Deputy Ivanov Longfeather, a law enforcement officer of Navajo and Russian descent, is the first to witness the strange events unfolding in the desert. His intuition and connection to the land make him an unlikely but essential hero.",
          "Detective Jaylee Washington is a towering, quietly powerful presence who speaks little and is listened to when he does. His partner, Detective Bart Williams, older and gruffer, is the voice of experience whose humor provides a vital counterpoint to the tension. Doctor Joan Rand, Assistant Program Manager at E-R-Mag Labs, is the scientist who saw the danger coming and may be the one person able to fix the catastrophe she warned about.",
          "These characters are not archetypes. They are people with histories, fears, and motivations that feel real.",
        ],
      },
      {
        heading: "Themes: what the book is really about",
        paragraphs: [
          "Beneath the thriller pacing sits a study of humanity's hubris. The scientists at E-R-Mag Labs are not villains. They are people convinced they are doing the right thing, and that is precisely what makes the story so unsettling.",
          "The novel also examines government secrecy and accountability, the tension between transparency and institutional self preservation, and the way a crisis exposes both. The red desert becomes a crucible that strips away pretense, forcing characters to rely on one another and to find meaning in the struggle to survive.",
          "Ultimately the book suggests there are forces, both physical and existential, that humanity may not be equipped to comprehend. The question is whether we will acknowledge those limits before it is too late.",
        ],
      },
      {
        heading: "Critical reception",
        paragraphs: [
          "IndieReader called it an inventive and manically fast paced thriller with the feel of a Hollywood movie. Portland Book Review called it a winner from start to finish, a science fiction adventure with heart.",
          "The US Review of Books praised its fascinating characters, lively dialogue, and descriptive settings, noting that the novel pulls you into a nightmare scenario that is scariest in being not at all farfetched. City Book Review highlighted the way the author delves into racial biases, personal development, and the perseverance of people overcoming adversity. Pacific Book Review called it the perfect novel for fans of the genre.",
        ],
      },
    ],
    behindTheStory: [
      "Frye's professional life was spent close to the machinery the novel puts at its center: radar systems, broadcast transmitters, and the heavy electrical infrastructure that moves cities. That proximity is why the book's central catastrophe reads as an engineering failure rather than a plot device.",
      "His prior work as an author of quality assurance guides also shows in the structure. The novel is meticulous about cause and consequence, and it rarely asks the reader to accept something it has not already earned.",
    ],
    whyWeChose: [
      "Hard science fiction frequently trades character for concept. A Flash In Time refuses that trade and gives equal weight to both.",
      "It is also a debut, and debuts of this technical confidence are rare enough that they deserve to be pointed at.",
    ],
    perspective: {
      intro:
        "A Flash In Time is a rare achievement: a science fiction novel that respects the genre's traditions while pushing into new territory. It is intelligent without being pretentious and thrilling without being shallow.",
      bullets: [
        { heading: "Why it deserves attention", body: "It grounds an extraordinary premise in real electrical and physical engineering, which makes the escalation genuinely frightening." },
        { heading: "Who will enjoy it", body: "Readers of Michael Crichton and Blake Crouch, and anyone who misses speculative fiction built on plausible science." },
        { heading: "Themes explored", body: "Energy physics, government secrecy, time distortion, alien evolution, and human survival under conditions nobody prepared for." },
        { heading: "What makes it stand out", body: "The author's technical background. The machinery in this book behaves the way machinery actually behaves." },
        { heading: "Why it matters", body: "It asks what happens when our reach exceeds our grasp, at a moment when that question is no longer hypothetical." },
      ],
    },
    recommendedFor: [
      "Readers of hard science fiction and techno thrillers",
      "Fans of Michael Crichton and Blake Crouch",
      "Readers drawn to government conspiracy and first contact narratives",
      "Anyone who prefers speculative fiction built on real engineering",
    ],
    bookInfo: {
      format: "Kindle, Paperback, and Hardcover",
      publicationDate: "December 15, 2023",
    },
    buyLinks: [
      { label: "Buy on Amazon", url: "https://a.co/d/0iAEkjO0" },
      { label: "Author website", url: "https://jnfrye.com" },
    ],
    pdfUrl: "/features/A_Flash_In_Time_Article.pdf",
    finalThoughts: [
      "In a world where the line between science and science fiction is increasingly blurred, A Flash In Time is both a warning and a reminder. There are forces we do not yet understand, and our relationship with them may determine the future of everything.",
      "It is a book we are proud to feature in the pages of GrowthSpark Editorial.",
    ],
  },
  "religion-and-science": {
    slug: "religion-and-science",
    title: "Religion and Science: The Soul",
    subtitle: "Scientific Evidence for the Existence of Souls, Karma and the Afterlife",
    author: "Jargal Dorj",
    authorBio:
      "Dr. Jargal Dorj is a mathematician, researcher and author born in Mongolia. He received his master's degree in mathematics from the Mongolian National University and his Ph.D. in mathematics from the Economic and Mathematics Institute in Moscow. He began working at the Institute of Mathematics of the National Academy of Sciences in Mongolia, later led his family business Onch Co., and relocated with his family first to Poland and then, in 2000, to the United States. In 2012 he was awarded the Polar Star, the highest honor of the Mongolian State. He is fluent in Russian, Polish and English, has published research articles in Mongolian, American and international journals, and has written several books on the scientific basis of Buddhist teachings. He lives in Chicago, Illinois with his wife, Tungalag Dugarjav, a medical doctor, doctor of oriental medicine and clinical professor. They have two daughters and two grandsons.",
    genre: "Science · Religion · Philosophy · Spirituality",
    published: "September 2026",
    readingTime: "13 min read",
    cover: religionCover.url,
    authorPhoto: jargalPhoto.url,
    awards: ["Polar Star, highest honor of the Mongolian State, 2012"],
    tagline:
      "Twenty five years of research bringing logic, set theory, optimal control theory and quantum physics to the oldest questions humanity has asked: what is the soul, does karma govern us, and what happens after we die?",
    themes: [
      "The Scientific Study of the Soul",
      "Karma as a Scientific Principle",
      "The Afterlife and Reincarnation",
      "The Intersection of Science and Religion",
      "Consciousness and Human Existence",
    ],
    aboutBook: [
      "In most religions, after we die, our souls leave our bodies and go to Heaven or Hell depending on the outcome of God's judgment. Some religions hold that the soul is reincarnated into one of six types of animal or human after death, even becoming Buddha or devil depending on karma and consciousness. In both traditions the body perishes and the soul lives on.",
      "Science, meanwhile, has recognised the very large and the very small. Stars and planets, atoms and molecules, electrons, protons and quarks. Yet, as Dorj observes, the nature of human life itself, the soul, karma and reincarnation, has remained outside the reach of scientific attention.",
      "In this book the author sets out to demonstrate the existence of souls, karma and the afterlife by studying religious viewpoints and applying scientific methods. The result is a work of over twenty five years of research combining logic, set theory, optimal control theory, principles of quantum physics and the comparative study of faith traditions.",
    ],
    editorialFeature: [
      {
        heading: "The author",
        paragraphs: [
          "Dr. Jargal Dorj did not arrive at these questions from theology. He arrived from mathematics. Educated in Mongolia and awarded a doctorate in mathematics in Moscow, he spent his early career at the Institute of Mathematics of the National Academy of Sciences in Mongolia before leading his family business through the years following democratisation.",
          "The family moved to Poland in 1995 and to the United States in 2000, where the company was operated under the name Onch Usa, a healing and research company. It was during those years that Dorj began the study that would occupy him for decades: the scientific evidence of Buddhist teachings, examined with the tools of a mathematician rather than the language of belief.",
        ],
      },
      {
        heading: "Religion and science",
        pull: "Science and religion are not enemies. They are two paths toward the same question.",
        paragraphs: [
          "For centuries the two have been treated as rivals, each claiming authority over the meaning of existence. Dorj's argument is that the rivalry is a category error. Religion has described the soul, karma and rebirth for millennia. Science has simply never turned its instruments toward them.",
          "His method is to take religious propositions seriously enough to test them. Beliefs about the soul's transition after death, about judgment, about reincarnation shaped by karma and consciousness, are treated not as articles of faith but as claims that can be examined through structured reasoning.",
        ],
      },
      {
        heading: "The questions behind the book",
        paragraphs: [
          "What is the nature of human life? What happens after death? Is there a soul? Does karma govern our fate? Is there an afterlife? These are the questions the book opens with, and it refuses to treat them as unanswerable simply because they are old.",
          "Dorj's stated goal is accessibility. In his own words, he is a scientist who has come to believe that the existence of souls, karma and reincarnation is true, as proven by mathematical methods such as set theory, logic, optimal control theory and quantum physics, and that making this reasoning available to the public will help people's lives.",
        ],
      },
      {
        heading: "Exploring souls, karma and the afterlife",
        paragraphs: [
          "The book treats the soul as a phenomenon that can be described rather than merely asserted, and karma as a principle of consequence rather than a superstition. Where religion says the soul continues, Dorj asks what continuity would require, and what framework could account for it.",
          "The afterlife is approached the same way, across traditions rather than within one. The comparison is deliberate: where independent faiths converge on the same structure, the author reads that convergence as something worth investigating rather than something to be explained away.",
        ],
      },
      {
        heading: "Why this conversation matters",
        pull: "If our choices carry beyond this life, then how we live is not a small question.",
        paragraphs: [
          "The stakes of the argument are not academic. If the soul exists and karma is real, then a human life is not a closed biological episode, and the way a person treats other people acquires a weight that outlasts them.",
          "Dorj frames this as practical rather than doctrinal. His hope, stated plainly, is that readers will understand these views to be scientifically grounded and will apply them, suffering less in this life, enjoying more of it, and living with greater awareness of what their choices carry forward.",
        ],
      },
      {
        heading: "A book for curious readers",
        paragraphs: [
          "This is a book for people who are comfortable being unsettled. Readers who arrive from science will find religious claims taken seriously. Readers who arrive from faith will find their beliefs examined rather than affirmed.",
          "It rewards the kind of reader who enjoys consciousness studies, philosophy of mind, comparative religion and the large questions that neither laboratory nor pulpit has closed. It asks for an open mind, and it returns the favour with rigour.",
        ],
      },
    ],
    behindTheStory: [
      "The research predates the book by decades. Dorj published three books in Mongolian on the scientific basis of Buddhist teachings, and an earlier English title, Scientific Evidence of the Law of Karma, before assembling this fuller argument.",
      "That long accumulation shows in the structure. The book moves through religious viewpoints first and analysis second, rather than beginning with a conclusion and gathering support for it.",
    ],
    whyWeChose: [
      "Very few writers are equipped to hold both halves of this conversation. A mathematician who has spent twenty five years reading across faith traditions is a genuinely unusual guide.",
      "The book also refuses the two easy positions, dismissal and devotion, and that refusal is what makes it worth reading.",
    ],
    perspective: {
      intro:
        "Religion and Science is an ambitious book that treats the oldest human questions as open rather than settled, and brings an unusual toolkit to them.",
      bullets: [
        { heading: "Why it deserves attention", body: "It applies formal reasoning to subjects usually left to belief, and does so from a career in mathematics rather than theology." },
        { heading: "Who will enjoy it", body: "Readers drawn to consciousness, philosophy of mind, comparative religion and the intersection of physics and meaning." },
        { heading: "Themes explored", body: "The soul, karma, reincarnation, the afterlife, and the long standing division between scientific and religious understanding." },
        { heading: "What makes it stand out", body: "The author's background. Set theory, logic, optimal control theory and quantum physics are not the usual instruments for this subject." },
        { heading: "Why it matters", body: "Because the questions it asks are ones almost everyone eventually asks, and few books address them without either mockery or certainty." },
      ],
    },
    recommendedFor: [
      "Readers interested in consciousness, the soul and the nature of human existence",
      "Readers who enjoy the intersection of science, philosophy and spirituality",
      "Students of comparative religion and Buddhist thought",
      "Anyone drawn to the big questions about what happens after death",
    ],
    bookInfo: {
      publisher: "Available across multiple publishing platforms",
      publicationDate: "Please contact GrowthSpark Impact for current edition details",
    },
    buyLinks: [
      { label: "Purchase link coming soon", url: "" },
    ],
    pdfUrl: "/features/Religion_and_Science_Jargal_Dorj_Feature.pdf",
    finalThoughts: [
      "Religion and Science is an invitation rather than a verdict. It asks scientists to widen their field of inquiry and asks believers to examine their convictions with intellectual honesty.",
      "It is a book we are glad to feature in the pages of GrowthSpark Editorial.",
    ],
  },
};


export const Route = createFileRoute("/editorial/$slug")({
  loader: ({ params }): { feature: Feature } => {
    const feature = features[params.slug];
    if (!feature) throw notFound();
    return { feature };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Feature not found — GrowthSpark Editorial" }, { name: "robots", content: "noindex" }] };
    }
    const f = loaderData.feature;
    const title = `${f.title} by ${f.author} — An Editorial Feature | GrowthSpark Editorial`;
    const desc = `${f.title}. ${f.subtitle}. An editorial feature by GrowthSpark Editorial.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(f.cover.startsWith("https://") ? [
          { property: "og:image", content: f.cover },
          { name: "twitter:image", content: f.cover },
        ] : []),
      ],
      links: [{ rel: "canonical", href: `https://growthsparkimpact.lovable.app/editorial/${f.slug}` }],
    };
  },
  component: EditorialArticle,
  notFoundComponent: EditorialNotFound,
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl">Something went wrong.</h1>
        <p className="mt-4 text-muted-foreground">Please try again in a moment.</p>
        <button onClick={reset} className="mt-8 btn-gold">Try again</button>
      </div>
    );
  },
});

function EditorialNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <span className="text-[11px] uppercase tracking-[0.28em] text-gold">404</span>
      <h1 className="mt-4 font-serif text-5xl">Feature not found.</h1>
      <p className="mt-4 text-muted-foreground">This editorial feature does not exist, or has been moved.</p>
      <Link to="/editorial/featured-authors" className="mt-8 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
        <ArrowLeft size={16} /> Back to Featured Authors
      </Link>
    </div>
  );
}

function EditorialArticle() {
  const { feature: f } = Route.useLoaderData() as { feature: Feature };

  const toc = [
    { id: "introduction", label: "Introduction" },
    { id: "about-the-author", label: "About the Author" },
    ...(f.authorPhoto || f.bookInfo || f.buyLinks ? [{ id: "author-hub", label: "Author Hub" }] : []),
    { id: "about-the-book", label: "About the Book" },
    { id: "editorial-feature", label: "Editorial Feature" },
    { id: "behind-the-story", label: "Behind the Story" },
    { id: "why-we-chose", label: "Why We Chose This Book" },
    { id: "perspective", label: "Editorial Perspective" },
    { id: "recommended", label: "Recommended For Readers Who Enjoy" },
    { id: "final-thoughts", label: "Final Thoughts" },
    { id: "about-this-feature", label: "About This Feature" },
  ];

  return (
    <article className="pb-24">
      {/* HERO */}
      <section className="border-b border-[oklch(1_0_0_/_0.06)]">
        <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-16">
          <Link to="/editorial/featured-authors" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-gold transition">
            <ArrowLeft size={12} /> All Featured Authors
          </Link>

          <div className="mt-10 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
                <img
                  src={f.cover}
                  alt={`${f.title} by ${f.author} — book cover`}
                  className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold border border-gold/40 rounded-full px-3 py-1.5">
                <Bookmark size={12} /> Featured by GrowthSpark Editorial
              </span>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl leading-[1.05]">{f.title}</h1>
              <p className="mt-4 font-serif italic text-2xl text-muted-foreground">{f.subtitle}</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-gold">By {f.author}</p>
              {f.featureCredit && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.featureCredit}</p>}
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">{f.tagline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span>{f.genre}</span>
                <span>·</span>
                <span>{f.published}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {f.readingTime}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {f.awards.map((a) => (
                  <span key={a} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold border border-gold/40 rounded-full px-3 py-1.5">
                    <Award size={12} /> {a}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3 print:hidden">
                {f.amazon && (
                  <a href={f.amazon} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition">
                    Order on Amazon <ArrowRight size={16} />
                  </a>
                )}
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-6 py-3 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition"
                >
                  <Printer size={14} /> Download This Article as PDF
                </button>
                {f.pdfUrl && (
                  <a href={f.pdfUrl} download className="inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-full font-medium text-sm hover:bg-gold hover:text-primary-foreground transition">
                    <Download size={14} /> Download Feature PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY with TOC */}
      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-6 grid lg:grid-cols-12 gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:col-span-3 print:hidden">
            <div className="sticky top-28">
              <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">In this feature</span>
              <ul className="mt-4 space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-foreground/70 hover:text-gold transition">{t.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-9 max-w-[720px] space-y-16">
            <div id="introduction">
              <SectionLabel>Introduction</SectionLabel>
              <p className="mt-6 text-lg leading-[1.8] text-foreground/85">
                What follows is our editorial feature on {f.title} and the author behind it, published as part of our
                ongoing commitment to highlight the books we believe deserve a wider readership.
              </p>
            </div>

            <div id="about-the-author">
              <SectionLabel>About the Author</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">The voice behind the book</h2>
              <div className={f.authorPhoto ? "mt-6 grid sm:grid-cols-3 gap-8 items-start" : "mt-6"}>
                {f.authorPhoto && (
                  <figure className="sm:col-span-1">
                    <img
                      src={f.authorPhoto}
                      alt={`${f.author}, author of ${f.title}`}
                      className="w-full max-w-[220px] rounded-xl object-cover shadow-2xl border border-[oklch(1_0_0_/_0.08)]"
                    />
                    <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{f.author}</figcaption>
                  </figure>
                )}
                <p className={`text-lg leading-[1.8] text-foreground/85 ${f.authorPhoto ? "sm:col-span-2" : ""}`}>{f.authorBio}</p>
              </div>
              {f.themes && f.themes.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {f.themes.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/30 rounded-full px-3 py-1.5">{t}</span>
                  ))}
                </div>
              )}
            </div>

            {(f.authorPhoto || f.bookInfo || f.buyLinks) && (
              <div id="author-hub" className="surface-card rounded-2xl p-8">
                <SectionLabel>Author Hub</SectionLabel>
                <div className="mt-6 grid sm:grid-cols-12 gap-8 items-start">
                  <div className="sm:col-span-4">
                    <img src={f.cover} alt={`${f.title} by ${f.author} — book cover`} className="w-full rounded-lg shadow-2xl" />
                  </div>
                  <div className="sm:col-span-8">
                    <h3 className="font-serif text-2xl leading-tight">{f.title}</h3>
                    <p className="mt-1 font-serif italic text-muted-foreground">{f.subtitle}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-gold">By {f.author}</p>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{f.tagline}</p>
                    {f.bookInfo && (
                      <dl className="mt-6 space-y-2 text-sm text-muted-foreground">
                        <div><span className="text-foreground/70">Genre:</span> {f.genre}</div>
                        {f.bookInfo.format && <div><span className="text-foreground/70">Format:</span> {f.bookInfo.format}</div>}
                        {f.bookInfo.publisher && <div><span className="text-foreground/70">Availability:</span> {f.bookInfo.publisher}</div>}
                        {f.bookInfo.publicationDate && <div><span className="text-foreground/70">Publication:</span> {f.bookInfo.publicationDate}</div>}
                      </dl>
                    )}
                    <div className="mt-7 flex flex-wrap gap-3 print:hidden">
                      {(f.buyLinks ?? []).map((b) =>
                        b.url ? (
                          <a key={b.label} href={b.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition">
                            {b.label} <ArrowRight size={14} />
                          </a>
                        ) : (
                          <span key={b.label} className="inline-flex items-center gap-2 border border-dashed border-gold/40 text-muted-foreground px-5 py-2.5 rounded-full text-sm">
                            {b.label}
                          </span>
                        ),
                      )}
                      <Link to="/contact" className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-5 py-2.5 rounded-full text-sm hover:border-gold hover:text-gold transition">
                        Learn more about this book
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div id="about-the-book">
              <SectionLabel>About the Book</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">{f.title}</h2>
              <div className="mt-6 space-y-6 text-lg leading-[1.8] text-foreground/85">
                {f.aboutBook.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="mt-8">
                <img src={f.cover} alt={`${f.title} — cover`} className="w-56 rounded-md shadow-2xl" />
              </div>
            </div>

            <div id="editorial-feature">
              <SectionLabel>Editorial Feature</SectionLabel>
              <div className="mt-3 space-y-14">
                {f.editorialFeature.map((s) => (
                  <div key={s.heading}>
                    <h2 className="font-serif text-3xl md:text-4xl leading-tight">{s.heading}</h2>
                    <div className="mt-6 space-y-6 text-lg leading-[1.8] text-foreground/85">
                      {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                    {s.pull && (
                      <blockquote className="my-10 border-l-2 border-gold pl-8 font-serif italic text-2xl md:text-3xl leading-snug text-foreground">
                        "{s.pull}"
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div id="behind-the-story">
              <SectionLabel>Behind the Story</SectionLabel>
              <div className="mt-6 space-y-6 text-lg leading-[1.8] text-foreground/85">
                {f.behindTheStory.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div id="why-we-chose">
              <SectionLabel>Why We Chose This Book</SectionLabel>
              <div className="mt-6 space-y-6 text-lg leading-[1.8] text-foreground/85">
                {f.whyWeChose.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div id="perspective" className="border border-gold/30 rounded-2xl p-8 bg-[oklch(0.18_0.012_250)]">
              <div className="flex items-center gap-3">
                <Quote className="text-gold" size={22} />
                <SectionLabel>GrowthSpark Editorial Perspective</SectionLabel>
              </div>
              <p className="mt-6 text-lg leading-[1.8] text-foreground/90">{f.perspective.intro}</p>
              <dl className="mt-8 grid sm:grid-cols-2 gap-6">
                {f.perspective.bullets.map((b) => (
                  <div key={b.heading}>
                    <dt className="font-serif text-lg text-gold">{b.heading}</dt>
                    <dd className="mt-2 text-muted-foreground leading-relaxed">{b.body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div id="recommended">
              <SectionLabel>Recommended For Readers Who Enjoy</SectionLabel>
              <ul className="mt-6 space-y-3 text-lg leading-[1.7] text-foreground/85">
                {f.recommendedFor.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="text-gold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="final-thoughts">
              <SectionLabel>Final Thoughts</SectionLabel>
              <div className="mt-6 space-y-6 text-lg leading-[1.8] text-foreground/85">
                {f.finalThoughts.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div id="about-this-feature" className="border border-[oklch(1_0_0_/_0.1)] rounded-2xl p-8">
              <SectionLabel>About This Feature</SectionLabel>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {f.featureCredit ?? "This editorial feature was independently researched, written, and published by the GrowthSpark Editorial Team as part of our commitment to highlighting books and authors whose work contributes meaningfully to today's literary landscape."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 print:hidden">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-6 py-3 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition"
                >
                  <Printer size={14} /> Download This Article as PDF
                </button>
                {f.pdfUrl && (
                  <a
                    href={f.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-full font-medium text-sm hover:bg-gold hover:text-primary-foreground transition"
                  >
                    <Download size={14} /> Download Feature PDF
                  </a>
                )}
                <Link to="/editorial/featured-authors" className="inline-flex items-center gap-2 border border-[oklch(1_0_0_/_0.18)] px-6 py-3 rounded-full font-medium text-sm hover:border-gold hover:text-gold transition">
                  More Editorial Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] uppercase tracking-[0.28em] text-gold">{children}</span>;
}
