import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ioana Serban about product and UI design work.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
      <section className="pb-10 pt-16 sm:pt-24">
        <Reveal>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] tracking-tight">
            Say hello.
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            Whether it&rsquo;s a role, a freelance project, or just a question about
            something on this site — email is the fastest way to reach me, and
            I answer everything.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-10 inline-block font-display text-[clamp(1.5rem,4vw,2.75rem)] tracking-tight text-accent underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-accent"
          >
            {SITE.email}
          </a>
        </Reveal>
      </section>

      <section className="border-t border-line py-14">
        <Reveal>
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-soft">
            Elsewhere
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {SITE.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-xl"
                >
                  {s.label}
                </a>
              </li>
            ))}
            {SITE.resume.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-xl"
                >
                  Download {r.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
