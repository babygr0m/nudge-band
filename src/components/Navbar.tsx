"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "PRODUCT", href: "#product" },
  { label: "USE CASES", href: "#use-cases" },
  { label: "WHY NUDGE", href: "#why-nudge" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled ? "rgba(5, 5, 7, 0.9)" : "transparent";
  const navBlur = scrolled ? "blur(12px)" : "none";
  const navBorder = scrolled
    ? "1px solid rgba(138, 138, 142, 0.1)"
    : "1px solid transparent";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: navBg,
        backdropFilter: navBlur,
        borderBottom: navBorder,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span
            className="text-sm font-bold tracking-[0.25em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--nudge-white)",
            }}
          >
            NUDGE
          </span>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--nudge-cyan)" }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(function (link) {
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--nudge-steel)",
                }}
                onMouseEnter={function (e) {
                  e.currentTarget.style.color = "var(--nudge-cyan)";
                }}
                onMouseLeave={function (e) {
                  e.currentTarget.style.color = "var(--nudge-steel)";
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#reserve"
          className="text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-200"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--nudge-cyan)",
            borderColor: "var(--nudge-cyan)",
          }}
          onMouseEnter={function (e) {
            e.currentTarget.style.backgroundColor = "var(--nudge-cyan)";
            e.currentTarget.style.color = "var(--nudge-black)";
          }}
          onMouseLeave={function (e) {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--nudge-cyan)";
          }}
        >
          RESERVE
        </a>
      </div>
    </nav>
  );
}
