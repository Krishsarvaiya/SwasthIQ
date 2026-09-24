/*
 * Copyright (c) 2026 Krish Sarvaiya. All rights reserved.
 * Proprietary. Not licensed for copying or reuse. See LICENSE in the repository root.
 */

import React, { useState, useEffect } from 'react';
import { DownloadSimple, ArrowRight, ShieldCheck, Sparkle, Gift } from '@phosphor-icons/react';
import { CONFIG } from '../config';
import { LotusMark } from './LotusMark';
import { PhoneScreen } from './PhoneScreen';

export const Hero: React.FC = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Check if device has a fine pointer (desktop mouse) and no reduced motion preference
    if (typeof window !== 'undefined') {
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      const noReducedMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setHasMouse(finePointer && noReducedMotion);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!hasMouse) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    setParallax({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-8 md:pt-32 md:pb-12 overflow-hidden"
    >
      {/* Subtle Background Glow with ambient pulse and subtle parallax */}
      <div
        style={{
          transform: hasMouse ? `translate3d(calc(-50% + ${parallax.x * 6}px), ${parallax.y * 6}px, 0)` : 'translateX(-50%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="absolute top-20 left-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-swasthiq-teal/10 via-swasthiq-insight/60 to-swasthiq-blue/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-soft"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column with Staggered Entrances */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Beta Badge */}
            <div
              style={{ animationDelay: '60ms' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-swasthiq-insight border border-swasthiq-teal/20 text-swasthiq-teal text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm animate-fade-up opacity-0"
            >
              <span className="w-2 h-2 rounded-full bg-swasthiq-teal animate-pulse" />
              <span>Android Beta • Currently In Testing</span>
            </div>

            {/* Headline */}
            <h1
              style={{ animationDelay: '140ms' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-swasthiq-text leading-[1.12] animate-fade-up opacity-0"
            >
              Your Health. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-swasthiq-teal via-swasthiq-teal to-swasthiq-blue">
                Your Records.
              </span> <br />
              Your Intelligence.
            </h1>

            {/* Supporting Copy */}
            <p
              style={{ animationDelay: '220ms' }}
              className="text-lg sm:text-xl text-swasthiq-text/75 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed animate-fade-up opacity-0"
            >
              Upload your health records, understand your information through AI insights, follow your health journey over time, and share with your doctor on your own terms.
            </p>

            {/* CTA Group with Micro-interactions */}
            <div
              style={{ animationDelay: '300ms' }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 animate-fade-up opacity-0"
            >
              <a
                href={CONFIG.androidBetaUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-swasthiq-teal hover:bg-swasthiq-tealHover shadow-floating hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] group"
              >
                <DownloadSimple size={22} weight="bold" className="transition-transform duration-200 group-hover:translate-y-0.5" />
                <span>Download Android Beta</span>
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-swasthiq-text bg-swasthiq-card hover:bg-swasthiq-insight/60 border border-swasthiq-border shadow-soft hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-[0.98] group"
              >
                <span>Explore SwasthIQ</span>
                <ArrowRight size={18} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>
            </div>

            <p
              style={{ animationDelay: '340ms' }}
              className="text-sm font-semibold text-swasthiq-teal text-center lg:text-left pt-1 animate-fade-up opacity-0"
            >
              Free for everyone. No payment needed.
            </p>

            {/* Key Micro-trust Highlights */}
            <div
              style={{ animationDelay: '380ms' }}
              className="pt-6 border-t border-swasthiq-border/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0 animate-fade-up opacity-0"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-swasthiq-text/70">
                <ShieldCheck size={20} className="text-swasthiq-teal shrink-0" weight="fill" />
                <span>Patient-controlled consent</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-swasthiq-text/70">
                <Sparkle size={20} className="text-swasthiq-teal shrink-0" weight="fill" />
                <span>AI biomarker insights</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-swasthiq-text/70 col-span-2 sm:col-span-1">
                <Gift size={20} className="text-swasthiq-teal shrink-0" weight="fill" />
                <span>Free for everyone</span>
              </div>
            </div>
          </div>

          {/* Right Phone Showcase Column with Gentle Float & Desktop Parallax */}
          <div
            style={{ animationDelay: '260ms' }}
            className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right opacity-0"
          >
            <div
              style={{
                transform: hasMouse ? `translate3d(${parallax.x * 5}px, ${parallax.y * 5}px, 0)` : 'none',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative w-full max-w-[min(340px,38vh)] min-w-[250px]"
            >
              {/* Lotus Mark Emblem behind the phone */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] max-w-[90vw] pointer-events-none -z-10 opacity-[0.16]"
              >
                <LotusMark />
              </div>

              {/* Gentle Floating Wrapper */}
              <div className="animate-float-subtle">
                {/* Phone Frame */}
                <div className="relative rounded-[2.5rem] p-3 bg-gradient-to-b from-swasthiq-border/80 via-white to-swasthiq-border/60 shadow-floating border border-swasthiq-border">
                  <div className="relative rounded-[2.1rem] overflow-hidden bg-swasthiq-bg border border-swasthiq-border/40 aspect-[9/19.5]">
                    {/* Top Notch / Dynamic Island indicator */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#092A4A]/90 rounded-full z-20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-swasthiq-teal/70 mr-3" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>

                    {/* Real Dashboard Screenshot with PhoneScreen */}
                    <PhoneScreen
                      src="/assets/screens/01-dashboard.png"
                      alt="SwasthIQ Real Dashboard Screen"
                      loading="eager"
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
