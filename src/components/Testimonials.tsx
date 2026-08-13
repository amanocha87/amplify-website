import { Link } from 'react-router-dom';

export default function Testimonials() {
  return (
    <section className="py-6 px-6 max-w-[1400px] mx-auto text-center">
      <p className="text-base md:text-lg text-neutral-600">
        We value genuine feedback from the businesses we work with.{' '}
        <Link to="/case-studies" className="text-purple-900 font-medium underline hover:text-purple-700 transition-colors">
          See real results in our case studies
        </Link>
      </p>
    </section>
  );
}
