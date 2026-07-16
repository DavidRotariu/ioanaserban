import type { Metadata } from "next";
import ProjectList from "@/components/site/ProjectList";
import Reveal from "@/components/site/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design, UI and brand identity projects by Ioana Serban.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
      <section className="pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Reveal>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] tracking-tight">
            Work
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
            Apps, websites and identities — each one starting from a real
            person&rsquo;s problem, not a template.
          </p>
        </Reveal>
      </section>

      <ProjectList items={projects} headingLevel="h2" />
    </div>
  );
}
