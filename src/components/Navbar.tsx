import React, { useState, useEffect } from 'react';
import { List, X, DownloadSimple, ChatText } from '@phosphor-icons/react';
import { CONFIG } from '../config';

interface NavbarProps {
  onOpenFeedback: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFeedback }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'App Showcase', href: '#showcase' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 animate-fade-down ${
        scrolled
          ? 'bg-swasthiq-bg/90 backdrop-blur-md border-b border-swasthiq-border/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group transition-transform duration-200 hover:-translate-y-0.5">
            <img
              src="/assets/logo/swasthiq_logo_horizontal.png"
              alt="SwasthIQ Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-swasthiq-text/80 hover:text-swasthiq-teal transition-colors duration-200 nav-link-animated py-1"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenFeedback}
              className="text-sm font-semibold text-swasthiq-text/80 hover:text-swasthiq-teal transition-colors duration-200 flex items-center gap-1.5 nav-link-animated py-1 group"
            >
              <ChatText size={18} weight="bold" className="transition-transform duration-200 group-hover:scale-110" />
              <span>Feedback</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONFIG.androidBetaUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-swasthiq-teal hover:bg-swasthiq-tealHover shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] group"
            >
              <DownloadSimple size={18} weight="bold" className="transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Download Beta</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-swasthiq-text hover:bg-swasthiq-border/40 transition-colors focus:outline-none focus:ring-2 focus:ring-swasthiq-teal active:scale-95"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={26} weight="bold" />
              ) : (
                <List size={26} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-swasthiq-bg/95 backdrop-blur-xl border-b border-swasthiq-border px-4 pt-3 pb-6 space-y-3 shadow-soft animate-fade-down">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-semibold text-swasthiq-text hover:bg-swasthiq-card hover:text-swasthiq-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFeedback();
              }}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-base font-semibold text-swasthiq-text hover:bg-swasthiq-card hover:text-swasthiq-teal transition-colors text-left"
            >
              <ChatText size={20} weight="bold" />
              <span>Feedback</span>
            </button>
          </div>
          <div className="pt-2">
            <a
              href={CONFIG.androidBetaUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-base font-bold text-white bg-swasthiq-teal hover:bg-swasthiq-tealHover shadow-sm active:scale-[0.98] transition-all"
            >
              <DownloadSimple size={20} weight="bold" />
              <span>Download Android Beta</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
