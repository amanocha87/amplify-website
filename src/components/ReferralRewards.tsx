import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReferralRewards() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
      <div className="max-w-4xl mx-auto bg-neutral-50 rounded-[2rem] p-10 md:p-16 text-center border border-neutral-200">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Gift className="w-8 h-8 text-purple-900" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
          Amplify Referral Rewards
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl mx-auto">
          Know a business that could benefit from better systems, AI or automation? Introduce us, and if we work together, we'll thank you with a reward.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 text-purple-900 font-semibold hover:text-purple-700 transition-colors text-lg"
        >
          Learn more about our referral program
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
