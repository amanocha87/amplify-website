import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Home, Briefcase, ShoppingBag, Coffee, HeartPulse, Scale, Truck, Scissors } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function Industries() {
  const industries = [
    { title: "Motor Trade", icon: <Wrench className="w-8 h-8 text-purple-900" />, link: "/industries/motor-trade", desc: "Automate enquiries and follow-ups for dealerships and garages." },
    { title: "Estate Agencies", icon: <Home className="w-8 h-8 text-purple-900" />, link: "/industries/estate-agencies", desc: "Capture viewing requests and streamline the sales process." },
    { title: "Trades & Home Services", icon: <Wrench className="w-8 h-8 text-purple-900" />, link: "/industries/trades-home-services", desc: "Manage call-outs, quotes, and customer communication." },
    { title: "Retail", icon: <ShoppingBag className="w-8 h-8 text-purple-900" />, link: "/industries/retail", desc: "Connect e-commerce with inventory and customer support." },
    { title: "Hospitality", icon: <Coffee className="w-8 h-8 text-purple-900" />, link: "/industries/hospitality", desc: "Streamline bookings, feedback, and daily administration." },
    { title: "Healthcare", icon: <HeartPulse className="w-8 h-8 text-purple-900" />, link: "/industries/healthcare", desc: "Manage patient appointments and secure communications." },
    { title: "Professional Services", icon: <Scale className="w-8 h-8 text-purple-900" />, link: "/industries/professional-services", desc: "Automate onboarding, document collection, and compliance." },
    { title: "Manufacturing & Distribution", icon: <Truck className="w-8 h-8 text-purple-900" />, link: "/industries/manufacturing", desc: "Integrate supply chain data and improve operational flow." },
    { title: "Hair & Beauty", icon: <Scissors className="w-8 h-8 text-purple-900" />, link: "/industries/hair-beauty", desc: "Handle online bookings and automated appointment reminders." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="px-6 max-w-[1400px] mx-auto">
        <div className="max-w-4xl mb-20">
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-6 block">
            Industries We Serve
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
            Tailored Solutions For Your Sector.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light max-w-3xl">
            We understand that every industry faces unique challenges. Explore how our practical technology solutions can improve operations in your specific sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8">
                {ind.icon}
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">{ind.title}</h2>
              <p className="text-neutral-600 mb-8 flex-grow">{ind.desc}</p>
              <Link 
                to={ind.link}
                className="inline-flex items-center text-neutral-900 font-medium hover:text-purple-900 transition-colors group"
              >
                View Industry Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <FinalCTA 
        title="Don't See Your Industry?"
        subtitle="We work with ambitious businesses across many sectors. Contact us to discuss your specific requirements."
        primaryCtaText="Book Your Business Review"
        hideSecondaryCta={true}
      />
    </div>
  );
}
