"use client";

import { useEffect, useRef } from "react";

/**
 * A muted, looping video that lazy-loads its source, plays while on screen
 * and pauses when scrolled away. Respects prefers-reduced-motion by showing
 * the poster frame instead of autoplaying.
 */
export default function AutoVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src;
          if (!reduceMotion) video.play().catch(() => {});
        } else if (!video.paused) {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
      className={className}
    />
  );
}
