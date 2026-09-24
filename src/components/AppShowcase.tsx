import React, { useState } from 'react';
import { CaretLeft, CaretRight, Sparkle } from '@phosphor-icons/react';
import { useInView } from '../hooks/useInView';

interface ScreenItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export const AppShowcase: React.FC = () => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.12 });

  const screens: ScreenItem[] = [
    {
      id: 'dashboard',
      num: '01',
      title: 'Dashboard',
      subtitle: 'Your health at a glance.',
      description: 'Quickly access vital health scores, critical biomarker summaries, pending action cards, and recent records.',
      image: '/assets/screens/01-dashboard.png',
      badge: 'Home Hub',
    },
    {
      id: 'upload',
      num: '02',
      title: 'Upload & Add Records',
      subtitle: 'Add your health information.',
      description: 'Easily upload laboratory reports, prescriptions, and radiology scans with camera capture or file selection.',
      image: '/assets/screens/02-upload.png',
      badge: 'Smart Intake',
    },
    {
      id: 'records',
      num: '03',
      title: 'Medical Records',
      subtitle: 'Keep your records organized.',
      description: 'Universal medical vault categorized by specialty, date, and doctor with instant document preview and search.',
      image: '/assets/screens/03-records.png',
      badge: 'Vault Storage',
    },
    {
      id: 'ai-analysis',
      num: '04',
      title: 'AI Health Analysis',
      subtitle: 'Understand your health information.',
      description: 'Automated biomarker extraction translates complex clinical test numbers into plain-language health explanations.',
      image: '/assets/screens/04-ai-analysis.png',
      badge: 'Biomarker Intelligence',
    },
    {
      id: 'journey',
      num: '05',
      title: 'Health Journey',
      subtitle: 'Follow your health story.',
      description: 'Chronological timeline tracking health milestones, medication adherence, and routine check-ins over time.',
      image: '/assets/screens/05-health-journey.png',
      badge: 'Longitudinal View',
    },
    {
      id: 'doctor-access',
      num: '06',
      title: 'Doctor Access',
      subtitle: 'Choose what you share.',
      description: 'Granular doctor request approval workflow allowing you to grant, review, or revoke access with one tap.',
      image: '/assets/screens/06-doctor-access.png',
      badge: 'Privacy & Consent',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex];

  const nextScreen = () => {
    setActiveIndex((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="py-12 md:py-16 bg-swasthiq-bg border-y border-swasthiq-border/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with smooth entrance */}
        <div
          className={`text-center max-w-3xl mx-auto mb-8 space-y-3 transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-swasthiq-insight text-swasthiq-teal text-xs font-bold uppercase tracking-wider">
            <Sparkle size={14} weight="fill" />
            <span>Interactive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-swasthiq-text tracking-tight">
            Real App Showcase
          </h2>
          <p className="text-base sm:text-lg text-swasthiq-text/75">
            Explore the real screens and interactions built for SwasthIQ Android Beta.
          </p>
        </div>

        {/* Tab Navigation Buttons with subtle micro-interactions */}
        <div
          style={{ transitionDelay: '100ms' }}
          className={`flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2.5 no-scrollbar transition-all duration-600 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {screens.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95 ${
                  isActive
                    ? 'bg-swasthiq-text text-white shadow-md'
                    : 'bg-swasthiq-card text-swasthiq-text/80 hover:bg-swasthiq-insight/80 hover:border-swasthiq-teal/40 border border-swasthiq-border'
                }`}
              >
                <span className={isActive ? 'text-swasthiq-teal font-extrabold' : 'text-swasthiq-muted'}>
                  {item.num}
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Stage */}
        <div
          style={{ transitionDelay: '180ms' }}
          className={`bg-swasthiq-card rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-swasthiq-border shadow-card transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content / Info with Smooth Key-Based Crossfade */}
            <div key={`info-${activeScreen.id}`} className="lg:col-span-5 space-y-6 animate-screen-enter">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swasthiq-insight text-swasthiq-teal text-xs font-bold">
                <span>Screen {activeScreen.num} of 06</span>
                <span>•</span>
                <span>{activeScreen.badge}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-swasthiq-text mb-2">
                  {activeScreen.title}
                </h3>
                <p className="text-lg font-semibold text-swasthiq-teal">
                  {activeScreen.subtitle}
                </p>
              </div>

              <p className="text-base text-swasthiq-text/75 leading-relaxed font-normal">
                {activeScreen.description}
              </p>

              {/* Navigation Controls with Micro-Interactions */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={prevScreen}
                  aria-label="Previous screen"
                  className="w-11 h-11 rounded-full border border-swasthiq-border bg-swasthiq-bg hover:bg-swasthiq-insight/60 hover:border-swasthiq-teal/40 text-swasthiq-text flex items-center justify-center transition-all duration-150 transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-swasthiq-teal"
                >
                  <CaretLeft size={20} weight="bold" />
                </button>
                <button
                  onClick={nextScreen}
                  aria-label="Next screen"
                  className="w-11 h-11 rounded-full border border-swasthiq-border bg-swasthiq-bg hover:bg-swasthiq-insight/60 hover:border-swasthiq-teal/40 text-swasthiq-text flex items-center justify-center transition-all duration-150 transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-swasthiq-teal"
                >
                  <CaretRight size={20} weight="bold" />
                </button>
                <span className="text-xs font-bold text-swasthiq-muted ml-2">
                  Use arrows to cycle screens
                </span>
              </div>
            </div>

            {/* Right Screen Device Frame Mockup (Solid Stable Frame, Smooth Screen Transition) */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[min(340px,38vh)] min-w-[250px]">
                {/* Stationary Device Frame */}
                <div className="relative rounded-[2.5rem] p-3.5 bg-gradient-to-b from-swasthiq-border/90 via-white to-swasthiq-border/70 shadow-floating border border-swasthiq-border">
                  <div className="relative rounded-[2.1rem] overflow-hidden bg-swasthiq-bg border border-swasthiq-border/40 aspect-[9/19.5] pt-7">
                    {/* Top Notch Indicator */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#092A4A]/90 rounded-full z-20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-swasthiq-teal/70 mr-3" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>

                    {/* Smoothly Transitioning Screenshot (contain ensures 100% header visibility) */}
                    <img
                      key={activeScreen.image}
                      src={activeScreen.image}
                      alt={`SwasthIQ screen: ${activeScreen.title}`}
                      className="w-full h-full object-cover object-top animate-screen-enter will-change-transform"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
