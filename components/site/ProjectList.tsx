"use client";

import Link from "next/link";
import { useRef } from "react";
import { videoPoster, videoSrc, type Project } from "@/lib/projects";
import Reveal from "./Reveal";

/**
 * Editorial text-first project rows. On desktop the media column is hidden
 * until the row is hovered or focused, at which point a muted looping
 * preview plays; on mobile a static thumbnail is always shown and the
 * video is never loaded.
 */
export default function ProjectList({
  items,
  headingLevel = "h3",
}: {
  items: Project[];
  headingLevel?: "h2" | "h3";
}) {
  return (
    <ul className="border-b border-line">
      {items.map((project, i) => (
        <ProjectRow
          key={project.slug}
          project={project}
          index={i}
          headingLevel={headingLevel}
        />
      ))}
    </ul>
  );
}

function ProjectRow({
  project,
  index,
  headingLevel: Heading,
}: {
  project: Project;
  index: number;
  headingLevel: "h2" | "h3";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const media = project.media;
  const isVideo = media.type === "video";
  const preview = media.type === "video" ? videoSrc(media.id, 720) : undefined;
  const poster =
    media.type === "video" ? videoPoster(media.id, 720) : media.src;

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!v.src && preview) v.src = preview;
    v.play().catch(() => {});
  };

  const pause = () => videoRef.current?.pause();

  return (
    <li className="border-t border-line">
      <Reveal delay={index * 60}>
        <Link
          href={`/work/${project.slug}`}
          onMouseEnter={play}
          onMouseLeave={pause}
          onFocus={play}
          onBlur={pause}
          className="group grid grid-cols-1 items-center gap-x-10 gap-y-5 py-8 md:grid-cols-[minmax(0,1fr)_240px] md:py-10"
        >
          <div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <Heading className="font-display text-3xl tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
                {project.title}
              </Heading>
              <span className="text-[12px] uppercase tracking-[0.14em] text-soft">
                {project.tag} · {project.year}
              </span>
            </div>
            <p className="mt-2 max-w-xl text-base text-soft">
              {project.tagline}
            </p>
          </div>

          <div
            className="relative aspect-[7/5] overflow-hidden rounded-sm bg-line
                       md:opacity-0 md:transition-all md:duration-500 md:ease-out
                       md:translate-y-1 md:group-hover:translate-y-0 md:group-hover:opacity-100
                       md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100"
          >
            {/* Static thumbnail: the only media ever loaded on mobile.
                Plain <img>: posters are Cloudinary-optimized video frames,
                already sized and compressed at the CDN. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt={project.media.alt}
              loading="lazy"
              className={`h-full w-full object-cover ${isVideo ? "md:hidden" : ""}`}
            />
            {isVideo && (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="none"
                poster={poster}
                aria-hidden="true"
                tabIndex={-1}
                className="hidden h-full w-full object-cover md:block"
              />
            )}
          </div>
        </Link>
      </Reveal>
    </li>
  );
}
