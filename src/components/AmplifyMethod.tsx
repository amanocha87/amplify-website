import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const stages = [
  {
    label: "ACCESS",
    heading: "Understand your business first.",
    copy: "Identify opportunities, bottlenecks and priorities before recommending technology."
  },
  {
    label: "ADAPT",
    heading: "Every business is different.",
    copy: "Design practical systems, AI and automation around your existing people, processes and customers."
  },
  {
    label: "ACHIEVE",
    heading: "Deliver measurable improvements",
    copy: "Through better systems, improved customer experience, increased efficiency and sustainable business growth."
  }
];

export default function AmplifyMethod() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto border-t border-neutral-100">
      <div className="mb-20 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-10 leading-tight">
          The Amplify Method™
        </h2>
        <div className="mb-16 w-full max-w-4xl">
          <Logo variant="large" className="w-full h-auto" />
        </div>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium mb-4 max-w-3xl">
          Technology should support your business—not dictate it.
        </p>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
          Everything we do follows a practical consultancy process designed to create measurable business improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-5xl">
        {stages.map((stage, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-4 block">
                {stage.label}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight leading-snug mb-4">
                {stage.heading}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-base">
                {stage.copy}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 rounded-full font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-colors inline-flex items-center gap-2 text-lg">
          Discover Our Process
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
