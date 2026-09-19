import React from 'react';
import { DownloadSimple, AndroidLogo, ChatText } from '@phosphor-icons/react';
import { CONFIG } from '../config';
import { useInView } from '../hooks/useInView';

interface BetaCTAProps {
  onOpenFeedback: () => void;
}

export const BetaCTA: React.FC<BetaCTAProps> = ({ onOpenFeedback }) => {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-swasthiq-bg via-swasthiq-insight/30 to-swasthiq-bg pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-[2.5rem] bg-gradient-to-br from-[#092A4A] via-[#0D3860] to-[#092A4A] text-white p-8 sm:p-14 lg:p-16 shadow-floating text-center overflow-hidden border border-swasthiq-border/20 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-8'
          }`}
        >
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-swasthiq-teal/20 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-swasthiq-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-swasthiq-teal text-xs sm:text-sm font-bold tracking-wide uppercase">
              <AndroidLogo size={18} weight="fill" />
              <span>Android Beta Testing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to explore SwasthIQ?
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed">
              Install the latest Android Beta release to organize your medical records, review biomarker intelligence, and help shape the future of patient healthcare.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={CONFIG.androidBetaUrl}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-swasthiq-teal hover:bg-swasthiq-tealHover shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] group ${
                  isInView ? 'animate-attention-cue' : ''
                }`}
              >
                <DownloadSimple size={22} weight="bold" className="transition-transform duration-200 group-hover:translate-y-0.5" />
                <span>Download Android Beta</span>
              </a>

              <button
                type="button"
                onClick={onOpenFeedback}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <ChatText size={20} weight="bold" />
                <span>Share Feedback</span>
              </button>
            </div>

            <p className="text-xs text-white/60 pt-3">
              Requires Android 8.0 (API 26) or newer. Free during the public beta test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
