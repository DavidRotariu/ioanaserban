"use client";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project #1",
    description: "A sentence/phrase about the project and targets",
    link: "#",
  },
  {
    id: 2,
    title: "Project #2",
    description: "A sentence/phrase about the project and targets",
    link: "#",
  },
  {
    id: 3,
    title: "Project #3",
    description: "A sentence/phrase about the project and targets",
    link: "#",
  },
  {
    id: 4,
    title: "Project #4",
    description: "A sentence/phrase about the project and targets",
    link: "#",
  },
  {
    id: 5,
    title: "Project #5",
    description: "A sentence/phrase about the project and targets",
    link: "#",
  },
  {
    id: 6,
    title: "Project #6",
    description: "A sentence/phrase about the project and targets",
    link: "#",
  },
];

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
                  className="relative w-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden mb-4 transition-all duration-300 group-hover:scale-90 group-hover:brightness-70 "
                  style={{ aspectRatio: "7/5" }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl text-slate-400 font-light">
                        {project.id}
                      </div>
                    </div>
                  </div>
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
