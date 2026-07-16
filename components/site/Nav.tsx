"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

const items = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: SITE.resume[0].href, label: "Resume", external: true },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex w-full max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-6 pt-7 pb-4 sm:px-10">
      <Link
        href="/"
        className="font-display text-lg italic tracking-tight transition-colors hover:text-accent"
      >
        Ioana Serban
      </Link>

      <nav aria-label="Main">
        <ul className="flex items-baseline gap-5 sm:gap-8">
          {items.map((item) => {
            const active =
              !item.external &&
              (pathname === item.href || pathname.startsWith(item.href + "/"));
            return (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] uppercase tracking-[0.14em] text-soft transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-[13px] uppercase tracking-[0.14em] transition-colors hover:text-accent ${
                      active
                        ? "text-ink underline decoration-accent underline-offset-8"
                        : "text-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
