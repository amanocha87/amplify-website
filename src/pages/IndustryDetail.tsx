import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const industryData: Record<string, any> = {
  'motor-trade': {
    title: "Motor Trade",
    challenges: ["High volume of calls asking about vehicle availability.", "Delayed follow-ups on test drive requests.", "Disconnected lead systems."],
    solutions: ["AI call reception for instant answers.", "Automated lead capture and CRM sync.", "WhatsApp integration for quick responses."],
    workflows: ["When a web lead comes in, it's instantly pushed to the CRM and the sales team receives a notification. An automated text is sent to the customer."],
    benefits: ["Faster response times.", "Higher conversion from lead to test drive.", "Less time wasted on admin."]
  },
  'estate-agencies': {
    title: "Estate Agencies",
    challenges: ["Managing viewing requests out of hours.", "Updating multiple portals and internal systems manually.", "Qualifying buyers takes too much time."],
    solutions: ["Automated viewing scheduling.", "System integrations to update properties instantly.", "AI chatbots to pre-qualify buyers on the website."],
    workflows: ["A potential buyer asks a question on the website. The AI answers basic property questions, qualifies their budget, and books a call with an agent."],
    benefits: ["Capture leads 24/7.", "Save agents hours of manual data entry.", "Better customer experience for vendors and buyers."]
  },
  'trades-home-services': {
    title: "Trades & Home Services",
    challenges: ["Missing calls while on the tools.", "Spending evenings doing quotes and admin.", "Customers frustrated by lack of communication."],
    solutions: ["AI receptionist to capture details.", "Automated quoting workflows.", "Job management system integration."],
    workflows: ["A customer calls while you're busy. The AI receptionist captures their details and the job type, then texts them a link to upload photos for a quote."],
    benefits: ["Never miss a new enquiry.", "Win more work with faster quoting.", "Reclaim your evenings from paperwork."]
  },
  'retail': {
    title: "Retail",
    challenges: ["Managing inventory across multiple platforms.", "Handling customer returns and 'where is my order' queries.", "Connecting online and offline sales."],
    solutions: ["E-commerce and POS integrations.", "Customer support automation.", "Unified dashboards."],
    workflows: ["A customer emails asking for order status. The system automatically checks Shopify and replies with the tracking link."],
    benefits: ["Reduced customer service workload.", "Accurate stock levels.", "Scalable operations."]
  },
  'hospitality': {
    title: "Hospitality",
    challenges: ["Handling booking enquiries during busy service.", "Managing staff rotas and compliance.", "Collecting and responding to reviews."],
    solutions: ["Automated booking and confirmation systems.", "Staff management integrations.", "Review generation workflows."],
    workflows: ["After a guest visits, they receive an automated text asking for feedback. Positive feedback prompts a Google Review link."],
    benefits: ["More focus on the guest experience.", "Higher local rankings through automated reviews.", "Reduced no-shows."]
  },
  'healthcare': {
    title: "Healthcare",
    challenges: ["High volume of appointment booking calls.", "Patient no-shows.", "Secure document handling and compliance."],
    solutions: ["Automated appointment reminders.", "Self-serve booking portals.", "Secure system integrations."],
    workflows: ["A patient books online. They automatically receive a confirmation, a 24-hour text reminder, and a post-appointment care email."],
    benefits: ["Reduced no-shows.", "Less pressure on reception staff.", "Better patient communication."]
  },
  'professional-services': {
    title: "Professional Services",
    challenges: ["Manual client onboarding.", "Chasing documents and signatures.", "Disconnected practice management software."],
    solutions: ["Automated onboarding workflows.", "Document collection automation.", "CRM and billing integrations."],
    workflows: ["A new client signs a proposal. The system automatically creates their file in the CRM, generates an invoice, and sends a welcome email with a document upload link."],
    benefits: ["Smoother client experience.", "Reduced administrative overhead.", "Faster time to value for new clients."]
  },
  'manufacturing': {
    title: "Manufacturing & Distribution",
    challenges: ["Siloed data between sales, production, and shipping.", "Manual order processing.", "Lack of real-time reporting."],
    solutions: ["End-to-end system integration.", "Automated order flows.", "Custom reporting dashboards."],
    workflows: ["A sales order is approved in the CRM. It automatically generates a work order in the production system and updates inventory forecasts."],
    benefits: ["Fewer manual errors.", "Faster order fulfillment.", "Clear visibility across the business."]
  },
  'hair-beauty': {
    title: "Hair & Beauty",
    challenges: ["Interrupting treatments to answer the phone.", "Managing cancellations and no-shows.", "Following up for re-bookings."],
    solutions: ["AI call answering.", "Automated reminders.", "Re-booking campaigns."],
    workflows: ["A client calls to book. The AI handles the call, checks the calendar, and books the slot. If they miss an appointment, the system automatically follows up."],
    benefits: ["Uninterrupted service for clients.", "Maximized calendar utilization.", "Higher client retention."]
  }
};

export default function IndustryDetail() {
  const { id } = useParams();
  
  if (!id || !industryData[id]) {
    return <Navigate to="/industries" replace />;
  }

  const data = industryData[id];

  return (
    <div className="pt-24">
      <section className="py-20 md:py-32 px-6 max-w-[1400px] mx-auto text-center">
        <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-6 block">
          Industry Solutions
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight max-w-4xl mx-auto">
          {data.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          Practical automation and technology solutions to help your business operate more efficiently and deliver better service.
        </p>
      </section>

      <section className="py-24 px-6 max-w-[900px] mx-auto border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12">Typical Challenges</h2>
        <ul className="space-y-4">
          {data.challenges.map((item: string, i: number) => (
            <li key={i} className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-4 flex-shrink-0" />
              <span className="text-lg text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-24 px-6 max-w-[900px] mx-auto border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12">Relevant Amplify Solutions</h2>
        <ul className="space-y-4">
          {data.solutions.map((item: string, i: number) => (
            <li key={i} className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-900 mt-2 mr-4 flex-shrink-0" />
              <span className="text-lg text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-24 px-6 max-w-[900px] mx-auto border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12">Example Workflow</h2>
        <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
          <p className="text-lg text-neutral-700 leading-relaxed">
            {data.workflows[0]}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[900px] mx-auto border-t border-neutral-100 mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12">Expected Business Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.benefits.map((benefit: string, i: number) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
              <p className="font-medium text-neutral-900">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA 
        title={`Ready To Improve Your ${data.title} Business?`}
        primaryCtaText="Book Your Business Review"
        hideSecondaryCta={true}
      />
    </div>
  );
}
