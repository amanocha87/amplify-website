import { motion } from 'motion/react';
import founderImage from '../assets/images/aman-founder.jpg';

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
            Meet Your Consultant
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
            Nearly 20 Years of
Business Experience.
          </h2>
          
          <div className="prose prose-lg text-neutral-600 mb-12">
              <p className="mb-4">
I'm Aman, founder of Amplify. After nearly 20 years working across Marketing, Retail, Motor Trade, Commercial Sales and Telesales, I've learnt one thing: technology only creates value when it solves real business problems.
</p>

<p className="mb-4">
Today I help ambitious businesses improve customer experience, streamline operations and implement practical AI and automation that saves time, reduces costs and supports sustainable growth.
</p>

<p className="mb-4">
Amplify is a boutique consultancy. Every client works directly with me while also benefiting from a trusted network of specialist partners covering web development, branding, marketing, software development and AI implementation whenever additional expertise is required.
</p>

<p>
My goal isn't to sell technology. It's to help businesses make better decisions, build better systems and achieve measurable results.
</p>
          </div>
        </div>
      </div>
    </section>
  );
}
