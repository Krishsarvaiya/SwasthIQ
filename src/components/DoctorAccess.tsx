import React from 'react';
import { UserCheck, HandWaving, SlidersHorizontal, LockKey } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

export const DoctorAccess: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.15 });

  const steps = [
    {
      title: 'Doctor requests access',
      desc: 'Your verified doctor sends an explicit request using your SwasthIQ ID.',
      icon: HandWaving,
    },
    {
      title: 'You review the request',
      desc: 'You receive an instant notification with the doctor’s clinic and credentials.',
      icon: UserCheck,
    },
    {
      title: 'You choose what to share',
      desc: 'Select only the specific records or categories you wish to disclose.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Access is granted',
      desc: 'Time-delimited, encrypted viewing access is safely provided to your physician.',
      icon: LockKey,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-swasthiq-card border-y border-swasthiq-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Flow */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-600 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-swasthiq-insight text-swasthiq-teal text-xs font-bold uppercase tracking-wider">
              <LockKey size={14} weight="fill" />
              <span>Patient Sovereignty</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight">
              Doctor Access on Your Terms
            </h2>

            <p className="text-base sm:text-lg text-swasthiq-text/75 leading-relaxed font-normal">
              Doctors never gain automatic visibility into your medical history. Every shared record requires your review and explicit permission.
            </p>

            {/* Step-by-Step Consent Flow */}
            <div className="space-y-4 pt-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    style={{
                      transitionDelay: isInView ? `${idx * 80}ms` : '0ms',
                    }}
                    className={`flex items-start gap-4 p-4 rounded-2xl bg-swasthiq-bg border border-swasthiq-border/60 hover:border-swasthiq-teal/50 hover:shadow-soft hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 group cursor-default ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-swasthiq-insight text-swasthiq-teal flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-swasthiq-teal group-hover:text-white transition-all duration-200">
                      <Icon size={22} weight="bold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-swasthiq-teal">0{idx + 1}</span>
                        <h3 className="text-base font-bold text-swasthiq-text group-hover:text-swasthiq-teal transition-colors duration-200">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-swasthiq-text/70 mt-1 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual / Real Consent UI Mockup */}
          <div
            style={{ transitionDelay: '150ms' }}
            className={`lg:col-span-5 flex justify-center transition-all duration-700 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
              <div className="relative rounded-[2.5rem] p-3.5 bg-gradient-to-b from-swasthiq-border/90 via-white to-swasthiq-border/70 shadow-floating border border-swasthiq-border">
                <div className="relative rounded-[2.1rem] overflow-hidden bg-swasthiq-bg border border-swasthiq-border/40 aspect-[9/19.5]">
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#092A4A]/90 rounded-full z-20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-swasthiq-teal/70 mr-3" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>

                  {/* Real Doctor Consent Screen */}
                  <img
                    src="/assets/screens/06-doctor-access.png"
                    alt="SwasthIQ Doctor Access Consent Screen"
                    className="w-full h-full object-contain object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
