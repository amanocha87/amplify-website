import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import premiumCarDealership from '../assets/images/premium_car_dealership_1785884612958.jpg';
import estateAgency from '../assets/images/estate_agency_v3_1785885823027.jpg';
import premiumShowroom from '../assets/images/premium_furniture_showroom_1785885189959.jpg';
import busyRestaurant from '../assets/images/busy_restaurant_1785884822125.jpg';
import professionalTradesperson from '../assets/images/professional_electrician_1785884977999.jpg';
import premiumSalon from '../assets/images/premium_salon_v2_1785885921299.jpg';

const outcomes = [
  {
    category: "Motor Trade",
    headline: "Never Miss Another Enquiry",
    copy: "An AI receptionist can answer calls, capture customer details and book appointments while your showroom team welcomes visitors, demonstrates vehicles and focuses on converting enquiries into sales.",
    image: premiumCarDealership,
    link: "/industries/motor-trade"
  },
  {
    category: "Estate Agencies",
    headline: "Every Opportunity Captured",
    copy: "Automated enquiry handling, appointment booking and CRM updates can reduce administration while your negotiators focus on valuations, viewings and winning instructions.",
    image: estateAgency,
    link: "/industries/estate-agencies"
  },
  {
    category: "Trades & Field Services",
    headline: "Stay On The Job",
    copy: "Calls, job details and quotation requests can be captured while you continue working, helping you respond faster without interrupting every appointment.",
    image: professionalTradesperson,
    link: "/industries/trades"
  },
  {
    category: "Restaurants & Hospitality",
    headline: "Focus On Your Guests",
    copy: "Bookings and routine customer questions can be handled while your team concentrates on delivering excellent food, service and memorable experiences.",
    image: busyRestaurant,
    link: "/industries/hospitality"
  },
  {
    category: "Retail & Showrooms",
    headline: "Give Every Customer Your Attention",
    copy: "AI and automation can respond to routine online and telephone enquiries while your sales team provides personal advice and creates a stronger buying experience.",
    image: premiumShowroom,
    link: "/industries/retail"
  },
  {
    category: "Hair, Beauty & Wellness",
    headline: "Focus On Your Clients",
    copy: "Automated booking, confirmations and common-question handling can reduce interruptions while your team gives every client the attention they expect.",
    image: premiumSalon,
    link: "/industries/hair-beauty-wellness"
  }
];

export default function BusinessesWeHelpThrive() {
  return (
    <section className="py-20 md:py-24 px-6 max-w-[1400px] mx-auto">
      <div className="mb-20 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          Businesses We Help Thrive
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
          Every business is different, but the goal is always the same—better systems, happier customers and sustainable growth. From motor trade and estate agencies to trades, hospitality, retail and professional services, Amplify delivers practical business improvements that help companies work smarter and grow faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {outcomes.map((outcome, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col group"
          >
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-8 relative shadow-sm">
              <img 
                src={outcome.image} 
                alt={outcome.headline} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            
            <div className="flex flex-col flex-grow">
              <span className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4 block">
                {outcome.category}
              </span>
              <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight leading-snug mb-4">
                {outcome.headline}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-8 flex-grow text-base">
                {outcome.copy}
              </p>
              
              <div>
               <Link
  to={outcome.link}
  className="inline-flex items-center gap-2 text-neutral-900 font-medium border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
>
  Explore the Opportunity
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
