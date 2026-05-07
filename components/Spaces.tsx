const spaces = [
  {
    name: "Aircraft Hangar Annex",
    location: "Austin, TX",
    sqft: "8,000",
    tenants: "Aerospace, drones, robotics, and engineering teams.",
    tags: ["Industrial Power", "High Ceilings", "30-day Terms"],
    icon: "✈",
    accent: "#e07b39",
  },
  {
    name: "Robotics Warehouse",
    location: "San Francisco Bay Area",
    sqft: "12,500",
    tenants: "Hardware and automation startups.",
    tags: ["Loading Dock", "3-Phase Power", "EV Charging"],
    icon: "⚙",
    accent: "#6b7280",
  },
  {
    name: "Fabrication Studio",
    location: "Los Angeles, CA",
    sqft: "4,200",
    tenants: "Makers, designers, and production teams.",
    tags: ["Ventilation", "Natural Light", "Flex Terms"],
    icon: "◈",
    accent: "#6b7280",
  },
  {
    name: "Builder Compound",
    location: "Denver, CO",
    sqft: "22,000",
    tenants: "Technical teams that need room to operate.",
    tags: ["Campus Access", "Shared Infrastructure", "Community"],
    icon: "◻",
    accent: "#6b7280",
  },
];

export default function Spaces() {
  return (
    <section id="spaces" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="block font-mono text-xs tracking-widest text-[#e07b39] uppercase mb-4">
              Featured Spaces
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0ebe3] text-balance">
              Work from places with character.
            </h2>
          </div>
          <p className="text-[#6b7280] text-sm max-w-xs leading-relaxed md:text-right">
            A curated set of spaces launching this year. More locations added
            monthly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a]">
          {spaces.map((space, i) => (
            <div
              key={space.name}
              className={`group relative bg-[#0f0f0f] hover:bg-[#141414] transition-colors p-8 flex flex-col ${
                i === 0 ? "border-l-2 border-[#e07b39]" : ""
              }`}
            >
              {i === 0 && (
                <span className="absolute top-4 right-4 text-xs font-mono text-[#e07b39] border border-[#e07b39]/30 px-2 py-0.5 uppercase tracking-widest">
                  Available Now
                </span>
              )}
              {i !== 0 && (
                <span className="absolute top-4 right-4 text-xs font-mono text-[#6b7280] border border-[#2a2a2a] px-2 py-0.5 uppercase tracking-widest">
                  Coming Soon
                </span>
              )}

              <div className="text-3xl mb-5 opacity-40">{space.icon}</div>

              <h3 className="text-[#f0ebe3] font-bold text-xl mb-1">
                {space.name}
              </h3>
              <p className="font-mono text-xs text-[#6b7280] tracking-widest mb-3 uppercase">
                {space.location}
              </p>
              <p className="text-[#a09890] text-sm leading-relaxed mb-5 flex-1">
                {space.tenants}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono text-[#e07b39] border border-[#e07b39]/30 px-2.5 py-1 tracking-wide">
                  {space.sqft} ft²
                </span>
                {space.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-[#6b7280] border border-[#2a2a2a] px-2.5 py-1 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#waitlist"
                className="text-sm font-medium text-[#a09890] group-hover:text-[#e07b39] transition-colors tracking-wide"
              >
                Request access →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
