import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import imgCustomer from '../assets/images/premium_car_dealership_1785884612958.jpg';
import imgAI from '../assets/images/premium_furniture_showroom_1785885189959.jpg';
import imgGrowth from '../assets/images/estate_agency_v3_1785885823027.jpg';
import imgProfessional from '../assets/images/busy_restaurant_1785884822125.jpg';
import imgTrades from '../assets/images/professional_electrician_1785884977999.jpg';
import imgSalon from '../assets/images/premium_salon_v2_1785885921299.jpg';

const heroImages = [
  { url: imgCustomer, alt: 'Customer engagement at a car dealership' },
  { url: imgAI, alt: 'Premium retail showroom' },
  { url: imgGrowth, alt: 'Estate agency customer experience' },
  { url: imgProfessional, alt: 'Professional hospitality environment' },
  { url: imgTrades, alt: 'Tradesperson capturing job details on-site' },
  { url: imgSalon, alt: 'Hair and beauty salon client experience' },
];

const benefits = [
  'Business Consultancy',
  'AI & Automation',
  'CRM & Business Systems',
  'Customer Experience',
  'Digital Growth',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setCurrentImageIndex(
          (previous) => (previous + 1) % heroImages.length
        );
      }
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  return (
   <section className="relative overflow-hidden bg-white pt-20 pb-10 md:pt-24 md:pb-14">
      {/* Very subtle brand atmosphere */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-700">
            Business Strategy, Human Expertise, AI Execution — all aligned to one goal: your results.
          </p>

          <h1 className="mb-4 text-5xl font-semibold leading-[1.02] tracking-tight text-neutral-950 sm:text-6xl lg:text-[3.6rem]">
            Helping Businesses Work Smarter and Grow Faster.
          </h1>

          <p className="mb-5 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            Helping ambitious businesses simplify operations, improve customer
            experience and grow through practical consultancy, AI and smarter
            systems.
          </p>

          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-sm font-medium text-neutral-800 md:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {benefit}
              </div>
            ))}
          </div>

          <div className="mb-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-neutral-950 px-7 py-3.5 text-center font-medium text-white transition hover:bg-neutral-800"
            >
              Book Your Free Business Review
            </Link>

           <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-ai-advisor'))}
              className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 font-medium text-neutral-900 transition hover:bg-neutral-50"
            >
              Speak With Our AI Business Advisor
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="inline-flex max-w-xl items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
            <p className="text-sm font-medium leading-relaxed text-neutral-600">
              Based in Leicester. Supporting ambitious businesses across the
              Midlands and throughout the UK.
            </p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-purple-100/60 blur-3xl" />

        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-neutral-200 shadow-2xl shadow-neutral-300/40 lg:aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex].url}
                alt={heroImages[currentImageIndex].alt}
                initial={{ opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1.06 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1.1, ease: 'easeInOut' },
                  scale: { duration: 7, ease: 'linear' },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Slide indicators */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'w-8 bg-white'
                      : 'w-1.5 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
