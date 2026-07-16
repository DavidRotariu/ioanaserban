const CLOUDINARY = "https://res.cloudinary.com/dsaano3rp/video/upload";

/** Optimized, width-capped video URL. */
export function videoSrc(id: string, width = 1280): string {
  return `${CLOUDINARY}/q_auto,w_${width}/${id}`;
}

/** Still frame from the start of a video, used as poster / mobile thumbnail. */
export function videoPoster(id: string, width = 960): string {
  return `${CLOUDINARY}/so_0,q_auto,w_${width}/${id.replace(/\.mp4$/, ".jpg")}`;
}

export type CaseBlock =
  | { kind: "text"; heading?: string; paragraphs: string[] }
  | { kind: "list"; heading?: string; intro?: string; items: string[] }
  | { kind: "video"; id: string; caption?: string }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | { kind: "quotes"; heading?: string; quotes: { text: string; source: string }[] };

export interface Project {
  slug: string;
  title: string;
  /** One-line description used in project lists. */
  tagline: string;
  /** Client / context tag shown next to the title. */
  tag: string;
  year: string;
  flagship?: boolean;
  /** Case-study header fields. */
  summary: string;
  role: string;
  timeline: string;
  tools: string[];
  link?: { href: string; label: string };
  /** List thumbnail / hover preview. */
  media:
    | { type: "video"; id: string; alt: string }
    | { type: "image"; src: string; width: number; height: number; alt: string };
  blocks: CaseBlock[];
}

