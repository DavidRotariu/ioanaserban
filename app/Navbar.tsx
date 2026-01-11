"use client";

import Link from "next/link";

export default function GlassNavbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-8 px-8 py-3
          rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-lg
        "
      >
        <NavItem href="#home" label="Home" />
        <NavItem href="#projects" label="Projects" />
        <NavItem href="#about" label="About" />
        <NavItem href="#contact" label="Contact" />
      </div>
    </nav>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="
        text-white/80
        hover:text-white
        transition-colors
        text-sm md:text-base
        font-medium
      "
    >
      {label}
    </Link>
  );
}
