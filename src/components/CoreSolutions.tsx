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
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto bg-neutral-50">
      <div className="mb-24 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          How We Can Help
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
          Every business is different. We combine business experience, practical AI and digital systems to solve real business challenges and create measurable results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {coreSolutions.map((solution, index) => (
          <div 
            key={index}
            className="bg-white rounded-3xl p-12 md:p-16 shadow-sm border border-neutral-100 flex flex-col h-full group transition-all duration-300 hover:shadow-md hover:border-neutral-200"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight leading-snug mb-8">
              {solution.title}
            </h3>
            
            <div className="text-neutral-600 text-xl leading-relaxed mb-16 flex-grow font-light">
              <p>{solution.description}</p>
            </div>
            
            <div className="mt-auto pt-8 border-t border-neutral-100">
              <Link 
                to={solution.link}
                className="inline-flex items-center gap-2 text-lg font-medium text-neutral-900 hover:text-purple-700 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
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
