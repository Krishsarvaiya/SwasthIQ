import React from 'react';
import { DownloadSimple, ArrowUp } from '@phosphor-icons/react';
import { CONFIG } from '../config';
import { useInView } from '../hooks/useInView';

interface FooterProps {
  onOpenFeedback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFeedback }) => {
  const [footerRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className={`bg-swasthiq-card border-t border-swasthiq-border py-12 md:py-16 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-swasthiq-border/60">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <a href="#home" className="inline-block transition-transform duration-200 hover:-translate-y-0.5">
              <img
                src="/assets/logo/swasthiq_logo_horizontal.png"
                alt="SwasthIQ Logo"
                className="h-9 w-auto mx-auto md:mx-0 object-contain"
              />
            </a>
            <p className="text-sm font-semibold text-swasthiq-text/75">
              Your Health. Your Records. Your Intelligence.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-semibold text-swasthiq-text/70">
            <a href="#home" className="hover:text-swasthiq-teal transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="hover:text-swasthiq-teal transition-colors duration-200">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-swasthiq-teal transition-colors duration-200">
              How It Works
            </a>
            <a href="#showcase" className="hover:text-swasthiq-teal transition-colors duration-200">
              App Showcase
            </a>
            <button
              onClick={onOpenFeedback}
              className="hover:text-swasthiq-teal transition-colors duration-200"
            >
              Feedback
            </button>
            <a
              href={CONFIG.androidBetaUrl}
              className="text-swasthiq-teal hover:underline inline-flex items-center gap-1 group transition-colors duration-200"
            >
              <DownloadSimple size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Download Beta</span>
            </a>
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-swasthiq-bg border border-swasthiq-border flex items-center justify-center text-swasthiq-text hover:text-swasthiq-teal hover:border-swasthiq-teal hover:shadow-soft transition-all duration-150 transform hover:-translate-y-0.5 active:scale-90"
          >
            <ArrowUp size={18} weight="bold" />
          </button>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-swasthiq-muted text-center sm:text-left">
          <p>© {new Date().getFullYear()} SwasthIQ. All rights reserved. Public Beta Release.</p>
          <p>Designed for Android Beta testers to organize and track health information.</p>
        </div>
      </div>
    </footer>
  );
};
