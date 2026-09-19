import React from 'react';
import { UserCirclePlus, FilePlus, Sparkle, ShareNetwork } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

export const HowItWorks: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.15 });

  const steps = [
    {
      num: '01',
      title: 'Create your account',
      desc: 'Set up your private health profile with your basic details.',
      icon: UserCirclePlus,
    },
    {
      num: '02',
      title: 'Add your health records',
      desc: 'Upload past blood tests, prescriptions, and medical files in seconds.',
      icon: FilePlus,
    },
    {
      num: '03',
      title: 'Understand your health',
      desc: 'View synthesized biomarker insights and long-term health trends.',
      icon: Sparkle,
    },
    {
      num: '04',
      title: 'Share when you choose',
      desc: 'Approve time-limited access requests from your doctor when needed.',
      icon: ShareNetwork,
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 space-y-3 transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs sm:text-sm font-bold tracking-widest text-swasthiq-teal uppercase">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-swasthiq-text/75">
            Four clear steps to take ownership of your health records.
          </p>
        </div>

        {/* 4 Steps Grid with Visual Connector */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector Line for Desktop */}
          <div
            className={`hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-swasthiq-teal/20 via-swasthiq-teal to-swasthiq-blue/20 -z-0 transition-opacity duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                style={{
                  transitionDelay: isInView ? `${idx * 85}ms` : '0ms',
                }}
                className={`relative z-10 flex flex-col items-center text-center p-6 rounded-3xl bg-swasthiq-card border border-swasthiq-border shadow-soft hover:shadow-card hover:border-swasthiq-teal/50 hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 group cursor-default ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-2xl bg-swasthiq-insight text-swasthiq-teal flex items-center justify-center mb-5 border-2 border-white shadow-soft group-hover:scale-110 group-hover:bg-swasthiq-teal group-hover:text-white transition-all duration-200">
                  <Icon size={30} weight="fill" />
                </div>

                {/* Step Number Tag */}
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-extrabold text-swasthiq-teal bg-swasthiq-insight mb-2 transition-colors duration-200 group-hover:bg-swasthiq-teal group-hover:text-white">
                  Step {step.num}
                </span>

                <h3 className="text-lg font-bold text-swasthiq-text mb-2 group-hover:text-swasthiq-teal transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-sm text-swasthiq-text/70 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
