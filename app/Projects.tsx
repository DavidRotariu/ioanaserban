"use client";

interface Project {
  id: number;
  title: string;
  description: string;
  media?: {
    type: "video" | "image";
    src: string;
  };
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mentoro",
    description: "Private tutoring app, inspired from Hertz Music app",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dsaano3rp/video/upload/v1768240441/Mentoro_-_mockup_-_Figma_2026-01-11_19-46-33_vpefhi.mp4",
    },
    link: "#",
  },
  {
    id: 2,
    title: "Meseriasul",
    description: "App/website for solving construction problems in Romania",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dsaano3rp/video/upload/q_auto,f_auto/v1768151934/Video_Project_2_zscrvq.mp4",
    },
    link: "#",
  },
  {
    id: 3,
    title: "Hertz Music",
    description:
      "Personalized tutoring app for a client who is a music teacher",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dsaano3rp/video/upload/v1768240463/Media_Hertz_app_-_Mockup_-_Figma_2026-01-11_19-51-26_pwrw02.mp4",
    },
    link: "#",
  },
  {
    id: 4,
    title: "RBS branding",
    description: "Construction company visual identity",
    media: {
      type: "image",
      src: "/4.png",
    },
    link: "#",
  },
  {
    id: 5,
    title: "Wedding app",
    description: "Personalized online wedding invitations",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dsaano3rp/video/upload/q_auto,f_auto/v1768151537/wedding_planner_-_DESIGNUL_CORECT-_WITH_STAGES_-_Figma_2026-01-10_18-48-33_rko3v4.mp4",
    },
    link: "#",
  },
  {
    id: 6,
    title: "Gym tracker",
    description: "Personalized gym tracker app, with customizable workouts",
    media: {
      type: "video",
      src: "https://res.cloudinary.com/dsaano3rp/video/upload/v1768240397/GYM_tracker_app_-_mockup_-_Figma_2026-01-11_19-52-43_ghfu8n.mp4",
    },
    link: "#",
  },
];

const MediaRenderer = ({ media }: { media: Project["media"] }) => {
  if (!media) return null;

  if (media.type === "video") {
    return (
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  if (media.type === "image") {
    return (
      <img
        src={media.src}
        alt="Project media"
        className="w-full h-full object-cover"
      />
    );
  }

  return null;
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Projects Grid */}
      <main className="px-6 sm:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group cursor-pointer"
              >
                <div
                  className="relative w-full rounded-lg overflow-hidden mb-4
                             transition-all duration-300
                             group-hover:scale-90 group-hover:brightness-75"
                  style={{ aspectRatio: "7 / 5" }}
                >
                  <MediaRenderer media={project.media} />
                </div>

                <div
                  className="transition-all duration-300
                             group-hover:scale-95
                             group-hover:-translate-y-5
                             origin-top-right
                             flex flex-col gap-2"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 text-center">
        <p className="text-sm text-slate-400">
          © 2025 Ioana Serban. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
