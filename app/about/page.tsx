import type { Metadata } from "next";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Ioana Serban got into design, and what she cares about as a designer.",
};

const timeline = [
  {
    period: "Early on",
    text: "A childhood spent drawing and painting turned, in high school, into an unexpected pairing with programming and technology.",
  },
  {
    period: "2023",
    text: "Discovered UI/UX and graphic design — the place where both halves finally fit. Courses, self-teaching, and a clear direction.",
  },
  {
    period: "2024",
    text: "First client projects. Learned that real design starts with listening: user needs and practical solutions over pretty screens.",
  },
  {
    period: "2025",
    text: "Larger and more diverse work — branding, visual identities, and app designs that grew into fully functional products used by real clients.",
  },
  {
    period: "Now",
    text: "Building Mentoro, taking on bigger clients, and chasing meaningful, user-centered work.",
  },
];

const values = [
  {
    title: "Empathize first",
    text: "I design for the tutor who isn't comfortable with technology, the builder answering requests from a job site. If they can't use it, it isn't done.",
  },
  {
    title: "Original and functional",
    text: "A design should be recognizable without being decorative. Every distinctive choice has to earn its place by helping someone do something.",
  },
  {
    title: "Patient and meticulous",
    text: "The last ten percent — spacing, states, edge cases — is where trust in a product is actually built. I stay for it.",
  },
  {
    title: "Always learning",
    text: "Each project teaches me something the last one couldn't. I fold it back in and start the next one better.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
      <section className="grid gap-12 pb-16 pt-16 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
        <div>
          <Reveal>
            <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] tracking-tight">
              Hi, I&rsquo;m Ioana.
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 flex max-w-xl flex-col gap-5 text-lg leading-relaxed text-soft">
              <p>
                I&rsquo;m a product and UI designer based in {SITE.location}. I got
                here by an odd route: years of drawing and painting collided
                with a high-school interest in programming, and UI/UX turned
                out to be the point where the two meet.
              </p>
              <p>
                What I care about most is the gap between how software looks
                in a portfolio and how it feels in someone&rsquo;s hand on a busy
                day. My favorite users are the unglamorous ones — tutors,
                tradespeople, teachers — because designing something they
                genuinely rely on is harder, and more satisfying, than
                designing something that merely photographs well.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Portrait. TODO: drop a real photo at public/portrait.jpg and
            replace this placeholder with an <Image>. */}
        <Reveal delay={140}>
          <div
            role="img"
            aria-label="Portrait of Ioana Serban (photo coming soon)"
            className="flex aspect-[3/4] w-full max-w-sm items-end justify-start rounded-sm bg-line p-6"
          >
            <span className="font-display text-2xl italic text-soft">
              Photo coming soon
            </span>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="journey" className="border-t border-line py-16">
        <Reveal>
          <h2
            id="journey"
            className="text-[13px] uppercase tracking-[0.2em] text-soft"
          >
            The journey
          </h2>
        </Reveal>
        <ol className="mt-10 flex max-w-2xl flex-col gap-10">
          {timeline.map((item, i) => (
            <li key={item.period}>
              <Reveal delay={i * 50}>
                <div className="grid gap-2 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-8">
                  <span className="font-display text-lg italic text-accent">
                    {item.period}
                  </span>
                  <p className="text-lg leading-relaxed text-soft">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="values" className="border-t border-line py-16">
        <Reveal>
          <h2
            id="values"
            className="text-[13px] uppercase tracking-[0.2em] text-soft"
          >
            What I hold onto
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 50}>
              <div>
                <h3 className="font-display text-2xl tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-soft">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
