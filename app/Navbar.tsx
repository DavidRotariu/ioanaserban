"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";
export default function GlassNavbar() {
  const pathname = usePathname();
  // Define all nav items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];
  // Only show links to pages that are NOT the current page
  const filteredNavItems = navItems.filter((item) => {
    // Special case: treat "/" as home, and pathname can be "/", "/about", or "/work"
    if (pathname === "/" && item.href === "/") return false;
    if (pathname.startsWith(item.href) && item.href !== "/") return false;
    return true;
  });
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-9999 pointer-events-auto">
      <div
        className="
          flex items-center justify-between gap-12
          rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-lg
          px-6 py-3
        "
      >
        {/* Left - Name */}
        <div className="text-white font-bold text-lg md:text-xl playfair-display-italic ">
          Ioana Serban
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex items-center gap-4">
          {filteredNavItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        {/* Right - Download Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-4 py-2
            bg-linear-to-b from-cyan-300/80 to-cyan-400/80 hover:from-cyan-400/90 hover:to-cyan-500/90
            rounded-full
            text-slate-900
            font-medium
            text-sm md:text-base
            transition-all
            duration-200
            shadow-lg shadow-cyan-400/50
            relative
            before:absolute before:inset-0 before:bg-linear-to-b before:from-white/40 before:to-transparent before:rounded-full before:pointer-events-none
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            <Download size={18} />
            Resume
          </span>
        </a>
      </div>
    </nav>
  );
}
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="
        px-3 py-2
        text-white/80
        hover:text-white
        transition-colors
        text-sm md:text-base
        font-medium
        cursor-pointer
        block
      "
    >
      {label}
    </Link>
  );
}
