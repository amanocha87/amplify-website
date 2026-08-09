import { Link } from 'react-router-dom';
export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto bg-neutral-900 rounded-[2rem] my-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
          Client Testimonials Coming Soon
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
    Client testimonials are on their way. In the meantime, take a look at our <Link to="/case-studies" className="text-white underline hover:text-neutral-300 transition-colors">case studies</Link> for real project details and outcomes.
        </p>
      </div>
    </section>
  );
}
