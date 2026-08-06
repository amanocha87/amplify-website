export default function TrustCards() {
  const cards = [
    {
      title: "Business First",
      copy: "We understand the problem before recommending the technology."
    },
    {
      title: "Practical Solutions",
      copy: "Only systems that save time, improve service or create growth."
    },
    {
      title: "Built Around You",
      copy: "Every business is different, so every recommendation should be too."
    },
    {
      title: "Long-Term Support",
      copy: "We aim to become a trusted business partner, not simply install software."
    }
  ];

  return (
    <section className="py-32 md:py-40 px-6 max-w-[1400px] mx-auto bg-white border-y border-neutral-100">
      <div className="mb-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          Why Businesses Choose Amplify
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col text-center lg:text-left">
            <div className="w-12 h-1 bg-neutral-900 mb-6 mx-auto lg:mx-0" />
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight leading-snug mb-3">
              {card.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {card.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
