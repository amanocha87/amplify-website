import { ReactNode } from 'react';
import FinalCTA from './FinalCTA';
import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionTemplateProps {
  category: string;
  heroTitle: ReactNode;
  heroCopy: ReactNode;
  challengeCopy: ReactNode;
  helpsCopy: ReactNode;
  benefits: { title: string; description: string }[];
  included: string[];
  worksSteps: { title: string; description: string }[];
  forAudiences: string[];
  faqs: { question: string; answer: string }[];
}

export default function SolutionTemplate({
  category,
  heroTitle,
  heroCopy,
  challengeCopy,
  helpsCopy,
  benefits,
  included,
  worksSteps,
  forAudiences,
  faqs
}: SolutionTemplateProps) {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 max-w-[1400px] mx-auto text-center">
        <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-6 block">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight max-w-4xl mx-auto">
          {heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          {heroCopy}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 text-lg">
            Book Your Business Review
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* The Business Challenge */}
      <section className="py-24 px-6 max-w-[900px] mx-auto text-center border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-8">The Business Challenge</h2>
        <div className="prose prose-lg text-neutral-600 mx-auto">
          {challengeCopy}
        </div>
      </section>

      {/* How Amplify Helps */}
      <section className="py-24 px-6 max-w-[900px] mx-auto text-center border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-8">How Amplify Helps</h2>
        <div className="prose prose-lg text-neutral-600 mx-auto">
          {helpsCopy}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">{benefit.title}</h3>
              <p className="text-neutral-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Is Included */}
      <section className="py-24 px-6 max-w-[900px] mx-auto border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">What Is Included</h2>
        <ul className="space-y-4">
          {included.map((item, i) => (
            <li key={i} className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-purple-900 mt-2 mr-4 flex-shrink-0" />
              <span className="text-lg text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {worksSteps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-bold text-neutral-100 mb-4">0{i + 1}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto bg-neutral-900 text-white rounded-3xl mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Who It Is For</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {forAudiences.map((audience, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-200 font-medium">
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-6 max-w-[900px] mx-auto mb-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">{faq.question}</h3>
              <p className="text-neutral-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA 
        title="Ready To Discover Where Your Business Could Improve?"
        hideSecondaryCta={true}
      />
    </div>
  );
}
