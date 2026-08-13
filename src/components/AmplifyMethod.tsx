import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function AmplifyMethod() {
  return (
    <section className="py-14 md:py-20 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          The Amplify Method™
        </h2>
        <div className="mb-8 w-full max-w-4xl">
          <Logo variant="large" className="w-full h-auto" />
        </div>
        <p className="text-base md:text-xl text-neutral-600 leading-relaxed">
          Technology should support your business — not dictate it. Everything we do follows a practical consultancy process designed to create measurable business improvements.
        </p>
      </div>
      <div className="text-center">
        <Link to="/about" className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 rounded-full font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-colors inline-flex items-center gap-2 text-lg">
          Discover Our Process
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
