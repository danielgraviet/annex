"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={gridRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f0f]"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Radial spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), #e07b3920, transparent 60%)",
        }}
      />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#f0ebe3 1px, transparent 1px), linear-gradient(90deg, #f0ebe3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Horizontal rule accent */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e07b39]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#e07b39] uppercase mb-8 border border-[#e07b39]/30 px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e07b39] animate-pulse" />
            Now accepting waitlist
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#f0ebe3] text-balance mb-6">
            Extraordinary workspaces for ambitious teams.
          </h1>

          <p className="text-lg text-[#a09890] leading-relaxed max-w-lg mb-10">
            Annex helps startups and growing businesses find flexible space
            inside hangars, warehouses, workshops, and industrial campuses —
            places with room to build, test, create, and grow.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#waitlist"
              className="inline-block bg-[#e07b39] hover:bg-[#c96a2a] text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
            >
              Join the Waitlist
            </a>
            <a
              href="#hosts"
              className="inline-block border border-[#2a2a2a] hover:border-[#a09890] text-[#a09890] hover:text-[#f0ebe3] font-medium px-8 py-4 text-sm tracking-wide transition-colors"
            >
              List Your Space
            </a>
          </div>
        </div>

        {/* Right: mock listing card */}
        <div className="relative">
          <div className="absolute -inset-px bg-gradient-to-br from-[#e07b39]/20 via-transparent to-transparent rounded-sm" />
          <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] p-0 overflow-hidden">
            {/* Card image area */}
            <div className="relative h-52 bg-[#111] overflow-hidden">
              {/* Abstract industrial SVG */}
              <svg
                viewBox="0 0 600 208"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1f2e" />
                    <stop offset="100%" stopColor="#0f0f0f" />
                  </linearGradient>
                  <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#111" />
                  </linearGradient>
                </defs>
                <rect width="600" height="208" fill="url(#sky)" />
                {/* Hangar structure lines */}
                <path d="M0,140 Q300,60 600,140" stroke="#2a3040" strokeWidth="1" fill="none" />
                <path d="M0,150 Q300,70 600,150" stroke="#2a3040" strokeWidth="0.5" fill="none" />
                {/* Vertical support beams */}
                {[80, 180, 300, 420, 520].map((x, i) => (
                  <line key={i} x1={x} y1="60" x2={x} y2="208" stroke="#232830" strokeWidth="1.5" />
                ))}
                {/* Cross beams */}
                <line x1="80" y1="80" x2="520" y2="80" stroke="#232830" strokeWidth="1" />
                <line x1="80" y1="110" x2="520" y2="110" stroke="#1e232a" strokeWidth="0.8" />
                {/* Floor */}
                <rect x="0" y="170" width="600" height="38" fill="url(#floor)" />
                {/* Runway markings */}
                {[50, 130, 210, 290, 370, 450, 530].map((x, i) => (
                  <rect key={i} x={x} y="185" width="30" height="4" rx="1" fill="#2a2a2a" />
                ))}
                {/* Ambient light pools */}
                <ellipse cx="150" cy="130" rx="60" ry="20" fill="#e07b39" opacity="0.04" />
                <ellipse cx="450" cy="130" rx="60" ry="20" fill="#e07b39" opacity="0.04" />
                {/* Small plane silhouette */}
                <g transform="translate(240, 115) scale(0.7)" opacity="0.3">
                  <path d="M0,0 L60,0 L70,8 L60,6 L0,6 Z" fill="#a09890" />
                  <path d="M15,-12 L40,-12 L40,0 L15,0 Z" fill="#a09890" />
                  <path d="M5,6 L20,6 L20,14 L5,14 Z" fill="#a09890" />
                </g>
              </svg>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              {/* Tag */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="text-xs font-mono bg-[#e07b39] text-white px-2 py-0.5 uppercase tracking-widest">
                  Featured
                </span>
                <span className="text-xs font-mono bg-[#0f0f0f]/70 text-[#a09890] border border-[#2a2a2a] px-2 py-0.5 uppercase tracking-widest">
                  Available
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[#f0ebe3] font-bold text-lg">
                  Aircraft Hangar Annex
                </h3>
                <span className="text-[#e07b39] text-sm font-mono">8,000 ft²</span>
              </div>
              <p className="text-[#6b7280] text-sm mb-4 font-mono tracking-wide">
                Austin, TX
              </p>
              <p className="text-[#a09890] text-sm mb-5 leading-relaxed">
                Ideal for aerospace, robotics, drones, and engineering teams
                that need serious infrastructure and room to operate.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Industrial Power", "High Ceilings", "Flexible Terms", "Shared Ops"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#6b7280] border border-[#2a2a2a] px-2.5 py-1 font-mono tracking-wide"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <a
                href="#waitlist"
                className="block text-center text-sm font-semibold text-[#e07b39] border border-[#e07b39]/40 hover:bg-[#e07b39]/10 py-3 transition-colors tracking-wide"
              >
                Request Access →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none" />
    </section>
  );
}
