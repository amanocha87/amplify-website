import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Logo className="h-12 w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <div className="relative group">
            <button className="hover:text-neutral-900 transition-colors flex items-center gap-1 py-2">
              Solutions
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-neutral-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2">
                <Link to="/services/business-consultancy" className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium">
                  Business Consultancy
                </Link>
                <Link to="/services/customer-engagement" className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium">
                  Customer Engagement
                </Link>
                <Link to="/services/business-systems" className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium">
                  Business Systems
                </Link>
                <Link to="/services/digital-growth" className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium">
                  Digital Growth
                </Link>
              </div>
            </div>
          </div>
          <Link to="/industries" className="hover:text-neutral-900 transition-colors">Industries</Link>
          <Link to="/insights" className="hover:text-neutral-900 transition-colors">Insights</Link>
          <Link to="/case-studies" className="hover:text-neutral-900 transition-colors">
  Case Studies
</Link>
          <Link to="/about" className="hover:text-neutral-900 transition-colors">About</Link>
          <Link to="/contact" className="bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
            Book a Review
          </Link>
        </div>
        <button className="md:hidden text-neutral-600 hover:text-neutral-900">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
