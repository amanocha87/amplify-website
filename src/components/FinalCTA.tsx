import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  hideSecondaryCta?: boolean;
}

export default function FinalCTA({
  title = "Let's Start With A Conversation.",
  subtitle = "Every business is different. That's why every conversation starts with understanding your business—not selling software. Whether you're exploring automation, AI, better systems or new opportunities for growth, we'd love to learn more about your business and where you want to go.",
  primaryCtaText = "Book Your Free Business Review",
  hideSecondaryCta = false
}: FinalCTAProps) {
  return (
    <section className="py-10 md:py-20 px-6 max-w-[1400px] mx-auto">
      <div className="bg-neutral-900 rounded-3xl p-6 md:p-16 lg:p-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4 md:mb-8 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-sm md:text-xl text-neutral-400 leading-relaxed mb-6 md:mb-12 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-10">
            <Link to="/contact" className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2 text-base md:text-lg">
              {primaryCtaText}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            {!hideSecondaryCta && (
              <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border border-neutral-700 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-2 text-base md:text-lg">
                <Bot className="w-4 h-4 md:w-5 md:h-5" />
                Chat with Sam (AI Advisor)
              </button>
            )}
          </div>
          <p className="text-xs md:text-sm font-medium tracking-wide uppercase text-neutral-500">
            No pressure. No jargon. Just practical business advice.
          </p>
        </div>
      </div>
    </section>
  );
}
