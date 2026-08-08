import { motion } from 'motion/react';

export default function CaseStudies() {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="px-6 py-20 md:py-28 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-900">
            Solutions in Action
          </span>

          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 max-w-4xl">
            Practical solutions built around real business problems.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed">
            From intelligent customer conversations to automated sales
            workflows, Amplify combines business experience with practical AI
            and automation to improve the way businesses operate.
          </p>
        </div>
      </section>

      {/* CASE STUDY 01 */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-purple-900">
              Case Study 01 · AI Business Advisor
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Turning website conversations into qualified business opportunities.
            </h2>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              We developed an AI Business Advisor designed to do more than
              simply answer questions. It can understand what a customer is
              trying to achieve, identify relevant needs and guide the
              conversation towards an appropriate next step.
            </p>

            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              The AI Business Advisor can be adapted around different industries, services and customer journeys — supporting sales enquiries, customer service, lead qualification, appointment journeys and business support while using each organisation’s own knowledge, processes and tone of voice.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                '24/7 Customer Support',
                'Lead Qualification & Routing',
                'Sales & Appointment Guidance',
              ].map((item) => (
                <div
                  key={item}
                  className="border border-neutral-200 rounded-2xl p-4 font-medium text-neutral-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI ADVISOR VISUAL */}
          <div className="rounded-3xl bg-neutral-950 p-6 md:p-8 shadow-xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-neutral-600" />
              <div className="w-3 h-3 rounded-full bg-neutral-600" />
              <div className="w-3 h-3 rounded-full bg-neutral-600" />
              <span className="ml-3 text-sm text-neutral-400">
                Amplify AI Business Advisor
              </span>
            </div>

            <div className="space-y-5">
              <div className="ml-auto max-w-sm bg-white text-neutral-900 rounded-2xl rounded-br-sm p-4">
                We receive plenty of enquiries, but we're struggling to turn
                them into sales.
              </div>

              <div className="max-w-md bg-purple-900 text-white rounded-2xl rounded-bl-sm p-4">
                Let's look at how those enquiries are currently handled. We can
                identify where leads are being lost and whether automation
                could improve your follow-up.
              </div>

              <div className="max-w-md border border-neutral-700 text-neutral-300 rounded-2xl p-4">
                Suggested next step:
                <strong className="block text-white mt-1">
                  Review your lead journey and follow-up process.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY 02 */}
      <section className="px-6 py-20 md:py-28 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* WORKFLOW VISUAL */}
          <div className="order-2 lg:order-1 rounded-3xl bg-white border border-neutral-200 p-7 md:p-10 shadow-sm">
            <p className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-7">
              Automated Lead Journey
            </p>

            <div className="space-y-3">
              {[
                ['01', 'New Customer Enquiry'],
                ['02', 'Lead Assessed'],
                ['03', 'Hot · Warm · Cold'],
                ['04', 'Relevant Email Follow-up'],
                ['05', 'Sales Team / Next Action'],
              ].map(([number, title]) => (
                <div
                  key={number}
                  className="flex items-center gap-5 border border-neutral-200 rounded-2xl p-4"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-900 font-semibold">
                    {number}
                  </span>
                  <span className="font-medium text-neutral-900">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-purple-900">
              Case Study 02 · UK Automotive Business
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Helping sales teams focus on the opportunities that matter.
            </h2>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              For a UK-based automotive business, we implemented an automated lead-management workflow to help the sales team respond to incoming enquiries more consistently and prioritise the strongest opportunities.
            </p>

            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Incoming enquiries are assessed and categorised as Hot, Warm or Cold based on their level of interest and intent. The workflow then triggers the appropriate email response and next action, helping the sales team prioritise high-intent opportunities while ensuring warm and colder leads continue to receive relevant follow-up.
            </p>

            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
             The result is a more structured sales process: faster and more consistent follow-up, clearer lead prioritisation and less repetitive administration — while keeping the sales team in control of the conversations and opportunities that need a human touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-900">
            Your Business Could Be Next
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Could something similar work in your business?
          </h2>

          <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
            Every solution starts with understanding your processes, customers
            and opportunities — then identifying where practical improvements
            can make the biggest difference.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-9 px-7 py-4 rounded-full bg-neutral-900 text-white font-semibold hover:bg-purple-900 transition-colors"
          >
            Book Your Free Business Review
          </a>
        </div>
      </section>
    </main>
  );
}
