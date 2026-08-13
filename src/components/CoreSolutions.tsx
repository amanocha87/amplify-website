import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const coreSolutions = [
  {
    title: "Business Consultancy",
    description: "Helping you make better business decisions before investing in technology.",
    link: "/services/business-consultancy"
  },
  {
    title: "Customer Engagement",
    description: "Capture every enquiry and deliver exceptional customer experiences across voice, chat and messaging.",
    link: "/services/customer-engagement"
  },
  {
    title: "Business Systems",
    description: "Simplify operations by connecting your systems, automating repetitive work and improving efficiency.",
    link: "/services/business-systems"
  },
  {
    title: "Digital Growth",
    description: "Build a stronger online presence that attracts, converts and retains more customers.",
    link: "/services/digital-growth"
  }
];

export default function CoreSolutions() {
  return (
    <section className="py-14 md:py-20 px-6 max-w-[1400px] mx-auto bg-neutral-50">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4 leading-tight">
          How We Can Help
        </h2>
        <p className="text-base md:text-xl text-neutral-600 leading-relaxed">
          Every business is different. We combine business experience, practical AI and digital systems to solve real business challenges.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {coreSolutions.map((solution, index) => (
          <Link
            key={index}
            to={solution.link}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 flex items-center justify-between group transition-all duration-300 hover:shadow-md hover:border-neutral-200"
          >
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-neutral-900 tracking-tight mb-1">
                {solution.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 shrink-0 ml-4 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-purple-700" />
          </Link>
        ))}
      </div>
      <div className="text-center md:text-left">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-lg font-medium text-neutral-900 hover:text-purple-700 transition-colors group"
        >
          View All Solutions
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
