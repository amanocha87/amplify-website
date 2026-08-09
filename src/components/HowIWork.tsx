const steps = [
  {
    label: "ACCESS",
    heading: "Understand your business first",
    copy: "Before recommending any tool or system, I learn how your business actually works. What's slowing your team down? Where are enquiries, sales opportunities or admin falling through the cracks? The starting point is a genuine business review — not a technology sales pitch."
  },
  {
    label: "ADAPT",
heading: "Turn gaps into better ways of working",
   copy: "I look for the parts of the business that are costing time, losing enquiries or creating unnecessary friction. Then I design practical AI, automation and process improvements around those opportunities — making the business more responsive, efficient and easier to manage."
  },
  {
    label: "ACHIEVE",
    heading: "Create measurable improvement",
    copy: "The goal isn't technology for its own sake. It's faster responses, less repetitive administration, a more consistent customer experience and more time for you and your team to focus on the work that matters."
  }
];

export default function HowIWork() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          How I Work
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
          Every client starts with the same practical approach — understand the business first, then build around what actually works.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-5xl">
        {steps.map((step, index) => (
          <div key={index}>
            <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-4 block">
              {step.label}
            </span>

            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight leading-snug mb-4">
              {step.heading}
            </h3>

            <p className="text-neutral-600 leading-relaxed text-base">
              {step.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
