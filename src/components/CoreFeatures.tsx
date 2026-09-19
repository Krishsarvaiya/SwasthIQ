import React from 'react';
import { UploadSimple, Sparkle, TrendUp, ShieldCheck, ArrowRight } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

export const CoreFeatures: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.15 });

  const features = [
    {
      title: 'Upload & Organize',
      description: 'Add your health records and keep them organized.',
      icon: UploadSimple,
      tag: 'Records Vault',
      color: 'teal',
    },
    {
      title: 'AI Health Analysis',
      description: 'Understand your health information through AI-powered insights.',
      icon: Sparkle,
      tag: 'Intelligence',
      color: 'blue',
    },
    {
      title: 'Health Journey',
      description: 'Follow your health information and important events over time.',
      icon: TrendUp,
      tag: 'Timeline',
      color: 'teal',
    },
    {
      title: 'Doctor Access',
      description: 'Choose what information you want to share with your doctor.',
      icon: ShieldCheck,
      tag: 'Consent Control',
      color: 'blue',
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 space-y-3 transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs sm:text-sm font-bold tracking-widest text-swasthiq-teal uppercase">
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight">
            Designed for Clarity &amp; Control
          </h2>
          <p className="text-base sm:text-lg text-swasthiq-text/75">
            Every feature is focused on making your health records easy to access, understand, and share.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  transitionDelay: isInView ? `${idx * 90}ms` : '0ms',
                }}
                className={`flex flex-col justify-between p-7 rounded-3xl bg-swasthiq-card border border-swasthiq-border shadow-soft hover:shadow-card hover:border-swasthiq-teal/50 hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 group cursor-default ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-swasthiq-insight text-swasthiq-teal flex items-center justify-center group-hover:scale-110 group-hover:bg-swasthiq-teal group-hover:text-white transition-all duration-200">
                      <Icon size={26} weight="fill" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-swasthiq-bg text-swasthiq-muted border border-swasthiq-border/60 group-hover:border-swasthiq-teal/30 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-swasthiq-text mb-2.5 group-hover:text-swasthiq-teal transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-swasthiq-text/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-swasthiq-border/40 flex items-center text-xs font-bold text-swasthiq-teal group-hover:translate-x-1.5 transition-transform duration-200">
                  <span>Learn more</span>
                  <ArrowRight size={14} className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" weight="bold" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
