"use client";

import Link from "next/link";
import { Download, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function GlassNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onDocumentMouseDown = (e: MouseEvent) => {
      if (!menuRef.current) return;
      const target = e.target as Node | null;
      if (target && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onDocumentMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocumentMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  // Define all nav items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];
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
        <div className="text-white font-bold text-sm md:text-base playfair-display-italic ">
          Ioana Serban
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        {/* Right - Resume Dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((o) => !o)}
            className="
              flex items-center gap-2
              px-4 py-2
              bg-linear-to-b from-cyan-300/80 to-cyan-400/80 hover:from-cyan-400/90 hover:to-cyan-500/90
              rounded-full
              text-slate-900
              font-medium
              text-xs md:text-sm
              transition-all
              duration-200
              shadow-lg shadow-cyan-400/50
              relative
              before:absolute before:inset-0 before:bg-linear-to-b before:from-white/40 before:to-transparent before:rounded-full before:pointer-events-none
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download size={14} />
              Resume
              <ChevronDown
                size={14}
                className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </span>
          </button>

          {isOpen && (
            <div
              role="menu"
              aria-label="Download CV"
              className="absolute right-0 mt-2 w-40 rounded-lg border border-white/20 bg-white backdrop-blur-md shadow-lg"
            >
              <a
                role="menuitem"
                href="/cv-english.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-slate-900 hover:bg-gray-100 rounded-t-lg text-xs md:text-sm"
                onClick={() => setIsOpen(false)}
              >
                CV - English
              </a>
              <a
                role="menuitem"
                href="/cv-romana.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-slate-900 hover:bg-gray-100 rounded-b-lg text-xs md:text-sm"
                onClick={() => setIsOpen(false)}
              >
                CV - Română
              </a>
            </div>
          )}
        </div>
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
        text-xs md:text-sm
        font-medium
        cursor-pointer
        block
      "
    >
      {label}
    </Link>
  );
}
