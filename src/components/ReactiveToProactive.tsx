export default function ReactiveToProactive() {
  return (
    <section className="py-14 md:py-20 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
      <div className="max-w-3xl mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4 leading-tight">
          From Reactive to Proactive
        </h2>
        <p className="text-base md:text-xl text-neutral-600 leading-relaxed">
          <span className="font-semibold text-neutral-900">
            Amplify helps businesses move from reactive to proactive.
          </span>{' '}
          We identify where opportunities are being missed, then use better
          processes, AI and automation to help you respond earlier and follow
          up consistently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl text-sm md:text-base">
        <div className="border border-neutral-200 rounded-2xl p-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500">
            Reactive
          </span>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Enquiry arrives → team responds when available → follow-up can be missed → problems dealt with as they appear.
          </p>
        </div>
        <div className="border border-neutral-900 rounded-2xl p-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-900">
            Proactive
          </span>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Opportunity identified → system responds and captures information → follow-up triggered consistently → team focuses on what matters.
          </p>
        </div>
      </div>
    </section>
  );
}
