const benefits = [
  { label: "Offset lease costs", desc: "Generate revenue from space you already own." },
  { label: "Activate unused space", desc: "Turn idle square footage into a productive asset." },
  { label: "Bring in complementary companies", desc: "Build an ecosystem, not just a tenancy." },
  { label: "Support local builders", desc: "Become part of your region's builder community." },
];

export default function Hosts() {
  return (
    <section id="hosts" className="py-28 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="block font-mono text-xs tracking-widest text-[#e07b39] uppercase mb-4">
              For Hosts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0ebe3] text-balance mb-6">
              Have unused space? Turn it into momentum.
            </h2>
            <p className="text-[#a09890] text-lg leading-relaxed mb-10">
              If your company has extra industrial or commercial space, Annex
              helps you connect with ambitious teams that can bring energy,
              revenue, and community into your environment.
            </p>
            <a
              href="#waitlist"
              className="inline-block bg-[#f0ebe3] hover:bg-white text-[#0f0f0f] font-bold px-8 py-4 text-sm tracking-wide transition-colors"
            >
              List Your Space
            </a>
          </div>

          <div className="space-y-px bg-[#1a1a1a]">
            {benefits.map((b) => (
              <div key={b.label} className="bg-[#0f0f0f] px-8 py-6 flex gap-6 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e07b39] mt-2 flex-shrink-0" />
                <div>
                  <div className="text-[#f0ebe3] font-semibold mb-1">{b.label}</div>
                  <div className="text-[#6b7280] text-sm">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
