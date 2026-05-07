export default function Problem() {
  return (
    <section className="py-28 bg-[#0f0f0f] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block font-mono text-xs tracking-widest text-[#e07b39] uppercase mb-6">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#f0ebe3] text-balance">
              Great companies should not have to start in beige offices.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[#a09890] text-lg leading-relaxed">
              Too many ambitious teams end up in generic offices, expensive
              leases, or spaces that do not fit the way they actually work.
            </p>
            <p className="text-[#a09890] text-lg leading-relaxed">
              At the same time, industrial and commercial tenants often have
              extra space sitting unused — entire bays, entire floors, entire
              campuses.
            </p>
            <p className="text-[#f0ebe3] text-lg leading-relaxed font-medium">
              Annex connects these two realities.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a]">
          {[
            { value: "40%", label: "of industrial space sits underutilized" },
            { value: "3×", label: "faster lease process vs. traditional CRE" },
            { value: "12mo", label: "average flexible term length" },
            { value: "$0", label: "broker fees, ever" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0f0f0f] p-8">
              <div className="text-3xl font-bold text-[#e07b39] mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-sm text-[#6b7280] leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
