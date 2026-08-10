const journey = [
  {
    label: "ACCESS",
    title: "Free Business Review",
    description: "A free 30-minute conversation to understand your business and where we can genuinely help — whether that's better systems, process improvements, your website, or automation.",
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

const packages = [
  {
    title: "AI Readiness + First AI Agent",
  description: "Everything in your Business Systems Audit, plus your choice of one single-channel AI agent: a Trade Enquiry Assistant, SME Customer Engagement Package, AI Receptionist & Lead Qualification, or a custom automation. Includes 90 days of free support. Delivered in 2-3 weeks. Optional monthly retainer available afterward.",
    price: "£1,250"
  },
  {
    title: "Multi-Channel AI Agents",
    description: "One consistent AI agent deployed across up to 3 channels of your choice (e.g. phone, WhatsApp, web chat), with enquiry capture, lead qualification and CRM updates handled the same way regardless of channel. Includes 90 days of free support. Delivered in 2-3 weeks.",
    price: "£2,000"
  },
  {
    title: "SME & Trade Growth Package",
    description: "3-5 multi-channel AI automations across sales, operations and customer service. Includes 180 days of free support and staff training for up to 9 team members. Optional monthly retainer available afterward.",
    price: "£5,000"
  }
];

const retainers = [
  {
    title: "Maintain",
    description: "Regular monitoring, uptime checks, and minor tweaks to keep everything running smoothly.",
    price: "From £150/month"
  },
  {
    title: "Grow",
    description: "Maintain, plus regular optimisation, added automations over time, and monthly reporting.",
    price: "From £350/month"
  },
  {
    title: "Partner",
    description: "Grow, plus priority support and an ongoing strategic partnership focused on continuous improvement.",
    price: "From £750/month"
  }
];

const websiteServices = [
  {
    title: "Website Refresh",
    description: "Updating, fixing, or improving your existing website — new copy, fixed broken elements, added pages.",
    price: "£400-£800"
  },
  {
    title: "New Simple Website",
    description: "A 5-8 page brochure-style website, built to represent your business professionally online.",
    price: "£800-£1,500"
  },
  {
    title: "Custom/Complex Website",
    description: "A fully coded website with automation, booking systems, or other custom functionality built in.",
    price: "£1,500-£3,000"
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
        {journey.map((plan, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col h-full">
            <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-4 block">
              {plan.label}
            </span>
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">{plan.title}</h3>
            <p className="text-2xl font-semibold text-neutral-900 mb-4">{plan.price}</p>
            <p className="text-neutral-600 leading-relaxed">{plan.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-neutral-500 max-w-2xl mx-auto mb-24">
        Business Systems Audits are paid in advance. Project work is paid in two stages: 50% to begin, 50% before final delivery.
      </p>

    <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
          Popular Packages for SMEs &amp; Trades
        </h2>
        <div className="flex flex-col gap-3 items-start max-w-md mx-auto text-left mb-6">
          <div className="flex items-start gap-3">
            <span className="text-purple-900 font-semibold">✓</span>
            <span className="text-neutral-700">Stop losing jobs because of missed calls</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-900 font-semibold">✓</span>
            <span className="text-neutral-700">Turn website visitors into booked jobs, 24/7</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-900 font-semibold">✓</span>
            <span className="text-neutral-700">Spend less time on admin, more time on site</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-900 font-semibold">✓</span>
            <span className="text-neutral-700">An AI that works like an extra office assistant — without the salary</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-purple-900 font-semibold">✓</span>
            <span className="text-neutral-700">Get up and running in weeks, while others are still deciding</span>
          </div>
        </div>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Fixed starting points for common needs, so you know roughly what to expect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">{pkg.title}</h3>
            <p className="text-2xl font-semibold text-neutral-900 mb-4">{pkg.price}</p>
            <p className="text-neutral-600 leading-relaxed">{pkg.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
          Ongoing Support
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Optional monthly plans to keep your systems running and growing after delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-6">
        {retainers.map((tier, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">{tier.title}</h3>
            <p className="text-2xl font-semibold text-neutral-900 mb-4">{tier.price}</p>
            <p className="text-neutral-600 leading-relaxed">{tier.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-neutral-500 max-w-2xl mx-auto mb-24">
        Ongoing AI and platform subscription costs (e.g. OpenAI, WhatsApp Business API) are billed separately, based on actual usage, and are not included in retainer pricing.
      </p>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
          Website Services
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Building or improving the website that supports everything else.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {websiteServices.map((service, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 border border-neutral-200 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">{service.title}</h3>
            <p className="text-2xl font-semibold text-neutral-900 mb-4">{service.price}</p>
            <p className="text-neutral-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
