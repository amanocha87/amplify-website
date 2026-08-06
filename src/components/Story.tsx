import { motion } from 'motion/react';
import founderImage from '../assets/images/founder_portrait_1785961270204.jpg';

export default function Story() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100 relative shadow-sm">
            <img 
              src={founderImage} 
              alt="Portrait of Amplify's founder" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
            Built From Experience.<br />Driven By Results.
          </h2>
          
          <div className="prose prose-lg text-neutral-600 mb-12">
            <p className="mb-4">
              Amplify was created from real business experience, not simply a passion for new technology.
            </p>
            <p className="mb-4">
              We understand the daily challenges of running a business. That's why we focus on helping you improve systems, enhance customer experience, and build a foundation for sustainable growth <em>before</em> recommending AI or automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
