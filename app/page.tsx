import Link from "next/link";
import ProjectList from "@/components/site/ProjectList";
import Reveal from "@/components/site/Reveal";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const flagship = projects.filter((p) => p.flagship);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
      {/* Editorial intro */}
      <section className="pb-20 pt-20 sm:pb-28 sm:pt-28 lg:pt-36">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.2em] text-soft">
            Product & UI Designer — Romania
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7.5vw,5.5rem)] leading-[1.04] tracking-tight">
            Ioana Serban designs{" "}
            <em className="text-accent">calm, useful apps</em> out of messy,
            everyday work.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-soft">
            I design mobile apps and brand identities for small businesses and
            independent professionals — from first research conversation to
            polished, developer-ready UI.
          </p>
        </Reveal>
      </section>

      {/* Flagship projects */}
      <section aria-labelledby="selected-work">
        <Reveal>
          <div className="flex items-baseline justify-between pb-6">
            <h2
              id="selected-work"
              className="text-[13px] uppercase tracking-[0.2em] text-soft"
            >
              Selected work
            </h2>
            <Link
              href="/work"
              className="link-underline text-sm text-ink"
            >
              All work
            </Link>
          </div>
        </Reveal>
        <ProjectList items={flagship} />
      </section>
    </div>
  );
}
