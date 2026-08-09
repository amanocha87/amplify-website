const plans = [
  {
    label: "ACCESS",
    title: "Free Business Review",
    description: "A free 30-minute conversation to understand your business and where automation could genuinely help.",
    price: "Free"
  },
  {
    label: "ADAPT",
    title: "Business Systems Audit",
    description: "A written report plus a 1-hour walkthrough explaining exactly what we'd suggest and why, tailored to your business size and complexity. Paid in advance.",
    price: "From £350"
  },
  {
    label: "ACHIEVE",
    title: "Your Solution, Delivered",
    description: "Full build and implementation of your chosen automation or system, designed to create measurable, lasting business improvements.",
    price: "Tailored to project"
  }
];

export default function Pricing() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col h-full"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-4 block">
              {plan.label}
            </span>
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">
              {plan.title}
            </h3>
            <p className="text-2xl font-semibold text-neutral-900 mb-4">
              {plan.price}
            </p>
            <p className="text-neutral-600 leading-relaxed">
              {plan.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-neutral-500 max-w-2xl mx-auto">
        Business Systems Audits are paid in advance. Project work is paid in two stages: 50% to begin, 50% before final delivery.
      </p>
    </section>
  );
}