export const projects: Project[] = [
  {
    slug: "mentoro",
    title: "Mentoro",
    tagline: "A calm scheduling and student-management app for private tutors",
    tag: "Personal product",
    year: "2025–",
    flagship: true,
    summary:
      "A mobile app that gives private tutors one place for their schedule, students, payments and notes.",
    role: "Product & UI design",
    timeline: "December 2025 — ongoing",
    tools: ["Figma"],
    link: { href: "https://meditoro.ro", label: "meditoro.ro" },
    media: {
      type: "video",
      id: "v1768240441/Mentoro_-_mockup_-_Figma_2026-01-11_19-46-33_vpefhi.mp4",
      alt: "Animated walkthrough of the Mentoro app interface",
    },
    blocks: [
      {
        kind: "text",
        heading: "The problem",
        paragraphs: [
          "After designing the Hertz Music app for a specific client, I realized the problem was much bigger than one music teacher. Many private tutors in my area manage their whole practice by hand: attendance in notebooks, payments from memory, schedules scattered across chat apps.",
          "Mentoro started as a simple question — what would it look like if a tutor's entire working day fit into one quiet, obvious app?",
        ],
      },
      {
        kind: "list",
        heading: "What tutors kept telling me",
        intro:
          "I spoke with several potential users and watched how they actually work. The same five problems came up again and again:",
        items: [
          "They work with many students, so taking attendance and keeping records is time-consuming and error-prone.",
          "It's easy to lose track of how much each student has paid, because payment management isn't organized anywhere.",
          "They need one simple place for each student's personal information.",
          "They rarely have a clear view of their schedule, so it's hard to know when they're free to add new lessons.",
          "They want an easy way to jot down notes per student about upcoming lessons and homework.",
        ],
      },
      {
        kind: "video",
        id: "v1768240441/Mentoro_-_mockup_-_Figma_2026-01-11_19-46-33_vpefhi.mp4",
        caption: "The current design, walked through in Figma.",
      },
      {
        kind: "text",
        heading: "Designing the product",
        paragraphs: [
          "From those conversations I moved through sketches, wireframes and high-fidelity mockups, always testing against one constraint: a tutor who is not comfortable with technology should be able to use it without instructions.",
          "The first solution centered on the schedule — giving tutors an at-a-glance view of their week, with students, payments and notes hanging off each lesson.",
        ],
      },
      {
        kind: "image",
        src: "/image0.png",
        alt: "Early Mentoro screens showing the schedule and student list",
        width: 1631,
        height: 766,
      },
      {
        kind: "image",
        src: "/image1.png",
        alt: "Mentoro screens for attendance and payment tracking",
        width: 1289,
        height: 708,
      },
      {
        kind: "text",
        heading: "Testing, then a redesign",
        paragraphs: [
          "When I put the first version in front of users, one piece of feedback dominated: it felt overwhelming. Too much information competed for attention on every screen.",
          "So I redesigned it. The final version strips each screen back to a single primary task — take attendance, check a payment, add a note — and lets everything else recede.",
        ],
      },
      {
        kind: "image",
        src: "/image2.png",
        alt: "The redesigned, simplified Mentoro interface",
        width: 1456,
        height: 688,
      },
      {
        kind: "list",
        heading: "Where it landed",
        intro: "With the redesign, tutors can now:",
        items: [
          "Take attendance and collect information for all students at once.",
          "Track payments with a system that does the bookkeeping for them.",
          "Keep everything in one place instead of jumping between apps.",
          "See at a glance when they're free and when they're busy.",
          "Keep notes ready for the next lesson, per student.",
        ],
      },
      {
        kind: "quotes",
        heading: "Early feedback",
        quotes: [
          {
            text: "Mentoro helped me keep track of all my students and payments. Planning lessons is now a breeze.",
            source: "Andreea, violin teacher",
          },
          {
            text: "Finally, one place for attendance, notes, and payments. Super easy to use.",
            source: "Fineas, piano teacher",
          },
        ],
      },
      {
        kind: "text",
        heading: "What I'd do differently",
        paragraphs: [
          "I'd put rough wireframes in front of tutors earlier. The overwhelming first version cost weeks that a few messy paper tests would have caught. The project is ongoing — the next step is shipping it as a real product at meditoro.ro.",
        ],
      },
    ],
  },
  {
    slug: "meseriasul",
    title: "Meseriasul",
    tagline: "Connecting people with reliable tradespeople across Romania",
    tag: "App & website",
    year: "2025",
    flagship: true,
    summary:
      "An app and website that helps people in Romania find trustworthy professionals for construction and repair work.",
    role: "UX & UI design",
    timeline: "2025",
    tools: ["Figma"],
    media: {
      type: "video",
      id: "v1768151934/Video_Project_2_zscrvq.mp4",
      alt: "Animated walkthrough of the Meseriasul interface",
    },
    blocks: [
      {
        kind: "text",
        heading: "The problem",
        paragraphs: [
          "In Romania, finding a reliable tradesperson — a builder, an electrician, a plumber — still mostly happens through word of mouth. If your network doesn't know anyone, you're gambling: no portfolio to look at, no reviews, no clear pricing.",
          "Meseriasul (\"the tradesman\") set out to make that first contact trustworthy for both sides.",
        ],
      },
      {
        kind: "text",
        heading: "Designing for two audiences",
        paragraphs: [
          "The product has to serve two very different users at once: homeowners describing a problem they may not have words for, and tradespeople — often working from a phone on a job site — presenting their work and responding to requests.",
          "I designed the flows around that asymmetry: a guided, plain-language request flow for clients, and a fast, low-friction profile and response experience for professionals.",
        ],
      },
      {
        kind: "video",
        id: "v1768151934/Video_Project_2_zscrvq.mp4",
        caption: "Browsing professionals and posting a job request.",
      },
      {
        kind: "text",
        heading: "Outcome",
        paragraphs: [
          "The result is a design where trust signals — photos of past work, verified details, reviews — do the selling, and where posting a job takes a couple of minutes on a phone. Designed as both a responsive website and a mobile app from the same system.",
        ],
      },
    ],
  },
  {
    slug: "hertz-music",
    title: "Hertz Music",
    tagline: "A personalized lesson-management app for a music teacher",
    tag: "Client project",
    year: "2025",
    flagship: true,
    summary:
      "A tailored app designed for one client — a music teacher who needed lessons, students and payments in one place.",
    role: "UX & UI design",
    timeline: "2025",
    tools: ["Figma"],
    media: {
      type: "video",
      id: "v1768240463/Media_Hertz_app_-_Mockup_-_Figma_2026-01-11_19-51-26_pwrw02.mp4",
      alt: "Animated walkthrough of the Hertz Music app interface",
    },
    blocks: [
      {
        kind: "text",
        heading: "The brief",
        paragraphs: [
          "Hertz Music began with a single client: a music teacher running a full private practice with paper, memory and messaging apps. The brief was personal rather than generic — design the app around how this one teacher actually works.",
        ],
      },
      {
        kind: "text",
        heading: "Process",
        paragraphs: [
          "Working closely with the client, I mapped a typical teaching week — how lessons get scheduled and rescheduled, how payments arrive, what needs remembering between sessions — and turned each recurring pain into a screen or a shortcut.",
          "Because there was exactly one user, every decision could be tested immediately against real habits instead of assumptions.",
        ],
      },
      {
        kind: "video",
        id: "v1768240463/Media_Hertz_app_-_Mockup_-_Figma_2026-01-11_19-51-26_pwrw02.mp4",
        caption: "The Hertz Music app, walked through in Figma.",
      },
      {
        kind: "text",
        heading: "Outcome",
        paragraphs: [
          "The client got an app shaped precisely around their practice. Just as importantly, the project revealed how many other tutors share these exact problems — the insight that grew into Mentoro, my ongoing product for private tutors.",
        ],
      },
    ],
  },
  {
    slug: "wedding-invitations",
    title: "Wedding Invitations",
    tagline: "Personalized online wedding invitations, from save-the-date to RSVP",
    tag: "Web app",
    year: "2025",
    summary:
      "A web app for creating personalized online wedding invitations that guide guests from announcement to RSVP.",
    role: "UX & UI design",
    timeline: "2025",
    tools: ["Figma"],
    media: {
      type: "video",
      id: "v1768151537/wedding_planner_-_DESIGNUL_CORECT-_WITH_STAGES_-_Figma_2026-01-10_18-48-33_rko3v4.mp4",
      alt: "Animated walkthrough of the wedding invitation web app",
    },
    blocks: [
      {
        kind: "text",
        heading: "The idea",
        paragraphs: [
          "Printed wedding invitations are beautiful but static — they can't collect RSVPs, update details, or answer guests' questions. This project turns the invitation into a small, personal website for each couple.",
        ],
      },
      {
        kind: "text",
        heading: "Design decisions",
        paragraphs: [
          "The design had to feel like an invitation first and an app second: generous type, the couple's own imagery, and a staged flow that reveals the story of the day before asking anything of the guest.",
          "The RSVP is broken into small, friendly stages rather than one long form, so guests can answer on their phone in under a minute.",
        ],
      },
      {
        kind: "video",
        id: "v1768151537/wedding_planner_-_DESIGNUL_CORECT-_WITH_STAGES_-_Figma_2026-01-10_18-48-33_rko3v4.mp4",
        caption: "The staged invitation flow, from story to RSVP.",
      },
      {
        kind: "text",
        heading: "Outcome",
        paragraphs: [
          "A template system that stays personal: each invitation looks bespoke, while the underlying flow — announce, inform, collect responses — stays consistent and reliable for every couple.",
        ],
      },
    ],
  },
  {
    slug: "gym-tracker",
    title: "Gym Tracker",
    tagline: "A workout tracker built around fully customizable routines",
    tag: "Mobile app",
    year: "2025",
    summary:
      "A personalized gym-tracking app where the workout adapts to the user, not the other way around.",
    role: "UX & UI design",
    timeline: "2025",
    tools: ["Figma"],
    media: {
      type: "video",
      id: "v1768240397/GYM_tracker_app_-_mockup_-_Figma_2026-01-11_19-52-43_ghfu8n.mp4",
      alt: "Animated walkthrough of the gym tracker app interface",
    },
    blocks: [
      {
        kind: "text",
        heading: "The problem",
        paragraphs: [
          "Most workout apps assume you'll follow their program. People who train seriously usually have their own — what they need is a fast way to log it mid-workout, with a phone in one hand and a dumbbell in the other.",
        ],
      },
      {
        kind: "text",
        heading: "Design decisions",
        paragraphs: [
          "The core of the design is the custom routine: users build workouts from their own exercises, sets and progressions, and the app gets out of the way during training — big touch targets, minimal input per set, clear progress at a glance.",
        ],
      },
      {
        kind: "video",
        id: "v1768240397/GYM_tracker_app_-_mockup_-_Figma_2026-01-11_19-52-43_ghfu8n.mp4",
        caption: "Building a custom workout and logging sets.",
      },
      {
        kind: "text",
        heading: "Outcome",
        paragraphs: [
          "A tracker that respects the user's own training style — quick enough to use between sets, structured enough to show progress over months.",
        ],
      },
    ],
  },
  {
    slug: "rbs-branding",
    title: "RBS Branding",
    tagline: "Visual identity for a construction company",
    tag: "Brand identity",
    year: "2025",
    summary:
      "A complete visual identity for Rotariu Building Services — logo, palette and applications built on trust.",
    role: "Brand design",
    timeline: "2025",
    tools: ["Figma", "Illustrator"],
    media: {
      type: "image",
      src: "/4.png",
      width: 842,
      height: 595,
      alt: "RBS brand identity: logomark, wordmark and tagline on a photographic background",
    },
    blocks: [
      {
        kind: "text",
        heading: "The brief",
        paragraphs: [
          "Rotariu Building Services needed an identity that could compete for serious contracts: something that reads as established and dependable, not like a van with a phone number on it.",
        ],
      },
      {
        kind: "image",
        src: "/4.png",
        alt: "RBS brand board showing the logomark, wordmark and tagline 'Building Trust, Building Futures'",
        width: 842,
        height: 595,
        caption: "The identity in context: logomark, wordmark and tagline.",
      },
      {
        kind: "text",
        heading: "The identity",
        paragraphs: [
          "The logomark merges the R initial with a roofline, so the mark tells you the trade before you read a word. A restrained palette and a confident grotesque wordmark carry the tagline — Building Trust, Building Futures — across signage, documents and vehicles.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
