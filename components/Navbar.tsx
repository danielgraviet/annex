"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-[#f0ebe3] font-bold text-xl tracking-widest uppercase">
          ANNEX
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#a09890]">
          <a href="#spaces" className="hover:text-[#f0ebe3] transition-colors">
            Spaces
          </a>
          <a href="#why" className="hover:text-[#f0ebe3] transition-colors">
            Why Annex
          </a>
          <a href="#hosts" className="hover:text-[#f0ebe3] transition-colors">
            For Hosts
          </a>
        </div>
        <a
          href="#waitlist"
          className="text-sm font-medium bg-[#e07b39] hover:bg-[#c96a2a] text-white px-4 py-2 transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
