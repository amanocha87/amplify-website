import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PricingCTA() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto text-center border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/pricing" 
          className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
        >
          Explore Pricing & Our Value Promise
          <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
