import React from 'react';
import { UploadSimple, FolderOpen, Brain, Sparkle, ClockCounterClockwise, UserCheck } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

export const OnePlace: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.15 });

  const steps = [
    { title: 'Upload', icon: UploadSimple, desc: 'Add reports & scans' },
    { title: 'Organize', icon: FolderOpen, desc: 'Categorized vault' },
    { title: 'Analyze', icon: Brain, desc: 'Biomarker extraction' },
    { title: 'Understand', icon: Sparkle, desc: 'Clear plain insights' },
    { title: 'Track', icon: ClockCounterClockwise, desc: 'Longitudinal journey' },
    { title: 'Share', icon: UserCheck, desc: 'Doctor consent control' },
  ];

  return (
    <section
      ref={sectionRef}
      id="what-is-swasthiq"
      className="py-16 md:py-24 bg-swasthiq-card border-y border-swasthiq-border/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs sm:text-sm font-bold tracking-widest text-swasthiq-teal uppercase">
            What is SwasthIQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight">
            One place for your health.
          </h2>
          <p className="text-base sm:text-lg text-swasthiq-text/75 leading-relaxed font-normal">
            Upload your health records, understand your information, follow your health journey, and share what you choose.
          </p>
        </div>

        {/* Visual Lifecycle Flow: Upload -> Organize -> Analyze -> Understand -> Track -> Share */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                style={{
                  transitionDelay: isInView ? `${idx * 75}ms` : '0ms',
                }}
                className={`relative flex flex-col items-center text-center p-5 rounded-2xl bg-swasthiq-bg border border-swasthiq-border/60 hover:border-swasthiq-teal/50 hover:shadow-soft hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 group cursor-default ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-swasthiq-insight text-swasthiq-teal flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-swasthiq-teal group-hover:text-white transition-all duration-200">
                  <Icon size={24} weight="bold" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-swasthiq-muted">{idx + 1}.</span>
                  <h3 className="text-sm font-bold text-swasthiq-text">{step.title}</h3>
                </div>
                <p className="text-xs text-swasthiq-muted mt-1 leading-snug">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
