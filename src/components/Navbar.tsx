import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" onClick={closeMobileMenu}>
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <div className="relative group">
            <button className="hover:text-neutral-900 transition-colors flex items-center gap-1 py-2">
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70 group-hover:opacity-100 transition-opacity"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-neutral-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2">
                <Link
                  to="/services/business-consultancy"
                  className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium"
                >
                  Business Consultancy
                </Link>

                <Link
                  to="/services/customer-engagement"
                  className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium"
                >
                  Customer Engagement
                </Link>

                <Link
                  to="/services/business-systems"
                  className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium"
                >
                  Business Systems
                </Link>

                <Link
                  to="/services/digital-growth"
                  className="block px-4 py-3 hover:bg-neutral-50 rounded-lg text-neutral-900 transition-colors font-medium"
                >
                  Digital Growth
                </Link>
              </div>
            </div>
          </div>

          <Link to="/industries" className="hover:text-neutral-900 transition-colors">
            Industries
          </Link>

          <Link to="/insights" className="hover:text-neutral-900 transition-colors">
            Insights
          </Link>

          <Link to="/case-studies" className="hover:text-neutral-900 transition-colors">
            Case Studies
          </Link>

          <Link to="/about" className="hover:text-neutral-900 transition-colors">
            About
          </Link>

          <Link
            to="/contact"
            className="bg-neutral-900 text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Book a Review
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-neutral-700 hover:text-neutral-900"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-1 text-neutral-800">
            <p className="text-xs font-semibold tracking-widest uppercase text-purple-900 px-3 py-2">
              Solutions
            </p>

            <Link
              to="/services/business-consultancy"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              Business Consultancy
            </Link>

            <Link
              to="/services/customer-engagement"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              Customer Engagement
            </Link>

            <Link
              to="/services/business-systems"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              Business Systems
            </Link>

            <Link
              to="/services/digital-growth"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              Digital Growth
            </Link>

            <div className="border-t border-neutral-200 my-3" />

            <Link
              to="/industries"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              Industries
            </Link>

            <Link
              to="/insights"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              Insights
            </Link>

            <Link
              to="/case-studies"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              Case Studies
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="px-3 py-3 rounded-lg hover:bg-neutral-50"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="mt-3 bg-neutral-900 text-white px-5 py-3 rounded-full text-center font-medium"
            >
              Book a Review
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
