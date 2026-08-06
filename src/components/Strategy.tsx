export default function Strategy() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-12 bg-neutral-50 rounded-3xl border border-neutral-100 mb-16 text-center">
          <p className="text-2xl md:text-4xl font-medium text-neutral-900 leading-snug">
            "Technology should follow strategy — not replace it."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-4">
              Local roots. National capability.
            </h3>
            <p className="text-neutral-600 prose-lg">
              Our roots are in Leicester, but our clients are across the Midlands and throughout the UK. Our systems and consultancy processes are built for the digital age, enabling us to deliver the same high-quality results to clients nationwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-6">
              The Journey
            </h3>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-neutral-600 font-medium text-sm md:text-base">
              <span>Business Experience</span>
              <span className="text-neutral-300">→</span>
              <span>Digital Systems</span>
              <span className="text-neutral-300">→</span>
              <span>Automation</span>
              <span className="text-neutral-300">→</span>
              <span>Practical AI</span>
              <span className="text-neutral-300">→</span>
              <span className="text-neutral-900 font-bold bg-neutral-100 px-3 py-1 rounded-md">Amplify</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
