import Logo from './Logo';

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
    price: "£1,250",
    featured: false
  },
  {
    title: "Multi-Channel AI Agents",
    description: "One consistent AI agent deployed across up to 3 channels of your choice (e.g. phone, WhatsApp, web chat), with enquiry capture, lead qualification and CRM updates handled the same way regardless of channel. Includes 90 days of free support. Delivered in 2-3 weeks.",
    price: "£2,000",
    featured: true
  },
  {
    title: "SME & Trade Growth Package",
    description: "3-5 multi-channel AI automations across sales, operations and customer service. Includes 180 days of free support and staff training for up to 9 team members. Optional monthly retainer available afterward.",
    price: "£5,000",
    featured: false
  }
];

const retainers = [
  {
    title: "Maintain",
    price: "From £150/month",
    bullets: [
      "Uptime monitoring & error alerts",
      "Up to 2 hours of tweaks/fixes per month",
      "Email support, 48-hour response time"
    ]
  },
  {
    title: "Grow",
    price: "From £350/month",
    bullets: [
      "Everything in Maintain",
      "Up to 5 hours of tweaks/fixes per month",
      "Monthly reports, with a deeper quarterly review",
      "New automation or improvement added as needed, based on quarterly review",
      "Priority support, 24-hour response time"
    ]
  },
  {
    title: "Partner",
    price: "From £750/month",
    bullets: [
      "Everything in Grow",
      "Up to 10 hours of work per month",
      "Training for new staff or new automations",
      "Dedicated monthly strategy call",
      "Same-day priority support",
      "Ongoing roadmap planning for continuous improvement"
    ]
  }
];
const websiteServices = [
  {
    title: "Website Refresh",
    description: "Updating, fixing, or improving your existing website — new copy, fixed broken elements, added pages.",
    price: "£500-£1,000"
  },
  {
    title: "Essential Website",
    description: "An up to 5-page brochure-style website, built to represent your business professionally online.",
    price: "£1,000-£2,000"
  },
  {
    title: "Advanced Website",
    description: "A fully coded website with automation, booking systems, or other custom functionality built in. Optional payment integration (e.g. Stripe) available.",
    price: "£2,000-£3,500"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto bg-neutral-50 border-t border-neutral-100">
      <div className="relative overflow-hidden mb-20 max-w-3xl mx-auto text-center">
        <div className="absolute -top-10 -right-10 w-64 h-64 opacity-[0.06] pointer-events-none hidden md:block">
          <Logo variant="small" className="w-full h-full" />
        </div>
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
          <div
            key={index}
            className={`relative rounded-3xl p-8 flex flex-col h-full ${
              pkg.featured
                ? 'bg-neutral-900 border-2 border-purple-700'
                : 'bg-white border border-neutral-200'
            }`}
          >
            {pkg.featured && (
              <span className="absolute -top-3 left-8 bg-purple-700 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className={`text-xl font-semibold tracking-tight mb-2 ${pkg.featured ? 'text-white' : 'text-neutral-900'}`}>
              {pkg.title}
            </h3>
            <p className={`text-2xl font-semibold mb-4 ${pkg.featured ? 'text-white' : 'text-neutral-900'}`}>
              {pkg.price}
            </p>
            <p className={`leading-relaxed ${pkg.featured ? 'text-neutral-300' : 'text-neutral-600'}`}>
              {pkg.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-neutral-900 rounded-[2rem] p-10 md:p-16 mb-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Ongoing Support
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Optional monthly plans to keep your systems running and growing after delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-6">
         {retainers.map((tier, index) => (
            <div key={index} className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">{tier.title}</h3>
              <p className="text-2xl font-semibold text-white mb-4">{tier.price}</p>
              <ul className="space-y-2">
                {tier.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-400 leading-relaxed text-sm">
                    <span className="text-purple-400 font-semibold mt-0.5">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 max-w-2xl mx-auto">
          Ongoing AI and platform subscription costs (e.g. OpenAI, WhatsApp Business API) are billed separately, based on actual usage, and are not included in retainer pricing.
        </p>
      </div>

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
