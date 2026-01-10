"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function GlassNavbar() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6">
      {/* Glass morphism navbar container */}
      <div className="relative px-2">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-2xl overflow-hidden">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          {/* Navigation items */}
          <ul className="relative flex items-center gap-1 p-1 list-none">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                      activeItem === item.label
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {/* Active item background */}
                    {activeItem === item.label && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 rounded-full blur-sm" />
                    )}
                    {activeItem === item.label && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                    )}

                    {/* Hover effect background */}
                    <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Text content */}
                    <span className="relative z-10 block">{item.label}</span>

                    {/* Shine effect on hover */}
                    <span className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}
