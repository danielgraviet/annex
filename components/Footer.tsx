export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="block text-[#f0ebe3] font-bold text-xl tracking-widest uppercase mb-3">
              ANNEX
            </span>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
              Extraordinary workspaces for ambitious teams.
            </p>
          </div>

          <div>
            <span className="block font-mono text-xs tracking-widest text-[#3a3a3a] uppercase mb-4">
              Navigate
            </span>
            <ul className="space-y-3 text-sm">
              {[
                ["#waitlist", "Join Waitlist"],
                ["#hosts", "List Space"],
                ["#spaces", "Browse Spaces"],
                ["mailto:hello@annex.so", "Contact"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#6b7280] hover:text-[#f0ebe3] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="block font-mono text-xs tracking-widest text-[#3a3a3a] uppercase mb-4">
              For Teams
            </span>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              Hangars. Warehouses. Workshops. Industrial campuses. Places with
              room to build.
            </p>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#3a3a3a] font-mono tracking-wide">
          <span>© {new Date().getFullYear()} Annex. All rights reserved.</span>
          <span>Built for builders.</span>
        </div>
      </div>
    </footer>
  );
}
