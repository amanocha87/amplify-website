import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import BusinessConsultancy from './pages/BusinessConsultancy';
import CustomerEngagement from './pages/CustomerEngagement';
import BusinessSystems from './pages/BusinessSystems';
import DigitalGrowth from './pages/DigitalGrowth';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import Insights from './pages/Insights';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsConditions from './pages/TermsConditions';
import Accessibility from './pages/Accessibility';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-neutral-200 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/business-consultancy" element={<BusinessConsultancy />} />
            <Route path="/services/customer-engagement" element={<CustomerEngagement />} />
            <Route path="/services/business-systems" element={<BusinessSystems />} />
            <Route path="/services/digital-growth" element={<DigitalGrowth />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:id" element={<IndustryDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
