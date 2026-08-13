import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-purple-100 pt-14 pb-8 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <Logo className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white font-medium mb-3 max-w-md text-base">
              Helping Businesses Grow Through Better Decisions, Better Systems & Practical AI.
            </p>
            <p className="text-neutral-400 max-w-md leading-relaxed text-sm">
              We help ambitious businesses simplify operations, improve customer experience and grow through practical AI, automation and digital systems.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-white tracking-wider text-xs uppercase">Solutions</h4>
            <ul className="space-y-2.5 text-neutral-400 text-sm">
              <li><Link to="/services/business-consultancy" className="hover:text-purple-300 transition-colors">Business Consultancy</Link></li>
              <li><Link to="/services/customer-engagement" className="hover:text-purple-300 transition-colors">Customer Engagement</Link></li>
              <li><Link to="/services/business-systems" className="hover:text-purple-300 transition-colors">Business Systems</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-purple-300 transition-colors">Digital Growth</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-white tracking-wider text-xs uppercase">Industries</h4>
            <ul className="space-y-2.5 text-neutral-400 text-sm">
              <li><Link to="/industries/motor-trade" className="hover:text-purple-300 transition-colors">Motor Trade</Link></li>
              <li><Link to="/industries/estate-agencies" className="hover:text-purple-300 transition-colors">Estate Agencies</Link></li>
              <li><Link to="/industries/trades-home-services" className="hover:text-purple-300 transition-colors">Trades & Home Services</Link></li>
              <li><Link to="/industries" className="hover:text-purple-300 transition-colors font-medium">View all industries →</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-white tracking-wider text-xs uppercase">Company</h4>
            <ul className="space-y-2.5 text-neutral-400 text-sm">
              <li><Link to="/about" className="hover:text-purple-300 transition-colors">About</Link></li>
              <li><Link to="/insights" className="hover:text-purple-300 transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-purple-300 transition-colors">Contact</Link></li>
              <li><Link to="/referral-rewards" className="hover:text-purple-300 transition-colors">Referral Rewards</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800 mb-6">
          <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-400">
            <Link to="/contact" className="hover:text-purple-300 transition-colors font-semibold text-white">Book Your Free Business Review</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">LinkedIn</a>
            <a href="mailto:contact@amplifyaiagents.com" className="hover:text-purple-300 transition-colors">Email</a>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-3 text-neutral-500 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; 2026 Amplify. All rights reserved.</span>
            <Link to="/privacy-policy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-purple-300 transition-colors">Cookie Policy</Link>
            <Link to="/terms" className="hover:text-purple-300 transition-colors">Terms</Link>
            <Link to="/accessibility" className="hover:text-purple-300 transition-colors">Accessibility</Link>
          </div>
          <div className="text-center md:text-right">
            Based in Leicestershire • Supporting the Midlands • Nationwide delivery.
          </div>
        </div>
      </div>
    </footer>
  );
}
