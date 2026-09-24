/*
 * Copyright (c) 2026 Krish Sarvaiya. All rights reserved.
 * Proprietary. Not licensed for copying or reuse. See LICENSE in the repository root.
 */

import React from 'react';
import { HandHeart } from '@phosphor-icons/react';

export const FreeForAll: React.FC = () => {
  return (
    <section aria-label="Pricing" className="py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-swasthiq-insight border border-swasthiq-teal/25 p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 shadow-soft">
          {/* 48px teal icon tile */}
          <div className="w-12 h-12 rounded-2xl bg-swasthiq-teal text-white flex items-center justify-center shrink-0">
            <HandHeart size={26} weight="fill" />
          </div>

          <div className="flex-1 space-y-3 text-left">
            <h2 className="text-2xl font-extrabold text-swasthiq-text tracking-tight">
              SwasthIQ is free for everyone.
            </h2>
            <p className="text-sm sm:text-base text-swasthiq-text/75 max-w-xl leading-relaxed">
              Downloading and using SwasthIQ costs nothing. Keep your family&apos;s health records in one place without paying for it.
            </p>

            {/* Three small pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="rounded-full bg-white border border-swasthiq-border px-3 py-1 text-xs font-semibold text-swasthiq-text">
                Free to download
              </span>
              <span className="rounded-full bg-white border border-swasthiq-border px-3 py-1 text-xs font-semibold text-swasthiq-text">
                Free to use
              </span>
              <span className="rounded-full bg-white border border-swasthiq-border px-3 py-1 text-xs font-semibold text-swasthiq-text">
                Open to everyone
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
