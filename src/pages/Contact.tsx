import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl mb-12 max-w-3xl mx-auto">
        <p className="text-purple-900 font-semibold text-sm">Note: Company contact details to be confirmed before publication.</p>
      </div>

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
                  <a href="mailto:hello@amplify.co.uk" className="hover:text-purple-700 transition-colors">hello@amplify.co.uk</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Phone</p>
                  <a href="tel:000000000" className="hover:text-purple-700 transition-colors">[Phone to be confirmed]</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-purple-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-neutral-900 mb-1">Service Area</p>
                  <p className="mb-2">
                    Leicester, Loughborough, Hinckley, Market Harborough, Melton Mowbray, Birmingham, Coventry, Nottingham, Derby and Northampton.
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
                <span>Saturday - Sunday</span>
                <span className="font-medium text-neutral-900">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-200 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">Request A Callback</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">Company</label>
              <input 
                type="text" 
                id="company" 
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow"
                placeholder="Company name"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-shadow resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>
            
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="consent" 
                className="mt-1 w-4 h-4 text-purple-900 border-gray-300 rounded focus:ring-purple-900" 
              />
              <label htmlFor="consent" className="text-sm text-neutral-600">
                I consent to having this website store my submitted information so they can respond to my inquiry.
              </label>
            </div>

            <button 
              type="submit"
              className="w-full px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors text-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
