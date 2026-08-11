import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    industry: "Motor Trade",
    challenge: "A premium dealership was losing evening and weekend vehicle enquiries due to missed calls and delayed email responses.",
    solution: "Implemented an AI-driven communication system to answer calls and capture customer details 24/7.",
    result: "Increased captured leads by 34% and reduced administrative workload for the showroom team."
  },
  {
    industry: "Estate Agency",
    challenge: "Negotiators were spending excessive time answering routine property queries rather than attending valuations.",
    solution: "Deployed an automated enquiry handling system connected directly to their property CRM.",
    result: "Saved 15 hours per week per negotiator, allowing them to focus entirely on winning new instructions."
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto bg-white border-t border-neutral-100">
      <div className="mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
         TEST 123 Real Business Improvements
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
          We focus on measurable outcomes. Explore how our consultancy and technology solutions create genuine impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className="bg-neutral-50 rounded-3xl p-10 md:p-12 border border-neutral-100 flex flex-col h-full hover:border-neutral-200 transition-colors"
          >
            <div className="mb-8">
              <span className="text-sm font-semibold tracking-widest uppercase text-purple-900">
                {study.industry}
              </span>
            </div>
            
            <div className="space-y-6 flex-grow">
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-neutral-500 uppercase mb-2">Challenge</h4>
                <p className="text-neutral-900 font-medium leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-neutral-500 uppercase mb-2">Solution</h4>
                <p className="text-neutral-600 leading-relaxed">{study.solution}</p>
              </div>
              <div className="pt-6 border-t border-neutral-200 mt-auto">
                <h4 className="text-sm font-semibold tracking-wide text-purple-900 uppercase mb-2">Result</h4>
                <p className="text-neutral-900 font-semibold text-lg leading-relaxed">{study.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
