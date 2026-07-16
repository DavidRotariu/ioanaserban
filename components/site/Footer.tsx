import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10">
        <p className="font-display text-2xl italic sm:text-3xl">
          Have a project in mind?
        </p>
        <a
          href={`mailto:${SITE.email}`}
          className="link-underline mt-2 inline-block text-lg text-ink sm:text-xl"
        >
          {SITE.email}
        </a>

        <div className="mt-12 flex flex-col justify-between gap-6 text-sm text-soft sm:flex-row sm:items-end">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Designed with intent.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SITE.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
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
                  className="transition-colors hover:text-accent"
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
