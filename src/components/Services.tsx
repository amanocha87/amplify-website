import { motion } from 'motion/react';

const capabilities = [
  {
    title: "Escaping the admin trap.",
    description: "We eliminate the paper trails, double data entry, and late-night spreadsheets. By refining and automating your core processes, we give you your evenings back and ensure your team operates flawlessly without constant supervision.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Technology that works for you.",
    description: "We cut through the noise and deploy reliable systems tailored to your specific sector. Whether that's automated client communication for an estate agency or smart scheduling for a growing trades business, we make it seamless.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "A digital storefront that commands respect.",
    description: "Your website should be your most effective salesperson. We design high-converting, authoritative websites that reflect the true quality of your service, establishing instant trust and attracting the right kind of client.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <section id="expertise" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4">How We Help</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight max-w-2xl">
            Practical solutions for established businesses.
          </h3>
        </div>

        <div className="flex flex-col gap-24">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 relative">
                  <img src={cap.image} alt={cap.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-neutral-400 font-mono text-sm mb-4 block">0{index + 1}</span>
                <h4 className="text-3xl font-semibold text-neutral-900 mb-6">{cap.title}</h4>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">{cap.description}</p>
                <button className="text-neutral-900 font-medium border-b border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                  Learn more
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
