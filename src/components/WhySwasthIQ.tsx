import React from 'react';
import { PenNib, Sparkle, TrendUp, ShieldCheck } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

const items = [
  { icon: PenNib, title: 'Reads handwritten prescriptions too', text: 'Photograph a doctor\u2019s note or a printed lab report. SwasthIQ turns it into organised records you can search.', wide: true },
  { icon: Sparkle, title: 'Explains results in plain language', text: 'See what looks fine, what may need attention, and what to ask at your next visit.' },
  { icon: TrendUp, title: 'Shows trends, not just files', text: 'Compare hemoglobin or vitamin D across reports and see how they move over months.' },
  { icon: ShieldCheck, title: 'You approve every doctor request', text: 'Pick what to share and for how long: 24 hours, 7 days or 30 days. Revoke it any time.' },
];

export const WhySwasthIQ: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.15 });
  return (
    <section ref={ref} id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`max-w-2xl text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight mb-12 transition-all duration-600 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          Your reports stop living in WhatsApp chats and paper folders.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className={`rounded-3xl p-8 border ${it.wide ? 'md:col-span-3 bg-swasthiq-insight border-swasthiq-teal/25 md:flex md:items-center md:gap-8' : 'bg-swasthiq-card border-swasthiq-border shadow-soft'}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 md:mb-0 shrink-0 ${it.wide ? 'bg-swasthiq-teal text-white' : 'bg-swasthiq-insight text-swasthiq-teal'}`}>
                  <Icon size={26} weight="fill" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-swasthiq-text mb-2">{it.title}</h3>
                  <p className="text-swasthiq-text/75 leading-relaxed max-w-xl">{it.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
