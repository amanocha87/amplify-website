import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-100 pt-24 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <Logo className="h-16 w-auto" />
            </Link>
            <p className="text-neutral-800 font-medium mb-4 max-w-md text-lg">
              Helping Businesses Grow Through Better Decisions, Better Systems & Practical AI.
            </p>
            <p className="text-neutral-500 max-w-md leading-relaxed text-base">
              We help ambitious businesses simplify operations, improve customer experience and grow through practical AI, automation and digital systems.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold mb-6 text-neutral-900 tracking-wider text-sm uppercase">Solutions</h4>
            <ul className="space-y-4 text-neutral-600 text-sm">
              <li><Link to="/services/business-consultancy" className="hover:text-purple-900 transition-colors">Business Consultancy</Link></li>
              <li><Link to="/services/customer-engagement" className="hover:text-purple-900 transition-colors">Customer Engagement</Link></li>
              <li><Link to="/services/business-systems" className="hover:text-purple-900 transition-colors">Business Systems</Link></li>
              <li><Link to="/services/digital-growth" className="hover:text-purple-900 transition-colors">Digital Growth</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold mb-6 text-neutral-900 tracking-wider text-sm uppercase">Industries</h4>
            <ul className="space-y-4 text-neutral-600 text-sm">
              <li><Link to="/industries/motor-trade" className="hover:text-purple-900 transition-colors">Motor Trade</Link></li>
              <li><Link to="/industries/estate-agencies" className="hover:text-purple-900 transition-colors">Estate Agencies</Link></li>
              <li><Link to="/industries/trades-home-services" className="hover:text-purple-900 transition-colors">Trades & Home Services</Link></li>
              <li><Link to="/industries/retail" className="hover:text-purple-900 transition-colors">Retail</Link></li>
              <li><Link to="/industries/hospitality" className="hover:text-purple-900 transition-colors">Hospitality</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-purple-900 transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/professional-services" className="hover:text-purple-900 transition-colors">Professional Services</Link></li>
              <li><Link to="/industries/manufacturing" className="hover:text-purple-900 transition-colors">Manufacturing & Distribution</Link></li>
              <li><Link to="/industries/hair-beauty" className="hover:text-purple-900 transition-colors">Hair & Beauty</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold mb-6 text-neutral-900 tracking-wider text-sm uppercase">Company</h4>
            <ul className="space-y-4 text-neutral-600 text-sm">
              <li><Link to="/about" className="hover:text-purple-900 transition-colors">About</Link></li>
              <li><Link to="/insights" className="hover:text-purple-900 transition-colors">Insights</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-purple-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-purple-900 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms" className="hover:text-purple-900 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/accessibility" className="hover:text-purple-900 transition-colors">Accessibility</Link></li>
              <li><Link to="/contact" className="hover:text-purple-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-neutral-100 mb-12">
            <h4 className="font-semibold mb-6 text-neutral-900 tracking-wider text-sm uppercase">Contact</h4>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600">
                <Link to="/contact" className="hover:text-purple-900 transition-colors font-semibold text-neutral-900">Book Your Free Business Review</Link>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-900 transition-colors">LinkedIn</a>
                <a href="mailto:hello@amplify.co.uk" className="hover:text-purple-900 transition-colors">Email</a>
                <a href="tel:000000000" className="hover:text-purple-900 transition-colors">Phone</a>
            </div>
        </div>

        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
          <div>
            &copy; 2026 Amplify. All rights reserved.
          </div>
          <div>
            Based in Leicestershire • Supporting businesses across the Midlands • Delivering solutions nationwide.
          </div>
        </div>
      </div>
    </footer>
  );
}
