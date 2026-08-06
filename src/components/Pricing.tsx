export default function Pricing() {
  const plans = [
    {
      title: "Business Reviews",
      description: "Comprehensive audits of your current operations and a clear roadmap for technological improvements.",
    },
    {
      title: "Consultancy",
      description: "Ongoing strategic guidance and project-based support tailored to your business goals.",
    },
    {
      title: "AI & Automation",
      description: "Custom design and implementation of AI agents and automated workflows to reduce administration.",
    },
    {
      title: "Ongoing Support",
      description: "Long-term managed support, continuous optimisation and maintenance of your new systems.",
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto bg-neutral-50 border-t border-neutral-100">
      <div className="mb-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          Clear, Transparent Pricing
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
          Every project is tailored to your business, but our pricing structure is always clear.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-4">
              {plan.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {plan.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
