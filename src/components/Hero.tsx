import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Bot, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';

import imgConsultancy from '../assets/images/business_strategy_collaboration_1785964311144.jpg';
import imgTeam from '../assets/images/human_centred_collaboration_1785961258436.jpg';
import imgCustomer from '../assets/images/premium_car_dealership_1785884612958.jpg';
import imgAI from '../assets/images/premium_furniture_showroom_1785885189959.jpg';
import imgGrowth from '../assets/images/estate_agency_v3_1785885823027.jpg';
import imgProfessional from '../assets/images/busy_restaurant_1785884822125.jpg';

const heroImages = [
  { url: imgConsultancy, alt: "Business consultancy session" },
  { url: imgTeam, alt: "Team collaboration in a modern office" },
  { url: imgCustomer, alt: "Customer engagement at a premium dealership" },
  { url: imgAI, alt: "Premium showroom showcasing modern technology" },
  { url: imgGrowth, alt: "Business growth and expansion" },
  { url: imgProfessional, alt: "Professional services in a busy environment" }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let interval: ReturnType<typeof setInterval>;

    const startInterval = () => {
      interval = setInterval(() => {
        if (!document.hidden) {
          setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }
      }, 8000);
    };

    startInterval();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        startInterval();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-16 px-6 lg:pt-40 overflow-hidden bg-white flex flex-col items-center">
      {/* Subtle background ripple/wave effect */}
      <div className="absolute top-0 left-0 right-0 h-[80vh] pointer-events-none flex items-center justify-center opacity-5 overflow-hidden">
        <div className="w-[800px] h-[800px] border-[1px] border-purple-900 rounded-full absolute mix-blend-multiply filter blur-sm"></div>
        <div className="w-[1200px] h-[1200px] border-[1px] border-purple-900 rounded-full absolute mix-blend-multiply filter blur-md"></div>
        <div className="w-[1600px] h-[1600px] border-[1px] border-neutral-900 rounded-full absolute mix-blend-multiply filter blur-lg"></div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
        <div className="mb-8 w-full max-w-4xl mx-auto px-4 h-[330px] md:h-[390px] overflow-hidden">
  <Logo
    variant="large"
    className="w-full h-auto object-cover object-top"
  />
</div>

          <div className="inline-block mb-6 px-4 py-1.5 bg-neutral-100 rounded-full border border-neutral-200">
            <p className="text-sm font-medium tracking-wide text-neutral-600">
              Based in Leicester. Supporting ambitious businesses across the Midlands and throughout the UK.
            </p>
          </div>
          
          <h1 className="text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.05] mb-6">
            Helping Businesses Work Smarter and Grow Faster.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 font-medium tracking-tight mb-10 max-w-3xl mx-auto leading-relaxed">
            Practical business consultancy, AI and automation that simplify operations, improve customer experience and support sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="px-8 py-3.5 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors w-full sm:w-auto text-center">
              Book Your Free Business Review
            </Link>
            <Link to="/contact" className="px-8 py-3.5 bg-white text-neutral-900 border border-neutral-200 rounded-full font-medium hover:bg-neutral-50 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2">
              Speak With Our AI Consultant
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-4xl mx-auto pt-8 border-t border-neutral-100 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-700">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-neutral-800">Business Consultancy</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-700">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-neutral-800">Practical AI & Automation</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-700">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-neutral-800">Customer Experience & Growth</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-neutral-200 shadow-2xl shadow-neutral-200/50"
        >
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex].url}
              alt={heroImages[currentImageIndex].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
