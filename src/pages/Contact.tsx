import { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://hook.eu1.make.com/ywzdrk2igsrci0f3gnivaiegrmwt915g';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_type: '',
    automate_target: '',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('business_type', formData.business_type);
      body.append('automate_target', formData.automate_target);
      body.append('message', formData.message);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: body.toString()
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', business_type: '', automate_target: '', message: '', consent: false });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-sm font-semibold tracking-widest uppercase text-purple-900 mb-6 block">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
          Book Your Free Business Review.
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Whether you're exploring automation, AI, better systems or new opportunities for growth, we'd love to learn more about your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">Contact Details</h2>
            <div className="space-y-6 text-neutral-600 text-lg">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Email</p>
                  <a href="mailto:contact@amplifyaiagents.com" className="hover:text-purple-700 transition-colors">contact@amplifyaiagents.com</a>
                </div>
              </div>
            <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-neutral-900 mb-1">Phone</p>
                <a href="tel:07343081073" className="hover:text-purple-700 transition-colors">07343 081073</a>
            </div>
            </div>
               <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Service Area</p>
                  <p className="mb-2">
                    Leicester, Loughborough, Hinckley, Market Harborough, Melton Mowbray, Birmingham, Coventry, Nottingham, Derby, Northampton, Warwick, Peterborough and Rugby.
                  </p>
                  <p className="text-sm">
                    <em>Also supporting businesses across the UK remotely.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-neutral-200">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">Business Hours</h2>
            <div className="space-y-2 text-neutral-600 text-lg">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium text-neutral-900">9:00 AM - 5:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-neutral-900">9:30 AM - 1:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-neutral-900">Closed</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-100 mt-2">
                <span>AI Business Advisor</span>
                <span className="font-medium text-purple-900">24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">Request A Callback</h2>

          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-12">
              <CheckCircle className="w-12 h-12 text-purple-900 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thanks, message sent</h3>
              <p className="text-neutral-600">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="business_type" className="block text-sm font-medium text-neutral-700 mb-2">Business Type *</label>
                <select
                  id="business_type"
                  required
                  value={formData.business_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow bg-white"
                >
                  <option value="" disabled>Select your business type</option>
                  <option value="Small Business">Small Business</option>
                  <option value="Sole Trader">Sole Trader</option>
                  <option value="Local Business">Local Business</option>
                  <option value="Individual">Individual</option>
                </select>
              </div>

              <div>
                <label htmlFor="automate_target" className="block text-sm font-medium text-neutral-700 mb-2">How can Amplify help? *</label>
                <select
                  id="automate_target"
                  required
                  value={formData.automate_target}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow bg-white"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Business Consultancy">Business Consultancy</option>
                  <option value="AI Business Automation">AI Business Automation</option>
                  <option value="Customer Service">Customer Service</option>
                  <option value="Sales & Marketing">Sales & Marketing</option>
                  <option value="Admin & Operations">Admin & Operations</option>
                  <option value="Website Refresh">Website Refresh</option>
                  <option value="New Website Build">New Website Build</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Tell us a bit about what you need *</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow resize-none"
                  placeholder="e.g. I need help streamlining how we handle customer enquiries, or I'm looking to refresh our website..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-purple-900 border-gray-300 rounded focus:ring-purple-900"
                />
                <label htmlFor="consent" className="text-sm text-neutral-600">
                  I consent to having this website store my submitted information so they can respond to my inquiry. *
                </label>
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong sending your message. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors text-lg disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
