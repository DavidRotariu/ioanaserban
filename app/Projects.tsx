"use client";

interface Project {
  id: number;
  title: string;
  description: string;
  media?: {
    type: "video" | "audio" | "image";
    src: string;
  };
  link?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  media?: {
    type: "video" | "audio" | "image";
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
      src: "/3.mp4",
    },
    link: "#",
  },
  {
    id: 2,
    title: "Meseriasul",
    description: "App/website for solving construction problems in Romania",
    media: {
      type: "video",
      src: "/5.mp4",
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
      src: "/2.mp4",
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
      src: "/6.mp4",
    },
    link: "#",
  },
  {
    id: 6,
    title: "Gym tracker",
    description: "Personalized gym tracker app, with customizable workouts",
    media: {
      type: "video",
      src: "/1.mp4",
    },
    link: "#",
  },
];

const MediaRenderer = ({ media }: { media: Project["media"] }) => {
  if (!media) return null;

  switch (media.type) {
    case "video":
      return (
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    case "image":
      return (
        <img
          src={media.src}
          alt="Project media"
          className="w-full h-full object-cover"
        />
      );
    default:
      return null;
  }
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-20 sm:px-12 sm:py-28">
        <div className="max-w-6xl mx-auto">
          {/* <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            My Portfolio
          </h1> */}
          {/* <p className="text-lg text-slate-600 max-w-2xl">
            A collection of projects showcasing my expertise.
          </p> */}
        </div>
      </header>

      {/* Projects Grid */}
      <main className="px-6 sm:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div
                  className="relative w-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden mb-4 transition-all duration-300 group-hover:scale-90 group-hover:brightness-70"
                  style={{ aspectRatio: "7/5" }}
                >
                  {project.media ? (
                    <MediaRenderer media={project.media} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl text-slate-400 font-light">
                          {project.id}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="transition-all duration-300 group-hover:scale-95 group-hover:translate-y-[-20px] group-hover:translate-x-[2px] group-hover:-mt-2 group-hover:gap-1 origin-top-right flex flex-col gap-2">
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
      <footer className="bg-slate-900 text-slate-300 py-12 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-slate-400">
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
