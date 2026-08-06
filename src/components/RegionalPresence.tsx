import { MapPin } from 'lucide-react';

export default function RegionalPresence() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-neutral-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <MapPin className="w-8 h-8 text-purple-900" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
          Midlands Based. UK Focused.
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12">
          Based in Leicester, we work with businesses throughout the Midlands including Birmingham, Coventry, Nottingham and Derby, while supporting clients across the UK through practical consultancy, automation and AI.
        </p>
      </div>
    </section>
  );
}
