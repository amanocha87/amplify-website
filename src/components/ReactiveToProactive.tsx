export default function ReactiveToProactive() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
      <div className="max-w-3xl mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          From Reactive to Proactive
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
          Most businesses are busy reacting — answering enquiries, chasing leads,
          managing admin and solving problems as they appear.
        </p>

        <p className="text-lg md:text-xl text-neutral-900 leading-relaxed mt-5">
          <span className="font-semibold">
            Amplify helps businesses move from reactive to proactive.
          </span>{' '}
          We identify where opportunities are being missed, then use better
          processes, AI and automation to help you respond earlier, follow up
          consistently and stay ahead of the next opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="border border-neutral-200 rounded-2xl p-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
            Reactive
          </span>

          <div className="mt-6 space-y-4 text-neutral-700">
            <p>Enquiry arrives</p>
            <p>↓</p>
            <p>Team responds when available</p>
            <p>↓</p>
            <p>Follow-up can be missed</p>
            <p>↓</p>
            <p>Problems are dealt with as they appear</p>
          </div>
        </div>

        <div className="border border-neutral-900 rounded-2xl p-8">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-900">
            Proactive
          </span>

          <div className="mt-6 space-y-4 text-neutral-700">
            <p>Opportunity identified</p>
            <p>↓</p>
            <p>System responds and captures information</p>
            <p>↓</p>
            <p>Follow-up is triggered consistently</p>
            <p>↓</p>
            <p>Team focuses on the opportunities that matter</p>
          </div>
        </div>
      </div>
    </section>
  );
}
