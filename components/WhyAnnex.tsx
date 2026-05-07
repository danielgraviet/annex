const features = [
  {
    number: "01",
    title: "Built for builders",
    body: "Spaces for teams working on hardware, robotics, aerospace, design, production, logistics, and applied technology — not for slide decks.",
  },
  {
    number: "02",
    title: "Flexible by design",
    body: "Access portions of larger spaces without committing to an entire long-term commercial lease. Start with what you need, expand as you grow.",
  },
  {
    number: "03",
    title: "More than square footage",
    body: "Find environments with energy, utility, and a story worth telling. The right space helps you recruit, build, impress customers, and feel the momentum.",
  },
];

export default function WhyAnnex() {
  return (
    <section id="why" className="py-28 bg-[#0f0f0f] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="block font-mono text-xs tracking-widest text-[#e07b39] uppercase mb-4">
            Why Annex
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0ebe3] text-balance max-w-xl">
            The environment is part of the product.
          </h2>
          <p className="mt-5 text-[#a09890] text-lg max-w-2xl leading-relaxed">
            The right space can help a team recruit better, build faster,
            impress customers, and feel like they are part of something bigger.
            Annex is designed for companies that want more than desks and
            drywall.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {features.map((f) => (
            <div key={f.number} className="bg-[#0f0f0f] p-10">
              <span className="block font-mono text-xs text-[#e07b39] tracking-widest mb-6">
                {f.number}
              </span>
              <h3 className="text-[#f0ebe3] font-bold text-xl mb-4">
                {f.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
