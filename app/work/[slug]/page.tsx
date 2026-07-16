import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AutoVideo from "@/components/site/AutoVideo";
import Reveal from "@/components/site/Reveal";
import {
  getProject,
  nextProject,
  projects,
  videoPoster,
  videoSrc,
  type CaseBlock,
} from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = nextProject(slug);

  return (
    <article className="mx-auto w-full max-w-6xl px-6 sm:px-10">
      {/* Header */}
      <header className="pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.2em] text-soft">
            {project.tag}
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,7vw,5rem)] leading-[1.04] tracking-tight">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-soft">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <dl className="mt-12 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-line pt-8 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-[12px] uppercase tracking-[0.14em] text-soft">
                Role
              </dt>
              <dd className="mt-1.5">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.14em] text-soft">
                Timeline
              </dt>
              <dd className="mt-1.5">{project.timeline}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.14em] text-soft">
                Tools
              </dt>
              <dd className="mt-1.5">{project.tools.join(", ")}</dd>
            </div>
            {project.link && (
              <div>
                <dt className="text-[12px] uppercase tracking-[0.14em] text-soft">
                  Live
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {project.link.label}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </header>

      {/* Narrative blocks */}
      <div className="flex flex-col gap-16 sm:gap-24">
        {project.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {/* Next project */}
      <nav
        aria-label="Case study navigation"
        className="mt-24 border-t border-line pt-12 sm:mt-32"
      >
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.2em] text-soft">
            Next project
          </p>
          <Link href={`/work/${next.slug}`} className="group mt-4 block">
            <span className="font-display text-4xl tracking-tight transition-colors group-hover:text-accent sm:text-5xl">
              {next.title}
            </span>
            <span className="mt-2 block max-w-xl text-soft">
              {next.tagline}
            </span>
          </Link>
          <Link
            href="/work"
            className="link-underline mt-10 inline-block text-sm text-ink"
          >
            Back to all work
          </Link>
        </Reveal>
      </nav>
    </article>
  );
}

function Block({ block }: { block: CaseBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <Reveal className="max-w-2xl">
          <section>
            {block.heading && (
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                {block.heading}
              </h2>
            )}
            <div className="mt-5 flex flex-col gap-5">
              {block.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-soft">
                  {p}
                </p>
              ))}
            </div>
          </section>
        </Reveal>
      );

    case "list":
      return (
        <Reveal className="max-w-2xl">
          <section>
            {block.heading && (
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                {block.heading}
              </h2>
            )}
            {block.intro && (
              <p className="mt-5 text-lg leading-relaxed text-soft">
                {block.intro}
              </p>
            )}
            <ol className="mt-6 flex flex-col gap-4">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="font-display text-accent"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-soft">{item}</span>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>
      );

    case "video":
      return (
        <Reveal>
          <figure>
            <AutoVideo
              src={videoSrc(block.id, 1280)}
              poster={videoPoster(block.id, 1280)}
              label={block.caption ?? "Project walkthrough video"}
              className="w-full rounded-sm bg-line"
            />
            {block.caption && (
              <figcaption className="mt-3 text-sm text-soft">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );

    case "image":
      return (
        <Reveal>
          <figure>
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(min-width: 1152px) 1072px, calc(100vw - 48px)"
              className="w-full rounded-sm"
            />
            {block.caption && (
              <figcaption className="mt-3 text-sm text-soft">
                {block.caption}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );

    case "quotes":
      return (
        <Reveal>
          <section>
            {block.heading && (
              <h2 className="max-w-2xl font-display text-3xl tracking-tight sm:text-4xl">
                {block.heading}
              </h2>
            )}
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              {block.quotes.map((q, i) => (
                <figure key={i} className="border-l-2 border-accent pl-6">
                  <blockquote className="font-display text-xl italic leading-relaxed">
                    “{q.text}”
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-soft">
                    — {q.source}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </Reveal>
      );
  }
}
